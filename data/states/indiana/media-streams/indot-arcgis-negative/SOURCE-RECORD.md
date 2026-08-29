# Source Record — Indiana traffic cameras via ArcGIS: NEGATIVE FINDING (and why that is the expected result)

**Status: 🔴 NOT FOUND by this methodology — and this is a confirming negative, not a gap.**

**Retrieved:** 2026-08-29, via direct HTTPS request (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** The ArcGIS REST discovery methodology from `docs/research/PHASE1-SOURCE-VERIFICATION.md`, which verified camera layers for 11 states. Indiana was **not** among those 11, so this closes a real coverage gap in that sweep.

## What was searched

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://www.arcgis.com/sharing/rest/search` — `q=(traffic camera OR CCTV OR RWIS OR "road weather") AND (Indiana OR INDOT)`, `num=40` | 200 | 121,824 | `87b92cb5cf264bddc5e977fa0542af11e251c9d205bf86188884d48392a86988` | `arcgis-search-indiana-2026-08-29.json` |

## Finding

197 total matches, **no Indiana traffic-camera or RWIS Feature Service among them.** The Indiana-relevant results are real INDOT/IndianaMap GIS assets of other kinds: AADT traffic counts (`gisdata.in.gov/server/rest/services/Hosted/LRSE_AADT/FeatureServer`), the INDOT Traffic Count Database System, rail-system layers, innovative-intersection layers, and MPO analysis zones.

**This negative is consistent with what is already known about Indiana, and that is the point.** Indiana's cameras are not published as an ArcGIS layer because they are published through the Castle Rock CARS platform — already independently verified in `data/states/indiana/media-streams/indot-cars-hub/` (`cctv.xml`, 759,718 bytes, hashed). Finding no ArcGIS camera layer is therefore the *expected* result, and it usefully confirms that Indiana's camera coverage does not depend on a source this project has failed to look for.

The search also surfaced no Indiana RWIS / road-weather Feature Service, which leaves Indiana's weather capability genuinely unestablished — see `indiana.md` §1.3.

## Scope limits, stated plainly

One query against one catalog. This does not establish that no Indiana camera GIS layer exists anywhere, only that this query did not return one. `gisdata.in.gov` (IndianaMap) is a real state GIS host that appeared in the results and whose own service catalog was **not** enumerated in this pass — a concrete next step rather than a closed question.
