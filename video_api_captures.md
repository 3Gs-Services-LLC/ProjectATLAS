# SUPPLEMENTAL HANDOFF

## Recovered Evidence From `video_api_captures.json`

### STATUS OF ORIGINAL FILE

The original Playwright network-capture file:

`video_api_captures.json`

is no longer available to the project.

This document exists specifically to transfer the **verified technical findings previously extracted from that capture** to Claude Code.

Claude must **not assume the original JSON file is still available**.

This is a supplemental handoff to the primary INDOT/Castle Rock technician-notes document.

---

# 1. WHAT `video_api_captures.json` WAS

The file was produced during a Playwright investigation of the real INDOT/511IN traffic-camera website.

The browser session was instrumented to capture network traffic.

The capture was specifically filtered for traffic-camera-related requests, including:

```text
GraphQL
skysfs
trafficwise
public.carsprogram.org
preroll
.m3u8
.ts
/api/
```

The purpose was to determine exactly how the public 511IN website obtains and plays live camera video.

This investigation successfully found the actual camera-to-HLS resolution path.

---

# 2. MOST IMPORTANT DISCOVERY

The public 511IN application obtains camera information through a GraphQL request.

The response contains a collection identified as:

```text
cameraViews
```

Individual camera objects were observed containing fields including:

```text
category
lastUpdated
title
uri
url
sources
```

A camera was observed with:

```text
category: VIDEO
```

The `sources` array contained media-source information.

A source was observed with:

```text
type: application/x-mpegURL
```

and an HLS URL in:

```text
src
```

This was the critical discovery.

The public website was therefore **not constructing the HLS stream blindly from the camera name**.

The GraphQL response itself provided the media source.

---

# 3. VERIFIED DATA FLOW

The recovered network investigation established this chain:

```text
511IN public web application
        ↓
GraphQL request
        ↓
cameraViews
        ↓
individual camera object
        ↓
sources[]
        ↓
application/x-mpegURL
        ↓
src
        ↓
HLS playlist URL
        ↓
skysfs3 / skysfs4.trafficwise.org
        ↓
/preroll/<camera-id>/playlist.m3u8
        ↓
HLS playlist
        ↓
.ts media segments
        ↓
video player
```

This is a **verified observation**, not a theoretical architecture.

---

# 4. REAL HLS URL PATTERN OBSERVED

The HLS sources followed this pattern:

```text
https://skysfs3.trafficwise.org:443/preroll/<CAMERA_ID>/playlist.m3u8
```

or:

```text
https://skysfs4.trafficwise.org:443/preroll/<CAMERA_ID>/playlist.m3u8
```

The hostname was therefore not always identical.

Known observed hosts:

```text
skysfs3.trafficwise.org
skysfs4.trafficwise.org
```

Production code must use the actual `sources[].src` value supplied by the camera API.

Do NOT assume:

```text
skysfs3
```

for every camera.

Do NOT assume:

```text
skysfs4
```

for every camera.

---

# 5. VERIFIED CAMERA — INDOT_16

One of the strongest direct verification cases was:

```text
INDOT_16_Wj8lHnkrc6f0ZS1e
```

The GraphQL camera information resolved to an HLS source hosted on:

```text
skysfs4.trafficwise.org
```

The resulting playlist followed:

```text
/preroll/INDOT_16_Wj8lHnkrc6f0ZS1e/playlist.m3u8
```

The playlist was requested directly.

Result:

```text
HTTP 200
```

The returned response contained:

```text
#EXTM3U
```

and HLS playlist information.

The playlist referenced MPEG-TS media segments.

The browser subsequently requested those `.ts` segments.

Those segment requests also returned:

```text
HTTP 200
```

This proves the source was not merely a stale URL discovered in source code.

It was an actually reachable live HLS stream at the time of testing.

---

# 6. OTHER REAL CAMERA IDS OBSERVED

Other real camera identifiers observed during the capture investigation included:

```text
INDOT_350_1JKQnmnC3ZG5eUZZ
```

and:

```text
INDOT_523_KKCHR3Q2DKgnYwfG
```

These identifiers came from actual camera data observed during the investigation.

They are not fabricated test IDs.

One observed camera source used:

```text
skysfs3.trafficwise.org
```

while another verified example used:

```text
skysfs4.trafficwise.org
```

---

# 7. WHAT THE GRAPHQL RESPONSE PROVED

The capture established that the camera API can provide enough information to resolve live video without scraping the rendered video player.

The important conceptual object was:

```text
cameraViews[]
```

with a camera containing something conceptually equivalent to:

```text
{
    category: "VIDEO",
    lastUpdated: "...",
    title: "...",
    uri: "...",
    url: "...",
    sources: [
        {
            type: "application/x-mpegURL",
            src: "https://skysfs....trafficwise.org:443/preroll/.../playlist.m3u8"
        }
    ]
}
```

The exact complete GraphQL schema should NOT be reconstructed from this conceptual representation.

Only the fields actually observed should be treated as established.

---

# 8. GRAPHQL IS MORE IMPORTANT THAN THE HTML PAGE

The investigation demonstrated that the public website is acting as a client.

The visible camera page is not the fundamental source of the live video.

The browser performs network operations which produce:

```text
camera metadata
+
media source
```

The local application therefore does not need to scrape the visible 511IN camera page if it can reproduce the underlying API request.

This was one of the major architectural discoveries.

---

# 9. VIDEO.JS OBSERVATION

The public 511IN implementation was observed using:

```text
Video.js
```

The local Electron application uses:

```text
hls.js
```

This distinction is important.

The public application proves that the returned HLS source is intended to be consumed by a browser video player.

The local application can use hls.js against the same actual source.

There is no evidence that Video.js itself is required to obtain the stream.

---

# 10. DIRECT PLAYBACK VERIFICATION

The investigation went beyond inspecting API responses.

The HLS source was directly tested.

Verification sequence:

```text
GraphQL camera response
        ↓
extract sources[].src
        ↓
request playlist.m3u8
        ↓
HTTP 200
        ↓
inspect HLS response
        ↓
#EXTM3U present
        ↓
identify .ts segments
        ↓
browser requests .ts segments
        ↓
HTTP 200
        ↓
actual browser playback
```

This is the strongest evidence recovered from the lost capture.

---

# 11. WHAT THIS RULES OUT

The following assumptions were effectively disproven by the investigation:

### "The stream is hidden behind the webpage."

Not necessarily.

The underlying HLS source was discovered through network traffic.

### "The video is just an embedded YouTube/video player."

No.

The application was receiving a real HLS source.

### "We need to screen-scrape the 511IN page."

Not for the proven camera-source path.

### "The HLS URL is hypothetical."

No.

It was requested and returned HTTP 200.

### "The `.m3u8` file exists but does not actually contain playable media."

False for the tested camera.

The playlist referenced real `.ts` segments which were successfully requested.

---

# 12. TOKEN / AUTHENTICATION FINDING

The investigation did NOT establish that every camera requires authentication.

For the cameras directly tested, the HLS playlist was reachable without an obvious authentication token being present in the visible HLS URL.

Therefore the correct statement is:

> Direct HLS playback was verified for tested cameras without an obvious authentication token in the observed playlist URL.

Do NOT turn this into:

> "INDOT cameras require no authentication."

That broader claim was never proven.

---

# 13. SOURCE EXPIRATION

The complete lifetime/expiration behavior of the HLS URLs was NOT established.

Unknown:

* whether URLs expire
* how long they remain valid
* whether they are regenerated
* whether source URLs change
* whether different cameras behave differently
* whether the public client refreshes sources periodically
* whether `startBy` participates in source refresh

The public application contained behavior related to refreshing/starting camera sources, but the complete lifecycle was not reverse-engineered.

Therefore the local application should treat the API-provided source as authoritative and be prepared to reacquire it if playback fails due to a stale source.

---

# 14. `startBy` / TOKEN LOGIC

The public client contained logic associated with camera startup/source behavior including concepts referred to during investigation as:

```text
startBy
token
source refresh
```

However, the exact protocol was not completely documented.

Claude must not invent the missing details.

If future debugging requires this behavior:

1. capture the current public website network traffic again
2. compare initial camera load
3. wait for source changes
4. switch cameras
5. inspect refresh requests
6. inspect request headers
7. inspect request bodies
8. inspect response payloads
9. determine whether source URLs change
10. only then implement refresh logic

---

# 15. PUBLIC CAMERA THUMBNAILS / IMAGES

Network capture also identified:

```text
public.carsprogram.org
```

in camera-related resources.

The camera API exposed URL/thumbnail information.

The CCTV XML feed also contained:

```text
still-images
```

Therefore camera imagery exists independently of live HLS.

Do not assume the still image and live HLS URL are generated by the same endpoint.

---

# 16. IMPORTANT DOMAIN DISTINCTION

The recovered investigation encountered several different domains.

### `511in.org`

Public traffic-information application/API environment.

### `trafficwise.org`

Observed HLS delivery infrastructure.

Specifically:

```text
skysfs3.trafficwise.org
skysfs4.trafficwise.org
```

### `carsprogram.org`

Observed public camera-related resources.

Specifically:

```text
public.carsprogram.org
```

These should not be treated as interchangeable.

---

# 17. WHAT THE LOCAL ELECTRON APPLICATION SHOULD DO

The preferred flow is:

```text
Electron main process
        ↓
511IN GraphQL
        ↓
cameraViews
        ↓
normalize cameras
        ↓
renderer
        ↓
select camera
        ↓
take actual source.src
        ↓
hls.js
        ↓
video element
```

The renderer should not fabricate HLS URLs unless there is a demonstrated reason to do so.

---

# 18. EXISTING LOCAL ELECTRON BRIDGE

The local project already had:

```text
window.api.fetchCameras()
```

The renderer calls the bridge.

The main process performs the camera retrieval.

The preload exposes the controlled API.

Therefore the previously discovered GraphQL resolution belongs logically in the main-process/API layer rather than being duplicated across UI components.

---

# 19. PLAYBACK DEBUGGING IMPLICATION

If:

```text
GraphQL works
AND
sources[].src exists
AND
m3u8 returns 200
AND
.ts segments return 200
```

but the Electron application does not display video:

**Do not immediately investigate INDOT/Castle Rock.**

Investigate the local application.

Likely areas:

```text
hls.js initialization
video element
renderer lifecycle
Electron security policy
CORS
player cleanup
duplicate players
DOM/layout
autoplay
media attachment
```

The upstream source has already been proven independently.

---

# 20. LIVE PREVIEW OVERLAP INVESTIGATION

The lost capture is separate from the later renderer-layout investigation.

The live preview/list view had a bug where multiple live streams visually overlapped.

Remote debugging was performed through:

```text
9222
```

The investigation inspected:

```text
videoCount
cameraItems
listRect
videoWrapRect
```

as well as DOM/computed style information.

Artifacts from that later investigation included:

```text
last-screenshot.png
inspectListView.json
```

The important lesson:

When a stream visually overlaps another stream, inspect actual DOM geometry and player count before modifying CSS blindly.

---

# 21. DO NOT CONFUSE TWO DIFFERENT PROBLEMS

### Upstream camera-resolution problem

```text
GraphQL
→ cameraViews
→ sources
→ HLS
```

### Local renderer/layout problem

```text
camera objects
→ DOM
→ video elements
→ CSS/layout
```

The project has investigated both.

They are separate layers.

---

# 22. KNOWN VERIFIED CAMERA TEST SET

Use these real IDs for diagnostic purposes when the upstream API currently exposes them:

```text
INDOT_16_Wj8lHnkrc6f0ZS1e
INDOT_350_1JKQnmnC3ZG5eUZZ
INDOT_523_KKCHR3Q2DKgnYwfG
```

Do not assume all remain online permanently.

Do not fabricate replacement IDs if one is unavailable.

Instead query the current real API for a current camera.

---

# 23. RECONSTRUCTION IF NETWORK DISCOVERY MUST BE REPEATED

If Claude determines that additional evidence is required, repeat the same methodology:

### Step 1

Launch the real 511IN website.

### Step 2

Instrument Playwright before loading the camera interface.

### Step 3

Capture:

```text
fetch
XHR
GraphQL
media
.m3u8
.ts
```

### Step 4

Locate the GraphQL camera request.

### Step 5

Save the complete request:

```text
URL
method
headers
body
```

### Step 6

Save the complete response.

### Step 7

Locate:

```text
cameraViews
```

### Step 8

Locate:

```text
sources
```

### Step 9

Extract:

```text
type
src
```

### Step 10

Request the HLS playlist independently.

### Step 11

Verify:

```text
HTTP 200
#EXTM3U
segments
```

### Step 12

Verify actual media segments.

### Step 13

Verify actual playback.

Only after these steps should any missing behavior be considered unresolved.

---

# 24. EVIDENCE STATUS

## VERIFIED

* Playwright captured real 511IN network traffic.
* GraphQL was observed.
* `cameraViews` was observed.
* Camera objects contained video metadata.
* `sources` was observed.
* `application/x-mpegURL` was observed.
* `src` contained an HLS URL.
* `skysfs3.trafficwise.org` was observed.
* `skysfs4.trafficwise.org` was observed.
* Real `playlist.m3u8` resources were requested.
* HLS playlist returned HTTP 200 for tested cameras.
* `#EXTM3U` was present.
* `.ts` segments were present.
* `.ts` requests returned HTTP 200.
* Real browser playback was achieved.
* Multiple real INDOT camera IDs were observed.

## NOT FULLY VERIFIED

* Exact complete GraphQL schema.
* Complete GraphQL authentication requirements.
* Complete token lifecycle.
* Complete source-expiration behavior.
* Exact purpose of every startup/refresh mechanism.
* Whether every camera behaves identically.
* Complete XML ↔ GraphQL mapping.

## UNKNOWN

* Complete undocumented Castle Rock backend.
* All possible camera endpoints.
* All possible media protocols.
* Long-term HLS URL validity.
* Complete production rate limits.

---

# 25. CRITICAL MEMORY TO PRESERVE

The single most important finding from the lost capture is:

**The INDOT/511IN camera system exposes real camera-view data through GraphQL, and the camera object can contain an `application/x-mpegURL` source whose `src` points directly to a Trafficwise `skysfs3` or `skysfs4` HLS playlist.**

That playlist was independently requested and proven playable.

Therefore the local application has a legitimate, experimentally verified path to real INDOT camera video without depending on the visual 511IN webpage.

The proven chain is:

```text
REAL INDOT CAMERA
        ↓
511IN / CASTLE ROCK SYSTEM
        ↓
GRAPHQL
        ↓
cameraViews
        ↓
sources[]
        ↓
application/x-mpegURL
        ↓
src
        ↓
skysfs3 / skysfs4
        ↓
playlist.m3u8
        ↓
.ts segments
        ↓
REAL LIVE VIDEO
```

This supplemental handoff exists because the original:

```text
video_api_captures.json
```

is no longer available.

Claude should use this document as the **recovered memory of that investigation**, while understanding that it does not replace the original raw capture file.

If an exact request body, header, GraphQL query string, or complete JSON payload is required, it must be **re-captured from the live system rather than invented from memory**.
