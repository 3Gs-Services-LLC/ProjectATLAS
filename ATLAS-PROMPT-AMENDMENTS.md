> **SUPERSEDED 2026-08-23.** Every correction in this file has been folded into `projectatlas.md`, which is now the single source of truth. This file is kept only as a dated historical record — do not treat it as authoritative going forward, and do not edit it further; make new corrections in `projectatlas.md` instead.

# ATLAS Prompt Amendments — Authoritative Corrections (historical)

**Status:** VERIFIED against actual repository state on 2026-08-23.
**Precedence:** This file overrides `MacEvil.md` and `Project ATLAS-WebSite.txt` wherever either conflicts with this file or with verified reality. Read all three documents in full before doing anything else.

---

## 1. Verified repository state (do not assume otherwise)

As of 2026-08-23, `C:\Websites\ProjectATLAS` contains only:

- `index.html` — a static "Coming Soon" placeholder page (no application logic)
- `ProjectATLAS Main Logo.png`, `pupil eye.psd` — brand assets
- `MacEvil.md`, `Project ATLAS-WebSite.txt` — the two specification documents
- this file

**There is no existing INDOT adapter, no database, no ~740 camera records, no TrafficWise/GraphQL integration, and no ingestion code anywhere in this repository.**

`Project ATLAS-WebSite.txt` repeatedly refers to these as "existing project assets" and instructs Claude Code to "not duplicate" them. That language describes a *target/reference state carried over from an earlier planning conversation* — it is not confirmed to exist on disk. Phase 0's repository audit (MacEvil.md §7/§131) must state this plainly: **the repository is effectively empty of application code.** Treat every "existing" claim in `Project ATLAS-WebSite.txt` as a Phase 1 research-and-build target, not a preserved asset. Do not silently assume the INDOT integration already works.

---

## 2. FLOCK / ALPR policy (resolves a direct contradiction in the source documents)

`MacEvil.md` §92 and §122 flatly ban implementing license plate recognition and individual tracking. The project brief separately asks for "FLOCK systems and cameras." Flock Safety's core product *is* automated license plate reading — these two instructions collide, and the collision is real, not a wording accident. Resolution (decided by the project owner):

- ATLAS may catalog only the **existence and physical location** of ALPR/Flock camera infrastructure, using a `camera_type` of `ALPR` / `LAW_ENFORCEMENT_PUBLIC` — the same way it catalogs any other camera's location. This is infrastructure cataloging, not surveillance.
- ATLAS must **never** access, request, store, or process plate-read data, plate images, detection logs, hit alerts, or any output of an ALPR system. This privacy boundary from MacEvil.md §92/§122 is unchanged and absolute.
- Location data may be sourced **only from official channels**: agency/municipal transparency pages, public-records-request releases, city council or board meeting minutes/agendas, procurement records, or other documentation a government body itself intentionally published. This is the same "official source, verifiable, evidence-backed" bar every other ATLAS source must clear — no lower bar for this category, no higher one either.
- Crowdsourced/community-mapped ALPR location projects (e.g., DeFlock-style datasets) are **explicitly out of scope** for this build. Do not build an adapter for one, even if it would be the fastest way to get coverage numbers up.
- If no official source exists for a jurisdiction, the correct result is an `UNRESEARCHED`/`POLICY_UNCLEAR` entry in the research queue — never a guess, and never a lowered-confidence record standing in for a verified one.

---

## 3. "USA only" is a technical requirement, not just a description

The project brief states this is a USA-only product. Enforce it in code, not just in adapter selection:

- Every source registry entry must declare a jurisdiction from the US/territory list already enumerated in MacEvil.md §17/§19 before it can leave `CANDIDATE` status.
- Add a geofence/bounding-box validation step in the normalization pipeline (MacEvil.md §33) that flags or rejects any camera record whose resolved coordinates fall clearly outside the United States and its territories. Treat a rejection here the same as any other coordinate-validity failure — log it, don't silently drop it.

---

## 4. Scope decision: full architecture, executed incrementally (explicit tradeoff acknowledged)

The project owner was shown the alternative (MVP-first, enterprise doc kept as a north star) and explicitly chose to proceed with the **full MacEvil.md architecture as the target end-state** — PostGIS, distributed workers, identity-resolution graph, 10,000,000+ record scale, formal ADRs, the complete 15-phase lifecycle — rather than a scaled-down first cut, despite this being a single-operator project starting from an empty repository.

That choice is recorded here so it isn't silently revisited later, and so future sessions don't rediscover the same tradeoff from scratch. It does **not** relax MacEvil.md's own incrementalism rules (§4.6, §6, §131): phases still execute in order, each phase still must leave the repository buildable/testable/recoverable, and Claude Code must still not attempt the entire national system in one uncontrolled pass. "Full architecture is the destination" and "get there incrementally" are not in tension — hold both simultaneously. Expect this to span many sessions across weeks or months, not one sitting; do not compress phases to create an illusion of faster progress.

---

## 5. Concrete Phase 1 research checklist

`Project ATLAS-WebSite.txt` names specific real systems to investigate. Treat its source list as the required input to MacEvil.md §16 (Source Discovery) and §111 (Initial Source Catalog), specifically:

OpenTrafficCamMap, OpenEye, OpenCCTV, Datumfeed, Argus, Live-Environment-Streams, GitHub camera-repository discovery, nationwide state 511/DOT discovery, Open511, ArcGIS REST discovery, OpenStreetMap camera-tag discovery, NWS/NOAA, FEMA/IPAWS, WZDx, USGS, and Data.gov/Socrata/CKAN open-data discovery.

None of these may be promoted past `CANDIDATE` on the strength of a claimed camera count alone (e.g. OpenCCTV's advertised "70,000+ cameras," OpenTrafficCamMap's advertised "~7,515 cameras"). MacEvil.md §8 already says not to treat search results as proof of an API — apply that same skepticism to every advertised count in these third-party aggregators. Verify independently per the Section 9 pipeline before counting anything.

---

## 6. Legal disclaimer

Nothing in `MacEvil.md`, `Project ATLAS-WebSite.txt`, this file, or any Claude Code session constitutes legal advice. The terms-of-service, licensing, and attribution documentation Claude Code produces per source is engineering due diligence — it is not legal clearance to publish. Before any public launch, and especially before publishing anything in the ALPR/law-enforcement category or redistributing any camera image/video, have those findings reviewed by an attorney familiar with the relevant state's public-records, surveillance-transparency, and copyright/redistribution law. This applies per-state, since terms and public-records law vary by jurisdiction.

---

## 7. Editorial fix

`MacEvil.md` §27 and §79 are both titled "SOURCE RUN MODEL" with near-identical content — this is a duplicate, not two distinct requirements. Treat them as one section.

---

## 8. Reporting format (adopted from Project ATLAS-WebSite.txt §68)

At the end of every implementation phase, report using this exact block, satisfying MacEvil.md §124's Implementation Status Rule with real, falsifiable numbers — never estimates:

```
SOURCE:
STATUS:
ENDPOINT:
AUTH:
FORMAT:
RAW RECORDS:
VALID RECORDS:
DUPLICATES:
NEW RECORDS:
FAILED RECORDS:
CAMERAS:
EVENTS:
LAST VERIFIED:
LICENSE:
PROVENANCE:
FILES CHANGED:
TESTS:
BUILD:
KNOWN PROBLEMS:
NEXT STEP:
```

No mock numbers. No guessed URLs. No invented APIs. No claims of success without having actually run the adapter against the live source.
