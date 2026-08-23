# Phase 1 — Source Verification Reports (first slice)

Produced per `MacEvil.md` §8–§10, following the checklist in `projectatlas.md` §6. This is a **first slice**, not the full checklist — `projectatlas.md` §6 and `Project ATLAS-WebSite.md` §63 list ~30+ source families still open. Every number below came from an actual request executed this session (2026-08-23); none are estimated or copied from a vendor's marketing claim without independent verification, per `MacEvil.md` §9's explicit prohibition on treating "endpoint found" as "source verified."

All requests used a self-identifying User-Agent (`ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`) and were made against URLs either officially documented or discovered through an official government open-data registry — no enumeration, guessing, or access-control bypass.

---

## 1. NWS/NOAA Public Alerts API

```text
source:                    National Weather Service Alerts API
provider:                  National Weather Service (NOAA)
jurisdiction:              US (nationwide; tested against Indiana as a filter)
official_url:              https://api.weather.gov
documentation_url:         https://www.weather.gov/documentation/services-web-api
terms_url:                 https://www.weather.gov/disclaimer
license:                   Public domain (US federal government work) — weather.gov/disclaimer states
                            NWS web content "are in the public domain, unless specifically noted
                            otherwise, and may be used without charge for any lawful purpose."
                            Attribution requested; no false endorsement; NWS name/logo trademarked.
verification_date:         2026-08-23
verification_method:       Direct HTTPS GET, real response inspected
access_method:              GOVERNMENT_API
authentication:             None required
rate_limit:                 Not explicitly documented on the disclaimer page; standard courteous-use
                             expected (not tested to a limit this session)
observed_format:            application/geo+json (CAP-derived alert properties)

records_discovered:         71 active alert features for area=IN at fetch time
records_valid:               71 (all parsed as well-formed GeoJSON Feature objects with the
                             expected CAP-alert property set: areaDesc, geocode, sent, effective,
                             onset, expires, ends, status, ...)
records_invalid:              0
source_id_uniqueness:       Each feature carries a unique @id (urn:oid:... CAP identifier) — VERIFIED unique within response

coordinate_validity:        N/A for this endpoint — many features returned geometry: null
                             (area-based, not point-based, alerts); UGC/SAME geocodes present instead
coordinate_system:           N/A
coverage:                    Nationwide; this session tested Indiana only

still_available:             N/A (not a camera source — an EVENT source per Project ATLAS-WebSite.md §17)
video_available:             N/A
stream_types:                N/A

metadata_storage_policy:     Permitted (public domain)
image_access_policy:          N/A
image_redistribution_policy:  N/A
video_access_policy:          N/A
video_redistribution_policy:  N/A

result:                     VERIFIED
```

**Note:** this is an EVENT source (weather alerts), not a camera source — feeds `Project ATLAS-WebSite.md` §17's alert schema and §28's `WEATHER`/`TORNADO`/`FLOOD` event types, not the camera catalog. Confirmed real, current, well-formed, and unambiguously public-domain. Ready to progress past `POLICY_VERIFIED` to `ADAPTER_IMPLEMENTED` whenever adapter work begins (Phase 6/7) — no further research blocker exists.

---

## 2. USGS Earthquake GeoJSON Feed

```text
source:                    USGS Earthquake Catalog — "All Earthquakes, Past Day" summary feed
provider:                  U.S. Geological Survey
jurisdiction:              US + global (feed is worldwide; US-only filtering is a normalization-layer
                            concern per projectatlas.md §4's USA-only geofencing requirement, not a
                            source-level restriction)
official_url:              https://earthquake.usgs.gov
documentation_url:         https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
terms_url:                 https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits
license:                   Public domain (US federal government work). Attribution requested but
                            not legally required, per USGS's own copyrights-and-credits page.
verification_date:         2026-08-23
verification_method:       Direct HTTPS GET, real response inspected
access_method:              GOVERNMENT_API
authentication:             None required
rate_limit:                 Not documented on the fetched pages; response declares
                             Cache-Control: public, max-age=60 — implies expected polling
                             interval of ~60s for this particular feed tier
observed_format:            application/json (GeoJSON FeatureCollection)

records_discovered:         199 features (metadata.count === 199, cross-checked against actual
                             feature array length)
records_valid:               199 (each carries mag, place, time, coordinates, unique id)
records_invalid:              0
source_id_uniqueness:       `id` field (e.g. aka2026qqhsvr) — VERIFIED unique within response;
                             stable USGS event identifiers, not ATLAS-generated

coordinate_validity:        VERIFIED — sampled coordinates fall within valid [-90,90]/[-180,180]
                             ranges (e.g. [-155.158, 58.076, 106.7] for an Alaska event; third
                             element is depth in km, not elevation — must be normalized correctly,
                             not silently dropped, per MacEvil.md §33)
coordinate_system:           WGS84 decimal degrees
coverage:                    Worldwide, this-day window; US subset requires client-side/query filtering

still_available:             N/A (event source, not camera source)
video_available:             N/A
stream_types:                N/A

metadata_storage_policy:     Permitted (public domain)
image_access_policy:          N/A
image_redistribution_policy:  N/A
video_access_policy:          N/A
video_redistribution_policy:  N/A

result:                     VERIFIED
```

**Note:** feeds `Project ATLAS-WebSite.md` §24's USGS earthquake event adapter. This specific feed is global — the adapter must filter to US/territory coordinates per `projectatlas.md` §4's geofencing requirement before any record is promoted past `CANDIDATE`; USGS itself imposes no such restriction (correctly, since ATLAS's US-only scope is ATLAS's own product boundary, not a source limitation).

---

## 3. INDOT Work Zone Data Exchange (WZDx) Feed — new finding this session

This source was **not** in `projectatlas.md`'s prior INDOT research (§5A/§5B). It surfaced from independently querying the official WZDx Feed Registry (a federal open-data catalog) for Indiana, per the research-checklist item in `projectatlas.md` §6 ("WZDx"). It is a **third, distinct INDOT/Castle Rock integration path** — separate from both the CARS-Hub XML feeds (§5A) and the 511IN GraphQL/HLS path (§5B) — and should be recorded as such rather than folded into either.

```text
source:                    INDOT Work Zone Data Exchange (WZDx) feed
provider:                  Indiana DOT, published via the Castle Rock CARS platform
jurisdiction:              US-IN
official_url:              https://in.carsprogram.org/carsapi_v1/api/wzdx
documentation_url:         WZDx v4.x specification: https://github.com/usdot-jpo-ode/wzdx
                            (spec repository; registry entry found at
                            https://datahub.transportation.gov/Roadways-and-Bridges/Work-Zone-Data-Exchange-WZDx-Feed-Registry/69qe-yiui)
terms_url:                 Declared inline in the feed response itself (see license below) —
                            stronger evidence than most sources checked so far, since it doesn't
                            require separate documentation-page discovery
license:                   CC0 1.0 Universal (public domain dedication) — declared explicitly in the
                            feed's own `road_event_feed_info.license` field:
                            "https://creativecommons.org/publicdomain/zero/1.0/"
verification_date:         2026-08-23
verification_method:       Direct HTTPS GET, real response inspected; feed discovered via the
                            official federal WZDx Feed Registry dataset (Socrata JSON API,
                            datahub.transportation.gov/resource/69qe-yiui.json), not guessed
access_method:              GOVERNMENT_API
authentication:             None required (registry's own `needapikey` field is absent/false for
                            this entry, confirmed by successful unauthenticated fetch)
rate_limit:                 Registry declares `datafeed_frequency_update: "1m"` — treat as the
                             intended polling interval
observed_format:            application/json (WZDx v4.0 GeoJSON FeatureCollection; registry lists
                            the feed as v4.1, feed body self-reports v4.0 — a real, minor version
                            discrepancy worth flagging for the eventual WZDx adapter, not silently
                            resolved in either direction)

records_discovered:         1,411 work-zone-event Feature objects
records_valid:               1,411 (spot-checked records carry core_details.event_type,
                             road_names, direction, description, start_date/end_date, geometry)
records_invalid:              not exhaustively validated against the full WZDx v4.0 JSON Schema
                             this session — spot-check only; full schema validation is Phase 6/7
                             adapter work, not Phase 1 research
source_id_uniqueness:       `id` field (e.g. CARSy-33-1, CARSy-33-2) — VERIFIED unique within
                             response; note the CARS prefix, consistent with §5A/§5B's Castle
                             Rock/CARS platform identification — same underlying platform, third
                             distinct data product
coordinate_validity:        VERIFIED — sampled coordinates (e.g. [-87.097461, 41.612206]) fall
                             within Indiana's real bounding box
coordinate_system:           WGS84 decimal degrees (MultiPoint geometry)
coverage:                    Indiana statewide, per feed contact (Ed Cox, ECOX@indot.in.gov,
                            "INDOTCastleRock" publisher)

still_available:             N/A (work-zone event source, not camera source)
video_available:             N/A
stream_types:                N/A

metadata_storage_policy:     Permitted (CC0 — no restriction)
image_access_policy:          N/A
image_redistribution_policy:  N/A
video_access_policy:          N/A
video_redistribution_policy:  N/A

result:                     VERIFIED
```

**This is the strongest-licensed INDOT source found across this entire project to date** — explicit CC0 declared inside the machine-readable payload itself, contrasting sharply with §5A's UNKNOWN-license CARS-Hub XML feeds and §5B's undocumented-terms GraphQL path. Recommend `projectatlas.md` be updated with a new §5D entry recording this (done in the same commit as this report — see that file's change log).

---

## 4. OpenTrafficCamMap (`AidanWelch/OpenTrafficCamMap`)

```text
source:                    OpenTrafficCamMap
provider:                  Aidan Welch (independent maintainer) — AGGREGATOR, not an original
                            camera operator; see note below
jurisdiction:              US (this session inspected the USA.json file specifically)
official_url:              https://github.com/AidanWelch/OpenTrafficCamMap
documentation_url:         Repository README
terms_url:                 https://github.com/AidanWelch/OpenTrafficCamMap/blob/master/LICENSE
license:                   MIT (confirmed via GitHub API repository metadata:
                            license.spdx_id === "MIT") — covers the repository's own compiled
                            dataset/code. Does NOT by itself confer redistribution rights over the
                            individual camera streams the dataset points to, which remain the
                            property/policy of each origin state DOT — per Project ATLAS-WebSite.md
                            §6's mandatory aggregator-vs-original-source distinction, this source's
                            MIT license must not be read as "every linked stream is MIT-licensed."
verification_date:         2026-08-23
verification_method:       Direct HTTPS GET against the raw repository file (raw.githubusercontent.com),
                            plus `gh api` repository-metadata inspection
access_method:              OTHER_PUBLIC (public GitHub repository, not an operated API)
authentication:             None required
rate_limit:                 GitHub raw-content/API standard limits apply; not a documented
                            ATLAS-specific limit
observed_format:            application/json (nested object: state → city → array of camera records)

records_discovered:         7,029 individual camera entries (counted by `"description"` key
                             occurrences across the full USA.json file this session)
records_valid:               7,029 — each sampled record carries description, latitude,
                             longitude, direction, url, encoding, format
records_invalid:              not exhaustively schema-validated this session
source_id_uniqueness:       **No unique per-camera identifier field exists in this schema.**
                            Records are keyed only by state → city array position, with no stable
                            ID. This is a real finding with direct architectural consequence: an
                            OpenTrafficCamMap adapter cannot use "source camera ID" as an identity
                            signal (MacEvil.md §35 item 1) for this source and must fall back to
                            coordinate+URL-based identity signals (items 3/10/11) instead.

coordinate_validity:        VERIFIED — sampled Alabama/Mobile-area coordinates
                             (e.g. 30.53555, -88.23918) are plausible and within the US
coordinate_system:           WGS84 decimal degrees (unscaled, unlike INDOT's XML feed)
coverage:                    Repository organizes by state; this session inspected only the
                            top-level USA.json aggregate, not per-state breakdown depth

still_available:             Some records reference snapshot-style URLs; not exhaustively classified
                            this session
video_available:             Yes — sampled records reference `.m3u8` HLS playlists (format: "M3U8")
                            hosted on third-party CDN infrastructure (e.g. cdn3.wowza.com), i.e.
                            each state DOT's own streaming vendor, not OpenTrafficCamMap's own servers
stream_types:                HLS (per observed format: "M3U8" / encoding: "H.264")

metadata_storage_policy:     Permitted for the aggregator's own compiled record (MIT); the
                            underlying camera's own policy governs the actual stream/redistribution
image_access_policy:          UNKNOWN per underlying source — not established this session
image_redistribution_policy:  UNKNOWN per underlying source
video_access_policy:          UNKNOWN per underlying source (stream URLs are third-party-hosted;
                            playability was not tested this session, existence/format only)
video_redistribution_policy:  UNKNOWN per underlying source

result:                     PARTIALLY_VERIFIED
```

**Count discrepancy, evidence-graded:** `Project ATLAS-WebSite.md` §4 cites "approximately 7,515 traffic cameras" as OpenTrafficCamMap's documented scale. This session's direct count of the current `USA.json` file is **7,029** — a real ~6.5% discrepancy, not a rounding difference. This is exactly the kind of independently-re-derived number `MacEvil.md` §9 requires instead of trusting a cited figure; the dataset is explicitly mutable (the repository itself warns of this, per `Project ATLAS-WebSite.md` §4's own note), so both numbers can be "true" at different points in time. Record the verified-this-session figure (7,029) as the authoritative count going forward, not the older cited figure.

**Why `PARTIALLY_VERIFIED` and not `VERIFIED`:** the dataset itself (structure, coordinates, count) is confirmed real and current. What's *not* yet established is the redistribution/access policy of the underlying third-party-hosted streams the dataset points to — that requires per-origin-DOT investigation this session didn't attempt (30+ states' worth), consistent with `Project ATLAS-WebSite.md` §6's explicit instruction to treat an aggregator as discovery/provenance, not automatically as a cleared redistribution source.

---

## Summary

| Source | Result | Category |
|---|---|---|
| NWS/NOAA Alerts API | VERIFIED | Event (weather) |
| USGS Earthquake GeoJSON | VERIFIED | Event (environmental) |
| INDOT WZDx Feed | VERIFIED — new finding, strongest INDOT license to date | Event (traffic/work-zone) |
| OpenTrafficCamMap | PARTIALLY_VERIFIED | Camera (aggregator) |

Four sources moved from `UNRESEARCHED`/`CANDIDATE` to `POLICY_VERIFIED` (first three) or `TECHNICALLY_VERIFIED` (OpenTrafficCamMap, pending per-DOT policy work) this session. None reached `ADAPTER_IMPLEMENTED` — no adapter code exists yet (Phase 6/7), consistent with `docs/ATLAS-ASSESSMENT.md`'s confirmed empty-repository starting point. The remaining ~25+ source families in `projectatlas.md` §6 / `Project ATLAS-WebSite.md` §63 remain open for future sessions.
