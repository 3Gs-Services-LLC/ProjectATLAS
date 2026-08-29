# NOTICE — Licence status unresolved, and nothing here is project-verified

**Status as of 2026-08-28: the 50 state records in this directory are research material with an unresolved licence status, and none of their findings have been independently verified by ProjectATLAS.**

This directory is not like `sources/`. Nothing here is a copy of a third-party dataset — no camera inventory, no feature service, no GeoJSON. Section 2 of each record is prose *about* public sources: what a state appears to operate, which endpoints appear to exist, and what the researcher could and could not confirm. That difference is why the repository README's three licence statuses don't resolve cleanly, and why this notice exists.

## 1. The licence question

The repository README defines three distinct statuses: **code** under AGPL-3.0, the **doctrine documents** (`projectatlas.md`, `MacEvil.md`) as proprietary to 3Gs Services LLC, and **third-party data under `sources/`** as per-source. This directory fits none of them squarely:

- It isn't code, so the AGPL-3.0 grant is not obviously the right instrument.
- It isn't operator doctrine, though it is closer to that than to anything else — it is working research owned by the project.
- It isn't a redistributed third-party dataset, so there is no single upstream licensor to point at.

What it *does* contain is **1,014 reference-style citations** to third-party pages, and short quoted material drawn from them — roughly 124 blockquote lines and several hundred quoted fragments, nearly all single sentences or shorter. Individually these read as ordinary quotation-with-attribution. Collectively they are a large citation surface across many rightsholders, including commercial services: `status.broadcastify.com` (145 citations), and ALPR-location aggregators such as `flockcameralocations.com`, `findingflock.com`, `flockscanner.com`, `flockcamera.app` and `transparency.flocksafety.com` (60+ combined).

**This is already public.** The repository is public on GitHub, so publishing has happened; resolving this notice is about deciding what was published under what terms, not about whether to publish.

## 2. Research provenance

**976 of the 1,014 citations carry a `utm_source=chatgpt.com` parameter.** The dossiers were produced through ChatGPT-assisted research sessions, and the citation trail records it. This is stated plainly because it bears on two things: who authored the text for licensing purposes, and how much weight the findings can carry before someone re-checks them.

## 3. Nothing here is verified

The dossiers use their own confidence vocabulary — `CONFIRMED`, `REQUIRES CURRENT LIVE VERIFICATION`, and status emoji. **Those are the researcher's assessments, not ProjectATLAS verification.** A dossier marking an endpoint `CONFIRMED` means the researcher found documentation for it, not that the project fetched it, checked its terms, or cleared it.

Section 1 of each record — the capability specification — is where project-verified findings belong. All 50 records currently have every capability at `unspecified`, which is accurate: no state has been specified or verified yet.

## 4. Do not

- Treat any endpoint, count, or `CONFIRMED` marking in section 2 as `POLICY_VERIFIED` per `MacEvil.md` §9's pipeline, or as cleared for ingestion. Section 2 is a lead list.
- Ship a camera, feed, or dataset to production on a dossier's say-so. Re-verify against the operator, and record the result in section 1.
- Assume the ALPR-location aggregators cited here are usable sources. They are third-party commercial sites with their own terms, cited as evidence that deployments exist — not cleared for scraping, redistribution, or ingestion. ProjectATLAS surfaces ALPR camera *locations* only, never plate reads, and that rule constrains what may be taken from these sites regardless of their terms.
- Assume a state's `dossier_number` or `research_date` matches the source file. Both were corrected on import where the source was wrong or silent; see `README.md` and each file's `provenance` block.
- Quote these records outward as though the project stands behind their factual claims.

## 5. Resolution

**Resolution tracked at:** [GitHub Issue #9](https://github.com/3Gs-Services-LLC/ProjectATLAS/issues/9) — "Legal review: licence status for `data/states/` (50 imported state dossiers)."

That issue carries two separate decisions for 3Gs Services LLC and its existing counsel:

1. **Which licence status covers this directory** — most likely either an extension of the proprietary doctrine status, or its own status covering project-authored research.
2. **Whether the citation and quotation volume in section 2 needs review** before it stays public in this form.

This notice should be narrowed once question 1 is answered, and removed only once Issue #9 is closed and section 1 of the affected records reflects independently verified sources.

The verification warning in §3 is **not** part of Issue #9 — it is an engineering-pipeline matter per `MacEvil.md` §9, resolved per state as section 1 of each record is filled in.
