# Source Record — Wisconsin traffic cameras: NEGATIVE FINDING via ArcGIS discovery

**Status: 🔴 NOT FOUND by this methodology.** This record exists so the search is documented and not silently repeated. It is **not** evidence that Wisconsin has no public traffic cameras — it is evidence that two specific, established discovery mechanisms did not surface a machine-readable camera layer.

**Retrieved:** 2026-08-29, via direct HTTPS requests (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** The ArcGIS REST discovery methodology established in `docs/research/PHASE1-SOURCE-VERIFICATION.md` (§18, §24, §28, §30–34), which independently verified camera layers for 11 other states. Applied to Wisconsin, plus a follow-up listing of the WisDOT ArcGIS server's own published service catalog.

## What was searched

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://www.arcgis.com/sharing/rest/search` — `q=(traffic camera OR CCTV OR "traffic cam") AND (Wisconsin OR WisDOT)`, `num=40`, sorted by views | 200 | 265,666 | `2520a24c40f8ebe55ea85ec2771f45188ea038b29d6947177afcceb1f7419985` | `arcgis-search-wisconsin-2026-08-29.json` |
| `https://dotmaps.wi.gov/arcgis/rest/services/agohub?f=json` (WisDOT's own published catalog) | 200 | 2,435 | `80c0ea08dba2bba992be8fb120263ef03bbf2df83fe9c225367b37a2a2a5c8ad` | `dotmaps-agohub-catalog-2026-08-29.json` |
| `https://dotmaps.wi.gov/arcgis/rest/services?f=json` (root catalog) | **000 — connection reset** | — | — | not saved; failed twice |

## Findings

**1. The ArcGIS Online search returned 297 total matches, none of which is a Wisconsin traffic-camera layer.** Wisconsin-relevant results are real WisDOT GIS assets of other kinds: `WisDOT Traffic Counts TCMap`, `Traffic Counts` (`dotmaps.wi.gov/arcgis/rest/services/agohub/TRAFFIC_COUNTS/MapServer/0`), `Mile Markers`, `Forecasting_Prod`, driver-training and traffic-safety layers. The single winter-conditions result (`Midwest_Winter_Road_Conditions_View`) is owned by `IowaDOT_SODA`, not WisDOT — a multi-state view, not a Wisconsin source, and not a camera layer.

**2. WisDOT's own `agohub` catalog lists 40 services and contains no camera or CCTV service.** The full list was fetched and saved; it covers airports, boat landings, culverts, DMV service centres, mile markers, roundabouts, rest areas, structures, traffic counts, and similar. Not one entry matches `camera`, `CCTV`, or `video`. This is a stronger negative than the search alone, because it is the agency's own published index rather than a third-party search ranking.

**3. The server's root catalog reset the connection on two separate attempts** (`curl` exit 56, `Recv failure: Connection was reset`), so other service folders on that host were **not** enumerated. This is a real gap in coverage, not a clean negative — there may be additional folders beyond `agohub`. Recorded honestly rather than presented as an exhaustive sweep.

## What was deliberately NOT done

`511wi.gov` is Wisconsin's public traveller-information system and is confirmed to expose `/api/wzdx` (see `data/states/wisconsin/events/wisdot-wzdx/`). **No attempt was made to probe sibling paths such as `/api/cameras`.** Guessing endpoint names is exactly what `projectatlas.md` §4 forbids and what this project's own research notes deprioritise in favour of catalog-driven discovery. A camera endpoint may well exist there; finding it requires official API documentation or a catalog entry, not URL guessing.

Equally, the imported research dossier in `data/states/wisconsin/wisconsin.md` §2 asserts that WisDOT 511 provides a statewide public traffic-camera network. **That assertion was not used as a basis for any status here.** Per `data/states/NOTICE.md`, a dossier claim is a lead to verify, not a source — and it has not been verified.

## Next step

Wisconsin's camera capability stays at `researching` in `wisconsin.md` §1. To move it further, one of these is needed, in preference order: official WisDOT/511WI API documentation or developer page; a Wisconsin entry in a government open-data catalog (Socrata/CKAN/ArcGIS Hub) pointing at a camera dataset; or a successful listing of the remaining `dotmaps.wi.gov` service folders once that host responds.
