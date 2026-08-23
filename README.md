# ProjectATLAS

USA Open Source Camera System

ProjectATLAS is a public, USA-only website surfacing publicly available information the public has a legal right to see: traffic cameras, traffic conditions, weather, ALPR/"FLOCK" camera *locations* (not their data), and other legitimately public camera sources.

**Start here:** read [`projectatlas.md`](projectatlas.md) in full before touching any other document or writing any code. It is the single source of truth for this project — every resolved decision, current verified state, non-negotiable rule, and open item lives there, and it takes precedence over every other document in this repository if they disagree.

## License

This repository has **three different license/rights statuses** depending on what you're looking at — don't assume one covers the other:

- **Code** (once it exists — none has been written yet as of this date) is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See [`LICENSE`](LICENSE) for the full text. AGPL-3.0 was chosen specifically because ProjectATLAS is a network service: unlike plain GPL, it requires anyone who runs a modified version of this code as a hosted service to release their modified source to that service's users — a deliberate choice to prevent a clone-and-relaunch competitor from taking the code without reciprocating.
- **`MacEvil.md` and `projectatlas.md`** — the operator's doctrine and methodology documents — are **proprietary to 3Gs Services LLC, all rights reserved**, and are explicitly **not** covered by the AGPL-3.0 grant above. Each carries its own notice at the top of the file.
- **Third-party data under `sources/`** carries its own per-source license status, documented individually in each source's `SOURCE-RECORD.md` and, where a source's status is unresolved, a `NOTICE.md` in that source's directory. The repository-wide AGPL-3.0 grant does **not** extend to this third-party data — check the specific source's documentation before assuming any redistribution right.
