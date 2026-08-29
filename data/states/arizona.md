---
state: Arizona
usps: AZ
slug: arizona
dossier_number: 3
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
  imported_from: project_atlas_state_data/Arizona.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Arizona (AZ) - ATLAS State Record

> Dossier **3 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

I’m treating Arizona as its own complete research pass and separating **official government sources, third-party public sources, and sources that merely prove a system exists**.

---

### 1. ADOT AZ511 — statewide traffic cameras

**Organization:** Arizona Department of Transportation
**System:** AZ511
**Category:** State DOT / CCTV
**Status: 🟢 CONFIRMED**

ADOT explicitly states that AZ511 provides access to its **statewide network of highway cameras**, along with crashes/incidents, construction, closures, weather information, message boards, sensors and travel times. ([Arizona Department of Transportation][1])

Official system:

[AZ511](https://www.az511.gov/?utm_source=chatgpt.com)

ADOT currently operates the system and its public website/app. ([Arizona Department of Transportation][2])

---

### 2. Exact statewide camera API

This is one of the strongest Arizona findings.

#### Exact endpoint

```text
https://az511.com/api/v2/get/cameras
```

**Format:** JSON or XML
**Authentication:** Developer API key
**Rate limit:** 10 calls / 60 seconds

The official API documentation explicitly identifies this endpoint and its required `key` parameter. ([AZ 511][3])

#### Camera record schema

Each camera record contains:

* `Id`
* `Source`
* `SourceId`
* `Roadway`
* `Direction`
* `Latitude`
* `Longitude`
* `Location`
* `SortOrder`
* `Views`

The `Source` field identifies the organization supplying the camera; current documented examples use:

```text
Source: AZDOT
```

The API documentation provides actual camera records and coordinates, not just a description of the service. ([AZ 511][3])

#### Example currently documented camera

```text
Camera ID: 2056
Source: AZDOT
SourceId: 2bf8c...
Roadway: SR-95
Latitude: 35.172449
Longitude: -114.566108
Location: SR-95 @ SR68 Laughlin Rd
```

with a view:

```text
View ID: 960
Status: Enabled
Description: SR-95 NB 249.80 @SR68 Laughlin Rd
```

and:

```text
https://az511.com/map/Cctv/960
```

([AZ 511][3])

#### Classification

**🟢 CONFIRMED — statewide camera inventory API**

---

### 3. Camera view endpoints

The camera API does not simply return coordinates.

It returns individual **camera-view URLs**.

Example:

```text
https://az511.com/map/Cctv/960
```

The API documentation identifies the view as:

```text
Id: 960
Status: Enabled
Description: SR-95 NB 249.80 @SR68 Laughlin Rd
```

([AZ 511][3])

Therefore Arizona has:

```text
AZDOT
  ↓
AZ511 API
  ↓
Camera
  ↓
Camera View
  ↓
CCTV web endpoint
```

#### Direct media URL

**🟡 NOT YET CONFIRMED**

The public API documentation exposes the camera-view URL but does **not** expose a direct `.jpg`, `.m3u8`, MJPEG, or other media URL in the documented response.

I am deliberately **not guessing the underlying media endpoint**.

That needs a separate network-level investigation of the current AZ511 application.

---

### 4. Current camera network scale

ADOT has publicly documented a network of **400+ traffic cameras statewide**, including cameras throughout Arizona highways. ([Arizona Department of Transportation][4])

ADOT's current AZ511 page continues to describe the network as statewide. ([Arizona Department of Transportation][1])

So this is not an obsolete API.

#### Status

**🟢 ACTIVE STATEWIDE CAMERA NETWORK**

---

### 5. AZ511 API — traffic events

#### Exact endpoint

```text
https://az511.com/api/v2/get/event
```

**Authentication:** Developer API key
**Formats:** JSON/XML

Official documentation states that it returns **all traffic events**. ([AZ 511][5])

The records include:

* ID
* source
* organization
* roadway
* direction
* description
* reported time
* last update
* start/end
* affected lanes
* latitude
* longitude
* event type
* event subtype
* severity
* encoded polyline
* restrictions
* detour information
* recurrence
* details

([AZ 511][5])

#### Event types explicitly documented

```text
roadwork
closures
accidentsAndIncidents
```

([AZ 511][5])

#### Important discovery

The API example actually contains:

```text
Organization: Tucson
```

meaning the statewide AZ511 API aggregates data from **regional/local partners**, not exclusively ADOT. ([AZ 511][5])

#### Classification

**🟢 CONFIRMED — statewide/regional traffic-event API**

---

### 6. AZ511 weather-station API

#### Exact endpoint

```text
https://az511.com/api/v2/get/weatherstations
```

**Authentication:** Developer API key
**Formats:** JSON/XML

Official documentation confirms this endpoint. ([AZ 511][6])

Each station can provide:

* latitude
* longitude
* air temperature
* surface temperature
* wind speed
* wind direction
* relative humidity
* level of grip
* maximum wind speed
* last update

([AZ 511][6])

There is an especially useful relationship in the data:

```text
CameraSource
CameraSourceId
```

The weather station records can therefore associate environmental observations with camera-source identifiers. ([AZ 511][6])

#### Classification

**🟢 CONFIRMED — machine-readable weather/surface-condition source**

---

### 7. AZ511 message boards / VMS

#### Exact endpoint

```text
https://az511.com/api/v2/get/messagesigns
```

**Authentication:** Developer API key

Official documentation describes this resource as returning **all VMS — Variable Message Signs**. ([AZ 511][7])

Records include information such as:

* ID
* sign name
* roadway
* direction

and additional sign information in the API response. ([AZ 511][7])

#### Classification

**🟢 CONFIRMED — statewide VMS inventory/data**

---

### 8. AZ511 alerts

#### Exact endpoint

```text
https://az511.com/api/v2/get/alerts
```

**Authentication:** Developer API key

The official documentation identifies this as the resource returning **all alert notifications**. ([AZ 511][8])

Records contain:

* ID
* message
* notes
* start time
* end time
* last updated

([AZ 511][8])

#### Classification

**🟢 CONFIRMED — alert feed**

---

### 9. AZ511 rest areas

#### Exact endpoint

```text
https://az511.com/api/v2/get/restareas
```

**Authentication:** Developer API key

The official API exposes:

* latitude
* longitude
* name
* status
* location
* city
* restroom availability
* ramada availability
* visitor center
* travel information
* vending
* truck spaces
* available truck spaces

([AZ 511][9])

#### Classification

**🟢 CONFIRMED — infrastructure/status data**

Not surveillance data, but it belongs in the broader transportation-source catalog.

---

### 10. AZ511 WZDx

This one is especially valuable for the eventual national ingestion project.

The official AZ511 developer documentation exposes:

```text
https://az511.com/api/wzdx
```

for **Work Zone Data Exchange (WZDx)** data. ([AZ 511][10])

WZDx is specifically intended to make harmonized work-zone data available to third parties. ([AZ 511][10])

#### Classification

**🟢 CONFIRMED — standardized machine-readable work-zone source**

---

### 11. ADOT traffic-camera recording policy

An important property of the Arizona camera network:

ADOT has stated that its traffic cameras are used for traffic management and that **the images are not recorded by ADOT**. ([Arizona Department of Transportation][11])

So we should represent the camera source as:

```text
LIVE:
    YES

PUBLIC:
    YES

HISTORICAL VIDEO ARCHIVE:
    NO — according to ADOT

PRIMARY PURPOSE:
    Traffic management / traveler information
```

This is important when deciding what data can actually be harvested.

---

### 12. Arizona ALPR — statewide situation

Arizona is substantially different from its 511 system.

I found extensive evidence of ALPR deployments, but **no statewide public ALPR-read API**.

The current public ALPR-location ecosystem is enormous.

One current OpenStreetMap-derived index reports:

**2,519 ALPR/Flock cameras in Arizona**

as of August 15, 2026. ([Flock Camera Locations][12])

Another current OSM-derived source reports:

**2,613 cameras**

as of August 27, 2026. ([Flock Scanner][13])

Another reports:

**2,607 cameras**. ([Finding Flock][14])

The discrepancies are expected because these are community-maintained datasets with different refresh times/filtering.

#### What this proves

**Publicly mapped ALPR locations:** 🟢 CONFIRMED

**Official statewide ALPR inventory:** 🔴 NOT FOUND

**Public statewide ALPR reads:** 🔴 NOT FOUND

---

### 13. Arizona ALPR location dataset — OpenStreetMap

This is worth recording as an actual data source because it is reusable.

The FlockScanner documentation states that its camera database is derived from **OpenStreetMap** and that individual records are OSM objects tagged:

```text
man_made=surveillance
surveillance:type=ALPR
```

with optional manufacturer/direction information. ([Flock Scanner][15])

The underlying data is available under the **Open Database License (ODbL)**. ([Flock Scanner][15])

#### This is not a Flock database.

It is:

```text
OPENSTREETMAP
    ↓
community-mapped surveillance nodes
    ↓
ALPR locations
```

#### Classification

**🟢 CONFIRMED — public ALPR LOCATION DATA**

**Source:** OpenStreetMap

**License:** ODbL

**Coverage:** Arizona

**Individual plate reads:** NO

---

### 14. Arizona ALPR vendors represented in public mapping

The current Arizona OSM-derived data identifies multiple manufacturers, including:

* Flock Safety
* Motorola Solutions
* Verkada
* Genetec
* Axon
* LiveView Technologies
* Leonardo/ELSAG
* Reconyx
* Axis
* Rekor

One current dataset reports Flock Safety as roughly **85%** of the mapped devices where vendor attribution is known. ([Flock Camera][16])

This is **not an official vendor deployment count**.

It is community-observed data.

---

### 15. Phoenix ALPR

Phoenix has substantial ALPR deployment.

Current OSM-derived data identifies hundreds of mapped ALPR cameras in Phoenix, although different datasets report different totals depending on their extraction date and filtering. ([Flock Camera Locations][17])

#### Public ALPR read database

**🔴 NOT FOUND**

#### Public Phoenix ALPR API

**🔴 NOT FOUND**

#### Public camera-location data

**🟢 CONFIRMED — OSM-derived**

#### Official Phoenix ALPR program documentation

There is evidence of municipal/police ALPR use, but I am not treating policy documents as data feeds.

---

### 16. Tucson ALPR

Tucson is another major Arizona ALPR deployment.

Current public mapping identifies approximately **250–280 mapped ALPR cameras**, depending on dataset and extraction date. ([Flock Scanner][13])

One current dataset specifically identifies **Tucson Police Department** among the recorded operators. ([Flock Camera][16])

#### Public plate-read feed

**🔴 NOT FOUND**

#### Public camera inventory from TPD

**🔴 NOT CONFIRMED**

#### Community-mapped locations

**🟢 CONFIRMED**

---

### 17. Tempe — important current ALPR development

Tempe is a particularly important case because its Flock deployment has **changed very recently**.

Current reporting states that Tempe decided in August 2026 to discontinue its Flock ALPR system after operating **33 Flock cameras**. The decision cited privacy and misuse concerns. ([Business Insider][18])

Therefore an old dataset showing Tempe Flock cameras **must not automatically be treated as active**.

#### Current classification

```text
Tempe Flock deployment:
HISTORICAL / RECENTLY TERMINATED

33 cameras:
CONFIRMED historical deployment

Current active Flock collection:
NOT CONFIRMED
```

This is exactly why the national database needs timestamps and source-verification dates.

---

### 18. Arizona ALPR read data

This is a major negative finding.

Despite the enormous number of documented ALPR installations, I did **not** find an openly accessible statewide API providing:

```text
plate
timestamp
latitude
longitude
camera_id
vehicle attributes
```

for live or historical Arizona ALPR reads.

#### Status

**🔴 NO PUBLIC STATEWIDE ALPR READ FEED FOUND**

This should remain separate from the thousands of mapped cameras.

---

### 19. Arizona police radio — official feeds

This category produced a very strong result.

Broadcastify's **Official Feeds** directory currently lists several Arizona agency feeds and explicitly defines Official Feeds as broadcasts provided by the public-safety agency itself. ([Broadcastify][19])

#### Arizona Department of Public Safety

Confirmed official feeds include:

* **Arizona DPS — District 4**
* **Arizona DPS — District 8**
* **Arizona DPS — District 9**
* **Arizona DPS — METRO CENTRAL**

([Broadcastify][19])

These are **not ordinary scanner hobbyist feeds**.

Broadcastify's official-feed criteria require the agency to request official designation. ([Broadcastify Support][20])

#### Classification

**🟢 CONFIRMED — official public agency radio feeds**

---

### 20. Tempe Police official feeds

Broadcastify also lists:

* Tempe Police Department — Mill Avenue Downtown District
* Tempe Police Department — North Patrol District
* Tempe Police Department — South Patrol District

([Broadcastify][19])

The Mill Avenue feed is explicitly described as active on weekend nights and special events. ([Broadcastify][19])

#### Classification

**🟢 CONFIRMED — official public radio feeds**

---

### 21. Arizona statewide public scanner ecosystem

The public scanner ecosystem is much larger than the official feeds.

Current Broadcastify data reports:

**110 audio feeds across 16 Arizona counties.**

It includes:

* Public Safety
* Rail
* Amateur Radio
* Aviation
* Disaster/Event

([Broadcastify][21])

Examples currently listed include:

* Phoenix Police
* Tucson Police/Fire
* Yavapai County Public Safety
* Mohave County Sheriff/Fire
* Chandler Police/Fire
* Mesa Fire
* Gilbert Fire
* Queen Creek Fire
* Arizona DPS
* Maricopa County Sheriff
* Surprise/El Mirage Police
* Sedona Fire/EMS
* Coconino County Sheriff/DPS/Forest Service

([Broadcastify][21])

#### Classification

`PUBLIC INTERNET RADIO → THIRD PARTY`

unless specifically marked Official.

---

### 22. Maricopa County radio infrastructure

This is particularly useful because Broadcastify exposes the underlying ingest systems.

Current Maricopa County coverage identifies:

#### AZ WINS

**Arizona Wireless Integrated Network System**

Example ingest node:

`AZ WINS — Pinal Peak`

#### RWC

**Regional Wireless Cooperative**

Including:

* Simulcast A — Phoenix PD / City Services
* Simulcast C — Chandler

#### TRWC

**TOPAZ Regional Wireless Cooperative**

Including:

* Mesa Simulcast

([Broadcastify][22])

These are the underlying radio networks, while Broadcastify is the Internet rebroadcast layer.

#### Architecture

```text
AZ WINS / RWC / TRWC
        ↓
radio receivers / SDR nodes
        ↓
Broadcastify
        ↓
public Internet audio
```

That distinction should go into the source registry.

---

### 23. Maricopa County public-safety coverage

Current Broadcastify data shows coverage for:

* Law Dispatch
* Law Tac
* Law Talk
* Fire Dispatch
* Fire-Tac
* Fire-Talk
* Interop
* Multi-Tac
* Public Works
* Railroad
* Security

([Broadcastify][22])

So the Arizona radio source isn't merely "police scanner."

It is a broad **public-safety communications data ecosystem**.

---

### 24. Arizona DPS official radio

The official feeds are particularly valuable for the project because they directly establish:

```text
Agency:
Arizona Department of Public Safety

System:
Public Internet radio feed

Source:
Official agency-sponsored Broadcastify feed
```

with District 4, District 8, District 9 and Metro Central represented. ([Broadcastify][19])

Some feeds have delays, which should be retained as metadata rather than treating the audio as real-time.

---

### 25. Arizona 911 / CAD

I did **not** find a statewide public Arizona CAD API equivalent to a clean ArcGIS 911-call dataset such as Montgomery, Alabama.

#### Statewide public CAD

**🔴 NOT FOUND**

#### Statewide public 911 call database

**🔴 NOT FOUND**

#### Public local CAD/event sources

**🟡 EXIST**

Broadcastify currently exposes event/call information in some Arizona jurisdictions, including Maricopa County, but that is a third-party aggregation/rebroadcast service, not an Arizona government CAD API. ([Broadcastify][22])

Therefore I am not labeling it as an official CAD source.

---

### 26. Arizona traffic-camera recording limitation

ADOT has specifically said its traffic cameras are **not used for enforcement and their images are not recorded by ADOT**. ([Arizona Department of Transportation][11])

That means:

#### Public live camera

🟢 Yes

#### Public historical camera archive

🔴 No

#### ALPR

Separate system.

This is an important distinction because traffic cameras and ALPR cameras are not interchangeable.

---

### 27. Arizona source architecture

Arizona now gives us a particularly clean example of the source hierarchy we're building:

```text
ARIZONA
│
├── ADOT
│   └── AZ511
│       ├── Cameras
│       │   ├── Inventory
│       │   └── Camera Views
│       ├── Events
│       ├── Weather Stations
│       ├── Message Boards
│       ├── Alerts
│       ├── Rest Areas
│       └── WZDx
│
├── LAW ENFORCEMENT
│   ├── Arizona DPS
│   │   └── Official public radio feeds
│   │
│   ├── Phoenix
│   │   └── ALPR deployment
│   │
│   ├── Tucson
│   │   └── ALPR deployment
│   │
│   └── Tempe
│       └── Historical Flock deployment
│
├── RADIO NETWORKS
│   ├── AZ WINS
│   ├── RWC
│   └── TRWC
│
└── OPEN DATA
    └── OpenStreetMap
        └── Community-mapped ALPR locations
```

---

### Arizona master source inventory

|  # | Source                       | Category             | Exact source                  | Access        | Status              |
| -: | ---------------------------- | -------------------- | ----------------------------- | ------------- | ------------------- |
|  1 | AZ511 Cameras                | CCTV                 | `/api/v2/get/cameras`         | API key       | 🟢                  |
|  2 | AZ511 Camera Views           | CCTV                 | `/map/Cctv/{id}`              | Public        | 🟢                  |
|  3 | AZ511 Events                 | Traffic/CAD-like     | `/api/v2/get/event`           | API key       | 🟢                  |
|  4 | AZ511 Weather                | Weather              | `/api/v2/get/weatherstations` | API key       | 🟢                  |
|  5 | AZ511 VMS                    | Road infrastructure  | `/api/v2/get/messagesigns`    | API key       | 🟢                  |
|  6 | AZ511 Alerts                 | Alerts               | `/api/v2/get/alerts`          | API key       | 🟢                  |
|  7 | AZ511 Rest Areas             | Infrastructure       | `/api/v2/get/restareas`       | API key       | 🟢                  |
|  8 | AZ511 WZDx                   | Work zones           | `/api/wzdx`                   | Public API    | 🟢                  |
|  9 | ADOT statewide CCTV          | Camera network       | AZ511                         | Public UI/API | 🟢                  |
| 10 | Arizona DPS D4               | Radio                | Official Broadcastify         | Public        | 🟢                  |
| 11 | Arizona DPS D8               | Radio                | Official Broadcastify         | Public        | 🟢                  |
| 12 | Arizona DPS D9               | Radio                | Official Broadcastify         | Public        | 🟢                  |
| 13 | Arizona DPS Metro Central    | Radio                | Official Broadcastify         | Public        | 🟢                  |
| 14 | Tempe PD Mill Ave            | Radio                | Official Broadcastify         | Public        | 🟢                  |
| 15 | Tempe PD North               | Radio                | Official Broadcastify         | Public        | 🟢                  |
| 16 | Tempe PD South               | Radio                | Official Broadcastify         | Public        | 🟢                  |
| 17 | Maricopa radio               | Radio                | Broadcastify                  | Public        | 🟢                  |
| 18 | AZ WINS                      | Radio infrastructure | Public ingest evidence        | —             | 🟢                  |
| 19 | RWC                          | Radio infrastructure | Public ingest evidence        | —             | 🟢                  |
| 20 | TRWC                         | Radio infrastructure | Public ingest evidence        | —             | 🟢                  |
| 21 | OSM Arizona ALPR             | ALPR locations       | OSM                           | Public/ODbL   | 🟢                  |
| 22 | Phoenix ALPR locations       | ALPR                 | OSM-derived                   | Public        | 🟢                  |
| 23 | Tucson ALPR locations        | ALPR                 | OSM-derived                   | Public        | 🟢                  |
| 24 | Tempe Flock                  | ALPR                 | Historical deployment         | —             | 🟡 ended            |
| 25 | Arizona statewide ALPR reads | ALPR                 | —                             | —             | 🔴                  |
| 26 | Arizona statewide CAD        | CAD                  | —                             | —             | 🔴                  |
| 27 | Arizona statewide 911 calls  | 911                  | —                             | —             | 🔴                  |
| 28 | Direct AZ511 HLS/JPEG        | CCTV media           | —                             | —             | 🟡 needs extraction |

---

#### Arizona — important conclusions

##### **Best camera source**

**AZ511 `/api/v2/get/cameras`**

This is a high-quality machine-readable source with coordinates, road, direction, source ID, camera ID and individual camera views. ([AZ 511][3])

##### **Best non-camera transportation sources**

AZ511 provides **events, weather stations, VMS, alerts, rest areas and WZDx** through documented APIs. ([AZ 511][10])

##### **Best radio sources**

Arizona DPS has multiple **official agency-sponsored public radio feeds**, and Tempe PD has multiple official feeds. ([Broadcastify][19])

##### **ALPR**

Arizona has a **very large ALPR footprint**, but the public sources I found are primarily **location/transparency information**, not public plate-read databases. Current community-derived datasets put the mapped total around **2,500–2,600+ cameras**, with significant discrepancies between datasets. ([Flock Camera Locations][12])

##### **Critical current change**

Tempe's Flock system was reportedly discontinued in August 2026, so historical ALPR datasets cannot simply be treated as current. ([Business Insider][18])

##### **Biggest remaining Arizona investigation**

The **actual AZ511 camera media endpoints**. The official API gives us the camera-view IDs, but not the final image/HLS URL. That is the one place where I would want to do another technical extraction pass before calling the direct media source confirmed.

**Arizona is now cataloged. Next state: ARKANSAS.**

[1]: https://azdot.gov/adot-az511?utm_source=chatgpt.com "ADOT AZ511 | Department of Transportation"
[2]: https://azdot.gov/?utm_source=chatgpt.com "Home | Department of Transportation"
[3]: https://www.az511.gov/help/endpoint/cameras "Arizona GET Cameras API Documentation | AZ 511"
[4]: https://azdot.gov/adot-blog/pics-new-rural-cameras-help-you-see-it-happen?utm_source=chatgpt.com "Pics from new rural cameras help you see it happen | Department of Transportation"
[5]: https://az511.com/help/endpoint/event?utm_source=chatgpt.com "Arizona GET Events API Documentation | AZ 511"
[6]: https://www.az511.com/help/endpoint/weatherstations?utm_source=chatgpt.com "Arizona GET Weather Stations API Documentation | AZ 511"
[7]: https://www.az511.com/help/endpoint/messagesigns?utm_source=chatgpt.com "Arizona GET Message Boards API Documentation | AZ 511"
[8]: https://www.az511.com/help/endpoint/alerts?utm_source=chatgpt.com "Arizona GET Alerts API Documentation | AZ 511"
[9]: https://www.az511.com/help/endpoint/restareas?utm_source=chatgpt.com "Arizona GET Rest Areas API Documentation | AZ 511"
[10]: https://www.az511.gov/developers/doc "Arizona API Documentation | AZ 511"
[11]: https://azdot.gov/blog-article/new-hi-def-cameras-give-motorists-better-picture-traffic?utm_source=chatgpt.com "New hi-def cameras give motorists better picture of traffic | Department of Transportation"
[12]: https://flockcameralocations.com/locations/arizona?utm_source=chatgpt.com "Flock Camera Locations in Arizona — Live AZ ALPR Map | Flock Camera Locations"
[13]: https://flockscanner.com/flock-camera-map/az/?utm_source=chatgpt.com "Flock Camera Map: Arizona · FlockScanner"
[14]: https://www.findingflock.com/cameras/arizona?utm_source=chatgpt.com "2,607 Flock & ALPR Cameras in Arizona · Finding Flock"
[15]: https://flockscanner.com/flock-camera-database/?utm_source=chatgpt.com "Flock Camera Database & Data Source · FlockScanner"
[16]: https://flockcamera.app/locations/arizona/?utm_source=chatgpt.com "Flock Cameras in Arizona — 2,470 ALPR Locations Mapped"
[17]: https://flockcameralocations.com/locations/arizona/phoenix?utm_source=chatgpt.com "Flock Camera Locations in Phoenix, AZ — Live Map | Flock Camera Locations"
[18]: https://www.businessinsider.com/tempe-shuts-down-flock-license-plate-readers-over-misuse-concerns-2026-8?utm_source=chatgpt.com "Tempe turns off its Flock license plate reader system, citing privacy concerns and risk for 'misuse'"
[19]: https://status.broadcastify.com/listen/official/?utm_source=chatgpt.com "Official Feeds"
[20]: https://support.broadcastify.com/hc/en-us/articles/204740085-Official-Feeds-Designation-Application-Process?utm_source=chatgpt.com "Official Feeds Designation - Application Process – Broadcastify Support"
[21]: https://status.broadcastify.com/listen/stid/4?utm_source=chatgpt.com "Arizona Audio Feeds"
[22]: https://status.broadcastify.com/listen/ctid/100/publicsafety?utm_source=chatgpt.com "Maricopa County, Arizona Audio Feeds"
