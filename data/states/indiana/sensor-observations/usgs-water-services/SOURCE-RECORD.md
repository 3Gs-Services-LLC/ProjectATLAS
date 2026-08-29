# Source Record — USGS Water Services: Indiana real-time gauge network

**Retrieved:** 2026-08-29, via direct HTTPS request (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** USGS Water Services is a documented public REST API; the state-scoped query below is built from its published parameters, not guessed. `waterservices.usgs.gov/robots.txt` returns **HTTP 404** — no robots.txt exists, so no crawl directives are declared. That is materially different from an active refusal (compare `wsp.wi.gov`, which returns 401 and was therefore left alone). No access control bypassed.

## Why this sits in `sensor-observations/` but answers capability §1.6

The two axes are orthogonal, and this record is a clean demonstration of that. **Class** (the folder): stream gauges are periodic numeric readings from fixed instruments, so `sensor-observations/`. **Subject** (the capability): hydrology is not cameras, traffic, weather, scanners or ALPR, so it lands in §1.6, "other". Neither axis is derivable from the other — see `projectatlas.md` §10.

## Identity

- **Provider:** U.S. Geological Survey (USGS), U.S. Department of the Interior
- **System:** USGS Water Services / National Water Information System (NWIS)
- **Official URL:** `https://waterservices.usgs.gov/nwis/site/`
- **Query used:** `?format=rdb&stateCd=in&siteType=ST&hasDataTypeCd=iv&siteStatus=active` — active stream sites in Indiana that publish instantaneous (real-time) values
- **License:** US federal government work — **public domain**. No key, no registration, no terms gate encountered.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=in&siteType=ST&hasDataTypeCd=iv&siteStatus=active` | 200 | 28,639 | `2d5804f834d37e0c25076aab280aa97cce99e67f58e717cdeaf4d10e7a92f0b7` | `data/2026-08-29/sites-in-active-iv.rdb` |

## Content verification (parsed, not assumed)

The response is USGS RDB (tab-delimited, `#` comment preamble, two-row header). Parsed: **246 active real-time stream-gauge sites in Indiana**.

Columns include `agency_cd`, `site_no`, `station_nm`, `site_tp_cd`, `dec_lat_va`, `dec_long_va`, `coord_acy_cd`, `dec_coord_datum_cd`, `alt_va`, and HUC. Every row therefore carries a **real coordinate with a stated datum and a publisher-declared accuracy code** — unusually good provenance, and exactly the shape `MacEvil.md`'s confidence model wants, since accuracy is declared by the source rather than inferred by us.

First record: `USGS | 03274650 | WHITEWATER RIVER NEAR ECONOMY, IN | ST | 40.0041988 | -85.1154894 | NAD83 | 1065.58 ft NAVD88`

Genuine operational data, not placeholder: real named watercourses, coordinates inside Indiana's bounding box, NAD83/NAVD88 datums, real HUC basin codes.

## Scope limits

- This is the **site inventory**, not the measurements. No discharge or gauge-height values were fetched.
- `siteType=ST` restricts to **streams**. USGS also publishes groundwater, lake/reservoir, spring and atmospheric sites in Indiana; those were not requested and are **not** in the 246 figure.
- The count is as-of the 2026-08-29 fetch. USGS activates and retires sites continuously.

## Open items

1. Fetch instantaneous values (`/nwis/iv/`) if a live hydrology layer is ever wanted; the site inventory alone is static reference data.
2. Decide whether non-stream USGS site types belong in ATLAS's scope for this state.
3. This project already verified the USGS **earthquake** feed (`docs/research/PHASE1-SOURCE-VERIFICATION.md`); water services is a **separate** USGS product and neither supersedes the other.
