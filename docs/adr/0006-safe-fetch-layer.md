# ADR-0006: Centralized Safe-Fetch Layer

**Status:** ACCEPTED
**Date:** 2026-08-23

## Context

`MacEvil.md` §56–§59 require a centralized safe network fetcher that all adapters must use rather than implementing their own HTTP fetching, with SSRF protection (§57) covering localhost/loopback/RFC1918/link-local/IPv6 variants/cloud-metadata addresses/DNS-rebinding, redirect re-validation on every hop (§59), and domain authorization distinguishing declared-trusted hosts from incidentally-observed ones (§58). §120 states plainly that source-controlled URLs are untrusted input even from a legitimate source — this applies to every adapter that will ever be written, so the protection has to exist before adapter #1, not be retrofitted after several adapters have already shipped their own fetch code.

## Decision

A single package, `packages/core/safe-fetch/`, wraps `undici` (per ADR-0001) and is the **only** sanctioned way any adapter performs an outbound HTTP request. It enforces, on every call:

- Protocol allowlist (`https:`/`http:` only — no `file:`, `ftp:`, etc.).
- DNS resolution followed by IP-literal validation *before* connecting — blocking loopback, RFC1918, link-local (v4 and v6), IPv6 unique-local, IPv4-mapped-IPv6, and known cloud-metadata addresses (169.254.169.254 and equivalents), per §57's explicit list.
- Redirect handling capped at a small fixed count, with the *destination* of every redirect re-validated against the same IP-block rules — never trusting a redirect because the origin was already trusted (§59).
- Response size and decompression-ratio limits, to block zip-bomb/decompression-bomb responses (§60).
- Per-host and per-source rate-limit/circuit-breaker state (§53/§83), so one broken source's failures never cascade into hammering it.
- A `ProjectATLAS-<component>/<version> (contact: ...)` User-Agent, never a spoofed/browser-mimicking one, consistent with the transparent-fetching posture of `sources/indot-cars-hub/SOURCE-RECORD.md`'s own precedent this session.

Adapters receive an injected `SafeFetch` client (constructor/factory injection, not a global import), so contract tests (ADR-0002) can substitute a test double without weakening the production path.

## Consequences

**Positive:** SSRF protection is enforced in exactly one place, testable in isolation with a dedicated test suite (loopback/RFC1918/link-local/metadata/rebinding cases per §57's "test these" instruction), rather than re-implemented (and potentially re-broken) per adapter.

**Negative:** every adapter is coupled to this shared package — a bug in Safe Fetch is a bug in every adapter simultaneously. Accepted as the correct tradeoff: the alternative (per-adapter fetch logic) multiplies the SSRF attack surface by the number of adapters instead of containing it.

## Alternatives considered

- **Per-adapter fetch with a shared *linting rule* discouraging raw `fetch`/`undici` use:** rejected — a lint rule is advisory, not enforced; §56 requires adapters "must not independently implement insecure HTTP fetching," which calls for a structural guarantee (no other fetch client available to import) rather than a convention.
- **Third-party SSRF-protection library:** considered, but the specific IP-range/redirect-revalidation requirements in §57–§59 are precise enough, and central enough to this project's threat model, that a small in-house implementation with a dedicated test suite is more auditable than depending on an external package's coverage of the same list.
