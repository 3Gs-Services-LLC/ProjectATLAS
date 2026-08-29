# Source Record — Wisconsin DNR ArcGIS catalog (dnrmaps.wi.gov)

**Retrieved:** 2026-08-29, via direct HTTPS request (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** An ArcGIS REST server's `/rest/services?f=json` endpoint is its **own published catalog** — the documented way a server advertises what it hosts. Catalog-driven discovery per `MacEvil.md` §16, not enumeration or guessing. `dnrmaps.wi.gov/robots.txt` returns **HTTP 404** — no robots.txt exists, so no crawl directives are declared. No access control bypassed.

## Identity

- **Provider:** Wisconsin Department of Natural Resources (WDNR)
- **Official URL:** `https://dnrmaps.wi.gov/arcgis/rest/services`
- **ArcGIS version:** 11.3
- **License:** Not stated at catalog level; per-service `licenseInfo` was **not** inspected. **Treat as UNKNOWN/restrictive** per `MacEvil.md` §12 until a specific service is evaluated on its own terms.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://dnrmaps.wi.gov/arcgis/rest/services?f=json` | 200 | 386 | `3d29193998962d215116a63906faa4f75db711243e54f7fd2955de4d4f8a8373` | `dnrmaps-wi-gov-root-2026-08-29.json` |

## Content verification

The catalog advertises **26 folders** and **0 root-level services** — everything is organised into folders. Visible folder names include `AM_WARP_MAP`, `DG_HiCap`, `DG_Viewer`, `DG_Well_Driller`, `DW_Map_Cached`, `DW_Map_Dynamic`, `ER_Biotics`, `ER_Bird_Breeding_Atlas`, `FM_Trout`, `FR_WIS_BURN`, `LF_DML`, `PR_TRAILS`.

A token scan found **zero** occurrences of `camera`, `cctv`, or `webcam`.

**That negative is weak and should be read as such.** With 0 root services and 26 unopened folders, the 386-byte response is essentially just a folder index. It is **not** evidence that WDNR publishes no cameras — unlike the WisDOT `agohub` result, where all 40 services were listed and none was a camera. Do not cite this record as a camera negative.

## Why this is recorded even though nothing was ingested

It establishes a real, official, reachable Wisconsin state-agency GIS estate — the first one verified for Wisconsin in this project. `PR_TRAILS` (parks and recreation) is a plausible §1.6 source, and `FR_WIS_BURN` (fire) may bear on hazards.

**No claim is made about any folder's contents.** None was opened. This record says only that the server exists, responds, and advertises 26 folders.

## Scope limits

Only the **root** catalog was fetched. Descending the 26 folders is the obvious next step and is what would turn this from "a server exists" into an actual source. Note also that WDNR is one agency: Wisconsin has other official GIS estates (the search that surfaced this one also named a Department of Health Services spatial portal, a Department of Public Instruction open-data portal, and SAGIC as a state-agency GIS coordinating body). None of those was fetched, so Wisconsin's official GIS coverage in this project remains **partial by construction**.
