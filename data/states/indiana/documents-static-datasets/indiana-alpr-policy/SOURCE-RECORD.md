# Source Record — Indiana ALPR/LPR governance documents (official channels)

**Status: 🔴 Official ALPR *location* data: NONE FOUND across every official channel that could be read. Governance documentation CONFIRMED. One enacted 2026 act (HEA 1150) has ALPR content that is UNVERIFIED, and Indianapolis's policy set could not be enumerated — both recorded below as gaps, not findings.**

That split is the whole point of this record. `projectatlas.md` §4 permits ATLAS to catalog the *existence and physical location* of ALPR infrastructure, from official channels only. Indiana publishes real, substantive ALPR **policy** through official channels. It does **not**, as far as this pass could establish, publish where any of that infrastructure is.

**Retrieved:** 2026-08-29, via direct HTTPS requests (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** Documents located by search restricted to `in.gov`/`iga.in.gov` official domains, then fetched directly. `www.in.gov/robots.txt` was read **before** fetching: it disallows `/serv/`, `/cgi-bin/`, `/search`, `/dwd/files/…` and others, but **not** `/iifc/files/` or `/isp/files/`, the two paths used here. No access control bypassed.

## Identity

- **Provider:** State of Indiana — Indiana Intelligence Fusion Center (IIFC) and Indiana State Police (ISP)
- **Channel:** Official state government publication (`in.gov`) — squarely within §4's "agency/municipal transparency pages … or other government-published documentation"
- **License:** Not stated on the documents. Indiana state government works; **treat as UNKNOWN/restrictive** per `MacEvil.md` §12, not as public domain.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://www.in.gov/iifc/files/Indiana-Intelligence-Fusion-Center-License-Plate-Reader-Privacy-Policy-2022.pdf` | 200 | 497,835 | `eb9ad66f151a9dab61dba297e54bf3061f1b4c2c805209dabf8bae2f234a81d9` | `data/2026-08-29/iifc-lpr-privacy-policy-2022.pdf` |
| `https://www.in.gov/iifc/files/Indiana_Intelligence_Fusion_Center_LPR_Privacy_Policy.pdf` | 200 | 1,200,999 | `77ac245f7a6a290c5a6b5de531f078668f43d5200f99fde8cfef144ef7a0f7ac` | `data/2026-08-29/iifc-lpr-privacy-policy-2019.pdf` |
| `https://www.in.gov/isp/files/License-Plate-Reader.pdf` | 200 | 36,926 | `03a3a5bf93785ba2bb65f261094683efd0fbf92458532c03b203d720481f7b20` | `data/2026-08-29/isp-license-plate-reader-sop.pdf` |

## Content verification (parsed, not assumed)

Each PDF was opened and its text extracted, not merely downloaded:

| Document | Pages | Extracted chars | Opening text |
|---|---|---|---|
| IIFC LPR Privacy Policy 2022 | 19 | 51,887 | "Indiana Intelligence Fusion Center License Plate Reader Policy June 1, 2022 …" |
| IIFC LPR Privacy Policy 2019 | 17 | 51,499 | "Indiana Intelligence Fusion Center License Plate Reader Policy June 1, 2019 …" |
| ISP LPR SOP | 2 | 4,363 | "I. PURPOSE Establish operational procedures for the use of automated license plate readers and the retention of collected data." |

All three are genuine, substantive ALPR governance documents. The two IIFC policies are successive versions of the same instrument (2019, then 2022) and both discuss LPR data handling and retention.

## The finding that matters: no locations, and no counts

A keyword sweep of the extracted text found **no** `latitude`, `longitude`, `camera location`, `deployment location`, or `installed at`. A regex sweep for numeric camera/reader counts (`N cameras`, `N readers`, `N LPR`, …) returned **one** apparent hit in the 2022 policy, which on inspection is a footnote citation to a *Maryland* standard-operating-procedure document — **not** an Indiana deployment count. The ISP SOP returned zero.

**Conclusion: these documents establish that Indiana operates ALPR systems under written policy. They do not disclose a single camera location, and they do not disclose how many exist.** Not even a jurisdiction-level count is available, so §4's `location_accuracy = JURISDICTION_ONLY` fallback has nothing to attach to. No coordinate was invented, and none should be.

Separately, an ArcGIS Online catalog search for `(ALPR OR "license plate reader" OR LPR OR "plate reader") AND Indiana` returned **0 total matches** — recorded in `data/states/indiana/media-streams/indot-arcgis-negative/` alongside that session's other ArcGIS work.

## Legislative check, 2026-08-29 — one enacted act, content UNVERIFIED

| Endpoint | HTTP | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://www.in.gov/gov/newsroom/2026-bill-watch/` | 200 | 91,360 | `191c0b637643d800cfd989e2d427f71ade1753bbf3c892dae51b81613f4bad36` | `data/2026-08-29/governor-2026-bill-watch.html` |
| `https://www.indy.gov/activity/impd-policies` | 200 | 4,351 | `47eb4308a9025a651c23a423d5b57b45fc6c56259f595bd95195c8b290bcd1c7` | `data/2026-08-29/impd-policies-page.html` |

**VERIFIED:** the Governor's official 2026 Bill Watch lists **HEA 1150 — "Local regulation"** as an enacted House Enrolled Act (dates 2/24/2026 and 3/3/2026). Indiana therefore *did* enact legislation in this session, in contrast with Wisconsin, where both 2025 ALPR bills failed on 3/23/2026.

**HYPOTHESIS, explicitly NOT verified:** that HEA 1150 contains automated-license-plate-reader provisions. That claim comes only from a **search-engine preview** of the enrolled PDF. **The PDF could not be retrieved.** `iga.in.gov` is a client-rendered single-page application that returns its 691-byte app shell for `/pdf-documents/...` paths — and for `/robots.txt` itself. No alternate URL was guessed (§4).

This is the **third** instance of the client-rendered-documentation pattern in this project, after OpenEye (`docs/research/PHASE1-SOURCE-VERIFICATION.md`) and the 511WI endpoint docs (`data/states/wisconsin/media-streams/wisdot-511-camera-api/`). Recorded so it is recognised rather than rediscovered a fourth time.

**Do not cite HEA 1150 as an Indiana ALPR statute until its text has actually been read.**

## Municipal check — blocked, not negative

`www.indy.gov/activity/impd-policies` was fetched (robots.txt read first: every directive is commented out, so nothing is disallowed). The page returns **8 characters of extractable text and zero PDF links** — client-rendered, like the IGA site. **IMPD's policy set could not be enumerated at all.**

This is a **gap, not a finding.** Wisconsin's equivalent step succeeded (Milwaukee PD SOP 735 was retrieved and parsed, 15 pages, zero locations). Indiana's largest municipality could not be checked the same way, and this record does not claim otherwise.

Note also that search results recommended *contacting IMPD directly*. **No contact was made, drafted, or suggested** — §4's coverage strategy is passive-only, with zero outreach.

## Rules observed

- **No crowdsourced sources.** `flockcameralocations.com`, `findingflock.com`, `flockscanner.com`, `flockcamera.app`, `unsurveilled.org` and DeFlock-style datasets are cited throughout §2 of `indiana.md`. **None was fetched or used.** §4 excludes them categorically, and `data/states/NOTICE.md` records that citing one in §2 does not make it usable.
- **No plate-read data.** Nothing here touches plate reads, detection logs, or any ALPR system output — only governance documents.
- **No outreach.** §4's coverage strategy is passive-only. No records request was filed, drafted, or suggested, and none should be. Indiana having published policy but not locations is a valid terminal state for this capability, not a prompt to go asking.

## Next step

§1.5 for Indiana moves to **`none-found`** — meaning **no official Indiana source that could be read publishes ALPR device locations or counts.** It does **not** mean Indiana lacks ALPR infrastructure; its own policies prove otherwise.

That status rests on five official documents parsed across two states (Indiana's three, plus Wisconsin's Milwaukee SOP and two bills), every one showing the same pattern: governance published, locations withheld. **Two things could still change it, and both are gaps rather than negatives:**

1. **Read HEA 1150.** Its ALPR content is unverified and the enrolled PDF is unreachable via plain HTTP. If it imposes a local reporting or inventory requirement, that would be a route to official location data.
2. **Enumerate IMPD's policies.** Indianapolis is Indiana's largest municipality and its policy index is client-rendered, so it was never checked — unlike Milwaukee, which was.

Per §4's passive-only rule, neither is pursued by contacting anyone. ATLAS waits for publication.
