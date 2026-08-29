---
state: Illinois
usps: IL
slug: illinois
dossier_number: 13
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
  imported_from: project_atlas_state_data/Illinois.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Illinois (IL) - ATLAS State Record

> Dossier **13 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Illinois is one of the **strongest states found so far** for this project.

The important difference from Idaho is that Illinois isn't centered around one statewide 511 API. Instead, it has a **large interconnected transportation-data ecosystem**:

```text
                         ILLINOIS
                            │
        ┌───────────────────┼────────────────────┐
        │                   │                    │
       IDOT              Illinois ISP       Illinois Tollway
        │                   │                    │
   Gateway / GTIS        ALPR program          TIMS
        │                   │                    │
   Cameras / DMS /      588+ ALPR cameras     traffic data
   incidents / etc.       statewide
        │
        ├──────────────┐
        │              │
   Chicago CDOT    Lake County PASSAGE
        │              │
   cameras / ADT    400 PTZ + 600+
                    video detection
```

And Illinois has something particularly important for the national project:

> **As of July 2025, the Illinois State Police reported 588 ALPR cameras installed statewide, with at least one ALPR site in each of the 21 legislatively named counties.**

That is an official current source, not an estimate. ([Illinois State Police][1])

---

### 1. Illinois Department of Transportation — Gateway Traveler Information System

**Organization:** Illinois Department of Transportation
**System:** Gateway Traveler Information System / GTIS
**Category:** Traffic cameras, traffic information, incidents, DMS, weather, construction

[Travel Midwest / Gateway](https://travelmidwest.com/)

**Status: 🟢 CONFIRMED**

Illinois' primary public transportation-data system is the **Gateway Traveler Information System**, commonly exposed to the public through **Travel Midwest**.

IDOT's reuse policy explicitly identifies Gateway data as including:

* travel time
* congestion
* camera images
* dynamic message signs
* lane closures
* construction
* incident data

and says the information is available through periodic **XML downloads and JPEG camera images**. ([Travel Midwest][2])

---

### 2. Exact Gateway public-data access

This is important.

Illinois does **not** simply expose a clean anonymous REST API like Idaho.

Instead, IDOT operates a registration system for organizations wanting the raw Gateway feeds.

[Gateway traffic-information registration](https://travelmidwest.com/About/RegistrationForm)

The registration page explicitly provides options for:

```text
Request Hyperlink
Request XML
```

and requires a login/password. ([Travel Midwest][3])

So the classification is:

```text
public website:
    🟢

public camera images:
    🟢

raw XML:
    🟢 available to registered users

anonymous REST API:
    🔴 not established

API key:
    🔴

registration:
    🟡 required for raw redistribution/access
```

This is still a **public data source**.

---

### 3. Gateway camera images

IDOT's own policy explicitly lists:

> camera images

as Gateway traffic information.

It also says the initial camera-image access rate is limited to **once every five minutes**, with the possibility of more frequent access being made available separately. ([Travel Midwest][2])

This is extremely useful for the ingestion architecture.

#### Source classification

```text
SOURCE:
    IL-IDOT-GATEWAY-CAMERAS

type:
    TRAFFIC_CAMERA

format:
    JPEG

access:
    registered Gateway feed

refresh:
    approximately 5 minutes under current reuse policy

authority:
    IDOT
```

---

### 4. Gateway XML

The Travel Midwest FAQ explicitly says organizations can obtain raw Gateway data through XML downloads and can inquire about establishing an XML connection directly to Gateway. ([Travel Midwest][4])

The older CMAP ITS architecture also documents Gateway's external interface and specifically references:

* Gateway External Interface User Guide
* XML and Camera Image Download Manual
* XML Upload Manual

The architecture says Gateway collects and distributes:

* incidents
* construction
* special events
* vehicle detector data
* camera data
* DMS data
* congestion
* travel times
* speeds. ([CMAP ITS Architecture][5])

#### This is a major source.

```text
IL-IDOT-GATEWAY-XML
```

should absolutely be retained in the national source registry.

---

### 5. Gateway isn't exclusively Illinois

This is important when ingesting the data.

Travel Midwest says Gateway receives traffic information from:

* Illinois DOT
* Indiana DOT
* Wisconsin DOT
* Michigan DOT
* Iowa DOT
* Missouri DOT
* Kentucky DOT
* Illinois Tollway
* Chicago Skyway
* Indiana Toll Road
* City of Chicago
* Lake County, Illinois

and others. ([Travel Midwest][4])

Therefore:

```text
Gateway
    ≠
Illinois-only source
```

The ingestion engine must inspect each record's **source agency**.

Do not assign every Gateway record to IDOT.

---

### 6. Travel Midwest current camera system

The current Travel Midwest site still exposes a camera layer and camera reports.

[Travel Midwest camera report](https://travelmidwest.com/Reports/CameraReport?location=GATEWAY.IL)

The site currently warns that camera data is unavailable for some agencies while displaying camera functionality and camera reports. ([Travel Midwest][6])

This confirms that the Gateway camera layer remains operational as of 2026.

---

### 7. Gateway data reuse restrictions

The source is public, but it isn't unrestricted.

IDOT requires:

```text
XML:
    no more than once / 5 minutes

camera images:
    initially no more than once / 5 minutes
```

and requires attribution identifying IDOT as the source. ([Travel Midwest][2])

The project should therefore store:

```text
access_policy:
    IDOT_GATEWAY_REUSE_POLICY

rate_limit:
    5 minutes

attribution_required:
    true
```

---

### 8. IDOT statewide CCTV system

Illinois has a significant IDOT CCTV network.

The CMAP statewide ITS documentation identifies:

```text
IDOT CCTV Systems, Expressway
```

as an existing project.

The stated goal was CCTV coverage along expressways at intervals of approximately **one mile or less**. ([CMAP ITS Architecture][7])

#### Status

🟢 **Official documented CCTV network**

---

### 9. IDOT CCTV is not necessarily all publicly viewable

This distinction matters.

The CMAP architecture says a potential project involved sharing CCTV video among traffic-management entities, including possible Internet access with **password-protected streaming video and camera control**. ([CMAP ITS Architecture][7])

Therefore:

```text
IDOT CCTV exists:
    🟢

IDOT controls CCTV:
    🟢

all CCTV publicly viewable:
    🔴

public camera snapshots through Gateway:
    🟢
```

Do not claim that every physical IDOT CCTV camera has a public live stream.

---

### 10. Chicago — CDOT traffic cameras

Chicago has a very large traffic-surveillance infrastructure.

The regional ITS architecture describes:

* traffic monitoring cameras
* video detection cameras
* red-light cameras
* traffic surveillance
* live video systems
* Chicago ATMS

The architecture documented **300 red-light cameras at 150 intersections** historically and noted that these cameras could capture traffic volume/speed and provide live video streams. ([CMAP ITS Architecture][7])

That figure is historical architecture documentation, so:

```text
historical:
    300 cameras / 150 intersections

current:
    do NOT assume 300
```

---

### 11. Chicago traffic/speed enforcement camera data

Chicago's official open-data ecosystem provides datasets for:

#### Red-light camera locations

[Chicago Red Light Camera Locations](https://data.cityofchicago.org/Transportation/Red-Light-Camera-Locations/fz3s-u3xt)

The dataset contains:

* location
* first operational date
* monitored approach/direction

and is currently updated. ([Chicago Data Portal][8])

However, there is a provenance wrinkle:

> The current dataset page says it is **community-created**, even though it is published through the City of Chicago data portal and attributes the source to the City.

Therefore I would classify it:

```text
source:
    Chicago Open Data

dataset:
    Red Light Camera Locations

current status:
    🟡 community-created dataset
```

rather than falsely calling it an official municipal inventory.

---

### 12. Chicago speed-camera locations

This one is substantially cleaner.

[Chicago Speed Camera Locations](https://data.cityofchicago.org/Transportation/Map-Speed-Camera-Locations/7ajp-yjhe)

The current dataset documents:

* location
* first operational date
* monitored approach

and was updated **August 25, 2026**. ([Chicago Data Portal][9])

The Data.gov metadata exposes direct machine-readable resources including:

```text
JSON
XML
CSV
KMZ
GeoJSON
```

and identifies the dataset as public. ([Data.gov][10])

#### Exact machine-readable source

```text
Dataset ID:
    4i42-qv3h

GeoJSON:
    Chicago Data Portal API
```

This is a **high-value source**.

---

### 13. Chicago red-light camera machine-readable source

The red-light camera dataset has:

```text
Dataset ID:
    thvf-6diy
```

Data.gov exposes:

```text
CSV
KML
KMZ
GeoJSON
```

as downloadable resources. ([Data.gov][11])

So:

```text
IL-CHI-REDLIGHT-CAM
```

should be retained even though its current portal provenance is marked community-created.

---

### 14. Chicago camera violation data

Chicago also publishes actual camera-violation datasets.

#### Red-light violations

```text
Dataset:
    spqx-js37
```

#### Speed-camera violations

```text
Dataset:
    hhkd-xvj4
```

The speed-camera dataset currently has a public Socrata API. ([Socrata Developers][12])

Chicago also confirmed that updates to both red-light and speed-camera violation datasets resumed after a temporary 2024/2025 interruption. ([Chicago Data Portal][13])

These are not camera feeds, but they are valuable **camera-observation-derived public datasets**.

---

### 15. Chicago traffic cameras — major discovery

A current federal data catalog entry for Chicago's **Average Daily Traffic Counts** states that the data is collected from **more than 800 traffic and speed-enforcement cameras operating 24/7/365**.

The data is processed through Chicago's Advanced Traffic Management System. ([Data.gov][14])

This gives us an important current scale indicator:

```text
Chicago:
    >800 traffic/speed-enforcement cameras
```

But this **does not mean >800 public live-video cameras**.

It means cameras are being used to collect traffic counts.

That distinction belongs in the database.

---

### 16. Chicago ADT camera dataset

The current dataset provides:

```text
October 2020 → present
```

with new cameras added on a rolling basis. The source says data accuracy/consistency improves substantially from May 2026 onward. ([Data.gov][14])

#### Recommended source

```text
IL-CHI-ADT-CAMERA-DATA

type:
    TRAFFIC_SENSOR_OBSERVATION

underlying hardware:
    cameras

not:
    PUBLIC_LIVE_VIDEO
```

---

### 17. Lake County PASSAGE

This is another **major Illinois source**.

**Organization:** Lake County Division of Transportation
**System:** Lake County PASSAGE
**Category:** traffic cameras / traffic management / incidents / CAD integration

[Lake County PASSAGE](https://www.lakecountypassage.com/)

The regional ITS architecture identifies PASSAGE as an existing system.

It states that PASSAGE is connected to:

```text
610+ traffic signals
400 PTZ traffic-monitoring cameras
600+ video-detection cameras
```

and that its equipment data returns to the Traffic Management Center through more than 300 miles of fiber and wireless links. ([CMAP ITS Architecture][15])

This is an enormous camera/sensor system.

---

### 18. Lake County PASSAGE public camera snapshots

This is not merely an internal system.

Lake County Board records explicitly document a licensing agreement for **real-time CCTV camera snapshot images made publicly available through Lake County PASSAGE**. ([Lake County Meetings][16])

That is excellent provenance.

So:

```text
IL-LAKE-PASSAGE-CCTV

authority:
    Lake County Division of Transportation

public snapshots:
    🟢

real-time:
    🟢

PTZ:
    🟢

video detection:
    🟢

camera count:
    400+ PTZ
    600+ video detection
```

---

### 19. Lake County PASSAGE CAD integration

This is particularly interesting for the national public-safety-data project.

The CMAP architecture says traffic incidents are communicated from police CAD systems directly to the PASSAGE TMC, and then distributed to the public through:

* PASSAGE website
* Highway Advisory Radio
* variable message signs
* smartphone applications
* social media

([CMAP ITS Architecture][15])

So:

```text
POLICE CAD
    ↓
PASSAGE TMC
    ↓
PUBLIC INCIDENT INFORMATION
```

This gives us a **public derivative of CAD information**, even though the underlying CAD system itself isn't public.

---

### 20. Lake County PASSAGE public incident source

The architecture identifies the PASSAGE website as providing:

```text
incident information
live travel conditions
```

and the system is administered by Lake County. ([CMAP ITS Architecture][5])

This should be classified:

```text
IL-LAKE-PASSAGE-INCIDENTS

source:
    public transportation information

underlying source:
    police / 911 CAD + transportation systems

public:
    true

raw CAD:
    false
```

---

### 21. Lake County PASSAGE camera distribution

The PASSAGE system distributes traffic images to:

* Gateway Traveler Information System
* IDOT District 1
* Illinois Tollway
* Cook County
* DuPage County
* Kane County
* McHenry County
* municipal TMCs
* public-safety dispatch entities

according to the regional architecture. ([CMAP ITS Architecture][15])

This means PASSAGE is a **regional camera-data hub**, not merely a website.

---

### 22. Illinois Tollway camera infrastructure

The Illinois Tollway participates in Gateway and the regional transportation architecture.

The CMAP architecture identifies:

```text
Illinois Tollway TMC
Illinois Tollway field equipment
Illinois Tollway traffic images
Illinois Tollway automated enforcement cameras
```

as part of the regional ITS system. ([CMAP ITS Architecture][17])

#### Public-data classification

```text
Illinois Tollway infrastructure:
    🟢 confirmed

traffic images:
    🟢 distributed through regional systems

public raw camera API:
    🔴 not established
```

---

### 23. Illinois State Police statewide ALPR program

Now the **most important Illinois discovery**.

[Illinois State Police ALPR Transparency Page](https://web-akamai.isp.illinois.gov/CriminalInvestigations/TransparencyPage)

ISP's current transparency page says:

> **A total of 588 cameras have been installed statewide.**

It further says that as of July 2025:

> **at least one ALPR site had been installed in each of the 21 legislatively named counties.**

([Illinois State Police][1])

This is the strongest statewide ALPR source we have encountered so far.

---

### 24. Illinois ALPR statewide source

The program is called the:

```text
Tamara Clayton Expressway Camera Act
```

and is operated by the Illinois State Police with IDOT funding/procurement involvement.

IDOT confirms that the program was established for ALPR cameras on state rights-of-way. ([IDOT][18])

#### Current architecture

```text
Illinois Department of Transportation
          │
          │ funding / procurement
          ▼
Illinois State Police
          │
          │ deployment / ownership / maintenance
          ▼
Statewide ALPR infrastructure
          │
          ▼
Motorola Solutions Vehicle Manager
```

ISP says it currently uses **Motorola Solutions Vehicle Manager** for the ALPR system. ([Illinois State Police][1])

---

### 25. Exact statewide ALPR count

Current authoritative number found:

```text
588 cameras
```

as of July 2025. ([Illinois State Police][1])

Important:

```text
588 ≠ guaranteed current August 2026 count
```

The transparency page does not say that 588 is the exact August 2026 inventory.

Therefore store:

```text
count:
    588

count_as_of:
    2025-07

count_status:
    authoritative historical/currently published count
```

and do not silently turn it into a 2026 count.

---

### 26. ALPR geographic coverage

The program had at least one ALPR site in:

```text
21 legislatively named counties
```

as of July 2025. ([Illinois State Police][1])

IDOT's own page lists the counties involved in expansion:

* Boone
* Bureau
* Champaign
* DeKalb
* DuPage
* Grundy
* Henry
* Kane
* Kendall
* Lake
* LaSalle
* Macon
* Madison
* McHenry
* Morgan
* Peoria
* Rock Island
* Sangamon
* St. Clair
* Will
* Winnebago

plus Cook County, where the program was already operating. ([IDOT][18])

That gives us **22 names when Cook is included in the documented expansion/operation history**, so the state documentation needs to be treated carefully: the 21-count refers to the legislatively named counties in the statewide deployment context, while Cook was the original operating county.

---

### 27. Illinois ALPR vendor

ISP says that on June 28, 2024 it executed a contract with **Motorola Solutions**, which became the primary ALPR vendor.

The contract expires:

```text
December 15, 2027
```

([Illinois State Police][1])

The current platform is:

```text
Motorola Solutions
Vehicle Manager
```

---

### 28. Illinois ALPR data structure

ISP's transparency page says ALPR reads consist of:

* digital images
* license plates
* vehicles
* date
* time
* GPS coordinates

and associated vehicle-image metadata. ([Illinois State Police][1])

This is exactly the canonical model we need:

```text
ALPR_OBSERVATION

plate_text
plate_image
vehicle_image
timestamp
latitude
longitude
camera_id
```

with appropriate restrictions.

---

### 29. Illinois ALPR retention

ISP currently states:

```text
ALPR read retention:
    90 days
```

The information is maintained in the Motorola Vehicle Manager storage platform. ([Illinois State Police][1])

#### Canonical record

```text
IL-ISP-ALPR

retention:
    90 days
```

---

### 30. Illinois ALPR public access

This is a hard boundary.

ISP says:

> ALPR information shall not be disseminated to the public except as authorized or required by law.

It also states that ALPR system data and historical ALPR system data are **not subject to disclosure under FOIA**. ([Illinois State Police][1])

Therefore:

```text
public ALPR camera locations:
    🟡 partial / indirect

public ALPR statistics:
    🟢

public ALPR annual reports:
    🟢

public individual plate reads:
    🔴

public historical plate database:
    🔴

public live ALPR API:
    🔴
```

---

### 31. Illinois ALPR statistics dashboard

This is an important **public derivative data source**.

The ISP transparency page provides:

```text
ALPR Statistics Dashboard
FY 2026 ALPR Annual Report
FY 2025 ALPR Annual Report
FY 2024 ALPR Annual Report
FY 2023 ALPR Annual Report
FY 2022 ALPR Annual Report
```

([Illinois State Police][1])

This should be ingested as:

```text
IL-ISP-ALPR-STATISTICS
```

rather than attempting to obtain restricted plate reads.

---

### 32. Illinois ALPR audit information

Illinois is unusual because the Secretary of State has actually audited ALPR sharing.

In August 2025, the Secretary of State reported that **Flock Safety** had allowed U.S. Customs and Border Protection to access Illinois license-plate camera data, and ordered access shut off. ([Illinois Secretary of State][19])

In September 2025, the office reported another case involving the **Forest Park Police Department** and Motorola Solutions ALPR technology, again involving CBP access that was subsequently shut off. ([Illinois Secretary of State][20])

These are extremely valuable for the national database because they establish **vendor/network relationships**.

---

### 33. Illinois ALPR legal framework

Illinois Vehicle Code **625 ILCS 5/2-130** defines:

* ALPR
* ALPR information
* ALPR systems
* ALPR users

and specifically recognizes multi-agency/vendor ALPR-sharing systems. ([Illinois General Assembly][21])

The law also restricts certain interstate sharing.

This is important because Illinois has explicitly defined:

```text
ALPR SYSTEM
```

as potentially involving:

```text
multi-agency agreements
+
vendor agreements
+
shared ALPR information
```

---

### 34. Illinois State Police ALPR directive

ISP's official directive states that the ALPR/LEARN system:

* captures plate images
* converts them into alphanumeric characters
* compares plates against lists of vehicles of interest
* provides alerts
* supports searches
* supports mapping/analytics

and that the ALPR cameras are **fixed**. ([Illinois State Police][22])

This is useful because we can classify the statewide ISP system as:

```text
deployment:
    FIXED

system:
    ALPR/LEARN

current platform:
    Motorola Vehicle Manager
```

---

### 35. Illinois local ALPR ecosystem

The statewide system is only part of Illinois' ALPR footprint.

The Illinois Secretary of State's 2025 audits demonstrate local/private systems including:

```text
Flock Safety
Motorola Solutions
Forest Park Police Department
```

([Illinois Secretary of State][19])

And the state statute explicitly recognizes ALPR systems involving vendors and multiple agencies. ([Illinois General Assembly][21])

Therefore Illinois should **not** be represented as having only 588 ALPR cameras.

Correct interpretation:

```text
588:
    statewide ISP/IDOT program

additional local/vendor ALPR:
    exists

complete statewide ALPR count:
    UNKNOWN
```

---

### 36. Illinois public-safety radio

Illinois is enormous on the scanner side.

Current Broadcastify data lists:

```text
449 total audio feeds
100 counties
252 public-safety feeds
```

([Broadcastify][23])

That is one of the largest state radio datasets encountered so far.

---

### 37. Illinois scanner coverage

Broadcastify currently shows feeds from numerous counties including:

* Cook
* DuPage
* Lake
* Will
* Kane
* McHenry
* Peoria
* Sangamon
* Madison
* St. Clair
* Winnebago
* Rock Island
* Tazewell
* Champaign
* many others

([Broadcastify][23])

#### Source object

```text
IL-BROADCASTIFY

type:
    PUBLIC_SAFETY_AUDIO

feeds:
    449

counties:
    100

public-safety:
    252
```

---

### 38. Illinois official radio network

Illinois State Police maintains a statewide radio infrastructure.

The ISP Radio Network Services Bureau says its **Illinois State Police Emergency Radio Network (ISPERN)** provides wide-area radio dissemination of criminal and traffic-offense information to multiple law-enforcement agencies.

ISPERN control points include:

* ISP dispatch centers
* Cook County Sheriff's Police
* Lake County Sheriff's Department
* Chicago Police Department

([Illinois State Police][24])

This confirms a large statewide interoperable law-enforcement radio network.

---

### 39. Public ISPERN live stream

I did **not** find an official ISP public API/live stream for ISPERN.

Therefore:

```text
ISPERN infrastructure:
    🟢

public radio network:
    🟢

official public streaming API:
    🔴 not found

third-party scanner feeds:
    🟢
```

Do not fabricate an ISPERN stream endpoint.

---

### 40. Illinois CAD — important public source

Illinois has at least some actual public CAD-derived data.

The Illinois Open Data portal hosts:

#### Winnebago County 72-Hour Dispatch Call Log

The dataset states that it contains continuing dispatched **Calls for Service (CFS)** for the previous 72 hours.

It explicitly says:

> All CFS data is obtained from the Police/911 Computer Aided Dispatch (CAD) system.

([Tyler Data & Insights][25])

This is an extremely valuable discovery.

---

### 41. Winnebago CAD source

```text
IL-WINNEBAGO-CAD-72H

organization:
    Winnebago County Sheriff's Office

source:
    Police/911 CAD

public:
    🟢

window:
    previous 72 hours

refresh:
    hourly

sensitive incidents:
    suppressed
```

The dataset excludes certain sensitive call types, including primarily:

* sexual
* domestic
* sensitive juvenile

calls. ([Tyler Data & Insights][25])

---

### 42. Illinois statewide CAD status

I did **not** find a single statewide public live CAD API.

But Illinois has multiple regional systems.

For example, Lake County PASSAGE receives incident information from:

* police CAD
* emergency communications
* Illinois State Police
* Illinois Tollway
* municipal dispatch

and distributes derived incident information publicly. ([CMAP ITS Architecture][15])

Therefore:

```text
statewide public CAD API:
    🔴

regional public CAD-derived data:
    🟢

county-level public CAD:
    🟢 at least Winnebago
```

---

### 43. Illinois State Police public crime data

ISP also provides **Crime in Illinois Online**.

The public system includes:

* crime rates
* county information
* offense types
* trends
* pinpoint crime mapping
* data tables
* downloadable crime reports

and is continuously updated from the Illinois NIBRS repository. ([Illinois State Police][26])

#### Source

```text
IL-ISP-IUCR-NIBRS
```

This isn't CAD, but it is a major public safety dataset.

---

### 44. ISP officer-involved investigation dashboard

ISP also operates a public dashboard covering officer-involved investigations.

It includes:

* local-agency officer-involved investigations handled by ISP
* ISP officer-involved investigations
* officer-involved deaths
* officer-involved shootings
* certain bias-based policing investigations

([Illinois State Police][27])

#### Source

```text
IL-ISP-OIS-OID

type:
    PUBLIC_SAFETY_INCIDENTS

official:
    true

public:
    true
```

---

### 45. Illinois automated enforcement beyond ALPR

IDOT identifies several automated-camera enforcement systems:

```text
photo speed enforcement
red-light running enforcement
railroad crossing gate enforcement
school-bus arm enforcement
```

([IDOT][28])

This is distinct from ALPR.

Our database should therefore distinguish:

```text
ALPR
RED_LIGHT_ENFORCEMENT
SPEED_ENFORCEMENT
RAIL_CROSSING_ENFORCEMENT
SCHOOL_BUS_ENFORCEMENT
TRAFFIC_MONITORING
VIDEO_DETECTION
```

---

### 46. Illinois road/weather/traffic sensors

Illinois' ITS architecture identifies extensive use of:

* loop detectors
* microwave radar
* infrared
* ultrasonic
* acoustic
* video image processing

for traffic detection. ([Travel Midwest][4])

These should not automatically become camera records.

They belong under:

```text
TRAFFIC_SENSOR
```

unless the underlying device is confirmed as a camera.

---

### 47. Illinois Highway Advisory Radio

Lake County PASSAGE operates:

```text
PASSAGE HAR
1620 AM
```

as part of its public traffic-information system. ([CMAP ITS Architecture][15])

This is a useful public transportation-radio source.

Classification:

```text
IL-LAKE-PASSAGE-HAR

type:
    HIGHWAY_ADVISORY_RADIO

frequency:
    1620 AM
```

---

### 48. Illinois public camera/source hierarchy

Illinois is complex enough that we should **not create one Illinois camera feed**.

Instead:

```text
TIER A — STATE
    IDOT Gateway
    IDOT CCTV
    Illinois Tollway/TIMS

TIER A — LOCAL
    Chicago CDOT
    Lake County PASSAGE

TIER B
    regional Gateway integrations
    county TMCs

TIER C
    third-party camera aggregators

TIER D
    community camera maps
```

This preserves actual ownership.

---

### 49. Exact Illinois source registry

| Source ID              | Organization          | Source                     | Type                       | Status |
| ---------------------- | --------------------- | -------------------------- | -------------------------- | ------ |
| `IL-IDOT-GATEWAY`      | IDOT                  | Gateway / Travel Midwest   | Traffic data               | 🟢     |
| `IL-IDOT-GATEWAY-XML`  | IDOT                  | Gateway XML                | Raw traffic                | 🟢     |
| `IL-IDOT-GATEWAY-CAM`  | IDOT                  | Gateway camera JPEG        | Camera                     | 🟢     |
| `IL-IDOT-CCTV`         | IDOT                  | Expressway CCTV            | Camera                     | 🟢     |
| `IL-CHI-SPEED-CAM`     | Chicago               | Speed Camera Locations     | Enforcement camera         | 🟢     |
| `IL-CHI-REDLIGHT-CAM`  | Chicago               | Red Light Camera Locations | Enforcement camera         | 🟡     |
| `IL-CHI-SPEED-VIOL`    | Chicago               | Speed Camera Violations    | Camera observations        | 🟢     |
| `IL-CHI-RED-VIOL`      | Chicago               | Red Light Violations       | Camera observations        | 🟢     |
| `IL-CHI-ADT`           | Chicago               | Average Daily Traffic      | Camera-derived sensor data | 🟢     |
| `IL-LAKE-PASSAGE-CCTV` | Lake County           | PASSAGE                    | Camera                     | 🟢     |
| `IL-LAKE-PASSAGE-INC`  | Lake County           | PASSAGE incidents          | CAD-derived                | 🟢     |
| `IL-LAKE-PASSAGE-HAR`  | Lake County           | PASSAGE HAR                | Radio                      | 🟢     |
| `IL-ISP-ALPR`          | Illinois State Police | Statewide ALPR             | ALPR                       | 🟢     |
| `IL-ISP-ALPR-STATS`    | ISP                   | ALPR Statistics            | ALPR statistics            | 🟢     |
| `IL-ISP-ALPR-REPORTS`  | ISP                   | Annual Reports             | ALPR statistics            | 🟢     |
| `IL-WINNEBAGO-CAD`     | Winnebago Sheriff     | 72-hour CFS                | CAD                        | 🟢     |
| `IL-ISP-NIBRS`         | ISP                   | Crime in Illinois          | Crime                      | 🟢     |
| `IL-ISP-OIS`           | ISP                   | OIS/OID dashboard          | Police incidents           | 🟢     |
| `IL-BROADCASTIFY`      | Third party           | Scanner feeds              | Radio                      | 🟢     |

---

### 50. Exact statewide ALPR record

```text
SOURCE_ID:
    IL-ISP-ALPR

organization:
    Illinois State Police

funding/procurement:
    Illinois Department of Transportation

program:
    Tamara Clayton Expressway Camera Act

vendor:
    Motorola Solutions

platform:
    Vehicle Manager

deployment:
    fixed

published_camera_count:
    588

count_date:
    July 2025

coverage:
    at least 21 legislatively named counties

retention:
    90 days

public_reads:
    false

public_statistics:
    true

public_annual_reports:
    true

FOIA:
    ALPR system data exempt

status:
    OFFICIAL
```

([Illinois State Police][1])

---

### 51. Exact Gateway record

```text
SOURCE_ID:
    IL-IDOT-GATEWAY

organization:
    Illinois Department of Transportation

system:
    Gateway Traveler Information System

public_interface:
    Travel Midwest

data:
    camera images
    travel times
    congestion
    incidents
    construction
    lane closures
    DMS
    weather

camera_format:
    JPEG

raw_data:
    XML

access:
    registration required

refresh policy:
    approximately 5 minutes

attribution:
    required

status:
    OFFICIAL
```

([Travel Midwest][2])

---

### 52. Exact Chicago speed-camera record

```text
SOURCE_ID:
    IL-CHI-SPEED-CAM

organization:
    City of Chicago

dataset:
    Speed Camera Locations

dataset_id:
    4i42-qv3h

data:
    location
    operational date
    monitored approach

formats:
    JSON
    XML
    CSV
    KMZ
    GeoJSON

last_verified:
    2026-08-25

public:
    true
```

([Chicago Data Portal][9])

---

### 53. Exact Lake County PASSAGE record

```text
SOURCE_ID:
    IL-LAKE-PASSAGE

organization:
    Lake County Division of Transportation

system:
    PASSAGE

camera_inventory:
    400+ PTZ traffic-monitoring cameras
    600+ video-detection cameras

traffic_signals:
    610+

public_camera_snapshots:
    true

traffic_incidents:
    true

CAD integration:
    true

HAR:
    1620 AM

public_website:
    lakecountypassage.com

status:
    OFFICIAL
```

([CMAP ITS Architecture][15])

---

### 54. Illinois source quality ranking

#### 🥇 Illinois State Police statewide ALPR

**10/10**

This is one of the best ALPR sources found in the entire project.

Why:

* official state agency
* current transparency page
* exact published camera count
* geographic coverage
* vendor
* platform
* retention
* annual reports
* statistics
* legal restrictions

---

#### 🥇 IDOT Gateway

**10/10**

Also top-tier.

Why:

* official state transportation system
* raw XML
* camera images
* incidents
* DMS
* construction
* weather
* established external interface
* explicit reuse policy

---

#### 🥇 Lake County PASSAGE

**9.5/10**

Exceptional regional source.

Why:

* 400+ PTZ cameras
* 600+ video-detection cameras
* public snapshots
* CAD integration
* public incident system
* public HAR
* regional data distribution

---

#### 🥈 Chicago Open Data

**9/10**

Excellent machine-readable infrastructure, especially:

* speed cameras
* red-light cameras
* violations
* traffic counts

But individual datasets vary in provenance.

---

#### 🥈 Winnebago CAD

**9/10**

Excellent example of actual public CAD-derived data.

---

#### 🥉 Broadcastify

**8/10**

Huge public scanner footprint, but third-party.

---

### 55. What Illinois does NOT provide publicly

After checking the state-level sources, I would mark:

```text
🔴 statewide public ALPR plate-read API
🔴 statewide public historical ALPR read database
🔴 statewide live police CAD API
🔴 statewide live EMS CAD API
🔴 official public ISPERN streaming API
🔴 complete statewide physical ALPR inventory
🔴 universal public live feed for every IDOT CCTV camera
```

That is important.

Illinois has **massive surveillance infrastructure**, but public access is selective.

---

### 56. Illinois is a special case for the national database

Illinois should not be modeled as:

```text
STATE
 └── one camera API
```

It should be modeled as:

```text
ILLINOIS
│
├── STATE
│   ├── IDOT
│   │   ├── Gateway
│   │   ├── CCTV
│   │   └── ITS
│   │
│   └── ISP
│       ├── ALPR
│       ├── ISPERN
│       ├── NIBRS
│       └── OIS/OID
│
├── TOLLWAY
│   └── TIMS / cameras / traffic data
│
├── CHICAGO
│   ├── CDOT
│   ├── speed cameras
│   ├── red-light cameras
│   └── traffic-count cameras
│
├── LAKE COUNTY
│   └── PASSAGE
│       ├── PTZ cameras
│       ├── video detection
│       ├── CAD integration
│       ├── incidents
│       └── HAR
│
├── WINNEBAGO COUNTY
│   └── public CAD/CFS
│
└── THIRD PARTY
    └── Broadcastify
```

That is the correct architecture.

---

### 57. Final Illinois classification

| Category                                      | Illinois                                |
| --------------------------------------------- | --------------------------------------- |
| Official statewide traffic-information system | 🟢 **YES**                              |
| Official public camera images                 | 🟢                                      |
| Official raw XML traffic data                 | 🟢                                      |
| Official anonymous camera REST API            | 🔴                                      |
| Gateway registration/raw access               | 🟢                                      |
| IDOT CCTV network                             | 🟢                                      |
| Chicago traffic cameras                       | 🟢                                      |
| Chicago speed-camera inventory                | 🟢                                      |
| Chicago red-light inventory                   | 🟡                                      |
| Chicago camera violation data                 | 🟢                                      |
| Chicago camera-derived traffic counts         | 🟢                                      |
| Lake County PASSAGE cameras                   | 🟢 **1,000+ documented camera devices** |
| Lake County public snapshots                  | 🟢                                      |
| Lake County CAD-derived incidents             | 🟢                                      |
| Illinois Tollway traffic imagery              | 🟢                                      |
| Statewide ISP ALPR                            | 🟢 **588 published cameras**            |
| ALPR statistics                               | 🟢                                      |
| ALPR annual reports                           | 🟢                                      |
| Public individual ALPR reads                  | 🔴                                      |
| Public statewide ALPR API                     | 🔴                                      |
| Public county CAD                             | 🟢                                      |
| Public statewide CAD                          | 🔴                                      |
| ISPERN radio infrastructure                   | 🟢                                      |
| Official ISPERN public stream                 | 🔴                                      |
| Public scanner feeds                          | 🟢 **449 feeds**                        |
| Public crime database                         | 🟢                                      |
| Public OIS/OID dashboard                      | 🟢                                      |

---

### 58. Bottom line

**Illinois is currently one of the highest-value states in the entire 50-state research project.**

The most important exact sources are:

1. **IDOT Gateway / Travel Midwest** — official camera images + XML traffic data. ([Travel Midwest][2])
2. **Illinois State Police statewide ALPR program** — **588 cameras**, 21+ legislatively named counties, Motorola Vehicle Manager. ([Illinois State Police][1])
3. **Lake County PASSAGE** — 400+ PTZ cameras + 600+ video-detection cameras, public snapshots, CAD integration. ([CMAP ITS Architecture][15])
4. **Chicago Speed Camera Locations** — current public GeoJSON/JSON/XML/CSV/KMZ source. ([Data.gov][10])
5. **Chicago Red Light Camera Locations** — current public machine-readable location source, with provenance caveat. ([Data.gov][11])
6. **Chicago camera-derived traffic counts** — data from **800+ traffic/speed-enforcement cameras**. ([Data.gov][14])
7. **Winnebago County CAD** — actual public 72-hour CAD-derived dispatch data. ([Tyler Data & Insights][25])
8. **ISP Crime in Illinois / NIBRS** — statewide public crime database. ([Illinois State Police][26])
9. **ISP OIS/OID dashboard** — public police-investigation data. ([Illinois State Police][27])
10. **Broadcastify** — **449 Illinois audio feeds across all 100 counties**, including 252 public-safety feeds. ([Broadcastify][23])

**Illinois should be tagged `HIGH_PRIORITY` in the national source registry.**

**Next alphabetically: Indiana.**

[1]: https://web-akamai.isp.illinois.gov/CriminalInvestigations/TransparencyPage?utm_source=chatgpt.com "Automated License Plate Trader - Transparency Page - Division of Criminal Investigation"
[2]: https://travelmidwest.com/About/InfoReusePolicy?utm_source=chatgpt.com "Travel Midwest"
[3]: https://travelmidwest.com/About/RegistrationForm?utm_source=chatgpt.com "Travel Midwest"
[4]: https://travelmidwest.com/Help/FAQs?utm_source=chatgpt.com "Travel Midwest"
[5]: https://its.cmap.illinois.gov/inventory.htm?utm_source=chatgpt.com "CMAP ITS Architecture v4.0 - Inventory"
[6]: https://travelmidwest.com/Reports/CameraReport?location=GATEWAY.IL&utm_source=chatgpt.com "Travel Midwest"
[7]: https://its.cmap.illinois.gov/projects.htm?utm_source=chatgpt.com "CMAP ITS Architecture v4.0 - Projects"
[8]: https://data.cityofchicago.org/Transportation/Red-Light-Camera-Locations/fz3s-u3xt/about?utm_source=chatgpt.com "About Red Light Camera Locations | City of Chicago | Data Portal"
[9]: https://data.cityofchicago.org/Transportation/Map-Speed-Camera-Locations/7ajp-yjhe/about?utm_source=chatgpt.com "About Map - Speed Camera Locations | City of Chicago | Data Portal"
[10]: https://catalog.data.gov/dataset/speed-camera-locations?utm_source=chatgpt.com "City of Chicago - Speed Camera Locations"
[11]: https://catalog.data.gov/dataset/red-light-camera-locations?utm_source=chatgpt.com "City of Chicago - Red Light Camera Locations"
[12]: https://dev.socrata.com/foundry/data.cityofchicago.org/hhkd-xvj4?utm_source=chatgpt.com "Speed Camera Violations | Socrata API Foundry"
[13]: https://data.cityofchicago.org/stories/s/Red-Light-Speed-Camera-Violations-3-10-2025-Resolv/uqi3-8a7k/?utm_source=chatgpt.com "Red Light & Speed Camera Violations - 3/10/2025 - Resolved | City of Chicago | Data Portal"
[14]: https://catalog.data.gov/dataset/average-daily-traffic-counts?utm_source=chatgpt.com "City of Chicago - Average Daily Traffic Counts"
[15]: https://its.cmap.illinois.gov/html/proj/pr12.htm?utm_source=chatgpt.com "CMAP ITS Architecture v4.0 - Lake County PASSAGE"
[16]: https://lakecounty.legistar.com/gateway.aspx?id=25871&m=l&utm_source=chatgpt.com "Lake County Illinois - File #: 22-0090"
[17]: https://its.cmap.illinois.gov/html/req/fun19.htm?utm_source=chatgpt.com "CMAP ITS Architecture v4.0 - Roadway Basic Surveillance Functional Area"
[18]: https://idot.illinois.gov/programs-and-projects/safety-programs/highway-safety.html?utm_source=chatgpt.com "Highway Safety"
[19]: https://www.ilsos.gov/news/2025/august-25-2025-giannoulias-audit-finds-license-plate-reader-company-in-violation-of-state-law.html?utm_source=chatgpt.com "Giannoulias’ Audit Finds License Plate Reader Company in Violation of State Law"
[20]: https://www.ilsos.gov/news/2025/september-5-2025-giannoulias-audit-uncovers-forest-park-police-department-sharing-license-plate-reader-data.html?utm_source=chatgpt.com "Giannoulias’ Audit Uncovers Forest Park Police Department Sharing License Plate Reader Data with Customs and Border Protection a Violation of State Law"
[21]: https://www.ilga.gov/documents/legislation/ilcs/documents/062500050K2-130.htm?utm_source=chatgpt.com "625 ILCS 5/2-130"
[22]: https://isp.illinois.gov/StaticFiles/docs/DII/ALPR%20Illinois%20State%20Police%20Directive.pdf?utm_source=chatgpt.com "ILLINOIS STATE POLICE DIRECTIVE"
[23]: https://status.broadcastify.com/listen/stid/17?utm_source=chatgpt.com "Illinois Audio Feeds"
[24]: https://web-akamai.isp.illinois.gov/Statewide911Division/Radio?utm_source=chatgpt.com "Radio Network Services Bureau - Radio Network Services"
[25]: https://data.illinois.gov/d/i96m-iu3n/visualization?utm_source=chatgpt.com "| Illinois Open Data"
[26]: https://isp.illinois.gov/Media/PressReleaseFile/825?utm_source=chatgpt.com "FOR IMMEDIATE RELEASE"
[27]: https://isp.illinois.gov/PoliceAccountability?utm_source=chatgpt.com "Police Accountability - Officer-Involved Investigations Dashboard"
[28]: https://idot.illinois.gov/transportation-system/transportation-safety/vehicle-inspections.html?utm_source=chatgpt.com "Vehicle Compliance"
