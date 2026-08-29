---
state: South Dakota
usps: SD
slug: south-dakota
dossier_number: 41
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
  imported_from: project_atlas_state_data/South Dakota.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# South Dakota (SD) - ATLAS State Record

> Dossier **41 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

South Dakota is another **very strong source state**, especially for traffic cameras and radio. It also has a growing ALPR footprint, including confirmed Flock deployments in Sioux Falls and Brookings.

I found several exact, authoritative sources that are useful for the project.

---

### 1. South Dakota Department of Transportation — SDDOT

The primary transportation agency is the **South Dakota Department of Transportation (SDDOT)**.

Its public traveler-information system is **SD511**.

[SD511 — South Dakota's official 511 system](https://www.sd511.org/?utm_source=chatgpt.com)

The official SD511 interface exposes:

* Traffic cameras
* Traffic speeds
* Road conditions
* Incidents
* Construction
* Commercial vehicle restrictions
* Weather
* Weather sensors
* Events
* Obstructions
* Disasters
* Rest areas
* Ports of entry. ([South Dakota 511][1])

#### Registry

```text
SOURCE_ID:
    SD-SDDOT-511

OWNER:
    South Dakota Department of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

STATUS:
    VERIFIED
```

---

### 2. Statewide SDDOT traffic-camera network

This is a **confirmed public camera source**.

SDDOT's official SD511 documentation says motorists can access SDDOT's network of traffic cameras through the website and mobile application. 

More importantly, the South Dakota Truck Information site states that SD511 provides:

> roadside camera images from more than 100 locations

along with road/weather conditions, restrictions, incidents and other traveler information. ([SD Truck Info][2])

A newer federal transportation study describes the system more specifically: SD511 provides traffic-camera locations and allows users to select cameras and view static images from several angles, updated approximately every five minutes. ([DOT ROSA P][3])

#### Registry

```text
SOURCE_ID:
    SD-SDDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

IMAGERY:
    STATIC_CAMERA_IMAGES

MULTI_VIEW:
    YES

UPDATE:
    APPROX. 5 MINUTES

STATUS:
    VERIFIED
```

---

### 3. SD511 camera viewer

The SD511 site has an actual camera viewer rather than merely a map marker.

The official site exposes:

```text
Camera Viewer
    ↓
Cameras
    ↓
Location
    ↓
Camera selection
```

and allows cameras to be searched by scrolling, search term, or route filter. 

This is particularly useful for ATLAS because the system already has a conceptual camera registry.

#### Registry

```text
SOURCE_ID:
    SD-SD511-CAMERA-VIEWER

TYPE:
    PUBLIC_CAMERA_DIRECTORY

SEARCH:
    LOCATION
    ROUTE
    CAMERA

STATUS:
    VERIFIED
```

---

### 4. SD511 does NOT archive camera video

This is explicitly documented.

SDDOT states:

> SDDOT DOES NOT RECORD TRAFFIC CAMERA VIDEO

and its FAQ states that it cannot provide accident video from the traffic cameras. ([Iteris Freshdesk][4])

Therefore:

```text
LIVE_CAMERA:
    YES

STATIC_SNAPSHOTS:
    YES

VIDEO_RECORDING:
    NO

HISTORICAL_VIDEO:
    NO

ACCIDENT_VIDEO_ARCHIVE:
    NO
```

This distinction should be preserved in the source database.

---

### 5. SD511 camera snapshots

SDDOT specifically describes the camera system as **snapshots**, not continuous public video.

The official documentation says camera snapshots can occasionally become several hours old when the system is undergoing maintenance or upgrades. 

The federal feasibility report similarly describes cameras as providing static images from several angles, updated approximately every five minutes. ([DOT ROSA P][3])

So the canonical ATLAS classification should be:

```text
MEDIA_TYPE:
    IMAGE

DELIVERY:
    PERIODIC_SNAPSHOT

NOT:
    PUBLIC_HLS
    PUBLIC_MJPEG
    PUBLIC_CONTINUOUS_VIDEO
```

---

### 6. SDDOT CCTV infrastructure

SDDOT's engineering documentation confirms that its ITS infrastructure includes CCTV.

An SDDOT corridor report describes an actual:

**Closed Circuit Television (CCTV)**

camera with:

* pan/tilt/zoom capability
* roadway monitoring
* communications connectivity
* integration with other ITS equipment.

For example, the report identifies a CCTV camera co-located with a DMS on I-90. ([SDDOT][5])

Another SDDOT traffic analysis document describes cameras installed with:

* DMS
* RWIS
* network communications
* digital image transmission.

It also notes that some cameras are technically capable of motion video but are operated as periodic still-image systems because of communications constraints. ([SDDOT][6])

#### Registry

```text
SOURCE_ID:
    SD-SDDOT-ITS-CCTV

TYPE:
    ITS_CCTV

CAPABILITY:
    PTZ

PUBLIC_PRESENTATION:
    SD511 SNAPSHOTS

STATUS:
    VERIFIED
```

---

### 7. RWIS + camera network

South Dakota has an important relationship between:

**Road Weather Information System (RWIS)**

and cameras.

SDDOT documentation identifies cameras at RWIS sites, including cameras transmitting still images over the network. ([SDDOT][6])

The federal traffic-operations feasibility report also describes environmental sensor stations and says stations equipped with cameras provide static images approximately every five minutes. ([DOT ROSA P][3])

Therefore ATLAS should model these as linked observations:

```text
RWIS SITE
    │
    ├── Air Temperature
    ├── Dew Point
    ├── Wind
    ├── Precipitation
    ├── Road/Pavement Conditions
    └── CAMERA
          │
          └── STATIC IMAGE
```

This is much more valuable than treating the camera as an isolated object.

---

### 8. SD511 camera count

The official SDDOT/SD511 source establishes **more than 100 camera locations**. ([SD Truck Info][2])

Third-party aggregators currently report considerably larger numbers because they combine multiple SDDOT/municipal sources.

For example, one current aggregator reports approximately 175 SDDOT camera views, while another claims more than 350 cameras by combining SDDOT and municipal sources. ([Wasatch Roads][7])

I would **not** put those larger numbers into the authoritative state registry yet.

Use:

```text
OFFICIAL_MINIMUM:
    >100 locations

CURRENT_EXACT_COUNT:
    NOT YET AUTHORITATIVELY VERIFIED
```

That avoids contaminating the database with an aggregator's count.

---

### 9. SDDOT GIS infrastructure

South Dakota has a very substantial public ArcGIS infrastructure.

Official SDDOT services are available through:

```text
sdgis.sd.gov/dot/rest/services/
```

For example, SDDOT publishes the statewide road system through its:

**DOT Route System FeatureServer**

with:

* State Highways
* Ramps
* Frontage Roads. ([South Dakota GIS][8])

It also publishes:

* structures
* traffic counts
* intersections
* crashes
* mileage markers
* administrative systems.

This is an important discovery because it gives us a direct machine-readable GIS ecosystem.

---

### 10. SDDOT traffic-count FeatureServer

Official:

[SDDOT Traffic Count Locations FeatureServer](https://sdgis.sd.gov/dot/rest/services/TIM/DOT_TrafficCountLoc/FeatureServer?utm_source=chatgpt.com)

This contains:

**Traffic Count Locations**

and is maintained by SDDOT's Office of Transportation Inventory Management. It supports:

* JSON
* GeoJSON
* PBF
* spatial queries
* statistics
* pagination. ([South Dakota GIS][9])

#### Registry

```text
SOURCE_ID:
    SD-SDDOT-GIS-TRAFFIC-COUNT

TYPE:
    TRAFFIC_SENSOR_LOCATIONS

FORMAT:
    ESRI_FEATURESERVER

PUBLIC:
    YES

MACHINE_READABLE:
    YES

STATUS:
    VERIFIED
```

This is **not a camera source**, but it is useful contextual infrastructure.

---

### 11. SDDOT crash FeatureServer

Official:

[SDDOT Crash FeatureServer](https://sdgis.sd.gov/dot/rest/services/TIM/DOT_Crashes/FeatureServer?utm_source=chatgpt.com)

This contains statewide crash data and exposes a **Crash Year** layer. ([South Dakota GIS][10])

It uses geographic coordinates in WGS84 and supports machine-readable querying.

#### Registry

```text
SOURCE_ID:
    SD-SDDOT-GIS-CRASHES

TYPE:
    CRASH_DATA

FORMAT:
    ESRI_FEATURESERVER

STATUS:
    VERIFIED
```

Again, not surveillance data, but valuable for correlating camera locations and incidents.

---

### 12. SDDOT intersection FeatureServer

SDDOT also publishes a statewide intersection dataset.

The service contains intersections including:

* state highway/state highway
* state highway/local road
* local road/local road
* traffic control
* number of legs
* facility type
* jurisdiction. ([South Dakota GIS][11])

#### Registry

```text
SOURCE_ID:
    SD-SDDOT-GIS-INTERSECTIONS

TYPE:
    INTERSECTION_DATABASE

STATUS:
    VERIFIED
```

This could become useful for identifying potential municipal camera locations.

---

### 13. SDDOT mileage markers

SDDOT maintains a statewide mileage-reference-marker FeatureServer.

Official service:

[SDDOT Mileage Reference Markers FeatureServer](https://sdgis.sd.gov/dot/rest/services/TIM/DOT_MileageReferenceMarkers/FeatureServer?utm_source=chatgpt.com)

The service covers state trunk highways and frontage roads and is updated monthly. ([South Dakota GIS][12])

This gives ATLAS another way to normalize camera locations:

```text
CAMERA
    ↓
ROUTE
    ↓
MILEAGE REFERENCE MARKER
    ↓
LAT/LON
```

---

### 14. SDDOT road system

Official:

[SDDOT Route System FeatureServer](https://sdgis.sd.gov/dot/rest/services/TIM/DOT_Route_System/FeatureServer?utm_source=chatgpt.com)

It exposes:

```text
State Highways
Ramps
Frontage Roads
```

and supports machine-readable queries. ([South Dakota GIS][8])

This should be recorded as an auxiliary source for camera geolocation normalization.

---

### 15. SD511 weather sensors

SD511 exposes a **Weather Sensors** layer.

The public interface identifies:

* air temperature
* dew point
* relative humidity
* wind speed
* wind gust
* wind direction. ([South Dakota 511][1])

This is important because many camera sites are co-located with environmental sensing equipment.

#### Registry

```text
SOURCE_ID:
    SD-SDDOT-RWIS

TYPE:
    ROAD_WEATHER_SENSOR_NETWORK

PUBLIC:
    YES

DATA:
    TEMPERATURE
    DEW_POINT
    HUMIDITY
    WIND
    PRECIPITATION
    ROAD_CONDITIONS

STATUS:
    VERIFIED
```

---

### 16. South Dakota State Radio Communications System

Now the radio side.

South Dakota operates the:

### State Radio Communications System — SRC

A recent official state PSAP study states that SRC was established in 2003 as a unified public-safety communications platform.

The same report says the system now serves **more than 90% of the state's first responders** and has been upgraded to a **P25-compliant system**. ([Boards and Commissions][13])

#### Registry

```text
SOURCE_ID:
    SD-STATE-RADIO

OFFICIAL_NAME:
    STATE RADIO COMMUNICATIONS SYSTEM

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

COVERAGE:
    >90% OF STATE FIRST RESPONDERS

STATUS:
    VERIFIED
```

---

### 17. South Dakota P25

Older South Dakota state documentation explains that the system uses Project 25.

The state describes P25 as the public-safety communications standard and documents South Dakota's historical transition to a hybrid P25 voice / Motorola networking system. ([State Radio][14])

More recent documentation confirms the statewide system is now P25-compliant. ([Boards and Commissions][13])

So:

```text
RADIO_STANDARD:
    P25

SYSTEM:
    STATE RADIO COMMUNICATIONS SYSTEM

PUBLIC_SAFETY:
    YES

STATEWIDE:
    YES
```

---

### 18. Recent legal/administrative change to State Radio

There is an important 2026 update.

South Dakota's current codified law says:

* the Bureau of Information and Technology operates the state communications system
* the Department of Public Safety operates the law-enforcement telecommunications system
* State Radio Communications functions were transferred to the Department of Public Safety effective April 13, 2026. ([South Dakota Legislature][15])

Therefore the source record should reflect the **2026 organizational change**.

```text
PRE-APRIL-2026:
    BUREAU OF INFORMATION & TECHNOLOGY

CURRENT:
    SOUTH DAKOTA DEPARTMENT OF PUBLIC SAFETY

EFFECTIVE:
    2026-04-13
```

---

### 19. State Radio towers

South Dakota law specifically authorizes:

* towers
* repeater stations
* subheadquarters

for the state communications system. ([South Dakota Legislature][15])

This is useful for eventual radio-source mapping.

```text
STATE RADIO
    │
    ├── Towers
    ├── Repeaters
    └── Subheadquarters
```

The public legal source confirms the infrastructure exists, but I am **not claiming a complete public tower-coordinate dataset** yet.

---

### 20. Broadcastify — South Dakota

South Dakota has extensive public scanner coverage.

The current Broadcastify state directory reports:

**98 audio feeds across 67 counties**

with public-safety feeds throughout the state. ([Broadcastify][16])

The broader directory currently reports South Dakota coverage in the dozens of feeds, with counts changing as feeds are added/removed. ([Broadcastify][17])

The state-specific directory is the better source for this dossier.

#### Registry

```text
SOURCE_ID:
    SD-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

STATE_FEEDS:
    ~98 CURRENTLY LISTED

COUNTIES:
    67

STATUS:
    VERIFIED
```

---

### 21. Brown County / Aberdeen State Radio feed

One particularly useful feed is:

**Brown County Sheriff, Aberdeen Fire/Rescue, State Highway Patrol**

The feed notes explicitly identify:

* Brown County Sheriff
* Fire
* EMS
* DOT
* NOAA
* State Radio
* Highway Patrol
* APCO-25
* NXDN
* DMR
* analog systems. ([Broadcastify][18])

The feed's scanner monitors the Aberdeen State Radio tower and can receive traffic from multiple agencies.

#### Registry

```text
SOURCE_ID:
    SD-BROADCASTIFY-BROWN-COUNTY

SYSTEMS:
    STATE RADIO P25
    NXDN
    DMR
    ANALOG

AGENCIES:
    BROWN COUNTY SHERIFF
    ABERDEEN FIRE/RESCUE
    STATE HIGHWAY PATROL
    DOT
    NOAA

STATUS:
    VERIFIED
```

This is an excellent example of why the radio source should be modeled at the **feed/system/talkgroup/agency** level.

---

### 22. Broadcastify coverage is not the same as statewide radio availability

Important distinction:

```text
STATE RADIO:
    STATEWIDE PUBLIC-SAFETY NETWORK

BROADCASTIFY:
    PUBLICLY MONITORED SUBSET
```

A department being absent from Broadcastify **does not mean the department has no radio system**.

Likewise, an encrypted talkgroup may exist on State Radio while having no publicly monitorable audio.

ATLAS should therefore keep:

```text
SYSTEM_EXISTS
PUBLIC_FEED_EXISTS
PUBLIC_AUDIO_AVAILABLE
ENCRYPTED
```

as separate properties.

---

### 23. Sioux Falls Flock ALPR

This is one of the strongest ALPR sources in the state.

The official City of Sioux Falls Police Department states:

> The Sioux Falls Police Department partnered with Flock Safety

to provide automated license plate readers throughout the city. ([Sioux Falls][19])

The city states that the system is intended to help investigate:

* wanted people
* missing people
* stolen vehicles
* other crimes.

It explicitly says the system:

* does not use facial recognition
* does not collect biometric information
* is not used for speeding
* is not used for red-light enforcement
* is not used for parking violations. ([Sioux Falls][19])

#### Registry

```text
SOURCE_ID:
    SD-SIOUX-FALLS-PD-FLOCK

AGENCY:
    SIOUX FALLS POLICE DEPARTMENT

VENDOR:
    FLOCK SAFETY

TYPE:
    ALPR

CAMERA_COUNT:
    25

RETENTION:
    30 DAYS

FACIAL_RECOGNITION:
    NO

STATUS:
    VERIFIED
```

The 25-camera figure is also supported by the city's contract and current reporting. ([Sioux Falls AMV][20])

---

### 24. Sioux Falls Flock contract

The actual city contract is publicly available.

It identifies:

```text
Customer:
    SD - Sioux Falls PD

Initial term:
    24 months

Renewal:
    24 months

Retention:
    30 days
```

and documents the Flock Safety platform/software purchase. ([Sioux Falls AMV][20])

This is exactly the kind of **primary-source evidence** ATLAS should preserve.

#### Source

[Sioux Falls Police / Flock Safety Master Services Agreement](https://amv.siouxfalls.gov/OnBaseAgendaOnline/Documents/DownloadFileBytes/24-4271%20Flock%20Safety%20Master%20Services%20Agreement.pdf.pdf?documentType=1&isAttachment=True&isSection=False&itemId=184408&meetingId=3963&publishId=137166&utm_source=chatgpt.com)

---

### 25. Sioux Falls ALPR access restrictions

The official city policy states that only:

* properly trained sworn officers
* police dispatchers

are authorized to access the ALPR system. ([Sioux Falls][19])

Therefore:

```text
PUBLIC_RAW_ALPR_DATABASE:
    NO

PUBLIC_LIVE_ALPR_FEED:
    NO

PUBLIC_CAMERA_METADATA:
    PARTIAL

PUBLIC_POLICY:
    YES

PUBLIC_CONTRACT:
    YES
```

This is a critical distinction for the project.

---

### 26. Madison ALPR

Madison, South Dakota is another confirmed ALPR deployment.

South Dakota Searchlight reports that Madison installed automated license plate readers in **2022** and that the system has been used by Madison Police to investigate thefts. ([South Dakota Searchlight][21])

This establishes:

```text
SOURCE_ID:
    SD-MADISON-PD-ALPR

AGENCY:
    MADISON POLICE DEPARTMENT

TYPE:
    ALPR

DEPLOYMENT:
    2022

STATUS:
    VERIFIED
```

I have **not** found sufficient primary-source evidence in this pass to establish the exact vendor/count, so those fields remain unfilled.

---

### 27. Brookings Flock ALPR

Brookings is another confirmed deployment.

A January 2026 Brookings public meeting record identifies a **Flock Safety** system with:

**7 automated license plate readers**

installed throughout town. ([OpenPublica][22])

The public discussion states the cameras capture vehicle make/model/plate information and store it in a searchable database accessible by Brookings Police and agencies with which the information is shared.

#### Registry

```text
SOURCE_ID:
    SD-BROOKINGS-PD-FLOCK

AGENCY:
    BROOKINGS POLICE DEPARTMENT

VENDOR:
    FLOCK SAFETY

TYPE:
    ALPR

CAMERAS:
    7

DATA:
    LICENSE PLATE
    VEHICLE MAKE/MODEL
    VEHICLE IMAGE

SHARING:
    OTHER AGENCIES POSSIBLE

STATUS:
    VERIFIED
```

This is a very useful source.

---

### 28. Rapid City — important negative finding

There is a lot of online material claiming Flock cameras in Rapid City.

But the current Rapid City Police Chief has specifically stated that **the city does not own Flock cameras**. Local businesses and institutions do have Flock equipment. ([THE RAPID CITY SENTINEL][23])

This distinction is extremely important.

```text
RAPID CITY GOVERNMENT FLOCK:
    NO VERIFIED

RAPID CITY PRIVATE FLOCK:
    YES

RAPID CITY POLICE-OWNED FLOCK:
    NOT VERIFIED / CURRENTLY CONTRADICTED
```

Do **not** add all Rapid City Flock cameras to the government ALPR registry.

---

### 29. Summerset — proposed Flock deployment

As of August 2026, Summerset is considering a Flock Safety camera system.

A current August 11, 2026 report says the city commission is scheduled to review the proposed system on September 3. ([https://www.kotatv.com][24])

Therefore:

```text
SOURCE_ID:
    SD-SUMMERSET-FLOCK

STATUS:
    PROPOSED

INSTALLED:
    NOT VERIFIED

ACTIVE:
    NO
```

This should be retained as a **prospective source**, not an active deployment.

---

### 30. Statewide ALPR situation

South Dakota has a significant ALPR ecosystem, but I did **not** find a single official statewide inventory.

Current verified examples include:

```text
Sioux Falls
    └── Flock
    └── 25 cameras

Madison
    └── ALPR
    └── since 2022

Brookings
    └── Flock
    └── 7 cameras
```

There are likely additional deployments.

A current statewide community-surveillance aggregation reports hundreds of ALPR/Flock cameras, but because those are community/OSM-derived rather than a state government inventory, they should **not** be treated as authoritative agency deployments without independent verification. ([Flock Camera Locations][25])

---

### 31. South Dakota ALPR source-discovery leads

The current evidence strongly suggests additional municipal deployments.

For example, current reporting identifies Sioux Falls and Madison as established deployments, while other cities are discussing or deploying Flock. ([South Dakota News Watch][26])

For ATLAS, these should become a **secondary research queue**:

```text
SD ALPR MUNICIPAL DISCOVERY QUEUE

Sioux Falls       VERIFIED
Madison           VERIFIED
Brookings         VERIFIED
Summerset         PROPOSED
Rapid City        PRIVATE / GOVERNMENT NEGATIVE
Aberdeen          HISTORICAL ALPR EVIDENCE
Minnehaha County  LEAD — REQUIRES PRIMARY VERIFICATION
```

The Minnehaha County item is currently supported by reporting rather than a primary government source, so it stays a lead rather than a confirmed registry item.

---

### 32. South Dakota camera + ALPR distinction

This state illustrates why ATLAS needs different camera classifications.

#### SDDOT

```text
TRAFFIC CAMERA
    ↓
ROAD CONDITIONS
    ↓
PUBLIC SD511 SNAPSHOT
```

#### Sioux Falls

```text
ALPR CAMERA
    ↓
LICENSE PLATE
    ↓
LAW ENFORCEMENT DATABASE
```

#### Brookings

```text
FLOCK ALPR
    ↓
PLATE + VEHICLE CHARACTERISTICS
    ↓
SEARCHABLE DATABASE
```

These should **never be collapsed into one generic "camera" type**.

---

### 33. South Dakota source architecture

I would structure the state as:

```text
SOUTH DAKOTA
│
├── SDDOT
│   │
│   ├── SD511
│   │   ├── Traffic Cameras
│   │   ├── Incidents
│   │   ├── Construction
│   │   ├── Traffic Speeds
│   │   ├── Road Conditions
│   │   ├── Weather
│   │   ├── RWIS
│   │   ├── Events
│   │   └── Restrictions
│   │
│   └── SDDOT GIS
│       ├── Routes
│       ├── Intersections
│       ├── Traffic Counts
│       ├── Crashes
│       ├── Mileage Markers
│       └── Structures
│
├── PUBLIC SAFETY RADIO
│   │
│   └── State Radio Communications System
│       └── P25
│
├── SCANNER SOURCES
│   │
│   └── Broadcastify
│       ├── County feeds
│       ├── State Radio
│       ├── Highway Patrol
│       ├── Fire
│       └── EMS
│
└── ALPR
    ├── Sioux Falls PD / Flock
    ├── Brookings PD / Flock
    ├── Madison PD / ALPR
    ├── Minnehaha County / lead
    └── Other municipal deployments
```

---

### 34. Highest-value exact sources

#### 🥇 SD511

[Official South Dakota 511](https://www.sd511.org/?utm_source=chatgpt.com)

**Category:** Traffic cameras / traveler information
**Public:** Yes
**Camera imagery:** Yes
**Recording:** No
**Machine endpoint:** Not yet fully extracted

---

#### 🥈 SDDOT GIS

[South Dakota DOT ArcGIS REST services](https://sdgis.sd.gov/dot/rest/services/?utm_source=chatgpt.com)

**Category:** Government GIS
**Machine-readable:** Yes
**Format:** ArcGIS REST / FeatureServer / MapServer

This is potentially one of the most important technical source repositories in South Dakota.

---

#### 🥉 State Radio Communications System

**Category:** Statewide public-safety radio
**Standard:** P25
**Coverage:** >90% of first responders
**Public raw system:** No
**Public scanner coverage:** Yes

([Boards and Commissions][13])

---

### 4. Broadcastify

[South Dakota Broadcastify feeds](https://status.broadcastify.com/listen/stid/46?utm_source=chatgpt.com)

**Current listing:** ~98 feeds / 67 counties. ([Broadcastify][16])

---

### 5. Sioux Falls Flock

[City of Sioux Falls — ALPR program](https://www.siouxfalls.gov/health-safety/police/police-resources/Automated-License-Plate-Readers-ALPRs?utm_source=chatgpt.com)

**Vendor:** Flock Safety
**Cameras:** 25
**Retention:** 30 days
**Government owner:** Sioux Falls PD

---

### 6. Brookings Flock

**Vendor:** Flock Safety
**Cameras:** 7
**Government owner:** Brookings PD. ([OpenPublica][22])

---

### 35. South Dakota source matrix

| Source                      | Category      | Public | Machine-readable | Status           |
| --------------------------- | ------------- | -----: | ---------------: | ---------------- |
| SD511                       | Traveler info |     🟢 |               🟡 | 🟢               |
| SDDOT traffic cameras       | CCTV          |     🟢 |               🟡 | 🟢               |
| SDDOT CCTV                  | ITS           |     🟢 |               🟡 | 🟢               |
| SDDOT RWIS                  | Weather       |     🟢 |            🟢/🟡 | 🟢               |
| SDDOT GIS                   | GIS           |     🟢 |               🟢 | 🟢               |
| Traffic counts              | Sensors       |     🟢 |               🟢 | 🟢               |
| Crash GIS                   | Crash data    |     🟢 |               🟢 | 🟢               |
| Intersection GIS            | GIS           |     🟢 |               🟢 | 🟢               |
| Route GIS                   | GIS           |     🟢 |               🟢 | 🟢               |
| State Radio                 | P25 radio     |     🟡 |            ❌ raw | 🟢               |
| Broadcastify                | Scanner       |     🟢 |               🟡 | 🟢               |
| Sioux Falls Flock           | ALPR          |     🟡 |                ❌ | 🟢               |
| Brookings Flock             | ALPR          |     🟡 |                ❌ | 🟢               |
| Madison ALPR                | ALPR          |     🟡 |                ❌ | 🟢               |
| Summerset Flock             | ALPR          |     🟡 |                ❌ | 🟡 proposed      |
| Rapid City government Flock | ALPR          |      — |                — | 🔴 not confirmed |
| Private Rapid City Flock    | ALPR          |     🟡 |                ❌ | 🟢               |

---

### 36. ATLAS source records

```text
SD-SDDOT-511
SD-SDDOT-CCTV
SD-SD511-CAMERA-VIEWER
SD-SDDOT-ITS-CCTV
SD-SDDOT-RWIS
SD-SDDOT-GIS
SD-SDDOT-GIS-TRAFFIC-COUNT
SD-SDDOT-GIS-CRASHES
SD-SDDOT-GIS-INTERSECTIONS
SD-SDDOT-GIS-ROUTES
SD-SDDOT-GIS-MILEAGE-MARKERS

SD-STATE-RADIO
SD-BROADCASTIFY
SD-BROADCASTIFY-BROWN-COUNTY

SD-SIOUX-FALLS-PD-FLOCK
SD-BROOKINGS-PD-FLOCK
SD-MADISON-PD-ALPR

SD-SUMMERSET-FLOCK-PROPOSED

SD-MINNEHAHA-COUNTY-ALPR-LEAD
SD-ABERDEEN-ALPR-HISTORICAL
```

---

### 37. South Dakota rating

| Category                       |           Rating |
| ------------------------------ | ---------------: |
| State traffic cameras          | 🟢 **Excellent** |
| Official camera documentation  | 🟢 **Excellent** |
| Public camera access           |               🟢 |
| Machine-readable DOT GIS       | 🟢 **Excellent** |
| RWIS/weather sensors           | 🟢 **Excellent** |
| Statewide P25                  | 🟢 **Excellent** |
| Scanner coverage               | 🟢 **Excellent** |
| Broadcastify coverage          |               🟢 |
| Confirmed ALPR deployments     |               🟢 |
| Statewide ALPR inventory       |               🔴 |
| Public raw ALPR                |               🔴 |
| Public raw police radio system |               🔴 |

#### **Overall: 9.0 / 10**

South Dakota is particularly valuable because it has **both a public camera network and a very well-defined statewide GIS ecosystem**. The radio side is also strong, with the State Radio Communications System and extensive public scanner coverage.

The biggest unresolved item is the **exact machine-readable SD511 camera endpoint**. We have confirmed the cameras, their public imagery, their approximate update behavior, and the SDDOT infrastructure, but I am deliberately not inventing an API URL. That endpoint should be extracted from the live SD511 application's network traffic in the technical-source phase.

**Next alphabetically: Tennessee.**

[1]: https://www.sd511.org/?utm_source=chatgpt.com "South Dakota 511"
[2]: https://sdtruckinfo.sd.gov/rules-regulations/motor-carrier-handbook/chapter-2/south-dakota-sd511-traveler-information/?utm_source=chatgpt.com "SD511 Traveler Information | South Dakota Truck Information"
[3]: https://rosap.ntl.bts.gov/view/dot/80601/dot_80601_DS1.pdf?utm_source=chatgpt.com "Feasibility of a Traffic Operations Center for South Dakota"
[4]: https://iteris.freshdesk.com/support/solutions/articles/70000420798-frequently-asked-questions?utm_source=chatgpt.com "Frequently Asked Questions : Customer Support Portal"
[5]: https://dot.sd.gov/media/documents/CorridorReport_Layout_ReportOnlyFinal.pdf?utm_source=chatgpt.com "+
I-90 Exit 32 - 40
CORRIDOR REPORT
April 2020  |"
[6]: https://dot.sd.gov/media/5da0409c/I-90Exit61to67_December%202017_MASTERFINAL.pdf?utm_source=chatgpt.com "TRAFFIC ANALYSIS REPORT"
[7]: https://wasatchroads.com/sddot-cameras?utm_source=chatgpt.com "South Dakota DOT Cameras — Live SD511 Road & Black Hills Cameras Map"
[8]: https://sdgis.sd.gov/dot/rest/services/TIM/DOT_Route_System/FeatureServer?utm_source=chatgpt.com "TIM/DOT_Route_System (FeatureServer)"
[9]: https://sdgis.sd.gov/dot/rest/services/TIM/DOT_TrafficCountLoc/FeatureServer?utm_source=chatgpt.com "TIM/DOT_TrafficCountLoc (FeatureServer)"
[10]: https://sdgis.sd.gov/dot/rest/services/TIM/DOT_Crashes/FeatureServer?utm_source=chatgpt.com "TIM/DOT_Crashes (FeatureServer)"
[11]: https://sdgis.sd.gov/dot/rest/services/TIM/DOT_Intersections_viewer/FeatureServer/info/iteminfo?utm_source=chatgpt.com "ItemInfo"
[12]: https://sdgis.sd.gov/dot/rest/services/TIM/DOT_MileageReferenceMarkers/FeatureServer?utm_source=chatgpt.com "TIM/DOT_MileageReferenceMarkers (FeatureServer)"
[13]: https://boardsandcommissions.sd.gov/bcuploads/SD%20PSAP%20Efficiency%20Study%20Report%20DRAFT%20%2801-20-25%29.pdf?utm_source=chatgpt.com "SD PSAP Consolidation Study Report DRAFT (01-20-25)"
[14]: https://stateradio.sd.gov/PSCCJUn2016.pdf?utm_source=chatgpt.com "Slide 1"
[15]: https://sdlegislature.gov/Statutes/1-13?utm_source=chatgpt.com "Codified Law 1-13 | South Dakota Legislature"
[16]: https://status.broadcastify.com/listen/stid/46?utm_source=chatgpt.com "South Dakota Audio Feeds"
[17]: https://status.broadcastify.com/listen/?utm_source=chatgpt.com "Browse Audio Feeds"
[18]: https://status.broadcastify.com/listen/feed/9574?utm_source=chatgpt.com "Brown County Sheriff, Aberdeen Fire/Rescue, State Highway Patrol"
[19]: https://www.siouxfalls.gov/health-safety/police/police-resources/Automated-License-Plate-Readers-ALPRs?OC_EA_EmergencyAnnouncementList_Dismiss=7a56e84e-b168-4eef-8990-72f66b4b1ce9&utm_source=chatgpt.com "Automated License Plate Readers (ALPRs) - City of Sioux Falls"
[20]: https://amv.siouxfalls.gov/OnBaseAgendaOnline/Documents/DownloadFileBytes/24-4271%20Flock%20Safety%20Master%20Services%20Agreement.pdf.pdf?documentType=1&isAttachment=True&isSection=False&itemId=184408&meetingId=3963&publishId=137166&utm_source=chatgpt.com "Docusign Envelope ID: 347AC36D-D4C3-46CA-8C6D-1FDDC68CAC6F"
[21]: https://southdakotasearchlight.com/2026/03/06/new-license-plate-imaging-helps-solve-theft-cases-say-police-in-two-south-dakota-cities/?utm_source=chatgpt.com "License plate imaging helps solve theft cases, say police in two South Dakota cities • South Dakota Searchlight"
[22]: https://www.openpublica.com/meetings/brookings-southdakota-meeting-portal-2026-01-13-6a5edbafed023225c82786d6?utm_source=chatgpt.com "Brookings, South Dakota Meeting Portal - January 13, 2026 | Open Publica"
[23]: https://therapidcitysentinel.com/a-flock-of-cameras-you-can-run-but-you-cant-hide-from-private-surveillance-in-rapid-city/?utm_source=chatgpt.com "A Flock of Cameras: You Can Run, But You Can't Hide from Private Surveillance in Rapid City - THE RAPID CITY SENTINEL"
[24]: https://www.kotatv.com/2026/08/11/summerset-discuss-proposed-flock-safety-camera-system-amid-surveillance-concerns/?utm_source=chatgpt.com "Summerset Commission to Discuss Proposed Flock Safety Cameras | KOTA-TV"
[25]: https://flockcameralocations.com/locations/south-dakota?utm_source=chatgpt.com "Flock Camera Locations in South Dakota — Live SD ALPR Map | Flock Camera Locations"
[26]: https://www.sdnewswatch.org/fact-brief-automatic-license-plate-reader-flock-safety-cameras/?utm_source=chatgpt.com "Are SD police departments using license plate readers?"
