# ADR-0001: Technology Stack

**Status:** ACCEPTED
**Date:** 2026-08-23
**Deciders:** Claude Code (Phase 0/2), per `MacEvil.md` §131's requirement for a concrete technology decision since the repository inherits none.

## Context

`MacEvil.md` §46 and §64 define *logical* services and a *preferred* database (PostgreSQL+PostGIS "unless repository evidence establishes a compelling alternative") but deliberately avoid naming concrete languages/frameworks, leaving that to "repository reality and evidence." At the time of this ADR, the repository contains no code at all — `docs/ATLAS-ASSESSMENT.md` §1 confirms this directly. There is therefore no existing-code evidence to defer to; the decision must be made from requirements alone.

Requirements that constrain the choice:

- Heavy XML/JSON/GeoJSON/ArcGIS-REST parsing across dozens of heterogeneous source adapters (`MacEvil.md` §19).
- A centralized, security-hardened outbound HTTP fetch layer with SSRF protection (§56–§59) — every adapter routes through it.
- PostGIS-backed geospatial queries at 10M+ record scale (§66/§113) with viewport-aware clustering (§70).
- Background worker orchestration: scheduled discovery, rate-limited per-source fetch budgets, circuit breakers, dead-letter queues (§45/§53/§55/§81–§83).
- A map-centric, "cinematic enterprise command-center" public frontend (`projectatlas.md` §2).
- A single operator (3Gs Services LLC) building and maintaining this alone — operational simplicity and one team's ability to hold the whole stack in their head matters more than using the theoretically-best tool per layer.
- The one piece of prior, related engineering evidence available — the separate (inaccessible) Electron INDOT viewer and its earlier abandoned Express/TypeScript backend, per `docs/INDOT-handoff-primary.md` §3 — was TypeScript-based end to end. Not binding, but the only signal available about what this operator has previously built with.

## Decision

**Node.js + TypeScript across the entire stack**, specifically:

| Layer | Choice | Why |
|---|---|---|
| Language | TypeScript (strict mode) | One language across API, workers, and frontend; strong typing critical for a canonical-schema-heavy domain (`MacEvil.md` §28–§31). |
| API framework | Fastify | Fast, schema-validation-first (JSON Schema request/response validation maps directly onto §10/§11's required record shapes), lower overhead than Nest for a single-operator project that doesn't need DI-framework ceremony yet. |
| Frontend | Next.js (React) | Server-rendering for the public site's SEO/performance needs, same language as the backend, mature map-library ecosystem (MapLibre GL / deck.gl) for §70's clustering requirements. |
| Database | PostgreSQL + PostGIS | Directly matches `MacEvil.md` §64's stated preference; no repository evidence exists to justify deviating. |
| DB access | `node-postgres` (`pg`) + hand-written SQL / query builder (Kysely), not a full ORM | PostGIS geography/geometry columns, GiST indexes, and raw spatial queries (§65) are poorly served by ORMs (Prisma has no native PostGIS support as of this decision); a typed query builder keeps type safety without fighting the ORM for spatial SQL. |
| Queue / workers | BullMQ on Redis | Mature, well-documented Node job-queue library with built-in rate limiting, retries/backoff, and repeatable jobs — covers §45 (durable pipeline), §53 (rate budgets), §83 (circuit breakers via custom wrapper). |
| XML parsing | `fast-xml-parser` with entity expansion disabled | Directly addresses §61's XXE/entity-bomb requirement; must be configured, not assumed safe by default. |
| HTTP fetch | `undici` wrapped in a custom Safe Fetch module (ADR-0006) | Node's own high-performance HTTP client; wrapped rather than used raw so SSRF/redirect/size protections are enforced centrally, never per-adapter. |
| Containerization | Docker + Docker Compose (dev), per `MacEvil.md` §106 | Local dev parity; production deployment target deferred to Phase 14. |
| Testing | Vitest + Testcontainers (real Postgres/Redis in CI) | Adapter contract tests (§21) need real parsing against real fixtures, not mocked databases. |

## Consequences

**Positive:**
- One language reduces context-switching for a single-operator project — directly serves `MacEvil.md` §4.6's "understandable" requirement.
- Fastify + JSON Schema gives request/response validation "for free" against the canonical field lists in §10/§11/§28, reducing a whole category of malformed-record bugs.
- BullMQ's built-in per-queue rate limiting and repeatable jobs map almost directly onto §47's scheduling tiers (high-frequency/daily/weekly/monthly) without custom scheduling infrastructure.

**Negative / risks accepted:**
- Rejecting a full ORM (Prisma/TypeORM) means more hand-written SQL and migration discipline — mitigated by ADR-0003's dedicated migration strategy.
- Node's single-threaded event loop means CPU-bound work (large XML parsing, image-similarity comparisons per §35) must be offloaded to worker threads or separate processes rather than blocking the API process — a concrete constraint the Phase 3 implementation plan must design around, not an unlimited-scale assumption.
- BullMQ requires Redis as an additional infrastructure dependency beyond Postgres — accepted as standard/boring (§46: "prefer mature, boring technology") rather than avoided.

## Alternatives considered

- **Python (FastAPI + Celery + GeoAlchemy2):** strong geospatial/data-engineering ecosystem, arguably the more common choice for this exact domain. Rejected only because it would split the stack across two languages (frontend still needs JS/TS) with no offsetting requirement Python uniquely satisfies here, and no prior-project evidence favors it.
- **Go:** excellent concurrency for the worker layer, strong performance. Rejected as unnecessarily complex for a single operator (§46: "do not introduce distributed complexity merely because it looks impressive") and weaker frontend/full-stack ergonomics.
- **Prisma ORM:** considered for developer velocity; rejected specifically because of immature native PostGIS/geography type support, which is core to this domain rather than incidental.
