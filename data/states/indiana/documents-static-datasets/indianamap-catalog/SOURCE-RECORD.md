# Source Record — IndianaMap / gisdata.in.gov ArcGIS catalog

**Retrieved:** 2026-08-29, via direct HTTPS request (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** An ArcGIS REST server's `/rest/services?f=json` endpoint is its **own published catalog** — the documented way a server advertises what it hosts. Catalog-driven discovery per `MacEvil.md` §16, not enumeration or guessing. `gisdata.in.gov/robots.txt` returns HTTP 200 but serves an ArcGIS application shell rather than robots syntax — a single-page-app catch-all. It declares no valid directives, so none apply. No access control bypassed.

## Identity

- **Provider:** State of Indiana — IndianaMap, hosted at `gisdata.in.gov`
- **Official URL:** `https://gisdata.in.gov/server/rest/services`
- **ArcGIS version:** 11.5
- **License:** Not stated at catalog level; per-service `licenseInfo` was **not** inspected. **Treat as UNKNOWN/restrictive** per `MacEvil.md` §12 until a specific service is evaluated on its own terms.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://gisdata.in.gov/server/rest/services?f=json` | 200 | 3,999 | `57fa8359d8e81ca6e2dc9faad5654017ffc9c07a2fb44ed8e3d1b51a6c77785a` | `gisdata-in-gov-root-2026-08-29.json` |

## Content verification

The catalog advertises **11 folders** — `DNR`, `DOR_Utilities`, `Geocode`, `Hosted`, `IDEM`, `IDHS`, `Incidents`, `IndianaIndoors`, `IOT_Visits`, `Test`, `Utilities` — and **72 services at the root**. A large, real, actively-versioned state GIS estate.

A token scan of the full catalog response found **zero** occurrences of `camera`, `cctv`, `webcam`, or `traffic`.

## Why this is recorded even though nothing was ingested

**It closes a standing `projectatlas.md` §9 open item.** `gisdata.in.gov` was flagged earlier this session as a real Indiana state GIS host that had never been enumerated. It has now been, and the result is recorded rather than left as a question.

**The camera negative is corroborating, not disappointing.** Indiana's cameras come through the Castle Rock CARS platform (`data/states/indiana/media-streams/indot-cars-hub/`, 746 cameras counted). Finding none in the state's *general* GIS estate — after already finding none in the ArcGIS Online catalog — means Indiana's camera coverage is not sitting in some obvious official place this project failed to look. Two independent negatives make the CARS path look like the whole picture rather than a lucky first hit.

The folder names `IDHS` (Indiana Department of Homeland Security) and `Incidents` are plausible future sources for §1.2 and §1.6. **No claim is made about their contents** — neither was opened.

## Scope limits

Only the **root** catalog was fetched. The 11 folders were **not** descended into, so this record does not establish what any individual service contains — only what the server advertises at its top level. Descending each folder is a real, bounded next step, and is the obvious way to test whether `IDHS`/`Incidents` hold anything ATLAS wants.
