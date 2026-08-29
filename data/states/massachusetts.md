---
state: Massachusetts
usps: MA
slug: massachusetts
dossier_number: 21
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
  imported_from: project_atlas_state_data/Massachesetts.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Massachusetts (MA) - ATLAS State Record

> Dossier **21 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Massachusetts is another **high-value state**, but its architecture is different from Maryland.

The important distinction is:

* **MassDOT/Mass511** → statewide public traffic cameras and transportation data
* **TrafficLand** → authorized third-party distribution mechanism for MassDOT camera imagery
* **Boston BTD** → separate municipal traffic-camera GIS
* **Massachusetts State Police / CoMIRS** → statewide law-enforcement/public-safety infrastructure
* **Local police departments** → large and rapidly changing ALPR/Flock ecosystem
* **Boston** → unusually good municipal surveillance reporting
* **Broadcastify** → very large public scanner ecosystem

I found several **exact machine-readable sources**, including an official Boston ArcGIS camera layer and MassDOT's documented developer APIs.

---

### 1. Massachusetts Department of Transportation

Massachusetts Department of Transportation (**MassDOT**) operates the state's highway transportation-information infrastructure and Mass511.

MassDOT's current developer documentation explicitly identifies multiple feeds and APIs for roadway information. ([Massachusetts Government][1])

#### Registry

```text
SOURCE_ID:
    MA-MASSDOT

OWNER:
    Massachusetts Department of Transportation

SYSTEM:
    Mass511 / Highway Operations Center

TYPE:
    STATEWIDE_TRANSPORTATION_ATMS

STATUS:
    🟢 VERIFIED
```

---

### 2. Mass511

**Mass511** is the official Massachusetts traveler-information system.

MassDOT describes Mass511 as providing:

* live traffic cameras
* travel times
* traffic conditions
* incidents
* construction
* road closures
* weather information

The current official Mass511 application description also confirms statewide traffic cameras and near-real-time traffic incidents, construction, weather and closures. ([App Store][2])

[Official Mass511](https://mass511.com/?utm_source=chatgpt.com)

#### Registry

```text
SOURCE_ID:
    MA-MASS511

TYPE:
    511_TRAVELER_INFORMATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 ACTIVE
```

---

### 3. MassDOT Traffic Cameras

This is the primary statewide Massachusetts camera source.

MassDOT's current developer documentation says MassDOT provides access to its traffic cameras through an API delivering **live JPEG imagery**, with images available at a rate of approximately **one frame per 120 seconds**. ([Massachusetts Government][1])

The official documentation says access is coordinated through TrafficLand.

That means the architecture is:

```text
MassDOT
   ↓
Traffic camera infrastructure
   ↓
TrafficLand distribution API
   ↓
Authorized developer
```

This is **not the same as saying the API is anonymous/public with no credentials**.

MassDOT specifically instructs developers to contact TrafficLand for a unique API feed. ([Massachusetts Government][1])

#### Registry

```text
SOURCE_ID:
    MA-MASSDOT-CCTV

TYPE:
    STATEWIDE_TRAFFIC_CCTV

FORMAT:
    JPEG

UPDATE:
    ~120 seconds

ACCESS:
    🟡 Developer access required

STATUS:
    🟢 VERIFIED
```

---

### 4. Historical MassDOT camera inventory evidence

MassDOT's ITS documentation provides useful historical architecture information.

A MassDOT annual report documented:

```text
81 public traffic cameras
```

on the most heavily traveled routes, including:

```text
I-90
I-93
I-95
Route 3
Route 6 near Sagamore Bridge
```

and stated that MassDOT made an XML feed available to third-party developers. ([Massachusetts Government][3])

That same report described a separate Massachusetts Interagency Video Information System (**MIVIS**) supporting **73 live traffic cameras** for agency partners, first responders and emergency personnel. ([Massachusetts Government][3])

This is historical evidence, not a current inventory count.

Do **not** load 81 or 73 into the current registry as today's camera count.

Instead:

```text
historical_camera_count
observed_year
source_document
```

---

### 5. MassDOT MIVIS

MassDOT has a separate video-sharing system:

```text
MIVIS
Massachusetts Interagency Video Information System
```

The official MassDOT documentation describes MIVIS as providing situational and operational awareness to:

* agency partners
* first responders
* emergency personnel

The 2014 documentation recorded 73 live traffic cameras in MIVIS at that time. ([Massachusetts Government][3])

#### Registry

```text
SOURCE_ID:
    MA-MIVIS

OWNER:
    MassDOT

TYPE:
    INTERAGENCY_VIDEO

PUBLIC_ACCESS:
    🔴 Not established

AUTHORIZED_PARTNERS:
    🟢

STATUS:
    🟢 VERIFIED SYSTEM
```

Important:

**MIVIS should not be treated as a public camera feed.**

It belongs in the surveillance/infrastructure inventory because its existence and purpose are publicly documented, but we should not attempt to obtain restricted feeds.

---

### 6. TrafficLand — MassDOT camera distribution

TrafficLand is particularly important for Massachusetts.

MassDOT's current developer page explicitly directs developers seeking MassDOT camera API access to TrafficLand. ([Massachusetts Government][1])

TrafficLand's API documentation describes the API as providing JPEG captures and metadata for traffic cameras.

The documented metadata includes:

```text
camera ID
camera name
status
direction
latitude
longitude
refresh rate
DOT source
city code
ZIP
video URL
```

([TrafficLand API][4])

[TrafficLand API documentation](https://api.trafficland.com/docs?utm_source=chatgpt.com)

#### Critical access distinction

TrafficLand requires:

```text
system
+
key
```

for API requests. ([TrafficLand API][4])

So:

```text
SOURCE:
    🟢 VERIFIED

API:
    🟢 VERIFIED

ANONYMOUS ACCESS:
    🔴 NO

OPERATOR-SUPPLIED CREDENTIALS:
    🟢 REQUIRED
```

This fits the project's rule:

> If an API key is required, the operator supplies it.

We **do not attempt to bypass it**.

---

### 7. MassDOT Connected Work Zones

MassDOT has a current machine-readable work-zone feed.

The official developer page says the **Connected Work Zones (CWZ)** dataset provides current and planned Massachusetts work-zone events in a machine-readable format based on WZDx. ([Massachusetts Government][1])

Access requires:

```text
free account
+
API key
```

#### Registry

```text
SOURCE_ID:
    MA-MASSDOT-CWZ

TYPE:
    WORK_ZONE

STANDARD:
    CWZ / WZDx-derived

FORMAT:
    MACHINE_READABLE

ACCESS:
    🟡 API KEY

STATUS:
    🟢 VERIFIED
```

---

### 8. MassDOT roadway events

MassDOT documents a **Roadway Events** feed.

The official description says it contains current incident information from the Highway Division that may affect roadway travel.

It explicitly warns:

> It does not include all incidents in Massachusetts.

([Massachusetts Government][1])

This distinction is important.

#### Registry

```text
SOURCE_ID:
    MA-MASSDOT-ROADWAY-EVENTS

TYPE:
    TRAFFIC_INCIDENTS

SCOPE:
    MASSDOT_HIGHWAY_DIVISION

STATEWIDE_COMPLETE:
    🔴 NO

STATUS:
    🟢 VERIFIED
```

---

### 9. MassDOT Planned Roadway Events XML

MassDOT also documents:

```text
Massachusetts Planned Roadway Events XML Feed
```

as part of its developer resources. ([Massachusetts Government][1])

#### Registry

```text
SOURCE_ID:
    MA-MASSDOT-PLANNED-EVENTS

TYPE:
    PLANNED_ROADWAY_EVENTS

FORMAT:
    XML

STATUS:
    🟢 VERIFIED
```

---

### 10. MassDOT Real-Time Travel Times

MassDOT provides a real-time travel-time system.

The official developer documentation says the system provides real-time travel times and also generates travel-time information for variable-message signs on selected highways. ([Massachusetts Government][1])

Access is through the:

```text
GoTime Third-Party API
```

and authorized developer access is required. ([Massachusetts Government][1])

#### Registry

```text
SOURCE_ID:
    MA-MASSDOT-GOTIME

TYPE:
    REAL_TIME_TRAVEL_TIME

STATUS:
    🟢 VERIFIED

ACCESS:
    🟡 AUTHORIZED_DEVELOPER
```

---

### 11. Boston municipal traffic cameras

This is a **major additional discovery**.

Boston Transportation Department exposes a dedicated ArcGIS Feature Layer named:

```text
TrafficCameras
```

through the City of Boston GIS portal.

The official ArcGIS layer supports:

```text
JSON
GeoJSON
PBF
```

and allows querying, pagination, statistics and spatial queries. ([Boston GIS Portal][5])

#### Exact layer

[Boston TrafficCameras ArcGIS layer](https://gisportal.boston.gov/arcgis/rest/services/BTD/Cartegraph_BTD_readonly/MapServer/30?utm_source=chatgpt.com)

#### Exact query endpoint

[Boston TrafficCameras query endpoint](https://gisportal.boston.gov/ArcGIS/rest/services/BTD/Cartegraph_BTD_readonly/FeatureServer/30/query?utm_source=chatgpt.com)

---

### 12. Boston camera fields

The official Boston layer exposes fields including:

```text
OBJECTID
Description1
Model
Offset
Offset_unit
SerialNumber
Type1
WarrantyExpiration
Manufacturer
```

and additional GIS attributes. ([Boston GIS Portal][5])

This is particularly useful because this is **not merely a map tile**.

It's an actual queryable GIS feature layer.

#### Registry

```text
SOURCE_ID:
    MA-BOSTON-BTD-CCTV

OWNER:
    Boston Transportation Department

TYPE:
    MUNICIPAL_TRAFFIC_CCTV

FORMAT:
    ArcGIS FeatureServer

JSON:
    🟢

GEOJSON:
    🟢

PBF:
    🟢

SPATIAL_QUERY:
    🟢

STATUS:
    🟢 VERIFIED
```

---

### 13. Boston traffic camera source should be separate from MassDOT

Do not merge:

```text
MA-MASSDOT-CCTV
```

and:

```text
MA-BOSTON-BTD-CCTV
```

They represent different owners.

The database should instead show:

```text
MassDOT
   └── statewide highway cameras

Boston BTD
   └── municipal traffic cameras
```

This is exactly the type of source separation the national ingestion engine needs.

---

### 14. Boston surveillance technology reporting

Boston has one of the strongest municipal surveillance-transparency systems I've found.

Boston's surveillance ordinance requires departments to:

* publish policies describing surveillance technology
* report annually on how surveillance technology was actually used
* submit reports to the Mayor and City Council

Boston maintains annual surveillance reports for 2023 and 2024. ([Boston.gov][6])

[Boston Surveillance Technology portal](https://www.boston.gov/departments/mayors-office/bostons-use-surveillance-technology?utm_source=chatgpt.com)

This is a **high-value discovery source** for:

```text
CCTV
ALPR
body cameras
cell-site simulators
surveillance databases
other technologies
```

---

### 15. Boston Police ALPR — 3M system

Boston's 2024 annual surveillance report provides unusually precise information.

During 2024, Boston Police operated:

```text
fewer than 10
```

license plate readers on the:

```text
3M ALPR System
```

The report says the equipment was decommissioned on:

```text
April 29, 2025
```

([Boston.gov][7])

#### Registry

```text
SOURCE_ID:
    MA-BOSTON-PD-3M-ALPR

AGENCY:
    Boston Police Department

VENDOR:
    3M

TYPE:
    ALPR

2024_UNITS:
    <10

STATUS:
    🔴 DECOMMISSIONED
DATE:
    2025-04-29
```

This should remain in the database as **historical infrastructure**.

---

### 16. Boston Flock trial

Boston subsequently began a short-term Flock Safety trial.

The 2024 annual report states that beginning:

```text
April 1, 2025
```

Boston Police began an approximately 90-day trial of Flock Safety with approximately:

```text
45 ALPR cameras
```

([Boston.gov][7])

#### Registry

```text
SOURCE_ID:
    MA-BOSTON-PD-FLOCK-TRIAL

AGENCY:
    Boston Police Department

VENDOR:
    Flock Safety

TYPE:
    ALPR

CAMERAS:
    ~45

START:
    2025-04-01

TYPE:
    TRIAL
```

Do **not** automatically classify these 45 as currently active in 2026. The report establishes the trial, not a current 2026 permanent deployment.

---

### 17. Boston ALPR behavior

Boston's report states the previous ALPR cameras:

* did not record video
* did not capture audio
* could not be viewed in real time

Instead, they captured license-plate imagery for machine processing and comparison against vehicle-of-interest lists. ([Boston.gov][7])

This is an important schema distinction:

```text
CCTV:
    continuous/live imagery

ALPR:
    machine-readable vehicle observations
```

They should never be treated as the same camera class.

---

### 18. Boston surveillance data-sharing records

Boston's annual surveillance report also documents data-sharing activity and directs users to supporting spreadsheets. ([Boston.gov][7])

The surveillance portal makes the underlying annual reports and supporting documents publicly available. ([Boston.gov][6])

This means Boston can become a recurring:

```text
SURVEILLANCE_TRANSPARENCY_SOURCE
```

in the national database.

---

### 19. Massachusetts State Police

Massachusetts State Police has a dedicated Technical Services Unit.

The official MSP documentation states that the unit:

* deploys electronic surveillance resources
* installs and maintains surveillance equipment
* installs cameras for large-scale events
* deploys ALPRs
* supports other law-enforcement agencies

([Massachusetts Government][8])

#### Registry

```text
SOURCE_ID:
    MA-MSP-TSU

OWNER:
    Massachusetts State Police

TYPE:
    LAW_ENFORCEMENT_TECHNICAL_SERVICES

CAPABILITIES:
    CCTV
    ALPR
    ELECTRONIC_SURVEILLANCE

STATUS:
    🟢 VERIFIED
```

---

### 20. Massachusetts State Police surveillance-camera activity

The MSP's 2022 annual report provides hard numbers.

For 2022:

```text
Surveillance Camera Installations:
    295

ALPR Missions:
    35

Video Processed:
    363 TB
```

([Massachusetts Government][9])

These are **missions/activity statistics**, not necessarily the number of permanent cameras.

Therefore:

```text
295 != 295 currently deployed cameras
35 != 35 ALPR cameras
```

Store them as operational metrics.

#### Registry

```text
SOURCE_ID:
    MA-MSP-TSU-ANNUAL-METRICS

YEAR:
    2022

CAMERA_INSTALLATIONS:
    295

ALPR_MISSIONS:
    35

VIDEO_PROCESSED:
    363 TB
```

---

### 21. Massachusetts ALPR legal/source framework

Massachusetts has had multiple proposed ALPR bills, so this area needs particular care.

The Massachusetts legislature's proposed legislation defines an ALPR system as fixed/mobile high-speed cameras combined with algorithms that convert plate images into machine-readable data. 

However, **do not treat proposed bills as current law**.

For the source database:

```text
LAW_STATUS:
    proposed / enacted / repealed / current
```

must be stored separately.

The fact that Massachusetts has multiple ALPR bills is useful research metadata, but it does not establish that every proposed restriction is currently enforceable law.

---

### 22. Massachusetts tolling cameras

This is a separate and extremely important category.

Massachusetts operates **all-electronic tolling** through EZDriveMA.

EZDriveMA is operated by MassDOT. ([Massachusetts Government][10])

Massachusetts' toll zones use overhead gantries containing:

```text
E-ZPass readers
+
license plate cameras
```

The state explicitly says the gantries contain cameras that capture vehicle license-plate images. ([Massachusetts Government][11])

---

### 23. Massachusetts Pay By Plate

Massachusetts officially operates:

```text
Pay By Plate MA
```

The state explains that Pay By Plate uses:

```text
video images of vehicle license plates
```

to bill vehicles without an E-ZPass account. ([Massachusetts Government][12])

#### Registry

```text
SOURCE_ID:
    MA-EZDRIVEMA-PAYBYPLATE

OWNER:
    MassDOT

TYPE:
    TOLL_PLATE_CAPTURE

PURPOSE:
    toll collection

STATUS:
    🟢 VERIFIED
```

This must remain separate from police ALPR.

---

### 24. Massachusetts toll-zone camera locations

The official EZDriveMA system identifies toll-zone locations.

MassDOT states that Massachusetts toll zones consist of gantries containing both transponder readers and cameras for vehicle license plates. ([Massachusetts Government][11])

Major toll facilities include:

```text
I-90 Massachusetts Turnpike
Tobin Memorial Bridge
Sumner Tunnel
Callahan Tunnel
Ted Williams Tunnel
```

([Massachusetts Government][11])

#### Registry

```text
SOURCE_ID:
    MA-EZDRIVEMA-TOLL-ZONES

TYPE:
    TOLLING_INFRASTRUCTURE

CAMERA_TYPE:
    LICENSE_PLATE_CAPTURE

STATUS:
    🟢 VERIFIED
```

---

### 25. Important ALPR/tolling distinction

Massachusetts itself distinguishes tolling data from ordinary ALPR concepts in proposed legislative language. ([Massachusetts Legislature][13])

For our database:

```text
LAW_ENFORCEMENT_ALPR
        ≠
TOLL_PLATE_CAPTURE
        ≠
TRAFFIC_CCTV
```

This distinction is essential.

---

### 26. Massachusetts Statewide Public Safety Radio — CoMIRS

Massachusetts has a statewide public-safety radio system:

**CoMIRS — Commonwealth of Massachusetts Interoperable Radio System.**

Commonwealth of Massachusetts Interoperable Radio System

The Commonwealth describes CoMIRS as its primary voice-radio system, serving hundreds of state, local and county public-safety agencies and other organizations. ([Massachusetts Government][14])

#### Registry

```text
SOURCE_ID:
    MA-COMIRS

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STATUS:
    🟢 VERIFIED
```

---

### 27. CoMIRS scale

A Commonwealth CoMIRS executive summary documented:

```text
245 public-safety/transportation agencies
~30,000 radios
```

with approximately 18,856 used for mission-critical daily communications at the time of that report. ([Massachusetts Government][15])

Agency examples included:

```text
Massachusetts State Police
MassDOT Highway Division
DCR
Massachusetts Emergency Management Agency
MBTA Transit Police
Environmental Police
Boston Police
Boston Fire
Boston EMS
Springfield Police
Springfield Fire
```

and numerous regional organizations. ([Massachusetts Government][15])

---

### 28. CoMIRS+P25

Massachusetts is currently transitioning to:

```text
CoMIRS+P25
```

a modern P25 digital system.

The Commonwealth says the modernization is intended to support more than:

```text
245 first-responder agencies
```

statewide, with completion planned for the end of calendar year **2026**. ([Massachusetts Government][16])

#### Current architecture

```text
LEGACY CoMIRS
      ↓
CoMIRS+P25
      ↓
P25 Phase 2
      +
Radio Authentication
      +
optional encrypted talkgroups
```

The Commonwealth's transition guidance explicitly documents P25 Phase 2 and radio authentication. ([Massachusetts Government][17])

---

### 29. Public CoMIRS channel/talkgroup documentation

Massachusetts publishes:

```text
Law Enforcement Channels & Talkgroups
Public Safety Channels & Talkgroups
```

through its official CoMIRS portal. ([Massachusetts Government][14])

That is a useful source for **radio system metadata**, even though it does not mean every talkgroup has a public audio stream.

#### Registry

```text
SOURCE_ID:
    MA-COMIRS-TALKGROUPS

TYPE:
    RADIO_SYSTEM_METADATA

STATUS:
    🟢 PUBLIC DOCUMENTATION
```

---

### 30. Encryption

Massachusetts' CoMIRS modernization documentation explicitly supports:

```text
P25 Phase 1
P25 Phase 2
P25 Data Services
P25 Radio Authentication
AES-256 encryption
```

for agencies using encrypted talkgroups. ([Massachusetts Government][17])

Therefore the scanner database needs:

```text
talkgroup
system
frequency
mode
phase
encryption_status
public_stream
```

rather than assuming every public-safety channel is monitorable.

---

### 31. Public scanner ecosystem

Massachusetts has a **very large public audio ecosystem**.

The current Broadcastify Massachusetts directory reports approximately:

```text
309 total audio feeds
15 counties
```

including:

```text
276 Public Safety
10 Rail
7 Amateur Radio
2 Other
1 Marine
```

in the current directory snapshot. ([Broadcastify][18])

Another current public-safety snapshot reports approximately:

```text
275 public-safety feeds
14 counties
```

so the exact count varies as feeds go online/offline and directory categorization changes. ([Broadcastify][19])

#### Registry

```text
SOURCE_ID:
    MA-BROADCASTIFY

TYPE:
    PUBLIC_SAFETY_AUDIO

OBSERVED_TOTAL:
    ~309

OBSERVED_PUBLIC_SAFETY:
    ~275–276

STATUS:
    🟢 ACTIVE
```

Do not hardcode 309 permanently.

---

### 32. Massachusetts scanner county coverage

Current Broadcastify coverage includes:

```text
Barnstable
Berkshire
Bristol
Dukes
Essex
Franklin
Hampden
Hampshire
Middlesex
Nantucket
Norfolk
Plymouth
Suffolk
Worcester
```

plus a statewide feed category. ([Broadcastify][18])

This is unusually strong coverage.

---

### 33. Massachusetts State Police scanner feeds

The current public directory includes feeds such as:

```text
Eastern Massachusetts State Police
Massachusetts State Police Dispatch - Troop B
```

among other public-safety feeds. ([Broadcastify][19])

#### Registry

```text
SOURCE_ID:
    MA-MSP-PUBLIC-AUDIO

TYPE:
    STATE_POLICE_RADIO

ACCESS:
    PUBLIC_STREAM

STATUS:
    🟢
```

---

### 34. Boston public scanner feeds

The Boston metropolitan directory includes multiple Boston public-safety feeds, including:

```text
Boston EMS
Boston Fire Department
```

as well as numerous surrounding municipal police/fire services. ([Broadcastify][20])

This should be represented as individual feed records rather than one generic "Boston scanner."

---

### 35. Worcester

Worcester currently has one of the strongest individual municipal public-audio presences.

The Massachusetts Broadcastify directory lists:

```text
Worcester City Police
```

among the most-listened Massachusetts public-safety feeds. ([Broadcastify][19])

Worcester County also currently contains a very large number of feeds in the statewide directory. ([Broadcastify][18])

---

### 36. New Bedford

The current statewide directory includes:

```text
New Bedford Police, Fire and EMS
```

as a live public-safety feed. ([Broadcastify][19])

This is especially interesting because New Bedford is also a confirmed Flock deployment.

That creates a useful multi-source agency record:

```text
NEW BEDFORD
│
├── Police
│   ├── Public scanner
│   └── Flock ALPR
│
└── Fire/EMS
    └── Public scanner
```

---

### 37. Flock Safety — Massachusetts

Massachusetts currently has a **large Flock ecosystem**, but it is extremely dynamic.

A current community mapping source reports approximately:

```text
1,135
```

Flock/ALPR cameras documented in Massachusetts as of its August 15, 2026 snapshot. ([Flock Camera Locations][21])

However, the source itself warns:

> this is not an official inventory.

It is derived from OpenStreetMap community data and is incomplete. ([Flock Camera Locations][21])

#### Registry

```text
SOURCE_ID:
    MA-ALPR-OSM-FLOCK

TYPE:
    COMMUNITY_DISCOVERY

COUNT:
    1,135

SNAPSHOT:
    2026-08-15

CONFIDENCE:
    🟡

OFFICIAL:
    🔴 NO

USE:
    DISCOVERY / CROSS-CHECK
```

This is exactly how we should use community mapping.

---

### 38. Massachusetts Flock deployment scale

A current report estimates approximately:

```text
106 Massachusetts communities
```

had Flock contracts around July 2026, while several communities had recently terminated or suspended their deployments. ([BostonGlobe.com][22])

This is a rapidly changing source.

Therefore the database needs:

```text
deployment_status:
    active
    paused
    terminated
    expired
    trial
    planned
```

---

### 39. Current Massachusetts Flock churn

This state is a perfect example of why historical records matter.

Recent Massachusetts changes include:

```text
Cambridge — ended contract
Framingham — contract expired/not renewed
Salem — decided not to renew
Littleton — cameras disabled
New Bedford — paused
Stow — ended use
Grafton — ending use
East Bridgewater — terminated
Douglas — discontinued
Auburn — terminated
```

These recent changes are documented by current reporting. ([NBC Boston][23])

Therefore a national camera registry cannot simply say:

```text
Flock = active
```

It must maintain deployment history.

---

### 40. Tewksbury Flock example

Tewksbury is a particularly useful example because current reporting documents approximately:

```text
20 Flock cameras
```

installed around town. ([BostonGlobe.com][22])

This demonstrates that Massachusetts deployments aren't limited to state agencies.

They can be:

```text
municipal police
+
local infrastructure
```

and therefore must be discovered through municipal records.

---

### 41. Grafton Flock

Grafton Police previously announced:

```text
12 Flock cameras
```

and subsequently announced termination of the system in August 2026. ([BostonGlobe.com][24])

#### Registry

```text
SOURCE_ID:
    MA-GRAFTON-PD-FLOCK

CAMERAS:
    12

STATUS:
    🔴 TERMINATING / DEACTIVATING

SOURCE_DATE:
    2026-08
```

Again, **historical deployment remains valuable even after deactivation.**

---

### 42. New Bedford Flock

New Bedford Police has an official Flock FAQ.

The department describes Flock as an ALPR system capturing:

```text
license plate
make
model
color
other vehicle characteristics
```

and explains that it can be deployed as dedicated sensors or as an overlay on video cameras. ([New Bedford Police Department][25])

[New Bedford Police Flock FAQ](https://www.newbedfordpd.com/2026/06/flock-safety-frequently-asked-questions/?utm_source=chatgpt.com)

#### Registry

```text
SOURCE_ID:
    MA-NEW-BEDFORD-PD-FLOCK

TYPE:
    ALPR

VENDOR:
    Flock Safety

STATUS:
    🟡 PAUSED / UNDER REVIEW
```

The pause is supported by current August 2026 reporting. ([NBC Boston][26])

---

### 43. Boston is a special ALPR source

Boston gives us:

```text
3M
    ↓
decommissioned 2025

Flock
    ↓
~45-camera trial 2025
```

plus annual reporting.

That makes Boston one of the best places in Massachusetts for longitudinal surveillance research. ([Boston.gov][7])

---

### 44. Massachusetts WIM / ALPR infrastructure

A current MassDOT project document is particularly interesting.

MassDOT's statewide weigh-in-motion expansion explicitly depicts stations containing:

```text
CCTV
ALPR
dimensioning system
gantry
axle sensors
```

and says the project includes **15 new WIM stations**. ([Massachusetts Government][27])

#### Registry

```text
SOURCE_ID:
    MA-MASSDOT-WIM

TYPE:
    WEIGH_IN_MOTION

COMPONENTS:
    CCTV
    ALPR
    DIMENSIONING
    GANTRY
    AXLE_SENSORS

PLANNED_NEW_STATIONS:
    15

STATUS:
    🟢 VERIFIED PROJECT
```

This is important because these ALPRs are **transportation infrastructure**, not necessarily police ALPR.

---

### 45. Massachusetts sensor/traffic infrastructure

MassDOT also evaluates traffic sensors and machine-readable transportation data.

A MassDOT RFI document demonstrates machine-readable sensor data and API integration for traffic-counting systems. ([Massachusetts Government][28])

These should eventually be separate source classes:

```text
traffic_camera
ALPR
vehicle_counter
speed_sensor
WIM
dimensioning_sensor
weather_sensor
DMS
```

---

### 46. Massachusetts source graph

The state can now be modeled:

```text
MASSACHUSETTS
│
├── MassDOT
│   │
│   ├── Mass511
│   │   ├── CCTV
│   │   ├── incidents
│   │   ├── closures
│   │   ├── travel times
│   │   └── weather/traffic
│   │
│   ├── GoTime
│   │
│   ├── Connected Work Zones
│   │
│   ├── MIVIS
│   │
│   ├── WIM
│   │   └── ALPR
│   │
│   └── EZDriveMA
│       └── toll plate cameras
│
├── Boston BTD
│   └── ArcGIS TrafficCameras
│
├── Massachusetts State Police
│   ├── Technical Services
│   ├── surveillance cameras
│   └── ALPR
│
├── CoMIRS
│   └── statewide public-safety radio
│
└── MUNICIPALITIES
    ├── Flock
    ├── other ALPR
    ├── CCTV
    └── public scanner feeds
```

---

### 47. Exact machine-readable source registry

| Source ID                   | Owner        | Data                 |   Machine-readable | Access                  | Status |
| --------------------------- | ------------ | -------------------- | -----------------: | ----------------------- | ------ |
| `MA-MASS511`                | MassDOT      | statewide traffic    |                 🟢 | Public                  | 🟢     |
| `MA-MASSDOT-CCTV`           | MassDOT      | traffic cameras      |                 🟢 | TrafficLand credentials | 🟢     |
| `MA-MASSDOT-CWZ`            | MassDOT      | work zones           |                 🟢 | API key                 | 🟢     |
| `MA-MASSDOT-ROADWAY-EVENTS` | MassDOT      | incidents            |                 🟢 | Developer               | 🟢     |
| `MA-MASSDOT-PLANNED-EVENTS` | MassDOT      | planned events       |                 🟢 | XML                     | 🟢     |
| `MA-MASSDOT-GOTIME`         | MassDOT      | travel times         |                 🟢 | Developer               | 🟢     |
| `MA-MIVIS`                  | MassDOT      | interagency video    |                 🟡 | Restricted              | 🟢     |
| `MA-BOSTON-BTD-CCTV`        | Boston BTD   | traffic cameras      |                 🟢 | ArcGIS                  | 🟢     |
| `MA-BOSTON-PD-3M-ALPR`      | Boston PD    | ALPR                 |         Historical | Report                  | 🔴     |
| `MA-BOSTON-PD-FLOCK-TRIAL`  | Boston PD    | ALPR                 |             Report | Historical              | 🟡     |
| `MA-MSP-TSU`                | MSP          | surveillance/ALPR    |             Report | Public metadata         | 🟢     |
| `MA-MSP-TSU-ANNUAL-METRICS` | MSP          | surveillance metrics |             Report | Public                  | 🟢     |
| `MA-COMIRS`                 | Commonwealth | radio                |           Metadata | Public docs             | 🟢     |
| `MA-COMIRS-TALKGROUPS`      | Commonwealth | channels/talkgroups  |           Metadata | Public docs             | 🟢     |
| `MA-EZDRIVEMA-TOLL-ZONES`   | MassDOT      | toll cameras         |           Metadata | Public                  | 🟢     |
| `MA-EZDRIVEMA-PAYBYPLATE`   | MassDOT      | plate capture        | Transaction system | Restricted              | 🟢     |
| `MA-ALPR-OSM-FLOCK`         | Community    | Flock locations      |                 🟢 | OSM                     | 🟡     |
| `MA-BROADCASTIFY`           | Third party  | radio/audio          |                 🟢 | Public streams          | 🟢     |

---

### 48. Highest-priority Massachusetts ingestion sources

If we're ranking these for the national engine:

#### Tier 1 — ingest immediately

```text
1. MA-BOSTON-BTD-CCTV
2. MA-MASSDOT-CCTV
3. MA-MASSDOT-ROADWAY-EVENTS
4. MA-MASSDOT-CWZ
5. MA-MASSDOT-GOTIME
6. MA-COMIRS-TALKGROUPS
7. MA-BROADCASTIFY
```

Boston's ArcGIS CCTV layer is especially attractive because it is directly queryable without negotiating an API arrangement. ([Boston GIS Portal][5])

---

### 49. Tier 2 — surveillance discovery

```text
8. MA-BOSTON-PD-3M-ALPR
9. MA-BOSTON-PD-FLOCK-TRIAL
10. MA-MSP-TSU
11. MA-ALPR-OSM-FLOCK
12. MA-MASSDOT-WIM
13. municipal Flock contracts
14. municipal ALPR policies
```

These are primarily **registry/discovery sources**, not raw plate-data sources.

---

### 50. Tier 3 — restricted infrastructure

```text
15. MA-MIVIS
16. MA-EZDRIVEMA-PAYBYPLATE
17. TrafficLand authenticated camera API
18. CoMIRS encrypted talkgroups
```

These should be recorded as known infrastructure but **not bypassed**.

---

### 51. Scanner assessment

Massachusetts is exceptionally strong:

| Scanner category             |       Result |
| ---------------------------- | -----------: |
| Statewide radio system       |    🟢 CoMIRS |
| Public channel documentation |           🟢 |
| State Police feeds           |           🟢 |
| Boston feeds                 |           🟢 |
| County feeds                 |           🟢 |
| Fire/EMS                     |           🟢 |
| Rail                         |           🟢 |
| Public audio streams         |           🟢 |
| Approx. total feeds          |     **~309** |
| Public-safety feeds          | **~275–276** |

Broadcastify's current directory confirms the unusually large Massachusetts feed ecosystem. ([Broadcastify][18])

---

### 52. ALPR assessment

Massachusetts is even more interesting here.

We have verified:

```text
Massachusetts State Police
        ↓
ALPR deployment

Boston
        ↓
3M ALPR
        ↓
decommissioned

Boston
        ↓
Flock trial

New Bedford
        ↓
Flock
        ↓
paused 2026

Grafton
        ↓
12 Flock
        ↓
terminating

Tewksbury
        ↓
~20 Flock

~106 MA communities
        ↓
reported Flock relationships
```

The state has a **very active and rapidly changing ALPR ecosystem**, so source timestamps are mandatory. ([BostonGlobe.com][22])

---

### 53. What we do NOT have

I am deliberately **not claiming** the following:

```text
🔴 A complete official statewide ALPR camera inventory
🔴 Raw statewide ALPR reads
🔴 A public CoMIRS statewide audio API
🔴 A public MIVIS feed
🔴 Anonymous access to TrafficLand's MassDOT camera API
🔴 A complete statewide municipal CCTV inventory
🔴 A complete statewide CAD API
```

Those have not been established by the evidence I found.

---

### 54. Massachusetts final rating

| Category                          |           Rating |
| --------------------------------- | ---------------: |
| State 511                         |               🟢 |
| State traffic CCTV                |               🟢 |
| Public camera metadata            |               🟢 |
| Public camera imagery             |               🟢 |
| Machine-readable camera API       |               🟢 |
| Anonymous camera API              |               🟡 |
| Boston municipal CCTV GIS         | 🟢 **Excellent** |
| Traffic incidents                 |               🟢 |
| Work zones                        |               🟢 |
| Travel times                      |               🟢 |
| Toll cameras                      |               🟢 |
| ALPR evidence                     | 🟢 **Excellent** |
| Official ALPR statewide inventory |               🔴 |
| Municipal ALPR reporting          |               🟢 |
| Flock discovery                   |               🟢 |
| Statewide public-safety radio     |               🟢 |
| Public scanner feeds              | 🟢 **Excellent** |
| Statewide CAD                     |               🔴 |

### **Massachusetts: 9.5/10 — VERY HIGH VALUE**

The standout discoveries are:

### **1. Boston's official ArcGIS traffic-camera layer**

This is a genuinely clean machine-readable municipal camera source with JSON/GeoJSON/PBF and spatial querying. ([Boston GIS Portal][5])

### **2. MassDOT's documented camera distribution architecture**

MassDOT explicitly documents its camera API and TrafficLand relationship. ([Massachusetts Government][1])

### **3. Boston's surveillance-reporting system**

This gives us actual historical ALPR deployments rather than relying solely on community maps. ([Boston.gov][6])

### **4. CoMIRS**

Massachusetts has an unusually well-documented statewide public-safety radio infrastructure. ([Massachusetts Government][14])

### **5. Massive public scanner ecosystem**

Approximately **300+ Massachusetts audio feeds** are currently indexed, with roughly **275 public-safety feeds**. ([Broadcastify][18])

### **6. Extremely dynamic Flock/ALPR ecosystem**

Massachusetts has a large municipal ALPR footprint, but deployments are changing rapidly in 2026. Community mapping currently shows about **1,135 mapped Flock/ALPR cameras**, explicitly identified as incomplete/non-official. ([Flock Camera Locations][21])

---

#### Massachusetts source priority for the national database

```text
MASSACHUSETTS
│
├── 🟢 MASSDOT
│   ├── Mass511
│   ├── CCTV
│   ├── Roadway Events
│   ├── Planned Events
│   ├── GoTime
│   ├── CWZ/WZDx
│   └── WIM/ALPR
│
├── 🟢 BOSTON
│   └── ArcGIS TrafficCameras
│
├── 🟢 MSP
│   ├── surveillance cameras
│   └── ALPR
│
├── 🟢 EZDRIVEMA
│   └── toll plate cameras
│
├── 🟢 CoMIRS
│   └── statewide radio
│
├── 🟢 MUNICIPAL ALPR
│   └── Flock / other vendors
│
└── 🟢 PUBLIC RADIO
    └── ~300+ feeds
```

**Massachusetts is complete for this pass.**

**Next alphabetically: Michigan.**

[1]: https://www.mass.gov/info-details/highway-data-for-developers?utm_source=chatgpt.com "Highway data for developers | Mass.gov"
[2]: https://apps.apple.com/us/app/mass511/id1640577370?utm_source=chatgpt.com "‎Mass511 App - App Store"
[3]: https://www.mass.gov/doc/its-2014-annual-report/download?utm_source=chatgpt.com "Massachusetts Department of Transportation"
[4]: https://api.trafficland.com/docs?utm_source=chatgpt.com "TrafficLand API Documentation"
[5]: https://gisportal.boston.gov/arcgis/rest/services/BTD/Cartegraph_BTD_readonly/MapServer/30?utm_source=chatgpt.com "Layer: TrafficCameras (ID: 30)"
[6]: https://www.boston.gov/departments/mayors-office/bostons-use-surveillance-technology?utm_source=chatgpt.com "Boston's Use of Surveillance Technology | Boston.gov"
[7]: https://www.boston.gov/sites/default/files/file/2025/07/2024%20City%20of%20Boston%20Annual%20Surveillance%20Report.pdf?utm_source=chatgpt.com "2025-1355 - 2024 City of Boston Annual Surveillance Report"
[8]: https://www.mass.gov/info-details/specialized-units?utm_source=chatgpt.com "Specialized Units | Mass.gov"
[9]: https://www.mass.gov/doc/2022-massachusetts-state-police-annual-report/download?utm_source=chatgpt.com "2022 Annual Report"
[10]: https://www.mass.gov/ezdrivema?utm_source=chatgpt.com "EZDriveMA | Mass.gov"
[11]: https://www.mass.gov/info-details/where-can-you-use-your-e-zpass-ma-transponder?utm_source=chatgpt.com "Where can you use your E-ZPass MA transponder? | Mass.gov"
[12]: https://www.mass.gov/info-details/toll-payment-options?utm_source=chatgpt.com "Toll payment options | Mass.gov"
[13]: https://malegislature.gov/Bills/194/HD1032.Html?utm_source=chatgpt.com "Bill HD.1032"
[14]: https://www.mass.gov/commonwealth-of-massachusetts-interoperable-radio-system-comirs?utm_source=chatgpt.com "Commonwealth of Massachusetts Interoperable Radio System (CoMIRS) | Mass.gov"
[15]: https://www.mass.gov/doc/commonwealth-of-massachusetts-interoperable-radio-system-comirs-executive-summary/download?utm_source=chatgpt.com "Microsoft Word - 1 CoMIRS Executive Summary v1-1.docx"
[16]: https://www.mass.gov/news/healey-driscoll-administration-celebrates-franklin-countys-successful-transition-to-statewide-radio-network?utm_source=chatgpt.com "Healey-Driscoll Administration Celebrates Franklin County's Successful Transition to Statewide Radio Network | Mass.gov"
[17]: https://www.mass.gov/doc/comirs-transition-guidance/download?utm_source=chatgpt.com "EXECUTIVE OFFICE OF TECHNOLOGY SERVICES & SECURITY"
[18]: https://status.broadcastify.com/listen/stid/25?utm_source=chatgpt.com "Massachusetts Audio Feeds"
[19]: https://status.broadcastify.com/listen/stid/25/publicsafety?utm_source=chatgpt.com "Massachusetts Audio Feeds"
[20]: https://status.broadcastify.com/listen/mid/13?utm_source=chatgpt.com "Boston Metro Audio Feeds"
[21]: https://flockcameralocations.com/locations/massachusetts?utm_source=chatgpt.com "Flock Camera Locations in Massachusetts — Live MA ALPR Map | Flock Camera Locations"
[22]: https://www.bostonglobe.com/2026/07/30/business/flock-safety-cameras-pushback-massachusetts/?utm_source=chatgpt.com "Mass. residents say Flock's surveillance cameras crossed a line"
[23]: https://www.nbcboston.com/news/local/as-officers-face-misuse-allegations-massachusetts-police-departments-rethink-flock-cameras/4002092/?utm_source=chatgpt.com "MA police departments rethink Flock cameras as officers face misuse allegations – NBC Boston"
[24]: https://www.bostonglobe.com/2026/08/22/metro/massachusetts-towns-cancel-flock-cameras/?utm_source=chatgpt.com "Two more Mass. towns discontinue Flock surveillance cameras"
[25]: https://www.newbedfordpd.com/2026/06/flock-safety-frequently-asked-questions/?utm_source=chatgpt.com "Flock Safety Technology: Frequently Asked Questions – New Bedford Police Department"
[26]: https://www.nbcboston.com/news/local/new-bedford-police-flock-camera-hearing/3997454/?utm_source=chatgpt.com "New Bedford officer accused of using Flock camera to stalk her ex – NBC Boston"
[27]: https://www.mass.gov/doc/statewide-weigh-in-motion-station-enhancements-and-expansion-presented-to-the-cpc-on-november-12-2025/download?utm_source=chatgpt.com "Statewide - Weigh-in-Motion Station Enhancements and Expansion"
[28]: https://www.mass.gov/doc/massdot-rfi-response-cameras-numina/download?utm_source=chatgpt.com "MassDOT Roadway Safety Request for Information and Ideas: Speed Safety Cameras"
