---
state: New Jersey
usps: NJ
slug: new-jersey
dossier_number: 30
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
  imported_from: project_atlas_state_data/New Jersey.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# New Jersey (NJ) - ATLAS State Record

> Dossier **30 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

New Jersey is one of the **strongest states encountered so far**, particularly for ALPR.

The state has:

* a statewide public traffic-camera system;
* more than 250 NJDOT traffic cameras currently identified by NJDOT;
* statewide 511 integration;
* a large public scanner ecosystem;
* a statewide P25 radio system;
* and, most importantly, a **statewide standardized ALPR program with mandatory auditing**.

The ALPR discovery is especially significant: the New Jersey State Police's 2024 audit states that **523 New Jersey law-enforcement agencies completed the required ALPR audit**, representing all agencies required to do so. ([New Jersey Government][1])

---

### 1. New Jersey Department of Transportation — NJDOT

The primary state transportation authority is:

**New Jersey Department of Transportation (NJDOT).**

NJDOT's Traffic Operations Centers operate the state's ITS infrastructure, including traffic cameras, dynamic message signs, traffic signals, traffic-flow detectors and fiber infrastructure. ([New Jersey Government][2])

#### Registry

```text
SOURCE_ID:
    NJ-NJDOT

OWNER:
    New Jersey Department of Transportation

TYPE:
    STATE_TRANSPORTATION

STATUS:
    🟢 VERIFIED
```

---

### 2. 511NJ

The official statewide traveler-information system is:

[511NJ / NJDOT Traveler Information](https://www.511nj.org/?utm_source=chatgpt.com)

NJDOT describes 511NJ as providing real-time information from:

* traffic cameras
* travel-time sensors
* law enforcement
* fire departments
* incident information
* construction
* weather
* special events.

The interactive map includes live traffic cameras statewide. ([New Jersey Government][3])

#### Registry

```text
SOURCE_ID:
    NJ-511NJ

TYPE:
    STATE_511

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 3. NJDOT traffic-camera inventory

NJDOT's Traffic Operations Center page currently states that NJDOT operates:

### **more than 250 traffic cameras**

along with more than 125 permanent DMS, more than 300 computerized traffic signals and other ITS equipment. ([New Jersey Government][2])

This is a current official figure and should replace older historical counts when building the database.

#### Registry

```text
SOURCE_ID:
    NJ-NJDOT-CCTV

DEVICE_CLASS:
    TRAFFIC_CCTV

CURRENT_PUBLIC_INVENTORY:
    >250

STATUS:
    🟢 VERIFIED
```

---

### 4. Historical camera count — important discrepancy

Older NJDOT documentation gives a larger number.

A 2008 NJDOT release described approximately:

```text
420 traffic surveillance cameras
```

being monitored in the statewide traffic-management center. ([New Jersey Government][4])

A later NJDOT capital document lists:

```text
215 Traffic Cameras
3 Portable Traffic Cameras
```

for the state inventory at that time. ([New Jersey Government][5])

Therefore **do not use 420 as the current inventory**.

For ATLAS:

```text
CURRENT_DECLARED_COUNT:
    >250

HISTORICAL_COUNTS:
    preserve separately
```

---

### 5. NJDOT traffic camera page

NJDOT explicitly maintains a:

**Traffic Cameras** service/category.

The department's site index identifies the traffic-camera section and its traffic-camera video-log service. ([New Jersey Government][6])

The public 511 system is therefore the best current public presentation layer.

---

### 6. Camera live-feed status

NJDOT explicitly states that 511NJ provides:

> interactive traffic cameras that provide live feed to traffic conditions on highways statewide. ([New Jersey Government][3])

Therefore:

```text
LIVE_CAMERA:
    🟢 CONFIRMED

PUBLIC_ACCESS:
    🟢 CONFIRMED

STATEWIDE:
    🟢 CONFIRMED
```

This is stronger evidence than simply finding camera markers on a map.

---

### 7. Critical distinction — signal cameras

NJDOT's FAQ contains an important warning.

Cameras mounted on top of traffic signals may be **traffic signal sensors** and are not necessarily part of the public traffic-information camera system. ([New Jersey Government][7])

So:

```text
CAMERA ON SIGNAL
        ≠
PUBLIC TRAFFIC CCTV
```

Some are sensors used by the traffic signal controller.

ATLAS must not automatically classify every camera-looking device as a public CCTV feed.

---

### 8. Traffic-camera video retention

NJDOT's official video-log request page gives us an important operational detail.

NJDOT says recorded traffic-camera video is available for:

### **7 days**

from the date of the original recording. ([New Jersey Department of Transportation][8])

The request system allows:

* route number
* intersection/exit/milepost
* date
* timeframe

to be specified.

This is useful metadata for understanding the camera backend.

---

### 9. NJDOT camera video limitations

The video-request system also states:

```text
NJ Turnpike Authority cameras:
    NOT recorded by NJDOT system

Cameras attached to traffic signals:
    NOT recorded

Retention:
    7 days
```

([New Jersey Department of Transportation][8])

This gives us a clean separation between:

```text
NJDOT CCTV
NJTA CCTV
signal sensors
```

---

### 10. New Jersey Turnpike Authority

The:

**New Jersey Turnpike Authority (NJTA)**

operates cameras associated with:

* New Jersey Turnpike
* Garden State Parkway.

NJDOT's own video request page explicitly says NJTA's Turnpike and Garden State Parkway cameras are not recorded through NJDOT's video-log system. ([New Jersey Department of Transportation][8])

Therefore:

```text
NJ
├── NJDOT CCTV
└── NJTA CCTV
      ├── NJ Turnpike
      └── Garden State Parkway
```

These should be separate source owners.

---

### 11. NJTA camera source

NJTA's cameras are included in the broader New Jersey 511 ecosystem, but they should not be assumed to be technically identical to NJDOT cameras.

#### Registry

```text
SOURCE_ID:
    NJ-NJTA-CCTV

OWNER:
    New Jersey Turnpike Authority

TYPE:
    TOLL_ROAD_TRAFFIC_CCTV

COVERAGE:
    TURNPIKE
    GARDEN STATE PARKWAY

STATUS:
    🟢 VERIFIED EXISTENCE
```

The current public feed endpoint needs separate technical extraction.

---

### 12. South Jersey Transportation Authority

Another important transportation authority is:

**South Jersey Transportation Authority (SJTA)**

This authority operates major South Jersey transportation infrastructure.

For ATLAS, treat:

```text
NJDOT
NJTA
SJTA
```

as independent source owners.

Do not collapse every New Jersey camera into "NJDOT."

---

### 13. 511 technical backend

This is where New Jersey becomes difficult.

Unlike Nevada, where we found a clean public ArcGIS infrastructure layer, I did **not** find an officially documented, current NJDOT public camera JSON/REST endpoint during this pass.

There is evidence of historical/current backend interfaces, but we need to distinguish those from official documentation.

A 2022 technical investigation documented an endpoint:

```text
https://511nj.org/api/client/camera/getHlsToken
```

used by the 511NJ site to obtain HLS access. ([Stack Overflow][9])

However, that source is **third-party reverse engineering**, not an NJDOT API specification.

Therefore:

```text
NJ-511-CAMERA-API

STATUS:
    🟡 TECHNICALLY DISCOVERED

OFFICIAL API DOCUMENTATION:
    🔴 NOT FOUND

PUBLIC WEB INTERFACE:
    🟢 VERIFIED
```

---

### 14. HLS evidence

The same technical investigation specifically identified an HLS-token mechanism associated with 511NJ camera streaming. ([Stack Overflow][9])

This strongly suggests:

```text
511NJ
   ↓
camera
   ↓
HLS authorization/token
   ↓
video stream
```

But because the token mechanism can require session/browser context, **do not build an adapter around the old reverse-engineered request without live validation**.

---

### 15. Correct camera-ingestion strategy

For New Jersey, the adapter should initially target:

```text
511NJ website
      ↓
camera inventory
      ↓
camera ID
      ↓
camera metadata
      ↓
current image
      ↓
stream token if publicly obtainable
      ↓
HLS
```

If direct API extraction fails:

```text
browser/network capture
```

should be used to identify the current production endpoints.

No credential bypassing.

No circumvention.

---

### 16. NJDOT ITS infrastructure

NJDOT explicitly operates:

```text
CCTV
DMS/VMS
HAR
Traffic Flow Detectors
Fiber Optic Network
Traffic Signals
Travel-Time Sensors
```

in its Traffic Systems Management operations. ([New Jersey Government][10])

This is a very good source for the broader device registry.

#### Canonical classification

```text
ITS
├── CCTV
├── DMS
├── HAR
├── DETECTION
├── SIGNAL
├── TRAVEL_TIME
└── FIBER
```

---

### 17. NJDOT traffic detection

NJDOT's ITS infrastructure includes traffic-flow detectors.

These are **not cameras by default**.

Store them separately:

```text
DEVICE_TYPE:
    TRAFFIC_DETECTOR
```

rather than:

```text
CAMERA
```

unless the source explicitly identifies camera-based detection.

---

### 18. New Jersey ALPR — major discovery

This is the most important part of the New Jersey research.

The New Jersey Attorney General issued:

### **Law Enforcement Directive No. 2022-12**

specifically regulating:

### Automated License Plate Recognition (ALPR) Technology.

The directive applies statewide to law-enforcement chief executives and county prosecutors. ([New Jersey Government][11])

#### Registry

```text
SOURCE_ID:
    NJ-AG-ALPR

OWNER:
    NJ Attorney General / NJ Division of Criminal Justice

TYPE:
    STATEWIDE_ALPR_POLICY

STATUS:
    🟢 VERIFIED
```

---

### 19. New Jersey statewide ALPR standardization

The 2022 directive explicitly says one of its goals is:

> sharing and standardization of ALPR data statewide

and establishes ALPR coordinators at:

```text
agency
county
state
```

levels. ([New Jersey Government][11])

That is extremely valuable for our national data-source project.

It means New Jersey isn't merely a collection of independent police ALPR programs.

It has a **statewide standardized ALPR framework**.

---

### 20. Statewide ALPR application

The directive requires standardized statewide ALPR data handling and identifies a statewide application program for the data. ([New Jersey Government][11])

Canonical architecture:

```text
LOCAL POLICE
      │
      ▼
COUNTY ALPR COORDINATOR
      │
      ▼
STATE ALPR COORDINATOR
      │
      ▼
STATEWIDE ALPR SYSTEM
```

This is exactly the type of architecture ATLAS should document.

---

### 21. ALPR deployment types

New Jersey's directive explicitly recognizes that ALPR devices may be:

```text
stationary
permanent
portable
mobile
police-vehicle mounted
```

([New Jersey Government][11])

Therefore:

```text
ALPR_DEVICE
├── FIXED
├── PORTABLE
└── MOBILE
```

should be separate canonical device classes.

---

### 22. New Jersey ALPR audit system

The New Jersey State Police conducts statewide ALPR audits.

The official:

**2024 Audit of Automated License Plate Recognition Data Collected and Utilized by New Jersey Law Enforcement Agencies**

was issued:

### July 21, 2025

by the Statewide ALPR Coordinator. ([New Jersey Government][1])

This is a **current, official statewide data-source document**.

---

### 23. 523 agencies audited

The 2024 audit states:

### **523 agencies**

completed the required audit.

It says those agencies represented:

> all New Jersey law enforcement agencies required to do so. ([New Jersey Government][1])

This is one of the strongest ALPR-source discoveries in the entire 50-state project.

#### Registry

```text
SOURCE_ID:
    NJSP-ALPR-AUDIT-2024

AGENCIES:
    523

AUDIT_YEAR:
    2024

PUBLICATION:
    2025-07-21

STATUS:
    🟢 VERIFIED — EXTREMELY HIGH VALUE
```

---

### 24. ALPR audit results

The 2024 audit reports that:

* more than 500 state, county and local law-enforcement agencies were audited;
* hundreds of thousands of ALPR activities were included;
* two significant violations were identified and corrected;
* one citizen complaint was reported. ([New Jersey Government][1])

This provides a statewide picture of ALPR use even though it isn't a raw camera-coordinate database.

---

### 25. ALPR data structure

The statewide audit system creates an important data hierarchy:

```text
AGENCY
   ↓
ALPR PROGRAM
   ↓
DEVICE / SYSTEM
   ↓
ALPR ACTIVITY
   ↓
AUDIT
```

ATLAS should preserve all of these levels.

Do **not** reduce an ALPR agency to one camera point.

---

### 26. ALPR audit source

The official audit should be stored as:

```text
SOURCE_TYPE:
    GOVERNMENT_AUDIT

AUTHORITY:
    NEW JERSEY STATE POLICE

SUBJECT:
    ALPR DATA

GEOGRAPHY:
    STATEWIDE

RELIABILITY:
    VERY HIGH
```

This is a Tier-1 source.

---

### 27. ALPR location data — important limitation

The statewide audit does **not** appear to be a public GIS layer containing every ALPR's latitude/longitude.

Therefore:

```text
STATEWIDE_ALPR_COORDINATES:
    🔴 NOT CONFIRMED

STATEWIDE_ALPR_AGENCY_DATA:
    🟢 CONFIRMED

STATEWIDE_ALPR_AUDIT:
    🟢 CONFIRMED
```

For physical camera locations, we will need:

* agency records;
* procurement records;
* municipal documents;
* contracts;
* public-record requests;
* or other published datasets.

---

### 28. ALPR vendor

The statewide program should not be assumed to equal one vendor.

New Jersey's statewide directive is technology/program-level policy.

It does **not** establish:

```text
all NJ ALPR = Flock
```

Therefore:

```text
VENDOR:
    PER-DEVICE / PER-AGENCY

STATEWIDE_VENDOR:
    NOT ASSUMED
```

This is important because Flock, Motorola, Rekor, Vigilant and other systems can coexist.

---

### 29. Flock specifically

There is evidence from community-derived mapping that Flock cameras exist in New Jersey, but that is **not an authoritative state inventory**.

For this project:

```text
FLOCK-NJ:
    🟡 DISCOVERY SOURCE

NOT:
    authoritative statewide count
```

The official NJSP ALPR program should take precedence.

---

### 30. ALPR retention and access

The 2022 directive specifically continues privacy safeguards and limits access to personal identifying information associated with a plate unless there is a particularized basis under the New Jersey Supreme Court framework. ([New Jersey Government][11])

Therefore raw ALPR data should **not** be treated as an ordinary public-data feed.

Our project should target:

```text
PUBLIC METADATA
PUBLIC AUDITS
PUBLIC POLICIES
PUBLIC PROCUREMENT
PUBLIC DEVICE LOCATIONS
```

where legally available.

Not:

```text
RAW PLATE-HIT DATABASE
```

---

### 31. New Jersey public-records system

New Jersey's Open Public Records Act is unusually important for this project.

The Government Records Council states that:

> all records shall be accessible

unless a statutory or other permitted exemption applies. ([New Jersey Government][12])

The NJDOT OPRA page specifically provides the public-records pathway for NJDOT and related transportation authorities. ([New Jersey Government][13])

#### Registry

```text
SOURCE_ID:
    NJ-OPRA

TYPE:
    PUBLIC_RECORDS_ACCESS

STATUS:
    🟢 VERIFIED
```

---

### 32. OPRA is not an automatic data API

Important distinction:

```text
OPRA
    ≠
REST API
```

It is a mechanism for obtaining government records.

For ATLAS, this becomes a **secondary discovery mechanism** for things such as:

```text
ALPR deployment records
camera inventories
camera contracts
equipment lists
GIS layers
vendor contracts
maintenance records
system specifications
```

where the records are not already published.

---

### 33. Public-record limitation

New Jersey's OPRA framework contains exemptions, including records concerning:

* criminal investigations;
* security/investigative techniques;
* certain emergency-resource inventories;
* protected personal information.

([New Jersey Government][12])

Therefore every request needs to be narrowly scoped to **public infrastructure metadata**, not operationally sensitive information.

---

### 34. New Jersey public scanner ecosystem

New Jersey is exceptionally strong here.

Current Broadcastify data shows:

### **390 audio feeds**

across:

### **22 counties**

including:

```text
322 public safety
8 rail
6 amateur radio
6 other
2 aviation
2 marine
```

([Broadcastify][14])

The public-safety category itself currently has:

### **317 feeds**

in the current listing. ([Broadcastify][15])

The counts vary by page/update time, so ATLAS should treat them as **dynamic counts**, not fixed facts.

---

### 35. New Jersey county scanner coverage

Current Broadcastify coverage includes all 21 counties plus statewide feeds:

```text
Atlantic
Bergen
Burlington
Camden
Cape May
Cumberland
Essex
Gloucester
Hudson
Hunterdon
Mercer
Middlesex
Monmouth
Morris
Ocean
Passaic
Salem
Somerset
Sussex
Union
Warren
Statewide
```

([Broadcastify][14])

This is excellent statewide scanner coverage.

---

### 36. New Jersey statewide scanner feeds

Broadcastify currently lists:

### **5 statewide feeds**

in the overall New Jersey feed inventory. ([Broadcastify][14])

These should be independently enumerated rather than assuming one statewide feed.

---

### 37. Public-safety radio examples

Current New Jersey feeds include:

```text
Burlington County Public Safety
Jersey City Police
Warren County Police / Fire / EMS
Atlantic County Fire and EMS
Camden County Fire and EMS
Mercer County Fire / EMS
```

and many additional municipal/county systems. ([Broadcastify][15])

---

### 38. New Jersey statewide P25 system

New Jersey has a formal statewide:

### **NJICS — New Jersey Interoperability Communications System**

The official NJ State Police documentation identifies it as an:

### **NJICS P25 System**

and provides an agency participation application guide. ([New Jersey Government][16])

#### Registry

```text
SOURCE_ID:
    NJ-NJICS

OWNER:
    New Jersey State Police

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

STATUS:
    🟢 VERIFIED
```

---

### 39. NJICS interoperability structure

The official participation guide identifies:

```text
STATEWIDE TALKGROUPS
REGIONAL TALKGROUPS
HIGHWAY NORTH
HIGHWAY SOUTH
```

and examples including:

```text
STATE CALL 1
STATECOM 2
UASI 1
UASI 2
HW INT I-80
HW INT I-280
HW INT I-295
HW INT RT 72
```

([New Jersey Government][16])

This is highly useful for understanding the system's organization.

---

### 40. Radio system canonical structure

```text
NJICS
│
├── STATEWIDE
│
├── REGIONAL
│
├── HIGHWAY NORTH
│
├── HIGHWAY SOUTH
│
└── AGENCY-SPECIFIC
```

ATLAS should preserve talkgroup-level metadata separately from frequencies/sites.

---

### 41. NJ State Police radio

The NJ State Police are a primary participant in the statewide communications architecture.

NJICS documentation specifically provides the framework for agencies participating in the P25 system. ([New Jersey Government][16])

The public scanner ecosystem then provides practical audio access to many individual agencies.

Therefore:

```text
RADIO_SYSTEM:
    NJICS

PUBLIC_AUDIO:
    Broadcastify/community feeds

SYSTEM_OWNER:
    State / participating agencies
```

These are separate source entities.

---

### 42. NJSP criminal-justice communications

NJSP's Identification & Information Technology section says the state's criminal justice information system serves approximately:

### **850 criminal-justice agencies**

and connects authorized users to information from:

* NJ Motor Vehicle Commission
* NCIC
* NLETS.

([New Jersey Government][17])

This is **not a public data source** and should not be treated as one.

It is nevertheless important architecture context.

---

### 43. Do not attempt to ingest CJIS

The NJSP documentation explicitly describes CJIS resources as being available to **authorized criminal-justice personnel**. ([New Jersey Government][17])

Therefore:

```text
NJ-CJIS
    🔴 NOT PUBLIC
```

It does not belong in the public-source ingestion pipeline.

---

### 44. NJDOT camera + radio relationship

NJDOT's statewide traffic-management operation works jointly with the:

* NJ Turnpike Authority
* New Jersey State Police.

The northern Statewide Traffic Management Center is jointly operated by these agencies. ([New Jersey Government][2])

This means New Jersey's transportation surveillance ecosystem has an unusually tight:

```text
TRANSPORTATION
      +
STATE POLICE
      +
TOLL AUTHORITY
```

relationship.

---

### 45. New Jersey camera architecture

The state can be modeled as:

```text
NEW JERSEY
│
├── NJDOT
│   ├── CCTV
│   ├── DMS
│   ├── HAR
│   ├── Traffic Detection
│   ├── Travel Time Sensors
│   └── Signals
│
├── NJTA
│   ├── Turnpike CCTV
│   └── Garden State Parkway CCTV
│
├── SJTA
│   └── transportation surveillance
│
├── MUNICIPAL
│   ├── police CCTV
│   ├── traffic CCTV
│   └── signal cameras
│
└── PRIVATE/OTHER
    └── separately classified
```

---

### 46. Signal cameras versus surveillance cameras

NJDOT's own FAQ gives us an explicit classification rule:

```text
traffic-information camera
        ≠
traffic-signal sensor
```

([New Jersey Government][7])

This is important enough to encode into the ingestion engine:

```text
IF source_type == SIGNAL_SENSOR:
    device_class = TRAFFIC_DETECTION

IF source_type == CCTV:
    device_class = TRAFFIC_CCTV
```

Never infer the classification from the presence of a video-looking icon alone.

---

### 47. Municipal camera research

New Jersey's municipal layer is enormous.

There are:

```text
21 counties
hundreds of municipalities
```

and many municipalities operate their own:

* traffic cameras;
* police CCTV;
* ALPR;
* school-zone cameras;
* intersection cameras;
* license-plate enforcement cameras.

These should be researched individually after the state-level sources.

For ATLAS:

```text
NJ
 ├── STATE
 ├── COUNTY
 ├── MUNICIPAL
 └── AUTHORITY
```

---

### 48. NJ ALPR is much more mature than many states

Compare the source situation:

```text
NH:
    LPR registration + annual reporting

NJ:
    statewide ALPR coordinators
    statewide standardized data
    statewide application
    annual audit
    523 agencies audited
```

That makes New Jersey one of the **highest-priority states for ALPR extraction**.

---

### 49. Highest-value New Jersey ALPR source

The single most important document is:

[NJ State Police — 2024 ALPR Audit](https://nj.gov/njsp/ALPR/pdf/2024_Audit_Automated_License_Plate_Recognition_%28ALPR%29_Data_Collected_Utilized_NJ_Law_Enforcement_Agencies.pdf?utm_source=chatgpt.com)

It was issued July 21, 2025 and covers the statewide 2024 audit. ([New Jersey Government][1])

---

### 50. Highest-value transportation source

The primary public camera source is:

[511NJ](https://www.511nj.org/?utm_source=chatgpt.com)

The authoritative supporting documentation is NJDOT's Traffic Operations Center page, which explicitly says NJDOT operates more than 250 traffic cameras. ([New Jersey Government][2])

---

### 51. Highest-value radio source

The primary statewide radio-system documentation is:

[NJICS P25 Participation Guide](https://nj.gov/njsp/njics/pdf/NJICS_P25_Participation_Application-2023_R4_GUIDE_08102023.pdf?utm_source=chatgpt.com)

The public audio discovery source is:

[Broadcastify New Jersey](https://status.broadcastify.com/listen/stid/34?utm_source=chatgpt.com)

---

### 52. Exact source registry

#### Transportation / cameras

| Source ID        | Source                                | Type             | Status |
| ---------------- | ------------------------------------- | ---------------- | ------ |
| `NJ-NJDOT`       | NJ Department of Transportation       | State DOT        | 🟢     |
| `NJ-511NJ`       | 511NJ                                 | State 511        | 🟢     |
| `NJ-NJDOT-CCTV`  | NJDOT traffic cameras                 | CCTV             | 🟢     |
| `NJ-NJTA-CCTV`   | NJ Turnpike Authority                 | Toll-road CCTV   | 🟢     |
| `NJ-SJTA`        | South Jersey Transportation Authority | Transportation   | 🟢     |
| `NJ-NJDOT-VIDEO` | NJDOT video-log system                | Historical video | 🟢     |

---

### 53. ALPR source registry

| Source ID              | Source                           | Type              | Status                 |
| ---------------------- | -------------------------------- | ----------------- | ---------------------- |
| `NJ-AG-ALPR`           | AG Directive 2022-12             | State ALPR policy | 🟢                     |
| `NJSP-ALPR-AUDIT-2024` | 2024 statewide audit             | ALPR audit        | 🟢                     |
| `NJ-ALPR-STATEWIDE`    | Statewide ALPR program           | Shared system     | 🟢                     |
| `NJ-ALPR-COORDINATORS` | Agency/county/state coordinators | Governance        | 🟢                     |
| `NJ-ALPR-VENDOR`       | Vendor inventory                 | Vendor metadata   | 🟡                     |
| `NJ-ALPR-LOCATIONS`    | Physical device locations        | GIS/inventory     | 🔴 not found statewide |

---

### 54. Radio source registry

| Source ID               | Source             | Type                | Status |
| ----------------------- | ------------------ | ------------------- | ------ |
| `NJ-NJICS`              | NJICS              | State P25           | 🟢     |
| `NJ-NJSP-RADIO`         | NJ State Police    | Public safety radio | 🟢     |
| `NJ-BROADCASTIFY`       | Broadcastify       | Scanner aggregator  | 🟢     |
| `NJ-BROADCASTIFY-CALLS` | Broadcastify Calls | Calls/SDR           | 🟡     |
| `NJ-COUNTY-SCANNERS`    | County feeds       | Public audio        | 🟢     |

---

### 55. What I found that we should **not** count as public

```text
CJIS / NJSP criminal-justice systems
    🔴 restricted

Raw ALPR plate-hit databases
    🔴 not public

Protected investigative records
    🔴 restricted

Private security-camera systems
    🔴 unless intentionally published

Signal-control camera data
    🟡 infrastructure exists, but not automatically public CCTV
```

NJSP confirms CJIS resources are for authorized criminal-justice personnel. ([New Jersey Government][17])

---

### 56. What still requires deeper extraction

New Jersey has several areas where **the source exists but the machine-readable endpoint still needs to be extracted**:

#### Camera API

```text
511NJ
   ↓
camera inventory
   ↓
current image
   ↓
HLS
```

The public site is confirmed; the current production API needs live network inspection.

#### NJTA

```text
Turnpike
Garden State Parkway
        ↓
camera inventory
        ↓
image/stream
```

Needs independent extraction.

#### ALPR

```text
523+ agencies
       ↓
agency
       ↓
device
       ↓
location
       ↓
vendor
```

The statewide audit establishes the program but not a ready-made public GIS layer.

#### Municipal

Needs systematic county/municipality research.

---

### 57. New Jersey overall score

| Category                       |           Rating |
| ------------------------------ | ---------------: |
| State traffic cameras          | 🟢 **Excellent** |
| Live public cameras            |               🟢 |
| Camera inventory               |               🟢 |
| Current machine API            |               🟡 |
| HLS evidence                   |               🟡 |
| NJDOT ITS documentation        |               🟢 |
| NJTA cameras                   |               🟢 |
| Municipal cameras              |               🟡 |
| ALPR statewide policy          | 🟢 **Excellent** |
| ALPR statewide standardization | 🟢 **Excellent** |
| ALPR audits                    | 🟢 **Excellent** |
| ALPR agency coverage           | 🟢 **Excellent** |
| ALPR coordinates               |               🔴 |
| ALPR vendor inventory          |               🟡 |
| Public raw ALPR                |               🔴 |
| Statewide P25                  | 🟢 **Excellent** |
| Scanner coverage               | 🟢 **Excellent** |
| County scanner coverage        |               🟢 |
| Public records mechanism       | 🟢 **Excellent** |

### Overall: **9.5 / 10**

#### Why New Jersey ranks so highly

New Jersey has something we haven't seen at this scale yet:

**a statewide ALPR governance/data architecture.**

The state Attorney General's directive establishes statewide coordinators and standardized ALPR data sharing, while the NJ State Police actually audits the participating agencies. The 2024 audit covered **523 agencies**. ([New Jersey Government][11])

At the same time, NJDOT officially operates **more than 250 traffic cameras**, and 511NJ provides public live traffic-camera access statewide. ([New Jersey Government][2])

And the radio side is exceptionally strong: **hundreds of public scanner feeds across all 21 counties**, alongside the official **NJICS P25 statewide radio system**. ([Broadcastify][14])

**New Jersey complete. Next alphabetically: New Mexico.**

[1]: https://nj.gov/njsp/ALPR/pdf/2024_Audit_Automated_License_Plate_Recognition_%28ALPR%29_Data_Collected_Utilized_NJ_Law_Enforcement_Agencies.pdf?utm_source=chatgpt.com "New Jersey 2024 Audit of Automated License Plate Recognition (ALPR) Data Collected and Utilized by Law Enforcement Agencies"
[2]: https://www.nj.gov/transportation/commuter/motoristassistance/toc.shtm?utm_source=chatgpt.com "Traffic Operations Centers, Motorist Assistance in New Jersey, Traveler Info"
[3]: https://www.nj.gov/transportation/commuter/motoristassistance/511nj.shtm?utm_source=chatgpt.com "511NJ Travel Information Services, Motorist Assistance in New Jersey, Traveler Info"
[4]: https://www.nj.gov/transportation/about/press/2008/062408.shtm?utm_source=chatgpt.com "New Jersey unveils new 511 phone system"
[5]: https://www.nj.gov/transportation/capital/cis/pdf/scis1221.pdf?utm_source=chatgpt.com "FY 2012-2021"
[6]: https://www.nj.gov/transportation/siteindex/?utm_source=chatgpt.com "NJDOT Site Index"
[7]: https://www.nj.gov/transportation/commuter/motoristassistance/faq.shtm?utm_source=chatgpt.com "Frequently Asked Questions, Rideshraing, Traveler Info"
[8]: https://dot.nj.gov/transportation/business/videolog/request.shtm?utm_source=chatgpt.com "Video Log Request Form, Traffic Camera Video Log Request, Doing Business"
[9]: https://stackoverflow.com/questions/72418097/hls-stream-onetimepassword-gethlstoken-from-511nj-org?utm_source=chatgpt.com "http - HLS Stream OneTimePassword (GetHLSToken from 511nj.org) - Stack Overflow"
[10]: https://www.nj.gov/transportation/about/directory/northregion.shtm?utm_source=chatgpt.com "North Region, Directory, About NJDOT"
[11]: https://www.nj.gov/oag/dcj/agguide/directives/ag-Directive-2022-12_Updated-Directive-Regulating-Use-of-Automated-License-Plate-Recognition-%28ALPR%29-Technology.pdf?utm_source=chatgpt.com "State of New Jersey"
[12]: https://www.nj.gov/grc/act.html?utm_source=chatgpt.com "Open Public Records Act"
[13]: https://www.nj.gov/transportation/refdata/opra/?utm_source=chatgpt.com "Open Public Records Act (OPRA), Reference/Links"
[14]: https://status.broadcastify.com/listen/stid/34?utm_source=chatgpt.com "New Jersey Audio Feeds"
[15]: https://status.broadcastify.com/listen/stid/34/publicsafety?utm_source=chatgpt.com "New Jersey Audio Feeds"
[16]: https://nj.gov/njsp/njics/pdf/NJICS_P25_Participation_Application-2023_R4_GUIDE_08102023.pdf?utm_source=chatgpt.com "GUIDEState of New Jersey"
[17]: https://www.nj.gov/njsp/division/administration/identification-information-technology.shtml?utm_source=chatgpt.com "Identification & Information Technology Section | New Jersey State Police"
