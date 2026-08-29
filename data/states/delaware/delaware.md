---
state: Delaware
usps: DE
slug: delaware
dossier_number: 8
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
  imported_from: project_atlas_state_data/Deleware.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Delaware (DE) - ATLAS State Record

> Dossier **8 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Delaware is actually a **very strong state for this project**. The most important discovery is that DelDOT has a **machine-readable traffic-camera layer in an ArcGIS/FirstMap service**, and federal documentation indicates DelDOT's traffic-camera system has configuration data containing **camera locations and feed URLs**, plus near-real-time video feeds.

The state also has a significant ALPR footprint and a particularly useful 2026 Delaware DOJ record trail concerning Flock systems.

---

### 1. DelDOT statewide traffic cameras

**Organization:** Delaware Department of Transportation (DelDOT)
**System:** DelDOT Interactive Maps / Transportation Management Center
**Category:** State DOT / CCTV
**Status: 🟢 CONFIRMED**

The official DelDOT map exposes a dedicated:

* Traffic Cameras
* Advisories
* Travel Times
* Roadway Weather
* Variable Message Signs
* Variable Speed Limits
* Red Light Enforcement
* Partner Waze
* Snow Plow Tracking

layer structure. ([Delaware Department of Transportation][1])

**Official source:**

[DelDOT Interactive Maps](https://deldot.gov/map/?utm_source=chatgpt.com)

---

### 2. Exact DelDOT camera GIS service

This is one of the most valuable discoveries for the national database.

Delaware's FirstMap ArcGIS infrastructure exposes:

```text
Transportation/DE_TMC_Traffic_Feeds
```

with a layer specifically named:

```text
DelDOT Traffic Cameras
```

The layer is a point Feature Layer using WGS84 coordinates and supports:

```text
JSON
GeoJSON
PBF
```

and advanced queries. ([FirstMap Test][2])

#### Exact service

[DelDOT Traffic Feeds ArcGIS layer](https://enterprise.firstmaptest.delaware.gov/arcgis/rest/services/Transportation/DE_TMC_Traffic_Feeds/MapServer/?utm_source=chatgpt.com)

#### Camera layer

```text
Layer:
DelDOT Traffic Cameras

Geometry:
Point

Spatial reference:
EPSG:4326

Max record count:
2000

Query formats:
JSON
GeoJSON
PBF
```

([FirstMap Test][2])

#### Classification

**🟢 DIRECT MACHINE-READABLE CAMERA INVENTORY**

This is substantially better than merely scraping the DelDOT website.

---

### 3. Exact camera query architecture

The ArcGIS service provides a standard FeatureServer/MapServer query interface.

The camera layer can therefore be queried using the standard ArcGIS pattern:

```text
.../MapServer/0/query
```

with parameters such as:

```text
where=1=1
outFields=*
returnGeometry=true
f=json
```

The service explicitly supports JSON and GeoJSON query output. ([FirstMap Test][2])

#### Canonical ingestion

```text
DelDOT
  ↓
FirstMap
  ↓
DE_TMC_Traffic_Feeds
  ↓
DelDOT Traffic Cameras
  ↓
ArcGIS Query
  ↓
JSON / GeoJSON / PBF
```

**Status: 🟢**

---

### 4. Camera online/offline state

The DelDOT camera layer contains an `ENABLED` field.

The renderer defines:

```text
ENABLED = 0
    Off Line

ENABLED = 1
    On Line
```

([FirstMap Test][2])

This is valuable because the ingestion engine doesn't have to infer camera status from whether an image happens to load.

#### Canonical field

```text
camera.status
```

can be derived directly from:

```text
ENABLED
```

---

### 5. DelDOT camera coordinates

The ArcGIS layer is explicitly:

```text
Geometry Type:
esriGeometryPoint

Spatial Reference:
4326
```

([FirstMap Test][2])

That means Delaware does **not** have the scaled-integer coordinate problem encountered with some other DOT feeds.

The records can be ingested directly as:

```text
latitude
longitude
```

---

### 6. DelDOT camera feed URLs

This is where Delaware becomes particularly interesting.

A U.S. DOT/FHWA report documenting the Delaware AI-TOMS system states that DelDOT provides a data source called:

**Traffic Cameras / Video Cameras**

and describes it as providing:

> camera configuration information, including the camera locations and feed URLs.

It separately describes the video source as providing near-real-time video footage of traffic conditions. ([Highways][3])

The documented characteristics are:

```text
Camera configuration:
JSON

Update frequency:
Weekly

Video:
MP4*

Video update:
5 minutes
```

([Highways][3])

#### This is a major discovery.

It means DelDOT has an underlying machine-readable configuration containing:

```text
camera location
camera feed URL
```

rather than merely rendering the camera through its website.

---

### 7. DelDOT video feed

The same federal documentation identifies:

```text
Traffic Cameras
    ↓
Video Feed
```

as a near-real-time source providing traffic video. ([Highways][3])

The documented format is:

```text
MP4*
```

with a five-minute pull/update interval in the AI-TOMS architecture.

#### Important distinction

This does **not** necessarily mean every public DelDOT camera is an ordinary downloadable MP4 file.

The document describes how the AI-TOMS system consumed/transformed the source.

Therefore:

```text
camera feed exists:
    🟢

feed URL exists:
    🟢

exact current public feed URL pattern:
    🟡

all feeds are direct MP4:
    🔴 NOT ASSUMED
```

---

### 8. DelDOT camera images

DelDOT's own interactive map displays live camera images.

The state's transportation documentation describes the public interactive map as providing access to **live traffic cameras**. ([Delaware Department of Transportation][4])

The older DelDOT documentation also shows camera popups with titles such as:

```text
SR 1 @ INDIAN RIVER BRIDGE INLET - NORTH
```

and a live camera image. ([Delaware Department of Transportation][5])

#### Status

🟢 **PUBLIC LIVE CAMERA MEDIA**

---

### 9. DelDOT camera inventory is statewide

DelDOT's official Travel Advisories page explicitly provides:

> View the DelDOT Cameras in a listed format.

and organizes them by:

* New Castle County
* Kent County
* Sussex County

([Delaware Department of Transportation][6])

This is useful as a second validation source for the GIS inventory.

---

### 10. DelDOT Transportation Management Center

DelDOT states that its real-time travel advisories are reported by the:

**DelDOT Transportation Management Center**

and updated 24 hours a day. ([Delaware Department of Transportation][6])

The same system exposes:

* incidents
* road closures
* advisories
* cameras
* message signs
* variable speed limits

#### Architecture

```text
DelDOT Transportation Management Center
       │
       ├── Cameras
       ├── Incidents
       ├── Advisories
       ├── Message Signs
       ├── Variable Speed Limits
       └── Traffic data
```

---

### 11. DelDOT traffic advisories

The official travel-advisory system provides real-time information including:

```text
Congestion
Construction
Incident
Road Closure
Special Event
Special Travel Alert
Weather
```

([Delaware Department of Transportation][7])

#### Status

🟢 **CONFIRMED**

---

### 12. DelDOT advisory machine-readable endpoint

A currently indexed implementation exposes:

```text
https://tmc.deldot.gov/json/advisory.json
```

and:

```text
https://tmc.deldot.gov/json/restriction.json?id=ACVN
```

as live DelDOT data sources. ([Greasy Fork][8])

#### Status

```text
tmc.deldot.gov/json/advisory.json
    🟢 CONFIRMED

tmc.deldot.gov/json/restriction.json
    🟢 CONFIRMED

exact current schema:
    🟡 needs direct runtime inspection
```

This is much more useful than scraping HTML.

---

### 13. DelDOT ArcGIS road-closure source

The indexed implementation also references an ArcGIS public service:

```text
RoadClosures_5b3e88c5556242dfa6e058198be7eb52_public
```

with a FeatureServer layer query. ([Greasy Fork][8])

This gives us a second machine-readable transportation source.

#### Status

🟢 **CONFIRMED PUBLIC ARC GIS DATA**

---

### 14. DelDOT message signs

The official DelDOT travel-advisory page specifically provides:

**Message Signs**

and says they display messages from signs throughout Delaware. ([Delaware Department of Transportation][6])

The DelDOT map also exposes:

```text
Variable Message Signs
```

as a dedicated layer. ([Delaware Department of Transportation][1])

#### Status

🟢 **CONFIRMED**

---

### 15. DelDOT variable speed limits

DelDOT's public map contains a:

**Variable Speed Limits**

layer. ([Delaware Department of Transportation][9])

The travel-advisory page also exposes a table containing:

```text
Sign
Message
Date Updated
Map it
```

for variable speed limits. ([Delaware Department of Transportation][6])

#### Status

🟢 **CONFIRMED**

---

### 16. DelDOT traffic data

The DelDOT map provides:

* average speed
* volume
* maximum volume
* projected hourly volume
* vehicles per hour
* occupancy
* occupied time
* volume + occupancy
* sample size
* update timestamp
* status

([Delaware Department of Transportation][9])

The state's map defines average speed as the average speed of vehicles passing through a road segment during a five-minute period. ([Delaware Department of Transportation][1])

#### Status

🟢 **CONFIRMED**

---

### 17. DelDOT roadway weather

The DelDOT map has a dedicated:

**Roadway Weather**

layer.

It identifies conditions including:

```text
Dry
Wet
Chemically Wet
Mixed
Snow
Ice Watch
Ice Warning
Ice
```

([Delaware Department of Transportation][10])

#### Status

🟢 **CONFIRMED**

---

### 18. DelDOT snow data

The public map exposes:

**Snow Accumulations**

with ranges:

```text
0.00–0.49"
0.50–3.49"
3.50–7.99"
8.00–11.99"
12.00–15.99"
16.00–19.99"
20.00+"
```

([Delaware Department of Transportation][10])

It also exposes:

**Snow Plow Tracking**.

([Delaware Department of Transportation][1])

#### Status

🟢 **CONFIRMED**

---

### 19. DelDOT water-on-road data

The DelDOT map exposes:

**Water On Road Signs**

and:

**Water Level**

as dedicated layers. ([Delaware Department of Transportation][1])

#### Status

🟢 **CONFIRMED**

---

### 20. DelDOT Waze integration

The DelDOT map has a:

**Partner Waze**

layer. ([Delaware Department of Transportation][1])

The FHWA AI-TOMS report identifies Waze as a data source for:

**near-real-time events and incidents that DelDOT is monitoring.** ([Highways][3])

#### Architecture

```text
Waze
  ↓
DelDOT monitoring
  ↓
AI-TOMS / DelDOT traffic system
  ↓
events/incidents
```

#### Status

🟢 **CONFIRMED**

---

### 21. DelDOT red-light enforcement cameras

The public DelDOT map contains a dedicated:

**Red Light Enforcement**

layer. ([Delaware Department of Transportation][11])

This is important because the national database should distinguish:

```text
traffic CCTV
ALPR
red-light enforcement
speed enforcement
wrong-way detection
```

rather than putting every roadside camera into one category.

#### Status

🟢 **CONFIRMED PUBLIC MAP LAYER**

---

### 22. Delaware ALPR

Delaware has an established ALPR ecosystem.

A Delaware Department of Justice 2026 FOIA opinion explicitly discusses:

**Flock Safety automated license plate reader (ALPR) cameras and related software/services.**

The FOIA request sought:

* contracts
* procurement
* policies
* operating procedures
* retention
* sharing
* access
* audit information

([Delaware DOJ][12])

#### Status

🟢 **OFFICIAL STATE RECORD CONFIRMS ACTIVE ALPR PROGRAMS**

---

### 23. Milford, Delaware ALPR

The June 16, 2026 Delaware DOJ opinion is particularly valuable.

A requester sought records concerning:

**Flock Safety ALPR cameras and associated software/services** used by the City of Milford. ([Delaware DOJ][12])

The requested material included:

```text
contracts
procurement
policies
operating procedures
retention
sharing
access
audit information
```

([Delaware DOJ][12])

The Delaware DOJ determined the city had violated FOIA by failing to demonstrate that it appropriately withheld the requested record. ([Delaware DOJ][12])

#### This gives us a legitimate primary-source discovery route.

---

### 24. Clayton, Delaware ALPR

Another Delaware DOJ 2026 FOIA opinion concerns the **Town of Clayton** and Flock Safety.

The request sought:

* complete Flock contract
* cost
* duration
* data-access policies
* retention policies
* data-removal audit frequency
* specific plate-number records
* vehicle-related records

([Delaware DOJ][13])

The town provided the contract but denied other portions of the request. ([Delaware DOJ][13])

#### This confirms:

```text
Clayton
    ↓
Flock Safety
    ↓
ALPR
    ↓
contract / policy / data records
```

#### Status

🟢 **OFFICIAL RECORD**

---

### 25. Delaware statewide ALPR model policy

The Delaware Police Officers Standards and Training Commission developed a:

**statewide Automated License Plate Reader model policy**

and the policy was adopted by the Delaware Chiefs of Police. ([Public Meetings Delaware][14])

#### Status

🟢 **CONFIRMED**

This is useful because Delaware's ALPR landscape is not simply isolated Flock contracts.

There is a statewide policy framework.

---

### 26. Delaware ALPR location data

Current OpenStreetMap-derived datasets show approximately:

**381–401 mapped ALPR/Flock locations**, depending on the snapshot and classification. ([Flock Camera Locations][15])

Another current OSM-derived dataset reports:

**393 readers**

across 34 Delaware towns, including:

* 365 Flock Safety
* 16 Motorola Solutions
* 4 Cyber Secure
* 1 Neology
* 1 Rekor
* other/unknown records. ([Flock Camera][16])

#### Important

These are **not official statewide counts**.

They are community-mapped observations.

---

### 27. Delaware ALPR source of truth hierarchy

For this project, Delaware should use:

#### Tier 1 — Government records

```text
contracts
FOIA records
municipal documents
policies
procurement
```

#### Tier 2 — OpenStreetMap

```text
physical camera coordinates
vendor tags
direction
```

#### Tier 3 — community aggregators

```text
DeFlock
Flock Camera
other derived maps
```

This prevents us from accidentally treating a crowdsourced camera point as an official deployment record.

---

### 28. Delaware ALPR exact location data

The OSM-derived Delaware dataset currently reports:

**401 mapped camera coordinates** in one snapshot. ([Unsurveilled][17])

The vendor distribution includes:

```text
Flock Safety       372
Motorola Solutions 16
Unspecified        10
Neology             1
Rekor               1
Axis Communications 1
```

([Unsurveilled][17])

Another snapshot reports 393 cameras and 365 Flock-tagged cameras. ([Flock Camera][16])

#### Database rule

Store the snapshot date.

```text
source = OpenStreetMap
snapshot_date = 2026-08-xx
count = 401
```

Do not write:

```text
Delaware has 401 ALPR cameras.
```

That would overstate the evidence.

---

### 29. Delaware ALPR operators

Current OSM-derived data identifies documented operators including:

* Dover Police Department
* Harrington Police Department
* New Castle County PD
* Delaware State Police
* Seaford Police Department
* Georgetown Police Department
* Lowe's

([Flock Camera][16])

The operator counts are explicitly described as **documented floors rather than totals**, because operator attribution is missing from many records. ([Flock Camera][16])

---

### 30. Delaware State Police ALPR

Historical Delaware State Police documentation confirms the division operated an:

**Automated License Plate Reader (ALPR) and DVR back-end database server.** ([Delaware State Police][18])

That source is old, so it should not be used as proof of today's exact deployment count.

But it establishes that DSP's ALPR infrastructure is not a new development.

#### Current classification

```text
DSP ALPR capability:
    🟢 confirmed

current number of DSP ALPR cameras:
    🟡 needs current procurement/records

public DSP ALPR read API:
    🔴 not found
```

---

### 31. Delaware ALPR live plate-read API

I found **no statewide public API** exposing live plate reads such as:

```text
plate
timestamp
camera
latitude
longitude
vehicle attributes
```

#### Classification

**🔴 NOT FOUND**

Do not invent one.

---

### 32. Delaware ALPR public database

Likewise, I did not find an official statewide public database containing all ALPR observations.

#### Classification

```text
statewide ALPR inventory:
    🔴 no official public machine-readable inventory found

physical locations:
    🟢 OSM/community data

agency records:
    🟡 FOIA/public documents

plate-read database:
    🔴 no public statewide source
```

---

### 33. Delaware public police/fire/EMS radio

Broadcastify currently indexes:

**17 public-safety feeds across Delaware's 3 counties.** ([Broadcastify][19])

The current county distribution is:

| County     | Public-safety feeds |
| ---------- | ------------------: |
| Kent       |                   7 |
| New Castle |                   8 |
| Sussex     |                   2 |

([Broadcastify][19])

#### Status

🟢 **CONFIRMED PUBLIC RADIO SOURCES**

---

### 34. Delaware fire/EMS radio

Current public feeds include:

* New Castle County Fire
* Sussex County Fire / Seaford Fire / EMS
* Sussex County Fire/EMS P25
* Kent Fire/EMS Countywide
* NCC Fire/EMS Countywide
* Wilmington Fire
* NCC Fire TAC channels
* NCC EMS Operations
* additional fire/EMS channels

([Broadcastify][19])

#### Status

🟢

---

### 35. Delaware police radio

The current Broadcastify Delaware public-safety directory is disproportionately fire/EMS-focused, but it is still the correct public-feed directory to interrogate for Delaware public-safety radio. ([Broadcastify][19])

A separate statewide Delaware Broadcastify Calls page reports coverage categories including:

```text
Law Dispatch
Law Tac
Corrections
Military
Public Works
Transportation
```

([Broadcastify][20])

#### Important distinction

Broadcastify's **Live Audio** and **Broadcastify Calls** are different source products.

The ingestion architecture should represent them separately.

---

### 36. Delaware police CAD

I did **not** locate a statewide public police CAD feed comparable to a fully open incident/CAD API.

#### Classification

🔴 **NO STATEWIDE PUBLIC CAD API CONFIRMED**

However, DelDOT provides traffic incidents/advisories, which are a separate transportation event source.

---

### 37. Delaware transportation source architecture

Delaware is unusually clean:

```text
DELAWARE
│
└── DelDOT
    │
    ├── Transportation Management Center
    │
    ├── FirstMap
    │   │
    │   └── DE_TMC_Traffic_Feeds
    │       │
    │       └── DelDOT Traffic Cameras
    │
    ├── Traffic Cameras
    │
    ├── Traffic / Speed / Volume
    │
    ├── Advisories
    │
    ├── Road Closures
    │
    ├── Message Signs
    │
    ├── Variable Speed Limits
    │
    ├── Roadway Weather
    │
    ├── Snow
    │
    ├── Water-on-road
    │
    ├── Waze
    │
    └── Red-Light Enforcement
```

---

### 38. Exact Delaware machine-readable sources

| Source                         | Exact source                           | Access              | Status |
| ------------------------------ | -------------------------------------- | ------------------- | ------ |
| DelDOT Traffic Cameras         | `DE_TMC_Traffic_Feeds/MapServer`       | Public ArcGIS       | 🟢     |
| Camera layer                   | `DelDOT Traffic Cameras`               | Public ArcGIS       | 🟢     |
| Camera query                   | ArcGIS `/query`                        | Public              | 🟢     |
| Camera configuration/feed URLs | DelDOT Video Cameras source            | JSON                | 🟢     |
| Camera video                   | DelDOT Video Feed                      | Near-real-time      | 🟢     |
| Advisories                     | `tmc.deldot.gov/json/advisory.json`    | Public              | 🟢     |
| Restrictions                   | `tmc.deldot.gov/json/restriction.json` | Public              | 🟢     |
| Road closures                  | ArcGIS public FeatureServer            | Public              | 🟢     |
| Message signs                  | DelDOT map/source                      | Public              | 🟢     |
| Variable speed limits          | DelDOT map/source                      | Public              | 🟢     |
| Roadway weather                | DelDOT map/source                      | Public              | 🟢     |
| Waze events                    | DelDOT monitored Waze                  | Public platform     | 🟢     |
| Red-light enforcement          | DelDOT map layer                       | Public map          | 🟢     |
| ALPR locations                 | OpenStreetMap                          | ODbL                | 🟢     |
| ALPR contracts                 | Municipal FOIA                         | Public-record route | 🟢/🟡  |
| ALPR policy                    | Delaware POST model policy             | Public              | 🟢     |
| ALPR reads                     | —                                      | —                   | 🔴     |
| Statewide police CAD           | —                                      | —                   | 🔴     |
| Public radio                   | Broadcastify                           | Public              | 🟢     |

---

### 39. The most important Delaware discovery

If we're building the national source database, this should be entered as a **high-priority canonical source**:

```text
SOURCE_ID:
    DE-DELDOT-CCTV-001

organization:
    Delaware Department of Transportation

program:
    DelDOT Transportation Management Center

source_type:
    CCTV

endpoint_type:
    ArcGIS REST

service:
    Transportation/DE_TMC_Traffic_Feeds

layer:
    DelDOT Traffic Cameras

geometry:
    Point

coordinate_system:
    EPSG:4326

output:
    JSON
    GeoJSON
    PBF

status:
    ACTIVE / ENABLED

media:
    public traffic-camera feed

provenance:
    Delaware FirstMap / DelDOT
```

The actual ArcGIS service confirms the camera layer and its query capabilities. ([FirstMap Test][2])

---

### 40. Second high-priority source

```text
SOURCE_ID:
    DE-DELDOT-TMC-001

organization:
    Delaware Department of Transportation

program:
    Transportation Management Center

source_type:
    traffic_events

endpoint:
    https://tmc.deldot.gov/json/advisory.json

format:
    JSON

status:
    ACTIVE
```

The endpoint is independently visible in current source code using the live DelDOT TMC URL. ([Greasy Fork][8])

---

### 41. Delaware final classification

| Category                          | Result                    |
| --------------------------------- | ------------------------- |
| Public traffic cameras            | 🟢 **Confirmed**          |
| Machine-readable camera inventory | 🟢 **ArcGIS**             |
| Camera coordinates                | 🟢                        |
| Camera online/offline state       | 🟢                        |
| Camera feed URLs                  | 🟢 **documented by FHWA** |
| Public live video                 | 🟢                        |
| Traffic incidents                 | 🟢                        |
| Road closures                     | 🟢                        |
| Traffic speeds                    | 🟢                        |
| Traffic volume                    | 🟢                        |
| VMS/DMS                           | 🟢                        |
| Variable speed limits             | 🟢                        |
| Roadway weather                   | 🟢                        |
| Snow data                         | 🟢                        |
| Water-on-road                     | 🟢                        |
| Waze events                       | 🟢                        |
| Red-light enforcement             | 🟢                        |
| Public police radio               | 🟢                        |
| Public fire radio                 | 🟢                        |
| Public EMS radio                  | 🟢                        |
| ALPR deployments                  | 🟢                        |
| ALPR mapped locations             | 🟢 **~380–400+**          |
| Official ALPR policy              | 🟢                        |
| ALPR contracts/records            | 🟢                        |
| Public ALPR read API              | 🔴                        |
| Statewide ALPR database           | 🔴                        |
| Statewide police CAD              | 🔴                        |

---

### 42. Delaware source quality

#### 🟢 Tier A — direct government/machine-readable

1. **DelDOT FirstMap Traffic Cameras**
2. **DelDOT TMC advisory JSON**
3. **DelDOT ArcGIS transportation layers**
4. **DelDOT public camera system**
5. **Delaware DOJ FOIA records**
6. **Delaware POST ALPR policy**
7. **DelDOT Waze integration**

#### 🟢 Tier B — direct public platform

8. **Broadcastify public radio**

#### 🟢 Tier C — open community geodata

9. **OpenStreetMap ALPR locations**

#### 🟡 Tier D — derived aggregators

10. DeFlock
11. Flock Camera
12. other community ALPR maps

The Tier D sources are useful for discovery/validation, but **the underlying OSM/government record should be retained as provenance**.

---

#### Delaware bottom line

**Delaware is a particularly good state for the national ingestion engine.**

The major win is not merely "Delaware has traffic cameras."

We have identified a **direct machine-readable ArcGIS camera inventory**:

```text
DelDOT
   ↓
FirstMap
   ↓
DE_TMC_Traffic_Feeds
   ↓
DelDOT Traffic Cameras
   ↓
JSON / GeoJSON / PBF
```

and federal documentation additionally confirms that DelDOT's camera infrastructure has **camera configuration data containing locations and feed URLs** and a separate near-real-time video-feed source. ([FirstMap Test][2])

For ALPR, Delaware has:

```text
physical locations
        ↓
OpenStreetMap

official deployment evidence
        ↓
municipal contracts / FOIA

state policy
        ↓
Delaware POST

actual plate-read data
        ↓
NOT publicly exposed statewide
```

The **next state is Florida**.

[1]: https://deldot.gov/map/?utm_source=chatgpt.com "DelDOT Interactive Maps - Delaware Department of Transportation"
[2]: https://enterprise.firstmaptest.delaware.gov/arcgis/rest/services/Transportation/DE_TMC_Traffic_Feeds/MapServer/layers?utm_source=chatgpt.com "All Layers and Tables (Transportation/DE_TMC_Traffic_Feeds)"
[3]: https://highways.dot.gov/media/109411?utm_source=chatgpt.com "Advanced Transportation and Congestion"
[4]: https://deldot.gov/Business/freight/pdfs/2024/Delaware%20State%20Freight%20Plan%20-%20Appendices.pdf?utm_source=chatgpt.com "APPENDIX D  
2022 DELAWARE STATE FREIGHT PLAN

D.1"
[5]: https://deldot.gov/Programs/autonomous-vehicles/pdfs/EO-14-Final-Report.pdf?utm_source=chatgpt.com "Traffic Cameras"
[6]: https://deldot.gov/Traffic/travel_advisory/?os=i&utm_source=chatgpt.com "Travel Advisories - Delaware Department of Transportation"
[7]: https://deldot.gov/map/?tab=Advisories&utm_source=chatgpt.com "DelDOT Interactive Maps - Delaware Department of Transportation"
[8]: https://greasyfork.org/en/scripts/412976-wme-dot-advisories/code?utm_source=chatgpt.com "WME DOT Advisories - Source code"
[9]: https://deldot.gov/map/index.shtml?tab=VarSpeedLimits&utm_source=chatgpt.com "DelDOT Interactive Maps - Delaware Department of Transportation"
[10]: https://deldot.gov/map/index.shtml?tab=Weather&utm_source=chatgpt.com "DelDOT Interactive Maps - Delaware Department of Transportation"
[11]: https://deldot.gov/map/index.shtml?tab=RLECameras&utm_source=chatgpt.com "DelDOT Interactive Maps - Delaware Department of Transportation"
[12]: https://attorneygeneral.delaware.gov/2026/06/16/26-ib32-6-16-26-foia-opinion-letter-to-julie-morris-re-city-of-milford/?utm_source=chatgpt.com "26-IB32 6/16/26 FOIA Opinion Letter to Julie Morris re: City of Milford - Delaware Department of Justice - State of Delaware"
[13]: https://attorneygeneral.delaware.gov/2026/05/20/26-ib26-5-20-26-foia-opinion-letter-to-daniel-stevens-re-foia-petition-regarding-the-town-of-clayton/?utm_source=chatgpt.com "26-IB26 5/20/26 FOIA Opinion Letter to Daniel Stevens re: Town of Clayton - Delaware Department of Justice - State of Delaware"
[14]: https://publicmeetings.delaware.gov/Document/79525_Minutes-Final.pdf?utm_source=chatgpt.com "STATE OF DELAWARE"
[15]: https://flockcameralocations.com/locations/delaware?utm_source=chatgpt.com "Flock Camera Locations in Delaware — Live DE ALPR Map | Flock Camera Locations"
[16]: https://flockcamera.app/locations/delaware/?utm_source=chatgpt.com "Flock Cameras in Delaware — 393 ALPR Locations Mapped"
[17]: https://www.unsurveilled.org/atlas/delaware/?utm_source=chatgpt.com "Delaware — known ALPR locations — Unsurveilled"
[18]: https://dsp.delaware.gov/wp-content/uploads/sites/118/2018/06/Annual-Report-2012.pdf?utm_source=chatgpt.com "untitled"
[19]: https://status.broadcastify.com/listen/stid/10/publicsafety?utm_source=chatgpt.com "Delaware Audio Feeds"
[20]: https://status.broadcastify.com/listen/ctid/3320/publicsafety?utm_source=chatgpt.com "Statewide Delaware, Delaware Audio Feeds"
