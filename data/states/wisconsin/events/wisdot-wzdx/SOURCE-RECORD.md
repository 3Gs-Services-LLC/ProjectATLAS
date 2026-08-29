# Source Record — WisDOT Work Zone Data Exchange (WZDx) Feed

**Retrieved:** 2026-08-29 (device local clock at fetch time), via direct HTTPS request from the operator's Windows machine (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** Discovered via the official federal WZDx Feed Registry (`datahub.transportation.gov`, a US DOT open-data catalog), not guessed or enumerated — the same discovery mechanism already used for Indiana (`data/states/indiana/events/indot-wzdx/`). Fetched directly from the registry-listed URL. No access control bypassed — the feed requires no authentication and none was attempted to be bypassed.

## Identity

- **Provider:** Wisconsin Department of Transportation (WisDOT)
- **Agency/jurisdiction:** Wisconsin, statewide
- **Registry-declared feed name:** `wisdot`, issuing organization `Wisconsin DOT`, `active: true`
- **Official URL:** `https://511wi.gov/api/wzdx`
- **Registry entry:** `https://datahub.transportation.gov/resource/69qe-yiui.json` (WZDx Feed Registry; Wisconsin is 1 of 42 active entries)
- **Registry start date:** `2023-03-16` — this is a long-established feed, not a new or experimental one.
- **Publisher (in payload):** `Work Zone Manager`
- **Upstream data sources (in payload):** `ATMS-ExtEvent`, `ATMS-ERM` — WisDOT's Advanced Traffic Management System. Both carry an empty `organization_name`, a real gap in the feed's own self-description.
- **License:** **CC0 1.0 Universal**, declared explicitly inside the feed payload's own `feed_info.license` field (`https://creativecommons.org/publicdomain/zero/1.0/`). As with Indiana's WZDx feed, this is stronger licence evidence than a separately-located terms page, because it does not depend on finding one.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://datahub.transportation.gov/resource/69qe-yiui.json` (full registry) | 200 | 19,480 | `ea7ff56cc1f5d08bca6cdf8425cebe4c76f2a5f3dda2eb1402aa27ae66925f46` | `wzdx-feed-registry-2026-08-29.json` |
| `https://511wi.gov/api/wzdx` | 200 | 10,300,276 | `2a3f7d47e7f2c114bf8791e9d35054ae4674b746e7ac68103268e059d5a87c08` | `data/2026-08-29/wzdx.json` |

**Registry cross-check, independently confirmed:** the registry copy fetched this session is byte-identical to the one fetched for Indiana on 2026-08-22 — same 19,480 bytes, same SHA-256 `ea7ff56c…`. Seven days apart, two separate sessions, identical bytes. That is real evidence the federal registry is stable rather than volatile, and it independently re-confirms Indiana's recorded hash was correct.

## Content spot-check (confirms real, non-fabricated data)

The feed contains **4,413 real `Feature` objects** — 4,159 `work-zone` and 254 `detour` events. The first record describes a real, specific event on `WIS 142 WB` ("Mainline Right Shoulder Closed … from 180TH AVE to 180TH AVE"), westbound, with a `LineString` geometry whose coordinates (`-88.03, 42.63`) fall inside Wisconsin's bounding box, and a live forward-scheduled date range. `feed_info.update_date` was `2026-08-29T02:57:36Z` at fetch time — minutes old, consistent with an actively-maintained system rather than a stale export.

## Real discrepancies found (recorded, not resolved)

1. **Version disagreement.** The federal registry lists Wisconsin at WZDx `4.1`; the feed payload self-reports `4.2`. This is the *same class* of discrepancy already recorded for Indiana (registry `4.1`, feed `4.0`), which suggests the registry's version column is generally stale rather than Wisconsin being a special case. Do not build a schema-validating parser against either number without checking the payload first.
2. **Update-frequency disagreement.** The registry says `5m`; the payload's `feed_info.update_frequency` says `60` (seconds). Not resolved either way here.
3. **Empty publisher contact fields.** `contact_name` and `contact_email` are both empty strings, and both `data_sources[].organization_name` values are empty. Indiana's feed, by contrast, carries a real named contact. Worth noting for any future attribution requirement.

## Scope note — what this record does NOT establish

This record covers **work-zone and detour events only**. It is not evidence of Wisconsin traffic cameras, road-weather sensors, scanner feeds, or ALPR infrastructure. Those remain unverified for Wisconsin — see `data/states/wisconsin/wisconsin.md` §1, where they are recorded as `researching`/`unspecified` rather than promoted on the strength of the imported dossier's own claims (`data/states/NOTICE.md` warns against exactly that).

## Open items for Phase 1 / Phase 7

1. Full JSON Schema validation of all 4,413 records against the official WZDx 4.2 schema has not been performed — this session did a structural spot-check only.
2. Reconcile the registry-vs-payload version and update-frequency discrepancies before relying on either.
3. Wisconsin is now the second confirmed WZDx feed in this project after Indiana. The generic-WZDx-adapter argument in `data/states/indiana/events/indot-wzdx/SOURCE-RECORD.md` (open item 3) applies directly: two independent states, same format, same licence — build the adapter once against the spec.
4. `511wi.gov` clearly hosts an `/api/` surface, since the registry points at `/api/wzdx`. **No other path under it was requested.** Probing for sibling endpoints would be exactly the blind URL-guessing that `projectatlas.md` §4 forbids and that this project's own research notes deprioritise. If WisDOT publishes API documentation, find it through an official catalog or the agency's own developer page first.
