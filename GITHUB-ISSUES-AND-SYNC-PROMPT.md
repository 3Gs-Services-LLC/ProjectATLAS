You are Claude Code running locally in `C:\Websites\ProjectATLAS`, already a git repo synced with `https://github.com/3Gs-Services-LLC/ProjectATLAS`. Two things to do this session.

## Part 1 — File the human-only open items as GitHub Issues

Read `projectatlas.md` §9 first — it lists three human-only items that need to exist as GitHub Issues (status-only, no due dates, since none of these are on a controllable timeline):

1. **Label `needs-outreach`** — Title: "Decide + act: request CARS-Hub credentials for feu-m/feu-w". Body: summarize that `/data/feu-m.xml` and `/data/feu-w.xml` on `inhub.carsprogram.org` returned HTTP 401 on direct fetch (see `sources/indot-cars-hub/SOURCE-RECORD.md`), and this is a decision for the operator on whether to pursue INDOT/Castle Rock credentials.
2. **Label `needs-legal`** — Title: "Legal review: CARS-Hub public redistribution + 511in.org terms of use". Body: reference `projectatlas.md` §11 (the operator's informed decision to push unverified-license CARS-Hub data publicly) and §5B (511in.org's GraphQL/HLS path has no confirmed terms of use). Note the operator has counsel already engaged — this issue is the router to hand that work to them, not a request to find counsel.
3. **Label `needs-input`** — Title: "Locate the old Electron INDOT viewer project folder (or confirm it's gone)". Body: reference `projectatlas.md` §3 and `docs/INDOT-handoff-primary.md`. Before asking the operator again, actually search this machine's filesystem for characteristic filenames — `main.js` + `preload.js` + `renderer.js` together, or `INDOT-Live-Camera.exe` — across likely locations (Desktop, Documents, common dev folders). Only fall back to asking the operator if nothing turns up.

Use `gh issue create` for each (create the three labels first with `gh label create` if they don't already exist on the repo — check with `gh label list` first). Confirm each issue was created by listing them back with `gh issue list`.

If `gh` isn't authenticated (`gh auth status` fails), stop and tell the operator rather than trying to work around it — don't fall back to any other method of creating these.

## Part 2 — Commit and push the pending documentation changes

This session's Cowork thread already made several file edits directly (not yet committed): `MacEvil.md` (added cross-reference notes at §92/§122/§79), `ASSETS.md` (new file), `projectatlas.md` (multiple updates — FLOCK policy refinement, the open-items restructure, the legal-counsel note, this version-control section), and `Project ATLAS-WebSite.txt` was renamed to `Project ATLAS-WebSite.md`.

1. `git status` to see what's actually pending.
2. `git add -A`.
3. Commit with a message describing this as documentation consolidation: cross-references added to MacEvil.md, FLOCK/ALPR policy refined, open items split between GitHub Issues and engineering backlog, asset documentation added, WebSite doc renamed for consistency.
4. `git push origin main`.
5. Report the final `git log --oneline -5`, `git remote -v`, and the `gh issue list` output from Part 1, so the operator can see both landed.

Per `projectatlas.md` §11: from here forward, every session that changes a file in this repo ends with exactly this add/commit/push sequence — don't leave anything pending.
