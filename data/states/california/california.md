---
state: California
usps: CA
slug: california
dossier_number: 5
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
  imported_from: project_atlas_state_data/California.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# California (CA) - ATLAS State Record

> Dossier **5 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

California is a **major source state** for this project. It has one of the strongest combinations we've found so far:

* statewide Caltrans CCTV inventory
* exact ArcGIS REST endpoint
* direct camera media fields in the inventory
* statewide public traffic/incident system
* CHP public CAD/incident information
* enormous public scanner ecosystem
* huge publicly mapped ALPR footprint
* extensive local-government surveillance deployments

The most important discovery is that **California's official CCTV inventory actually contains the direct streaming-video and current-image URLs as fields**. That is considerably better than Arizona's documented API, where we still had to investigate the media layer.

---

### 1. Caltrans statewide CCTV inventory

**Organization:** California Department of Transportation (Caltrans)
**System:** Caltrans CCTV / QuickMap
**Category:** State DOT / CCTV
**Status: 🟢 CONFIRMED**

California's official Open Data portal has a dedicated:

**Closed Circuit Television**

dataset.

The State of California describes it as the files describing the **location and status of each Caltrans CCTV on the State Highway Network**. ([CA Open Data][1])

The dataset is maintained by **Caltrans**, is currently updated, and is licensed under **Creative Commons Attribution**. ([CA Open Data][1])

Current portal metadata shows the dataset updated **August 25, 2026**. ([CA Open Data][1])

---

### 2. Exact Caltrans CCTV ArcGIS REST service

This is the source we want.

#### Exact service

```text
https://caltrans-gis.dot.ca.gov/arcgis/rest/services/CHhighway/CCTV/FeatureServer/0
```

This is the official Caltrans ArcGIS REST **Feature Layer** for CCTV. ([Caltrans GIS][2])

The service identifies itself as:

```text
Name: CCTV
Type: Feature Layer
Geometry: Point
Spatial Reference: EPSG:4326
```

It supports:

```text
JSON
GeoJSON
PBF
```

and supports advanced queries, pagination, statistics, SQL expressions and spatial queries. ([Caltrans GIS][2])

#### This is a first-class ingestion source.

No scraping of the QuickMap map is required to obtain the **inventory**.

---

### 3. Exact camera schema

This is where California becomes exceptionally useful.

The official CCTV layer exposes:

```text
OBJECTID
index
recordDate
recordTime
recordEpoch
district
locationName
nearbyPlace
longitude
latitude
elevation
direction
county
route
routeSuffix
postmilePrefix
postmile
Postmile_Suffix
Odometer
inService
imageDescription
streamingVideoURL
currentImageUpdateFrequency
currentImageURL
```

These fields are explicitly listed by the live Caltrans REST service. ([Caltrans GIS][2])

So our canonical source can directly ingest:

```text
camera_id
name
latitude
longitude
elevation
direction
county
route
postmile
service_status
stream_url
snapshot_url
snapshot_frequency
```

without having to infer any of those properties.

---

### 4. Direct streaming-video URL field

This is one of the biggest findings in California.

The official layer has:

```text
streamingVideoURL
```

as a field in every camera record. ([Caltrans GIS][2])

#### Status

🟢 **CONFIRMED — direct media URL is part of the official inventory schema**

This is substantially stronger than simply finding a camera website.

The source hierarchy is:

```text
Caltrans
   ↓
Official ArcGIS CCTV FeatureServer
   ↓
Camera record
   ↓
streamingVideoURL
```

That means the ingestion engine can potentially discover the actual media endpoint **directly from the official metadata**.

---

### 5. Current-image URL field

The same official CCTV layer contains:

```text
currentImageURL
```

and:

```text
currentImageUpdateFrequency
```

([Caltrans GIS][2])

#### Status

🟢 **CONFIRMED**

This gives us two independent media modalities:

```text
LIVE VIDEO
streamingVideoURL

SNAPSHOT
currentImageURL
```

That is exactly what our canonical `View` model needs.

---

### 6. Caltrans QuickMap

Caltrans' public **QuickMap** is the user-facing system built around the transportation data.

Caltrans describes QuickMap as providing:

* traffic speed
* lane closures
* road closures
* construction/maintenance information
* emergency incidents
* electronic highway message signs
* rest areas
* CCTV camera snapshots
* chain controls

([Caltrans][3])

Official site:

[Caltrans QuickMap](https://quickmap.dot.ca.gov/?utm_source=chatgpt.com)

#### Classification

`CALTRANS → QUICKMAP → TRAVELER INFORMATION`

🟢 **CONFIRMED**

---

### 7. Caltrans statewide CCTV access

Caltrans itself confirms that public access to video generated by the **statewide CCTV network** is available online. ([Caltrans][4])

That matters because the ArcGIS dataset isn't merely a historical GIS inventory.

It corresponds to an actual public-facing live camera network.

#### Classification

**Inventory:** 🟢

**Current images:** 🟢

**Streaming video:** 🟢

---

### 8. Caltrans CCTV license

The California Open Data dataset specifies:

**License: Creative Commons Attribution**

([CA Open Data][1])

This is a very important distinction from Arkansas.

#### Arkansas

Public camera system, but published IDrive terms impose significant third-party reuse restrictions.

#### California

Official **CCTV inventory dataset** is explicitly published under **CC Attribution**.

Therefore:

```text
inventory_reuse:
    permitted with attribution
```

However, we should **not automatically assume the CC license applies to the underlying live video itself**. The dataset license clearly covers the published dataset; live media may have separate terms.

#### Correct classification

```text
metadata:
    CC BY

live_media:
    separate legal review required
```

---

### 9. Caltrans CCTV geographic coverage

The official FeatureServer extent is:

```text
West:
-124.1993600004

South:
32.5513800000

East:
-114.5503059997

North:
41.9965600003
```

with WGS84/EPSG:4326 coordinates. ([Caltrans GIS][2])

That covers the California state-highway CCTV network.

#### Classification

🟢 **STATEWIDE**

---

### 10. Caltrans camera status

The official dataset contains:

```text
inService
```

as a camera attribute. ([Caltrans GIS][2])

This is important.

We should **not** treat every historical GIS record as an active camera.

Our ingestion should map:

```text
inService
    ↓
camera.status
```

and preserve the original raw value.

---

### 11. Caltrans camera direction

The official inventory contains:

```text
direction
```

([Caltrans GIS][2])

This means California provides direction metadata directly from the source.

Do not derive camera orientation from road geometry unless the source field is missing.

---

### 12. Caltrans route/postmile information

The camera layer includes:

```text
route
routeSuffix
postmilePrefix
postmile
Postmile_Suffix
Odometer
```

([Caltrans GIS][2])

This is extremely useful for location normalization.

Instead of storing only:

```text
lat/lon
```

we can preserve:

```text
route
postmile
county
direction
```

which can later support:

* route-based searches
* duplicate detection
* camera clustering
* matching against incident locations

---

### 13. Caltrans camera districts

The dataset contains:

```text
district
```

([Caltrans GIS][2])

So each camera can be associated with its Caltrans district without attempting to calculate the district ourselves.

#### Classification

🟢 **CONFIRMED**

---

### 14. Caltrans CCTV data formats

The official California Open Data dataset provides:

#### CSV

🟢

#### Shapefile

🟢

#### GeoJSON

🟢

#### KML

🟢

#### File Geodatabase

🟢

#### ArcGIS REST

🟢

These are explicitly listed in the California Open Data catalog. ([CA Open Data][1])

For the national ingestion engine, the preferred order should be:

```text
1. ArcGIS REST
2. GeoJSON
3. CSV
4. File Geodatabase
```

because REST gives the freshest queryable representation.

---

### 15. Caltrans CCTV — exact machine-readable source record

This should go into our master database approximately like this:

```text
organization:
    California Department of Transportation

program:
    Caltrans CCTV

source_type:
    ArcGIS FeatureServer

endpoint:
    https://caltrans-gis.dot.ca.gov/arcgis/rest/services/CHhighway/CCTV/FeatureServer/0

coverage:
    California State Highway Network

record_type:
    CCTV camera

coordinates:
    WGS84

media:
    streamingVideoURL
    currentImageURL

status:
    inService

license:
    CC BY

authentication:
    none identified for metadata layer

state:
    California

confidence:
    CONFIRMED
```

---

### 16. CHP public incident/CAD system

California has another unusually valuable source.

The **California Highway Patrol** operates a public:

**CHP Traffic Incident Information Page**

at:

[CHP Traffic Incident Information](https://cad.chp.ca.gov/?utm_source=chatgpt.com)

The live system provides incident information by CHP communications center. ([Cal DOJ Cad Database][5])

The current site exposes:

```text
Communications Centers
Searches
Resources
Number of Incidents
```

and automatically refreshes. ([Cal DOJ Cad Database][5])

#### Classification

`CHP → PUBLIC CAD/TRAFFIC INCIDENT SYSTEM`

🟢 **CONFIRMED**

---

### 17. CHP communications-center structure

The public CHP system allows selection of individual communications centers.

Examples retrieved include:

```text
B.Public
LACC
CHP
```

and other center-specific query parameters. ([Cal DOJ Cad Database][6])

This indicates the underlying system is organized around CHP dispatch/communications centers rather than one simple statewide flat table.

#### Important for ingestion

We should model:

```text
CHP
 └── Communications Center
      └── Incidents
```

rather than treating the entire page as one feed.

---

### 18. CHP CAD data fields

The public-facing page doesn't expose a formal developer schema in the retrieved documentation, so I am **not inventing an API schema**.

However, CHP documentation confirms that its internal CAD incident logs contain incident/log numbers and incident information. ([California Highway Patrol][7])

#### Current classification

```text
public incident information:
    🟢 CONFIRMED

public developer API:
    🟡 NOT YET CONFIRMED

formal machine-readable schema:
    🟡 REQUIRES TECHNICAL EXTRACTION
```

This should be investigated separately rather than guessed.

---

### 19. CHP public collision data

CHP policy explicitly states that public information from CHP collision reports is releasable under the California Public Records Act, subject to the applicable rules and exemptions. ([California Highway Patrol][8])

#### Important distinction

This is **not** a live traffic feed.

It is a public-records pathway for collision information.

Therefore:

```text
CHP live incident:
    public

CHP collision reports:
    public-information pathway

CHP historical collision database:
    separate research target
```

---

### 20. California scanner ecosystem

California is one of the largest scanner states we've encountered.

Current Broadcastify data lists:

**644 total audio feeds**

across:

**59 counties**

including:

**434 public-safety feeds**. ([Broadcastify][9])

The public-safety-only directory currently lists:

**434 feeds across 57 counties**. ([Broadcastify][10])

This is a huge source family.

---

### 21. California public police radio examples

Current public feeds include:

#### LAPD

* LAPD South Bureau
* LAPD Harbor
* LAPD Pacific
* LAPD Valley
* LAPD West
* LAPD Hotshot/K-9/Air Hailing

([Broadcastify][11])

#### Los Angeles County Sheriff

Multiple dispatch channels, including:

* Dispatch 11
* Dispatch 12
* Dispatch 3/8/9/13/14
* Dispatch 7
* Dispatch 9
* Santa Clarita Valley

([Broadcastify][11])

#### CHP

Examples include:

* CHP Alameda County
* CHP Oakland
* CHP Central Division
* CHP Fresno/Merced
* CHP Los Angeles/Orange County
* CHP Santa Clara
* CHP Border Division
* CHP Solano

([Broadcastify][11])

#### Classification

🟢 **PUBLIC RADIO FEEDS**

---

### 22. California fire/EMS radio

The ecosystem isn't just police.

Current public feeds include:

* CAL FIRE
* Los Angeles City Fire
* Los Angeles County Fire
* San Diego Fire
* San Jose Fire
* Orange County Fire Authority
* Riverside County Fire
* Contra Costa Fire
* Santa Barbara Fire
* Ventura Fire
* San Bernardino Fire

and many county/local combinations. ([Broadcastify][10])

This gives us:

```text
PUBLIC SAFETY RADIO
├── Law Enforcement
├── Fire
├── EMS
├── CHP
└── Interoperability
```

---

### 23. California official agency radio feeds

I searched the official-feed directory as a separate category.

The Broadcastify official-feed directory defines official feeds as:

> official broadcasts provided by the host public safety agencies.

([Broadcastify][12])

The current California public feed ecosystem is enormous, but **I am not going to mark every California Broadcastify feed as "official."**

That distinction matters.

#### California feed classifications

```text
OFFICIAL AGENCY FEED
    ↓
agency explicitly provides/authorizes feed

PUBLIC THIRD-PARTY FEED
    ↓
scanner operator provides feed

BOTH ARE PUBLIC
BUT THEY ARE NOT THE SAME SOURCE CLASS
```

For California, the majority of feeds encountered in the statewide directory should therefore initially be classified:

**🟢 Public third-party feed**

until an official-feed designation is confirmed.

---

### 24. California ALPR — statewide mapped locations

California is enormous in the ALPR category.

Current OpenStreetMap-derived datasets report approximately:

* **19,350** cameras
* **20,586** cameras
* **20,327** cameras
* **19,161** cameras

depending on dataset and extraction date. ([Flock Camera Locations][13])

These are **not official state counts**.

They are community-mapped locations.

#### Correct conclusion

> California has **at least ~19,000–20,000 community-documented ALPR/surveillance locations**, with the exact number varying by OSM-derived dataset and refresh date.

---

### 25. California ALPR — OpenStreetMap

The underlying source is particularly clean.

FlockScanner documents that every record originates from **OpenStreetMap**, with cameras represented using:

```text
man_made=surveillance
surveillance:type=ALPR
```

and optionally:

```text
manufacturer
direction
```

([Flock Scanner][14])

The data is licensed:

**ODbL — Open Database License**

and the dataset can be reused with attribution. ([Flock Scanner][14])

#### Classification

🟢 **CONFIRMED PUBLIC ALPR LOCATION SOURCE**

---

### 26. California ALPR vendor distribution

One current OSM-derived California dataset reports:

| Vendor             | Mapped cameras |
| ------------------ | -------------: |
| Flock Safety       |         14,139 |
| Motorola Solutions |          1,636 |
| Genetec            |             78 |
| Neology            |             60 |
| Leonardo/ELSAG     |             19 |
| Other              |          1,031 |
| Unknown            |            847 |

([Finding Flock][15])

Another current dataset identifies additional vendors including:

* Ubicquia
* Axis
* Rekor
* Bosch
* Costar
* Axon
* Uniview
* Verkada
* Avigilon
* LiveView Technologies

([Unsurveilled][16])

#### Important

These are **OSM-attributed hardware observations**, not vendor market-share statistics.

---

### 27. California ALPR operators

Current community-derived data identifies actual operators.

Examples include:

* San Diego Police Department
* California Highway Patrol
* San Francisco Police Department
* Irvine Police Department
* Salinas Police Department
* Sacramento Police Department
* Los Angeles-area municipal agencies
* commercial operators
* HOAs

([Flock Camera][17])

This is valuable because the source model should distinguish:

```text
manufacturer
operator
owner
jurisdiction
```

rather than assuming they are the same.

---

### 28. California Highway Patrol ALPR

Current OSM-derived data attributes approximately:

**403 documented ALPR cameras**

to the **California Highway Patrol** in one current dataset. ([Flock Camera][17])

#### Important qualification

This is:

```text
community-mapped CHP-associated cameras
```

not:

```text
official CHP ALPR inventory
```

Therefore:

🟢 documented public location evidence

🔴 official statewide CHP ALPR inventory not established

---

### 29. San Diego ALPR

San Diego is one of California's largest documented ALPR concentrations.

Current datasets report roughly:

* 569
* 664
* 719
* 731

depending on the source and date. ([Flock Camera Locations][13])

One current dataset identifies **591 cameras** associated with the San Diego Police Department. ([Flock Camera][17])

#### Public plate-read feed

🔴 **NOT FOUND**

#### Public camera location data

🟢 **CONFIRMED**

---

### 30. San Francisco ALPR

Current community datasets identify approximately:

**~460–1,043**

depending on geographic definition and source.

For example:

* one dataset: 464
* another: 480
* another: 1,043 within 10 miles of downtown

([Flock Camera][17])

That last number is explicitly a **10-mile radius**, so it should not be confused with a municipal inventory.

#### SFPD-associated cameras

One dataset attributes:

**325 cameras**

to San Francisco Police Department. ([Flock Camera][17])

Again:

**community-mapped operator attribution**, not an official SFPD count.

---

### 31. San Jose ALPR

Current datasets identify roughly:

**500–570 mapped cameras**

depending on the data source. ([Flock Scanner][18])

One current dataset reports:

**568**

for San Jose. ([Finding Flock][15])

#### Public read API

🔴 **NOT FOUND**

#### Public location layer

🟢 **CONFIRMED**

---

### 32. Sacramento ALPR

Current mapping identifies approximately:

**224–426 cameras**

depending on geographic radius/dataset. ([Flock Camera][17])

The Sacramento Police Department is identified as an operator for approximately:

**96 cameras**

in one current dataset. ([Flock Camera Locations][19])

Again, that is a community-documented floor.

---

### 33. Los Angeles ALPR

Los Angeles is another major concentration.

Current sources report:

* 417 within one city definition
* 894 in another city extraction
* 912 within 10 miles of downtown

([Flock Camera][17])

One current map reports Beverly Hills as the top recorded operator in the Los Angeles area with **78 cameras**. ([Flock Camera Locations][20])

#### Important current development

A current OSM-derived decision tracker reports:

**Los Angeles Police Department declined to renew its Flock Safety contract in July 2026.** ([Finding Flock][15])

That does **not** mean every mapped LA-area Flock camera disappeared.

This is another reason the national database needs:

```text
deployment_date
decision_date
last_verified
active_status
source_timestamp
```

rather than simply storing a camera as permanently active.

---

### 34. California ALPR law

California has specific ALPR legislation.

Current statutory summaries identify:

**Civil Code §§ 1798.90.5–1798.90.55**

as governing ALPR systems. ([Finding Flock][15])

Current summaries state that ALPR operators must maintain usage/privacy policies and log queries, while public agencies face restrictions concerning sharing with non-public agencies. ([Finding Flock][15])

#### Important

This is a legal constraint, not a data source.

It should be stored separately under:

```text
STATE
└── LEGAL
    └── ALPR
```

---

### 35. California ALPR plate-read data

This is the major negative finding.

I did **not** find a statewide public API exposing:

```text
plate
timestamp
camera
latitude
longitude
vehicle_make
vehicle_model
vehicle_color
```

for California ALPR systems.

#### Status

🔴 **STATEWIDE PUBLIC ALPR READ API — NOT FOUND**

#### Public location layer

🟢 **YES**

#### Public individual agency read datasets

🟡 **Potentially obtainable through agency-specific transparency/open-data channels, but no statewide live feed confirmed in this pass**

---

### 36. California city surveillance datasets

California's size means we should not stop at the state layer.

Individual cities and counties can publish their own:

* CCTV inventories
* ALPR inventories
* surveillance ordinances
* contracts
* camera maps
* open-data datasets

The statewide Caltrans source should therefore be treated as **Layer 1**, with local government systems becoming **Layer 2**.

---

### 37. California CHP vs Caltrans data architecture

This state gives us a very clean transportation architecture:

```text
CALIFORNIA
│
├── CALTRANS
│   ├── CCTV
│   ├── Traffic
│   ├── Closures
│   ├── Construction
│   ├── DMS
│   └── QuickMap
│
└── CHP
    ├── CAD / Incident Information
    ├── Traffic incidents
    ├── Collision information
    └── Public radio ecosystem
```

The two agencies should **not** be merged into one source.

---

### 38. California scanner architecture

The radio side is similarly large:

```text
CALIFORNIA
│
├── CHP
│
├── COUNTY SHERIFFS
│
├── MUNICIPAL POLICE
│
├── FIRE
│
├── CAL FIRE
│
├── EMS
│
├── SPECIAL DISTRICTS
│
└── THIRD-PARTY RADIO FEEDS
       ↓
   Broadcastify
```

Current Broadcastify indexing alone exposes **434 public-safety feeds** in California. ([Broadcastify][10])

---

### 39. California source master inventory

|  # | Source                           | Category          | Exact source          | Access                | Status |
| -: | -------------------------------- | ----------------- | --------------------- | --------------------- | ------ |
|  1 | Caltrans CCTV inventory          | CCTV              | ArcGIS FeatureServer  | Public                | 🟢     |
|  2 | Caltrans CCTV GeoJSON            | CCTV              | Official CA Open Data | Public                | 🟢     |
|  3 | Caltrans CCTV CSV                | CCTV              | Official CA Open Data | Public                | 🟢     |
|  4 | Caltrans CCTV KML                | CCTV              | Official CA Open Data | Public                | 🟢     |
|  5 | Caltrans CCTV FGDB               | CCTV              | Official CA Open Data | Public                | 🟢     |
|  6 | `streamingVideoURL`              | Live video        | CCTV layer field      | Public metadata       | 🟢     |
|  7 | `currentImageURL`                | Snapshot          | CCTV layer field      | Public metadata       | 🟢     |
|  8 | `currentImageUpdateFrequency`    | Snapshot metadata | CCTV layer            | Public                | 🟢     |
|  9 | Caltrans QuickMap                | Traffic           | QuickMap              | Public                | 🟢     |
| 10 | CHP Traffic Incident Information | CAD/incident      | cad.chp.ca.gov        | Public                | 🟢     |
| 11 | CHP communications centers       | CAD               | CHP public system     | Public                | 🟢     |
| 12 | CHP collision information        | Records           | CHP                   | Public-record pathway | 🟢     |
| 13 | California scanner ecosystem     | Radio             | Broadcastify          | Public                | 🟢     |
| 14 | CHP scanner feeds                | Radio             | Broadcastify          | Public                | 🟢     |
| 15 | LAPD feeds                       | Police radio      | Broadcastify          | Public                | 🟢     |
| 16 | LASD feeds                       | Sheriff radio     | Broadcastify          | Public                | 🟢     |
| 17 | CAL FIRE feeds                   | Fire radio        | Broadcastify          | Public                | 🟢     |
| 18 | County fire/EMS feeds            | Fire/EMS          | Broadcastify          | Public                | 🟢     |
| 19 | OSM California ALPR              | ALPR location     | OpenStreetMap         | ODbL                  | 🟢     |
| 20 | San Diego ALPR                   | ALPR location     | OSM-derived           | Public                | 🟢     |
| 21 | San Jose ALPR                    | ALPR location     | OSM-derived           | Public                | 🟢     |
| 22 | San Francisco ALPR               | ALPR location     | OSM-derived           | Public                | 🟢     |
| 23 | Los Angeles ALPR                 | ALPR location     | OSM-derived           | Public                | 🟢     |
| 24 | Sacramento ALPR                  | ALPR location     | OSM-derived           | Public                | 🟢     |
| 25 | CHP-associated ALPR              | ALPR location     | OSM-derived           | Public                | 🟢     |
| 26 | California statewide ALPR reads  | ALPR data         | —                     | —                     | 🔴     |
| 27 | California statewide ALPR API    | ALPR API          | —                     | —                     | 🔴     |
| 28 | Statewide CAD API                | CAD               | —                     | —                     | 🟡     |
| 29 | CHP public incident system       | CAD               | Public web system     | Public                | 🟢     |

---

### 40. Highest-value California sources

#### 🥇 Caltrans CCTV FeatureServer

This is currently one of the **best exact public camera sources we've found in any state**.

```text
https://caltrans-gis.dot.ca.gov/arcgis/rest/services/CHhighway/CCTV/FeatureServer/0
```

It provides camera metadata **and explicitly exposes both the streaming-video URL and current-image URL fields**. ([Caltrans GIS][2])

This is exactly the type of source the national ingestion engine should prioritize.

---

#### 🥈 California Open Data CCTV dataset

The official state data portal provides:

* CSV
* GeoJSON
* KML
* Shapefile
* File Geodatabase
* ArcGIS REST

and explicitly describes the data as the location/status of each Caltrans CCTV. ([CA Open Data][1])

**License: CC BY.** ([CA Open Data][1])

---

#### 🥉 CHP public CAD/traffic incidents

California has an actual public-facing CHP incident system rather than requiring users to rely exclusively on third-party scanner feeds. ([Cal DOJ Cad Database][5])

That is a **very important source** for the eventual events layer.

---

### 4. California radio

With approximately **434 public-safety feeds**, California is one of the largest scanner-source states we've found. ([Broadcastify][10])

---

### 5. California ALPR

California has the largest documented ALPR footprint found so far.

Current OSM-derived sources put it around:

**~19,000–20,500+ mapped cameras**

depending on extraction methodology/date. ([Flock Camera Locations][13])

But again:

> **That is not an official statewide ALPR inventory.**

---

### 41. Critical California findings for the master project

There are **three different kinds of "public" source here**, and we need to preserve that distinction.

#### A. Official open data

Example:

```text
Caltrans CCTV inventory
```

**CC BY**

🟢 Excellent ingestion candidate.

#### B. Official public live system

Example:

```text
CHP CAD
```

🟢 Publicly accessible.

But the machine-readable interface needs additional technical extraction before we claim an API.

#### C. Community-derived public data

Example:

```text
OpenStreetMap ALPR
```

🟢 Public and reusable under ODbL.

But it is **not an official government inventory**.

---

### 42. California — final classification

#### Public traffic cameras

**🟢 EXCELLENT**

Official statewide Caltrans inventory with direct media fields.

#### Live camera streams

**🟢 CONFIRMED**

`streamingVideoURL`

#### Current snapshots

**🟢 CONFIRMED**

`currentImageURL`

#### Camera coordinates

**🟢 CONFIRMED**

#### Camera direction

**🟢 CONFIRMED**

#### Camera operational status

**🟢 CONFIRMED**

#### Traffic incidents

**🟢 CONFIRMED**

#### Public CAD-style information

**🟢 CONFIRMED**

#### Public police/fire/EMS radio

**🟢 EXCELLENT**

#### ALPR locations

**🟢 EXCELLENT**

#### Public ALPR plate reads

**🔴 NOT FOUND**

#### Statewide ALPR API

**🔴 NOT FOUND**

#### Statewide public CAD API

**🟡 PUBLIC SYSTEM CONFIRMED — API/underlying machine interface requires further extraction**

---

#### California is complete for the state-by-state pass.

**Next state: COLORADO.**

[1]: https://sandbox.data.ca.gov/dataset/closed-circuit-television "Closed Circuit Television | CA Open Data"
[2]: https://caltrans-gis.dot.ca.gov/arcgis/rest/services/CHhighway/CCTV/FeatureServer/0 "Layer: CCTV (ID: 0)"
[3]: https://dot.ca.gov/programs/public-affairs/mile-marker/2023-03/quick-map?utm_source=chatgpt.com "Mile Marker 2023, Issue 3 - QuickMap | Caltrans"
[4]: https://dot.ca.gov/caltrans-near-me/district-7/district-7-projects/d7-vincent-thomas-bridge-deck-replacement-faq?utm_source=chatgpt.com "Vincent Thomas Bridge Frequently Asked Questions | Caltrans"
[5]: https://cad.chp.ca.gov/?utm_source=chatgpt.com "CHP Traffic"
[6]: https://cad.chp.ca.gov/traffic.aspx?ddlComCenter=B.Public&utm_source=chatgpt.com "CHP Traffic"
[7]: https://www.chp.ca.gov/siteassets/policy/hpm/hpm-60.1/hpm-60.1-ch-4.pdf?utm_source=chatgpt.com "HP Manual template"
[8]: https://www.chp.ca.gov/siteassets/policy/go/go-110.2-release-of-collission-information.pdf?utm_source=chatgpt.com "CALIFORNIA HIGHWAY PATROL"
[9]: https://status.broadcastify.com/listen/stid/6?utm_source=chatgpt.com "California Audio Feeds"
[10]: https://status.broadcastify.com/listen/stid/6/publicsafety?utm_source=chatgpt.com "California Audio Feeds"
[11]: https://status.broadcastify.com/listen/?stid=6&utm_source=chatgpt.com "California Live Audio Feeds"
[12]: https://status.broadcastify.com/listen/official/?utm_source=chatgpt.com "Official Feeds"
[13]: https://flockcameralocations.com/locations/california?utm_source=chatgpt.com "Flock Camera Locations in California — Live CA ALPR Map | Flock Camera Locations"
[14]: https://flockscanner.com/flock-camera-database/?utm_source=chatgpt.com "Flock Camera Database & Data Source · FlockScanner"
[15]: https://www.findingflock.com/cameras/california?utm_source=chatgpt.com "20,327 Flock & ALPR Cameras in California · Finding Flock"
[16]: https://www.unsurveilled.org/atlas/california/?utm_source=chatgpt.com "California — known ALPR locations — Unsurveilled"
[17]: https://flockcamera.app/locations/california/?utm_source=chatgpt.com "Flock Cameras in California — 19,161 ALPR Locations Mapped"
[18]: https://flockscanner.com/flock-camera-map/ca/?utm_source=chatgpt.com "Flock Camera Map: California · FlockScanner"
[19]: https://flockcameralocations.com/locations/california/sacramento?utm_source=chatgpt.com "Flock Camera Locations in Sacramento, CA — Live Map | Flock Camera Locations"
[20]: https://flockcameralocations.com/locations/california/los-angeles?utm_source=chatgpt.com "Flock Camera Locations in Los Angeles, CA — Live Map | Flock Camera Locations"
