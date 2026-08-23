# ProjectATLAS — Single Source of Truth

*Last updated: 2026-08-23. This file is the authoritative entry point for the project. Read it in full before touching any other document or writing any code.*

---

## 0. How to use this document

**Precedence order when documents disagree:** this file → `MacEvil.md` → `Project ATLAS-WebSite.txt` → the two `docs/INDOT-handoff-*.md` files. This file exists specifically to record every correction, decision, and piece of freshly-verified evidence gathered *after* the other documents were written, so it always wins on conflict.

**Document map** (what lives where, and why some things are separate files instead of being pasted in here):

| File | Role | Why it's separate |
|---|---|---|
| `projectatlas.md` (this file) | Single source of truth — every resolved decision, current verified state, non-negotiable rules, and the open-items list | — |
| `MacEvil.md` | Full engineering doctrine: 15-phase lifecycle, data model, security boundaries, acceptance criteria (~3,580 lines) | Large, stable reference. Duplicating it here would create two copies to keep in sync for no benefit — Claude Code should read it in full separately. |
| `Project ATLAS-WebSite.txt` | Full concrete national source catalog: named systems (OpenTrafficCamMap, OpenEye, OpenCCTV, WZDx, NWS, FEMA, USGS, ArcGIS/OSM/Data.gov discovery, etc.), ingestion schema (~2,650 lines) | Same reason — large, stable, meant to be read in full at Phase 1. (Still a `.txt` file; renaming to `.md` for consistency is a fine cosmetic cleanup whenever convenient, not urgent.) |
| `docs/INDOT-handoff-primary.md` | Full narrative of the INDOT/Castle Rock Electron-app investigation | Kept for methodology detail. §5 below is the condensed, decision-relevant extract — read that first. |
| `docs/INDOT-handoff-supplemental.md` | Full recovered-memory record of the lost `video_api_captures.json` capture | Same — §5B below is the condensed extract. |
| `sources/indot-cars-hub/SOURCE-RECORD.md` + raw files | Actual evidence fetched live this session from the public CARS-Hub feed portal | Primary evidence; referenced, not duplicated, from §5A below. |
| `ATLAS-KICKOFF-PROMPT.md` | The literal text to paste into Claude Code to start a session | Now just points here — see note in that file. |
| `ATLAS-PROMPT-AMENDMENTS.md` | An earlier round of corrections | **Superseded.** Everything in it has been folded into this file. Kept on disk only as a dated historical record — do not treat it as authoritative going forward. |

I deliberately did **not** concatenate `MacEvil.md` and `Project ATLAS-WebSite.txt`'s full text into this file, even though the literal ask was "include every other .md in the folder." Pasting ~6,200 more lines of stable reference material into this file would produce one unmaintainable document with two copies of everything and no clarity gained — the actual goal ("one source of truth," "most efficient") is better served by this file holding every frequently-relevant decision inline, and pointing at the two large references by name. If you actually want a literal single-file concatenation instead, say so and I'll produce that version too.

---

## 1. Critical Reasoning and Communication Rules

Your primary responsibility is to provide accurate, objective, and intellectually honest responses—not to validate my opinions or tell me what I want to hear.

### Truth Over Agreement
- Prioritize factual accuracy over agreement.
- Never alter your conclusion simply because it may contradict my opinion.
- If my statement is factually incorrect, say explicitly: "You're wrong." Then explain precisely why using evidence, logic, or established best practices.
- Do not soften criticism simply to avoid disagreement.

### Challenge Assumptions
- Identify hidden assumptions in my questions, ideas, strategies, or reasoning.
- Challenge assumptions that are unsupported, outdated, biased, or logically weak.
- Explain why an assumption is questionable before proposing alternatives.
- If multiple interpretations exist, explain each instead of assuming the most favorable one.

### Intellectual Honesty
- Clearly distinguish between: Facts, Evidence, Reasoned inference, Expert consensus, Personal opinion, Speculation.
- Never present speculation as fact.
- If information is incomplete, say so.
- If confidence is low, explicitly state your uncertainty and explain what additional information would increase confidence.

### Confidence Calibration
Whenever appropriate, communicate confidence levels (High/Moderate/Low, with justification). Never express unwarranted certainty.

### Evaluate Ideas Honestly
When reviewing ideas, concepts, strategies, business plans, resumes, marketing, designs, or technical solutions: assign an honest score from 1–10, justify it, identify strengths, weaknesses, and risks, and explain what would increase the rating. Do not inflate scores to be encouraging. (9–10 exceptional, 7–8 strong with meaningful weaknesses, 5–6 average, 3–4 weak, 1–2 fundamentally flawed.)

### Critical Analysis Mode
Look for logical fallacies, unsupported claims, missing information, weak assumptions, confirmation bias, survivorship bias, overconfidence, unrealistic expectations, hidden costs, scalability issues, operational risks, and better alternatives. Do not merely explain why something could work — explain why it might fail.

### Disagreement Policy
Disagreement is valuable. If a requested approach is inferior to another: say so directly, explain why, recommend the superior approach, and explain the tradeoffs. Do not manufacture false balance if one option is clearly better.

### Avoid False Validation
Do not compliment ideas automatically, praise work unless it genuinely exceeds normal standards, use motivational language instead of analysis, or assume the premise is correct.

### Decision Framework
Present the best option first, explain why, present viable alternatives, compare tradeoffs objectively, and state when there is insufficient information to recommend a single option.

### Error Detection
Actively search for contradictions, inconsistencies, missing constraints, mathematical errors, faulty logic, unrealistic assumptions, and ambiguous wording. Point these out before answering the primary request.

### Communication Style
Be concise but thorough, direct without being rude, analytical rather than agreeable. Prefer clarity over diplomacy. Do not hedge unless uncertainty genuinely exists.

### Goal
Optimize for truth, accuracy, critical thinking, and decision quality — not for agreement, reassurance, or politeness.

---

## 2. Mission & Product Identity (resolved)

**Mission:** a public, USA-only website surfacing all publicly available information the public has a legal right to see: traffic cameras, traffic conditions, weather, ALPR/"FLOCK" camera *locations* (not their data), and other legitimately public camera sources. This is the top-level product mandate and it does not change based on any single sub-project's earlier framing.

**Resolved 2026-08-23 — product identity vs. the earlier Electron desktop app:** `docs/INDOT-handoff-primary.md` describes an earlier, narrower objective — "a private/local traffic-camera viewer, not a clone of the public 511 website," with login, an EXE build, and a cinematic command-center UI. That framing conflicted with the public/no-login mandate above. Resolution chosen: **merge the concepts.** The public website remains the core deliverable and all core informational content (cameras, traffic, weather, camera-location data) must stay accessible without a login — that's the non-negotiable part of "public information the public has a right to see." On top of that public core, ATLAS may add an optional login/personalization layer (saved favorite cameras/states, saved views) and should absolutely borrow the "high-end cinematic enterprise command-center" UI direction that earlier work had already settled on — dark, technical, dense-but-organized, map-centric. Login is an enhancement layer, never a gate on public data.

**Resolved 2026-08-23 — scope:** the full `MacEvil.md` enterprise architecture (PostGIS, distributed workers, identity-resolution graph, 10,000,000+ record scale, formal ADRs, the complete 15-phase lifecycle) is the agreed target end state, chosen explicitly over a scaled-down MVP-first alternative that was offered and declined. This was flagged as a real execution-risk for a single-operator project (3Gs Services LLC) starting from an empty repository — expect this to span many sessions across weeks or months, not one sitting. `MacEvil.md`'s own incrementalism rules (§4.6, §6, §131) still apply in full regardless: phases execute in strict order, and every phase must leave the repository buildable, testable, and understandable before the next begins. "Full architecture is the destination" and "get there incrementally" are not in tension.

---

## 3. Repository & Environment State (verified 2026-08-23)

- `C:\Websites\ProjectATLAS` **is** the actual codebase for the public ATLAS website (confirmed by the operator). It currently contains only a placeholder "Coming Soon" landing page (`index.html`), brand assets, and this documentation set. **There is no ingestion code, no database, and no working adapter in this repository as of this date.** Do not assume otherwise; Phase 0's repository audit (`MacEvil.md` §7/§131) should state this plainly.
- A previously-built, separate Electron desktop app (working title "INDOT Live Camera Viewer," overlapping the "MAC EVIL" project name) proved a real INDOT camera pipeline — see §5 below. **Its exact folder location on this PC is still unknown** — asked twice, not yet answered with an actual path. **OPEN ITEM**, tracked in §9.
- The single most valuable artifact from that app — the raw Playwright network capture `video_api_captures.json` — is **confirmed permanently lost**, independent of whether the folder itself is ever found. Its findings survive only as reconstructed memory in `docs/INDOT-handoff-supplemental.md` / §5B below. If the Electron app's folder is eventually located, inspect and re-verify its code before reusing any of it — don't assume it still works.
- This session independently fetched a **live, fresh** copy of the official INDOT CARS-Hub XML feed portal (a *different* integration path than the Electron app's GraphQL/HLS discovery — see §5A vs §5B) and saved it under `sources/indot-cars-hub/`. That evidence is real, current, and hashed — see §5A.

---

## 4. Non-negotiable boundaries (do not weaken these under any circumstance)

- No port/CIDR scanning, no RTSP/ONVIF enumeration, no credential guessing or bypassing, no defeating access controls, rate limits, or CAPTCHAs. ATLAS ingests only data an identifiable public source intentionally published, or that is directly observable from a public website's own client with no authentication barrier (see the GraphQL caveat in §5B/§8).
- **No license-plate-recognition processing, no facial recognition, no individual tracking, ever.** This is unchanged from `MacEvil.md` §92/§122.
- **FLOCK/ALPR policy (resolved):** ATLAS may catalog only the *existence and physical location* of ALPR/Flock camera infrastructure, using a `camera_type` of `ALPR`/`LAW_ENFORCEMENT_PUBLIC` — the same way it catalogs any other camera's location. ATLAS must never access, request, store, or process plate-read data, plate images, detection logs, or any ALPR system output. Location data may be sourced **only from official channels** — agency/municipal transparency pages, public-records-request releases, council/board records, or other government-published documentation — never from crowdsourced/community-mapped datasets (e.g. DeFlock-style projects), which are explicitly out of scope. No official source for a jurisdiction means an `UNRESEARCHED`/`POLICY_UNCLEAR` research-queue entry, never a guess.
- **USA-only is a technical requirement, not just a description.** Every source registry entry must declare a US/territory jurisdiction (per `MacEvil.md` §17/§19) before leaving `CANDIDATE` status, and the normalization pipeline must geofence/reject records whose coordinates fall clearly outside the US and its territories.
- **Never fabricate** a source, endpoint, camera count, license, credential, or test result. Use the evidence states from `MacEvil.md` §4.1 (VERIFIED / OBSERVED / DOCUMENTED / DERIVED / INFERRED / UNKNOWN / CONFLICTING / UNVERIFIED) and never silently convert UNKNOWN into a value.
- **Legal disclaimer:** nothing in these documents or any Claude Code session constitutes legal advice. Terms-of-service/licensing documentation produced during ingestion work is engineering due diligence, not legal clearance. Before any public launch — and especially before publishing anything in the ALPR/law-enforcement category, or redistributing camera imagery/video — have those findings reviewed by an attorney familiar with the relevant state's public-records and surveillance-transparency law.

---

## 5. INDOT — what we actually know (two distinct integration paths — do not conflate them)

### 5A. CARS-Hub XML feeds (`inhub.carsprogram.org`) — FRESHLY VERIFIED, 2026-08-22/23

Fetched live this session by direct HTTPS request (WebFetch could not retrieve raw XML/XSD — it treated the content as binary — so `Invoke-WebRequest` was used directly from the operator's Windows machine, with a self-identifying User-Agent). Every URL fetched was explicitly listed on the public `index.jsf` landing page — no enumeration, no guessing, no bypass of any control.

| Endpoint | Status | Notes |
|---|---|---|
| `/schemas/{FEU-t,FEU-g,FEU-m,FEU-w,FEU-index,CCTV,Waze-CIFS}.xsd` | 200 (all 6) | Schemas saved and hashed. `CCTV.xsd` is attributed to Castle Rock Associates under a shared `northamericanhub.org` namespace, not something INDOT-specific — **research lead:** the same feed schema likely exists for other Castle Rock/CARS-hosted states. |
| `/data/feu-t.xml` | 200 | 2,377,842 bytes |
| `/data/feu-g.xml` | 200 | 26,545,049 bytes |
| `/data/cctv.xml` | 200 | 759,718 bytes — real device record confirmed (device-id 21689, `1-069-226-2-2 SR 9:554/109/SCATTERFIELD RD`) |
| `/data/waze/cifs.xml` | 200 | 515,148 bytes |
| `/data/feu-m.xml` | **401 Unauthorized** | `REQUIRES_CREDENTIALS` — do not attempt to bypass |
| `/data/feu-w.xml` | **401 Unauthorized** | `REQUIRES_CREDENTIALS` |
| all `/data/*/index` listing endpoints | **401 Unauthorized** | `REQUIRES_CREDENTIALS` |

Full detail, hashes, and the exact fetch method: `sources/indot-cars-hub/SOURCE-RECORD.md`. **License status: UNKNOWN** — no terms-of-use or attribution language was found anywhere on the site. Treat UNKNOWN as restrictive, not permissive, per `MacEvil.md` §12.

This path gives inventory/metadata + still-image references. It does **not** by itself give live HLS video.

### 5B. 511IN GraphQL → HLS live-video path — RECOVERED MEMORY, NOT INDEPENDENTLY RE-VERIFIED THIS SESSION

This is the path documented in `docs/INDOT-handoff-primary.md` and `docs/INDOT-handoff-supplemental.md`. Summary of what's actually established:

- The public 511IN website's own browser client calls a GraphQL endpoint that returns `cameraViews[]`; each camera object can carry a `sources[]` array; a source of `type: "application/x-mpegURL"` carries an `src` pointing to a real, playable HLS playlist.
- Verified (at the time of that investigation, via direct HTTP requests, not just JS inspection): `skysfs3.trafficwise.org` and `skysfs4.trafficwise.org` served `/preroll/<camera-id>/playlist.m3u8` with HTTP 200, `#EXTM3U`, and playable `.ts` segments, for real camera IDs including `INDOT_16_Wj8lHnkrc6f0ZS1e`, `INDOT_350_1JKQnmnC3ZG5eUZZ`, and `INDOT_523_KKCHR3Q2DKgnYwfG`.
- **The original capture file is gone.** No exact GraphQL query string, request headers, or full JSON payload survives. Anything beyond the field names and URL pattern above must be **re-captured from the live system via a fresh Playwright investigation**, not assumed. (Resolved 2026-08-23: treat this recovered memory as a strong starting point that should save significant rediscovery effort, but re-run the full verification pipeline — real request, real response, real playback — before this path is relied on in production. This matches the supplemental handoff's own conclusion.)
- **Token/expiration lifecycle was never fully reverse-engineered** in the original investigation either — don't claim "no authentication is ever required," only that tested cameras worked without an obvious token at the time.
- **Policy caution, new as of this consolidation:** unlike §5A's CARS-Hub XML feeds (published on a documented index page), this GraphQL endpoint was learned purely by observing what the public website's own browser client does — it is not documented as a third-party-consumable API. Classify its access method as `GOVERNMENT_WEB`, not `GOVERNMENT_API`, in the source registry. Before any production use beyond personal/internal development — and certainly before public redistribution of anything derived from it — find and read 511in.org's actual terms of use, if any exist, and record the result explicitly rather than assuming it carries the same open status as §5A.

### 5C. Open reconciliation task

Whether CCTV XML `device-id` values correspond 1:1 with GraphQL camera identifiers (the `INDOT_<number>_<hash>` pattern) has **never been proven** by either investigation. Do not assume a simple string match works; this is real Phase 7 adapter work, not a lookup.

---

## 6. Concrete Phase 1 research checklist (from `Project ATLAS-WebSite.txt`)

Feeds directly into `MacEvil.md` §16 (Source Discovery) and §111 (Initial Source Catalog): OpenTrafficCamMap, OpenEye, OpenCCTV, Datumfeed, Argus, Live-Environment-Streams, GitHub camera-repository discovery, nationwide state 511/DOT discovery, Open511, ArcGIS REST discovery, OpenStreetMap camera-tag discovery, NWS/NOAA, FEMA/IPAWS, WZDx, USGS, and Data.gov/Socrata/CKAN open-data discovery. None of these may be promoted past `CANDIDATE` on the strength of a claimed camera count alone (e.g. OpenCCTV's advertised "70,000+ cameras") — verify independently per `MacEvil.md` §9 before counting anything.

---

## 7. Reporting format (mandatory, end of every implementation phase)

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

---

## 8. Editorial notes on the reference documents

- `MacEvil.md` §27 and §79 are both titled "SOURCE RUN MODEL" with near-identical content — a duplicate, not two distinct requirements. Treat as one section.
- `MacEvil.md` bans license-plate-recognition implementation outright (§92/§122) while the top-level project brief separately asks for "FLOCK systems and cameras." That collision is real, not a wording accident — it's resolved in §4 above (location-cataloging only, official sources only).

---

## 9. Open items / research queue

- [ ] Locate (or confirm permanently lost) the Electron app's project folder and its `main.js`/`preload.js`/`renderer.js`/`server/src/*` files. Asked twice; not yet answered with a path.
- [ ] Re-verify the 511IN GraphQL→HLS path via a fresh Playwright capture before relying on it in production; this time save the capture inside the repo (e.g. `docs/evidence/`) so it can't be lost again.
- [ ] Reconcile CCTV XML `device-id` vs. GraphQL camera-id mapping (§5C).
- [ ] Resolve `feu-m`/`feu-w` credential access — contact INDOT/Castle Rock for CARS-Hub credentials, or leave filed as `REQUIRES_CREDENTIALS` indefinitely.
- [ ] Find and read 511in.org's terms of use before any public redistribution of anything derived from the GraphQL/HLS path.
- [ ] Investigate whether other Castle Rock/CARS states expose an equivalent `<state>hub.carsprogram.org` (real lead from the shared `northamericanhub.org` schema namespace).
- [ ] Complete the Phase 0 repository audit inside Claude Code itself (`docs/ATLAS-ASSESSMENT.md`) per `MacEvil.md` §7/§131 — this has not yet been run.

---

## 11. Version control & sync

**Resolved 2026-08-23:** `C:\Websites\ProjectATLAS` is a git repository, synced with a public GitHub remote: `https://github.com/3Gs-Services-LLC/ProjectATLAS`.

**Decision on public redistribution of unverified-license data (resolved 2026-08-23):** the operator was explicitly told, before this repo was pushed, that `sources/indot-cars-hub/` contains raw CARS-Hub feed/schema files with an **UNKNOWN** license status and no terms of use found anywhere on the source site (§5A, §8), and that pushing them to a public repo is real public redistribution. The operator chose to push them as-is anyway. That is a deliberate, informed decision — not an oversight to be silently "corrected" later. If a future session believes those files should be removed from the public repo (e.g. after an actual legal review, or a takedown request), raise it explicitly and get a decision; do not remove them unilaterally.

**Ongoing sync rule (mandatory going forward):** every session that adds, edits, or removes any file in this repository must `git add`, commit with a message describing what changed and why, and `git push origin main` before ending the session. This is now part of "ending a phase," alongside the reporting-format requirement in §7. A session that changes files and doesn't push them has left the local copy and the public remote out of sync, which defeats the point of being on GitHub at all. If a push fails (conflict, auth, etc.), stop and report it — don't leave changes uncommitted, and don't force-push over remote history without being told to.

---

## 12. Change log

- **2026-08-23:** Initial consolidation. Reviewed `MacEvil.md` and `Project ATLAS-WebSite.txt`; resolved repo-location, FLOCK/ALPR policy, and architecture-scope questions. Reviewed `docs/INDOT-handoff-primary.md`; resolved product-identity conflict ("merge the concepts") and confirmed `video_api_captures.json` is permanently lost. Reviewed `docs/INDOT-handoff-supplemental.md`; recorded the GraphQL/HLS path as recovered-memory requiring re-verification, and flagged its access-policy status as distinct from the CARS-Hub XML feeds. Fetched and hashed a live copy of the CARS-Hub feed portal (§5A). Superseded `ATLAS-PROMPT-AMENDMENTS.md` by folding its content in here.
- **2026-08-23 (later same day):** Connected to GitHub remote `3Gs-Services-LLC/ProjectATLAS` (public). Operator explicitly chose to include the unverified-license CARS-Hub data in the public push after being told the risk — recorded above in §11, not to be silently revisited.
