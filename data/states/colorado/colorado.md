---
state: Colorado
usps: CO
slug: colorado
dossier_number: 6
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
  imported_from: project_atlas_state_data/Colorado.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Colorado (CO) - ATLAS State Record

> Dossier **6 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Colorado is another **high-value state**, especially for transportation cameras. The most important finding is that CDOT has moved toward a **state-owned, state-managed camera network**, and its current public GIS infrastructure exposes a machine-readable camera layer.

There is also a substantial Colorado public-safety radio ecosystem and a large community-mapped ALPR footprint.

---

### 1. CDOT / COtrip — statewide traffic cameras

**Organization:** Colorado Department of Transportation (CDOT)
**System:** COtrip
**Category:** State DOT / CCTV
**Status: 🟢 CONFIRMED**

CDOT currently says it operates **more than 1,000 cameras statewide** and provides the public with real-time views of road and weather conditions through COtrip.org. ([Colorado Department of Transportation][1])

This is a major network.

CDOT's 2026 statewide camera modernization project is replacing/upgrading portions of the system. CDOT says more than 90 cameras were removed from the system in July 2025 during its transition away from a third-party vendor system, while the department continues operating **more than 1,000 cameras statewide**. ([Colorado Department of Transportation][1])

#### Classification

```text
COLORADO
└── CDOT
    └── COtrip
        └── Traffic / Weather Cameras
```

🟢 **CONFIRMED**

---

### 2. Official CDOT camera GIS service

I found an ArcGIS FeatureServer specifically named:

```text
CDOT_Streaming_Cameras
```

with the layer:

```text
StreamingCameras
```

The service exposes the camera inventory as geographic point features and supports:

* JSON
* GeoJSON
* PBF
* advanced queries
* statistics
* pagination
* SQL queries
* spatial queries

([Colorado DOT Maps][2])

#### Exact discovered endpoint

```text
https://test.maps.codot.gov/server/rest/services/Hosted/CDOT_Streaming_Cameras/FeatureServer/0
```

#### IMPORTANT

The discovered hostname is:

```text
test.maps.codot.gov
```

not the normal public production hostname.

Therefore I am **not** going to falsely label this as the production endpoint.

#### Classification

```text
CDOT_Streaming_Cameras
    └── StreamingCameras
        ├── public GIS service discovered
        └── production/public endpoint requires verification
```

**Status: 🟡 CONFIRMED SERVICE, PRODUCTION ENDPOINT NOT YET VERIFIED**

That distinction is important.

---

### 3. CDOT StreamingCameras schema

The discovered official CDOT layer exposes these fields:

```text
objectid
camera_name
description
type
url
latitude
longitude
cameraid
status
isweatherstation
source
icon
roadname
milemarker
routeid
```

([Colorado DOT Maps][2])

This is an excellent canonical-camera source.

We can directly map:

```text
camera_name       → name
cameraid          → source_camera_id
latitude          → latitude
longitude         → longitude
status            → status
url               → media/source URL
roadname          → road
milemarker        → milemarker
routeid           → route
type              → camera_type
isweatherstation  → weather_station_flag
source            → source
```

No guessing required.

---

### 4. CDOT camera URL field

The layer contains:

```text
url
```

with alias:

```text
URL
```

([Colorado DOT Maps][2])

That is extremely important.

Unlike a map that merely displays an image, the camera registry itself contains a media/source URL field.

#### Status

🟢 **CONFIRMED**

#### Current media type

🟡 **NOT YET DETERMINED**

The field may point to an image, streaming endpoint, application route, or another camera resource.

We should not assume `.m3u8`, MJPEG, JPEG, etc. until individual records are inspected.

---

### 5. Camera coordinates

The CDOT layer explicitly exposes:

```text
latitude
longitude
```

and uses:

**EPSG:4326 / WGS84**. ([Colorado DOT Maps][2])

#### Status

🟢 **CONFIRMED**

This means no coordinate conversion is necessary.

---

### 6. Camera IDs

The source exposes:

```text
cameraid
```

as an integer field. ([Colorado DOT Maps][2])

This should become:

```text
source_camera_id
```

in the national registry.

Do **not** use `objectid` as the permanent camera identifier if `cameraid` is available.

---

### 7. Camera status

The layer contains:

```text
status
```

as a string field. ([Colorado DOT Maps][2])

This is important because CDOT is actively replacing and relocating cameras.

The national database should retain:

```text
source_status
normalized_status
observed_at
```

rather than assuming every camera record is permanently operational.

---

### 8. Weather-camera relationship

The layer contains:

```text
isweatherstation
```

([Colorado DOT Maps][2])

This is particularly useful.

It means the camera source itself can indicate whether a camera is associated with a weather station.

#### Canonical representation

```text
camera
  └── attributes
      └── is_weather_station
```

rather than creating a fake separate camera category.

---

### 9. Road and mile-marker metadata

CDOT provides:

```text
roadname
milemarker
routeid
```

([Colorado DOT Maps][2])

This is exactly the metadata we want for transportation cameras.

Example canonical object:

```text
camera
├── name
├── coordinates
├── road
├── route
├── milemarker
├── source_camera_id
└── status
```

---

### 10. CDOT camera network modernization

This is important for understanding why old Colorado camera datasets can be misleading.

CDOT says its camera modernization project is transitioning toward a **fully state-owned and state-managed network**. The department began a statewide camera project in 2026 and expects newly installed cameras to go live by fall 2027. ([Colorado Department of Transportation][1])

CDOT says the modernization project will upgrade or replace **69 cameras**, while other cameras are being added to areas that previously lacked public availability. ([Colorado Department of Transportation][3])

#### Therefore:

A historical Colorado camera list should **not** be treated as current.

The source needs:

```text
first_seen
last_seen
status
source_timestamp
```

---

### 11. Temporary CDOT cameras

CDOT has also deployed temporary camera solutions.

The department says solar-powered cameras were deployed at locations including:

* US 40 Berthoud Pass
* US 40 Rabbit Ears Pass
* CO 14 Cameron Pass
* CO 133 McClure Pass
* Nordic Center on CO 65

and portable trailer cameras were deployed at several priority locations. ([Colorado Department of Transportation][1])

#### Classification

```text
CDOT CCTV
├── permanent
├── solar temporary
└── trailer/mobile
```

🟢 **CONFIRMED**

This is another reason not to make `camera_type = fixed` mandatory.

---

### 12. COtrip public camera system

CDOT confirms that cameras are publicly viewable through:

**COtrip.org**

and its mobile application. ([Colorado Department of Transportation][1])

CDOT specifically describes the cameras as helping the public and CDOT personnel monitor:

* road conditions
* weather
* crashes
* winter conditions
* traffic conditions

([Colorado Department of Transportation][1])

#### Status

🟢 **CONFIRMED PUBLIC LIVE CAMERA SYSTEM**

---

### 13. CDOT historical camera count

Older CDOT material reported:

**422 traffic cameras**

in 2014. ([Colorado Department of Transportation][4])

That number should **not** be used for the current inventory.

The current CDOT figure is:

> **more than 1,000 cameras statewide**

as of 2026. ([Colorado Department of Transportation][1])

This is an excellent example of why the project needs temporal source records.

---

### 14. COtrip real-time data feed

Colorado publishes a specific **CDOT Real Time Data Feed (XML)** dataset through the Colorado Information Marketplace.

The official dataset states:

> COtrip.org has a real-time travel data feed provided by Intelligent Transportation Systems, a division of CDOT.

The feed includes data such as:

* incidents
* weather stations
* other real-time transportation information

and identifies the feed management endpoint as:

```text
https://manage-api.cotrip.org/
```

([Colorado Information Marketplace][5])

#### Status

🟢 **CONFIRMED**

This is a major non-camera source.

---

### 15. COtrip developer documentation

The Colorado Information Marketplace record also points developers toward:

```text
maps.cotrip.org/help/section/for-developers.html
```

as the developer-information location for the real-time feed. ([Colorado Information Marketplace][5])

This is important because we now have an official indication that CDOT supports a **developer-facing data interface**.

#### Classification

```text
CDOT
└── COtrip
    └── Real-Time Data Feed
        ├── Incidents
        ├── Weather
        └── other ITS data
```

🟢 **CONFIRMED**

---

### 16. COtrip incident data

The official real-time-feed description explicitly names:

**Incidents**

as one of the feed's data categories. ([Colorado Information Marketplace][5])

Therefore:

#### Public real-time incidents

🟢 **CONFIRMED**

#### Exact production API schema

🟡 **Requires direct endpoint inspection**

I am not inventing endpoint paths beyond the officially documented feed host.

---

### 17. COtrip weather stations

The same official feed explicitly identifies:

**Weather Stations**

as a data category. ([Colorado Information Marketplace][5])

CDOT's camera layer also has the `isweatherstation` relationship flag.

This gives us two related but distinct sources:

```text
CDOT
├── Camera network
└── Weather-station data
```

#### Weather data

🟢 **CONFIRMED**

---

### 18. CDOT DMS / variable-message signs

Colorado's ITS system also contains:

**Variable Message Signs (VMS/DMS)**.

CDOT documentation describes traveler information delivered through VMS and COtrip. ([Colorado Department of Transportation][6])

#### Status

🟢 **CONFIRMED INFRASTRUCTURE**

#### Public machine-readable VMS feed

🟡 **Not yet independently verified in this pass**

Do not treat the existence of VMS as proof of an accessible API.

---

### 19. CDOT traffic-speed data

CDOT documentation identifies real-time/historical transportation data including:

* travel times
* speeds
* traffic volumes
* weather
* road conditions

as data associated with its traffic-management system. ([Colorado Department of Transportation][6])

#### Public real-time speed API

🟡 **Source family confirmed; exact endpoint requires further extraction**

#### Historical speed database

CDOT documentation says its CTMS/Oracle system retains roughly five years of certain data. ([Colorado Department of Transportation][6])

That is **not the same thing as a public five-year downloadable database**, so I am not classifying it as such.

---

### 20. Colorado scanner ecosystem

Colorado has a substantial public radio ecosystem.

Current Broadcastify data shows:

**143 total Colorado feeds across 64 counties**

with:

* **67 public-safety feeds**
* 12 amateur-radio
* 3 rail
* 3 other
* 1 aviation

([Broadcastify][7])

The public-safety-only directory currently reports:

**97 public-safety feeds across 38 counties** in its current indexed view. ([Broadcastify][8])

The totals differ because Broadcastify's category/index pages are dynamic and appear to be updated at different times.

#### Correct registry approach

Record the feed count with:

```text
observed_at
source
category
```

rather than storing a permanent state-wide count.

---

### 21. Colorado public-safety radio sources

Examples currently indexed include:

#### Colorado State Patrol

* Colorado State Patrol — El Paso/Teller/Pueblo
* Colorado State Patrol — Eagle County
* Colorado State Patrol Troop 3C / 3A

([Broadcastify][7])

#### Sheriffs

* Weld County Sheriff
* Boulder County Sheriff
* Park County Law Enforcement
* El Paso County Sheriff
* Douglas County
* Morgan County
* etc.

#### Fire/EMS

* Colorado Springs Fire and EMS
* Adams County Fire and EMS
* South Metro Fire Rescue
* Poudre Fire Authority and EMS
* West Metro Fire Rescue
* Loveland Fire Rescue
* Aurora Fire
* etc.

([Broadcastify][8])

---

### 22. Colorado State Patrol radio

This is especially relevant.

Broadcastify currently indexes public Colorado State Patrol feeds, including:

```text
Colorado State Patrol - El Paso, Teller, and Pueblo Counties
Colorado State Patrol Troop 3C (Larimer) and Troop 3A (Weld) Dispatch
Colorado State Patrol - Eagle County
```

([Broadcastify][7])

#### Status

🟢 **PUBLIC THIRD-PARTY RADIO FEEDS CONFIRMED**

#### Official agency feed status

🟡 **Not established for every feed**

We should not automatically call these official merely because the feed is named after the agency.

---

### 23. CDOT safety-patrol radio

This is a particularly useful discovery.

Broadcastify's Denver County page currently lists:

**Front Range — CDOT Safety Patrol and Traffic Management Teams**

as an audio feed. ([Broadcastify][9])

#### Classification

```text
CDOT
└── Safety Patrol / Traffic Management
    └── Public radio feed
```

🟢 **CONFIRMED PUBLIC FEED**

This is highly relevant to a traffic-monitoring system because it is directly related to highway operations.

---

### 24. Colorado radio ingest infrastructure

Broadcastify also shows **Calls Coverage** for Denver County, including:

* Law Dispatch
* Fire Dispatch
* Emergency Ops
* Interop
* Public Works
* Security
* Transportation

and identifies active SDR ingest nodes including:

**State of Colorado DTRS**

([Broadcastify][9])

This establishes a substantial public scanner ingestion infrastructure around Colorado's radio systems.

#### Important distinction

Broadcastify's SDR ingest infrastructure is **not an official Colorado government API**.

It is a third-party public radio distribution system.

---

### 25. Colorado DTRS

The source above identifies:

**State of Colorado DTRS**

as a Broadcastify Calls ingest node. ([Broadcastify][9])

#### DTRS

Colorado's statewide digital trunked radio system is therefore represented in public third-party scanner infrastructure.

#### Classification

```text
STATE RADIO
└── Colorado DTRS
    └── public scanner/SDR ecosystem
```

🟢 **PUBLIC MONITORING EVIDENCE**

#### Raw public DTRS data API

🔴 **NOT FOUND**

---

### 26. Colorado ALPR — statewide mapped locations

Colorado has a significant ALPR footprint.

A current OSM-derived dataset reports:

**2,670 documented ALPR cameras statewide**

as of August 26, 2026. ([Finding Flock][10])

Another current dataset reports:

**2,439 mapped ALPR locations** as of August 15, 2026. ([Unsurveilled][11])

A third OSM-derived dataset counts:

**2,053 Flock ALPR + 446 other ALPR**

as of August 6, 2026. ([Peripheri][12])

#### Correct conclusion

Colorado has approximately:

**2,400–2,700 community-documented ALPR locations**

depending on dataset and extraction date.

These are **not official state counts**.

---

### 27. Colorado ALPR — exact upstream source

The strongest source is again:

**OpenStreetMap**

FlockScanner documents that its ALPR records originate directly from OSM nodes tagged:

```text
man_made=surveillance
surveillance:type=ALPR
```

with optional:

```text
manufacturer
direction
```

([Flock Scanner][13])

The underlying data is licensed under:

**ODbL**

and can be queried directly through the OSM/Overpass ecosystem. ([Flock Scanner][13])

#### Status

🟢 **CONFIRMED**

---

### 28. Colorado ALPR vendor distribution

The current Colorado OSM-derived inventory reports approximately:

| Vendor                | Mapped cameras |
| --------------------- | -------------: |
| Flock Safety          |          2,138 |
| Unspecified           |             83 |
| Genetec               |             59 |
| Axon                  |             50 |
| Neology               |             44 |
| Motorola Solutions    |             30 |
| Axis                  |             17 |
| Leonardo/ELSAG        |             11 |
| Avigilon              |              4 |
| LiveView Technologies |              3 |

([Unsurveilled][11])

#### Important

These are **OSM contributor-attributed vendors**.

They are not official vendor market-share numbers.

---

### 29. Aurora ALPR

Aurora currently has the largest documented ALPR count in Colorado according to the current Finding Flock dataset:

**287 cameras**. ([Finding Flock][10])

This represents roughly:

**11% of the statewide documented total**

in that dataset.

#### Status

🟢 **Community-mapped locations**

🔴 **Official municipal inventory not yet established**

---

### 30. Denver ALPR

Current OSM-derived data identifies:

**214 ALPR readers within Denver**

as of August 23, 2026. ([Finding Flock][14])

The data explicitly notes that the locations are derived from OpenStreetMap and are volunteer documented. ([Finding Flock][14])

#### Status

🟢 **Public location data**

🔴 **Official Denver statewide-style inventory unavailable**

---

### 31. Colorado ALPR on CDOT right-of-way

This is an unusually important official source.

CDOT has a formal program governing installation of ALPR systems on **CDOT right-of-way**.

CDOT states that applicants installing ALPRs on CDOT ROW must be:

> a Colorado law enforcement agency.

The applicant must also obtain Colorado State Patrol approval and comply with CDOT's ALPR procedures and terms. ([Colorado Department of Transportation][15])

#### This confirms:

```text
ALPR
└── Colorado state highway ROW
    ├── permitted
    ├── law-enforcement applicants only
    └── CSP review required
```

🟢 **CONFIRMED PROGRAM**

---

### 32. CDOT ALPR as-constructed data

This is potentially a very valuable lead.

CDOT's ALPR permit terms require the applicant to provide:

**As-Constructed ALPR Plans**

to CDOT within 60 days of final acceptance, including the electronic plans and **SHP file format**. ([Colorado Department of Transportation][16])

This means CDOT **receives geospatial ALPR installation documentation**.

#### But:

That does **not** mean the files are publicly downloadable.

#### Classification

```text
CDOT ALPR permit records:
    🟢 confirmed to exist

public ALPR GIS dataset:
    🔴 not found

potential public-record source:
    🟡 very strong lead
```

This is something worth targeting later through Colorado public-records research.

---

### 33. Colorado ALPR generated data

CDOT's ALPR procedure explicitly recognizes ALPR-generated data and says ALPRs installed on CDOT ROW are intended for legitimate law-enforcement purposes. ([Colorado Department of Transportation][17])

It also references:

**C.R.S. 24-72-113**

regarding retention of passive surveillance records. ([Colorado Department of Transportation][17])

#### Public ALPR plate-read API

🔴 **NOT FOUND**

#### Public statewide ALPR read database

🔴 **NOT FOUND**

#### Official ALPR installation records

🟡 **Exist within CDOT permitting process; public availability not established**

---

### 34. Colorado ALPR legal/source distinction

This state demonstrates another important architecture rule.

There are at least four separate source classes:

```text
1. OSM camera locations
2. Municipal ALPR deployments
3. CDOT ROW permit records
4. Actual ALPR reads
```

We must never collapse those into one "ALPR database."

---

### 35. Colorado CCTV vs ALPR

CDOT's traffic cameras and law-enforcement ALPRs are separate systems.

#### CDOT CCTV

```text
public traveler information
road/weather monitoring
COtrip
```

#### ALPR

```text
law enforcement
license plate recognition
CDOT ROW permits
CSP review
```

CDOT's ALPR policy explicitly treats them as a distinct technology. ([Colorado Department of Transportation][17])

---

### 36. Colorado traffic/weather cameras

CDOT's current camera network specifically supports road and weather observation. CDOT says the cameras provide real-time views of road and weather conditions statewide. ([Colorado Department of Transportation][1])

The camera GIS layer also explicitly contains:

```text
isweatherstation
```

([Colorado DOT Maps][2])

#### Classification

🟢 **CONFIRMED**

---

### 37. Colorado work-zone cameras

CDOT's smart-work-zone specifications require systems to support:

* real-time video feeds
* current sign messages
* sensor data
* device locations
* real-time updates

([Colorado Department of Transportation][18])

#### Important distinction

This confirms **work-zone camera infrastructure/data requirements**, but does not establish one statewide public work-zone camera feed.

#### Status

🟢 Infrastructure confirmed

🟡 statewide public work-zone camera feed not separately confirmed

---

### 38. Colorado public traffic data architecture

The state is shaping up like this:

```text
COLORADO
│
└── CDOT
    │
    ├── COtrip
    │   ├── Cameras
    │   ├── Incidents
    │   ├── Weather
    │   ├── Road conditions
    │   └── Traveler alerts
    │
    ├── ITS
    │   ├── VMS
    │   ├── traffic speeds
    │   ├── traffic volumes
    │   └── weather stations
    │
    └── ALPR ROW permitting
        └── law-enforcement ALPR installations
```

---

### 39. Colorado radio architecture

```text
COLORADO
│
├── State of Colorado DTRS
│
├── Colorado State Patrol
│
├── County Sheriffs
│
├── Municipal Police
│
├── Fire
│
├── EMS
│
├── Search & Rescue
│
└── CDOT Safety Patrol / Traffic Management
```

Public third-party distribution currently provides a large portion of this ecosystem. ([Broadcastify][7])

---

### 40. Colorado master source inventory

|  # | Source                             | Category      | Exact source         | Access             | Status                                    |
| -: | ---------------------------------- | ------------- | -------------------- | ------------------ | ----------------------------------------- |
|  1 | CDOT COtrip cameras                | CCTV          | COtrip               | Public             | 🟢                                        |
|  2 | CDOT StreamingCameras GIS          | CCTV          | ArcGIS FeatureServer | Public GIS service | 🟡 production endpoint needs verification |
|  3 | Camera names                       | CCTV metadata | StreamingCameras     | Public             | 🟢                                        |
|  4 | Camera IDs                         | CCTV metadata | `cameraid`           | Public             | 🟢                                        |
|  5 | Camera URLs                        | Media         | `url`                | Public metadata    | 🟢                                        |
|  6 | Camera coordinates                 | GIS           | lat/lon              | Public             | 🟢                                        |
|  7 | Camera status                      | CCTV          | `status`             | Public             | 🟢                                        |
|  8 | Road name                          | Location      | `roadname`           | Public             | 🟢                                        |
|  9 | Milemarker                         | Location      | `milemarker`         | Public             | 🟢                                        |
| 10 | Route ID                           | Location      | `routeid`            | Public             | 🟢                                        |
| 11 | Weather-camera flag                | Weather       | `isweatherstation`   | Public             | 🟢                                        |
| 12 | COtrip real-time feed              | Traffic       | CDOT XML feed        | Public             | 🟢                                        |
| 13 | COtrip incidents                   | Incident      | Real-time feed       | Public             | 🟢                                        |
| 14 | COtrip weather                     | Weather       | Real-time feed       | Public             | 🟢                                        |
| 15 | CDOT VMS                           | DMS           | ITS                  | Public system      | 🟢                                        |
| 16 | CDOT traffic speeds                | Traffic       | ITS/COtrip           | Public system      | 🟡 exact API needs extraction             |
| 17 | CDOT traffic volumes               | Traffic       | ITS                  | Public system      | 🟡                                        |
| 18 | CDOT Safety Patrol radio           | Radio         | Broadcastify         | Public             | 🟢                                        |
| 19 | Colorado State Patrol radio        | Radio         | Broadcastify         | Public             | 🟢                                        |
| 20 | Colorado DTRS                      | Radio         | Broadcastify Calls   | Public monitoring  | 🟢                                        |
| 21 | County sheriff feeds               | Radio         | Broadcastify         | Public             | 🟢                                        |
| 22 | Fire/EMS feeds                     | Radio         | Broadcastify         | Public             | 🟢                                        |
| 23 | OSM ALPR locations                 | ALPR          | OpenStreetMap        | ODbL               | 🟢                                        |
| 24 | Colorado ALPR mapped inventory     | ALPR          | OSM-derived          | Public             | 🟢                                        |
| 25 | CDOT ALPR permit records           | ALPR          | CDOT ROW permitting  | Government-held    | 🟡                                        |
| 26 | CDOT ALPR SHP as-constructed plans | ALPR GIS      | Permit requirement   | Government-held    | 🟡                                        |
| 27 | Colorado statewide ALPR reads      | ALPR data     | —                    | —                  | 🔴                                        |
| 28 | Statewide ALPR API                 | ALPR API      | —                    | —                  | 🔴                                        |
| 29 | Statewide CAD API                  | CAD           | —                    | —                  | 🔴                                        |

---

### 41. Highest-value Colorado discoveries

#### 🥇 CDOT statewide camera network

**More than 1,000 cameras statewide.**

CDOT explicitly confirms the current scale and public availability. ([Colorado Department of Transportation][1])

---

#### 🥈 CDOT machine-readable camera inventory

The discovered `CDOT_Streaming_Cameras` FeatureServer provides:

```text
camera_name
description
type
url
latitude
longitude
cameraid
status
isweatherstation
source
icon
roadname
milemarker
routeid
```

([Colorado DOT Maps][2])

This is exactly the sort of structured source the ingestion engine is designed to consume.

**But the discovered endpoint is on `test.maps.codot.gov`, so production verification remains mandatory.**

---

#### 🥉 COtrip real-time feed

The official Colorado Information Marketplace identifies an actual CDOT real-time feed covering:

* incidents
* weather stations
* other ITS data

and gives the feed host:

```text
manage-api.cotrip.org
```

([Colorado Information Marketplace][5])

---

### 4. Colorado public radio

Colorado currently has roughly **100+ public radio feeds**, with dozens of public-safety feeds covering law enforcement, fire, EMS and state patrol. ([Broadcastify][7])

---

### 5. Colorado ALPR

Approximately:

**2,400–2,700 community-mapped ALPR locations**

depending on the OSM-derived dataset and timestamp. ([Finding Flock][10])

---

### 42. Most important Colorado lead for later research

The **CDOT ALPR permitting system** is worth flagging separately.

CDOT's own rules require law-enforcement applicants to provide:

* ALPR plans
* CSP approval
* permit information
* **as-constructed ALPR plans**
* electronic files
* **SHP-format geospatial data**

([Colorado Department of Transportation][16])

That means Colorado may have a **government-held geospatial inventory of ALPR installations on state highway ROW**, even though I have not found a public download of that inventory.

That is a much stronger lead than simply relying on crowdsourced OSM points.

---

### 43. Colorado final classification

| Category                          | Result                          |
| --------------------------------- | ------------------------------- |
| Public traffic cameras            | 🟢 **Excellent — 1,000+**       |
| Structured camera GIS             | 🟢 **Confirmed**                |
| Camera coordinates                | 🟢                              |
| Camera IDs                        | 🟢                              |
| Camera URLs                       | 🟢                              |
| Camera status                     | 🟢                              |
| Weather-camera association        | 🟢                              |
| Real-time traffic feed            | 🟢                              |
| Incidents                         | 🟢                              |
| Weather                           | 🟢                              |
| Public radio                      | 🟢 **Large ecosystem**          |
| State Patrol radio                | 🟢                              |
| DTRS public monitoring            | 🟢                              |
| ALPR locations                    | 🟢 **~2,400–2,700 mapped**      |
| Official CDOT ALPR permit records | 🟡 **Strong lead**              |
| ALPR SHP records                  | 🟡 **Government-held evidence** |
| Public ALPR plate reads           | 🔴                              |
| Public statewide ALPR API         | 🔴                              |
| Statewide public CAD API          | 🟡                              |

#### Bottom line

**Colorado is a high-priority ingestion state.**

The two sources I would put at the top of the national queue are:

```text
1. CDOT StreamingCameras
2. CDOT COtrip Real-Time Data Feed
```

with the ALPR permit/SHP records flagged as a **secondary research target**.

**Next state: CONNECTICUT.**

[1]: https://www.codot.gov/news/2026/april-2026-news/statewide-camera-project-starts-march30?utm_source=chatgpt.com "CDOT begins construction on statewide camera project — Colorado Department of Transportation"
[2]: https://test.maps.codot.gov/server/rest/services/Hosted/CDOT_Streaming_Cameras/FeatureServer/0 "Layer: StreamingCameras (ID: 0)"
[3]: https://www.codot.gov/about/transportation-commission/documents-and-resolutions/commission-materials/2025-supporting-documents/11_november_2025/november-transportation-commission-packet.pdf?utm_source=chatgpt.com "November Transportation Commission Packet"
[4]: https://www.codot.gov/news/2014-news-releases/11-2014/cdot-upgrades-traffic-weather-cameras-throughout-state?utm_source=chatgpt.com "CDOT Upgrades Traffic/Weather Cameras throughout State — Colorado Department of Transportation"
[5]: https://data.colorado.gov/Transportation/CDOT-Real-Time-Data-Feed-XML-/j3ch-zsvz/about_data?utm_source=chatgpt.com "CDOT Real Time Data Feed (XML) | Colorado Information Marketplace | data.colorado.gov"
[6]: https://www.codot.gov/library/studies/I-70_Mnt-Corr_M-O_Report_FINAL_web.pdf?utm_source=chatgpt.com "SUMMARY 
What is the purpose of this report? 
This"
[7]: https://status.broadcastify.com/listen/stid/8?utm_source=chatgpt.com "Colorado Audio Feeds"
[8]: https://status.broadcastify.com/listen/stid/8/publicsafety?utm_source=chatgpt.com "Colorado Audio Feeds"
[9]: https://status.broadcastify.com/listen/ctid/256/publicsafety?utm_source=chatgpt.com "Denver County, Colorado Audio Feeds"
[10]: https://www.findingflock.com/cameras/colorado?utm_source=chatgpt.com "2,670 Flock & ALPR Cameras in Colorado · Finding Flock"
[11]: https://www.unsurveilled.org/atlas/colorado/?utm_source=chatgpt.com "Colorado — known ALPR locations — Unsurveilled"
[12]: https://peripheri.app/flock-cameras/colorado/?utm_source=chatgpt.com "Flock Cameras in Colorado · Peripheri"
[13]: https://flockscanner.com/flock-camera-database/?utm_source=chatgpt.com "Flock Camera Database & Data Source · FlockScanner"
[14]: https://www.findingflock.com/cameras/colorado/denver?utm_source=chatgpt.com "214 Flock & ALPR Cameras in Denver, CO"
[15]: https://www.codot.gov/business/permits/utilitiesspecialuse/about?utm_source=chatgpt.com "Utility & Special Use Program — Colorado Department of Transportation"
[16]: https://www.codot.gov/business/permits/utilitiesspecialuse/assets/alpr-terms-and-conditions.pdf?utm_source=chatgpt.com "Terms and Conditions of Automated License Plate Reader Permits"
[17]: https://www.codot.gov/business/permits/utilitiesspecialuse/assets/alpr-evaluation-and-checklist-october-2023-1-_accessible.pdf?utm_source=chatgpt.com "Installing Automated License Plate Reader Systems on CDOT Right of Way"
[18]: https://www.codot.gov/business/designsupport/cdot-construction-specifications/2025-construction-specifications/swz-ppsp-1/guide-swz-device-specification.pdf?utm_source=chatgpt.com "[Guide] SWZ Devices Specification.docx"
