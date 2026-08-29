# Source Record — FCC Universal Licensing System (ULS) bulk data

**National source, not state-specific.** Filed under `sources/` rather than in a state folder because it covers every state at once, matching the existing treatment of `sources/fema-openfema/`, `sources/nps-federal/` and `sources/blm-federal/`. Referenced from Indiana's and Wisconsin's §1.4 rows.

**Retrieved:** 2026-08-29, via direct HTTPS requests (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** `data.fcc.gov/robots.txt` was read **before** any fetch. It disallows only `PiplBot`; this project's User-Agent is permitted. Directory listing fetched, then the target archive verified by `HEAD` and a 4-byte range request. No access control was bypassed.

## Identity

- **Provider:** Federal Communications Commission (FCC), United States
- **System:** Universal Licensing System (ULS) — the FCC's authoritative register of radio-spectrum licences
- **Official URL:** `https://data.fcc.gov/download/pub/uls/complete/`
- **Relevance to ATLAS:** ULS is the **official** record of licensed land-mobile radio infrastructure — licensee, callsign, frequency, and transmitter location. For capability 1.4 (scanners and public-safety radio) it is a far better-sourced input than the commercial scanner aggregators the state dossiers lean on, because it is first-party government data in the public domain.
- **License:** US federal government work — public domain. No API key, no registration, no terms-of-use gate encountered.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `https://data.fcc.gov/download/pub/uls/complete/` (directory listing) | 200 | 3,204 | `957860e2da4718ec23f0aee2766d94b0fab6dec0d1c4a3b80a4c5e2bc0639368` | `uls-complete-directory-2026-08-29.html` |
| `https://data.fcc.gov/download/pub/uls/complete/l_LMpriv.zip` (`HEAD`) | 200 | `Content-Length: 419,411,523`; `Content-Type: application/zip`; `Last-Modified: Sun, 23 Aug 2026 13:19:43 GMT` | — | not downloaded |
| `https://data.fcc.gov/download/pub/uls/complete/l_LMpriv.zip` (bytes 0–3) | 206 | 4 | — | magic bytes `PK\x03\x04` — a real ZIP archive |

The directory listing enumerates **41 archives**. `l_LMpriv.zip` (Land Mobile — Private) is the one that carries public-safety licensing; `l_LMcomm.zip` (80,109,306 bytes) and `l_LMbcast.zip` (7,644,647) are the commercial and broadcast counterparts. The listing's stated size for `l_LMpriv.zip` matches the `HEAD` response's `Content-Length` **exactly**, which is real corroboration that the listing is current rather than a stale index.

## What this record does and does not establish

**Established:** the source is real, is official, is public domain, is reachable without authentication, permits this project's User-Agent under its own `robots.txt`, and currently serves a 419 MB ZIP archive last modified 2026-08-23.

**NOT established:** any record count, for Indiana, Wisconsin, or anywhere else. **The archive was deliberately not downloaded.** At 419 MB it is far outside the size of anything else committed as evidence in this repository (the largest to date is 26 MB), and committing it would bloat the repo for no analytical gain at this stage. The 4-byte range request confirms the file is a genuine ZIP; nothing inside it has been parsed. **No claim is made anywhere in this project that a specific number of Indiana or Wisconsin radio licences has been verified.**

## Deliberate exclusions

Broadcastify and RadioReference were **not** fetched, despite being cited heavily throughout the state dossiers in §2 of both state records. Both are commercial services with their own terms of use, and neither is an official channel. Using ULS instead means capability 1.4 rests on first-party government data rather than on a third-party rebroadcaster whose redistribution terms this project has not cleared. If a scanner-audio capability is later pursued, the terms question for those services must be resolved on its own merits first — it is not resolved here.

## Open items

1. Download and parse `l_LMpriv.zip` out-of-band (not into this repository), filter to Indiana and Wisconsin, and record real per-state licence counts. Only then can §1.4 for either state carry a record count.
2. ULS bulk files are pipe-delimited fixed-schema `.dat` files inside the ZIP; the FCC publishes a separate record-layout definition that has **not** been retrieved or verified here.
3. The FCC **License View API** (`data.fcc.gov/api/license-view/...`) was tried first and is **not usable**: it 301-redirects to `www.fcc.gov`, which returns `403 Access Denied` from an edge/WAF layer — for the API path and for `robots.txt` itself. No User-Agent spoofing or other workaround was attempted, since that would be defeating an access control (`projectatlas.md` §4). Bulk download is therefore the supported path, not the API.
