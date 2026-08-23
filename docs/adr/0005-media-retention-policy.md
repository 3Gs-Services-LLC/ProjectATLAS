# ADR-0005: Media Retention Defaults to Off

**Status:** ACCEPTED
**Date:** 2026-08-23

## Context

`MacEvil.md` §47–§48 and §96 are explicit and repeated: ATLAS "must not become a nationwide surveillance archive by default," video is not continuously recorded by default, and media retention requires explicit, policy-aware, license-aware, storage-bounded, auditable configuration. This is a direct product-identity constraint, not an incidental engineering detail — ATLAS aggregates *metadata about* public cameras (location, status, stream availability), not a video archive of what those cameras have recorded.

## Decision

The default (and initial-phases-only) configuration stores **zero** camera imagery or video content. What is stored by default:

- Canonical camera/view/representation metadata (§28–§31).
- Health observations (§78) — HTTP status, latency, content-type/size, image decodability, manifest validity, stream-progression booleans — never the actual image/video bytes.
- A content hash (§51's ETag/Last-Modified/content-hash freshness signals) where useful for change detection, which requires *fetching* a frame/snapshot transiently but not *persisting* it beyond the hash computation.

Any future image/video retention feature is opt-in per source, requires an explicit `media_retention_policy` record (retention window, storage bound, license basis) before it can be enabled, and is out of scope for Phases 4–10 entirely. It is not being designed now — inventing that design ahead of an actual, justified use case would violate the project's own "don't build for hypothetical future requirements" discipline.

## Consequences

**Positive:** removes an entire category of legal/storage/privacy risk from the initial build; keeps ATLAS unambiguously within its "public camera *registry*" identity rather than drifting toward "public camera *archive*," which is a materially different (and materially riskier) product.

**Negative:** health checks that want to verify "is this actually a real, live, non-broken stream" beyond HTTP-200-and-manifest-parses will have less to work with (no stored frame to compare against later) — accepted, since §51 explicitly separates "HTTP 200" from "proof of camera health" and expects ETag/hash-based freshness signals to carry that weight, not stored media.

## Alternatives considered

- **Store a rolling N-hour buffer per active camera for health/debugging purposes:** rejected for the initial build — directly conflicts with §48's "indefinite recording is prohibited by default" framing even at small scale, and introduces storage-cost and licensing questions with no current requirement driving them.
