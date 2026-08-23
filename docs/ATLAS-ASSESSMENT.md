# ATLAS-ASSESSMENT.md

**Phase 0 — Repository & Requirements Audit**, produced per `MacEvil.md` §7/§131. This is the first document produced in this repository's Claude Code history. No application code exists yet and none was written before this audit.

*Author: Claude Code (Sonnet 5), 2026-08-22/23. Source hierarchy followed: `projectatlas.md` → `MacEvil.md` → `Project ATLAS-WebSite.md` → `docs/INDOT-handoff-*.md`, per `projectatlas.md` §0.*

---

## 1. Actual Repository State (verified by direct inspection, not assumed)

`C:\Websites\ProjectATLAS` is a git repository (3 commits, clean working tree, `origin` = `https://github.com/3Gs-Services-LLC/ProjectATLAS.git`, branch `main`). Its contents, by category:

| Category | Contents |
|---|---|
| **Application code** | **None.** No `package.json`, no `src/`, no server, no frontend framework, no build tooling. |
| **Frontend** | `index.html` — a static "Coming Soon" placeholder page (black background, animated gradient headline, references the logo PNG). No JS, no CSS framework, no bundler. |
| **Database** | None. No schema, no migrations, no ORM config, no connection string template. |
| **Ingestion / adapters** | None. No source adapters, no fetch layer, no parsers. |
| **Tests** | None. No test runner configured, no test files. |
| **Deployment** | None. No Dockerfile, no CI/CD workflow, no `.env` template, no `docker-compose.yml`. |
| **Security controls** | None implemented (no code exists to secure). `.gitignore` covers generic `node_modules/`, `dist/`, `build/`, `.env*`, logs — pre-emptive, not evidence of an actual Node project yet. |
| **Brand assets** | `ProjectATLAS Main Logo.png` (final branding, per `ASSETS.md`), `pupil eye.psd` (editable source). Both currently unused by `index.html`'s actual `<img>` reference works, but no favicon/social-preview treatment exists yet. |
| **Documentation** | Extensive and authoritative: `projectatlas.md` (source of truth), `MacEvil.md` (doctrine, ~3,580 lines), `Project ATLAS-WebSite.md` (source catalog, ~2,650 lines), `docs/INDOT-handoff-primary.md`, `docs/INDOT-handoff-supplemental.md`, `ASSETS.md`, `README.md`, plus process-history files (`ATLAS-KICKOFF-PROMPT.md`, `GIT-SYNC-PROMPT.md`, `GITHUB-ISSUES-AND-SYNC-PROMPT.md`, `ATLAS-PROMPT-AMENDMENTS.md` — the last explicitly superseded). |
| **Verified source evidence** | `sources/indot-cars-hub/` — real, hashed CARS-Hub XML/XSD files fetched live 2026-08-22/23 (see `SOURCE-RECORD.md` in that directory). This is evidence, not ingestion code — nothing parses it yet. |
| **GitHub Issues** | 3 open, all human-only (`needs-outreach` #1, `needs-legal` #2, `needs-input` #3), correctly not blocking engineering work. |

**Two stray root-level files found during this audit, not previously catalogued in `projectatlas.md`'s document map:**

- `ChatGPT MacEvil to ProjectATLAS handoff.md` (1,592 lines) — confirmed by diff to be the original, pre-split source document. `docs/INDOT-handoff-primary.md` is this same content plus one dated cross-reference note. It is now a stale duplicate sitting at repo root.
- `video_api_captures.md` (17,000 bytes) — confirmed by inspection to be a duplicate of `docs/INDOT-handoff-supplemental.md`'s content (the *recovered-memory* document), **not** the original lost `video_api_captures.json` capture file. Its filename is easy to misread as "the lost file was found" — it was not.

**Recommendation:** both are candidates for removal once the operator confirms `docs/INDOT-handoff-primary.md` and `docs/INDOT-handoff-supplemental.md` are the intended canonical homes for this content (they appear to be, per `projectatlas.md`'s own document map). Not removed in this session — deleting files isn't part of a Phase 0 audit, and doing so unprompted would go beyond the scope of this task.

**Conclusion:** the repository is, as `projectatlas.md` §3 states, a from-scratch build. There is no existing application to preserve, migrate, or refactor. `MacEvil.md` §5 ("if the repository already exists, inspect...") and §131 ("if the repository is empty, explicitly state that fact and construct the project foundation") both anticipate this case directly.

A **separate, previously-built Electron desktop app** ("INDOT Live Camera Viewer") proved a real INDOT camera pipeline but is **not part of this repository** and its on-disk location is unknown (GitHub Issue #3, human-only). Nothing from it can be inspected or reused until it's located; its findings survive only as the recovered-memory documentation already read.

### Component classification (per `MacEvil.md` §7)

| Component | Classification | Notes |
|---|---|---|
| `index.html` placeholder | **CHANGE** | Replace with the real application once the frontend framework is chosen (ADR-0001) — but keep serving *something* at `/` throughout Phase 4+ rather than a dead page. |
| Brand assets (logo, PSD) | **KEEP** | Confirmed final branding; wire into the real header/favicon when frontend work starts. |
| Documentation set | **KEEP** | Authoritative; `projectatlas.md` remains the entry point for every future session. |
| `sources/indot-cars-hub/` raw evidence | **KEEP** | Real, hashed, dated evidence — becomes the first adapter's fixture/reference material in Phase 7. |
| `ChatGPT MacEvil to ProjectATLAS handoff.md` (root) | **REMOVE** (pending operator confirmation) | Fully superseded by `docs/INDOT-handoff-primary.md`. |
| `video_api_captures.md` (root) | **REMOVE** (pending operator confirmation) | Fully superseded by `docs/INDOT-handoff-supplemental.md`; misleading filename. |
| Application code / database / adapters / tests / deployment | **ADD** | Does not exist; this assessment and the accompanying ADRs are the first step toward adding it. |

---

## 2. Current Architecture

There is no current architecture to diagram. The "architecture" that exists today is entirely documentary: a doctrine (`MacEvil.md`), a source catalog (`Project ATLAS-WebSite.md`), and consolidated decisions (`projectatlas.md`). Section 6 below proposes the first real architecture.

---

## 3. Existing Functionality

None, beyond the static placeholder page rendering a logo and "Coming Soon" text. No camera data flows anywhere in this repository today.

---

## 4. Reusable Components

- **Brand assets** (logo PNG + PSD source) — directly reusable in the real frontend.
- **`sources/indot-cars-hub/` evidence** — directly reusable as the seed for the first real adapter (INDOT CCTV XML, Phase 7) and as adapter contract-test fixtures (`MacEvil.md` §21/§102), once explicitly marked as fixtures.
- **Verified technical knowledge** (not code) from the INDOT handoff docs: the GraphQL→HLS resolution chain, the CARS-Hub endpoint inventory, known-real camera IDs for diagnostic use. This is documentation to build from, not a library to import.
- **Nothing else.** There is no server code, no database schema, no adapter interface, no test harness to inherit.

---

## 5. Contradictions Identified

All contradictions between the reference documents were already identified and resolved in `projectatlas.md` before this audit began (per that file's own change log and `MacEvil.md` §92/§122/§79's dated cross-reference notes). Restated here for completeness, since `MacEvil.md` §104 requires every conflict to be documented explicitly rather than silently resolved:

| Conflict | Evidence A | Evidence B | Resolution | Where |
|---|---|---|---|---|
| Product identity: public website vs. private/local login-gated desktop app | `MacEvil.md` §1 mission: public camera-ingestion platform | `docs/INDOT-handoff-primary.md` Rule 7: "a private/local traffic-camera viewer, not a clone of the public 511 website" | Merge: public core stays public/no-login (non-negotiable); login is an optional personalization layer; the cinematic command-center UI direction is carried forward as the visual target | `projectatlas.md` §2 |
| FLOCK/LPR: brief asks for "FLOCK systems and cameras" vs. doctrine bans LPR outright | `Project ATLAS-WebSite.md` §46 | `MacEvil.md` §92/§122 | Location-cataloging-only carve-out, official sources only, LPR processing itself remains absolutely banned | `projectatlas.md` §4, cross-referenced at `MacEvil.md` §92/§122 |
| `MacEvil.md` §27 and §79 both titled "SOURCE RUN MODEL" | — | — | Duplicate content, not two requirements; §79 now points back to §27 | `MacEvil.md` §79, `projectatlas.md` §8 |
| Architecture scope: full enterprise `MacEvil.md` spec vs. a scaled-down MVP alternative | `MacEvil.md` §1–§132 (full spec) | (an MVP-first alternative was offered during consolidation and explicitly declined) | Full architecture is the agreed destination; `MacEvil.md`'s own incrementalism rules (§4.6/§6/§131) still govern *how* it's built | `projectatlas.md` §2 |

No new contradictions were found during this audit's fresh read of the five source documents.

---

## 6. Missing Requirements

Nothing in the specification itself is missing or under-specified to a blocking degree — `MacEvil.md` is unusually thorough. What's genuinely open, as opposed to merely "not yet built":

- **No technology stack has ever been chosen.** `MacEvil.md` §46/§64 name *logical* components and a *preferred* database (PostgreSQL+PostGIS) but explicitly defer concrete technology choices to "repository evidence and actual requirements" — and there was no repository evidence until this audit. Resolved by ADR-0001 below.
- **No concrete first-source adapter target has been chosen**, though the evidence strongly points to INDOT CCTV XML (real, hashed, already-fetched data sitting in `sources/indot-cars-hub/`) as the obvious Phase 7 starting point, consistent with `Project ATLAS-WebSite.md` §50's own "PHASE 1: Existing INDOT data" priority ordering.
- **The Electron app's exact prior technology choices are unknown** beyond "vanilla JS + Electron + hls.js" — not detailed enough to constrain a new build, and explicitly not part of this repository regardless.

---

## 7. Security Concerns

No code exists yet, so there is no current vulnerability surface to audit. Forward-looking concerns that the architecture (§8 below) and future ADRs must account for from the start, per `MacEvil.md` §56–§63, §98–§99:

- **SSRF is the single highest-priority security requirement.** Every adapter will fetch source-controlled URLs (camera image/HLS endpoints, redirect targets, ArcGIS/GeoJSON payload URLs). A centralized safe-fetch layer with private-IP/loopback/link-local/cloud-metadata blocking, redirect re-validation, and response-size limits must exist *before* the first adapter that fetches a live URL, not after.
- **XML security** matters immediately — the very first real adapter target (INDOT CCTV XML) is XML, and `MacEvil.md` §61 requires XXE/entity-expansion protection from adapter #1 onward, not retrofitted later.
- **License/redistribution risk is already live**, not merely theoretical: `sources/indot-cars-hub/` contains real data with UNKNOWN license status, already pushed to a public GitHub repo — an informed, deliberate operator decision recorded in `projectatlas.md` §11, not an oversight, but the technology stack and any future public API must respect the metadata-vs-redistribution distinction in `MacEvil.md` §12/§90 from day one.
- **Credential handling** has no history to audit (none exist yet), but `feu-m`/`feu-w` are already known to require them (401 observed) — the eventual credential-configuration mechanism (ADR-0001's config approach) must support per-source credentials without ever letting an adapter discover or bypass them.

---

## 8. Research Requirements

Per `projectatlas.md` §6 and `Project ATLAS-WebSite.md` §63, a long checklist of candidate source families has never been verified against `MacEvil.md` §9's pipeline. This assessment does not attempt that verification — Phase 1 research (§9 below, executed after this document and the ADR set) begins that work for a first slice of sources. The full checklist remains open for subsequent sessions; `projectatlas.md` §6 and `Project ATLAS-WebSite.md` §63 are the canonical, complete lists and are not duplicated here.

---

## 9. Proposed Architecture

Given an empty repository and a full-scope target (`projectatlas.md` §2's resolved decision), the architecture below implements `MacEvil.md`'s logical services (§46) with concrete technology, chosen and justified in **ADR-0001** (§11 below). Summary:

```text
┌─────────────────────────────────────────────────────────────┐
│  Frontend (Next.js/React) — public map-centric site          │
│  No login required for any core informational content         │
└───────────────────────────┬─────────────────────────────────┘
                             │ REST/JSON (versioned API)
┌───────────────────────────▼─────────────────────────────────┐
│  API service (Fastify + TypeScript)                          │
│  /api/v1/cameras, /events, /sources, /providers, /stats ...  │
└───────────────────────────┬─────────────────────────────────┘
                             │
┌───────────────────────────▼─────────────────────────────────┐
│  PostgreSQL + PostGIS  (source_registry, cameras, views,     │
│  representations, source_records, evidence, identity graph,  │
│  observations, health, audit — MacEvil.md §64 tables)        │
└───────────────────────────┬─────────────────────────────────┘
                             │
┌───────────────────────────▼─────────────────────────────────┐
│  Worker layer (BullMQ + Redis)                                │
│  discovery-worker · source-fetcher · parser-worker ·          │
│  normalization-worker · geospatial-worker · identity-worker · │
│  observation-worker · health-worker                           │
│  Each adapter runs inside the shared Safe Fetch layer          │
│  (SSRF-protected, rate-limited, circuit-breakered)             │
└─────────────────────────────────────────────────────────────┘
```

Source adapters (`MacEvil.md` §19/§20) live as isolated packages implementing a common `SourceAdapter` interface — `discover/validate/fetch_metadata/normalize/enumerate_cameras/enumerate_views/fetch_representation/health_check/get_terms/get_attribution/get_rate_limit/get_update_frequency` — so a new source is addable without touching core ingestion logic, per §20's explicit requirement.

Full technology rationale, alternatives considered, and consequences are in **ADR-0001**; adapter-architecture, identity-resolution, media-retention, safe-fetch, and repo-structure decisions are in ADR-0002 through ADR-0006 (§11).

---

## 10. Migration Strategy

There is nothing to migrate *from* — this is new construction, not a migration, per the empty-repository branch of `MacEvil.md` §131. The only "migration" concern is **absorbing the Electron app's proven knowledge** (not its code, which isn't accessible) into the new build:

1. Treat the GraphQL→HLS resolution chain and the CARS-Hub XML endpoint inventory as validated research inputs to the first two INDOT-related adapters (Phase 7), not as code to port.
2. If GitHub Issue #3 is ever resolved (the Electron app's folder located), re-verify any reused logic against the current live system before trusting it — `projectatlas.md` §3 already mandates this.
3. Replace `index.html` with the real frontend only once the API has at least one working, tested endpoint returning real data (`MacEvil.md` §4.6: every stage must leave the repo buildable/testable/understandable) — never ship a frontend against a mocked API.

---

## 11. Architecture Decision Records (initial set)

Produced per `MacEvil.md` §131. Filed under `docs/adr/`:

- [ADR-0001: Technology Stack](adr/0001-technology-stack.md) — Node.js/TypeScript, Fastify, Next.js, PostgreSQL+PostGIS, BullMQ/Redis, Docker Compose.
- [ADR-0002: Source Adapter Architecture](adr/0002-source-adapter-architecture.md) — plugin-package-per-adapter, shared contract, contract test suite.
- [ADR-0003: Database Migration Strategy](adr/0003-database-migrations.md) — raw-SQL versioned migrations via `node-pg-migrate`, not an ORM-driven schema, because of PostGIS/geography-type requirements.
- [ADR-0004: Identity Resolution — Human-in-the-Loop by Default](adr/0004-identity-resolution.md) — never auto-merge above POSSIBLE_MATCH; review queue is mandatory before MATCHED.
- [ADR-0005: Media Retention Defaults to Off](adr/0005-media-retention-policy.md) — metadata/health only by default; image/video retention is explicit, bounded, opt-in per source.
- [ADR-0006: Centralized Safe-Fetch Layer](adr/0006-safe-fetch-layer.md) — one shared HTTP client all adapters must use; no adapter performs its own raw fetch.

---

## 12. Implementation Phases (restated for this repository's starting point)

Following `MacEvil.md` §6 exactly, adapted to what's concretely next given an empty repo:

| Phase | Status | This session |
|---|---|---|
| 0 — Repository + Requirements Audit | **IN_PROGRESS → done by this document** | This file. |
| 1 — Research + External Verification | **Starting this session** | A first slice of `projectatlas.md` §6's checklist, verified through `MacEvil.md` §9's pipeline. |
| 2 — Architecture + ADRs | **Done this session** | §11 above. |
| 3 — Implementation Plan | Not started | Next session: concrete task breakdown for Phase 4 (Foundation+Database). |
| 4 — Foundation + Database | Not started | First code in the repository. |
| 5–15 | Not started | Per `MacEvil.md` §6. |

---

## 13. Risks

- **Single-operator scope risk (already flagged and accepted in `projectatlas.md` §2):** the full `MacEvil.md` architecture is a multi-week-to-multi-month build for one person. Each session must leave the repo in a genuinely working state (§4.6) rather than accumulating half-finished subsystems — the discipline required to avoid this is higher than the spec text alone conveys.
- **License/legal exposure is real, not hypothetical**, given `sources/indot-cars-hub/`'s UNKNOWN license status is already public. This is an accepted, documented risk (`projectatlas.md` §11), not something this assessment can resolve — routed to counsel via GitHub Issue #2.
- **INDOT GraphQL/HLS path (§5B) is unverified this session** and was learned by observing client behavior rather than documented API surface — building production reliance on it before re-verification and terms-of-use research would violate `MacEvil.md`'s evidence-over-assumption principle (§4.2).
- **Source-count inflation risk**: several candidate sources in the research checklist (OpenCCTV's "70,000+", Live-Environment-Streams' "5,000+") ship marketing claims that `MacEvil.md` §9 explicitly forbids treating as verified counts. Phase 1 research must independently re-derive every number.
- **Scope creep risk in the adapter catalog**: `Project ATLAS-WebSite.md` lists ~30+ source families. Building generic adapters (JSON/XML/GeoJSON/ArcGIS/CKAN) before chasing every named integration keeps the 500th source "as easy as the 5th" (§69) rather than accumulating one-off code per source.

---

## 14. Unresolved Questions

- Should the frontend ship as a single Next.js app serving both the public site and an eventual admin dashboard (§73), or should the admin dashboard be a fully separate app from day one? Deferred to the Phase 3 implementation plan — not blocking Phase 4 foundation work either way.
- Exact Redis/queue hosting approach for local development vs. eventual production deployment — deferred to ADR-0001's "consequences" section and revisited in Phase 14 (Deployment+Operations).
- Whether `ChatGPT MacEvil to ProjectATLAS handoff.md` and `video_api_captures.md` should be deleted now that this audit has confirmed they're stale duplicates — flagged in §1 above; left for explicit operator confirmation rather than unilateral deletion, consistent with this session's operating guidance to treat uncertain-provenance files conservatively.
