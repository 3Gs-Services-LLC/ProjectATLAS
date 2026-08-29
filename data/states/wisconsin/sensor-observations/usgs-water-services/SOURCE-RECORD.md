# Source Record — USGS Water Services: Wisconsin real-time gauge network

**Retrieved:** 2026-08-29, via direct HTTPS request (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** USGS Water Services is a documented public REST API; the state-scoped query below is built from its published parameters, not guessed. `waterservices.usgs.gov/robots.txt` returns **HTTP 404** — no robots.txt exists, so no crawl directives are declared. That is materially different from an active refusal (compare `wsp.wi.gov`, which returns 401 and was therefore left alone). No access control bypassed.

## Why this sits in `sensor-observations/` but answers capability §1.6

The two axes are orthogonal, and this record is a clean demonstration of that. **Class** (the folder): stream gauges are periodic numeric readings from fixed instruments, so `sensor-observations/`. **Subject** (the capability): hydrology is not cameras, traffic, weather, scanners or ALPR, so it lands in §1.6, "other". Neither axis is derivable from the other — see `projectatlas.md` §10.

## Identity

- **Provider:** U.S. Geological Survey (USGS), U.S. Department of the Interior
- **System:** USGS Water Services / National Water Information System (NWIS)
- **Official URL:** `https://waterservices.usgs.gov/nwis/site/`
- **Query used:** `?format=rdb&stateCd=wi&siteType=ST&hasDataTypeCd=iv&siteStatus=active` — active stream sites in Wisconsin that publish instantaneous (real-time) values
- **License:** US federal government work — **public domain**. No key, no registration, no terms gate encountered.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=wi&siteType=ST&hasDataTypeCd=iv&siteStatus=active` | 200 | 25,628 | `52d9d5ba53fdd276ed0b2ab735b3956e5eb4ad73c94af791bbecab0e53ec3de6` | `data/2026-08-29/sites-wi-active-iv.rdb` |
| `https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=wi&siteType=AT&siteStatus=active` | 200 | 4,013 | `40b50b4c7c2c7835bac26c80720f49b05123ac85e7c5710e8a8ee2f58d72947f` | `data/2026-08-29/sites-wi-atmospheric.rdb` |

## Content verification (parsed, not assumed)

The response is USGS RDB (tab-delimited, `#` comment preamble, two-row header). Parsed: **215 active real-time stream-gauge sites in Wisconsin**.

Columns include `agency_cd`, `site_no`, `station_nm`, `site_tp_cd`, `dec_lat_va`, `dec_long_va`, `coord_acy_cd`, `dec_coord_datum_cd`, `alt_va`, and HUC. Every row therefore carries a **real coordinate with a stated datum and a publisher-declared accuracy code** — unusually good provenance, and exactly the shape `MacEvil.md`'s confidence model wants, since accuracy is declared by the source rather than inferred by us.

First record: `USGS | 04024430 | NEMADJI RIVER NEAR SOUTH SUPERIOR, WI | ST | 46.6333333 | -92.0938889 | NAD83 | 601.10 ft NAVD88`

Genuine operational data, not placeholder: real named watercourses, coordinates inside Wisconsin's bounding box, NAD83/NAVD88 datums, real HUC basin codes.

## Significance for Wisconsin specifically

Wisconsin began this session with **zero** independently verified sources. This is its third, after the WisDOT WZDx feed and the FCC ULS national record — and it is the first Wisconsin source that delivers **real, per-state, coordinate-bearing records** rather than an endpoint whose payload was left undownloaded. 215 gauges with declared coordinate accuracy is genuinely ingestible data.

## Atmospheric sites (added 2026-08-29, capability §1.3)

A second query against the same API with `siteType=AT` returned **25 active atmospheric sites in Wisconsin** — precipitation stations and similar. Same RDB shape, same public-domain licence, same per-row coordinate/datum/accuracy provenance. First record: `USGS | 424425088133001 | FOX RIVER PRECIPITATION STN AT ROCHESTER, WI | AT | 42.74119444 | -88.2245 | NAD83 | 769 ft NAVD88`.

**These 25 sites answer capability §1.3 (weather), while the 215 stream gauges answer §1.6 (other).** One source, one API, two capabilities — the split is by subject, not by endpoint, and the counts must not be added together or used interchangeably.

## Scope limits

- This is the **site inventory**, not the measurements. No discharge or gauge-height values were fetched.
- `siteType=ST` restricts to **streams**. USGS also publishes groundwater, lake/reservoir, spring and atmospheric sites in Wisconsin; those were not requested and are **not** in the 215 figure. For a state with Wisconsin's lake coverage, that exclusion is a real limitation, not a formality.
- The count is as-of the 2026-08-29 fetch. USGS activates and retires sites continuously.

## Open items

1. Fetch instantaneous values (`/nwis/iv/`) if a live hydrology layer is ever wanted; the site inventory alone is static reference data.
2. ~~Re-run without `siteType=ST`~~ **Partly addressed 2026-08-29 (later same day):** the **atmospheric** site type (`siteType=AT`) was queried and returned **25 active Wisconsin sites** — precipitation and related stations, e.g. `FOX RIVER PRECIPITATION STN AT ROCHESTER, WI` at `42.74119444, -88.2245` (NAD83), each carrying the same coordinate/datum/accuracy provenance as the stream sites. These 25 are counted under capability **§1.3 (weather)**, *not* §1.6, since precipitation is weather; the 215 stream gauges stay under §1.6. **Still outstanding:** lake/reservoir, groundwater and spring site types remain unqueried, so Wisconsin's full USGS coverage is still not established.
