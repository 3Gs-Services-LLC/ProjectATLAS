# ADR-0004: Identity Resolution — Human-in-the-Loop by Default

**Status:** ACCEPTED
**Date:** 2026-08-23

## Context

`MacEvil.md` §35–§38 establish identity resolution as a core subsystem: the same physical camera may appear across state 511, regional 511, ArcGIS, agency websites, and vendor APIs. §36 mandates identity states (`MATCHED / PROBABLE_MATCH / POSSIBLE_MATCH / DISTINCT / NEEDS_REVIEW`) and explicitly forbids automatically merging uncertain records. §117 further requires the architecture support many-sources-to-one-canonical-camera, not one-source-per-camera. Getting this wrong in either direction is costly: over-merging destroys distinct cameras' identities (unrecoverable without the merge audit trail); under-merging inflates camera counts and pollutes map density.

## Decision

Automatic merging is permitted **only** at the `MATCHED` confidence tier, defined conservatively as: same operator + same source-provided camera ID observed twice, or exact normalized stream/snapshot URL match (`Project ATLAS-WebSite.md` §30's "EXACT" and "VERY HIGH" tiers). Every other tier (`PROBABLE_MATCH`, `POSSIBLE_MATCH`) is written to an `identity_candidates` table and surfaced in the Identity Review UI (§74) for an explicit operator decision (`MERGE / KEEP_SEPARATE / IGNORE / DEFER / SPLIT`, all audited per §38/§115). No background job ever auto-promotes a candidate past `POSSIBLE_MATCH` on its own.

Candidate generation is geospatial-first: a coarse bounding-box/radius query narrows candidates (§35's "geospatial candidate generation"), then weighted matching scores against the full identity-signal list (§35 items 1–15) produces the tier. Weights are configuration, not hard-coded per-adapter logic, so tuning doesn't require code changes.

## Consequences

**Positive:** no camera can silently disappear via an incorrect auto-merge; the review queue gives the single operator a tractable, prioritized worklist instead of an unreviewable firehose, since only genuinely ambiguous candidates reach it.

**Negative:** as more sources come online, the `POSSIBLE_MATCH`/`PROBABLE_MATCH` queue could grow faster than one operator can review it. Mitigation deferred to Phase 9 (Identity Resolution) implementation: the review UI must support bulk actions for high-confidence batches and expose queue-depth metrics (§97) so growth is visible before it becomes unmanageable, rather than solved preemptively here with unproven assumptions about queue volume.

## Alternatives considered

- **Fully automatic merging above a single numeric confidence threshold:** rejected — directly contradicts §36's explicit prohibition and risks unrecoverable identity corruption for the sake of a lower review burden.
- **No automatic merging at all, even for exact-ID matches:** rejected as unnecessarily conservative — re-observing the same operator+source-ID pair on every ingestion run is not genuinely ambiguous, and forcing manual review of every re-observation would make the review queue useless as a signal (all noise, no real ambiguity).
