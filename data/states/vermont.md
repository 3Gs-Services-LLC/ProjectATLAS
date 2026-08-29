---
state: Vermont
usps: VT
slug: vermont
dossier_number: 45
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
  imported_from: project_atlas_state_data/Vermont.txt
  imported_on: 2026-08-28
  stated_dossier_number: 44
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Vermont (VT) - ATLAS State Record

> Dossier **45 of 50** &middot; Research date **2026-08-28 (inferred)** &middot; Spec status **draft**

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

I checked Vermont more deeply than the earlier entries because Vermont has an unusual ALPR situation: **the state has a documented statewide ALPR framework and database, but current law contains a prohibition scheduled to take effect July 2, 2025 or July 1, 2027 depending on the statutory transition.** So I am not going to incorrectly label Vermont as having an active statewide ALPR network in 2026 without qualification.

---

### 1. Vermont Agency of Transportation — VTrans

Vermont Agency of Transportation

The state's transportation agency is VTrans/AOT.

Its current public traveler-information system is:

#### New England 511

[New England 511](https://www.newengland511.org/?utm_source=chatgpt.com)

VTrans participates in the regional New England 511 platform with MaineDOT and NHDOT. The Vermont-specific map is publicly accessible. ([New England 511][1])

#### ATLAS

```text
SOURCE_ID:
    VT-VTRANS-511

OWNER:
    Vermont Agency of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. Vermont public traffic cameras

**Confirmed.**

The Vermont section of New England 511 exposes a **Cameras** layer and individual camera pages. The current site explicitly instructs users that they can select camera icons and camera views from the map. ([New England 511][2])

The Vermont Agency of Transportation also describes its Transportation Systems Management & Operations program as using ITS devices whose information is disseminated through New England 511. A 2025 VTrans presentation specifically identifies camera access as part of the public 511 tool. ([Vermont Legislature][3])

#### ATLAS

```text
SOURCE_ID:
    VT-VTRANS-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

PUBLIC_METADATA:
    YES

PUBLIC_CAMERA_VIEW:
    YES

STATUS:
    VERIFIED
```

---

### 3. New England 511 is the actual source to ingest

This is important.

Do **not** create:

```text
VT-511
VT-VTRANS-511
NEW-ENGLAND-511
```

as three independent camera databases.

Instead:

```text
NEW ENGLAND 511
        │
        ├── MaineDOT
        ├── NHDOT
        └── VTrans
             │
             └── Vermont cameras
```

The current platform explicitly states that MaineDOT, NHDOT and VTrans publish their official information through the regional system. ([New England 511][4])

For ATLAS, the preferred source object is:

```text
VT-VTRANS
    ↓
NEW-ENGLAND-511
    ↓
VT CAMERA DATA
```

---

### 4. New England 511 camera layer

The current site exposes:

* Cameras
* Camera views
* Active/inactive camera status
* Traffic speeds
* Incidents
* Roadwork
* Road restrictions
* Message signs
* Mile markers
* Road-weather stations
* Weather radar
* Weather alerts
* Weather forecasts. ([New England 511][4])

This makes it much more useful than a simple image directory.

#### ATLAS source family

```text
VT-VTRANS-511
│
├── CCTV
├── TRAFFIC
├── INCIDENTS
├── ROADWORK
├── ROAD-RESTRICTIONS
├── DMS
├── MILE-MARKERS
├── RWIS
└── WEATHER
```

---

### 5. VTrans Transportation Management Center

VTrans operates a Transportation Management Center / Advanced Traffic Management System.

A 2025 VTrans operations presentation identifies:

> Transportation Management Center & ATMS/511

and describes the public 511 system as providing navigation, data layers and camera access. ([Vermont Legislature][3])

#### ATLAS

```text
SOURCE_ID:
    VT-VTRANS-TMC

TYPE:
    TRANSPORTATION_MANAGEMENT_CENTER

SYSTEM:
    ATMS / 511

PUBLIC_CAMERA_OUTPUT:
    YES

STATUS:
    VERIFIED
```

---

### 6. Exact machine-readable camera endpoint

The public camera system is **confirmed**, but I am not going to invent an API URL.

The current platform is JavaScript-driven and the public page confirms camera records/views exist. ([New England 511][4])

Therefore:

```text
PUBLIC WEB APPLICATION:
    VERIFIED

CAMERA DATA:
    VERIFIED

CAMERA VIEW:
    VERIFIED

EXACT CURRENT API:
    REQUIRES NETWORK-ENDPOINT EXTRACTION
```

This should be a later technical extraction task.

**Do not use an old 511 API URL simply because it appears in somebody else's code.**

---

### 7. VTrans camera imagery

The current public site supports individual camera views. ([New England 511][2])

Therefore:

```text
PUBLIC CAMERA:
    YES

PUBLIC CAMERA METADATA:
    YES

PUBLIC IMAGE/VIEW:
    YES

UNIVERSAL LIVE VIDEO:
    NOT ESTABLISHED

HLS:
    NOT ESTABLISHED

MJPEG:
    NOT ESTABLISHED
```

The stream format must be determined camera-by-camera from the live application.

---

### 8. VTrans road-weather stations

New England 511 exposes a **Road Weather Stations** layer for the Vermont region. ([New England 511][4])

#### ATLAS

```text
SOURCE_ID:
    VT-VTRANS-RWIS

TYPE:
    ROAD_WEATHER_INFORMATION_SYSTEM

PUBLIC:
    YES

STATUS:
    VERIFIED
```

This gives us another relationship:

```text
ROADWAY SITE
├── CAMERA
└── RWIS
```

where both are present.

---

### 9. VTrans message signs

The Vermont 511 interface also exposes a **Message Signs** layer. ([New England 511][4])

#### ATLAS

```text
SOURCE_ID:
    VT-VTRANS-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGNS

PUBLIC:
    YES

STATUS:
    VERIFIED
```

Again, this is not camera data but is useful infrastructure metadata.

---

### 10. VTrans Waze data

This is another confirmed source relationship.

New England 511 states that **MaineDOT, NHDOT and VTrans partnered with Waze through Waze for Cities** and that Waze-reported incidents and closures are displayed on the public 511 system. ([New England 511][4])

#### ATLAS

```text
SOURCE_ID:
    VT-VTRANS-WAZE

TYPE:
    CROWD-SOURCED-TRAFFIC-DATA

PROVIDER:
    WAZE

PUBLIC_DISPLAY:
    YES

STATUS:
    VERIFIED
```

This is useful, but it should **not** be confused with a raw Waze API.

The public 511 application is the confirmed public presentation layer.

---

### 11. Vermont GIS

Vermont maintains a statewide GIS environment.

The state geographic data infrastructure can be used to normalize:

* roads
* municipalities
* counties
* addresses
* boundaries
* transportation features.

For ATLAS:

```text
VT GIS
    ↓
LOCATION NORMALIZATION

VTrans
    ↓
TRANSPORTATION OBSERVATIONS
```

I would use the state's official GIS sources as the geographic authority rather than third-party map data whenever possible.

---

### 12. Vermont Department of Public Safety

Vermont Department of Public Safety

The Department of Public Safety includes Vermont State Police and the Vermont Intelligence Center.

This becomes particularly important for ALPR.

---

### 13. Vermont State Police radio

Vermont State Police

Vermont State Police communications are publicly documented through radio-frequency databases and public scanner feeds.

RadioReference contains Vermont frequency/system information, including county-level frequency listings. ([RadioReference][5])

#### ATLAS

```text
SOURCE_ID:
    VT-VSP-RADIO

TYPE:
    STATE_LAW_ENFORCEMENT_RADIO

PUBLIC_SYSTEM_INFORMATION:
    YES

STATUS:
    VERIFIED
```

---

### 14. Vermont public-safety radio

Unlike some large states, Vermont's public-safety radio environment is heavily distributed among:

* Vermont State Police
* county agencies
* municipal police
* fire
* EMS
* sheriffs.

The source architecture should therefore be:

```text
VT RADIO
│
├── Vermont State Police
├── County agencies
├── Municipal police
├── Fire
├── EMS
└── Other public safety
```

rather than assuming one statewide public scanner stream.

---

### 15. RadioReference — Vermont

[RadioReference Vermont Database](https://www.radioreference.com/db/browse/stid/50?utm_source=chatgpt.com)

RadioReference is a valuable secondary source for:

* frequencies
* agencies
* talkgroups
* repeaters
* trunked systems
* county systems.

The database contains Vermont county frequency records and current user-maintained system information. ([RadioReference][5])

#### ATLAS

```text
SOURCE_ID:
    VT-RADIOREFERENCE

TYPE:
    RADIO_SYSTEM_DATABASE

PUBLIC:
    YES

AUTHORITY:
    SECONDARY / COMMUNITY

STATUS:
    VERIFIED
```

---

### 16. Broadcastify — Vermont

Vermont has a substantial number of public scanner feeds.

The current Broadcastify state listing shows approximately **50 public-safety/rail audio feeds across all 14 Vermont counties**; the exact number varies as feeds are added/removed. ([Broadcastify][6])

Feeds include examples such as:

* Chittenden County
* Franklin County
* Bennington
* Windsor County
* Rutland County
* Essex
* Caledonia
* Orange
* Washington
* Windham
* Orleans.

#### ATLAS

```text
SOURCE_ID:
    VT-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

STATUS:
    VERIFIED
```

This is a particularly useful source for **actual public audio**, rather than simply knowing that a frequency exists.

---

### 17. FCC radio licensing

The FCC remains the authoritative federal source for licensed radio infrastructure.

#### ATLAS

```text
SOURCE_ID:
    FCC-VT-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

AUTHORITY:
    FEDERAL COMMUNICATIONS COMMISSION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

Use this to cross-reference:

* licensee
* call sign
* frequency
* emission
* transmitter
* antenna/site information.

---

### 18. Vermont ALPR — this state is unusual

Here is the important discovery.

Vermont law explicitly defines an ALPR system as one or more fixed/mobile high-speed cameras plus algorithms that convert plate images into computer-readable data. ([Vermont Legislature][7])

The statute also establishes a **statewide automated law-enforcement storage system** operated through the Vermont Justice Information Sharing System / Department of Public Safety framework. ([Vermont Legislature][7])

Therefore:

```text
STATEWIDE ALPR DATA SYSTEM:
    YES — documented
```

But that does **not** mean the public can access the database.

---

### 19. Vermont statewide ALPR database

The law defines historical ALPR data as information stored on the statewide automated law-enforcement server operated by the Vermont Justice Information Sharing System. ([Vermont Legislature][7])

#### ATLAS

```text
SOURCE_ID:
    VT-DPS-ALPR-SYSTEM

OWNER:
    VERMONT DEPARTMENT OF PUBLIC SAFETY

SYSTEM:
    STATEWIDE ALPR STORAGE

PUBLIC_RAW_ACCESS:
    NO

STATUS:
    VERIFIED SYSTEM
```

This is a major discovery because it gives ATLAS an exact **statewide ALPR system entity**, even though it is not a public API.

---

### 20. Vermont ALPR annual reporting

Vermont law requires annual reporting concerning government-operated ALPR systems.

The required report includes:

* total ALPR units operated by government agencies
* number of stationary units
* number submitting data to the statewide storage system
* ALPR readings by agency
* cumulative readings
* historical-data requests
* alerts
* investigations aided by ALPR
* costs. ([Vermont Legislature][7])

This is extraordinarily useful for our research project.

#### ATLAS source

```text
SOURCE_ID:
    VT-DPS-ALPR-ANNUAL-REPORTS

TYPE:
    GOVERNMENT_ALPR_INVENTORY_REPORT

PUBLIC:
    YES

RAW_PLATE_DATA:
    NO

INVENTORY_DATA:
    YES

STATUS:
    VERIFIED
```

---

### 21. Actual historical ALPR deployment

The 2021 Vermont Department of Public Safety annual report provides a concrete example.

It states that **one ALPR unit was deployed and recording data to the statewide ALPR database during the 2021 reporting period**, operated by the Essex County Sheriff's Department. It also states that DMV was no longer using ALPR and was not submitting data to the statewide database. ([Vermont Legislature][8])

That is much stronger evidence than simply saying "Vermont has ALPR."

#### ATLAS

```text
AGENCY:
    ESSEX COUNTY SHERIFF'S DEPARTMENT

ALPR:
    YES

STATEWIDE DATABASE SUBMISSION:
    YES

REPORTING PERIOD:
    2021

SOURCE:
    VT DPS ALPR ANNUAL REPORT
```

**Important:** this is historical evidence, not a claim that the same unit remains active in 2026.

---

### 22. Vermont's current ALPR legal status

This is where Vermont differs substantially from most states.

Current Vermont statutes contain §1609, which states:

> No State agency or department or political subdivision shall use ALPR systems or automated traffic-law-enforcement systems.

The current statutory page identifies that prohibition as effective **July 2, 2025 or July 1, 2027**, depending on the applicable statutory transition. 

Because today's date is **August 28, 2026**, we have to be careful here.

The statute page currently presents the future-effective provision as:

```text
EFFECTIVE:
    July 2, 2025 or July 1, 2027
```

So the legal status needs to be resolved against the applicable legislative transition before ATLAS labels Vermont's government ALPR operations "currently active."

#### Therefore:

```text
HISTORICAL ALPR:
    DEFINITELY VERIFIED

STATEWIDE ALPR DATABASE:
    DEFINITELY VERIFIED

CURRENT GOVERNMENT ALPR DEPLOYMENT:
    LEGALLY STATUS-SENSITIVE

PUBLIC RAW ALPR:
    NO
```

I am deliberately **not** claiming active 2026 government ALPR deployment.

---

### 23. Vermont ALPR annual reports are a gold mine

The legislature's document repository contains the Vermont DPS ALPR reports, including:

* 2014
* 2015
* 2017
* 2020
* 2021
* related legislative materials.

([Vermont Legislature][9])

This means ATLAS can build a historical timeline:

```text
VT ALPR
│
├── Agency
├── Unit count
├── Stationary/mobile
├── Reads
├── Statewide database submissions
├── Historical queries
├── Alerts
└── Cost
```

That is much better than simply recording "Vermont — ALPR: yes."

---

### 24. Vermont ALPR public raw-data status

The statewide ALPR database is law-enforcement infrastructure.

The statute restricts access to legitimate law-enforcement purposes and establishes controls around active/historical data access. 

Therefore:

```text
PUBLIC CAMERA LOCATION:
    PARTIAL / REPORT-DEPENDENT

PUBLIC ALPR INVENTORY:
    YES — through reports

PUBLIC RAW PLATE RECORDS:
    NO

PUBLIC LIVE ALPR STREAM:
    NO

PUBLIC ALPR API:
    NO VERIFIED SOURCE
```

---

### 25. Flock Safety in Vermont

I am **not** going to claim a Vermont Flock network without a current primary-source deployment record.

Unlike Texas, where the commercial ALPR footprint is enormous and easy to document, Vermont's statutory environment makes blanket assumptions especially dangerous.

Therefore:

```text
VT-FLOCK

STATUS:
    NOT CONFIRMED AS A STATEWIDE SOURCE

DO NOT INGEST:
    UNTIL A SPECIFIC DEPLOYMENT IS VERIFIED
```

This is an intentional **NO-GUESS** classification.

---

### 26. Vermont camera ecosystem

The current verified architecture is:

```text
VERMONT
│
├── VTRANS
│   │
│   └── NEW ENGLAND 511
│       ├── CCTV
│       ├── Traffic
│       ├── Incidents
│       ├── Roadwork
│       ├── DMS
│       ├── Mile Markers
│       ├── RWIS
│       └── Weather
│
├── RADIO
│   ├── Vermont State Police
│   ├── County agencies
│   ├── Municipal agencies
│   ├── FCC
│   ├── RadioReference
│   └── Broadcastify
│
└── ALPR
    ├── Statewide ALPR system
    ├── Historical government units
    ├── DPS annual reports
    └── Current legal status requires care
```

---

### 27. Highest-value Vermont sources

#### 🥇 New England 511 / VTrans

[New England 511 — Vermont](https://www.newengland511.org/region/Vermont?utm_source=chatgpt.com)

**Cameras:** YES
**Camera views:** YES
**Incidents:** YES
**Roadwork:** YES
**DMS:** YES
**RWIS:** YES
**Weather:** YES
**Official VTrans participation:** YES ([New England 511][1])

---

#### 🥈 Vermont ALPR annual reports

[Vermont Legislature ALPR reports and documents](https://legislature.vermont.gov/committee/document/2024/20/Date/4-5-2024?utm_source=chatgpt.com)

**Government ALPR inventory:** YES
**Historical unit counts:** YES
**Reads:** YES
**Agency information:** YES
**Raw plates:** NO ([Vermont Legislature][9])

---

#### 🥉 Vermont ALPR statutory system

[23 V.S.A. §1607 — ALPR systems](https://legislature.vermont.gov/statutes/section/23/015/01607?utm_source=chatgpt.com)

This establishes the statewide storage/reporting architecture and access controls. 

---

### 4. Broadcastify Vermont

[Broadcastify Vermont](https://www.broadcastify.com/listen/stid/50?utm_source=chatgpt.com)

**Public scanner audio:** YES
**County coverage:** YES
**Public-safety feeds:** YES ([Broadcastify][6])

---

### 5. RadioReference Vermont

[RadioReference Vermont](https://www.radioreference.com/db/browse/stid/50?utm_source=chatgpt.com)

**Frequencies:** YES
**Radio systems:** YES
**Agency data:** YES

---

### 28. Exact-source matrix

| Source                     | Category             | Public | Machine-readable | Status                             |
| -------------------------- | -------------------- | -----: | ---------------: | ---------------------------------- |
| New England 511            | Traveler information |     🟢 |               🟡 | **VERIFIED**                       |
| VTrans CCTV                | Traffic cameras      |     🟢 |               🟡 | **VERIFIED**                       |
| VTrans ATMS/TMC            | Traffic management   |     🟡 |               🟡 | **VERIFIED**                       |
| VTrans RWIS                | Road weather         |     🟢 |               🟡 | **VERIFIED**                       |
| VTrans DMS                 | Message signs        |     🟢 |               🟡 | **VERIFIED**                       |
| VTrans/Waze                | Traffic events       |     🟢 |               🟡 | **VERIFIED**                       |
| Vermont State Police radio | Public safety        |     🟡 |               🟡 | **VERIFIED**                       |
| FCC                        | RF licensing         |     🟢 |            🟢/🟡 | **VERIFIED**                       |
| RadioReference             | Radio DB             |     🟢 |               🟢 | **VERIFIED**                       |
| Broadcastify               | Scanner audio        |     🟢 |               🟡 | **VERIFIED**                       |
| VT statewide ALPR system   | ALPR infrastructure  |     🔴 |               🔴 | **VERIFIED — NOT PUBLIC RAW DATA** |
| VT ALPR annual reports     | ALPR inventory       |     🟢 |               🟡 | **VERIFIED**                       |
| Essex County ALPR          | ALPR                 |     🟡 |               🔴 | **HISTORICALLY VERIFIED**          |
| Public statewide ALPR API  | ALPR                 |     🔴 |               🔴 | **NOT FOUND**                      |
| Public raw ALPR database   | ALPR                 |     🔴 |               🔴 | **NOT FOUND**                      |
| Statewide Flock network    | ALPR                 |     🔴 |               🔴 | **NOT CONFIRMED**                  |

---

### 29. ATLAS source IDs

```text
VT-VTRANS
VT-VTRANS-511
VT-VTRANS-CCTV
VT-VTRANS-TMC
VT-VTRANS-RWIS
VT-VTRANS-DMS
VT-VTRANS-WAZE

VT-VSP-RADIO
VT-FCC-PUBLIC-SAFETY
VT-RADIOREFERENCE
VT-BROADCASTIFY

VT-DPS-ALPR-SYSTEM
VT-DPS-ALPR-ANNUAL-REPORTS
VT-ESSEX-COUNTY-ALPR-HISTORICAL

VT-FLOCK-RESEARCH
```

---

### 30. Vermont rating

| Category                        |                          Rating |
| ------------------------------- | ------------------------------: |
| State traffic cameras           |                🟢 **Very Good** |
| Public camera interface         |                🟢 **Excellent** |
| Transportation data             |                🟢 **Very Good** |
| Machine-readable camera backend |      🟡 **Requires extraction** |
| Public-safety radio             |                     🟢 **Good** |
| Public scanner feeds            |                     🟢 **Good** |
| Radio documentation             |                     🟢 **Good** |
| ALPR historical documentation   |                🟢 **Excellent** |
| Current ALPR deployment         | 🟡 **Legally/status sensitive** |
| Public ALPR inventory           |      🟢 **Annual-report based** |
| Public raw ALPR                 |                       🔴 **No** |
| Statewide ALPR API              |       🔴 **No verified source** |

#### **Overall: 8.7 / 10**

##### Most important Vermont discovery

Vermont is **not** simply:

> "State has ALPR."

The actual source chain is:

```text
VERMONT DPS
     ↓
STATEWIDE ALPR SYSTEM
     ↓
JUSTICE INFORMATION SHARING SYSTEM
     ↓
ALPR DATA
     ↓
RESTRICTED LAW-ENFORCEMENT ACCESS
```

while the public-facing research layer is:

```text
ALPR ANNUAL REPORTS
     ↓
UNIT COUNTS
AGENCIES
READ COUNTS
HISTORICAL QUERIES
COSTS
```

That distinction is exactly what ATLAS needs.

And for cameras:

```text
VTRANS
   ↓
NEW ENGLAND 511
   ↓
VERMONT REGION
   ↓
CAMERA INVENTORY
   ↓
PUBLIC CAMERA VIEWS
```

The current New England 511 platform explicitly confirms camera views and VTrans participation. ([New England 511][1])

**Next alphabetically: Virginia.**

[1]: https://newengland511.org/region/Vermont?mibextid=Zxz2cZ&utm_source=chatgpt.com "New England Vermont Traffic | New England 511| 511 Traffic | Commuter Information"
[2]: https://newengland511.org/region/Vermont?utm_source=chatgpt.com "New England Vermont Traffic | New England 511| 511 Traffic | Commuter Information"
[3]: https://legislature.vermont.gov/Documents/2026/Workgroups/House%20Transportation/Agency%20of%20Transportation/Safety/W~Joshua%20Schultz~Operations%20and%20Safety%20Bureau%20Overview~1-16-2025.pdf?utm_source=chatgpt.com "PowerPoint Presentation"
[4]: https://www.newengland511.org/ "New England 511| 511 Traffic | Commuter Information"
[5]: https://www.radioreference.com/db/browse/ctid/2810/all?utm_source=chatgpt.com "Essex County, Vermont (VT) All Identified Frequencies"
[6]: https://status.broadcastify.com/listen/stid/50/publicsafety?utm_source=chatgpt.com "Vermont Audio Feeds"
[7]: https://legislature.vermont.gov/statutes/fullchapter/23/015?utm_source=chatgpt.com "Vermont Laws"
[8]: https://legislature.vermont.gov/Documents/2022/WorkGroups/House%20Judiciary/Reports%20and%20Resources/W~Vermont%20Department%20of%20Public%20Safety~2021%20ALPR%20Report~1-20-2022.pdf?utm_source=chatgpt.com "2021 Annual Report to the"
[9]: https://legislature.vermont.gov/committee/document/2024/20/Date/4-5-2024?utm_source=chatgpt.com "Documents & Handouts | House Committee on Transportation"
