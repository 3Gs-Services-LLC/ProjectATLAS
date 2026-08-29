---
state: Florida
usps: FL
slug: florida
dossier_number: 9
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
  imported_from: project_atlas_state_data/Florida.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Florida (FL) - ATLAS State Record

> Dossier **9 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Florida is one of the **highest-value states we've found so far**. It has a large statewide traffic-camera system, a directly queryable camera dataset, live FHP CAD/incident data with coordinates, extensive public radio coverage, and an unusually well-documented ALPR permitting framework.

The important distinction is that Florida's **traffic-camera inventory is machine-readable**, while its **ALPR information is mostly a discovery/records problem rather than a public live-data feed**.

---

### 1. FL511 statewide traffic-camera system

**Organization:** Florida Department of Transportation (FDOT)
**Public system:** FL511
**Category:** CCTV / traffic cameras
**Status: 🟢 CONFIRMED**

[Official FL511](https://www.fl511.com/?utm_source=chatgpt.com)

FL511 is Florida's official real-time traffic information system and publicly provides:

* traffic cameras
* traffic speeds
* incidents
* congestion
* construction
* closures
* weather
* message signs
* truck parking
* travel times

FDOT's FL511 documentation specifically identifies real-time traffic-camera views as a service of the Florida Department of Transportation. ([FL511][1])

---

### 2. Exact statewide camera FeatureServer

This is the major Florida discovery.

There is a live ArcGIS REST service:

```text
FL511_Traffic_Cameras
```

with the service description:

```text
Traffic Cameras from FL 511
```

It exposes a FeatureServer and supports queries. ([ArcGIS Services][2])

#### Exact service

[FL511 Traffic Cameras — ArcGIS REST Service](https://services.arcgis.com/3wFbqsFPLeKqOlIK/ArcGIS/rest/services/FL511_Traffic_Cameras/FeatureServer?utm_source=chatgpt.com)

The service reports:

```text
Service:
    FL511_Traffic_Cameras

Layer:
    FL511 - Traffic Cameras

Geometry:
    Point

Spatial reference:
    EPSG:4326

Maximum record count:
    2000

Output:
    JSON

Query:
    Supported
```

([ArcGIS Services][2])

---

### 3. Exact camera layer

The actual layer is:

```text
FL511 - Traffic Cameras
```

Layer ID:

```text
0
```

It is an `esriGeometryPoint` Feature Layer. ([ArcGIS Services][3])

#### Query endpoint

```text
https://services.arcgis.com/3wFbqsFPLeKqOlIK/ArcGIS/rest/services/FL511_Traffic_Cameras/FeatureServer/0/query
```

([ArcGIS Services][4])

This is exactly the kind of source the national ingestion engine should prefer.

---

### 4. Florida camera fields

The camera layer exposes these fields:

```text
OBJECTID_1
ID
DESCRIPT
COUNTY
HIGHWAY
DIRECTION
LATITUDE
LONGITUDE
TIMESTAMP
IMAGE
```

([ArcGIS Services][3])

That is an exceptionally useful schema.

We can directly normalize:

```text
ID
    → source_camera_id

DESCRIPT
    → description

COUNTY
    → county

HIGHWAY
    → roadway

DIRECTION
    → direction

LATITUDE
    → latitude

LONGITUDE
    → longitude

TIMESTAMP
    → observation_timestamp

IMAGE
    → image_url
```

No coordinate conversion is necessary.

---

### 5. Florida camera media URLs

The `IMAGE` field is explicitly part of the public camera-layer schema. ([ArcGIS Services][3])

That means the source contains an actual media reference rather than merely a map point.

#### Status

🟢 **PUBLIC IMAGE URL FIELD**

This is important because it lets the ingestion system distinguish:

```text
camera inventory
```

from:

```text
camera media endpoint
```

---

### 6. Camera timestamps

The camera layer contains:

```text
TIMESTAMP
```

as a string field. ([ArcGIS Services][3])

Therefore the database should preserve:

```text
source_timestamp
```

rather than treating every image request as a newly captured observation.

---

### 7. Florida has more than 2,000 FDOT cameras

FL511's own current personalized-services page says users can save:

> more than 2,000 FDOT traffic cameras

to their FL511 account. ([FL511][5])

#### Classification

```text
FDOT traffic cameras:
    >2,000

Exact current count:
    obtain from FeatureServer

Official:
    🟢
```

Do **not** hard-code "2,000" into the national database.

The ArcGIS dataset is the better source for the actual current count.

---

### 8. Camera service update state

The current FeatureServer reports:

```text
Last Edit Date:
July 20, 2026

Schema Last Edit:
July 20, 2026

Data Last Edit:
July 20, 2026
```

([ArcGIS Services][3])

That is excellent provenance information.

#### Recommended source record

```text
last_schema_update
last_data_update
```

should both be retained when the ArcGIS metadata provides them.

---

### 9. FL511 says cameras are not recorded/stored

The public camera page explicitly states:

> Video and images are neither stored nor recorded.

([FL511][6])

That is important for classification.

The public system should therefore be treated as:

```text
LIVE_PUBLIC_CAMERA
```

rather than:

```text
PUBLIC_ARCHIVE
```

---

### 10. FL511 historical API

Florida has also had a formal **FL511 Third Party API**.

A federal transportation report documents the architecture of the FL511 third-party API and identifies categories including:

```text
Events
Floodgates
Message Boards
Travel Time Links
Travel Times
Cameras
```

The camera category provided web addresses for highway-camera pictures. ([DOT ROSA P][7])

Historically, this API required credentials.

#### Important current distinction

Do **not** assume the historical third-party API is still freely available.

Current evidence is much stronger for the public ArcGIS camera layer.

Therefore:

```text
historical FL511 API:
    🟡 documented

current unrestricted API:
    🟡 not established

current public ArcGIS camera feed:
    🟢 confirmed
```

---

### 11. FL511 camera backend endpoint

The current FL511 web application exposes a camera-list endpoint used by the public site.

The endpoint observed in current source code is:

```text
https://fl511.com/List/GetData/Cameras
```

with a DataTables-style query containing fields including:

```text
sortId
region
county
roadway
description2
```

and the returned objects contain:

```text
longitude
latitude
videoUrl
description2
```

([Greasy Fork][8])

#### Status

🟢 **PUBLIC APPLICATION DATA ENDPOINT**

This is potentially even more valuable than the ArcGIS layer because it exposes a `videoUrl`.

---

### 12. Florida camera ingestion hierarchy

For the project I would rank the Florida camera sources:

#### Tier 1

```text
FL511 / FDOT camera FeatureServer
```

#### Tier 1A

```text
FL511 / List/GetData/Cameras
```

#### Tier 1B

```text
FL511 camera IMAGE / videoUrl
```

#### Tier 2

```text
FL511 public camera webpage
```

#### Tier 3

```text
historical FL511 Third Party API documentation
```

---

### 13. Florida traffic incidents — FHP CAD

This is another **major discovery**.

The Florida Highway Patrol operates a public live incident system:

**Florida Highway Patrol's Live Traffic Crash and Road Condition Report.**

[Florida Highway Patrol Live Traffic Crash & Road Condition Report](https://trafficincidents.flhsmv.gov/SmartWebClient/CadView.aspx?utm_source=chatgpt.com)

The public page exposes:

```text
Incident Type
Received
Dispatched
Arrived
County
Location
Remarks
Latitude
Longitude
```

([Traffic Incidents][9])

---

### 14. FHP CAD contains exact coordinates

Current records contain latitude/longitude.

For example, live records include coordinates such as:

```text
30.1848601800615
-85.7770850249451
```

for a Bay County crash.

Other records expose coordinates for:

* Holmes
* Osceola
* Clay
* Miami-Dade
* Pinellas
* Duval
* Manatee
* Hillsborough
* Palm Beach
* Pasco
* Santa Rosa

etc. ([Traffic Incidents][9])

#### Status

🟢 **PUBLIC LIVE CAD/INCIDENT DATA WITH GEOMETRY**

This is an extremely valuable national source.

---

### 15. FHP incident types

The live feed contains multiple incident categories, including:

```text
Vehicle Crash
Vehicle Crash w/roadblock
Vehicle Crash w/injuries
Hit and Run Crash
Disabled Vehicle in Roadway
Roadway Debris/Object
```

([Traffic Incidents][9])

The national schema should therefore retain the original:

```text
incident_type_raw
```

and separately normalize it.

---

### 16. FHP CAD timestamps

The records expose:

```text
Received
Dispatched
Arrived
```

This is much better than an incident source that only supplies "last updated."

Example:

```text
Received:
08/28/2026 04:38:54

Dispatched:
08/28/2026 04:38:36

Arrived:
...
```

([Traffic Incidents][10])

#### Canonical fields

```text
received_at
dispatched_at
arrived_at
```

---

### 17. FHP CAD is statewide

The public report is not merely a single county feed.

The current live page contains records from numerous Florida counties. ([Traffic Incidents][9])

#### Status

🟢 **STATEWIDE PUBLIC INCIDENT SOURCE**

---

### 18. FL511 traffic events

FL511 itself also provides:

* incidents
* crashes
* construction
* closures
* congestion
* weather-related alerts
* disabled vehicles

The official FL511 documentation describes these as part of the statewide traffic-information service. ([FL511 Newsroom][11])

Therefore Florida has **two useful event layers**:

```text
FDOT / FL511
    ↓
transportation events

FHP / FLHSMV CAD
    ↓
law-enforcement / crash / roadway-condition incidents
```

These should **not** be merged into a single source.

---

### 19. Florida message signs

FL511 provides a list of:

**Dynamic Message Signs**

with locations and current messages. ([FL511 Newsroom][11])

The mobile application also explicitly supports message signs. ([FL511][1])

#### Status

🟢 **CONFIRMED**

---

### 20. Florida traffic speeds

FL511 provides traffic speeds along major roadways and selected arterials. ([FL511 Newsroom][11])

#### Status

🟢

---

### 21. Florida travel times

FL511 provides travel-time information, and historical FL511 API documentation identifies:

```text
Travel Time Links
Travel Times
```

as API data categories. ([DOT ROSA P][7])

#### Status

🟢 public consumer data
🟡 exact current machine-readable endpoint needs separate reverse-engineering

---

### 22. Florida weather/road conditions

FL511 exposes:

* weather events
* road weather alerts
* weather radar
* weather forecasts

as part of its public traffic-information system. ([FL511 Newsroom][12])

#### Status

🟢

---

### 23. Florida Waze data

The current FL511 interface states:

> Some data contributed by Waze.

([FL511][6])

The same notice appears on the current traffic-camera interface and other FL511 pages. ([FL511][1])

#### Status

🟢 **CONFIRMED DATA PARTNERSHIP/CONTRIBUTION**

But:

```text
public Waze raw feed:
    🔴 not established

FL511 displaying Waze-derived data:
    🟢
```

---

### 24. Florida ALPR — official FDOT permitting system

Florida has an unusually important official ALPR source.

FDOT explicitly maintains a **License Plate Reader** program.

FDOT states that it may approve installation of an automated license plate recognition system within the right-of-way of roads on the State Highway System at the request of a law-enforcement agency. ([FDOT][13])

#### Status

🟢 **OFFICIAL STATE ALPR PERMIT FRAMEWORK**

---

### 25. Exact legal/permit mechanism

Every applicable LPR installation on the State Highway System must be authorized through a:

```text
General Use Permit
```

under:

```text
Rule 14-20.010
Florida Administrative Code
```

([FDOT][13])

This gives us an important potential discovery source:

```text
FDOT permitting system
        ↓
LPR installation request
        ↓
location
        ↓
requesting agency
        ↓
permit
```

---

### 26. Florida ALPR permit applicant

FDOT says the permit applicant must be a:

**Law Enforcement Agency**

as defined by Florida statute. ([FDOT][13])

Therefore the likely canonical relationship is:

```text
ALPR
  ↓
installation permit
  ↓
law-enforcement agency
  ↓
roadway/right-of-way
```

---

### 27. Florida ALPR permit duration

FDOT states that approved LPR General Use Permits are valid for:

**5 years**

and may be renewed for another five-year term. ([FDOT][13])

That gives the source database a valuable temporal model:

```text
installed_at
permit_start
permit_expiration
renewal
removed_at
```

where the actual dates are available.

---

### 28. Florida ALPR removal records

FDOT's rules state that an LPR must be removed within 30 days after FDOT notifies the agency that removal is required. ([FDOT][13])

That means a permit record could potentially tell us not only that an ALPR existed, but that its authorization ended.

---

### 29. Florida ALPR exact current permit dataset

I did **not** find a publicly indexed statewide downloadable dataset containing every current LPR permit and coordinates.

Therefore:

```text
official statewide ALPR inventory:
    🟡 likely exists through permitting records

public machine-readable statewide ALPR inventory:
    🔴 NOT CONFIRMED

public ALPR permit application system:
    🟢 confirmed

public individual permit records:
    🟡 requires targeted permit-system research
```

This is a major follow-up target.

---

### 30. Florida ALPR vendors

FDOT's traffic-services material contains approved equipment/vendor records associated with automated traffic enforcement equipment.

The current page lists vendors including:

* Altumint
* Verra Mobility
* Brekford
* Conduent
* Fiscal Tech America
* Gatso
* RedSpeed
* NovoaGlobal / Sensys
* JENOPTIK

([FDOT][13])

**Important:** these records are specifically associated with FDOT traffic-infraction/automated-enforcement equipment and should **not automatically be interpreted as statewide ALPR deployments**.

That distinction matters.

---

### 31. Florida speed-detection cameras

Florida separately regulates:

**School Zone Speed Detection Systems (SDS).**

FDOT says these require a General Use Permit when installed on the State Highway System. ([FDOT][13])

#### Status

🟢 **CONFIRMED**

This belongs in its own category:

```text
SPEED_DETECTION
```

not:

```text
ALPR
```

---

### 32. Florida red-light/traffic-infraction cameras

FDOT maintains a separate:

**Traffic Infraction Detectors (RLRC)**

program. ([FDOT][14])

The FDOT page contains installation specifications and equipment/vendor records. ([FDOT][13])

#### Status

🟢 **CONFIRMED**

---

### 33. Florida historical ALPR deployments

Florida has documented ALPR deployments going back many years.

FDOT documentation describes license-plate-reader technology at motor-carrier inspection/weigh-station facilities and its ability to automatically record plates and compare them against enforcement databases. ([FDOT][15])

Another FDOT project documented LPR systems in Tallahassee being used for travel-time measurement. ([FDOT][16])

These are historical sources, but they establish that Florida has multiple ALPR use cases:

```text
law enforcement
commercial vehicle enforcement
travel-time measurement
traffic management
```

---

### 34. Florida ALPR statewide screening capability

An FDOT CVISN architecture document describes a planned/expanded LPR system capable of reading very large numbers of commercial-vehicle plates and comparing them with various databases. ([FDOT][17])

This is **not evidence of a public plate-read feed**.

It is evidence of the scale and architecture of Florida's historical/state transportation ALPR capabilities.

---

### 35. Public ALPR coordinates

No official statewide public coordinate database was located in this pass.

However, current OpenStreetMap-derived datasets provide a large community-mapped Florida ALPR inventory.

One current dataset reports:

```text
9,437 documented Florida ALPR/Flock cameras
```

as of August 26, 2026. ([Finding Flock][18])

Another OSM-derived source reports:

```text
8,994
```

as of August 15, 2026. ([Flock Camera Locations][19])

#### Do NOT treat these as contradictory official counts.

They are:

```text
community observations
+
different snapshots
+
different processing/classification
```

---

### 36. Florida ALPR OSM source

The OSM-derived dataset is especially useful because it identifies:

```text
physical camera location
vendor
operator
```

when contributors have recorded those attributes.

One current dataset reports manufacturer categories including:

```text
Flock Safety
Motorola Solutions
Genetec
Leonardo/ELSAG
Neology
Other
Unknown
```

([Finding Flock][18])

#### Status

🟢 **OPEN GEODATA / DISCOVERY SOURCE**

but:

🟡 **NOT GOVERNMENT-AUTHORITATIVE**

---

### 37. Florida Flock footprint

A current OSM-derived Florida dataset reports Flock as the largest manufacturer among the mapped city cameras, with thousands of Flock-tagged records. ([Finding Flock][18])

Another community database reports Flock locations across dozens of Florida municipalities. ([Flock Locations][20])

This confirms that Florida's ALPR ecosystem is not limited to one agency.

---

### 38. Florida ALPR public read API

I found:

```text
No public statewide live ALPR read API
```

such as:

```text
plate
timestamp
camera_id
latitude
longitude
vehicle attributes
```

#### Classification

🔴 **NOT FOUND**

This is important.

We record the absence rather than inventing an endpoint.

---

### 39. Florida police/fire/EMS radio

Florida has **very large public radio coverage**.

Current Broadcastify state data reports:

```text
132 audio feeds
47 counties
```

across the broader Florida audio directory. ([Broadcastify][21])

The public-safety subset reports:

```text
79 audio feeds
36 counties
```

in its current public-safety listing. ([Broadcastify][22])

The discrepancy is because the broader directory includes additional categories such as amateur, rail, aviation and marine.

---

### 40. Florida radio — county coverage

Current public-safety feeds include coverage in counties such as:

* Miami-Dade
* Broward
* Hillsborough
* Pinellas
* Orange
* Osceola
* Seminole
* Sarasota
* Manatee
* Polk
* Duval
* Bay
* Charlotte
* Collier
* Palm Beach
* Volusia
* Brevard
* Leon
* Escambia
* Indian River
* St. Johns
* and others

([Broadcastify][22])

---

### 41. Miami-Dade radio

Miami-Dade currently has **11 public audio feeds** in the Broadcastify county listing.

The directory includes:

* City of Miami Police Central
* City of Miami Police East
* City of Miami Police North
* City of Miami Police South
* Miami Fire Rescue
* Miami-Dade Fire Rescue
* Miami-Dade municipal police
* Miami-Dade Fire tactical channels
* Miami-Dade police/fire combined feeds

([Broadcastify][23])

#### Status

🟢

---

### 42. Broward radio

Broward currently has:

```text
8 audio feeds
```

and extensive Broadcastify Calls coverage.

The documented coverage includes:

```text
Law Dispatch
Law Tac
Law Talk
Fire Dispatch
Fire-Tac
Fire-Talk
Hospital
Interop
Public Works
Security
Utilities
```

([Broadcastify][24])

This is an excellent radio source for the national project.

---

### 43. Hillsborough radio

Hillsborough currently has Broadcastify Calls coverage for:

```text
Law Dispatch
Law Tac
Law Talk
Fire Dispatch
Fire-Tac
Fire-Talk
Federal
Hospital
Interop
Public Works
Schools
Security
```

and live feeds for:

* Hillsborough County Public Safety
* Hillsborough County Sheriff's Office

([Broadcastify][25])

---

### 44. Pinellas radio

Pinellas currently has:

* Clearwater Police
* Largo Police
* Pinellas County Fire/EMS
* Pinellas County Sheriff / EMS / Clearwater / St. Petersburg Police

([Broadcastify][26])

#### Status

🟢

---

### 45. Jacksonville radio

Duval County's current Broadcastify Calls coverage includes:

```text
Fire Dispatch
Fire-Tac
Fire-Talk
EMS Dispatch
EMS-Tac
Aircraft
Interop
Other
Public Works
Security
Transportation
Utilities
```

and the public audio feed currently includes:

**Jacksonville Fire Rescue.** ([Broadcastify][27])

---

### 46. Broadcastify API

This is important for the national architecture.

Broadcastify itself states that it offers developer APIs for:

```text
Calls
Real-time call data
Archived call data
Audio Feed Catalog
```

([Broadcastify][28])

So rather than scraping individual Florida radio pages, the eventual ingestion engine can potentially use:

```text
Broadcastify
    ↓
Audio Feed Catalog API
    ↓
Florida
    ↓
county
    ↓
feed
```

The exact API access/credential requirements need to be evaluated separately.

---

### 47. Florida radio source classification

```text
Florida public radio:
    🟢 massive coverage

Broadcastify live feeds:
    🟢

Broadcastify Calls:
    🟢

Official agency feeds:
    🟢 some exist

Statewide raw radio API:
    🔴 not found

Encrypted channels:
    not publicly recoverable through these sources
```

---

### 48. Florida source architecture

Florida can be modeled as:

```text
FLORIDA
│
├── FDOT
│   │
│   ├── FL511
│   │   ├── Traffic Cameras
│   │   ├── Traffic Speeds
│   │   ├── Incidents
│   │   ├── Closures
│   │   ├── Construction
│   │   ├── Weather
│   │   ├── DMS
│   │   ├── Travel Times
│   │   └── Waze-derived data
│   │
│   ├── FL511 Camera FeatureServer
│   │
│   ├── LPR permits
│   │
│   ├── Speed Detection
│   │
│   └── Traffic Infraction Detectors
│
├── FLHSMV / FHP
│   │
│   └── Live CAD / Crash / Road Condition Report
│
├── LOCAL LAW ENFORCEMENT
│   │
│   └── ALPR deployments
│
├── OPENSTREETMAP
│   │
│   └── community-mapped ALPR
│
└── BROADCASTIFY
    │
    ├── Police
    ├── Sheriff
    ├── Fire
    ├── EMS
    └── other public safety
```

---

### 49. Exact Florida source registry

| Source                         | Type               | Exact endpoint/system            | Status |
| ------------------------------ | ------------------ | -------------------------------- | ------ |
| FL511 Traffic Cameras          | CCTV               | ArcGIS FeatureServer             | 🟢     |
| FL511 Camera Layer             | CCTV inventory     | ArcGIS `/0`                      | 🟢     |
| FL511 Camera Query             | Camera data        | ArcGIS `/query`                  | 🟢     |
| FL511 Camera List              | CCTV               | `fl511.com/List/GetData/Cameras` | 🟢     |
| FL511 image URLs               | Camera media       | `IMAGE` field                    | 🟢     |
| FL511 video URLs               | Camera media       | `videoUrl` field/backend         | 🟢     |
| FL511 Traffic Events           | Events             | FL511                            | 🟢     |
| FL511 DMS                      | Message signs      | FL511                            | 🟢     |
| FL511 speeds                   | Traffic            | FL511                            | 🟢     |
| FL511 travel times             | Traffic            | FL511                            | 🟢     |
| FL511 weather                  | Weather            | FL511                            | 🟢     |
| FL511 Waze-derived data        | Events             | FL511                            | 🟢     |
| FHP Live CAD                   | Incidents          | FLHSMV                           | 🟢     |
| FHP coordinates                | GIS                | FLHSMV CAD                       | 🟢     |
| FDOT LPR permits               | ALPR               | FDOT permitting                  | 🟢/🟡  |
| FDOT LPR rules                 | ALPR               | FDOT                             | 🟢     |
| FDOT SDS                       | Speed cameras      | FDOT                             | 🟢     |
| FDOT RLRC                      | Red-light cameras  | FDOT                             | 🟢     |
| OSM ALPR                       | Physical locations | OpenStreetMap                    | 🟢     |
| Broadcastify                   | Police/fire/EMS    | Audio feeds                      | 🟢     |
| Broadcastify Calls             | Radio calls        | Calls network                    | 🟢     |
| Statewide public ALPR read API | ALPR               | —                                | 🔴     |
| Statewide public ALPR database | ALPR               | —                                | 🔴     |
| Statewide police CAD API       | CAD                | —                                | 🔴     |

---

### 50. Highest-value Florida sources

If I were ranking these for the national database:

#### 🥇 #1 — FL511 Traffic Camera FeatureServer

```text
FL511_Traffic_Cameras
```

This is the cleanest statewide camera inventory.

#### 🥈 #2 — FL511 camera backend

```text
/List/GetData/Cameras
```

Potentially provides direct media URLs.

#### 🥉 #3 — FHP live CAD

```text
trafficincidents.flhsmv.gov
```

This is a genuinely useful public live incident source with coordinates.

#### #4 — FDOT LPR permitting system

Potentially the most valuable **ALPR discovery source** in the state, although its machine-readable accessibility still needs to be established.

#### #5 — Broadcastify

Large-scale Florida police/fire/EMS radio coverage.

#### #6 — OpenStreetMap ALPR

Massive physical-location discovery layer.

---

### 51. Florida database entries I would create

#### Camera source

```text
SOURCE_ID:
    FL-FDOT-FL511-CCTV-001

organization:
    Florida Department of Transportation

program:
    FL511

source_type:
    CCTV

endpoint_type:
    ArcGIS FeatureServer

endpoint:
    FL511_Traffic_Cameras

layer:
    0

format:
    JSON
    GeoJSON
    PBF

geometry:
    Point

coordinate_system:
    EPSG:4326

media:
    IMAGE / videoUrl

estimated_inventory:
    >2,000

status:
    ACTIVE
```

#### FHP CAD

```text
SOURCE_ID:
    FL-FHP-CAD-001

organization:
    Florida Highway Patrol

parent:
    Florida Department of Highway Safety and Motor Vehicles

source_type:
    CAD / traffic incidents

endpoint_type:
    public web data

endpoint:
    trafficincidents.flhsmv.gov/SmartWebClient/CadView.aspx

coordinates:
    latitude / longitude

timestamps:
    received
    dispatched
    arrived

status:
    ACTIVE
```

#### ALPR permit source

```text
SOURCE_ID:
    FL-FDOT-LPR-PERMIT-001

organization:
    Florida Department of Transportation

source_type:
    ALPR installation permits

authorization:
    General Use Permit

applicant:
    Law Enforcement Agency

validity:
    5 years

status:
    ACTIVE / HISTORICAL
```

---

### 52. Florida final classification

| Category                          | Result           |
| --------------------------------- | ---------------- |
| Statewide traffic cameras         | 🟢 **Excellent** |
| Machine-readable camera inventory | 🟢 **Yes**       |
| Camera coordinates                | 🟢               |
| Camera image URLs                 | 🟢               |
| Camera video URLs                 | 🟢               |
| Camera timestamps                 | 🟢               |
| Traffic incidents                 | 🟢               |
| Live FHP CAD                      | 🟢 **Excellent** |
| CAD coordinates                   | 🟢               |
| Traffic speeds                    | 🟢               |
| Travel times                      | 🟢               |
| Dynamic message signs             | 🟢               |
| Weather                           | 🟢               |
| Waze-derived traffic data         | 🟢               |
| Red-light enforcement             | 🟢               |
| School-zone speed cameras         | 🟢               |
| State-authorized ALPR             | 🟢               |
| ALPR permit system                | 🟢/🟡            |
| Public statewide ALPR inventory   | 🟡               |
| Public ALPR coordinates           | 🟢 via OSM       |
| Public ALPR plate reads           | 🔴               |
| Police radio                      | 🟢               |
| Fire radio                        | 🟢               |
| EMS radio                         | 🟢               |
| Radio call data                   | 🟢               |
| Statewide raw radio API           | 🔴               |

---

#### Florida bottom line

**Florida is a Tier-A state for this project.**

The three most important exact public sources are:

1. **FL511's ArcGIS traffic-camera FeatureServer** — machine-readable camera inventory with IDs, descriptions, county, highway, direction, latitude, longitude, timestamps and image references. ([ArcGIS Services][2])
2. **Florida Highway Patrol's live CAD** — public crash/road-condition incidents with timestamps, county, location, remarks and exact coordinates. ([Traffic Incidents][9])
3. **FDOT's LPR permitting framework** — official evidence of a statewide mechanism for law-enforcement agencies to install ALPRs on state highways, including five-year permits and installation/removal rules. ([FDOT][13])

Florida also has **very substantial public radio coverage**, with dozens of counties represented in Broadcastify's current public-safety feeds and much broader Broadcastify Calls coverage. ([Broadcastify][22])

**Next alphabetically: Georgia.**

[1]: https://fl511.com/app?utm_source=chatgpt.com "Florida Mobile App | FL511"
[2]: https://services.arcgis.com/3wFbqsFPLeKqOlIK/arcgis/rest/services/FL511_Traffic_Cameras/FeatureServer "FL511_Traffic_Cameras (FeatureServer)"
[3]: https://services.arcgis.com/3wFbqsFPLeKqOlIK/ArcGIS/rest/services/FL511_Traffic_Cameras/FeatureServer/0 "Layer: FL511 - Traffic Cameras (ID:0)"
[4]: https://services.arcgis.com/3wFbqsFPLeKqOlIK/ArcGIS/rest/services/FL511_Traffic_Cameras/FeatureServer/0/query?utm_source=chatgpt.com "Query: FL511 - Traffic Cameras (ID: 0)"
[5]: https://fl511.com/personalizedservices?utm_source=chatgpt.com "Florida Personalized Services | FL511"
[6]: https://fl511.com/cctv?utm_source=chatgpt.com "Florida Traffic Cameras | View Live Florida Traffic Cameras | FL511"
[7]: https://rosap.ntl.bts.gov/view/dot/20404/dot_20404_DS1.pdf?utm_source=chatgpt.com "Table 2 – Event Location Information"
[8]: https://greasyfork.org/vi/scripts/407690-wme-dot-cameras/code?utm_source=chatgpt.com "WME DOT Cameras - Mã nguồn"
[9]: https://trafficincidents.flhsmv.gov/SmartWebClient/CadView.aspx?utm_source=chatgpt.com "Incidents"
[10]: https://trafficincidents.flhsmv.gov/SmartWebClient/CADView.aspx?utm_source=chatgpt.com "Incidents"
[11]: https://news.fl511.com/florida-511-website-fl511-com/?utm_source=chatgpt.com "Florida 511 Website - FL511 Newsroom"
[12]: https://news.fl511.com/florida-511-general-information/?utm_source=chatgpt.com "Florida 511 General Information - FL511 Newsroom"
[13]: https://www.fdot.gov/traffic/trafficservices/info "Info"
[14]: https://www.fdot.gov/search?indexCatalogue=fdot-search&searchQuery=Automated+Traffic+Enforcement&wordsMode=AllWords&utm_source=chatgpt.com "Search"
[15]: https://www.fdot.gov/docs/default-source/Traffic/Newsletters/2006/2006-Aug.pdf?utm_source=chatgpt.com "Page 1 of 23"
[16]: https://www.fdot.gov/docs/default-source/traffic/its/projects_deploy/annualreports/AnnualReport-FY2007-08.pdf?utm_source=chatgpt.com "AnnualReport-FY2007-08.indd"
[17]: https://www.fdot.gov/docs/default-source/traffic/traf_incident/projects_cvo/presentation/FL_CVISN_Top_Level_Design.pdf?utm_source=chatgpt.com "Florida Expanded CVISN Program Plan / Top-Level Design"
[18]: https://www.findingflock.com/cameras/florida?utm_source=chatgpt.com "9,437 Flock & ALPR Cameras in Florida · Finding Flock"
[19]: https://flockcameralocations.com/locations/florida?utm_source=chatgpt.com "Flock Camera Locations in Florida — Live FL ALPR Map | Flock Camera Locations"
[20]: https://flocklocations.com/cameras/state/Florida?utm_source=chatgpt.com "Flock Safety Cameras in Florida — FlockLocations.com"
[21]: https://status.broadcastify.com/listen/stid/12?utm_source=chatgpt.com "Florida Audio Feeds"
[22]: https://status.broadcastify.com/listen/stid/12/publicsafety?utm_source=chatgpt.com "Florida Audio Feeds"
[23]: https://status.broadcastify.com/listen/ctid/328/publicsafety?utm_source=chatgpt.com "Miami-Dade County, Florida Audio Feeds"
[24]: https://status.broadcastify.com/listen/ctid/321/publicsafety?utm_source=chatgpt.com "Broward County, Florida Audio Feeds"
[25]: https://status.broadcastify.com/listen/ctid/344/publicsafety?utm_source=chatgpt.com "Hillsborough County, Florida Audio Feeds"
[26]: https://status.broadcastify.com/listen/ctid/367/publicsafety?utm_source=chatgpt.com "Pinellas County, Florida Audio Feeds"
[27]: https://status.broadcastify.com/listen/ctid/331/publicsafety?utm_source=chatgpt.com "Duval County, Florida Audio Feeds"
[28]: https://status.broadcastify.com/?utm_source=chatgpt.com "Broadcastify - Live Police, Fire, EMS, Aircraft, and Rail Audio Feeds"
