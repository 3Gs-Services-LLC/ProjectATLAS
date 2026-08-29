# ProjectATLAS state dataset

One folder per U.S. state, `<slug>/`, 50 in total. Each holds the state's record at
`<slug>/<slug>.md`, alongside four class subfolders (see below). Each record has two parts:

1. **Capability specification** - the working, editable statement of what ProjectATLAS will
   ingest from that state, broken out per capability (cameras, traffic, weather, scanners,
   ALPR/Flock, other). This starts empty and is filled in as sources are specified and verified.
2. **Source discovery dossier** - the imported research the specification is derived from.
   Treat it as evidence: record decisions in part 1 rather than rewriting part 2.

## Where this came from

Imported on 2026-08-28 from the 50 `.txt` dossiers in `project_atlas_state_data/`, one file per
state. The dossier prose is preserved verbatim; only heading levels were re-leveled so each
dossier nests under section 2 of its record, and the title / `State NN of 50` / `Research date`
lines were hoisted into YAML frontmatter.

Two things in the source needed a decision, both recorded in each file's frontmatter:

- **Dossier numbering.** The dossiers' own `State NN of 50` counter drifts from Vermont onward -
  Utah and Vermont both claim 44, and 49 is never used. `dossier_number` here is alphabetical
  position, which is unambiguous; where the source disagreed, its number is kept as
  `provenance.stated_dossier_number`.
- **Research dates.** Five dossiers (Tennessee, Texas, Utah, Vermont, Virginia) carry a
  "Research target" line instead of a "Research date" one. They are dated 2026-08-28 to match the
  rest of the batch and flagged with `research_date_source: inferred`; the other 45 are `stated`.

Two source filenames were also misspelled (`Deleware.txt`, `Massachesetts.txt`) and are corrected
here to `delaware.md` and `massachusetts.md`.

Note that `project_atlas_state_data/` is **not tracked in this repository** - it sits alongside the
checkout - so the `provenance.imported_from` paths are a record of where each record came from, not
a link you can follow from here. These records are the tracked copy.

**Read [`NOTICE.md`](NOTICE.md) before relying on anything in section 2 of these records.** Two
things are unresolved: which of the repository's three licence statuses covers this directory, and
the fact that no dossier finding has been independently verified by the project - a dossier marking
an endpoint `CONFIRMED` means the researcher found documentation for it, nothing more.

## Frontmatter schema

```yaml
state: Alabama              # full state name
usps: AL                    # two-letter postal code
slug: alabama               # filename stem; lowercase, hyphenated
dossier_number: 1           # 1-50, alphabetical
research_date: 2026-08-28   # date of the underlying research
research_date_source: stated  # stated | inferred
spec_status: draft          # draft | in-review | ready
capabilities:               # rolled-up status per capability, mirrors section 1
  traffic_cameras: unspecified
  traffic_conditions: unspecified
  weather: unspecified
  scanners: unspecified
  alpr_flock: unspecified
  other: unspecified
provenance:
  imported_from: project_atlas_state_data/Alabama.txt
  imported_on: 2026-08-28
  stated_dossier_number: null   # set only where the source disagreed
  transform: ...
```

### Capability status vocabulary

| Status | Meaning |
| --- | --- |
| `unspecified` | Not yet looked at for this state. The import default. |
| `researching` | Being worked; the dossier has leads but nothing is settled. |
| `none-found` | Looked for it; no public source exists. |
| `confirmed` | A real public source is identified and documented. |
| `credential-gated` | Publicly documented, but needs a key or registration. |
| `blocked` | A source exists but is technically or legally unusable. |
| `excluded` | Deliberately out of scope (e.g. restricted government systems). |
| `live` | Ingested by ProjectATLAS and serving. |

Keep the `capabilities:` block in frontmatter in sync with the section 1 table - frontmatter is
what tooling reads, the table is what people read.

## The 50 states

| # | State | Code | Record | Research date | Spec status |
| --- | --- | --- | --- | --- | --- |
| 1 | Alabama | AL | [`alabama/alabama.md`](alabama/alabama.md) | 2026-08-28 | draft |
| 2 | Alaska | AK | [`alaska/alaska.md`](alaska/alaska.md) | 2026-08-28 | draft |
| 3 | Arizona | AZ | [`arizona/arizona.md`](arizona/arizona.md) | 2026-08-28 | draft |
| 4 | Arkansas | AR | [`arkansas/arkansas.md`](arkansas/arkansas.md) | 2026-08-28 | draft |
| 5 | California | CA | [`california/california.md`](california/california.md) | 2026-08-28 | draft |
| 6 | Colorado | CO | [`colorado/colorado.md`](colorado/colorado.md) | 2026-08-28 | draft |
| 7 | Connecticut | CT | [`connecticut/connecticut.md`](connecticut/connecticut.md) | 2026-08-28 | draft |
| 8 | Delaware | DE | [`delaware/delaware.md`](delaware/delaware.md) | 2026-08-28 | draft |
| 9 | Florida | FL | [`florida/florida.md`](florida/florida.md) | 2026-08-28 | draft |
| 10 | Georgia | GA | [`georgia/georgia.md`](georgia/georgia.md) | 2026-08-28 | draft |
| 11 | Hawaii | HI | [`hawaii/hawaii.md`](hawaii/hawaii.md) | 2026-08-28 | draft |
| 12 | Idaho | ID | [`idaho/idaho.md`](idaho/idaho.md) | 2026-08-28 | draft |
| 13 | Illinois | IL | [`illinois/illinois.md`](illinois/illinois.md) | 2026-08-28 | draft |
| 14 | Indiana | IN | [`indiana/indiana.md`](indiana/indiana.md) | 2026-08-28 | draft |
| 15 | Iowa | IA | [`iowa/iowa.md`](iowa/iowa.md) | 2026-08-28 | draft |
| 16 | Kansas | KS | [`kansas/kansas.md`](kansas/kansas.md) | 2026-08-28 | draft |
| 17 | Kentucky | KY | [`kentucky/kentucky.md`](kentucky/kentucky.md) | 2026-08-28 | draft |
| 18 | Louisiana | LA | [`louisiana/louisiana.md`](louisiana/louisiana.md) | 2026-08-28 | draft |
| 19 | Maine | ME | [`maine/maine.md`](maine/maine.md) | 2026-08-28 | draft |
| 20 | Maryland | MD | [`maryland/maryland.md`](maryland/maryland.md) | 2026-08-28 | draft |
| 21 | Massachusetts | MA | [`massachusetts/massachusetts.md`](massachusetts/massachusetts.md) | 2026-08-28 | draft |
| 22 | Michigan | MI | [`michigan/michigan.md`](michigan/michigan.md) | 2026-08-28 | draft |
| 23 | Minnesota | MN | [`minnesota/minnesota.md`](minnesota/minnesota.md) | 2026-08-28 | draft |
| 24 | Mississippi | MS | [`mississippi/mississippi.md`](mississippi/mississippi.md) | 2026-08-28 | draft |
| 25 | Missouri | MO | [`missouri/missouri.md`](missouri/missouri.md) | 2026-08-28 | draft |
| 26 | Montana | MT | [`montana/montana.md`](montana/montana.md) | 2026-08-28 | draft |
| 27 | Nebraska | NE | [`nebraska/nebraska.md`](nebraska/nebraska.md) | 2026-08-28 | draft |
| 28 | Nevada | NV | [`nevada/nevada.md`](nevada/nevada.md) | 2026-08-28 | draft |
| 29 | New Hampshire | NH | [`new-hampshire/new-hampshire.md`](new-hampshire/new-hampshire.md) | 2026-08-28 | draft |
| 30 | New Jersey | NJ | [`new-jersey/new-jersey.md`](new-jersey/new-jersey.md) | 2026-08-28 | draft |
| 31 | New Mexico | NM | [`new-mexico/new-mexico.md`](new-mexico/new-mexico.md) | 2026-08-28 | draft |
| 32 | New York | NY | [`new-york/new-york.md`](new-york/new-york.md) | 2026-08-28 | draft |
| 33 | North Carolina | NC | [`north-carolina/north-carolina.md`](north-carolina/north-carolina.md) | 2026-08-28 | draft |
| 34 | North Dakota | ND | [`north-dakota/north-dakota.md`](north-dakota/north-dakota.md) | 2026-08-28 | draft |
| 35 | Ohio | OH | [`ohio/ohio.md`](ohio/ohio.md) | 2026-08-28 | draft |
| 36 | Oklahoma | OK | [`oklahoma/oklahoma.md`](oklahoma/oklahoma.md) | 2026-08-28 | draft |
| 37 | Oregon | OR | [`oregon/oregon.md`](oregon/oregon.md) | 2026-08-28 | draft |
| 38 | Pennsylvania | PA | [`pennsylvania/pennsylvania.md`](pennsylvania/pennsylvania.md) | 2026-08-28 | draft |
| 39 | Rhode Island | RI | [`rhode-island/rhode-island.md`](rhode-island/rhode-island.md) | 2026-08-28 | draft |
| 40 | South Carolina | SC | [`south-carolina/south-carolina.md`](south-carolina/south-carolina.md) | 2026-08-28 | draft |
| 41 | South Dakota | SD | [`south-dakota/south-dakota.md`](south-dakota/south-dakota.md) | 2026-08-28 | draft |
| 42 | Tennessee | TN | [`tennessee/tennessee.md`](tennessee/tennessee.md) | 2026-08-28 *(inferred)* | draft |
| 43 | Texas | TX | [`texas/texas.md`](texas/texas.md) | 2026-08-28 *(inferred)* | draft |
| 44 | Utah | UT | [`utah/utah.md`](utah/utah.md) | 2026-08-28 *(inferred)* | draft |
| 45 | Vermont | VT | [`vermont/vermont.md`](vermont/vermont.md) | 2026-08-28 *(inferred)* | draft |
| 46 | Virginia | VA | [`virginia/virginia.md`](virginia/virginia.md) | 2026-08-28 *(inferred)* | draft |
| 47 | Washington | WA | [`washington/washington.md`](washington/washington.md) | 2026-08-28 | draft |
| 48 | West Virginia | WV | [`west-virginia/west-virginia.md`](west-virginia/west-virginia.md) | 2026-08-28 | draft |
| 49 | Wisconsin | WI | [`wisconsin/wisconsin.md`](wisconsin/wisconsin.md) | 2026-08-28 | draft |
| 50 | Wyoming | WY | [`wyoming/wyoming.md`](wyoming/wyoming.md) | 2026-08-28 | draft |

All 50 records are at `spec_status: draft` with every capability `unspecified` - the dossiers are
imported, but no specification has been written yet.

## Layout

```
data/states/
  _TEMPLATE.md                  <- copy this to start a new record
  README.md  NOTICE.md
  <slug>/
    <slug>.md                   <- the state record (frontmatter + sections 1 and 2)
    events/                     <- discrete timestamped occurrences
    sensor-observations/        <- periodic readings from fixed instruments
    media-streams/              <- camera/video/audio feeds
    documents-static-datasets/  <- policies, records requests, bulk/GIS snapshots
```

The four class subfolders were **specified by the operator in session on 2026-08-29**. They are
currently scaffolds: each carries a README stating its purpose, and only `indiana/` holds any
evidence so far. Nothing in the codebase reads them, and `ADR-0002` still defines a two-class
`normalize()` return type - creating these folders did not change that. See `projectatlas.md` §9
for the open questions about what ultimately consumes them.

## Adding a state record

Create `data/states/<slug>/`, copy `_TEMPLATE.md` to `<slug>/<slug>.md`, fill in the frontmatter,
and write section 1. Add the four class subfolders (`events/`, `sensor-observations/`,
`media-streams/`, `documents-static-datasets/`), each with a short README describing its purpose
and its current state. Territories and the District of Columbia are not in this dataset;
ProjectATLAS is USA-only and currently state-scoped.
