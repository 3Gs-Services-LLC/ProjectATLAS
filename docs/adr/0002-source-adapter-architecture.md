# ADR-0002: Source Adapter Architecture

**Status:** ACCEPTED
**Date:** 2026-08-23

## Context

`MacEvil.md` §19 requires that source-specific parsing logic never live in the core ingestion engine, and §20 requires that "a new source must be addable without modifying core ingestion logic." `Project ATLAS-WebSite.md` §69 states the goal explicitly: adding the 500th source should be as easy as the 5th. With ~30+ named source families already catalogued (§6 of `projectatlas.md`, §63 of `Project ATLAS-WebSite.md`) and no code yet written, the adapter contract must be settled before the first adapter (INDOT CCTV XML) is built, or that first adapter will silently become the de facto contract.

## Decision

Each source adapter is an isolated TypeScript package under `packages/adapters/<source-name>/` (per ADR-0001's Node/TS stack) implementing a shared `SourceAdapter` interface matching `MacEvil.md` §19 exactly:

```ts
interface SourceAdapter {
  discover(): Promise<DiscoveryResult>;
  validate(): Promise<ValidationResult>;
  fetchMetadata(): Promise<RawSourceRecord[]>;
  normalize(raw: RawSourceRecord): NormalizedCamera | NormalizedEvent;
  enumerateCameras(): AsyncIterable<NormalizedCamera>;
  enumerateViews(cameraId: string): Promise<CameraView[]>;
  fetchRepresentation(viewId: string): Promise<Representation>;
  healthCheck(): Promise<HealthResult>;
  getTerms(): SourcePolicy;
  getAttribution(): string | null;
  getRateLimit(): RateLimitPolicy;
  getUpdateFrequency(): UpdateFrequency;
}
```

Generic building-block adapters (REST JSON, REST XML, GeoJSON, ArcGIS FeatureServer/MapServer, CKAN, static CSV) are implemented once in `packages/adapters/_generic/` and composed by configuration, per §19–§20's explicit generic-adapter list — a new simple source is a config file, not new code, wherever it fits one of these shapes. Vendor/source-specific adapters (INDOT CCTV, 511IN GraphQL) are hand-written packages that may internally use the generic HTTP/XML/JSON building blocks but own their own field-mapping logic.

Every adapter is subject to the common contract test suite from `MacEvil.md` §21 — discover/validate/fetch/parse/normalize/enumeration/pagination/empty-response/malformed-response/HTTP-failure/auth-failure/rate-limiting/terms/attribution — run against real captured fixtures (§102), never fabricated ones.

## Consequences

**Positive:** core ingestion pipeline (queue → fetch → parse → normalize → identity → upsert) never branches on source identity; adding source #6 through #500 touches only `packages/adapters/`, never `packages/core/`.

**Negative:** more upfront interface design cost before adapter #1 ships, and the interface will need at least one real-world revision once the INDOT adapter (XML, no video-source-of-truth-in-metadata) and a hypothetical 511 GraphQL adapter (JSON, embedded HLS source) are both built — the interface above is a starting contract, not assumed perfect on first use. Revisions get their own ADR if they change the shared interface shape, not silently absorbed.

## Alternatives considered

- **One monolithic ingestion service with per-source `if/switch` branches:** rejected outright — this is exactly what §19 prohibits, and it doesn't scale past a handful of sources without becoming unmaintainable.
- **Adapters as separate microservices/processes per source:** rejected as premature operational complexity for a single-operator project at this stage (§46) — revisit only if a specific adapter's resource profile (e.g., heavy Playwright browser automation for §5B's GraphQL path) demands process isolation, which is plausible for the 511IN adapter specifically and should be evaluated when that adapter is actually built.
