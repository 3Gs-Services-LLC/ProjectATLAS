---
state: Virginia
usps: VA
slug: virginia
dossier_number: 46
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
  imported_from: project_atlas_state_data/Virginia.txt
  imported_on: 2026-08-28
  stated_dossier_number: 45
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Virginia (VA) - ATLAS State Record

> Dossier **46 of 50** &middot; Research date **2026-08-28 (inferred)** &middot; Spec status **draft**

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

**Research target: exact public sources, current as of August 28, 2026.**

Virginia is one of the **strongest states encountered so far** because it has three unusually well-developed layers:

1. **VDOT 511 — statewide public traffic cameras**
2. **STARS — statewide P25 public-safety radio**
3. **New statewide surveillance/ALPR reporting requirements that now require Virginia law-enforcement agencies to disclose what surveillance technology they use or access**

That third item is particularly important for the project. Virginia has effectively created a **statewide inventory mechanism for ALPR, CCTV, electronic toll readers, passive radio scanners, gunshot detection, and other surveillance technologies.**

---

### 1. Virginia Department of Transportation — VDOT

Virginia Department of Transportation

The primary transportation agency is VDOT.

Its official traveler-information platform is:

[511 Virginia](https://511.vdot.virginia.gov/?utm_source=chatgpt.com)

Virginia.gov explicitly identifies Virginia 511 as the official VDOT traffic-information source. It provides:

* current incidents
* traffic speeds
* road work
* winter road conditions
* bridge openings
* other transportation events
* **more than 800 live video feeds from roadside traffic cameras**. ([Virginia.gov][1])

#### ATLAS

```text
SOURCE_ID:
    VA-VDOT-511

OWNER:
    Virginia Department of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. VDOT statewide CCTV

This is the **primary Virginia camera source**.

VDOT's own current agency description states that **over 800 live video feeds** are available through Virginia 511. ([Virginia.gov][1])

VDOT's current district communications continue to direct the public to 511Virginia to view traffic cameras. ([Virginia Department of Transportation][2])

#### ATLAS

```text
SOURCE_ID:
    VA-VDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

LIVE_VIDEO:
    YES

APP:
    511 VIRGINIA

STATUS:
    VERIFIED
```

This is an especially strong source because the **current state government itself confirms the live camera feeds** rather than us relying on a third-party camera directory.

---

### 3. Camera count

The current Virginia.gov agency page says:

> over 800 live video feeds

are available through Virginia 511. ([Virginia.gov][1])

I would record the count as:

```text
PUBLIC_LIVE_FEEDS:
    >800

COUNT_TYPE:
    CURRENT AGENCY DESCRIPTION

EXACT_INVENTORY_COUNT:
    DO NOT ASSUME 800 = CAMERA COUNT
```

Why?

A "video feed" and a physical camera are not necessarily identical objects.

ATLAS should eventually distinguish:

```text
CAMERA
VIEW
STREAM
ENDPOINT
```

rather than using one integer.

---

### 4. VDOT camera viewer

Virginia 511 provides a camera-viewer interface allowing users to move between cameras along a roadway.

Historical VDOT documentation describes the camera viewer as providing individual camera identifiers, roadway/mile-marker information, directional information and navigation between cameras. ([All Hazards Consortium][3])

A current VDOT news page also confirms users can view traffic cameras through 511Virginia. ([Virginia Department of Transportation][2])

#### Example canonical structure

```text
CAMERA
    ├── Route
    ├── Mile Marker
    ├── Direction
    ├── Location
    └── Live View
```

This is exactly the type of metadata ATLAS wants.

---

### 5. VDOT cameras are NOT an archive

This is an important distinction.

VDOT's public camera system is intended for **real-time traffic information**.

The VDOT 511 presentation documentation states that its cameras do not record traffic-camera footage for later public retrieval. ([All Hazards Consortium][3])

Therefore:

```text
PUBLIC_LIVE_VIDEO:
    YES

PUBLIC_HISTORICAL_VIDEO:
    NO

PUBLIC_CAMERA_ARCHIVE:
    NO VERIFIED SOURCE
```

Do not build an ATLAS assumption that every Virginia camera has a historical video archive.

---

### 6. VDOT camera endpoint

The public application is confirmed.

The exact current machine endpoint used by the 511 application should still be extracted from the current application rather than copied from old third-party projects.

So:

```text
APPLICATION:
    VERIFIED

CAMERA INVENTORY:
    VERIFIED

LIVE VIDEO:
    VERIFIED

EXACT CURRENT API:
    NETWORK EXTRACTION REQUIRED
```

This is a deliberate **NO-GUESS** classification.

---

### 7. VDOT CCTV Portal Access

There is another interesting official source.

The Virginia Statewide Traffic Incident Management Committee resource library currently lists:

**"Virginia Department of Transportation - 511 CCTV Portal Access Request"**

as a resource. ([VASTIM][4])

This demonstrates that VDOT maintains a dedicated CCTV portal/access infrastructure beyond the public consumer-facing 511 interface.

#### ATLAS

```text
SOURCE_ID:
    VA-VDOT-CCTV-PORTAL

TYPE:
    CCTV MANAGEMENT / ACCESS PORTAL

PUBLIC_CONSUMER_STREAM:
    SEPARATE FROM INTERNAL ACCESS

STATUS:
    VERIFIED
```

We should **not** assume that this portal is an unrestricted public API.

---

### 8. Hampton Roads VDOT camera infrastructure

Virginia's bridge/tunnel infrastructure has particularly extensive traffic monitoring.

VDOT states that it operates traffic-management systems on most Hampton Roads crossings using:

* remote cameras
* monitors
* road sensors
* overhead message boards
* 511.

([Snow Plowing Services][5])

#### ATLAS

```text
SOURCE_ID:
    VA-VDOT-HAMPTON-ROADS-ITS

TYPE:
    REGIONAL_TRANSPORTATION_ITS

COMPONENTS:
    CCTV
    ROAD_SENSORS
    DMS
    TMC

STATUS:
    VERIFIED
```

---

### 9. Virginia traffic-information layers

The statewide 511 system isn't simply cameras.

The official VDOT description confirms:

```text
511 VIRGINIA
│
├── CCTV
├── Traffic speeds
├── Incidents
├── Road work
├── Winter road conditions
├── Bridge openings
└── Other transportation events
```

([Virginia.gov][1])

This should be represented as one source family with separate observation types.

---

### 10. Virginia transportation GIS

VDOT and Virginia's statewide GIS ecosystem provide the geographic framework needed to normalize camera positions.

ATLAS should use official Virginia transportation/geospatial data to associate:

```text
CAMERA
 ↓
LAT/LON
 ↓
ROAD
 ↓
ROUTE
 ↓
MILEPOINT
 ↓
COUNTY
 ↓
VDOT DISTRICT
```

This is particularly useful because Virginia's VDOT network is organized into geographic districts.

---

### 11. Virginia State Police — radio

Virginia State Police

The primary statewide public-safety radio system is:

#### STARS

**Statewide Agencies Radio System**

The Virginia State Police explicitly states that STARS provides multi-channel trunked digital voice and data communications for public-safety requirements and is based on Project 25 technology. ([Virginia State Police][6])

##### ATLAS

```text
SOURCE_ID:
    VA-STARS

OWNER:
    VIRGINIA STATE POLICE

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    APCO P25

NETWORK:
    TRUNKED

STATUS:
    VERIFIED
```

---

### 12. STARS is a statewide system

The 2025 Virginia General Assembly status report states that STARS supports participating agencies throughout the Commonwealth and provides APCO Project 25 Phase 2 public-safety communications. ([Virginia General Assembly][7])

Virginia State Police also describes STARS as a statewide multi-channel trunked digital voice/data system. ([Virginia State Police][6])

#### Architecture

```text
VA
│
└── STARS
    │
    ├── Virginia State Police
    ├── State agencies
    ├── participating public-safety agencies
    └── interoperability partners
```

---

### 13. STARS physical infrastructure

This is unusually well documented.

The VSP 2023 Facts & Figures report says the communications division maintained **105 communication tower sites and 114 generators** for the STARS/VSP network at that time. It also identifies the STARS network as a P25 Phase 2 public-safety-grade system. ([Virginia State Police][8])

Do **not** treat 105 as the current 2026 tower count; use it as historical infrastructure evidence.

#### ATLAS

```text
SOURCE_ID:
    VA-STARS-INFRASTRUCTURE

TYPE:
    RADIO_NETWORK_INFRASTRUCTURE

HISTORICAL_TOWER_COUNT:
    105

REFERENCE_YEAR:
    2023

CURRENT_COUNT:
    REQUIRES CURRENT REPORT
```

---

### 14. STARS encryption

The official STARS documentation also states that the infrastructure supports over-the-air re-keying and encryption, and the 2025 status report describes AES encryption for law-enforcement users when needed. ([Virginia State Police][6])

Therefore:

```text
RADIO_SYSTEM:
    PUBLICLY DOCUMENTED

ALL_AUDIO:
    NOT PUBLICLY MONITORABLE

ENCRYPTED TALKGROUPS:
    YES

PUBLIC SCANNER COVERAGE:
    PARTIAL
```

This distinction matters.

A publicly documented radio network is **not automatically a public audio source**.

---

### 15. RadioReference — Virginia

[RadioReference Virginia Database](https://www.radioreference.com/db/browse/stid/51?utm_source=chatgpt.com)

This should be one of the principal secondary radio-discovery sources.

It can be used to cross-reference:

* STARS
* county systems
* city systems
* conventional frequencies
* trunked systems
* talkgroups
* public-safety agencies.

#### ATLAS

```text
SOURCE_ID:
    VA-RADIOREFERENCE

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

### 16. Broadcastify — Virginia

[Broadcastify Virginia](https://www.broadcastify.com/listen/stid/51?utm_source=chatgpt.com)

Virginia has public scanner feeds covering local public-safety agencies.

For example, a current Broadcastify feed documents an Accomack County stream containing:

* Sheriff
* Police
* Fire
* EMS

and provides the actual monitored frequencies. ([Broadcastify][9])

#### ATLAS

```text
SOURCE_ID:
    VA-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 17. FCC radio licensing

The FCC remains the authoritative federal licensing source for Virginia radio infrastructure.

ATLAS should use FCC data to cross-check:

```text
CALL SIGN
LICENSEE
FREQUENCY
EMISSION
TRANSMITTER
SITE
ANTENNA
```

#### ATLAS

```text
SOURCE_ID:
    FCC-VA-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

AUTHORITY:
    FEDERAL COMMUNICATIONS COMMISSION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 18. Virginia ALPR — major discovery

Virginia is one of the most interesting states in this project because **ALPR is now governed by a specific statewide statutory framework.**

Current §2.2-5517 defines an ALPR system as high-speed cameras combined with algorithms that convert plate/vehicle imagery into computer-readable data. ([Virginia Law][10])

More importantly, Virginia now requires law-enforcement agencies using ALPR systems to report detailed information annually.

---

### 19. Virginia statewide ALPR reporting system

The Virginia State Police Data Analysis and Reporting Team states that, effective **January 1, 2026**, it began collecting ALPR-use data from law-enforcement agencies statewide. Participation is mandatory. ([Virginia State Police][11])

The required reporting includes:

* camera inventory
* databases used
* system queries
* subject demographics
* vehicle stops
* access
* data requests.

([Virginia State Police][11])

#### ATLAS

```text
SOURCE_ID:
    VA-VSP-ALPR-REPORTING

OWNER:
    VIRGINIA STATE POLICE

PROGRAM:
    DART

TYPE:
    STATEWIDE_ALPR_INVENTORY_AND_USAGE_REPORTING

START:
    2026

STATUS:
    VERIFIED
```

This is one of the strongest ALPR source-discovery mechanisms found so far.

---

### 20. Exact ALPR inventory fields

Virginia law requires each agency using an ALPR system to report the **total number of cameras** it owns or leases at the end of each calendar year.

It further breaks those cameras into:

* cameras affixed inside/on motor vehicles
* permanently affixed cameras adjacent to highways
* temporarily affixed/placed cameras adjacent to highways. ([Virginia Law][10])

This is extremely valuable to ATLAS.

#### Canonical extraction

```text
AGENCY
CAMERA_COUNT
    ├── MOBILE
    ├── FIXED
    └── TEMPORARY

DATABASES_COMPARED
QUERY_COUNT
QUERY_PURPOSE
VEHICLE_STOPS
ACCESS_SHARING
UNAUTHORIZED_ACCESS
THIRD_PARTY_REQUESTS
```

---

### 21. Virginia ALPR public reports

There is a catch.

The Virginia State Police DART page currently says:

**Annual Automated License Plate Recognition Reports — Pending publication.** ([Virginia State Police][11])

So as of **August 28, 2026**:

```text
REPORTING_REQUIREMENT:
    YES

MANDATORY:
    YES

REPORTING SYSTEM:
    ACTIVE

2025 DATA:
    EXPECTED / BEING PROCESSED

PUBLIC ANNUAL REPORT:
    PENDING
```

Do not fabricate the 2025 camera inventory before the report is actually published.

---

### 22. Virginia State Crime Commission ALPR report

The Virginia State Crime Commission has also published a 2026 ALPR update.

The report states that it assesses data collected from and surveys of Virginia law-enforcement agencies concerning their use of ALPR systems and agency policies. ([Virginia General Assembly][12])

#### ATLAS

```text
SOURCE_ID:
    VA-CRIME-COMMISSION-ALPR

TYPE:
    STATEWIDE_ALPR_RESEARCH_REPORT

STATUS:
    VERIFIED

PURPOSE:
    AGENCY/ALPR INVENTORY + POLICY ANALYSIS
```

This is an important secondary official source while the annual DART dataset is still pending.

---

### 23. Virginia ALPR law — retention

The current law is unusually specific.

Approved systems must be capable of:

```text
SYSTEM DATA:
    PURGE AFTER 21 DAYS

AUDIT TRAIL:
    PURGE AFTER 2 YEARS
```

subject to the statutory exception for ongoing investigations/proceedings. ([Virginia Law][10])

This is useful metadata for ATLAS but does **not** create public access to the underlying records.

---

### 24. Virginia ALPR data is not publicly queryable

The current statute explicitly says ALPR system data and audit-trail data are **not subject to disclosure under the Virginia FOIA**, with limited statutory sharing exceptions. ([Virginia Law][10])

Therefore:

```text
PUBLIC_RAW_ALPR:
    NO

PUBLIC_LIVE_ALPR:
    NO

PUBLIC_ALPR_DATABASE_QUERY:
    NO

PUBLIC_AGENCY_INVENTORY:
    YES / REQUIRED REPORTING

PUBLIC_POLICY:
    YES

PUBLIC_USAGE_STATISTICS:
    YES / REQUIRED REPORTING
```

This is an important distinction.

---

### 25. Virginia surveillance-technology reporting — even bigger discovery

Virginia has another reporting mechanism under §9.1-116.10.

The law defines **surveillance technology** broadly and explicitly includes:

* ALPR
* electronic toll readers
* CCTV
* biometric surveillance
* gunshot detection
* video/audio monitoring
* passive radio-network scanners
* long-range Bluetooth scanners
* RFID scanners
* surveillance analytics
* third-party surveillance services. ([Virginia Law][13])

This is **extremely relevant to your project.**

---

### 26. Virginia statewide surveillance inventory

Every Virginia state/local law-enforcement agency and sheriff's department must provide the Department of Criminal Justice Services an annual list of surveillance technologies:

* used
* accessed
* procured

during the preceding fiscal year.

The list must also include technology where another government agency or **private entity** owns/licenses the technology but the law-enforcement agency uses or accesses it. ([Virginia Law][13])

#### ATLAS

```text
SOURCE_ID:
    VA-DCJS-SURVEILLANCE-INVENTORY

TYPE:
    STATEWIDE_SURVEILLANCE_TECHNOLOGY_INVENTORY

COVERAGE:
    STATE + LOCAL LAW ENFORCEMENT
    + SHERIFF DEPARTMENTS

STATUS:
    VERIFIED
```

This is potentially one of the **highest-value sources in the entire 50-state project**.

---

### 27. What Virginia's surveillance inventory can reveal

The statutory categories include:

```text
ALPR
CCTV
ELECTRONIC TOLL READERS
BIOMETRIC SYSTEMS
GUNSHOT DETECTION
SURVEILLANCE CAMERAS
RADIO NETWORK SCANNERS
BLUETOOTH SCANNERS
RFID
SURVEILLANCE ANALYTICS
THIRD-PARTY SURVEILLANCE SERVICES
```

([Virginia Law][13])

This means Virginia has effectively created a potential **statewide discovery mechanism for exactly the categories ATLAS is looking for.**

---

### 28. The 2024 Virginia surveillance report

The Virginia Department of Criminal Justice Services already published:

**Summary Report on Surveillance Technology Equipment Procured by Virginia Law Enforcement Agencies, 2024.**

[Virginia DCJS surveillance technology report](https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/publications/research/summary-report-surveillance-technology-equipment-procured-virginia-law-enforcement-agencies-2024.pdf?utm_source=chatgpt.com)

The report specifically covers the statutory surveillance-technology categories and the law-enforcement agencies that reported equipment. ([Virginia DCJS][14])

#### ATLAS

```text
SOURCE_ID:
    VA-DCJS-SURVEILLANCE-2024

TYPE:
    GOVERNMENT_SURVEILLANCE_INVENTORY

STATUS:
    VERIFIED

CATEGORIES:
    ALPR
    CCTV
    TOLL
    GUNSHOT
    RADIO SCANNERS
    ETC.
```

---

### 29. This is better than searching individual agencies

Instead of manually searching:

```text
Richmond Police ALPR
Norfolk Police ALPR
Virginia Beach ALPR
Fairfax County ALPR
Chesapeake ALPR
...
```

Virginia's surveillance reporting framework provides a much better discovery strategy:

```text
VA DCJS
    ↓
SURVEILLANCE TECHNOLOGY REPORTING
    ↓
AGENCY
    ↓
TECHNOLOGY
    ↓
OWNER / LICENSEE
    ↓
VENDOR
    ↓
ACCESS
```

That should become a **first-class Virginia source adapter**.

---

### 30. VSP ALPR policy

Virginia State Police has an official ALPR policy dated July 9, 2025.

The policy distinguishes:

* fixed ALPR
* mobile ALPR
* portable ALPR
* private-entity ALPR.

It also explicitly recognizes private entities such as:

* homeowner associations
* gated communities
* shopping malls
* businesses
* places of worship

as possible ALPR operators that may have information-sharing arrangements with law enforcement. ([Virginia State Police][15])

#### ATLAS

```text
SOURCE_ID:
    VA-VSP-ALPR-POLICY

TYPE:
    LAW_ENFORCEMENT_ALPR_POLICY

STATUS:
    VERIFIED
```

This gives us a much better vocabulary for the national database.

---

### 31. Private ALPR is therefore part of Virginia's ecosystem

The VSP policy explicitly recognizes:

```text
PRIVATE_ENTITY_ALPR
```

as a category. ([Virginia State Police][15])

That means ATLAS should not restrict Virginia ALPR discovery to government-owned cameras.

Instead:

```text
ALPR
├── State government
├── Local government
├── Sheriff
├── Private entity
└── Shared/accessed by law enforcement
```

---

### 32. Virginia toll readers

The surveillance reporting statute explicitly includes **electronic toll readers** as surveillance technology. ([Virginia Law][13])

This should be a separate ATLAS class:

```text
CAMERA_TYPE:
    TOLL_READER
```

rather than:

```text
CAMERA_TYPE:
    ALPR
```

because Virginia's law explicitly distinguishes the categories.

---

### 33. Virginia police-scanner technology itself

Another unusually useful discovery:

Virginia's surveillance technology statute explicitly includes:

> passive scanners of radio networks

as surveillance technology. ([Virginia Law][13])

That means the statewide surveillance inventory may eventually identify agencies using technology to monitor radio networks.

This is different from public Broadcastify feeds.

ATLAS should maintain both:

```text
RADIO_NETWORK
    ↓
SYSTEM / FREQUENCY / TALKGROUP

PUBLIC_SCANNER_FEED
    ↓
ACTUAL_PUBLIC_AUDIO

SURVEILLANCE_TECHNOLOGY
    ↓
AGENCY'S RADIO-SCANNING EQUIPMENT
```

---

### 34. Virginia camera ecosystem

The verified architecture is now:

```text
VIRGINIA
│
├── VDOT
│   │
│   └── 511 Virginia
│       ├── 800+ live video feeds
│       ├── Incidents
│       ├── Traffic speeds
│       ├── Road work
│       ├── Road conditions
│       └── Other events
│
├── VDOT ITS
│   ├── TMC
│   ├── CCTV
│   ├── Road sensors
│   └── DMS
│
├── RADIO
│   ├── STARS
│   ├── Virginia State Police
│   ├── Local systems
│   ├── FCC
│   ├── RadioReference
│   └── Broadcastify
│
└── SURVEILLANCE
    ├── ALPR
    ├── CCTV
    ├── Toll readers
    ├── Gunshot detection
    ├── Radio scanners
    ├── Biometric systems
    ├── Bluetooth/RFID
    └── Third-party surveillance services
```

---

### 35. Highest-value Virginia sources

#### 🥇 511 Virginia

[511 Virginia](https://511.vdot.virginia.gov/?utm_source=chatgpt.com)

**Statewide traffic cameras:** YES
**Live video:** YES
**Official:** YES
**Current confirmed feed count:** >800 ([Virginia.gov][1])

---

#### 🥈 Virginia DCJS surveillance inventory

[Virginia DCJS Law Enforcement Publications](https://www.dcjs.virginia.gov/law-enforcement/publications?utm_source=chatgpt.com)

This is arguably the most interesting **non-camera source** discovered in Virginia.

**ALPR:** YES
**CCTV:** YES
**Toll readers:** YES
**Gunshot detection:** YES
**Radio scanners:** YES
**Biometrics:** YES
**Third-party systems:** YES ([Virginia Law][13])

---

#### 🥉 STARS

[Virginia State Police STARS](https://vsp.virginia.gov/sections-units-bureaus/bass/communications/statewide-agencies-radio-system-program-stars/?utm_source=chatgpt.com)

**Statewide public-safety radio:** YES
**P25:** YES
**Trunked:** YES
**Encryption:** YES/agency-dependent ([Virginia State Police][6])

---

### 4. Virginia ALPR reporting

[Virginia State Police DART ALPR reporting](https://vsp.virginia.gov/sections-units-bureaus/bass/information-technology-division/uniform-crime-reporting/?utm_source=chatgpt.com)

**Mandatory agency reporting:** YES
**Camera inventory:** YES
**Queries:** YES
**Vehicle stops:** YES
**Agency access/sharing:** YES
**Public annual reports:** **pending** as of this research pass. ([Virginia State Police][11])

---

### 5. Broadcastify

[Broadcastify Virginia](https://www.broadcastify.com/listen/stid/51?utm_source=chatgpt.com)

**Public scanner audio:** YES

---

### 6. RadioReference

[RadioReference Virginia](https://www.radioreference.com/db/browse/stid/51?utm_source=chatgpt.com)

**Frequencies:** YES
**Talkgroups:** YES
**Systems:** YES
**Agencies:** YES

---

### 36. Exact-source matrix

| Source                         | Category                          | Public | Machine-readable | Status                         |
| ------------------------------ | --------------------------------- | -----: | ---------------: | ------------------------------ |
| 511 Virginia                   | State traveler info               |     🟢 |               🟡 | **VERIFIED**                   |
| VDOT CCTV                      | Traffic cameras                   |     🟢 |               🟡 | **VERIFIED**                   |
| VDOT CCTV Portal               | CCTV infrastructure               |     🟡 |               🟡 | **VERIFIED**                   |
| VDOT ITS                       | Traffic-management infrastructure |     🟡 |               🟡 | **VERIFIED**                   |
| VDOT road sensors              | Transportation sensors            |  🟢/🟡 |               🟡 | **VERIFIED**                   |
| STARS                          | State P25 radio                   |     🟡 |               🟡 | **VERIFIED**                   |
| Virginia State Police radio    | Law enforcement                   |     🟡 |               🟡 | **VERIFIED**                   |
| FCC                            | RF licensing                      |     🟢 |            🟢/🟡 | **VERIFIED**                   |
| RadioReference                 | Radio database                    |     🟢 |               🟢 | **VERIFIED**                   |
| Broadcastify                   | Scanner audio                     |     🟢 |               🟡 | **VERIFIED**                   |
| VA ALPR reporting              | ALPR inventory                    |     🟢 |               🟡 | **VERIFIED / REPORTS PENDING** |
| VA Crime Commission ALPR       | ALPR research                     |     🟢 |               🟡 | **VERIFIED**                   |
| VA DCJS surveillance inventory | ALPR/CCTV/etc.                    |     🟢 |               🟡 | **VERIFIED**                   |
| VSP ALPR policy                | ALPR policy                       |     🟢 |               🟡 | **VERIFIED**                   |
| Public raw ALPR database       | ALPR                              |     🔴 |               🔴 | **NOT FOUND**                  |
| Public live ALPR feed          | ALPR                              |     🔴 |               🔴 | **NOT FOUND**                  |

---

### 37. ATLAS source IDs

```text
VA-VDOT-511
VA-VDOT-CCTV
VA-VDOT-CCTV-PORTAL
VA-VDOT-ITS
VA-VDOT-ROAD-SENSORS
VA-VDOT-DMS

VA-STARS
VA-VSP-RADIO
VA-FCC-PUBLIC-SAFETY
VA-RADIOREFERENCE
VA-BROADCASTIFY

VA-VSP-ALPR
VA-VSP-ALPR-POLICY
VA-VSP-ALPR-REPORTING
VA-CRIME-COMMISSION-ALPR

VA-DCJS-SURVEILLANCE-INVENTORY
VA-DCJS-SURVEILLANCE-2024

VA-ALPR
VA-TOLL-LPR
VA-CCTV-LAW-ENFORCEMENT
VA-GUNSHOT-DETECTION
VA-RADIO-SCANNER-SURVEILLANCE
VA-BIOMETRIC-SURVEILLANCE
VA-PRIVATE-SURVEILLANCE
```

---

### 38. Virginia rating

| Category                          |                          Rating |
| --------------------------------- | ------------------------------: |
| State traffic cameras             |              🟢 **Exceptional** |
| Live public camera feeds          |              🟢 **Exceptional** |
| Transportation information        |              🟢 **Exceptional** |
| State transportation ITS          |                🟢 **Excellent** |
| Exact machine camera endpoint     | 🟡 **Requires live extraction** |
| Statewide public-safety radio     |              🟢 **Exceptional** |
| Radio system documentation        |                🟢 **Excellent** |
| Public scanner coverage           |                🟢 **Excellent** |
| ALPR deployment documentation     |              🟢 **Exceptional** |
| Statewide ALPR reporting          |              🟢 **Exceptional** |
| Public raw ALPR                   |                       🔴 **No** |
| Surveillance technology inventory |              🟢 **Exceptional** |

### **Overall: 9.8 / 10**

Virginia is now one of the **most valuable states in the dataset**.

The standout discovery isn't just the 800+ VDOT live feeds.

It's this:

```text
VA DCJS
   ↓
MANDATORY SURVEILLANCE-TECHNOLOGY REPORTING
   ↓
EVERY STATE/LOCAL LAW-ENFORCEMENT AGENCY
   ↓
ALPR
CCTV
TOLL READERS
GUNSHOT DETECTION
RADIO SCANNERS
BIOMETRICS
BLUETOOTH/RFID
THIRD-PARTY SURVEILLANCE
```

The law specifically requires agencies to report technologies they **use, access, or procure**, including technologies owned/licensed by another government entity or a private business. ([Virginia Law][13])

That is potentially a **master discovery index for Virginia surveillance technology**, rather than having ATLAS search thousands of police departments individually.

And the camera side is equally strong:

```text
VDOT
  ↓
511 VIRGINIA
  ↓
800+ LIVE VIDEO FEEDS
  ↓
PUBLIC CAMERA VIEWS
```

([Virginia.gov][1])

**Next alphabetically: Washington.**

[1]: https://www.virginia.gov/agencies/department-of-transportation/ "Department of Transportation | Virginia.gov"
[2]: https://www.vdot.virginia.gov/news-events/news/richmond-district/richmond-district-weekly-traffic-alert-august-28-2026.php?utm_source=chatgpt.com "Richmond District | Richmond District weekly traffic alert: August 28, 2026 | Virginia Department of Transportation"
[3]: https://www.ahcusa.org/uploads/2/1/9/8/21985670/virginia_511_slides_preso_10_19_2023.pdf?utm_source=chatgpt.com "Microsoft PowerPoint - 511PresentationVDEM_10-19-23  -  Read-Only"
[4]: https://vastim.vdot.virginia.gov/resource-library/?utm_source=chatgpt.com "Resource library | Virginia Statewide Traffic Incident Management Committee"
[5]: https://snowplowingservices.vdot.virginia.gov/about/our-system/bridges-tunnels/hr-bridges-tunnels/?utm_source=chatgpt.com "Hampton Roads bridges and tunnels | Virginia Department of Transportation"
[6]: https://vsp.virginia.gov/sections-units-bureaus/bass/communications/statewide-agencies-radio-system-program-stars/?utm_source=chatgpt.com "Statewide Agencies Radio System Program (STARS) – Virginia State Police"
[7]: https://rga.lis.virginia.gov/Published/2025/RD624?utm_source=chatgpt.com "RD624 (Published 2025) - Statewide Agencies Radio System (STARS) Annual Status Report – October 2025"
[8]: https://vsp.virginia.gov/wp-content/uploads/2024/11/2023-VSP-FactsFigures.pdf?utm_source=chatgpt.com "Virginia State Police Facts & Figures 2023"
[9]: https://status.broadcastify.com/listen/feed/13160?utm_source=chatgpt.com "Accomack County Public Safety"
[10]: https://law.lis.virginia.gov/vacodefull/title2.2/chapter55.6/ "Code of Virginia Code - Chapter 55.6. Use of Automatic License Plate Recognition Systems"
[11]: https://vsp.virginia.gov/sections-units-bureaus/bass/information-technology-division/uniform-crime-reporting/?utm_source=chatgpt.com "Data Analysis and Reporting Team (DART) – Virginia State Police"
[12]: https://rga.lis.virginia.gov/Published/2026/HD6 "HD6 (Published 2026) - Law Enforcement Use of Automatic License Plate Recognition (ALPR) Update (Chapter 720, 2025)"
[13]: https://law.lis.virginia.gov/vacodeupdates/title9.1/section9.1-116.10/?utm_source=chatgpt.com "Code of Virginia (2025 Updates)"
[14]: https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/publications/research/summary-report-surveillance-technology-equipment-procured-virginia-law-enforcement-agencies-2024.pdf?utm_source=chatgpt.com "Summary Report on Surveillance Technology Equipment Procured by Virginia Law Enforcement Agencies, 2024"
[15]: https://vsp.virginia.gov/wp-content/uploads/2025/07/VSP-ALPR-POLICY-FINAL-Rev-07092025.pdf?utm_source=chatgpt.com "COMMONWEALTH OF VIRGINIA AUTOMATIC LICENSE PLATE RECOGNITION SYSTEM"
