---
state: New York
usps: NY
slug: new-york
dossier_number: 32
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
  imported_from: project_atlas_state_data/New York.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# New York (NY) - ATLAS State Record

> Dossier **32 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

New York is one of the **strongest states found so far** for this project.

The major difference from some earlier states is that New York has a very mature, centralized **511NY data-distribution system**. It exposes a documented machine-readable camera inventory, image URLs, and live-video URLs, although access to the official developer feed requires registration and a developer key.

New York also has:

* **1,000+ publicly viewable traffic cameras**
* a documented **511NY camera API**
* camera latitude/longitude
* camera IDs and source IDs
* image URLs
* video URLs where available
* NYSDOT, NYSTA, NYC DOT, MTA and other partner camera sources
* extensive municipal/public-safety camera systems
* significant ALPR deployment
* NYPD's legally mandated public surveillance-technology documentation
* statewide P25 interoperability infrastructure
* extensive public scanner coverage
* 357 public-safety Broadcastify feeds across 58 counties
* major public records/FOIL sources for discovering additional systems.

---

### 1. New York State Department of Transportation

The primary state transportation authority is:

**New York State Department of Transportation — NYSDOT.**

NYSDOT identifies 511NY as New York State's official traffic and travel information service. ([NYSDOT][1])

#### Registry

```text
SOURCE_ID:
    NY-NYSDOT

OWNER:
    New York State Department of Transportation

TYPE:
    STATE_TRANSPORTATION

STATUS:
    🟢 VERIFIED
```

---

### 2. 511NY

The primary source is:

[511NY official traffic system](https://www.511ny.org/?utm_source=chatgpt.com)

511NY is the state's statewide traffic/travel information system.

It combines information from:

* NYSDOT
* New York State Thruway Authority
* New York City Department of Transportation
* Niagara International Transportation Technology Coalition
* other transportation partners.

The official developer documentation explicitly states that the feed includes **camera images and video throughout New York State**. ([511NY][2])

#### Registry

```text
SOURCE_ID:
    NY-511NY

TYPE:
    STATEWIDE_511_DATA_PLATFORM

COVERAGE:
    NEW YORK STATE

STATUS:
    🟢 VERIFIED
```

---

### 3. 511NY developer API

This is the most important discovery.

511NY has an official REST API.

The API documentation states that it provides access to:

* traffic speeds
* incidents
* roadwork
* cameras
* message signs
* alerts
* winter road conditions
* other transportation data.

([511NY][3])

#### Registry

```text
SOURCE_ID:
    NY-511NY-API

TYPE:
    REST_API

FORMAT:
    JSON / XML

AUTH:
    DEVELOPER_KEY

STATUS:
    🟢 VERIFIED
```

---

### 4. Exact camera API endpoint

The documented endpoint is:

```text
https://511ny.org/api/v2/get/cameras
```

It requires:

```text
key={developerKey}
```

and optionally:

```text
format=json
format=xml
```

([511NY][4])

This is an **exact official machine-readable source**.

---

### 5. Legacy/alternate camera endpoint

511NY also documents:

```text
https://511ny.org/api/getcameras?key={key}&format={format}
```

([511NY][5])

So ATLAS should register both:

```text
NY-511NY-CAMERAS-V2
NY-511NY-CAMERAS-LEGACY
```

rather than assuming they are interchangeable.

---

### 6. Camera record fields

This is where New York becomes extremely valuable.

The official API documents:

```text
Latitude
Longitude
ID
Name
DirectionOfTravel
RoadwayName
Url
VideoUrl
Disabled
Blocked
```

([511NY][5])

That gives us essentially everything needed for a canonical camera object.

#### Canonical mapping

```text
511NY
│
├── ID
│      ↓
│   source_camera_id
│
├── Latitude
│      ↓
│   latitude
│
├── Longitude
│      ↓
│   longitude
│
├── Name
│      ↓
│   name
│
├── RoadwayName
│      ↓
│   roadway
│
├── DirectionOfTravel
│      ↓
│   direction
│
├── Url
│      ↓
│   image_endpoint
│
└── VideoUrl
       ↓
    video_endpoint
```

---

### 7. Camera views

511NY separately documents a camera-view object.

Each view has:

```text
Id
Url
Status
Description
VideoUrl
```

([511NY][6])

This is important because:

**one physical camera record can have multiple views.**

ATLAS should therefore not create one camera per image URL.

Use:

```text
CAMERA
   │
   ├── VIEW 1
   ├── VIEW 2
   ├── VIEW 3
   └── ...
```

---

### 8. New York's camera model

The 511NY API effectively gives us:

```text
Camera
├── physical/location identity
├── roadway
├── direction
├── coordinates
└── Views[]
       ├── still image
       ├── video
       ├── description
       └── status
```

This is almost exactly the architecture we want for ATLAS.

---

### 9. Camera images

511NY's developer resource explicitly states that the feed contains:

**camera images and video.** ([511NY][2])

The camera API separately provides:

```text
Url
```

for fetching the camera image. ([511NY][5])

Therefore:

```text
LIVE_STILL:
    🟢 VERIFIED

IMAGE_URL:
    🟢 VERIFIED

MACHINE_READABLE:
    🟢 VERIFIED
```

---

### 10. Live video

The camera API also exposes:

```text
VideoUrl
```

when a live video stream exists. ([511NY][5])

The camera-view documentation independently confirms a `VideoUrl` property. ([511NY][6])

Therefore:

```text
LIVE_VIDEO:
    🟢 VERIFIED

VIDEO_URL:
    🟢 VERIFIED

STREAM_AVAILABLE_FOR_EVERY_CAMERA:
    🔴 NO
```

That last distinction matters.

Some cameras are still-image-only.

---

### 11. 511NY camera count

NYSDOT's current travel information page says:

### **more than 1,000 live traffic cameras**

are available through 511NY. ([NYSDOT][7])

An NYSDOT procurement document gives a more specific historical figure:

### approximately 1,200 cameras

on the New York State network, including NYSDOT and other agencies. ([NYSDOT][8])

Therefore:

```text
CURRENT_PUBLIC_DESCRIPTION:
    >1,000

HISTORICAL_NETWORK_COUNT:
    ~1,200

LIVE_MACHINE_COUNT:
    MUST BE DISCOVERED FROM API
```

Do **not** hard-code 1,200 into ATLAS.

---

### 12. Long Island / INFORM

NYSDOT Region 10 operates the **INFORM** traffic management system on Long Island.

The official NYSDOT page reports:

### **435 cameras**

plus thousands of roadway sensors. ([NYSDOT][9])

#### Registry

```text
SOURCE_ID:
    NY-NYSDOT-INFORM

REGION:
    REGION 10 / LONG ISLAND

CAMERAS:
    435

TYPE:
    REGIONAL_TRAFFIC_MANAGEMENT

STATUS:
    🟢 VERIFIED
```

This is a major regional subsystem.

---

### 13. New York City NYSDOT / Region 11

NYSDOT Region 11's Joint Transportation Management Center operates in New York City.

An NYSDOT technical document reports approximately:

```text
260 CCTV cameras
89 VMS
14 HAR
600+ vehicle detectors
16 travel-time signs
```

on limited-access highways in NYC. ([NYSDOT][10])

#### Registry

```text
SOURCE_ID:
    NY-NYSDOT-REGION11-CCTV

REGION:
    REGION 11

CCTV:
    ~260

STATUS:
    🟢 VERIFIED
```

---

### 14. 511NY is an aggregation layer

This is extremely important.

511NY isn't simply an NYSDOT camera database.

Its developer resource says the data feed contains information from:

```text
NYSDOT
NYC DOT
NYSTA
NITTEC
other transportation partners
```

and includes publicly available camera images and video. ([511NY][2])

Therefore:

```text
511NY
    ↓
AGGREGATOR
    ↓
multiple camera owners
```

ATLAS should preserve the original `Source` and `SourceId`.

---

### 15. Camera source IDs

The official v2 camera response includes:

```text
Source
SourceId
```

([511NY][4])

This is extremely valuable.

Instead of:

```text
NY_CAMERA_1234
```

ATLAS can preserve:

```text
source:
    original agency/provider

source_id:
    original camera identifier
```

This prevents duplicate records when the same camera is exposed by multiple systems.

---

### 16. Historical 511NY architecture confirms multiple sources

An NYSDOT architecture diagram identifies camera inputs including:

```text
NFBC
NYBC
ConDOT
NJDOT
NJ Turnpike
TrafficLand
VDOT
MTA
Westchester County
NYC DOT
NYSTA
NYSDOT regional cameras
```

([NYSDOT][11])

This is an older architecture document, so **do not assume every listed source remains active today**.

But it proves the fundamental design:

**511NY has historically been an aggregation system.**

---

### 17. NYSTA / Thruway cameras

The New York State Thruway Authority is another major camera owner.

511NY's developer resource explicitly lists the **New York State Thruway Authority** as a source of 511NY information. ([511NY][2])

#### Registry

```text
SOURCE_ID:
    NY-NYSTA-CCTV

OWNER:
    New York State Thruway Authority

TYPE:
    HIGHWAY_CCTV

STATUS:
    🟢 VERIFIED AS 511NY PARTNER
```

The exact current Thruway camera inventory should be extracted from the `Source` field rather than guessed.

---

### 18. NYC DOT cameras

NYC DOT is another important source.

The historical NYSDOT architecture explicitly lists:

```text
NYC DOT
NYC DOT - LIC
```

among camera inputs. ([NYSDOT][11])

511NY's current feed documentation also identifies NYC DOT as a contributing agency. ([511NY][2])

#### Registry

```text
SOURCE_ID:
    NY-NYCDOT-CCTV

OWNER:
    New York City Department of Transportation

TYPE:
    MUNICIPAL_TRANSPORTATION_CCTV

STATUS:
    🟢 VERIFIED
```

---

### 19. MTA cameras

The MTA appears in the historical 511NY camera architecture. ([NYSDOT][11])

However:

**do not equate every MTA surveillance camera with a public 511NY camera.**

The source architecture specifically concerns cameras incorporated into transportation information.

So:

```text
MTA_PUBLIC_511_CAMERA:
    🟢 if exposed

MTA_GENERAL_SECURITY_CAMERA:
    🔴 not automatically public
```

---

### 20. Westchester County

Westchester County is also identified as a camera source in the historical 511NY architecture. ([NYSDOT][11])

This demonstrates that county-owned transportation cameras can enter the statewide feed.

#### Registry

```text
SOURCE_ID:
    NY-WESTCHESTER-CCTV

TYPE:
    COUNTY_TRANSPORTATION_CCTV

STATUS:
    🟢 HISTORICALLY VERIFIED
```

Current operational status should be checked against the live `Source` field.

---

### 21. 511NY developer access

There is an important restriction.

The API requires a developer key. ([511NY][3])

The official process is:

```text
1. Create My511NY account
2. Request developer access
3. Accept developer agreement
4. Receive developer key
5. Access API
```

([511NY][2])

So:

```text
PUBLIC WEBSITE:
    🟢

PUBLIC DATA:
    🟢

PUBLIC API DOCUMENTATION:
    🟢

API WITHOUT KEY:
    🔴

API WITH FREE APPROVED DEVELOPER KEY:
    🟢
```

---

### 22. The API is free

This is important for your source database.

The 511NY Developer Access Agreement says:

> There is no fee associated with the 511NY Real-Time and Static Data Feed.

([511NY][12])

So this is **not a paid commercial API**.

---

### 23. API throttling

511NY documents:

### **10 calls per 60 seconds**

for the developer API. ([511NY][3])

ATLAS should therefore implement:

```text
RATE_LIMIT:
    10 requests / 60 seconds

CACHE:
    REQUIRED

BACKOFF:
    REQUIRED
```

---

### 24. WZDx

511NY also exposes:

```text
https://511ny.org/api/wzdx
```

for Work Zone Data Exchange information. ([511NY][13])

This isn't a camera source, but it belongs in the New York transportation ingestion layer.

```text
NY-511NY-WZDX
TYPE:
    WORK_ZONE_DATA
```

---

### 25. ALPR — New York State

New York's ALPR environment is more fragmented than its traffic-camera environment.

The state has funded law-enforcement purchases of:

* license plate readers
* fixed cameras
* mobile cameras
* CAD systems
* drones
* gunshot detection
* vehicle technology.

A 2025 state announcement says **378 law-enforcement agencies** received funding under a technology/equipment program, with **22% of the funding going toward license plate readers** and **17% toward public safety camera systems**. ([Governor Kathy Hochul][14])

This is a very strong source for identifying agencies with ALPR deployments.

---

### 26. New York State Police ALPR

The Governor's Office reported in 2025 that New York State Police were using license plate readers in northern-border operations to identify and apprehend fugitives and suspects. ([Governor Kathy Hochul][15])

#### Registry

```text
SOURCE_ID:
    NY-NYSP-LPR

OWNER:
    New York State Police

TYPE:
    LAW_ENFORCEMENT_ALPR

STATUS:
    🟢 VERIFIED
```

However:

**I did not find a reliable official statewide public inventory of every NYSP ALPR unit/location.**

Therefore do not invent a camera count.

---

### 27. Statewide ALPR funding source

The 2025 state funding announcement is actually more useful for discovery than simply saying "New York has ALPR."

It identifies the agencies that received technology funding.

The program funded:

```text
license plate readers
mobile camera systems
fixed camera systems
CAD
UAVs
gunshot detection
vehicle technology
```

([Governor Kathy Hochul][14])

ATLAS should therefore ingest the **DCJS grant awards** as an infrastructure-discovery source.

---

### 28. ALPR source

```text
SOURCE_ID:
    NY-DCJS-LAW-ENFORCEMENT-TECH-GRANTS

OWNER:
    NY Division of Criminal Justice Services

TYPE:
    LAW_ENFORCEMENT_TECHNOLOGY_GRANTS

DISCOVERY_TARGETS:
    ALPR
    FIXED_CAMERA
    MOBILE_CAMERA
    CAD
    DRONES
    GUNSHOT_DETECTION

STATUS:
    🟢 VERIFIED
```

This can potentially reveal agencies that otherwise don't advertise their equipment.

---

### 29. New York City ALPR

New York City is a completely separate level of surveillance infrastructure.

The NYPD is subject to the:

### **Public Oversight of Surveillance Technology Act — POST Act**

The NYPD publishes impact-and-use policies for surveillance systems. ([NYC Government][16])

The published technologies include:

* License Plate Readers
* CCTV systems
* Domain Awareness System
* facial recognition
* digital cameras
* situational-awareness cameras
* vehicle-mounted cameras
* drones
* ShotSpotter
* thermographic cameras
* GPS tracking
* other systems.

([NYC Government][16])

This makes NYC one of the richest surveillance-data discovery environments in the country.

---

### 30. Exact NYPD LPR policy

NYPD currently publishes:

**License Plate Reader (LPR) Surveillance Technology: Impact & Use Policy**

The current policy was revised:

### **February 4, 2026**

to comply with Local Law 56 of 2025. ([NYC Government][17])

#### Registry

```text
SOURCE_ID:
    NY-NYPD-LPR

OWNER:
    New York City Police Department

TYPE:
    MUNICIPAL_LAW_ENFORCEMENT_ALPR

PUBLIC_POLICY:
    🟢

CURRENT_POLICY:
    February 4, 2026

STATUS:
    🟢 VERIFIED
```

---

### 31. NYPD LPR equipment

NYPD's patrol guide defines an LPR device as:

```text
specialized camera
+
computer
+
plate recognition software
```

capable of capturing plates and comparing them against hot lists. ([NYC Government][18])

The guide states that LPR devices are installed in selected department vehicles.

Therefore:

```text
NYPD ALPR
├── vehicle-mounted
└── potentially other infrastructure through partner systems
```

---

### 32. NYC DOT LPR is separate

The NYC Department of Investigation's assessment specifically notes that some LPR technology used by NYPD is **owned, operated or maintained by other entities**, including NYC DOT. ([NYC Government][19])

This is critical.

The correct model is:

```text
LPR DEVICE
     ↓
OWNER
     ↓
OPERATOR
     ↓
DATA USER
```

These may be different organizations.

---

### 33. NYC Domain Awareness System

NYPD's POST Act list includes the:

### Domain Awareness System — DAS

([NYC Government][16])

The system is associated with integration of surveillance information, including camera and other sensor information.

#### Registry

```text
SOURCE_ID:
    NY-NYPD-DAS

TYPE:
    SURVEILLANCE_PLATFORM

STATUS:
    🟢 VERIFIED

RAW_DATA:
    🔴 RESTRICTED
```

ATLAS should catalog the **existence, technology, agency, policy and public documentation**.

It should not attempt to access restricted feeds.

---

### 34. NYC CCTV

NYPD also publishes a separate:

**Closed-Circuit Television Systems — Impact & Use Policy**

under the POST Act. ([NYC Government][16])

#### Registry

```text
SOURCE_ID:
    NY-NYPD-CCTV

TYPE:
    LAW_ENFORCEMENT_CCTV

STATUS:
    🟢 PUBLIC POLICY
    🔴 RAW FEEDS NOT PUBLIC
```

This is different from 511NY traffic cameras.

---

### 35. Situational-awareness cameras

NYPD also has a separate public policy for:

**Situational Awareness Cameras.**

([NYC Government][16])

#### Registry

```text
SOURCE_ID:
    NY-NYPD-SITUATIONAL-AWARENESS-CAMERAS

TYPE:
    PUBLIC_SAFETY_CAMERA

STATUS:
    🟢 DOCUMENTED
    🔴 RAW_FEED_NOT_PUBLIC
```

---

### 36. Vehicle-mounted cameras

NYPD also publishes a POST Act policy for:

**Vehicle-Mounted Cameras.**

([NYC Government][16])

That should be treated separately from LPR.

```text
NYPD
├── LPR
├── CCTV
├── vehicle-mounted cameras
├── situational-awareness cameras
└── digital cameras
```

---

### 37. ShotSpotter / audio surveillance

The NYPD POST Act inventory also lists:

### ShotSpotter

as a surveillance technology. ([NYC Government][16])

This matters because your project isn't restricted to visual cameras.

#### Registry

```text
SOURCE_ID:
    NY-NYPD-SHOTSPOtTER

TYPE:
    ACOUSTIC_GUNSHOT_DETECTION

STATUS:
    🟢 DOCUMENTED
```

Raw acoustic sensor data should not be assumed public.

---

### 38. NYPD surveillance documentation is a major source

The POST Act policies explicitly document:

* capabilities
* rules
* data protection
* retention
* public access
* external access
* training
* auditing
* oversight
* disparate-impact analysis.

([NYC Government][16])

That means these policies are **source-discovery documents**, even when the underlying data is private.

---

### 39. New York State radio environment

New York does **not** have one simple statewide police radio system equivalent to a single statewide DTRS.

Instead, the state has:

* county systems
* municipal systems
* NYSP systems
* NYC systems
* regional systems
* interoperability channels
* P25 Phase 1/Phase 2 systems
* legacy analog systems.

The New York DHSES explicitly says the state has all four major radio-system types:

```text
analog conventional
analog trunked
digital conventional
digital trunked
```

([Homeland Security Services][20])

Therefore:

### Do not create `NY-STATEWIDE-POLICE-RADIO` as if it were one network.

---

### 40. P25

New York's Statewide Interoperable Communications Grant requires new public-safety radio systems to support:

### **Project 25 Phase 2**

while allowing operation in Phase 1 where appropriate. ([Homeland Security Services][21])

#### Registry

```text
SOURCE_ID:
    NY-DHSES-P25

TYPE:
    STATEWIDE_RADIO_STANDARD

STANDARD:
    P25 PHASE 1 / PHASE 2

STATUS:
    🟢 VERIFIED
```

---

### 41. Statewide interoperability channels

New York maintains statewide 700 MHz interoperability channels.

The official DHSES documentation specifies P25 Phase 1 CAI digital modulation for the 700 MHz national interoperability channels. ([Homeland Security Services][22])

This should be represented as:

```text
NY-INTEROP-700MHZ
```

rather than as one statewide trunked radio system.

---

### 42. County radio systems

The state continues funding county-level radio infrastructure.

In January 2026, New York awarded more than $38 million to 17 counties and NYC for emergency communications infrastructure. Projects included:

* radio towers
* P25 upgrades
* interoperability channels
* NYPD P25 trunking upgrades
* communications infrastructure.

([Governor Kathy Hochul][23])

This is an excellent **radio-system discovery source**.

---

### 43. New York City P25

The January 2026 state funding announcement specifically identifies:

### **NYPD P25 trunking system**

as receiving funding for capacity, coverage and control improvements. ([Governor Kathy Hochul][23])

#### Registry

```text
SOURCE_ID:
    NY-NYPD-P25

OWNER:
    New York City Police Department

TYPE:
    P25_TRUNKED_RADIO

STATUS:
    🟢 VERIFIED
```

---

### 44. Public scanner coverage

New York is enormous in scanner availability.

Broadcastify currently lists:

### **357 public-safety audio feeds**

across:

### **58 counties**

([Broadcastify][24])

This is one of the strongest statewide scanner sources we've encountered.

---

### 45. Total Broadcastify feeds

The broader New York Broadcastify directory currently shows:

### **518 total feeds**

including:

```text
357? total statewide audio entries depending directory classification
285 public safety
29 amateur radio
21 rail
6 marine
6 other
4 aviation
```

The public-safety-specific page currently reports 357 audio feeds across 58 counties, while the general page reports 518 total feeds. ([Broadcastify][24])

For ATLAS:

```text
PUBLIC_SAFETY:
    357

ALL_AUDIO:
    518

COUNTIES:
    58
```

Timestamp these values because they change.

---

### 46. Scanner county coverage

The Broadcastify public-safety directory includes all 58 counties.

Examples:

```text
Erie
    21

Nassau
    14

Rockland
    31

Suffolk
    39

Westchester
    29

Onondaga
    10

Monroe
    5

Albany
    6
```

([Broadcastify][24])

This makes New York one of the best states for public scanner discovery.

---

### 47. Individual scanner feeds

Individual feeds expose:

* feed ID
* genre
* online status
* listener count
* static audio URL
* archive information.

For example, a Livingston County feed exposes a feed ID, live status and archive intervals. ([Broadcastify][25])

#### Canonical structure

```text
SCANNER_FEED
├── feed_id
├── jurisdiction
├── agency
├── audio_url
├── status
├── genre
└── archive_metadata
```

---

### 48. Official government scanner feeds

Broadcastify also maintains an **Official Feeds** category for feeds provided directly by public-safety agencies.

The current directory includes New York examples such as:

* Washington County Department of Public Safety
* Wayne County Fire
* Westchester Fire/EMS.

([Broadcastify][26])

These should receive a higher provenance score than ordinary community-hosted feeds.

---

### 49. Scanner provenance model

Use:

```text
FEED_PROVENANCE:
    OFFICIAL_AGENCY
    COMMUNITY_HOSTED
    MEDIA
    UNKNOWN
```

For example:

```text
Washington County DPS
    → OFFICIAL_AGENCY

private scanner operator
    → COMMUNITY_HOSTED
```

Do not treat them as equivalent.

---

### 50. NYPD surveillance source registry

New York City alone produces this:

| Source                          | Type                    | Status        |
| ------------------------------- | ----------------------- | ------------- |
| `NY-NYPD-LPR`                   | ALPR                    | 🟢            |
| `NY-NYPD-CCTV`                  | CCTV                    | 🟢 documented |
| `NY-NYPD-DAS`                   | surveillance platform   | 🟢 documented |
| `NY-NYPD-SITUATIONAL-AWARENESS` | cameras                 | 🟢 documented |
| `NY-NYPD-VEHICLE-CAMERAS`       | mobile cameras          | 🟢 documented |
| `NY-NYPD-DIGITAL-CAMERAS`       | digital cameras         | 🟢 documented |
| `NY-NYPD-SHOTSPOTTER`           | acoustic detection      | 🟢 documented |
| `NY-NYPD-FACIAL-RECOGNITION`    | biometric surveillance  | 🟢 documented |
| `NY-NYPD-DRONES`                | UAS                     | 🟢 documented |
| `NY-NYPD-GPS`                   | vehicle/person tracking | 🟢 documented |

The existence of these systems is directly documented in the NYPD's POST Act inventory. ([NYC Government][16])

---

### 51. FOIL

New York has another extremely important discovery mechanism:

### Freedom of Information Law — FOIL

The state government maintains an official Open Government/FOIL framework. ([Open Government][27])

For this project, FOIL should not be thought of as an automated data feed.

It is:

```text
DISCOVERY / RECORDS ACQUISITION
```

rather than:

```text
REAL_TIME_DATA_FEED
```

---

### 52. FOIL targets

For New York, useful records to request from agencies include:

```text
camera inventories
camera deployment lists
camera vendor contracts
ALPR contracts
ALPR policies
ALPR system counts
camera maintenance contracts
radio system inventories
radio tower/site lists
public-safety technology grants
technology procurement records
511 camera source lists
```

The request should target **metadata and public records**, not restricted operational data.

---

### 53. Important ALPR limitation

Unlike New Mexico, I did **not** find a statewide New York statute creating a single public statewide ALPR database or statewide ALPR reporting API.

So:

```text
STATEWIDE_ALPR_INVENTORY:
    🔴 NOT FOUND

STATEWIDE_ALPR_API:
    🔴 NOT FOUND

STATEWIDE_ALPR_USAGE:
    🟡 fragmented

NYSP ALPR:
    🟢 verified

NYC/NYPD ALPR:
    🟢 verified

LOCAL ALPR:
    🟢 widespread
```

This distinction is important.

---

### 54. But New York is actively expanding ALPR

The Governor's office stated that state-funded law-enforcement technology investments include ALPRs, and that State Police are actively using LPR technology. ([Governor Kathy Hochul][14])

So the absence of a single statewide registry **does not mean the technology is absent**.

It means the discovery method must be:

```text
AGENCY
    ↓
GRANT
    ↓
PROCUREMENT
    ↓
POLICY
    ↓
PUBLIC RECORD
```

---

### 55. New York camera architecture

The correct architecture is:

```text
NEW YORK
│
├── NYSDOT
│   ├── 511NY
│   │   ├── Cameras
│   │   ├── Camera Views
│   │   ├── Images
│   │   └── Video
│   │
│   ├── Region 10 / INFORM
│   │   └── 435 cameras
│   │
│   └── Region 11
│       └── ~260 CCTV
│
├── NYSTA
│   └── Highway CCTV
│
├── NYC DOT
│   └── Transportation CCTV/LPR
│
├── MTA
│   └── transportation surveillance
│
├── Counties
│   ├── Westchester
│   └── others
│
├── LAW ENFORCEMENT
│   ├── NYSP LPR
│   ├── NYPD LPR
│   ├── NYPD CCTV
│   ├── NYPD DAS
│   ├── vehicle cameras
│   └── situational-awareness cameras
│
└── RADIO
    ├── County systems
    ├── Municipal systems
    ├── NYSP systems
    ├── NYPD P25
    ├── P25 interoperability
    └── Broadcastify
```

---

### 56. Exact machine-readable camera chain

This is the key ATLAS path:

```text
https://511ny.org/api/v2/get/cameras
                  │
                  ▼
             Camera[]
                  │
       ┌──────────┼─────────────┐
       ▼          ▼             ▼
   Latitude    Longitude     SourceId
       │          │             │
       └──────────┼─────────────┘
                  ▼
             Camera Views
                  │
          ┌───────┴────────┐
          ▼                ▼
        Url            VideoUrl
          │                │
          ▼                ▼
     STILL IMAGE       LIVE VIDEO
```

Every part of this structure is documented by 511NY. ([511NY][6])

---

### 57. Recommended ATLAS source records

#### 511 camera inventory

```json
{
  "source_id": "NY-511NY-CAMERA-INVENTORY",
  "state": "NY",
  "owner": "New York State Department of Transportation",
  "program": "511NY",
  "type": "camera_inventory",
  "endpoint": "https://511ny.org/api/v2/get/cameras",
  "format": ["json", "xml"],
  "authentication": "developer_key",
  "rate_limit": "10 requests / 60 seconds",
  "confidence": "high"
}
```

#### Camera view

```json
{
  "source_id": "NY-511NY-CAMERA-VIEWS",
  "parent": "NY-511NY-CAMERA-INVENTORY",
  "fields": [
    "Id",
    "Url",
    "Status",
    "Description",
    "VideoUrl"
  ],
  "confidence": "high"
}
```

---

### 58. Radio source records

```json
{
  "source_id": "NY-DHSES-P25",
  "owner": "New York State DHSES",
  "type": "public_safety_radio_standard",
  "standard": "P25 Phase 1 / Phase 2",
  "statewide": true,
  "confidence": "high"
}
```

And:

```json
{
  "source_id": "NY-BROADCASTIFY",
  "type": "public_scanner_audio",
  "public_safety_feeds": 357,
  "counties": 58,
  "confidence": "high",
  "observed": "2026-08-28"
}
```

---

### 59. ALPR source records

```json
{
  "source_id": "NY-NYSP-LPR",
  "owner": "New York State Police",
  "type": "law_enforcement_alpr",
  "status": "operational",
  "public_raw_data": false,
  "confidence": "high"
}
```

```json
{
  "source_id": "NY-NYPD-LPR",
  "owner": "New York City Police Department",
  "type": "law_enforcement_alpr",
  "public_policy": true,
  "raw_data_public": false,
  "policy_revision": "2026-02-04",
  "confidence": "high"
}
```

---

### 60. New York source hierarchy

For ATLAS, I would rank the sources:

#### Tier 1 — direct official machine-readable

```text
511NY Camera API
```

#### Tier 1 — official public infrastructure

```text
511NY
NYSDOT
NYSTA
NYC DOT
DHSES
```

#### Tier 1 — official surveillance documentation

```text
NYPD POST Act
NYSP
DCJS
```

#### Tier 2 — official procurement/grant records

```text
DCJS technology grants
NYSDOT procurement
county grant awards
municipal procurement
```

#### Tier 2 — public scanner distribution

```text
Broadcastify
```

#### Tier 3 — FOIL-derived records

```text
agency inventories
contracts
deployment lists
```

---

### 61. New York assessment

| Category                              |                         Rating |
| ------------------------------------- | -----------------------------: |
| State traffic-camera coverage         |               🟢 **Excellent** |
| Machine-readable camera inventory     |               🟢 **Excellent** |
| Camera coordinates                    |                             🟢 |
| Camera still images                   |                             🟢 |
| Live camera video URLs                |                             🟢 |
| Camera source attribution             |               🟢 **Excellent** |
| Multi-view cameras                    |                             🟢 |
| Statewide transportation aggregation  |               🟢 **Excellent** |
| Regional camera systems               |                             🟢 |
| ALPR existence                        |               🟢 **Excellent** |
| Statewide ALPR inventory              |                             🟡 |
| NYSP ALPR                             |                             🟢 |
| NYPD ALPR                             | 🟢 **Excellent documentation** |
| Municipal ALPR discovery              |                             🟢 |
| Public ALPR raw data                  |                             🔴 |
| Public surveillance metadata          |               🟢 **Excellent** |
| Statewide radio standard              |                             🟢 |
| Single statewide police radio network |                             🔴 |
| P25 systems                           |               🟢 **Excellent** |
| Public scanner feeds                  |               🟢 **Excellent** |
| Scanner county coverage               |                   🟢 **58/58** |
| FOIL discovery                        |                             🟢 |

### **Overall: 9.7 / 10**

New York is arguably **one of the most valuable states in the entire dataset** because the transportation side is exceptionally structured.

#### Most important discoveries

### **1. Exact official camera API**

```text
https://511ny.org/api/v2/get/cameras
```

with:

```text
ID
Source
SourceId
Roadway
Direction
Latitude
Longitude
Location
Views[]
```

([511NY][4])

### **2. Individual views expose both still and video URLs**

```text
Url
VideoUrl
Status
Description
```

([511NY][6])

### **3. More than 1,000 public traffic cameras**

NYSDOT currently advertises **more than 1,000 live traffic cameras** through 511NY. ([NYSDOT][7])

### **4. 511NY is a multi-agency aggregation system**

This is especially important because the camera source field can identify the underlying owner rather than forcing ATLAS to treat every camera as NYSDOT-owned. ([511NY][2])

### **5. NYC has an unusually detailed surveillance documentation system**

The NYPD POST Act publishes current policies covering LPR, CCTV, DAS, vehicle cameras, situational-awareness cameras, drones, ShotSpotter and numerous other surveillance technologies. ([NYC Government][16])

### **6. Scanner coverage is enormous**

New York currently has **357 public-safety Broadcastify feeds across all 58 counties**. ([Broadcastify][24])

**New York is complete. Next alphabetically: North Carolina.**

[1]: https://www.dot.ny.gov/portal/page/portal/re/511ny?utm_source=chatgpt.com "NYSDOT | 511ny"
[2]: https://www.511ny.org/developers/resources?utm_source=chatgpt.com "New York Resources | 511NY"
[3]: https://www.511ny.org/developers/help?utm_source=chatgpt.com "New York API Documentation | 511NY"
[4]: https://511ny.org/help/endpoint/cameras?utm_source=chatgpt.com "New York GET Cameras API Documentation | 511NY"
[5]: https://511ny.org/developers/help/api/get-api-getcameras_key_format?utm_source=chatgpt.com "New York GET api/GetCameras | 511NY"
[6]: https://511ny.org/help/subendpoint/cameras?utm_source=chatgpt.com "New York Camera Views | 511NY"
[7]: https://www.dot.ny.gov/programs/safe-winter-driving?utm_source=chatgpt.com "Safe Winter Driving"
[8]: https://www.dot.ny.gov/portal/pls/portal/MEXIS_APP.BC_CONSULTING_NONAE_ADMIN.VIEWFILE?p_file_id=20642&utm_source=chatgpt.com "May 19, 2016"
[9]: https://www.dot.ny.gov/regional-offices/region10/general-info?utm_source=chatgpt.com "General Info"
[10]: https://www.dot.ny.gov/portal/pls/portal/MEXIS_APP.BC_CONSULTING_NONAE_ADMIN.VIEWFILE?p_file_id=30085&utm_source=chatgpt.com "1.2 **Background**"
[11]: https://www.dot.ny.gov/portal/pls/portal/MEXIS_APP.BC_CONSULTING_NONAE_ADMIN.VIEWFILE?p_file_id=34425&utm_source=chatgpt.com "D R A F T"
[12]: https://www.511ny.org/developers/daa?utm_source=chatgpt.com "New York Developer's Access Agreement | 511NY"
[13]: https://511ny.org/developers/doc?utm_source=chatgpt.com "New York API Documentation | 511NY"
[14]: https://www.governor.ny.gov/news/safer-streets-governor-hochul-proposes-first-nation-crime-analysis-and-joint-special?utm_source=chatgpt.com "Safer Streets: Governor Hochul Proposes First-in-the-Nation Crime Analysis and Joint Special Operations Command Headquarters | Governor Kathy Hochul | New York State"
[15]: https://www.governor.ny.gov/news/safer-streets-governor-hochul-highlights-continued-investments-northern-border-security-and?utm_source=chatgpt.com "Safer Streets: Governor Hochul Highlights Continued Investments in Northern Border Security and Law Enforcement Technology in the North Country | Governor Kathy Hochul | New York State"
[16]: https://www.nyc.gov/site/nypd/about/about-nypd/policy/post-act.page?utm_source=chatgpt.com "POST Act"
[17]: https://www.nyc.gov/assets/nypd/downloads/pdf/public_information/post-final/License-Plate-Readers-NYPD-Impact-and-Use-Policy-2.4.26-FINAL.pdf?utm_source=chatgpt.com "LICENSE PLATE READER (LPR) SURVEILLANCE TECHNOLOGY:"
[18]: https://www.nyc.gov/assets/nypd/downloads/pdf/public_information/public-pguide4.pdf?utm_source=chatgpt.com "NYCPD -  Public Patrol Guide - Part 4"
[19]: https://www.nyc.gov/assets/doi/reports/pdf/2022/POSTActReport_Final_11032022.pdf?utm_source=chatgpt.com "Assessment of NYPD’s Response to the POST Act"
[20]: https://www.dhses.ny.gov/system/files/documents/2021/11/sicg-p25-phase2-requirement-r1_0.pdf?utm_source=chatgpt.com "Kathleen Hochul"
[21]: https://www.dhses.ny.gov/system/files/documents/2021/11/sicg-p25-phase2-requirement-r1_1.pdf?utm_source=chatgpt.com "Kathleen Hochul"
[22]: https://www.dhses.ny.gov/new-york-statewide-700mhz-public-safety-national-interoperability-channel-plan?utm_source=chatgpt.com "Office of Interoperable and Emergency Communications"
[23]: https://www.governor.ny.gov/news/governor-hochul-announces-more-38-million-state-funding-strengthen-emergency-communications?utm_source=chatgpt.com "Governor Hochul Announces More Than $38 Million in State Funding to Strengthen Emergency Communications for First Responders | Governor Kathy Hochul | New York State"
[24]: https://status.broadcastify.com/listen/stid/36/publicsafety?utm_source=chatgpt.com "New York Audio Feeds"
[25]: https://status.broadcastify.com/listen/feed/4043?utm_source=chatgpt.com "Livingston County Sheriff, Police, Fire and EMS"
[26]: https://status.broadcastify.com/listen/official/?utm_source=chatgpt.com "Official Feeds"
[27]: https://opengovernment.ny.gov/node/1176?utm_source=chatgpt.com "What You Should Know - NYS Personal Privacy Protection Law (PPPL) | Open Government"
