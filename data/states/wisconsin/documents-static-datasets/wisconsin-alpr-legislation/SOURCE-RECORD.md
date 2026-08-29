# Source Record — Wisconsin ALPR legislation (official channel)

**Status: 🟡 Official ALPR legislative documentation CONFIRMED. Official ALPR *location* data: NOT FOUND.**

Same split as Indiana's record, for the same reason: `projectatlas.md` §4 lets ATLAS catalog ALPR *existence and physical location* from official channels. Wisconsin's legislature publishes real ALPR bills. Neither discloses where any ALPR device is.

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

## Content verification (parsed, not assumed)

Both documents were stripped of markup and read, not merely downloaded.

**AB576 (2025)** — "An Act to create 86.107 and 968.376 of the statutes; relating to: limiting the use of automatic registration plate readers, requiring a search warrant for data from an automatic registration plate reader or security camera, and providing a penalty." The Legislative Reference Bureau analysis describes a ban on ALPR use with carve-outs (parking enforcement, controlling access to non-public areas, commercial-vehicle regulation), a confidentiality requirement, and a 90-day data-destruction requirement.

**AB300 (2025)** — "relating to: a grant program for the purchase of automated registration plate reader systems." Establishes a **Department of Justice-administered grant program** funding law-enforcement ALPR purchases, with an application requirement and a proposed plan of expenditure.

Wisconsin therefore has live, opposing legislative activity on ALPR: one bill to restrict it, one to fund its expansion. Both are **proposals**, and this record makes **no claim about whether either has been enacted** — that was not checked.

## The finding that matters: no locations

Neither bill contains ALPR device locations, counts, or an agency inventory. Legislation defines what may be done with the technology; it does not enumerate deployments. No coordinate was invented and no count inferred.

Separately, an ArcGIS Online catalog search for `(ALPR OR "license plate reader" OR LPR OR "plate reader") AND Wisconsin` returned **0 total matches**.

## A real lead, deliberately not pursued

AB300's DOJ-administered grant program is exactly the kind of mechanism that *would* produce official, citable, jurisdiction-level ALPR deployment data — a grant-award list naming which agencies received funding for ALPR systems is a procurement record, which §4 explicitly admits as an official channel. **This was not pursued in this pass**, for two reasons worth stating: AB300 is a proposal and may never have become law, so an award list may not exist at all; and §4's passive-only rule means ATLAS waits for such a list to be published rather than going after it. Recorded as a lead in `projectatlas.md` §9, not as a finding.

## A source deliberately NOT fetched

The Wisconsin State Patrol's ALPR policy (`wsp.wi.gov/…/pp 4-3_Automated License Plate Recognition Systems_2025_final.pdf`) surfaced in search and is plainly relevant and official. **It was not fetched.** `wsp.wi.gov/robots.txt` returns **HTTP 401 Unauthorized**, so this project's crawl permissions on that host could not be established. Consistent with `MacEvil.md` §12's rule that unknown policy defaults to restrictive — and with the precedent set when OpenCCTV's `/api/` was found to be `robots.txt`-disallowed and abandoned — the conservative choice was to not fetch. This is a real, resolvable gap: if the operator confirms the host permits automated retrieval, that document should be added.

## Rules observed

- **No crowdsourced sources.** The aggregators cited throughout §2 of `wisconsin.md` were not fetched or used. §4 excludes them categorically.
- **No plate-read data.** Legislative text only.
- **No outreach.** No records request filed, drafted, or suggested.

## Next step

§1.5 for Wisconsin stays `researching`. To go further: check whether AB300 was enacted and whether DOJ publishes grant awards; resolve the `wsp.wi.gov` robots question; or find a Wisconsin municipal transparency page that publishes device locations through an official channel.
