---
state: Oregon
usps: OR
slug: oregon
dossier_number: 37
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
  imported_from: project_atlas_state_data/Oregon.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Oregon (OR) - ATLAS State Record

> Dossier **37 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Oregon is one of the **strongest states we've found so far** for the actual purpose of this project.

The biggest discovery is that Oregon does **not merely have a public traffic-camera website**. ODOT explicitly operates a **developer API** exposing camera inventory, camera image URLs, incidents, local incidents, DMS, RWIS, traffic detectors, and WZDx.

Even better, ODOT also exposes an **ArcGIS REST CCTV inventory layer** containing individual camera records, coordinates, image URLs, camera URLs, device IDs, route information, and agency information.

For ATLAS/MAC EVIL, Oregon should be classified as:

> **🟢 HIGH-VALUE STATE — direct machine-readable transportation data exists.**

---

### 1. Oregon Department of Transportation

Primary transportation authority:

**Oregon Department of Transportation — ODOT**

Primary traveler-information system:

### TripCheck

![Image](https://images.openai.com/static-rsc-4/_zR0UGVGROJlPpvmVDQPVV2Nu6pLqQmjs0iuTiLyO65OnlCS-0p7EaQyc8Gb_7F394pdBQipn6-fdFZ8DW_gSEmy8Wt0HPPb9HnR4LPUdgH3_ULlKdwr1b4GkHCT9DcSrhc-IeEOEnjYo62CFK_FOGq5jNvm29uKTiPfrjaY1AP3Regix2XRqwuzGF6-tUNb?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/a-gs60XluDnewSL5Tapv5Vs-3644nLqyb4a9fI2Y_ZeCwq0vw-xeXptHNfPpEOe7GZn0pj6jPVXEu5OOBFXh-606NLt1Jzso1lzZD82JUcqnZjoe7CznHF2V2XWe08eZ9pI8QpIT-x5JehRKZP74WQ5nk4tXyYqKakjakpsfaiBoSotILfCQKRo3w76Z2rz3?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Q5_w38pXu9NuREIdRoXiP2qceAHfuuQTNRbUPRfsszf7ufM0WtP733N6VaUatsKJuhmXBdyCQ2Uast2VeKv0PuDaPGNEFJpldFcsaxIfrYnSmDW3cznBYxywcJlSnSrW0SofGxwdUnLHRsp4pONUcPdb1jRTiJbDJVC6_LXXFHQrkhzKOxo3hky1dhLKmqVH?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/LE8opup5NYaSFpzTcgJ0iODvSHQOzPOT7GKNE_EPSiXD1lOdXfkU7q5YNjb7ZxwLGIGHJqVuBxfx1j4bGYlRfctB6FuDiokhT6QokgW3xzRTDeZpU0sZnKq-xUmeD6GZew3e24jnqJoU1r0FR_UQytx2onDcgqnSgP5hFLfI3LQMCn2w74dHAu9Iq23UyGJq?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/beuRUPihdi7NoJXq8eLSNK4cJSv77qYM2EzT_AG1Yv5DSlWRvAPaannWTKkkzz7Ju10XwiktFtGC2GnuI7N4uRz49sUhf2LRvX5kP_4JKoFh2FJxFpwL7nPJzCJsQT4O3c8NA50XtMlt1N7PvAiwrpk5CY3hdNbk7aSjoHfTMCpLEkZcUtOxLcW0fDaUDpBi?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/4oaDE16tcWjC15fKdHKLArPfH1YIfCspINscZwPSbtlveTL0QyHnHsR1L5IrlH5A4-yqaOP0piJdIeCWXyyd_A54_r6zpH0icBVG-dy7Hs5bX_geWP7AcYFm254F_22fMxq8HocSBmkfxjfu5_ta5QZAIuGVEieijn4NjyhUdx7A-oIecDRV-AVm34-D98FT?purpose=fullsize)

Official TripCheck:

[TripCheck](https://www.tripcheck.com/?utm_source=chatgpt.com)

ODOT describes TripCheck as its traveler-information portal for:

* traffic incidents
* congestion
* closures
* traffic cameras
* construction
* weather
* road conditions.

([Oregon][1])

#### Registry

```text
SOURCE_ID:
    OR-ODOT-TRIPCHECK

OWNER:
    Oregon Department of Transportation

PROGRAM:
    TripCheck

TYPE:
    STATE_TRAVELER_INFORMATION

STATUS:
    🟢 VERIFIED
```

---

### 2. TripCheck Data API

This is the major finding.

ODOT explicitly publishes:

### TripCheck Data API

ODOT says the API provides access to data available on TripCheck, including:

* traffic incidents
* traffic cameras
* construction information
* weather conditions
* and other operational data.

([TripCheck][2])

Official API portal:

[ODOT TripCheck Data API Portal](https://apiportal.odot.state.or.us/?utm_source=chatgpt.com)

ODOT's own traveler-information page says the data is made available **for free** in XML and JSON formats for application and research integration. ([Oregon][1])

#### Registry

```text
SOURCE_ID:
    OR-ODOT-TRIPCHECK-API

TYPE:
    PUBLIC_STATE_TRANSPORTATION_API

FORMAT:
    XML
    JSON
    REST

STATUS:
    🟢 VERIFIED

ACCESS:
    API PORTAL / SUBSCRIPTION
```

There is an important distinction:

**The data is publicly offered, but the API portal uses subscriptions/API management.**

So ATLAS should record:

```text
public_data:
    true

anonymous_endpoint:
    not assumed

api_subscription:
    required
```

Do **not** confuse "publicly available API" with "unauthenticated endpoint."

---

### 3. Exact CCTV inventory resource

ODOT's API documentation specifically identifies:

### CCTV Inventory

Refresh:

**24 hours**

Purpose:

> inventory of all available cameras currently displayed on TripCheck

and each camera record includes an Internet URL for the specific still-camera image.

ODOT also notes that cameras may belong to ODOT **or partner agencies**. ([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-CCTV-INVENTORY

TYPE:
    CAMERA_INVENTORY

REFRESH:
    24 HOURS

DATA:
    CAMERA METADATA
    LOCATION
    IMAGE URL

STATUS:
    🟢 VERIFIED
```

This is extremely valuable for the national ingestion engine.

---

### 4. ODOT CCTV ArcGIS REST layer

There is an additional **direct GIS source**.

ODOT exposes a FeatureServer/MapServer layer named:

### `cctvInventory`

Official ArcGIS REST endpoint:

[ODOT CCTV Inventory ArcGIS REST Layer](https://gis.odot.state.or.us/arcgis1006/rest/services/trip_check/Trip_Check_Terrain/MapServer/1?utm_source=chatgpt.com)

This is not just a map image.

It is a real ArcGIS Feature Layer.

The service reports:

```text
Geometry:
    Point

Query formats:
    JSON
    AMF
    GeoJSON

Pagination:
    YES

Statistics:
    YES

Advanced queries:
    YES
```

([Oregon Department of Transportation GIS][3])

That means ATLAS can potentially retrieve structured camera records directly through standard ArcGIS REST queries.

---

### 5. Exact camera fields

This is one of the best camera datasets we've encountered.

The `cctvInventory` layer exposes fields including:

```text
OBJECTID

agencyIdentifier
agencyName

messageID
responseTo

date
time
date2
time3

organization_id
organization_name

device_id
device_name

latitude
longitude

cctv_image
cctv_url
cctv_other

node_id

route_designator

date4
time5

LAT
LONG

Shape
```

([Oregon Department of Transportation GIS][3])

That means a canonical ingestion adapter can directly map:

```text
device_id
    ↓
source_camera_id

device_name
    ↓
name

latitude
longitude
    ↓
location

cctv_image
    ↓
still_image_url

cctv_url
    ↓
camera_page / stream_url

agencyName
    ↓
owner

route_designator
    ↓
roadway
```

This is **exactly the sort of source MAC EVIL needs.**

---

### 6. Direct ArcGIS query capability

The layer explicitly supports:

```text
/query
```

and reports support for:

* JSON
* GeoJSON
* advanced queries
* statistics
* pagination
* spatial queries
* SQL expressions.

([Oregon Department of Transportation GIS][3])

Therefore:

```text
OR-ODOT-CCTV-ARCGIS
        │
        ├── inventory
        ├── coordinates
        ├── camera IDs
        ├── image URLs
        ├── camera URLs
        ├── agencies
        └── roadway identifiers
```

#### ATLAS classification

```text
DIRECT MACHINE DATA:
    🟢 YES

STANDARD FORMAT:
    🟢 ArcGIS REST

GEOJSON:
    🟢

JSON:
    🟢

CAMERA LOCATION:
    🟢

IMAGE URL:
    🟢

CAMERA URL:
    🟢
```

This is a **Tier-1 source**.

---

### 7. Camera images

The TripCheck API documentation specifically states that the CCTV inventory contains:

> an Internet URL that can be used to access the specific still camera image.

([TripCheck][2])

This is extremely important.

We therefore have:

```text
CAMERA METADATA
       +
STILL IMAGE URL
```

rather than merely a map marker.

#### Registry

```text
SOURCE_ID:
    OR-ODOT-CCTV-STILLS

PARENT:
    OR-ODOT-CCTV-INVENTORY

TYPE:
    PUBLIC_TRAFFIC_CAMERA_STILL

STATUS:
    🟢 VERIFIED
```

---

### 8. Live video vs still cameras

I would **not** mark every Oregon TripCheck camera as HLS/video.

ODOT's API explicitly documents the CCTV feed as a **still-camera image URL**. ([TripCheck][2])

Therefore:

```text
STILL IMAGE:
    🟢 VERIFIED

LIVE VIDEO:
    🟡 CAMERA-SPECIFIC

HLS:
    ❓ NOT VERIFIED STATEWIDE

MJPEG:
    ❓ NOT VERIFIED STATEWIDE
```

This distinction is critical.

ATLAS should inspect `cctv_url` individually rather than assuming every camera supports video.

---

### 9. Camera ownership

ODOT explicitly states that cameras may be:

```text
ODOT owned
OR
partner-agency owned
```

([TripCheck][2])

This means the Oregon dataset potentially gives us cameras operated by entities beyond ODOT.

That is extremely valuable for nationwide aggregation.

```text
AGENCY
   │
   ├── ODOT
   ├── county
   ├── city
   └── partner agency
```

The `agencyName`, `agencyIdentifier`, `organization_name`, and `organization_id` fields give us several possible provenance keys. ([Oregon Department of Transportation GIS][3])

---

### 10. Incidents API

ODOT exposes:

### Incidents

Refresh:

**30 seconds**

The API describes this as current traffic incidents on state highways, including:

* crashes
* planned closures
* construction zones.

([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-INCIDENTS

TYPE:
    TRAFFIC_INCIDENT

REFRESH:
    30 SECONDS

STATUS:
    🟢 VERIFIED
```

---

### 11. Waze-format incidents

There is another particularly useful feed:

### Incidents — Waze Format

ODOT provides current state-highway incidents formatted according to:

### Waze CIFS V2

([TripCheck][2])

#### Registry

```text
SOURCE_ID:
    OR-ODOT-INCIDENTS-WAZE

FORMAT:
    WAZE CIFS V2

TYPE:
    TRAFFIC_INCIDENT

REFRESH:
    30 SECONDS

STATUS:
    🟢 VERIFIED
```

This is an excellent normalization source because ATLAS already has a reason to understand Waze-style incident structures.

---

### 12. Local incidents

ODOT additionally provides:

### Local Incidents

Refresh:

**2 minutes**

These are events on local and county roads reported by non-ODOT government agencies.

ODOT gives examples including:

* Washington County
* City of Eugene Public Works.

([TripCheck][2])

#### Registry

```text
SOURCE_ID:
    OR-ODOT-LOCAL-INCIDENTS

TYPE:
    LOCAL_TRAFFIC_EVENT

REFRESH:
    2 MINUTES

REPORTERS:
    GOVERNMENT AGENCIES

STATUS:
    🟢 VERIFIED
```

This is especially useful because it creates a statewide aggregation layer for municipal agencies.

---

### 13. Local incidents Waze format

There is also:

```text
OR-ODOT-LOCAL-INCIDENTS-WAZE
```

formatted in Waze CIFS V2.

([TripCheck][2])

#### Registry

```text
SOURCE_ID:
    OR-ODOT-LOCAL-INCIDENTS-WAZE

TYPE:
    LOCAL_TRAFFIC_EVENT

FORMAT:
    WAZE CIFS V2

REFRESH:
    2 MINUTES

STATUS:
    🟢 VERIFIED
```

---

### 14. Dynamic Message Signs

ODOT publishes:

### DMS Inventory

Refresh:

**24 hours**

and:

### DMS Status

Refresh:

**1 minute**

The inventory contains statewide sign location/attributes, while status contains the currently displayed messages. ([TripCheck][2])

#### Registry

```text
SOURCE_ID:
    OR-ODOT-DMS-INVENTORY

TYPE:
    DYNAMIC_MESSAGE_SIGN

REFRESH:
    24 HOURS

STATUS:
    🟢 VERIFIED
```

```text
SOURCE_ID:
    OR-ODOT-DMS-STATUS

TYPE:
    DYNAMIC_MESSAGE_SIGN_STATUS

REFRESH:
    1 MINUTE

STATUS:
    🟢 VERIFIED
```

---

### 15. RWIS inventory

Oregon also exposes:

### Road Weather Information System — RWIS Inventory

Refresh:

**24 hours**

ODOT describes this as the inventory and location of all weather stations along state highways and the measurements they can make. ([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-RWIS-INVENTORY

TYPE:
    ROAD_WEATHER_STATION

REFRESH:
    24 HOURS

STATUS:
    🟢 VERIFIED
```

---

### 16. RWIS status

Then:

### RWIS Status

Refresh:

**5 minutes**

The API supplies automated weather-station observations such as:

* air temperature
* surface temperature
* wind speed
* other weather factors.

([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-RWIS-STATUS

TYPE:
    ROAD_WEATHER_OBSERVATION

REFRESH:
    5 MINUTES

STATUS:
    🟢 VERIFIED
```

---

### 17. Traffic detector inventory

ODOT provides:

### Traffic Detector Inventory

Refresh:

**24 hours**

It identifies traffic detector stations and highway ramps associated with them. ([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-TRAFFIC-DETECTOR-INVENTORY

TYPE:
    TRAFFIC_SENSOR

STATUS:
    🟢 VERIFIED
```

---

### 18. Traffic detector roadway data

ODOT then provides actual roadway measurements.

Refresh:

### 2 minutes

The feed contains traffic-detector measurements including:

* volume
* occupancy
* speed.

([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-TRAFFIC-DETECTOR-ROADWAY

TYPE:
    TRAFFIC_SENSOR_OBSERVATION

REFRESH:
    2 MINUTES

MEASUREMENTS:
    VOLUME
    OCCUPANCY
    SPEED

STATUS:
    🟢 VERIFIED
```

This is another excellent ATLAS source because it allows us to associate camera observations with actual traffic conditions.

---

### 19. Ramp detector data

There is a separate:

### Traffic Detector — Ramp Data

ODOT describes it as highway-ramp information including:

* occupancy
* volume
* metering rate.

Refresh:

**2 minutes**. ([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-RAMP-DETECTORS

TYPE:
    RAMP_TRAFFIC_SENSOR

REFRESH:
    2 MINUTES

STATUS:
    🟢 VERIFIED
```

---

### 20. WZDx

Oregon also has an official:

### WZDx v4

feed.

ODOT says it covers work-zone activities throughout Oregon and follows the FHWA/USDOT WZDx specification.

Refresh:

### 30 seconds

([TripCheck][2])

#### Registry

```text
SOURCE_ID:
    OR-ODOT-WZDX

FORMAT:
    WZDx v4

TYPE:
    WORK_ZONE

REFRESH:
    30 SECONDS

STATUS:
    🟢 VERIFIED
```

---

### 21. TripCheck API complete resource matrix

This is the important part.

| Source                     | Type                 | Refresh | Status |
| -------------------------- | -------------------- | ------: | ------ |
| CCTV Inventory             | Cameras              |     24h | 🟢     |
| Incidents                  | Traffic events       |     30s | 🟢     |
| Local Incidents            | Local events         |      2m | 🟢     |
| DMS Inventory              | Signs                |     24h | 🟢     |
| DMS Status                 | Sign messages        |      1m | 🟢     |
| RWIS Inventory             | Weather stations     |     24h | 🟢     |
| RWIS Status                | Weather observations |      5m | 🟢     |
| Traffic Detector Inventory | Sensors              |     24h | 🟢     |
| Traffic Detector Roadway   | Traffic data         |      2m | 🟢     |
| Traffic Detector Ramp      | Ramp data            |      2m | 🟢     |
| WZDx Activities            | Work zones           |     30s | 🟢     |
| Road & Weather Reports     | Road conditions      |      5m | 🟢     |
| Metadata                   | Enumerations         |     24h | 🟢     |
| Multnomah Falls Parking    | Parking              |     20s | 🟢     |

All of these are explicitly documented by ODOT. ([TripCheck][2])

---

### 22. Road and Weather Reports

ODOT also provides:

### Road and Weather Reports

Refresh:

**5 minutes**

This includes:

* current road conditions
* weather observations
* tire-chain restrictions.

([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-ROAD-WEATHER

TYPE:
    ROAD_CONDITION

REFRESH:
    5 MINUTES

STATUS:
    🟢 VERIFIED
```

---

### 23. Multnomah Falls parking

A niche but interesting source:

### Multnomah Falls Parking

Refresh:

**20 seconds**

The API provides:

* parking-lot occupancy
* gate-closure data

for the Multnomah Falls lot at I-84 Exit 31. ([TripCheck][2])

```text
SOURCE_ID:
    OR-ODOT-MULTNOMAH-PARKING

TYPE:
    PARKING_OCCUPANCY

REFRESH:
    20 SECONDS

STATUS:
    🟢 VERIFIED
```

Not a surveillance source, but worth retaining in the statewide source registry.

---

### 24. Oregon State Radio Project

Now the radio side.

Oregon's statewide public-safety radio system is:

### Oregon State Radio Project — OSRP

The Oregon statewide communications plan identifies the system as statewide and jointly associated with:

* Oregon Department of Transportation
* Oregon State Police.

It describes the system as:

**Project 25 (P25)** with VHF 150 MHz and 700 MHz trunked components. ([Oregon][4])

#### Registry

```text
SOURCE_ID:
    OR-OSRP

NAME:
    Oregon State Radio Project

OWNERS:
    ODOT
    Oregon State Police

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

BANDS:
    VHF
    700 MHz

STATUS:
    🟢 VERIFIED
```

---

### 25. Oregon radio ecosystem

Oregon's statewide plan also identifies other major systems, including:

```text
Portland / Multnomah County
Washington County WCCCA
Clackamas C800
```

with P25 trunking in the regional systems. ([Oregon][4])

Therefore the radio architecture should be represented as:

```text
OREGON
│
├── Oregon State Radio Project
│   └── P25
│
├── Portland / Multnomah
│   └── P25
│
├── WCCCA
│   └── P25
│
└── C800
    └── P25
```

---

### 26. Broadcastify — Oregon

Current Broadcastify data shows:

### 108 Oregon audio feeds

across:

### 33 counties

with:

### 88 public-safety feeds

([Broadcastify][5])

#### Registry

```text
SOURCE_ID:
    OR-BROADCASTIFY

STATE:
    OR

TOTAL_FEEDS:
    108

PUBLIC_SAFETY:
    88

COUNTIES:
    33

STATUS:
    🟢 VERIFIED
```

This is current enough to use as the statewide public-audio index.

---

### 27. Broadcastify Calls — Oregon State Radio Project

This gets even better.

Broadcastify Calls currently has direct ingest coverage from Oregon State Radio Project simulcasts.

For example, Marion County shows an active:

```text
Oregon State Radio Project
```

ingest node.

The Calls system is actively seeing talkgroups including:

* Marion County Sheriff
* McMinnville Police
* OSP McMinnville
* OSP Banks
* OSP Salem
* OSP Bend
* OSP The Dalles
* OSP Portland
* OSP Albany
* OSP Springfield
* OSP Capitol Mall.

([Broadcastify][6])

#### Registry

```text
SOURCE_ID:
    OR-BROADCASTIFY-CALLS-OSRP

PARENT_SYSTEM:
    Oregon State Radio Project

TYPE:
    RADIO_CALLS_INGEST

STATUS:
    🟢 VERIFIED
```

---

### 28. Portland OSRP ingest

Broadcastify also shows an:

### Oregon State Radio Project — Portland Central Simulcast

Calls ingest node.

([Broadcastify][7])

```text
SOURCE_ID:
    OR-OSRP-PORTLAND-CENTRAL-BROADCASTIFY

TYPE:
    P25_CALLS_INGEST

SYSTEM:
    Oregon State Radio Project

STATUS:
    🟢 VERIFIED
```

---

### 29. The Dalles OSRP ingest

There is also an active:

### Oregon State Radio Project — The Dalles Simulcast

Broadcastify ingest node. ([Broadcastify][8])

```text
SOURCE_ID:
    OR-OSRP-THE-DALLES-BROADCASTIFY

TYPE:
    P25_CALLS_INGEST

STATUS:
    🟢 VERIFIED
```

---

### 30. Oregon State Police radio

The Calls data gives us something more useful than simply knowing OSP has radios.

Individual OSP talkgroups are visibly being observed on the public Calls network.

Examples include:

```text
OSP Portland 1
OSP Portland 2
OSP Salem 1
OSP Salem 2
OSP Albany 1
OSP Bend 1
OSP Bend 2
OSP McMinnville 1
OSP Banks
OSP Springfield 1
OSP The Dalles 1
OSP Capitol Mall
```

([Broadcastify][6])

Therefore:

```text
OR-OSP
    │
    └── OR-OSRP
         │
         └── Broadcastify Calls
```

is a legitimate source relationship.

---

### 31. Wasco County

Wasco County currently has:

### 4 audio feeds

including:

* Columbia Gorge Public Safety — OSRP
* The Dalles Police Dispatch
* Oregon State Police Dispatch
* USFS/BLM/ODF public-safety-related feeds.

([Broadcastify][8])

#### Registry

```text
SOURCE_ID:
    OR-WASCO-BROADCASTIFY

COUNTY:
    Wasco

FEEDS:
    4

STATUS:
    🟢 VERIFIED
```

---

### 32. Multnomah County

Multnomah County currently has Broadcastify Calls coverage through the Portland Central OSRP simulcast.

([Broadcastify][7])

The county's public feed inventory includes Portland-area fire/rescue audio.

#### Registry

```text
SOURCE_ID:
    OR-MULTNOMAH-BROADCASTIFY

TYPE:
    PUBLIC_SAFETY_AUDIO

OSRP_CALLS:
    YES

STATUS:
    🟢 VERIFIED
```

---

### 33. Oregon ALPR

Oregon's ALPR landscape is more complicated than Oklahoma's.

A current OpenStreetMap-derived inventory reports:

### 539 documented ALPR cameras

in Oregon as of August 27, 2026. ([Finding Flock][9])

The source reports:

```text
539 statewide

295 inside indexed cities
244 outside indexed city boundaries
```

Portland has the largest indexed city count at:

### 71

([Finding Flock][9])

#### Important:

This is **not an official state government inventory**.

Therefore:

```text
STATEWIDE ALPR COUNT:
    🟡 COMMUNITY / OSM DERIVED

OFFICIAL STATEWIDE INVENTORY:
    🔴 NOT FOUND

RAW ALPR DATA:
    🔴 NOT PUBLIC
```

---

### 34. ALPR vendors found in Oregon

The current Oregon OpenStreetMap-derived inventory identifies multiple vendors, including:

* Flock Safety
* Verkada
* LiveView Technologies
* Axis Communications
* Motorola Solutions
* Genetec
* Neology
* Rekor
* Leonardo/Elsag.

The Oregon-specific database reports 464 mapped cameras assigned to counties, with Flock accounting for 306 of the mapped cameras. ([Unsurveilled][10])

That makes Oregon's ALPR ecosystem more diverse than a simple Flock-only model.

---

### 35. Eugene Flock

Eugene is particularly important.

Public records and current reporting establish that Eugene previously operated a Flock system.

The current inventory reports:

### 57 Flock cameras

as the documented historical deployment. ([Unsurveilled][11])

However:

### Eugene ended the Flock program in December 2025.

The current Oregon ALPR database records Eugene as:

```text
PROGRAM:
    ENDED

DATE:
    December 5, 2025

CAMERAS:
    57

VENDOR:
    Flock Safety
```

([Unsurveilled][10])

So these cameras must **not** be counted as currently active.

---

### 36. Bend Flock

Bend had:

### 4 Flock cameras

but the city shut them down in January 2026 and chose not to renew the Flock contract.

OPB reported that the Bend City Council voted to turn off the four cameras and seek another vendor. ([opb][12])

#### Registry

```text
SOURCE_ID:
    OR-BEND-FLOCK

CAMERAS:
    4

VENDOR:
    Flock Safety

STATUS:
    🔴 ENDED

ENDED:
    January 2026
```

This is another example where ATLAS must maintain historical deployments separately from active deployments.

---

### 37. Junction City

Junction City considered installing ALPR cameras in 2026.

A June 2026 city council packet records discussions with:

* Flock Safety
* Axon

and a possible deployment of:

```text
2–8 cameras
```

at approximately:

```text
$3,000 per camera/year
```

([Junction City][13])

But in August 2026 the city decided to delay the decision until its next budget cycle. ([opb][14])

Therefore:

```text
OR-JUNCTION-CITY-ALPR

STATUS:
    🔴 NOT DEPLOYED / DECISION DELAYED
```

Do not count these as active cameras.

---

### 38. Portland ALPR

Portland is an active and significant ALPR jurisdiction.

Portland Police Bureau currently has a dedicated:

### Automatic License Plate Reader Use

directive.

The 2026 directive governs:

* ALPR operation
* access
* retention
* sharing
* system use.

([Portland.gov][15])

The directive says ALPR reads can include:

* date/time
* vehicle characteristics
* plate images
* vehicle images
* location.

([Portland.gov][15])

#### Registry

```text
SOURCE_ID:
    OR-PORTLAND-PD-ALPR

AGENCY:
    Portland Police Bureau

TYPE:
    ALPR

STATUS:
    🟢 ACTIVE / POLICY CONFIRMED

RAW_DATA_PUBLIC:
    🔴
```

---

### 39. Oregon ALPR law changed in 2026

This is important enough to store as a legal/provenance event.

Oregon enacted:

### SB 1516

in March 2026.

Current sources report that the law:

* limits retention of ALPR data
* requires deletion of qualifying data within 30 days
* restricts sharing with non-Oregon government entities except for specified case-specific law-enforcement purposes.

([Finding Flock][9])

Portland's revised 2026 directive explicitly references the new state-law requirements and adds restrictions concerning retention and data sharing. ([Portland.gov][16])

#### ATLAS legal registry

```text
LAW:
    Oregon SB 1516

YEAR:
    2026

SUBJECT:
    AUTOMATED LICENSE PLATE RECOGNITION

STATUS:
    🟢 ENACTED

EFFECT:
    DATA RETENTION / SHARING RESTRICTIONS
```

This matters because old Oregon ALPR records describing unrestricted retention should **not** be treated as current policy.

---

### 40. Oregon ALPR data availability

The key distinction:

```text
ALPR CAMERAS:
    🟢 MANY

CAMERA LOCATIONS:
    🟡 SOME PUBLIC / OSM / RECORDS

ALPR POLICIES:
    🟢 PUBLIC

CONTRACTS:
    🟢 OFTEN PUBLIC

AUDITS:
    🟡 PUBLIC-RECORDS ACCESS

RAW PLATE CAPTURE DATABASE:
    🔴 NOT PUBLIC
```

For example, Eugene public-record research has requested Flock audit records from the Eugene Police Department. ([MuckRock][17])

This means ATLAS can ingest **deployment/provenance information**, but should not represent police ALPR databases as public feeds.

---

### 41. Oregon camera source hierarchy

Oregon's transportation architecture is unusually clean:

```text
                         ODOT
                          │
                      TripCheck
                          │
               ┌──────────┼──────────┐
               │          │          │
             API       ArcGIS      Website
               │          │
       ┌───────┼──────┐   │
       │       │      │   │
     CCTV   Incidents RWIS CCTV
       │
       ├── camera metadata
       ├── coordinates
       ├── still image
       └── camera URL
```

This is exactly the architecture we want to discover in every state.

---

### 42. Exact Oregon camera source records

#### Primary API

```text
SOURCE_ID:
    OR-ODOT-TRIPCHECK-API

URL:
    https://apiportal.odot.state.or.us/

TYPE:
    REST API

FORMAT:
    XML / JSON

ACCESS:
    API PORTAL / SUBSCRIPTION

STATUS:
    🟢 VERIFIED
```

ODOT's API portal explicitly lists TripCheck API v1 and WZDx v4. ([Azure API Management][18])

---

#### CCTV ArcGIS

```text
SOURCE_ID:
    OR-ODOT-CCTV-ARCGIS

URL:
    https://gis.odot.state.or.us/arcgis1006/rest/services/trip_check/Trip_Check_Terrain/MapServer/1

LAYER:
    cctvInventory

FORMAT:
    JSON / GeoJSON

GEOMETRY:
    POINT

STATUS:
    🟢 VERIFIED
```

([Oregon Department of Transportation GIS][3])

---

### 43. Why the ArcGIS source is especially valuable

This source can potentially eliminate the need to depend exclusively on the TripCheck API subscription for **camera discovery**.

It already exposes:

```text
device_id
device_name
latitude
longitude
cctv_image
cctv_url
agency
organization
route
node_id
```

([Oregon Department of Transportation GIS][3])

Therefore ATLAS should have a dedicated adapter:

```text
ArcGISFeatureServerAdapter
        ↓
OR-ODOT-CCTV-ARCGIS
        ↓
Camera[]
```

rather than treating the ArcGIS layer merely as a map visualization.

---

### 44. Oregon ATLAS camera object

A likely normalized record would look conceptually like:

```json
{
  "source": "OR-ODOT-CCTV-ARCGIS",
  "sourceRecordId": "device_id",
  "name": "device_name",
  "latitude": "latitude",
  "longitude": "longitude",
  "agency": "agencyName",
  "organization": "organization_name",
  "route": "route_designator",
  "stillImageUrl": "cctv_image",
  "cameraUrl": "cctv_url",
  "nodeId": "node_id"
}
```

No invented values are necessary.

Everything required for that mapping exists in the published schema. ([Oregon Department of Transportation GIS][3])

---

### 45. Oregon source score

| Category                          |              Rating |
| --------------------------------- | ------------------: |
| State traffic cameras             |    🟢 **Excellent** |
| Machine-readable camera inventory |                  🟢 |
| Direct GIS camera layer           |                  🟢 |
| Camera coordinates                |                  🟢 |
| Camera still URLs                 |                  🟢 |
| Camera URLs                       |                  🟢 |
| Live video                        | 🟡 Camera-dependent |
| Traffic incidents                 |                  🟢 |
| Waze-format incidents             |                  🟢 |
| Local incidents                   |                  🟢 |
| DMS                               |                  🟢 |
| RWIS                              |                  🟢 |
| Traffic detectors                 |                  🟢 |
| WZDx                              |                  🟢 |
| Statewide P25 radio               |                  🟢 |
| Public scanner feeds              |          🟢 **108** |
| Broadcastify Calls                |                  🟢 |
| ALPR deployments                  |                  🟢 |
| ALPR location inventory           |                  🟡 |
| Raw ALPR data                     |                  🔴 |
| Statewide official ALPR inventory |                  🔴 |
| ALPR legislation/policy records   |                  🟢 |

### **Overall: 9.6 / 10**

Oregon is **one of the best states discovered so far for MAC EVIL**.

---

### 46. Highest-priority Oregon sources

#### 🥇 1 — ODOT CCTV ArcGIS

[ODOT CCTV Inventory REST Layer](https://gis.odot.state.or.us/arcgis1006/rest/services/trip_check/Trip_Check_Terrain/MapServer/1?utm_source=chatgpt.com)

**This should be directly ingested.**

It gives us actual camera records and image URLs. ([Oregon Department of Transportation GIS][3])

---

#### 🥈 2 — ODOT TripCheck API

[TripCheck API Portal](https://apiportal.odot.state.or.us/?utm_source=chatgpt.com)

This is the official comprehensive transportation API. ([Azure API Management][19])

---

#### 🥉 3 — ODOT WZDx

Official TripCheck WZDx v4.

**30-second refresh.** ([TripCheck][2])

---

#### 4 — ODOT incidents

**30-second refresh.**

---

#### 5 — Oregon State Radio Project

Statewide P25 system operated by ODOT/Oregon State Police. ([Oregon][4])

---

#### 6 — Broadcastify

108 Oregon feeds / 33 counties / 88 public-safety feeds. ([Broadcastify][5])

---

#### 7 — Broadcastify Calls / OSRP

Direct statewide-radio-system observation through public Calls infrastructure. ([Broadcastify][6])

---

#### 8 — Oregon ALPR deployment records

539 currently documented locations, but **not an authoritative government inventory**. ([Finding Flock][9])

---

### 47. Final Oregon classification

```text
╔══════════════════════════════════════════════╗
║              OREGON — ATLAS                  ║
╠══════════════════════════════════════════════╣
║                                              ║
║ ODOT CAMERAS              🟢 EXCELLENT       ║
║ CAMERA API                🟢 VERIFIED        ║
║ CAMERA GIS                🟢 VERIFIED        ║
║ CAMERA IMAGE URLS         🟢 VERIFIED        ║
║ INCIDENTS                 🟢 VERIFIED        ║
║ WAZE CIFS                 🟢 VERIFIED        ║
║ WZDX                      🟢 VERIFIED        ║
║ RWIS                      🟢 VERIFIED        ║
║ TRAFFIC DETECTORS         🟢 VERIFIED        ║
║ DMS                       🟢 VERIFIED        ║
║                                              ║
║ STATE RADIO               🟢 OSRP/P25        ║
║ SCANNER AUDIO             🟢 108 FEEDS       ║
║ CALLS INGEST              🟢 YES             ║
║                                              ║
║ ALPR                      🟢 DEPLOYED        ║
║ ALPR LOCATIONS            🟡 539 DOCUMENTED  ║
║ RAW ALPR DATA             🔴 NOT PUBLIC      ║
║                                              ║
║ OVERALL                   ⭐ 9.6 / 10        ║
╚══════════════════════════════════════════════╝
```

**Oregon is complete.**

**Next alphabetically: Pennsylvania.**

[1]: https://www.oregon.gov/ODOT/Maintenance/Pages/Traveler-Information.aspx?utm_source=chatgpt.com "Oregon Department of Transportation : Traveler Information : Maintenance and Operations : State of Oregon"
[2]: https://tripcheck.com/Pages/API "TripCheck API | TripCheck - Oregon Traveler Information"
[3]: https://gis.odot.state.or.us/arcgis1006/rest/services/trip_check/Trip_Check_Terrain/MapServer/1 "Layer: cctvInventory (ID: 1)"
[4]: https://www.oregon.gov/oem/Documents/Oregon_SCIP.pdf?utm_source=chatgpt.com "Oregon Statewide Communication"
[5]: https://status.broadcastify.com/listen/stid/41?utm_source=chatgpt.com "Oregon Audio Feeds"
[6]: https://status.broadcastify.com/calls/coverage/ctid/?ctid=2228&tagId=3&utm_source=chatgpt.com "Marion County Oregon Calls Coverage"
[7]: https://status.broadcastify.com/listen/ctid/2230?utm_source=chatgpt.com "Multnomah County, Oregon Audio Feeds"
[8]: https://status.broadcastify.com/listen/ctid/2237?utm_source=chatgpt.com "Wasco County, Oregon Audio Feeds"
[9]: https://www.findingflock.com/cameras/oregon?utm_source=chatgpt.com "539 Flock & ALPR Cameras in Oregon · Finding Flock"
[10]: https://unsurveilled.org/atlas/oregon/?utm_source=chatgpt.com "Oregon — known ALPR locations — Unsurveilled"
[11]: https://www.unsurveilled.org/atlas/?utm_source=chatgpt.com "Atlas — known ALPR locations — Unsurveilled"
[12]: https://www.opb.org/article/2026/01/08/bend-flock-cameras-ai-license-plate-camera-law-enforcement/?utm_source=chatgpt.com "Bend is the latest Oregon city to turn off Flock cameras - OPB"
[13]: https://www.junctioncityoregon.gov/vertical/sites/%7BE865F063-52B6-4191-89A3-FB88287BBBED%7D/uploads/06-09-2026_Council_Packet.pdf?utm_source=chatgpt.com "A G E N D A"
[14]: https://www.opb.org/article/2026/08/13/junction-city-delay-flock-cameras/?utm_source=chatgpt.com "Junction City leaders will delay license plate camera decision until next year’s budget - OPB"
[15]: https://www.portland.gov/policies/police-directives/field-operations-0600/062500-automatic-license-plate-reader-use?utm_source=chatgpt.com "0625.00 Automatic License Plate Reader Use | Portland.gov"
[16]: https://www.portland.gov/charter-code-policies/changes/2026/5/062500-automatic-license-plate-reader-use-executive-summary?utm_source=chatgpt.com "0625.00 Automatic License Plate Reader Use - Executive Summary | Portland.gov"
[17]: https://www.muckrock.com/foi/eugene-6582/flock-safety-alpr-audits-2025-eoe-825-191912/?utm_source=chatgpt.com "[EOE-825] Flock Safety ALPR Audits 2025 • MuckRock"
[18]: https://apiportal.odot.state.or.us/apis?utm_source=chatgpt.com "APIs: List - Microsoft Azure API Management - developer portal"
[19]: https://apiportal.odot.state.or.us/product/tripcheck-data-api?utm_source=chatgpt.com "Product: TripCheck Data API - Microsoft Azure API Management - developer portal"
