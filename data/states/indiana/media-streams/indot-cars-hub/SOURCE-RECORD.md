# Source Record — Indiana CARS-Hub (inhub.carsprogram.org)

**Retrieved:** 2026-08-22/23 (device local clock at fetch time), via direct HTTPS request from the operator's Windows machine (WebFetch could not retrieve raw XML/XSD bytes — it treated them as binary — so this was fetched with `Invoke-WebRequest` instead, using a self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** Direct HTTP GET against URLs discovered via the public `index.jsf` landing page. No enumeration, no guessing, no bypassing of any access control — every URL fetched here was explicitly listed on the public index page itself.

## Identity

- **Provider:** Castle Rock Associates / Castle Rock ITS (schema attributes it to "Zack Radick, Castle Rock Associates," schema dated 2010)
- **Agency/jurisdiction:** Indiana DOT ("Indiana DOT" appears as sender/organization in the FEU message headers)
- **Platform:** CARS-Hub — the same Castle Rock CARS platform documented in the INDOT/Castle Rock handoff memo (`ChatGPT MacEvil to ProjectATLAS handoff.md`) as underlying 511IN/Trafficwise.
- **Official URL:** https://inhub.carsprogram.org/index.jsf
- **Documentation URL:** none found on the page itself
- **Terms/license URL:** **none visible** — WebFetch's review of the index page found no API-key requirement, no terms-of-use text, and no license/attribution language anywhere on the page. **License status: UNKNOWN.** Do not treat UNKNOWN as "unrestricted" — MacEvil.md §12 is explicit that unknown policy values must default conservatively.

## Research note: the schema is not INDOT-specific

`CCTV.xsd` declares `xmlns:feu="http://www.northamericanhub.org"` and imports from `northamericanhub.org` namespaces, and its authorship note ("Edited by Zack Radick, Castle Rock Associates: March 19, 2010... Based on original content...") indicates this is a shared, multi-state Castle Rock/"North American Hub" feed schema, not something INDOT commissioned uniquely for itself. Several other states run Castle Rock's CARS platform. This is worth flagging for Phase 1 research: the same FEU/CCTV/Waze-CIFS schema family may be reusable as a generic adapter across every other Castle Rock/CARS-hosted state, not just Indiana — feeds this directly into MacEvil.md §16 (Source Discovery) and §20 (Adapter SDK: "a new source must be addable without modifying core ingestion logic").

## Endpoint inventory (verified, this session)

All files saved under `C:\Websites\ProjectATLAS\sources\indot-cars-hub\`.

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `/index.jsf` | 200 | 3,556 | (not hashed — HTML landing page) | `index.jsf.html` |
| `/schemas/FEU-t.xsd` | 200 | 141,127 | `AE5EA0D8...4921A0F` | `schemas/FEU-t.xsd` |
| `/schemas/FEU-g.xsd` | 200 | 256,678 | `FE6ECB8D...5CC51F456` | `schemas/FEU-g.xsd` |
| `/schemas/FEU-m.xsd` | 200 | 141,971 | `07C8A3B4...3BE4FE7` | `schemas/FEU-m.xsd` |
| `/schemas/FEU-w.xsd` | 200 | 257,147 | `843488A1...F39A06E` | `schemas/FEU-w.xsd` |
| `/schemas/FEU-index.xsd` | 200 | 4,004 | `4138C6D4...706344FD` | `schemas/FEU-index.xsd` |
| `/schemas/CCTV.xsd` | 200 | 11,692 | `8BAAC37E...7F57B6BF82FD` | `schemas/CCTV.xsd` |
| `/schemas/Waze-CIFS.xsd` | 200 | 26,654 | `28C29493...B1C9631299D65F` | `schemas/Waze-CIFS.xsd` |
| `/data/feu-t.xml` | 200 | 2,377,842 | `6BE74FD9...693528668590` | `data/2026-08-22/feu-t.xml` |
| `/data/feu-g.xml` | 200 | 26,545,049 | `6AA9B785...B92DFA34E06C` | `data/2026-08-22/feu-g.xml` |
| `/data/feu-m.xml` | **401 Unauthorized** | — | — | not saved — auth required |
| `/data/feu-w.xml` | **401 Unauthorized** | — | — | not saved — auth required |
| `/data/cctv.xml` | 200 | 759,718 | `6438B4C6...C1B9719EF32AD` | `data/2026-08-22/cctv.xml` |
| `/data/waze/cifs.xml` | 200 | 515,148 | `FB57E2E6...B397FA1857982` | `data/2026-08-22/waze-cifs.xml` |
| `/data/feu-t/index` | **401 Unauthorized** | — | — | not saved |
| `/data/feu-g/index` | **401 Unauthorized** | — | — | not saved |
| `/data/feu-i/index` | **401 Unauthorized** | — | — | not saved |
| `/data/feu-m/index` | **401 Unauthorized** | — | — | not saved |
| `/data/feu-w/index` | **401 Unauthorized** | — | — | not saved |

**Finding, evidence-graded VERIFIED:** `feu-t`, `feu-g`, `cctv`, and `waze/cifs` are open, unauthenticated public feeds — no credentials were supplied and no access control was bypassed to retrieve them. `feu-m`, `feu-w`, and every `/index` listing endpoint returned `401 Unauthorized` on a plain GET. Per MacEvil.md §2/§53: **do not attempt to guess, brute-force, or otherwise obtain credentials for these.** Record them in the source registry as `AUTH_REQUIRED`, `credential_reference = null`, and stop there. If the operator (you) later obtains a legitimate CARS-Hub account/API key, supply it through normal ATLAS credential configuration and re-run this check.

## Content spot-check (confirms real, non-fabricated data)

`cctv.xml` opens with a real device record — `device-id 21689`, name `1-069-226-2-2 SR 9:554/109/SCATTERFIELD RD` — which is a genuine INDOT route/mile-marker naming convention, not placeholder text. `feu-t.xml` opens with a message header identifying `Indiana DOT` as sender/organization. This is consistent with, and appears to be the same underlying feed family as, the CCTV XML referenced in the earlier handoff memo (`feeds/cctv.xml`, ~740 inventory items, `device-id`/`device-name`/`geo-location` fields) — this session did not independently recount the 740 figure from this specific download, so treat that exact count as **UNVERIFIED-this-session** until an adapter actually parses it.

## Open items for Phase 1/Phase 7 (INDOT adapter)

1. ~~Parse `cctv.xml` against `CCTV.xsd` and confirm the ~740-item count from the handoff memo against this fresh download.~~ **Count resolved 2026-08-29: 746.** A direct element count over this record's own hashed `data/2026-08-22/cctv.xml` found **746 `<inventory-item>` elements and 746 unique `device-id` values** (746 each of `device-updated`, `device-name`, and `still-images`, confirming one complete record per item rather than a ragged parse). The handoff memo's "~740" was approximately right; the exact figure for this download is 746. **Still outstanding:** this was an element count, not schema validation against `CCTV.xsd` — that half of the item remains open.
2. `feu-m` and `feu-w` (weather-related FEU feeds, by naming convention) require credentials this project does not currently hold — file as `REQUIRES_CREDENTIALS` in the research queue, not `REJECTED`.
3. No terms-of-use or redistribution policy was found anywhere on the CARS-Hub site. Per the legal disclaimer in `ATLAS-PROMPT-AMENDMENTS.md` §6, do not treat "no terms found" as "no restrictions" — this needs actual outreach to INDOT/Castle Rock or legal review before any public redistribution of this data, not just technical ingestion for internal development.
4. Investigate whether this same CARS-Hub pattern (`<state>hub.carsprogram.org` or similar) exists for other Castle Rock-platform states, per the multi-state schema note above.
