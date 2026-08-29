# indiana / events

**Discrete, timestamped occurrences with a beginning and an end.** Incidents, crashes, work zones and lane closures (WZDx), road closures, detours, emergency alerts and disaster declarations - anything that happens at a point in time and then stops being true.

**Scaffold only - nothing consumes this folder yet.** No adapter code reads it, and `ADR-0002` remains ACCEPTED with a two-class `normalize()` return type (`NormalizedCamera | NormalizedEvent`), deliberately *not* extended to four classes as a side effect of creating these directories. The operator's stated intent is that these folders will hold `sources/` evidence reorganized by class; until that migration is designed, treat an empty folder here as "not yet populated," never as "nothing exists for this state." See `projectatlas.md` §9 for the open questions and §10 for the rule.

This four-class scheme (`events` / `sensor-observations` / `media-streams` / `documents-static-datasets`) was **specified by the operator in session on 2026-08-29**. It is not drawn from `MacEvil.md`, `Project ATLAS-WebSite.md`, or any ADR - a repo-wide search confirms it appears in none of them - so it should be cited as an operator decision, not as something a reference document established.
