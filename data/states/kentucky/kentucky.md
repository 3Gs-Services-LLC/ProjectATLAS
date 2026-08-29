---
state: Kentucky
usps: KY
slug: kentucky
dossier_number: 17
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
  imported_from: project_atlas_state_data/Kentucky.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Kentucky (KY) - ATLAS State Record

> Dossier **17 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Kentucky is a **very strong state for this project**, particularly because it has both a well-documented transportation-camera infrastructure and a rapidly expanding ALPR network.

The most important discovery is actually the **new 2026 Kentucky ALPR law**. It requires public agencies and law-enforcement agencies deploying stationary ALPRs to maintain a geographic list of operational readers, update that list at least every 180 days, and make the list subject to the Kentucky Open Records Act. ([Kentucky General Assembly][1])

That gives us a potentially excellent **official statewide ALPR-location discovery mechanism**.

---

### 1. Kentucky Transportation Cabinet — KYTC

**Agency:** Kentucky Transportation Cabinet
**Transportation system:** KYTC / Kentucky 511

The primary transportation-camera source is the Kentucky Transportation Cabinet's traffic-camera system.

The official ArcGIS dataset is explicitly titled:

> **KYTC - Traffic Cameras**

Its metadata says it displays traffic-camera locations across Kentucky and provides real-time snapshots, with each camera updating approximately every two minutes. ([ArcGIS][2])

#### Registry

```text
SOURCE_ID:
    KY-KYTC-TRAFFIC-CAMERAS

AGENCY:
    Kentucky Transportation Cabinet

SYSTEM:
    KYTC Traffic Cameras

TYPE:
    TRAFFIC_CAMERA

GEOGRAPHIC_SCOPE:
    STATEWIDE

UPDATE:
    ~2 minutes

OUTPUT:
    CURRENT CAMERA IMAGE

ACCESS:
    PUBLIC

LICENSE:
    CC0

STATUS:
    🟢 VERIFIED
```

This is one of the cleanest camera sources we've encountered.

---

### 2. KYTC traffic-camera ArcGIS Web Map

The official ArcGIS Web Map has item ID:

```text
0666efd2054343b080b5c2f0924ef2ae
```

The public ArcGIS map is:

[KYTC Traffic Cameras — ArcGIS Web Map](https://www.arcgis.com/apps/mapviewer/index.html?webmap=0666efd2054343b080b5c2f0924ef2ae&utm_source=chatgpt.com)

The metadata confirms the map covers Kentucky and specifically identifies:

```text
Kentucky Transportation Cabinet
KYTC
Camera
Image
Real-Time
Roadway
Traffic
```

as keywords. ([ArcGIS][2])

---

### 3. KYTC camera data is explicitly public-domain

This is an unusually valuable discovery.

The KYTC metadata states:

```text
ACCESS CONSTRAINTS:
    None

LICENSE:
    Creative Commons Zero (CC0)

DATA:
    Public domain
```

([ArcGIS][2])

That makes this an excellent candidate for direct ingestion into the project.

#### Registry

```text
ACCESS:
    🟢 NO AUTHENTICATION

LICENSE:
    🟢 CC0

LEGAL/DISTRIBUTION:
    🟢 EXPLICITLY PUBLIC
```

This is stronger evidence than merely finding cameras on a public webpage.

---

### 4. KYTC camera update behavior

The official metadata gives us a concrete refresh interval:

```text
CAMERA IMAGE:
    updates every ~2 minutes
```

It also states that only the most recent image is displayed and historical images are not stored by the map. ([ArcGIS][2])

Therefore the canonical source should distinguish:

```text
snapshot_current:
    YES

historical_archive:
    NO

expected_refresh_seconds:
    ~120
```

---

### 5. Exact machine-readable layer discovery

The Web Map itself is not the final ingestion endpoint.

The correct architecture is:

```text
ArcGIS Web Map
       ↓
Web Map JSON
       ↓
operationalLayers
       ↓
Feature Service / Map Service
       ↓
layer
       ↓
features
       ↓
camera metadata
       ↓
image URL
```

The ArcGIS platform explicitly exposes item data through its `/sharing/rest/content/items/{itemID}/data` interface. ([ArcGIS Developers][3])

So:

```text
KY-KYTC-TRAFFIC-CAMERAS
```

should be stored as a **Web Map discovery source**, while the underlying Feature/Map Service should become the actual ingestion source once extracted.

I am deliberately **not inventing the service URL** until it is directly verified.

---

### 6. KYTC camera geographic extent

The official dataset metadata provides these bounds:

```text
WEST:
    -89.8064

EAST:
    -81.693

NORTH:
    39.5781

SOUTH:
    35.989
```

([ArcGIS][2])

This gives us another verification mechanism.

A purported "Kentucky statewide camera feed" whose camera coordinates fall wildly outside these bounds should be treated as suspicious or misclassified.

---

### 7. Louisville TRIMARC cameras

Kentucky has another important camera system around Louisville:

**TRIMARC — Traffic Response and Incident Management Assisting the River City.**

A Louisville Metro ArcGIS layer explicitly identifies TRIMARC camera locations and states that the cameras are funded by the Kentucky Transportation Cabinet. ([ArcGIS][4])

#### Registry

```text
SOURCE_ID:
    KY-TRIMARC-CCTV

REGION:
    Louisville Metro

OWNER/FUNDER:
    Kentucky Transportation Cabinet

SYSTEM:
    TRIMARC

TYPE:
    TRAFFIC_CAMERA

STATUS:
    🟢 VERIFIED
```

This should **not** be treated as merely another random Louisville camera map.

It is a distinct transportation-camera source.

---

### 8. TRIMARC camera data

The Louisville ArcGIS item says the layer includes:

```text
camera locations
description
direction
screenshots
```

and that the cameras monitor roadways and verify incidents for freeway/incident management. ([ArcGIS][4])

That gives the canonical model additional fields:

```text
camera_id
latitude
longitude
description
direction
snapshot
agency
system
```

#### Priority

**9.5/10**

This is a particularly useful regional source because Louisville has a very dense transportation network.

---

### 9. KYTC statewide vs TRIMARC

The database should preserve the relationship:

```text
KENTUCKY TRANSPORTATION CABINET
│
├── KYTC STATEWIDE TRAFFIC CAMERAS
│
└── TRIMARC
    └── Louisville Metro traffic cameras
```

Do **not** deduplicate these merely because both are ultimately associated with KYTC.

They are different source systems.

---

### 10. Kentucky ALPR — major discovery

Kentucky's ALPR environment is extensive.

A current community/OpenStreetMap-derived inventory reports:

```text
1,835 documented ALPR cameras statewide
```

as of August 27, 2026. ([Finding Flock][5])

This makes Kentucky one of the larger documented ALPR states.

However:

**1,835 is not an official Kentucky government count.**

Store it as:

```text
SOURCE_TYPE:
    COMMUNITY_MAPPING

CONFIDENCE:
    MEDIUM

STATUS:
    DISCOVERY DATA
```

---

### 11. Kentucky ALPR vendor distribution

The current mapped inventory reports approximately:

| Vendor             | Documented |
| ------------------ | ---------: |
| Flock Safety       |      1,147 |
| Motorola Solutions |          3 |
| Neology            |          2 |
| Other              |          8 |
| Unknown            |         10 |

for the subset where the mapper recorded manufacturers. ([Finding Flock][5])

This is overwhelmingly Flock-dominated.

But again:

```text
DO NOT:
    convert 1,147 into official statewide Flock count.

DO:
    use it as a discovery index.
```

---

### 12. Louisville / Jefferson County ALPR

The largest documented Kentucky concentration is Louisville/Jefferson County.

Current mapping identifies:

```text
Louisville/Jefferson County:
    323 cameras
```

and Louisville itself has another mapped concentration. ([Finding Flock][5])

More importantly, the **Louisville Metro government itself confirms major Flock deployment**.

The city's current public-safety page says:

```text
300 Flock devices
```

are being installed as part of Louisville's security-camera and license-plate-reader investments. ([LouisvilleKY.gov][6])

#### Registry

```text
SOURCE_ID:
    KY-LMPD-FLOCK

AGENCY:
    Louisville Metro Police Department

REGION:
    Jefferson County / Louisville Metro

VENDOR:
    Flock Safety

DEVICE_COUNT:
    300

TYPE:
    ALPR

STATUS:
    🟢 OFFICIAL
```

This is much stronger evidence than the community map.

---

### 13. Louisville Flock expansion

Louisville Metro Council records provide specific deployments.

In September 2024, Louisville approved funding for:

```text
28 Flock cameras
```

with:

```text
14 in District 12
14 in District 14
```

The city's announcement explicitly says the cameras capture:

```text
license plate
vehicle make
vehicle model
vehicle color
```

and that access is restricted to law-enforcement personnel for investigative purposes. ([LouisvilleKY.gov][7])

#### Registry

```text
SOURCE_ID:
    KY-LMPD-FLOCK-D12-D14

CAMERAS:
    28

DISTRICTS:
    12
    14

VENDOR:
    Flock Safety

STATUS:
    🟢 OFFICIAL
```

---

### 14. Louisville Parks Flock cameras

Louisville's FY2025 budget contains a separate Flock-camera project for:

```text
Riverview Park
Waverly Park
Sylvania Park
```

with $25,000 allocated for purchase and installation. ([LouisvilleKY.gov][8])

This matters because it demonstrates that the Louisville deployment is not necessarily limited to police-owned roadside units.

#### Registry

```text
SOURCE_ID:
    KY-LOUISVILLE-PARKS-FLOCK

OWNER:
    Louisville Metro Parks & Recreation

TYPE:
    ALPR / security camera

LOCATIONS:
    Riverview Park
    Waverly Park
    Sylvania Park

STATUS:
    🟢 OFFICIAL PROCUREMENT
```

---

### 15. Louisville private-camera integration

This is another major finding.

The Louisville Criminal Justice Commission reported in June 2026 that LMPD uses extensive ALPR technology and that **many cameras throughout Jefferson County are owned by private entities, businesses, or neighborhoods that voluntarily provide access to law enforcement.** ([LouisvilleKY.gov][9])

Therefore Kentucky's camera graph must support:

```text
OWNER:
    POLICE
    GOVERNMENT
    PRIVATE BUSINESS
    HOA / NEIGHBORHOOD
    OTHER

ACCESSOR:
    POLICE
    PUBLIC
    UNKNOWN
```

These are **not necessarily the same entity**.

---

### 16. Lexington-Fayette

Lexington has one of the best official ALPR pages in the country.

The Lexington Police Department states that it introduced LPR technology in 2022 and uses:

```text
Flock Safety
```

as its provider. ([City of Lexington][10])

The city's current page says:

```text
125 LPRs
throughout Fayette County
```

([City of Lexington][10])

#### Registry

```text
SOURCE_ID:
    KY-LEXINGTON-FLOCK

AGENCY:
    Lexington Police Department

COUNTY:
    Fayette

VENDOR:
    Flock Safety

CAMERAS:
    125

STATUS:
    🟢 OFFICIAL
```

---

### 17. Lexington publishes LPR locations

This is particularly valuable.

Lexington's official LPR page has a dedicated:

```text
License plate reader locations
```

section. ([City of Lexington][10])

That means the project should specifically extract that location dataset rather than relying on third-party Flock maps.

#### Priority

**10/10**

This is an official agency-maintained location source.

---

### 18. Lexington audits

Lexington also documents an audit process.

Before an officer browses LPR detections, the officer must document a reason for the inquiry, and audits of browsing inquiries are performed at least quarterly. ([City of Lexington][10])

This is not a camera-location feed, but it is important provenance for the ALPR source record.

---

### 19. Lexington Real-Time Intelligence Center

Lexington's police department also has a Real-Time Intelligence Center.

An official 2025 release describes Flock LPR alerts being used by the Lexington Police Department's technology/RTIC operation to locate a vehicle wanted in Indiana. ([City of Lexington][11])

#### Registry

```text
SOURCE_ID:
    KY-LEXINGTON-RTIC

TYPE:
    REAL_TIME_INTELLIGENCE

RELATED_DATA:
    FLOCK ALPR

STATUS:
    🟢 OFFICIAL
```

This should be modeled as a **consumer/processing system**, not as the camera source itself.

---

### 20. Kentucky ALPR law — extremely important

Kentucky enacted **HB 58 / 2026 Acts Chapter 71**, which regulates ALPR systems. ([Kentucky General Assembly][1])

The legislation establishes restrictions concerning:

* ALPR use
* ALPR data
* retention
* sale
* sharing
* law-enforcement policies
* Transportation Cabinet ALPR
* commercial-vehicle ALPR
* insurance use
* collateral recovery

This is directly relevant to the source-discovery project.

---

### 21. Kentucky ALPR location disclosure requirement

This is arguably the **most important Kentucky discovery**.

HB 58's amendment requires:

> public agencies and law-enforcement agencies deploying an ALPR to maintain a list of geographic locations of each operational stationary ALPR

and requires the list to be:

```text
updated:
    at least every 180 days

disclosure:
    Kentucky Open Records Act
```

([Kentucky General Assembly][1])

#### This changes our Kentucky strategy.

Instead of relying solely on:

```text
Flock maps
OSM
news articles
```

we can systematically target:

```text
EVERY KENTUCKY PUBLIC AGENCY
        ↓
ALPR LOCATION LIST
        ↓
OPEN RECORDS
        ↓
CANONICAL CAMERA LOCATIONS
```

That could become an extraordinarily strong statewide discovery mechanism.

---

### 22. Kentucky ALPR data retention

The new law generally establishes a:

```text
90-day retention limit
```

with exceptions for certain investigations/preservation circumstances. ([Kentucky General Assembly][1])

This should be stored as **legal metadata**, not as an assumed property of every vendor implementation.

---

### 23. Kentucky Transportation Cabinet ALPR

The new law specifically authorizes Transportation Cabinet ALPR collection for certain purposes, including:

```text
road-fund revenue collection
commercial vehicle permitting/credentialing enforcement
commercial vehicle safety enforcement/monitoring
```

([Kentucky General Assembly][1])

#### Registry

```text
SOURCE_ID:
    KY-KYTC-ALPR

OWNER:
    Kentucky Transportation Cabinet

TYPE:
    ALPR

PURPOSES:
    toll/revenue
    commercial vehicle enforcement
    credentialing
    safety monitoring

STATUS:
    🟢 LEGALLY AUTHORIZED
```

Important distinction:

**This does not establish a public live KYTC ALPR feed.**

It establishes that the Transportation Cabinet is an authorized ALPR operator/data collector.

---

### 24. Kentucky highway-right-of-way ALPR

HB 58 also requires the Transportation Cabinet to establish a permit process for installing ALPRs on highway rights-of-way. ([Kentucky General Assembly][1])

This could become another valuable discovery source:

```text
KYTC
   ↓
ALPR ROW permits
   ↓
locations
   ↓
operators
   ↓
vendor
```

#### Status

```text
🟡 HIGH-VALUE DISCOVERY TARGET
```

The exact public permit dataset has **not yet been verified**.

---

### 25. Kentucky ALPR source strategy

Kentucky should therefore be searched in this order:

```text
1. Official agency ALPR location lists
        ↓
2. Kentucky Open Records disclosures
        ↓
3. KYTC ALPR ROW permits
        ↓
4. official procurement/contracts
        ↓
5. Flock/vendor records
        ↓
6. community mapping
```

This is significantly better than simply downloading a Flock map.

---

### 26. Kentucky police scanners

Kentucky has a very large public Internet-radio ecosystem.

One current directory reports:

```text
215 live feeds
94 counties
```

covering police, fire and EMS. ([Police Scanner][12])

#### Registry

```text
SOURCE_ID:
    KY-PUBLIC-SCANNER-INDEX

TYPE:
    PUBLIC_SAFETY_AUDIO

SCOPE:
    STATEWIDE

COUNTY_COVERAGE:
    94

DOCUMENTED_FEEDS:
    215

STATUS:
    🟢 PUBLIC
```

Again, **215 is the number of Internet feeds in that directory, not the number of radio systems.**

---

### 27. Broadcastify Kentucky

Broadcastify currently exposes a Kentucky statewide public-safety feed index.

Current listed feeds include:

```text
Louisville Metro Police
Barren County Public Safety
Boyd County Public Safety
Greenup County Public Safety
Laurel County / City Fire / Rescue / Police / EMS
Warren County Sheriff / Fire
Hardin County Sheriff / Radcliff Police / Vine Grove Police / KSP-4
Northern Kentucky Public Safety
Kentucky State Police Post 13
Kenton County Police and Fire
Bowling Green Police
```

among others. ([Broadcastify][13])

#### Registry

```text
SOURCE_ID:
    KY-BROADCASTIFY

TYPE:
    INTERNET_RADIO

CATEGORY:
    POLICE
    FIRE
    EMS
    PUBLIC_SAFETY

STATUS:
    🟢 PUBLIC
```

---

### 28. Kentucky State Police scanner feeds

Kentucky State Police feeds are particularly useful.

Broadcastify currently lists KSP feeds including:

```text
KSP Post 4
KSP Post 9
KSP Post 13
```

among others. ([Broadcastify][13])

One currently documented feed is:

```text
KSP Post 9 Area & Amateur Radio Skywarn
```

with coverage involving Pike and Floyd Counties. ([Broadcastify][14])

#### Registry

```text
SOURCE_ID:
    KY-KSP-PUBLIC-SCANNERS

AGENCY:
    Kentucky State Police

TYPE:
    PUBLIC SAFETY RADIO

STATUS:
    🟢 PUBLIC FEEDS EXIST
```

---

### 29. Kentucky radio architecture

Do not make the scanner layer:

```text
Kentucky → one scanner feed
```

Instead:

```text
KENTUCKY
│
├── KSP
│   ├── Post 1
│   ├── Post 2
│   ├── ...
│   └── Post 16
│
├── COUNTY
│   ├── sheriff
│   ├── police
│   ├── fire
│   └── EMS
│
├── MUNICIPAL
│   └── individual agencies
│
└── REGIONAL
    └── multi-county feeds
```

Each Internet feed becomes an individual `AudioSource`.

---

### 30. Kentucky CAD / calls-for-service

I have **not** established a verified statewide public CAD API.

Therefore:

```text
STATEWIDE CAD:
    🔴 NOT VERIFIED

LOCAL CAD:
    🟡 SOME AGENCIES / PORTALS MAY EXIST
```

Do not create a fake statewide CAD source.

---

### 31. Kentucky traffic cameras vs ALPR

This state provides a very clean demonstration of why these must remain different entities.

#### KYTC CCTV

```text
purpose:
    traffic monitoring

output:
    current roadway image

refresh:
    ~2 minutes

license:
    CC0
```

#### Flock ALPR

```text
purpose:
    investigative intelligence

output:
    vehicle/plate observations

operator:
    police / government / private participants

access:
    restricted
```

They should never be combined into one generic `camera` source without a technology classification.

---

### 32. Kentucky canonical source graph

```text
KENTUCKY
│
├── TRANSPORTATION
│   │
│   ├── KYTC
│   │   ├── Statewide Traffic Cameras
│   │   ├── ArcGIS
│   │   └── ALPR / ROW permits
│   │
│   └── TRIMARC
│       └── Louisville Traffic Cameras
│
├── ALPR
│   │
│   ├── Louisville Metro
│   ├── Lexington
│   ├── other municipalities
│   ├── counties
│   ├── universities
│   ├── private entities
│   └── Flock / other vendors
│
└── RADIO
    │
    ├── Kentucky State Police
    ├── County
    ├── Municipal
    ├── Fire
    ├── EMS
    └── Regional Internet feeds
```

---

### 33. Highest-value Kentucky sources

| Source                                 |      Value | Reason                                                    |
| -------------------------------------- | ---------: | --------------------------------------------------------- |
| **KYTC Traffic Cameras**               |  **10/10** | Official statewide camera dataset                         |
| **KYTC ArcGIS**                        |  **10/10** | Machine-readable GIS discovery                            |
| **KYTC CC0 metadata**                  |  **10/10** | Explicit public-domain licensing                          |
| **TRIMARC**                            | **9.5/10** | Louisville transportation cameras                         |
| **Kentucky ALPR location requirement** |  **10/10** | Potential statewide official location-discovery mechanism |
| **Lexington LPR locations**            |  **10/10** | Official published locations                              |
| **Louisville Flock**                   | **9.5/10** | Official 300-device deployment                            |
| **Public scanner ecosystem**           |   **9/10** | 215 feeds / 94 counties documented                        |
| **KSP public scanner feeds**           |   **9/10** | State-police coverage                                     |
| **Community ALPR map**                 |   **7/10** | Excellent discovery, not authoritative                    |

---

### 34. Exact Kentucky source registry

| Source ID                   | Owner            | Data                      | Type              | Confidence      |
| --------------------------- | ---------------- | ------------------------- | ----------------- | --------------- |
| `KY-KYTC-TRAFFIC-CAMERAS`   | KYTC             | Statewide traffic cameras | **CCTV**          | 🟢 Official     |
| `KY-KYTC-ARCGIS`            | KYTC             | GIS layers                | GIS               | 🟢 Official     |
| `KY-TRIMARC-CCTV`           | KYTC/TRIMARC     | Louisville cameras        | **CCTV**          | 🟢 Official     |
| `KY-KYTC-ALPR`              | KYTC             | Transportation ALPR       | **ALPR**          | 🟢 Legal/agency |
| `KY-LMPD-FLOCK`             | Louisville Metro | 300 Flock devices         | **ALPR**          | 🟢 Official     |
| `KY-LMPD-FLOCK-D12-D14`     | LMPD             | 28 Flock cameras          | **ALPR**          | 🟢 Official     |
| `KY-LOUISVILLE-PARKS-FLOCK` | Metro Parks      | Park Flock cameras        | **ALPR/security** | 🟢 Official     |
| `KY-LEXINGTON-FLOCK`        | Lexington PD     | 125 Flock LPRs            | **ALPR**          | 🟢 Official     |
| `KY-LEXINGTON-RTIC`         | Lexington PD     | LPR intelligence          | Intelligence      | 🟢 Official     |
| `KY-PUBLIC-SCANNER-INDEX`   | Third-party      | 215 feeds                 | Radio             | 🟢 Public       |
| `KY-BROADCASTIFY`           | Broadcastify     | Public safety audio       | Radio             | 🟢 Public       |
| `KY-KSP-PUBLIC-SCANNERS`    | KSP/third-party  | KSP feeds                 | Radio             | 🟢 Public       |
| `KY-ALPR-COMMUNITY-MAP`     | OSM/community    | ~1,835 mapped             | **ALPR**          | 🟡 Discovery    |

---

### 35. What we have **not** established

I am intentionally leaving these blank rather than guessing:

```text
🔴 Statewide public ALPR live-read API
🔴 Public statewide ALPR observation stream
🔴 Statewide police CAD API
🔴 One statewide police-radio streaming endpoint
🔴 Exact underlying KYTC camera FeatureServer URL
🔴 Exact current TRIMARC live-image endpoint
```

The first two are especially important:

**camera locations are discoverable; raw ALPR observations are a different matter.**

---

### 36. Kentucky's biggest opportunity

The **2026 HB 58 stationary-ALPR location requirement** is the standout discovery.

The law requires operational stationary-ALPR location lists to be maintained, updated at least every 180 days, and made subject to Kentucky's Open Records Act. ([Kentucky General Assembly][1])

That potentially lets the national source engine build:

```text
Kentucky ALPR Discovery Engine
          │
          ├── agency directory
          │
          ├── open-records requests
          │
          ├── required location lists
          │
          ├── procurement records
          │
          ├── vendor records
          │
          └── GIS/community cross-validation
```

That is **much stronger than simply scraping Flock's public map**.

---

### 37. Kentucky final classification

| Category                              | Kentucky                      |
| ------------------------------------- | ----------------------------- |
| Statewide traffic cameras             | 🟢                            |
| Official machine-readable camera data | 🟢                            |
| Camera snapshots                      | 🟢                            |
| Camera refresh metadata               | 🟢                            |
| Camera license                        | 🟢 **CC0**                    |
| Louisville TRIMARC                    | 🟢                            |
| Statewide ALPR                        | 🟢 **extensive**              |
| Official ALPR location requirement    | 🟢 **exceptionally valuable** |
| Flock                                 | 🟢                            |
| Lexington LPR                         | 🟢                            |
| Louisville LPR                        | 🟢                            |
| Private ALPR integration              | 🟢                            |
| Public ALPR observations              | 🔴                            |
| Public scanner feeds                  | 🟢                            |
| KSP scanner feeds                     | 🟢                            |
| Statewide public CAD                  | 🔴                            |
| Statewide public police CAD API       | 🔴                            |

#### **Kentucky rating: 9.7/10 — VERY HIGH PRIORITY**

Kentucky is actually **better than Kansas for the specific goal of exact public-source discovery** because its new ALPR law creates an explicit legal trail toward **agency-maintained geographic ALPR inventories**. ([Kentucky General Assembly][1])

For the camera layer, the KYTC dataset is also exceptionally clean: **statewide, official, real-time snapshots, approximately two-minute updates, no authentication indicated, and CC0/public-domain licensing.** ([ArcGIS][2])

**Next alphabetically: Louisiana.**

[1]: https://apps.legislature.ky.gov/record/26rs/hb58.html?utm_source=chatgpt.com "26RS HB 58"
[2]: https://www.arcgis.com/sharing/rest/content/items/0666efd2054343b080b5c2f0924ef2ae/info/metadata/metadata.xml?format=default&output=html "KYTC - Traffic Cameras"
[3]: https://developers.arcgis.com/rest/users-groups-and-items/item-data/?utm_source=chatgpt.com "/data: Item Data | ArcGIS REST APIs | Esri Developer"
[4]: https://www.arcgis.com/home/item.html?id=cf315a4ca09645fc976b4851b3419237&sublayer=0&utm_source=chatgpt.com "KYTC Traffic Cameras - Overview"
[5]: https://www.findingflock.com/cameras/kentucky?utm_source=chatgpt.com "1,835 Flock & ALPR Cameras in Kentucky · Finding Flock"
[6]: https://louisvilleky.gov/government/mayor-craig-greenberg/safer-louisville?utm_source=chatgpt.com "A Safer Louisville | LouisvilleKY.gov"
[7]: https://louisvilleky.gov/news/metro-council-approves-funding-flock-cameras-council-districts-12-and-14?utm_source=chatgpt.com "Metro Council approves funding for flock cameras in Council Districts 12 and 14 | LouisvilleKY.gov"
[8]: https://louisvilleky.gov/sites/default/files/2024-08/2024-2025-louisville-metro-government-approved-executive-budget.pdf?utm_source=chatgpt.com "DRAFT BUDGET COVER PAGE"
[9]: https://louisvilleky.gov/government/criminal-justice-commission/criminal-justice-commission-board-meeting-summary-june-18?utm_source=chatgpt.com "Criminal Justice Commission Board Meeting Summary, June 18, 2026 | LouisvilleKY.gov"
[10]: https://www.lexingtonky.gov/government/departments-programs/public-safety/police/license-plate-readers?utm_source=chatgpt.com "License plate readers | City of Lexington, Kentucky"
[11]: https://www.lexingtonky.gov/news/police-technology-assist-out-state-agency-arrests?utm_source=chatgpt.com "Police technology assist out-of-state agency with arrests | City of Lexington, Kentucky"
[12]: https://policescannerradio.app/scanners/kentucky/?utm_source=chatgpt.com "Kentucky Police Scanner — Live Police, Fire & EMS Feeds"
[13]: https://status.broadcastify.com/listen/stid/21/publicsafety?utm_source=chatgpt.com "Kentucky Audio Feeds"
[14]: https://status.broadcastify.com/listen/feed/47634?utm_source=chatgpt.com "KSP Post 9 Area & Amateur Radio Skywarn"
