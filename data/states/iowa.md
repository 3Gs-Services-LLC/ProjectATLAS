---
state: Iowa
usps: IA
slug: iowa
dossier_number: 15
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
  imported_from: project_atlas_state_data/Iowa.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Iowa (IA) - ATLAS State Record

> Dossier **15 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Iowa is another **very high-value state** for the project. The Iowa DOT is unusually good about publishing machine-readable transportation data, and Iowa currently has a substantial Flock ALPR footprint with public transparency portals that expose deployment statistics.

The most important finding is that Iowa DOT explicitly publishes **CCTV metadata, video streams, images, XML schemas, ESRI services, WZDx, traffic events, winter conditions, DMS, and Waze data**. ([Iowa DOT][1])

---

### 1. Iowa DOT 511

**Agency:** Iowa Department of Transportation
**System:** Iowa 511

[Iowa 511](https://511ia.org/?utm_source=chatgpt.com)

The official Iowa DOT describes 511 as the statewide traffic-information system covering interstates, U.S. routes and state highways. It provides traffic cameras, streaming video, road conditions, traffic events, weather information, Waze reports, DMS and other transportation information. ([Iowa DOT][2])

#### Classification

```text
SOURCE_ID:
    IA-IADOT-511

AGENCY:
    Iowa Department of Transportation

SYSTEM:
    Iowa 511

TYPE:
    statewide transportation information system

STATUS:
    🟢 OFFICIAL / ACTIVE
```

---

### 2. Iowa DOT 511 Data Feeds — primary source registry

This is the **most important Iowa page** for our project.

[Iowa DOT 511 Data Feeds](https://iowadot.gov/travel-tools/iowa-511/511-data-feeds?utm_source=chatgpt.com)

The DOT explicitly states that its 511 feeds contain:

* real-time traffic events
* cameras
* electronic message signs
* incidents/crashes
* construction
* special events
* camera video/images
* winter road conditions

and says the feeds are updated as individual events/devices become active, updated or expire. ([Iowa DOT][1])

This is exactly the kind of page our national source-discovery system should prioritize.

---

### 3. Iowa CCTV — official machine-readable camera feed

The official Iowa DOT feed registry exposes:

```text
data/cctv.xml
```

and identifies it as:

> Cameras (CCTV): Metadata, video streams, and images for DOT traffic cameras

It also exposes:

```text
schemas/CCTV.xsd
```

and a Cameras Interface Control Document. ([Iowa DOT][1])

#### Registry record

```text
SOURCE_ID:
    IA-IADOT-511-CCTV

AGENCY:
    Iowa Department of Transportation

SYSTEM:
    Iowa 511 / CARS-Hub

TYPE:
    TRAFFIC_CAMERA

FORMAT:
    XML

RESOURCE:
    data/cctv.xml

SCHEMA:
    schemas/CCTV.xsd

DATA:
    camera metadata
    video streams
    images

STATUS:
    🟢 OFFICIAL
```

**This is a Tier-1 source.**

---

### 4. Important Iowa CCTV change — May 20, 2026

This needs to be recorded in the database because old Iowa camera URLs may now be wrong.

On **May 20, 2026**, Iowa DOT migrated to a new traffic-camera video system. The DOT explicitly warned developers and data-feed users that camera image and video URLs changed. ([Iowa DOT][3])

The DOT specifically gives this example:

```text
old:
video4.iowadot.gov

future/load-balanced:
video.iowadot.gov
```

The DOT also says additional servers were expected to come online during the transition. ([Iowa DOT][3])

#### Engineering consequence

**Do not hard-code the current video hostname.**

The ingestion engine should obtain:

```text
camera_id
description
latitude
longitude
image_url
video_url
```

from the current camera feed.

---

### 5. Iowa CCTV ESRI service

Iowa provides a second, credential-free camera source.

The official DOT says its ESRI feature services:

> do not require credentials to access

and explicitly lists:

```text
Iowa DOT Traffic Cameras (CCTV)
```

among them. ([Iowa DOT][1])

This is extremely valuable.

We therefore have:

```text
IA-IADOT-511-CCTV-XML
        +
IA-IADOT-511-CCTV-ESRI
```

Both should be ingested.

---

### 6. Iowa DOT Open Data portal

Iowa DOT operates an official Open Data portal.

[Iowa DOT Open Data](https://data.iowadot.gov/?utm_source=chatgpt.com)

The portal also provides an OGC API - Records search API.

Its documented endpoints include:

```text
/api/search/v1/catalog
/api/search/v1/collections
/api/search/v1/collections/{collectionId}
/api/search/v1/collections/{collectionId}/queryables
/api/search/v1/collections/{collectionId}/items
```

This is a legitimate machine-readable catalog-discovery mechanism. ([IowaDOT Data][4])

#### Registry

```text
SOURCE_ID:
    IA-IADOT-OPEN-DATA

TYPE:
    DATA_CATALOG

PROTOCOL:
    OGC API - Records

STATUS:
    🟢 OFFICIAL
```

---

### 7. Traffic Cameras dataset

Iowa DOT specifically directs developers to its:

```text
Traffic Cameras
```

dataset on the official open-data portal.

The DOT's May 2026 migration notice says the dataset provides the current camera stream information and recommends downloading the CSV to obtain the current camera image/video URLs. ([Iowa DOT][3])

This gives us a third representation:

```text
CCTV XML
    ↓
ESRI Feature Service
    ↓
Open Data dataset / CSV
```

#### Do NOT treat these as three different physical camera networks.

They are multiple distribution mechanisms for the same underlying DOT camera inventory.

---

### 8. Iowa CCTV architecture

The Iowa source graph should therefore be:

```text
IOWA DOT
│
└── Iowa 511
    │
    ├── CCTV XML
    │   ├── metadata
    │   ├── images
    │   └── video streams
    │
    ├── CCTV ESRI
    │
    └── Open Data
        └── Traffic Cameras
```

This is an important distinction for the canonical source model.

---

### 9. Iowa traffic events

The official feed registry exposes:

```text
FEU-g
```

for:

> 511 Events and Winter Road Conditions

The registry identifies the feed as containing:

* construction
* unplanned events
* winter road conditions

and exposes:

```text
schemas/FEU-g.xsd
schemas/FEU-index.xsd
```

along with the corresponding Interface Control Document. ([Iowa DOT][1])

#### Registry

```text
SOURCE_ID:
    IA-IADOT-511-FEU-G

TYPE:
    TRAFFIC_EVENT

FORMAT:
    XML

STANDARD:
    TransCore FEU

STATUS:
    🟢 OFFICIAL
```

---

### 10. Iowa Waze CIFS

Iowa DOT also officially publishes a Waze-formatted event feed:

```text
data/waze/cifs.xml
```

with:

```text
schemas/Waze-CIFS.xsd
```

The DOT describes this as:

> 511 Event data formatted for Waze integration.

([Iowa DOT][1])

#### Registry

```text
SOURCE_ID:
    IA-IADOT-511-WAZE-CIFS

UPSTREAM:
    Waze

OWNER/PUBLISHER:
    Iowa DOT

FORMAT:
    XML

STANDARD:
    CIFS

TYPE:
    TRAFFIC_EVENT

STATUS:
    🟢 OFFICIAL
```

---

### 11. Iowa WZDx

Iowa DOT also publishes a Work Zone Data Exchange feed.

The official 511 feed page states:

> Iowa DOT's WZDx formatted geoJSON feed

and says it contains construction projects from the 511 website. ([Iowa DOT][1])

#### Registry

```text
SOURCE_ID:
    IA-IADOT-WZDX

TYPE:
    WORK_ZONE

FORMAT:
    GeoJSON

STANDARD:
    WZDx

STATUS:
    🟢 OFFICIAL
```

This is a particularly good source because it is already normalized toward a national transportation-data standard.

---

### 12. Iowa DMS

The Iowa DOT feed registry also exposes Electronic Message Sign data.

It specifically identifies:

```text
Electronic Message Signs (DMS)
```

with separate feeds for:

```text
signs with active messages
signs without messages
```

([Iowa DOT][1])

#### Registry

```text
IA-IADOT-511-DMS-ACTIVE
IA-IADOT-511-DMS-INACTIVE
```

```text
TYPE:
    DYNAMIC_MESSAGE_SIGN

CATEGORY:
    TRANSPORTATION_DEVICE
```

---

### 13. Iowa winter road conditions

The official ESRI services include:

```text
Iowa Winter Road Conditions
```

and the FEU-g feed also includes winter road-condition information. ([Iowa DOT][1])

#### Registry

```text
IA-IADOT-WINTER-CONDITIONS
```

```text
TYPE:
    ROAD_CONDITION

STATUS:
    🟢 OFFICIAL
```

---

### 14. Snow-plow cameras

Iowa 511 specifically advertises:

* snow-plow camera images
* snow-plow camera locations

as part of the public 511 system. ([Iowa DOT][5])

These should **not automatically be classified as ordinary fixed CCTV**.

Use:

```text
DEVICE_TYPE:
    SNOW_PLOW_CAMERA
```

when the source identifies the camera as such.

---

### 15. Iowa traffic-camera video recordings

Iowa DOT also provides a public process for requesting recorded traffic-camera video.

The official 511 page links to:

> Traffic Video Recordings request

([Iowa DOT][2])

This is not a live machine feed, so:

```text
TYPE:
    HISTORICAL_VIDEO_REQUEST

ACCESS:
    REQUEST-BASED

NOT:
    LIVE_FEED
```

---

### 16. Iowa automated traffic enforcement

Iowa has an unusually useful **official statewide GIS layer** for automated traffic enforcement.

The Iowa DOT ArcGIS REST service is:

```text
Hosted/Automated_Traffic_Enforcement
```

and contains:

```text
Automated Traffic Enforcement (ATE) Locations in Iowa
```

The service supports JSON queries. ([Iowa DOT GIS][6])

#### Registry

```text
SOURCE_ID:
    IA-IADOT-ATE

AGENCY:
    Iowa Department of Transportation

TYPE:
    AUTOMATED_TRAFFIC_ENFORCEMENT

FORMAT:
    ArcGIS FeatureServer

STATUS:
    🟢 OFFICIAL
```

This is a **major discovery**.

---

### 17. Automated traffic enforcement is different from ALPR

Do not combine these.

Iowa's ATE system is about:

```text
speed / traffic-law enforcement
```

while ALPR is:

```text
vehicle / registration-plate recognition
```

The Iowa Code defines automated or remote traffic-law enforcement as a camera/optical system working with a speed-measuring device to detect speed violations. ([Iowa General Assembly][7])

Therefore:

```text
IA-IADOT-ATE
    ≠
IA-FLOCK-ALPR
```

---

### 18. Iowa ATE permits are potentially valuable

Iowa Code §321P.2 requires a local authority to obtain an Iowa DOT permit for an automated traffic-enforcement system.

The permit application must include information such as:

* traffic violations
* crashes
* speed data
* traffic volume
* roadway/intersection measurements
* critical safety issues
* alternatives considered

and related records are treated as public records under Chapter 22. ([Iowa General Assembly][7])

That means the **permit records themselves are a potential secondary source for locating traffic-enforcement cameras**.

---

### 19. Iowa ALPR law

Iowa has a dedicated statutory section concerning ALPR:

```text
Iowa Code §321P.4
Automatic registration plate readers
```

The current Iowa Code provides a 30-day deletion requirement for plate images and accompanying data unless law enforcement copies them because they are relevant to an ongoing criminal case or investigation. ([Iowa General Assembly][8])

The Iowa Legislature is also actively considering additional ALPR legislation in 2026.

For example, HF2161 was introduced January 26, 2026, received a committee recommendation for passage, and had further legislative activity through August 27, 2026. ([Iowa General Assembly][9])

#### Important:

Do not encode proposed 2026 legislation as current operational law unless it has actually become law.

---

### 20. Iowa Flock ecosystem

This is where Iowa becomes particularly interesting.

There are numerous confirmed Flock deployments.

Flock itself maintains public transparency portals for individual Iowa agencies.

These portals expose:

* number of cameras
* retention
* unique vehicles detected
* searches
* hotlist hits
* sharing-network agencies
* policies
* public search audit availability

That makes them **actual public data sources**, even though the underlying plate-read database isn't publicly searchable.

---

### 21. Cedar Rapids Flock

**Agency:** Cedar Rapids Police Department

[Cedar Rapids Flock Transparency Portal](https://transparency.flocksafety.com/cedar-rapids-ia-pd?utm_source=chatgpt.com)

Current portal data:

```text
LPR cameras:
    70

Retention:
    30 days

Unique vehicles / last 30 days:
    545,976

Searches:
    1,023

Hotlist hits:
    21,112
```

The portal was updated July 26, 2026. ([Flock Safety Transparency][10])

A public deployment record also identifies a 70-camera installation in March 2025 under a $499,250 two-year Flock contract. ([Are You Flocked?][11])

#### Registry

```text
IA-CEDAR-RAPIDS-FLOCK
```

```text
TYPE:
    ALPR

VENDOR:
    Flock Safety

CAMERAS:
    70

RETENTION:
    30 days

STATUS:
    🟢 ACTIVE
```

---

### 22. Council Bluffs Flock

[Council Bluffs Flock Transparency Portal](https://transparency.flocksafety.com/council-bluffs-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    37

Retention:
    30 days

Unique vehicles / last 30 days:
    383,413

Searches:
    424
```

The portal also exposes a **Public Search Audit download**. ([Flock Safety Transparency][12])

A separate public-records-derived source documents 25 Flock ALPRs in April 2024, so the 2026 portal's 37-camera figure demonstrates why counts must be timestamped. ([Are You Flocked?][13])

#### Registry

```text
IA-COUNCIL-BLUFFS-FLOCK
```

---

### 23. Davenport Flock

[Davenport Flock Transparency Portal](https://transparency.flocksafety.com/davenport-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    10

Retention:
    30 days

Unique vehicles / last 30 days:
    251,044

Searches:
    291

Hotlist hits:
    6,936
```

([Flock Safety Transparency][14])

#### Registry

```text
IA-DAVENPORT-FLOCK
```

```text
TYPE:
    ALPR

CAMERAS:
    10

STATUS:
    🟢 ACTIVE
```

---

### 24. West Des Moines Flock

[West Des Moines Flock Transparency Portal](https://transparency.flocksafety.com/west-des-moines-ia-pd?utm_source=chatgpt.com)

Current portal reports:

```text
Total cameras:
    57

Retention:
    30 days

Unique vehicles / last 30 days:
    505,918

Searches:
    334
```

([Flock Safety Transparency][15])

#### Registry

```text
IA-WEST-DES-MOINES-FLOCK
```

---

### 25. Urbandale Flock

[Urbandale Flock Transparency Portal](https://transparency.flocksafety.com/urbandale-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    28

Retention:
    30 days

Unique vehicles / last 30 days:
    436,457

Searches:
    156
```

([Flock Safety Transparency][16])

#### Registry

```text
IA-URBANDALE-FLOCK
```

---

### 26. Clive Flock

[Clive Flock Transparency Portal](https://transparency.flocksafety.com/clive-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    20

Retention:
    30 days

Unique vehicles / last 30 days:
    507,413

Searches:
    84

Hotlist hits:
    6,078
```

([Flock Safety Transparency][17])

The Iowa Public Information Board also has a case specifically documenting Clive's Flock deployment and the kinds of data produced by the system. It describes stationary cameras capturing rear plate images and limited vehicle information, including make/model/color and other descriptors. ([Iowa Public Information Board][18])

---

### 27. Waukee Flock

[Waukee Flock Transparency Portal](https://transparency.flocksafety.com/waukee-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
LPR cameras:
    11

Retention:
    30 days

Unique vehicles / last 30 days:
    273,475

Searches:
    40
```

([Flock Safety Transparency][19])

**Important current-status issue:** Iowa Public Radio reported on August 27, 2026 that Waukee had decided to suspend its Flock service during the current Iowa regulatory debate. ([Axios][20])

So the database should record:

```text
DEPLOYMENT:
    confirmed

CURRENT_OPERATIONAL_STATUS:
    🟡 SUSPENDED / VERIFY

LAST KNOWN PORTAL:
    active transparency page
```

Do not blindly classify it as active merely because the Flock portal still exists.

---

### 28. University of Iowa Flock

[University of Iowa Police Flock Transparency Portal](https://transparency.flocksafety.com/university-of-iowa-pd-ia?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    26

Retention:
    30 days

Unique vehicles / last 30 days:
    266,700

Searches:
    113

Hotlist hits:
    1,761
```

([Flock Safety Transparency][21])

This is important because it proves that Iowa's ALPR ecosystem is not restricted to municipal police departments.

---

### 29. Dubuque Flock

[Dubuque Flock Transparency Portal](https://transparency.flocksafety.com/dubuque-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    22

Retention:
    30 days

Unique vehicles / last 30 days:
    406,475

Searches:
    207

Hotlist hits:
    7,506
```

([Flock Safety Transparency][22])

#### Registry

```text
IA-DUBUQUE-FLOCK
```

---

### 30. Le Mars Flock

[Le Mars Flock Transparency Portal](https://transparency.flocksafety.com/le-mars-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    5

Retention:
    30 days

Unique vehicles / last 30 days:
    61,549

Searches:
    32

Hotlist hits:
    358
```

([Flock Safety Transparency][23])

#### Registry

```text
IA-LE-MARS-FLOCK
```

---

### 31. Carlisle Flock

[Carlisle Flock Transparency Portal](https://transparency.flocksafety.com/carlisle-ia-pd?utm_source=chatgpt.com)

Current portal:

```text
Total cameras:
    5

Retention:
    30 days

Unique vehicles / last 30 days:
    97,021

Searches:
    12

Hotlist hits:
    672
```

([Flock Safety Transparency][24])

#### Registry

```text
IA-CARLISLE-FLOCK
```

---

### 32. Marshalltown

A city council packet from Oelwein includes a Flock case study identifying **Marshalltown PD** and stating that Flock initiated installation of a:

```text
32-camera system
```

on February 26, 2024. ([MCC Meetings][25])

#### Registry

```text
IA-MARSHALLTOWN-FLOCK
```

```text
CAMERAS:
    32 documented

EVIDENCE:
    municipal meeting packet

STATUS:
    🟢 DEPLOYMENT CONFIRMED
```

I would still seek a current Flock transparency portal or current city contract before assigning a 2026 active count.

---

### 33. Ankeny

Ankeny is currently confirmed as an ALPR deployment.

Recent reporting says Ankeny uses ALPR cameras through Flock and Axon and that its Flock contract runs through 2027. ([Axios][20])

#### Registry

```text
IA-ANKENY-ALPR
```

```text
VENDOR:
    Flock Safety / Axon ecosystem

TYPE:
    ALPR

STATUS:
    🟢 CURRENT
```

The exact current camera count should remain:

```text
UNKNOWN
```

until we obtain the current contract/deployment record.

---

### 34. Indianola — important status change

Indianola had a Flock ALPR program, but Iowa Public Radio reports that the city suspended its Flock contract on August 17, 2026. ([Iowa Public Radio][26])

Therefore:

```text
IA-INDIANOLA-FLOCK

DEPLOYMENT:
    🟢 CONFIRMED

CURRENT:
    🔴 SUSPENDED

DATE:
    2026-08-17
```

This is precisely why the national database needs temporal deployment states.

---

### 35. Iowa Flock data model

The transparency portals give us useful canonical fields:

```text
ALPR_DEPLOYMENT
{
    agency,
    vendor,
    camera_count,
    retention_days,
    unique_vehicles_30d,
    searches_30d,
    hotlist_hits_30d,
    sharing_network,
    policy_url,
    transparency_url,
    last_verified
}
```

This is **real observed data**, not a hypothetical schema.

---

### 36. Iowa Statewide Interoperable Communications System

Iowa's statewide public-safety radio network is **ISICS**.

[Iowa ISICS official page](https://dps.iowa.gov/bureaus-iowa-department-public-safety/interoperability-communications/isics?utm_source=chatgpt.com)

The Iowa Department of Public Safety describes ISICS as the statewide radio platform serving public-safety agencies and others throughout Iowa. ([Iowa Department of Public Safety][27])

---

### 37. ISICS technical details

Iowa DPS identifies ISICS as:

```text
700/800 MHz
P25
Phase II TDMA
two-zone statewide trunked system
```

with approximately:

```text
95% mobile coverage
260+ agencies
40,000+ radios
```

according to the state's 2024 annual report information. ([Iowa Department of Public Safety][28])

The state also says the system currently has more than **33,978 radios monitored by the communications bureau** and more than 140 tower sites. ([Iowa Department of Public Safety][29])

#### Registry

```text
SOURCE_ID:
    IA-ISICS

AGENCY:
    Iowa Department of Public Safety

TYPE:
    PUBLIC_SAFETY_RADIO

STANDARD:
    P25 Phase II TDMA

BAND:
    700/800 MHz

COVERAGE:
    statewide

STATUS:
    🟢 OFFICIAL / ACTIVE
```

---

### 38. ISICS tower data

The official ISICS page exposes:

```text
ISICS Tower Site Map
ISICS Tower Site List
Current ISICS Users
Talkgroup Fleetmap
```

([Iowa Department of Public Safety][27])

These are extremely valuable for a radio-source registry.

We should ingest at minimum:

```text
IA-ISICS-TOWERS
IA-ISICS-TALKGROUPS
IA-ISICS-USERS
```

as separate source records.

---

### 39. ISICS talkgroups

Iowa's official communications documentation publishes statewide and regional talkgroups.

The state's resource material identifies examples including:

```text
IACALL1
IATAC2
IATAC3
IATAC4
IATAC5
IATAC6
IATAC7E
IATAC8E
IATAC9E
IAEMTAC
```

with P25 Phase II characteristics. ([Iowa Department of Public Safety][30])

This is useful for determining what public scanner feeds are actually monitoring.

---

### 40. Encryption

The official state documentation identifies some ISICS talkgroups as encrypted.

For example:

```text
IATAC7E
IATAC8E
IATAC9E
```

are marked encrypted in the state's communications resource documentation. ([Iowa Department of Public Safety][30])

Therefore the radio database needs:

```text
encrypted:
    true / false / unknown
```

at the talkgroup level.

---

### 41. Broadcastify — Iowa

Iowa has a very large public scanner ecosystem.

[Broadcastify Iowa feeds](https://status.broadcastify.com/listen/stid/19?utm_source=chatgpt.com)

Current Broadcastify state statistics show:

```text
223 audio feeds
98 counties
102 public safety
17 rail
8 other
5 amateur radio
```

([Broadcastify][31])

That is an excellent discovery source.

---

### 42. Iowa scanner coverage

Broadcastify currently shows coverage in all **98 Iowa counties**. ([Broadcastify][31])

This makes Iowa unusually strong for the project's scanner layer.

The state page includes county-level counts for:

```text
Adair
Adams
Allamakee
Appanoose
...
Polk
Scott
Story
...
Woodbury
Wright
```

and essentially the entire state. ([Broadcastify][31])

---

### 43. Davenport / Quad Cities scanner source

A current Broadcastify feed covers:

* Davenport PD
* Bettendorf PD
* Scott County Sheriff
* multiple Quad Cities agencies
* Rock Island/Moline/East Moline on the Illinois side

and identifies the source as the Davenport-area **SARA P25 system**, using RTL-SDR/OP25 infrastructure. ([Broadcastify][32])

#### Registry

```text
IA-DAVENPORT-SARA-P25
```

```text
TYPE:
    PUBLIC_SCANNER_FEED

SYSTEM:
    SARA P25

INGEST:
    SDR / OP25

PUBLIC:
    🟢
```

---

### 44. Broadcastify is not the same as ISICS

This distinction is important:

```text
ISICS
    =
actual statewide radio infrastructure

Broadcastify
    =
public third-party Internet audio distribution
```

So:

```text
IA-ISICS
IA-BROADCASTIFY-IA
```

must remain separate source types.

---

### 45. Other Iowa radio systems

Iowa is not exclusively ISICS.

The state's own interoperability documentation identifies other local/regional P25 systems.

For example, the state master plan identifies:

```text
Woodbury County / Siouxland Tri-State Area Communications
```

as a Motorola P25 800-MHz simulcast system serving approximately 75 agencies across the Iowa/Nebraska/South Dakota tri-state region. ([Iowa Department of Public Safety][33])

This should become:

```text
IA-STARCOMM
```

with:

```text
TYPE:
    P25_TRUNKED_RADIO

REGION:
    Siouxland tri-state

STATUS:
    🟢 DOCUMENTED
```

---

### 46. Iowa police/CAD public data

Iowa has local public-safety datasets, but there is **no single statewide public CAD API** comparable to the statewide DOT transportation feeds.

For the national registry:

```text
STATEWIDE CAD:
    🔴 NOT FOUND

LOCAL CAD/CFS:
    🟢 FOUND
```

The best strategy is to search county/city open-data portals individually.

---

### 47. Iowa public ALPR individual reads

We need to be very clear here.

Iowa has substantial ALPR infrastructure, but:

```text
PUBLIC LIVE PLATE READ API:
    🔴 NOT FOUND

PUBLIC STATEWIDE PLATE-READ DATABASE:
    🔴 NOT FOUND

PUBLIC FLOCK SEARCH:
    🔴 NO

PUBLIC FLOCK TRANSPARENCY STATISTICS:
    🟢 YES
```

Flock's public portals expose aggregate usage and policy information, not the underlying plate-read records. ([Flock Safety Transparency][10])

---

### 48. Iowa ALPR source discovery is unusually good

Although the actual ALPR observations are restricted, Iowa gives us something useful:

```text
agency
vendor
camera count
retention
usage statistics
sharing network
policy
search audit availability
```

through Flock's transparency portals.

This makes Iowa one of the better states for building a **deployment inventory**.

---

### 49. Current confirmed Iowa Flock deployments

At minimum, we have direct/current Flock transparency evidence for:

```text
Cedar Rapids       70
Council Bluffs     37
Davenport          10
West Des Moines    57
Urbandale          28
Clive              20
Waukee             11*
University of Iowa 26
Dubuque            22
Le Mars             5
Carlisle             5
```

*Waukee's portal reports 11, but current reporting indicates the city suspended its Flock service in August 2026. ([Flock Safety Transparency][10])

That is already **291 documented cameras** across these listed deployments before considering additional Iowa agencies.

**Do not treat 291 as the statewide total.**

There are additional deployments.

---

### 50. Iowa Flock network-sharing discovery

The transparency portals expose extensive sharing networks.

For example, Cedar Rapids' portal lists numerous agencies receiving access to its data, including Iowa agencies such as:

```text
Altoona IA PD
Ankeny IA PD
Bettendorf IA PD
```

and many agencies outside Iowa. ([Flock Safety Transparency][10])

Council Bluffs similarly lists:

```text
Marshalltown IA PD
Newton IA PD
North Liberty IA PD
Sioux City IA PD
University of Iowa PD
Urbandale IA PD
West Des Moines IA PD
Woodbury County IA SO
```

among its sharing network. ([Flock Safety Transparency][12])

This is a major relationship source.

---

### 51. Flock relationship graph

The database should therefore support:

```text
AGENCY
   │
   ├── OWNS/OPERATES
   │       ↓
   │     FLOCK DEPLOYMENT
   │
   └── SHARES_WITH
           ↓
       OTHER AGENCY
```

This is not speculation—the Flock transparency pages actually publish the sharing relationships. ([Flock Safety Transparency][10])

---

### 52. Iowa surveillance ecosystem

The current evidence establishes these categories:

```text
TRAFFIC CAMERA
    Iowa DOT CCTV

SNOW-PLOW CAMERA
    Iowa DOT 511

AUTOMATED TRAFFIC ENFORCEMENT
    Iowa DOT ATE GIS

ALPR
    Flock + other deployments

PUBLIC SAFETY RADIO
    ISICS

PUBLIC SCANNER AUDIO
    Broadcastify + independent feeds

TRAFFIC EVENTS
    Iowa DOT FEU-g

WAZE EVENTS
    Iowa DOT CIFS

WORK ZONES
    WZDx

DMS
    Iowa DOT

WINTER CONDITIONS
    Iowa DOT
```

---

### 53. Iowa source hierarchy

```text
IOWA
│
├── Iowa DOT
│   └── 511
│       ├── CCTV XML
│       ├── CCTV ESRI
│       ├── Traffic Events
│       ├── Waze CIFS
│       ├── WZDx
│       ├── Winter Conditions
│       ├── DMS
│       ├── Snow-Plow Cameras
│       └── ATE GIS
│
├── Iowa DPS
│   └── ISICS
│       ├── towers
│       ├── talkgroups
│       └── users
│
├── Municipal / University Police
│   └── Flock
│       ├── Cedar Rapids
│       ├── Council Bluffs
│       ├── Davenport
│       ├── Clive
│       ├── Dubuque
│       ├── Le Mars
│       ├── Carlisle
│       ├── Urbandale
│       ├── WDM
│       ├── Waukee
│       └── University of Iowa
│
└── Third Party
    └── Broadcastify
        └── 223 Iowa feeds
```

---

### 54. Exact Iowa source registry

| Source ID                  | Agency            | Data            | Type                   | Status        |
| -------------------------- | ----------------- | --------------- | ---------------------- | ------------- |
| `IA-IADOT-511-CCTV`        | Iowa DOT          | CCTV XML        | **Camera**             | 🟢            |
| `IA-IADOT-511-CCTV-ESRI`   | Iowa DOT          | CCTV GIS        | **Camera**             | 🟢            |
| `IA-IADOT-511-OPEN-DATA`   | Iowa DOT          | Camera dataset  | **Camera**             | 🟢            |
| `IA-IADOT-511-FEU-G`       | Iowa DOT          | Events/winter   | Traffic                | 🟢            |
| `IA-IADOT-511-WAZE-CIFS`   | Iowa DOT/Waze     | Events          | Traffic                | 🟢            |
| `IA-IADOT-WZDX`            | Iowa DOT          | Work zones      | Traffic                | 🟢            |
| `IA-IADOT-DMS`             | Iowa DOT          | Message signs   | Device                 | 🟢            |
| `IA-IADOT-WINTER`          | Iowa DOT          | Road conditions | Weather/road           | 🟢            |
| `IA-IADOT-SNOWPLOW-CAM`    | Iowa DOT          | Plow cameras    | **Camera**             | 🟢            |
| `IA-IADOT-ATE`             | Iowa DOT          | ATE locations   | **Enforcement camera** | 🟢            |
| `IA-ISICS`                 | Iowa DPS          | State radio     | Radio                  | 🟢            |
| `IA-ISICS-TOWERS`          | Iowa DPS          | Tower sites     | Radio infrastructure   | 🟢            |
| `IA-ISICS-TALKGROUPS`      | Iowa DPS          | Talkgroups      | Radio                  | 🟢            |
| `IA-STARCOMM`              | Regional          | P25 radio       | Radio                  | 🟢            |
| `IA-BROADCASTIFY`          | Third party       | Scanner feeds   | Audio                  | 🟢            |
| `IA-CEDAR-RAPIDS-FLOCK`    | Cedar Rapids PD   | Flock           | **ALPR**               | 🟢            |
| `IA-COUNCIL-BLUFFS-FLOCK`  | Council Bluffs PD | Flock           | **ALPR**               | 🟢            |
| `IA-DAVENPORT-FLOCK`       | Davenport PD      | Flock           | **ALPR**               | 🟢            |
| `IA-WEST-DES-MOINES-FLOCK` | WDM PD            | Flock           | **ALPR**               | 🟢            |
| `IA-URBANDALE-FLOCK`       | Urbandale PD      | Flock           | **ALPR**               | 🟢            |
| `IA-CLIVE-FLOCK`           | Clive PD          | Flock           | **ALPR**               | 🟢            |
| `IA-WAUKEE-FLOCK`          | Waukee PD         | Flock           | **ALPR**               | 🟡 Suspended  |
| `IA-UNIVERSITY-IOWA-FLOCK` | UI PD             | Flock           | **ALPR**               | 🟢            |
| `IA-DUBUQUE-FLOCK`         | Dubuque PD        | Flock           | **ALPR**               | 🟢            |
| `IA-LE-MARS-FLOCK`         | Le Mars PD        | Flock           | **ALPR**               | 🟢            |
| `IA-CARLISLE-FLOCK`        | Carlisle PD       | Flock           | **ALPR**               | 🟢            |
| `IA-MARSHALLTOWN-FLOCK`    | Marshalltown PD   | Flock           | **ALPR**               | 🟢 documented |
| `IA-ANKENY-ALPR`           | Ankeny PD         | ALPR            | **ALPR**               | 🟢            |

---

### 55. Iowa's strongest sources

#### 🥇 Iowa DOT CCTV

**10/10**

This is an exceptional source because we have:

```text
XML
XSD
ESRI
Open Data
video
images
metadata
```

and the DOT explicitly maintains developer documentation. ([Iowa DOT][1])

---

#### 🥇 Iowa DOT ATE

**10/10**

The state exposes an actual ArcGIS FeatureServer containing:

```text
Automated Traffic Enforcement
Locations in Iowa
```

with JSON querying. ([Iowa DOT GIS][6])

---

#### 🥇 Iowa Flock transparency

**9.5/10**

The transparency system gives actual deployment counts and live-ish aggregate statistics.

---

#### 🥇 ISICS

**9.5/10**

Actual statewide P25 Phase-II infrastructure with official tower and talkgroup documentation. ([Iowa Department of Public Safety][28])

---

#### 🥇 Broadcastify

**9/10**

223 feeds covering all 98 counties as of this research pass. ([Broadcastify][31])

---

### 56. What Iowa does NOT publicly provide

```text
🔴 statewide public ALPR plate-read API
🔴 statewide Flock plate-read search
🔴 statewide public police CAD API
🔴 statewide live ISICS Internet audio feed
🔴 unrestricted access to every Flock camera's raw observations
🔴 one official statewide ALPR camera inventory
```

But Iowa has unusually good **deployment and infrastructure evidence**.

---

### 57. Critical Iowa finding

Iowa is another state where the national engine should **not scrape the public 511 webpage**.

The correct architecture is:

```text
Iowa DOT
   ↓
511 Data Feed Registry
   ↓
CCTV XML / ESRI / Open Data
   ↓
Canonical Camera Registry
```

The official DOT explicitly says the ESRI feeds do not require credentials. ([Iowa DOT][1])

That is substantially better than trying to reverse-engineer the 511 frontend.

---

### 58. Iowa final classification

| Category                                | Iowa     |
| --------------------------------------- | -------- |
| Official statewide traffic system       | 🟢       |
| Official machine-readable traffic feeds | 🟢       |
| Official CCTV XML                       | 🟢       |
| CCTV schema                             | 🟢       |
| CCTV ESRI                               | 🟢       |
| Camera image URLs                       | 🟢       |
| Camera video URLs                       | 🟢       |
| Current camera URL migration documented | 🟢       |
| Waze CIFS                               | 🟢       |
| WZDx                                    | 🟢       |
| DMS                                     | 🟢       |
| Winter road conditions                  | 🟢       |
| Snow-plow cameras                       | 🟢       |
| Automated traffic-enforcement GIS       | 🟢       |
| ALPR infrastructure                     | 🟢       |
| Flock transparency                      | 🟢       |
| Public ALPR reads                       | 🔴       |
| Statewide P25 radio                     | 🟢       |
| Official tower inventory                | 🟢       |
| Official talkgroup data                 | 🟢       |
| Public scanner feeds                    | 🟢       |
| Scanner county coverage                 | 🟢 98/98 |
| Statewide CAD                           | 🔴       |
| Local public CAD/CFS                    | 🟡       |
| Statewide ALPR inventory                | 🔴       |
| Public Flock aggregate data             | 🟢       |

---

### 59. Iowa priority for the national database

```text
PRIORITY 1
IA-IADOT-511-CCTV
IA-IADOT-511-CCTV-ESRI
IA-IADOT-511-OPEN-DATA

PRIORITY 2
IA-IADOT-ATE

PRIORITY 3
IA-IADOT-511-FEU-G
IA-IADOT-511-WAZE-CIFS
IA-IADOT-WZDX

PRIORITY 4
IA-ISICS
IA-ISICS-TOWERS
IA-ISICS-TALKGROUPS

PRIORITY 5
ALL CONFIRMED FLOCK DEPLOYMENTS

PRIORITY 6
IA-BROADCASTIFY

PRIORITY 7
LOCAL CAD / POLICE OPEN DATA
```

#### Iowa rating: **VERY HIGH PRIORITY — 10/10**

The particularly important discoveries for the national project are **the official Iowa DOT CCTV ESRI/XML feeds, the statewide Automated Traffic Enforcement FeatureServer, and the unusually transparent Flock deployment ecosystem**. ([Iowa DOT][1])

**Next alphabetically: Kansas.**

[1]: https://iowadot.gov/travel-tools/iowa-511/511-data-feeds?utm_source=chatgpt.com "511 Data Feeds | Department of Transportation"
[2]: https://iowadot.gov/travel-tools/iowa-511?utm_source=chatgpt.com "Iowa 511 | Department of Transportation"
[3]: https://iowadot.gov/news/2026-05-28/media-advisory-iowa-dot-updates-traffic-camera-video-system-data-feed-usersdevelopers?utm_source=chatgpt.com "Media Advisory: Iowa DOT Updates Traffic Camera Video System for Data Feed Users/Developers | Department of Transportation"
[4]: https://data.iowadot.gov/api/search/definition/?utm_source=chatgpt.com "Iowa Department of Transportation - Open Data Search API"
[5]: https://iowadot.gov/travel-tools/iowa-511/website-and-apps?utm_source=chatgpt.com "Website and Apps | Department of Transportation"
[6]: https://gis.iowadot.gov/agshost/rest/services/Hosted/Automated_Traffic_Enforcement/FeatureServer?utm_source=chatgpt.com "Hosted/Automated_Traffic_Enforcement (FeatureServer)"
[7]: https://www.legis.iowa.gov/docs/code/2025/321P.pdf?utm_source=chatgpt.com "AUTOMATED TRAFFIC ENFORCEMENT, §321P.2"
[8]: https://www.legis.iowa.gov/docs/ico/chapter/321P.pdf?utm_source=chatgpt.com "§321P.2, AUTOMATED TRAFFIC ENFORCEMENT 2"
[9]: https://www.legis.iowa.gov/legislation/billTracking/billHistory?billName=HF2161&enhanced=false&ga=91&utm_source=chatgpt.com "Iowa Legislature - Bill History"
[10]: https://transparency.flocksafety.com/cedar-rapids-ia-pd?utm_source=chatgpt.com "Flock Safety - Cedar Rapids IA PD Transparency Portal"
[11]: https://areyouflocked.com/iowa/cedar-rapids?utm_source=chatgpt.com "Does Cedar Rapids, Iowa Have Flock Cameras? Locations, Map & Records"
[12]: https://transparency.flocksafety.com/council-bluffs-ia-pd?utm_source=chatgpt.com "Flock Safety - Council Bluffs IA PD Transparency Portal"
[13]: https://areyouflocked.com/iowa/council-bluffs?utm_source=chatgpt.com "Does Council Bluffs, Iowa Have Flock Cameras? Locations, Map & Records"
[14]: https://transparency.flocksafety.com/davenport-ia-pd?utm_source=chatgpt.com "Flock Safety - Davenport IA PD Transparency Portal"
[15]: https://transparency.flocksafety.com/west-des-moines-ia-pd?utm_source=chatgpt.com "Flock Safety - West Des Moines IA PD Transparency Portal"
[16]: https://transparency.flocksafety.com/urbandale-ia-pd?utm_source=chatgpt.com "Flock Safety - Urbandale IA PD Transparency Portal"
[17]: https://transparency.flocksafety.com/clive-ia-pd?utm_source=chatgpt.com "Flock Safety - Clive IA PD Transparency Portal"
[18]: https://ipib.iowa.gov/23fc0127-hendrick-van-peltcity-clive-dismissal-order?utm_source=chatgpt.com "23FC:0127- Hendrick van Pelt/City of Clive - Dismissal Order | Iowa Public Information Board"
[19]: https://transparency.flocksafety.com/waukee-ia-pd?utm_source=chatgpt.com "Flock Safety - Waukee IA PD Transparency Portal"
[20]: https://www.axios.com/local/des-moines/2026/08/27/ankeny-holds-steady-on-flock-cameras-for-now?utm_source=chatgpt.com "Ankeny holds steady on Flock cameras for now"
[21]: https://transparency.flocksafety.com/university-of-iowa-pd-ia?utm_source=chatgpt.com "Flock Safety - University of Iowa PD (IA) Transparency Portal"
[22]: https://transparency.flocksafety.com/dubuque-ia-pd?utm_source=chatgpt.com "Flock Safety - Dubuque IA PD Transparency Portal"
[23]: https://transparency.flocksafety.com/le-mars-ia-pd?utm_source=chatgpt.com "Flock Safety - Le Mars IA PD Transparency Portal"
[24]: https://transparency.flocksafety.com/carlisle-ia-pd?utm_source=chatgpt.com "Flock Safety - Carlisle IA PD Transparency Portal"
[25]: https://mccmeetings.blob.core.usgovcloudapi.net/oelweinia-pubu/MEET-Packet-61cc2e9ba4094b1bac4674b4378de294.pdf?utm_source=chatgpt.com "Agenda 
City Council Work Session Meeting 
Oelwein"
[26]: https://www.iowapublicradio.org/ipr-news/2026-08-27/flock-cameras-privacy-concerns-indianola?utm_source=chatgpt.com "Cities around Iowa ditch Flock cameras amid growing privacy concerns | Iowa Public Radio"
[27]: https://dps.iowa.gov/bureaus-iowa-department-public-safety/interoperability-communications/isics?utm_source=chatgpt.com "Iowa Statewide Interoperability Communications System (ISICS) | Iowa Department of Public Safety"
[28]: https://dps.iowa.gov/bureaus-iowa-department-public-safety/interoperability-communications/isicsb/isicsb?utm_source=chatgpt.com "About the Iowa Statewide Interoperable Communications System Board (ISICSB) | Iowa Department of Public Safety"
[29]: https://dps.iowa.gov/bureaus-iowa-department-public-safety/interoperability-communications/about-interoperability-communications-bureau?utm_source=chatgpt.com "About the Interoperability Communications Bureau | Iowa Department of Public Safety"
[30]: https://dps.iowa.gov/media/696/download?inline=&utm_source=chatgpt.com "State of Iowa"
[31]: https://status.broadcastify.com/listen/stid/19?utm_source=chatgpt.com "Iowa Audio Feeds"
[32]: https://status.broadcastify.com/listen/feed/28286?utm_source=chatgpt.com "Davenport and Quad Cities Metro Police, Fire / EMS"
[33]: https://dps.iowa.gov/media/645/download?inline=&utm_source=chatgpt.com "Iowa Statewide Interoperable"
