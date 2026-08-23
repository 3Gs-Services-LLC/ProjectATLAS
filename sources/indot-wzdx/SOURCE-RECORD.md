# Source Record — INDOT Work Zone Data Exchange (WZDx) Feed

**Retrieved:** 2026-08-23 (device local clock at fetch time), via direct HTTPS request from the operator's Windows machine (`curl`, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** Discovered via the official federal WZDx Feed Registry (`datahub.transportation.gov`, a US DOT open-data catalog), not guessed or enumerated. Fetched directly from the registry-listed URL. No access control bypassed — the feed requires no authentication and none was attempted to be bypassed.

## Identity

- **Provider:** Indiana DOT, published via the Castle Rock CARS platform (feed self-identifies publisher as `"INDOTCastleRock"`, contact `Ed Cox <ECOX@indot.in.gov>`)
- **Agency/jurisdiction:** Indiana DOT
- **Platform:** Castle Rock CARS — the same underlying platform as `sources/indot-cars-hub/` (§5A of `projectatlas.md`) and the 511IN GraphQL/HLS path (§5B), confirmed by the shared `carsprogram.org` domain family. This is a **third, distinct** integration path — see `projectatlas.md` §5D.
- **Official URL:** `https://in.carsprogram.org/carsapi_v1/api/wzdx`
- **Registry entry:** `https://datahub.transportation.gov/resource/69qe-yiui.json` (WZDx Feed Registry, filtered to `state=indiana`)
- **Specification:** WZDx — feed self-reports version `4.0`; the federal registry lists Indiana's entry as version `4.1`. Real, minor discrepancy, not resolved either way in this record.
- **License:** **CC0 1.0 Universal**, declared explicitly inside the feed payload's own `road_event_feed_info.license` field (`https://creativecommons.org/publicdomain/zero/1.0/`) — the strongest, most explicit license evidence found for any INDOT source in this project to date, since it does not depend on separately locating a terms page that may or may not exist.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://datahub.transportation.gov/resource/69qe-yiui.json` (full registry) | 200 | 19,480 | `ea7ff56cc1f5d08bca6cdf8425cebe4c76f2a5f3dda2eb1402aa27ae66925f46` | `wzdx-feed-registry-2026-08-22.json` |
| `https://in.carsprogram.org/carsapi_v1/api/wzdx` | 200 | 5,508,285 | `7fd6e723d93ebf6a139b5b9919fbd732f6c9ff403571f0ea9bd58ac1c4b855ac` | `data/2026-08-22/wzdx.json` |

## Content spot-check (confirms real, non-fabricated data)

The feed contains 1,411 real `Feature` objects. First two records describe real, specific work-zone events on US 20 (both directions) with a genuine INDOT contact, real milepost-style coordinates within Indiana's bounding box, and realistic future date ranges (`start_date: 2026-10-05T13:00:00Z`, `end_date: 2026-10-12T21:00:00Z`) consistent with a live, forward-scheduled work-zone system rather than static/placeholder content. Record IDs follow a `CARSy-<n>-<n>` pattern, consistent with the Castle Rock/CARS platform identification already established for this project's other two INDOT paths.

## Registry cross-check

The full federal registry (`wzdx-feed-registry-2026-08-22.json`) contains 42 active feed entries across 29 US states/agencies, including Indiana. This confirms the registry itself is a legitimate, current, government-maintained discovery mechanism — consistent with `MacEvil.md` §16's instruction to use "official GIS/open-data catalogs" for source discovery, not an ad-hoc list.

## Open items for Phase 1/Phase 7 (WZDx adapter)

1. Reconcile the version-string discrepancy (feed self-reports `4.0`, registry lists `4.1`) before building a schema-validating parser against either version blindly.
2. Full JSON Schema validation of all 1,411 records against the official WZDx v4.0/4.1 schema has not been performed — this session did a spot-check only.
3. The registry's other 28 states/agencies are a real, ready-made discovery list for a generic WZDx adapter (`MacEvil.md` §19's "generic adapters" — WZDx is effectively a standardized JSON/GeoJSON format) — building the adapter once against the spec should let most of that list be ingested without state-specific code, directly serving `Project ATLAS-WebSite.md` §69's "the 500th source as easy as the 5th" goal.
4. Confirm whether other Castle Rock-platform states expose an equivalent `<state>.carsprogram.org/carsapi_v1/api/wzdx` pattern even where the federal registry doesn't yet list them — a candidate research lead, not yet investigated.
