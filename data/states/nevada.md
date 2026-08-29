---
state: Nevada
usps: NV
slug: nevada
dossier_number: 28
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
  imported_from: project_atlas_state_data/Nevada.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Nevada (NV) - ATLAS State Record

> Dossier **28 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Nevada is another **very strong state**, but its source landscape is different from Nebraska.

The biggest discovery is NDOT's public **GeoHub/ITS_ATM FeatureServer**, which exposes an authoritative inventory of existing intelligent-transportation devices and explicitly identifies **CCTV** as a device type. NDOT also operates the statewide Nevada 511 system with live traffic cameras. ([Nevada GIS][1])

Nevada is also unusually interesting for ALPR because Las Vegas Metropolitan Police Department has publicly documented an ALPR deployment, while independent mapping currently identifies hundreds of Flock cameras across the state. The latter is useful for discovery but **must not be treated as authoritative**. ([LVMPD Foundation][2])

---

### 1. Nevada Department of Transportation — NDOT

**Nevada Department of Transportation (NDOT)** is the primary state transportation source.

NDOT's official travel-information system provides current road conditions and traffic cameras, including coverage in the Las Vegas and Reno areas. ([Nevada Department of Transportation][3])

NDOT describes its cameras as part of its statewide Intelligent Transportation Systems network. ([Nevada Department of Transportation][4])

#### Registry

```text
SOURCE_ID:
    NV-NDOT

OWNER:
    Nevada Department of Transportation

TYPE:
    STATE_TRANSPORTATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. Nevada 511

The official Nevada 511 map is:

[Nevada 511](https://www.nvroads.com/map?utm_source=chatgpt.com)

The system currently exposes categories including:

```text
Cameras
Message Signs
Weather Stations
Weather Radar
Weather Alerts
Weather Forecasts
Rest Areas
Truck Parking
Oversized Loads
```

([NV Roads][5])

#### Registry

```text
SOURCE_ID:
    NV-NDOT-511

TYPE:
    STATE_511_SYSTEM

STATUS:
    🟢 VERIFIED
```

---

### 3. NDOT Traffic Cameras

NDOT has an official traffic-camera page that specifically identifies:

* statewide road-condition/traffic-camera mapping
* live traffic cameras

NDOT says the cameras are part of its statewide ITS network. ([Nevada Department of Transportation][4])

#### Registry

```text
SOURCE_ID:
    NV-NDOT-TRAFFIC-CAMERAS

TYPE:
    STATE_TRAFFIC_CCTV

STATUS:
    🟢 VERIFIED
```

---

### 4. NDOT GeoHub — MAJOR DISCOVERY

The more important source for our purposes is NDOT's public ArcGIS infrastructure.

The public:

[NDOT ITS_ATM FeatureServer](https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer?utm_source=chatgpt.com)

contains:

```text
Existing NSRS
Existing Gantries
Existing Devices
SDP Proposed Technology Points
STIP Programmed Projects
Project Device Points
Project Packages
Device Fiber
NDOT District Boundaries
```

([Nevada GIS][1])

This is a **machine-readable government GIS source**, not a webpage that needs scraping.

---

### 5. Existing Devices — critical camera inventory source

The `Existing Devices` layer is:

[NDOT Existing Devices Layer](https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer/3?utm_source=chatgpt.com)

It is a point Feature Layer and explicitly supports:

```text
JSON
GeoJSON
PBF
```

([Nevada GIS][6])

The layer has:

```text
OBJECTID
Device_Typ
Location
Device_ID
District
```

([Nevada GIS][6])

That is an excellent ATLAS source.

---

### 6. Existing Devices explicitly identifies CCTV

The `Device_Typ` field contains a device type:

```text
CCTV
```

and the layer describes it as:

```text
Closed-Circuit Television Camera
```

([Nevada GIS][6])

It also contains other transportation devices:

```text
Beacon
CCTV
Controller
DMS
Detection
HAR
RWIS
Radio
Ramp Meter
Switch
```

([Nevada GIS][6])

This is extremely useful because **one authoritative NDOT dataset can identify multiple surveillance/ITS device classes**.

---

### 7. Existing Devices — canonical mapping

For ATLAS:

```text
NDOT ITS_ATM
      │
      ▼
Existing Devices
      │
      ├── OBJECTID
      ├── Device_Typ
      ├── Location
      ├── Device_ID
      ├── District
      └── geometry
             │
             ▼
       CANONICAL DEVICE
```

For CCTV:

```text
device_type:
    CCTV

source_device_id:
    Device_ID

source_record_id:
    OBJECTID

location:
    Location

district:
    District
```

Do **not** throw away the non-camera devices. They are useful for building a complete Nevada ITS inventory.

---

### 8. Project Device Points

NDOT also exposes:

[NDOT Project Device Points](https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer/6?utm_source=chatgpt.com)

This layer is also a point Feature Layer and supports JSON, GeoJSON and PBF. ([Nevada GIS][7])

It explicitly recognizes:

```text
CCTV
DMS
RWIS
Ramp Meter
VSL
WWD
Field Detection
Connected Vehicle Device
Adaptive Signal
Adaptive Lighting
```

([Nevada GIS][7])

#### Important distinction

This is a **project/planned-device source**, not necessarily an operational inventory.

Therefore:

```text
Existing Devices
    → operational/current inventory candidate

Project Device Points
    → planned/project inventory
```

Do not merge them without a lifecycle/status distinction.

---

### 9. NDOT CCTV engineering documentation

NDOT's technical documentation confirms that CCTV is an actual component of the state's ITS architecture.

NDOT's technology guidelines specify CCTV deployment criteria for:

* freeways
* interchanges
* traffic signals
* DMS locations
* rural roadway locations

([Nevada Department of Transportation][8])

Another NDOT document specifies typical CCTV equipment including:

```text
IP camera
PTZ
1080P
H.264
30X optical zoom
10X digital zoom
```

([Nevada Department of Transportation][9])

This is useful as **technical provenance**, but it is not itself the live camera feed.

---

### 10. NDOT camera architecture

NDOT documentation describes CCTV cameras as being used to verify:

* queuing
* congestion
* lane conditions
* roadway conditions

and other traffic-management functions. ([Nevada Department of Transportation][10])

Therefore:

```text
CAMERA_CLASS:
    TRAFFIC_MANAGEMENT_CCTV

PRIMARY_FUNCTION:
    TRAFFIC_OPERATIONS

NOT:
    AUTOMATICALLY_ALPR
```

A CCTV point should **not** be classified as an ALPR merely because it is a roadway camera.

---

### 11. Nevada NDOT camera source hierarchy

For ATLAS, I would rank Nevada's state sources:

#### Tier 1

```text
NV-NDOT-EXISTING-DEVICES
```

#### Tier 2

```text
NV-NDOT-511
NV-NDOT-TRAFFIC-CAMERAS
```

#### Tier 3

```text
NV-NDOT-PROJECT-DEVICE-POINTS
```

#### Tier 4

```text
NDOT CCTV engineering documents
```

The GIS layer should be the primary **inventory source**.

The 511 system should be the primary **public presentation/live-camera discovery source**.

---

### 12. NDOT camera limitation

The `Existing Devices` GIS layer gives us:

```text
location
device ID
device type
district
geometry
```

But from the currently verified layer metadata, I am **not claiming that it directly contains a live JPEG/HLS URL**.

That is important.

We know the camera exists.

We know NDOT exposes it through the 511 system.

But we should **not invent a stream URL** until the actual 511/network request is captured and verified.

That is exactly the kind of distinction this project needs.

---

### 13. Nevada municipal camera systems

NDOT itself says traffic cameras are available in the **Las Vegas and Reno areas** in addition to statewide coverage. ([Nevada Department of Transportation][3])

These should be treated separately from NDOT cameras because municipal systems can contain cameras that don't exist in NDOT's inventory.

For the national database:

```text
NV
├── NDOT
├── Las Vegas
├── Henderson
├── North Las Vegas
├── Reno
├── Sparks
└── other municipalities
```

Each municipal owner should get its own source record.

---

### 14. Nevada ALPR — Las Vegas Metropolitan Police Department

This is a confirmed deployment.

The LVMPD Foundation publicly states that it funded the **acquisition and installation of license plate readers throughout the Las Vegas Valley** for the Las Vegas Metropolitan Police Department. ([LVMPD Foundation][2])

#### Registry

```text
SOURCE_ID:
    NV-LVMPD-ALPR

OWNER:
    Las Vegas Metropolitan Police Department

TYPE:
    LAW_ENFORCEMENT_ALPR

COVERAGE:
    LAS VEGAS VALLEY

STATUS:
    🟢 VERIFIED
```

---

### 15. ALPR vendor/source identification

The current LVMPD Foundation page confirms:

```text
Advanced License Plate Reader technology
```

but the page itself does **not** identify the vendor.

Therefore:

```text
vendor:
    UNKNOWN FROM THIS SOURCE
```

Do **not** automatically label it Flock.

That would be a guess.

---

### 16. Independent Nevada ALPR mapping

A current independent mapping project identifies **846 mapped ALPR cameras in Nevada**, with:

```text
Clark       571
Washoe      188
Carson City 39
Douglas      15
Lyon         11
Storey        7
Nye           6
Mineral       4
White Pine    2
Elko          1
Churchill     1
Esmeralda     1
```

It attributes approximately:

```text
Flock Safety        640
Motorola Solutions  177
Unspecified          18
Axis Communications  18
Genetec               1
```

([Unsurveilled][11])

#### BUT:

**This is not an authoritative government dataset.**

Its own documentation says the vendor attribution comes from OpenStreetMap contributors. ([Unsurveilled][11])

Therefore ATLAS should classify it:

```text
SOURCE_TYPE:
    COMMUNITY_DERIVED

AUTHORITY:
    LOW/MEDIUM

USE:
    DISCOVERY / CROSS-REFERENCE

NOT:
    AUTHORITATIVE_DEPLOYMENT_RECORD
```

---

### 17. Flock camera mapping

Another current independent source reports **848 Flock/ALPR cameras** in Nevada based on OpenStreetMap data. ([Flock Camera Locations][12])

Again:

```text
848 ≠ confirmed statewide total
```

It is a community-derived inventory.

This is useful for finding places where we should search for:

* police contracts
* city council documents
* procurement records
* public notices
* GIS layers
* camera deployment agreements.

It should **not** be imported as confirmed government inventory without provenance.

---

### 18. ALPR — Nevada law research

I did not find a Nevada equivalent of Nebraska's centralized statewide ALPR annual-report repository during this pass.

That is an important negative result.

Nevada's official statute repository is the Nevada Legislature's Law Library. ([Nevada Legislature][13])

The current official statute search should be used for ALPR/privacy/legal research rather than relying on third-party summaries.

#### Registry

```text
NV-ALPR-STATE-REPORTING

CENTRALIZED_PUBLIC_REPOSITORY:
    🔴 NOT VERIFIED

AGENCY-LEVEL_DOCUMENT_SEARCH:
    🟡 REQUIRED
```

---

### 19. Nevada public-safety radio

Nevada has a significant statewide public-safety radio infrastructure.

The Nevada Office of Homeland Security's recent **State of the Radio System** document describes a planned next-generation statewide public-safety radio system based on:

### **P25 Phase 2**

The technical working group includes:

```text
NDOT
Nevada Department of Public Safety / NHP
Washoe County
NV Energy
```

([OEM Nevada][14])

#### Registry

```text
SOURCE_ID:
    NV-PUBLIC-SAFETY-RADIO

TYPE:
    STATE/PUBLIC-SAFETY RADIO

STANDARD:
    P25

NEXT_GENERATION:
    P25 PHASE 2

STATUS:
    🟢 VERIFIED
```

---

### 20. Important radio-system distinction

The 2026 state document is specifically discussing the **next-generation system**.

Therefore we should not assume:

```text
current statewide system = P25 Phase 2
```

merely because the state plans to deploy it.

Instead:

```text
CURRENT_SYSTEM:
    research separately

NEXT_GENERATION:
    P25 Phase 2
```

This distinction matters for scanner compatibility.

---

### 21. Nevada scanner coverage

Nevada currently has:

### **47 public audio feeds**

across:

### **16 counties**

Broadcastify lists:

```text
27 public safety
7 amateur radio
2 other
1 aviation
```

([Broadcastify][15])

#### Registry

```text
SOURCE_ID:
    NV-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AGGREGATOR

PUBLIC_SAFETY_FEEDS:
    27

TOTAL_FEEDS:
    47

COUNTIES:
    16

STATUS:
    🟢 VERIFIED
```

---

### 22. Nevada scanner coverage by county

Current Broadcastify coverage includes:

```text
Carson City
Churchill
Clark
Douglas
Elko
Esmeralda
Humboldt
Lincoln
Lyon
Mineral
Nye
Pershing
Statewide
Storey
Washoe
White Pine
```

([Broadcastify][15])

This means scanner coverage is **not merely Las Vegas/Reno**.

---

### 23. Public-safety scanner feeds

The public-safety category currently includes feeds such as:

```text
Reno and Sparks Police and Fire
Elko City and County Public Safety
Nevada Highway Patrol — Clark County
Nye County Public Safety
Lyon County Dispatch
Churchill County Sheriff
Carson City Sheriff
Las Vegas City Marshals
Douglas County Sheriff and Fire
Henderson Fire Dispatch
Las Vegas / Clark County Fire
```

([Broadcastify][16])

---

### 24. Scanner source classification

Broadcastify is **not the underlying radio-system owner**.

Therefore:

```text
RADIO_SYSTEM:
    Nevada public-safety radio infrastructure

AUDIO_SOURCE:
    Broadcastify

FEED_PROVIDER:
    third-party/community/official-feed ecosystem
```

ATLAS should preserve those as separate entities.

---

### 25. Nevada radio architecture

The state documentation identifies a next-generation P25 Phase 2 effort, while public scanner coverage demonstrates that significant public monitoring infrastructure already exists. ([OEM Nevada][14])

Canonical structure:

```text
NEVADA
│
├── RADIO SYSTEM
│     │
│     ├── NHP
│     ├── NDOT
│     ├── local agencies
│     └── interoperability
│
└── PUBLIC AUDIO
      │
      └── Broadcastify feeds
```

---

### 26. NDOT radio/ITS devices

The NDOT `Existing Devices` layer actually recognizes:

```text
Radio
```

as an ITS device type in addition to CCTV. ([Nevada GIS][6])

This is an interesting source because it potentially lets us build a broader NDOT roadside-device registry:

```text
CCTV
Radio
HAR
RWIS
Detection
DMS
Ramp Meter
Controller
```

This should become a separate **ITS Device** entity family in ATLAS.

---

### 27. Nevada roadside detection infrastructure

NDOT's `Project Device Points` also identifies:

```text
Field Detection
```

and the technical documentation describes vehicle-detection systems used for:

* volume
* speed
* congestion
* occupancy

([Nevada GIS][7])

This is **not ALPR**.

But it is relevant to the broader surveillance/traffic-sensing database.

---

### 28. RWIS

NDOT's GIS inventories also explicitly identify:

```text
RWIS
```

as a device type. ([Nevada GIS][6])

That gives us:

```text
ROAD WEATHER SENSOR
    ↓
LOCATION
    ↓
WEATHER / ROAD CONDITION DATA
```

This should be captured alongside cameras.

---

### 29. Wrong-way detection

The NDOT project-device layer explicitly contains:

```text
WWD
Wrong Way Driving
```

([Nevada GIS][7])

This is another useful category for the national inventory.

It should not be conflated with:

```text
CCTV
ALPR
traffic detector
```

Instead:

```text
DEVICE_CLASS:
    WRONG_WAY_DETECTION
```

---

### 30. Nevada GIS ecosystem

NDOT's ArcGIS REST directory exposes a substantial public GIS infrastructure, including folders such as:

```text
Applications
ArcGISOnline
Authoritative
TrafficSafety
GeoHub
```

([Nevada GIS][17])

This is valuable because the camera search should not stop after finding one layer.

For ATLAS:

```text
NDOT GIS CATALOG
       ↓
DISCOVERY ENGINE
       ↓
ITS
CCTV
RWIS
DETECTION
RADIO
DMS
TRAFFIC
SAFETY
```

---

### 31. Nevada crash data

NDOT also publishes a statewide open crash-data FeatureServer.

[NDOT Crash Data Open Data FeatureServer](https://gis.dot.nv.gov/arcgis/rest/services/ArcGISOnline/CrashData_OpenData/FeatureServer?utm_source=chatgpt.com)

The service contains a `Crash Data` layer and supports JSON queries. ([Nevada GIS][18])

This isn't surveillance itself, but it is highly useful for correlating:

```text
camera
+
road segment
+
crash
+
traffic conditions
```

---

### 32. Nevada traffic-data source

NDOT's TRINA system provides public traffic information and exposes a FeatureServer containing:

```text
TRINA_CITIES
TRINA_STATIONS
H_TRINA_STATIONS
TRINA_AADT_RouteEvents
TRINA_COUNTIES
TRINA_AADT
```

([Nevada GIS][19])

NDOT describes TRINA 2.0 as providing publicly available traffic-volume/classification data. ([Nevada GIS][20])

This should be stored as a separate traffic-sensor source.

---

### 33. Nevada source architecture

```text
NEVADA
│
├── 🟢 NDOT
│   │
│   ├── 🟢 511
│   ├── 🟢 Traffic Cameras
│   ├── 🟢 Existing Devices GIS
│   ├── 🟢 Project Device GIS
│   ├── 🟢 CCTV
│   ├── 🟢 RWIS
│   ├── 🟢 Vehicle Detection
│   ├── 🟢 Radio devices
│   ├── 🟢 Wrong-way detection
│   ├── 🟢 Traffic counts
│   └── 🟢 Crash data
│
├── 🟢 LAW ENFORCEMENT
│   │
│   └── 🟢 LVMPD ALPR
│
├── 🟡 ALPR DISCOVERY
│   │
│   ├── Flock
│   ├── Motorola
│   ├── Axis
│   └── Genetec
│
├── 🟢 RADIO
│   │
│   └── Public Safety / P25
│
└── 🟢 SCANNERS
    │
    └── 47 feeds / 16 counties
```

---

### 34. Exact sources to preserve

#### State transportation

[NDOT Traffic Cameras](https://www.dot.nv.gov/travel-info/road-conditions/traffic-cameras?utm_source=chatgpt.com)

[Nevada 511](https://www.nvroads.com/map?utm_source=chatgpt.com)

#### Authoritative GIS

[NDOT ITS_ATM FeatureServer](https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer?utm_source=chatgpt.com)

[NDOT Existing Devices Layer](https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer/3?utm_source=chatgpt.com)

[NDOT Project Device Points Layer](https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer/6?utm_source=chatgpt.com)

#### Traffic

[NDOT TRINA FeatureServer](https://gis.dot.nv.gov/arcgis/rest/services/Applications/TRINA/FeatureServer?utm_source=chatgpt.com)

[NDOT Crash Data FeatureServer](https://gis.dot.nv.gov/arcgis/rest/services/ArcGISOnline/CrashData_OpenData/FeatureServer?utm_source=chatgpt.com)

#### ALPR

[LVMPD Foundation — License Plate Readers](https://lvmpdfoundation.org/programs/license-plate-readers/?utm_source=chatgpt.com)

#### Radio

[Nevada State Radio System documentation](https://www.oem.nv.gov/siteassets/oem.nv.gov/homeland-security/State_of_the_Radio_System_rev_B.pdf?utm_source=chatgpt.com)

#### Scanner

[Broadcastify Nevada feeds](https://status.broadcastify.com/listen/stid/32?utm_source=chatgpt.com)

---

### 35. Final Nevada assessment

| Category                            |                                    Rating |
| ----------------------------------- | ----------------------------------------: |
| State traffic cameras               |                          🟢 **Excellent** |
| Authoritative camera GIS            |                          🟢 **Excellent** |
| Camera coordinates                  |                                        🟢 |
| Camera IDs                          |                                        🟢 |
| Public live-camera system           |                                        🟢 |
| CCTV inventory                      |                          🟢 **Excellent** |
| Other ITS-device inventory          |                          🟢 **Excellent** |
| RWIS                                |                                        🟢 |
| Vehicle detection                   |                                        🟢 |
| Wrong-way detection                 |                                        🟢 |
| Traffic data                        |                                        🟢 |
| Crash data                          |                                        🟢 |
| ALPR deployment evidence            |                                        🟢 |
| Central ALPR registry               |                          🔴 **Not found** |
| ALPR location database              |                      🟡 Community-derived |
| Statewide public-safety radio       |                                        🟢 |
| P25 documentation                   |                                        🟢 |
| Public scanner coverage             |                               🟢 **Good** |
| Municipal camera coverage           | 🟡 **Needs deeper city-by-city research** |
| Public raw ALPR data                |                                        🔴 |
| Public raw police-radio system data |                                        🟡 |

### Overall: **9.0 / 10**

#### Most important discovery

Nevada's strongest source isn't merely the 511 camera page.

It is the **NDOT ITS_ATM GIS system**.

The `Existing Devices` layer gives us an authoritative point inventory containing **CCTV, radio, RWIS, detection, DMS, HAR, ramp meters and other ITS equipment**, with `Device_ID`, location and district fields. ([Nevada GIS][6])

That makes Nevada particularly valuable to the broader project because we can potentially ingest **an entire roadside ITS infrastructure inventory**, rather than just cameras.

#### ALPR conclusion

Nevada clearly has significant ALPR deployment—LVMPD publicly confirms license-plate readers throughout the Las Vegas Valley—but I have **not** found a Nebraska-style centralized government ALPR inventory/report repository yet. ([LVMPD Foundation][2])

The independent mapping indicates a much larger statewide footprint, but I am deliberately marking that as **discovery-only**, not factually authoritative. ([Unsurveilled][11])

#### Scanner conclusion

Nevada has **47 public audio feeds covering 16 counties**, including Nevada Highway Patrol, Las Vegas-area agencies, Reno/Sparks, county sheriffs and fire services. ([Broadcastify][15])

**Nevada complete. Next alphabetically: New Hampshire.**

[1]: https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer?utm_source=chatgpt.com "GeoHub/ITS_ATM (FeatureServer)"
[2]: https://lvmpdfoundation.org/programs/license-plate-readers/?utm_source=chatgpt.com "License Plate Readers - LVMPD Foundation"
[3]: https://www.dot.nv.gov/travel-info?utm_source=chatgpt.com "Travel Info | Nevada Department of Transportation"
[4]: https://www.dot.nv.gov/travel-info/road-conditions/traffic-cameras?utm_source=chatgpt.com "Traffic Cameras | Nevada Department of Transportation"
[5]: https://www.nvroads.com/map?utm_source=chatgpt.com "Nevada 511"
[6]: https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer/3?utm_source=chatgpt.com "Layer: Existing Devices (ID: 3)"
[7]: https://gis.dot.nv.gov/agsphs/rest/services/GeoHub/ITS_ATM/FeatureServer/6?utm_source=chatgpt.com "Layer: Project Device Points (ID: 6)"
[8]: https://www.dot.nv.gov/home/showpublisheddocument/22817/638590657432600000?utm_source=chatgpt.com "Technical Memorandum #3:"
[9]: https://www.dot.nv.gov/home/showpublisheddocument/17155/637111537469770000?utm_source=chatgpt.com "Nevada Department of Transportation"
[10]: https://www.dot.nv.gov/home/showpublisheddocument/23888/638918149173500000?utm_source=chatgpt.com "Microsoft Word - NDOT ATM ConOps_011515.docx"
[11]: https://www.unsurveilled.org/atlas/nevada/?utm_source=chatgpt.com "Nevada — known ALPR locations — Unsurveilled"
[12]: https://flockcameralocations.com/locations/nevada?utm_source=chatgpt.com "Flock Camera Locations in Nevada — Live NV ALPR Map | Flock Camera Locations"
[13]: https://www.leg.state.nv.us/Law1.html?utm_source=chatgpt.com "Nevada Law Library"
[14]: https://www.oem.nv.gov/siteassets/oem.nv.gov/homeland-security/State_of_the_Radio_System_rev_B.pdf?utm_source=chatgpt.com "State of The"
[15]: https://status.broadcastify.com/listen/stid/32?utm_source=chatgpt.com "Nevada Audio Feeds"
[16]: https://status.broadcastify.com/listen/stid/32/publicsafety?utm_source=chatgpt.com "Nevada Audio Feeds"
[17]: https://gis.dot.nv.gov/arcgis/rest/services?utm_source=chatgpt.com "Folder: /"
[18]: https://gis.dot.nv.gov/arcgis/rest/services/ArcGISOnline/CrashData_OpenData/FeatureServer?utm_source=chatgpt.com "ArcGISOnline/CrashData_OpenData (FeatureServer)"
[19]: https://gis.dot.nv.gov/arcgis/rest/services/Applications/TRINA/FeatureServer?utm_source=chatgpt.com "Applications/TRINA (FeatureServer)"
[20]: https://gis.dot.nv.gov/trina/?utm_source=chatgpt.com "TRINA"
