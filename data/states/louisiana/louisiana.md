---
state: Louisiana
usps: LA
slug: louisiana
dossier_number: 18
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
  imported_from: project_atlas_state_data/Louisiana.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Louisiana (LA) - ATLAS State Record

> Dossier **18 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Louisiana is a **very high-value state** for the project.

It has an unusually strong combination of:

* a documented statewide DOTD camera infrastructure
* a **public REST API for camera metadata**
* direct HLS video URLs exposed by the API documentation
* 500+ cameras in the statewide ATMS according to current DOTD documentation
* regional traffic-management systems
* New Orleans real-time crime-center cameras
* extensive ALPR deployment
* public police/fire/EMS scanner feeds
* substantial official public-record infrastructure

The **511LA camera API is one of the best discoveries in this entire state-by-state project so far.**

---

### 1. Louisiana Department of Transportation and Development

**Agency:** Louisiana Department of Transportation and Development
**System:** 511LA

DOTD identifies 511LA as Louisiana's official statewide traveler-information system. It provides real-time statewide information through the website, mobile app, phone system, notifications, and traffic cameras. ([Louisiana DOTD][1])

#### Registry

```text
SOURCE_ID:
    LA-DOTD-511LA

AGENCY:
    Louisiana Department of Transportation and Development

SYSTEM:
    511LA

TYPE:
    STATEWIDE_TRAVEL_INFORMATION

SCOPE:
    STATEWIDE

STATUS:
    🟢 OFFICIAL / ACTIVE
```

---

### 2. Louisiana statewide traffic cameras

DOTD explicitly states that its ITS infrastructure includes traffic cameras that are publicly distributed through 511LA. ([Louisiana DOTD][2])

Current DOTD documentation describes:

```text
500+ traffic cameras
100+ dynamic message signs
vehicle detection systems
```

within the statewide ATMS environment. ([Louisiana DOTD][3])

A separate statewide transportation document describes 350+ CCTV cameras, indicating that camera counts have increased over time. ([Louisiana DOTD][4])

#### Registry

```text
SOURCE_ID:
    LA-DOTD-CCTV

TYPE:
    TRAFFIC_CAMERA

OWNER:
    Louisiana DOTD

SCOPE:
    STATEWIDE

STATUS:
    🟢 OFFICIAL
```

---

### 3. The major discovery — 511LA Camera REST API

This is the source we want.

The official 511LA API documentation explicitly exposes:

```text
GET /api/v2/get/cameras
```

and says:

> Returns all cameras.

The documented endpoint is:

```text
https://511la.org/api/v2/get/cameras
```

It supports:

```text
format=json
format=xml
```

and requires a developer key. ([511LA][5])

#### Registry

```text
SOURCE_ID:
    LA-511LA-API-CAMERAS

ENDPOINT:
    /api/v2/get/cameras

METHOD:
    GET

FORMAT:
    JSON
    XML

AUTH:
    Developer Key

STATUS:
    🟢 OFFICIAL / DOCUMENTED
```

This is an **exact machine-readable public source**, not merely a website.

---

### 4. Camera API fields

The official API documentation gives us a remarkably useful schema.

Each camera can include:

```text
Id
Source
SourceId
Roadway
Direction
Latitude
Longitude
Location
SortOrder
Views
```

The `Views` object includes camera-view information. ([511LA][5])

#### Canonical mapping

```text
511LA
│
├── Id
│      → camera_id
│
├── Source
│      → source
│
├── SourceId
│      → source_camera_id
│
├── Roadway
│      → roadway
│
├── Direction
│      → direction
│
├── Latitude
│      → latitude
│
├── Longitude
│      → longitude
│
├── Location
│      → location_description
│
└── Views
       ├── view_id
       ├── status
       ├── description
       └── video_url
```

This is almost exactly what the national ingestion engine needs.

---

### 5. Direct HLS video URLs

This is the **standout discovery**.

The official 511LA API documentation includes actual sample `VideoUrl` values such as:

```text
https://ITSStreamingBR2.dotd.la.gov/public/shr-cam-030.streams/playlist.m3u8
```

and:

```text
https://ITSStreamingBR2.dotd.la.gov/public/shr-cam-002.streams/playlist.m3u8
```

These are HLS playlists. ([511LA][5])

Therefore Louisiana is not merely:

```text
camera location → webpage
```

It is:

```text
camera
    ↓
API
    ↓
view
    ↓
HLS playlist
```

#### Registry

```text
SOURCE_ID:
    LA-DOTD-CCTV-HLS

TYPE:
    LIVE_VIDEO

PROTOCOL:
    HLS

FORMAT:
    .m3u8

ACCESS:
    Public URL shown in official API documentation

STATUS:
    🟢 VERIFIED
```

---

### 6. Authentication distinction

There is an important distinction:

#### Camera metadata API

```text
/api/v2/get/cameras
```

requires:

```text
Developer Key
```

according to the official documentation. ([511LA][5])

#### HLS streams

The official API documentation exposes the actual `VideoUrl` values separately.

Therefore our source registry must store:

```text
metadata_access:
    API_KEY_REQUIRED

video_access:
    PUBLIC_HLS_URL
```

We should **not** assume the API is anonymously accessible just because the video URLs are public.

---

### 7. API rate limit

The official 511LA developer documentation says the API is throttled at:

```text
10 calls / 60 seconds
```

and requires a registered account/developer key for most calls. ([511LA][6])

#### Ingestion requirements

```text
RATE_LIMIT:
    10 requests / 60 sec

CACHE:
    REQUIRED

POLLING:
    DO NOT hammer endpoint

RECOMMENDATION:
    periodically refresh metadata
    separately monitor HLS availability
```

This should be built directly into the Louisiana adapter.

---

### 8. Exact Louisiana camera adapter

The national ingestion engine should be able to represent Louisiana like this:

```text
SOURCE
    LA-DOTD-511LA-API-CAMERAS

DISCOVERY
    GET /api/v2/get/cameras

AUTH
    developer_key

PARSER
    JSON/XML

OUTPUT
    Camera
        ↓
    View
        ↓
    HLS stream
```

This is a **first-class source adapter**, not a scraper.

---

### 9. DOTD Video Distribution Management System

DOTD has a dedicated **Video Distribution Management System (VDMS)**.

DOTD states that traffic video is distributed in real time to:

* DOTD traffic-management staff
* partner agencies
* local first responders
* the public
* media
* traffic-management partners. ([Louisiana DOTD][7])

DOTD also explicitly says:

> DOTD DOES NOT RECORD CAMERA FEEDS.

The feeds are live and not recorded by DOTD. ([Louisiana DOTD][7])

#### Registry

```text
SOURCE_ID:
    LA-DOTD-VDMS

TYPE:
    LIVE_VIDEO_DISTRIBUTION

FUNCTION:
    CAMERA_VIDEO_DISTRIBUTION

STATUS:
    🟢 OFFICIAL
```

---

### 10. DOTD Traffic Management Centers

Louisiana has **six Traffic Management Centers**:

```text
Baton Rouge regional TMC
Baton Rouge statewide TMC
Houma
Lake Charles
New Orleans
Shreveport
```

DOTD says these centers use ATMS software to control and monitor:

```text
CCTV
DMS
ramp meters
incidents
construction closures
maintenance closures
MAP vehicles
other ITS devices
```

and monitor the Video Distribution Management System. ([Louisiana DOTD][8])

#### Registry

```text
SOURCE_ID:
    LA-DOTD-TMC

TYPE:
    TRAFFIC_MANAGEMENT_INFRASTRUCTURE

TMC_COUNT:
    6

STATUS:
    🟢 OFFICIAL
```

---

### 11. Louisiana ATMS

DOTD operates a statewide Advanced Traffic Management System.

The current DOTD documentation says the ATMS:

* operates statewide
* operates 24/7/365
* integrates more than 530 traffic cameras
* integrates 100+ DMS
* incorporates vehicle-detection devices. ([Louisiana DOTD][3])

#### Registry

```text
SOURCE_ID:
    LA-DOTD-ATMS

TYPE:
    ADVANCED_TRAFFIC_MANAGEMENT

DEVICES:
    CCTV
    DMS
    VEHICLE_DETECTION

SCOPE:
    STATEWIDE
```

---

### 12. Baton Rouge traffic cameras

The Baton Rouge region has its own traffic-management infrastructure.

DOTD documents a Baton Rouge ATM/EOC operating in coordination with:

```text
911
police
fire
sheriff
Louisiana State Police
Coast Guard
DOTD
```

and describes traffic cameras integrated into the system. ([Louisiana DOTD][9])

The current statewide architecture also describes the Baton Rouge regional TMC/ATM-EOC ecosystem. ([Louisiana DOTD][8])

#### Registry

```text
SOURCE_ID:
    LA-BATON-ROUGE-ATM-EOC

TYPE:
    TRAFFIC_MANAGEMENT

DEVICES:
    CCTV
    RADAR VEHICLE DETECTORS

STATUS:
    🟢 OFFICIAL
```

---

### 13. Louisiana traffic events API

511LA also exposes traffic events through a documented REST endpoint:

```text
/api/v2/get/event
```

The official documentation says it returns all traffic events and provides fields such as:

```text
ID
SourceId
Organization
RoadwayName
DirectionOfTravel
Description
Reported
```

and other event information. ([511LA][10])

#### Registry

```text
SOURCE_ID:
    LA-511LA-API-EVENTS

TYPE:
    TRAFFIC_EVENT

ENDPOINT:
    /api/v2/get/event

AUTH:
    Developer Key

STATUS:
    🟢 OFFICIAL
```

This is extremely useful because the project's scope is not just cameras.

---

### 14. 511LA broader API

The official API documentation says the REST API exposes multiple 511 resources, including:

```text
Message Signs
Ferries
Rest Areas
Events
Advisories
```

with a developer key required for most calls. ([511LA][6])

Therefore:

```text
LA-511LA-API
│
├── cameras
├── events
├── advisories
├── message signs
├── ferries
└── rest areas
```

should be represented as one **API family** with multiple endpoints.

---

### 15. Louisiana DMS

The statewide ATMS contains:

```text
100+ Dynamic Message Signs
```

according to current DOTD documentation. ([Louisiana DOTD][3])

511LA's REST API documentation also identifies Message Signs as a supported resource. ([511LA][6])

#### Registry

```text
SOURCE_ID:
    LA-DOTD-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

COUNT:
    100+

API:
    511LA REST

STATUS:
    🟢 OFFICIAL
```

---

### 16. Louisiana statewide CCTV count

There are multiple official figures in DOTD documentation:

```text
350+ CCTV
```

in a statewide transportation document, while the current ATMS documentation states:

```text
530+ traffic cameras
```

This is not necessarily a contradiction.

It likely reflects system expansion and/or differing definitions/count dates.

For our database:

```text
camera_count:
    DO NOT HARD-CODE

source_reported_count:
    530+

count_date:
    2026 documentation

historical_count:
    350+
```

This is an important example of why source metadata needs timestamps.

---

### 17. Northshore regional ITS

Louisiana's 2024 Northshore Regional ITS Architecture provides an unusually detailed inventory.

It identifies:

```text
31 CCTV cameras
11 DMS
```

in the Northshore regional system. It also says most newer CCTV cameras are IP cameras supporting high-quality and standard-quality streams. ([Louisiana DOTD][11])

#### Registry

```text
SOURCE_ID:
    LA-NORTHSHORE-ITS

TYPE:
    REGIONAL_TRAFFIC_INFRASTRUCTURE

CCTV:
    31

DMS:
    11

STATUS:
    🟢 OFFICIAL DOCUMENTATION
```

This is useful for validation against the statewide camera feed.

---

### 18. New Orleans Real-Time Crime Center

New Orleans has a separate public-safety camera system that **must not be confused with DOTD traffic cameras**.

The official New Orleans RTCC page says the system includes:

```text
cameras
license plate readers
monitoring software
```

and that the RTCC has installed **hundreds of cameras across the city**, covering every neighborhood. ([NOLA.gov][12])

The cameras face the public right-of-way.

The page says nearby cameras can automatically activate/turn toward an incident after a 911 call, allowing RTCC technicians to provide information to responding personnel. ([NOLA.gov][12])

#### Registry

```text
SOURCE_ID:
    LA-NOLA-RTCC

AGENCY:
    New Orleans Office of Coordination
    and Emergency Management

TYPE:
    PUBLIC_SAFETY_CAMERA_SYSTEM

DEVICES:
    Hundreds of cameras

ALPR:
    YES

FACIAL_RECOGNITION:
    NO

STATUS:
    🟢 OFFICIAL
```

This is a **major source** for the national database.

---

### 19. New Orleans traffic cameras are separate

The official RTCC page specifically says:

> Traffic cameras monitoring speed and red-light violations are separate from the RTCC and managed by the Department of Public Works. ([NOLA.gov][12])

Therefore New Orleans has at least:

```text
NOLA
│
├── RTCC cameras
│
├── ALPR
│
└── Department of Public Works traffic cameras
```

This separation should exist in the database.

---

### 20. New Orleans ALPR

Community mapping currently identifies approximately:

```text
111–117 ALPRs
```

within New Orleans, depending on the dataset/version. One current map identifies 111, including:

```text
51 Flock
41 Neology
1 Motorola
```

with the remainder categorized as other/unknown. ([Flock Camera][13])

Another current community inventory reports 117 and identifies 56 Flock cameras. ([Finding Flock][14])

#### Correct database treatment

```text
official_count:
    NOT ESTABLISHED

community_mapped_count:
    ~111–117

vendor:
    mixed

confidence:
    MEDIUM
```

Do **not** choose one of the two community counts as an official count.

---

### 21. Louisiana statewide ALPR inventory

A current community mapping dataset identifies approximately:

```text
1,996 ALPR cameras
```

throughout Louisiana. ([Finding Flock][15])

Another OpenStreetMap-derived source currently reports approximately:

```text
1,892
```

depending on its snapshot/filtering. ([Flock Camera Locations][16])

Again, the correct conclusion is:

```text
LOUISIANA ALPR:
    extensive

COMMUNITY-MAPPED:
    ~1,900–2,000

OFFICIAL STATEWIDE COUNT:
    NOT ESTABLISHED
```

This discrepancy is exactly why we maintain **source-specific observations** instead of one "truth" field.

---

### 22. Baton Rouge ALPR

Baton Rouge is currently the largest mapped ALPR concentration in Louisiana.

One current inventory identifies:

```text
153 ALPRs
```

within Baton Rouge. It reports:

```text
128 Flock
10 Motorola
5 Neology
2 Genetec
```

where manufacturers were recorded. ([Finding Flock][17])

Another source maps approximately 150 cameras and identifies East Baton Rouge Parish Sheriff's Office and Southern University Police Department as agencies associated with ALPR records. ([Are You Flocked?][18])

#### Registry

```text
SOURCE_ID:
    LA-BATON-ROUGE-ALPR

AGENCIES:
    East Baton Rouge Parish Sheriff's Office
    Southern University Police Department

MAPPED_CAMERAS:
    ~150+

VENDORS:
    Flock
    Motorola
    Neology
    Genetec
    Unknown

STATUS:
    🟡 COMMUNITY + RECORDS
```

---

### 23. Important ALPR vendor diversity

Louisiana demonstrates that we cannot make the same mistake as:

```text
ALPR = Flock
```

Current mapped data identifies:

```text
Flock Safety
Neology
Motorola Solutions
Genetec
```

among Louisiana deployments. ([Finding Flock][17])

The national schema therefore needs:

```text
manufacturer
model
technology
operator
owner
source
confidence
```

as separate fields.

---

### 24. Louisiana ALPR law / records

Louisiana has specific statutory treatment of automated license plate recognition.

A Louisiana legislative record concerning the statewide Motor Vehicle Theft and Uninsured Motorists Identification Program states that certain ALPR data are exempt from the Public Records Law, with exceptions for evidence related to an insurance-law violation or felony investigation. ([Louisiana Legislature][19])

That means:

```text
PUBLIC CAMERA LOCATION:
    potentially obtainable

RAW ALPR OBSERVATION:
    significantly more restricted
```

We should not assume that because an ALPR exists publicly, its plate-read database is public.

---

### 25. Louisiana public records

DOTD explicitly provides a public-records request mechanism.

Its official page states that Louisiana's public-records definition includes:

```text
books
records
maps
drawings
photographs
recordings
electronic data
```

and other documentary material used or retained in public business. ([Louisiana Division of Administration][20])

#### Registry

```text
SOURCE_ID:
    LA-PUBLIC-RECORDS

TYPE:
    PUBLIC_RECORDS_DISCOVERY

APPLICATION:
    camera inventories
    contracts
    ALPR records
    ITS records
    GIS
    procurement
```

This becomes an important **secondary discovery mechanism**.

---

### 26. Louisiana police scanners

Louisiana has a very large public scanner ecosystem.

A current scanner directory identifies:

```text
173 live feeds
65 counties
```

covering police, fire and EMS. ([Police Scanner][21])

Another scanner directory currently lists:

```text
166 scanner broadcasts
```

in Louisiana. ([Radio Station Net][22])

As with the previous states:

**These are feed counts, not radio-system counts.**

---

### 27. Louisiana State Police scanner feeds

The current public scanner index includes Louisiana State Police feeds, including:

```text
Louisiana State Police — Troops B, C, L
```

as well as numerous parish and municipal public-safety feeds. ([Radio Station Net][22])

#### Registry

```text
SOURCE_ID:
    LA-LSP-PUBLIC-SCANNERS

AGENCY:
    Louisiana State Police

TYPE:
    PUBLIC_SAFETY_RADIO

STATUS:
    🟢 PUBLIC INTERNET FEEDS EXIST
```

---

### 28. Parish radio architecture

Louisiana is particularly important because its political/geographic organization is:

```text
STATE
│
├── PARISH
│   ├── Sheriff
│   ├── Fire
│   ├── EMS
│   └── municipal agencies
│
└── MUNICIPALITIES
```

The radio source database should therefore support:

```text
jurisdiction_type:
    STATE
    PARISH
    CITY
    TOWN
    UNIVERSITY
    REGIONAL
```

rather than assuming every county-level source is a county.

---

### 29. Scanner example — Tangipahoa Parish

The current Louisiana scanner index identifies:

```text
Louisiana State Police — Troops B, C, L
Hammond Police Dispatch
Independence Police Dispatch
Southeastern Louisiana University Police Dispatch
Tangipahoa Parish Sheriff Dispatch
Tickfaw Police
```

among its public broadcasts. ([Radio Station Net][22])

That is useful because it demonstrates the density of the local radio ecosystem.

---

### 30. Louisiana CAD

I have **not** established a verified statewide public CAD API.

Therefore:

```text
STATEWIDE CAD:
    🔴 NOT VERIFIED
```

There are local incident/reporting systems, and Baton Rouge has an integrated emergency-management environment, but that does **not** establish a statewide public CAD endpoint.

Do not create one.

---

### 31. Louisiana weather/roadside sensors

DOTD's ITS architecture also includes:

```text
RWIS
vehicle detection
WIM
HAR
ramp meters
traffic signals
tolling
```

in addition to CCTV and DMS. ([Louisiana DOTD][4])

These are valuable future data-source categories.

#### Registry

```text
LA-DOTD-RWIS
LA-DOTD-VEHICLE-DETECTION
LA-DOTD-WIM
LA-DOTD-HAR
LA-DOTD-RAMP-METERS
LA-DOTD-TRAFFIC-SIGNALS
LA-DOTD-TOLLING
```

Current pass establishes their existence but does **not** establish a public machine-readable endpoint for each.

So they remain:

```text
🟡 DISCOVERY TARGET
```

---

### 32. Louisiana camera-source architecture

```text
LOUISIANA
│
├── DOTD
│   │
│   ├── 511LA
│   │   ├── Cameras API
│   │   ├── Events API
│   │   ├── DMS
│   │   ├── Advisories
│   │   ├── Ferries
│   │   └── Rest Areas
│   │
│   ├── ATMS
│   ├── VDMS
│   ├── TMCs
│   ├── CCTV
│   ├── DMS
│   ├── Vehicle Detection
│   ├── RWIS
│   ├── WIM
│   └── Tolling
│
├── NEW ORLEANS
│   ├── RTCC
│   ├── public-safety cameras
│   ├── ALPR
│   └── DPW traffic cameras
│
├── PARISH/CITY
│   ├── ALPR
│   ├── CCTV
│   └── private-camera partnerships
│
└── RADIO
    ├── Louisiana State Police
    ├── Parish sheriffs
    ├── municipal police
    ├── fire
    └── EMS
```

---

### 33. Exact Louisiana source registry

| Source ID                 | Owner            | Data                    | Type             | Status |
| ------------------------- | ---------------- | ----------------------- | ---------------- | ------ |
| `LA-DOTD-511LA`           | DOTD             | Statewide traveler info | Platform         | 🟢     |
| `LA-511LA-API-CAMERAS`    | DOTD             | Camera metadata         | **API**          | 🟢     |
| `LA-DOTD-CCTV`            | DOTD             | 500+ cameras            | **CCTV**         | 🟢     |
| `LA-DOTD-CCTV-HLS`        | DOTD             | Live HLS                | **Video**        | 🟢     |
| `LA-DOTD-VDMS`            | DOTD             | Live video distribution | Video            | 🟢     |
| `LA-DOTD-ATMS`            | DOTD             | Statewide ITS           | Infrastructure   | 🟢     |
| `LA-DOTD-TMC`             | DOTD             | 6 TMCs                  | Infrastructure   | 🟢     |
| `LA-511LA-API-EVENTS`     | DOTD             | Traffic events          | **API**          | 🟢     |
| `LA-DOTD-DMS`             | DOTD             | 100+ signs              | Device/API       | 🟢     |
| `LA-BATON-ROUGE-ATM-EOC`  | Baton Rouge/DOTD | Traffic system          | ITS              | 🟢     |
| `LA-NORTHSHORE-ITS`       | DOTD             | 31 CCTV                 | ITS              | 🟢     |
| `LA-NOLA-RTCC`            | New Orleans      | Hundreds of cameras     | **Surveillance** | 🟢     |
| `LA-BATON-ROUGE-ALPR`     | EBRSO/SUPD/etc.  | ~150+ mapped            | **ALPR**         | 🟡     |
| `LA-LSP-PUBLIC-SCANNERS`  | LSP              | Radio feeds             | **Audio**        | 🟢     |
| `LA-PUBLIC-SCANNER-INDEX` | Third-party      | 160–170+ feeds          | Audio            | 🟢     |
| `LA-PUBLIC-RECORDS`       | Louisiana        | Records                 | Discovery        | 🟢     |

---

### 34. What is actually **exactly actionable**

These are the sources I would put into the national ingestion engine **right now**:

#### A. 511LA Cameras API

```text
https://511la.org/api/v2/get/cameras
```

**Developer key required.**

Official API documentation confirms:

* endpoint
* method
* formats
* fields
* camera views
* HLS URLs. ([511LA][5])

#### B. 511LA Events API

```text
https://511la.org/api/v2/get/event
```

**Developer key required.** ([511LA][10])

#### C. HLS

The camera API supplies URLs of the form:

```text
https://ITSStreaming*.dotd.la.gov/public/*/playlist.m3u8
```

The exact URL must be obtained dynamically from each current camera record rather than hard-coded from the documentation example. ([511LA][5])

---

### 35. What should NOT be hard-coded

Do **not** build:

```text
shr-cam-030
shr-cam-002
```

as permanent cameras.

Those are examples in the official API documentation.

The correct process is:

```text
API
 ↓
current camera list
 ↓
camera ID
 ↓
current Views
 ↓
current VideoUrl
 ↓
HLS
```

This prevents stale camera IDs and stream URLs.

---

### 36. Louisiana's strongest discoveries

#### 🥇 511LA Camera API

**10/10**

Exact documented REST endpoint with structured camera records and stream URLs. ([511LA][5])

#### 🥇 Direct HLS

**10/10**

The official API schema exposes `.m3u8` video URLs. ([511LA][5])

#### 🥇 Statewide ATMS

**9.5/10**

530+ cameras and 100+ DMS currently documented. ([Louisiana DOTD][3])

#### 🥇 New Orleans RTCC

**10/10**

Hundreds of public-right-of-way cameras plus ALPR infrastructure documented by the city. ([NOLA.gov][12])

#### 🥇 Scanner ecosystem

**9/10**

160–170+ public feeds depending on directory. ([Police Scanner][21])

#### 🥇 Public-record mechanism

**9/10**

Strong avenue for discovering local ALPR/camera contracts and inventories. ([Louisiana Division of Administration][20])

---

### 37. What Louisiana does **not** yet establish

```text
🔴 Public statewide ALPR live-read API
🔴 Public statewide ALPR observation feed
🔴 Statewide public CAD API
🔴 Single statewide police-radio stream
🔴 Public raw New Orleans RTCC video API
🔴 Official statewide ALPR camera inventory
```

But there is enough evidence to classify Louisiana as:

```text
CAMERAS:
    🟢 EXCELLENT

ALPR:
    🟢 VERY EXTENSIVE

RADIO:
    🟢 EXCELLENT

TRAFFIC DATA:
    🟢 EXCELLENT

MACHINE-READABLE SOURCES:
    🟢 EXCELLENT
```

---

### 38. Louisiana final classification

| Category                     | Louisiana                  |
| ---------------------------- | -------------------------- |
| Statewide 511                | 🟢                         |
| Official statewide CCTV      | 🟢                         |
| Exact camera REST API        | 🟢 **YES**                 |
| JSON camera data             | 🟢                         |
| XML camera data              | 🟢                         |
| Camera coordinates           | 🟢                         |
| Camera direction             | 🟢                         |
| Camera source IDs            | 🟢                         |
| Direct HLS URLs              | 🟢 **YES**                 |
| API authentication           | 🟡 Developer key           |
| API rate limit               | 🟡 10/60 sec               |
| Statewide ATMS               | 🟢                         |
| DMS                          | 🟢                         |
| Traffic events API           | 🟢                         |
| New Orleans RTCC             | 🟢                         |
| ALPR                         | 🟢 **~1,900–2,000 mapped** |
| Flock                        | 🟢                         |
| Neology                      | 🟢                         |
| Motorola                     | 🟢                         |
| Genetec                      | 🟢                         |
| Public ALPR observations     | 🔴                         |
| Public scanner feeds         | 🟢                         |
| Louisiana State Police feeds | 🟢                         |
| Statewide public CAD         | 🔴                         |

#### **Louisiana rating: 9.8/10 — EXCEPTIONALLY HIGH PRIORITY**

The **511LA camera API + direct HLS architecture** makes Louisiana one of the most valuable states we've found so far. The official API doesn't just tell us that cameras exist—it provides a structured camera registry containing coordinates, roadway, direction, camera views and the associated video URL. ([511LA][5])

And separately, New Orleans gives us a large **public-safety/RTCC camera network**, while the state has roughly **1,900–2,000 community-mapped ALPRs** and a large public scanner ecosystem. ([Finding Flock][15])

**Next alphabetically: Maine.**

[1]: https://dotd.la.gov/about/office-of-operations/intelligent-transportation-systems/its-systems-integration/511-advanced-traveler-information-system/?utm_source=chatgpt.com "511 Advanced Traveler Information System"
[2]: https://dotd.la.gov/about/office-of-operations/intelligent-transportation-systems/?utm_source=chatgpt.com "Intelligent Transportation Systems"
[3]: https://dotd.la.gov/about/office-of-operations/intelligent-transportation-systems/its-systems-integration/advanced-traffic-management-system/?utm_source=chatgpt.com "Advanced Traffic Management System"
[4]: https://www.dotd.la.gov/media/rorn0sn5/04_transportation-in-louisiana.pdf?utm_source=chatgpt.com "4. Transportation in Louisiana"
[5]: https://www.511la.org/help/endpoint/cameras?utm_source=chatgpt.com "Louisiana GET Cameras API Documentation | 511LA"
[6]: https://www.511la.org/developers/doc?utm_source=chatgpt.com "Louisiana API Documentation | 511LA"
[7]: https://dotd.la.gov/about/office-of-operations/intelligent-transportation-systems/its-systems-integration/video-distribution-management-system/?utm_source=chatgpt.com "Video Distribution Management System"
[8]: https://dotd.la.gov/about/office-of-operations/intelligent-transportation-systems/its-programs-and-projects/traffic-management-centers/?utm_source=chatgpt.com "Traffic Management Centers"
[9]: https://dotd.la.gov/about/office-of-operations/intelligent-transportation-systems/about-its/?utm_source=chatgpt.com "About ITS"
[10]: https://www.511la.org/help/endpoint/event?utm_source=chatgpt.com "Louisiana GET Events API Documentation | 511LA"
[11]: https://dotd.la.gov/media/qqfa03im/northshore-regional-its-architecture-2024.pdf?utm_source=chatgpt.com "Northshore Regional Intelligent"
[12]: https://nola.gov/next/new-orleans-office-of-coordination-and-emergency-management/topics/real-time-crime-center-en/?utm_source=chatgpt.com "New Orleans Office of Coordination and Emergency Management - Topics - Real-Time Crime Center - City of New Orleans"
[13]: https://flockcamera.app/locations/louisiana/new-orleans/?utm_source=chatgpt.com "Flock Cameras in New Orleans, LA — 111 ALPR Locations Mapped"
[14]: https://www.findingflock.com/cameras/louisiana/new-orleans?utm_source=chatgpt.com "117 Flock & ALPR Cameras in New Orleans, LA"
[15]: https://www.findingflock.com/cameras/louisiana?utm_source=chatgpt.com "1,996 Flock & ALPR Cameras in Louisiana · Finding Flock"
[16]: https://flockcameralocations.com/locations/louisiana?utm_source=chatgpt.com "Flock Camera Locations in Louisiana — Live LA ALPR Map | Flock Camera Locations"
[17]: https://www.findingflock.com/cameras/louisiana/baton-rouge?utm_source=chatgpt.com "153 Flock & ALPR Cameras in Baton Rouge, LA"
[18]: https://areyouflocked.com/louisiana/baton-rouge?utm_source=chatgpt.com "Does Baton Rouge, Louisiana Have Flock Cameras? Locations, Map & Records"
[19]: https://www.legis.la.gov/legis/ViewDocument.aspx?d=959090&utm_source=chatgpt.com "SB NO. 250                    ENROLLED"
[20]: https://dotd.louisiana.gov/about/legal/public-records-requests/?utm_source=chatgpt.com "Public Records Request"
[21]: https://policescannerradio.app/scanners/louisiana/?utm_source=chatgpt.com "Louisiana Police Scanner — Live Police, Fire & EMS Feeds"
[22]: https://radiostationnet.com/scanner/louisiana/?utm_source=chatgpt.com "State of Louisiana Live SCANNER Feeds"
