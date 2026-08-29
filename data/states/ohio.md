---
state: Ohio
usps: OH
slug: ohio
dossier_number: 35
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
  imported_from: project_atlas_state_data/Ohio.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Ohio (OH) - ATLAS State Record

> Dossier **35 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Ohio is a **very strong state** for this project.

The camera side is particularly good: ODOT has a current, documented public API with exact camera coordinates, individual camera records, multiple camera views, and image URLs that update every five seconds. ODOT also explicitly states that the API data is public domain.

The ALPR side is also significant: Ohio State Highway Patrol has both **ELSAG/Leonardo ALPR hardware** and a **Flock Safety subscription**, while local agencies are deploying Flock systems as well.

The radio side is excellent because Ohio operates **MARCS**, a statewide P25 public-safety network.

---

### 1. Ohio Department of Transportation

Primary transportation agency:

**Ohio Department of Transportation — ODOT**

Its traveler-information platform is:

### OHGO

OHGO is ODOT's public traffic-information system.

The official API currently exposes:

* cameras
* construction
* dangerous slowdowns
* digital signs
* incidents
* travel delays
* weather sensor sites
* work zones. ([OHGO API][1])

#### Registry

```text
SOURCE_ID:
    OH-ODOT-OHGO

OWNER:
    Ohio Department of Transportation

PROGRAM:
    OHGO

TYPE:
    STATEWIDE_TRANSPORTATION_DATA

STATUS:
    🟢 VERIFIED
```

---

### 2. OHGO public API

This is the primary machine-readable source.

Official API:

[OHGO Public API](https://publicapi.ohgo.com/?utm_source=chatgpt.com)

The current API is:

```text
API VERSION:
    v1

BASE:
    https://publicapi.ohgo.com/api/v1/
```

The API documentation is actively maintained, with the current stable release listed as **v1.4.0, April 24, 2026**. ([OHGO API][1])

---

### 3. Exact camera endpoint

The primary camera endpoint is:

```text
https://publicapi.ohgo.com/api/v1/cameras
```

Official documentation:

[OHGO Camera API Documentation](https://publicapi.ohgo.com/docs/v1/cameras?utm_source=chatgpt.com)

The endpoint supports:

```text
GET /api/v1/cameras
GET /api/v1/cameras/{id}
```

([OHGO API][2])

#### Registry

```text
SOURCE_ID:
    OH-ODOT-CAMERA-API

ENDPOINT:
    https://publicapi.ohgo.com/api/v1/cameras

METHOD:
    GET

FORMAT:
    API Result / JSON

AUTH:
    API KEY

STATUS:
    🟢 VERIFIED
```

---

### 4. Camera API authentication

Ohio requires registration for a public API key.

The official documentation states that users receive an API key after registration. The key can be supplied either:

```text
Authorization:
    APIKEY {key}
```

or:

```text
?api-key={key}
```

([OHGO API][3])

Therefore:

```text
PUBLIC:
    🟢

API:
    🟢

AUTHENTICATION:
    API KEY

ACCOUNT:
    REQUIRED

PAID SUBSCRIPTION:
    ❌ NOT IDENTIFIED
```

This is a normal public-developer API, not an authenticated law-enforcement system.

---

### 5. Camera model

ODOT's official documentation gives us a very clean camera schema.

Each camera record contains:

```text
Id
Latitude
Longitude
Location
Description
CameraViews[]
```

([OHGO API][2])

This is excellent for ATLAS.

#### Canonical mapping

```text
Id
 ↓
source_camera_id

Latitude
 ↓
latitude

Longitude
 ↓
longitude

Location
 ↓
location_name

Description
 ↓
description

CameraViews[]
 ↓
views[]
```

---

### 6. Camera views

The camera API explicitly models:

> one or more camera devices at a camera site

and each `CameraView` represents a physical camera. ([OHGO API][2])

This distinction is important.

Ohio's structure is:

```text
CAMERA SITE
│
├── metadata
│
├── coordinates
│
└── CameraViews[]
       │
       ├── camera A
       ├── camera B
       └── camera C
```

ATLAS should preserve this hierarchy.

---

### 7. Camera direction

Each camera view has:

```text
Direction
```

ODOT documents this as the direction the camera faces.

It can also contain:

```text
PTZ
```

for pan/tilt/zoom cameras. ([OHGO API][2])

Therefore:

```text
VIEW
├── direction
├── fixed/PTZ classification
└── image URLs
```

---

### 8. Camera image URLs

This is one of Ohio's strongest features.

Each camera view provides:

```text
SmallUrl
LargeUrl
```

ODOT states that the snapshots:

### update every 5 seconds

([OHGO API][2])

So this is a genuine near-real-time public camera source.

#### Registry

```text
CAMERA_IMAGE:
    🟢

SMALL_IMAGE:
    🟢

LARGE_IMAGE:
    🟢

REFRESH:
    5 seconds

VIDEO_STREAM:
    ❓ NOT ESTABLISHED FROM API DOCUMENTATION
```

Do not assume HLS merely because the camera is live.

---

### 9. Fixed and PTZ cameras

ODOT specifically says its cameras can be:

```text
FIXED
```

or:

```text
PTZ
```

([OHGO API][2])

That gives ATLAS an actual camera capability field:

```json
{
  "camera_capabilities": {
    "fixed": true,
    "ptz": false
  }
}
```

where the value should come from the source rather than being guessed.

---

### 10. Camera location

The API provides:

```text
Latitude
Longitude
Location
Description
```

([OHGO API][2])

No special coordinate conversion is required.

#### Classification

```text
COORDINATES:
    🟢 WGS84-style decimal lat/lon

LOCATION_NAME:
    🟢

DESCRIPTION:
    🟢
```

---

### 11. Camera API pagination

OHGO uses a standard API result wrapper.

The result includes:

```text
LastUpdated
TotalPageCount
TotalResultCount
CurrentResultCount
Results[]
```

([OHGO API][4])

The default page size is:

### 500 records

unless `page-size` or `page-all` is supplied. ([OHGO API][5])

This matters enormously for ingestion.

ATLAS should **not assume the first API response contains every camera**.

---

### 12. Get all cameras

The API supports:

```text
page-all
```

which causes the API to return all data for that result set. ([OHGO API][5])

Conceptually:

```text
GET /api/v1/cameras?page-all=true
```

with the required API-key authentication.

This is considerably easier than repeatedly guessing page numbers.

---

### 13. Geographic filtering

OHGO supports:

```text
map-bounds-sw
map-bounds-ne
```

to define a bounding box.

It also supports:

```text
region
radius
```

([OHGO API][5])

The documented regions include:

```text
akron
cincinnati
cleveland
columbus
dayton
toledo

central-ohio
ne-ohio
nw-ohio
se-ohio
sw-ohio
```

([OHGO API][5])

This is useful for incremental ingestion and regional troubleshooting.

---

### 14. OHGO API is explicitly public-domain data

This is a major distinction from North Dakota.

ODOT's official API landing page states that ODOT data is:

### public domain

and is freely available for uses including:

* aggregating traffic sources
* traffic prediction
* traffic-alert applications
* other projects. ([OHGO API][1])

#### ATLAS classification

```text
PUBLIC:
    🟢

MACHINE_READABLE:
    🟢

PUBLIC DOMAIN:
    🟢

SYSTEMATIC USE:
    🟢

API KEY:
    REQUIRED
```

This is an **excellent fit for the project**.

---

### 15. Camera source score

```text
OH-ODOT-CAMERA-API

Machine readable:     🟢
Coordinates:          🟢
Multiple views:       🟢
Image URLs:           🟢
5-second refresh:     🟢
PTZ identification:   🟢
Pagination:           🟢
Geographic filtering: 🟢
Public domain:        🟢
Developer API:        🟢
```

### **Camera quality: 10/10**

---

### 16. Other OHGO traffic endpoints

The same API exposes:

```text
/api/v1/construction
/api/v1/dangerous-slowdowns
/api/v1/digital-signs
/api/v1/incidents
/api/v1/travel-delays
/api/v1/weather-sensor-sites
```

([OHGO API][3])

These should be registered as independent ATLAS sources.

---

### 17. Ohio incidents

Exact endpoint:

```text
https://publicapi.ohgo.com/api/v1/incidents
```

The current API documentation identifies incidents as a core API resource. ([OHGO API][3])

The 2025 API update also added additional road-closure information to incident records. ([OHGO API][6])

#### Registry

```text
SOURCE_ID:
    OH-OHGO-INCIDENTS

TYPE:
    TRAFFIC_EVENTS

STATUS:
    🟢 VERIFIED
```

---

### 18. Ohio weather sensors

Exact endpoint:

```text
https://publicapi.ohgo.com/api/v1/weather-sensor-sites
```

The API has included weather sensor sites since the original public release. ([OHGO API][1])

#### Registry

```text
SOURCE_ID:
    OH-ODOT-WEATHER-SENSORS

TYPE:
    ROAD_WEATHER_SENSOR

STATUS:
    🟢 VERIFIED
```

---

### 19. Ohio digital signs

Exact endpoint:

```text
https://publicapi.ohgo.com/api/v1/digital-signs
```

This provides ODOT digital-sign information through the same API. ([OHGO API][3])

#### Registry

```text
SOURCE_ID:
    OH-ODOT-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢 VERIFIED
```

---

### 20. Ohio dangerous slowdowns

Exact endpoint:

```text
https://publicapi.ohgo.com/api/v1/dangerous-slowdowns
```

This is another directly documented resource. ([OHGO API][3])

#### Registry

```text
SOURCE_ID:
    OH-ODOT-DANGEROUS-SLOWDOWNS

TYPE:
    TRAFFIC_CONDITION

STATUS:
    🟢 VERIFIED
```

---

### 21. Ohio construction

Exact endpoint:

```text
https://publicapi.ohgo.com/api/v1/construction
```

The current API documentation identifies construction as a core resource. ([OHGO API][3])

---

### 22. Ohio work zones / WZDx

OHGO also exposes work-zone information and has supported WZDx.

The API change log documents the WZDx 4.2 endpoint introduced in 2025. ([OHGO API][6])

The current April 2026 release notes indicate the API was updated to remove the truck-parking endpoint and its WZDx 4.2 entry, so **do not blindly carry forward older documentation**. ([OHGO API][1])

This is a good example of why every ATLAS source should have:

```text
first_verified
last_verified
endpoint_status
```

---

### 23. Ohio ALPR — state-level deployment

Ohio has a very significant state ALPR program.

The Ohio State Highway Patrol has used:

### ELSAG / Leonardo

license-plate-recognition technology for years.

An official Ohio Controlling Board request states that OSHP's LPR technology has contributed to:

* criminal apprehensions
* vehicle recoveries
* locating missing persons
* assisting local agencies. 

---

### 24. OSHP ELSAG cameras

The official procurement record states that OSHP's existing LPR system consisted of:

### Selex Software-operated ELSAG-Leonardo cameras

owned and operated by the Patrol. 

#### Registry

```text
SOURCE_ID:
    OH-OSHP-ELSAG-ALPR

OWNER:
    Ohio State Highway Patrol

VENDOR:
    ELSAG / Leonardo

TYPE:
    LAW_ENFORCEMENT_ALPR

PLATFORM:
    Vehicle-mounted + limited fixed sites

STATUS:
    🟢 VERIFIED
```

---

### 25. OSHP Flock Safety

Ohio subsequently purchased:

### Flock Safety

subscription access.

The official 2024 Controlling Board record authorized:

```text
FY2024:
    $90,000

FY2025:
    $90,000
```

for the Flock subscription. 

The request states that Flock provides stationary roadside LPR cameras and can alert subscribers when vehicles associated with NCIC records pass near Flock cameras. 

---

### 26. OSHP has two ALPR technologies

This is important.

Ohio is **not** simply a Flock state.

The documented architecture is:

```text
OHIO STATE HIGHWAY PATROL
│
├── Existing ELSAG / Leonardo
│   └── OSHP-owned cameras
│
└── Flock Safety
    └── subscription / network access
```

The official record explicitly says the Patrol would continue operating its ELSAG cameras **in addition to** purchasing Flock access. 

---

### 27. OSHP LPR deployment is still expanding

The Ohio Department of Public Safety's 2024 annual report states:

* OSHP acquired Flock user access in June 2024
* sworn officers can receive Flock alerts
* the alerts can concern stolen vehicles, missing persons and AMBER alerts
* OSHP continued working through deployment of LPR cameras at various locations around Ohio. ([Ohio Legislative Service Commission][7])

So:

```text
STATUS:
    🟢 ACTIVE

EXPANSION:
    🟢 DOCUMENTED

EXACT CURRENT STATEWIDE CAMERA COUNT:
    ❓ NOT ESTABLISHED
```

We should not invent a number.

---

### 28. Local Ohio Flock deployment

Ohio has substantial local Flock deployment as well.

One particularly useful recent source is a **2026 Ohio Supreme Court case involving Colerain Township Police Department**.

The court record states that Colerain Township has access to a Flock Safety database containing information captured by the township's license-plate readers. ([Supreme Court of Ohio][8])

That gives us primary judicial confirmation that:

```text
COLERAIN TOWNSHIP
    ↓
FLOCK SAFETY
    ↓
LOCAL ALPR DATABASE
```

exists.

---

### 29. Ohio ALPR public-record status

Ohio law is especially important here.

Ohio Revised Code §149.43 expressly exempts:

> images and data captured by an automated license plate recognition system that are maintained in a law enforcement database

from public-record disclosure. ([Ohio Laws][9])

#### ATLAS classification

```text
ALPR EXISTS:
    🟢

ALPR DEPLOYMENT METADATA:
    🟡

RAW PLATE DATA:
    🔴

LAW-ENFORCEMENT ALPR DATABASE:
    🔴

PUBLIC LIVE ALPR API:
    🔴
```

This is one of the clearest statutory barriers encountered so far.

---

### 30. Ohio ALPR source strategy

For Ohio, ATLAS should therefore collect:

```text
PUBLIC:
    agency
    vendor
    technology
    procurement
    deployment announcements
    fixed-location information when lawfully published
    contracts
    policies
    public maps

DO NOT ASSUME PUBLIC:
    plate records
    historical plate observations
    law-enforcement queries
    Flock database contents
```

---

### 31. Ohio statewide radio — MARCS

The major statewide radio system is:

### MARCS

**Multi-Agency Radio Communications System**

Ohio law defines MARCS in the Revised Code. ([Ohio Laws][10])

The statute also defines P25 systems as interoperable mission-critical public-safety communications systems. ([Ohio Laws][10])

#### Registry

```text
SOURCE_ID:
    OH-MARCS

OWNER:
    State of Ohio

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

BAND:
    700/800 MHz

STATUS:
    🟢 VERIFIED
```

---

### 32. MARCS network scale

Ohio documentation describes MARCS infrastructure as having:

### more than 200 towers

throughout the state. ([Cloudinary][11])

The system is:

```text
IP-based
P25 compliant
700/800 MHz
digital trunked
```

and supports:

* voice
* data
* vehicle location
* CAD-related functions. ([Cloudinary][11])

---

### 33. MARCS P25

Ohio's current approved-radio documentation is explicitly for:

### P25 MARCS

and the state requires approved P25 equipment. ([Cloudinary][12])

The current statutory framework also states that state-funded MARCS communications projects must be P25 systems. ([Ohio Laws][13])

#### Registry

```text
RADIO_STANDARD:
    APCO P25

NETWORK:
    DIGITAL TRUNKED

BAND:
    700/800 MHz

STATEWIDE:
    🟢
```

---

### 34. MARCS is heavily used by local agencies

This is confirmed directly by the public scanner ecosystem.

For example:

#### Columbus

Broadcastify currently identifies Columbus Police as operating on:

```text
Ohio MARCS-IP
```

([Broadcastify][14])

#### Cuyahoga County

Broadcastify identifies multiple MARCS-IP simulcast nodes. ([Broadcastify][15])

#### Summit County

Broadcastify identifies:

```text
Ohio MARCS-IP
Summit County Simulcast
```

([Broadcastify][16])

#### Allen County

Broadcastify identifies:

```text
Ohio MARCS-IP
Lima
```

([Broadcastify][17])

So this is not merely a state-police network.

It is a genuinely large **multi-agency statewide system**.

---

### 35. Ohio State Highway Patrol

OSHP is a major MARCS user.

Public feeds include:

```text
Ohio State Highway Patrol District 5
```

covering multiple posts. ([Broadcastify][18])

Another feed covers:

```text
Ohio State Highway Patrol District 1
```

with:

* Post 2
* Post 20
* Post 32
* Post 48
* Post 87
* Pursuit Region 1. ([Broadcastify][17])

---

### 36. Broadcastify Ohio

Current Broadcastify statistics show:

### 267 Ohio public-safety feeds

in the statewide directory. ([Broadcastify][19])

This is a dynamic count and should be timestamped.

#### Registry

```text
SOURCE_ID:
    OH-BROADCASTIFY

STATE:
    OH

PUBLIC_SAFETY_FEEDS:
    267

OBSERVED:
    2026-08-28

STATUS:
    🟢 VERIFIED
```

---

### 37. Broadcastify Calls

Ohio has significant managed SDR coverage.

For example, Cuyahoga County currently has:

```text
5 Calls ingest nodes
```

including:

```text
GCRCN
Ohio MARCS-IP — Cuyahoga County Simulcast
```

([Broadcastify][15])

Summit County also has multiple MARCS-IP Calls nodes. ([Broadcastify][16])

Allen County has a MARCS-IP Lima node. ([Broadcastify][17])

This is valuable because it provides a **second public-distribution layer** beyond individual scanner feeds.

---

### 38. Ohio Turnpike scanner source

Broadcastify also has an Ohio Turnpike public playlist.

It covers:

* Ohio Turnpike maintenance
* toll plazas
* Ohio State Patrol District 10. ([Broadcastify][15])

#### Registry

```text
SOURCE_ID:
    OH-TURNPIKE-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

COVERAGE:
    OHIO TURNPIKE

STATUS:
    🟢 VERIFIED
```

---

### 39. Cleveland example

Cuyahoga County currently has:

```text
16 audio feeds
```

including:

* Cleveland Police
* Cleveland Fire/EMS
* East Cleveland
* suburban departments
* county sheriff
* Metroparks. ([Broadcastify][15])

This makes Cuyahoga a particularly valuable local source cluster.

---

### 40. Franklin County example

Franklin County currently has:

### 13 public audio feeds

including:

* Columbus Police
* Columbus Fire
* Franklin County Sheriff
* Gahanna
* Grove City
* Westerville
* other agencies. ([Broadcastify][14])

Broadcastify also identifies Columbus Police as operating on MARCS-IP. ([Broadcastify][14])

---

### 41. Ohio scanner source architecture

The correct relationship is:

```text
OHIO MARCS
     │
     ├── Ohio State Highway Patrol
     ├── County sheriffs
     ├── Municipal police
     ├── Fire/EMS
     └── other public-safety agencies
              │
              ▼
       physical RF system
              │
              ▼
      public scanner receivers
              │
              ▼
         Broadcastify
              │
              ├── conventional audio feeds
              └── Broadcastify Calls
```

Do **not** treat Broadcastify as the underlying radio-system owner.

---

### 42. Ohio source architecture

Ohio now looks like:

```text
OHIO
│
├── ODOT
│   │
│   └── OHGO
│       ├── Cameras
│       ├── Incidents
│       ├── Construction
│       ├── Dangerous Slowdowns
│       ├── Digital Signs
│       ├── Travel Delays
│       ├── Weather Sensors
│       └── Work Zones
│
├── OHIO STATE HIGHWAY PATROL
│   │
│   ├── ELSAG / Leonardo ALPR
│   └── Flock Safety
│
├── LOCAL LAW ENFORCEMENT
│   └── Flock / other ALPR
│
├── MARCS
│   └── statewide P25 radio
│
└── PUBLIC AUDIO
    └── Broadcastify
        ├── ~267 feeds
        └── Calls / SDR nodes
```

---

### 43. Exact ATLAS source registry

#### Traffic cameras

```json
{
  "source_id": "OH-ODOT-CAMERA-API",
  "state": "OH",
  "owner": "Ohio Department of Transportation",
  "program": "OHGO",
  "type": "traffic_camera_inventory",
  "endpoint": "https://publicapi.ohgo.com/api/v1/cameras",
  "format": "JSON",
  "authentication": "API_KEY",
  "public_domain": true,
  "snapshot_refresh_seconds": 5,
  "supports_ptz": true,
  "supports_multiple_views": true,
  "confidence": "high"
}
```

---

#### ALPR

```json
{
  "source_id": "OH-OSHP-ALPR",
  "state": "OH",
  "owner": "Ohio State Highway Patrol",
  "technologies": [
    "ELSAG-Leonardo",
    "Flock Safety"
  ],
  "type": "law_enforcement_alpr",
  "public_raw_data": false,
  "confidence": "high"
}
```

---

#### State radio

```json
{
  "source_id": "OH-MARCS",
  "state": "OH",
  "owner": "State of Ohio",
  "type": "statewide_public_safety_radio",
  "standard": "P25",
  "band": "700/800 MHz",
  "trunked": true,
  "tower_count": "200+",
  "confidence": "high"
}
```

---

#### Scanner distribution

```json
{
  "source_id": "OH-BROADCASTIFY",
  "state": "OH",
  "type": "public_scanner_audio",
  "public_safety_feeds": 267,
  "observed": "2026-08-28",
  "confidence": "high"
}
```

---

### 44. Important legal/data distinction

Ohio gives us a particularly useful combination:

#### Traffic camera data

```text
PUBLIC DOMAIN:
    🟢
```

ODOT explicitly says the API data is public domain. ([OHGO API][1])

#### ALPR data

```text
LAW-ENFORCEMENT DATABASE DATA:
    🔴 EXEMPT
```

Ohio Revised Code §149.43 expressly exempts ALPR images and data maintained in a law-enforcement database. ([Ohio Laws][9])

So ATLAS can legitimately treat:

```text
ODOT CAMERA METADATA
```

very differently from:

```text
ALPR PLATE OBSERVATIONS
```

---

### 45. Ohio assessment

| Category                   |           Rating |
| -------------------------- | ---------------: |
| State traffic cameras      | 🟢 **Excellent** |
| Exact camera API           | 🟢 **Excellent** |
| Camera coordinates         |               🟢 |
| Camera views               |               🟢 |
| Snapshot URLs              |               🟢 |
| 5-second refresh           |               🟢 |
| PTZ metadata               |               🟢 |
| Public-domain status       | 🟢 **Excellent** |
| API authentication         |       🟡 API key |
| Traffic events             |               🟢 |
| Weather sensors            |               🟢 |
| Digital signs              |               🟢 |
| ALPR existence             | 🟢 **Excellent** |
| ALPR vendor identification |               🟢 |
| ALPR statewide inventory   |               🟡 |
| ALPR raw data              |               🔴 |
| Statewide radio            | 🟢 **Excellent** |
| P25                        |               🟢 |
| MARCS scale                |               🟢 |
| Public scanner coverage    | 🟢 **267 feeds** |
| Calls/SDR coverage         |               🟢 |

### **Overall: 9.6 / 10**

Ohio is another **high-priority ATLAS state**.

The strongest discoveries are:

### **1. Official ODOT camera API**

```text
https://publicapi.ohgo.com/api/v1/cameras
```

with exact coordinates, camera views, direction, PTZ information and snapshot URLs. ([OHGO API][2])

### **2. Five-second camera refresh**

ODOT explicitly documents that camera snapshots update every five seconds. ([OHGO API][2])

### **3. Public-domain transportation data**

ODOT explicitly says OHGO data is public domain and freely available. ([OHGO API][1])

### **4. Significant state ALPR program**

OSHP operates ELSAG/Leonardo ALPR equipment and purchased Flock Safety access. 

### **5. Statewide P25 radio**

MARCS is Ohio's statewide multi-agency P25 system, with more than 200 towers documented in state infrastructure records. ([Ohio Laws][10])

### **6. Massive public scanner layer**

Broadcastify currently lists **267 Ohio public-safety feeds**, with substantial MARCS-IP Calls coverage. ([Broadcastify][19])

**Ohio is complete.**

#### Next alphabetically: **Oklahoma**.

[1]: https://publicapi.ohgo.com/?utm_source=chatgpt.com "OHGO API Introduction"
[2]: https://publicapi.ohgo.com/docs/v1/cameras?utm_source=chatgpt.com "Camera Documentation"
[3]: https://publicapi.ohgo.com/docs/resources?utm_source=chatgpt.com "Resources"
[4]: https://publicapi.ohgo.com/docs/v1/api-results?utm_source=chatgpt.com "API Result Documentation"
[5]: https://publicapi.ohgo.com/docs/v1/filters?utm_source=chatgpt.com "Filters Documentation"
[6]: https://publicapi.ohgo.com/docs/change-log?utm_source=chatgpt.com "Change Log"
[7]: https://lsc.ohio.gov/assets/organizations/legislative-service-commission/monthly-agency-reports/agency-reports/files/psannualreport2024.pdf?utm_source=chatgpt.com "2024
ANNUAL REPORT"
[8]: https://www.supremecourt.ohio.gov/rod/docs/pdf/13/2026/2026-Ohio-1322.pdf?utm_source=chatgpt.com "Shaw v. Colerain Twp. Police Dept."
[9]: https://codes.ohio.gov/ohio-revised-code/section-149.43?utm_source=chatgpt.com "Section 149.43 - Ohio Revised Code | Ohio Laws"
[10]: https://codes.ohio.gov/ohio-revised-code/section-4501.30?utm_source=chatgpt.com "Section 4501.30 - Ohio Revised Code | Ohio Laws"
[11]: https://dam.assets.ohio.gov/image/upload/procure.ohio.gov/pdf/10182021162539OITRFQ-FY22-002%20%20HVAC.pdf?utm_source=chatgpt.com "State of Ohio, Department of Administrative Services, office of Information Technology"
[12]: https://dam.assets.ohio.gov/image/upload/v1768912847/das.ohio.gov/technology-strategy/marcs/31MPP_31_Approved_Radios_4SEP2025_worksheet1.pdf?utm_source=chatgpt.com "Approved P25 Radios for Ohio MARCS September 4th, 2025 in Concurrence with MARCS MPP 31.0 NOTE: Highlighted models either do not support radio authentication, or the manufacturer will no longer update the options in the radio to add radio authentication. If a highlighted radio model does not currently have radio authentication functionality, it cannot be added to MARCS or transferred between MARCS subscribers. |"
[13]: https://codes.ohio.gov/ohio-revised-code/chapter-4501?utm_source=chatgpt.com "Chapter 4501 - Ohio Revised Code | Ohio Laws"
[14]: https://status.broadcastify.com/listen/ctid/2064/publicsafety?utm_source=chatgpt.com "Franklin County, Ohio Audio Feeds"
[15]: https://status.broadcastify.com/listen/ctid/2057/publicsafety?utm_source=chatgpt.com "Cuyahoga County, Ohio Audio Feeds"
[16]: https://status.broadcastify.com/listen/ctid/2116/publicsafety?utm_source=chatgpt.com "Summit County, Ohio Audio Feeds"
[17]: https://status.broadcastify.com/listen/ctid/2041?utm_source=chatgpt.com "Allen County, Ohio Audio Feeds"
[18]: https://status.broadcastify.com/listen/ctid/2051/publicsafety?utm_source=chatgpt.com "Clark County, Ohio Audio Feeds"
[19]: https://status.broadcastify.com/listen/coid/1/publicsafety?utm_source=chatgpt.com "Browse Audio Feeds"
