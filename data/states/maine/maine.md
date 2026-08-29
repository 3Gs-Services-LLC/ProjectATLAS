---
state: Maine
usps: ME
slug: maine
dossier_number: 19
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
  imported_from: project_atlas_state_data/Maine.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Maine (ME) - ATLAS State Record

> Dossier **19 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Maine is a **different kind of state from Louisiana**.

It has fewer transportation cameras and a much smaller public scanner ecosystem, but it has several unusually valuable characteristics:

* MaineDOT traffic cameras are publicly exposed through **New England 511**.
* MaineDOT maintains an official **ArcGIS REST infrastructure**.
* Maine Turnpike Authority has its own separate camera network.
* Maine has a very specific statutory framework governing ALPR.
* Maine State Police's intelligence center demonstrably receives and processes ALPR requests.
* Multiple municipalities have deployed Flock or other ALPR systems.
* Maine has **83–90 Broadcastify feeds**, depending on the current directory snapshot.
* Maine's current ALPR environment is **mixed-vendor**, including Flock, Motorola and Genetec.
* Maine's ALPR law is restrictive enough that **raw ALPR data should not be treated as public data**.

The biggest source-discovery opportunity here is the **New England 511 regional system**.

---

### 1. MaineDOT

**Agency:** Maine Department of Transportation
**System:** MaineDOT / New England 511

MaineDOT's official traffic-camera page explicitly directs users to three separate camera systems:

1. New England 511 Traveler Information
2. Maine Turnpike Authority Web Cams
3. All MaineDOT Traffic Cameras. ([Maine][1])

That is important because Maine's transportation-camera architecture is **not one unified camera source**.

#### Registry

```text
SOURCE_ID:
    ME-MAINE-DOT

AGENCY:
    Maine Department of Transportation

SYSTEM:
    MaineDOT / New England 511

TYPE:
    TRANSPORTATION

SCOPE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. New England 511

Maine participates in the **New England 511** system jointly with New Hampshire and Vermont.

MaineDOT's traffic-camera page links directly to New England 511 as the primary traveler-information system. ([Maine][1])

The current system exposes:

```text
Cameras
Message Signs
Traffic Speeds
Incidents
Roadwork
Future Events
Road Restrictions
Special Events
Waze Reports
Road Weather Stations
Weather Radar
Weather Alerts
```

The current map explicitly has a **Cameras** layer. ([newengland511.org][2])

#### Registry

```text
SOURCE_ID:
    ME-NE511

OWNER:
    Regional / MaineDOT / NHDOT / VTrans

TYPE:
    511_TRAVELER_INFORMATION

STATE:
    Maine

STATUS:
    🟢 ACTIVE
```

---

### 3. New England 511 is a real data-distribution system

This isn't merely a consumer website.

A MaineDOT transportation-industry presentation states that MaineDOT uses New England 511 and that the shared New England 511 system has a **developer portal providing an API feed**. ([tetcoalition.org][3])

The current New England 511 system also provides explicit terms for users of its **Traveler Information data feeds**, confirming that machine-readable feeds exist. ([newengland511.org][4])

Therefore:

```text
ME-NE511
    ↓
public traveler-information website
    ↓
developer/data feeds
    ↓
camera/event/device data
```

#### Important status

The **existence of the developer feed is verified**.

I have **not** yet verified a current public documentation page exposing the exact camera API endpoint/schema.

So we should record:

```text
API:
    🟢 EXISTS

EXACT CURRENT CAMERA ENDPOINT:
    🟡 NEEDS DIRECT ENDPOINT VERIFICATION
```

I am not going to invent an endpoint.

---

### 4. Historical camera endpoint — do not use as authoritative

A third-party developer tool contains an older New England 511 endpoint:

```text
http://newengland511.org/Traffic/GetCameras
```

but explicitly marks it:

```text
BROKEN
```

and identifies the newer architecture as:

```text
https://newengland511.org/map/mapIcons/Cameras
```

with camera images associated with:

```text
/map/Cctv/{itemId}
```

([Greasy Fork][5])

This is useful **engineering archaeology**, but it is not enough to declare those URLs the current official API.

#### Registry

```text
OLD:
    /Traffic/GetCameras

STATUS:
    🔴 DEPRECATED/BROKEN

NEW ARCHITECTURE INDICATION:
    /map/mapIcons/Cameras
    /map/Cctv/{itemId}

STATUS:
    🟡 DISCOVERY EVIDENCE
```

This distinction matters.

---

### 5. New England 511 camera layer

The current website explicitly identifies:

```text
CAMERAS
    Active
    Inactive
```

as a map layer. ([newengland511.org][2])

The camera UI also supports individual camera pages and camera-view selection. ([newengland511.org][2])

Therefore the source model should support:

```text
Camera
    ↓
Camera View
    ↓
Current Image / Video
```

rather than assuming one camera equals one image.

---

### 6. New England 511 Waze data

This is another valuable source.

The current New England 511 map states that:

**MaineDOT, NHDOT and VTrans participate in Waze for Cities**, and Waze-reported incidents and closures are published into New England 511. ([newengland511.org][2])

So Maine has:

```text
SOURCE_ID:
    ME-NE511-WAZE

SOURCE:
    Waze for Cities

DATA:
    incidents
    closures

TYPE:
    CROWDSOURCED_TRAFFIC

STATUS:
    🟢 OFFICIAL GOVERNMENT DISTRIBUTION
```

This is not camera data, but it belongs in the project's traffic-data source inventory.

---

### 7. MaineDOT ArcGIS REST infrastructure

MaineDOT maintains an official ArcGIS Server.

The REST directory currently exposes:

```text
https://gis.maine.gov/mapservices/rest/services/dot/
```

with:

```text
MaineDOT_OpenData_Crashes
MaineDOT_OpenData
MaineDOT_TSMO
```

as current MapServer services. ([Maine GIS][6])

#### Registry

```text
SOURCE_ID:
    ME-MAINE-DOT-ARCGIS

TYPE:
    GIS_REST

SERVER:
    gis.maine.gov

SERVICES:
    MaineDOT_OpenData
    MaineDOT_TSMO
    MaineDOT_OpenData_Crashes

STATUS:
    🟢 VERIFIED
```

This is an extremely important discovery source.

---

### 8. MaineDOT OpenData

The official `MaineDOT_OpenData` service provides machine-readable layers.

The service supports:

```text
JSON
GeoJSON
PBF
```

and has a maximum record count of 1,000 per request. ([Maine GIS][7])

Current layers include:

```text
Public Roads
Bridges
Cross Culverts
Large Culverts
Airports
Traffic Signals
Park and Ride
Railroad Crossings
Public Projects
Scenic Byways
Railroads
Posted Speed Limits
NHS
Urban Areas
```

([Maine GIS][7])

#### Why this matters

Even though the current public layer list does **not** expose a dedicated CCTV layer, this establishes a machine-readable official GIS source from which additional transportation-device layers should be investigated.

---

### 9. MaineDOT TSMO MapServer

MaineDOT has a separate:

```text
MaineDOT_TSMO
```

MapServer.

The service is explicitly described as providing access to individual feature layers maintained by MaineDOT. ([Maine GIS][8])

It supports:

```text
JSON
GeoJSON
PBF
Query
Identify
Find
Return Updates
```

([Maine GIS][8])

#### Registry

```text
SOURCE_ID:
    ME-MAINE-DOT-TSMO

TYPE:
    TRANSPORTATION_SYSTEMS_MANAGEMENT

FORMAT:
    JSON
    GeoJSON
    PBF

STATUS:
    🟢 VERIFIED
```

#### Current limitation

The public layer index currently does not expose named child layers in the search result.

Therefore:

```text
CCTV_LAYER:
    🟡 NOT YET VERIFIED

TSMO_SERVICE:
    🟢 VERIFIED
```

This is a **high-priority endpoint to inspect directly**.

---

### 10. MaineDOT traffic cameras

MaineDOT's official camera page explicitly identifies **All MaineDOT Traffic Cameras** as a distinct source. ([Maine][1])

The public page itself does not provide a machine-readable camera inventory in the text returned by the current crawler.

So:

```text
ME-MAINE-DOT-CCTV

TYPE:
    CCTV

PUBLIC:
    🟢 YES

OFFICIAL:
    🟢 YES

MACHINE-READABLE ENDPOINT:
    🟡 NOT YET VERIFIED

LIVE IMAGE:
    🟢 YES
```

We should **not** claim a camera count without obtaining the actual current camera inventory.

---

### 11. Maine Turnpike Authority

Maine has a completely separate transportation-camera operator:

**Maine Turnpike Authority (MTA).**

Its official Traffic Cams page provides cameras along the Maine Turnpike. ([Maine Turnpike Authority][9])

The currently listed locations include:

```text
Mile 3 — Kittery
Mile 5 — York River
Mile 8.8 — York Toll
Mile 15 — Wells
Mile 25.3 — Kennebunk
Mile 31.3 — Biddeford
```

with northbound and southbound views at many locations. ([Maine Turnpike Authority][9])

---

### 12. MTA camera system

The MTA Traffic Management & Communications Center states that it monitors the Turnpike using:

```text
12 CCTV cameras
4 portable trailer-mounted cameras
```

([Maine Turnpike Authority][10])

#### Registry

```text
SOURCE_ID:
    ME-MTA-CCTV

OWNER:
    Maine Turnpike Authority

TYPE:
    CCTV

FIXED:
    12

PORTABLE:
    4

TOTAL_DOCUMENTED:
    16

STATUS:
    🟢 OFFICIAL
```

This is one of the cleanest exact camera counts in Maine.

---

### 13. MTA live camera images

MTA describes its cameras as providing **up-to-the-minute traffic conditions** on the busiest sections of the Turnpike. ([Maine Turnpike Authority][11])

The camera page exposes individual camera views by mile marker and direction. ([Maine Turnpike Authority][9])

#### Registry

```text
ME-MTA-CCTV
    ↓
Mile Marker
    ↓
Direction
    ↓
Current Image
```

---

### 14. MTA Traffic Management & Communications Center

The MTA TMCC operates:

```text
17 flashing 45 MPH advisory signs
12 fixed CCTV
4 portable CCTV
4 RWIS locations
```

and participates in New England Compass / New England 511. ([Maine Turnpike Authority][10])

#### Registry

```text
SOURCE_ID:
    ME-MTA-TMCC

TYPE:
    TRAFFIC_MANAGEMENT_CENTER

DATA:
    CCTV
    RWIS
    DMS
    incidents
    construction
    speed reductions

STATUS:
    🟢 OFFICIAL
```

---

### 15. MTA RWIS

MTA states that its TMCC monitors:

```text
4 RWIS locations
```

for weather and road-surface conditions. ([Maine Turnpike Authority][10])

#### Registry

```text
SOURCE_ID:
    ME-MTA-RWIS

TYPE:
    ROAD_WEATHER

COUNT:
    4

STATUS:
    🟢 OFFICIAL
```

The current pass does **not** establish a public raw RWIS API.

Therefore:

```text
PUBLIC_MACHINE_FEED:
    🟡 NOT VERIFIED
```

---

### 16. New England Compass

MTA states that its TMCC uses the **New England Compass** advanced traffic-management system in cooperation with:

```text
Maine DOT
New Hampshire DOT
Vermont DOT
```

The system contains:

```text
construction
incidents
delays
speed reductions
```

and distributes information through New England 511 and third-party applications such as Waze. ([Maine Turnpike Authority][10])

#### Registry

```text
SOURCE_ID:
    ME-NE-COMPASS

TYPE:
    REGIONAL_ATMS

PARTNERS:
    MaineDOT
    NHDOT
    VTrans
    Maine Turnpike Authority

STATUS:
    🟢 VERIFIED
```

---

### 17. Maine ALPR law

This is where Maine gets particularly interesting.

Maine has a dedicated statute:

**29-A MRSA §2117-A — Use of automated license plate recognition systems.**

The statute defines ALPR as systems using fixed or mobile high-speed cameras plus computer algorithms to convert plate images into computer-readable data. ([Maine State Legislature][12])

#### Registry

```text
SOURCE_ID:
    ME-ALPR-STATUTORY

TYPE:
    LEGAL_FRAMEWORK

STATUTE:
    29-A MRSA §2117-A

STATUS:
    🟢 VERIFIED
```

---

### 18. Maine ALPR authorization

Maine law generally prohibits ALPR use except for specific authorized purposes.

Authorized users include:

#### Maine Department of Transportation

For:

```text
public safety
transportation infrastructure
```

#### Maine State Police

For:

```text
commercial motor vehicle screening
inspection
```

#### State/county/municipal law enforcement

For:

```text
public safety
criminal investigations
legal compliance
```

subject to the statutory conditions. ([Maine State Legislature][12])

---

### 19. Maine ALPR data is confidential

This is extremely important for the project.

Maine law states that ALPR data collected or retained under the authorized system is **confidential** under Maine's public-record law framework and is available for specified law-enforcement/agency purposes and related proceedings. ([Maine State Legislature][12])

Therefore:

```text
ALPR LOCATION:
    potentially discoverable

ALPR SYSTEM EXISTENCE:
    discoverable

ALPR VENDOR:
    discoverable

ALPR CONTRACT:
    potentially public

RAW PLATE READS:
    🔴 NOT PUBLIC

LIVE ALPR OBSERVATIONS:
    🔴 NOT PUBLIC
```

This distinction needs to be built into the database.

---

### 20. Maine ALPR retention

For ALPR data covered by the statute and not falling under specified intelligence/investigative or commercial-vehicle exceptions, Maine limits storage to:

```text
21 DAYS
```

([Maine State Legislature][12])

#### Registry

```text
STATE:
    Maine

ALPR_RETENTION:
    21 days

EXCEPTIONS:
    intelligence/investigative information
    commercial motor vehicle screening
```

---

### 21. Maine State Police MIAC

The **Maine Information and Analysis Center (MIAC)** demonstrably handles ALPR requests.

Maine State Police's 2024 annual report says the MIAC received:

```text
53 ALPR information requests
```

in 2024. ([Maine][13])

The report states that requests were vetted for legitimate purposes involving ongoing criminal investigations or missing/endangered persons cases. ([Maine][13])

#### Registry

```text
SOURCE_ID:
    ME-MIAC-ALPR

AGENCY:
    Maine State Police
    Maine Information and Analysis Center

TYPE:
    ALPR_INTELLIGENCE

2024_REQUESTS:
    53

STATUS:
    🟢 OFFICIAL
```

This is very important evidence that Maine has an active statewide ALPR-information ecosystem.

---

### 22. Maine ALPR system architecture

The evidence supports this model:

```text
LOCAL AGENCIES
      ↓
ALPR SYSTEMS
      ↓
authorized users
      ↓
MIAC / investigative requests
      ↓
law-enforcement intelligence
```

But:

```text
MIAC
    ≠
public ALPR API
```

We should **not** treat MIAC as a public data endpoint.

---

### 23. Maine State Police does not use facial recognition through MIAC

The 2024 Maine State Police report states that MIAC received one facial-recognition request from an out-of-state agency, but MIAC does **not** use facial-recognition software; the request was forwarded to the Bureau of Motor Vehicles. ([Maine][13])

#### Registry

```text
ME-MIAC-FACIAL-RECOGNITION

STATUS:
    🔴 NOT USED BY MIAC

REQUEST_HANDLING:
    forwarded to BMV
```

This is useful because the project's surveillance taxonomy should not falsely classify MIAC as a facial-recognition provider.

---

### 24. Maine local ALPR — York Police Department

York Police Department has an official **Automated License Plate Reader Policy**, effective May 7, 2026.

The policy identifies:

```text
Flock Safety
```

as the training/vendor context and states that captured plate numbers remain in the system for:

```text
21 days
```

consistent with Maine law. ([York Police Department][14])

#### Registry

```text
SOURCE_ID:
    ME-YORK-PD-FLOCK

AGENCY:
    York Police Department

VENDOR:
    Flock Safety

TYPE:
    ALPR

POLICY:
    O-68

EFFECTIVE:
    2026-05-07

STATUS:
    🟢 OFFICIAL
```

This is a very strong source.

---

### 25. York ALPR exact policy data

York's policy identifies allowed investigative search circumstances, including:

```text
BOLO
active investigation
known plate of interest
vehicle identifiers
partial plate searches
```

and requires operators to document:

```text
offense type
case number
reason
```

([York Police Department][14])

This does **not** provide raw observations, but it provides excellent metadata about the system.

---

### 26. Lewiston Flock

Lewiston Police has an established Flock deployment.

Lewiston City Council minutes from October 21, 2025 contain an explicit agenda item:

```text
UPDATE REGARDING THE FLOCK LICENSE PLATE READER CAMERAS
```

and state that the department's Crime Reduction Unit presented information about the system and its use in investigations. ([Lewiston Maine][15])

#### Registry

```text
SOURCE_ID:
    ME-LEWISTON-PD-FLOCK

AGENCY:
    Lewiston Police Department

VENDOR:
    Flock Safety

TYPE:
    ALPR

STATUS:
    🟢 OFFICIAL
```

---

### 27. Auburn Flock

Auburn has an official municipal budget record for:

```text
Automatic License Plate Reader (FLOCK Cameras)
```

with a FY27 request of:

```text
$24,000
```

([Auburn Maine][16])

However, Auburn's deployment status is changing.

Current reporting says the city declined to continue the existing Flock contract and the system became inactive. ([Maine Public][17])

Therefore:

```text
ME-AUBURN-FLOCK

STATUS:
    🟡 HISTORICAL / INACTIVE

DO NOT:
    count as active without current verification
```

This is exactly why the national database needs `status` and `observed_at`.

---

### 28. South Portland

Current reporting indicates South Portland removed all:

```text
7 Flock cameras
```

and therefore should not be counted as an active Flock deployment without new evidence. ([Cunningham Security Systems][18])

#### Registry

```text
SOURCE_ID:
    ME-SOUTH-PORTLAND-FLOCK

FORMER_COUNT:
    7

CURRENT_STATUS:
    🔴 REMOVED / INACTIVE
```

Again: retain the historical record.

---

### 29. Falmouth

Current reporting identifies Falmouth as having authorized a switch away from Flock to another vendor. ([Cunningham Security Systems][18])

That is particularly valuable because it demonstrates:

```text
FLOCK
  ↓
vendor replacement
  ↓
new ALPR technology
```

#### Registry

```text
ME-FALMOUTH-ALPR

STATUS:
    🟡 VENDOR TRANSITION

CURRENT_VENDOR:
    requires direct municipal verification
```

Do not guess the replacement vendor.

---

### 30. Hancock County Motorola ALPR

This is one of Maine's strongest non-Flock discoveries.

A February 2026 report states that police agencies in Hancock County were installing license-plate readers at **six locations**. ([Bangor Daily News][19])

The cameras are:

```text
MOTOROLA SOLUTIONS
```

rather than Flock. ([Bangor Daily News][19])

The report says the network was already online in:

```text
Bar Harbor
Ellsworth
```

and additional installations were being made, including Bucksport. ([Bangor Daily News][19])

#### Registry

```text
SOURCE_ID:
    ME-HANCOCK-COUNTY-MOTOROLA-ALPR

TYPE:
    ALPR

VENDOR:
    Motorola Solutions

LOCATIONS:
    Hancock County

PLANNED/REPORTED:
    6 locations

STATUS:
    🟢 VERIFIED DEPLOYMENT
```

This is important because it prevents the national system from becoming Flock-centric.

---

### 31. Bucksport ALPR

The same reporting identifies a specific public location:

```text
Route 1 and Main Street
Bucksport
```

as one of the Hancock County ALPR locations. ([Bangor Daily News][19])

#### Registry

```text
SOURCE_ID:
    ME-BUCKSPORT-MOTOROLA-ALPR

AGENCY:
    Local Hancock County law enforcement

VENDOR:
    Motorola Solutions

LOCATION:
    Route 1 / Main Street

STATUS:
    🟢 PUBLICLY REPORTED
```

This is an excellent candidate for later geographic verification.

---

### 32. Maine private ALPR

Maine is unusual here.

A June 2026 investigation identified apparent **Genetec Cloudrunner** plate-reading cameras at properties associated with IDEXX in:

```text
Scarborough
Westbrook
```

The reporting identified:

```text
1 camera
```

in Scarborough and at least:

```text
7 cameras
```

around the Westbrook headquarters. ([The Portland Press Herald][20])

However, Maine's legal framework makes private-property ALPR use highly restricted, and local authorities reportedly said they were unaware of the installations. ([The Portland Press Herald][20])

#### Registry

```text
SOURCE_ID:
    ME-IDEXX-GENETEC-CLOUDRUNNER

OWNER:
    IDEXX

TYPE:
    PRIVATE ALPR / VEHICLE ANALYTICS

VENDOR:
    Genetec

LOCATIONS:
    Scarborough
    Westbrook

STATUS:
    🟡 REPORTED / INVESTIGATIVE
```

This should **not** be presented as a confirmed law-enforcement system.

---

### 33. Maine ALPR community mapping

A current OpenStreetMap-derived Flock/ALPR map reports:

```text
60 cameras
```

in Maine as of August 15, 2026. ([Flock Camera Locations][21])

The map itself warns that this is likely an undercount because coverage depends on community mapping. ([Flock Camera Locations][21])

#### Registry

```text
SOURCE_ID:
    ME-ALPR-OSM

TYPE:
    COMMUNITY_DISCOVERY

COUNT:
    60

DATE:
    2026-08-15

CONFIDENCE:
    🟡 MEDIUM/LOW

USE:
    DISCOVERY ONLY
```

---

### 34. Bangor demonstrates why community data must be verified

A community ALPR database lists nine ALPR cameras in Bangor.

But a Bangor Daily News investigation physically checked those locations and found **no Flock cameras**, with some appearing to be private security cameras. ([Bangor Daily News][22])

This is an excellent validation case.

Therefore:

```text
COMMUNITY MAP
    ≠
VERIFIED CAMERA
```

The ingestion engine should preserve:

```text
source_confidence
verification_method
last_verified
```

---

### 35. Maine police scanner ecosystem

Maine currently has approximately:

```text
83 Broadcastify feeds
```

in the statewide feed index, while a separate Maine-specific status page showed 84–90 feeds depending on the snapshot. ([Broadcastify][23])

The current statewide listing covers:

```text
16–17 counties
```

and includes public safety, rail, amateur radio and marine feeds. ([Broadcastify][24])

#### Registry

```text
SOURCE_ID:
    ME-BROADCASTIFY

TYPE:
    PUBLIC_SAFETY_AUDIO

STATE:
    Maine

PUBLIC_SAFETY:
    ~78

TOTAL_FEEDS:
    ~83–90

STATUS:
    🟢 PUBLIC
```

---

### 36. Maine scanner county coverage

Current Broadcastify data lists feeds in:

```text
Androscoggin
Aroostook
Cumberland
Franklin
Hancock
Kennebec
Knox
Lincoln
Oxford
Penobscot
Piscataquis
Sagadahoc
Somerset
Waldo
Washington
York
```

and a statewide feed is also currently listed in some snapshots. ([Broadcastify][25])

This gives us excellent county-level coverage.

---

### 37. Penobscot County Regional Communications Center

One especially valuable feed is:

**Penobscot County Public Safety**

The feed documents coverage from the **Penobscot County Regional Communications Center**, including:

```text
Fire dispatch
Police dispatch
Penobscot County Sheriff
Maine State Police
Bangor Troop E
Houlton Troop F
Bangor Troop I
```

and numerous municipalities. ([Broadcastify][26])

#### Registry

```text
SOURCE_ID:
    ME-PENOBCOT-PRCC-AUDIO

TYPE:
    REGIONAL_PUBLIC_SAFETY_AUDIO

DISPATCH_CENTER:
    Penobscot County Regional Communications Center

STATUS:
    🟢 PUBLIC FEED
```

This is an excellent example of why feeds should be modeled by **dispatch center**, not just municipality.

---

### 38. Aroostook County

Aroostook currently has:

```text
10 public audio feeds
```

including Maine State Communications Network, Aroostook County Sheriff, Fort Kent, Madawaska, Grand Isle, fire, EMS and LifeFlight-related traffic. ([Broadcastify][27])

#### Registry

```text
SOURCE_ID:
    ME-AROOSTOOK-AUDIO

TYPE:
    PUBLIC_SAFETY_AUDIO

FEEDS:
    10

STATUS:
    🟢 PUBLIC
```

---

### 39. Maine State Communications Network

The scanner records demonstrate public feeds carrying traffic from the:

```text
Maine State Communications Network
```

which is the statewide public-safety radio infrastructure.

The current public feeds document MSCommNet traffic in several counties. ([Broadcastify][27])

#### Registry

```text
SOURCE_ID:
    ME-MSCOMMNET

TYPE:
    P25_PUBLIC_SAFETY_RADIO

STATUS:
    🟢 VERIFIED RADIO SYSTEM

PUBLIC_STREAM:
    🟢 VIA THIRD-PARTY FEEDS
```

Important distinction:

**MSCommNet is the radio system. Broadcastify is the streaming source.**

---

### 40. Maine State Police radio

Public scanner feeds document Maine State Police traffic, including:

```text
Bangor Troop E
Houlton Troop F
Bangor Troop I
Maine State Police South
```

among other coverage areas. ([Broadcastify][26])

#### Registry

```text
SOURCE_ID:
    ME-MSP-RADIO

AGENCY:
    Maine State Police

SYSTEM:
    Maine State Communications Network

TYPE:
    LAW_ENFORCEMENT_RADIO

PUBLIC_ACCESS:
    🟢 THROUGH PUBLIC STREAMS
```

---

### 41. Maine CAD

I have **not** established a verified statewide public CAD API.

Therefore:

```text
STATEWIDE CAD:
    🔴 NOT VERIFIED
```

The public radio infrastructure is much easier to verify than a public CAD feed.

---

### 42. Maine public-records source

Maine's Department of Public Safety explicitly identifies:

```text
Freedom of Access Act
1 MRS 401
```

as the state's public-records framework. ([Maine][28])

Maine State Police also maintains a dedicated investigative-record request process, while warning that investigative/intelligence records are generally restricted. ([Maine][29])

This is important for ALPR discovery:

```text
PUBLIC RECORD REQUEST
        ↓
contracts
policies
procurement
deployment records
camera locations
        ↓
NOT necessarily
raw ALPR reads
```

---

### 43. Maine ALPR discovery strategy

Because of the state's restrictive ALPR law, the best discovery strategy is:

```text
1. Municipal procurement records
          ↓
2. Police ALPR policies
          ↓
3. Contracts
          ↓
4. Council minutes
          ↓
5. Public-record requests
          ↓
6. Physical/geographic verification
          ↓
7. Community maps as secondary evidence
```

Do **not** start with raw ALPR data.

---

### 44. Maine transportation architecture

The statewide transportation graph is:

```text
MAINE
│
├── MaineDOT
│   │
│   ├── New England 511
│   │   ├── Cameras
│   │   ├── Message Signs
│   │   ├── Traffic
│   │   ├── Incidents
│   │   ├── Waze
│   │   ├── RWIS
│   │   └── Weather
│   │
│   ├── MaineDOT ArcGIS
│   │
│   └── MaineDOT TSMO
│
├── Maine Turnpike Authority
│   ├── CCTV
│   ├── Portable CCTV
│   ├── RWIS
│   ├── DMS
│   └── TMCC
│
└── Public Safety
    ├── Maine State Police
    ├── County
    ├── Municipal
    └── Regional dispatch
```

---

### 45. Maine surveillance architecture

```text
MAINE ALPR
│
├── Maine DOT
│
├── Maine State Police
│   └── MIAC
│
├── Municipal Police
│   ├── York
│   ├── Lewiston
│   ├── Auburn [historical/inactive]
│   ├── South Portland [removed]
│   ├── Falmouth [vendor transition]
│   └── others
│
├── County
│   └── Hancock County
│       └── Motorola
│
└── Private
    └── reported Genetec / IDEXX
```

---

### 46. Exact Maine source registry

| Source ID                         | Owner                    | Data                       | Type             | Status        |
| --------------------------------- | ------------------------ | -------------------------- | ---------------- | ------------- |
| `ME-NE511`                        | MaineDOT/NHDOT/VTrans    | Traveler information       | **511**          | 🟢            |
| `ME-NE511-CCTV`                   | MaineDOT                 | Traffic cameras            | **CCTV**         | 🟢            |
| `ME-NE511-WAZE`                   | Waze + DOTs              | Incidents/closures         | **Traffic**      | 🟢            |
| `ME-MAINE-DOT-ARCGIS`             | MaineDOT                 | GIS                        | **REST GIS**     | 🟢            |
| `ME-MAINE-DOT-TSMO`               | MaineDOT                 | TSMO layers                | **REST GIS**     | 🟢            |
| `ME-MTA-CCTV`                     | Maine Turnpike Authority | 12 fixed + 4 portable      | **CCTV**         | 🟢            |
| `ME-MTA-RWIS`                     | MTA                      | 4 RWIS                     | Weather          | 🟢            |
| `ME-MTA-TMCC`                     | MTA                      | Traffic management         | ATMS             | 🟢            |
| `ME-NE-COMPASS`                   | Regional                 | Incidents/delays/etc.      | ATMS             | 🟢            |
| `ME-MIAC-ALPR`                    | Maine State Police       | ALPR intelligence requests | **ALPR**         | 🟢            |
| `ME-YORK-PD-FLOCK`                | York PD                  | Flock                      | **ALPR**         | 🟢            |
| `ME-LEWISTON-PD-FLOCK`            | Lewiston PD              | Flock                      | **ALPR**         | 🟢            |
| `ME-HANCOCK-COUNTY-MOTOROLA-ALPR` | Hancock County agencies  | Motorola                   | **ALPR**         | 🟢            |
| `ME-AUBURN-FLOCK`                 | Auburn                   | Flock                      | **ALPR**         | 🟡 Historical |
| `ME-SOUTH-PORTLAND-FLOCK`         | South Portland           | Flock                      | **ALPR**         | 🔴 Removed    |
| `ME-FALMOUTH-ALPR`                | Falmouth                 | ALPR                       | **ALPR**         | 🟡 Transition |
| `ME-IDEXX-GENETEC-CLOUDRUNNER`    | IDEXX                    | Genetec                    | **Private ALPR** | 🟡            |
| `ME-ALPR-OSM`                     | Community                | ALPR locations             | Discovery        | 🟡            |
| `ME-BROADCASTIFY`                 | Third-party              | Public safety audio        | **Radio**        | 🟢            |
| `ME-PENOBCOT-PRCC-AUDIO`          | PRCC / Broadcastify      | Regional dispatch          | **Radio**        | 🟢            |
| `ME-MSCOMMNET`                    | Maine                    | P25 radio system           | **Radio**        | 🟢            |

---

### 47. Exact endpoints we can establish

#### MaineDOT ArcGIS

```text
https://gis.maine.gov/mapservices/rest/services/dot/
```

Official REST service directory. ([Maine GIS][6])

#### MaineDOT OpenData

```text
https://gis.maine.gov/mapservices/rest/services/dot/MaineDOT_OpenData/MapServer
```

Official machine-readable MapServer supporting JSON, GeoJSON and PBF. ([Maine GIS][7])

#### MaineDOT TSMO

```text
https://gis.maine.gov/mapservices/rest/services/dot/MaineDOT_TSMO/MapServer
```

Official machine-readable MapServer. ([Maine GIS][8])

#### New England 511

```text
https://newengland511.org/
```

Official shared regional traveler-information system with camera layer and developer/data-feed infrastructure. ([newengland511.org][2])

#### Maine Turnpike cameras

```text
https://maineturnpike.com/traveler-services/traffic-cams
```

Official MTA camera page. ([Maine Turnpike Authority][9])

---

### 48. What I am **not** claiming

There are several things I deliberately did **not** turn into fake "sources":

```text
🔴 No statewide public ALPR API established

🔴 No public raw ALPR observation feed

🔴 No statewide CAD API established

🟡 Exact current New England 511 camera API endpoint
   needs direct current endpoint verification

🟡 Exact MaineDOT CCTV ArcGIS layer
   not established from current public layer index

🟡 Exact MTA camera image backend
   not yet reverse-engineered/verified

🟡 Current Falmouth ALPR vendor
   not established

🟡 Exact statewide Maine ALPR camera count
   not established
```

That is intentional.

---

### 49. Maine's biggest discoveries

#### 🥇 New England 511

**10/10**

MaineDOT officially participates in a regional 511 platform with a camera layer and developer/data-feed architecture. ([newengland511.org][2])

#### 🥇 MaineDOT ArcGIS

**9.5/10**

Official REST infrastructure with JSON/GeoJSON/PBF support. ([Maine GIS][7])

#### 🥇 Maine Turnpike CCTV

**9/10**

Exact documented inventory of 12 fixed + 4 portable cameras. ([Maine Turnpike Authority][10])

#### 🥇 Maine ALPR statute

**10/10**

Extremely useful for determining what can and cannot legitimately be treated as public data. ([Maine State Legislature][12])

#### 🥇 MIAC ALPR

**9/10**

Official evidence of a statewide ALPR intelligence-request process. ([Maine][13])

#### 🥇 Hancock County Motorola

**9/10**

Proves Maine's ALPR environment is not exclusively Flock. ([Bangor Daily News][19])

#### 🥇 Public radio

**8.5/10**

83–90 feeds, including statewide and county/regional coverage. ([Broadcastify][24])

---

### 50. Maine final classification

| Category                        | Maine         |
| ------------------------------- | ------------- |
| Statewide traveler information  | 🟢            |
| Statewide traffic-camera system | 🟢            |
| New England 511 cameras         | 🟢            |
| Official machine-readable GIS   | 🟢            |
| MaineDOT TSMO REST              | 🟢            |
| Exact current 511 camera API    | 🟡            |
| Maine Turnpike CCTV             | 🟢            |
| Fixed MTA cameras               | 🟢 **12**     |
| Portable MTA cameras            | 🟢 **4**      |
| MTA RWIS                        | 🟢 **4**      |
| Public ALPR systems             | 🟢            |
| Statewide ALPR observations     | 🔴            |
| ALPR location inventory         | 🟡            |
| Flock                           | 🟢            |
| Motorola ALPR                   | 🟢            |
| Genetec                         | 🟡            |
| Public scanner feeds            | 🟢 **~83–90** |
| Maine State Police radio        | 🟢            |
| MSCommNet                       | 🟢            |
| Statewide public CAD            | 🔴            |

#### **Maine rating: 9.1/10 — HIGH VALUE**

Maine isn't as data-rich as Louisiana, but it has something more important for this project: **clean source separation and unusually strong legal/source documentation around ALPR.**

The two sources I would prioritize for actual ingestion work are:

```text
1. NEW ENGLAND 511
   ↓
   Maine cameras
   Maine traffic
   Maine Waze
   Maine RWIS
   Maine DMS

2. MAINE TURNPIKE AUTHORITY
   ↓
   12 fixed CCTV
   4 portable CCTV
   4 RWIS
   TMCC
```

And for surveillance discovery:

```text
3. Maine municipal ALPR records
4. Maine State Police / MIAC
5. Hancock County Motorola
6. York/Lewiston Flock
7. FOAA records
8. Community maps only as secondary verification
```

**Next alphabetically: Maryland.**

[1]: https://www.maine.gov/dot/publications/traffic-engineering/traffic-cameras "Traffic Cameras | Maine Department of Transportation"
[2]: https://www.newengland511.org/Home/ "New England 511| 511 Traffic | Commuter Information"
[3]: https://tetcoalition.org/wp-content/uploads/2019/12/TETC-TIS-Roundtable-Nov2020-Meeting-Summary.pdf?utm_source=chatgpt.com "The Eastern Transportation Coalition: Traveler Information Services Web"
[4]: https://www.newengland511.org/Cms/GetFile?id=0690f4fb-680f-ed11-ab23-0231beac5abc.133035771106400000&utm_source=chatgpt.com "Traveler Information Terms and Conditions of Use and Access and Development"
[5]: https://greasyfork.org/ka/scripts/407690-wme-dot-cameras/code?utm_source=chatgpt.com "WME DOT Cameras - Source code"
[6]: https://gis.maine.gov/mapservices/rest/services/dot "Folder: dot"
[7]: https://gis.maine.gov/mapservices/rest/services/dot/MaineDOT_OpenData/MapServer?utm_source=chatgpt.com "dot/MaineDOT_OpenData (MapServer)"
[8]: https://gis.maine.gov/mapservices/rest/services/dot/MaineDOT_TSMO/MapServer "dot/MaineDOT_TSMO (MapServer)"
[9]: https://maineturnpike.com/traveler-services/traffic-cams?utm_source=chatgpt.com "Maine Turnpike Authority - Traffic Cams"
[10]: https://maineturnpike.com/traveler-services/traffic-management-communications-center?utm_source=chatgpt.com "Maine Turnpike Authority - Traffic Management & Communications Center"
[11]: https://www.maineturnpike.com/home?utm_source=chatgpt.com "Maine Turnpike Authority - Home"
[12]: https://legislature.maine.gov/legis/bills/bills_124th/chapters/PUBLIC605.asp?utm_source=chatgpt.com "PUBLIC Law, Chapter 605, An Act To Regulate the Use of Automated License Plate Recognition Systems"
[13]: https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/2024%20Annual%20Report%20and%20Audits%20Combined.pdf?utm_source=chatgpt.com "UNCLASSIFIED"
[14]: https://yorkpolice.org/DocumentCenter/View/12898/Policy-O-68-Automated-License-Plate-Reader?utm_source=chatgpt.com "Subject: Effective Date: | Automated License Plate Reader May 7, 2026 | Policy # Review Cycle: | O-68 2 Years --- | --- | --- | --- Subject: Distribution: | Automated License Plate Reader All Sworn Personnel | Policy # # of pages: | O-68 5 Subject: MLEAP: | Automated License Plate Reader | Policy # | O-68 None Subject: | Automated License Plate Reader Rescinds All Previous Policies Related To This Current Policy | Policy # None | O-68 None Subject: Issuing Authority: | Automated License Plate Reader Chief of Police Owen Davis | Policy # None | O-68 None"
[15]: https://lewistonmaine.gov/ArchiveCenter/ViewFile/Item/6621?utm_source=chatgpt.com "Lewiston City Council Minutes for October 21, 2025"
[16]: https://www.auburnmaine.gov/Documents/Government/City%20Council/3-2%20Meeting%20Agenda.pdf?t=202602261942470&utm_source=chatgpt.com "City Council Workshop & Meeting Agenda"
[17]: https://www.mainepublic.org/maine/2026-07-31/de-flock-petition-to-remove-license-plate-readers-from-auburn-submits-signatures-to-city-hall?utm_source=chatgpt.com "De-Flock petition to remove license plate readers from Auburn submits signatures to City Hall | Maine Public"
[18]: https://www.cunninghamsecurity.com/flock-cameras-maine/?utm_source=chatgpt.com "Flock Cameras in Maine: Towns, Laws & What They Record (2026)"
[19]: https://www.bangordailynews.com/2026/02/09/hancock/hancock-police-courts/license-plate-reader-cameras-hancock-county-joam40zk0w/?utm_source=chatgpt.com "More license plate reader cameras are coming to Maine's coast"
[20]: https://www.pressherald.com/2026/06/09/idexx-appears-to-have-plate-reading-cameras-at-maine-properties/?utm_source=chatgpt.com "Idexx appears to have plate-reading cameras monitoring Maine properties"
[21]: https://flockcameralocations.com/locations/maine?utm_source=chatgpt.com "Flock Camera Locations in Maine — Live ME ALPR Map | Flock Camera Locations"
[22]: https://www.bangordailynews.com/2026/08/13/bangor/bangor-government/bangor-no-flock-cameras-joam40zk0w/?utm_source=chatgpt.com "Bangor denies it has any Flock cameras in city as complaints mount"
[23]: https://status.broadcastify.com/listen/coid/1/publicsafety?utm_source=chatgpt.com "Browse Audio Feeds"
[24]: https://status.broadcastify.com/listen/stid/23/publicsafety?utm_source=chatgpt.com "Maine Audio Feeds"
[25]: https://status.broadcastify.com/listen/stid/23?utm_source=chatgpt.com "Maine Audio Feeds"
[26]: https://status.broadcastify.com/listen/feed/21377?utm_source=chatgpt.com "Penobscot County Public Safety"
[27]: https://status.broadcastify.com/listen/ctid/1174/publicsafety?utm_source=chatgpt.com "Aroostook County, Maine Audio Feeds"
[28]: https://www.maine.gov/dps/about/applicable-maine-statutes?utm_source=chatgpt.com "Applicable Maine Statutes | Department of Public Safety"
[29]: https://www11.maine.gov/dps/msp/investigation-traffic/records?utm_source=chatgpt.com "Investigative Records and Record Requests | Maine State Police"
