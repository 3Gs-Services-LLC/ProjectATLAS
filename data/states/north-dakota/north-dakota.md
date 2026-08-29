---
state: North Dakota
usps: ND
slug: north-dakota
dossier_number: 34
research_date: 2026-08-28
research_date_source: stated
spec_status: draft
capabilities:
  traffic_cameras: unspecified
  traffic_conditions: unspecified
  weather: unspecified
  scanners: unspecified
  alpr_flock: unspecified
  other: unspecified
provenance:
  imported_from: project_atlas_state_data/North Dakota.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# North Dakota (ND) - ATLAS State Record

> Dossier **34 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

Two parts. **Section 1** is the working specification of what ProjectATLAS will actually
ingest from this state - edit it as sources are verified. **Section 2** is the imported
research dossier it derives from - treat that as evidence and leave it as written.

---

## 1. Capability specification

| # | Capability | Status | Primary public source | Machine-readable | Notes |
| --- | --- | --- | --- | --- | --- |
| 1.1 | [Traffic cameras](#11-traffic-cameras) | `unspecified` | | | |
| 1.2 | [Traffic conditions and incidents](#12-traffic-conditions-and-incidents) | `unspecified` | | | |
| 1.3 | [Weather and road weather](#13-weather-and-road-weather) | `unspecified` | | | |
| 1.4 | [Scanners and public-safety radio](#14-scanners-and-public-safety-radio) | `unspecified` | | | |
| 1.5 | [ALPR / Flock camera locations](#15-alpr--flock-camera-locations) | `unspecified` | | | |
| 1.6 | [Other public sources](#16-other-public-sources) | `unspecified` | | | |

Status vocabulary: `unspecified` &middot; `researching` &middot; `none-found` &middot; `confirmed` &middot; `credential-gated` &middot; `blocked` &middot; `excluded` &middot; `live`.

### 1.1 Traffic cameras

Public DOT/agency CCTV: camera inventory, snapshot URLs, HLS/MJPEG streams.

| Field | Value |
| --- | --- |
| Status | `unspecified` |
| Operator / agency |  |
| Public system |  |
| Machine-readable endpoint(s) |  |
| Auth model |  |
| Media available |  |
| Record count |  |
| Geographic coverage |  |
| Update cadence |  |
| Terms / licence |  |
| ATLAS adapter |  |
| Last verified |  |
| Notes |  |

### 1.2 Traffic conditions and incidents

Incidents, construction and work zones (WZDx), congestion, DMS, road conditions.

| Field | Value |
| --- | --- |
| Status | `unspecified` |
| Operator / agency |  |
| Public system |  |
| Machine-readable endpoint(s) |  |
| Auth model |  |
| Media available |  |
| Record count |  |
| Geographic coverage |  |
| Update cadence |  |
| Terms / licence |  |
| ATLAS adapter |  |
| Last verified |  |
| Notes |  |

### 1.3 Weather and road weather

RWIS/atmospheric sensors, road-surface conditions, NWS and state weather feeds.

| Field | Value |
| --- | --- |
| Status | `unspecified` |
| Operator / agency |  |
| Public system |  |
| Machine-readable endpoint(s) |  |
| Auth model |  |
| Media available |  |
| Record count |  |
| Geographic coverage |  |
| Update cadence |  |
| Terms / licence |  |
| ATLAS adapter |  |
| Last verified |  |
| Notes |  |

### 1.4 Scanners and public-safety radio

Statewide radio system, Broadcastify/RadioReference feeds, public CAD/dispatch.

| Field | Value |
| --- | --- |
| Status | `unspecified` |
| Operator / agency |  |
| Public system |  |
| Machine-readable endpoint(s) |  |
| Auth model |  |
| Media available |  |
| Record count |  |
| Geographic coverage |  |
| Update cadence |  |
| Terms / licence |  |
| ATLAS adapter |  |
| Last verified |  |
| Notes |  |

### 1.5 ALPR / Flock camera locations

Camera **locations only** - never their read data. Transparency portals, registries, policy records.

| Field | Value |
| --- | --- |
| Status | `unspecified` |
| Operator / agency |  |
| Public system |  |
| Machine-readable endpoint(s) |  |
| Auth model |  |
| Media available |  |
| Record count |  |
| Geographic coverage |  |
| Update cadence |  |
| Terms / licence |  |
| ATLAS adapter |  |
| Last verified |  |
| Notes |  |

### 1.6 Other public sources

Park/NPS/BLM webcams, transit, ports, aviation, municipal open data, anything else.

| Field | Value |
| --- | --- |
| Status | `unspecified` |
| Operator / agency |  |
| Public system |  |
| Machine-readable endpoint(s) |  |
| Auth model |  |
| Media available |  |
| Record count |  |
| Geographic coverage |  |
| Update cadence |  |
| Terms / licence |  |
| ATLAS adapter |  |
| Last verified |  |
| Notes |  |

---

## 2. Source discovery dossier (imported research)

North Dakota is a **very good camera state**, a **developing statewide-radio state**, and an **interesting ALPR state**. The important difference from North Carolina is that North Dakota's statewide radio modernization is still underway, and its NDDOT camera data has unusually explicit restrictions on systematic collection.

---

### 1. North Dakota Department of Transportation

Primary transportation agency:

**North Dakota Department of Transportation — NDDOT**

The public traveler-information system is:

### ND Roads / North Dakota 511

NDDOT describes ND Roads as its travel-information map containing:

* road conditions
* work zones
* road/weather cameras
* load restrictions
* weather radar
* other transportation information. ([NDDOT][1])

#### Registry

```text
SOURCE_ID:
    ND-NDDOT-511

OWNER:
    North Dakota Department of Transportation

PROGRAM:
    ND Roads / North Dakota 511

TYPE:
    STATEWIDE_TRAVEL_INFORMATION

STATUS:
    🟢 VERIFIED
```

---

### 2. NDDOT camera inventory

This is one of the strongest discoveries for North Dakota.

NDDOT publishes a dedicated machine-readable camera dataset:

```text
https://travelfiles.dot.nd.gov/geojson_nc/cameras.json
```

NDDOT's official Web Map Services page explicitly identifies it as:

> Camera locations with links to the camera images.

The geometry is **point**. ([NDDOT][2])

#### Registry

```text
SOURCE_ID:
    ND-NDDOT-CCTV-GEOJSON

ENDPOINT:
    https://travelfiles.dot.nd.gov/geojson_nc/cameras.json

FORMAT:
    GeoJSON

GEOMETRY:
    Point

CONTENT:
    Camera locations
    Camera-image links

AUTH:
    None identified

STATUS:
    🟢 VERIFIED
```

This is an **exact source**, not a screen-scraping target.

---

### 3. NDDOT ArcGIS travel map

NDDOT also publishes its underlying dynamic ArcGIS service:

```text
https://gis.dot.nd.gov/ArcGIS/rest/services/external/rcrs_dynamic/MapServer
```

The state identifies this as the dynamic REST service for layers contained in the NDDOT Travel Map. ([NDDOT][2])

#### Registry

```text
SOURCE_ID:
    ND-NDDOT-RCRS-DYNAMIC

TYPE:
    ARCGIS_REST_MAPSERVER

ENDPOINT:
    https://gis.dot.nd.gov/ArcGIS/rest/services/external/rcrs_dynamic/MapServer

FOOTPRINT:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

This should be investigated separately from `cameras.json`, because the ArcGIS service may expose additional camera-related attributes/layers that aren't represented identically in the standalone GeoJSON.

---

### 4. Camera imagery

NDDOT specifically describes the camera dataset as:

```text
Camera locations
        +
links to camera images
```

rather than simply a camera-point inventory. ([NDDOT][2])

Therefore the ATLAS source hierarchy should be:

```text
NDDOT CAMERA RECORD
│
├── coordinates
├── metadata
└── image URL
```

rather than assuming every camera has an HLS stream.

#### Classification

```text
LIVE_CAMERA:
    🟢

STILL_IMAGE:
    🟢

HLS:
    ❓ NOT ESTABLISHED

MJPEG:
    ❓ NOT ESTABLISHED

RECORDED_ARCHIVE:
    ❓
```

Do **not** classify the North Dakota cameras as HLS until an actual stream URL is verified.

---

### 5. NDRoads mobile application

NDDOT also distributes an official mobile application:

### ND Roads

The official application description confirms:

* interactive map
* travel messages
* weather cameras
* multiple camera views
* camera filtering
* route-based camera access. ([Google Play][3])

This is useful for **reverse-engineering the official client only if necessary**.

But we already have the better source:

```text
cameras.json
```

So the app should not be ATLAS's primary ingestion target.

---

### 6. NDDOT camera source classification

```text
ND-NDDOT-CCTV-GEOJSON
│
├── official government source
├── machine-readable
├── statewide
├── point geometry
├── image URLs
└── public
```

#### Quality

### 🟢 Excellent

This is one of the cleanest transportation-camera sources encountered in the project.

---

### 7. Critical restriction on NDDOT data

There is a major caveat.

NDDOT explicitly states that its web services:

* are intended for individual/non-commercial informational use
* prohibit systematic retrieval or compilation into a database/directory without express prior written consent
* are not intended for high-usage applications
* may be modified or discontinued
* have usage limitations. ([NDDOT][2])

The exact policy says systematic retrieval to create or compile a collection/database/directory is prohibited without express written consent. ([NDDOT][2])

#### ATLAS classification

```text
DATA_EXISTS:
    🟢

PUBLIC:
    🟢

MACHINE_READABLE:
    🟢

UNRESTRICTED_BULK_INGEST:
    🔴

PERMISSION_REQUIRED_FOR_SYSTEMATIC_DATABASE:
    🟢

STATUS:
    PUBLIC_DATA / RESTRICTED_USE
```

This is extremely important.

**We found the source, but we must not silently turn it into a nationwide commercial/public database without addressing NDDOT's stated terms.**

---

### 8. NDDOT refresh restriction

NDDOT additionally states:

> Please do not download at a cycle faster than 5 minutes.

([NDDOT][2])

Therefore:

```text
MINIMUM_REFRESH_INTERVAL:
    5 minutes

RECOMMENDED:
    ≥ 5 minutes

DO NOT:
    aggressive polling
```

For ATLAS source metadata:

```json
{
  "minimum_refresh_seconds": 300
}
```

---

### 9. NDDOT environmental sensors

North Dakota also publishes:

```text
https://travelfiles.dot.nd.gov/geojson_nc/ess.json
```

NDDOT describes this as:

> Devices that capture dynamic road and weather condition related information.

Geometry:

```text
Point
```

([NDDOT][2])

#### Registry

```text
SOURCE_ID:
    ND-NDDOT-ESS

TYPE:
    ROADWAY_ENVIRONMENTAL_SENSOR

FORMAT:
    GeoJSON

GEOMETRY:
    Point

STATUS:
    🟢 VERIFIED
```

This isn't a camera source, but it is highly relevant to the project's broader **camera + traffic + weather** data architecture.

---

### 10. NDDOT alerts

Exact machine-readable source:

```text
https://travelfiles.dot.nd.gov/geojson_nc/alerts.json
```

NDDOT describes it as containing:

* incidents
* warnings
* events
* localized road closures. ([NDDOT][2])

#### Registry

```text
SOURCE_ID:
    ND-NDDOT-ALERTS

FORMAT:
    GeoJSON

GEOMETRY:
    Point

TYPE:
    TRAFFIC_EVENTS

STATUS:
    🟢 VERIFIED
```

---

### 11. NDDOT work zones

Exact source:

```text
https://travelfiles.dot.nd.gov/geojson_nc/workzones.json
```

NDDOT identifies it as the work-zone dataset. ([NDDOT][2])

There is also a WZDx dataset:

```text
https://travelfiles.dot.nd.gov/geojson_nc/wzdx_geojson.json
```

([NDDOT][2])

#### Registry

```text
ND-NDDOT-WORKZONES
ND-NDDOT-WZDX
```

Both are worth ingesting separately.

---

### 12. NDDOT roads

Exact source:

```text
https://travelfiles.dot.nd.gov/geojson_nc/roads.json
```

NDDOT identifies this as current road conditions from NDRoads. ([NDDOT][2])

#### Registry

```text
SOURCE_ID:
    ND-NDDOT-ROAD-CONDITIONS

FORMAT:
    GeoJSON

TYPE:
    CURRENT_ROAD_CONDITIONS
```

---

### 13. North Dakota ALPR

North Dakota is particularly interesting because there is **documented active ALPR use**, but there is no statewide public ALPR feed.

The 2025 North Dakota legislative record contains testimony from the North Dakota Bureau of Criminal Investigation concerning ALPR deployment.

The testimony explicitly states that:

* Fargo Police Department uses ALPR
* Bismarck Police Department uses ALPR
* other agencies use ALPR
* NDBCI itself pursued an arrangement involving NDDOT infrastructure. ([North Dakota Legislative Branch][4])

---

### 14. NDDOT ALPR infrastructure proposal

Beginning in 2022, NDBCI began discussions with NDDOT about using NDDOT infrastructure for ALPR systems.

NDDOT initially supported the concept but its legal department concluded in March 2024 that it lacked authority to allow another state agency to install equipment on street poles. ([North Dakota Legislative Branch][5])

The dispute resulted in legislation:

### HB 1050

which would have authorized NDDOT cooperative agreements with:

* city
* county
* state
* federal
* tribal

law-enforcement agencies concerning license plate readers. ([North Dakota Legislative Branch][6])

---

### 15. HB 1050 status

This is important because it **failed**.

The official legislative record says:

```text
HB 1050
69th Legislative Assembly

STATUS:
    FAILED

LAST ACTION:
    Second reading

VOTE:
    42 yeas
    51 nays
```

([North Dakota Legislative Branch][6])

Therefore ATLAS must **not** record HB 1050 as authorization for a statewide NDDOT ALPR program.

Correct status:

```text
NDDOT ALPR COOPERATIVE AUTHORITY BILL:
    🔴 FAILED
```

---

### 16. Fargo ALPR

Fargo Police Department is one of the clearest documented North Dakota ALPR deployments.

The official Fargo Police policy manual contains:

### Policy 428 — Automated License Plate Readers (ALPR)

([City of Fargo][7])

The policy states that ALPR data/images are for official Fargo Police use and that stationary ALPR locations are treated as exempt from public review under the department's interpretation of North Dakota law. ([Fargo Download][8])

#### Registry

```text
SOURCE_ID:
    ND-FARGO-PD-ALPR

AGENCY:
    Fargo Police Department

TYPE:
    LAW_ENFORCEMENT_ALPR

STATUS:
    🟢 VERIFIED
```

---

### 17. Fargo ALPR history

Fargo's ALPR deployment goes back years.

The Atlas of Surveillance records:

```text
2010:
    ALPRs installed on squad cars

2018:
    4 additional ALPRs purchased

VENDOR:
    PIPS Technology

2024:
    Flock Safety technology approved
```

([Atlas of Surveillance][9])

This gives us an actual vendor/deployment timeline.

---

### 18. Fargo Flock deployment

Fargo subsequently approved Flock Safety technology.

The Atlas of Surveillance records the 2024 approval. ([Atlas of Surveillance][9])

Local reporting in April 2026 reported that the Fargo-Moorhead region had approximately:

### 87 Flock/ALPR cameras

reported through the community-maintained DeFlock/OpenStreetMap dataset. ([The Mighty 790 KFGO | KFGO][10])

**Important:** that 87 figure is **not an official government inventory**.

Therefore:

```text
87:
    🟡 COMMUNITY-REPORTED

Fargo ALPR deployment:
    🟢 OFFICIALLY VERIFIED

EXACT CURRENT COUNT:
    ❓
```

Do not put 87 into the authoritative government inventory.

---

### 19. West Fargo

The Atlas of Surveillance also reports:

### 47 Flock Safety ALPRs

for West Fargo Police Department. ([Atlas of Surveillance][11])

#### Registry

```text
SOURCE_ID:
    ND-WEST-FARGO-PD-ALPR

AGENCY:
    West Fargo Police Department

VENDOR:
    Flock Safety

COUNT:
    47

STATUS:
    🟢 REPORTED / SECONDARY-SOURCE VERIFIED
```

I would still seek the underlying city contract or council record before assigning this a "primary-source verified" designation.

---

### 20. North Dakota ALPR map data

There is also a community OpenStreetMap-derived dataset currently reporting:

### 145 Flock/ALPR cameras

across North Dakota as of August 15, 2026. ([Flock Camera Locations][12])

This should be stored as:

```text
SOURCE:
    COMMUNITY_OSM

TYPE:
    ALPR_LOCATION_DISCOVERY

COUNT:
    145

DATE:
    2026-08-15

CONFIDENCE:
    MEDIUM

AUTHORITATIVE:
    🔴
```

It is useful for **discovery**, not as authoritative deployment evidence.

---

### 21. North Dakota ALPR situation

The correct picture is therefore:

```text
NORTH DAKOTA ALPR
│
├── Fargo PD
│   ├── historical PIPS deployment
│   └── Flock deployment
│
├── West Fargo PD
│   └── Flock
│
├── Bismarck PD
│   └── ALPR confirmed
│
├── other agencies
│   └── ALPR reported/confirmed
│
├── NDBCI
│   └── attempted NDDOT infrastructure agreement
│
└── statewide NDDOT ALPR authority
    └── HB 1050 FAILED
```

---

### 22. ALPR raw-data availability

This is **not** a public raw ALPR-data state.

Fargo's policy specifically says ALPR data and stationary locations are treated as exempt from public review under its policy/legal interpretation. ([Fargo Download][8])

Therefore:

```text
PUBLIC ALPR INVENTORY:
    🟡 PARTIAL

PUBLIC ALPR LOCATIONS:
    🟡 PARTIAL

PUBLIC LIVE ALPR API:
    🔴

PUBLIC PLATE DATABASE:
    🔴

PUBLIC HISTORICAL PLATE QUERIES:
    🔴
```

---

### 23. North Dakota statewide radio — SIRN

The major statewide public-safety communications project is:

### Statewide Interoperable Radio Network — SIRN

North Dakota Information Technology says SIRN is being built as the unified statewide public-safety radio network. ([North Dakota Information Technology][13])

It uses:

### APCO P25

and trunked radio technology. ([North Dakota Information Technology][13])

---

### 24. SIRN scale

NDIT currently describes:

```text
FUNDING:
    $120 million

TOWER SITES:
    140 planned

RADIO STANDARD:
    P25

NETWORK:
    statewide

COMPLETION:
    2027
```

([North Dakota Information Technology][13])

#### Registry

```text
SOURCE_ID:
    ND-SIRN

OWNER:
    North Dakota Information Technology

TYPE:
    STATEWIDE_PUBLIC_SAFETY_LMR

STANDARD:
    APCO P25

TARGET_COMPLETION:
    2027

STATUS:
    🟢 ACTIVE / UNDER CONSTRUCTION
```

---

### 25. SIRN is already operational

This is not simply a future project.

NDIT reports that these counties have already transitioned:

```text
Bottineau
Burleigh
Cavalier
Grand Forks
Morton
Renville
Richland
Stark
Steele
Towner
Traill
Ward
Williams
```

([North Dakota Information Technology][13])

Upcoming transitions include:

```text
Barnes
Divide
Grant
McLean
Mercer
Mountrail
Oliver
Rolette
```

([North Dakota Information Technology][13])

Therefore SIRN should be treated as:

```text
ACTIVE
+
PARTIALLY DEPLOYED
+
EXPANDING
```

not "planned."

---

### 26. SIRN radio requirements

NDIT states radios operating on SIRN must support:

* P25
* trunking
* wireless encryption rekeying and other required features. ([North Dakota Information Technology][13])

The network was designed from the outset around P25 Phase 2 technology. The original procurement documentation explicitly says the proposed system would operate as P25 Phase 2 initially. ([North Dakota Information Technology][14])

#### Registry

```text
STANDARD:
    P25

MODE:
    PHASE 2 / TDMA

TRUNKING:
    YES
```

---

### 27. Legacy North Dakota radio

SIRN does not mean every agency immediately stopped using every legacy radio system.

NDIT explicitly says agencies can still have analog radios during transition, although those radios will not operate on SIRN. ([North Dakota Information Technology][13])

Therefore ATLAS should model:

```text
NORTH DAKOTA RADIO
│
├── SIRN
│   └── P25 Phase 2
│
└── Legacy local systems
    ├── VHF
    ├── UHF
    └── other local systems
```

---

### 28. North Dakota State Radio

Separate from the new SIRN project, North Dakota's Department of Emergency Services operates the State Emergency Communications Center / State Radio functions.

The center:

* provides public-safety communications
* is the primary dispatch center for North Dakota Highway Patrol
* supports 26 counties
* provides backup services to other PSAPs
* serves more than 4,000 users representing 287 federal, state, local and tribal agencies. ([ND Emergency Services][15])

#### Registry

```text
SOURCE_ID:
    ND-STATE-RADIO

TYPE:
    STATE_EMERGENCY_COMMUNICATIONS

USERS:
    4,000+

AGENCIES:
    287

PRIMARY_STATE_AGENCY:
    ND HIGHWAY PATROL
```

---

### 29. Statewide paging

North Dakota also identifies a:

### Statewide Paging System

as part of its emergency communications infrastructure. ([ND Emergency Services][15])

That should be catalogued separately from voice radio.

```text
SOURCE_ID:
    ND-STATEWIDE-PAGING

TYPE:
    PUBLIC_SAFETY_PAGING

STATUS:
    🟢 VERIFIED
```

The exact public feed/interface still needs a separate investigation.

---

### 30. State frequency coordination

The State Emergency Communications Center also identifies:

### Statewide Frequency Coordination System

as part of its public-safety communications services. ([ND Emergency Services][15])

Again, this is useful metadata but **not itself a public live scanner feed**.

---

### 31. Public scanner coverage

North Dakota has a surprisingly strong public scanner ecosystem.

Current Broadcastify state statistics show:

### 87 North Dakota feeds

in the statewide directory. ([Broadcastify][16])

#### Registry

```text
SOURCE_ID:
    ND-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

CURRENT_FEEDS:
    87

STATUS:
    🟢 VERIFIED
```

This number is dynamic and should be timestamped whenever ingested.

---

### 32. Broadcastify is not the radio-system owner

This distinction matters.

```text
SIRN / STATE RADIO
        │
        ▼
actual RF infrastructure
        │
        ▼
scanner receivers
        │
        ▼
Broadcastify
        │
        ▼
public audio
```

Broadcastify is therefore a **public distribution layer**, not the authoritative North Dakota radio-network source.

---

### 33. Broadcastify Calls

Broadcastify also operates its managed:

### Calls

platform using software-defined receivers.

The overall Broadcastify system currently reports more than:

```text
1,000 Calls nodes
```

nationwide. ([Broadcastify][17])

North Dakota-specific Calls coverage should be treated separately from the 87 conventional audio-feed count.

---

### 34. Official scanner feeds

Broadcastify also supports feeds provided directly by public-safety agencies.

Its official-feed directory explains that these are broadcasts provided by the public-safety agencies themselves. ([Broadcastify][18])

For North Dakota, any official-agency feed discovered should receive:

```text
PROVIDER_TYPE:
    OFFICIAL_AGENCY

CONFIDENCE:
    HIGH
```

rather than being lumped together with community-hosted scanner feeds.

---

### 35. North Dakota source architecture

The state now looks like this:

```text
NORTH DAKOTA
│
├── NDDOT
│   │
│   └── ND Roads / 511
│       │
│       ├── CCTV / cameras
│       │   └── cameras.json
│       │
│       ├── ArcGIS RCRS
│       │
│       ├── alerts.json
│       │
│       ├── roads.json
│       │
│       ├── workzones.json
│       │
│       ├── WZDx
│       │
│       └── ESS sensors
│
├── NDBCI
│   └── ALPR program / coordination
│
├── LOCAL LAW ENFORCEMENT
│   ├── Fargo ALPR
│   ├── West Fargo ALPR
│   ├── Bismarck ALPR
│   └── other ALPR deployments
│
├── NDIT
│   └── SIRN
│       └── P25 Phase 2
│
├── ND DEPARTMENT OF EMERGENCY SERVICES
│   └── State Radio
│
└── PUBLIC AUDIO
    └── Broadcastify
        └── ~87 feeds
```

---

### 36. Exact source registry

#### Camera

```json
{
  "source_id": "ND-NDDOT-CCTV-GEOJSON",
  "state": "ND",
  "owner": "North Dakota Department of Transportation",
  "program": "ND Roads",
  "type": "traffic_camera_inventory",
  "endpoint": "https://travelfiles.dot.nd.gov/geojson_nc/cameras.json",
  "format": "GeoJSON",
  "geometry": "Point",
  "content": "camera locations and image links",
  "authentication": "none identified",
  "systematic_ingest": "restricted",
  "refresh_floor_seconds": 300,
  "confidence": "high"
}
```

---

#### ArcGIS

```json
{
  "source_id": "ND-NDDOT-RCRS-DYNAMIC",
  "state": "ND",
  "owner": "North Dakota Department of Transportation",
  "type": "ArcGIS REST MapServer",
  "endpoint": "https://gis.dot.nd.gov/ArcGIS/rest/services/external/rcrs_dynamic/MapServer",
  "footprint": "statewide",
  "confidence": "high"
}
```

---

#### ALPR

```json
{
  "source_id": "ND-ALPR-LAW-ENFORCEMENT",
  "state": "ND",
  "type": "law_enforcement_ALPR",
  "known_agencies": [
    "Fargo Police Department",
    "Bismarck Police Department",
    "West Fargo Police Department"
  ],
  "public_live_data": false,
  "confidence": "high"
}
```

---

#### State radio

```json
{
  "source_id": "ND-SIRN",
  "state": "ND",
  "owner": "North Dakota Information Technology",
  "type": "statewide_public_safety_radio",
  "standard": "P25 Phase 2",
  "planned_tower_sites": 140,
  "target_completion": 2027,
  "status": "active_deployment",
  "confidence": "high"
}
```

---

#### Scanner

```json
{
  "source_id": "ND-BROADCASTIFY",
  "state": "ND",
  "type": "public_scanner_audio",
  "feeds": 87,
  "observed": "2026-08-28",
  "confidence": "high"
}
```

---

### 37. Important ATLAS warning

North Dakota is an excellent example of why **"publicly accessible" does not automatically mean "safe to bulk ingest."**

The NDDOT data is:

```text
PUBLIC:
    YES

MACHINE-READABLE:
    YES

EXACT CAMERA LOCATIONS:
    YES

IMAGE LINKS:
    YES

SYSTEMATIC DATABASE COMPILATION:
    RESTRICTED BY NDDOT TERMS
```

NDDOT explicitly prohibits systematic retrieval to create or compile a database/directory without express written consent. ([NDDOT][2])

So this source should remain in the ATLAS **discovery/source registry**, but any production-scale ingestion needs to respect that restriction.

---

### 38. North Dakota assessment

| Category                          |            Rating |
| --------------------------------- | ----------------: |
| State traffic cameras             |  🟢 **Excellent** |
| Machine-readable camera inventory |  🟢 **Excellent** |
| GeoJSON                           |                🟢 |
| ArcGIS                            |                🟢 |
| Camera image URLs                 |                🟢 |
| Live video                        |                🟡 |
| Camera bulk-use rights            | 🔴 **Restricted** |
| Road/weather sensors              |                🟢 |
| Traffic events                    |                🟢 |
| WZDx                              |                🟢 |
| ALPR existence                    |                🟢 |
| ALPR public inventory             |                🟡 |
| ALPR live data                    |                🔴 |
| Statewide P25 system              |  🟢 **Excellent** |
| SIRN deployment                   |                🟢 |
| Statewide radio complete          |  🟡 — 2027 target |
| Public scanner feeds              |                🟢 |
| Public scanner quantity           |           🟢 — 87 |
| Public statewide ALPR feed        |                🔴 |

### **Overall: 8.7 / 10**

North Dakota is especially valuable for three reasons:

### **1. Exact machine-readable camera source**

```text
https://travelfiles.dot.nd.gov/geojson_nc/cameras.json
```

Official NDDOT documentation confirms it contains camera locations and image links. ([NDDOT][2])

### **2. Strong statewide radio modernization**

SIRN is an active statewide P25 Phase 2 deployment with **140 planned tower sites**, targeting completion in 2027. ([North Dakota Information Technology][13])

### **3. Confirmed ALPR deployments**

Fargo, Bismarck, West Fargo and other North Dakota agencies have documented ALPR use. Fargo's official policy specifically addresses ALPR operation, data, retention and disclosure. ([City of Fargo][7])

But the big caveat is **NDDOT's explicit restriction against systematic database compilation without written permission**. That needs to remain attached to the source record.

**North Dakota is complete.**

#### Next alphabetically: **Ohio**.

[1]: https://www.dot.nd.gov/travel-and-safety/safety/north-dakota-511?utm_source=chatgpt.com "North Dakota 511 | NDDOT"
[2]: https://www.dot.nd.gov/construction-and-planning/planning-process/gis-and-mapping/web-map-services "Web Map Services | NDDOT"
[3]: https://play.google.com/store/apps/details?id=gov.nd.dot.travelmap&utm_source=chatgpt.com "ND Roads (North Dakota Travel) - Apps on Google Play"
[4]: https://ndlegis.gov/files/resource/69-2025/library/hb1050.pdf?utm_source=chatgpt.com "understanding that NDDOT would then enter into the necessary agreements with law enforcement to protect North Dakotans. This bill is a result of those efforts and would provide NDDOT certainty regarding their authority to facilitate critical law enforcement and border security needs."
[5]: https://ndlegis.gov/assembly/69-2025/testimony/HTRAN-1050-20250116-29587-F-LEINGANG_BEN.pdf?utm_source=chatgpt.com "HOUSE TRANSPORTATION COMMITTEE"
[6]: https://ndlegis.gov/prod/assembly/69-2025/regular/bill-overview/bo1050.html?utm_source=chatgpt.com "HB 1050 - Overview | North Dakota Legislative Branch"
[7]: https://fargond.gov/city-government/departments/police/faqs/fargo-police-policy-manual?utm_source=chatgpt.com "The City of Fargo - Fargo Police Policy Manual"
[8]: https://download.fargond.gov/0/428-automated_license_plate_readers_alpr_15.pdf?utm_source=chatgpt.com "Fargo Police Department"
[9]: https://www.atlasofsurveillance.org/search?location=Fargo+Police+Department%2C+ND&sort=vendor_asc&utm_source=chatgpt.com "Fargo Police Department, ND | Atlas of Surveillance"
[10]: https://kfgo.com/2026/04/20/how-many-license-plate-readers-are-in-the-fargo-moorhead-area/?utm_source=chatgpt.com "How many license plate readers are in the Fargo-Moorhead area? | The Mighty 790 KFGO | KFGO"
[11]: https://kiosk.atlasofsurveillance.org/search.html?location=&page=21&sort=county_asc&utm_source=chatgpt.com "Search the Data | Atlas of Surveillance"
[12]: https://flockcameralocations.com/locations/north-dakota?utm_source=chatgpt.com "Flock Camera Locations in North Dakota — Live ND ALPR Map | Flock Camera Locations"
[13]: https://www.ndit.nd.gov/statewide-interoperable-radio-network-sirn?utm_source=chatgpt.com "SIRN: Connecting ND’s First Responders With Statewide Radio | North Dakota Information Technology"
[14]: https://www.ndit.nd.gov/sites/www/files/documents/technology-section/siec/20190116-sirn-contract-111-executed-redacted.pdf?utm_source=chatgpt.com "TABLE OF CONTENTS: STATEWIDE INTEROPERABLE RADIO NETWORK #11OF CONTENTS: STATEWIDE INTEROPERABLE RADIO NETWORK #TTY.... T"
[15]: https://www.des.nd.gov/state-emergency-communications-center?utm_source=chatgpt.com "State Emergency Communications Center | Department of Emergency Services North Dakota"
[16]: https://status.broadcastify.com/listen/coid/1/publicsafety?utm_source=chatgpt.com "Browse Audio Feeds"
[17]: https://status.broadcastify.com/?utm_source=chatgpt.com "Broadcastify - Live Police, Fire, EMS, Aircraft, and Rail Audio Feeds"
[18]: https://status.broadcastify.com/listen/official/?utm_source=chatgpt.com "Official Feeds"
