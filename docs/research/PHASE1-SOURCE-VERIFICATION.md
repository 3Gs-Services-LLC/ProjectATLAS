# Phase 1 — Source Verification Reports (first slice)

Produced per `MacEvil.md` §8–§10, following the checklist in `projectatlas.md` §6. This is a **first slice**, not the full checklist — `projectatlas.md` §6 and `Project ATLAS-WebSite.md` §63 list ~30+ source families still open. Every number below came from an actual request executed this session (2026-08-23); none are estimated or copied from a vendor's marketing claim without independent verification, per `MacEvil.md` §9's explicit prohibition on treating "endpoint found" as "source verified."

All requests used a self-identifying User-Agent (`ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`) and were made against URLs either officially documented or discovered through an official government open-data registry — no enumeration, guessing, or access-control bypass.

---

## Coverage Matrix

Cross-referenced against `Project ATLAS-WebSite.md` §4–§24's full named source catalog. Statuses: **VERIFIED** (endpoint hit, data confirmed real, policy established), **PARTIALLY_VERIFIED** (endpoint hit and data confirmed real, but policy/scope/redistribution incomplete), **EXCLUDED-WITH-REASON** (evaluated and correctly rejected, not silently skipped), **DEFERRED** (real candidate researched, none currently exists to verify), **UNSTARTED** (not yet touched this project).

| # | Family (`Project ATLAS-WebSite.md` §) | Status | Evidence |
|---|---|---|---|
| 1 | OpenTrafficCamMap (§4A) | PARTIALLY_VERIFIED | Batch 1 §4 — 7,029 real records, no per-camera ID field; re-confirmed stable, Batch 5 §22 |
| 2 | OpenEye (§5) | **VERIFIED** (corrected 2026-08-24) | Batch 2 §7 update — root cause was a wrong API host (`api.openeye.cam`, not `openeye.cam`); 53,677 real records, 31 countries, per-camera redistribution policy objects |
| 3 | OpenCCTV (§6) | PARTIALLY_VERIFIED | Batch 3 §9 — 38,709 real sitemap URLs (11,530 US); own `/api/` robots.txt-disallowed, `needs-outreach` #6 |
| 4 | Datumfeed (§7) | VERIFIED | Batch 3 §10 |
| 5 | Argus (§8) | PARTIALLY_VERIFIED | Batch 3 §11 — 229,308 real records; 382/390 upstream sources are re-scraped OpenCCTV |
| 6 | Live-Environment-Streams (§9) | PARTIALLY_VERIFIED, quarantined | Batch 3 §12 — no repo license, `needs-outreach` #7, `sources/live-environment-streams/NOTICE.md` |
| 7 | GitHub camera-repo discovery (§10) | VERIFIED as methodology | Batch 4 §14 — found & excluded `Ringmast4r/FLOCK`; found `kevtoe/worldview` lead |
| 8 | Nationwide 511/DOT discovery (§11) | PARTIALLY_VERIFIED — state-by-state, see below | Batch 2 §8 (WA), Batch 4 §15 (TX, negative), Batch 5/6 §18/§24 (OR, IA, MD, GA, UT via ArcGIS), Batch 6 §25 (Austin TX, Baton Rouge LA, New Orleans LA, Honolulu HI, Maryland, Seattle WA via Socrata), `projectatlas.md` §5A/§5B/§5D (IN) |
| 9 | Open511 (§12) | DEFERRED — no US implementation exists | Batch 2 §6 |
| 10 | ArcGIS REST discovery (§13) | **VERIFIED, fully mined and audited** (2026-08-24) | Batch 5 §18, Batch 6 §24, Batch 7 §28, Batch 8 §30/§31, Batch 9 §32-34 — all 758 real matches classified; every prior state audited for the Georgia-style status-filter issue; 11 states independently verified end-to-end; 1 false positive caught (PA/billboards); real negative findings for NC (dead link), TX (credential-gated), OH (non-representative) |
| 11 | OpenStreetMap camera-tag discovery (§14) | PARTIALLY_VERIFIED — state-by-state, see below | Batch 3 §13 (nationwide narrow), Batch 4 §17 (Indiana region-split) |
| 12 | U.S. Federal camera sources — NPS/BLM/USFS/USACE/BOR (§15) | **PARTIALLY_VERIFIED** (2026-08-24) — NPS real endpoint confirmed (needs a free key); BLM/USFS/USACE/BOR real negative findings, each with context | Batch 6 §26 |
| 13 | NOAA/NWS (§16) | PARTIALLY_VERIFIED — Alerts API only; NEXRAD/SPC/NHC/marine/aviation/observations untested | Batch 1 §1 |
| 14 | FEMA/IPAWS (§17) | PARTIALLY_VERIFIED, clarified 2026-08-24 — disaster declarations VERIFIED; live IPAWS feed is `ACCOUNT_REQUIRED` (not open, not tested further); IPAWS *archived* alerts dataset separately VERIFIED open | Batch 2 §5, Batch 5 §20 |
| 15 | WZDx (§18) | PARTIALLY_VERIFIED — Indiana feed fully verified; registry has ~42 feeds/29 states, only 1 fetched | Batch 1 §3 |
| 16 | State DOT traffic data, general (§19) | Same as #8 — see state-by-state below | — |
| 17 | Emergency response data — fire/EMS/police/CAD (§20) | UNSTARTED | — |
| 18 | Socrata discovery (§21) | **VERIFIED, followed through** (2026-08-24) | Batch 5 §19, Batch 6 §25, Batch 7 §29 — all 76 catalog matches individually categorized (not just counted); 4 real US live-monitoring-camera datasets confirmed with real record counts (New Orleans reclassified to enforcement) |
| 19 | CKAN discovery (§22) | PARTIALLY_VERIFIED — same negative finding as Data.gov below (Data.gov's backend is CKAN); no independent non-Data.gov CKAN instance tested | Batch 4 §16 |
| 20 | Data.gov (§23) | UNVERIFIED — real negative finding, classic API appears retired | Batch 4 §16 |
| 21 | USGS environmental events (§24) | PARTIALLY_VERIFIED — earthquake feed only; volcanoes/water/hazards products untested | Batch 1 §2 |

**State-by-state sweep tracking (families #8/#11/#16 — nationwide 511/DOT — and #11 — OSM camera-tag discovery):**

| State | 511/DOT status | OSM camera-tag status |
|---|---|---|
| Indiana (IN) | VERIFIED — three distinct paths (`projectatlas.md` §5A CARS-Hub XML, §5B GraphQL/HLS, §5D WZDx) | VERIFIED (region-split) — 3,975 real nodes, incl. real ALPR/Flock tags and a `trafficwise.org` cross-reference lead (Batch 4 §17) |
| Washington (WA) | PARTIALLY_VERIFIED — WSDOT ArcGIS layer, 1,533 records (Batch 2 §8); Seattle traffic cameras also found via Socrata as a federated pointer, not independently record-counted (Batch 6 §25) | UNSTARTED |
| Oregon (OR) | VERIFIED — TripCheck_Cameras ArcGIS layer, 1,164 records, explicit `licenseInfo: "Public"` (Batch 5 §18) | UNSTARTED |
| Iowa (IA) | VERIFIED — ArcGIS `Traffic_Cameras_View`, 1,251 records (Batch 6 §24) | UNSTARTED |
| Maryland (MD) | VERIFIED — **three** independent confirmations, still unreconciled: ArcGIS CHART MapServer 552 (Batch 6 §24), Socrata `opendata.maryland.gov` 451 (Batch 6 §25), ArcGIS `MDOT_Traffic_Cameras` (ESRI government account) 535, confirmed via sampled `chart.maryland.gov` links to genuinely be Maryland despite the ambiguous MDOT abbreviation (Batch 9 §33) | UNSTARTED |
| Georgia (GA) | VERIFIED, audited — ArcGIS `GDOT_511_Traffic_Cameras_Updated`; **3,676 active / 7,083 total** (Enabled/Disabled split confirmed and explained, Batch 7 §27; re-confirmed clean in the Batch 8 §30 full audit) | UNSTARTED |
| Utah (UT) | VERIFIED, audited and corrected twice — the originally-reported `Live_View_Cameras` layer (32 records) is **not a camera-location dataset at all** (it's a UDOT camera-installation procurement/budget dataset — `Est__Cost`, `Master_Pla`, `Package` fields); the real comparable layer is `CCTV`, and its own status field further corrects the figure to **1,188 active / 1,437 total** (Batch 7 §28, Batch 8 §30) | UNSTARTED |
| Florida (FL) | VERIFIED, audited — ArcGIS `FL511_Traffic_Cameras`, **4,057 real records**, no status field present, confirmed clean (Batch 7 §28, Batch 8 §30). A second real source (`FDOT_Traffic_Cameras`, ESRI government account) gives **3,651**, unreconciled with the first (Batch 9 §33) | UNSTARTED |
| Missouri (MO) | VERIFIED — new state, ArcGIS `MODOT_Traffic_Cameras`, **871 real records**; schema has a `STREAM_ERROR` health flag (831 currently error-free), a different concept from Georgia/Utah's active/retired split, reported as an informative sub-figure not a corrected count (Batch 8 §31) | UNSTARTED |
| Virginia (VA) | VERIFIED — new state, ArcGIS `CameraLocationVDOT`, **1,231 active / 1,293 total**, `active` field checked and applied immediately per the new audit discipline (Batch 8 §31) | UNSTARTED |
| Texas (TX) | PARTIALLY_VERIFIED — ArcGIS DCAT portal negative (Batch 4 §15), but Austin TX independently verified via Socrata, 1,005 records (Batch 6 §25) — state-level DOT data still unconfirmed, city-level (Austin) is real. A real, specific state-level source (`Skyline_TxDot_Cameras`) was found this session but is credential-gated, not bypassed (Batch 9 §34) | UNSTARTED |
| Louisiana (LA) | VERIFIED — Baton Rouge via Socrata, 118 records (Batch 6 §25). New Orleans's 103-record dataset is **excluded from this camera-monitoring count** — confirmed to be automated speed/red-light/school-zone enforcement (ticketing) infrastructure, not passive traffic monitoring; tracked separately under the enforcement-camera policy track (Batch 7 §29) | UNSTARTED |
| Hawaii (HI) | VERIFIED — Honolulu via Socrata, 253 records (Batch 6 §25) | UNSTARTED |
| Pennsylvania (PA) | EXCLUDED — real false positive: the matched ArcGIS item ("PENNDOT_20240325") is actually a billboard/sign-permit database (`PA_BILLBOARDS`), not traffic cameras; caught before being counted (Batch 8 §31) | UNSTARTED |
| North Carolina (NC) | UNVERIFIED — real negative finding; an own-domain NCDOT catalog entry (`gis11.services.ncdot.gov`) 404s at both FeatureServer and MapServer; not chased with further guessing (Batch 8 §31) | UNSTARTED |
| Alabama (AL) | VERIFIED — new state, ArcGIS `ALDOT_Traffic_Cameras_011323`, **539 real records**, status field checked immediately (all active, confirmed clean) (Batch 9 §32) | UNSTARTED |
| Kentucky (KY) | VERIFIED — new state, **254 real records**, cross-confirmed by two independent endpoints (KYTC's own domain + an ArcGIS mirror, exact agreement) (Batch 9 §32) | UNSTARTED |
| Colorado (CO) | UNSTARTED-WITH-LEADS — a real CDOT camera surfaced via OpenEye, a real WZDx registry entry, and a real Socrata `href` pointer all exist, but no independently-verified direct CO endpoint found; three guessed endpoints returned real 404s/errors (Batch 5 §23, Batch 6 §25) | UNSTARTED |
| Ohio (OH) | UNSTARTED-WITH-LEADS — a real but tiny (7-record), likely-local (Marysville) layer found; Ohio's real statewide ODOT source not yet found (Batch 9 §34) | UNSTARTED |
| All other 34 states + DC + territories | UNSTARTED | UNSTARTED (except the nationwide-not-region-split query in Batch 3 §13, which covered the whole US at once but at a narrow tag scope and found ~nothing) |

**ADR file paths, confirmed by direct directory listing 2026-08-24** (a prior report summarized ADR content from memory without citing files — corrected here):

- [`docs/adr/0001-technology-stack.md`](../adr/0001-technology-stack.md)
- [`docs/adr/0002-source-adapter-architecture.md`](../adr/0002-source-adapter-architecture.md)
- [`docs/adr/0003-database-migrations.md`](../adr/0003-database-migrations.md)
- [`docs/adr/0004-identity-resolution.md`](../adr/0004-identity-resolution.md)
- [`docs/adr/0005-media-retention-policy.md`](../adr/0005-media-retention-policy.md)
- [`docs/adr/0006-safe-fetch-layer.md`](../adr/0006-safe-fetch-layer.md)

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

USA-only geofencing — gap closed 2026-08-24:
  The original 2026-08-23 verification above reported the raw global feed
  count (199) with a caveat that "US subset requires filtering," but did
  not actually apply or confirm a filter — that gap is closed here, not
  retroactively implied to have always been checked.

  No geofencing filter existed anywhere in this repository before this
  check (no ingestion code exists at all yet — Phase 4 hasn't started).
  This session wrote a one-off verification script (not production code)
  applying a first-pass multi-region US+territories bounding-box filter
  (CONUS, Alaska — including the Aleutians crossing the antimeridian —
  Hawaii, Puerto Rico/USVI, Guam/N. Mariana Islands, American Samoa)
  against a freshly re-fetched live feed:

    BEFORE (raw feed, worldwide):        194  (metadata.count, this run —
                                                differs from the 199 recorded
                                                2026-08-23 because this is a
                                                live rolling "past day" feed
                                                that changes minute to minute,
                                                not a discrepancy in method)
    AFTER (US + territories geofence):   169
    Dropped as non-US:                    25

  Sample retained records span CA, AK, NM, TX, and Puerto Rico — confirming
  the filter logic is discriminating correctly, not just passing everything
  through. This bounding-box approach is a reasonable first pass but is NOT
  precise at region boundaries (e.g. it will not correctly exclude a point
  just outside a US EEZ but inside a box) — the eventual Phase 8 (Normalization
  + Geography) adapter should use a proper US/territory polygon (e.g. Census
  TIGER boundaries) rather than these approximate rectangles. This script and
  its exact bounding boxes are not committed as production code; they exist
  only to produce this verified before/after count.

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

**Note:** feeds `Project ATLAS-WebSite.md` §24's USGS earthquake event adapter. This specific feed is global — the adapter must filter to US/territory coordinates per `projectatlas.md` §4's geofencing requirement before any record is promoted past `CANDIDATE`; USGS itself imposes no such restriction (correctly, since ATLAS's US-only scope is ATLAS's own product boundary, not a source limitation). **Update 2026-08-24:** the geofence itself has now been confirmed working with real before/after counts (see above) — this was a real gap in the original entry (a stated requirement, not a demonstrated one) and is now closed with evidence rather than assumption.

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

**Update 2026-08-24 — resolved via real browser session, root cause identified:** using a real browser (rendering the JS, not a static HTML fetch), the docs page's actual content was read directly. **The root cause of the previous 404s was a wrong host, not a nonexistent API:** the API is served from `api.openeye.cam`, not `openeye.cam`. Last session's tests (and the WebFetch summary it was checking) all targeted `openeye.cam/v1/...`, which correctly 404's — `api.openeye.cam/v1/...` is live and real. Corrected verification:

```text
source:                    OpenEye public camera directory/API — CORRECTED
official_url:              https://openeye.cam (docs); https://api.openeye.cam (actual API host)
verification_date:         2026-08-24
verification_method:       Real browser session (JS-rendered docs page read directly) +
                            direct HTTPS GET against api.openeye.cam
authentication:             None for public read endpoints (catalog/map/categories/nearest);
                            a free API key is required for actual frame-byte retrieval
                            (POST /v1/agents/register — not obtained this session, not needed
                            for metadata-level verification)
observed_format:            application/json

records_discovered:         53,677 (live `/v1/catalog/categories` total, this session — docs'
                            own example text says "~51k", so this is independently confirmed in
                            the right order of magnitude, not just copied from the docs)
records_valid:               Spot-checked a real Colorado DOT/COtrip camera
                            (`stream_01KW4JQ8R5EG1XNRGZ741YKJ7H`, "I-70 @ MM 183.6") with a full,
                            structured field set: category, coordinates, `source_adapter: "cdot"`,
                            and a genuinely detailed per-camera `redistribution` policy object
                            (`preview_embed`, `frame_reuse`, `frame_access`, `attribution.required`)
coverage:                    31 countries per the live categories response; category breakdown:
                            traffic 46,007, weather 2,348, port 1,449, surf 1,348, other 1,105,
                            ski 859, city 513, park 38, wildlife 10 (sums to the 53,677 total)
license:                   Per-camera, machine-readable — the `redistribution` object on every
                            record states exactly what's permitted (preview embedding, frame
                            reuse mode, attribution requirement) rather than one blanket policy.
                            This is a real strength: policy is queryable per-record, not something
                            that has to be inferred or assumed.

result:                     VERIFIED (superseding the FAILED_VALIDATION result above)
```

**Root-cause lesson, stated plainly:** the original failure was this project's own testing methodology (guessing the API lived on the docs page's own domain, a very common but unverified assumption), not evidence of a nonexistent or fabricated source. Both things can be true at once — the earlier `WebFetch` summary genuinely was unverifiable from the raw HTML at the time (that finding stands, and the discipline of not trusting an AI summary without direct verification was correct) — and the underlying source is, in fact, real and substantial. This supersedes the FAILED_VALIDATION conclusion above; OpenEye should be treated as `POLICY_VERIFIED`-adjacent for the traffic category going forward, pending a closer look at the exact `redistribution.frame_reuse` semantics before any production adapter relies on it.

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

---

## Batch 3 (2026-08-24, continued session — OpenCCTV, Datumfeed, Argus, Live-Environment-Streams, OSM)

Before this batch, `projectatlas.md` §6's checklist already had NWS/NOAA, FEMA/IPAWS, WZDx, OpenTrafficCamMap, OpenEye, Open511, and ArcGIS discovery covered (Batches 1–2). This batch deliberately targets genuinely uncovered families: OpenCCTV, Datumfeed, Argus, Live-Environment-Streams, and a first OpenStreetMap camera-tag discovery query.

### 9. OpenCCTV — real sitemap-based count, but its own `/api/` is off-limits by its own robots.txt

```text
source:                    OpenCCTV
provider:                  OpenCCTV operator (identity not established this session) —
                            AGGREGATOR, per Project ATLAS-WebSite.md §6's own instruction to never
                            treat it as original camera authority
jurisdiction:              Global; this session isolated the US-path subset
official_url:              https://opencctv.org
documentation_url:         None found — no public API docs page
terms_url:                 Not located; robots.txt is the only discovered access-policy signal
license:                   UNKNOWN for the underlying camera data. robots.txt's Content-Signal
                            header states ai-train=no, search=yes,use=reference — a real,
                            explicit machine-readable content-use signal (a newer,
                            content-signals-style extension of robots.txt), not simply an
                            absence of policy.
verification_date:         2026-08-24
verification_method:       Direct HTTPS GET against robots.txt, sitemap.xml, and the three
                            listed camera sitemaps; a live `/api/cameras` probe (see finding below)
access_method:              OTHER_PUBLIC (sitemap-based static pages); a real `/api/` also exists
                            but is explicitly excluded by the site's own robots.txt
authentication:             None required for either the sitemap pages or (as observed) the API
rate_limit:                 Not documented
observed_format:            XML sitemap (page discovery); JSON (the disallowed API)

records_discovered:         38,709 total camera detail-page URLs across all three camera
                            sitemaps (15,000 + 15,000 + 8,709 — sitemap.xml's own file-count
                            limits, not a coincidence); 11,530 of those fall under the
                            `/cameras/united-states/` path specifically
records_valid:               38,709 URLs are well-formed `<loc>` entries; not independently
                            fetched/validated one-by-one this session
records_invalid:              N/A
source_id_uniqueness:       URL slug carries a trailing numeric ID (e.g. `...-966`) — not
                            cross-checked for uniqueness across all 38,709 this session

coordinate_validity:        N/A — not established from sitemap URLs alone (would require
                            fetching individual camera pages)
coordinate_system:           N/A
coverage:                    ~150 country-path segments observed in the sitemap; US is the
                            largest single country segment found (11,530 of 38,709, ~30%)

still_available:             Not established from sitemap URLs alone
video_available:             Not established from sitemap URLs alone
stream_types:                Not established from sitemap URLs alone

metadata_storage_policy:     UNKNOWN
image_access_policy:          UNKNOWN
image_redistribution_policy:  UNKNOWN
video_access_policy:          UNKNOWN
video_redistribution_policy:  UNKNOWN

result:                     PARTIALLY_VERIFIED
```

**Count vs. marketing claim:** `Project ATLAS-WebSite.md` §6 cites OpenCCTV's own advertised "70,000+ U.S. cameras, 150,000+ global." The independently-derived sitemap count is **38,709 total, 11,530 US** — well under half the advertised US figure and roughly a quarter of the advertised global figure. This is exactly the kind of independent re-derivation `MacEvil.md` §9 requires instead of trusting a vendor's cited number; it does not necessarily mean the claim is false (the site could have more camera pages than its sitemap lists, or count differently), only that the sitemap-derived figure is the one with actual evidence behind it this session.

**Important process finding — a real access-control signal was crossed, disclosed rather than hidden:** this session's initial discovery probe hit `https://opencctv.org/api/cameras` twice (once as a bare status check, once fetching the full error body: `{"error":"bounds parameter required (s,w,n,e)"}`, confirming a real, functioning API exists) *before* checking `robots.txt`. Once fetched, `robots.txt` explicitly states `Disallow: /api/` for `User-agent: *`. No further requests were made to any `/api/` path after this was discovered. Per `MacEvil.md` §2/§119 (no defeating access controls) and the general discipline of respecting a site's stated automated-access policy, **the correct sequence is robots.txt first, target endpoint second** — this session did it backwards for OpenCCTV specifically and is recording that plainly rather than omitting it. The sanctioned path for any future OpenCCTV work is the sitemap-based static pages (`Allow: /cameras/`), consistent with `Project ATLAS-WebSite.md` §6's own instruction to look for "sitemap, structured pages" as alternatives to an API. **No further requests to `opencctv.org/api/*` should be made without the operator's explicit review of this finding.**

**Update 2026-08-24:** filed as [GitHub Issue #6](https://github.com/3Gs-Services-LLC/ProjectATLAS/issues/6) (`needs-outreach`) — requesting explicit permission for `/api/` access and clarification on whether the site's `Content-Signal: ai-train=no` covers ProjectATLAS's use case. Confirmed on re-inspection that the actual `/api/cameras` response body was never written into `sources/opencctv/` — only `robots.txt`-allowed content (robots.txt itself, the sitemap index, and a sitemap excerpt) is committed there.

### 10. Datumfeed — real, well-documented camera-verification API

```text
source:                    Datumfeed
provider:                  Datumfeed (independent operator) — explicitly a
                            DISCOVERY+PROVENANCE+VERIFICATION layer per its own `llms.txt`,
                            matching Project ATLAS-WebSite.md §7's expected shape exactly
jurisdiction:              Multi — 6 registries observed, at least 2 US (Austin, Caltrans)
official_url:              https://datumfeed.com
documentation_url:         https://datumfeed.com/openapi.json (real, valid OpenAPI 3.0.3 spec,
                            verified by direct fetch, not summary); https://datumfeed.com/llms.txt
terms_url:                 Not a separate page; usage terms stated inline in llms.txt/openapi.json
license:                   Varies per registry (see below) — Datumfeed exposes each upstream
                            registry's own license explicitly, rather than asserting one blanket
                            license over all cameras
verification_date:         2026-08-24
verification_method:       Direct HTTPS GET against openapi.json, llms.txt, /api/cameras,
                            /api/registries — every endpoint named in llms.txt was independently
                            tested and matched the OpenAPI spec, unlike the OpenEye finding
                            earlier in this document
access_method:              OTHER_PUBLIC (anonymous free tier)
authentication:             None required for the free tier (60 req/hr unauthenticated per
                            llms.txt; 3,600 req/hr with a free API key — not obtained this session)
rate_limit:                 60 requests/hour unauthenticated, self-declared and enforced via
                            observed `X-Ratelimit-*` response headers (Limit: 60, Remaining: 56
                            after 4 requests this session — the header count is internally
                            consistent with actual requests made, a good verification signal)
observed_format:            application/json

records_discovered:         8,970 catalogued cameras (8,507 currently "active") per llms.txt's
                            own stated figure, across 6 registries; this session fetched a
                            100-record page of the `/api/cameras` endpoint and the full
                            `/api/registries` summary (not all 8,970 individual records)
records_valid:               100 sampled — each carries id, name, lat/lon, feedUrl, feedType,
                            per-camera registry/license block, and a live verification status
                            (`auto_checked`, or `contradicted` for one sampled camera found
                            serving a shared placeholder image — Datumfeed catches this itself)
records_invalid:              1 of 100 sampled flagged `contradicted` by Datumfeed's own
                            verification (not a data error on this session's part — Datumfeed's
                            stated purpose is catching exactly this kind of thing)
source_id_uniqueness:       `id` field (e.g. `atx-1`) — unique within sample, namespaced per
                            registry

coordinate_validity:        VERIFIED — sampled coordinates (e.g. 30.363686, -97.698158, Austin
                            TX) plausible and correctly located
coordinate_system:           WGS84 decimal degrees
coverage:                    6 registries: at minimum confirmed Austin, TX (817/1,005 active)
                            and Caltrans/California (3,304/3,476 active) from the registries
                            summary; the other 4 registries were listed but not individually
                            inspected this session

still_available:             Yes — `feedType: "jpeg_poll"` observed (Austin)
video_available:             Not established for the sampled records (Austin uses JPEG polling)
stream_types:                STILL_IMAGE (jpeg_poll) observed; OpenAPI schema indicates other
                            feed types are supported but none were sampled this session

metadata_storage_policy:     Permitted — Datumfeed explicitly states "Public data only" and
                            requires citing `registry.attribution`
image_access_policy:          Per-registry: Austin is Public Domain (data.austintexas.gov);
                            Caltrans has a `licenseUrl` (dot.ca.gov/conditions-of-use) but
                            `licenseName: null` — treat Caltrans conservatively (UNKNOWN-style)
                            despite the URL existing, since no explicit license name is asserted
image_redistribution_policy:  Per-registry `commercialOk` field observed (true for Austin);
                            Caltrans not confirmed this session
video_access_policy:          N/A (no video sampled)
video_redistribution_policy:  N/A

result:                     VERIFIED
```

**Notable finding — this source models the exact discipline ATLAS itself is supposed to have:** Datumfeed publishes, per camera, a `verificationStatus` (`auto_checked` / `contradicted`), `verificationNotes` (plain-English explanation, e.g. "serves a shared placeholder image"), and even documents its own CORS-testing methodology inline in the registries response ("verified via headless Chromium, 2026-07-22... pixelReadable:false"). This is a real, working example of the evidence-over-assumption discipline `MacEvil.md` §4.2 asks ATLAS to build, worth treating as a design reference during Phase 6/7 adapter work, not just a data source to consume.

### 11. Argus (`GoSlowPoke168/Argus`) — real dataset, but a second-order OpenCCTV re-aggregation for most of it

```text
source:                    Argus (GitHub: GoSlowPoke168/Argus)
provider:                  GoSlowPoke168 (independent maintainer) — AGGREGATOR OF AGGREGATORS,
                            see finding below
jurisdiction:              Global; per Project ATLAS-WebSite.md §8, count/coverage independently
                            re-derived rather than trusted from the repo description
official_url:              https://github.com/GoSlowPoke168/Argus
documentation_url:         Repository README; `public/cameras.geojson` self-documents via a
                            `metadata` block
terms_url:                 https://github.com/GoSlowPoke168/Argus/blob/master/LICENSE
license:                   MIT (repo-level, confirmed via GitHub API) — same caveat as
                            OpenTrafficCamMap (Batch 1, §4): covers the repository's own compiled
                            dataset, not necessarily the underlying streams' own policies
verification_date:         2026-08-24
verification_method:       `gh api` repository-metadata inspection, then direct HTTPS GET of the
                            actual `public/cameras.geojson` data file (100,770,547 bytes) against
                            the repo's real default branch (`master` — not `main`, confirmed via
                            API before guessing)
access_method:              OTHER_PUBLIC (GitHub raw content)
authentication:             None required
rate_limit:                 GitHub raw-content standard limits; not ATLAS-specific
observed_format:            application/json (GeoJSON FeatureCollection with a rich `metadata`
                            block: generated timestamp, total_cameras, sources[], per_source_counts)

records_discovered:         229,308 (`metadata.total_cameras`, cross-checked against actual
                            `features.length` — matched exactly)
records_valid:               229,308 — spot-checked records carry id, name, geometry,
                            type/city/country, feedUrl/playerUrl/streamUrl, feedType, source,
                            directEligible, updateRate
records_invalid:              not exhaustively validated this session
source_id_uniqueness:       `properties.id` is composite (`<source>_<upstream-slug>`) —
                            structurally guarantees uniqueness across sources by construction

coordinate_validity:        VERIFIED — sampled coordinates (e.g. Albuquerque International
                            Airport at -106.61, 35.04; a real NY511 camera at
                            -75.293672, 43.120519) plausible
coordinate_system:           WGS84 decimal degrees
coverage:                    390 distinct upstream "sources" listed in metadata, spanning most
                            populated countries

still_available:             Yes — `feedType: "image"` observed (e.g. a weather.gov airport
                            webcam JPEG)
video_available:             Yes — `feedType: "m3u8"` observed (e.g. a real NY 511/NYSDOT HLS
                            stream at `s52.nysdot.skyvdn.com`)
stream_types:                STILL_IMAGE (image), HLS (m3u8) both directly observed

metadata_storage_policy:     UNKNOWN — no explicit data-license statement found beyond the
                            repo's MIT code license
image_access_policy:          UNKNOWN per underlying source
image_redistribution_policy:  UNKNOWN per underlying source
video_access_policy:          UNKNOWN per underlying source
video_redistribution_policy:  UNKNOWN per underlying source

result:                     PARTIALLY_VERIFIED
```

**Count vs. marketing claim — the rare case where the claim understated reality:** the repo description advertises "215k+ global traffic camera streams." The independently re-derived, server-reported count is **229,308** — larger than claimed, not smaller. Still independently verified rather than trusted at face value, per §9's requirement; it happens to check out favorably here, which is itself worth recording rather than silently assuming every aggregator over-claims.

**Major provenance finding — real double-aggregation, with direct evidence:** of the 390 upstream "sources" listed in Argus's own metadata, **382 are prefixed `opencctv_`** (e.g. `opencctv_ny511`, `opencctv_airportwebcams`, `opencctv_caltrans`) — meaning the large majority of Argus's dataset is itself re-scraped from OpenCCTV (§9 above), which is itself already classified as an aggregator, not an original operator. This is confirmed directly in per-feature data, not inferred: a sampled NY511 camera's `properties.source` field is literally `"opencctv_ny511"`. This is a real, concrete illustration of exactly the risk `Project ATLAS-WebSite.md` §64 warns about ("the same camera may appear in [original / aggregator / discovery] layers... do not count it five times") — an ATLAS identity-resolution pass that later ingests OpenCCTV directly AND Argus would very likely be looking at the same underlying NYSDOT/Caltrans/etc. camera through two different aggregator lenses, and must not double-count it. `scripts/scraper.py` in the repo confirms this is scraper-built, not an original data partnership — treat with the same "aggregator, verify original operator before treating as canonical" discipline as OpenCCTV itself.

### 12. Live-Environment-Streams (`willytop8/Live-Environment-Streams`)

```text
source:                    Live-Environment-Streams (GitHub: willytop8/Live-Environment-Streams)
provider:                  willytop8 (independent maintainer) — AGGREGATOR (multiple named
                            upstream source_family values, including "opencctv" as one of several)
jurisdiction:              Global; explicit per-source license/country metadata provided (a real
                            strength — see below)
official_url:              https://github.com/willytop8/Live-Environment-Streams
documentation_url:         Repository `sources.json` and `llms.txt` (both fetched directly)
terms_url:                 None found; repo-level license is explicitly `null` (confirmed via
                            GitHub API `license.spdx_id`) — this repository carries NO declared
                            license at all, which under default copyright law means no rights are
                            granted beyond viewing — treat as more restrictive than
                            OpenTrafficCamMap/Argus's MIT, not equivalent to it
license:                   UNKNOWN/no license declared at the repo level; individual
                            `sources.json` entries self-report a `license_type` per upstream
                            source (e.g. `public_domain` for VDOT, `fair_use` for SkylineWebcams,
                            `open_data` for its OpenCCTV-sourced entries) — a real, useful,
                            per-source signal, but the repository's own lack of a license is the
                            governing constraint for the compiled dataset itself
verification_date:         2026-08-24
verification_method:       `gh api` repository metadata; direct HTTPS GET of `sources.json` and
                            `streams.geojson` against the confirmed real default branch (`main`)
access_method:              OTHER_PUBLIC (GitHub raw content)
authentication:             None required
rate_limit:                 GitHub raw-content standard limits
observed_format:            application/json (GeoJSON FeatureCollection + a separate sources
                            metadata JSON)

records_discovered:         5,997 (`features.length`, counted directly — matches the
                            "5,000+" claim in Project ATLAS-WebSite.md §9 reasonably closely,
                            unlike OpenCCTV's and Argus's larger discrepancies)
records_valid:               5,997 — spot-checked records carry name, url, display_name,
                            country_code, environment, source_family, quality_tier, scene_type,
                            url_type, coordinates_quality, status, last_verified
records_invalid:              not exhaustively validated this session
source_id_uniqueness:       No single unique ID field observed on sampled features (name +
                            coordinates + source_family together, similar to OpenTrafficCamMap's
                            identity-signal gap noted in Batch 1)

coordinate_validity:        VERIFIED — sampled coordinate (20.17, 41.15 — Durres, Albania)
                            plausible for the stated location
coordinate_system:           WGS84 decimal degrees
coverage:                    Global; `sources.json` documents at least Virginia DOT (US,
                            public_domain, 1,168 streams, "Primary US traffic source" per its own
                            notes) as a real US-relevant registry within this dataset

still_available:             Mixed — `url_type: "html_page"` for SkylineWebcams entries (the page
                            must be scraped for the actual media URL, not a direct feed)
video_available:             Yes — VDOT entries use `url_types: ["hls"]` per sources.json
stream_types:                HLS (VDOT), HTML-embedded webcam pages (SkylineWebcams)

metadata_storage_policy:     UNKNOWN (no repo license)
image_access_policy:          Per-source (see license field above)
image_redistribution_policy:  UNKNOWN — no repo-level grant
video_access_policy:          Per-source; VDOT explicitly public_domain
video_redistribution_policy:  UNKNOWN for the compiled dataset as a whole

result:                     PARTIALLY_VERIFIED
```

**Genuinely well-behaved finding worth flagging positively:** `sources.json`'s entry for `skylinewebcams` explicitly states *"direct HLS URLs use expiring auth tokens and are intentionally not published. Extract the m3u8 from the page at fetch time."* — the dataset's own maintainer deliberately does not publish or bypass an expiring-auth-token stream, consistent with `MacEvil.md` §2's prohibition on defeating access controls. Worth noting as a positive counter-example alongside this session's OpenCCTV `/api/` finding above (a case where a boundary *was* crossed, briefly) — not every third-party aggregator behaves the same way, and that distinction matters for how much trust to extend each one.

**Update 2026-08-24 — licensing gap identified and quarantined:** the repository itself has no LICENSE file (`license.spdx_id: null`), meaning it is all-rights-reserved by default regardless of the reasonable per-source license metadata inside `sources.json`. Filed as [GitHub Issue #7](https://github.com/3Gs-Services-LLC/ProjectATLAS/issues/7) (`needs-outreach`). `sources/live-environment-streams/NOTICE.md` now quarantines the 5,997 records held in this repository as **not cleared for redistribution** pending that issue's resolution — this changes the practical status of this entry from `PARTIALLY_VERIFIED` (technical) to explicitly blocked on policy grounds, not just technically unconfirmed.

### 13. OpenStreetMap camera-tag discovery — real Overpass query, low yield, real rate limits hit

```text
source:                    OpenStreetMap traffic-surveillance node tags, via the public Overpass API
provider:                  OpenStreetMap contributors / Overpass API (overpass-api.de)
jurisdiction:              Queried specifically for area["ISO3166-1"="US"]
official_url:              https://overpass-api.de/api/interpreter
documentation_url:         https://wiki.openstreetmap.org/wiki/Overpass_API
terms_url:                 ODbL (Open Database License) — stated directly in every Overpass
                            response's `osm3s.copyright` field
license:                   ODbL — attribution and share-alike terms apply; confirmed directly
                            from the live response, not a separate documentation page
verification_date:         2026-08-24
verification_method:       Two real Overpass QL queries executed against the live public
                            Overpass instance
access_method:              GOVERNMENT_OPEN-adjacent (community-run public infrastructure, not
                            government-operated, but open/unauthenticated per OSM's own model)
authentication:             None required
rate_limit:                 REAL LIMIT HIT THIS SESSION: a broader 3-tag query
                            (`man_made=surveillance` OR `surveillance=*` OR `camera:type=*`,
                            nationwide US) timed out after 61 seconds with
                            `"runtime error: Query timed out in \"query\" at line 1 after 61
                            seconds."` — a genuine, directly observed constraint, not assumed
observed_format:            application/json (Overpass JSON)

records_discovered:         1 (narrow query: `man_made=surveillance` AND
                            `surveillance:type=traffic`, nationwide US, via `out count;`)
records_valid:               1 — query executed successfully and returned a real, specific count
records_invalid:              N/A (broader query did not complete — see rate_limit above)
source_id_uniqueness:       N/A (count-only query this session, no individual node IDs pulled)

coordinate_validity:        N/A this session
coordinate_system:           WGS84 (OSM standard)
coverage:                    Queried nationwide US only

still_available:             N/A
video_available:             N/A
stream_types:                N/A

metadata_storage_policy:     Permitted under ODbL with attribution/share-alike
image_access_policy:          N/A (OSM stores tags/locations, not imagery)
image_redistribution_policy:  N/A
video_access_policy:          N/A
video_redistribution_policy:  N/A

result:                     PARTIALLY_VERIFIED
```

**Real, low-yield finding, not a failure to hide:** the specific tag combination `man_made=surveillance` + `surveillance:type=traffic` (the exact tags `Project ATLAS-WebSite.md` §14 names) returns essentially nothing for the whole US — a single node. This does not mean OSM has no US traffic-camera tagging at all; it means either (a) this specific tag combination is rarely used by US OSM contributors for traffic cameras, or (b) a broader/different tag vocabulary is needed, which the follow-up broader query was designed to check but hit the public Overpass instance's query-complexity timeout before returning results. **Next step, not attempted this session:** split a broader query by state/region to stay under the public instance's complexity budget, or evaluate a dedicated/self-hosted Overpass mirror if OSM becomes a serious camera-discovery source — both real, concrete follow-ups rather than a vague "investigate more." **Update 2026-08-24: this exact follow-up was attempted this session — see §17 below.**

---

## Batch 4 (2026-08-24, continued session — GitHub discovery, 511/DOT beyond WSDOT, Data.gov, region-split OSM)

### 14. GitHub camera-repository discovery, as a standalone search methodology

```text
source:                    GitHub repository search (`gh api search/repositories`), not a
                            single data source
provider:                  N/A — a discovery mechanism, per Project ATLAS-WebSite.md §10
verification_date:         2026-08-24
verification_method:       `gh api search/repositories` with search terms from
                            Project ATLAS-WebSite.md §10/§36 ("traffic camera", "webcam",
                            "camera GeoJSON", etc.)
result:                     Mechanism VERIFIED as workable; two real, previously-uncatalogued
                            repositories surfaced and independently inspected
```

An initial broad query (`traffic camera geojson in:readme stars:>3`) mostly surfaced unrelated "awesome list" repositories that happened to mention the search terms in passing — a real, worth-noting caveat about naive GitHub full-text search: **result relevance requires manual triage, not just a star-count sort.** Two genuinely relevant, real repositories were found and independently inspected:

- **`Ringmast4r/FLOCK`** (147 stars, no license) — "Surveillance camera network map - 336K+ cameras worldwide with inter-agency data sharing visualization." Its README confirms it is specifically an ALPR/Flock Safety camera-network visualization project ("336,708 surveillance cameras from public databases worldwide... ALPR... Flock Safety camera installations... network connections showing data sharing between law enforcement agencies"). **Policy-relevant finding, not an ingestion candidate:** this project's own README does not cite official government transparency/public-records sources for its camera locations — it describes compiling from "public databases worldwide" without further sourcing detail, and its internal directory name (`discord-flock`, visible in its own Quick Start instructions) suggests community/hobbyist origin rather than an official-agency data partnership. Per `projectatlas.md` §4's requirement that ALPR location data come **only from official channels, never from crowdsourced/community-mapped datasets**, this project fails that bar on its face (it does not demonstrate official sourcing) and is correctly excluded from ATLAS's ALPR pipeline. Recorded here specifically so a future session doesn't re-discover it and wonder whether it was evaluated — it was, and it doesn't qualify.
- **`kevtoe/worldview`** (221 stars) — "Real-time tactical intelligence platform — CesiumJS globe with flights, satellites, earthquakes, traffic & CCTV overlays." Noted but not further inspected this session; a candidate for future GitHub-discovery follow-up given its broader multi-domain scope (matches several of ProjectATLAS's own non-camera data families — see `Project ATLAS-WebSite.md` §1).

### 15. Nationwide 511/DOT discovery beyond WSDOT — TxDOT (real negative finding)

```text
source:                    Texas DOT (TxDOT) traffic camera data
verification_date:         2026-08-24
verification_method:       TxDOT's own ArcGIS Open Data portal DCAT feed
                            (gis-txdot.opendata.arcgis.com/api/feed/dcat-us/1.1.json), direct fetch
access_method:              Attempted GOVERNMENT_OPEN discovery
result:                     UNVERIFIED — no camera dataset found via this specific discovery path
                            this session
```

The DCAT feed returned a real, ~1MB response, but contained zero `dcat:Dataset` entries matching "camera"/"CCTV"/"traffic" in a title search — either the feed is paginated beyond what this session fetched, structured differently than assumed, or TxDOT's camera data isn't published through this specific catalog. This is recorded as a genuine negative finding, not silently omitted: **TxDOT camera data was not found via its ArcGIS open-data portal this session** (contrast with WSDOT, Batch 2, where the equivalent search succeeded immediately). Separately, web research surfaced **TrafficLand** as a real, differently-licensed distribution model worth a future research lead: it claims "redistribution agreements with over 50 Departments of Transportation," which — if independently verified — would be a genuinely different (contractually licensed, not scraped) sourcing path than every aggregator found so far in this project. Not verified this session; only the lead is recorded.

### 16. Data.gov/CKAN discovery — real negative finding, classic API endpoint appears retired

```text
source:                    Data.gov (catalog.data.gov) CKAN API
verification_date:         2026-08-24
verification_method:       Direct HTTPS GET against the documented classic CKAN action API
                            (`/api/3/action/package_search`, `/api/3/action/status_show`), plus
                            the GSA-documented newer endpoint (`api.gsa.gov/technology/datagov/v3/...`)
                            with the publicly-documented `DEMO_KEY`
result:                     UNVERIFIED — the API path did not work this session; the web catalog
                            itself is confirmed live
```

`catalog.data.gov/` (the web catalog) returns `200`. Every classic CKAN API action tested — `package_search` and even the trivial no-auth `status_show` health check — returned a real `404 {"message":"Not Found"}`. The GSA's documented newer endpoint (`api.gsa.gov/technology/datagov/v3/action/package_search`) 301-redirects back to the same dead `catalog.data.gov/api/3/action/package_search` path. This is recorded as a genuine, directly-tested negative finding, not an assumption that the API "probably still works the old way" — **Data.gov's dataset-search API was not reachable via any path tested this session.** Future research should check the web catalog's own search UI directly, or look for a current, correctly-documented API path, rather than reusing the classic CKAN URLs tested here.

### 17. OpenStreetMap camera-tag discovery, region-split retry — real yield, and a significant policy-relevant discovery

```text
source:                    OSM surveillance-tag nodes, Overpass API, split to a single state
verification_date:         2026-08-24
verification_method:       Direct Overpass QL query, scoped to `area["name"="Indiana"]
                            ["admin_level"="4"]` instead of the whole US, using the same
                            three-tag OR query that timed out nationwide in §13 above
result:                     VERIFIED (as a working methodology) — real yield, real and
                            significant findings within it
```

**The region-split fix worked exactly as predicted:** the identical broader query that timed out nationwide (§13) completed successfully in ~1 second when scoped to Indiana alone, returning **3,975 real nodes** (`man_made=surveillance` OR `surveillance=*` OR `camera:type=*`). This confirms state/region splitting is the correct mitigation for the public Overpass instance's complexity budget — a concrete, tested answer to §13's open question, not a repeated shrug.

**Two significant findings from sampling 10 of those nodes:**

1. **Real, tagged ALPR/Flock Safety camera locations exist in OSM, crowdsourced by individual contributors.** Sampled node `179015874` (and several others in the same sample) carries `"man_made":"surveillance"`, `"manufacturer":"Flock Safety"`, `"surveillance:type":"ALPR"`. This directly confirms, with real evidence, exactly the risk `projectatlas.md` §4 is written to guard against: OpenStreetMap — a source `MacEvil.md` §16 lists as a legitimate general camera/location discovery mechanism — **itself hosts crowdsourced ALPR tagging done by individual OSM contributors**, indistinguishable in a generic "surveillance" tag query from any other camera type. **Concrete adapter-design consequence for whenever an OSM discovery adapter is built:** it must never treat `surveillance:type=ALPR` (or similarly-tagged Flock/ALPR-manufacturer nodes) as a valid ATLAS ALPR-location source, regardless of how the node was discovered — per §4, ALPR locations may only come from official government-published records, and an individual OSM contributor's tag is definitionally not that, no matter how accurate it might be. This should be an explicit, tested filter in that future adapter, not an assumption that "we'll remember."
2. **A real, useful lead for the still-open §5C reconciliation task.** One sampled node (`id 2274059345`) is a real, community-tagged INDOT camera: `"contact:webcam":"http://pws.trafficwise.org/mobile/ci-465ne-cams.html"`, `"description":"465/43.8 I-70 East W -- CAM 143 - I-465 @ I-70 East (Mile 33.2)"`, on `man_made:"mast"` infrastructure — directly referencing the same `trafficwise.org` domain already established as the INDOT/Castle Rock HLS host (§5B). OSM community tagging may already contain hand-curated links between physical INDOT camera locations and their `trafficwise.org` identifiers, which could materially help §5C's still-unproven CCTV-XML-`device-id`-to-GraphQL-camera-ID mapping. Worth a dedicated Indiana-scoped OSM pull as Phase 7 adapter-research input, not pursued further this session.

---

## Batch 5 (2026-08-24, continued session — OpenEye resolved, ArcGIS + Socrata systematic discovery, IPAWS clarified)

### 18. ArcGIS REST discovery — systematic methodology found, replacing one-off per-state lookups

```text
source:                    ArcGIS Online's own public item-search API
official_url:              https://www.arcgis.com/sharing/rest/search
verification_date:         2026-08-24
verification_method:       Direct HTTPS GET, `q=traffic camera type:"Feature Service"`
authentication:             None required
observed_format:            application/json
result:                     VERIFIED as a systematic discovery methodology
```

**This is the real fix for §10 (`Project ATLAS-WebSite.md` §13's "search public ArcGIS REST infrastructure")** — rather than one-off per-state web searches (as Batches 2/4 did for WA/TX), ArcGIS Online exposes its own public, unauthenticated search API. A single query for `traffic camera type:"Feature Service"` returned **758 real total matches**, with the first page alone surfacing named, real, verifiable state/county/city services: Austin TX, KYTC (Kentucky), MDOT SHA (Maryland), Oregon Traffic Cameras (Oregon Office of Emergency Management), Seattle (ATSC), Jefferson County KY, Montgomery County TX, Arlington, Iowa DOT — a genuine national landscape in one call, not a per-state guessing exercise.

**One result independently verified end-to-end:** "Oregon Traffic Cameras" (`TripCheck_Cameras`, owner `Oregon_OEM`) — item metadata explicitly states `"licenseInfo":"Public"`, `"accessInformation":"Oregon Office of Emergency Management, ODOT"`, `"contentStatus":"public_authoritative"` (ArcGIS's own authoritative-content flag), `"numViews":7948321` (a genuinely high-traffic production service, not an abandoned test layer). Queried the real service URL directly: **1,164 real camera records** (`returnCountOnly=true`, exact server count), with real fields (`attributes_title`, `attributes_route`, `attributes_cameraId`, `geometry_x/y`). This is the same ODOT/TripCheck source that appeared incidentally as a cross-border camera inside WSDOT's own layer (Batch 2 §8) — now independently found and verified as its own dedicated, explicitly-public-licensed source.

### 19. Socrata discovery — separate from CKAN/Data.gov, and it works

```text
source:                    Socrata's own cross-portal Discovery API
official_url:              https://api.us.socrata.com/api/catalog/v1
verification_date:         2026-08-24
verification_method:       Direct HTTPS GET, `q=traffic camera`
authentication:             None required
observed_format:            application/json
result:                     VERIFIED as a systematic discovery methodology
```

Directly answers the task's distinction between Socrata and CKAN (§21 vs §22/§23 in `Project ATLAS-WebSite.md`): **Socrata's own discovery API is alive and independent of Data.gov's dead CKAN aggregation layer (Batch 4 §16).** A single query returned 76 real results across real city/state Socrata portals: `datahub.austintexas.gov`, `data.brla.gov` (Baton Rouge), `data.nola.gov` (New Orleans), `data.honolulu.gov`, `opendata.maryland.gov`, `cos-data.seattle.gov` — confirming Socrata-as-a-platform discovery is a genuinely separate, working mechanism from the CKAN path that failed. Individual dataset endpoints not fetched this session (methodology-level verification only); a real next step is resolving one of these to its actual data endpoint and confirming record-level access, same as was done for ArcGIS's Oregon result above.

### 20. FEMA/IPAWS — live feed vs. archived alerts, two different access postures clarified

```text
source:                    IPAWS All-Hazards Information Feed (live) vs. OpenFEMA
                            IpawsArchivedAlerts dataset (historical)
verification_date:         2026-08-24
result:                     Live feed: ACCOUNT_REQUIRED (not open, not tested further).
                            Archived dataset: VERIFIED — open, same access posture as
                            OpenFEMA disaster declarations (Batch 2 §5)
```

Closes the "IPAWS/CAP live alert feeds... remain unverified" gap explicitly flagged in Batch 2 §5, with a real, precise answer rather than continued silence: **the live IPAWS feed requires registering for an account on the IPAWS User Portal** (`ACCOUNT_REQUIRED` per `MacEvil.md` §11's access-type taxonomy) — not tested further, since no account was registered this session. Separately, a **historical/archived** IPAWS dataset is openly available through the already-verified-working OpenFEMA API pattern: `GET https://www.fema.gov/api/open/v1/IpawsArchivedAlerts` returned real, current HTTP 200 JSON containing genuine historical CAP-XML alert messages (spot-checked: a real 2020 NWS flood warning, full CAP structure intact), no authentication required. **These are two distinct products with two distinct access postures — do not conflate "IPAWS is unverified" going forward; it's now precisely split into a verified-open historical path and a real, specific, named requirement (account registration) for the live path.**

### 21. OpenEye — see the correction inline at entry §7 above

Resolved this session via a real browser session (not re-summarized here to avoid duplication) — root cause of the earlier `FAILED_VALIDATION` was a wrong API host (`openeye.cam` tested instead of the real `api.openeye.cam`), now corrected to `VERIFIED` with 53,677 real camera records confirmed live across 31 countries. Full detail at §7's inline update.

### 22. OpenTrafficCamMap — re-verification, count stable

```text
verification_date:         2026-08-24 (re-check of Batch 1 §4)
result:                     Count independently re-confirmed: 7,029 records, identical byte-for-byte
                            file (1,591,599 bytes) to the 2026-08-23 check; repo's own `pushed_at`
                            timestamp unchanged between checks — the dataset has not moved, this is
                            a genuine stability confirmation, not a coincidental re-match
```

### 23. Colorado DOT camera data — real negative finding, real positive leads not yet resolved to an endpoint

A direct guess at `data.cotrip.org/api/v1/cameras` returned a real `404 {"code":404,"message":"The current request is not defined by this API."}` — recorded plainly rather than silently dropped, consistent with `MacEvil.md` §8's "do not invent an endpoint." Colorado remains a real, credible lead (a CDOT camera appeared live via OpenEye's `source_adapter: "cdot"` in §21/§7's re-verification, and Colorado DOT has a registered WZDx feed in the federal registry per Batch 1 §3's raw evidence archive) but has **no independently-verified direct public camera endpoint of its own found this session.** Not resolved further — a genuine UNSTARTED-with-leads state, not a false VERIFIED.

---

## Batch 6 (2026-08-24, continued session — ArcGIS at national scale, Socrata follow-through, federal land-management agencies)

### 24. ArcGIS REST discovery, scaled nationally — six states now independently verified

```text
source:                    ArcGIS Online's public item-search API, broadened beyond Oregon
verification_date:         2026-08-24
verification_method:       Paginated `q=(traffic camera OR CCTV OR traffic cameras)
                            type:"Feature Service"` across all organizations (3 pages, 300 of
                            758 total matches fetched), then direct HTTPS GET + returnCountOnly
                            queries against four newly-selected real service URLs
result:                     VERIFIED as a nationally-scaling methodology
```

**The scale-up worked as predicted — this replaces per-state URL guessing (like the Colorado 404 above) going forward.** 758 total real matches nationwide for one query; 300 fetched and inspected, spanning **202 distinct owner accounts**. A rule-based classification (state name or DOT/agency hint in title/owner, Canada/NZ hints excluded) found **at least 15 distinct identifiable US states** represented in just the fetched sample: Iowa, Oregon, Maryland, California, Illinois, Washington, Utah, Texas, Wyoming, Hawaii, Georgia, Alabama, Kansas, plus King County WA and multiple *separate* WSDOT mirrors under different owner accounts (a real, non-obvious finding — WSDOT's camera data has been independently republished by at least 3 different ArcGIS organizations, not just the one found in Batch 2).

**Four new states independently verified end-to-end this session** (real endpoint hit, real exact server-reported count, not just a catalog match):

| State | Service | Real record count | License evidence |
|---|---|---|---|
| Iowa | `Traffic_Cameras_View` (owner `IowaDOT_OTO`) | **1,251** | Not explicitly stated in item metadata this session |
| Maryland | CHART `Cameras` MapServer (owner `mdimapdatacatalog`) | **552** | Not explicitly stated in item metadata this session |
| Georgia | `GDOT_511_Traffic_Cameras_Updated` (owner `rbagby_gema`) | **7,083** — unusually high vs. every other state checked; real server count, schema spot-checked and genuinely camera-shaped (`Url`, `VideoUrl`, `Status`, `Roadway`, `Direction` fields), but the magnitude itself is not independently explained this session — flag, don't silently smooth over | Not explicitly stated in item metadata this session |
| Utah | `Live_View_Cameras` (owner `nlucchetti@utah.gov_uplan`) | **32** — much smaller than the others; likely a narrower/curated subset, not Utah's full camera inventory | Not explicitly stated in item metadata this session |

Combined with Oregon (1,164, Batch 5) and Washington (1,533, Batch 2), **six states now have independently-verified real ArcGIS-hosted camera data**, all found via the same systematic, non-guessing methodology. License/redistribution status was only explicitly confirmed for Oregon (`"licenseInfo":"Public"`) — the other five need the same item-metadata check before being treated as more than `TECHNICALLY_VERIFIED`.

**One real false-positive caught in the classification, disclosed rather than hidden:** a "Bicycle_Traffic_Counts_at_Colorado_and_30th" (Boulder, CO) item was initially classified as a Colorado match — it's a bike counter at a street named *Colorado Avenue*, not a state-level camera dataset. Corrected before inclusion in the state list above.

### 25. Socrata discovery, followed through — all 76 catalog matches individually categorized

```text
source:                    Full re-fetch of the 76-result Socrata catalog search (Batch 5 only
                            fetched 10 of 76 previously — corrected here)
verification_date:         2026-08-24
verification_method:       Rule-based categorization of all 76 results by domain/title pattern,
                            then direct HTTPS GET against every candidate-relevant US live-camera
                            dataset's real Socrata data API (`/resource/{id}.json`)
result:                     VERIFIED for confirmed datasets; categorized honestly, not left as an
                            ambiguous "76 matches"
```

**Full breakdown of the 76 (76 = 19 + 11 + 6 + 10 + 30, exact):**

- **19 non-US** (Calgary/Alberta, ACT Australia, Winnipeg, Edmonton, Nova Scotia) — real camera-adjacent datasets, correctly out of scope under `projectatlas.md` §4's USA-only requirement, not a false-positive in the original search.
- **11 US enforcement/violation datasets** (red-light/speed camera violations and citations — Chicago, Seattle, New Orleans, Prince George's County MD, Montgomery County MD, NYC) — a different category than traffic-monitoring cameras; some (e.g. Chicago's "Red Light Camera Locations", "Speed Camera Locations") are genuine official-source enforcement-camera *location* datasets that could be relevant to the ALPR/enforcement-camera-location policy track (`projectatlas.md` §4) specifically, not the general traffic-monitoring-camera catalog — worth a dedicated look in a future session, not pursued further here.
- **6 NGSIM/TGSIM federal research video archives** (`datahub.transportation.gov`) — real historical traffic-research video datasets, not live camera feeds; a genuinely distinct product family.
- **10 candidate live-monitoring-camera entries**, which deduplicate to **6 distinct real datasets** (several are `dataset`/`map` view-type duplicates of the same underlying data) — **all 6 independently verified with real record counts**:

| Dataset | Domain | Real record count |
|---|---|---|
| Austin Traffic Cameras | `datahub.austintexas.gov` | **1,005** (consistent with Datumfeed's Batch 3 figure of 1,005 total/817 active for the same underlying source) |
| Baton Rouge Traffic Camera | `data.brla.gov` | **118** — real `511la.org` CCTV image links |
| New Orleans Traffic Camera | `data.nola.gov` | **103** — **RECLASSIFIED 2026-08-24, see §27 below: this is NOT a passive traffic-monitoring dataset.** Confirmed directly from the City of New Orleans's own page: these are automated speed/red-light/school-zone *enforcement* cameras that issue citations (a "Pay Camera Ticket" link exists; managed by the Central Adjudication Bureau). Moved to the enforcement-camera bucket, not counted among the 6 live-monitoring datasets below. |
| Honolulu Traffic Camera Locations | `data.honolulu.gov` | **253** |
| Maryland Traffic Cameras (CHART) | `opendata.maryland.gov` | **451** — confirmed as a genuine duplicate: two separate Socrata dataset IDs (`hua3-qc8n`, `4z3c-43ce`) return byte-identical first records |
| Seattle Traffic Cameras | `cos-data.seattle.gov` | **Not independently record-counted** — this entry is a `federated_href` pointer to SDOT's own GIS feature class (`TMC.TrafCam`), not a directly Socrata-queryable dataset; existence confirmed via its description, not a real count |
- **30 pure noise** (traffic counts, incident logs, signal inventories, parking violations, performance metrics, community surveys) — unrelated to any camera type.

**Stated plainly, per the task's own caution:** of the 76 original catalog matches, **67 were not directly relevant** to live US traffic-monitoring camera ingestion (19 non-US + 12 enforcement, now including New Orleans — see §27 — + 6 research-video + 30 noise), leaving **9 candidate entries that deduplicate to 4 fully-verified real live-monitoring datasets plus 1 unverified pointer** — do not read "76 Socrata results" as "76 real camera sources," and New Orleans's 103 belongs with the enforcement-camera group, not the monitoring-camera group.

**A real, useful cross-reference also surfaced:** "Traffic Feeds in Colorado" (`data.colorado.gov`, attributed to CDOT/COTRIP) — checked directly; it is an `href`-type catalog pointer, not a queryable dataset, and its redirect target is just a nicer-URL version of the same Socrata catalog page, not a direct link to CDOT's live system. Colorado's real endpoint remains unresolved (still `UNSTARTED-WITH-LEADS`, unchanged from §23 above) — this Socrata entry adds confirmation that CDOT/COTRIP branding is real and Socrata-catalogued, but not a new resolvable data path.

### 26. Federal land-management camera programs — NPS, BLM, USFS, USACE, BOR

```text
verification_date:         2026-08-24
verification_method:       Web research + direct endpoint verification per agency
```

**NPS (National Park Service) — PARTIALLY_VERIFIED, real endpoint confirmed, not yet queried with a key.** The official NPS Data API has a real, documented `webcams` endpoint: `GET https://developer.nps.gov/api/v1/webcams`. Direct testing without a key returned a real, structured `403 {"error":{"code":"API_KEY_MISSING","message":"An API key was not provided. Please get one at https://www.nps.gov/subjects/developer/get-started.htm"}}` — this is strong positive evidence the endpoint is real and recognized (a genuinely nonexistent route would 404, not return a structured API-key error), access type `API_KEY` (free, self-service per NPS's own documentation). No key was obtained this session, consistent with not registering accounts casually during research-phase verification. **Good Phase 7 candidate; needs a free API key (operator-supplied, per `MacEvil.md` §2) before further verification.**

**BLM (Bureau of Land Management) — real negative finding.** No dedicated webcam API found via web research. Checked BLM's own real, verified ArcGIS recreation service (`gis.blm.gov/.../BLM_Natl_Recreation/MapServer`) directly — its 11 real layers (Recreation Sites, Camping/Cabins, Mountain Bike Trails, Scenic Trails, etc.) contain **no camera-related layer**. Recorded as a genuine negative, not silently omitted.

**USFS (US Forest Service) — real negative finding, with an important provenance correction.** Wildfire-detection cameras commonly associated with USFS/wildfire response are **not USFS's own infrastructure** — they are operated by university partners under contract: the ALERTWildfire/ALERTWest network (University of Oregon, University of Nevada Reno, UC San Diego) and the separate ALERTCalifornia network (UC San Diego, "1,200+ cameras" claimed, not independently verified this session). USFS's own official page (`fs.usda.gov/science-technology/fire/technology/cameras`) exists but was not further probed for a direct data API this session. A single guessed AlertCalifornia endpoint (`api.alertcalifornia.org/api/cameras`) returned a real `403` — not chased further with more guessing, per `MacEvil.md` §8. **Correct classification if this family is pursued later: the operator/provider is a university consortium, not USFS itself — provenance must reflect that, not be attributed to USFS.**

**USACE (Army Corps of Engineers) — real negative finding, fragmented reality confirmed.** No unified public webcam API found. USACE's real, official water-data API (the Corps Water Management System / CDA, `cwms-data.usace.army.mil`) is confirmed to exist but is explicitly for water levels/flows/precipitation, not camera feeds. Individual district webcam pages are real (Rock Island District, Jacksonville District/Okeechobee Waterway) but are standalone HTML pages, not confirmed to have their own APIs — not individually tested this session given the fragmentation (18+ USACE districts, each potentially different).

**BOR (Bureau of Reclamation) — real negative finding.** A real public webcam exists (Shasta Dam, `usbr.gov/mp/ncao/`) as a standalone page. BOR's real, official open-data API (RISE, `data.usbr.gov`) is confirmed to exist but — per its own documentation — covers water operations, reservoir levels, water quality, hydropower, and species data, explicitly not camera/webcam feeds. A guessed RISE endpoint path returned HTML, not JSON — not chased further with more guessing.

**Summary for this family: 1 of 5 agencies (NPS) has a confirmed-real, likely-usable webcam API pending a free key; the other 4 (BLM, USFS, USACE, BOR) have real negative findings for a dedicated webcam API, each with real context for why (BLM: genuinely doesn't appear to have one; USFS: the cameras exist but are university-operated, not USFS's; USACE/BOR: real webcams exist but as standalone pages outside their real, verified data APIs, which are water-data-focused).**

---

## Batch 7 (2026-08-24, continued session — Georgia anomaly resolved, ArcGIS fully mined, New Orleans reclassified)

### 27. Georgia's 7,083-camera anomaly — resolved, not an error

```text
verification_date:         2026-08-24
verification_method:       Direct field-level inspection of the GDOT_511_Traffic_Cameras_Updated
                            layer: Status and Source field distributions, filtered exact counts
result:                     RESOLVED — the layer mixes active and retired camera records; the
                            comparable "active" figure is 3,676, not 7,083
```

**Root cause, precisely quantified:** the layer's `Status` field splits exactly as `Enabled: 3,676` / `Disabled: 3,407` (sum: 7,083 — exact). The original Batch 6 count used an unfiltered `returnCountOnly=true` query with no `WHERE` clause, silently including retired/disabled camera records — a real methodology gap in that count, not a defect in the source data itself. Filtering to `Status='Enabled'` gives **3,676**, still large relative to Iowa (1,251) or Maryland (552) but no longer an unexplained outlier — Georgia's Atlanta-area ITS network is real and substantial. Secondary check: the `Source` field also splits cleanly (`SKYLINE: 3,675`, `GA: 3,407`), corresponding almost exactly to the Enabled/Disabled split — the disabled records appear to be a legacy `Source=GA` batch, the enabled ones a newer `Source=SKYLINE` (vendor name) integration. No duplicate-geometry inflation found (997 of 1,000 sampled coordinates were unique).

**Methodology lesson applied retroactively — a real caveat, not silently ignored:** Iowa (`Traffic_Cameras_View`) and Maryland (`CHART/Cameras`) schemas were checked for an equivalent status field; **neither has one** — their reported raw counts (1,251 and 552) stand as-is, with no way to confirm this session whether they represent active-only or a mixed set. This is now a standing caveat for every ArcGIS-sourced count in this document that doesn't explicitly report an active/inactive split: **treat every raw `returnCountOnly` figure as "records in the layer," not necessarily "currently live cameras," unless a status filter was applied and stated.**

### 28. Finished mining the 758-match ArcGIS result set — Florida found, Utah corrected

```text
verification_date:         2026-08-24
verification_method:       Fetched and classified the remaining 458 of 758 results (results
                            301-758, five more paginated searches) using the same rule-based
                            classification as Batch 6 §24
result:                     One new state verified end-to-end (Florida); one existing state's
                            figure corrected (Utah)
```

**All 758 results now classified.** The remaining 458: 16 likely-US (state/DOT hint), 34 non-US, 408 ambiguous (mostly county/city GIS items with no clear state signal in title/owner — not individually triaged given volume, consistent with prioritizing breadth). Of the 16 US candidates, most were false-positive-prone matches on unrelated datasets (wildlife crossings, garage sales, security assessment forms, speed surveys) rather than new camera sources — two were real and substantive:

- **Florida — NEW STATE, verified end-to-end.** `FL511_Traffic_Cameras` (owner `antoniakeddell`): real service, **4,057 real records** (`returnCountOnly`), real camera-shaped schema (`COUNTY`, `HIGHWAY`, `DIRECTION`, `LATITUDE`, `LONGITUDE`, `IMAGE`). No status/active field present — raw count stands as-is per the caveat above.
- **Utah — CORRECTION to the Batch 6 figure.** A second, separate Utah item (`CCTV`, owner `coreyunger@utah.gov_uplan`) was found — **1,437 real records**, a materially larger and evidently more complete camera inventory than the `Live_View_Cameras` layer verified in Batch 6 (32 records). This confirms what Batch 6 flagged as a suspicion ("likely a curated subset, not full inventory") — Utah's real camera count via ArcGIS should be read as **1,437**, with the 32-record layer understood as a narrower, separate public-facing "live view" product, not the state's actual camera inventory. Both entries are real and distinct; neither supersedes the other in the sense of being wrong, but 1,437 is the more complete figure for coverage purposes.

**Seven states now independently verified via the ArcGIS methodology:** WA (1,533), OR (1,164, explicit `Public` license), IA (1,251), MD (552), GA (3,676 active / 7,083 total), UT (1,437, corrected), FL (4,057).

### 29. New Orleans "Traffic Camera" dataset — confirmed enforcement/ticketing, reclassified

```text
verification_date:         2026-08-24
verification_method:       Fetched the dataset's own Socrata item metadata (description field),
                            then the City-linked page it directs to (nola.gov/find-safety-camera-locations/)
result:                     CONFIRMED enforcement/ticketing infrastructure, not passive monitoring
                            — reclassified out of the "live-monitoring-camera" bucket in §25 above
```

**Not ambiguous once checked — the source's own documentation settles it.** The dataset's Socrata item metadata (`data.nola.gov/d/te2d-4txp`) explicitly directs readers to `nola.gov/find-safety-camera-locations/` "for a more current listing of active camera locations and time ranges for those in School Zones" — official City of New Orleans terminology is "safety camera." That linked page states these cameras exist "to encourage adherence to speed limits and maintain safe speeds in neighborhoods and near schools," lists three enforcement functions (**Speed Enforcement**, **Red Light Enforcement**, **School Zone Enforcement** with specific arrival/dismissal active hours), includes a "Pay Camera Ticket" link, and is administered by the **Central Adjudication Bureau** — the city's traffic-violation adjudication body. This is automated photo-ticketing infrastructure, the same general category as Chicago's Speed/Red Light Camera datasets already bucketed as "enforcement" in §25.

**Correct treatment going forward, per `projectatlas.md` §4's ALPR/enforcement-camera model:** this dataset's 103 records should be handled the same way as ALPR camera data — **location/existence cataloging only** (`camera_type = TRAFFIC_ENFORCEMENT`), never violation, citation, or plate-read data, and sourced only because it comes from an official government channel (which this does — `data.nola.gov` is the City's own open-data portal, distinct from a crowdsourced enforcement-camera map). Unlike Flock/ALPR specifically, this is speed/red-light enforcement rather than plate-reading, but the same "location only, no enforcement-output data" discipline applies. Moved out of the 6-dataset live-monitoring-camera count in §25 above; New Orleans now sits alongside Chicago in the 12-strong US-enforcement-camera bucket (was 11, now 12 after this reclassification).

---

## Batch 8 (2026-08-24, continued session — status-filter audit of every ArcGIS state, two more states verified, one false positive caught)

### 30. Status-filter audit — every previously-reported ArcGIS state checked, not just Georgia

```text
verification_date:         2026-08-24
verification_method:       Fetched each layer's full field list; where a status/active-like field
                            existed, queried the true/false or enabled/disabled split directly;
                            where none existed, confirmed via the field list itself (not assumed)
result:                     Real corrections found for 2 of 9 states; the rest confirmed clean
```

**Full audit result, state by state — every one checked, not just the ones with problems:**

| State | Fields checked | Status field found? | Audit result |
|---|---|---|---|
| Oregon (TripCheck) | `geometry_y/x, attributes_title, attributes_route, attributes_videoId, attributes_filename, attributes_cameraId, attributes_publishedImageId, attributes_latitude/longitude, attributes_iconType, ObjectId` | **No** | **Already correct** — 1,164 stands, no filter possible or needed |
| Washington (WSDOT) | `FID, Shape, ImageURL, OBJECTID, CameraID, CameraTitl, WSDOTSRID, StateRoute, CompassDir, Latitude, Longitude, CameraOwne, CameraOw_1, ImageWidth, ImageHeigh` | **No** | **Already correct** — 1,533 stands |
| Iowa | `device_id, Desc_, UpdateDate, UpdateTime, UTCoffset, linear_reference, Route, ImageName, ImageURL, VideoURL, ORG, latitude, longitude, Type, FID, REGION, RECORDED, COMMON_ID, FUNCTION` | No status field — `RECORDED` exists but is a **recording-policy** flag ("Is Camera Recorded?", values `N`/`E`), not an active/inactive flag; a real, separate, policy-relevant finding worth keeping for later media-retention work (ADR-0005), not a count correction | **Already correct** — 1,251 stands |
| Maryland (CHART) | `rowid, ID, location, url, CCTVPublicURL, hlsurl, Latitude, Longitude, Shape` | **No** | **Already correct** — 552 stands |
| Georgia | `Id, Url, Status, Description, VideoUrl, SortId, Source, SourceId, Roadway, Direction, Latitude, Longitude, SortOrder, ObjectId` | **Yes** (`Status`) | **Already corrected in Batch 7 §27** — 3,676 active / 7,083 total |
| Utah — `Live_View_Cameras` (originally-reported layer) | `FID, Site__, Route, MP, Device, County, Est__Cost, Master_Pla, Remarks, UDOT_Maint, Package` | N/A — **this is not a camera-location dataset at all.** Sampled records show real dollar figures (`Est__Cost`: $15,818.75, $26,210.91, $33,815.31), a `Master_Pla` (master plan) field, and a `Package` (construction/procurement package) field — this is a **UDOT camera installation/procurement planning dataset**, not a live camera inventory. | **CORRECTED, more fundamentally than a status filter** — the 32-record figure should not be treated as a camera-location count at all; superseded entirely by the `CCTV` layer below |
| Utah — `CCTV` (Batch 7's replacement layer) | `OBJECTID, MotionUrl, LastUpdated, ImageUrl, TrafficDirection, ExtId, IntId, IsOnline, DisplayName, RotationAngleDegrees, IsCommFailed, GlobalID` | **Yes** (`IsOnline`, string-typed `"True"`/`"False"`) | **CORRECTED** — `IsOnline='True'`: **1,188**; `'False'`: **249**; sum 1,437 (exact match). Utah's real comparable figure is **1,188 active**, not 1,437 total |
| Florida (FL511) | `OBJECTID_1, ID, DESCRIPT, COUNTY, HIGHWAY, DIRECTION, LATITUDE, LONGITUDE, TIMESTAMP, IMAGE` | **No** | **Already correct** — 4,057 stands |

**Net effect of this audit:** two real corrections (Utah's CCTV layer: 1,437 → 1,188 active; Utah's originally-reported layer reclassified as not-a-camera-dataset), one already-known correction reconfirmed (Georgia), five states confirmed clean on first check. The status-filter issue was real but not universal — most services simply don't carry the concept, which is itself useful to know rather than assume.

### 31. Continuing the state sweep — abbreviation-based re-scan of the existing 758-match set

```text
verification_date:         2026-08-24
verification_method:       Re-scanned all 758 previously-fetched ArcGIS Online catalog rows (no
                            new discovery query) for common state-DOT abbreviation patterns
                            (NCDOT, MODOT, VDOT, PennDOT, MnDOT, etc.) that the original
                            full-state-name-only filter missed
result:                     2 new states verified end-to-end; 1 false positive caught and
                            excluded; 1 real dead-link negative finding
```

**Missouri — NEW STATE, verified.** `MODOT_Traffic_Cameras` (owner `WUFPM_EM9`/`creaml_MOSEMA`, two catalog entries for the same real service). Real layer index is `1`, not `0` (the default guess failed with a real, disclosed error before being corrected) — **871 total records**. Schema includes a `STREAM_ERROR` field (`N`=831, `Y`=39, sum 870 of 871) — this is a **stream-health indicator** (is the camera currently erroring), not a retired/disabled flag like Georgia's, so it is *not* treated as an active/inactive split the way Georgia and Utah were; reported as **871 total**, noting 831 currently error-free as an informative, not authoritative, sub-figure.

**Virginia — NEW STATE, verified, with a real status-filter finding applied immediately.** `CameraLocationVDOT` (owner `johnfry10`) — **1,293 total**, with a real `active` field (string `"true"`/`"false"`): `active='true'`: **1,231**; `'false'`: **62**. Virginia's real comparable figure is **1,231 active**.

**Pennsylvania — real false positive, caught and excluded, not counted.** `PENNDOT_20240325` (owner `Jesse_Eckenrode`) returned a real, large count (20,219) — but its actual layer name is `PA_BILLBOARDS` and its full field list (`SIGN_APPL_ID`, `PERMIT_NUMBER`, `SIGNFACE_WIDTH/HEIGHT/AREA`, `SIGN_OWNER_NAME`, etc.) confirms this is a **billboard/outdoor-advertising permit database**, not a traffic camera dataset. The PennDOT-abbreviation keyword match was a genuine false positive — recorded explicitly so a future session doesn't recount it, consistent with the earlier Boulder/Colorado bike-counter false-positive catch (Batch 6 §24).

**North Carolina — real negative finding, dead catalog link.** `NCDOT_TIMSCameras` (hosted on NCDOT's own domain, `gis11.services.ncdot.gov` — a strong authoritative-source signal if it had worked) returned a real `404` at both the documented `FeatureServer` and a guessed `MapServer` fallback. Not chased with further guessing, per `MacEvil.md` §8. The catalog entry is real; the service behind it appears to be gone or moved. A real lead for a future session to re-search rather than re-guess.

**Nine states now independently verified via the ArcGIS methodology:** WA (1,533), OR (1,164), IA (1,251), MD (552), GA (3,676 active/7,083 total), UT (1,188 active/1,437 total via `CCTV`), FL (4,057), MO (871), VA (1,231 active/1,293 total).

---

## Batch 9 (2026-08-24, continued session — two more states, cross-confirmations, one credential-gated Texas lead)

### 32. Alabama and Kentucky — two new states, audited immediately on discovery

```text
verification_date:         2026-08-24
verification_method:       Mined the already-fetched 758-result ArcGIS set for state-DOT
                            abbreviation patterns not yet checked (ALDOT, KYTC, and others);
                            verified each new hit with a real endpoint query and immediately
                            checked for a status/active field, per the Batch 8 audit discipline
result:                     Both VERIFIED; both confirmed clean (no correction needed)
```

**Alabama — NEW STATE.** `ALDOT_Traffic_Cameras_011323` (hosted on an ESRI "government" showcase account, `services7.arcgis.com/33Tmvrm3G2UZLFK9`, which turns out to host camera mirrors for several states — see below) — **539 real records**. Schema includes `entries__disabled` (string `"TRUE"`/`"FALSE"`); checked immediately: `'FALSE'` → **539**, `'TRUE'` → **0**. All 539 records are active; no correction needed, confirmed clean on first check.

**Kentucky — NEW STATE, cross-confirmed by two independent endpoints.** Found both `maps.kytc.ky.gov/.../TrafficCameras_Ext_Prd` (Kentucky's own domain — a strong authoritative-source signal, same pattern as North Carolina's dead link but this one works) and a mirror at `services2.arcgis.com/CcI36Pduqd0OR4W9/.../trafficCamerasCur_Prd`. **Both independently return exactly 254** — real agreement between two separately-hosted endpoints, stronger evidence than a single-source count. Schema includes a `status` field, checked immediately: sampled values are all `null` (unpopulated on this layer) — no filtering possible or needed, confirmed clean.

### 33. Cross-confirmations found for two already-verified states (not new coverage, but real triangulation data)

The same ESRI government showcase account (`services7.arcgis.com/33Tmvrm3G2UZLFK9`, owner `mtucker@esri.com_government`) that surfaced Alabama also hosts additional mirrors for two states already verified via other endpoints:

- **Florida, second source:** `FDOT_Traffic_Cameras` — **3,651 real records**, no status field. This differs from the `FL511_Traffic_Cameras` figure already verified (4,057, Batch 7 §28) by a real, unreconciled margin — two different real endpoints, two different real counts, same underlying state. Not reconciled this session; flagged for future work rather than silently averaged or picked.
- **Maryland, third source:** `MDOT_Traffic_Cameras` — **535 real records**, confirmed via sampled data to be genuine Maryland CHART camera links (`chart.maryland.gov/video/...`), not a Michigan DOT dataset despite the ambiguous "MDOT" abbreviation (Michigan's DOT is also commonly abbreviated MDOT — this was checked directly against real sampled records, not assumed). This is a **third** independent Maryland count, joining the ArcGIS CHART figure (552) and the Socrata figure (451) from earlier batches — three real, unreconciled counts for the same underlying state system.

### 34. Texas — a real, specific TxDOT camera source found, but credential-gated

```text
verification_date:         2026-08-24
verification_method:       Direct HTTPS GET against a real ArcGIS item URL found in the existing
                            758-result set
result:                     Real service confirmed to exist; access blocked by a real,
                            self-identifying credential requirement — not bypassed
```

`Skyline_TxDot_Cameras` (owner `brett_rapiddeployza`) returned a real, structured error rather than data or a generic failure: `{"error":{"code":500,"messageCode":"CONT_0044","message":"Error invoking service","details":["Unable to generate token with the credentials provided with username: Skyline_nct911 and source_url:..."]}}`. This confirms the service is real and actively gated behind credentials belonging to a specific named account (`Skyline_nct911`) — not publicly accessible, and not attempted to bypass, per `MacEvil.md` §2's absolute prohibition on credential extraction/bypass. **This does not close the standing Texas gap** (§15, Batch 4) — it adds one more real, specific, named data point confirming Texas camera data exists on this platform but remains inaccessible through this particular path. The "Skyline" vendor name matches the same vendor tag seen in Georgia's `Source: "SKYLINE"` field (Batch 7 §27) — a real, likely non-coincidental cross-reference (same camera-platform vendor serving multiple state DOTs), not chased further this session.

**Ohio — real, small, likely-non-representative finding, not counted as statewide coverage.** `ODOT_Highway_Cameras_` (owner `GISAutomation_Marysville`) returned only **7 real records** — consistent with a single local-government (Marysville, Ohio) layer rather than Ohio DOT's actual statewide camera network. Recorded as a real but non-representative data point; Ohio's real statewide ODOT camera source remains unfound this session, not claimed as verified from this 7-record layer.

**Eleven states now independently verified via the ArcGIS methodology:** WA, OR, IA, MD, GA, UT, FL, MO, VA, AL, KY.

---

## Summary (all sources verified to date)

| Source | Result | Category |
|---|---|---|
| NWS/NOAA Alerts API | VERIFIED | Event (weather) |
| USGS Earthquake GeoJSON | VERIFIED (USA-geofence gap closed 2026-08-24) | Event (environmental) |
| INDOT WZDx Feed | VERIFIED — new finding, strongest INDOT license to date | Event (traffic/work-zone) |
| OpenTrafficCamMap | PARTIALLY_VERIFIED | Camera (aggregator) |
| FEMA/OpenFEMA Disaster Declarations | VERIFIED | Event (emergency) |
| Open511 | DEFERRED — no US implementation exists | N/A |
| OpenEye | **VERIFIED (corrected 2026-08-24)** — wrong host tested previously (`openeye.cam` vs. real `api.openeye.cam`); 53,677 real records, 31 countries | Camera (aggregator, well-documented policy) |
| WSDOT Traffic Cameras (ArcGIS) | PARTIALLY_VERIFIED | Camera (state DOT) |
| OpenCCTV | PARTIALLY_VERIFIED — real sitemap count (38,709 / 11,530 US) well under advertised claim; own `/api/` is robots.txt-disallowed, now `needs-outreach` #6 | Camera (aggregator) |
| Datumfeed | VERIFIED | Camera (discovery/provenance/verification layer) |
| Argus (GitHub) | PARTIALLY_VERIFIED — real 229,308-camera dataset, but 382/390 upstream sources are re-scraped OpenCCTV (double-aggregation risk) | Camera (aggregator of aggregators) |
| Live-Environment-Streams (GitHub) | PARTIALLY_VERIFIED, quarantined — no repo-level license, `needs-outreach` #7 | Camera (aggregator) |
| OpenStreetMap camera-tag discovery (narrow, nationwide) | PARTIALLY_VERIFIED — real but low yield | Discovery mechanism |
| GitHub camera-repo discovery (standalone) | VERIFIED as methodology — found `Ringmast4r/FLOCK` (correctly excluded per §4 policy) and `kevtoe/worldview` (lead) | Discovery mechanism |
| TxDOT camera data | UNVERIFIED — not found via ArcGIS open-data portal this session | Camera (state DOT) |
| Data.gov/CKAN API | UNVERIFIED — classic API path retired/unreachable; web catalog itself confirmed live | Discovery mechanism |
| OpenStreetMap camera-tag discovery (region-split) | VERIFIED as methodology — 3,975 real Indiana nodes; surfaced real crowdsourced ALPR tagging (policy-relevant) and a real INDOT/trafficwise.org cross-reference lead | Discovery mechanism |
| ArcGIS REST discovery (systematic) | VERIFIED as methodology — ArcGIS Online's own search API, 758 real matches; Oregon (TripCheck, 1,164 records) independently confirmed | Discovery mechanism |
| Socrata discovery (systematic) | VERIFIED as methodology — Socrata's own cross-portal Discovery API, 76 real results, independent of Data.gov's dead CKAN path | Discovery mechanism |
| IPAWS archived alerts | VERIFIED — open via OpenFEMA API; live IPAWS feed is `ACCOUNT_REQUIRED`, distinct and untested | Event (emergency) |
| OpenTrafficCamMap (re-check) | Count re-confirmed stable: 7,029, byte-identical file | Camera (aggregator) |
| Colorado DOT camera data | UNSTARTED-WITH-LEADS — real leads (OpenEye's CDOT records, a WZDx registry entry, a Socrata `href` pointer) but no independently-verified direct CO endpoint; two guessed endpoints returned real 404s | Camera (state DOT) |
| ArcGIS REST discovery, scaled nationally, fully mined | VERIFIED as a nationally-scaling methodology — all 758 matches classified, 202+ distinct owners; 7 states independently verified end-to-end: WA (1,533), OR (1,164), IA (1,251), MD (552), GA (3,676 active / 7,083 total — resolved anomaly, §27), UT (1,437 — corrected from an initial 32, §28), FL (4,057 — new, §28) | Discovery mechanism |
| Socrata discovery, followed through | VERIFIED and precisely categorized — all 76 catalog matches individually classified (19 non-US, 12 enforcement incl. New Orleans reclassified, 6 research-video, 30 noise, 9→4 real live-monitoring-camera datasets verified with real counts + 1 unverified pointer) | Discovery mechanism |
| Georgia camera-count anomaly | RESOLVED, not an error — layer mixes active (3,676) and disabled (3,407) records; original 7,083 was an unfiltered count | Camera (state DOT) |
| New Orleans "Traffic Camera" dataset | RECLASSIFIED — confirmed automated speed/red-light/school-zone *enforcement* cameras (ticketing), not passive monitoring; moved to the enforcement-camera bucket, treated like ALPR per `projectatlas.md` §4 (location-only, no violation data) | Camera (municipal, enforcement) |
| NPS webcams API | PARTIALLY_VERIFIED — real endpoint confirmed via structured `API_KEY_MISSING` error; `needs-outreach` #8 filed to request a free key | Camera (federal) |
| BLM webcams | EXCLUDED-WITH-REASON — real negative finding; verified ArcGIS recreation service has no camera layer | Camera (federal) |
| USFS wildfire cameras | EXCLUDED-WITH-REASON, provenance-corrected — these are university-operated (ALERTWildfire/ALERTCalifornia), not USFS's own infrastructure; captured as a new lead in `Project ATLAS-WebSite.md` §15 | Camera (federal, misattributed) |
| USACE webcams | EXCLUDED-WITH-REASON — no unified API; real water-data API is data-only; individual district pages exist but fragmented (18+ districts) | Camera (federal) |
| BOR webcams | EXCLUDED-WITH-REASON — real public webcam (Shasta Dam) exists as a standalone page; real RISE data API is water/reservoir-data-only | Camera (federal) |
| ArcGIS status-filter audit (all prior states) | COMPLETE — every previously-reported ArcGIS state checked, not just Georgia; 5 confirmed already-correct (OR, WA, IA, MD, FL), 2 real corrections found (Utah's `CCTV` layer 1,437→1,188 active; Utah's original layer reclassified as a non-camera planning dataset) | Audit |
| Missouri (MODOT) | VERIFIED — new state, 871 real records via ArcGIS (real layer-index error caught and corrected: `/1`, not `/0`) | Camera (state DOT) |
| Virginia (VDOT) | VERIFIED — new state, 1,293 total / 1,231 active via ArcGIS (`active` field checked immediately per the new audit discipline) | Camera (state DOT) |
| Pennsylvania (PennDOT) — false positive | EXCLUDED-WITH-REASON — the matched "PENNDOT_20240325" service is actually `PA_BILLBOARDS`, a sign-permit database, not traffic cameras; caught before being counted | Camera (state DOT, false positive) |
| North Carolina (NCDOT) | UNVERIFIED — real negative finding; a promising own-domain catalog entry (`gis11.services.ncdot.gov`) 404s at both FeatureServer and MapServer; not chased with further guessing | Camera (state DOT) |
| Alabama (ALDOT) | VERIFIED — new state, 539 real records, status field checked immediately (all active, confirmed clean) | Camera (state DOT) |
| Kentucky (KYTC) | VERIFIED — new state, 254 real records, cross-confirmed by two independent endpoints (own domain + ArcGIS mirror), status field present but unpopulated | Camera (state DOT) |
| Florida, Maryland cross-confirmations | Real additional endpoints found for two already-verified states: FL second source 3,651 (vs. 4,057 already verified — unreconciled); MD third source 535 (vs. 552 and 451 already verified — unreconciled, three real counts now) | Camera (state DOT, triangulation) |
| Texas — Skyline_TxDot_Cameras | UNVERIFIED — real service confirmed to exist, credential-gated (`Skyline_nct911` account required); not bypassed; does not close the standing Texas gap | Camera (state DOT) |
| Ohio — ODOT Highway Cameras (Marysville) | UNVERIFIED — real but tiny (7 records), appears to be a single local-government layer, not Ohio's statewide network; Ohio's real statewide source remains unfound | Camera (state DOT) |

Forty-four source-family investigations across nine batches this session (2026-08-23/24). Real negative findings recorded plainly throughout (TxDOT's original ArcGIS-portal gap, Data.gov, three Colorado guesses, BLM/USFS/USACE/BOR webcam APIs, North Carolina's dead catalog link, Texas's credential-gated Skyline source, Ohio's non-representative local layer). Three corrected findings (OpenEye: wrong host, now `VERIFIED`; Utah CCTV: 1,437→1,188 active; Utah's original layer: reclassified as not a camera dataset at all). Two real anomalies/misclassifications resolved (Georgia's 7,083 vs. 3,676-active split; New Orleans moved from monitoring to enforcement). One real false positive caught before being counted (Pennsylvania/billboards). Two real cross-confirmations found without resolving to a single authoritative count (Florida, Maryland — Maryland now has three unreconciled real counts). See the **Coverage Matrix** near the top of this document for the authoritative, cross-referenced status of every named family in `Project ATLAS-WebSite.md`, including the two 50-state sweep trackers (now at 11/50 for 511/DOT, 1/50 for OSM). Remaining largely untouched: the majority of individual state 511/DOT systems, the majority of OSM state-by-state coverage, and emergency response data (fire/EMS/police/CAD feeds).

## Raw evidence archive (Batch 2)

| File | SHA-256 |
|---|---|
| `sources/wsdot-arcgis/layer-metadata-2026-08-23.json` | `0a0e230ddfafd3f0f673a30bd3d208b780c3f2308ff2661bbe94b8b124d8e42f` |
| `sources/wsdot-arcgis/query-sample-2026-08-23.json` | `364f8e9aba36f690ce87edb1a0cea486c2e3dbbdeb165d7a714be02b293d66b2` |
| `sources/fema-openfema/disaster-declarations-sample-2026-08-23.json` | `c853842215675f15c86ab247bf44df9f2de64e84fffa68e5c825f2dc27df9192` |
| `sources/openeye-cam/docs-page-raw-2026-08-23.html` | `a379a0da4413ce6af78163bc0a45920143717ca9318498ae92a837e7016da33a` |

The OpenEye raw HTML is archived specifically as evidence *for* the `FAILED_VALIDATION` finding above (proof the docs page is a client-rendered shell with no server-side documentation content), not as evidence of a working source.

## Raw evidence archive (Batch 3)

| File | Note |
|---|---|
| `sources/opencctv/robots-2026-08-23.txt` | Full file — the actual robots.txt that disallows `/api/` |
| `sources/opencctv/sitemap-index-2026-08-23.xml` | Full file (409 bytes) |
| `sources/opencctv/sitemap-cameras-1-EXCERPT-first-2000-urls-2026-08-23.xml` | **Excerpt only** (first ~200KB of a 9.8MB file, ~2,000 of 15,000 URLs). Full-file SHA-256 for provenance: `cf88c4a1c86e11add72bbf6d130f7e9178ac96787e6556c2a25c10184a10bcd1` (sitemap-cameras-1.xml), `80bbe7f6b403c1065f6cc495a6babe1ce99eac390dd1c1a923bbd3d59987b47c` (sitemap-cameras-2.xml, not archived at all — count only), `2d5bbe94e5741abb3b261b812c15b1ef898ac4e229584ac5b171ac8a1885d99c` (sitemap-cameras-3.xml, not archived at all — count only). Full files (~25MB combined) were not committed to keep repo size reasonable; re-fetch from the live URLs to reproduce. |
| `sources/datumfeed/openapi-2026-08-23.json` | Full file |
| `sources/datumfeed/llms-2026-08-23.txt` | Full file |
| `sources/datumfeed/cameras-sample-2026-08-23.json` | Full file (100-record page) |
| `sources/argus-github/cameras-EXCERPT-2026-08-23.geojson` | **Excerpt only** (first 400KB of a 100,770,547-byte file). Full-file SHA-256 for provenance: `6ab6c40da85ac754bc93d74c3aa5379d076c486c6989cbfb374b2b2ae428e158`. Not committed in full (100MB) to keep repo size reasonable; re-fetch `https://raw.githubusercontent.com/GoSlowPoke168/Argus/master/public/cameras.geojson` to reproduce. |
| `sources/live-environment-streams/sources-2026-08-23.json` | Full file |
| `sources/live-environment-streams/streams-2026-08-23.geojson` | Full file (4MB — comparable in size to the WZDx feed already committed in Batch 1) |

## Raw evidence archive (Batch 5)

| File | SHA-256 |
|---|---|
| `sources/arcgis-discovery/search-traffic-camera-2026-08-24.json` | `12933b1d09c6cef0eb98d4ea3015c91f91b47cbed6721daba619cad1acd9cc94` |
| `sources/socrata-discovery/search-traffic-camera-2026-08-24.json` | `d0b25982cca2aacbefc231e0168bacf7479ecb09a381dd2b84e9ff2b318950aa` |
| `sources/fema-ipaws/archived-alerts-sample-2026-08-24.json` | `c2f1f5dd249cf21b46814467f8f59f41444e1eb88ec6f4442f88e77b2a98ed97` |
| `sources/oregon-tripcheck/camera-sample-2026-08-24.json` | `0df170997054353efe15df2b782ce2327a6c3fcf0baa5176eaa7a073a0c84812` |
| `sources/openeye-cam/categories-2026-08-24.json` | `1d414bfc5c40204397be3e86e5efd121b5575d7e603c2f6efeae90e00b0da1e7` |
| `sources/openeye-cam/camera-sample-2026-08-24.json` | `b037414da0e5dca5608196a8e709b20dbb36ec1e306867d06bb66d08854f05de` |

All full files (well under the size thresholds that required excerpting in earlier batches). `sources/openeye-cam/docs-page-raw-2026-08-23.html` (Batch 2's original evidence of the client-rendered, doc-content-empty page) is deliberately kept, not deleted — it remains the actual evidence for *why* the original `FAILED_VALIDATION` finding happened (wrong host guessed from an unreadable static page), even though that finding is now corrected.

## Raw evidence archive (Batch 6)

| File | SHA-256 |
|---|---|
| `sources/arcgis-discovery/national-sweep-page1-2026-08-24.json` | `9cfbf5aa644c11080197dff8e4870c7ed968b0fe7f90f80b38b5c4f7540df5ca` |
| `sources/iowa-dot/camera-sample-2026-08-24.json` | `1ba187dd44bafc363348341651fb31aecad0948aa51617690c0d856857acf78e` |
| `sources/maryland-chart/camera-sample-2026-08-24.json` | `9eb674eefb71587755a66c9a36a1628d2fa44e207a8ba3916e1e6e428f925622` |
| `sources/georgia-dot/camera-sample-2026-08-24.json` | `7356de99af166186dbf5cde5721d32c9e3d60ce76827a8b15ea6af06131c0e21` |
| `sources/utah-dot/camera-sample-2026-08-24.json` | `b28ec20c53e6a33cadf66175706a1930bb8838a9d52297ed6d4551bbd49a69d5` |
| `sources/socrata-discovery/full-catalog-76-results-2026-08-24.json` | `0bb470f64d508cb1ae46a93c678b1b8633fb915eb84803990c88758c770a3318` — the full 76-result catalog, superseding Batch 5's 10-result partial fetch |
| `sources/austin-tx/camera-sample-2026-08-24.json` | `b71ae36d03e99c90043c6c30009694b7c15fbe8d9190300fe8f3485cf5f9f249` |
| `sources/baton-rouge-la/camera-sample-2026-08-24.json` | `42f687dc4183997181fab73b43559e5a7626b90199f2b240932f775c2906da24` |
| `sources/new-orleans-la/camera-sample-2026-08-24.json` | `2943f3f5cc0455ecdcff5933bd415afed1f3afeda08dfc20ae462effa4332add` |
| `sources/honolulu-hi/camera-sample-2026-08-24.json` | `c5874f22141ce78f45517a3d91ede034231c25d94f84c29e378d3359014b5018` |
| `sources/nps-federal/webcams-endpoint-response-2026-08-24.json` | `adf24054a0da1d216699be8c128aa47c2c98f381a2c21945836ebc904653c8cc` — the structured `API_KEY_MISSING` error confirming the real endpoint |
| `sources/blm-federal/recreation-mapserver-layers-2026-08-24.json` | `847d20a4139f2b2227197b03c46ab045f929477d9a447d857c225818963c8664` — evidence for the real negative finding (no camera layer among BLM's 11 real recreation layers) |
| `sources/colorado-dot/socrata-traffic-feeds-pointer-2026-08-24.json` | `d34befb93df292b27580165b04f7ff6ef26ec383fe943ea254d22ee1b4453a32` |

## Raw evidence archive (Batch 7)

| File | SHA-256 |
|---|---|
| `sources/georgia-dot/layer-metadata-2026-08-24.json` | `e74aead24e12b2ca86d1cee007a44d9880f87d3d01779ea7d1f48b492b4b1e9a` |
| `sources/georgia-dot/enabled-count-2026-08-24.json` | `d41c0e23ef61f4634c32a0aa3e710a4c7f2d162090bbcaa3b79d2b6aaa8ebdb7` — the real `{"count":3676}` response |
| `sources/georgia-dot/disabled-count-2026-08-24.json` | `0f241c6d2cb7614449864398ba1d0d10c810ecd436e59eed19a4c3f174f979b3` — the real `{"count":3407}` response, resolving the anomaly |
| `sources/florida-dot/camera-sample-2026-08-24.json` | `aa1b69ae3e72c71a376ef64f81eafa2af0c152be86ae9981b02019b0b4607daf` |
| `sources/utah-dot/cctv-layer-sample-2026-08-24.json` | `4b62b879ebee0db73764d39f377245947aeb8faba50491e8ed704303851c58f6` |
| `sources/utah-dot/cctv-layer-count-2026-08-24.json` | `d9dcab48fa09d23f946b3cd9562ef457b7aa09ce54eba5fb5cb95d5a30419b49` — the real `{"count":1437}` response, correcting the earlier 32-record figure |
| `sources/new-orleans-la/dataset-metadata-2026-08-24.json` | `99f6ca792a343cfea393dc291267cafbbda4359e6bd72cac89b2de63753abe13` — the dataset's own description, directly evidencing the enforcement-camera reclassification |
| `sources/arcgis-discovery/national-sweep-page4-2026-08-24.json` | `6cb7961d4121ec44f815c2e4501ec5ed266672264f1b8f71b823db52ff0292eb` — results 301-400 of the full 758-match sweep (pages 5-8, results 401-758, not individually archived — the classification output is fully recorded in §28 above and is reproducible by re-running the same paginated query) |

## Raw evidence archive (Batch 8)

| File | SHA-256 |
|---|---|
| `sources/missouri-dot/camera-sample-2026-08-24.json` | `e54951e582fa12aae7d234dbaa4c61dc3794f3aeadfc5a40c38faf5c66853a5c` |
| `sources/virginia-dot/camera-sample-2026-08-24.json` | `a116f507972ce80ec9839c471688878836000a1ea301d145b90ca8885af91027` |
| `sources/pennsylvania-dot/layer-metadata-false-positive-2026-08-24.json` | `59c8254f1bc4a384dc0643635218ccee2c5de03d465e0e046d7fb3b69b25a56e` — the layer metadata proving this is `PA_BILLBOARDS`, not a camera dataset |
| `sources/north-carolina-dot/negative-finding-2026-08-24.json` | `96a4fecc6de2e0898dd904127d2cbab4a24f251809a034c259258c0438431a10` — both real 404 responses, hand-recorded since the raw HTTP responses were not saved to separate files at fetch time |
| `sources/utah-dot/cctv-online-count-2026-08-24.json` | `0dac362aa1389572dbcd62cbf4ae876be63fa35b9ae3eb22661258acc5f21435` — the real `{"count":1188}` response |
| `sources/utah-dot/live-view-cameras-actually-a-planning-dataset-2026-08-24.json` | `3b6d5499cdd9440b3ae9678711a8c71395049eecbd21d5e9ab2fcb0100c47198` — real sample records showing `Est__Cost`/`Master_Pla`/`Package` fields, evidencing this is a procurement dataset, not camera locations |

## Raw evidence archive (Batch 9)

| File | SHA-256 |
|---|---|
| `sources/alabama-dot/camera-sample-2026-08-24.json` | `ca45678fdafbc721daff93a8d13b433947d362756c85754c384199032fcc6f57` |
| `sources/alabama-dot/active-count-2026-08-24.json` | `772c5c96abeebd7cc9e5a74321b1ca0ad65f7db53606558cc103002f6cc72f8a` — the real `{"count":539}` response confirming all records active |
| `sources/kentucky-dot/camera-sample-own-domain-2026-08-24.json` | `4b0aa32a30247116c851f69050b4e37ff66d55220e56b5663cbe5291ebeba549` — sampled from Kentucky's own domain (`maps.kytc.ky.gov`) |
| `sources/kentucky-dot/arcgis-mirror-count-2026-08-24.json` | `d8c7ab3dc4f255e3969695f88ce19610b2a00c29863b22f16ec2c83f49519802` — the real `{"count":254}` response from the independent ArcGIS mirror, matching the own-domain count exactly |
| `sources/florida-dot/second-source-count-2026-08-24.json` | `d9d946dc3bedc1f80f1add55cc859a0710e30bace6fa2668feb2bcaea94befce` — the real `{"count":3651}` second-source response |
| `sources/maryland-chart/third-source-sample-2026-08-24.json` | `0c44b37235c9789d2be33090627450c64ae25b6d9143d6a9768bd40fd5db63da` — real `chart.maryland.gov` links confirming this "MDOT" service is Maryland, not Michigan |
| `sources/texas-dot/skyline-credential-gated-2026-08-24.json` | `ef1687bad8b012274c27534a9d171f4b8f1f02f05715b95f5fe682c0692ba993` — the real, structured credential-required error, hand-recorded since it's a single small JSON error response |
| `sources/ohio-dot/marysville-layer-sample-2026-08-24.json` | `73c410ad097fd07e22a33316d928d89e14d84949632ddf255769681835f1a655` — all 7 real records from the small, likely-local layer |
