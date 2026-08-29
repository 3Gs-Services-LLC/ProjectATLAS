---
state: Utah
usps: UT
slug: utah
dossier_number: 44
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
  imported_from: project_atlas_state_data/Utah.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Utah (UT) - ATLAS State Record

> Dossier **44 of 50** &middot; Research date **2026-08-28 (inferred)** &middot; Spec status **draft**

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

**Research target: exact public sources only; no guessed endpoints or invented counts.**

Utah is another **high-value state** for the project. The backbone is **UDOT Traffic**, which exposes statewide traffic cameras, road conditions, incidents, construction, electronic signs, and weather/road sensors. Utah also has a well-developed statewide public-safety radio environment and a substantial ALPR ecosystem.

---

### 1. Utah Department of Transportation — UDOT

Utah Department of Transportation

UDOT's public traveler-information system is:

#### UDOT Traffic

[UDOT Traffic](https://udottraffic.utah.gov/?utm_source=chatgpt.com)

This is the primary Utah transportation source.

Public information includes:

* Traffic cameras
* Incidents
* Road conditions
* Construction
* Closures
* Traffic speeds
* Electronic message signs
* Weather
* Road-weather information.

#### ATLAS

```text
SOURCE_ID:
    UT-UDOT-TRAFFIC

OWNER:
    Utah Department of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. UDOT traffic cameras

This is the **primary statewide Utah public-camera source**.

UDOT Traffic provides a map interface containing traffic-camera locations throughout Utah.

[UDOT Traffic Map](https://udottraffic.utah.gov/?utm_source=chatgpt.com)

The camera layer covers major transportation corridors including:

* I-15
* I-80
* I-84
* I-70
* I-215
* US routes
* State routes
* Salt Lake Valley
* Wasatch Front
* Northern Utah
* Southern Utah.

#### ATLAS

```text
SOURCE_ID:
    UT-UDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

OWNER:
    UDOT

STATUS:
    VERIFIED
```

---

### 3. UDOT Traffic is more than cameras

The public system combines several transportation datasets.

Conceptually:

```text
UDOT TRAFFIC
│
├── Cameras
├── Incidents
├── Construction
├── Road Conditions
├── Closures
├── Message Signs
├── Traffic Speeds
└── Weather
```

This should be modeled as one **transportation source family** with separate child datasets.

---

### 4. UDOT camera imagery

UDOT publicly presents camera imagery through the Traffic application.

The camera system should therefore be classified:

```text
PUBLIC_CAMERA:
    YES

PUBLIC_CAMERA_METADATA:
    YES

PUBLIC_IMAGE:
    YES

PUBLIC_CONTINUOUS_VIDEO:
    CAMERA-DEPENDENT

PUBLIC_ARCHIVE:
    NOT ESTABLISHED
```

Do not assume that every camera is a public HLS stream.

---

### 5. UDOT camera API — important technical target

UDOT Traffic is a modern web application with structured backend data.

The public camera map is confirmed.

However, the **exact current production endpoint used to enumerate cameras should be captured from the live application's network requests** rather than inferred from an old URL.

For the source registry:

```text
APPLICATION:
    VERIFIED

CAMERA_DATA:
    VERIFIED

EXACT_MACHINE_ENDPOINT:
    LIVE EXTRACTION REQUIRED
```

This prevents stale API information from getting into ATLAS.

---

### 6. UDOT traffic-camera locations

UDOT's camera map gives geographic camera locations.

That makes it possible to normalize:

```text
CAMERA
 ↓
LAT/LON
 ↓
ROAD
 ↓
ROUTE
 ↓
MILEPOST
 ↓
COUNTY
```

For Utah this is especially useful because much of the public-camera network follows major highway corridors.

---

### 7. UDOT CommuterLink / Traffic Operations

UDOT's traffic-management operation historically used the **CommuterLink** brand, with the current public-facing service centered around UDOT Traffic.

The underlying transportation-management system includes:

* CCTV
* DMS
* vehicle detection
* incident management
* weather sensors
* roadway sensors.

Therefore:

```text
UTDOT ITS
   ↓
Traffic Operations
   ↓
UDOT Traffic
```

should be represented as the source hierarchy.

---

### 8. UDOT GIS

Utah has an extensive state GIS environment.

UDOT publishes transportation GIS information that can be used for:

* roadway geometry
* routes
* mileposts
* transportation facilities
* traffic infrastructure
* boundaries
* highway reference information.

#### ATLAS

```text
SOURCE_ID:
    UT-UDOT-GIS

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

### 9. Utah AGRC

The **Utah Automated Geographic Reference Center (AGRC)** is the state's primary geospatial data organization.

Utah Automated Geographic Reference Center

[Utah AGRC GIS data](https://gis.utah.gov/?utm_source=chatgpt.com)

AGRC provides statewide GIS datasets and services.

These can be used to normalize camera positions against:

* roads
* counties
* municipalities
* state boundaries
* addresses
* transportation infrastructure.

#### ATLAS

```text
SOURCE_ID:
    UT-AGRC

TYPE:
    STATE_GIS

PUBLIC:
    YES

MACHINE_READABLE:
    YES

STATUS:
    VERIFIED
```

---

### 10. UDOT + AGRC relationship

Utah provides a particularly useful GIS architecture:

```text
UTAH
│
├── AGRC
│   └── STATE GIS
│
└── UDOT
    ├── Traffic Cameras
    ├── Roads
    ├── Traffic
    └── Transportation Infrastructure
```

ATLAS can use AGRC as the geographic normalization layer and UDOT as the camera/transportation observation layer.

---

### 11. UDOT road-weather system

UDOT operates road-weather monitoring infrastructure.

This includes sensors associated with transportation facilities and weather conditions.

Useful observations include:

* pavement temperature
* road surface condition
* air temperature
* precipitation
* wind
* humidity.

Where cameras are colocated with these stations:

```text
ITS SITE
├── CAMERA
├── WEATHER SENSOR
└── ROAD SENSOR
```

should become a relationship in the canonical database.

---

### 12. UDOT electronic message signs

UDOT Traffic also exposes electronic message signs.

This is not camera data, but it provides an important infrastructure relationship.

```text
CAMERA
   +
DMS
   +
ROAD SENSOR
   +
INCIDENT
```

can represent the same roadway segment.

This will become valuable later for event correlation.

---

### 13. Utah 511

Utah's public traveler-information service is integrated with UDOT's transportation system.

The more useful technical target for ATLAS is:

```text
UDOT Traffic
```

rather than treating "511" as a completely independent camera network.

#### ATLAS

```text
UT-511
    ↓
UDOT TRAFFIC
    ↓
CAMERAS / INCIDENTS / ROAD CONDITIONS
```

---

### 14. Utah Department of Public Safety

The law-enforcement side includes the Utah Department of Public Safety.

Utah Department of Public Safety

The agency includes:

* Utah Highway Patrol
* Emergency management
* other statewide public-safety functions.

#### ATLAS

```text
SOURCE_ID:
    UT-DPS-RADIO

TYPE:
    STATE_PUBLIC_SAFETY_RADIO

STATUS:
    VERIFIED
```

---

### 15. Utah statewide radio

Utah has a statewide public-safety communications environment centered around the **Utah Communications Agency Network (UCAN)**.

#### UCAN

```text
SOURCE_ID:
    UT-UCAN

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

TYPE:
    TRUNKED_RADIO

STATUS:
    VERIFIED
```

UCAN is one of the most important radio sources for Utah.

---

### 16. Utah Communications Agency Network

UCAN is a statewide/regional interoperable public-safety radio network serving Utah agencies.

It is particularly significant along the Wasatch Front.

The system supports users including combinations of:

* law enforcement
* fire
* EMS
* state agencies
* local governments.

#### ATLAS structure

```text
UCAN
│
├── State agencies
├── Highway Patrol
├── Local law enforcement
├── Fire
├── EMS
└── Other interoperable users
```

---

### 17. UCAN P25

UCAN is based on P25 trunked-radio technology.

Therefore:

```text
RADIO_STANDARD:
    P25

NETWORK_TYPE:
    TRUNKED

PUBLIC_SYSTEM_INFO:
    YES

RAW_PUBLIC_AUDIO:
    NO
```

This should be treated as a radio-system source, not automatically as a public scanner source.

---

### 18. RadioReference — Utah

[RadioReference Utah Database](https://www.radioreference.com/db/browse/stid/49?utm_source=chatgpt.com)

RadioReference provides detailed Utah radio-system information.

Useful categories include:

* UCAN
* Utah Highway Patrol
* county systems
* municipal systems
* frequencies
* talkgroups
* trunked-system information.

#### ATLAS

```text
SOURCE_ID:
    UT-RADIOREFERENCE

TYPE:
    RADIO_SYSTEM_DATABASE

PUBLIC:
    YES

STATUS:
    VERIFIED SECONDARY
```

---

### 19. Broadcastify — Utah

[Broadcastify Utah](https://www.broadcastify.com/listen/stid/49?utm_source=chatgpt.com)

Utah has public scanner feeds covering:

* Police
* Sheriff
* Fire
* EMS
* Highway Patrol
* emergency communications.

#### ATLAS

```text
SOURCE_ID:
    UT-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

STATUS:
    VERIFIED
```

This is the source to use when we need to identify **actually publicly listenable audio**, rather than simply identifying a radio system.

---

### 20. FCC — Utah radio infrastructure

The FCC remains the authoritative source for licensed radio infrastructure.

Use it to establish:

* call signs
* licensees
* frequencies
* transmitter locations
* emission types
* antenna information.

#### ATLAS

```text
SOURCE_ID:
    FCC-UT-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

AUTHORITY:
    FEDERAL COMMUNICATIONS COMMISSION

PUBLIC:
    YES
```

This is especially useful for validating UCAN-related RF infrastructure.

---

### 21. Utah ALPR ecosystem

Utah has a significant ALPR footprint.

The most important vendor ecosystem to investigate is:

Flock Safety

There are also other commercial and agency-operated ALPR systems.

But again:

```text
ALPR DEPLOYMENT
    !=
PUBLIC ALPR FEED
```

---

### 22. Salt Lake City ALPR

Salt Lake City

Salt Lake City and the surrounding law-enforcement environment have used automated license plate recognition technology.

#### ATLAS

```text
SOURCE_ID:
    UT-SALT-LAKE-CITY-ALPR

TYPE:
    LAW_ENFORCEMENT_ALPR

STATUS:
    DEPLOYMENT VERIFIED

PUBLIC_RAW_PLATE_DATABASE:
    NO
```

The exact current camera count and vendor should be tied to the most recent city procurement/policy record rather than an aggregator.

---

### 23. West Valley City ALPR

West Valley City has documented law-enforcement use of automated license plate reader technology.

#### ATLAS

```text
SOURCE_ID:
    UT-WEST-VALLEY-CITY-ALPR

TYPE:
    LAW_ENFORCEMENT_ALPR

STATUS:
    VERIFIED DEPLOYMENT
```

This is another municipal source that should be kept separate from UDOT traffic cameras.

---

### 24. Provo / Utah County ALPR

The Utah County / Provo area has ALPR technology in the local law-enforcement environment.

#### ATLAS

```text
SOURCE_ID:
    UT-UTAH-COUNTY-ALPR

TYPE:
    LAW_ENFORCEMENT_ALPR

STATUS:
    DEPLOYMENT / AGENCY INVENTORY REQUIRES CURRENT VERIFICATION
```

I would **not** assign an exact camera count until the current agency record is obtained.

---

### 25. Flock private-camera ecosystem

Utah also has privately operated Flock cameras.

Potential owners include:

* businesses
* apartment complexes
* HOAs
* private property operators.

These may be accessible through law-enforcement sharing arrangements.

ATLAS should therefore model:

```text
OWNER:
    PRIVATE

VENDOR:
    FLOCK

CAMERA_TYPE:
    ALPR

LAW_ENFORCEMENT_ACCESS:
    POSSIBLE

PUBLIC_LIVE_FEED:
    NO
```

Do not classify these as state or municipal cameras.

---

### 26. Utah ALPR source status

The state currently looks like:

```text
UT ALPR
│
├── Salt Lake City
│   └── Law-enforcement ALPR
│
├── West Valley City
│   └── Law-enforcement ALPR
│
├── Utah County / Provo
│   └── ALPR
│
├── Flock private deployments
│
└── Other municipal deployments
```

There is **no verified statewide public ALPR API**.

Therefore:

```text
STATEWIDE_PUBLIC_ALPR_API:
    NOT FOUND

PUBLIC_RAW_PLATE_DATABASE:
    NOT FOUND
```

---

### 27. Utah toll / license-plate systems

Utah also has toll/vehicle-identification infrastructure associated with transportation facilities.

These should be separately classified:

```text
TRAFFIC_CCTV
ALPR
TOLL_LPR
ACCESS_CONTROL_CAMERA
```

A tolling camera may capture a plate but is not necessarily an investigative ALPR system.

This distinction is important for ATLAS.

---

### 28. Utah highway camera architecture

The state can be represented:

```text
UTAH
│
├── UDOT
│   │
│   ├── UDOT Traffic
│   │   ├── CCTV
│   │   ├── Incidents
│   │   ├── Road Conditions
│   │   ├── DMS
│   │   └── Weather
│   │
│   └── UDOT GIS
│
├── AGRC
│   └── State GIS
│
├── RADIO
│   ├── UCAN
│   ├── UHP
│   ├── FCC
│   ├── RadioReference
│   └── Broadcastify
│
└── ALPR
    ├── Salt Lake City
    ├── West Valley City
    ├── Utah County
    ├── Flock
    └── Other municipalities/private
```

---

### 29. Highest-value exact sources

#### 🥇 UDOT Traffic

[UDOT Traffic](https://udottraffic.utah.gov/?utm_source=chatgpt.com)

**Traffic cameras:** YES
**Road conditions:** YES
**Incidents:** YES
**Closures:** YES
**Weather:** YES
**Official:** YES

---

#### 🥈 Utah AGRC

[Utah AGRC](https://gis.utah.gov/?utm_source=chatgpt.com)

**GIS:** YES
**Machine-readable:** YES
**Statewide:** YES
**Official:** YES

---

#### 🥉 UCAN

**Type:** public-safety radio
**Standard:** P25
**Coverage:** statewide/regional
**Public system:** YES
**Public raw audio:** NO

---

### 4. RadioReference

[RadioReference Utah](https://www.radioreference.com/db/browse/stid/49?utm_source=chatgpt.com)

**Radio systems:** YES
**Talkgroups:** YES
**Frequencies:** YES

---

### 5. Broadcastify

[Broadcastify Utah](https://www.broadcastify.com/listen/stid/49?utm_source=chatgpt.com)

**Public scanner audio:** YES

---

### 30. Exact-source matrix

| Source                    | Category           | Public | Machine-readable | Status                         |
| ------------------------- | ------------------ | -----: | ---------------: | ------------------------------ |
| UDOT Traffic              | State traffic      |     🟢 |               🟡 | **VERIFIED**                   |
| UDOT CCTV                 | Traffic cameras    |     🟢 |               🟡 | **VERIFIED**                   |
| UDOT GIS                  | Transportation GIS |     🟢 |               🟢 | **VERIFIED**                   |
| Utah AGRC                 | State GIS          |     🟢 |               🟢 | **VERIFIED**                   |
| UDOT RWIS                 | Weather/sensors    |     🟢 |               🟡 | **VERIFIED**                   |
| UCAN                      | P25 radio          |     🟡 |               🟡 | **VERIFIED**                   |
| Utah Highway Patrol radio | Law enforcement    |     🟡 |               🟡 | **VERIFIED SYSTEM**            |
| FCC                       | RF licensing       |     🟢 |            🟢/🟡 | **VERIFIED**                   |
| RadioReference            | Radio DB           |     🟢 |               🟢 | **VERIFIED**                   |
| Broadcastify              | Scanner audio      |     🟢 |               🟡 | **VERIFIED**                   |
| Salt Lake City ALPR       | ALPR               |     🟡 |               🔴 | **VERIFIED DEPLOYMENT**        |
| West Valley City ALPR     | ALPR               |     🟡 |               🔴 | **VERIFIED DEPLOYMENT**        |
| Utah County/Provo ALPR    | ALPR               |     🟡 |               🔴 | **REQUIRES CURRENT INVENTORY** |
| Flock private network     | ALPR               |     🟡 |               🔴 | **VERIFIED ECOSYSTEM**         |
| Statewide public ALPR API | ALPR               |     🔴 |               🔴 | **NOT FOUND**                  |

---

### 31. ATLAS source IDs

```text
UT-UDOT-TRAFFIC
UT-UDOT-CCTV
UT-UDOT-GIS
UT-UDOT-RWIS
UT-511

UT-AGRC

UT-UCAN
UT-UHP-RADIO
UT-FCC-PUBLIC-SAFETY-RADIO
UT-RADIOREFERENCE
UT-BROADCASTIFY

UT-SALT-LAKE-CITY-ALPR
UT-WEST-VALLEY-CITY-ALPR
UT-UTAH-COUNTY-ALPR-RESEARCH

UT-FLOCK-PRIVATE
UT-TOLL-LPR
```

---

### 32. Utah rating

| Category                      |                          Rating |
| ----------------------------- | ------------------------------: |
| State traffic cameras         |                🟢 **Excellent** |
| State transportation GIS      |                🟢 **Excellent** |
| State GIS                     |                🟢 **Excellent** |
| Public camera access          |                🟢 **Excellent** |
| Exact camera API              | 🟡 **Requires live extraction** |
| Statewide public-safety radio |                🟢 **Excellent** |
| Radio documentation           |                🟢 **Excellent** |
| Public scanner feeds          |                🟢 **Excellent** |
| ALPR deployments              |                   🟢 **Strong** |
| Public ALPR metadata          |                              🟡 |
| Public raw ALPR               |                              🔴 |
| Statewide ALPR inventory      |                              🔴 |

#### **Overall: 9.3 / 10**

Utah is a particularly good ATLAS state because of the combination of:

```text
UDOT Traffic
     +
UDOT GIS
     +
Utah AGRC
     +
UCAN
     +
FCC
     +
RadioReference
     +
Broadcastify
     +
Municipal ALPR
```

The **UDOT Traffic + AGRC pairing** is particularly valuable: one provides the transportation observations, while the other supplies the broader statewide geographic framework.

The major technical task left for the ingestion phase is to capture the **live UDOT Traffic network calls** and identify the exact camera inventory/image endpoints rather than relying on undocumented or historical URLs.

**Next alphabetically: Vermont.**
