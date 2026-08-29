---
state: Rhode Island
usps: RI
slug: rhode-island
dossier_number: 39
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
  imported_from: project_atlas_state_data/Rhode Island.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Rhode Island (RI) - ATLAS State Record

> Dossier **39 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Rhode Island is small, but it has a **surprisingly strong public-camera and public-safety data ecosystem**.

The major systems are:

1. **RIDOT Traffic Cameras**
2. **RIDOT traveler-information / incident data**
3. **RIDOT ITS infrastructure**
4. **RISCON statewide public-safety radio**
5. **Broadcastify / Broadcastify Calls**
6. **Rhode Island State Police ALPR**
7. **Providence Police / Flock ALPR**
8. **Municipal Flock deployments**
9. **Rhode Island Turnpike & Bridge Authority infrastructure**

The ALPR situation is especially important because Rhode Island **just entered a statewide ALPR review/pause in August 2026**, so the state should be captured with a current regulatory timestamp.

---

### 1. Rhode Island Department of Transportation

Primary transportation agency:

**Rhode Island Department of Transportation — RIDOT**

Official traveler-information system:

**RIDOT Traffic Information & Cameras / 511**

![Image](https://images.openai.com/static-rsc-4/hbonPh5BB4LmHtoHezBpV29Y26axwjhysJHmqjwf5wozBotJ6CUSIQSrMxtzdhxB3BWwB4wSt35yLurs6ADvt5q-hATqBUdhYkoRR1PvjuT7xUJqbI25DdBqG-9kHCI-YdwtjWOOK92Ulw_OMV0zPW35DQOxJEzzznBeeOlpD56ZPW-Pyw9u-undR3Wa1zR2?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/EoZFlUAVBo-g8RvktW1x3lGNA-HUs8pOeHx2TUReQHXw7yk6Bxy6eOihgk6x8kLfZp2Wpoma7IgX3uje39zgM6skJhbQ8-txLdM6nduLbAVjvWrR2HQxbtw2qt7dKgfvUUv2N7UeXLgoMaVW8kWIJqU1K48L85hV2iMxJx3C1CadcUDIjmtoAp13LWNNNccv?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/HeEBMukDYDjYe4zOXpCqg81qRbOWA39EEtACkuwd3Bo3O2a0dMdbVUotrmo82IyJyNwB--XguoQS2EQ8DQ_sCp07SWgzEpRKlj81V9bV1hLhegwDnm-r27EMNRyXQcnKj7-Sfw1HBFNaLRrGIPpOvwjFfEB6JK-2ouwXw_oeMhEERF1zaIjcYKlUPuoD42M5?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/IzREnmoFsLEz-AstL6CGDGnotaXb--p_D2TOF5OSd7RDzWw0SfjbOJZdpVeqZBTMm5VTUlMfLgoqWizk4I-1E-H5WDYeYJuzaWmWKDVDVtDJkDqlWXdYqveZKEv3nEESpLgBxrSBIlFhjZCq7xdkfAaMEkYs-hJTRIxjB60Mz8xnT_wIkKRlElpCdJ5q3GkZ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/QaCKjyOZuuleN7BdrftdVvvSji9TGn566K59AOxI36e5Ifjp0nwWoaXCQPtOUsQskU1hkZ7_b4U8d-_Jmc05Vu0c--BrmROys3BO8FOXJgrHatpRLqVhCzuhpKWCGDoKbUVYYsVhPdxFh0gPs0fts-2zX6HiCun7dSr0x0fOuwwW6Soa8Cv8u_wjXTmFtcjH?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/PHnxFxR3AhIKZVJwBGrTMUWUF_8j3lufPC7Lvy8_0Mxyc3zigj_hOvljZhLLL2HhGaSn6ZENV4jIny524G9cFdwJe3F8UV_Mv5i1TF4fx6qTn4FBv2RYfikd6uNqVwXw8GmWZWpFuJ1g3XHb-Q38Lcg4mOrM5kw-Z-X6atZ88y5QKQtDevmIuycezDXPfrXu?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/9_6KN2RRAcSGoBB8iZYJMNaK11rLGO0V1B9pXfv090_Yi1zDjVNhKOR62BDAV7TxqbmuOCbDpzbDjiBmgtXrb2m1Th8hZgw-qJ_8lJ3qQA8A5Na8IVq_VzJrUopTlnw1udnLbEURx7_e9kTXapTnqKWJ45YhqEa3evvwixUH_bBblcix4kS6Q20qiUCJ9k57?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/svIsvR8jt0MyKUOl_QEJxotJjACVLLA3fBiDqJDvz1yiJH-HUqwKy_gTw1hB3b3li6ShHf0Whp-t_5ClQ6iwO4eOjosBSRXP_1WwZbIHzdl2CFvJwcj-LjXNnisiZcXbCut86JUls66V5VBNpo4AOekHtAfkcPaVX91oPPAetKTlc0FiVgWIA74jpFDSDygz?purpose=fullsize)

RIDOT's official traveler-information page currently exposes a statewide camera interface and live traffic cameras. ([RIDOT][1])

#### Registry

```text
SOURCE_ID:
    RI-RIDOT

OWNER:
    Rhode Island Department of Transportation

PROGRAM:
    RIDOT Traveler Information

TYPE:
    STATE_TRAVELER_INFORMATION

STATUS:
    🟢 VERIFIED
```

Official:

[RIDOT Traveler Information](https://dot.ri.gov/travel/?utm_source=chatgpt.com)

---

### 2. RIDOT Traffic Cameras

This is the primary Rhode Island camera source.

RIDOT's official site exposes:

> Top Live Traffic Cams

and provides a **"See All Cameras"** interface. ([RIDOT][1])

The camera system is divided geographically.

Current official camera pages include:

* Metropolitan Providence
* South County
* Northern Rhode Island & Blackstone Valley
* additional regional pages.

([RIDOT][2])

#### Registry

```text
SOURCE_ID:
    RI-RIDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA

STATUS:
    🟢 VERIFIED

LIVE:
    🟢 YES
```

---

### 3. RIDOT camera stream status

This is an important distinction.

RIDOT explicitly answers the question:

> "Is it possible to have access to RIDOT traffic cameras?"

RIDOT states that its cameras operate on a **live feed only** and **do not store or record data**. ([RIDOT][3])

Therefore:

```text
LIVE_STREAM:
    🟢 YES

RECORDING:
    🔴 NO

PUBLIC_ARCHIVE:
    🔴 NO

HISTORICAL_VIDEO:
    🔴 NOT PROVIDED
```

This should be stored as source metadata.

---

### 4. Exact camera inventory — South County

RIDOT's South County page exposes individual camera locations.

For example, I-95 includes:

```text
CT State Line
Exit 1 — Route 3
Exit 4 — Alton Road
Exit 7 — Route 138
Exit 9 — Route 3
Tefft Hill
Exit 14B — Route 102
Between Exits 14B & 18
Weaver Hill Road
Exit 18 — Route 3
```

It also lists cameras along:

* Route 1
* Route 4
* Route 108
* Route 138

and other roadways. ([RIDOT][2])

This demonstrates that the camera directory is not merely a handful of featured cameras.

---

### 5. Exact camera inventory — Providence

RIDOT's Metropolitan Providence page exposes numerous cameras on I-95.

Current examples include:

```text
Exit 33 / Route 10
Elmwood Avenue
Detroit Avenue
Thurbers Avenue
Public Street
Eddy Street
Broad Street
Broadway — Providence
6/10 Interchange
Kinsley Avenue
Orms Street
Branch Avenue
Near Exit 39
Smithfield Avenue
Lonsdale Avenue
Garden Street
Vernon Street
Broadway — Pawtucket
East Street
Central Avenue
```

([RIDOT][4])

#### Registry

```text
SOURCE_ID:
    RI-RIDOT-CCTV-METRO

TYPE:
    REGIONAL_CAMERA_DIRECTORY

PARENT:
    RI-RIDOT-CCTV

STATUS:
    🟢 VERIFIED
```

---

### 6. Northern Rhode Island cameras

RIDOT's Northern Rhode Island & Blackstone Valley camera page includes:

#### I-295

```text
Exit 9 Northbound — Route 6
Exit 9 Southbound — Route 6
Exit 12A Northbound — Route 44
Route 116
Exit 18A — Route 146
Exit 20 — Route 122
```

#### Route 44

```text
Route 5
```

#### Route 146

```text
Route 116
Route 146A Southbound
Route 146A Northbound
Woonsocket Hill Road
Great Road
```

([RIDOT][5])

---

### 7. RIDOT camera URLs

The public camera pages expose camera image/stream links through the site's HTML.

The top-level page currently links the camera images as:

```text
"Image: Live Stream"
```

for multiple cameras. ([RIDOT][1])

However, I am **not going to invent the underlying stream URL format**.

For ATLAS:

```text
CAMERA_PAGE:
    🟢 VERIFIED

STREAM:
    🟢 VERIFIED

DIRECT_STREAM_ENDPOINT:
    🟡 MUST BE EXTRACTED FROM CURRENT HTML/NETWORK REQUEST
```

This is exactly the sort of source that should be captured by a controlled adapter rather than assuming a URL convention.

---

### 8. RIDOT camera machine-readability

This is where Rhode Island differs from Pennsylvania.

I found strong evidence for the **public camera directory and live streams**, but I have **not verified an official public ArcGIS FeatureServer equivalent to Pennsylvania's camera layer**.

Therefore:

```text
OFFICIAL_CAMERA_DIRECTORY:
    🟢 YES

PUBLIC_HTML:
    🟢 YES

DIRECT_STREAM:
    🟢 YES

OFFICIAL_ARCGIS_CAMERA_LAYER:
    🔴 NOT VERIFIED

OFFICIAL_JSON_CAMERA_API:
    🟡 NOT VERIFIED
```

This is an important negative finding.

Do **not** create a fake "RIDOT API."

---

### 9. RIDOT traffic incidents

The same traveler-information system exposes current traffic incidents.

Current records include fields such as:

```text
Type
Time Reported
City
Travel Lanes Cleared
Roadway
Affected Lanes
Nearest Exit
Comments
```

([RIDOT][1])

Example current records include crashes and disabled vehicles on:

* I-95
* I-195
* Rhode Island Connector
* RI-37

([RIDOT][1])

#### Registry

```text
SOURCE_ID:
    RI-RIDOT-INCIDENTS

TYPE:
    TRAFFIC_EVENT

FIELDS:
    type
    reported_time
    city
    roadway
    affected_lanes
    cleared_time
    exit
    comments

STATUS:
    🟢 VERIFIED
```

---

### 10. RIDOT travel advisories

RIDOT also publishes statewide travel advisories divided into regions:

```text
Interstate Highways
Other Limited Access Highways
Metropolitan Providence
East Bay
Newport County
Northern RI & Blackstone Valley
South County
West Bay
```

([RIDOT][1])

#### Registry

```text
SOURCE_ID:
    RI-RIDOT-TRAVEL-ADVISORIES

TYPE:
    TRAVEL_ADVISORY

STATUS:
    🟢 VERIFIED
```

---

### 11. RIDOT Waze integration

RIDOT also documents an official partnership with Waze.

RIDOT says Waze provides a feed of travel-time information for RIDOT's highway message boards. ([RIDOT][6])

#### Registry

```text
SOURCE_ID:
    RI-RIDOT-WAZE

TYPE:
    THIRD_PARTY_TRAVEL_DATA

PROVIDER:
    Waze

STATUS:
    🟢 VERIFIED
```

Important:

This does **not** mean RIDOT exposes the entire Waze API publicly.

It means the agency has a documented Waze integration.

---

### 12. RIDOT ITS architecture

Rhode Island's 2025 Statewide ITS Architecture is valuable source-discovery material.

It explicitly documents:

### TM01 — Infrastructure-Based Traffic Surveillance

The service includes:

* traffic detectors
* surveillance equipment
* field equipment
* center-to-field communications
* CCTV systems
* Traffic Management Center connectivity
* data used for traffic monitoring
* incident identification
* road-condition monitoring.

([RIDOT][7])

#### Registry

```text
SOURCE_ID:
    RI-RIDOT-ITS-TM01

TYPE:
    ITS_ARCHITECTURE

VALUE:
    SOURCE_DISCOVERY

STATUS:
    🟢 VERIFIED
```

This document is especially useful for discovering **additional RIDOT sensor classes** later.

---

### 13. Rhode Island Turnpike & Bridge Authority

RIDOT's traveler-information page separately identifies:

**Rhode Island Turnpike & Bridge Authority — RITBA**

and its:

* Newport/Pell Bridge
* toll facilities
* bridge infrastructure.

([RIDOT][1])

#### Registry

```text
SOURCE_ID:
    RI-RITBA

OWNER:
    Rhode Island Turnpike & Bridge Authority

TYPE:
    TOLL_BRIDGE_AUTHORITY

STATUS:
    🟢 VERIFIED
```

This should be treated as a separate organization from RIDOT.

---

### 14. RITBA camera source

I did **not** find enough evidence in this pass to establish a separate publicly downloadable RITBA CCTV inventory or machine-readable camera API.

Therefore:

```text
RITBA_CAMERA_SYSTEM:
    🟡 POSSIBLE / INFRASTRUCTURE EVIDENCE

PUBLIC_CAMERA_FEED:
    🔴 NOT VERIFIED

PUBLIC_MACHINE_CAMERA_API:
    🔴 NOT VERIFIED
```

Do not merge RITBA cameras into RIDOT until a direct source is found.

---

### 15. RISCON

Now the radio side.

Rhode Island's statewide public-safety communications system is:

### RISCON

**Rhode Island Statewide Communications Network**

The Rhode Island Emergency Management Agency describes RISCON as the backbone of Rhode Island public-safety communications infrastructure. ([RI Exec Military Assn][8])

#### Registry

```text
SOURCE_ID:
    RI-RISCON

OWNER:
    Rhode Island Emergency Management Agency

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STATUS:
    🟢 VERIFIED
```

Official:

[Rhode Island Emergency Management Agency — RISCON](https://riema.ri.gov/operations-support-branch/rhode-island-communications-statewide-communications-network-riscon?utm_source=chatgpt.com)

---

### 16. RISCON scope

RISCON supports:

* police
* fire
* EMS
* emergency management
* state agencies
* local agencies
* other public-safety organizations.

RIEMA explicitly states that the network provides real-time **voice and data** services. ([RI Exec Military Assn][8])

#### Registry

```text
VOICE:
    🟢

DATA:
    🟢

POLICE:
    🟢

FIRE:
    🟢

EMS:
    🟢

INTEROPERABILITY:
    🟢
```

---

### 17. RISCON legal basis

Rhode Island law explicitly establishes:

### Rhode Island Statewide Communications Network — RISCON

under R.I. Gen. Laws §30-15-43.

The statute says the system exists for collecting, exchanging, disseminating and distributing information relating to:

* police
* fire
* first responders
* first-receiving healthcare facilities.



#### Registry

```text
LEGAL_AUTHORITY:
    R.I. Gen. Laws §30-15-43

STATUS:
    🟢 STATUTORY
```

---

### 18. RISCON frequencies / architecture

Rhode Island's statewide interoperability documentation identifies:

```text
P25
VHF
UHF
LMR
700/800 MHz
```

as relevant portions of the statewide communications architecture. ([RI Exec Military Assn][9])

Rhode Island capital documents specifically describe the RISCON infrastructure using **800 MHz**, with a 700 MHz subsystem being developed/used for additional capacity. ([Rhode Island General Assembly][10])

#### Registry

```text
STANDARD:
    P25

PRIMARY:
    800 MHz

ADDITIONAL:
    700 MHz subsystem

STATUS:
    🟢 VERIFIED
```

---

### 19. RISCON size

Rhode Island's Governor reported that the 2024 modernization work increased the statewide RISCON tower total to:

### 29 towers

([Rhode Island Governor's Office][11])

A 2024 capital document describes RISCON as the primary radio platform for **more than 10,000 first responders**, along with RIDOT, RIPTA and numerous other agencies. 

This is a substantial statewide radio system despite Rhode Island's small geographic size.

---

### 20. Encryption

Public documents show that RISCON supports secure communications and encryption.

A Rhode Island procurement document specifies RISCON-compatible radios with encryption programming. ([Division of Purchases][12])

Therefore:

```text
SYSTEM:
    🟢 PUBLICLY DOCUMENTED

ENCRYPTION CAPABILITY:
    🟢 YES

EVERY CHANNEL MONITORABLE:
    🔴 NO

PUBLIC RAW RADIO FEED:
    🔴 NOT PROVIDED BY RIEMA
```

The correct ingestion target is **publicly available scanner coverage**, not attempting to defeat encryption.

---

### 21. Broadcastify — Rhode Island

Current Broadcastify statewide data shows:

### 32 public-safety/audio feeds

across:

### 6 counties

on the Rhode Island state directory. ([Broadcastify][13])

#### Registry

```text
SOURCE_ID:
    RI-BROADCASTIFY

STATE:
    RI

COUNTIES:
    6

AUDIO_FEEDS:
    32

STATUS:
    🟢 VERIFIED
```

Broadcastify's current state page is the correct source for discovering individual public feeds.

---

### 22. Current Rhode Island Broadcastify feeds

The statewide directory currently includes feeds such as:

```text
Providence Fire
Pawtucket Fire Channels 1 and 2
NW Rhode Island
Southern Rhode Island / Southeastern Connecticut Fire & EMS
East Providence Fire / Marine Task Force
North Kingstown Fire Dispatch
Rhode Island Intercity Police and Fire
Westerly & Chariho Area Fire Departments
West Warwick Fire
Newport Fire
Portsmouth Fire
North Providence Fire and EMS
South Kingstown Fire Dispatch
Coventry Fire
Bristol Police
```

and many others. ([Broadcastify][13])

---

### 23. RISCON on Broadcastify

This is one of the strongest findings.

Providence County's Broadcastify Calls coverage currently identifies:

### Rhode Island Statewide Communications Network (RISCON)

#### Metro Simulcast

as an active Calls ingest node. ([Broadcastify][14])

#### Registry

```text
SOURCE_ID:
    RI-BROADCASTIFY-CALLS-RISCON

PARENT_SYSTEM:
    RI-RISCON

TYPE:
    P25_CALL_INGEST

NODE:
    Metro Simulcast

STATUS:
    🟢 VERIFIED
```

This means ATLAS has a real public source for **RISCON call activity**, without trying to access the underlying protected radio system directly.

---

### 24. Providence County radio coverage

Broadcastify currently shows Providence County with:

```text
Law Dispatch:
    12

Law Talk:
    4

Fire Dispatch:
    14

Fire-Tac:
    9

Fire-Talk:
    4

Interop:
    1

Multi-Tac:
    2

Public Works:
    4
```

([Broadcastify][14])

These are **coverage counts**, not necessarily unique agencies or unique radio channels.

---

### 25. Providence ALPR

This is where Rhode Island gets particularly interesting.

The Providence Police Department has an official ALPR policy.

The policy explicitly identifies:

### Flock Safety

as the ALPR vendor. ([Providence RI][15])

#### Registry

```text
SOURCE_ID:
    RI-PROVIDENCE-PD-ALPR

AGENCY:
    Providence Police Department

VENDOR:
    Flock Safety

TYPE:
    LAW_ENFORCEMENT_ALPR

STATUS:
    🟢 OFFICIAL
```

---

### 26. Providence Flock data architecture

Providence's policy says:

* Flock hosts the ALPR data
* data is retained for 30 days
* Flock is responsible for hosting/security
* Providence can retain relevant data under its own records requirements
* access requires authentication.

([Providence RI][15])

Therefore:

```text
CAMERAS:
    🟢 CONFIRMED

VENDOR:
    Flock Safety

RAW_CAPTURE_DATABASE:
    🔴 NOT PUBLIC

LAW_ENFORCEMENT_QUERY:
    🔴 NOT PUBLIC

RETENTION:
    30 DAYS — POLICY VALUE
```

---

### 27. Providence public ALPR statistics

Providence Police currently has a public-facing ALPR section.

The department explicitly states that it uses Flock Safety technology for:

* retroactive searches
* real-time hotlist alerts

and has made policies and usage statistics available publicly. ([Providence Police Department][16])

#### Registry

```text
SOURCE_ID:
    RI-PROVIDENCE-PD-ALPR-STATS

TYPE:
    PUBLIC_ALPR_STATISTICS

STATUS:
    🟢 VERIFIED
```

This is a very valuable source because it is not merely a policy document.

---

### 28. Providence ALPR reports

The Providence City Council has also publicly referenced receiving:

### FLOCK automatic license plate reader reports

from Providence Police. ([Providence City Council][17])

This establishes a secondary public-record trail for ALPR information.

```text
SOURCE_ID:
    RI-PROVIDENCE-ALPR-PUBLIC-REPORTS

TYPE:
    PUBLIC_RECORD_ALPR_REPORTS

STATUS:
    🟢 VERIFIED
```

---

### 29. Warwick ALPR

Warwick Police has an official city document concerning Flock.

In January 2022, Warwick Police requested authorization to purchase:

### 10 Flock Safety ALPR cameras

The document also states that approximately 60 Flock cameras were already operating in various Rhode Island cities at that time, naming:

* Cranston
* Woonsocket
* Pawtucket

among others. ([Warwick Rhode Island][18])

#### Registry

```text
SOURCE_ID:
    RI-WARWICK-PD-ALPR

AGENCY:
    Warwick Police Department

VENDOR:
    Flock Safety

DEPLOYMENT:
    10 cameras — documented purchase request

STATUS:
    🟢 OFFICIAL RECORD
```

---

### 30. Rhode Island State Police ALPR

The current Governor's August 18, 2026 order is particularly important.

The Governor stated that:

* the Rhode Island State Police already operate ALPR cameras
* existing State Police ALPR cameras may continue operating
* State Police will not install or activate additional ALPR cameras during the review
* the state is conducting a 60-day comprehensive review.

([Rhode Island Governor's Office][19])

#### Registry

```text
SOURCE_ID:
    RI-RISP-ALPR

AGENCY:
    Rhode Island State Police

TYPE:
    STATE_POLICE_ALPR

STATUS:
    🟢 CONFIRMED

NEW_INSTALLATIONS:
    ⛔ PAUSED

EXISTING_SYSTEM:
    🟢 CONTINUES SUBJECT TO POLICY
```

---

### 31. Rhode Island ALPR statewide situation

This is a major current-state finding.

On:

### August 18, 2026

Governor Dan McKee ordered a:

### 60-day statewide ALPR review

and called for a pause on new ALPR installations and activations. ([Rhode Island Governor's Office][19])

The review is intended to establish uniform statewide standards concerning:

* privacy
* data use
* transparency
* local consultation
* data controls.

Therefore our source database needs:

```text
ALPR_POLICY_STATUS:
    REVIEW_IN_PROGRESS

NEW_INSTALLATION_STATUS:
    PAUSED

EFFECTIVE_DATE:
    2026-08-18

REVIEW_PERIOD:
    60 DAYS
```

This is **current information**, not historical background.

---

### 32. Rhode Island ALPR statewide inventory

I did **not** find an official statewide machine-readable ALPR inventory.

Therefore:

```text
OFFICIAL_STATEWIDE_ALPR_DATASET:
    🔴 NOT FOUND

OFFICIAL_STATEWIDE_CAMERA_COUNT:
    🔴 NOT FOUND

STATE_POLICE_DEPLOYMENT:
    🟢 CONFIRMED

MUNICIPAL_DEPLOYMENTS:
    🟢 CONFIRMED

MUNICIPAL_VENDOR_RECORDS:
    🟢 CONFIRMED

PUBLIC_STATEWIDE_INVENTORY:
    🔴 NOT VERIFIED
```

This is exactly where ATLAS should use **agency-by-agency records** rather than inventing a statewide count.

---

### 33. Municipal ALPR discovery targets

Based on official documents, the first Rhode Island municipalities to investigate are:

```text
Providence
Warwick
Cranston
Woonsocket
Pawtucket
```

Warwick's official 2022 procurement record explicitly identifies Cranston, Woonsocket and Pawtucket as having Flock deployments. ([Warwick Rhode Island][18])

Providence has independent current official evidence. ([Providence Police Department][16])

This gives us a strong starting graph.

---

### 34. Important distinction: ALPR metadata vs ALPR captures

For this project:

```text
ALPR CAMERA EXISTENCE:
    🟢 PUBLICLY DOCUMENTED

ALPR LOCATION:
    🟡 SOMETIMES PUBLIC

ALPR VENDOR:
    🟢 OFTEN PUBLIC

ALPR POLICY:
    🟢 PUBLIC

ALPR STATISTICS:
    🟢 SOMETIMES PUBLIC

RAW PLATE CAPTURES:
    🔴 NOT PUBLIC

PLATE SEARCH:
    🔴 NOT PUBLIC

REAL-TIME LAW-ENFORCEMENT ACCESS:
    🔴 NOT PUBLIC
```

ATLAS should only ingest the first five categories where legally/publicly available.

---

### 35. Rhode Island source architecture

The correct source tree is:

```text
RHODE ISLAND
│
├── RIDOT
│   │
│   ├── Traffic Cameras
│   │   ├── Metropolitan Providence
│   │   ├── South County
│   │   ├── Northern RI
│   │   ├── East Bay
│   │   ├── Newport
│   │   └── West Bay
│   │
│   ├── Traffic Incidents
│   ├── Travel Advisories
│   ├── ITS Surveillance
│   └── Waze Integration
│
├── RITBA
│   ├── Newport/Pell Bridge
│   └── Other toll/bridge infrastructure
│
├── RIEMA
│   └── RISCON
│       ├── 800 MHz
│       ├── 700 MHz subsystem
│       ├── statewide agencies
│       └── municipal agencies
│
├── Rhode Island State Police
│   └── ALPR
│
├── Providence Police
│   └── Flock ALPR
│
├── Warwick Police
│   └── Flock ALPR
│
├── Other municipal agencies
│   └── Flock / other ALPR
│
└── Public scanner ecosystem
    ├── Broadcastify
    └── Broadcastify Calls
```

---

### 36. Primary exact source records

#### RIDOT Traveler Information

[RIDOT Traveler Information](https://dot.ri.gov/travel/?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-RIDOT

TYPE:
    STATE_TRAVELER_INFORMATION

STATUS:
    🟢 VERIFIED
```

RIDOT's live camera interface and current incident data are directly visible there. ([RIDOT][1])

---

#### RIDOT South County Cameras

[RIDOT South County Cameras](https://dot.ri.gov/travel/cameras_scounty.php?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-RIDOT-CCTV-SOUTH

TYPE:
    CAMERA_DIRECTORY

STATUS:
    🟢 VERIFIED
```

([RIDOT][20])

---

#### RIDOT Northern RI Cameras

[RIDOT Northern RI Cameras](https://dot.ri.gov/travel/cameras_bstonenorth.php?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-RIDOT-CCTV-NORTH

TYPE:
    CAMERA_DIRECTORY

STATUS:
    🟢 VERIFIED
```

([RIDOT][5])

---

#### RIDOT Providence Cameras

[RIDOT Metropolitan Providence Cameras](https://dot.ri.gov/travel/cameras_metro.php?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-RIDOT-CCTV-PROVIDENCE

TYPE:
    CAMERA_DIRECTORY

STATUS:
    🟢 VERIFIED
```

([RIDOT][4])

---

#### RISCON

[RIEMA RISCON](https://riema.ri.gov/operations-support-branch/rhode-island-communications-statewide-communications-network-riscon?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-RISCON

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STATUS:
    🟢 VERIFIED
```

([RI Exec Military Assn][8])

---

#### Broadcastify Rhode Island

[Broadcastify Rhode Island feeds](https://status.broadcastify.com/listen/stid/44/publicsafety?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_FEEDS

CURRENT:
    32 feeds

STATUS:
    🟢 VERIFIED
```

([Broadcastify][13])

---

#### Broadcastify RISCON Calls

[Broadcastify Providence County / RISCON coverage](https://status.broadcastify.com/listen/ctid/2311/publicsafety?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-BROADCASTIFY-CALLS-RISCON

TYPE:
    RADIO_CALL_INGEST

SYSTEM:
    RISCON

NODE:
    Metro Simulcast

STATUS:
    🟢 VERIFIED
```

([Broadcastify][14])

---

#### Providence Police ALPR

[Providence Police Department](https://ppd.providenceri.gov/?utm_source=chatgpt.com)

```text
SOURCE_ID:
    RI-PROVIDENCE-PD-ALPR

VENDOR:
    Flock Safety

TYPE:
    ALPR

STATUS:
    🟢 VERIFIED
```

([Providence Police Department][16])

---

### 37. Rhode Island source matrix

| Source                    | Category         | Machine-readable | Access               | Status          |
| ------------------------- | ---------------- | ---------------: | -------------------- | --------------- |
| RIDOT CCTV directory      | Cameras          |               🟡 | Public               | 🟢              |
| RIDOT live camera streams | Cameras          |               🟡 | Public web           | 🟢              |
| RIDOT incidents           | Traffic          |               🟡 | Public web           | 🟢              |
| RIDOT travel advisories   | Traffic          |               🟡 | Public web           | 🟢              |
| RIDOT ITS architecture    | Sensor discovery |               🟡 | Public               | 🟢              |
| RIDOT Waze integration    | Traffic          |               🟡 | Agency integration   | 🟢              |
| RITBA infrastructure      | Bridges/tolls    |               🟡 | Public               | 🟢              |
| RITBA CCTV API            | Cameras          |                — | —                    | 🔴 not verified |
| RISCON                    | Radio            |     ❌ raw system | System documentation | 🟢              |
| Broadcastify              | Scanner          |               🟡 | Public feeds         | 🟢              |
| Broadcastify Calls        | Radio calls      |               🟡 | Public coverage      | 🟢              |
| Providence Flock          | ALPR             |       ❌ raw data | Agency system        | 🟢              |
| Warwick Flock             | ALPR             |       ❌ raw data | Agency records       | 🟢              |
| RI State Police ALPR      | ALPR             |       ❌ raw data | Agency system        | 🟢              |
| Statewide ALPR inventory  | ALPR             |                ❌ | —                    | 🔴 not found    |

---

### 38. Rhode Island ATLAS score

| Category                             |           Rating |
| ------------------------------------ | ---------------: |
| State traffic cameras                | 🟢 **Excellent** |
| Public camera directory              |               🟢 |
| Live streams                         |               🟢 |
| Camera geographic organization       |               🟢 |
| Official machine-readable camera API |               🟡 |
| Camera coordinates                   |               🟡 |
| Traffic incidents                    |               🟢 |
| Travel advisories                    |               🟢 |
| ITS documentation                    |               🟢 |
| Statewide P25                        | 🟢 **Excellent** |
| Public scanner coverage              |               🟢 |
| RISCON Calls coverage                |               🟢 |
| ALPR deployments                     |               🟢 |
| ALPR vendor information              |               🟢 |
| ALPR raw data                        |               🔴 |
| Statewide ALPR inventory             |               🔴 |
| Current ALPR policy status           | 🟢 **Excellent** |
| RITBA camera data                    |               🟡 |

### **Overall: 8.8 / 10**

Rhode Island scores slightly below Pennsylvania primarily because I **could not verify a public statewide machine-readable camera feature layer** comparable to PennDOT's ArcGIS source.

The actual **camera coverage and live feeds are strong**, however.

---

### 39. Highest-priority ingestion targets

#### 🥇 RIDOT camera directories

These are the core Rhode Island camera sources.

```text
RI-RIDOT-CCTV
```

Extract every regional page and every individual camera.

---

#### 🥈 RIDOT live stream endpoints

Do a controlled network inspection of the current RIDOT camera page to determine the **actual current image/video endpoint**.

Do not infer it.

---

#### 🥉 RIDOT incidents

```text
RI-RIDOT-INCIDENTS
```

Capture the actual current HTML/network data structure.

---

### 4. RISCON

```text
RI-RISCON
```

Treat the statewide radio network as the parent system.

---

### 5. Broadcastify Calls

```text
RI-BROADCASTIFY-CALLS-RISCON
```

This is the best verified public path I found for actual RISCON call activity.

---

### 6. Providence Flock

```text
RI-PROVIDENCE-PD-ALPR
```

Official agency + official policy + official vendor.

---

### 7. Rhode Island State Police ALPR

```text
RI-RISP-ALPR
```

Existing system confirmed by the Governor's August 2026 order.

---

### 8. Municipal Flock records

Start with:

```text
Providence
Warwick
Cranston
Woonsocket
Pawtucket
```

because official Rhode Island records already establish deployments.

---

### 40. Final Rhode Island classification

```text
╔══════════════════════════════════════════════╗
║             RHODE ISLAND — ATLAS             ║
╠══════════════════════════════════════════════╣
║                                              ║
║ RIDOT CAMERAS             🟢 EXCELLENT       ║
║ LIVE CAMERA STREAMS       🟢 VERIFIED        ║
║ CAMERA DIRECTORY          🟢 VERIFIED        ║
║ MACHINE CAMERA API        🟡 NOT VERIFIED    ║
║                                              ║
║ RIDOT INCIDENTS            🟢 VERIFIED        ║
║ TRAVEL ADVISORIES          🟢 VERIFIED        ║
║ ITS SURVEILLANCE           🟢 VERIFIED        ║
║ WAZE INTEGRATION           🟢 VERIFIED        ║
║                                              ║
║ RITBA                       🟢 VERIFIED        ║
║ RITBA CCTV API              🔴 NOT VERIFIED   ║
║                                              ║
║ RISCON                      🟢 STATEWIDE      ║
║ P25                         🟢                ║
║ 700/800 MHz                🟢                ║
║ RADIO CALL INGEST           🟢                ║
║                                              ║
║ BROADCASTIFY                🟢 32 FEEDS       ║
║ BROADCASTIFY CALLS          🟢 RISCON         ║
║                                              ║
║ STATE POLICE ALPR           🟢 CONFIRMED      ║
║ PROVIDENCE FLOCK            🟢 CONFIRMED      ║
║ WARWICK FLOCK               🟢 CONFIRMED      ║
║ MUNICIPAL ALPR              🟢 EXTENSIVE      ║
║ STATEWIDE ALPR INVENTORY    🔴 NOT FOUND      ║
║                                              ║
║ ALPR NEW INSTALLATIONS      ⛔ PAUSED         ║
║ ALPR STATE REVIEW           🟡 60 DAYS        ║
║                                              ║
║ OVERALL                     ⭐ 8.8 / 10       ║
╚══════════════════════════════════════════════╝
```

#### Rhode Island is complete.

**Next alphabetically: South Carolina.**

[1]: https://dot.ri.gov/travel/ "Traveler Information - Rhode Island Rhode Island Department of Transportation"
[2]: https://dot.ri.gov/travel/cameras_scounty.php?utm_source=chatgpt.com "Traffic Cameras - South County - Rhode Island Rhode Island Department of Transportation"
[3]: https://dot.ri.gov/about/help.php?utm_source=chatgpt.com "Need Help - RIDOT Constituent Services - Rhode Island Rhode Island Department of Transportation"
[4]: https://dot.ri.gov/travel/cameras_metro.php?utm_source=chatgpt.com "Traffic Cameras - Metropolitan Providence - Rhode Island Rhode Island Department of Transportation"
[5]: https://dot.ri.gov/travel/cameras_bstonenorth.php?utm_source=chatgpt.com "Traffic Cameras - Northern R.I. & Blackstone Valley - Rhode Island Rhode Island Department of Transportation"
[6]: https://www.dot.ri.gov/travel/wazetravel.php?utm_source=chatgpt.com "Traveler Information - Rhode Island Rhode Island Department of Transportation"
[7]: https://www.dot.ri.gov/business/documents/Rhode_Island_Statewide_ITS_Architecture_Report.pdf?utm_source=chatgpt.com "Rhode Island Statewide ITS Architecture"
[8]: https://riema.ri.gov/operations-support-branch/rhode-island-communications-statewide-communications-network-riscon?utm_source=chatgpt.com "Rhode Island Communications Statewide Communications Network (RISCON) | Emergency Management Agency"
[9]: https://riema.ri.gov/sites/g/files/xkgbur1196/files/2025-09/2020-RI-Statewide-Communications-Interoperability-Plan_FINAL.pdf?utm_source=chatgpt.com "RHODE ISLANDSTATEWIDE COMMUNICATION"
[10]: https://www.rilegislature.gov/housefiscalreport/2020/FY%202024%20Budget%20Analysis%20%20Section%20IV%20Capital%20Budget.pdf?utm_source=chatgpt.com "Section IV"
[11]: https://governor.ri.gov/press-releases/governor-mckee-highlights-2024-rhode-island-emergency-management-agency?utm_source=chatgpt.com "Governor McKee Highlights 2024 Rhode Island Emergency Management Agency Accomplishments | Governor's Office, State of Rhode Island"
[12]: https://purchasing.ri.gov/RIVIP/ExternalBids/quasipublicagencies/riairportcorpBids/ifb%2026327.pdf?utm_source=chatgpt.com "Signed cover sheet.pdf"
[13]: https://status.broadcastify.com/listen/stid/44/publicsafety?utm_source=chatgpt.com "Rhode Island Audio Feeds"
[14]: https://status.broadcastify.com/listen/ctid/2311/publicsafety?utm_source=chatgpt.com "Providence County, Rhode Island Audio Feeds"
[15]: https://www.providenceri.gov/wp-content/uploads/2022/06/PPD-Policy-re-ALPR.pdf?utm_source=chatgpt.com "ORDER"
[16]: https://ppd.providenceri.gov/?utm_source=chatgpt.com "Providence Police Department - Providence Police Department"
[17]: https://council.providenceri.gov/author/council/page/32/?utm_source=chatgpt.com "Council Staff, Author at Providence City Council - Page 32 of 48"
[18]: https://www.warwickri.gov/sites/g/files/vyhlif12206/f/agendas/pcr-27-22_2022-333_flock_automatic_license_plate_readers_sec._56-6_backup.pdf?utm_source=chatgpt.com "CITY of WARWICK"
[19]: https://governor.ri.gov/press-releases/governor-mckee-takes-action-automated-license-plate-readers-calls-pause-new?utm_source=chatgpt.com "Governor McKee Takes Action on Automated License Plate Readers, Calls for Pause of New Installations and Directs Data Privacy Review | Governor's Office, State of Rhode Island"
[20]: https://dot.ri.gov/travel/cameras_scounty.php "Traffic Cameras - South County - Rhode Island Rhode Island Department of Transportation"
