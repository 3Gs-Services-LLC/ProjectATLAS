---
state: Montana
usps: MT
slug: montana
dossier_number: 26
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
  imported_from: project_atlas_state_data/Montana.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Montana (MT) - ATLAS State Record

> Dossier **26 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Montana is a **good transportation-camera state and a very strong radio-infrastructure state**, but it is substantially different from Missouri.

The important distinction is that Montana's public camera data is exposed through MDT's traveler-information infrastructure, including an explicitly documented **RWIS XML feed containing air/camera/surface data**. MDT also publishes a camera-location inventory and an interactive camera map. ([Montana Department of Transportation][1])

Montana also has a legislatively defined **Statewide Public Safety Communications System**, with a statewide trunked land-mobile radio component. Current evidence identifies the Montana system as P25 and provides substantial infrastructure information. 

ALPR is a completely different situation: Montana has unusually restrictive statutory rules, so we need to distinguish **publicly documented ALPR deployments** from data that can legally/publicly be collected. ([NCSL][2])

---

### 1. Montana Department of Transportation — MDT

The primary transportation source is:

**Montana Department of Transportation — Traveler Information**

MDT's current traveler-information system provides:

* road conditions
* incidents
* road work
* restrictions
* cameras
* message signs
* weather

all through its 511 infrastructure. ([Montana Department of Transportation][3])

```text
SOURCE_ID:
    MT-MDT-TRAVELER

OWNER:
    Montana Department of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. Montana 511

The public system is:

[Montana 511 / Traveler Information](https://www.511mt.net/?utm_source=chatgpt.com)

MDT specifically identifies `511mt.net` as its online traveler-information system. ([Montana Department of Transportation][4])

The system includes:

```text
CAMERAS
WEATHER
ROAD CONDITIONS
INCIDENTS
CLOSURES
ROAD WORK
RESTRICTIONS
MESSAGE SIGNS
```

---

### 3. MDT Camera Inventory

MDT publishes an explicit **Montana Camera Locations** page.

The inventory distinguishes:

* RWIS cameras
* other Montana cameras

and provides camera/site names and roadway mileposts. ([Montana Department of Transportation][1])

Examples include:

```text
Aberdeen Hill
Alzada
Arrow Creek Hill
Ash Creek
Avon North
Baker
Ballantine
Beacon Hill
Bearmouth
Beaver Hill
Biddle
Big Hole Pass
Big Sky Road
Blue Moon
Bohemian Corner
Bonner
Boulder Hill
Boulder South
Bowmans
...
```

([Montana Department of Transportation][1])

#### Registry

```text
SOURCE_ID:
    MT-MDT-CAMERA-INVENTORY

TYPE:
    CAMERA_REGISTRY

FIELDS_OBSERVED:
    NAME
    ROAD
    MILEPOST
    CAMERA_CATEGORY

STATUS:
    🟢 VERIFIED
```

---

### 4. MDT RWIS camera data — important

This is the most important machine-data discovery for Montana.

MDT's official **Data Feeds and Google Earth Available** page explicitly publishes:

> RWIS (air/camera/surface) XML

as a data feed. ([Montana Department of Transportation][5])

That means Montana is **not merely exposing a web map**.

There is an actual XML feed containing RWIS information with camera data.

```text
SOURCE_ID:
    MT-MDT-RWIS-XML

TYPE:
    PUBLIC_XML_FEED

DATA:
    AIR
    CAMERA
    SURFACE

STATUS:
    🟢 VERIFIED
```

---

### 5. Exact historical/current feed reference

MDT's own page links the RWIS feed from:

```text
https://www.mdt.mt.gov/other/webdata/external/rrs/roadinfo/RWIS_output.xml
```

The current site is returning a 404/roadblock when accessed through the web interface, however the official MDT feed index still identifies the RWIS XML feed. ([Montana Department of Transportation][5])

#### Therefore:

```text
MT-MDT-RWIS-XML
    status = 🟡 OFFICIAL SOURCE / CURRENT ENDPOINT NEEDS VALIDATION
```

**Do not hard-code this URL into production yet.**

The source should be discovered dynamically from MDT's current camera/511 application before ingestion.

This is exactly the kind of distinction we need to maintain in the national source registry.

---

### 6. Camera categories

MDT's camera system explicitly separates:

```text
MDT Cameras
Road Weather Information System (RWIS)
Other Montana Cameras
```

([Montana Department of Transportation][3])

So the canonical source model should preserve:

```text
camera.source_category
```

rather than flattening everything into `CCTV`.

Recommended:

```text
MT-MDT-CCTV
MT-MDT-RWIS-CAMERA
MT-MDT-OTHER-CAMERA
```

---

### 7. RWIS infrastructure

RWIS is more than a camera network.

MDT describes its RWIS system as providing:

```text
AIR
CAMERA
SURFACE
```

data. ([Montana Department of Transportation][5])

This is useful because a single physical site can become:

```text
RWIS SITE
│
├── CAMERA
├── AIR TEMPERATURE
├── ROAD/SURFACE DATA
└── OTHER WEATHER PARAMETERS
```

That should become a **site relationship** in the national database.

---

### 8. Camera map

MDT's camera map is explicitly interactive.

It displays:

* RWIS sites
* RWIS sites with cameras
* NWS/other cameras
* cameras
* weather

and allows selecting individual sites for details. ([Montana Department of Transportation][6])

[MDT Camera Map](https://www.mdt.mt.gov/travinfo/weather/rwis-google.aspx?utm_source=chatgpt.com)

#### Registry

```text
SOURCE_ID:
    MT-MDT-CAMERA-MAP

TYPE:
    WEB_MAP

STATUS:
    🟢 VERIFIED
```

---

### 9. Road-weather cameras

MDT explicitly warns that camera images can appear black at night because many roadway locations lack illumination. ([Montana Department of Transportation][1])

This is useful operational metadata.

Do **not** classify a black image at night as automatically:

```text
STREAM_ERROR
```

Instead:

```text
IMAGE_VALID
    but
LOW_LIGHT = TRUE
```

where appropriate.

---

### 10. MDT travel-data feeds

MDT's official data-feed page also exposes:

```text
Road conditions
Alerts / closures / incidents
Construction
Restrictions
```

as machine-oriented data products. ([Montana Department of Transportation][5])

The road-condition data is provided through an external Iteris ATIS endpoint. ([Montana Department of Transportation][5])

#### Registry

```text
MT-MDT-ROAD-CONDITIONS
MT-MDT-INCIDENTS
MT-MDT-CONSTRUCTION
MT-MDT-RESTRICTIONS
```

```text
STATUS:
    🟢 OFFICIAL FEED REFERENCES
```

---

### 11. Traffic incident correlation

This is valuable for ATLAS/MAC EVIL.

We can build:

```text
CAMERA
   │
   ├── coordinates
   │
   └── nearby
          ↓
INCIDENT
          ↓
ROAD CONDITION
          ↓
CONSTRUCTION
          ↓
RESTRICTION
```

This allows the camera registry to become more than a list of video sources.

---

### 12. MDT traffic data GIS

MDT also maintains an ArcGIS environment.

One documented MDT service is:

```text
https://app.mdt.mt.gov/arcgis/rest/services/Standard/Traffic/MapServer
```

The MDT planning documentation identifies this as the GIS service for traffic data. ([Montana Department of Transportation][7])

#### Registry

```text
SOURCE_ID:
    MT-MDT-TRAFFIC-GIS

TYPE:
    ARCGIS_REST

STATUS:
    🟢 VERIFIED
```

This is not itself the camera feed, but it is a valuable **supporting transportation data source**.

---

### 13. MDT ArcGIS infrastructure

MDT's public ArcGIS server exposes numerous REST services and supports:

* JSON
* GeoJSON
* PBF
* query
* identify
* map services

as demonstrated by its public services. ([MDT][8])

Therefore the Montana adapter should have an MDT ArcGIS discovery stage.

```text
MT-MDT-ARCGIS
        ↓
SERVICE CATALOG
        ↓
CAMERA / TRAFFIC / ROAD / ASSET LAYERS
```

---

### 14. Important caution about camera ArcGIS discovery

Unlike Missouri, I **have not established an exact current MDT ArcGIS camera layer endpoint** from the current public REST catalog.

That matters.

We should record:

```text
CAMERA_ARCGIS_ENDPOINT:
    NOT YET VERIFIED
```

rather than inventing one.

The official camera source is established through MDT's camera system and RWIS feed, but the exact current machine endpoint needs another discovery pass against the current 511 application.

---

### 15. Montana Statewide Public Safety Communications System

Now radio.

Montana has a statutory **Statewide Public Safety Communications System**.

Montana law defines the system as including:

* the statewide trunked land-mobile radio system
* statewide microwave network
* system interconnections
* future technology replacing/enhancing the trunked radio system. 

#### Registry

```text
SOURCE_ID:
    MT-SPCS

FULL_NAME:
    Montana Statewide Public Safety Communications System

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

OWNER:
    Montana Department of Justice

STATUS:
    🟢 VERIFIED
```

---

### 16. Statewide administration

Montana law says there is a statewide public safety communications system administered by the Department of Justice. 

The DOJ currently maintains the **Public Safety Communications Advisory Council**, which advises on:

* future development
* sustainability
* funding
* standards
* policies
* rulemaking
* operations. ([Montana Department of Justice][9])

This is a **current 2026 source**, not merely historical documentation.

---

### 17. P25

The Montana statewide system is documented as a **P25** system.

Current radio-equipment certification documentation identifies:

```text
Montana Public Safety Communications P25 System
```

and describes it as:

```text
VHF / 700 / 800 MHz
Motorola
Phase 1 / Phase 2
```

([Icom America.][10])

#### Registry

```text
SYSTEM:
    MT-SPCS

STANDARD:
    P25

PHASE:
    Phase 1 / Phase 2

BANDS:
    VHF
    700 MHz
    800 MHz
```

---

### 18. Historical system infrastructure

A Montana Legislative Finance Committee post-implementation report documented the statewide system project with:

```text
141 communication sites
140 microwave hops
121 planned trunked sites
```

The project was intended to build a statewide P25 VHF shared trunked public-safety LMR system. ([Montana Legislative Archive][11])

This is historical infrastructure information, so it **must not be treated as today's exact tower count**.

But it is valuable for historical infrastructure provenance.

```text
SOURCE_ID:
    MT-SPCS-HISTORICAL-INFRASTRUCTURE

STATUS:
    🟡 HISTORICAL
```

---

### 19. Current statewide radio infrastructure

The current statutory framework confirms the system remains statewide and administered by DOJ. 

However:

**I have not found a current official public machine-readable tower inventory comparable to Missouri's documented 2026 site list.**

Therefore:

```text
CURRENT_TOWER_INVENTORY:
    🟡 NOT YET LOCATED

HISTORICAL_TOWER_DATA:
    🟢 AVAILABLE
```

This should remain an open research item.

---

### 20. FCC radio infrastructure

FCC-derived public radio databases expose Montana Highway Patrol and statewide interoperability licenses.

For example, current 2026 records identify Montana Highway Patrol P25 transmitters and statewide interoperability frequencies. ([Digital Frequency Search][12])

Other current records explicitly identify:

> Montana Public Safety Interoperability VHF Statewide Trunked Radio System

as serving regional fire, law enforcement, EMS and other responders. ([Digital Frequency Search][13])

#### Registry

```text
SOURCE_ID:
    MT-FCC-PUBLIC-SAFETY-RADIO

TYPE:
    FCC_LICENSE_DATA

DATA:
    FREQUENCIES
    LICENSEES
    TRANSMITTER LOCATIONS
    RADIO SERVICES
    CALL SIGNS

STATUS:
    🟢 PUBLIC
```

This is particularly useful for **radio infrastructure enumeration**, not audio.

---

### 21. Montana Highway Patrol

MHP is one of the primary state users of the public-safety communications infrastructure.

Current FCC-derived records identify MHP P25 systems at locations including:

* Valier
* Livingston
* Grey Cliff

and other Montana locations. ([Digital Frequency Search][12])

Canonical structure:

```text
MT-SPCS
   │
   ├── MHP
   ├── local law enforcement
   ├── fire
   ├── EMS
   └── interoperability users
```

---

### 22. Public scanner coverage

Montana currently has approximately:

### **45 Broadcastify feeds**

The current Broadcastify state index reports **45 Montana feeds**. ([Broadcastify][14])

#### Registry

```text
SOURCE_ID:
    MT-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

CURRENT_FEEDS:
    45

STATUS:
    🟢 ACTIVE
```

This is a substantial public audio layer considering Montana's population and geography.

---

### 23. Flathead County scanner example

A current Flathead County feed explicitly covers:

* Flathead County Sheriff
* rural fire
* EMS
* Kalispell
* Whitefish
* Columbia Falls
* Montana Highway Patrol
* Montana State mutual-aid channels. ([Broadcastify][15])

The feed specifically says it covers both:

```text
Analog
+
Montana State P25 Digital Systems
```

([Broadcastify][15])

#### Registry

```text
SOURCE_ID:
    MT-BROADCASTIFY-FLATHEAD

TYPE:
    LIVE_PUBLIC_SAFETY_AUDIO

NETWORKS:
    ANALOG
    MONTANA STATE P25

STATUS:
    🟢 LIVE
```

---

### 24. Lake County scanner

A current Lake County feed operates from Ronan and describes coverage of public-safety channels using a physical scanner and antenna installation. ([Broadcastify][16])

This demonstrates that Montana's public scanner layer isn't simply an aggregator of official streams.

There are actual community SDR/scanner receivers distributed throughout the state.

---

### 25. Broadcastify API

This is worth recording separately.

Broadcastify currently advertises developer APIs for:

* calls
* real-time call data
* archived call data
* audio-feed catalog data

and specifically describes the audio-feed catalog as useful for infrastructure applications. ([Broadcastify][17])

#### Registry

```text
SOURCE_ID:
    BROADCASTIFY-API

TYPE:
    THIRD_PARTY_PUBLIC_SAFETY_AUDIO_API

DATA:
    FEED_CATALOG
    CALLS
    REALTIME
    ARCHIVES

ACCESS:
    API / ACCOUNT DEPENDENT

STATUS:
    🟢 VERIFIED SERVICE
```

This is not Montana-specific, so it belongs in the **national provider layer** rather than being duplicated as a separate API for every state.

---

### 26. ALPR — major legal distinction

Montana is one of the states where ALPR research needs extra caution.

Montana law generally prohibits state/subdivision agencies or employees from using license-plate readers on public highways except under specified exceptions. ([NCSL][2])

The law provides exceptions involving certain:

* law-enforcement purposes
* stolen vehicles
* warrants
* serious-crime investigations
* transportation planning under anonymization requirements.

---

### 27. ALPR retention

Montana law limits captured license-plate data to:

### **90 days**

unless a qualifying preservation request or warrant applies. ([Justia Law][18])

#### Registry

```text
SOURCE_ID:
    MT-ALPR-LAW

RETENTION:
    90 DAYS

STATUS:
    🟢 VERIFIED
```

This is extremely important when evaluating potential public-record sources.

---

### 28. ALPR cannot be treated like ordinary CCTV

For Montana:

```text
NORMAL CCTV
    ↓
public camera source discovery
    ↓
potentially ingest

ALPR
    ↓
statutory restrictions
    ↓
deployment-by-deployment verification
    ↓
public metadata only unless clearly lawful/public
```

That distinction needs to be built directly into the source registry.

---

### 29. Known ALPR deployment evidence

Current third-party mapping identifies approximately **59–61 publicly documented Flock/ALPR cameras** in Montana, based primarily on OpenStreetMap/community documentation. ([Flock Camera Locations][19])

However:

**These are not official state inventory numbers.**

They should therefore be classified:

```text
SOURCE:
    COMMUNITY / OSM

TYPE:
    ALPR LOCATION LEADS

CONFIDENCE:
    🟡

OFFICIAL:
    NO
```

Do not ingest these as authoritative government inventory.

---

### 30. Bozeman / Gallatin County / Hardin / Poplar

Current third-party research identifies documented ALPR deployments in:

```text
Bozeman
Gallatin County
Hardin / Big Horn County
Poplar / Roosevelt County
```

but the source explicitly warns that its database is incomplete. ([Are You Flocked?][20])

These should become **research leads**, not confirmed statewide inventory.

---

### 31. Billings

Current community mapping shows a concentration of ALPR/Flock locations around Billings. ([Flock Camera Locations][19])

But we need to distinguish:

```text
OSM mapped camera
≠
confirmed government-owned ALPR
```

That distinction is especially important in Montana because private/business cameras may coexist with government systems.

---

### 32. Kalispell surveillance cameras

A current Kalispell Police Department assessment provides a very interesting lead.

The department reportedly uses:

* a software system for mapping **voluntary participating remote surveillance cameras**
* city-owned surveillance cameras
* real-time observation capability at certain city facilities. ([Kalispell][21])

#### Registry

```text
SOURCE_ID:
    MT-KALISPELL-SURVEILLANCE

TYPE:
    MUNICIPAL_CCTV

DATA:
    CITY_CAMERA_LOCATIONS
    VOLUNTARY_PRIVATE_CAMERA_REGISTRY

STATUS:
    🟢 DOCUMENTED
```

This is a good example of why the national project needs a category for:

```text
PUBLIC_CAMERA_REGISTRY
```

rather than only physical government cameras.

---

### 33. Private-camera integration

The Kalispell documentation specifically describes a system where businesses can opt in and provide information about remote surveillance cameras. ([Kalispell][21])

That is exactly the kind of source that can expose **camera existence/location metadata without exposing the camera feed itself**.

Canonical classification:

```text
CAMERA:
    PRIVATE

REGISTRY:
    PUBLIC / VOLUNTARY

VIDEO:
    UNKNOWN / NOT PUBLIC
```

---

### 34. State procurement

Montana's Department of Administration maintains the **State Procurement Services Division**.

It provides:

* state procurement
* statewide contracts
* vendor information
* bidding
* procurement resources. ([Montana Department of Administration][22])

#### Registry

```text
SOURCE_ID:
    MT-STATE-PROCUREMENT

TYPE:
    STATE_PROCUREMENT

STATUS:
    🟢
```

---

### 35. eMACS

Montana's state eProcurement system is:

**eMACS — electronic Montana Acquisition and Contracting System**

The state says eMACS provides:

* vendor management
* bidding
* procurement processes
* contract management
* contract-spend tracking. ([Montana Human Resources Division][23])

#### Registry

```text
SOURCE_ID:
    MT-EMACS

TYPE:
    PUBLIC_PROCUREMENT_SYSTEM

USE:
    CAMERA / ALPR / RADIO / CAD / SURVEILLANCE DISCOVERY

STATUS:
    🟢 VERIFIED
```

This should be searched for terms including:

```text
CCTV
traffic camera
video surveillance
ALPR
license plate reader
Flock
Motorola
P25
radio
CAD
body camera
UAS
drone
security camera
```

---

### 36. Message signs

MDT's traveler-information system explicitly includes **message signs**. ([Montana Department of Transportation][3])

```text
SOURCE_ID:
    MT-MDT-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢 VERIFIED
```

The exact machine-readable DMS endpoint still needs to be extracted from the current 511 application.

---

### 37. Weather stations

The RWIS system is particularly useful because MDT explicitly treats it as:

```text
air
camera
surface
```

data. ([Montana Department of Transportation][5])

Therefore Montana can contribute:

```text
CAMERAS
+
WEATHER STATIONS
+
ROAD CONDITIONS
```

from the same physical infrastructure.

---

### 38. Montana source architecture

```text
MONTANA
│
├── 🟢 MDT
│   │
│   ├── 🟢 511MT
│   ├── 🟢 Camera Map
│   ├── 🟢 Camera Inventory
│   ├── 🟢 RWIS XML
│   ├── 🟢 Road Conditions
│   ├── 🟢 Incidents
│   ├── 🟢 Construction
│   ├── 🟢 Restrictions
│   ├── 🟢 Traffic GIS
│   └── 🟢 Message Signs
│
├── 🟢 STATE PUBLIC SAFETY RADIO
│   │
│   ├── 🟢 Montana Statewide Public Safety
│   ├── 🟢 P25
│   ├── 🟢 VHF
│   ├── 🟢 700 MHz
│   ├── 🟢 800 MHz
│   └── 🟡 Current tower inventory
│
├── 🟢 PUBLIC SCANNERS
│   │
│   ├── 🟢 Broadcastify
│   ├── 🟢 Flathead
│   ├── 🟢 Lake County
│   └── 🟢 Other county feeds
│
├── 🟡 ALPR
│   │
│   ├── 🟢 Statutory framework
│   ├── 🟡 Documented deployments
│   ├── 🟡 OSM camera locations
│   └── 🔴 Individual plate data
│
├── 🟢 MUNICIPAL CCTV
│   └── Kalispell
│
└── 🟢 PROCUREMENT
    └── eMACS
```

---

### 39. Exact-source priority list

#### Tier 1 — ingest immediately

```text
MT-MDT-TRAVELER
MT-MDT-CAMERA-INVENTORY
MT-MDT-RWIS-XML
MT-MDT-TRAFFIC-GIS
MT-BROADCASTIFY
MT-FCC-PUBLIC-SAFETY-RADIO
```

#### Tier 2 — investigate exact endpoint

```text
MT-MDT-CAMERA-MAP
MT-MDT-DMS
MT-MDT-511
MT-SPCS-TOWER-INVENTORY
MT-KALISPELL-SURVEILLANCE
```

#### Tier 3 — research leads

```text
MT-ALPR
MT-FLOCK
MT-MUNICIPAL-CCTV
MT-LOCAL-CAD
```

---

### 40. Montana assessment

| Category                  |                           Rating |
| ------------------------- | -------------------------------: |
| State traffic cameras     |                 🟢 **Very Good** |
| Official camera inventory |                               🟢 |
| RWIS machine feed         |                 🟢 **Excellent** |
| Exact camera URLs         | 🟡 **Needs endpoint extraction** |
| Camera coordinates        |                            🟢/🟡 |
| Traffic data              |                               🟢 |
| Road conditions           |                               🟢 |
| Weather/RWIS              |                 🟢 **Excellent** |
| DMS                       |                               🟢 |
| Statewide radio           |                 🟢 **Excellent** |
| P25                       |                               🟢 |
| Radio tower inventory     |                               🟡 |
| Public scanner coverage   |                               🟢 |
| ALPR legal documentation  |                 🟢 **Excellent** |
| ALPR public inventory     |                               🟡 |
| Individual ALPR records   |                               🔴 |
| Municipal CCTV            |                               🟡 |
| Procurement discovery     |                               🟢 |

#### Overall: **8.8 / 10**

Montana's strongest asset is **MDT's RWIS/511 infrastructure plus the statewide P25 communications system**.

The biggest unresolved camera question is the **current machine endpoint behind the MDT 511 camera system**. We have an official camera inventory and an official RWIS XML reference, but I am **not going to invent the current image/stream endpoint** until it is directly established from the live system.

The biggest ALPR finding is the opposite: Montana's law makes ALPR **much more restricted than ordinary public CCTV**, so the project should treat ALPR as a deployment-research category rather than assume a statewide public ALPR feed exists. ([Justia Law][18])

##### Montana's highest-value exact sources

[MDT Traveler Information](https://www.mdt.mt.gov/travinfo/?utm_source=chatgpt.com)

[Montana 511](https://www.511mt.net/?utm_source=chatgpt.com)

[MDT Data Feeds](https://www.mdt.mt.gov/mdt/rss.aspx?utm_source=chatgpt.com)

[Montana Public Safety Communications Advisory Council](https://www.dojmt.gov/montana-highway-patrol/public-safety-communications/?utm_source=chatgpt.com)

[Montana eMACS Procurement](https://www.doa.mt.gov/SPSD/?utm_source=chatgpt.com)

**Montana complete. Next alphabetically: Nebraska.**

[1]: https://www.mdt.mt.gov/travinfo/weather/rwis-list.aspx?utm_source=chatgpt.com "Montana Camera Locations | Montana Department of Transportation (MDT)"
[2]: https://www.ncsl.org/technology-and-communication/automated-license-plate-readers-state-statutes?utm_source=chatgpt.com "Automated License Plate Readers: State Statutes"
[3]: https://www.mdt.mt.gov/travinfo/?utm_source=chatgpt.com "Traveler Information | Montana Department of Transportation (MDT)"
[4]: https://www.mdt.mt.gov/travinfo/mobile.aspx?utm_source=chatgpt.com "Go Mobile - Traveler Information Products | Montana Department of Transportation (MDT)"
[5]: https://www.mdt.mt.gov/mdt/rss.aspx "Data Feeds and Google Earth Available | Montana Department of Transportation (MDT)"
[6]: https://www.mdt.mt.gov/travinfo/weather/rwis-google.aspx?utm_source=chatgpt.com "Map with Montana Cameras | Montana Department of Transportation (MDT)"
[7]: https://www.mdt.mt.gov/other/webdata/external/Planning/MWT/MWTP-Program/Planning-Tool-Summary-Report.pdf?utm_source=chatgpt.com "MT Wildlife & Transportation Planning Tool Summary Report"
[8]: https://app.mdt.mt.gov/arcgis/rest/services/Standard/STIP/MapServer?f=help&utm_source=chatgpt.com "ArcGIS REST API - ArcGIS Services - Map Service"
[9]: https://www.dojmt.gov/montana-highway-patrol/public-safety-communications/?utm_source=chatgpt.com "Public Safety Communications Advisory Council – Montana Department of Justice"
[10]: https://www.icomamerica.com/lineup/land_mobile/p25/Cert-Trunking/?utm_source=chatgpt.com "Approved / Certified P25 Trunking Systems | Approved / Certified P25 Trunking Systems | P25 | Land Mobiles | Products | Icom America."
[11]: https://archive.legmt.gov/content/Publications/fiscal/interim/2015_financemty_Sept/MPSC%20LFC_Post%20Implementation%20Report%2008132015.pdf?utm_source=chatgpt.com "Legislative Finance Committee"
[12]: https://digitalfrequencysearch.com/Directory/MT/Pondera?utm_source=chatgpt.com "Pondera County, Montana Digital Radio Frequencies"
[13]: https://digitalfrequencysearch.com/Directory/MT/Carbon?utm_source=chatgpt.com "Carbon County, Montana Digital Radio Frequencies"
[14]: https://status.broadcastify.com/listen/coid/1/publicsafety?utm_source=chatgpt.com "Browse Audio Feeds"
[15]: https://status.broadcastify.com/listen/feed/6561?utm_source=chatgpt.com "Flathead County Law, Fire and EMS"
[16]: https://status.broadcastify.com/listen/feed/36217?utm_source=chatgpt.com "Lake County Public Safety"
[17]: https://status.broadcastify.com/?utm_source=chatgpt.com "Broadcastify - Live Police, Fire, EMS, Aircraft, and Rail Audio Feeds"
[18]: https://law.justia.com/codes/montana/title-46/chapter-5/part-1/section-46-5-118/?utm_source=chatgpt.com "Montana Code § 46-5-118 (2025) - Preservation and disclosure of records by law enforcement agency :: 2025 Montana Code Annotated :: U.S. Codes and Statutes :: U.S. Law :: Justia"
[19]: https://flockcameralocations.com/locations/montana?utm_source=chatgpt.com "Flock Camera Locations in Montana — Live MT ALPR Map | Flock Camera Locations"
[20]: https://areyouflocked.com/montana?utm_source=chatgpt.com "Flock Cameras in Montana: Locations, Cities & ALPR Map"
[21]: https://kalispell.com/DocumentCenter/View/6572/Kalispell-Police-Dept-CPSM-Report?utm_source=chatgpt.com "POLICE OPERATIONS"
[22]: https://www.doa.mt.gov/SPSD/?utm_source=chatgpt.com "State Procurement Services Division | Montana Department of Administration"
[23]: https://hr.mt.gov/SPSD/eMACS-Resources?utm_source=chatgpt.com "eMACS Resources | Montana Department of Administration"
