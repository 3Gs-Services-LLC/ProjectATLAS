---
state: Missouri
usps: MO
slug: missouri
dossier_number: 25
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
  imported_from: project_atlas_state_data/Missouri.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Missouri (MO) - ATLAS State Record

> Dossier **25 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Missouri is another **exceptionally strong state** for this project.

The biggest discovery is much better than a generic camera webpage: **MoDOT exposes its traffic-camera inventory through a public ArcGIS REST Feature Layer with explicit camera IDs, descriptions, coordinates, image URLs, refresh interval, and stream-error state.**

Missouri also has:

* **150+ MOSWIN radio tower sites**
* **55,000+ radios**
* **1,500+ participating agencies**
* P25 statewide public-safety radio
* extensive public scanner coverage
* statewide ALPR data-sharing requirements
* a Missouri State Highway Patrol ALPR FTP integration
* current 2026 ALPR legislation
* statewide public procurement infrastructure
* current MSHP CAD deployment

---

### 1. Missouri Department of Transportation — MoDOT

Missouri Department of Transportation operates Missouri's statewide traveler-information infrastructure.

The official Traveler Information Map exposes:

* Cameras
* Traffic
* Road conditions
* Incidents
* Work zones
* Flooding
* Planned events
* Winter weather
* Radar
* Message boards
* Commuter lots. ([Traveler][1])

#### Registry

```text
SOURCE_ID:
    MO-MODOT

OWNER:
    Missouri Department of Transportation

TYPE:
    STATE_TRANSPORTATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. MoDOT Traveler Information Map

**Official live system:**

[MoDOT Traveler Information Map](https://traveler.modot.org/map/index.html?utm_source=chatgpt.com)

The current production map identifies cameras as a dedicated layer and was deployed in August 2026. ([Traveler][1])

This is not merely a static information page.

The underlying infrastructure is a public ArcGIS REST environment.

---

### 3. The important discovery: MoDOT public ArcGIS REST

MoDOT's mapping server exposes a public REST directory:

[MoDOT ArcGIS REST Services Directory](https://mapping.modot.org/arcgis/rest/services?utm_source=chatgpt.com)

The TravelerInformation folder currently exposes:

```text
TravelerInformation/
    BypassRoutes
    Memorial
    NWSDATA
    RoadConditions
    SEMA
    TravelerInformationData
    TravelerInformationMod
```

The service supports REST, SOAP, JSON and related interfaces. ([MoDOT Mapping][2])

#### Registry

```text
SOURCE_ID:
    MO-MODOT-ARCGIS

TYPE:
    PUBLIC_GIS_REST

ACCESS:
    PUBLIC

FORMAT:
    REST
    JSON
    GeoJSON
    PBF

STATUS:
    🟢 VERIFIED
```

This is a **high-priority machine-ingestion source**.

---

### 4. Exact camera endpoint

We have now established the actual camera layer:

[MoDOT Cameras Feature Layer](https://mapping.modot.org/arcgis/rest/services/TravelerInformation/NWSDATA/MapServer/0?utm_source=chatgpt.com)

The layer is explicitly named:

```text
Cameras
```

and is a point Feature Layer. ([MoDOT Mapping][3])

#### Exact endpoint

```text
https://mapping.modot.org/arcgis/rest/services/TravelerInformation/NWSDATA/MapServer/0
```

This is the kind of source we want in the national database.

---

### 5. Camera data fields

This is where Missouri becomes particularly valuable.

The public layer exposes these fields:

```text
CAM_ID
DESCRIPTION
X
Y
URL1
URL2
REFR_RATE_MS
STREAM_ERROR
SHAPE
```

([MoDOT Mapping][3])

#### Canonical mapping

```text
CAM_ID
    → source_camera_id

DESCRIPTION
    → camera_name

X/Y
    → source_coordinates

URL1
    → image/video source candidate

URL2
    → secondary image/video source candidate

REFR_RATE_MS
    → refresh interval

STREAM_ERROR
    → stream health indicator

SHAPE
    → geometry
```

This is **real structured camera metadata**.

---

### 6. Camera coordinates

The camera layer uses:

```text
Spatial Reference:
    EPSG:4326

Geometry:
    Point
```

([MoDOT Mapping][3])

That means there is **no coordinate conversion mystery** like some state systems.

The coordinates are already geographic latitude/longitude-compatible data.

---

### 7. Camera IDs

The source has a dedicated:

```text
CAM_ID
```

field.

It is an ArcGIS Object ID field. ([MoDOT Mapping][3])

Therefore each camera can receive a stable source identity:

```text
MO-MODOT:CCTV:<CAM_ID>
```

This is exactly what the ingestion engine should use rather than relying on camera names.

---

### 8. Camera descriptions

The camera layer's display field is:

```text
DESCRIPTION
```

with a maximum string length of 128 characters. ([MoDOT Mapping][3])

That gives us a human-readable camera name/location description.

---

### 9. Camera image/video URLs

The public schema contains:

```text
URL1
URL2
```

Both are exposed as string fields. ([MoDOT Mapping][3])

This is extremely important.

We aren't merely discovering camera locations.

The official public inventory itself contains **source URL fields**.

#### Registry

```text
SOURCE_ID:
    MO-MODOT-CCTV

DATA:
    CAMERA
    LOCATION
    IMAGE/VIDEO URL
    REFRESH RATE
    STREAM ERROR

STATUS:
    🟢 EXCELLENT
```

---

### 10. Camera refresh rate

The layer exposes:

```text
REFR_RATE_MS
```

as an integer. ([MoDOT Mapping][3])

This tells us the source can distinguish cameras by update cadence.

Canonical field:

```text
refresh_interval_ms
```

---

### 11. Stream health

The layer exposes:

```text
STREAM_ERROR
```

as a one-character field. ([MoDOT Mapping][3])

That gives the ingestion system a potential source-side health signal.

```text
camera
 ├── URL1
 ├── URL2
 ├── refresh_rate
 └── stream_error
```

This should be preserved rather than discarded.

---

### 12. Query capabilities

The camera Feature Layer supports:

* advanced queries
* statistics
* ordering
* distinct queries
* pagination
* SQL expressions
* GeoJSON
* PBF
* JSON. ([MoDOT Mapping][3])

It also supports query operations through the ArcGIS REST API. ([MoDOT Mapping][3])

#### This means:

```text
PUBLIC CAMERA DATABASE
        ↓
REST QUERY
        ↓
JSON / GeoJSON / PBF
        ↓
NATIONAL INGESTOR
```

No browser scraping is inherently required for the **inventory**.

---

### 13. Camera record limit

The layer reports:

```text
MaxRecordCount:
    2000
```

([MoDOT Mapping][3])

It also supports pagination. ([MoDOT Mapping][3])

Therefore:

```text
if camera_count > 2000:
    paginate
```

rather than assuming one request contains everything.

---

### 14. MoDOT camera engineering documentation

MoDOT's official CCTV Engineering Policy Guide confirms that cameras are maintained as operational ITS infrastructure.

It specifically states that:

* live video is valuable to MoDOT and the traveling public
* camera outages are tracked
* long-term failed cameras can be removed from the Traveler Information Map
* camera troubleshooting is prioritized during weather events. ([Engineering Policy Guide][4])

#### Registry

```text
SOURCE_ID:
    MO-MODOT-CCTV-POLICY

TYPE:
    CCTV_ENGINEERING_DOCUMENTATION

STATUS:
    🟢
```

---

### 15. MoDOT Transportation Management Centers

MoDOT operates Transportation Management Centers.

The official TMC documentation says traffic information is distributed through:

* web
* telephone
* overhead message signs

and that camera images and other information are shared with regional partners. ([MoDOT][5])

A MoDOT procurement document identifies TMCs in:

* Kansas City
* St. Louis
* Springfield

and describes CCTV cameras providing real-time traffic images. ([MoDOT][6])

---

### 16. Real-time traffic cameras

MoDOT explicitly describes its CCTV cameras as providing **real-time video images of traffic**. ([MoDOT][6])

Gateway Guide likewise allows drivers to view live traffic camera feeds. ([MoDOT][7])

#### Registry

```text
SOURCE_ID:
    MO-MODOT-LIVE-CCTV

TYPE:
    LIVE_TRAFFIC_VIDEO

STATUS:
    🟢 VERIFIED
```

---

### 17. Traffic sensors

MoDOT also operates roadway traffic sensors.

Its official documentation says sensors provide:

* traffic speeds
* traffic volumes
* automated alerts
* statewide traffic information. ([MoDOT][8])

#### Registry

```text
SOURCE_ID:
    MO-MODOT-TRAFFIC-SENSORS

TYPE:
    TRAFFIC_SENSOR

DATA:
    SPEED
    VOLUME
    TRAFFIC_CONDITION

STATUS:
    🟢
```

---

### 18. Traffic information REST service

The `TravelerInformationData` ArcGIS service provides a public structured traffic/event data layer.

It contains:

* incidents
* work zones
* flooding
* winter closures
* planned events

and supports JSON, GeoJSON and PBF queries. ([MoDOT Mapping][9])

#### Registry

```text
SOURCE_ID:
    MO-MODOT-TRAVELER-DATA

TYPE:
    TRAFFIC_EVENT_GIS

STATUS:
    🟢
```

---

### 19. Current traffic-event layers

The official service currently exposes:

```text
Incident Planned Point
Incident Closed Point
Work Zone Closed Point
Winter Closed Point
Incident High Point
Incident Medium Point
Work Zone High Point
Work Zone Medium Point
Work Zone Future Point
```

plus corresponding line layers. ([MoDOT Mapping][9])

This is excellent for correlation with cameras.

---

### 20. Flooding

The Traveler Information services contain flood layers.

The map explicitly exposes flooding as a traffic-impact category. ([Traveler][1])

```text
SOURCE_ID:
    MO-MODOT-FLOOD

TYPE:
    ROAD_FLOODING

STATUS:
    🟢
```

---

### 21. Winter road conditions

MoDOT's map provides winter road-condition classifications:

```text
Closed
Covered
Partly Covered
Mostly Clear
Clear
```

([Traveler][1])

```text
SOURCE_ID:
    MO-MODOT-WINTER-ROAD

TYPE:
    ROAD_CONDITION

STATUS:
    🟢
```

---

### 22. Dynamic Message Signs

MoDOT's Gateway Guide infrastructure includes Dynamic Message Signs.

Official documentation says DMS provide:

* travel times
* incident messages
* construction
* weather
* general safety messages. ([MoDOT][6])

The Traveler Information Map also exposes **Message Boards**. ([Traveler][1])

```text
SOURCE_ID:
    MO-MODOT-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢
```

---

### 23. Project/construction cameras

MoDOT has a separate **Project Cameras** page.

It explicitly states that project cameras are provided by:

* OxBlue
* EarthCam. ([MoDOT][10])

#### Registry

```text
SOURCE_ID:
    MO-MODOT-PROJECT-CAMERAS

TYPE:
    CONSTRUCTION_CAMERA

VENDORS:
    OXBLUE
    EARTHCAM

STATUS:
    🟢
```

These should be stored separately from permanent traffic CCTV.

---

### 24. Kansas City Scout cameras

MoDOT's current project-camera integration documentation says KC Scout traffic cameras can be reformatted and embedded as live streams on MoDOT project webpages. ([MoDOT][11])

MoDOT's live-camera page specifically embeds KC Scout cameras along I-70. ([MoDOT][12])

#### Registry

```text
SOURCE_ID:
    MO-KCSCOUT

TYPE:
    REGIONAL_TRAFFIC_CAMERA

STATUS:
    🟢
```

This needs to be retained as a separate source relationship even though MoDOT integrates the data.

---

### 25. Gateway Guide

Gateway Guide is the St. Louis-area traveler-information system.

MoDOT says Gateway Guide provides:

* traffic conditions
* road closures
* winter weather
* alerts
* live traffic camera feeds
* Dynamic Message Signs. ([MoDOT][7])

```text
SOURCE_ID:
    MO-GATEWAY-GUIDE

REGION:
    ST. LOUIS

TYPE:
    REGIONAL_TRAFFIC_INFORMATION

STATUS:
    🟢
```

---

### 26. MOSWIN

Now the radio system.

**MOSWIN — Missouri Statewide Interoperability Network**

is operated by the Missouri Department of Public Safety's Missouri Interoperability Center.

The current official DPS page states that MOSWIN has:

```text
150+ tower sites
55,000+ radios
1,500+ agencies
```

and operates as a **P25 trunked radio network** using:

* 150 MHz
* 700 MHz
* 800 MHz

public-safety spectrum. ([Missouri Department of Public Safety][13])

#### Registry

```text
SOURCE_ID:
    MO-MOSWIN

OWNER:
    Missouri Department of Public Safety

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25 TRUNKED

SITES:
    150+

RADIOS:
    55,000+

AGENCIES:
    1,500+

STATUS:
    🟢 VERIFIED
```

---

### 27. MOSWIN coverage

Missouri DPS says MOSWIN is designed for approximately **95% mobile coverage** with properly installed mobile equipment. ([Missouri Department of Public Safety][14])

```text
MOBILE_COVERAGE:
    ~95%
```

---

### 28. MOSWIN system scale

The current DPS description is much more useful than the older 2014/2017 numbers.

Older documentation described:

* 84 sites
* later 106 sites
* then 130+ public-safety entities.

But current DPS documentation now says **150+ tower sites** and **1,500+ agencies**. ([Missouri Department of Public Safety][13])

#### Database rule

Use:

```text
150+
```

as the current official system scale.

Do **not** use the historical 84/106/130 figures as current inventory counts.

---

### 29. MOSWIN levels of use

DPS explicitly divides MOSWIN use into:

#### Level 1

Daily internal agency dispatch.

#### Level 2

Interoperability / mutual aid.

The official page says MOSWIN also serves some local agencies as their primary daily dispatch system. ([Missouri Department of Public Safety][15])

This means the system isn't merely an interoperability backup.

---

### 30. MOSWIN participating agencies

The current state description says more than **1,500 agencies** use MOSWIN for internal communications or interoperability. ([Missouri Department of Public Safety][13])

That makes:

```text
MO-MOSWIN
```

one of the highest-value statewide radio sources in the entire 50-state project.

---

### 31. MOSWIN tower inventory

There is a particularly valuable **2026 tower-site document** associated with a Missouri state procurement.

It identifies **234 tower/dispatch/master sites** across Missouri and one Illinois site, including:

* coordinates
* physical addresses
* site type
* operational zone
* region. ([GovTribe][16])

This is third-party-hosted procurement material rather than the preferred official source, so it should be marked accordingly.

#### Registry

```text
SOURCE_ID:
    MO-MOSWIN-SITE-INVENTORY-2026

DATA:
    TOWER SITES
    DISPATCH SITES
    MASTER SITES
    COORDINATES
    ADDRESSES
    ZONES

DOCUMENTED:
    234 Missouri/associated sites

STATUS:
    🟢 PROCUREMENT DOCUMENT
    🟡 SECONDARY HOST
```

This is an **excellent lead for exact infrastructure enumeration**.

---

### 32. MOSWIN tower site example

The 2026 document contains entries such as:

```text
Branson
Cedar Springs
Golden City
Americus
Arcola
Ashland
Boonville
Camdenton
Cassville
Drake
Eagle Ridge
Fair Grove
Freistatt
Granby
Greentop
High Point
Hurley
Jefferson Building
Joplin
Springfield
Columbia
Kingdom City
Mexico
Milan
Nevada
```

with geographic coordinates and addresses. ([GovTribe][16])

This is useful for constructing a physical infrastructure layer.

---

### 33. Public scanner ecosystem

Missouri has a **very large** public scanner footprint.

Current Broadcastify indexing shows:

```text
288 audio feeds
114 counties
```

for Missouri. ([Broadcastify][17])

This is substantially larger than a small handful of county feeds.

#### Registry

```text
SOURCE_ID:
    MO-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

FEEDS:
    288

COUNTIES:
    114

STATUS:
    🟢 ACTIVE
```

---

### 34. Missouri statewide scanner coverage

Broadcastify currently lists public-safety feeds in virtually every region of Missouri.

Examples include:

* Springfield
* Kansas City
* Columbia
* St. Louis
* Missouri State Highway Patrol
* Southeast Missouri
* Randolph County
* Linn County
* St. Charles
* Jefferson County
* Cape Girardeau
* Ray County. ([Broadcastify][18])

---

### 35. MOSWIN live SDR infrastructure

Broadcastify Calls currently shows MOSWIN ingest nodes.

For example:

```text
MOSWIN
    Greene County simulcast 800
```

is currently active. ([Broadcastify][19])

St. Louis also currently has a MOSWIN St. Louis City Simulcast ingest node. ([Broadcastify][20])

#### Registry

```text
SOURCE_ID:
    MO-MOSWIN-BROADCASTIFY-CALLS

TYPE:
    SDR_RADIO_CALLS

NETWORK:
    MOSWIN

STATUS:
    🟢 ACTIVE
```

---

### 36. Eastern Missouri scanner feed

Broadcastify currently maintains an Eastern Missouri public-safety feed covering multiple counties and explicitly states that the feed includes the **digital MOSWIN system**. ([Broadcastify][21])

It includes agencies such as:

* Missouri State Highway Patrol
* Lincoln County Sheriff
* Pike County Sheriff
* fire/EMS
* railroad
* aircraft
* medical helicopters. ([Broadcastify][21])

---

### 37. Missouri State Highway Patrol communications

The MSHP operates a statewide communications network covering its nine troop headquarters.

The 2024 annual report says the network supports:

* the public
* troopers
* communications personnel
* state agencies
* local public-safety agencies. ([Missouri State Highway Patrol][22])

#### Registry

```text
SOURCE_ID:
    MO-MSHP-COMMS

OWNER:
    Missouri State Highway Patrol

TYPE:
    STATE_POLICE_COMMUNICATIONS

STATUS:
    🟢
```

---

### 38. MSHP CAD

This is an important newer discovery.

The MSHP 2024 annual report says the agency purchased a **new CAD system in 2023** and that it **went live at the beginning of 2025**. ([Missouri State Highway Patrol][22])

#### Registry

```text
SOURCE_ID:
    MO-MSHP-CAD

TYPE:
    COMPUTER_AIDED_DISPATCH

STATUS:
    🟢 CURRENT SYSTEM

PUBLIC_API:
    🟡 NOT ESTABLISHED
```

This is a lead for a future exact-source investigation.

---

### 39. ALPR — Missouri is unusually interesting

Missouri's Department of Public Safety has current statewide grant requirements specifically governing **license plate readers**.

The requirements state that agencies purchasing LPR equipment with DPS grant funds must:

1. use vendors with an MOU on file with the MSHP Central Vendor File
2. share LPR data through MoDEx/statewide sharing platforms such as MULES
3. enable sharing with Missouri law-enforcement agencies
4. connect to the MSHP **Automated License Plate Reader FTP Access Program**. ([Missouri Department of Public Safety][23])

This is a major discovery.

---

### 40. Missouri ALPR statewide sharing

The current FY2026 grant documentation explicitly requires:

```text
LPR
 ↓
MoDEx
 ↓
MULES
 ↓
Missouri law enforcement sharing
```

and requires connection to the MSHP ALPR FTP program. ([Missouri Department of Public Safety][23])

#### Registry

```text
SOURCE_ID:
    MO-ALPR-SHARING

OWNER:
    Missouri DPS / MSHP

TYPE:
    STATEWIDE_ALPR_DATA_SHARING

SYSTEMS:
    MoDEx
    MULES
    MSHP ALPR FTP

STATUS:
    🟢 VERIFIED
```

---

### 41. MSHP ALPR FTP Access Program

This deserves its own source entry.

The official DPS documentation says the program provides information necessary to provide an **NCIC and/or MULES hit** when an LPR is used. ([Missouri Department of Public Safety][24])

#### Registry

```text
SOURCE_ID:
    MO-MSHP-ALPR-FTP

TYPE:
    ALPR_DATA_EXCHANGE

ACCESS:
    AUTHORIZED AGENCIES / VENDORS

STATUS:
    🟢 VERIFIED EXISTENCE
    🔴 NOT PUBLIC ACCESS
```

Important distinction:

**The existence of the FTP program does not mean its data endpoint is publicly accessible.**

---

### 42. MoDEx

Missouri DPS documentation explicitly identifies **MoDEx** as part of the statewide LPR sharing process. ([Missouri Department of Public Safety][24])

#### Registry

```text
SOURCE_ID:
    MO-MODEX-ALPR

TYPE:
    LAW_ENFORCEMENT_DATA_EXCHANGE

ALPR:
    🟢

PUBLIC_ACCESS:
    🔴

STATUS:
    🟢 VERIFIED SYSTEM
```

This belongs in the architecture graph, but **not** in the public-ingest queue unless an official public endpoint is discovered.

---

### 43. MULES

The grant documents also identify **MULES** as a statewide sharing platform for LPR data. ([Missouri Department of Public Safety][24])

```text
SOURCE_ID:
    MO-MULES

TYPE:
    LAW_ENFORCEMENT_INFORMATION_SYSTEM

ALPR_INTEGRATION:
    🟢

PUBLIC_ACCESS:
    🔴

STATUS:
    🟢 VERIFIED
```

Again, this is an architecture relationship rather than a public data source.

---

### 44. ALPR policy requirement

Missouri DPS requires agencies receiving relevant grant funds to have an **LPR policy and operating guideline before implementation**. ([Missouri Department of Public Safety][24])

This is valuable for source discovery.

Every funded agency becomes a potential target:

```text
agency
 ↓
grant
 ↓
LPR purchase
 ↓
required policy
 ↓
vendor
 ↓
deployment
```

---

### 45. ALPR on MoDOT right-of-way

The Missouri grant requirements explicitly address ALPR installations on **MoDOT right-of-way**.

Agencies must request installation through DPS and comply with MoDOT installation guidelines. ([Missouri Department of Public Safety][24])

This creates another important relationship:

```text
ALPR
   │
   ├── agency
   │
   ├── DPS
   │
   └── MoDOT ROW
```

---

### 46. Current Missouri ALPR legislation

There is also an active/current legal development.

Missouri Senate Bill 1027, effective **August 28, 2026**, concerns automated license plate reader systems. The bill summary states that it prohibits political subdivisions and state agencies from using ALPR systems or accessing captured plate data on public highways, subject to specified exceptions. ([Missouri Senate][25])

#### Registry

```text
SOURCE_ID:
    MO-ALPR-LEGISLATION-2026

DATE:
    2026-08-28

TYPE:
    ALPR_LEGISLATION

STATUS:
    🟢 CURRENT
```

This is particularly important because **today is August 28, 2026**.

The legal status of Missouri ALPR deployments therefore needs to be treated as a changing constraint, not assumed from older procurement records.

---

### 47. ALPR public data classification

The correct approach is:

```text
ALPR CAMERA LOCATION
    🟡 investigate

ALPR PROCUREMENT
    🟢 public-source candidate

ALPR CONTRACT
    🟢 public-source candidate

ALPR POLICY
    🟢 public-source candidate

ALPR SYSTEM ARCHITECTURE
    🟢 public documentation

INDIVIDUAL PLATE READS
    🔴 not assumed public

NCIC/MULES data
    🔴 restricted

MSHP ALPR FTP
    🔴 authorized access
```

---

### 48. Missouri procurement system

Missouri has **MissouriBUYS**, the statewide eProcurement platform.

The state describes it as a one-stop system for:

* solicitations
* public bid board
* contract board
* purchase orders
* contracts
* catalogs
* receipts. ([MissouriBUYS][26])

#### Registry

```text
SOURCE_ID:
    MO-MISSOURIBUYS

TYPE:
    STATE_PROCUREMENT

STATUS:
    🟢
```

---

### 49. Missouri Bid Locator

MissouriBUYS also has a **Bid Locator Tool** that searches Missouri public-sector procurement opportunities across state and local government websites. ([MissouriBUYS][27])

This is extremely useful for finding local:

```text
ALPR
Flock
CCTV
surveillance
body camera
dash camera
radio
CAD
drone
security camera
```

procurements.

#### Registry

```text
SOURCE_ID:
    MO-BID-LOCATOR

TYPE:
    PUBLIC_PROCUREMENT_SEARCH

SCOPE:
    STATE + LOCAL

STATUS:
    🟢
```

---

### 50. Body-worn cameras

Missouri DPS grant programs also explicitly fund **body-worn cameras** and require agencies to maintain policies concerning:

* equipment use
* data storage
* access
* privacy
* training. ([Missouri Department of Public Safety][28])

#### Registry

```text
SOURCE_ID:
    MO-DPS-BWC

TYPE:
    BODY_WORN_CAMERA

STATUS:
    🟢 PROCUREMENT/GRANT VERIFIED
```

This is not the same thing as a public live body-camera feed.

---

### 51. Dash cameras

Missouri's public-safety procurement/grant environment also covers vehicle video systems.

The MSHP 2024 annual report documents a new video system being installed on marine vessels and communications technology upgrades. ([Missouri State Highway Patrol][22])

#### Registry

```text
SOURCE_ID:
    MO-MSHP-VEHICLE-VIDEO

TYPE:
    MOBILE_PUBLIC_SAFETY_VIDEO

STATUS:
    🟢 DOCUMENTED
```

---

### 52. Aerial/UAS

Missouri DPS grant documentation permits acquisition of **small unmanned aircraft systems (sUAS)** under relevant homeland-security programs. ([Missouri Department of Public Safety][29])

That establishes a procurement path for public-safety aerial video systems.

```text
SOURCE_ID:
    MO-DPS-SUAS

TYPE:
    PUBLIC_SAFETY_UAV

STATUS:
    🟢 PROCUREMENT ELIGIBLE
```

Exact current agency fleet inventory remains a separate research task.

---

### 53. Missouri public-source hierarchy

For MAC EVIL, I would rank Missouri's sources like this:

```text
TIER 0 — OFFICIAL MACHINE DATA
│
├── MO-MODOT-CCTV
├── MO-MODOT-TRAVELER-DATA
└── MO-MODOT-ARCGIS

TIER 1 — OFFICIAL LIVE SYSTEMS
│
├── MoDOT Traveler Map
├── Gateway Guide
└── MOSWIN documentation/infrastructure

TIER 2 — OFFICIAL PROCUREMENT
│
├── MissouriBUYS
├── DPS grants
└── MSHP procurement

TIER 3 — PUBLIC RADIO OBSERVATION
│
├── Broadcastify
└── RadioReference

TIER 4 — AGENCY-SPECIFIC
│
├── ALPR
├── municipal CCTV
├── sheriff CCTV
├── body cameras
└── UAS
```

---

### 54. Highest-value Missouri sources

#### Cameras

| Source              | Exact source              | Value |
| ------------------- | ------------------------- | ----: |
| MoDOT Camera Layer  | `NWSDATA/MapServer/0`     | ⭐⭐⭐⭐⭐ |
| MoDOT Traveler Data | `TravelerInformationData` | ⭐⭐⭐⭐⭐ |
| Gateway Guide       | St. Louis                 |  ⭐⭐⭐⭐ |
| KC Scout            | Kansas City               |  ⭐⭐⭐⭐ |
| Project Cameras     | OxBlue/EarthCam           |   ⭐⭐⭐ |

The **MoDOT ArcGIS camera layer is the standout source**.

---

### 55. Exact MoDOT camera source

This is the source I would hand directly to the ingestion engineer:

```text
OWNER:
    Missouri Department of Transportation

SERVICE:
    TravelerInformation/NWSDATA

LAYER:
    0 — Cameras

TYPE:
    ArcGIS Feature Layer

ENDPOINT:
    https://mapping.modot.org/arcgis/rest/services/TravelerInformation/NWSDATA/MapServer/0

FORMAT:
    JSON
    GeoJSON
    PBF

GEOMETRY:
    Point

SRID:
    4326

FIELDS:
    CAM_ID
    DESCRIPTION
    X
    Y
    URL1
    URL2
    REFR_RATE_MS
    STREAM_ERROR
    SHAPE
```

All of those fields and capabilities are explicitly exposed by the official layer. ([MoDOT Mapping][3])

---

### 56. What we should NOT do

Do **not** infer that:

```text
URL1 = necessarily HLS
URL2 = necessarily HLS
```

until the actual records are retrieved and inspected.

Do not assume:

```text
every camera = live stream
```

because the source includes image URLs and stream-error state.

Do not assume:

```text
all MOSWIN traffic = clear
```

because individual talkgroups/agencies may have different configurations.

Do not treat:

```text
MSHP ALPR FTP
MULES
MoDEx
```

as public-access APIs.

---

### 57. Missouri master source graph

```text
MISSOURI
│
├── 🟢 MODOT
│   │
│   ├── 🟢 Traveler Information Map
│   │
│   ├── 🟢 ArcGIS REST
│   │   │
│   │   ├── 🟢 Cameras
│   │   │   ├── CAM_ID
│   │   │   ├── DESCRIPTION
│   │   │   ├── X
│   │   │   ├── Y
│   │   │   ├── URL1
│   │   │   ├── URL2
│   │   │   ├── REFR_RATE_MS
│   │   │   └── STREAM_ERROR
│   │   │
│   │   ├── 🟢 Incidents
│   │   ├── 🟢 Work Zones
│   │   ├── 🟢 Flooding
│   │   └── 🟢 Winter Conditions
│   │
│   ├── 🟢 Traffic Sensors
│   ├── 🟢 DMS
│   ├── 🟢 Gateway Guide
│   └── 🟢 KC Scout
│
├── 🟢 MOSWIN
│   │
│   ├── 🟢 150+ Towers
│   ├── 🟢 55,000+ Radios
│   ├── 🟢 1,500+ Agencies
│   ├── 🟢 P25
│   └── 🟢 Public SDR Coverage
│
├── 🟢 ALPR
│   │
│   ├── 🟢 DPS Grant Requirements
│   ├── 🟢 MoDEx Sharing
│   ├── 🟢 MULES Sharing
│   ├── 🟢 MSHP ALPR FTP
│   ├── 🟢 Agency Policies
│   └── 🟡 Current Legal Restrictions
│
├── 🟢 PUBLIC RADIO
│   ├── 🟢 Broadcastify
│   └── 🟢 MOSWIN Calls
│
├── 🟢 PROCUREMENT
│   ├── MissouriBUYS
│   └── Bid Locator
│
└── 🟢 PUBLIC SAFETY
    ├── MSHP CAD
    ├── Body Cameras
    ├── Vehicle Video
    └── UAS
```

---

### 58. Missouri assessment

#### **9.8 / 10 — EXTREMELY HIGH VALUE**

| Category                         |                                      Rating |
| -------------------------------- | ------------------------------------------: |
| State traffic cameras            |                            🟢 **Excellent** |
| Exact camera API                 |                            🟢 **Excellent** |
| Camera coordinates               |                                          🟢 |
| Camera URLs                      |                                          🟢 |
| Camera IDs                       |                                          🟢 |
| Camera health                    |                                          🟢 |
| Traffic data                     |                                          🟢 |
| Road conditions                  |                                          🟢 |
| Weather                          |                                          🟢 |
| DMS                              |                                          🟢 |
| Statewide P25                    |                            🟢 **Excellent** |
| Radio infrastructure             |                            🟢 **Excellent** |
| Public scanner coverage          |                            🟢 **Excellent** |
| ALPR architecture                |                            🟢 **Excellent** |
| ALPR data-sharing infrastructure |                                          🟢 |
| Current ALPR legal status        |                             🟡 **Changing** |
| Public individual ALPR records   |                                          🔴 |
| State CAD                        | 🟡 **System exists; public API unresolved** |
| Procurement discovery            |                            🟢 **Excellent** |

##### The single most important finding

Missouri is one of the first states where we've established an **official, public, machine-readable camera inventory with direct camera URLs and coordinates**:

```text
MoDOT
  ↓
ArcGIS REST
  ↓
NWSDATA
  ↓
Cameras / Layer 0
  ↓
CAM_ID
DESCRIPTION
X
Y
URL1
URL2
REFR_RATE_MS
STREAM_ERROR
```

That is **exact source data**, not a guessed endpoint or a page-scraping hypothesis. ([MoDOT Mapping][3])

##### Second major finding

Missouri's ALPR ecosystem is also structurally significant: state grant rules require participating agencies to share LPR data through **MoDEx/MULES** and connect to the **MSHP ALPR FTP Access Program**. ([Missouri Department of Public Safety][24])

##### Third major finding

MOSWIN is enormous: **150+ sites, 55,000+ radios, and 1,500+ agencies**, with public scanner/SDR coverage currently operating across Missouri. ([Missouri Department of Public Safety][13])

---

**Missouri is complete for the primary statewide-source pass.**

**Next alphabetically: Montana.**

[1]: https://traveler.modot.org/map/index.html?utm_source=chatgpt.com "Traveler Information Map"
[2]: https://mapping.modot.org/arcgis/rest/services/TravelerInformation "Folder: TravelerInformation"
[3]: https://mapping.modot.org/arcgis/rest/services/TravelerInformation/NWSDATA/MapServer/0 "Layer: Cameras (ID: 0)"
[4]: https://epg.modot.org/index.php/910.6_Closed_Circuit_Television_%28CCTV%29_Systems?utm_source=chatgpt.com "910.6 Closed Circuit Television (CCTV) Systems - Engineering Policy Guide"
[5]: https://www.modot.org/transportation-management-center?utm_source=chatgpt.com "Transportation Management Center | Missouri Department of Transportation"
[6]: https://www.modot.org/sites/default/files/documents/general_services/central_office_bidding/rfp6-130403lk-511travelerinformationservices.pdf?utm_source=chatgpt.com "105 West Capitol Avenue"
[7]: https://www.modot.org/gateway-guide-website?utm_source=chatgpt.com "Gateway Guide website | Missouri Department of Transportation"
[8]: https://www.modot.org/traffic-sensors?utm_source=chatgpt.com "Traffic sensors | Missouri Department of Transportation"
[9]: https://mapping.modot.org/arcgis/rest/services/TravelerInformation/TravelerInformationData/MapServer "TravelerInformation/TravelerInformationData (MapServer)"
[10]: https://www.modot.org/project-cameras?utm_source=chatgpt.com "Project Cameras | Missouri Department of Transportation"
[11]: https://www.modot.org/traffic-cam-webpage-integration?utm_source=chatgpt.com "Traffic Cam Webpage Integration | Missouri Department of Transportation"
[12]: https://www.modot.org/improvei70kc/live-cameras?utm_source=chatgpt.com "Live Cameras | Missouri Department of Transportation"
[13]: https://dps.mo.gov/dir/programs/intercomm/index.php?utm_source=chatgpt.com "Missouri Department of Public Safety - Interoperable Communications"
[14]: https://dps.mo.gov/dir/programs/dpsgrants/documents/lvcp/2025-lvcp-nofo.pdf?utm_source=chatgpt.com "2025 Department of Public Safety"
[15]: https://dps.mo.gov/dir/programs/intercomm/moswin-levels-of-use.php?utm_source=chatgpt.com "MOSWIN Levels of Use - Missouri Department of Public Safety - Interoperable Communications"
[16]: https://govtribe.com/file/government-file/attachment-1-moswin-radio-tower-site-locations-dot-xlsx?utm_source=chatgpt.com "Attachment 1 MOSWIN Radio Tower Site Locations.xlsx"
[17]: https://status.broadcastify.com/listen/stid/29?utm_source=chatgpt.com "Missouri Audio Feeds"
[18]: https://status.broadcastify.com/listen/stid/29/publicsafety?utm_source=chatgpt.com "Missouri Audio Feeds"
[19]: https://status.broadcastify.com/listen/ctid/1517/publicsafety?utm_source=chatgpt.com "Greene County, Missouri Audio Feeds"
[20]: https://status.broadcastify.com/listen/ctid/1573?utm_source=chatgpt.com "St. Louis County, Missouri Audio Feeds"
[21]: https://status.broadcastify.com/listen/feed/2120?utm_source=chatgpt.com "Eastern Missouri Public Safety"
[22]: https://apps.mshp.dps.mo.gov/MSHPWeb/Publications/OtherPublications/documents/2024AnnualReport.pdf?utm_source=chatgpt.com "ANNUAL
2024 REPORT"
[23]: https://dps.mo.gov/dir/programs/dpsgrants/documents/mbsgp/fy-2026-certified-assurances.pdf?utm_source=chatgpt.com "MISSOURI DEPARTMENT OF PUBLIC SAFETY"
[24]: https://dps.mo.gov/dir/programs/dpsgrants/documents/shsp/fy-2024-shsp-nofo.pdf?utm_source=chatgpt.com "FY 2024 SHSP Regionalization Notice of Funding Opportunity"
[25]: https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=485&year=2026&utm_source=chatgpt.com "SB 1027 - Bill Information - Missouri Senate"
[26]: https://missouribuys.mo.gov/?utm_source=chatgpt.com "Home | MissouriBUYS Statewide eProcurement System"
[27]: https://missouribuys.mo.gov/business-opportunities?utm_source=chatgpt.com "Explore Missouri Government Bid Opportunities Using Bid Locator Tool | MissouriBUYS Statewide eProcurement System"
[28]: https://dps.mo.gov/dir/programs/dpsgrants/documents/lvcp/2026-lvcp-nofo.pdf?utm_source=chatgpt.com "• Body-Worn Cameras"
[29]: https://dps.mo.gov/dir/programs/ohs/grantstraining/documents/fy-2025-shsp-regionalization-notice-of-funding-opportunity.pdf?utm_source=chatgpt.com "• License Plate Readers"
