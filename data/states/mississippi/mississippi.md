---
state: Mississippi
usps: MS
slug: mississippi
dossier_number: 24
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
  imported_from: project_atlas_state_data/Mississippi.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Mississippi (MS) - ATLAS State Record

> Dossier **24 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Mississippi is a **very strong state for the project**, but for different reasons than Minnesota.

The major findings are:

1. **MDOT has a statewide public streaming traffic-camera system.**
2. The current MDOTTraffic site exposes a camera layer and camera list.
3. Mississippi's ITS architecture explicitly describes **real-time traffic images and their metadata as public-facing MDOTtraffic flows**.
4. The state has **MSWIN**, a statewide P25 700-MHz public-safety network with 144+ tower sites.
5. MSWIN is actively being ingested by public SDR/scanner infrastructure.
6. Mississippi previously built a **statewide ALPR system through the Office of Homeland Security**, with 19 fixed cameras plus a trailer and local systems sharing the state server.
7. Current procurement records demonstrate that Mississippi continues purchasing **ALPR, surveillance, body-camera and dashboard-camera systems**.
8. Current independent mapping shows **1,044 documented ALPR cameras in Mississippi**, including 513 Flock cameras, although this is **not an official Mississippi government inventory**.
9. Mississippi has a very broad public-records framework, but investigative records and ALPR data themselves require careful classification.

---

### 1. Mississippi Department of Transportation

**Mississippi Department of Transportation — MDOT**

MDOT operates the state's intelligent transportation system and public traveler-information platform.

Its ITS documentation describes a network of strategically located traffic-monitoring video cameras whose streaming video is transported to Traffic Management Centers. ([Drive Smart MS][1])

#### Registry

```text
SOURCE_ID:
    MS-MDOT

OWNER:
    Mississippi Department of Transportation

PRIMARY_SYSTEM:
    MDOTTraffic

TYPE:
    STATE_TRANSPORTATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. MDOTTraffic

**MDOTTraffic.com** is the primary public-facing source.

The live website currently exposes:

* Cameras
* Weather Sensors
* Message Signs
* Alerts
* Road Closures
* Road Work
* Rest Areas
* Welcome Centers
* Posted Bridges
* Traffic layer

and provides a statewide view. ([MDOT Traffic][2])

#### Official/public endpoint

[MDOTTraffic.com](https://www.mdottraffic.com/?utm_source=chatgpt.com)

#### Registry

```text
SOURCE_ID:
    MS-MDOTTRAFFIC

TYPE:
    STATEWIDE_TRAVELER_INFORMATION

ACCESS:
    PUBLIC

STATUS:
    🟢 ACTIVE
```

---

### 3. Mississippi statewide traffic cameras

This is the primary camera source.

The official MDOT Traffic application states that it provides:

> statewide streaming traffic cameras

and statewide GPS traffic-alert information. ([Google Play][3])

The app's version history also explicitly says that users can view cameras without logging in. ([App Store][4])

#### Registry

```text
SOURCE_ID:
    MS-MDOT-CCTV

OWNER:
    MDOT

TYPE:
    TRAFFIC_CCTV

COVERAGE:
    STATEWIDE

ACCESS:
    PUBLIC

LIVE:
    🟢

STATUS:
    🟢 VERIFIED
```

---

### 4. Camera inventory

The current MDOTTraffic site contains a **Camera List** interface. ([MDOT Traffic][5])

This is significant because we aren't merely dealing with a static page containing a few camera links.

The application architecture contains a camera inventory that can be enumerated.

#### Discovery target

```text
MS-MDOT-CCTV
    │
    ├── camera ID
    ├── camera name
    ├── location
    ├── coordinates
    ├── image/video source
    └── status
```

**Exact machine-readable field schema still needs endpoint-level capture.**

I am not inventing an API URL.

---

### 5. Current camera count

I found an authoritative historical/current architecture reference stating that the MDOT Traffic mobile application provides access to **over 400 traffic cameras**. ([Mississippi IT Services][6])

That is useful, but I would **not hardcode 400+ as the current exact inventory count**.

The live website's camera list should be treated as authoritative for enumeration.

```text
OFFICIAL DOCUMENTED SCALE:
    >400 cameras

CURRENT EXACT COUNT:
    requires enumeration

DATABASE RULE:
    discover dynamically
```

---

### 6. Live streaming video

This is explicitly confirmed.

The MDOT Traffic application provides **statewide streaming traffic cameras**. ([Google Play][3])

The Mississippi ITS master plan likewise describes the system as providing **real-time streaming traffic cameras**. ([Mississippi IT Services][6])

#### Registry

```text
SOURCE_ID:
    MS-MDOT-CCTV-VIDEO

TYPE:
    LIVE_TRAFFIC_VIDEO

ACCESS:
    PUBLIC

STATUS:
    🟢 VERIFIED
```

---

### 7. Real-time traffic imagery

The Central Mississippi ITS Architecture gives us an unusually useful technical description.

It defines a public MDOTtraffic information flow containing:

```text
traffic images
    ↓
high-fidelity real-time traffic images
    ↓
surveillance monitoring
    ↓
machine-vision applications
```

and separately identifies metadata describing those images. ([CMPDD][7])

This is highly relevant to MAC EVIL.

#### Registry

```text
SOURCE_ID:
    MS-MDOT-TRAFFIC-IMAGERY

TYPE:
    REAL_TIME_TRAFFIC_IMAGE

DATA:
    IMAGE
    CAMERA_METADATA

STATUS:
    🟢 VERIFIED
```

---

### 8. Camera metadata

The ITS architecture explicitly distinguishes between:

```text
traffic images
        +
metadata describing the images
```

rather than treating the camera as merely an HTML page. ([CMPDD][7])

That makes this a strong candidate for automated ingestion.

#### Expected normalized object

```json
{
  "source": "MS-MDOT",
  "type": "camera",
  "name": "...",
  "latitude": 0,
  "longitude": 0,
  "image_url": "...",
  "stream_url": "...",
  "status": "..."
}
```

**The field names above are our canonical model, not claimed MDOT field names.**

---

### 9. MDOT traffic alerts

The public MDOTTraffic system exposes statewide alerts.

The app provides:

* real-time traffic alerts
* GPS traffic-alert details
* push notifications
* text/email notifications. ([Google Play][3])

#### Registry

```text
SOURCE_ID:
    MS-MDOT-ALERTS

TYPE:
    REAL_TIME_TRAFFIC_ALERT

STATUS:
    🟢
```

---

### 10. Road closures

The live MDOTTraffic map includes a dedicated **Road Closed** layer. ([MDOT Traffic][2])

#### Registry

```text
SOURCE_ID:
    MS-MDOT-CLOSURES

TYPE:
    ROAD_CLOSURE

STATUS:
    🟢
```

---

### 11. Road work / construction

The map also exposes a **Road Work** layer. ([MDOT Traffic][2])

```text
SOURCE_ID:
    MS-MDOT-ROADWORK

TYPE:
    CONSTRUCTION

STATUS:
    🟢
```

---

### 12. Weather sensors

MDOTTraffic exposes **Weather Sensors** on the public map. ([MDOT Traffic][2])

The application's historical release notes also specifically mention a **Roadway Weather Station** field showing MDOT-provided data. ([App Store][4])

#### Registry

```text
SOURCE_ID:
    MS-MDOT-RWIS

TYPE:
    ROAD_WEATHER_SENSOR

STATUS:
    🟢 VERIFIED
```

---

### 13. Dynamic Message Signs

The MDOT Traffic application provides real-time message-sign information. ([App Store][4])

The current map also exposes **Message Signs** as a distinct layer. ([MDOT Traffic][2])

```text
SOURCE_ID:
    MS-MDOT-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢
```

---

### 14. Traffic layer

The public map has a dedicated **Traffic** layer. ([MDOT Traffic][2])

```text
SOURCE_ID:
    MS-MDOT-TRAFFIC

TYPE:
    TRAFFIC_CONDITIONS

STATUS:
    🟢
```

---

### 15. MDOT Traffic Management Centers

Mississippi has a statewide TMC plus regional facilities.

MDOT documentation identifies the statewide TMC in Jackson and a Hattiesburg Regional TMC. ([goMDOT][8])

The ITS manual explains that TMC operators use workstation systems to:

* view surveillance cameras
* monitor traffic measurements
* control field devices
* disseminate traveler information. ([goMDOT][9])

#### Registry

```text
SOURCE_ID:
    MS-MDOT-TMC

TYPE:
    TRANSPORTATION_OPERATIONS_CENTER

STATUS:
    🟢 VERIFIED
```

---

### 16. CCTV infrastructure

MDOT construction documents explicitly identify **CCTV systems** as part of Mississippi transportation infrastructure. ([goMDOT][8])

The engineering documents even identify:

```text
CCTV camera pole
camera
roadside detection
building detection
fiber
TMC
```

This confirms that the camera network is physical ITS infrastructure, not merely a third-party web widget.

---

### 17. MDOT camera technology

Mississippi's ITS documents reference:

* fixed cameras
* PTZ cameras
* video detection equipment
* fiber-connected camera infrastructure
* TMC video walls.

The public inventory should therefore **not assume every camera is the same type**.

Recommended classification:

```text
FIXED
PTZ
VIDEO_DETECTION
UNKNOWN
```

---

### 18. MDOT public API — current determination

The website itself exposes an **API** navigation element. ([MDOT Traffic][5])

This is an important discovery.

However, I have **not yet established the exact documented API endpoints or authentication requirements from an official technical specification**.

Therefore:

```text
PUBLIC WEB APPLICATION:
    🟢

PUBLIC CAMERA DATA:
    🟢

API INTERFACE EXISTS:
    🟢 evidence on site

EXACT API CONTRACT:
    🟡 needs endpoint capture

API AUTH REQUIREMENT:
    🟡 needs testing
```

This should be one of the first technical targets when ingestion work begins.

---

### 19. MSWIN

Now the radio side.

**MSWIN — Mississippi Wireless Information Network**

is Mississippi's statewide public-safety radio network.

The Mississippi Wireless Communication Commission states that MSWIN is:

* P25
* 700 MHz
* statewide
* intended for state and local public safety
* designed for 97% mobile-area coverage
* composed of 144+ tower sites. ([Mississippi Wireless Commission][10])

#### Registry

```text
SOURCE_ID:
    MS-MSWIN

OWNER:
    Mississippi Wireless Communication Commission

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

BAND:
    700 MHz

COVERAGE:
    STATEWIDE

TOWER_SITES:
    144+

STATUS:
    🟢 VERIFIED
```

---

### 20. MSWIN coverage

The WCC says MSWIN is designed for **97% mobile-area statewide coverage**. ([Mississippi Wireless Commission][10])

This makes it one of the most important statewide radio systems in the country for this project.

```text
STATE:
    Mississippi

STATEWIDE_RADIO:
    MSWIN

MOBILE_COVERAGE_TARGET:
    97%
```

---

### 21. MSWIN infrastructure

The official WCC page states:

> over 144 tower sites

plus point-to-point microwave backhaul. ([Mississippi Wireless Commission][10])

#### Registry

```text
SOURCE_ID:
    MS-MSWIN-SITES

TYPE:
    RADIO_TOWER/SITE

COUNT:
    144+

STATUS:
    🟢 OFFICIAL
```

---

### 22. MSWIN user agencies

The system is designed for state and local public-safety agencies.

Official documentation describes use by:

* state agencies
* local agencies
* emergency responders
* interoperable partners. ([Mississippi Wireless Commission][10])

This includes the Mississippi Highway Patrol and MDOT law-enforcement operations; the WCC FAQ specifically identifies MHP and MDOT LAW among users of the statewide common talkgroup. ([Mississippi Wireless Commission][11])

---

### 23. MSWIN statewide common talkgroup

The WCC FAQ contains a particularly useful piece of information:

The **ST SE CMN** statewide hailing channel is guaranteed to be monitored and is used by multiple agencies, including:

* UMC-MEDCOM
* DWFP
* MEMA
* MDOT LAW
* MHP

24/7. ([Mississippi Wireless Commission][11])

#### Registry

```text
SYSTEM:
    MSWIN

TALKGROUP:
    ST SE CMN

TYPE:
    STATEWIDE_INTEROPERABILITY

MONITORING:
    24/7

STATUS:
    🟢 OFFICIAL
```

---

### 24. MSWIN encryption capability

The official WCC technical documentation says MSWIN P25 radios are **encryption and GPS capable**. ([Mississippi Wireless Commission][12])

Therefore:

```text
P25:
    🟢

GPS:
    🟢

ENCRYPTION:
    🟢 SUPPORTED
```

That does **not** mean all MSWIN traffic is encrypted.

---

### 25. MSWIN public monitorability

Current public scanner evidence demonstrates that substantial MSWIN traffic remains publicly receivable.

Broadcastify's current MSWIN Calls page is actively showing live talkgroups including:

* Mississippi Highway Patrol dispatch
* Capitol Police
* special-event interoperability
* MDOT
* Mississippi Forestry Commission
* other public-safety users. ([Broadcastify][13])

#### Registry

```text
SOURCE_ID:
    MS-MSWIN-PUBLIC-CALLS

TYPE:
    PUBLIC_RADIO_CALLS

STATUS:
    🟢 ACTIVE

ENCRYPTION:
    PARTIAL / TALK-GROUP DEPENDENT
```

---

### 26. Broadcastify — Mississippi

Mississippi has a substantial public scanner ecosystem.

Current Broadcastify listings include feeds such as:

* Jackson Police and Fire
* Lincoln County
* George County
* Jackson County/MSWIN
* Rankin County
* Lamar County
* Grenada
* Smith County
* Forrest County
* Lafayette County
* Hinds County
* Hancock County
* many others. ([Broadcastify][14])

#### Registry

```text
SOURCE_ID:
    MS-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

STATUS:
    🟢 ACTIVE
```

---

### 27. Broadcastify Calls — MSWIN

This is particularly valuable.

Broadcastify currently has an MSWIN statewide Calls system and shows live talkgroups. ([Broadcastify][13])

The platform also identifies itself as using **software-defined receiver ingest nodes**. ([Broadcastify][15])

#### Registry

```text
SOURCE_ID:
    MS-MSWIN-BROADCASTIFY-CALLS

TYPE:
    SDR_RADIO_CALLS

NETWORK:
    MSWIN

STATUS:
    🟢 ACTIVE
```

---

### 28. MSWIN regional SDR nodes

Current Broadcastify infrastructure shows MSWIN nodes including:

```text
Jackson County
Harrison County
Fountainbleau
Vancleave
```

and other regional receiver locations. ([Broadcastify][15])

These should be treated as **receiver infrastructure**, not additional government radio networks.

---

### 29. MSWIN talkgroup discovery

Broadcastify currently exposes a systemwide MSWIN talkgroup page.

It is actively displaying:

```text
TG ID
Last Seen
Display Name
Description
Service
```

for talkgroups observed in the last 24 hours. ([Broadcastify][13])

That is an extremely useful machine-discovery target.

#### Registry

```text
SOURCE_ID:
    MS-MSWIN-TALKGROUPS

TYPE:
    LIVE_TALKGROUP_OBSERVATION

FIELDS:
    talkgroup_id
    display
    description
    service
    last_seen
```

---

### 30. MSWIN example talkgroups

Current observations include:

```text
12021  MHP D7 DISP
12031  MHP D8 DISP
13021  MHP D1 DISP
13031  MHP D5 DISP
13041  MHP D6 DISP
14031  MHP D3 DISP
13541  CAPITOL PD CMN
21002  MDOT D6 F-S
21601  MFC REG 4 DISP
```

([Broadcastify][13])

This gives us a real-world confirmation that the network includes both law enforcement and transportation/public-works operations.

---

### 31. MSWIN encryption reality

Current RadioReference community information indicates that some Mississippi agencies/talkgroups are encrypted while others remain in the clear. For example, a September 2025 MSWIN discussion identifies several Rankin-area law/fire talkgroups as encrypted while others remain clear. ([RadioReference Forums][16])

Therefore the database needs:

```text
encryption_status:
    CLEAR
    ENCRYPTED
    UNKNOWN
```

**Never assume system-wide encryption.**

---

### 32. RadioReference

RadioReference is a secondary but very useful source for the MSWIN technical database.

Current Mississippi database material identifies MSWIN as:

```text
P25 Phase II
```

and individual counties show their operations migrating to MSWIN for primary communications. ([RadioReference][17])

#### Registry

```text
SOURCE_ID:
    MS-RADIOREFERENCE

TYPE:
    RADIO_DATABASE

DATA:
    SYSTEMS
    SITES
    FREQUENCIES
    TALKGROUPS
    AGENCY_ASSIGNMENTS

STATUS:
    🟢
```

This is a **secondary source**, so government/WCC records take priority.

---

### 33. Mississippi ALPR — major historical discovery

Mississippi has a very important ALPR history.

The Mississippi Department of Public Safety's FY2017 annual report states that the **Office of Homeland Security built a statewide ALPR system for information sharing**. ([Mississippi Department of Public Safety][18])

At that time the state had:

```text
19 cameras
1 trailer unit
24/7 operation
statewide information-sharing intent
local agencies using the state server
```

([Mississippi Department of Public Safety][18])

#### Registry

```text
SOURCE_ID:
    MS-OHS-ALPR

OWNER:
    Mississippi Office of Homeland Security

TYPE:
    STATEWIDE_ALPR

HISTORICAL_FIXED_CAMERAS:
    19

MOBILE_UNITS:
    1 TRAILER

STATUS:
    🟡 HISTORICALLY VERIFIED
```

---

### 34. Important ALPR warning

The 19-camera figure is from the **FY2017 annual report**.

Therefore:

```text
19 cameras
    =
historical verified count

NOT:
current 2026 count
```

We need current procurement records, agency records, and current system documentation to establish the present inventory.

---

### 35. Statewide ALPR sharing architecture

The historical MDPS report says local agencies purchased their own ALPR systems that operated on the **state server** to increase information sharing across Mississippi. ([Mississippi Department of Public Safety][18])

This is a very important architectural clue.

```text
LOCAL ALPR
     │
     └──────────┐
                ↓
        STATE ALPR SERVER
                │
                ↓
       INFORMATION SHARING
```

That is exactly the type of centralized architecture we need to investigate further.

---

### 36. Current ALPR procurement infrastructure

Mississippi's statewide technology procurement system currently has a **Public Safety Video & Communication Systems** contract vehicle.

It explicitly covers:

* body-worn cameras
* dashboard cameras
* **license plate readers**
* two-way radio systems
* surveillance units
* software
* security cameras
* access-control systems. ([Mississippi IT Services][19])

The current contract period is:

```text
September 30, 2024
        ↓
February 28, 2027
```

([Mississippi IT Services][19])

#### Registry

```text
SOURCE_ID:
    MS-PSVC-EPL-4599

TYPE:
    STATEWIDE_PUBLIC_SAFETY_TECH_PROCUREMENT

ALPR:
    🟢

SURVEILLANCE:
    🟢

BODY_CAM:
    🟢

DASH_CAM:
    🟢

RADIO:
    🟢

VALID:
    2024-09-30 → 2027-02-28
```

This is a **very valuable source for identifying vendors and deployed systems**.

---

### 37. Olive Branch ALPR

Mississippi's statewide procurement portal contains a public procurement record for the **Olive Branch Police Department License Plate Reader Solution**. ([MS.gov][20])

#### Registry

```text
SOURCE_ID:
    MS-OLIVE-BRANCH-ALPR

AGENCY:
    Olive Branch Police Department

TYPE:
    MUNICIPAL_ALPR

STATUS:
    🟢 PROCUREMENT VERIFIED
```

The bid was advertised in 2022.

---

### 38. Lee County ALPR

A current federal community-project request identifies a **Lee County Sheriff's Department** modernization project incorporating:

* in-car video/audio
* wireless download
* real-time video
* integrated ALPR
* NCIC updates
* evidence management. ([Trent Kelly][21])

#### Registry

```text
SOURCE_ID:
    MS-LEE-COUNTY-ALPR

AGENCY:
    Lee County Sheriff's Department

TYPE:
    MOBILE_ALPR

SYSTEM:
    IN-CAR VIDEO + ALPR

STATUS:
    🟢 CURRENT PROJECT EVIDENCE
```

This is another example of why we should search **procurement and funding records**, not just police websites.

---

### 39. Current documented ALPR camera footprint

An independent current database reports:

```text
1,044 documented ALPR cameras
```

in Mississippi as of August 27, 2026. ([Finding Flock][22])

It reports approximately:

```text
Flock Safety       513
Motorola            18
Genetec             58
Leonardo/ELSAG       4
Other                8
Unknown             14
```

for its indexed city inventory, with additional cameras outside those cities. ([Finding Flock][22])

#### VERY IMPORTANT

This is **not an official Mississippi government inventory**.

Therefore:

```text
MS ALPR COUNT:
    1,044

SOURCE:
    third-party/crowdsourced

CONFIDENCE:
    🟡

OFFICIAL:
    🔴
```

But it is an excellent **lead-generation dataset** for finding the underlying agencies.

---

### 40. Flock Safety footprint

The independent inventory reports Flock as the largest identified manufacturer in Mississippi, with **513 documented Flock cameras** in its dataset. ([Finding Flock][22])

Again:

```text
513 =
third-party documented

NOT =
official Mississippi Flock count
```

The correct workflow is:

```text
third-party location
        ↓
identify municipality
        ↓
find police procurement
        ↓
find contract
        ↓
find public-record policy
        ↓
verify exact camera
```

---

### 41. Mississippi ALPR public records

Mississippi's Public Records Act establishes a broad presumption of public access.

The Mississippi Ethics Commission explains that public records are public property and generally available for inspection/copying, subject to statutory exemptions. ([Mississippi Ethics Commission][23])

However, investigative reports and information revealing investigative techniques can be exempt. ([Mississippi Ethics Commission][23])

#### ALPR implication

```text
ALPR CONTRACT:
    🟢 likely public

ALPR PROCUREMENT:
    🟢 public

ALPR POLICY:
    🟢 likely public

CAMERA LOCATION:
    🟡 agency-dependent

INDIVIDUAL PLATE READ:
    🔴 potentially investigative/restricted

INVESTIGATIVE ALPR DATA:
    🔴 potentially exempt
```

We should not assume that Mississippi's broad public-record law makes the actual ALPR database public.

---

### 42. Mississippi incident reports

Mississippi law specifically states that an **incident report is a public record**. ([Mississippi Ethics Commission][23])

The Public Records Act defines the incident report as including, at minimum:

* person charged/arrested
* time
* date
* location
* property involved, where known. ([Mississippi Ethics Commission][23])

#### Registry

```text
SOURCE_ID:
    MS-LAW-ENFORCEMENT-INCIDENTS

TYPE:
    PUBLIC_INCIDENT_RECORDS

ACCESS:
    PUBLIC

STATUS:
    🟢 STATUTORILY SUPPORTED
```

This is not a statewide live CAD feed, however.

---

### 43. Mississippi DPS public datasets

The Mississippi Department of Public Safety maintains a public-data portal.

It says its public-release datasets are made available to the public free of charge and may be provided as:

* Excel
* CSV
* related definition files. ([Mississippi Public Data][24])

Current categories include:

* crash data
* arrest data
* citation data. ([Mississippi Public Data][24])

#### Registry

```text
SOURCE_ID:
    MS-DPS-PUBLIC-DATA

TYPE:
    STATE_PUBLIC_SAFETY_DATA

FORMATS:
    XLSX
    CSV

STATUS:
    🟢
```

---

### 44. Mississippi crash data

The DPS public-data portal specifically publishes crash data. ([Mississippi Public Data][24])

```text
SOURCE_ID:
    MS-DPS-CRASH

TYPE:
    CRASH_DATA

STATUS:
    🟢
```

This isn't a camera feed, but it is valuable for correlating camera events and traffic incidents.

---

### 45. Mississippi NIBRS

Mississippi operates a statewide NIBRS program through DPS.

The Mississippi NIBRS site identifies Mississippi as a recognized State UCR Program. ([NIBRS][25])

#### Registry

```text
SOURCE_ID:
    MS-NIBRS

OWNER:
    Mississippi DPS

TYPE:
    CRIME_REPORTING

STATUS:
    🟢
```

---

### 46. State Criminal Information Center

The Mississippi Criminal Information Center is the state's primary conduit for information exchange with:

* FBI NCIC
* national exchanges
* statewide law-enforcement information systems. ([Mississippi Department of Public Safety][26])

#### Registry

```text
SOURCE_ID:
    MS-CIC

TYPE:
    LAW_ENFORCEMENT_INFORMATION_EXCHANGE

ACCESS:
    AGENCY-RESTRICTED

STATUS:
    🟡 DISCOVERY ONLY
```

This is **not a public data source** and should not be treated as one.

---

### 47. UAV / aerial public-safety cameras

The old MDPS annual report also documents a statewide UAV program.

At the time it reported:

```text
12 UAVs
real-time camera systems
```

used for:

* search and rescue
* law-enforcement support
* hazmat
* storm damage
* explosive-ordnance teams. ([Mississippi Department of Public Safety][18])

#### Registry

```text
SOURCE_ID:
    MS-OHS-UAV

TYPE:
    PUBLIC_SAFETY_AERIAL_CAMERA

HISTORICAL_COUNT:
    12 UAVs

STATUS:
    🟡 HISTORICAL
```

This is another **lead**, not a current fleet count.

---

### 48. Public-safety video procurement

The current PSVC procurement category is unusually broad.

It explicitly covers:

```text
BODY-WORN CAMERA
DASH CAMERA
ALPR
TWO-WAY RADIO
SURVEILLANCE UNIT
SECURITY CAMERA
ACCESS CONTROL
SOFTWARE
SUPPORT
```

([Mississippi IT Services][19])

That means Mississippi's procurement system should be treated as a **surveillance-source discovery engine**.

---

### 49. Source hierarchy — Mississippi

The strongest discovery path is:

```text
MS.GOV
   │
   ├── MDOT
   │    └── MDOTTraffic
   │         ├── Cameras
   │         ├── Video
   │         ├── Weather
   │         ├── DMS
   │         └── Traffic
   │
   ├── WCC
   │    └── MSWIN
   │         ├── Sites
   │         ├── Talkgroups
   │         └── Agencies
   │
   ├── DPS
   │    ├── Public Data
   │    ├── NIBRS
   │    └── CIC
   │
   └── ITS Procurement
        └── PSVC
             ├── ALPR
             ├── CCTV
             ├── Body Cameras
             ├── Dash Cameras
             └── Radios
```

---

### 50. Camera source registry

| Source ID                 | Owner | Data                         | Access               | Status |
| ------------------------- | ----- | ---------------------------- | -------------------- | ------ |
| `MS-MDOTTRAFFIC`          | MDOT  | Statewide traffic system     | Public               | 🟢     |
| `MS-MDOT-CCTV`            | MDOT  | Traffic cameras              | Public               | 🟢     |
| `MS-MDOT-CCTV-VIDEO`      | MDOT  | Streaming video              | Public               | 🟢     |
| `MS-MDOT-TRAFFIC-IMAGERY` | MDOT  | Real-time imagery + metadata | Public-facing        | 🟢     |
| `MS-MDOT-ALERTS`          | MDOT  | Traffic alerts               | Public               | 🟢     |
| `MS-MDOT-CLOSURES`        | MDOT  | Road closures                | Public               | 🟢     |
| `MS-MDOT-ROADWORK`        | MDOT  | Construction                 | Public               | 🟢     |
| `MS-MDOT-RWIS`            | MDOT  | Weather sensors              | Public               | 🟢     |
| `MS-MDOT-DMS`             | MDOT  | Message signs                | Public               | 🟢     |
| `MS-MDOT-TRAFFIC`         | MDOT  | Traffic conditions           | Public               | 🟢     |
| `MS-MDOT-TMC`             | MDOT  | TMC infrastructure           | Public documentation | 🟢     |

---

### 51. Radio source registry

| Source ID                     | Owner                   | Data                 | Access                      | Status |
| ----------------------------- | ----------------------- | -------------------- | --------------------------- | ------ |
| `MS-MSWIN`                    | WCC                     | Statewide P25 system | Public system documentation | 🟢     |
| `MS-MSWIN-SITES`              | WCC                     | Radio sites          | Public documentation        | 🟢     |
| `MS-MSWIN-TALKGROUPS`         | Third-party observation | Talkgroups           | Public                      | 🟢     |
| `MS-MSWIN-PUBLIC-CALLS`       | Broadcastify            | Live calls           | Public                      | 🟢     |
| `MS-MSWIN-BROADCASTIFY-CALLS` | Broadcastify            | SDR ingest           | Public                      | 🟢     |
| `MS-BROADCASTIFY`             | Third party             | Scanner feeds        | Public                      | 🟢     |
| `MS-RADIOREFERENCE`           | Third party             | Radio database       | Public                      | 🟢     |

---

### 52. ALPR source registry

| Source ID                | Data                           | Status                     |
| ------------------------ | ------------------------------ | -------------------------- |
| `MS-OHS-ALPR`            | Historical statewide ALPR      | 🟡                         |
| `MS-PSVC-EPL-4599`       | Statewide ALPR procurement     | 🟢                         |
| `MS-OLIVE-BRANCH-ALPR`   | Municipal ALPR procurement     | 🟢                         |
| `MS-LEE-COUNTY-ALPR`     | Mobile ALPR/in-car system      | 🟢                         |
| `MS-FLOCK`               | Flock deployments              | 🟡 — third-party inventory |
| `MS-ALPR-PUBLIC-RECORDS` | Contracts/policies/records     | 🟢                         |
| `MS-OHS-UAV`             | Historical aerial camera fleet | 🟡                         |

---

### 53. Exact sources worth preserving

These should go into the master research database immediately.

#### MDOT

[MDOTTraffic live system](https://www.mdottraffic.com/?utm_source=chatgpt.com)

[MDOT Intelligent Transportation Systems](https://drivesmart.mdot.ms.gov/intelligent-transportation-systems/?utm_source=chatgpt.com)

#### MSWIN

[Mississippi Wireless Information Network — official WCC source](https://www.wcc.ms.gov/mswin?utm_source=chatgpt.com)

[MSWIN User Information](https://www.wcc.ms.gov/mswin-user-information?utm_source=chatgpt.com)

#### Mississippi public data

[Mississippi DPS Public Data](https://publicdata.dps.ms.gov/?utm_source=chatgpt.com)

#### Public radio

[Mississippi Broadcastify feeds](https://status.broadcastify.com/listen/stid/28?utm_source=chatgpt.com)

[MSWIN live talkgroups](https://status.broadcastify.com/calls/tg/4879?utm_source=chatgpt.com)

#### Public records

[Mississippi Public Records Act — Ethics Commission](https://www.ethics.ms.gov/thepublicrecordact?utm_source=chatgpt.com)

---

### 54. Highest-priority ingestion targets

#### Tier 1

```text
1. MS-MDOT-CCTV
2. MS-MDOT-CCTV-VIDEO
3. MS-MDOT-TRAFFIC-IMAGERY
4. MS-MDOT-RWIS
5. MS-MDOT-DMS
6. MS-MSWIN
7. MS-MSWIN-TALKGROUPS
8. MS-MSWIN-PUBLIC-CALLS
```

---

#### Tier 2

```text
9. MS-PSVC-EPL-4599
10. MS-OHS-ALPR
11. MS-OLIVE-BRANCH-ALPR
12. MS-LEE-COUNTY-ALPR
13. MS-FLOCK
14. MS-DPS-PUBLIC-DATA
15. MS-NIBRS
```

---

#### Tier 3

```text
16. Municipal CCTV
17. Municipal ALPR
18. Sheriff ALPR
19. Body-camera systems
20. Dash-camera systems
21. UAV camera systems
22. County CAD systems
23. Municipal CAD systems
```

---

### 55. What remains unresolved

I am **not** going to pretend we have exact endpoints where we haven't established them.

#### Still requiring endpoint-level discovery:

```text
🟡 Exact MDOTTraffic camera API endpoint
🟡 Exact camera JSON schema
🟡 Exact stream URL generation mechanism
🟡 Current exact camera count
🟡 Current statewide ALPR inventory
🟡 Current Mississippi state ALPR server architecture
🟡 Current ALPR fixed-location dataset
🟡 Current municipal ALPR inventory
🟡 Statewide CAD API
```

These are **research tasks**, not gaps that should be filled with guessed URLs.

---

### 56. Mississippi assessment

#### **9.6 / 10 — VERY HIGH VALUE**

| Category                                  |           Rating |
| ----------------------------------------- | ---------------: |
| State traffic cameras                     |     🟢 Excellent |
| Live traffic video                        |     🟢 Excellent |
| Camera metadata                           |               🟢 |
| Weather sensors                           |               🟢 |
| DMS                                       |               🟢 |
| Traffic alerts                            |               🟢 |
| Statewide P25                             | 🟢 **Excellent** |
| Public scanner coverage                   |               🟢 |
| MSWIN live-call ecosystem                 |               🟢 |
| Historical statewide ALPR                 | 🟢 **Important** |
| Current ALPR procurement                  |               🟢 |
| Flock footprint                           |               🟢 |
| Current official statewide ALPR inventory |               🟡 |
| Public individual plate reads             |               🔴 |
| Statewide CAD                             |               🔴 |

##### Most important discoveries

**#1 — MDOTTraffic**

A real statewide public camera/video system with an enumerable camera layer and public streaming access. ([MDOT Traffic][2])

**#2 — MSWIN**

A statewide P25 network with 144+ sites and active public SDR/streaming coverage. ([Mississippi Wireless Commission][10])

**#3 — Statewide ALPR architecture**

Mississippi historically operated a centralized statewide ALPR system and allowed local systems to operate on the state's server. ([Mississippi Department of Public Safety][18])

**#4 — Current surveillance procurement**

The state currently maintains a public-safety technology procurement vehicle explicitly covering ALPR, surveillance, body cameras, dash cameras and radio systems through February 2027. ([Mississippi IT Services][19])

**#5 — Current ALPR footprint**

Third-party mapping currently documents **1,044 Mississippi ALPR cameras**, providing a large lead list that can be systematically traced back to agencies and procurement records. ([Finding Flock][22])

---

#### Mississippi master graph

```text
MISSISSIPPI
│
├── 🟢 MDOT
│   │
│   └── MDOTTraffic
│       ├── 🟢 CCTV
│       ├── 🟢 Live Streaming
│       ├── 🟢 Camera Metadata
│       ├── 🟢 Traffic
│       ├── 🟢 Alerts
│       ├── 🟢 Closures
│       ├── 🟢 Road Work
│       ├── 🟢 Weather Sensors
│       └── 🟢 DMS
│
├── 🟢 MSWIN
│   │
│   ├── 🟢 P25
│   ├── 🟢 144+ Sites
│   ├── 🟢 State Police
│   ├── 🟢 Local Police
│   ├── 🟢 Fire/EMS
│   ├── 🟢 MDOT
│   └── 🟢 Public SDR Ingest
│
├── 🟢 ALPR
│   │
│   ├── 🟡 Historical Statewide System
│   ├── 🟢 Current Procurement
│   ├── 🟢 Local Systems
│   ├── 🟢 Flock
│   ├── 🟢 Motorola
│   ├── 🟢 Genetec
│   └── 🟡 Exact Current Inventory
│
├── 🟢 PUBLIC SAFETY DATA
│   ├── Crash
│   ├── Arrest
│   ├── Citation
│   └── NIBRS
│
└── 🟢 PUBLIC RECORDS
    ├── Contracts
    ├── Procurement
    ├── Policies
    └── Incident Reports
```

**Mississippi complete for the state-level source pass.**

**Next alphabetically: Missouri.**

[1]: https://drivesmart.mdot.ms.gov/intelligent-transportation-systems/?utm_source=chatgpt.com "Intelligent Transportation Systems - Drive Smart MS"
[2]: https://www.mdottraffic.com/?a=551057&utm_source=chatgpt.com "MDOTtraffic | Powered by MDOT"
[3]: https://play.google.com/store/apps/details?id=com.nicusa.ms.mdot.traffic&utm_source=chatgpt.com "MDOT Traffic (Mississippi) - Apps on Google Play"
[4]: https://apps.apple.com/us/app/mdot-traffic-mississippi/id513915894?utm_source=chatgpt.com "‎MDOT Traffic (Mississippi) App - App Store"
[5]: https://www.mdottraffic.com/?a=560873&utm_source=chatgpt.com "MDOTtraffic | Powered by MDOT"
[6]: https://www.its.ms.gov/sites/default/files/ServicesPDFs/Master_Plan%20ITS.pdf?utm_source=chatgpt.com "Table of Contents"
[7]: https://cmpdd.org/images/transportation/mpo/2025/its-architecture/web/html/if/if11-52.htm?utm_source=chatgpt.com "Central Mississippi ITS Architecture - Interface: MDOTtraffic.com - Mississippi 511 System"
[8]: https://mdot.ms.gov/bidsystem_data/20171205/ADDENDUMS/106994301_1.pdf?utm_source=chatgpt.com "Internet Addendum"
[9]: https://mdot.ms.gov/documents/Traffic%20Engineering/Manuals/MDOT%20ITS%20Design%20Manual.pdf?utm_source=chatgpt.com "<AECOM Report>"
[10]: https://www.wcc.ms.gov/mswin?utm_source=chatgpt.com "MSWIN | MISSISSIPPI WIRELESS COMMUNICATION COMMISSION"
[11]: https://www.wcc.ms.gov/faqs?utm_source=chatgpt.com "FAQs | MISSISSIPPI WIRELESS COMMUNICATION COMMISSION"
[12]: https://www.wcc.ms.gov/technical-information?utm_source=chatgpt.com "Technical Information | MISSISSIPPI WIRELESS COMMUNICATION COMMISSION"
[13]: https://status.broadcastify.com/calls/tg/4879?utm_source=chatgpt.com "All Talkgroups: Mississippi Wireless Information Network (MSWIN)"
[14]: https://status.broadcastify.com/listen/stid/28?utm_source=chatgpt.com "Mississippi Audio Feeds"
[15]: https://status.broadcastify.com/listen/ctid/1426?utm_source=chatgpt.com "Jackson County, Mississippi Audio Feeds"
[16]: https://forums.radioreference.com/threads/official-mswin-thread.52629/post-4212886?utm_source=chatgpt.com "OFFICIAL MSWIN Thread | Page 114 | RadioReference.com Forums"
[17]: https://www.radioreference.com/db/browse/ctid/1414?utm_source=chatgpt.com "Forrest County, Mississippi (MS) Scanner Frequencies and Radio Frequency Reference"
[18]: https://www.dps.ms.gov/sites/dps/files/documents/DPS-FY2017-Annual-Report.pdf?utm_source=chatgpt.com "ALPR Program"
[19]: https://www.its.ms.gov/procurement/PSVC-EPL-4599?utm_source=chatgpt.com "Public Safety Video & Communication Systems EPL 4599 | Mississippi Department of Information Technology Services"
[20]: https://www.ms.gov/dfa/contract_bid_search/Bid/Details/26636?utm_source=chatgpt.com "Procurement Details - Buying and Selling to Government of Mississippi"
[21]: https://trentkelly.house.gov/legislation/fiscal-year-2026-appropriations-community-project-funding-requests.htm?utm_source=chatgpt.com "Fiscal Year 2026 Appropriations Community Project Funding Requests : Congressman Trent Kelly"
[22]: https://www.findingflock.com/cameras/mississippi?utm_source=chatgpt.com "1,044 Flock & ALPR Cameras in Mississippi · Finding Flock"
[23]: https://www.ethics.ms.gov/thepublicrecordact?utm_source=chatgpt.com "Title 25, Chapter 61, Public Access to Public Records | Mississippi Ethics Commission"
[24]: https://publicdata.dps.ms.gov/?utm_source=chatgpt.com "Mississippi Department of Public Safety - Public Data"
[25]: https://www.nibrs.dps.ms.gov/contact?utm_source=chatgpt.com "Contact | Mississippi NIBRS"
[26]: https://www.dps.ms.gov/investigation/criminal-information-center?utm_source=chatgpt.com "Criminal Information Center | Mississippi Department of Public Safety"
