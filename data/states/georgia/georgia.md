---
state: Georgia
usps: GA
slug: georgia
dossier_number: 10
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
  imported_from: project_atlas_state_data/Georgia.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Georgia (GA) - ATLAS State Record

> Dossier **10 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Georgia is another **Tier-A state** for this project. The strongest discovery is that Georgia has **two separate, directly usable camera inventories**:

1. the official **511GA API**, which exposes camera records and camera-view URLs; and
2. GDOT's own **ArcGIS REST `web_trafficcameras` service**, which exposes camera coordinates, image URLs, video URLs, active state, device IDs, common IDs, and camera function.

Georgia also has an official **GDOT ALPR permitting system**, a statewide ALPR statute, a large community-mapped ALPR footprint, and substantial public police/fire/EMS radio coverage.

---

### 1. Georgia 511 / GDOT traffic cameras

**Organization:** Georgia Department of Transportation
**Public system:** 511GA
**Category:** Traffic CCTV
**Status: 🟢 CONFIRMED**

[Official 511GA](https://511ga.org/?utm_source=chatgpt.com)

The current 511GA system exposes:

* Cameras
* Traffic speeds
* Incidents
* Closures
* Construction
* Special events
* Waze reports
* Waze incidents
* Waze hazards
* Waze traffic jams
* Waze shoulder events
* Message signs
* Weather radar
* Weather alerts
* Weather forecasts
* Rest areas
* Ports of entry
* Express lanes
* EV charging

The live Georgia 511 map currently exposes all of these layers. ([511GA][1])

---

### 2. Exact 511GA camera API

This is the first major source.

Georgia officially documents:

```text
GET https://511ga.org/api/v2/get/cameras
```

The API returns **all cameras**. ([511GA][2])

#### Required authentication

The API requires:

```text
key = developer API key
```

and the official documentation states that a registered account is required before requesting the developer key. The documented throttle is **10 calls per 60 seconds**. ([511GA][3])

#### Classification

```text
Public endpoint:
    🟢

Public documentation:
    🟢

Machine-readable:
    🟢

Unauthenticated:
    🔴

Free developer registration:
    🟢
```

This is **not the same thing as an inaccessible/private API**. It is a documented public developer interface requiring a free key.

---

### 3. Exact 511GA camera response

The official API documentation provides this schema:

```text
Id
Source
SourceId
Roadway
Direction
Latitude
Longitude
Location
SortOrder
Views
Name
```

([511GA][2])

Example camera:

```text
Id:
186

Source:
SKYLINE

SourceId:
591

Roadway:
SR154

Direction:
Westbound

Latitude:
33.698067

Longitude:
-84.44784

Location:
GDOT-0054: SR154 W at StantonRd MM 25.7 (Fulton)

Name:
GDOT-CCTV-0054
```

([511GA][2])

This is excellent canonical-source material.

---

### 4. 511GA camera views

Each camera contains a `Views` collection.

Each view contains:

```text
Id
Url
Status
Description
SortId
```

([511GA][4])

Example:

```text
Id:
186

Url:
https://511ga.org/map/Cctv/186

Status:
Enabled

Description:
GDOT-0054: SR154 W at StantonRd MM 25.7 (Fulton)
```

([511GA][2])

#### Status

🟢 **PUBLIC CAMERA VIEW REFERENCES**

---

### 5. GDOT's separate ArcGIS camera service

This is arguably even more valuable than the 511 API.

Georgia DOT exposes an official ArcGIS REST service:

```text
web_trafficcameras
```

The service is visible directly in GDOT's ArcGIS REST Services Directory. ([Enterprise GIS][5])

#### Exact service

[GDOT web_trafficcameras REST service](https://enterprisegis.dot.ga.gov/hosting/rest/services/web_trafficcameras/MapServer?utm_source=chatgpt.com)

The service contains:

```text
CCTV Camera
```

as Layer 0. ([Enterprise GIS][6])

---

### 6. Exact GDOT camera layer

```text
Layer:
CCTV Camera

ID:
0

Geometry:
Point

MaxRecordCount:
2000

Query formats:
JSON
GeoJSON
PBF
```

It supports:

* advanced queries
* statistics
* pagination
* SQL expressions
* ordering
* distance queries
* GeoJSON
* PBF

([Enterprise GIS][6])

#### This means:

```text
GDOT
 ↓
ArcGIS REST
 ↓
web_trafficcameras
 ↓
CCTV Camera
 ↓
/query
 ↓
JSON / GeoJSON / PBF
```

**🟢 DIRECT MACHINE-READABLE INVENTORY**

---

### 7. Exact GDOT camera fields

This is the strongest part of the Georgia discovery.

The official layer exposes:

```text
URL
OBJECTID
DEVICE_ID
DEVICE_NAME
DEVICE_DESCRIPTION
ACTIVE
MILEPOINT_MARKER
ROAD_TYPE
PRIMARY_ROAD
CROSS_ROAD_NAME
DIRECTION
CITY_NAME
COUNTY_NAME
SENATE_DISTRICT
CONGRESSIONAL_DISTRICT
GDOT_DISTRICT
HOUSE_DISTRICT
TMA
MPO
LONGITUDE
LATITUDE
SHAPE
```

([Enterprise GIS][6])

That gives the national ingestion engine an extremely clean source.

---

### 8. Camera device ID

The GDOT layer contains:

```text
DEVICE_ID
```

as an integer field. ([Enterprise GIS][6])

#### Canonical mapping

```text
source_device_id
    ← DEVICE_ID
```

---

### 9. Camera name

The layer contains:

```text
DEVICE_NAME
```

and:

```text
DEVICE_DESCRIPTION
```

([Enterprise GIS][6])

These should be stored separately.

For example:

```text
camera.name
camera.description
```

rather than combining them into one string.

---

### 10. Camera active status

The layer contains:

```text
ACTIVE
```

([Enterprise GIS][6])

This is important.

The database can distinguish:

```text
inventory record exists
```

from:

```text
camera currently active
```

without trying to infer status from whether a JPEG happens to respond.

---

### 11. Camera image URL

The GDOT ArcGIS layer explicitly contains:

```text
ImageURL
```

([ArcGIS Services][7])

#### Status

🟢 **DIRECT IMAGE ENDPOINT FIELD**

This is much stronger evidence than simply knowing a camera exists.

---

### 12. Camera video URL

The same official GDOT layer contains:

```text
VideoURL
```

([ArcGIS Services][7])

#### This is a major discovery.

Georgia's official camera inventory directly exposes both:

```text
ImageURL
VideoURL
```

Therefore the source model should not assume that Georgia cameras are snapshots only.

```text
media.image_url
media.video_url
```

can both be populated from the source when present.

---

### 13. Camera organization field

The layer contains:

```text
ORG
```

([ArcGIS Services][7])

This allows us to preserve the source's own organizational attribution.

#### Canonical field

```text
source.organization_raw
```

---

### 14. Camera type

The layer contains:

```text
Type
```

([ArcGIS Services][7])

This should be preserved rather than forcing every camera into a generic CCTV category.

---

### 15. Camera region

The layer exposes:

```text
REGION
```

([ArcGIS Services][7])

That is useful for Georgia's transportation-management architecture.

---

### 16. Camera recorded flag

This is another unusually useful field:

```text
RECORDED
```

with the alias:

> Is Camera Recorded?

([ArcGIS Services][7])

This means the ingestion engine can retain an explicit source statement about recording status.

#### Canonical field

```text
media.recorded
```

---

### 17. Common camera ID

The layer contains:

```text
COMMON_ID
```

with the alias:

> Common Camera ID

([ArcGIS Services][7])

This could be extremely useful for deduplicating records between:

```text
511GA API
```

and:

```text
GDOT ArcGIS
```

---

### 18. Camera function

The layer contains:

```text
FUNCTION
```

with alias:

> Function

([ArcGIS Services][7])

This is especially valuable for your project because a national surveillance database needs to distinguish:

```text
traffic CCTV
ALPR
enforcement
weather
traffic monitoring
other
```

where the source provides that distinction.

---

### 19. Camera coordinates

The official GDOT layer directly provides:

```text
LONGITUDE
LATITUDE
```

([Enterprise GIS][6])

It also has geometry.

The layer's spatial reference is Web Mercator:

```text EPSG:3857
```

but the attribute fields already provide latitude/longitude. ([Enterprise GIS][6])

#### Recommended ingestion

Use:

```text
LATITUDE
LONGITUDE
```

as the authoritative normalized coordinate values.

---

### 20. Camera roadway metadata

The layer provides:

```text
PRIMARY_ROAD
CROSS_ROAD_NAME
ROAD_TYPE
MILEPOINT_MARKER
DIRECTION
```

([Enterprise GIS][6])

That gives us:

```text roadway
cross_road
road_type
milepoint
direction
```

without geocoding.

---

### 21. Geographic administrative metadata

Each camera record can also contain:

```text
CITY_NAME
COUNTY_NAME
GDOT_DISTRICT
TMA
MPO
```

plus:

```text SENATE_DISTRICT
HOUSE_DISTRICT
CONGRESSIONAL_DISTRICT
```

([Enterprise GIS][6])

This is excellent for filtering and aggregation.

---

### 22. GDOT camera source freshness

The current camera service reports:

```text
Data Last Edit Date:
August 26, 2026

Last Edit Date:
August 26, 2026
```

and a schema update of June 19, 2026. ([ArcGIS Services][7])

#### Status

🟢 **ACTIVE CURRENT DATA SOURCE**

This is not an abandoned ArcGIS service.

---

### 23. 511GA API versus GDOT ArcGIS

Georgia gives us two different official source paths:

| Feature          | 511GA API     | GDOT ArcGIS    |
| ---------------- | ------------- | -------------- |
| Camera inventory | 🟢            | 🟢             |
| Coordinates      | 🟢            | 🟢             |
| Camera ID        | 🟢            | 🟢             |
| Source ID        | 🟢            | —              |
| Image URL        | indirect/view | 🟢             |
| Video URL        | —             | 🟢             |
| Active state     | View status   | 🟢             |
| Common ID        | —             | 🟢             |
| Recorded flag    | —             | 🟢             |
| Function         | —             | 🟢             |
| County           | location text | 🟢             |
| Roadway          | 🟢            | 🟢             |
| Direction        | 🟢            | 🟢             |
| Developer key    | required      | apparently not |
| GeoJSON          | API response  | 🟢             |
| PBF              | —             | 🟢             |

#### Engineering conclusion

**Use GDOT ArcGIS as the primary inventory source and 511GA as a secondary/validation source.**

---

### 24. 511GA API traffic events

Georgia officially exposes:

```text
GET /api/v2/get/event
```

The API returns all traffic events. ([511GA][8])

Fields include:

```text
ID
SourceId
Organization
RoadwayName
DirectionOfTravel
Description
Reported
LastUpdated
StartDate
PlannedEndDate
LanesAffected
Latitude
Longitude
LatitudeSecondary
LongitudeSecondary
EventType
IsFullClosure
Severity
Comment
EncodedPolyline
Restrictions
DetourPolyline
DetourInstructions
Recurrence
RecurrenceSchedules
Subtype
```

([511GA][8])

---

### 25. Georgia traffic-event categories

The official API defines:

```text
roadwork
closures
accidentsAndIncidents
specialEvents
```

as event types. ([511GA][8])

#### This is a very good canonical source.

It contains both:

```text point location
```

and:

```text encoded route geometry
```

when applicable.

---

### 26. Georgia event geometry

The API supports:

```text
Latitude
Longitude

LatitudeSecondary
LongitudeSecondary

EncodedPolyline
```

([511GA][8])

This allows an event to be represented as:

```text
point
```

or:

```text
line/route geometry
```

rather than simply a textual description.

---

### 27. Georgia alerts

511GA also exposes:

```text
GET /api/v2/get/alerts
```

The official API provides:

```text
Id
Message
Notes
StartTime
EndTime
LastUpdated
Regions
HighImportance
SendNotification
```

([511GA][9])

#### Status

🟢 **MACHINE-READABLE ALERT FEED**

---

### 28. Georgia message signs

511GA exposes:

```text
GET /api/v2/get/messagesigns
```

([511GA][10])

Each record contains:

```text
Id
Name
Roadway
DirectionOfTravel
Messages
Latitude
Longitude
LastUpdated
DeviceDescription
```

([511GA][10])

#### Status

🟢 **DIRECT MACHINE-READABLE DMS/VMS SOURCE**

---

### 29. Georgia Waze data

The current 511GA map explicitly exposes:

```text
Waze Reports
Waze Incidents
Waze Hazards
Waze Traffic Jams
Waze Shoulder Events
```

([511GA][11])

#### Status

```text
Waze-derived information displayed by 511GA:
    🟢

Raw Waze feed directly available to us:
    🔴 not established

511GA API representation:
    🟡 needs endpoint-specific inspection
```

Do not assume the raw Waze feed is available simply because 511GA displays it.

---

### 30. Georgia weather

511GA currently exposes:

```text
Weather Radar
Weather Alerts
Weather Forecasts
```

([511GA][11])

#### Status

🟢 **PUBLIC WEATHER/TRAFFIC INTEGRATION**

---

### 31. Georgia express-lane data

The 511GA API exposes:

```text
GET /api/v2/get/expresslanes
```

with:

```text
Id
Latitude
Longitude
Name
Status
Description
Rotation
LastUpdated
```

([511GA][12])

#### Status

🟢

This is ancillary to the camera project but should be retained as a transportation source.

---

### 32. Georgia ALPR — official GDOT permit system

This is Georgia's biggest ALPR discovery.

GDOT has a dedicated official:

**Automated License Plate Readers (ALPR)** page.

[Georgia DOT ALPR program](https://www.dot.ga.gov/GDOT/Pages/ALPR.aspx?utm_source=chatgpt.com)

GDOT states that:

> State, local, and university Police agencies requesting to place an ALPR device along the state's right-of-way must first apply for and secure a permit from Georgia DOT.

([Dot GA][13])

#### Status

🟢 **OFFICIAL STATE ALPR PERMIT SYSTEM**

---

### 33. Georgia ALPR permit geography

The official GDOT page divides permit contacts by:

* Northeast Georgia — District 1
* East Central Georgia — District 2
* West Central Georgia — District 3
* Southwest Georgia — District 4
* Southeast Georgia — District 5
* Northwest Georgia — District 6
* Metro Atlanta — District 7

([Dot GA][13])

This gives us a direct lead for discovering state-right-of-way ALPR deployments.

---

### 34. Georgia ALPR permit applicants

GDOT specifically says eligible applicants include:

```text
State police agencies
Local police agencies
University police agencies
```

when requesting an ALPR along state right-of-way. ([Dot GA][13])

#### Important distinction

This permit system does **not** mean GDOT owns the ALPR.

It means:

```text
agency owns/operates
        ↓
GDOT right-of-way
        ↓
GDOT permit
```

That relationship should be represented explicitly.

---

### 35. Georgia ALPR statute

Georgia has a dedicated ALPR statute:

```text
O.C.G.A. §35-1-22
```

The Georgia legislation defines an automated license plate recognition system as high-speed cameras combined with algorithms that convert license-plate images into computer-readable data. ([Georgia General Assembly][14])

The statute defines captured license-plate data to include:

```text
GPS coordinates
date
time
photograph
license plate number
other captured/derived data
```

([Georgia General Assembly][14])

That definition is highly relevant to your canonical data model.

---

### 36. Georgia ALPR retention

Current Georgia ALPR law places restrictions on retention and use of captured plate data.

The 2025 signed legislation still expressly identifies §35-1-22 as the statute concerning:

> prohibition on law enforcement retaining license plate data obtained from automated license plate recognition systems, limited use of data, and public disclosure prohibited.

([Georgia Governor's Office][15])

Current secondary source indexing of the statute reports a **30-month retention ceiling**, subject to statutory exceptions. ([Finding Flock][16])

#### Database implication

Do not treat:

```text
ALPR exists
```

as equivalent to:

```text
public ALPR historical records exist
```

Georgia law significantly limits public disclosure of captured plate data.

---

### 37. Georgia ALPR public records

The statute specifically makes captured ALPR data unavailable through the normal Georgia Open Records Act process under the statutory restrictions. ([Finding Flock][16])

Therefore:

```text
official statewide live ALPR read feed:
    🔴

official statewide public plate-read archive:
    🔴

physical camera inventory:
    🟡/🟢 through permits + open mapping

deployment contracts:
    🟢 through local public records where available
```

---

### 38. Georgia ALPR misuse case confirms operational systems

The Georgia Bureau of Investigation reported in November 2025 that it arrested a Braselton Police Chief following an investigation into alleged misuse of ALPR systems. ([Georgia Bureau of Investigation][17])

The GBI specifically described:

> multiple counts of Misuse of Automated License Plate Recognition Systems.

([Georgia Bureau of Investigation][17])

This is useful primary-source evidence that ALPR systems are actively deployed by Georgia local law enforcement.

---

### 39. Georgia ALPR physical inventory

Current OpenStreetMap-derived data reports approximately:

**8,868–9,551 mapped ALPR cameras**, depending on dataset/snapshot and inclusion methodology.

One current dataset reports:

```text
9,551 statewide
```

with the source checked against OpenStreetMap on August 26, 2026. ([Finding Flock][16])

Another OSM-derived dataset reports:

```text
8,868 mapped cameras
```

with approximately:

```text
8,225 Flock
580 unspecified
153 Genetec
105 Motorola
57 Leonardo/ELSAG
22 Axon
16 Axis
2 Neology
2 Rekor
1 LiveView
1 Uniview
```

([Unsurveilled][18])

#### Important

These are **not official Georgia government counts**.

They are open/community-mapped observations.

---

### 40. Georgia ALPR city distribution

The current OSM-derived inventory shows substantial concentrations in:

* Fulton County — 1,305
* Gwinnett — 927
* DeKalb — 797
* Cobb — 745
* Forsyth — 289
* Chatham — 273
* Cherokee — 233
* Richmond — 219
* Henry — 193
* Clayton — 189
* Fayette — 154
* Glynn — 143

([Unsurveilled][18])

Again, these are **mapped records**, not official deployment totals.

---

### 41. Georgia Flock footprint

A separate current OSM-derived dataset reports:

```text
8,845 documented ALPR
8,078 tagged Flock Safety
322 towns
```

([Flock Camera][19])

Another reports:

```text
9,551 documented ALPR
```

with Flock representing the overwhelming majority of identified vendors. ([Finding Flock][16])

The exact numbers differ because the sources use different snapshots and processing.

#### Correct national database behavior

Store:

```text
source
snapshot_time
record_count
vendor_count
```

Never overwrite them into a supposed "official statewide total."

---

### 42. Georgia ALPR source hierarchy

For Georgia:

#### Tier A — official

```text
GDOT ALPR permit system
Georgia Code §35-1-22
local government contracts
local agency policies
```

#### Tier B — open geodata

```text
OpenStreetMap
```

#### Tier C — derived community databases

```text
Finding Flock
Flock Camera
DeFlock
other OSM-derived maps
```

This is the correct hierarchy for ATLAS/MAC EVIL-style ingestion.

---

### 43. Georgia ALPR live camera feeds

I found **no public statewide feed exposing live ALPR imagery or plate reads**.

That means:

```text
ALPR physical deployment:
    🟢

ALPR permit evidence:
    🟢

ALPR vendor/location mapping:
    🟢 via OSM/community data

ALPR plate-read stream:
    🔴

ALPR statewide API:
    🔴
```

---

### 44. Georgia police/fire/EMS radio

Georgia has substantial public radio coverage.

Current Broadcastify data reports:

**79 public-safety audio feeds across 57 counties** in its public-safety directory. ([Broadcastify][20])

The broader Georgia audio directory currently reports **177 total feeds across 94 counties**, including public safety, amateur, rail, other and aviation categories. ([Broadcastify][21])

#### Status

🟢 **LARGE PUBLIC RADIO SOURCE**

---

### 45. Georgia police radio

Current public feeds include police/sheriff coverage such as:

* Carroll County Sheriff
* Carrollton Police
* Floyd County Police
* Coweta County Public Safety
* Spalding County Public Safety
* Catoosa County Public Safety
* Cobb County Public Safety
* DeKalb public safety
* Atlanta Fire Rescue
* Liberty County law enforcement
* Camden County law enforcement
* and many others. ([Broadcastify][20])

---

### 46. Georgia fire/EMS radio

Current public-safety feeds also cover:

* Fire dispatch
* Fire tactical
* EMS
* countywide fire/EMS
* municipal fire departments
* combined police/fire/EMS systems

The current Broadcastify directory shows coverage across dozens of Georgia counties. ([Broadcastify][20])

---

### 47. Georgia radio coverage by county

The current Broadcastify public-safety directory specifically lists **57 Georgia counties** with feeds. ([Broadcastify][20])

The broader directory lists **94 counties** with some form of audio-feed coverage. ([Broadcastify][21])

This is an important distinction:

```text
57 counties:
    public-safety feed coverage

94 counties:
    any Broadcastify audio category
```

---

### 48. Georgia State Patrol communications

Georgia State Patrol has:

**nine geographic troops**, with each troop containing a communications center. ([Georgia Department of Public Safety][22])

The GSP dispatcher role explicitly includes:

* radio communications
* data communications
* receiving
* relaying
* monitoring
* logging
* recording
* reporting
* mobile-unit communication
* computerized databases

([Georgia Department of Public Safety][23])

#### Important

This confirms a substantial state-level dispatch infrastructure.

It does **not** establish a public GSP raw CAD/radio API.

---

### 49. Georgia State Patrol CAD

GSP's 2024 annual report provides an unusually detailed list of CAD-call categories:

```text
Traffic Stops
Traffic Crashes
Abandoned/Recovered Vehicles
Stolen Vehicles
Motorist Assists
GCIC/NCIC Hits
Controlled Burns
Pursuits
DNR Calls
Aviation Calls
Road Checks
Towed Vehicles
Wanted Persons
Relays
```

([Georgia Department of Public Safety][24])

The same report gives statewide troop totals for 2024. ([Georgia Department of Public Safety][24])

#### But:

```text
GSP CAD exists:
    🟢

GSP CAD public annual statistics:
    🟢

GSP live public CAD API:
    🔴 not found
```

This distinction matters.

---

### 50. Georgia crash reports

Georgia DPS states that crash reports investigated by GSP can be requested through its Open Records process, while other crash reports go through GDOT's Crash Reporting Unit. ([Georgia Department of Public Safety][25])

DPS also provides **EPORTS**, which permits online search/retrieval/payment for available:

* crash reports
* incident reports
* arrest reports
* citations

([Georgia Department of Public Safety][26])

#### Status

🟢 **PUBLIC RECORD ACCESS SYSTEM**

but:

🟡 **not a live CAD feed**

---

### 51. Georgia 911/CAD records

Georgia's 911 program documentation requires PSAPs to maintain records of:

* date/time
* nature of problem
* CAD data
* action taken

for at least the specified minimum retention period. ([Georgia EMA][27])

This proves that Georgia's PSAP infrastructure contains CAD information statewide.

However:

```text
statewide public live CAD API:
    🔴 not found
```

Local PSAP/agency systems must therefore be researched individually.

---

### 52. Georgia transportation source architecture

Georgia can be represented as:

```text
GEORGIA
│
├── GDOT
│   │
│   ├── 511GA
│   │   ├── Cameras
│   │   ├── Events
│   │   ├── Alerts
│   │   ├── Message Signs
│   │   ├── Speeds
│   │   ├── Waze
│   │   ├── Weather
│   │   └── Express Lanes
│   │
│   ├── ArcGIS
│   │   └── web_trafficcameras
│   │       └── CCTV Camera
│   │
│   └── ALPR Permits
│
├── Georgia State Patrol
│   ├── CAD
│   ├── Crash Reports
│   └── Radio/Dispatch
│
├── Local Agencies
│   └── ALPR
│
├── GEMA/911
│   └── PSAP / CAD infrastructure
│
├── OpenStreetMap
│   └── ALPR locations
│
└── Broadcastify
    ├── Police
    ├── Sheriff
    ├── Fire
    └── EMS
```

---

### 53. Exact Georgia machine-readable source registry

| Source                        | Exact endpoint/system          | Access                | Status                          |
| ----------------------------- | ------------------------------ | --------------------- | ------------------------------- |
| GDOT CCTV                     | `web_trafficcameras/MapServer` | Public ArcGIS         | 🟢                              |
| CCTV Layer                    | Layer `0`                      | Public ArcGIS         | 🟢                              |
| Camera Query                  | `/MapServer/0/query`           | Public                | 🟢                              |
| Camera image                  | `ImageURL` field               | Public source field   | 🟢                              |
| Camera video                  | `VideoURL` field               | Public source field   | 🟢                              |
| Camera active state           | `ACTIVE`                       | Public                | 🟢                              |
| Camera recording state        | `RECORDED`                     | Public                | 🟢                              |
| Common camera ID              | `COMMON_ID`                    | Public                | 🟢                              |
| Camera function               | `FUNCTION`                     | Public                | 🟢                              |
| 511GA cameras                 | `/api/v2/get/cameras`          | Developer key         | 🟢                              |
| 511GA events                  | `/api/v2/get/event`            | Developer key         | 🟢                              |
| 511GA alerts                  | `/api/v2/get/alerts`           | Developer key         | 🟢                              |
| 511GA message signs           | `/api/v2/get/messagesigns`     | Developer key         | 🟢                              |
| 511GA express lanes           | `/api/v2/get/expresslanes`     | Developer key         | 🟢                              |
| 511GA Waze layers             | 511GA UI/API                   | mixed                 | 🟢/🟡                           |
| ALPR permits                  | GDOT ALPR program              | Public/permit process | 🟢                              |
| ALPR law                      | O.C.G.A. §35-1-22              | Public                | 🟢                              |
| GSP CAD                       | Internal/state system          | —                     | 🟢 exists / 🔴 public live feed |
| GSP crash reports             | DPS/EPORTS                     | Public records        | 🟢                              |
| 911 CAD records               | PSAP systems                   | Records               | 🟢                              |
| ALPR physical locations       | OSM                            | Open                  | 🟢                              |
| Police radio                  | Broadcastify                   | Public                | 🟢                              |
| Fire radio                    | Broadcastify                   | Public                | 🟢                              |
| EMS radio                     | Broadcastify                   | Public                | 🟢                              |
| Statewide ALPR read API       | —                              | —                     | 🔴                              |
| Statewide live police CAD API | —                              | —                     | 🔴                              |

---

### 54. Highest-value Georgia discoveries

#### 🥇 #1 — GDOT `web_trafficcameras`

This is the strongest source.

It directly exposes:

```text
DEVICE_ID
DEVICE_NAME
DEVICE_DESCRIPTION
ACTIVE
ROAD
CROSS ROAD
DIRECTION
CITY
COUNTY
LATITUDE
LONGITUDE
ImageURL
VideoURL
ORG
Type
REGION
RECORDED
COMMON_ID
FUNCTION
```

([Enterprise GIS][6])

This is almost exactly what a national camera-ingestion engine wants.

---

#### 🥈 #2 — 511GA Camera API

```text
/api/v2/get/cameras
```

Officially documented and returns camera inventory plus views. ([511GA][2])

---

#### 🥉 #3 — GDOT ALPR permit system

Official state process for ALPR installations in Georgia DOT right-of-way. ([Dot GA][13])

---

#### #4 — 511GA Events API

Provides coordinates, timestamps, event types, lane information, severity and encoded geometry. ([511GA][8])

---

#### #5 — Broadcastify

Large public police/fire/EMS coverage across Georgia. ([Broadcastify][20])

---

### 55. Recommended canonical source records

#### Georgia CCTV

```text
SOURCE_ID:
    GA-GDOT-CCTV-001

organization:
    Georgia Department of Transportation

program:
    Georgia 511 / GDOT Traffic Management

source_type:
    CCTV

endpoint_type:
    ArcGIS REST

service:
    web_trafficcameras

layer:
    0

layer_name:
    CCTV Camera

formats:
    JSON
    GeoJSON
    PBF

geometry:
    Point

coordinate_fields:
    LATITUDE
    LONGITUDE

media:
    ImageURL
    VideoURL

status:
    ACTIVE

additional_fields:
    RECORDED
    COMMON_ID
    FUNCTION
```

---

#### Georgia 511 camera source

```text
SOURCE_ID:
    GA-511GA-CCTV-001

organization:
    Georgia Department of Transportation

program:
    511GA

source_type:
    CCTV

endpoint:
    /api/v2/get/cameras

format:
    JSON / XML

authentication:
    developer_key

rate_limit:
    10 requests / 60 seconds

status:
    ACTIVE
```

---

#### Georgia ALPR permit source

```text
SOURCE_ID:
    GA-GDOT-ALPR-PERMIT-001

organization:
    Georgia Department of Transportation

source_type:
    ALPR installation permit

applicants:
    state police
    local police
    university police

deployment_area:
    Georgia state right-of-way

status:
    ACTIVE PROGRAM
```

---

### 56. Georgia final classification

| Category                          | Result           |
| --------------------------------- | ---------------- |
| Statewide traffic cameras         | 🟢 **Excellent** |
| Machine-readable camera inventory | 🟢 **Excellent** |
| Camera coordinates                | 🟢               |
| Camera image URLs                 | 🟢               |
| Camera video URLs                 | 🟢               |
| Camera active state               | 🟢               |
| Camera recording state            | 🟢               |
| Camera function                   | 🟢               |
| Camera common IDs                 | 🟢               |
| Traffic events                    | 🟢               |
| Event coordinates                 | 🟢               |
| Event route geometry              | 🟢               |
| Traffic alerts                    | 🟢               |
| Message signs                     | 🟢               |
| Traffic speeds                    | 🟢               |
| Waze layers                       | 🟢/🟡            |
| Weather                           | 🟢               |
| Express lanes                     | 🟢               |
| Official ALPR permit program      | 🟢 **Excellent** |
| ALPR law                          | 🟢               |
| ALPR public read API              | 🔴               |
| ALPR statewide public archive     | 🔴               |
| ALPR physical locations           | 🟢 via OSM       |
| GSP CAD infrastructure            | 🟢               |
| GSP live CAD API                  | 🔴               |
| Crash reports                     | 🟢               |
| Police radio                      | 🟢               |
| Fire radio                        | 🟢               |
| EMS radio                         | 🟢               |

---

### 57. Georgia bottom line

**Georgia is a Tier-A source state.**

The standout discovery is the official GDOT ArcGIS camera service:

```text
GDOT
 ↓
web_trafficcameras
 ↓
CCTV Camera
 ↓
JSON / GeoJSON / PBF
 ↓
DEVICE_ID
DEVICE_NAME
ACTIVE
LATITUDE
LONGITUDE
ImageURL
VideoURL
RECORDED
COMMON_ID
FUNCTION
...
```

([Enterprise GIS][6])

That is a **far better national-ingestion source than scraping 511GA's map**.

The official 511GA API then provides a second independent source for cameras, events, alerts and message signs, although its API requires a developer key. ([511GA][3])

For ALPR, Georgia has an unusually strong official discovery mechanism: **GDOT requires state, local and university police agencies seeking ALPR placement in state right-of-way to obtain a GDOT permit.** ([Dot GA][13]) The state also has a dedicated ALPR statute defining captured data to include location, date/time, photographs and plate numbers. ([Georgia General Assembly][14])

What we **do not** have is a legitimate public statewide live ALPR plate-read feed. The national system should record that as **not found**, not attempt to manufacture one.

**Next alphabetically: Hawaii.**

[1]: https://511ga.org/?utm_source=chatgpt.com "511GA"
[2]: https://511ga.org/help/endpoint/cameras?utm_source=chatgpt.com "GET Cameras API Documentation | 511GA"
[3]: https://511ga.org/developers/doc?utm_source=chatgpt.com "API Documentation | 511GA"
[4]: https://511ga.org/help/subendpoint/cameras?utm_source=chatgpt.com "Camera Views | 511GA"
[5]: https://enterprisegis.dot.ga.gov/hosting/rest/services?utm_source=chatgpt.com "Folder: /"
[6]: https://enterprisegis.dot.ga.gov/hosting/rest/services/web_trafficcameras/MapServer/layers?utm_source=chatgpt.com "All Layers and Tables (web_trafficcameras)"
[7]: https://services.arcgis.com/8lRhdTsQyJpO52F1/arcgis/rest/services/Traffic_Cameras_View/FeatureServer/0 "Layer: cameras (ID:0)"
[8]: https://511ga.org/help/endpoint/event?utm_source=chatgpt.com "GET Events API Documentation | 511GA"
[9]: https://511ga.org/help/endpoint/alerts?utm_source=chatgpt.com "GET Alerts API Documentation | 511GA"
[10]: https://511ga.org/help/endpoint/messagesigns?utm_source=chatgpt.com "GET Message Signs API Documentation | 511GA"
[11]: https://511ga.org/region/Central?utm_source=chatgpt.com "Central Traffic | 511GA"
[12]: https://511ga.org/help/endpoint/expresslanes?utm_source=chatgpt.com "GET Express Lanes API Documentation | 511GA"
[13]: https://www.dot.ga.gov/GDOT/Pages/ALPR.aspx?utm_source=chatgpt.com "Automated License Plate Readers (ALPR)"
[14]: https://www.legis.ga.gov/Legislation/20172018/176476.pdf?utm_source=chatgpt.com "C:\pdf\176476.wpd"
[15]: https://gov.georgia.gov/document/2025-signed-legislation/sb-153/download?utm_source=chatgpt.com "C:\Pdf\237769.wpd"
[16]: https://www.findingflock.com/cameras/georgia?utm_source=chatgpt.com "9,551 Flock & ALPR Cameras in Georgia · Finding Flock"
[17]: https://gbi.georgia.gov/press-releases/2025-11-19/gbi-arrests-braselton-police-chief-harassment-and-stalking?utm_source=chatgpt.com "GBI Arrests Braselton Police Chief for Harassment and Stalking | Georgia Bureau of Investigation"
[18]: https://unsurveilled.org/atlas/georgia/?utm_source=chatgpt.com "Georgia — known ALPR locations — Unsurveilled"
[19]: https://flockcamera.app/locations/georgia/?utm_source=chatgpt.com "Flock Cameras in Georgia — 8,845 ALPR Locations Mapped"
[20]: https://status.broadcastify.com/listen/stid/13/publicsafety?utm_source=chatgpt.com "Georgia Audio Feeds"
[21]: https://status.broadcastify.com/listen/stid/13?utm_source=chatgpt.com "Georgia Audio Feeds"
[22]: https://dps.georgia.gov/divisions/georgia-state-patrol/about-georgia-state-patrol?utm_source=chatgpt.com "About the Georgia State Patrol | Georgia Department of Public Safety"
[23]: https://dps.georgia.gov/dispatcher-georgia-state-patrol?utm_source=chatgpt.com "Dispatcher - Georgia State Patrol | Georgia Department of Public Safety"
[24]: https://dps.georgia.gov/document/document/2024-dps-annual-report/download?utm_source=chatgpt.com "GEORGIA STATE PATROL"
[25]: https://dps.georgia.gov/ask-us/how-do-i-submit-open-records-request?utm_source=chatgpt.com "Submit an Open Records Request | Georgia Department of Public Safety"
[26]: https://dps.georgia.gov/?utm_source=chatgpt.com "Georgia Department of Public Safety"
[27]: https://gema.georgia.gov/document/publication/911-emergency-telephone-number-plan/download?utm_source=chatgpt.com "911 Emergency Telephone Number Plan.PDF"
