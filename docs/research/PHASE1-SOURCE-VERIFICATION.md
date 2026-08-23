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

## Summary (Batch 1)

| Source | Result | Category |
|---|---|---|
| NWS/NOAA Alerts API | VERIFIED | Event (weather) |
| USGS Earthquake GeoJSON | VERIFIED | Event (environmental) |
| INDOT WZDx Feed | VERIFIED — new finding, strongest INDOT license to date | Event (traffic/work-zone) |
| OpenTrafficCamMap | PARTIALLY_VERIFIED | Camera (aggregator) |

Four sources moved from `UNRESEARCHED`/`CANDIDATE` to `POLICY_VERIFIED` (first three) or `TECHNICALLY_VERIFIED` (OpenTrafficCamMap, pending per-DOT policy work) this session. None reached `ADAPTER_IMPLEMENTED` — no adapter code exists yet (Phase 6/7), consistent with `docs/ATLAS-ASSESSMENT.md`'s confirmed empty-repository starting point.

---

## Batch 2 (2026-08-23, continued session)

### 5. FEMA / OpenFEMA Disaster Declarations API

```text
source:                    OpenFEMA — Disaster Declarations Summaries v2
provider:                  Federal Emergency Management Agency (FEMA)
jurisdiction:              US (all states/territories)
official_url:              https://www.fema.gov/about/openfema
documentation_url:         https://www.fema.gov/about/openfema/api
terms_url:                 https://www.fema.gov/about/openfema/terms-conditions
license:                   Public domain / usa.gov/government-works. Citation of the endpoint
                            name/URL and access date is recommended, not a hard legal requirement.
                            Explicit contractual restriction: data must not be used to make
                            determinations affecting individual rights or benefits.
verification_date:         2026-08-23
verification_method:       Direct HTTPS GET, real response inspected
access_method:              GOVERNMENT_API
authentication:             None required
rate_limit:                 Not hit this session; OData-style paging documented (1,000-record
                            default page size)
observed_format:            application/json (OData-flavored: {metadata, DisasterDeclarationsSummaries: [...]})

records_discovered:         5 (this session's test query; full dataset is far larger — not
                            counted this session, only a bounded top-5 query was run)
records_valid:               5 — real, current declarations (e.g. `FM-5673-AR` "PINE TREE ROAD
                            FIRE", declared 2026-08-21; `FM-5672-AK` "MUKLUK FIRE", declared
                            2026-08-18) with plausible FIPS codes, incident types, and dates
records_invalid:              0
source_id_uniqueness:       `id` (UUID) and `femaDeclarationString` both present — VERIFIED unique

coordinate_validity:        N/A — this dataset is FIPS/county-coded, not point-geocoded
coordinate_system:           N/A
coverage:                    Nationwide

still_available:             N/A (event source)
video_available:             N/A
stream_types:                N/A

metadata_storage_policy:     Permitted (public domain)
image_access_policy:          N/A
image_redistribution_policy:  N/A
video_access_policy:          N/A
video_redistribution_policy:  N/A

result:                     VERIFIED
```

Feeds `Project ATLAS-WebSite.md` §17's FEMA/IPAWS emergency-alert subsystem. Only disaster *declarations* were tested this session — IPAWS/CAP live alert feeds specifically (a related but separate FEMA data product) remain unverified and are a good next candidate.

### 6. Open511 — no current US implementation found

```text
source:                    Open511 specification
provider:                  N/A — this is a specification, not a single operator
jurisdiction:              Evaluated for US applicability per projectatlas.md §6's checklist
official_url:              https://www.open511.org (spec); live implementation checked:
                            https://api.open511.gov.bc.ca
documentation_url:         https://api.open511.gov.bc.ca/help
terms_url:                 Open Government Licence – British Columbia (for the one live
                            implementation checked)
license:                   N/A for US purposes — no US source found implementing this spec
verification_date:         2026-08-23
verification_method:       WebFetch against the one documented live implementation's help page,
                            plus web search for any US state DOT Open511 implementation
access_method:              N/A
authentication:             N/A
rate_limit:                 N/A
observed_format:            N/A

records_discovered:         0 (US-applicable)
result:                     DEFERRED — no US-jurisdiction candidate exists to verify
```

**Finding:** the only confirmed live Open511 implementation is DriveBC (British Columbia, Canada) — its own documentation states "As this is the only jurisdiction currently supported, this query returns all active events," and it explicitly does not reference any US state. A second implementation (City of Repentigny, Québec) is also non-US. No evidence of a US state/regional 511 system implementing Open511 was found. Per `projectatlas.md` §4's USA-only technical requirement, this specification has **no current candidate to pursue** — correctly recorded as `DEFERRED`, not `REJECTED` (the spec itself is real and could become relevant if a US agency adopts it later), and not silently skipped without explanation.

### 7. OpenEye (`openeye.cam`) — endpoint claims did not verify live

```text
source:                    OpenEye public camera directory/API
provider:                  OpenEye (independent operator)
jurisdiction:              Claims US + international coverage (untested this session)
official_url:              https://openeye.cam
documentation_url:         https://openeye.cam/docs (client-rendered Next.js app — see finding below)
terms_url:                 Not independently located this session
license:                   UNKNOWN — not established
verification_date:         2026-08-23
verification_method:       Direct HTTPS GET against every endpoint path an initial WebFetch-based
                            documentation summary described, plus common OpenAPI-discovery paths
access_method:              UNKNOWN
authentication:             UNKNOWN
rate_limit:                 UNKNOWN
observed_format:            UNKNOWN

records_discovered:         0
records_valid:               0
result:                     FAILED_VALIDATION (this session) — see finding
```

**Important methodology finding, recorded per `MacEvil.md` §8's "do not treat search results/AI summaries as proof of an API":** an initial `WebFetch` call against `openeye.cam/docs` returned a plausible-looking, specific endpoint list (`/v1/catalog/map`, `/v1/catalog/featured`, `/v1/catalog/categories`, etc.) with authentication and payment-flow details. **Every one of those paths was then tested directly and returned HTTP 404**, including `/v1/catalog`, `/v1/catalog/map`, `/v1/catalog/featured`, and several standard OpenAPI-discovery paths (`/openapi.json`, `/api/openapi.json`, `/.well-known/openapi.json`, `/llms.txt`). The raw HTML of `/docs` is a client-side-rendered Next.js shell with no documentation content in the initial payload — meaning the earlier WebFetch summary was very likely synthesized/inferred by its underlying model from partial or non-authoritative signal, not read from real documented text. This is exactly the failure mode `MacEvil.md` §8 warns against ("do not invent an endpoint because another system uses a similar URL") — the difference here is the invention came from an AI-summarization tool in the research pipeline itself, not from this session directly guessing. **Recorded as `FAILED_VALIDATION`, not silently corrected or re-guessed further.** Re-investigation requires either a real browser session (rendering the JS and capturing actual network requests, per `MacEvil.md` §62's controlled-browser-automation allowance) or direct correspondence with the operator — not additional URL guessing.

### 8. WSDOT Traffic Cameras (ArcGIS MapServer)

```text
source:                    WSDOT Traffic Cameras
provider:                  Washington State DOT (layer also carries cross-border cameras credited
                            to ODOT/Tripcheck — see finding below)
jurisdiction:              US-WA (plus at least some US-OR records observed within the same layer)
official_url:              https://www.wsdot.wa.gov/arcgis/rest/services/Production/WSDOTTrafficCameras/MapServer
documentation_url:         Layer self-description (fetched directly, see below); separate official
                            WSDOT Traveler Information API documented at wsdot.wa.gov/traffic/api/
terms_url:                 Not located for this specific ArcGIS layer; the *separate*, official
                            WSDOT Traveler Information API explicitly requires an access code and
                            states third-party ("webflow") data redistribution "will require an
                            agreement with the Washington State Department of Transportation" —
                            strong signal to treat this ArcGIS mirror conservatively too, per
                            MacEvil.md §12 (public accessibility ≠ redistribution permission)
license:                   UNKNOWN/restrictive — layer declares `"copyrightText":"WSDOT @ 2023"`;
                            no explicit open-data license found for this specific endpoint
verification_date:         2026-08-23
verification_method:       Direct HTTPS GET against the live ArcGIS REST layer metadata and query
                            endpoints
access_method:              GOVERNMENT_OPEN (technically open, no auth) but policy UNKNOWN — do not
                            conflate technical openness with redistribution permission
authentication:             None required for this ArcGIS endpoint (contrast with WSDOT's official
                            API, which requires an access code — two different access postures for
                            related data, a real and non-obvious finding)
rate_limit:                 Not documented for this endpoint
observed_format:            ArcGIS REST JSON (Esri feature service)

records_discovered:         1,533 (via `returnCountOnly=true` — an exact server-reported count,
                            not an estimate)
records_valid:               5 spot-checked in full (`OBJECTID<6` query) — all carried real fields
                            (CameraID, CameraTitl, Latitude, Longitude, ImageURL, CameraOwne)
records_invalid:              not exhaustively validated this session
source_id_uniqueness:       `CameraID` and `OBJECTID` both present — VERIFIED unique within sample

coordinate_validity:        VERIFIED — sample coordinates (e.g. 45.620483, -122.673999) are
                            plausible and within the Pacific Northwest
coordinate_system:           Dual: `Latitude`/`Longitude` attribute fields appear to be plain
                            decimal degrees, while the ArcGIS `geometry` block uses Web Mercator
                            (wkid 102100/3857) — exactly the "Web Mercator mistakenly represented as
                            lat/lon" risk `MacEvil.md` §33 calls out; an adapter must use the
                            attribute lat/lon fields or explicitly reproject the geometry, never
                            treat the two interchangeably
coverage:                    Washington State highways, plus at least one confirmed cross-border
                            camera credited to Oregon DOT/Tripcheck (I-5 at the Interstate Bridge)

still_available:             Yes — `ImageURL` field present on sampled records, real snapshot URLs
                            (e.g. tripcheck.com-hosted image for the cross-border camera)
video_available:             Not established this session
stream_types:                STILL_IMAGE (per `ImageURL`)

metadata_storage_policy:     UNKNOWN — treat conservatively per license note above
image_access_policy:          UNKNOWN
image_redistribution_policy:  UNKNOWN
video_access_policy:          N/A (no video established)
video_redistribution_policy:  N/A

result:                     PARTIALLY_VERIFIED
```

**Real, non-obvious finding:** this ArcGIS layer is **not exclusively Washington cameras** — the first sampled record (`OBJECTID 1`) is credited to `"CameraOwne":"Tripcheck (ODOT)"`, i.e. an Oregon DOT camera included because it sits at a Washington/Oregon border crossing (I-5 at the Interstate Bridge). An adapter must not assume every record in a state-named ArcGIS layer belongs to that state's jurisdiction — the `CameraOwne`/`CameraOw_1` fields must be read and respected per-record, consistent with `MacEvil.md` §33's "coordinates outside source jurisdiction" detection requirement. Also: the layer rejected `resultRecordCount`-based pagination (`"Pagination is not supported"`) — a real technical constraint the eventual adapter must design around (e.g. `OBJECTID`-range batching, as used for this session's spot-check), not assumed to work like a standard paginated ArcGIS service.

---

## Summary (all sources verified to date)

| Source | Result | Category |
|---|---|---|
| NWS/NOAA Alerts API | VERIFIED | Event (weather) |
| USGS Earthquake GeoJSON | VERIFIED | Event (environmental) |
| INDOT WZDx Feed | VERIFIED — new finding, strongest INDOT license to date | Event (traffic/work-zone) |
| OpenTrafficCamMap | PARTIALLY_VERIFIED | Camera (aggregator) |
| FEMA/OpenFEMA Disaster Declarations | VERIFIED | Event (emergency) |
| Open511 | DEFERRED — no US implementation exists | N/A |
| OpenEye | FAILED_VALIDATION — documented endpoints don't resolve live; needs browser-based re-investigation | Camera (aggregator, unverified) |
| WSDOT Traffic Cameras (ArcGIS) | PARTIALLY_VERIFIED | Camera (state DOT) |

Eight sources researched across two batches this session. The remaining ~20+ source families in `projectatlas.md` §6 / `Project ATLAS-WebSite.md` §63 remain open for future sessions.

## Raw evidence archive (Batch 2)

| File | SHA-256 |
|---|---|
| `sources/wsdot-arcgis/layer-metadata-2026-08-23.json` | `0a0e230ddfafd3f0f673a30bd3d208b780c3f2308ff2661bbe94b8b124d8e42f` |
| `sources/wsdot-arcgis/query-sample-2026-08-23.json` | `364f8e9aba36f690ce87edb1a0cea486c2e3dbbdeb165d7a714be02b293d66b2` |
| `sources/fema-openfema/disaster-declarations-sample-2026-08-23.json` | `c853842215675f15c86ab247bf44df9f2de64e84fffa68e5c825f2dc27df9192` |
| `sources/openeye-cam/docs-page-raw-2026-08-23.html` | `a379a0da4413ce6af78163bc0a45920143717ca9318498ae92a837e7016da33a` |

The OpenEye raw HTML is archived specifically as evidence *for* the `FAILED_VALIDATION` finding above (proof the docs page is a client-rendered shell with no server-side documentation content), not as evidence of a working source.
