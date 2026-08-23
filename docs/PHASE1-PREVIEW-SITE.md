# Phase 1 Evidence Preview Site

**Added 2026-08-24, on direct operator instruction to produce a reviewable website now, rather than waiting for the full phased build-out.** This document exists so a future session (or the operator) understands exactly what this is, what it isn't, and why it exists outside the normal `MacEvil.md` phase sequence.

## What this is

A real, working Next.js site (`app/`, `components/`) showing a dark, map-centric "command-center" view (per `projectatlas.md` §2's UI direction) of **10,496 real, independently-verified data points** gathered during Phase 1 research:

- **10,231 real camera locations** across 11 states (WA, OR, IA, GA, UT, FL, MO, VA, AL, KY, MD), fetched live from each state's own real, previously-verified ArcGIS endpoint (see `docs/research/PHASE1-SOURCE-VERIFICATION.md` for the verification record of every one of these sources).
- **265 real Indiana work-zone events**, from the CC0-licensed INDOT WZDx feed (`projectatlas.md` §5D).

Every point is real. Nothing is mocked, sampled-and-labeled-as-complete, or invented. Per-record source attribution and license status (most are `UNKNOWN`, shown as such, never assumed open) are shown in the map's popups, consistent with `MacEvil.md` §12's "never interpret UNKNOWN as unrestricted."

## What this is NOT

This is **not** the Phase 4-11 production system described in `MacEvil.md`. Specifically, it does **not** have:

- A database (PostgreSQL/PostGIS or otherwise) — the data is a static, generated GeoJSON file (`public/data/cameras.geojson`), rebuilt by re-running the fetch, not queried live.
- A live ingestion pipeline, adapters, or scheduler — the data was fetched once, by hand, during this session.
- An API layer (Fastify, per ADR-0001) — the Next.js app reads the static file directly.
- Identity resolution, deduplication, or health monitoring.
- Full per-state coverage — most states shown are capped at their ArcGIS endpoint's default page size (500–2,000 records), not necessarily each state's complete inventory. See the exact per-source figures in `docs/research/PHASE1-SOURCE-VERIFICATION.md`.
- Any of the 39 states not yet in the Phase 1 sweep.

This is explicitly a **preview built from Phase 1 evidence**, produced out of the normal phase order (Phase 3 Implementation Plan and Phase 4 Foundation haven't happened) because the operator asked for something reviewable now. The banner on the site itself says this plainly, so a viewer doesn't mistake it for the finished product.

## What was deliberately excluded

- **`sources/live-environment-streams/`** — quarantined per its own `NOTICE.md` (no repository license, `needs-outreach` Issue #7 unresolved). Not shown on the public preview.
- **`sources/argus-github/`** — an aggregator with unclear underlying-stream redistribution rights and a confirmed double-aggregation risk (382 of 390 upstream sources are re-scraped OpenCCTV). Not shown.
- **Enforcement/ALPR-adjacent cameras** (e.g. New Orleans's automated speed/red-light cameras, reclassified in Batch 7) — excluded from this general-traffic-camera preview, consistent with treating that category separately per `projectatlas.md` §4.

## How to run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, verified to compile cleanly
```

## How the data was built

The consolidation script that fetches each state's endpoint and writes `public/data/cameras.geojson` was run interactively this session (not committed as a repo script yet — a real next step, not done here, would be turning this into a proper, versioned `scripts/build-preview-data.mjs` so the dataset can be regenerated reproducibly rather than by hand). The exact endpoints, fields, and license status used for each state are documented in `docs/research/PHASE1-SOURCE-VERIFICATION.md`'s Coverage Matrix.

## Known issues, disclosed rather than hidden

- Three of the eleven states (OR, GA, FL) are capped at their ArcGIS service's default page size — not their full real inventory.
- Maryland has three real, unreconciled camera counts from three different endpoints (552 / 451 / 535) — one was picked (the ArcGIS CHART figure, 552) for this preview without resolving why they differ.
- `npm audit` reports 3 high-severity vulnerabilities, all transitive build-tooling dependencies of Next.js itself (`postcss`, `sharp`) — not a runtime exploit path for this static preview, but should be addressed (likely via a Next.js version bump) before any real deployment.
- No automated tests exist for this site yet.
