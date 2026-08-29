---
state: Kansas
usps: KS
slug: kansas
dossier_number: 16
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
  imported_from: project_atlas_state_data/Kansas.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Kansas (KS) - ATLAS State Record

> Dossier **16 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Kansas is another **high-value state**, but its data landscape differs from Iowa.

The strongest Kansas sources I found are:

1. **KDOT/KanDrive highway cameras**
2. **KDOT ArcGIS infrastructure**
3. **KDOT truck-parking sensor/camera feeds**
4. **Kansas ALPR deployments — Flock plus substantial Genetec/other systems**
5. **Kansas public-safety scanner ecosystem**
6. **Kansas statutory/public-record infrastructure for ALPR**

There is an especially important finding: **Kansas has a much larger ALPR ecosystem than simply Flock.** Current public mapping identifies approximately **1,935 documented ALPR locations**, including Flock, Genetec, Leonardo/ELSAG, Motorola, Axis, Axon, Rekor and others. That is a discovery lead, not a claim that 1,935 is the official statewide count. ([Flock Camera][1])

---

### 1. Kansas Department of Transportation

**Agency:** Kansas Department of Transportation
**System:** KanDrive / Kansas 511

Kansas Department of Transportation

The official KDOT KanDrive page confirms that the system provides:

* real-time road conditions
* construction/detours
* travel weather
* highway cameras
* Dynamic Message Signs
* 511 access

and explicitly states that highway cameras provide live footage across Kansas. ([Kansas Department of Transportation][2])

#### Registry

```text
SOURCE_ID:
    KS-KDOT-KANDRIVE

AGENCY:
    Kansas Department of Transportation

SYSTEM:
    KanDrive / Kansas 511

TYPE:
    STATEWIDE_TRAVEL_INFORMATION

STATUS:
    🟢 OFFICIAL / ACTIVE
```

---

### 2. Kansas highway cameras

The official KanDrive system explicitly provides:

```text
HIGHWAY CAMERAS
    ↓
LIVE FOOTAGE
```

across the state. ([Kansas Department of Transportation][2])

KDOT's ITS documentation also confirms that its statewide transportation-management system operates:

* CCTV
* DMS
* other roadside equipment

and provides **CCTV snapshots to the public via data feeds to KanDrive**. ([Kansas Department of Transportation][3])

#### Registry

```text
SOURCE_ID:
    KS-KDOT-CCTV

TYPE:
    TRAFFIC_CAMERA

OWNER:
    Kansas Department of Transportation

DISTRIBUTION:
    KanDrive / 511

DATA:
    camera locations
    snapshots
    live video

STATUS:
    🟢 OFFICIAL
```

---

### 3. Important distinction from Iowa

I did **not** find an Iowa-style public KDOT page that cleanly exposes a documented:

```text
cctv.xml
CCTV.xsd
```

feed in the current search results.

Therefore we should **not invent an exact endpoint**.

For Kansas, the current evidence establishes the camera system and public distribution, but the underlying machine-readable camera endpoint still needs endpoint-level discovery.

That means the registry should initially say:

```text
ENDPOINT:
    DISCOVERY_REQUIRED

NOT:
    UNKNOWN SYSTEM
```

The system definitely exists; we simply have not yet established the exact current feed URL from official documentation.

---

### 4. KDOT statewide virtual TMC

KDOT documentation describes the statewide Virtual Traffic Management Center.

It states that the central ATMS manages:

```text
CCTV
DMS
other roadside equipment
```

and supplies public CCTV snapshots through KanDrive. ([Kansas Department of Transportation][3])

#### Registry

```text
SOURCE_ID:
    KS-KDOT-VIRTUAL-TMC

TYPE:
    TRANSPORTATION_OPERATIONS_SYSTEM

FUNCTIONS:
    CCTV
    DMS
    traffic management
    public traveler information
```

This is useful as a **parent source**, rather than a camera dataset itself.

---

### 5. KDOT ArcGIS REST infrastructure

This is one of Kansas's strongest discoveries.

KDOT operates an official ArcGIS REST infrastructure at:

```text
kanplan.ksdot.gov
```

The REST directory exposes multiple service categories including:

```text
Accident
APPS
Bike
Boundaries
Crashes
Facilities
Hosted
Land
Layers
MQA
Research
Structures
Transportation
Utilities
```

and supports REST/SOAP interfaces. ([Kanplan][4])

#### Registry

```text
SOURCE_ID:
    KS-KDOT-ARCGIS

TYPE:
    GIS_DATA_CATALOG

PROTOCOL:
    ArcGIS REST

OWNER:
    Kansas Department of Transportation

STATUS:
    🟢 OFFICIAL
```

---

### 6. KDOT ArcGIS supports machine-readable queries

Individual KDOT services support:

```text
JSON
GeoJSON
PBF
```

and standardized ArcGIS queries. ([Kanplan][5])

This is highly valuable for the ingestion engine.

The architecture should therefore support:

```text
KDOT ArcGIS
    ↓
Service discovery
    ↓
Layer discovery
    ↓
Field discovery
    ↓
Query
    ↓
Canonical objects
```

rather than scraping map pages.

---

### 7. KDOT KGATE

KDOT also operates KGATE.

[KDOT KGATE](https://kdotxtra.ksdot.gov/kgate/index.aspx?utm_source=chatgpt.com)

KDOT describes KGATE as a system that graphically displays data collected and maintained by different KDOT work units, including multiple transportation data types. 

It specifically references:

* speed limits
* surface type
* video log
* shoulder width
* aerial photography
* linear data
* point data

#### Registry

```text
SOURCE_ID:
    KS-KDOT-KGATE

TYPE:
    TRANSPORTATION_DATA_VIEWER

STATUS:
    🟢 OFFICIAL
```

It is primarily a **discovery surface**, rather than automatically assuming every KGATE layer is publicly downloadable.

---

### 8. KDOT truck-parking system

Kansas also has a separate Truck Parking Information Management System:

**TPIMS**

[KDOT TPIMS](https://tpims.ksdot.gov/?utm_source=chatgpt.com)

KDOT's documentation says the system uses:

* CCTV cameras
* detectors
* roadside DMS
* central software

to determine truck-parking availability. ([Kansas Department of Transportation][3])

#### Registry

```text
SOURCE_ID:
    KS-KDOT-TPIMS

TYPE:
    TRUCK_PARKING

DEVICES:
    CCTV
    vehicle detectors
    DMS

STATUS:
    🟢 ACTIVE
```

---

### 9. TPIMS data feeds

The TPIMS system has an explicit **data-feed registration mechanism**.

The registration page asks for:

```text
Application URL
URL that will consume the feeds
Proposed Use
```

which establishes that external consumers can be registered to receive feeds. ([TPIMS][6])

KDOT also publishes a support contact specifically for TPIMS data feeds. ([TPIMS][7])

#### Important classification

This is:

```text
PUBLIC DATA FEED PROGRAM
```

but **not necessarily an anonymously downloadable API**.

Therefore:

```text
ACCESS:
    🟡 Registration / endpoint discovery required
```

Do not represent it as open/no-auth until verified.

---

### 10. KDOT WZDx

Kansas is actively implementing WZDx.

KDOT's current planning documentation says the state is developing a WZDx implementation and an API capable of providing work-zone data in WZDx format. ([Kansas Department of Transportation][8])

#### Current classification

```text
SOURCE_ID:
    KS-KDOT-WZDX

TYPE:
    WORK_ZONE

STANDARD:
    WZDx

STATUS:
    🟡 IMPLEMENTATION / PILOT
```

This is important because we should **not falsely classify Kansas as having a fully public statewide WZDx endpoint today** based solely on the implementation documentation.

---

### 11. Kansas DMS

KanDrive explicitly exposes Dynamic Message Sign information. ([Kansas Department of Transportation][2])

KDOT's ITS architecture separately documents DMS as part of the statewide transportation-management infrastructure. ([Kansas Department of Transportation][3])

#### Registry

```text
SOURCE_ID:
    KS-KDOT-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢 OFFICIAL
```

Exact machine-readable endpoint:

```text
DISCOVERY_REQUIRED
```

---

### 12. Kansas ALPR — major finding

Kansas is **not simply a Flock state**.

A current public mapping dataset identifies:

```text
1,935 documented ALPR locations
125 Kansas cities/towns
```

and reports the following manufacturers among the mapped cameras:

| Manufacturer          | Documented cameras |
| --------------------- | -----------------: |
| Flock Safety          |              1,251 |
| Genetec               |                403 |
| Leonardo/ELSAG        |                155 |
| Motorola Solutions    |                 41 |
| Axis                  |                 14 |
| Axon                  |                  5 |
| LiveView Technologies |                  3 |
| Rekor                 |                  2 |

These are **documented/mapped counts**, not official statewide totals. ([Flock Camera][1])

This is a very important source-discovery result.

---

### 13. Kansas ALPR vendor registry

The national engine should therefore create Kansas vendor records for:

```text
Flock Safety
Genetec
Leonardo / ELSAG
Motorola Solutions
Axis
Axon
LiveView Technologies
Rekor
```

but only attach a vendor to a specific agency/camera when there is evidence.

```text
Do not:
    assume every mapped ALPR is Flock.

Do:
    preserve vendor uncertainty.
```

---

### 14. Wichita

Wichita appears to have one of the state's largest documented Flock deployments.

A Kansas privacy organization currently reports:

```text
191 Flock Safety ALPR cameras
```

operated by Wichita Police Department. ([Privacy Kansas][9])

#### Registry

```text
SOURCE_ID:
    KS-WICHITA-FLOCK

AGENCY:
    Wichita Police Department

VENDOR:
    Flock Safety

TYPE:
    ALPR

DOCUMENTED_COUNT:
    191

STATUS:
    🟢 DEPLOYMENT REPORTED

COUNT_CONFIDENCE:
    🟡 SECONDARY SOURCE
```

I would **not yet promote 191 to "official verified count"** without the underlying contract/purchase record.

---

### 15. Kansas City, Kansas

Kansas City, Kansas has documented ALPR activity.

Current public-record research identifies:

```text
Kansas City Police Department
University of Kansas Medical Center Police Department
```

as agencies associated with ALPR deployments. ([Are You Flocked?][10])

The University of Kansas Medical Center Police Department is documented as operating:

```text
11 Flock Safety ALPRs
```

as of September 2025. ([Are You Flocked?][10])

#### Registry

```text
KS-KCK-KUMC-FLOCK
```

```text
AGENCY:
    University of Kansas Medical Center Police Department

VENDOR:
    Flock Safety

CAMERAS:
    11

LAST VERIFIED:
    2025-09
```

Kansas City itself also has extensive mapped ALPR infrastructure, including Genetec and Flock equipment. Current mapping identifies **172 ALPRs** within the municipal boundary, but again this is volunteer/OpenStreetMap-derived rather than an official city inventory. ([Finding Flock][11])

---

### 16. Lenexa

Lenexa is a confirmed Kansas Flock deployment and is particularly important because its deployment has been the subject of recent public controversy.

Current reporting identifies Lenexa Police as using Flock ALPR technology. ([Axios][12])

#### Registry

```text
SOURCE_ID:
    KS-LENEXA-FLOCK

TYPE:
    ALPR

VENDOR:
    Flock Safety

STATUS:
    🟢 CONFIRMED
```

Exact current camera count:

```text
NOT YET VERIFIED
```

---

### 17. Johnson County Sheriff's Office

This is an important **non-Flock** lead.

Public records document Johnson County Sheriff's Office approval to install:

```text
55 automated license plate readers
```

and identify the vendor as:

```text
Electronic Technology Inc. (ETI)
```

rather than Flock. ([Are You Flocked?][13])

#### Registry

```text
SOURCE_ID:
    KS-JOCO-SHERIFF-ALPR

AGENCY:
    Johnson County Sheriff's Office

VENDOR:
    Electronic Technology Inc.

TYPE:
    ALPR

DOCUMENTED_COUNT:
    55

STATUS:
    🟢 DOCUMENTED
```

This is exactly the kind of source that would be missed by a Flock-only search.

---

### 18. Prairie Village

Prairie Village Police Department publishes an unusually detailed **official ALPR policy page**.

The department explicitly states that it:

* does **not** use Flock
* uses **Genetec**
* uses **Axis camera hardware**
* has **30 stationary ALPR locations**
* retains data for 90 days
* uses local storage
* performs audits
* does not share ALPR data with commercial entities or the public. ([Prairie Village][14])

#### Registry

```text
SOURCE_ID:
    KS-PRAIRIE-VILLAGE-ALPR

AGENCY:
    Prairie Village Police Department

SOFTWARE:
    Genetec

HARDWARE:
    Axis

STATIONARY_LOCATIONS:
    30

RETENTION:
    90 days

STORAGE:
    Local PVPD servers

VENDOR:
    NOT FLOCK

STATUS:
    🟢 OFFICIAL
```

This is one of the **best ALPR source records discovered in Kansas**.

---

### 19. Mission Hills

The same official Prairie Village source says Prairie Village Police provides police services for Mission Hills and that Mission Hills has:

```text
25 stationary ALPR locations
```

at intersections throughout the city. ([Prairie Village][14])

#### Registry

```text
SOURCE_ID:
    KS-MISSION-HILLS-ALPR

AGENCY:
    Mission Hills

STATIONARY_LOCATIONS:
    25

SYSTEM:
    Genetec / Axis ecosystem

STATUS:
    🟢 OFFICIAL
```

---

### 20. Kansas ALPR source hierarchy

Kansas now has a very useful hierarchy:

```text
OFFICIAL AGENCY SOURCES
        ↓
contracts / policies / city records
        ↓
vendor transparency portals
        ↓
OpenStreetMap / volunteer camera mapping
        ↓
secondary reporting
```

The national database should preserve **which layer produced every camera record**.

---

### 21. Kansas ALPR legal definition

Kansas law explicitly defines:

> automated license plate recognition system

as high-speed cameras combined with algorithms that convert license-plate images into computer-readable data. ([Kansas Legislature][15])

Kansas law also defines captured license-plate data as including:

```text
GPS coordinates
date
time
photograph
license plate number
other derived data
```

([Kansas Legislature][15])

That is useful when building the canonical ALPR schema.

---

### 22. Kansas captured ALPR data

The legal definition gives us a very good canonical observation model:

```text
ALPR_OBSERVATION
{
    coordinates,
    timestamp,
    image,
    plate_number,
    derived_vehicle_data
}
```

But **the existence of these fields in the statute does not mean the public can obtain them**.

Current evidence does not establish a statewide public live ALPR observation API.

---

### 23. Public Kansas Flock audit data

There is a separate public-data ecosystem around Flock audit logs.

Have I Been Flocked reports that its database aggregates public Flock audit logs obtained through public-records requests and transparency portals. It currently contains hundreds of millions of search records, but explicitly warns that the dataset is incomplete. ([Have I Been Flocked?][16])

#### Registry

```text
SOURCE_ID:
    US-FLOCK-PUBLIC-AUDIT-AGGREGATOR

TYPE:
    ALPR_AUDIT_DATA

SCOPE:
    nationwide

KANSAS:
    query/filter dependent

STATUS:
    🟡 SECONDARY / INCOMPLETE
```

This should **never be treated as an authoritative camera inventory**.

---

### 24. Kansas public scanner ecosystem

Kansas has a substantial public scanner ecosystem.

A current scanner directory identifies approximately:

```text
184 Kansas scanner broadcasts
```

with county and agency listings. ([Radio Station Net][17])

Examples include:

```text
Allen County / Iola
Anderson County
Atchison Sheriff / Police P25
Atchison EMS
Barber County
Barton County
Butler County
...
```

#### Registry

```text
SOURCE_ID:
    KS-PUBLIC-SCANNERS

TYPE:
    INTERNET_SCANNER_DIRECTORY

STATUS:
    🟢 PUBLIC
```

The actual individual feeds should be ingested as separate sources.

---

### 25. Scanner feed architecture

For the project:

```text
Kansas
│
└── Public Scanner Sources
    │
    ├── county feeds
    ├── municipal police
    ├── sheriff
    ├── fire
    ├── EMS
    ├── P25 systems
    └── weather / other
```

Do **not** treat the 184 figure as the number of radio systems.

It is the number of public Internet broadcasts identified by that directory.

---

### 26. Kansas P25 systems

Kansas has extensive P25 public-safety radio infrastructure, but unlike Iowa's ISICS, there is not one obvious single official statewide public source from the current search pass that should be declared **the** statewide radio system.

Therefore:

```text
STATEWIDE_SINGLE-P25:
    🟡 NOT ESTABLISHED

LOCAL/REGIONAL P25:
    🟢 EXTENSIVE
```

Individual radio systems need to be discovered separately.

---

### 27. Kansas Highway Patrol

KHP is a major target for the radio source layer.

KDOT's ITS documentation explicitly identifies the Kansas Highway Patrol as a stakeholder in statewide transportation-management infrastructure. ([Kansas Department of Transportation][3])

For the registry:

```text
SOURCE_ID:
    KS-KHP-RADIO

AGENCY:
    Kansas Highway Patrol

TYPE:
    PUBLIC_SAFETY_RADIO

STATUS:
    🟡 SYSTEM/FEED DISCOVERY REQUIRED
```

We should not invent frequencies or talkgroups until verified from authoritative/current sources.

---

### 28. Kansas police camera systems beyond ALPR

The Kansas ALPR inventory demonstrates an important distinction:

```text
TRAFFIC CCTV
    KDOT

ALPR
    municipal / county / university police

SECURITY CAMERA
    private / commercial

BODY/VEHICLE CAMERA
    law enforcement
```

These must remain separate source categories.

---

### 29. Kansas private ALPR

The statewide mapping evidence identifies ALPRs operated by entities such as:

```text
Lowe's
Home Depot
Walmart
```

alongside police departments. ([Flock Camera][1])

That means the project should support:

```text
OPERATOR_TYPE:
    LAW_ENFORCEMENT
    GOVERNMENT
    UNIVERSITY
    PRIVATE_BUSINESS
    UNKNOWN
```

rather than assuming every ALPR is government-owned.

---

### 30. Kansas ALPR numbers — what we can safely say

#### Documented/mapped

```text
~1,935 ALPR locations
```

#### Flock-tagged

```text
~1,251
```

#### Genetec

```text
~403
```

#### Leonardo/ELSAG

```text
~155
```

These numbers come from a current public mapping database and should be stored as:

```text
SOURCE_TYPE:
    COMMUNITY_MAPPING

CONFIDENCE:
    MEDIUM

LAST_VERIFIED:
    2026-08
```

not as official statewide counts. ([Flock Camera][1])

---

### 31. Kansas camera-source architecture

```text
KANSAS
│
├── KDOT
│   ├── KanDrive
│   ├── CCTV
│   ├── DMS
│   ├── TPIMS
│   ├── ArcGIS REST
│   └── WZDx development
│
├── LAW ENFORCEMENT
│   ├── Flock
│   ├── Genetec
│   ├── ETI
│   ├── ELSAG
│   ├── Motorola
│   └── other ALPR vendors
│
├── PRIVATE
│   ├── retail ALPR
│   └── commercial surveillance
│
└── RADIO
    ├── P25 systems
    ├── county systems
    ├── municipal systems
    └── Internet scanner feeds
```

---

### 32. Exact Kansas source registry

| Source ID                 | Owner              | Data                | Type            | Status |
| ------------------------- | ------------------ | ------------------- | --------------- | ------ |
| `KS-KDOT-KANDRIVE`        | KDOT               | 511/travel info     | Transportation  | 🟢     |
| `KS-KDOT-CCTV`            | KDOT               | Highway cameras     | **Camera**      | 🟢     |
| `KS-KDOT-VIRTUAL-TMC`     | KDOT               | CCTV/DMS/TMC        | Infrastructure  | 🟢     |
| `KS-KDOT-ARCGIS`          | KDOT               | GIS services        | Data catalog    | 🟢     |
| `KS-KDOT-KGATE`           | KDOT               | Transportation GIS  | Data discovery  | 🟢     |
| `KS-KDOT-TPIMS`           | KDOT               | Truck parking/CCTV  | Camera/sensor   | 🟢     |
| `KS-KDOT-WZDX`            | KDOT               | Work zones          | WZDx            | 🟡     |
| `KS-KDOT-DMS`             | KDOT               | Message signs       | Device          | 🟢     |
| `KS-WICHITA-FLOCK`        | Wichita PD         | ALPR                | **ALPR**        | 🟢     |
| `KS-KCK-KUMC-FLOCK`       | KUMC PD            | Flock               | **ALPR**        | 🟢     |
| `KS-LENEXA-FLOCK`         | Lenexa PD          | Flock               | **ALPR**        | 🟢     |
| `KS-JOCO-SHERIFF-ALPR`    | Johnson County SO  | ETI                 | **ALPR**        | 🟢     |
| `KS-PRAIRIE-VILLAGE-ALPR` | Prairie Village PD | Genetec/Axis        | **ALPR**        | 🟢     |
| `KS-MISSION-HILLS-ALPR`   | Mission Hills      | Genetec/Axis        | **ALPR**        | 🟢     |
| `KS-PUBLIC-SCANNERS`      | Third party        | Scanner feeds       | **Radio audio** | 🟢     |
| `KS-KHP-RADIO`            | KHP                | Public safety radio | Radio           | 🟡     |

---

### 33. Highest-value Kansas discoveries

#### 🥇 KDOT ArcGIS

**9.5/10**

Official machine-readable REST infrastructure with JSON/GeoJSON/PBF support. ([Kanplan][5])

---

#### 🥇 KDOT CCTV

**9/10**

Official statewide highway-camera infrastructure with public live footage and public snapshots. ([Kansas Department of Transportation][2])

The remaining task is discovering the **exact current machine endpoint**.

---

#### 🥇 Prairie Village ALPR

**10/10**

This is an exceptionally good official ALPR record:

```text
30 locations
Genetec
Axis
90-day retention
local storage
audit process
sharing policy
```

([Prairie Village][14])

---

#### 🥇 Kansas ALPR ecosystem

**10/10**

Kansas has a large multi-vendor ecosystem rather than a single vendor. ([Flock Camera][1])

---

#### 🥇 Public scanner ecosystem

**8.5/10**

Approximately 184 public broadcasts identified in the current directory. ([Radio Station Net][17])

---

### 34. What Kansas does NOT yet give us

```text
🔴 Verified statewide public ALPR live-read API
🔴 Verified statewide ALPR camera inventory from a state agency
🔴 Verified single statewide public P25 audio feed
🔴 Verified statewide police CAD API
🔴 Verified public raw Flock plate-read API
```

But:

```text
🟢 KDOT highway cameras
🟢 KDOT ArcGIS
🟢 KDOT CCTV snapshots
🟢 TPIMS camera/sensor infrastructure
🟢 extensive ALPR deployment evidence
🟢 official municipal ALPR policies
🟢 public scanner ecosystem
```

---

### 35. Kansas final classification

| Category                      | Kansas                          |
| ----------------------------- | ------------------------------- |
| Statewide 511                 | 🟢                              |
| Highway CCTV                  | 🟢                              |
| Public live camera viewing    | 🟢                              |
| Public CCTV snapshots         | 🟢                              |
| Exact machine CCTV endpoint   | 🟡 **needs endpoint discovery** |
| KDOT ArcGIS                   | 🟢                              |
| DMS                           | 🟢                              |
| Truck-parking CCTV            | 🟢                              |
| TPIMS feeds                   | 🟡 registration/discovery       |
| WZDx                          | 🟡 implementation               |
| ALPR                          | 🟢 **extensive**                |
| Flock                         | 🟢                              |
| Genetec                       | 🟢                              |
| ELSAG                         | 🟢                              |
| ETI                           | 🟢                              |
| Public ALPR reads             | 🔴                              |
| Public ALPR policies          | 🟢                              |
| Scanner feeds                 | 🟢                              |
| Statewide public radio system | 🟡                              |
| Public CAD                    | 🟡 local                        |
| Statewide public CAD          | 🔴                              |

#### Kansas rating: **9/10 — VERY HIGH PRIORITY**

The biggest thing I would carry forward into the national database is **not to build the ALPR layer as "Flock cameras."** Kansas demonstrates why the canonical model needs to represent **camera → operator → agency → vendor → technology → evidence source** independently. Current Kansas evidence shows Flock, Genetec, ETI, ELSAG and several other technologies operating in the same state. ([Flock Camera][1])

**Next alphabetically: Kentucky.**

[1]: https://flockcamera.app/locations/kansas/?utm_source=chatgpt.com "Flock Cameras in Kansas — 1,935 ALPR Locations Mapped"
[2]: https://www.ksdot.gov/travel/travel-conditions/kandrive?utm_source=chatgpt.com "KanDrive | Kansas Department Of Transportation"
[3]: https://www.ksdot.gov/home/showpublisheddocument/844/638943296953600000?utm_source=chatgpt.com "1"
[4]: https://kanplan.ksdot.gov/arcgis_web_adaptor/rest/services?utm_source=chatgpt.com "Folder: /"
[5]: https://kanplan.ksdot.gov/arcgis_web_adaptor/rest/services/Transportation/Maintenance_Responsibility/MapServer/0?utm_source=chatgpt.com "Layer: Maintenance Responsibility (ID: 0)"
[6]: https://tpims.ksdot.gov/account/register?utm_source=chatgpt.com "KDOT TPIMS :: Register"
[7]: https://tpims.ksdot.gov/home/contact?utm_source=chatgpt.com "KDOT TPIMS :: Contact"
[8]: https://www.ksdot.gov/home/showpublisheddocument/13348/638874784017000000?utm_source=chatgpt.com "PREPARED BY"
[9]: https://privacyks.org/?utm_source=chatgpt.com "Sunflower Privacy Alliance — Kansas"
[10]: https://areyouflocked.com/kansas/kansas-city?utm_source=chatgpt.com "Does Kansas City, Kansas Have Flock Cameras? Locations, Map & Records"
[11]: https://www.findingflock.com/cameras/kansas/kansas-city?utm_source=chatgpt.com "172 Flock & ALPR Cameras in Kansas City, KS"
[12]: https://www.axios.com/local/kansas-city/2026/08/25/flock-license-plate-cameras-kansas-city-backlash?utm_source=chatgpt.com "Flock cameras cut down as KC metro pushback grows"
[13]: https://areyouflocked.com/kansas/olathe?utm_source=chatgpt.com "Does Olathe, Kansas Have Flock Cameras? Locations, Map & Records"
[14]: https://www.prairievillageks.gov/623/Automated-License-Plate-Readers-ALPRs?utm_source=chatgpt.com "Automated License Plate Readers (ALPRs) | Prairie Village, KS"
[15]: https://www.kslegislature.gov/b2025_26/laws/045_000_0000_chapter/045_002_0000_article/045_002_0017_section/045_002_0017_k/?utm_source=chatgpt.com "Kansas Statutes"
[16]: https://haveibeenflocked.com/?utm_source=chatgpt.com "Have I Been Flocked? – Search Flock ALPR Audit Logs"
[17]: https://radiostationnet.com/scanner/kansas/?utm_source=chatgpt.com "State of Kansas Live SCANNER Feeds"
