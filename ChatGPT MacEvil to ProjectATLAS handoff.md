# INDOT Traffic Camera / Castle Rock ITS — Technician Handoff & Verified System Memory

## PURPOSE

This document is the technical memory handoff for the INDOT Traffic Camera Viewer project.

The receiving engineer/AI is **Claude Code running Claude Opus 5**.

The purpose is to give Claude the accumulated project knowledge from previous investigation and implementation sessions so it does not restart discovery, repeat already-proven experiments, invent undocumented behavior, or regress working functionality.

This document is evidence-based.

### HARD RULES

1. **NEVER GUESS.**
2. **NEVER USE MOCK DATA.**
3. **NEVER INVENT API responses, camera IDs, HLS URLs, credentials, fields, adapters, or capabilities.**
4. If something has not been verified, label it **UNVERIFIED**.
5. Preserve working behavior before refactoring.
6. Prefer real INDOT/Castle Rock data over synthetic test fixtures.
7. The objective is a private/local traffic-camera viewer, not a clone of the public 511 website.
8. The initial geographic focus is Indiana.
9. The application should ultimately be capable of supporting public traffic cameras beyond Indiana, but INDOT is the proven starting source.
10. When changing the application, inspect the existing implementation first.
11. Do not remove working functionality merely because a cleaner architecture is possible.
12. When debugging playback, verify the complete chain rather than assuming the renderer is the source of the problem.

---

# 1. SYSTEM IDENTIFICATION

## INDOT

Indiana Department of Transportation.

INDOT's public traffic/traveler-information ecosystem uses the CARS platform and 511IN.

INDOT officially states that CARS is the platform used to collect data supporting 511IN.

INDOT also states that traffic cameras can be accessed through its travel-information/CARS system.

## CASTLE ROCK ITS

Castle Rock ITS / Castle Rock Associates is the technology provider behind the CARS ecosystem and the INDOT Trafficwise application.

The official INDOT Trafficwise mobile application identifies Castle Rock ITS/Associates as the developer.

Castle Rock's CARS product is its roadway event and condition-management platform.

This distinction matters:

* INDOT is the transportation agency/data owner.
* Castle Rock provides the CARS/511 technology platform.
* Trafficwise/511 is the public-facing layer.
* Camera inventory and camera playback are exposed through the public system.
* The public web application is NOT itself the only source of camera data.

---

# 2. CURRENT PROJECT OBJECTIVE

The project began as an Indiana Traffic Viewer and evolved into a private/local desktop application.

Current conceptual product:

**Private local traffic-camera command center / viewer**

Primary functionality:

LOGIN / SIGN UP
→ authentication
→ remember login / stay logged in
→ primary MAP VIEW
→ expandable filtering/navigation
→ state selection
→ favorite states
→ camera selection
→ camera stream/detail view
→ return/navigation to map

The UI is intended to become a high-end cinematic enterprise surveillance/traffic command-center interface while retaining the actual underlying traffic-camera functionality.

The application must continue to use real camera data.

---

# 3. IMPORTANT PROJECT HISTORY

The project has gone through several architecture phases.

## Early architecture

Initial architecture was:

* React
* Vite
* TypeScript
* Express
* TypeScript backend
* XML feeds
* feed services
* parsers
* API layer

Files/areas included:

* `server/src/feeds/FeedManager.ts`
* `server/src/services/FeedService.ts`
* `server/src/types/feed.ts`
* `server/src/api/health.ts`
* `server/src/api/index.ts`
* `server/src/index.ts`
* `server/src/tools/inspect-cctv.ts`
* `feed.config.ts`

The backend/API architecture was successfully typechecked and started.

## Later architecture discovery

A functioning Electron application was found.

The working application is:

* Electron
* vanilla JavaScript
* HTML
* CSS
* hls.js
* Electron main process
* preload bridge
* renderer

The current working desktop application is more important than the earlier React/Vite architecture.

Do not assume the old React/Vite architecture is still the production application.

---

# 4. CURRENT KNOWN ELECTRON ARCHITECTURE

Known components:

## Electron main process

`main.js`

Responsibilities include:

* Electron application startup
* fetching camera data
* communicating with 511IN GraphQL
* exposing camera functionality to the renderer

Known camera retrieval behavior:

`main.js` contains a GraphQL camera query commonly referred to as:

`listCameraViewsQuery`

The application requests camera views from the 511IN GraphQL endpoint.

## Preload

`preload.js`

Exposes an API to the renderer.

Known bridge:

`window.api.fetchCameras()`

## Renderer

`renderer.js`

Calls:

`fetchCameras()`

and normalizes the returned camera payload.

The renderer is responsible for:

* map
* camera list
* camera detail
* preview/live playback
* navigation
* UI state

## Playback

The project uses:

**hls.js**

for HLS playback.

The HLS source is supplied by the camera API rather than constructed blindly by the renderer.

---

# 5. PRIMARY VERIFIED CAMERA DATA PATH

This is the most important discovery in the entire project.

The proven path is:

INDOT / 511IN
→ Castle Rock CARS / 511 public system
→ GraphQL API
→ `cameraViews`
→ camera object
→ `sources`
→ HLS source
→ `skysfs3` or `skysfs4.trafficwise.org`
→ `/preroll/<camera identifier>/playlist.m3u8`
→ MPEG-TS segments
→ browser/video player
→ live camera playback

This path has been experimentally verified.

The application does NOT need to scrape the visible 511 page to obtain playback once the underlying API behavior is reproduced.

---

# 6. GRAPHQL CAMERA DISCOVERY

Playwright browser instrumentation was used against the real 511IN website.

Network traffic was captured.

The capture process filtered for:

* GraphQL
* skysfs
* trafficwise
* public.carsprogram.org
* preroll
* `.m3u8`
* `.ts`
* `/api/`

The captured GraphQL response exposed camera objects under:

`cameraViews`

Known camera fields included:

* `category`
* `lastUpdated`
* `title`
* `uri`
* `url`
* `sources`

Example category:

`VIDEO`

The `sources` array contained media information.

A source was observed with:

`type: application/x-mpegURL`

and an HLS source in:

`src`

This is critical.

### VERIFIED RULE

The HLS URL is supplied by the API response.

Do not assume that every camera's HLS hostname is the same.

Do not hard-code `skysfs3`.

Do not hard-code `skysfs4`.

Use the actual `sources[].src` returned for the camera.

---

# 7. VERIFIED HLS FORMAT

Known HLS pattern:

`skysfs3.trafficwise.org`
or
`skysfs4.trafficwise.org`

Path:

`/preroll/<INDOT_CAMERA_IDENTIFIER>/playlist.m3u8`

Example previously verified:

`INDOT_523_KKCHR3Q2DKgnYwfG`

Associated HLS pattern:

`skysfs4.trafficwise.org/preroll/INDOT_523_KKCHR3Q2DKgnYwfG/playlist.m3u8`

Another verified camera example:

`INDOT_16_Wj8lHnkrc6f0ZS1e`

Associated HLS source was served by:

`skysfs4.trafficwise.org`

The exact playlist path was:

`/preroll/INDOT_16_Wj8lHnkrc6f0ZS1e/playlist.m3u8`

These are REAL observed identifiers, not fabricated examples.

---

# 8. HLS PLAYBACK WAS DIRECTLY VERIFIED

This was not merely inferred from JavaScript.

A real playlist was requested directly.

Observed behavior:

* HTTP response: `200`
* playlist contained `#EXTM3U`
* HLS version information present
* MPEG-TS segments were listed
* browser subsequently requested `.ts` segments
* `.ts` segment requests returned HTTP `200`
* browser successfully decoded the stream
* real `<video>` element reached playable state

A separate playback verification reported:

* real `<video>` element
* `readyState = 4`
* approximately 44 seconds of buffered playback
* no obvious authentication token was required for the direct observed HLS request
* CORS behavior allowed the public web application to use the media source

Therefore:

**HLS itself is proven functional outside the public UI.**

If the desktop application cannot play a known-good HLS source, do not immediately blame INDOT or the stream.

Investigate:

1. source extraction
2. source normalization
3. Electron security/CORS behavior
4. hls.js initialization
5. video element lifecycle
6. renderer DOM/layout
7. network failures
8. HLS.js errors
9. cleanup/reinitialization
10. multiple simultaneous player instances

---

# 9. CAMERA IDENTIFIERS

Camera identifiers observed in the system use strings similar to:

`INDOT_16_Wj8lHnkrc6f0ZS1e`

`INDOT_523_KKCHR3Q2DKgnYwfG`

Another captured source had:

`INDOT_350_1JKQnmnC3ZG5eUZZ`

The identifier is important because it appears consistently across:

* camera metadata
* HLS preroll path
* related camera resources

Do not derive identifiers by guessing.

Always prefer the identifier provided by the actual API/camera object.

---

# 10. CAMERA SOURCE MODEL

Known conceptual structure:

`cameraViews[]`

Each camera may contain:

* category
* lastUpdated
* title
* uri
* thumbnail URL
* sources[]

A source may contain:

* MIME/type
* media URL / src

Observed media type:

`application/x-mpegURL`

This means the renderer should treat source selection as data-driven.

Potentially:

`camera.sources[0].src`

was observed in the public 511IN client.

The 511IN client uses Video.js.

The public client passes the API-provided source into the player.

The local application uses hls.js instead.

---

# 11. VIDEO.JS VS HLS.JS

The public 511IN implementation was observed using:

**Video.js**

The local Electron implementation uses:

**hls.js**

This is an implementation difference, not a data-source difference.

The public site demonstrates that the API-provided HLS source is a valid playable source.

Therefore, if local hls.js playback fails, investigate the local implementation rather than changing the proven source-resolution process first.

---

# 12. TOKEN / REFRESH INVESTIGATION

The public 511IN client was observed to contain logic associated with:

* token/startBy behavior
* source refresh behavior

However:

**The exact authentication/token mechanism was NOT fully reverse-engineered.**

Important distinction:

### VERIFIED

At least some observed HLS playlists were directly accessible and returned HTTP 200 without an obvious authentication token in the URL.

### NOT FULLY VERIFIED

Whether:

* every camera behaves identically
* every HLS URL remains valid indefinitely
* some cameras require refreshed sources
* `startBy` is required for certain camera states
* token refresh is required under particular circumstances
* Castle Rock rotates source URLs
* source expiration varies by camera

Therefore Claude must not state that "no authentication is ever required."

Correct statement:

> Direct HLS playback was verified without an obvious authentication token for the tested cameras, but the complete source/token lifecycle has not been exhaustively reverse-engineered.

---

# 13. INDOT CCTV XML FEED

The project also discovered the actual INDOT CCTV XML feed.

Known file:

`feeds/cctv.xml`

Inspection tool:

`server/src/tools/inspect-cctv.ts`

Command/script:

`inspect:cctv`

The inspection generated:

`feeds/cctv-inspection.json`

The CCTV inventory contained approximately:

**740 camera inventory items**

This was directly inspected.

---

# 14. CCTV XML FIELDS DISCOVERED

Observed fields included:

* `device-id`
* `device-updated`
* `device-name`
* `still-images`
* `location`
* `geo-location`

The CCTV feed contains actual inventory information.

Coordinates were observed in integer-like scaled format.

Example forms looked like:

`39465368`

and

`-86373035`

Another observed coordinate example:

`41470974`

and

`-87364990`

These require geographic conversion.

Likely interpretation:

latitude/longitude values scaled by `1,000,000`.

Example:

`39465368` → approximately `39.465368`

`-86373035` → approximately `-86.373035`

This scaling interpretation was derived from actual coordinate values and geographic plausibility.

However, when implementing a parser, preserve the original raw value and explicitly document the conversion.

Do not silently discard the raw coordinate.

---

# 15. CCTV XML VS GRAPHQL

These are two different layers.

## XML

Provides camera inventory/metadata.

Known information includes:

* device ID
* camera/device name
* update time
* still image information
* location
* geographic information

## GraphQL

Provides public 511 camera-view information.

Critically, GraphQL exposes:

* camera view metadata
* thumbnails
* media source information
* HLS source URLs

Therefore the likely useful architecture is:

INDOT CCTV inventory
+
511IN GraphQL camera-view data
==============================

rich local camera model

But the exact one-to-one mapping between every XML camera and every GraphQL `cameraViews` object has **not yet been exhaustively proven**.

Do not assume a simple string match is universally correct.

---

# 16. STILL IMAGE PATH

Still images were discovered in the CCTV XML inventory.

A known thumbnail/source domain encountered during Playwright inspection was:

`public.carsprogram.org`

This domain appeared in camera-related resources.

The GraphQL camera object also exposed a URL/thumbnail-related field.

The exact complete mapping between every XML `still-images` entry and GraphQL thumbnail URL remains a data-model task.

---

# 17. NUMBER OF CAMERAS

The XML inspection produced approximately:

**740 CCTV inventory items**

Important:

This is an inventory count.

It does NOT automatically mean:

* 740 simultaneous HLS streams
* 740 cameras currently online
* 740 GraphQL `VIDEO` objects
* 740 cameras with active streaming sources

Some camera records may be:

* metadata-only
* still-image only
* offline
* missing video source
* represented differently in GraphQL

Therefore never equate "740 inventory items" with "740 working live streams."

---

# 18. PLAYWRIGHT DISCOVERY PROCESS

Playwright was used to inspect the actual public web application.

The process:

1. Launch the 511IN web application.
2. Instrument network requests.
3. Capture requests/responses.
4. Filter for:

   * GraphQL
   * cameraViews
   * trafficwise
   * skysfs
   * HLS
   * `.m3u8`
   * `.ts`
   * API requests
5. Save capture data.
6. Identify GraphQL response.
7. Identify camera object.
8. Identify `sources`.
9. Extract HLS `src`.
10. Request the HLS playlist directly.
11. Verify HTTP 200.
12. Inspect playlist.
13. Verify segment requests.
14. Verify actual browser playback.

This is the correct methodology for future reverse engineering.

Do not rely solely on inspecting minified frontend source.

Network behavior is stronger evidence.

---

# 19. CAPTURE FILE

One known Playwright capture file was saved as:

`C:\Users\colin\Desktop\Traffic Cam\video_api_captures.json`

This capture contains evidence from the real traffic-camera application.

If available in the current project environment, inspect it before repeating network discovery.

---

# 20. KNOWN NETWORK HOSTS / SYSTEM COMPONENTS

Known:

### 511IN

Public INDOT traffic information system.

### `skysfs3.trafficwise.org`

Observed HLS delivery host.

### `skysfs4.trafficwise.org`

Observed HLS delivery host.

### `public.carsprogram.org`

Observed in camera-related public resources/thumbnails.

### Castle Rock / CARS

Underlying traffic information technology platform.

### GraphQL

Camera view data was observed through the 511IN GraphQL API.

Do not assume these are the only hosts.

---

# 21. CURRENT DATA ARCHITECTURE RECOMMENDATION

The proven architecture should conceptually be:

```text
INDOT CCTV XML
        |
        v
Camera Inventory Parser
        |
        +---- device ID
        +---- name
        +---- location
        +---- coordinates
        +---- still images
        |
        v
Local Camera Model
        ^
        |
511IN GraphQL
        |
        +---- cameraViews
        +---- title
        +---- URI
        +---- thumbnail
        +---- sources
                    |
                    v
               HLS source
                    |
                    v
            skysfs3 / skysfs4
                    |
                    v
               hls.js
                    |
                    v
              HTML video
```

The important principle is separation of:

**inventory discovery**

from

**live playback resolution**

---

# 22. VERIFIED APPLICATION API FLOW

Earlier backend work successfully established:

HTTP API
→ FeedService
→ FeedManager
→ feed configuration

Known endpoint:

`GET /api/feeds`

Known health endpoint:

`GET /api/health`

These backend pieces were successfully compiled/typechecked and run.

However, the later Electron implementation became the primary working application.

Do not automatically resurrect the old Express architecture unless there is a concrete reason.

---

# 23. KNOWN ELECTRON IPC FLOW

The known working pattern:

Renderer:

`window.api.fetchCameras()`

Preload:

bridges the API into renderer context.

Main:

performs camera data retrieval.

This architecture exists to avoid directly exposing privileged Electron functionality to the renderer.

Do not bypass the preload bridge casually.

---

# 24. LIVE PREVIEW BUG HISTORY

A major recent issue involved the live-preview/list view.

Problem:

**Multiple live streams were visually overlapping each other.**

The project used Electron remote debugging on:

`9222`

A helper inspection script was used to inspect:

* renderer DOM
* computed styles
* video count
* camera items
* list rectangle
* video wrapper rectangle

A screenshot was also captured:

`last-screenshot.png`

Inspection output:

`inspectListView.json`

This established a debugging methodology for renderer layout issues.

---

# 25. LIVE PREVIEW DEBUGGING PROCEDURE

When the preview screen breaks:

1. Launch the Electron application.
2. Enable/use remote debugging port 9222 if available.
3. Connect through the debugging protocol.
4. Inspect the actual renderer DOM.
5. Count camera items.
6. Count `<video>` elements.
7. Inspect each video wrapper.
8. Inspect computed:

   * width
   * height
   * position
   * display
   * overflow
   * grid/flex properties
   * margins
   * transforms
9. Inspect parent rectangles.
10. Capture screenshot.
11. Compare DOM geometry to visual result.
12. Determine whether the problem is:

* data duplication
* player duplication
* DOM duplication
* CSS layout
* stale player lifecycle
* asynchronous rendering

13. Fix the smallest responsible layer.
14. Re-run inspection.
15. Test several cameras.
16. Confirm streams no longer overlap.
17. Only then rebuild the executable.

Do not "fix" layout by randomly adding arbitrary CSS.

---

# 26. STABILITY REQUIREMENT

Before packaging:

* camera loading must work
* map must load
* camera list must load
* preview must not overlap
* switching cameras must not leave stale players
* failed streams must not crash the renderer
* navigation must remain functional
* repeated opening/closing of camera views must be stable
* no console-breaking exceptions
* no duplicated player instances
* no runaway timers/listeners
* no obvious memory leaks
* application must survive normal user navigation

Then rebuild the EXE.

---

# 27. PACKAGING HISTORY

The application is an Electron desktop application packaged with Electron Builder.

The user previously had an executable associated with the project:

`INDOT-Live-Camera.exe`

The broader project/product identity has also included:

**MAC EVIL**

The executable naming was being changed to better reflect the current project.

Do not rename packaging outputs without inspecting the current `package.json` and build configuration first.

---

# 28. CURRENT PRODUCT DIRECTION

The application is no longer intended to be merely a basic camera viewer.

The desired UI direction is:

**high-end cinematic enterprise surveillance / command-center interface**

Reference concept:

* dark
* technical
* cinematic
* dense but organized
* professional
* command-center feel
* map-centric
* live camera monitoring
* expandable filtering/navigation
* state selection
* favorites
* camera selection
* camera detail
* live stream
* rapid return to map

The UI can be visually sophisticated, but visual sophistication must never compromise real camera functionality.

---

# 29. CASTLE ROCK "ADAPTERS" / INTERFACES CURRENTLY KNOWN

There is no verified evidence that Castle Rock exposes a public product literally named an "adapter."

What is known are the actual integration interfaces/data layers:

## A. CARS / 511 XML feed

Castle Rock provides XML data-feed infrastructure for traveler information.

The public Castle Rock documentation identifies XML data feeds and identifies Indiana as an available agency feed.

The project has an actual INDOT CCTV XML feed.

## B. CCTV inventory XML

Observed real fields:

* device ID
* device updated
* device name
* still images
* location
* geo-location

## C. 511IN GraphQL interface

Observed through Playwright.

Camera data is exposed through:

`cameraViews`

## D. Camera media source interface

GraphQL camera objects expose:

`sources`

A source can identify:

`application/x-mpegURL`

with an HLS `src`.

## E. Trafficwise HLS delivery

Actual HLS streams are delivered through:

`skysfs3.trafficwise.org`

and

`skysfs4.trafficwise.org`

using:

`/preroll/<camera-id>/playlist.m3u8`

## F. Public camera resources

`public.carsprogram.org`

was observed for camera-related public resources.

These are the currently known integration points.

Do not invent additional Castle Rock adapters.

---

# 30. WHAT HAS NOT BEEN PROVEN

The following remain open engineering questions.

### NOT FULLY PROVEN

1. Exact GraphQL schema/query required to retrieve every camera.
2. Exact relationship between CCTV XML `device-id` and GraphQL camera identifier for all cameras.
3. Whether every XML camera exists in GraphQL.
4. Whether every GraphQL camera exists in the XML feed.
5. Exact reason some cameras may not have HLS sources.
6. Complete token lifecycle.
7. Complete `startBy` behavior.
8. HLS URL expiration rules.
9. Whether HLS URLs are permanently reusable.
10. Whether all cameras use `skysfs3` or `skysfs4` deterministically.
11. Exact Castle Rock backend architecture behind the GraphQL layer.
12. Whether there are undocumented APIs used by the public client.
13. Whether camera availability changes dynamically according to operational status.
14. Whether there are rate limits or anti-abuse controls.
15. Exact production-scale limits for simultaneous HLS playback.
16. Exact mapping between still-image and video resources.
17. Whether all 740 CCTV inventory entries are represented as playable video.
18. Whether certain cameras use alternate media protocols.

These should be investigated only when needed.

---

# 31. WHAT IS DEFINITELY NOT ACCEPTABLE

Claude must not respond to an unknown problem by inventing:

* API endpoints
* GraphQL fields
* camera IDs
* stream URLs
* authentication tokens
* XML fields
* Castle Rock services
* INDOT services
* fake camera records
* fake HLS playlists
* fake coordinates
* mock camera data

If a test requires a camera, use an actual previously verified camera identifier or discover a real one from the current API.

---

# 32. REAL VERIFIED CAMERA TEST CASES

Previously verified real camera IDs include:

```text
INDOT_16_Wj8lHnkrc6f0ZS1e
INDOT_523_KKCHR3Q2DKgnYwfG
INDOT_350_1JKQnmnC3ZG5eUZZ
```

Known verified playback examples include:

```text
INDOT_16_Wj8lHnkrc6f0ZS1e
INDOT_523_KKCHR3Q2DKgnYwfG
```

Use these as real-world diagnostic cases when available.

Do not replace them with invented IDs.

---

# 33. KNOWN INDOT DATA FEEDS

The project has investigated/identified Castle Rock/INDOT feed families including:

* FEU-t
* FEU-g
* FEU-m
* CCTV
* Waze CIFS feed

The CCTV feed is the most important camera-specific inventory source.

The project later chose to reduce/remove the unnecessary AI/backend traffic/events layer and concentrate on real camera functionality.

---

# 34. PROJECT PRINCIPLE: DATA-FIRST

The correct order is:

1. Discover real data.
2. Capture real response.
3. Understand schema.
4. Validate independently.
5. Build parser/adapter.
6. Normalize into application model.
7. Render UI.
8. Test playback.
9. Package.

Never reverse this order by designing a fake data model and hoping the real API conforms.

---

# 35. PROJECT PRINCIPLE: NETWORK EVIDENCE > ASSUMPTION

If Claude believes the application works a certain way:

prove it.

Preferred evidence:

1. Actual network request.
2. Actual response.
3. Actual HTTP status.
4. Actual payload.
5. Actual browser behavior.
6. Actual player behavior.
7. Actual DOM state.

A screenshot alone is weaker evidence than network capture.

A source-code assumption is weaker evidence than an observed request.

---

# 36. RECOMMENDED CAMERA NORMALIZATION MODEL

A local normalized camera object should conceptually preserve both raw and normalized data.

Example conceptual structure:

```text
Camera
├── raw
│   ├── XML record
│   └── GraphQL record
│
├── identity
│   ├── deviceId
│   ├── cameraId
│   └── title/name
│
├── location
│   ├── latitude
│   ├── longitude
│   └── raw coordinates
│
├── imagery
│   ├── still image
│   └── thumbnail
│
├── video
│   ├── available
│   ├── MIME type
│   ├── HLS URL
│   └── source metadata
│
└── timestamps
    └── lastUpdated
```

The raw upstream records should not be destroyed.

---

# 37. ERROR HANDLING

Camera failures should be isolated.

One dead camera must not crash the entire viewer.

Expected categories:

* metadata missing
* camera unavailable
* HLS unavailable
* playlist HTTP error
* segment error
* HLS.js fatal error
* malformed camera source
* stale source
* renderer/player lifecycle error

The UI should show the camera as unavailable rather than fabricate a video.

---

# 38. MULTI-CAMERA PLAYBACK

This is a major resource-management issue.

The application must not accidentally create multiple HLS.js instances for the same video element or leave old players running after navigation.

When a camera is removed:

* destroy its HLS instance if appropriate
* detach media
* remove event listeners
* clear references
* remove stale DOM
* prevent duplicate initialization

When switching cameras:

1. cleanly stop/destroy old player
2. clear old source
3. create/use correct video element
4. initialize HLS
5. attach media
6. load the actual API-provided source
7. play when permitted
8. handle errors

---

# 39. ELECTRON-SPECIFIC CONSIDERATIONS

The browser version proves the upstream source works.

Electron may behave differently.

When diagnosing Electron playback inspect:

* Chromium version
* hls.js compatibility
* CORS
* Content Security Policy
* preload isolation
* network permissions
* video element attributes
* autoplay policy
* renderer lifecycle
* Electron security settings

Do not weaken Electron security globally merely to make video work.

---

# 40. CURRENT DEVELOPMENT WORKFLOW

The user's preferred workflow is:

**ChatGPT = architect/research/technical reasoning**

**Claude Code / Claude Opus 5 = implementation agent**

The user relays the implementation instructions to Claude Code.

Therefore Claude should be given precise implementation tasks rather than vague goals.

Preferred sequence:

1. Inspect.
2. Report findings.
3. Identify root cause.
4. Make minimal change.
5. Test.
6. Report exact result.
7. Only then continue.

Do not perform large speculative rewrites.

---

# 41. WHEN CLAUDE RECEIVES A BUG

Claude should first produce:

### OBSERVED

What is actually happening.

### EVIDENCE

What files, network calls, DOM state, logs, or test results prove it.

### ROOT CAUSE

Only after evidence.

### FIX

Smallest responsible change.

### VERIFICATION

Exact test performed.

### REGRESSION CHECK

What existing behavior was checked afterward.

This is preferred over immediately editing code.

---

# 42. BUILD / RELEASE PROCEDURE

Before rebuilding the EXE:

1. Check project status.
2. Inspect package configuration.
3. Run type/lint checks if configured.
4. Start application.
5. Test camera discovery.
6. Test map.
7. Test list.
8. Test live preview.
9. Test camera switching.
10. Test navigation back to map.
11. Test multiple cameras.
12. Test failed/unavailable source behavior.
13. Inspect console for uncaught exceptions.
14. Verify no overlapping video elements.
15. Close/reopen application.
16. Re-test.
17. Run production build.
18. Confirm executable generated.
19. Confirm executable launches.
20. Test packaged application separately from dev mode.

Do not claim "stable" merely because compilation succeeds.

---

# 43. EXISTING DEBUGGING ARTIFACTS

Known artifacts from previous debugging:

```text
video_api_captures.json
last-screenshot.png
inspectListView.json
feeds/cctv.xml
feeds/cctv-inspection.json
```

Known project inspection script:

```text
server/src/tools/inspect-cctv.ts
```

Known remote debugging port:

```text
9222
```

---

# 44. IMPORTANT DISTINCTION: INVENTORY VS LIVE SOURCE

A camera can exist in the INDOT inventory without necessarily having an active HLS source.

Therefore the normalized application should distinguish:

```text
KNOWN CAMERA
```

from:

```text
LIVE VIDEO AVAILABLE
```

Do not represent every inventory camera as live.

---

# 45. IMPORTANT DISTINCTION: SOURCE URL VS CAMERA ID

The camera identifier and HLS URL are related but should not be treated as interchangeable.

Correct:

```text
API camera
    ↓
camera source
    ↓
source.src
    ↓
HLS player
```

Incorrect:

```text
camera ID
    ↓
manually construct assumed HLS URL
```

Manual URL construction can be useful for investigation after a known pattern has been proven, but production code should prefer the API-provided source.

---

# 46. IMPORTANT DISTINCTION: PUBLIC WEBSITE VS BACKEND SERVICE

The visible 511IN UI is not the data source itself.

It is a client.

The Playwright investigation demonstrated that the browser performs underlying API/network operations.

Therefore future investigation should focus on:

* network requests
* GraphQL
* source objects
* media delivery

rather than scraping rendered HTML whenever possible.

---

# 47. CURRENT STATE OF RESEARCH

### VERIFIED

* INDOT uses CARS/511 infrastructure.
* Castle Rock ITS is behind the Trafficwise/CARS technology.
* INDOT CCTV XML exists.
* CCTV XML contains roughly 740 inventory items from the inspected feed.
* CCTV records contain device IDs/names/update/location/still-image information.
* Coordinates require conversion from scaled integer-like values.
* 511IN exposes camera views through GraphQL.
* GraphQL has `cameraViews`.
* Camera objects can contain `sources`.
* Sources can identify `application/x-mpegURL`.
* Real HLS URLs are returned.
* HLS hosts observed include `skysfs3.trafficwise.org` and `skysfs4.trafficwise.org`.
* Real HLS playlists return HTTP 200 for verified cameras.
* HLS playlists contain MPEG-TS segments.
* Real `.ts` segments returned HTTP 200.
* Real browser playback was achieved.
* hls.js is used in the local Electron application.
* Video.js is used by the public 511IN client.
* Electron `window.api.fetchCameras()` is part of the local application's architecture.
* Playwright/network capture successfully discovered the media path.
* Remote debugging on port 9222 was used to inspect renderer layout.
* The live-preview overlap problem was investigated through DOM geometry rather than guessing.

### PARTIALLY VERIFIED

* Camera XML ↔ GraphQL mapping.
* Token/source expiration behavior.
* `startBy` behavior.
* Exact GraphQL schema beyond observed fields.
* Complete camera availability mapping.
* Scale/coordinate conversion across every record.

### UNKNOWN

* Full Castle Rock backend architecture.
* Every undocumented endpoint.
* All authentication behavior.
* All stream expiration rules.
* Complete rate limits.
* Complete cross-state camera API strategy.

---

# 48. FINAL INSTRUCTION TO CLAUDE

Treat this document as accumulated project memory, not as a specification to blindly implement.

The source of truth hierarchy is:

```text
REAL NETWORK OBSERVATION
        >
ACTUAL API RESPONSE
        >
ACTUAL FILE / FEED CONTENT
        >
ACTUAL APPLICATION CODE
        >
DOCUMENTATION
        >
REASONED INFERENCE
        >
ASSUMPTION
```

Never turn an inference into a fact.

When evidence conflicts with this document, investigate the conflict.

When a new behavior is proven, record it explicitly as:

**VERIFIED**

When something is merely suspected, record:

**UNVERIFIED**

When something is disproven, record:

**DISPROVEN**

Do not silently rewrite history.

The project has already spent substantial effort proving the INDOT/Castle Rock camera path. Do not restart from "How does 511IN provide cameras?" unless new evidence shows the previously verified mechanism has changed.

The most important proven chain is:

```text
INDOT CCTV / CARS
        ↓
511IN / Castle Rock public system
        ↓
GraphQL
        ↓
cameraViews
        ↓
sources[]
        ↓
application/x-mpegURL
        ↓
real HLS URL
        ↓
skysfs3 / skysfs4.trafficwise.org
        ↓
playlist.m3u8
        ↓
MPEG-TS segments
        ↓
hls.js / Video.js
        ↓
real live camera video
```

That chain has been experimentally verified and should be preserved.
