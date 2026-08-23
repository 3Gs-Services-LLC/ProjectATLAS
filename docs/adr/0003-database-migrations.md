# ADR-0003: Database Migration Strategy

**Status:** ACCEPTED
**Date:** 2026-08-23

## Context

ADR-0001 rejected a full ORM in favor of a typed query builder specifically because PostGIS geography/geometry columns, GiST indexes, and spatial functions (`MacEvil.md` §65) are poorly supported by ORM migration DSLs. The schema itself (§64's ~25 required tables, §28–§31's camera/view/representation model) is large and will evolve across every implementation phase from Phase 4 onward — migrations need to be reversible where practical (§89) without inventing a bespoke migration runner.

## Decision

Use **`node-pg-migrate`** with hand-written SQL migration files (not its optional programmatic API) for all schema changes, versioned and checked into `db/migrations/`. Each migration:

- Is a plain `.sql`-backed up/down pair, so PostGIS-specific DDL (`CREATE EXTENSION postgis`, `geography(Point, 4326)` columns, `CREATE INDEX ... USING GIST`) is native SQL, not fought through an ORM abstraction.
- Runs in CI against a real Postgres+PostGIS container (Testcontainers, per ADR-0001) before merge — a migration that only "looks right" is not accepted as verified, per `MacEvil.md` §124's implementation-status discipline.
- Is additive-preferred: destructive changes (dropped columns, renamed tables) require an explicit down-migration and a note in the migration file explaining the reversal path, per §89's "reversible where practical."

Schema-drift detection at the *data* level (§23–§24, distinguishing a source's field disappearing from the database's own schema changing) is a separate, unrelated concern handled by the normalization layer, not by this migration tooling.

## Consequences

**Positive:** full control over PostGIS-specific SQL from day one; no migration-tool learning curve mismatch with the spatial requirements; migrations are plain SQL, readable by the operator without ORM-specific knowledge.

**Negative:** no auto-generated migrations from model diffs — every schema change is hand-written, which is slower per-change but avoids the larger cost of fighting an ORM's spatial-type gaps later. Accepted as the right tradeoff for a schema this spatially-heavy from the start.

## Alternatives considered

- **Prisma Migrate:** rejected per ADR-0001 — no native geography/geometry column support at time of decision.
- **Knex.js migrations:** viable alternative with similar raw-SQL-friendly philosophy; `node-pg-migrate` chosen for slightly more direct SQL-first ergonomics and smaller footprint, not a strong differentiator — revisit only if `node-pg-migrate` proves inadequate in practice.
