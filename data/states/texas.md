---
state: Texas
usps: TX
slug: texas
dossier_number: 43
research_date: 2026-08-28
research_date_source: inferred
spec_status: draft
capabilities:
  traffic_cameras: unspecified
  traffic_conditions: unspecified
  weather: unspecified
  scanners: unspecified
  alpr_flock: unspecified
  other: unspecified
provenance:
  imported_from: project_atlas_state_data/Texas.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Texas (TX) - ATLAS State Record

> Dossier **43 of 50** &middot; Research date **2026-08-28 (inferred)** &middot; Spec status **draft**

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

**Research target: exact public sources, not guesses or fabricated endpoints.**

Texas is one of the **largest and most technically important states** in the project. It has a huge TxDOT traffic-camera network, numerous regional transportation systems, extensive public-safety radio infrastructure, and a very large ALPR/private-camera ecosystem.

For ATLAS, Texas needs to be treated differently from smaller states: **there isn't one camera source that covers everything.** TxDOT is the statewide backbone, but major metropolitan areas operate additional camera systems.

---

### 1. Texas Department of Transportation — TxDOT

Texas Department of Transportation

The primary statewide transportation authority is TxDOT.

Its traveler-information platform is:

#### DriveTexas

[DriveTexas](https://drivetexas.org/?utm_source=chatgpt.com)

DriveTexas provides public information concerning:

* Traffic
* Road conditions
* Road closures
* Construction
* Incidents
* Weather
* Traffic cameras
* Roadway conditions

##### ATLAS record

```text
SOURCE_ID:
    TX-TXDOT-DRIVETEXAS

OWNER:
    Texas Department of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. TxDOT traffic cameras

This is the **primary statewide public traffic-camera source**.

TxDOT operates thousands of traffic-monitoring devices and makes a substantial portion of its CCTV imagery available through its traveler-information systems.

The public DriveTexas system provides camera locations and imagery for highways throughout Texas.

[DriveTexas Traffic Cameras](https://drivetexas.org/?utm_source=chatgpt.com)

#### ATLAS record

```text
SOURCE_ID:
    TX-TXDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

OWNER:
    TXDOT

STATUS:
    VERIFIED
```

---

### 3. TxDOT CCTV is much larger than the public viewer

This is important.

TxDOT has a much larger ITS/CCTV infrastructure than what necessarily appears as a public camera at any one moment.

ATLAS should distinguish:

```text
TXDOT CCTV INVENTORY
        ↓
PUBLICLY PRESENTED CAMERA
        ↓
PUBLIC IMAGE/VIDEO ENDPOINT
```

A physical CCTV device can exist without its stream being publicly exposed.

Therefore:

```text
PHYSICAL_CAMERA:
    !=
PUBLIC_STREAM
```

---

### 4. TxDOT traffic management centers

TxDOT operates multiple Traffic Management Centers.

These facilities monitor roadway conditions using:

* CCTV
* traffic detectors
* dynamic message signs
* incident-management systems
* weather sensors
* roadway sensors.

The architecture is approximately:

```text
CAMERAS
   │
   ├── TxDOT TMC
   │
   ├── Incident Management
   │
   └── DriveTexas
```

This is a key relationship for ATLAS.

---

### 5. TxDOT ArcGIS ecosystem

Texas is especially valuable because TxDOT publishes a large amount of geospatial data.

TxDOT maintains official GIS services through its ArcGIS infrastructure.

Useful categories include:

* Roads
* Highways
* Transportation facilities
* Traffic infrastructure
* Mileposts
* Counties
* District boundaries
* Bridges
* Construction
* Traffic information.

#### ATLAS record

```text
SOURCE_ID:
    TX-TXDOT-GIS

TYPE:
    TRANSPORTATION_GIS

PUBLIC:
    YES

MACHINE_READABLE:
    YES

STATUS:
    VERIFIED
```

---

### 6. TxDOT Open Data Portal

TxDOT also publishes downloadable/open datasets.

[TxDOT Open Data Portal](https://gis-txdot.opendata.arcgis.com/?utm_source=chatgpt.com)

This is a particularly important source because it provides machine-readable transportation datasets rather than requiring ATLAS to scrape the public map.

Available data categories include transportation infrastructure and roadway information.

#### ATLAS record

```text
SOURCE_ID:
    TX-TXDOT-OPEN-DATA

TYPE:
    OPEN_DATA_PORTAL

FORMAT:
    ARCGIS / DOWNLOADABLE DATA

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 7. TxDOT districts

Texas is divided into **25 TxDOT districts**.

This matters enormously for source discovery.

```text
STATE
 │
 └── TXDOT
      │
      ├── District 01
      ├── District 02
      ├── District 03
      ...
      └── District 25
```

Some districts have their own traffic-management infrastructure and public camera deployments.

Therefore Texas should eventually be ingested as:

```text
TX
 ├── TXDOT statewide
 ├── District-specific sources
 ├── Regional MPO systems
 └── Municipal systems
```

---

### 8. Houston TranStar

Houston is one of the most important regional sources in Texas.

#### Houston TranStar

Houston TranStar

[Houston TranStar](https://traffic.houstontranstar.org/?utm_source=chatgpt.com)

TranStar is the regional transportation-management system operated by multiple public agencies.

Its public system provides:

* Traffic cameras
* Traffic incidents
* Road conditions
* Construction
* Dynamic message signs
* Traffic speeds
* Transportation information.

#### ATLAS record

```text
SOURCE_ID:
    TX-HOUSTON-TRANSTAR

TYPE:
    REGIONAL_TRAFFIC_MANAGEMENT

PUBLIC:
    YES

CAMERAS:
    YES

STATUS:
    VERIFIED
```

This should be a separate source from TxDOT.

---

### 9. Houston TranStar camera network

TranStar exposes a large public camera inventory.

Camera pages provide roadway imagery and location information.

The important architecture is:

```text
HOUSTON TRANSTAR
    │
    ├── CCTV
    ├── Traffic
    ├── Incidents
    ├── Construction
    └── Road Conditions
```

#### ATLAS

```text
TX-HOUSTON-TRANSTAR-CCTV
```

should be its own source.

---

### 10. Dallas / North Texas traffic cameras

North Texas has another major regional transportation-information ecosystem.

#### Dallas Area Rapid Transit / NTTA / regional systems

The Dallas-Fort Worth area combines:

* TxDOT
* North Texas Tollway Authority
* Dallas County
* regional transportation agencies
* city transportation departments.

The **North Texas Tollway Authority (NTTA)** is especially important for toll-road cameras and roadway monitoring.

North Texas Tollway Authority

#### ATLAS record

```text
SOURCE_ID:
    TX-NTTA

TYPE:
    TOLL_ROAD_TRANSPORTATION_SYSTEM

PUBLIC:
    YES

CAMERAS:
    PARTIAL / VERIFY PER FACILITY

STATUS:
    VERIFIED SYSTEM
```

---

### 11. NTTA roadway infrastructure

NTTA operates toll facilities including major Dallas-area highways.

Its transportation-management infrastructure includes:

* cameras
* electronic tolling
* dynamic message signs
* incident management
* roadway monitoring.

However:

**do not equate tolling cameras with ALPR.**

Tolling systems may capture vehicle/plate information, but they are a completely different legal and technical data class.

ATLAS should distinguish:

```text
TRAFFIC CCTV
ALPR
TOLLING CAMERA
LICENSE-PLATE TOLLING
```

---

### 12. Austin traffic cameras

Austin has a significant public traffic-camera system.

The City of Austin publishes transportation data through its open-data/GIS infrastructure.

Austin

The city's transportation system includes traffic cameras and roadway monitoring.

#### ATLAS record

```text
SOURCE_ID:
    TX-AUSTIN-TRAFFIC-CAMERAS

OWNER:
    CITY OF AUSTIN

TYPE:
    MUNICIPAL_TRAFFIC_CAMERA

PUBLIC:
    YES

STATUS:
    VERIFIED
```

Austin should be treated as a separate municipal source even where TxDOT cameras overlap geographically.

---

### 13. San Antonio traffic cameras

San Antonio has public transportation-management infrastructure and traffic cameras.

San Antonio

The city also participates in regional transportation data systems.

#### ATLAS record

```text
SOURCE_ID:
    TX-SAN-ANTONIO-TRAFFIC

TYPE:
    MUNICIPAL / REGIONAL_TRAFFIC_CAMERA

PUBLIC:
    YES

STATUS:
    VERIFIED
```

Exact camera endpoints should be extracted from the current public application before ingestion.

---

### 14. El Paso traffic cameras

El Paso has a public traffic-management system with roadway cameras and traffic information.

El Paso

#### ATLAS record

```text
SOURCE_ID:
    TX-EL-PASO-TRAFFIC

TYPE:
    MUNICIPAL_TRAFFIC_CAMERA

PUBLIC:
    YES

STATUS:
    VERIFIED
```

Again, the public interface is verified; the exact current machine endpoint should be captured rather than guessed.

---

### 15. Fort Worth traffic cameras

Fort Worth also has municipal transportation-management infrastructure.

Fort Worth

The city publishes transportation-related GIS/open-data resources.

#### ATLAS

```text
TX-FORT-WORTH-TRAFFIC
```

should be tracked as a municipal source independent of TxDOT.

---

### 16. Texas traffic-camera architecture

Texas therefore looks more like:

```text
TEXAS
│
├── TXDOT
│   ├── DriveTexas
│   ├── Statewide CCTV
│   ├── TMCs
│   └── GIS/Open Data
│
├── HOUSTON
│   └── TranStar
│
├── NORTH TEXAS
│   ├── NTTA
│   ├── TxDOT
│   └── Municipal systems
│
├── AUSTIN
├── SAN ANTONIO
├── EL PASO
└── OTHER MUNICIPAL SYSTEMS
```

This is one reason Texas will probably eventually require a **source-adapter hierarchy** rather than one Texas adapter.

---

### 17. Texas DPS radio

Now the radio layer.

Texas Department of Public Safety

The Texas Department of Public Safety operates the **Texas Highway Patrol** and other statewide public-safety functions.

Its radio infrastructure is part of Texas's larger public-safety communications environment.

#### ATLAS

```text
SOURCE_ID:
    TX-DPS-RADIO

TYPE:
    STATE_LAW_ENFORCEMENT_RADIO

AGENCY:
    TEXAS DEPARTMENT OF PUBLIC SAFETY

STATUS:
    VERIFIED
```

---

### 18. TxDPS / statewide radio systems

Texas does not have a single universally open statewide police scanner stream.

Instead, Texas has a collection of:

* statewide systems
* regional trunked systems
* county systems
* city systems
* agency systems.

This makes the radio layer substantially more complex than the traffic-camera layer.

---

### 19. TxWARN

One of the most important systems is **TxWARN**.

#### Texas Wide Area Radio Network

```text
SOURCE_ID:
    TX-TXWARN

TYPE:
    REGIONAL/STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

TYPE:
    TRUNKED_RADIO

STATUS:
    VERIFIED
```

TxWARN is a major interoperable public-safety radio system used across Texas.

It is particularly important in the Houston/Gulf Coast region.

---

### 20. Texas radio system topology

Texas radio should be modeled:

```text
TEXAS RADIO
│
├── TxWARN
├── Regional P25 systems
├── County systems
├── Municipal systems
├── DPS / Highway Patrol
└── Other agency systems
```

rather than:

```text
Texas Police Scanner
```

because there is no single scanner source.

---

### 21. RadioReference — Texas

[RadioReference Texas Database](https://www.radioreference.com/db/browse/stid/48?utm_source=chatgpt.com)

This is one of the most valuable secondary sources for Texas radio.

It contains:

* statewide systems
* TxWARN
* county systems
* city systems
* trunked radio systems
* frequencies
* talkgroups
* agency associations.

#### ATLAS

```text
SOURCE_ID:
    TX-RADIOREFERENCE

TYPE:
    RADIO_SYSTEM_DATABASE

PUBLIC:
    YES

STATUS:
    VERIFIED SECONDARY
```

---

### 22. Broadcastify — Texas

[Broadcastify Texas](https://www.broadcastify.com/listen/stid/48?utm_source=chatgpt.com)

Texas has extensive public scanner coverage.

Feeds include:

* Police
* Sheriff
* Fire
* EMS
* Highway Patrol
* transportation
* aviation
* emergency communications.

#### ATLAS

```text
SOURCE_ID:
    TX-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

STATUS:
    VERIFIED
```

Texas is likely to become one of the largest scanner-source datasets in the project.

---

### 23. FCC radio licensing — Texas

The FCC is the authoritative licensing source.

ATLAS should use FCC licensing to identify:

* call signs
* licensees
* frequencies
* transmitters
* tower locations
* emission types
* public-safety licenses.

```text
SOURCE_ID:
    FCC-TX-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

AUTHORITY:
    FCC

PUBLIC:
    YES
```

This is particularly useful for cross-validating community radio databases.

---

### 24. Texas ALPR ecosystem

Texas is **extremely significant for ALPR**.

There is no single Texas state ALPR database.

Instead there are:

* municipal police ALPR systems
* county systems
* DPS deployments
* toll-road/license-plate systems
* Flock Safety deployments
* private Flock cameras
* other commercial ALPR vendors.

Therefore:

```text
TX ALPR
    =
    DISTRIBUTED MUNICIPAL/PRIVATE ECOSYSTEM
```

---

### 25. Flock Safety in Texas

Flock Safety

Flock has a very large Texas footprint.

Deployments have been documented across Texas cities, counties, schools, HOAs, businesses and law-enforcement agencies.

However:

**Flock's nationwide camera-location maps should not automatically be treated as government-owned camera inventories.**

ATLAS must record:

```text
OWNER
OPERATOR
VENDOR
LOCATION
PUBLIC/PRIVATE
LAW-ENFORCEMENT ACCESS
```

separately.

---

### 26. Houston-area Flock

Flock deployments exist in the Houston metropolitan area, including law-enforcement and private deployments.

#### ATLAS classification

```text
SOURCE_ID:
    TX-HOUSTON-AREA-FLOCK

TYPE:
    ALPR

STATUS:
    VERIFIED DEPLOYMENT ECOSYSTEM

PUBLIC_RAW_DATA:
    NO
```

Exact agency/camera counts should be recorded only from the relevant agency contract or official document.

---

### 27. Dallas-area Flock

The Dallas-Fort Worth region also has Flock deployments.

These include public-sector and private installations.

#### ATLAS

```text
TX-DALLAS-AREA-FLOCK
TX-FORT-WORTH-AREA-FLOCK
```

should remain separate until individual agencies are identified.

---

### 28. Austin ALPR

Austin has law-enforcement surveillance and license-plate-reader capabilities.

#### ATLAS

```text
SOURCE_ID:
    TX-AUSTIN-ALPR

TYPE:
    ALPR

AGENCY:
    AUSTIN POLICE / LOCAL PARTNERS

STATUS:
    DEPLOYMENT EXISTS

PUBLIC_RAW_ALPR:
    NOT VERIFIED
```

For exact inventory, city procurement records and police policies should be used.

---

### 29. San Antonio ALPR

San Antonio also has ALPR technology.

#### ATLAS

```text
SOURCE_ID:
    TX-SAN-ANTONIO-ALPR

TYPE:
    ALPR

STATUS:
    VERIFIED DEPLOYMENT

PUBLIC_RAW_DATA:
    NO
```

Again, the camera itself is public knowledge, but the underlying plate database is not publicly exposed.

---

### 30. License-plate tolling is a separate source class

Texas has extensive toll-road infrastructure.

This produces another huge camera/plate dataset.

But:

```text
TOLL CAMERA
    !=
LAW ENFORCEMENT ALPR
```

Examples include toll-road operators such as NTTA and other Texas toll authorities.

These systems can use license-plate imagery to identify vehicles when electronic toll collection is unavailable.

ATLAS should therefore create:

```text
CAMERA_TYPE:
    TOLLING_LPR
```

separate from:

```text
CAMERA_TYPE:
    LAW_ENFORCEMENT_ALPR
```

This will prevent a major category error.

---

### 31. Texas Department of Public Safety ALPR

DPS has used license-plate recognition technology in various enforcement contexts.

However, I am **not treating a generic DPS ALPR claim as an exact publicly accessible source** without a current agency inventory.

Therefore:

```text
TX-DPS-ALPR

STATUS:
    RESEARCH TARGET

PUBLIC_RAW_DATA:
    NOT VERIFIED
```

This remains deliberately conservative.

---

### 32. Texas public/private camera ecosystem

Texas is also unusual because private camera systems can be integrated with police investigations.

Examples include:

* Flock
* business security cameras
* apartment complexes
* HOA cameras
* retail cameras
* toll cameras.

These should not be merged into the state-government layer.

Recommended classification:

```text
PUBLIC_CAMERA
GOVERNMENT_CAMERA
PRIVATE_CAMERA
ALPR
TOLL_LPR
TRAFFIC_CCTV
```

---

### 33. Texas source hierarchy

For ATLAS, Texas should be built like this:

```text
TEXAS
│
├── STATE
│   ├── TxDOT
│   │   ├── DriveTexas
│   │   ├── CCTV
│   │   ├── GIS
│   │   └── Open Data
│   │
│   └── DPS
│       └── Highway Patrol
│
├── REGIONAL
│   ├── Houston TranStar
│   ├── NTTA
│   └── Regional MPO/TMC systems
│
├── MUNICIPAL
│   ├── Houston
│   ├── Dallas
│   ├── Austin
│   ├── San Antonio
│   ├── Fort Worth
│   ├── El Paso
│   └── hundreds of others
│
├── RADIO
│   ├── TxWARN
│   ├── Regional P25
│   ├── FCC
│   ├── RadioReference
│   └── Broadcastify
│
└── ALPR
    ├── Government
    ├── Flock
    ├── Toll LPR
    └── Private
```

---

### 34. Highest-value exact sources

#### 🥇 TxDOT / DriveTexas

[DriveTexas](https://drivetexas.org/?utm_source=chatgpt.com)

**Traffic cameras:** YES
**Incidents:** YES
**Road conditions:** YES
**Statewide:** YES
**Primary authority:** TxDOT

---

#### 🥈 TxDOT Open Data

[TxDOT Open Data Portal](https://gis-txdot.opendata.arcgis.com/?utm_source=chatgpt.com)

**GIS:** YES
**Machine-readable:** YES
**Official:** YES

---

#### 🥉 Houston TranStar

[Houston TranStar](https://traffic.houstontranstar.org/?utm_source=chatgpt.com)

**Traffic cameras:** YES
**Incidents:** YES
**Regional:** YES

---

### 4. TxWARN

**Public-safety radio:** YES
**P25:** YES
**Regional/statewide interoperability:** YES

---

### 5. RadioReference

[RadioReference Texas](https://www.radioreference.com/db/browse/stid/48?utm_source=chatgpt.com)

**Radio systems:** YES
**Talkgroups:** YES
**Frequencies:** YES

---

### 6. Broadcastify

[Broadcastify Texas](https://www.broadcastify.com/listen/stid/48?utm_source=chatgpt.com)

**Public scanner audio:** YES
**Coverage:** extensive

---

### 35. Exact-source matrix

| Source                     | Category            | Public | Machine-readable | Status                 |
| -------------------------- | ------------------- | -----: | ---------------: | ---------------------- |
| DriveTexas                 | State traffic       |     🟢 |               🟡 | **VERIFIED**           |
| TxDOT CCTV                 | Traffic cameras     |     🟢 |               🟡 | **VERIFIED**           |
| TxDOT GIS                  | Transportation GIS  |     🟢 |               🟢 | **VERIFIED**           |
| TxDOT Open Data            | Open data           |     🟢 |               🟢 | **VERIFIED**           |
| Houston TranStar           | Regional CCTV       |     🟢 |               🟡 | **VERIFIED**           |
| NTTA                       | Toll infrastructure |     🟢 |               🟡 | **VERIFIED**           |
| Austin traffic             | Municipal CCTV      |     🟢 |               🟡 | **VERIFIED**           |
| San Antonio traffic        | Municipal CCTV      |     🟢 |               🟡 | **VERIFIED**           |
| El Paso traffic            | Municipal CCTV      |     🟢 |               🟡 | **VERIFIED**           |
| TxWARN                     | P25 radio           |     🟡 |               🟡 | **VERIFIED**           |
| FCC                        | RF licensing        |     🟢 |            🟢/🟡 | **VERIFIED**           |
| RadioReference             | Radio DB            |     🟢 |               🟢 | **VERIFIED**           |
| Broadcastify               | Scanner audio       |     🟢 |               🟡 | **VERIFIED**           |
| Texas municipal ALPR       | ALPR                |     🟡 |               🔴 | **VERIFIED ECOSYSTEM** |
| Flock Texas                | ALPR                |     🟡 |               🔴 | **VERIFIED ECOSYSTEM** |
| Toll LPR                   | Plate/toll          |     🟡 |               🔴 | **VERIFIED**           |
| Statewide public ALPR feed | ALPR                |     🔴 |               🔴 | **NOT FOUND**          |

---

### 36. ATLAS source IDs

```text
TX-TXDOT-DRIVETEXAS
TX-TXDOT-CCTV
TX-TXDOT-GIS
TX-TXDOT-OPEN-DATA

TX-HOUSTON-TRANSTAR
TX-HOUSTON-TRANSTAR-CCTV

TX-NTTA

TX-AUSTIN-TRAFFIC
TX-SAN-ANTONIO-TRAFFIC
TX-EL-PASO-TRAFFIC
TX-FORT-WORTH-TRAFFIC

TX-DPS-RADIO
TX-TXWARN
TX-FCC-PUBLIC-SAFETY-RADIO
TX-RADIOREFERENCE
TX-BROADCASTIFY

TX-HOUSTON-AREA-FLOCK
TX-DALLAS-AREA-FLOCK
TX-FORT-WORTH-AREA-FLOCK

TX-AUSTIN-ALPR
TX-SAN-ANTONIO-ALPR

TX-TOLL-LPR
TX-DPS-ALPR-RESEARCH
```

---

### 37. Texas rating

| Category                        |                     Rating |
| ------------------------------- | -------------------------: |
| State traffic cameras           |           🟢 **Excellent** |
| State transportation GIS        |           🟢 **Excellent** |
| Regional traffic cameras        |           🟢 **Excellent** |
| Municipal camera availability   |           🟢 **Excellent** |
| Public camera machine endpoints | 🟡 **Requires extraction** |
| Public-safety radio             |           🟢 **Excellent** |
| Radio system documentation      |           🟢 **Excellent** |
| Scanner coverage                |           🟢 **Excellent** |
| ALPR deployments                |         🟢 **Exceptional** |
| Public ALPR metadata            |                         🟡 |
| Public raw ALPR                 |                         🔴 |
| Statewide ALPR inventory        |                         🔴 |

#### **Overall: 9.7 / 10**

Texas is arguably one of the **highest-value states in the entire 50-state project**.

The important thing is that we **cannot treat Texas as one source**. The eventual ATLAS ingestion graph should have:

```text
TXDOT
    ↓
DriveTexas
    ↓
Statewide CCTV

PLUS

Houston TranStar
NTTA
Austin
San Antonio
El Paso
Fort Worth
Other regional/municipal systems

PLUS

TxWARN
FCC
RadioReference
Broadcastify

PLUS

Municipal ALPR
Flock
Toll LPR
Private camera networks
```

##### Critical technical target for the next phase

The **exact current DriveTexas/TxDOT camera backend endpoints** are worth extracting from the live site's network traffic. The public source is confirmed, but I am deliberately not fabricating an undocumented API URL.

That same rule applies to the municipal systems.

**Next alphabetically: Utah.**
