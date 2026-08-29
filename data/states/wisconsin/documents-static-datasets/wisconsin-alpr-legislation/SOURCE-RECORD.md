# Source Record — Wisconsin ALPR legislation (official channel)

**Status: 🔴 Official ALPR *location* data: NONE FOUND across state and municipal official channels. Governance documentation CONFIRMED. Both 2025 ALPR bills FAILED to pass.**

Same split as Indiana's record, for the same reason: `projectatlas.md` §4 lets ATLAS catalog ALPR *existence and physical location* from official channels. Wisconsin publishes real ALPR governance — two (failed) bills and the Milwaukee PD standard operating procedure. **None of it discloses where a single ALPR device is, or how many exist.**

**Retrieved:** 2026-08-29, via direct HTTPS requests (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** Located by search restricted to official Wisconsin state domains, then fetched directly. `docs.legis.wisconsin.gov/robots.txt` was read **before** fetching: it disallows `/frame`, `/scroll`, `/feed`, `/breadcrumbs` and `/preferences`, but **not** `/2025/related/proposals/`, the path used here. No access control bypassed.

## Identity

- **Provider:** Wisconsin State Legislature (Legislative Reference Bureau document service)
- **Channel:** Official state legislative publication — §4's "council/board records … or other government-published documentation"
- **License:** Not stated. Wisconsin legislative works; **treat as UNKNOWN/restrictive** per `MacEvil.md` §12.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://docs.legis.wisconsin.gov/2025/related/proposals/ab576` | 200 | 83,175 | `e0a11b0bf7d6f00780a60dbbfcea4032b4bd6e0751e7f1b1c4027ca93c1f07ae` | `data/2026-08-29/ab576-2025-alpr-limits.html` |
| `https://docs.legis.wisconsin.gov/2025/related/proposals/ab300` | 200 | 45,086 | `4123fb5f7c4fb42e55675730974e0b107f3ef8c16ff1c717ce2d5909879b4748` | `data/2026-08-29/ab300-2025-alpr-grant-program.html` |
| `https://docs.legis.wisconsin.gov/2025/proposals/ab300` (bill history) | 200 | 19,051 | `ac08de23a6e22cd73342cdf70896f0a77bd9899bfd9d5c3f04e37193631e580d` | `data/2026-08-29/ab300-bill-history.html` |
| `https://docs.legis.wisconsin.gov/2025/proposals/ab576` (bill history) | 200 | 18,293 | `4e954ec642bff09115b6001ad6349ea46bc66fffe5a176d4c332ba49dd71dc97` | `data/2026-08-29/ab576-bill-history.html` |
| `https://city.milwaukee.gov/ImageLibrary/Groups/mpdAuthors/SOP/735-AUTOMATEDLICENSEPLATEREADERS-ALPR1.pdf` | 200 | 324,618 | `380b77e2a616392d442ff35baef88c95781564f38be97e48678d0f14f9242c40` | `data/2026-08-29/milwaukee-pd-sop-735-alpr.pdf` |

## Content verification (parsed, not assumed)

Both documents were stripped of markup and read, not merely downloaded.

**AB576 (2025)** — "An Act to create 86.107 and 968.376 of the statutes; relating to: limiting the use of automatic registration plate readers, requiring a search warrant for data from an automatic registration plate reader or security camera, and providing a penalty." The Legislative Reference Bureau analysis describes a ban on ALPR use with carve-outs (parking enforcement, controlling access to non-public areas, commercial-vehicle regulation), a confidentiality requirement, and a 90-day data-destruction requirement.

**AB300 (2025)** — "relating to: a grant program for the purchase of automated registration plate reader systems." Establishes a **Department of Justice-administered grant program** funding law-enforcement ALPR purchases, with an application requirement and a proposed plan of expenditure.

Wisconsin had opposing legislative activity on ALPR: one bill to restrict it, one to fund its expansion. **Both failed to pass** — confirmed from the legislature's own bill-history pages, see the UPDATE section below.

## The finding that matters: no locations

Neither bill contains ALPR device locations, counts, or an agency inventory. Legislation defines what may be done with the technology; it does not enumerate deployments. No coordinate was invented and no count inferred.

Separately, an ArcGIS Online catalog search for `(ALPR OR "license plate reader" OR LPR OR "plate reader") AND Wisconsin` returned **0 total matches**.

## UPDATE 2026-08-29 (later same day): both bills FAILED, and the lead is closed

The bill-history pages were fetched from the legislature's own record. Both bills are dead:

| Bill | Introduced | Referred | Outcome |
|---|---|---|---|
| AB300 (ALPR grant program) | 6/6/2025 | Committee on Criminal Justice and Public Safety | **3/23/2026 — "Failed to pass pursuant to Senate Joint Resolution 1"** |
| AB576 (ALPR limits + warrant requirement) | 10/24/2025 | Committee on Criminal Justice and Public Safety | **3/23/2026 — "Failed to pass pursuant to Senate Joint Resolution 1"** |

Both died in the same end-of-session sweep. Two consequences, and the first supersedes an open item this record previously carried:

1. **The DOJ grant-award lead is closed, not merely unpursued.** This record previously flagged AB300's grant program as the mechanism most likely to yield official, citable, jurisdiction-level ALPR deployment data. **It was never enacted, so no grant program exists and no award list exists.** That is a definitive negative, not a gap.
2. **Wisconsin has no enacted ALPR statute from this session** — neither the restriction nor the funding. The state's ALPR activity is therefore governed by agency policy rather than by statute from this legislature.

## Milwaukee PD SOP 735 — official municipal policy, parsed

The largest municipality's ALPR policy was fetched (`city.milwaukee.gov/robots.txt` read first; it disallows only `/Views/Display/Blocks` and a `PrintPage` query pattern, so `/ImageLibrary/` is permitted) and **parsed, not merely downloaded**: 15 pages, 37,844 characters, opening "735.00 PURPOSE / POLICY … the operation and use of Automated License Plate Readers (ALPR)".

**Location and count sweep: zero.** No `latitude`, no `longitude`, no `installed at`, no `camera location`, no `deployment location`, no `list of locations`, and **zero** numeric device counts of any form.

This is the same result as Indiana's three state-level policies: **real governance, published through an official channel, disclosing nothing about where or how many.**

## Sources seen and deliberately REJECTED

Searching surfaced specific Wisconsin ALPR counts — reported figures for cameras in Madison and across Dane County. **None was used, and none appears anywhere in this project's records.** Those figures come from newspaper reporting, which is not an official channel under `projectatlas.md` §4. §4 admits agency/municipal transparency pages, public-records releases, council/board records and procurement records — not press coverage, however credible.

This matters because the counts were *available* and would have made §1.5 look better populated. Recording them would have meant sourcing ATLAS's ALPR data from journalism rather than from government publication, which is exactly the line §4 draws.

## A source deliberately NOT fetched

The Wisconsin State Patrol's ALPR policy (`wsp.wi.gov/…/pp 4-3_Automated License Plate Recognition Systems_2025_final.pdf`) surfaced in search and is plainly relevant and official. **It was not fetched.** `wsp.wi.gov/robots.txt` returns **HTTP 401 Unauthorized**, so this project's crawl permissions on that host could not be established. Consistent with `MacEvil.md` §12's rule that unknown policy defaults to restrictive — and with the precedent set when OpenCCTV's `/api/` was found to be `robots.txt`-disallowed and abandoned — the conservative choice was to not fetch. This is a real, resolvable gap: if the operator confirms the host permits automated retrieval, that document should be added.

## Rules observed

- **No crowdsourced sources.** The aggregators cited throughout §2 of `wisconsin.md` were not fetched or used. §4 excludes them categorically.
- **No plate-read data.** Legislative text only.
- **No outreach.** No records request filed, drafted, or suggested.

## Next step

§1.5 for Wisconsin moves to **`none-found`** — meaning: across the official channels checked (ArcGIS catalog, state legislature, and the largest municipality's police policy), **no Wisconsin source publishes ALPR device locations or counts.** It does **not** mean Wisconsin has no ALPR infrastructure; it plainly does.

Per §4's passive-only rule, that is a valid terminal state. ATLAS waits for publication rather than pursuing it, and no outreach was made, drafted or suggested. Two things would reopen it: a Wisconsin municipality publishing a device inventory through an official channel, or the `wsp.wi.gov` robots question being resolved so the State Patrol policy can be read.
