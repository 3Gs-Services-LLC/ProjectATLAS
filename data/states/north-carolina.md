---
state: North Carolina
usps: NC
slug: north-carolina
dossier_number: 33
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
  imported_from: project_atlas_state_data/North Carolina.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# North Carolina (NC) - ATLAS State Record

> Dossier **33 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

North Carolina is another **very strong state**, especially because it has a modern statewide traffic-camera API and an unusually well-documented ALPR deployment program.

The biggest discovery is that **NCDOT replaced its old camera API in May 2026**. The old endpoint now explicitly redirects developers to the new DriveNC API documentation. 

---

### 1. North Carolina Department of Transportation

Primary transportation agency:

**North Carolina Department of Transportation — NCDOT**

Its public traveler-information system is now:

### DriveNC

North Carolina Department of Transportation

DriveNC provides statewide traffic information, including cameras, incidents, road conditions, signs, Waze reports, and other traveler information. ([DriveNC][1])

#### Registry

```text
SOURCE_ID:
    NC-NCDOT-DRIVENC

OWNER:
    North Carolina Department of Transportation

TYPE:
    STATEWIDE_TRANSPORTATION_DATA_PLATFORM

STATUS:
    🟢 VERIFIED
```

---

### 2. DriveNC live cameras

This is the primary camera source.

NCDOT announced in May 2026 that the new DriveNC platform provides live video from:

### approximately 1,100 highway traffic cameras

([NCDOT][2])

The official camera page confirms that the cameras provide **video and images** and that those materials are not stored or recorded. ([DriveNC][3])

#### Registry

```text
SOURCE_ID:
    NC-NCDOT-DRIVENC-CCTV

CAMERA_COUNT:
    ~1,100

TYPE:
    STATEWIDE_TRAFFIC_CCTV

LIVE:
    🟢

RECORDED_VIDEO:
    🔴

STATUS:
    🟢 VERIFIED
```

---

### 3. Exact current camera API

This is the important machine-readable source:

```text
https://www.drivenc.gov/api/v2/get/cameras
```

The official DriveNC API documentation identifies this as:

### GET Cameras API

and says:

> Returns all cameras.

([DriveNC][4])

#### Registry

```text
SOURCE_ID:
    NC-DRIVENC-CAMERA-API

ENDPOINT:
    https://www.drivenc.gov/api/v2/get/cameras

METHOD:
    GET

FORMAT:
    JSON / XML

AUTH:
    DEVELOPER_KEY

STATUS:
    🟢 VERIFIED
```

---

### 4. Important API migration

The previous NCDOT endpoint:

```text
https://eapps.ncdot.gov/services/traffic-prod/v1/cameras
```

is effectively **retired as the production camera API**.

When accessed now, it returns:

```text
As of May 27, 2026,
information about API data can be found at
https://drivenc.gov/help/endpoint/event
```



Therefore ATLAS should **NOT** register the old endpoint as the current authoritative source.

Use:

```text
NC-DRIVENC-CAMERA-API
```

instead.

---

### 5. Developer API authentication

The DriveNC API requires a developer key.

The official documentation states:

* registered account required
* developer key required
* API is REST
* throttling is enabled
* ten calls per 60 seconds.

([DriveNC][5])

#### Registry

```text
AUTHENTICATION:
    DEVELOPER_KEY

RATE_LIMIT:
    10 requests / 60 seconds

COST:
    No paid API requirement identified

STATUS:
    🟢 PUBLIC DEVELOPER ACCESS
```

---

### 6. Camera record structure

The API exposes:

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
County
```

([DriveNC][4])

This is an excellent ATLAS source.

#### Canonical mapping

```text
Id
 ↓
source_camera_id

Source
 ↓
source_owner/provider

SourceId
 ↓
provider_camera_id

Roadway
 ↓
roadway

Direction
 ↓
direction

Latitude
 ↓
latitude

Longitude
 ↓
longitude

Location
 ↓
location_name

County
 ↓
county

Views[]
 ↓
camera_views[]
```

---

### 7. Camera views

Each camera can contain one or more views.

The official documentation defines:

```text
Id
Url
Status
Description
VideoUrl
```

([DriveNC][6])

This means the correct ATLAS architecture remains:

```text
CAMERA
│
├── metadata
│
└── VIEWS[]
    ├── still/image URL
    ├── video URL
    ├── status
    └── description
```

Do **not** flatten each view into an independent physical camera.

---

### 8. Camera source attribution

DriveNC exposes:

```text
Source
SourceId
```

The official definition says `Source` identifies the source that provided the camera. ([DriveNC][4])

The current API documentation gives real examples such as:

```text
IVDs-City of Burlington
IVDs-City of High Point
```

([DriveNC][4])

This is extremely valuable.

North Carolina therefore isn't necessarily:

```text
NCDOT → every camera
```

It is:

```text
DriveNC
   │
   ├── NCDOT
   ├── municipal cameras
   ├── other transportation sources
   └── partner sources
```

ATLAS must preserve the `Source` field.

---

### 9. Municipal cameras through DriveNC

The official API example demonstrates a camera sourced from:

```text
IVDs-City of Burlington
```

and another from:

```text
IVDs-City of High Point
```

([DriveNC][4])

Therefore:

```text
NC-DRIVENC
    │
    ├── NCDOT
    ├── City of Burlington
    ├── City of High Point
    └── additional sources discovered dynamically
```

This is exactly the type of aggregation we want.

---

### 10. Camera coordinates

DriveNC provides:

```text
Latitude
Longitude
```

with documented ranges:

```text
Latitude:
    -90 to +90

Longitude:
    -180 to +180
```

([DriveNC][4])

So there is **no coordinate decoding problem** like some XML feeds use.

---

### 11. County field

The current camera API also directly provides:

```text
County
```

([DriveNC][4])

This is extremely useful for national ingestion.

ATLAS does not need to reverse-geocode every North Carolina camera just to determine the county.

---

### 12. Live video

The API exposes:

```text
VideoUrl
```

for camera views. ([DriveNC][4])

However, the API sample demonstrates that `VideoUrl` can be empty.

Therefore:

```text
LIVE_VIDEO:
    🟢 supported

VIDEO_FOR_EVERY_CAMERA:
    🔴 no

VIDEO_URL:
    conditional
```

ATLAS should preserve:

```json
"video_url": null
```

rather than inventing a stream.

---

### 13. Still imagery

The DriveNC camera system provides images as well as video. ([DriveNC][3])

The old NCDOT infrastructure also exposed a camera-image path such as:

```text
https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US70_YearganRd.jpg
```

This old path is useful as **historical provenance**, but it should not be treated as the current API architecture after the May 2026 migration.

The current camera API is the authoritative source.

---

### 14. No recorded video

NCDOT explicitly states:

> NCDOT traffic cameras are not recorded.

([DriveNC][1])

So:

```text
LIVE:
    🟢

ARCHIVE:
    🔴

RECORDED_VIDEO:
    🔴
```

This is an important distinction for the database.

---

### 15. DriveNC Waze integration

DriveNC also publishes Waze reports.

The official site says NCDOT participates in the:

### Waze for Cities

program.

Waze-reported incidents are displayed on DriveNC alongside official NCDOT information. ([DriveNC][7])

#### Registry

```text
SOURCE_ID:
    NC-DRIVENC-WAZE

TYPE:
    CROWD_SOURCED_TRAFFIC_EVENTS

PROVIDER:
    Waze

STATUS:
    🟢 VERIFIED
```

This is **traffic-event data**, not camera data.

Do not confuse the two.

---

### 16. DriveNC events API

Exact current endpoint:

```text
https://www.drivenc.gov/api/v2/get/event
```

([DriveNC][8])

It exposes:

```text
ID
SourceId
Organization
RoadwayName
DirectionOfTravel
Description
Reported
LastUpdated
StartDate
PlannedEndDate
LanesAffected
Latitude
Longitude
EventType
EventSubType
Severity
County
...
```

([DriveNC][8])

This should be registered as a separate source.

```text
NC-DRIVENC-EVENTS
```

---

### 17. DriveNC WZDx

DriveNC also provides:

```text
https://www.drivenc.gov/api/wzdx
```

for Work Zone Data Exchange information. ([DriveNC][5])

#### Registry

```text
SOURCE_ID:
    NC-DRIVENC-WZDX

TYPE:
    WORK_ZONE_DATA

STANDARD:
    WZDx

STATUS:
    🟢 VERIFIED
```

---

### 18. Special alerts API

Exact endpoint:

```text
https://www.drivenc.gov/api/v2/get/alerts
```

([DriveNC][9])

It provides:

```text
Id
Message
Notes
StartTime
EndTime
LastUpdated
Regions
HighImportance
SendNotification
```

([DriveNC][9])

#### Registry

```text
SOURCE_ID:
    NC-DRIVENC-ALERTS

TYPE:
    TRANSPORTATION_ALERTS
```

---

### 19. North Carolina ALPR — major discovery

This state is much more interesting than simply "North Carolina has ALPR."

North Carolina created a specific statutory framework for:

### Automatic License Plate Reader Systems

under Article 3D of Chapter 20.

The statute defines an ALPR as one or more mobile or fixed automated high-speed cameras combined with software that converts license-plate images into computer-readable data. ([North Carolina General Assembly][10])

---

### 20. NCDOT/SBI ALPR right-of-way program

North Carolina established a pilot program allowing:

**NCDOT**

to enter agreements with:

**North Carolina State Bureau of Investigation**

for ALPR deployment on NCDOT-owned rights-of-way.

([North Carolina General Assembly][11])

#### Registry

```text
SOURCE_ID:
    NC-SBI-NCDOT-ALPR-PILOT

OWNERS:
    NCSBI / NCDOT

TYPE:
    FIXED_ALPR

LOCATION:
    STATE_RIGHTS_OF_WAY

STATUS:
    🟢 VERIFIED
```

---

### 21. This is a real deployment, not merely legislation

The SBI's April 7, 2026 report states:

* first DOT encroachment approvals occurred June 16, 2025
* first installations occurred July 2025
* Raleigh Police Department installed the first units
* installations continued afterward. 

So this is confirmed operational infrastructure.

---

### 22. ALPR deployment numbers

As of **March 15, 2026**:

```text
32 participating agencies

250 requested ALPRs

17 agencies with installations

140 installed camera locations

75 additional locations:
    permitting and/or pending installation
```



This is one of the best state-level ALPR inventories found so far.

---

### 23. Exact participating agencies

The 32 participating agencies are:

1. Atlantic Beach Police Department
2. Asheville Police Department
3. Brunswick County Sheriff's Office
4. Burlington Police Department
5. Cabarrus County Sheriff's Office
6. Charlotte-Mecklenburg Police Department
7. Columbus County Sheriff's Office
8. Franklin County Sheriff's Office
9. Gaston County Police Department
10. Granville County Sheriff's Office
11. Harnett County Sheriff's Office
12. Henderson County Sheriff's Office
13. Hendersonville Police Department
14. Holly Springs Police Department
15. Iredell County Sheriff's Office
16. Kill Devil Hills Police Department
17. Lenoir County Sheriff's Office
18. Macon County Sheriff's Office
19. McDowell County Sheriff's Office
20. North Carolina State Highway Patrol
21. New Hanover County Sheriff's Office
22. Ocean Isle Police Department
23. Pender County Sheriff's Office
24. Person County Sheriff's Office
25. Raleigh Police Department
26. Randolph County Sheriff's Office
27. Richmond County Sheriff's Office
28. UNC Charlotte Police Department
29. Vance County Sheriff's Office
30. Wake County Sheriff's Office
31. Wallace Police Department
32. Wilkes County Sheriff's Office

([NC General Assembly Web Services][12])

That list should become an ATLAS discovery table.

---

### 24. Installed ALPR locations by agency

The April 2026 report provides actual deployment counts.

| Agency                     | Installed locations |
| -------------------------- | ------------------: |
| Asheville PD               |                   2 |
| Burlington PD              |                  20 |
| Cabarrus County Sheriff    |                   6 |
| Columbus County Sheriff    |                   6 |
| Franklin County Sheriff    |                   5 |
| Harnett County Sheriff     |                  20 |
| Hendersonville PD          |                  11 |
| Lenoir County Sheriff      |                  16 |
| Macon County Sheriff       |                   5 |
| McDowell County Sheriff    |                   5 |
| New Hanover County Sheriff |                  19 |
| Ocean Isle PD              |                   2 |
| Person County Sheriff      |                   4 |
| Raleigh PD                 |                   3 |
| Randolph County Sheriff    |                   4 |
| Richmond County Sheriff    |                   5 |
| Wilkes County Sheriff      |                   7 |

Total:

### 140 locations

as of March 15, 2026. 

---

### 25. ALPR capture volumes

The report also provides the number of license plates captured by each deployed agency.

Examples:

```text
Burlington PD:
31,539,172

New Hanover County Sheriff:
35,467,207

Harnett County Sheriff:
11,756,666

Lenoir County Sheriff:
13,921,672

Raleigh PD:
14,828,580
```



These are **historical aggregate capture counts**, not a public live ALPR database.

---

### 26. ALPR data fields

The SBI report states that ALPR data can include:

```text
plate number
time
location
vehicle description
```



ATLAS should therefore define:

```text
ALPR_OBSERVATION
├── plate_hash / restricted plate identifier
├── timestamp
├── latitude
├── longitude
├── vehicle_description
├── source_agency
└── provenance
```

But **do not attempt to ingest restricted plate records** merely because the system exists.

---

### 27. ALPR vendor architecture

The SBI explicitly says participating agencies could select whichever vendor(s) they wished to use during the pilot. 

That means North Carolina does **not** have one universal ALPR vendor.

The architecture is:

```text
NCSBI
   │
   ├── Agency A ── Vendor A
   ├── Agency B ── Vendor B
   ├── Agency C ── Vendor C
   └── Agency D ── Vendor D
```

This is exactly the kind of information ATLAS needs to preserve.

---

### 28. ALPR system access

The SBI report says officers must submit a justification/reason for ALPR queries. 

Therefore:

```text
PUBLIC_ALPR_METADATA:
    🟢

PUBLIC_DEPLOYMENT_RECORDS:
    🟢

PUBLIC_RAW_PLATE_DATABASE:
    🔴

PUBLIC_LIVE_ALPR_API:
    🔴

AUTHORIZED_LAW_ENFORCEMENT_QUERY:
    🟢
```

---

### 29. North Carolina ALPR law

North Carolina's statute specifically regulates:

```text
use
preservation
disclosure
```

of ALPR information.

The current General Statutes list:

```text
G.S. 20-183.30 — Definitions
G.S. 20-183.31 — Regulation of use
G.S. 20-183.32 — Preservation and disclosure
G.S. 20-183.33 — Penalty
```

([North Carolina General Assembly][13])

This makes the statutory framework itself a useful metadata source.

---

### 30. ALPR pilot sunset

The original pilot program was scheduled to expire July 1, 2026. 

However, the SBI recommended extending it to:

### July 1, 2028

in its April 2026 report. 

This needs to be tracked as a **legislative/status transition**, not assumed permanent.

---

### 31. North Carolina public-safety radio

This is one of the strongest statewide radio systems in the country.

North Carolina's:

### VIPER

stands for:

**Voice Interoperability Plan for Emergency Responders**

It is the state's statewide public-safety radio network.

The official 2025 SCIP says VIPER is:

* statewide
* 800 MHz
* P25
* mission-critical
* managed by NC State Highway Patrol
* available to federal, state and local agencies. ([NC DPS][14])

---

### 32. VIPER network scale

The 2025 North Carolina Strategic Communications Interoperability Plan reports:

```text
240 tower sites

198,000 subscriber IDs

350+ agencies

64 counties served daily
```

([NC DPS][14])

Another 2024 official VIPER document describes:

```text
235+ sites

160,000+ end users
```

([NC DPS][15])

The 2025 SCIP is the newer source and should be preferred.

---

### 33. VIPER exact registry

```text
SOURCE_ID:
    NC-VIPER

OWNER:
    North Carolina State Highway Patrol

MANAGER:
    NCSHP Technical Services Unit

TYPE:
    STATEWIDE_P25_LMR

BAND:
    800_MHZ

STANDARD:
    P25

SCALE:
    ~240 sites

STATUS:
    🟢 VERIFIED
```

([NC DPS][14])

---

### 34. VIPER Phase 2

North Carolina has been moving VIPER toward:

### P25 Phase 2 / TDMA

The official NCDPS documentation says the deadline for conversion to TDMA/Phase 2 operation was:

### July 1, 2025

([NC DPS][16])

Therefore ATLAS should record:

```text
RADIO_STANDARD:
    P25

CURRENT_DIRECTION:
    P25 PHASE 2 / TDMA

LEGACY:
    P25 PHASE 1

STATUS:
    🟢
```

---

### 35. VIPER is not literally every North Carolina radio system

This is important.

The 2025 SCIP says there are also:

```text
18 standalone P25 LMR systems

18 standalone legacy non-P25 LMR systems
```

at the local level. ([NC DPS][14])

Therefore:

```text
NORTH CAROLINA
│
├── VIPER
│   └── statewide P25
│
├── 18 standalone P25 systems
│
└── 18 standalone legacy systems
```

ATLAS must not assume every public-safety radio transmission in NC is on VIPER.

---

### 36. VIPER interoperability

VIPER provides interoperability for:

* local agencies
* state agencies
* federal agencies
* public safety partners.

The official documentation calls VIPER the recognized statewide platform for interoperable radio communications. ([NC DPS][15])

---

### 37. VIPER radio inventory data

North Carolina maintains a formal VIPER radio-ID inventory process.

County/state agency points of contact maintain radio inventories and submit annual true-up information. ([NC DPS][17])

The records can include:

```text
radio model
model/serial number
radio assignment
template
radio alias
P25 individual ID
county code
```

([NC DPS][17])

Much of this should be treated as **administrative/restricted**, but the existence of the inventory system is valuable source metadata.

---

### 38. Broadcastify — North Carolina

North Carolina has substantial public scanner coverage.

Current Broadcastify public-safety directory:

### **111 public-safety feeds**

across:

### **65 counties**

([Broadcastify][18])

The broader directory lists:

### **334 total audio feeds**

across:

### **101 counties**

([Broadcastify][19])

This discrepancy is because the public-safety directory and all-audio directory count different feed categories.

ATLAS should preserve both metrics rather than trying to reconcile them into one number.

---

### 39. Public-safety scanner coverage

Current public-safety breakdown includes counties such as:

```text
Forsyth      9
Wake         4
Guilford     4
Brunswick    6
Stokes       4
Wilkes       2
Cumberland  2
Davidson     2
Durham       1
Mecklenburg  11* broader all-audio count
```

The statewide public-safety directory currently reports 65 counties represented. ([Broadcastify][18])

---

### 40. Broadcastify Calls

This is even more interesting than ordinary audio feeds.

Broadcastify has **Calls** coverage using managed SDR ingest nodes.

For example, Guilford County currently has:

```text
Law Dispatch: 15
Law Tac: 6
Law Talk: 5
Fire Dispatch: 3
Fire-Tac: 28
EMS Dispatch: 2
...
```

and multiple live ingest nodes, including:

```text
North Carolina VIPER — Triad Park
North Carolina VIPER — Greensboro A&T
```

([Broadcastify][20])

---

### 41. Mecklenburg County

Mecklenburg County has a particularly valuable public scanner ecosystem.

Broadcastify currently lists:

```text
Charlotte / Mecklenburg County Public Safety
```

as a public playlist containing police and fire/EMS dispatch talkgroups.

It also has a:

```text
Charlotte UASI
(Mecklenburg Simulcast)
```

Calls ingest node. ([Broadcastify][21])

#### Registry

```text
SOURCE_ID:
    NC-MECKLENBURG-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

RADIO_SYSTEM:
    CHARLOTTE/MECKLENBURG

STATUS:
    🟢 LIVE COVERAGE
```

---

### 42. Catawba County

Catawba County has a feed explicitly covering:

* Catawba County Sheriff
* Newton Police
* Conover Police
* NC Highway Patrol Troop F

and tactical channels. ([Broadcastify][22])

This demonstrates that a single public feed may aggregate multiple agencies.

ATLAS should store:

```text
feed
    ↓
monitored_agencies[]
```

rather than forcing one agency per feed.

---

### 43. North Carolina Highway Patrol scanner sources

Broadcastify currently contains feeds explicitly identifying:

```text
North Carolina State Highway Patrol
```

including:

```text
Troop B Dispatch
Troop F
```

and other feeds incorporating NCSHP channels. ([Broadcastify][18])

This is useful because NCSHP operates the VIPER network.

---

### 44. Scanner source hierarchy

For North Carolina:

```text
OFFICIAL GOVERNMENT RADIO
        ↓
      VIPER
        ↓
PUBLIC DISTRIBUTION
        ↓
Broadcastify
        ↓
COMMUNITY / OFFICIAL FEEDS
```

Do not treat Broadcastify as the owner of the underlying radio network.

It is the **public distribution layer**.

---

### 45. North Carolina source architecture

The state should be represented approximately like this:

```text
NORTH CAROLINA
│
├── NCDOT
│   └── DriveNC
│       ├── ~1,100 cameras
│       ├── camera API
│       ├── camera views
│       ├── live video
│       ├── events
│       ├── alerts
│       ├── WZDx
│       └── Waze reports
│
├── NCSBI
│   └── ALPR PROGRAM
│       ├── 32 participating agencies
│       ├── 250 requested LPRs
│       ├── 140 installed locations
│       └── 75 pending
│
├── LOCAL LAW ENFORCEMENT
│   ├── ALPR
│   ├── CCTV
│   └── municipal systems
│
├── NCSHP
│   └── VIPER
│       ├── ~240 sites
│       ├── P25
│       ├── Phase 2
│       └── 350+ agencies
│
└── PUBLIC AUDIO
    └── Broadcastify
        ├── 111 public safety feeds
        └── 65 counties
```

---

### 46. Exact machine-readable camera chain

This is the source ATLAS should actually ingest:

```text
https://www.drivenc.gov/api/v2/get/cameras
                     │
                     ▼
                 Camera[]
                     │
        ┌────────────┼─────────────┐
        ▼            ▼             ▼
      Source       SourceId      County
        │
        ├── Roadway
        ├── Direction
        ├── Latitude
        ├── Longitude
        └── Views[]
                  │
          ┌───────┴────────┐
          ▼                ▼
        Url            VideoUrl
```

The structure is directly documented by DriveNC. ([DriveNC][4])

---

### 47. Recommended ATLAS records

#### Camera source

```json
{
  "source_id": "NC-DRIVENC-CAMERA-API",
  "state": "NC",
  "owner": "North Carolina Department of Transportation",
  "program": "DriveNC",
  "type": "traffic_camera_inventory",
  "endpoint": "https://www.drivenc.gov/api/v2/get/cameras",
  "formats": ["json", "xml"],
  "authentication": "developer_key",
  "rate_limit": "10/60s",
  "estimated_camera_count": 1100,
  "confidence": "high"
}
```

---

#### ALPR discovery source

```json
{
  "source_id": "NC-SBI-NCDOT-ALPR-PILOT",
  "state": "NC",
  "owner": "North Carolina State Bureau of Investigation",
  "partner": "North Carolina Department of Transportation",
  "type": "fixed_alpr_right_of_way_program",
  "participating_agencies": 32,
  "requested_locations": 250,
  "installed_locations": 140,
  "pending_locations": 75,
  "as_of": "2026-03-15",
  "confidence": "high"
}
```

---

#### Radio

```json
{
  "source_id": "NC-VIPER",
  "state": "NC",
  "owner": "North Carolina State Highway Patrol",
  "type": "statewide_p25_lmr",
  "band": "800 MHz",
  "sites": 240,
  "subscriber_ids": 198000,
  "agencies": 350,
  "confidence": "high"
}
```

---

#### Public scanner layer

```json
{
  "source_id": "NC-BROADCASTIFY-PUBLIC-SAFETY",
  "state": "NC",
  "type": "public_scanner_audio",
  "public_safety_feeds": 111,
  "counties": 65,
  "observed": "2026-08-28",
  "confidence": "high"
}
```

---

### 48. Important distinction: cameras vs ALPR

North Carolina's approximately 1,100 DriveNC cameras should **not** be classified as ALPR.

DriveNC describes them as traffic cameras providing live traffic video/images. ([NCDOT][2])

The ALPR system is a separate law-enforcement technology governed by Article 3D and the SBI/DOT pilot program. ([North Carolina General Assembly][10])

So:

```text
NCDOT TRAFFIC CAMERA
≠
ALPR
```

This distinction is especially important for ATLAS.

---

### 49. North Carolina assessment

| Category                                   |             Rating |
| ------------------------------------------ | -----------------: |
| State traffic cameras                      |   🟢 **Excellent** |
| Machine-readable inventory                 |   🟢 **Excellent** |
| Current camera API                         |                 🟢 |
| Camera coordinates                         |                 🟢 |
| Camera source attribution                  |                 🟢 |
| Camera views                               |                 🟢 |
| Live video                                 |                 🟢 |
| Recorded video                             |                 🔴 |
| Municipal cameras through statewide system |                 🟢 |
| ALPR documentation                         | 🟢 **Exceptional** |
| ALPR deployment inventory                  | 🟢 **Exceptional** |
| ALPR live public data                      |                 🔴 |
| Statewide radio system                     |   🟢 **Excellent** |
| P25                                        |                 🟢 |
| VIPER coverage                             |   🟢 **Excellent** |
| Public scanner coverage                    |                 🟢 |
| Waze integration                           |                 🟢 |
| WZDx                                       |                 🟢 |
| Statewide surveillance inventory           |                 🟡 |
| FOIA/public-record discovery potential     |                 🟢 |

### **Overall: 9.8 / 10**

North Carolina is one of the **best states we've documented so far**.

The three especially valuable discoveries are:

### **1. ~1,100 live traffic cameras**

NCDOT's current DriveNC platform provides live video from approximately 1,100 highway cameras. ([NCDOT][2])

### **2. Exact current API**

```text
https://www.drivenc.gov/api/v2/get/cameras
```

with:

```text
Id
Source
SourceId
Roadway
Direction
Latitude
Longitude
Location
Views
County
```

([DriveNC][4])

### **3. Real statewide ALPR deployment inventory**

The SBI has documented **32 participating agencies, 250 requested ALPRs, 140 installed camera locations, and 75 additional locations pending/permitting** as of March 15, 2026. 

And unlike many states, North Carolina gives us the **actual agency-by-agency deployment list and installed-location counts**.

### **4. Statewide P25 network**

VIPER has approximately **240 tower sites, 198,000 subscriber IDs and 350+ participating agencies** according to the 2025 state interoperability plan. ([NC DPS][14])

### **5. Strong public scanner distribution**

Broadcastify currently provides **111 public-safety feeds across 65 counties**, with additional Calls/SDR coverage. ([Broadcastify][18])

**North Carolina is complete.**

**Next alphabetically: North Dakota.**

[1]: https://www.drivenc.gov/about/about?utm_source=chatgpt.com "About DriveNC | DriveNC"
[2]: https://www.ncdot.gov/news/press-releases/Pages/2026/2026-05-20-ncdot-launching-improved-traveler-website.aspx?utm_source=chatgpt.com "NCDOT’s Popular Traveler Information Website Getting Major Overhaul"
[3]: https://www.drivenc.gov/cctv?utm_source=chatgpt.com "Cameras | View Live DriveNC Cameras | DriveNC"
[4]: https://www.drivenc.gov/help/endpoint/cameras?utm_source=chatgpt.com "GET Cameras API Documentation | DriveNC"
[5]: https://www.drivenc.gov/developers/doc?utm_source=chatgpt.com "API Documentation | DriveNC"
[6]: https://www.drivenc.gov/help/subendpoint/cameras?utm_source=chatgpt.com "Camera Views | DriveNC"
[7]: https://www.drivenc.gov/?id=undefined&type=incident&utm_source=chatgpt.com "DriveNC"
[8]: https://www.drivenc.gov/help/endpoint/event?utm_source=chatgpt.com "GET Events API Documentation | DriveNC"
[9]: https://www.drivenc.gov/help/endpoint/alerts?utm_source=chatgpt.com "GET Special Alerts API Documentation | DriveNC"
[10]: https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_20/GS_20-183.30.html?utm_source=chatgpt.com "G.S. 20-183.30"
[11]: https://www.ncleg.gov/EnactedLegislation/SessionLaws/HTML/2023-2024/SL2023-151.html?utm_source=chatgpt.com "SL 2023-151 (SB 409)"
[12]: https://webservices.ncleg.gov/ViewDocSiteFile/105562?utm_source=chatgpt.com "Appendix C

Participating Agencies in the ALPR Pil"
[13]: https://www3.ncleg.gov/Laws/GeneralStatuteSections/Chapter20?utm_source=chatgpt.com "General Statute Sections - North Carolina General Assembly"
[14]: https://www.ncdps.gov/nc-strategic-communications-and-interoperability-plan/open?utm_source=chatgpt.com "2025 North Carolina SCIP"
[15]: https://www.ncdps.gov/nc-siec-viper-required-template-sog-usage-committee/open?utm_source=chatgpt.com "North Carolina State Interoperability"
[16]: https://www.ncdps.gov/division/state-highway-patrol/viper-approved-radio-list-2025/open?utm_source=chatgpt.com "North Carolina Department of Public Safety"
[17]: https://www.ncdps.gov/documents/files/divisions/viper-id-instructions/open?utm_source=chatgpt.com "VIPER ID Instructions"
[18]: https://status.broadcastify.com/listen/stid/37/publicsafety?utm_source=chatgpt.com "North Carolina Audio Feeds"
[19]: https://status.broadcastify.com/listen/stid/37?utm_source=chatgpt.com "North Carolina Audio Feeds"
[20]: https://status.broadcastify.com/listen/ctid/1927/publicsafety?utm_source=chatgpt.com "Guilford County, North Carolina Audio Feeds"
[21]: https://status.broadcastify.com/listen/ctid/1946/publicsafety?utm_source=chatgpt.com "Mecklenburg County, North Carolina Audio Feeds"
[22]: https://status.broadcastify.com/listen/ctid/1904/publicsafety?utm_source=chatgpt.com "Catawba County, North Carolina Audio Feeds"
