---
state: New Mexico
usps: NM
slug: new-mexico
dossier_number: 31
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
  imported_from: project_atlas_state_data/New Mexico.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# New Mexico (NM) - ATLAS State Record

> Dossier **31 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

New Mexico is another **high-value state**, but for a different reason than New Jersey.

The strongest findings are:

* **NMRoads/NMDOT has a real public statewide camera system**
* the underlying camera service exposes a **machine-readable camera inventory endpoint**
* the camera system provides public still images
* NMDOT documentation explicitly says the CCTV feeds are distributed to NMRoads and third parties
* New Mexico has a statewide **P25 Phase II DTRS radio network**
* there are **93 Broadcastify feeds** currently listed statewide
* New Mexico State Police now operates a significant statewide **LPR program**
* approximately **112 LPR camera systems** were projected after the FY2026 appropriation
* New Mexico enacted the **Driver Privacy and Safety Act**, effective July 1, 2026, which creates a particularly important public reporting mechanism for ALPR
* municipal ALPR programs such as Rio Rancho and Los Alamos can be separately identified.

---

### 1. New Mexico Department of Transportation

The primary transportation agency is:

**New Mexico Department of Transportation — NMDOT.**

NMDOT's official maps page specifically directs users to NMRoads for:

* road conditions
* traffic cameras
* dynamic message signs
* traffic
* weather
* construction
* transit/rest-area information. ([New Mexico Department of Transportation][1])

#### Registry

```text
SOURCE_ID:
    NM-NMDOT

OWNER:
    New Mexico Department of Transportation

TYPE:
    STATE_TRANSPORTATION

STATUS:
    🟢 VERIFIED
```

---

### 2. NMRoads

The primary public transportation data portal is:

[NMRoads — Official New Mexico Road Advisory System](https://www.nmroads.com/?utm_source=chatgpt.com)

NMRoads describes itself as the official road advisory system for New Mexico and provides:

* cameras
* RWIS cameras
* DMS
* road conditions
* construction
* traffic conditions
* travel times
* weather
* rest areas.



#### Registry

```text
SOURCE_ID:
    NM-NMROADS

TYPE:
    STATE_511_TRAVELER_INFORMATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 3. NMRoads camera inventory

NMRoads explicitly defines a normal camera as:

> permanent roadside camera installations that allow observing traffic and road conditions.

It separately defines RWIS cameras as cameras installed with weather stations. 

That gives us two distinct ATLAS device classes:

```text
NM_CAMERA
    ├── TRAFFIC_CCTV
    └── RWIS_CCTV
```

Do **not** merge them.

---

### 4. Public live camera feeds

NMRoads' official user guide states that the application provides:

**real-time camera feeds**

from locations throughout the state. ([NM Roads][2])

NMDOT's own CCTV documentation is even stronger.

It states that NMDOT CCTV provides:

* real-time streaming
* still images
* roadway conditions
* weather conditions
* traffic conditions.

It also explicitly states that the feeds are delivered through NMRoads for public viewing. ([RealFile][3])

#### Status

```text
LIVE_VIDEO:
    🟢 VERIFIED

PUBLIC_STILLS:
    🟢 VERIFIED

PUBLIC_WEB_ACCESS:
    🟢 VERIFIED
```

---

### 5. Exact camera API discovered

This is one of the most important findings in New Mexico.

The NMRoads backend exposes:

```text
https://servicev4.nmroads.com/RealMapWAR/GetCameraInfo
```

A public Waze DOT-camera integration script identifies this endpoint as the New Mexico camera-information source and parses the returned:

```text
cameraInfo
```

array.

([Greasy Fork][4])

This is precisely the kind of source ATLAS is looking for.

#### Registry

```text
SOURCE_ID:
    NM-NMROADS-CAMERA-INFO

ENDPOINT:
    servicev4.nmroads.com/RealMapWAR/GetCameraInfo

TYPE:
    CAMERA_INVENTORY_API

FORMAT:
    JSON

STATUS:
    🟢 VERIFIED DISCOVERY
```

---

### 6. Camera inventory fields

The discovered integration demonstrates that camera records contain at least:

```text
name
title
lat
lon
```

The integration maps:

```text
obj.name
obj.title
obj.lat
obj.lon
```

into its camera representation. ([Greasy Fork][4])

Therefore the NMRoads inventory appears to expose enough information for ATLAS to create canonical camera records without scraping map pixels.

---

### 7. Exact public image endpoint

The same integration identifies the NMRoads image endpoint:

```text
https://servicev4.nmroads.com/RealMapWAR/GetCameraImage?ts=0&cameraName={CAMERA_NAME}&{timestamp}
```

([Greasy Fork][4])

This is extremely valuable.

ATLAS can conceptually do:

```text
GET CAMERA INVENTORY
        ↓
cameraInfo[]
        ↓
camera.name
        ↓
GetCameraImage
        ↓
CURRENT IMAGE
```

#### Registry

```text
SOURCE_ID:
    NM-NMROADS-CAMERA-IMAGE

ENDPOINT:
    servicev4.nmroads.com/RealMapWAR/GetCameraImage

TYPE:
    LIVE_CAMERA_STILL

STATUS:
    🟢 VERIFIED DISCOVERY
```

---

### 8. Important qualification about the API

The exact endpoints above are **discovered production endpoints**, not a formal NMDOT developer API specification.

That distinction matters.

```text
OFFICIAL PUBLIC WEBSITE:
    🟢

OFFICIAL NMDOT CCTV DOCUMENTATION:
    🟢

PUBLIC MACHINE ENDPOINT:
    🟢

OFFICIAL DEVELOPER API DOCUMENTATION:
    🔴 NOT FOUND
```

So the endpoint should be classified as:

**public operational endpoint**, rather than "official developer API."

---

### 9. Camera count

The current NMRoads interface does not expose a clean authoritative statewide camera-count statement in the pages I found.

However, the current ecosystem is substantially larger than the old mobile-app description.

An older NMRoads application description stated:

> live camera views at over 70 locations.

([App Store][5])

A current third-party extraction of NMRoads reports roughly **183 cameras**, but that number is not an NMDOT-published official inventory count, so **do not treat 183 as authoritative**. ([Wasatch Roads][6])

For ATLAS:

```text
OFFICIAL_CURRENT_COUNT:
    NOT CONFIRMED

DISCOVERABLE_INVENTORY:
    🟢 YES

THIRD_PARTY_ESTIMATE:
    ~183
```

---

### 10. NMDOT CCTV technical documentation

NMDOT has an unusually useful official CCTV technical sheet.

It states that the CCTV system provides:

```text
REAL-TIME IMAGES
STREAMING VIDEO
STILL IMAGES
```

and that video/images are used by:

* NMDOT RTMC
* NMRoads
* District TOCs
* local transportation agencies
* responders
* third-party travel sites
* media. ([RealFile][3])

That last part is important.

It means NMDOT intentionally distributes this information beyond its own website.

---

### 11. NMDOT CCTV is not recorded

The NMDOT technical sheet explicitly says:

> Video streams are not recorded.

([RealFile][3])

Therefore:

```text
NM-NMDOT-CCTV
    LIVE:
        🟢

PUBLIC:
        🟢

HISTORICAL_VIDEO_ARCHIVE:
        🔴
```

This is an important distinction from states that retain traffic-camera recordings.

---

### 12. CCTV operational control

NMDOT says its ITS Bureau manages:

* pan
* tilt
* zoom
* camera orientation.

RTMC personnel can change orientation/settings at the request of the district. ([RealFile][3])

So these are actual operational CCTV systems, not merely fixed image sensors.

---

### 13. NMRoads third-party distribution

The official NMDOT CCTV sheet says the feeds are shared with:

```text
District TOCs
local entities
responders
third-party travel sites
media
```

([RealFile][3])

This makes New Mexico particularly attractive for **secondary source discovery**.

There may be third-party applications that consume the same NMRoads feeds.

But ATLAS should use the NMRoads source as the authoritative provenance.

---

### 14. NMDOT ArcGIS

NMDOT's maps page links to its:

**ArcGIS Online hosted NMDOT Public Map Gallery.**

([New Mexico Department of Transportation][1])

This should be registered as a separate discovery source.

```text
SOURCE_ID:
    NM-NMDOT-ARCGIS

TYPE:
    ARCGIS_PUBLIC_MAPS

STATUS:
    🟢 VERIFIED
```

However, I have **not yet confirmed that the current ArcGIS gallery contains the operational NMRoads camera inventory**.

Do not assume that it does.

---

### 15. NMRoads mobile system

NMRoads also has:

[NMRoads mobile site](https://m.nmroads.com/?utm_source=chatgpt.com)

The mobile interface explicitly includes:

```text
Map
Road Conditions
Cameras
Message Signs
Construction
Weather
Transit
Rest Areas
```

([NM Roads][7])

This is another frontend that may expose useful API calls.

---

### 16. NMRoads application

NMDOT also distributes an NMRoads mobile application.

The official App Store listing says the application provides:

* interactive map
* live camera views
* DMS
* travel times
* crash alerts
* road closures.

It identifies the developer as the New Mexico Department of Transportation. ([App Store][5])

This is useful because mobile applications frequently reveal the same backend services as the web application.

---

### 17. RWIS cameras

NMRoads explicitly separates:

```text
ALL CAMERAS
RWIS CAMERAS
```

on the public map. 

A RWIS camera should therefore be stored as:

```text
DEVICE_CLASS:
    RWIS_CAMERA
```

with an associated:

```text
WEATHER_STATION:
    YES
```

when the underlying source confirms it.

---

### 18. Dynamic Message Signs

NMRoads also exposes:

```text
DYNAMIC MESSAGE SIGNS
```

as a separate infrastructure class. 

ATLAS should therefore support:

```text
NMDOT
├── CCTV
├── RWIS
├── DMS
├── Traffic Signals
├── Traffic Counts
└── Travel Time
```

rather than treating the system as cameras-only.

---

### 19. Traffic monitoring / AI cameras

This is another interesting discovery.

NMDOT's 2025–2026 planning work program includes:

**Traffic Monitoring/Count Program — Video/AI**

and estimates:

### **40 new cameras**

to be installed along interstates. ([RealFile][8])

These are not necessarily public traffic-view cameras.

They are specifically associated with:

```text
traffic data collection
video/AI
traffic monitoring
```

Therefore they belong in:

```text
VIDEO_ANALYTICS
```

rather than automatically being classified as:

```text
PUBLIC_CCTV
```

---

### 20. Critical distinction — public CCTV vs AI counters

New Mexico therefore has at least two different video infrastructures:

#### A. Public roadway CCTV

```text
NMRoads
public
live
traffic observation
```

#### B. Video/AI traffic counters

```text
traffic monitoring
vehicle counting/classification
possibly private/backend
```

Do not merge them.

---

### 21. Statewide police radio

New Mexico has an excellent statewide radio source:

### **New Mexico Digital Trunked Radio System — DTRS**

The official New Mexico Department of Information Technology says DTRS is:

* 700/800 MHz
* Project 25
* Phase II
* digital trunked
* statewide
* used by state, federal, tribal and local agencies.

([NMDIT][9])

#### Registry

```text
SOURCE_ID:
    NM-DTRS

OWNER:
    New Mexico Department of Information Technology

TYPE:
    STATEWIDE_P25_TRUNKED_RADIO

STANDARD:
    P25 PHASE II

BANDS:
    700 / 800 MHz

STATUS:
    🟢 VERIFIED
```

---

### 22. DTRS current scale

The official DoIT page, updated with April 2026 figures, reports:

```text
101 sites online
65% geographic mobile coverage
60+ agencies
~1.8 million calls/month
```

([NMDIT][9])

A newer April 2026 state announcement reports:

```text
100+ tower sites
~80% statewide coverage
23,274 subscribers
90+ agencies
```

([NMDIT][10])

These numbers appear to reflect ongoing expansion.

Therefore the later April 2026 announcement should be considered the more current statewide status.

---

### 23. DTRS agency coverage

The state says DTRS serves:

* state agencies
* federal agencies
* tribal agencies
* local agencies
* judicial agencies
* legislative agencies.

([NMDIT][9])

This makes DTRS an extremely valuable statewide radio-system registry.

---

### 24. DTRS public technical source

The state maintains an official DTRS site:

[New Mexico DTRS official site](https://radio.doit.nm.gov/index?utm_source=chatgpt.com)

The site identifies the system as:

```text
700/800 MHz
P25 Phase II
statewide
```

and provides system information. ([Do It Radio][11])

This should be a Tier-1 source.

---

### 25. Public scanner feeds

Broadcastify currently lists:

### **93 New Mexico feeds**

in its statewide directory.

The public-safety listing reports:

### **81 audio feeds across 26 counties**

with the category breakdown showing public-safety feeds plus other radio categories. ([Broadcastify][12])

The statewide listing is dynamic, so counts should be timestamped.

#### Registry

```text
SOURCE_ID:
    NM-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

CURRENT_TOTAL:
    93

PUBLIC_SAFETY:
    81

STATUS:
    🟢 VERIFIED
```

---

### 26. County scanner coverage

The current public-safety listing shows coverage across 26 counties.

Examples include:

```text
Bernalillo
Chaves
Colfax
Curry
De Baca
Eddy
Grant
Guadalupe
Harding
Lea
Lincoln
Los Alamos
Luna
Mora
Otero
Quay
Rio Arriba
Roosevelt
San Juan
San Miguel
Sandoval
Santa Fe
Sierra
Torrance
Union
Valencia
```

([Broadcastify][12])

This is substantial coverage.

---

### 27. Broadcastify should not be confused with DTRS

Important architecture distinction:

```text
NM-DTRS
    =
actual radio network

Broadcastify
    =
public audio retransmission layer
```

Broadcastify is therefore an **audio source**, not the radio system itself.

---

### 28. Broadcastify archives

Individual feeds can expose current/archived audio metadata.

For example, the USFS Cibola/Santa Fe feed exposes feed status and archive intervals. ([Broadcastify][13])

However, some direct/static audio URLs and longer archive capabilities may require Broadcastify Premium.

Therefore:

```text
LIVE_PUBLIC_AUDIO:
    🟢

PUBLIC_FEED_METADATA:
    🟢

FULL_ARCHIVE_ACCESS:
    🟡 / subscription-dependent
```

---

### 29. New Mexico ALPR — major discovery

New Mexico's ALPR situation has changed significantly in 2026.

The New Mexico Department of Public Safety reports that:

### License Plate Reader cameras were installed beginning in July 2024.

The system has continued expanding statewide. ([NM Department of Public Safety][14])

#### Registry

```text
SOURCE_ID:
    NM-NMSP-LPR

OWNER:
    New Mexico Department of Public Safety /
    New Mexico State Police

TYPE:
    STATEWIDE_LPR

DEPLOYMENT:
    FIXED + MOBILE

INITIAL_INSTALL:
    JULY 2024

STATUS:
    🟢 VERIFIED
```

---

### 30. NMSP LPR is actively used

NMDPS states that the system has been used for:

* stolen vehicles
* missing persons
* kidnapping investigations
* homicide investigations
* officer safety
* vehicle identification.

([NM Department of Public Safety][14])

This confirms that the system is operational, not merely planned.

---

### 31. LPR can be fixed or mobile

New Mexico's legislation defines ALPR broadly enough to include devices:

```text
law-enforcement vehicles
street poles
highway overpasses
mobile trailers
```

and associated vehicle/plate data. ([New Mexico Legislature][15])

This is exactly the distinction ATLAS needs.

```text
ALPR
├── FIXED
├── VEHICLE
└── MOBILE_TRAILER
```

---

### 32. Statewide LPR quantity

The New Mexico Legislature's FY2026 analysis for the LPR appropriation gives us an unusually valuable number.

The analysis says NMDPS's existing LPR system costs approximately:

```text
$10,306
```

for a two-camera setup including one year of software/warranty.

Installation was estimated at approximately:

```text
$30,000
```

per deployment.

The proposed $1 million appropriation could fund approximately:

### 24 additional two-camera systems.

The analysis states that this would bring NMDPS to approximately:

### **112 LPR camera systems statewide.**

([New Mexico Legislature][16])

#### Registry

```text
SOURCE_ID:
    NM-NMDPS-LPR-INVENTORY

ESTIMATED_SYSTEMS:
    ~112

TYPE:
    STATE_LPR

STATUS:
    🟢 OFFICIAL LEGISLATIVE ESTIMATE
```

**Important:** this is an official budget-analysis estimate, not a live GIS inventory.

---

### 33. LPR data retention

NMDPS stated in March 2026 that:

### **LPR data is retained for 180 days**

unless associated with an ongoing investigation. Non-investigative data is then purged. ([NM Department of Public Safety][14])

This should be stored as metadata:

```text
RETENTION:
    180 DAYS

EXCEPTION:
    ACTIVE INVESTIGATION
```

---

### 34. LPR raw data is NOT public

The new New Mexico Driver Privacy and Safety Act is very important here.

The law took effect:

### **July 1, 2026**

and regulates ALPR information sharing. ([New Mexico Legislature][15])

The law treats ALPR information as protected/confidential rather than ordinary public records, while creating reporting requirements.

Therefore:

```text
RAW_LPR_HITS:
    🔴 NOT PUBLIC

PUBLIC_LPR_METADATA:
    🟢 POSSIBLE

PUBLIC_LPR_REPORTS:
    🟢 REQUIRED
```

---

### 35. Annual/periodic ALPR reporting — extremely important

The enacted Driver Privacy and Safety Act requires reporting concerning ALPR use.

The legislation provides for DPS to aggregate reporting data and make it publicly available. ([New Mexico Legislature][15])

This potentially gives ATLAS a new official source:

```text
AGENCY
    ↓
ALPR REPORT
    ↓
DPS AGGREGATION
    ↓
PUBLIC DATA
```

This is one of the most important New Mexico discoveries.

---

### 36. What the ALPR reports contain

The 2026 New Mexico legislation specifies reporting information relating to ALPR users and their use.

The reporting framework is intended to provide public visibility without releasing the underlying plate-location database.

That means ATLAS should target:

```text
camera/system counts
query totals
agency information
authorized users/access
sharing information
violations/incidents
```

rather than plate-level records.

---

### 37. New Mexico ALPR law is especially useful for ATLAS

This creates a clean distinction:

```text
PRIVATE / RESTRICTED
    plate-level observations
    GPS history
    raw vehicle images

PUBLIC / TARGET
    agency reports
    system counts
    usage statistics
    aggregate information
```

This is exactly the type of information we want.

---

### 38. New Mexico State Police LPR program

NMSP is explicitly identified by DPS as using the LPR program.

NMSP officials describe LPR as a statewide public-safety infrastructure that continues to grow. ([NM Department of Public Safety][14])

#### Registry

```text
SOURCE_ID:
    NM-NMSP-LPR

AGENCY:
    New Mexico State Police

STATUS:
    🟢 ACTIVE
```

---

### 39. Commercial Vehicle Enforcement ALPR

New Mexico DPS has an older, separate ALPR policy for its Commercial Vehicle Enforcement Bureau.

The official policy describes ALPRs used to:

* identify commercial vehicles
* check safety violations
* check stolen vehicles
* check regulatory violations
* check BOLOs
* query NCIC
* query MCMIS
* query PRISM.

([NM Department of Public Safety][17])

This is a separate historical/operational ALPR source.

#### Registry

```text
SOURCE_ID:
    NM-DPS-CVE-LPR

OWNER:
    Commercial Vehicle Enforcement Bureau

TYPE:
    COMMERCIAL_VEHICLE_LPR

STATUS:
    🟢 VERIFIED
```

---

### 40. Older ALPR policy

The DPS policy is dated:

```text
April 9, 2018
```

and describes the ALPR program as a function of the Commercial Vehicle Enforcement Bureau. ([NM Department of Public Safety][17])

Because the state has since deployed a broader NMSP LPR system, do **not** assume the 2018 system is identical to the current statewide deployment.

Store it historically:

```text
NM-DPS-CVE-LPR-2018
```

---

### 41. Municipal ALPR — Rio Rancho

Rio Rancho Police Department currently identifies its ALPR provider as:

### **Flock Safety**

The city's current information says the system retains data for:

### **30 days**

unless preserved for evidentiary purposes.

([Rio Rancho Official Site][18])

#### Registry

```text
SOURCE_ID:
    NM-RIO-RANCHO-ALPR

AGENCY:
    Rio Rancho Police Department

VENDOR:
    Flock Safety

RETENTION:
    30 DAYS

STATUS:
    🟢 VERIFIED
```

This is an excellent example of why state-level research alone is insufficient.

---

### 42. Rio Rancho ALPR public source

Rio Rancho maintains a dedicated public ALPR information page.

This is exactly the type of municipal source ATLAS should ingest:

```text
CITY
    ↓
POLICE DEPARTMENT
    ↓
ALPR PROGRAM
    ↓
VENDOR
    ↓
POLICY
    ↓
RETENTION
```

([Rio Rancho Official Site][18])

---

### 43. Los Alamos ALPR

Los Alamos County Police Department also publicly documents its ALPR program.

The city's page states that it has:

* a current Axon ALPR contract/system;
* previously used a Motorola-based system;
* encrypted CJIS-compliant storage;
* law-enforcement access controls.

([Los Alamos, NM][19])

#### Registry

```text
SOURCE_ID:
    NM-LOS-ALAMOS-ALPR

AGENCY:
    Los Alamos County Police Department

CURRENT_VENDOR:
    Axon

PREVIOUS_SYSTEM:
    Motorola

STATUS:
    🟢 VERIFIED
```

This gives us evidence of **vendor migration**, which is useful when reconstructing historical infrastructure.

---

### 44. ALPR vendor diversity

New Mexico therefore already demonstrates at least:

```text
NMSP / NMDPS
    statewide LPR

Rio Rancho
    Flock

Los Alamos
    Axon
    previously Motorola

DPS Commercial Vehicle Enforcement
    historical/legacy system
```

So again:

**do not classify the entire state as a single ALPR vendor.**

---

### 45. New Mexico IPRA

The New Mexico Inspection of Public Records Act — IPRA — provides another source-discovery mechanism.

NMDPS explicitly provides an IPRA request system and online public-records request portal. ([NM Department of Public Safety][20])

#### Registry

```text
SOURCE_ID:
    NM-IPRA

TYPE:
    PUBLIC_RECORDS_ACCESS

STATUS:
    🟢 VERIFIED
```

---

### 46. IPRA and ALPR — important change

Historically, ALPR records might have been requested under IPRA depending on agency policy and applicable exemptions.

The new 2026 Driver Privacy and Safety Act changes this landscape.

ALPR information is now protected from ordinary public-record disclosure under the new framework. ([Los Alamos, NM][19])

Therefore:

```text
ALPR RAW DATA REQUEST:
    🔴

ALPR AGGREGATE REPORT:
    🟢

ALPR POLICY:
    🟢

ALPR PROCUREMENT:
    🟢 potentially

ALPR PUBLIC SYSTEM COUNT:
    🟢 via reporting
```

---

### 47. Criminal-justice systems

New Mexico DPS is the state's designated CJIS Systems Agency and operates statewide criminal-justice information infrastructure.

The department says it serves roughly:

### **1,000 criminal-justice agencies**

and handles systems involving:

* criminal history
* fingerprints
* missing persons
* sex offender registration
* citations
* criminal-justice information sharing.

([NM Department of Public Safety][21])

These are **not public data sources**.

They should remain outside ATLAS.

---

### 48. What NOT to ingest

```text
NM-CJIS
    🔴 restricted

NCIC
    🔴 restricted

MCMIS
    🔴 restricted

PRISM
    🔴 restricted

raw LPR plate-hit databases
    🔴 restricted

private police investigative systems
    🔴 restricted
```

The 2018 DPS ALPR policy itself confirms the ALPR system interfaces with NCIC, MCMIS and PRISM. ([NM Department of Public Safety][17])

That does **not** make those systems public.

---

### 49. New Mexico camera architecture

The current architecture should be represented as:

```text
NEW MEXICO
│
├── NMDOT
│   ├── NMRoads
│   │   ├── Traffic CCTV
│   │   ├── RWIS Cameras
│   │   ├── DMS
│   │   ├── Traffic Counts
│   │   └── Traffic Conditions
│   │
│   └── ArcGIS Public Map Gallery
│
├── STATE POLICE / DPS
│   ├── LPR
│   └── Commercial Vehicle LPR
│
├── MUNICIPAL
│   ├── Rio Rancho / Flock
│   ├── Los Alamos / Axon
│   └── other agencies
│
└── RADIO
    ├── DTRS P25
    └── public scanner feeds
```

---

### 50. Exact machine-readable camera chain

This is the important part for the actual ingestion engine.

```text
https://servicev4.nmroads.com/RealMapWAR/GetCameraInfo
                    │
                    ▼
              cameraInfo[]
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
      name         lat          lon
       │
       ▼
GetCameraImage
       │
       ▼
CURRENT PUBLIC IMAGE
```

The endpoints are documented by a public integration that consumes NMRoads camera data. ([Greasy Fork][4])

This should be considered a **real source discovery**, not an inferred endpoint.

---

### 51. NMRoads camera source record

Recommended ATLAS source:

```json
{
  "source_id": "NM-NMROADS-CAMERA-INFO",
  "state": "NM",
  "owner": "New Mexico Department of Transportation",
  "program": "NMRoads",
  "type": "camera_inventory",
  "endpoint": "https://servicev4.nmroads.com/RealMapWAR/GetCameraInfo",
  "record_format": "JSON",
  "public": true,
  "authentication": false,
  "confidence": "high"
}
```

And:

```json
{
  "source_id": "NM-NMROADS-CAMERA-IMAGE",
  "parent_source": "NM-NMROADS-CAMERA-INFO",
  "type": "camera_still",
  "endpoint_pattern": "https://servicev4.nmroads.com/RealMapWAR/GetCameraImage",
  "public": true,
  "authentication": false,
  "confidence": "high"
}
```

---

### 52. ALPR source registry

| Source ID                | Source                                | Type               | Status |
| ------------------------ | ------------------------------------- | ------------------ | ------ |
| `NM-NMSP-LPR`            | NMSP statewide LPR                    | State ALPR         | 🟢     |
| `NM-NMDPS-LPR-INVENTORY` | DPS LPR deployment estimate           | Inventory metadata | 🟢     |
| `NM-DPS-CVE-LPR`         | Commercial Vehicle Enforcement LPR    | ALPR               | 🟢     |
| `NM-RIO-RANCHO-ALPR`     | Rio Rancho                            | Municipal ALPR     | 🟢     |
| `NM-LOS-ALAMOS-ALPR`     | Los Alamos                            | Municipal ALPR     | 🟢     |
| `NM-ALPR-REPORTING`      | Driver Privacy & Safety Act reporting | Aggregate ALPR     | 🟢     |
| `NM-ALPR-RAW`            | Raw plate observations                | Restricted         | 🔴     |

---

### 53. Camera source registry

| Source ID                 | Type                        | Status |
| ------------------------- | --------------------------- | ------ |
| `NM-NMROADS`              | State traveler information  | 🟢     |
| `NM-NMROADS-CAMERA-INFO`  | Camera inventory API        | 🟢     |
| `NM-NMROADS-CAMERA-IMAGE` | Public still endpoint       | 🟢     |
| `NM-NMDOT-CCTV`           | NMDOT CCTV                  | 🟢     |
| `NM-NMDOT-RWIS`           | RWIS cameras                | 🟢     |
| `NM-NMDOT-DMS`            | Dynamic message signs       | 🟢     |
| `NM-NMDOT-ARCGIS`         | ArcGIS map gallery          | 🟢     |
| `NM-NMDOT-VIDEO-AI`       | Video/AI traffic monitoring | 🟡     |

---

### 54. Radio source registry

| Source ID               | Source                    | Type                 | Status |
| ----------------------- | ------------------------- | -------------------- | ------ |
| `NM-DTRS`               | New Mexico DTRS           | P25 Phase II         | 🟢     |
| `NM-DTRS-SITES`         | DTRS tower infrastructure | Radio infrastructure | 🟢     |
| `NM-DTRS-TALKGROUPS`    | DTRS talkgroups           | Radio metadata       | 🟡     |
| `NM-BROADCASTIFY`       | Public scanner feeds      | Audio                | 🟢     |
| `NM-BROADCASTIFY-CALLS` | Calls/audio archive       | Audio                | 🟡     |

---

### 55. Most important exact URLs

#### NMRoads

[NMRoads](https://www.nmroads.com/?utm_source=chatgpt.com)

#### NMRoads mobile

[NMRoads Mobile](https://m.nmroads.com/?utm_source=chatgpt.com)

#### NMDOT maps

[NMDOT Maps](https://www.dot.nm.gov/travel-information/maps/?utm_source=chatgpt.com)

#### NMDOT CCTV technical sheet

[NMDOT CCTV Technical Sheet](https://api.realfile.rtsclients.com/PublicFiles/f260a66b364d453e91ff9b3fedd494dc/78c213a8-e534-4d9a-a7f6-0c4ae04909b1/NMDOT%20CCTV%20Camera%20Tech%20Sheet.pdf?utm_source=chatgpt.com)

#### New Mexico DTRS

[New Mexico DTRS](https://radio.doit.nm.gov/index?utm_source=chatgpt.com)

#### Broadcastify New Mexico

[Broadcastify New Mexico feeds](https://status.broadcastify.com/listen/stid/35/publicsafety?utm_source=chatgpt.com)

#### New Mexico DPS LPR information

[NMDPS LPR program information](https://www.dps.nm.gov/blog/2026/03/03/13009/?utm_source=chatgpt.com)

#### Rio Rancho ALPR

[Rio Rancho ALPR information](https://www.rrnm.gov/5071/Automated-License-Plate-Readers-ALPRs?utm_source=chatgpt.com)

#### Los Alamos ALPR

[Los Alamos ALPR information](https://www.losalamosnm.gov/Government/Departments-offices/Police-Department/Automated-License-Plate-Readers-ALPRs?utm_source=chatgpt.com)

---

### 56. Overall New Mexico assessment

| Category                          |           Rating |
| --------------------------------- | ---------------: |
| State traffic cameras             | 🟢 **Excellent** |
| Machine-readable camera inventory | 🟢 **Excellent** |
| Public camera images              | 🟢 **Excellent** |
| Public video documentation        |               🟢 |
| NMRoads coverage                  |               🟢 |
| RWIS cameras                      |               🟢 |
| DMS                               |               🟢 |
| ArcGIS support                    |               🟢 |
| Statewide ALPR                    | 🟢 **Excellent** |
| ALPR public reporting             | 🟢 **Excellent** |
| ALPR raw data                     |    🔴 restricted |
| ALPR locations                    |               🟡 |
| ALPR vendor data                  |               🟡 |
| Municipal ALPR                    |               🟢 |
| Statewide P25                     | 🟢 **Excellent** |
| Scanner coverage                  |               🟢 |
| IPRA discovery                    |               🟢 |

### **Overall: 9.4 / 10**

#### The three most valuable discoveries

### **1. NMRoads has an actual camera API**

```text
GetCameraInfo
        ↓
cameraInfo[]
        ↓
name / lat / lon
        ↓
GetCameraImage
        ↓
live public image
```

That is directly useful for the ingestion engine. ([Greasy Fork][4])

### **2. New Mexico now has a statewide LPR reporting framework**

The Driver Privacy and Safety Act became effective **July 1, 2026**, while requiring reporting/aggregation of ALPR usage information. ([New Mexico Legislature][15])

That gives us a future **official aggregate ALPR data source**, even though raw plate data is protected.

### **3. The statewide radio system is a real P25 Phase II network**

The official DTRS system is operated by New Mexico DoIT and connects state, federal, tribal and local agencies. The April 2026 state announcement puts it at **100+ tower sites, about 80% statewide coverage, and more than 90 agencies**. ([NMDIT][9])

**New Mexico is complete. Next alphabetically: New York.**

[1]: https://www.dot.nm.gov/travel-information/maps/?utm_source=chatgpt.com "Maps - NMDOT"
[2]: https://new.nmroads.com/NMRoadsPublicUserGuide.pdf?utm_source=chatgpt.com "NMRoads: The Official Road Advisory System for the State of"
[3]: https://api.realfile.rtsclients.com/PublicFiles/f260a66b364d453e91ff9b3fedd494dc/78c213a8-e534-4d9a-a7f6-0c4ae04909b1/NMDOT%20CCTV%20Camera%20Tech%20Sheet.pdf?utm_source=chatgpt.com "CCTV Camera Tech Sheet"
[4]: https://greasyfork.org/fil/scripts/407690-wme-dot-cameras/code?utm_source=chatgpt.com "WME DOT Cameras - Source code"
[5]: https://apps.apple.com/us/app/nmroads/id500766829?utm_source=chatgpt.com "‎NMRoads App - App Store"
[6]: https://wasatchroads.com/nmdot-cameras?utm_source=chatgpt.com "New Mexico DOT Cameras — Live Albuquerque, I-25 & I-40 Traffic Map"
[7]: https://m.nmroads.com/?utm_source=chatgpt.com "NMRoads"
[8]: https://api.realfile.rtsclients.com/PublicFiles/f260a66b364d453e91ff9b3fedd494dc/0eb13fa7-89c2-49cc-99f0-f0df1a5a1d17/Current%20FFY%202025-2026%20Planning%20Work%20Program%20As%20Amended.pdf?utm_source=chatgpt.com "NMDOT FFY2025/2026 Planning Work Program"
[9]: https://www.doit.nm.gov/programs/public-safety-radio?utm_source=chatgpt.com "Public Safety Radio Communications | New Mexico DoIT"
[10]: https://www.doit.nm.gov/newsroom/new-mexico-fully-funds-first-responder-radio-network-100004460?utm_source=chatgpt.com "New Mexico fully funds first responder radio network - Department of Information Technology | New Mexico DoIT"
[11]: https://radio.doit.nm.gov/index?utm_source=chatgpt.com "index [State of New Mexico Digital Trunked Radio System]"
[12]: https://status.broadcastify.com/listen/stid/35/publicsafety?utm_source=chatgpt.com "New Mexico Audio Feeds"
[13]: https://status.broadcastify.com/listen/feed/746?utm_source=chatgpt.com "USFS Cibola and Santa Fe National Forests"
[14]: https://www.dps.nm.gov/blog/2026/03/03/13009/?utm_source=chatgpt.com "License Plate Readers save lives; lead to ‘precise policing’: On anniversary of Officer Justin Hare’s ‘execution’ by Jaremy Smith, state reflects on how LPR technology could have saved his life - NM Department of Public Safety"
[15]: https://www.nmlegis.gov/Sessions/26%20Regular/bills/senate/SB0040JUS.HTML?utm_source=chatgpt.com "SB0040JUS"
[16]: https://www.nmlegis.gov/sessions/25%20Regular/AgencyAnalysis/HB0127_790.pdf?utm_source=chatgpt.com "LICENSE PLATE READERS FUNDING"
[17]: https://www.dps.nm.gov/wp-content/uploads/2022/07/OPR.50-Automatic-License-Plate-Readers-040918.pdf?utm_source=chatgpt.com "DEPARTMENT OF PUBLIC SAFETY"
[18]: https://www.rrnm.gov/5071/Automated-License-Plate-Readers?utm_source=chatgpt.com "Automated License Plate Readers | The Official Site of Rio Rancho, NM"
[19]: https://www.losalamosnm.gov/Government/Departments-offices/Police-Department/Automated-License-Plate-Readers-ALPRs?utm_source=chatgpt.com "Automated License Plate Readers (ALPRs) - Incorporated County of Los Alamos, NM"
[20]: https://www.dps.nm.gov/law-enforcement-records-bureau/?utm_source=chatgpt.com "Law Enforcement Records Bureau - NM Department of Public Safety"
[21]: https://www.dps.nm.gov/blog/2026/07/30/14338/?utm_source=chatgpt.com "Modernizing New Mexico’s Criminal Justice Information Systems - NM Department of Public Safety"
