# Source Record — 511WI Cameras API (documented, credential-gated)

**Status: 🟡 CREDENTIAL-GATED.** The endpoint is real and officially documented. It requires a developer key, which in turn requires a registered account. **No account was created and no key was requested** — see "What was deliberately not done" below.

**Retrieved:** 2026-08-29, via direct HTTPS requests (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** Found via **official WisDOT/511WI developer documentation**, located by a search restricted to Wisconsin state domains. This is the exact route the earlier negative-finding record for this state specified as the *correct* way to resolve the camera question — and explicitly not by guessing `511wi.gov/api/*` paths, which `projectatlas.md` §4 forbids.

`511wi.gov/robots.txt` was read **before** any fetch. It disallows `/my511/`, `/map/map*/`, `/bundles/`, `/list/getdata/`, `/eventdetails/` and `/error/`. It does **not** disallow `/developers/`, `/help/`, or `/api/`, so every path used here is permitted.

## Identity

- **Provider:** Wisconsin Department of Transportation (WisDOT)
- **System:** 511WI traveller information — the same system already confirmed for capability §1.2 via `data/states/wisconsin/events/wisdot-wzdx/`
- **Documentation:** `https://511wi.gov/developers/doc`, `https://511wi.gov/developers/resources`, `https://511wi.gov/help/endpoint/cameras`
- **Documented API surface:** the developer documentation states the REST API exposes **Cameras, Message Signs, Truck Parking, Winter Road Conditions, Events, Alerts and Travel Time**
- **Auth:** developer key required. Quoted verbatim from `https://511wi.gov/developers/doc`: *"Requires a developer key. For most calls, query string 'key' parameter is required. Throttling is enabled. Ten calls every 60 seconds."* and *"A registered account is needed before you can sign up for a Developer API key."*
- **License:** **UNKNOWN.** No terms-of-use or redistribution language was located. Treat as restrictive per `MacEvil.md` §12 — and note that a key-issuing process usually comes with an access agreement that would govern redistribution. That agreement has not been read.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://511wi.gov/developers/doc` | 200 | 74,652 | `a8150e9e62fd6f3fa7aaa1dd93ccddf830ffe5cf65e1479ecf826423fe95a8e2` | `data/2026-08-29/developers-doc.html` |
| `https://511wi.gov/developers/resources` | 200 | 70,201 | `c6f57dca80df5437fcc347f771230a1caf6037abe693dd14dc7365caeaecb631` | `data/2026-08-29/developers-resources.html` |
| `https://511wi.gov/help/endpoint/cameras` | 200 | 85,358 | `0e5cd54d6382e86d0ff1e8973ab93a3671536adbf374d4d4f981280e84e185f4` | `data/2026-08-29/help-endpoint-cameras.html` |
| `https://511wi.gov/api/getcameras?format=json` (no key) | **404** | 136 | `8f790d91bca7cb1cd85ade3972918cb520a4efc79ca3017ee0c91687a9de29ca` | `data/2026-08-29/getcameras-unauthenticated-response.xml` |

## Content verification (parsed from the primary source, not from a search summary)

The developer-key requirement and the throttling limit were extracted from the **fetched HTML of `511wi.gov/developers/doc` itself**, not taken from a search result. The quoted strings above appear verbatim in that saved artifact.

**The endpoint-specific page did not yield the endpoint form in raw HTML.** `help/endpoint/cameras` is 85 KB but its text extraction contains none of the expected API details, indicating a client-rendered page whose documentation content is not in the served HTML. This is the **same pattern this project already recorded for OpenEye** (`docs/research/PHASE1-SOURCE-VERIFICATION.md`: an AI-summarised fetch named endpoints that all 404'd, because the docs page is a client-rendered app). Recorded here so the pattern is recognised rather than rediscovered a third time.

**The unauthenticated call returned 404, not 401.** That is worth stating precisely: it means the exact URL form `api/getcameras?format=json` did **not** resolve, so this record does **not** establish the correct request form — only that the API is documented and key-gated. Do not treat the URL in this table as a verified endpoint shape. The authoritative form must come from the documentation portal after a key is issued.

## What was deliberately not done

**No account was created and no API key was requested.** Two independent reasons:

1. Account creation is outside what this session will do on the operator's behalf.
2. This project already has an established pattern for exactly this situation: credential requests are tracked as `needs-outreach` GitHub Issues for the operator to action — Issue #1 (CARS-Hub credentials for `feu-m`/`feu-w`) and Issue #8 (NPS webcams API key). Wisconsin cameras belong in that same queue.

**No attempt was made to work around the key** — not by scraping the public `511wi.gov/cctv` viewer, not by inspecting its client traffic. The viewer is public and `robots.txt` permits `/cctv`, but harvesting it would be circumventing a documented access control that WisDOT deliberately placed on the API, which §4 forbids regardless of technical feasibility.

## Why this is an upgrade from the earlier negative

`data/states/wisconsin/media-streams/wisdot-arcgis-negative/` recorded that two discovery mechanisms found no Wisconsin camera layer, and specified official API documentation as the correct next route. That route has now been followed and it worked. The camera network is real and officially exposed — it was simply never going to appear in a GIS catalog, because WisDOT publishes it through a keyed REST API instead.

## Open items

1. **Operator action required:** register for a 511WI account and request a developer key. Recommend filing a `needs-outreach` Issue alongside #1 and #8.
2. Read the developer access agreement that accompanies key issuance **before** ingesting anything — it, not the absence of a terms page, will govern redistribution.
3. Establish the correct request form for the cameras endpoint from the documentation portal; the unauthenticated 404 shows this record does not have it.
4. Once keyed, capture a real camera count and per-camera fields, and only then move §1.1 past `credential-gated`.
5. The documented API also exposes Message Signs, Truck Parking, Winter Road Conditions, Events, Alerts and Travel Time — relevant to §1.2 and §1.3, and a first-party alternative to the Iowa DOT-hosted road-conditions re-host recorded in `data/states/wisconsin/sensor-observations/wisdot-road-conditions/`, whose licence is UNKNOWN.
