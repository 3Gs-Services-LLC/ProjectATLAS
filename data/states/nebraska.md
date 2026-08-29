---
state: Nebraska
usps: NE
slug: nebraska
dossier_number: 27
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
  imported_from: project_atlas_state_data/Nebraska.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Nebraska (NE) - ATLAS State Record

> Dossier **27 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Nebraska is **one of the stronger states we've encountered so far** for this project.

The major discovery is that Nebraska does **not** merely publish a 511 webpage. NDOT has a public **ArcGIS FeatureServer specifically named `HighwayCamerasDOT`**, with a camera feature layer, geographic coordinates, camera identifiers, equipment information, deployment/retirement fields, status, and—critically—`PhotoURL`, `IRISID`, and `SiteView` fields. ([GISCAT][1])

Nebraska is also unusually good for ALPR research because the Nebraska Crime Commission maintains a centralized public repository of agency ALPR reports, including **2026 reports from multiple agencies**. ([Nebraska Crime Commission][2])

---

### 1. Nebraska Department of Transportation — NDOT

The primary state transportation authority is:

**Nebraska Department of Transportation (NDOT)**

NDOT's current travel portal explicitly provides:

* real-time alerts
* live cameras
* travel times
* bridge restrictions
* road restrictions
* highway cameras
* Lincoln traffic cameras
* Omaha traffic cameras
* construction/detours. ([Nebraska Department of Transportation][3])

#### Registry

```text
SOURCE_ID:
    NE-NDOT

OWNER:
    Nebraska Department of Transportation

TYPE:
    STATE_TRANSPORTATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. Nebraska 511

Nebraska 511 is NDOT's official traveler-information system.

The current official app description confirms that it provides statewide real-time:

```text
CLOSURES
CRASHES
ROADWORK
WINTER ROAD CONDITIONS
TRAFFIC SPEEDS
ROADSIDE CAMERA IMAGES
PLOW TRACKER
COMMERCIAL VEHICLE RESTRICTIONS
WAZE EVENTS
```

([Google Play][4])

#### Registry

```text
SOURCE_ID:
    NE-NDOT-511

TYPE:
    STATE_511_SYSTEM

STATUS:
    🟢 VERIFIED
```

---

### 3. NDOT Highway Camera FeatureServer — MAJOR DISCOVERY

This is the most important Nebraska source.

NDOT maintains:

```text
HighwayCamerasDOT
```

as a public ArcGIS FeatureServer. ([GISCAT][5])

The service contains:

```text
Layer 0:
    OP Cameras CAT
```

and is explicitly described as:

> NDOT Cameras placed along highways and interstates. ([GISCAT][6])

#### Exact endpoint

[NDOT HighwayCamerasDOT FeatureServer](https://giscat.ne.gov/dot/rest/services/HighwayCamerasDOT/FeatureServer?utm_source=chatgpt.com)

This is a **confirmed machine-readable source**.

```text
SOURCE_ID:
    NE-NDOT-HIGHWAY-CAMERAS

TYPE:
    ARCGIS_FEATURESERVER

LAYER:
    0 / OP Cameras CAT

OWNER:
    Nebraska Department of Transportation

STATUS:
    🟢 VERIFIED — HIGH VALUE
```

---

### 4. Camera layer

The actual layer is:

[OP Cameras CAT — Layer 0](https://giscat.ne.gov/dot/rest/services/HighwayCamerasDOT/FeatureServer/0?utm_source=chatgpt.com)

It is a point feature layer with JSON, GeoJSON and PBF query support. ([GISCAT][7])

That makes it ideal for ATLAS ingestion.

```text
GEOMETRY:
    Point

SPATIAL_REFERENCE:
    EPSG 3857 / Web Mercator

QUERY:
    JSON
    GeoJSON
    PBF

MAX_RECORD_COUNT:
    2000

PAGINATION:
    Supported
```

([GISCAT][7])

---

### 5. Camera fields

This is where Nebraska gets particularly valuable.

The camera layer exposes:

```text
OBJECTID
name
city
route
rp
refpost_rounded
lanes
position
location
brand
model
project
deployed
serviced
retired
notes
NetworksID
Structure
Status
ProgramYear
IRISID
District
SiteView
DistHwyRef
PhotoURL
ElectronicTechnicianArea
OCIOSupportRegion
```

([GISCAT][1])

That is **far more useful than a simple camera-name list**.

---

### 6. `PhotoURL`

This is especially important.

The layer contains:

```text
PhotoURL
```

with a field length of 455 characters. ([GISCAT][7])

Therefore the Nebraska source potentially provides the actual camera image URL directly in the authoritative GIS record.

#### Registry

```text
NE-NDOT-CAMERA-PHOTOS

TYPE:
    CAMERA_IMAGE_REFERENCE

FIELD:
    PhotoURL

STATUS:
    🟢 VERIFIED FIELD
```

This is exactly what we want.

We don't need to guess camera URL construction if the record itself supplies it.

---

### 7. `IRISID`

The camera layer also contains:

```text
IRISID
```

with a 255-character field. ([GISCAT][7])

This is likely an NDOT internal/ITS identifier and is extremely valuable for deduplication.

Canonical mapping:

```text
source_camera_id:
    IRISID

source_record_id:
    OBJECTID

display_name:
    name
```

Do **not** discard `IRISID`.

---

### 8. `SiteView`

The layer exposes:

```text
SiteView
```

as an integer field. ([GISCAT][7])

That suggests the camera system can distinguish a site from a particular view.

For ATLAS:

```text
SITE
 ├── CAMERA
 │
 ├── VIEW 1
 ├── VIEW 2
 └── VIEW N
```

This is especially important for PTZ/multi-view cameras.

---

### 9. Camera equipment information

NDOT exposes:

```text
brand
model
```

directly in the public layer. ([GISCAT][1])

That means the registry can potentially contain:

```text
CAMERA
    manufacturer
    model
    deployment_date
    service_date
    retirement_date
    status
```

This is unusually good provenance data.

---

### 10. Camera lifecycle

The layer has:

```text
deployed
serviced
retired
```

fields. ([GISCAT][1])

Therefore ATLAS can distinguish:

```text
ACTIVE
RETIRED
NOT_YET_DEPLOYED
```

instead of assuming every GIS point is currently operational.

That is a major advantage.

---

### 11. Camera status

There is also:

```text
Status
```

field. ([GISCAT][1])

Therefore ingestion should preserve both:

```text
source_status
```

and:

```text
computed_operational_status
```

Don't overwrite the agency's original status.

---

### 12. Camera coordinates

The layer is a point feature layer and supports geometry queries. ([GISCAT][7])

The service uses:

```text
WKID:
    102100

Latest VCS:
    3857
```

([GISCAT][7])

ATLAS should normalize this to:

```text
latitude
longitude
```

while retaining:

```text
source_geometry
source_spatial_reference
```

for provenance.

---

### 13. NDOT camera inventory is authoritative

The service copyright explicitly identifies:

```text
Nebraska Department of Transportation
```

and its description says the cameras are NDOT cameras along highways and interstates. ([GISCAT][6])

Therefore:

```text
CONFIDENCE:
    HIGH

SOURCE_AUTHORITY:
    OWNER

SOURCE_TYPE:
    FIRST_PARTY
```

This should outrank community camera maps.

---

### 14. Camera image policy

NDOT's official camera policy is extremely important.

NDOT states that its cameras/images and similar ITS devices are primarily for transportation purposes. It also states:

> Camera images are not archived.

([Nebraska DOT][8])

Therefore the source should be classified:

```text
VIDEO:
    LIVE/PRESENTATION SOURCE

ARCHIVE:
    NOT PROVIDED BY NDOT

RETENTION:
    NOT ARCHIVED
```

That is an important legal/technical distinction.

---

### 15. Nebraska highway camera → canonical ATLAS object

The mapping should look like:

```text
NDOT FeatureServer
        │
        ▼
OP Cameras CAT
        │
        ├── OBJECTID
        ├── IRISID
        ├── name
        ├── city
        ├── route
        ├── coordinates
        ├── PhotoURL
        ├── SiteView
        ├── brand
        ├── model
        ├── Status
        ├── deployed
        ├── serviced
        └── retired
                │
                ▼
        CANONICAL CAMERA
```

---

### 16. Exact camera query interface

The FeatureServer supports:

```text
Query
Query Analytic
Return Updates
Metadata
```

and other ArcGIS operations. ([GISCAT][7])

It also supports:

```text
JSON
GeoJSON
PBF
```

for the layer. ([GISCAT][7])

This means we don't need HTML scraping.

#### Preferred ingestion

```text
GET
    ArcGIS FeatureServer /0

QUERY
    where=1=1

OUT_FIELDS
    *

RETURN_GEOMETRY
    true

OUT_SR
    4326

F:
    geojson
```

The exact query should be tested against the live endpoint before implementation.

---

### 17. NDOT GIS catalog

Nebraska maintains the public:

```text
giscat.ne.gov
```

GIS infrastructure.

The camera service is part of NDOT's public GIS catalog. ([GISCAT][5])

#### Registry

```text
SOURCE_ID:
    NE-NDOT-GISCAT

TYPE:
    PUBLIC_ARCGIS_CATALOG

STATUS:
    🟢 VERIFIED
```

This should become a **discovery source**, not merely a camera source.

---

### 18. Nebraska 511 camera images

The official Nebraska 511 app explicitly says it provides:

> Roadside camera images

([Google Play][4])

The existence of `PhotoURL` in the NDOT camera FeatureServer gives us a much better route than attempting to reverse-engineer the mobile app.

#### Priority:

```text
FeatureServer
    ↓
PhotoURL
    ↓
camera image
```

rather than:

```text
511 webpage
    ↓
browser scraping
```

---

### 19. Lincoln traffic cameras

Nebraska has a second major public camera system:

**City of Lincoln Traffic Engineering**

Lincoln says it receives feeds from CCTV cameras throughout the city and makes those feeds available to:

* the public
* media
* other agencies
* Lincoln Police Department
* other city departments. ([City of Lincoln][9])

#### Registry

```text
SOURCE_ID:
    NE-LINCOLN-TRAFFIC-CCTV

TYPE:
    MUNICIPAL_TRAFFIC_CCTV

OWNER:
    City of Lincoln

STATUS:
    🟢 VERIFIED
```

---

### 20. Lincoln CCTV scale

Lincoln's traffic-management documentation describes **more than 60 PTZ CCTV cameras** at major intersections and strategic locations. ([City of Lincoln][10])

The cameras are IP-addressable and connected to the Traffic Management Center. ([City of Lincoln][10])

This is a significant municipal network.

```text
CAMERA_TYPE:
    PTZ CCTV

COUNT:
    60+

CONNECTIVITY:
    IP

CONTROL:
    Traffic Management Center
```

---

### 21. Lincoln traffic camera functions

Lincoln states the cameras are used for:

* traffic conditions
* special events
* severe weather
* crashes
* construction
* traffic management. ([City of Lincoln][9])

They are **not red-light enforcement cameras**. Lincoln explicitly says red-light-running enforcement is prohibited by state statute. ([City of Lincoln][9])

---

### 22. Lincoln public camera availability

The city's FAQ says camera feeds are made available to the public. ([City of Lincoln][9])

Therefore:

```text
NE-LINCOLN-TRAFFIC-CCTV
    PUBLIC_VIEW:
        YES

    LIVE:
        YES

    PTZ:
        YES / SOME

    LAW_ENFORCEMENT_ACCESS:
        YES
```

---

### 23. Lincoln public-safety cameras

This is separate from Lincoln's transportation CCTV.

Lincoln Police Department maintains a **Public Safety Camera** program.

The department's page identifies current public-safety camera locations and policies. ([City of Lincoln][11])

#### Registry

```text
SOURCE_ID:
    NE-LINCOLN-PUBLIC-SAFETY-CAMERAS

TYPE:
    MUNICIPAL_PUBLIC_SAFETY_CCTV

OWNER:
    Lincoln Police Department

STATUS:
    🟢 VERIFIED
```

---

### 24. Lincoln public-safety camera limitation

The public-safety camera page currently exposes only limited location information publicly.

It states that live/recorded access is restricted to authorized users. ([City of Lincoln][11])

So:

```text
CAMERA_LOCATION:
    PUBLIC

CAMERA_FEED:
    NOT PUBLIC

AUTHORIZED_ACCESS:
    LAW ENFORCEMENT
```

This is a different class from the Lincoln traffic cameras.

---

### 25. Lincoln camera retention

Lincoln's public-safety camera policy states recordings are overwritten after:

### **5 days**

unless retained for an investigation, complaint, or likely legal evidence. ([City of Lincoln][11])

That should be stored as:

```text
RETENTION_POLICY:
    5 DAYS DEFAULT
```

---

### 26. Omaha traffic cameras

NDOT's travel page specifically provides:

```text
Lincoln Traffic Camera
Omaha Traffic Camera
```

as additional transportation resources. ([Nebraska Department of Transportation][3])

Therefore Omaha needs its own municipal-source research in addition to NDOT.

---

### 27. Omaha community camera registry

Omaha Police Department operates a **Community Camera Registry**.

It is designed to map privately owned security cameras so investigators can identify nearby cameras and request footage. ([Connect Omaha][12])

#### Registry

```text
SOURCE_ID:
    NE-OMAHA-COMMUNITY-CAMERA-REGISTRY

TYPE:
    PRIVATE_CAMERA_REGISTRY

OWNER:
    Omaha Police Department

STATUS:
    🟢 VERIFIED
```

---

### 28. Omaha registry does NOT provide public video

This distinction is critical.

Omaha explicitly states that registering a camera:

> does not allow the Omaha Police Department access to the live video stream.

([Connect Omaha][12])

The registry is essentially:

```text
CAMERA EXISTS
       +
CAMERA LOCATION
       +
OWNER CONTACT
```

not:

```text
PUBLIC LIVE VIDEO
```

---

### 29. Omaha registry privacy

Omaha says the full camera map is restricted to authorized police users and that registry information is classified as protected non-public data. ([Connect Omaha][13])

Therefore:

```text
PUBLIC_CAMERA_LOCATION_FEED:
    🔴 NO

PUBLIC_CAMERA_REGISTRY:
    🔴 NO

PUBLIC_DOCUMENTATION_OF_PROGRAM:
    🟢 YES
```

This is still valuable as a **source-discovery lead**, but not a public camera dataset.

---

### 30. Omaha camera integration

Omaha also documents an integration system using Axon Fūsus/fususCORE.

Participating camera owners can selectively share feeds with Omaha Police during emergencies. ([Connect Omaha][14])

This creates another category:

```text
PRIVATE_CAMERA
      ↓
OPTIONAL LIVE INTEGRATION
      ↓
LAW ENFORCEMENT
```

but it is **not public camera access**.

---

### 31. Nebraska ALPR — extremely strong source

Nebraska is unusually useful for ALPR research because the **Nebraska Crime Commission** maintains an official ALPR resource page.

It states that Nebraska Revised Statute §60-3206 requires agencies using ALPR systems to report certain data annually. ([Nebraska Crime Commission][2])

#### Registry

```text
SOURCE_ID:
    NE-NCC-ALPR

OWNER:
    Nebraska Crime Commission

TYPE:
    OFFICIAL_ALPR_REPORT_REPOSITORY

STATUS:
    🟢 VERIFIED — HIGH VALUE
```

---

### 32. Nebraska ALPR agencies

The current Crime Commission repository identifies numerous agencies.

Confirmed current/past users include:

```text
Nebraska State Patrol
Buffalo County Sheriff's Office
Dakota County Sheriff's Office
Dawson County Sheriff's Office
Hall County Sheriff's Office
Lancaster County Sheriff's Office
Lincoln County Sheriff's Office
Sarpy County Sheriff's Office
Seward County Sheriff's Office
York County Sheriff's Office
Bellevue Police
Beatrice Police
Chadron Police
Fremont Police
Gering Police
Grand Island Police
Kearney Police
Lexington Police
Lincoln Police
Lincoln Parking Services
Morrill Police
North Platte Police
Omaha Police
Omaha Airport Police
Papillion Police
Scottsbluff Police
South Sioux City Police
University of Nebraska Omaha Police
York Police
```

([Nebraska Crime Commission][2])

That is a **major nationwide research find**.

---

### 33. Current 2026 ALPR reporting

The repository contains current 2026 reports for several agencies.

Examples include:

```text
Lexington Police
    Q1 2026
    Q2 2026

Lincoln Police
    Q1 2026
    Q2 2026

Lincoln Parking Services
    March 2026
    April/May 2026
    June 2026
    July 2026

Chadron Police
    2025-2026

Gering Police
    2025-2026

Scottsbluff Police
    2025-2026

Lincoln County Sheriff
    March 2025-February 2026
```

([Nebraska Crime Commission][2])

This means the ALPR repository is **actively maintained**, not an abandoned historical page.

---

### 34. Flock + Vigilant

Nebraska's reports explicitly distinguish technology/vendors.

Buffalo County's records include:

```text
Flock ALPR
Vigilant Mobile ALPR
```

([Nebraska Crime Commission][2])

That means ATLAS should not store merely:

```text
ALPR = true
```

It should retain:

```text
technology_vendor
system_type
agency
report_period
```

---

### 35. Nebraska ALPR law

Nebraska has an **Automatic License Plate Reader Privacy Act**.

The statute defines an ALPR system as fixed/mobile automated high-speed cameras combined with algorithms that convert plate images into computer-readable information. ([Nebraska Legislature][15])

---

### 36. Government ALPR use is restricted

Nebraska law begins from the position that governmental use of an ALPR system is prohibited unless an enumerated exception applies. ([Nebraska Legislature][16])

Permitted law-enforcement purposes include identifying:

* traffic/parking violations
* uninsured/unregistered vehicles
* equipment violations
* registration violations
* wanted persons/vehicles
* missing persons
* stolen vehicles
* vehicles relevant to an ongoing criminal investigation. ([Nebraska Legislature][16])

---

### 37. ALPR retention

Nebraska law generally limits governmental retention of captured plate data to:

### **180 days**

unless an exception applies, such as evidence, preservation request, warrant, subpoena, or court order. ([Nebraska Legislature][17])

#### Registry

```text
NE-ALPR-LAW

DEFAULT_RETENTION:
    180 DAYS
```

---

### 38. ALPR data is not ordinary public record

Nebraska law specifically says captured plate data held by a governmental entity is **not considered a public record** under the state's public-record provisions, subject to specified exceptions. ([Nebraska Legislature][18])

This is critical.

Therefore our project should pursue:

```text
PUBLIC:
    camera locations
    vendor
    agency
    annual statistics
    policies
    deployments
```

rather than assuming:

```text
PUBLIC:
    individual plate records
```

---

### 39. ALPR annual reporting is the gold mine

Nebraska's law requires qualifying agencies to:

* adopt ALPR-use policies
* adopt privacy policies
* post them
* report annually to the Nebraska Commission on Law Enforcement and Criminal Justice. ([Nebraska Legislature][19])

This makes the Crime Commission repository an unusually valuable **deployment-discovery source**.

---

### 40. Nebraska statewide radio

Nebraska has a statewide radio system:

### **Nebraska State Radio System — SRS**

A state public-safety communications document is explicitly titled:

**Nebraska Statewide Radio System**. ([Nebraska OCIO][20])

And the P25 Technology Interest Group's system list identifies:

```text
Nebraska State Radio System
P25 Phase 1
Statewide
Public Safety
VHF / 700 / 800
```

([Project 25][21])

#### Registry

```text
SOURCE_ID:
    NE-SRS

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

PHASE:
    Phase 1

COVERAGE:
    STATEWIDE

BANDS:
    VHF
    700
    800

STATUS:
    🟢 VERIFIED
```

---

### 41. Nebraska State Patrol communications

Nebraska State Patrol operates two communications centers:

```text
Lincoln
North Platte
```

The agency states these centers handle radio traffic for the entire state. ([Nebraska State Patrol][22])

Lincoln covers:

```text
Troop A
Troop B
Headquarters Troop
```

while North Platte covers:

```text
Troop C
Troop D
Troop E
```

([Nebraska State Patrol][22])

---

### 42. Statewide radio system technical documentation

Nebraska's public procurement documentation for the State Radio System includes technical concepts such as:

```text
WACN ID
System Key
Radio ID blocks
Talkgroup ID blocks
Control channels
Site profiles
Foreign system interoperability
```

([Nebraska.gov][23])

That is valuable evidence that this is a genuine trunked statewide system rather than merely a collection of conventional frequencies.

---

### 43. Public scanner coverage

Nebraska has an exceptionally strong public scanner ecosystem.

Broadcastify currently lists:

### **151 audio feeds**

covering:

### **78 counties**

with:

```text
73 public-safety
7 other
5 amateur radio
2 aviation
1 rail
```

([Broadcastify][24])

This is one of the strongest scanner states we've encountered.

---

### 44. Scanner coverage examples

Current feeds include:

```text
Lincoln Police & Fire
Lancaster County Sheriff
Omaha Police — Northeast
Omaha Police — Southeast
Omaha Police — Northwest
Omaha Police — Southwest
Omaha Police — West
Omaha Fire
Douglas County Sheriff
Scotts Bluff County Public Safety
Buffalo County / Kearney Public Safety
Grand Island Police / Fire / EMS
Nebraska State Patrol Troop H & A
Lincoln County Public Safety
```

([Broadcastify][24])

---

### 45. Official scanner feeds

This gets even better.

Broadcastify's official-feed directory currently lists Nebraska official feeds including:

```text
Lincoln Fire and Rescue
Lincoln Police and Fire / Lancaster County Sheriff
Omaha Fire
Omaha Police Northeast
Omaha Police Northwest
Omaha Police Southeast
Omaha Police Southwest
Omaha Police West
Sarpy County Fire Station Alerting
Sarpy County FIRE-EAST
```

([Broadcastify][25])

These should receive a higher source-confidence rating than ordinary community feeds.

---

### 46. Scanner ingest infrastructure

Broadcastify currently shows:

```text
Nebraska State Radio System
    Omaha (NDOT Yard)

Omaha Regional Interoperability Network (ORION)
    Douglas County Simulcast
```

as active calls-ingest nodes. ([Broadcastify][26])

That is useful infrastructure metadata for radio coverage.

---

### 47. Omaha encryption situation

Omaha Police communications are increasingly encrypted.

Current Omaha scanner documentation states that OPD has implemented encryption while public feeds remain available through Broadcastify. ([NOSS Media][27])

This means ATLAS should record:

```text
RADIO_SYSTEM:
    P25

AGENCY:
    Omaha PD

PRIMARY_SYSTEM:
    ENCRYPTED / PARTIAL

PUBLIC_AUDIO:
    THIRD_PARTY FEED
```

rather than incorrectly claiming the underlying radio traffic is entirely publicly receivable.

---

### 48. Body cameras

Nebraska agencies also have body-camera systems, but these should be classified separately from public roadway surveillance.

For example, Lincoln Police documents its use of:

```text
WatchGuard Vista
Axon
```

body-worn cameras. ([City of Lincoln][28])

#### Registry

```text
NE-LINCOLN-BWC

TYPE:
    LAW_ENFORCEMENT_BODY_CAMERA

PUBLIC_LIVE_FEED:
    NO

PUBLIC_METADATA:
    YES
```

This category is useful for procurement/vendor discovery but should not be confused with public cameras.

---

### 49. Omaha private camera integration

Omaha's system is particularly interesting for the national registry because it demonstrates:

```text
PRIVATE CCTV
       ↓
COMMUNITY REGISTRY
       ↓
POLICE DISCOVERY
       ↓
OPTIONAL LIVE INTEGRATION
```

The owner retains control over whether/when the feed can be shared. ([Connect Omaha][14])

This is a valuable architecture pattern to record nationally.

---

### 50. Nebraska source architecture

```text
NEBRASKA
│
├── 🟢 NDOT
│   │
│   ├── 🟢 Nebraska 511
│   ├── 🟢 Highway Cameras
│   ├── 🟢 ArcGIS FeatureServer
│   ├── 🟢 Camera PhotoURL
│   ├── 🟢 IRISID
│   ├── 🟢 SiteView
│   ├── 🟢 Camera status
│   ├── 🟢 Camera lifecycle
│   ├── 🟢 Traffic
│   ├── 🟢 Waze events
│   └── 🟢 Road conditions
│
├── 🟢 LINCOLN
│   │
│   ├── 🟢 Traffic CCTV
│   ├── 🟢 PTZ cameras
│   └── 🟢 Public Safety Cameras
│
├── 🟡 OMAHA
│   │
│   ├── 🟢 Traffic cameras
│   ├── 🟢 Community camera registry
│   └── 🟢 Fūsus integration
│
├── 🟢 ALPR
│   │
│   ├── 🟢 Nebraska Crime Commission
│   ├── 🟢 Flock
│   ├── 🟢 Vigilant
│   ├── 🟢 agency reports
│   └── 🟢 2026 reports
│
├── 🟢 RADIO
│   │
│   ├── 🟢 Nebraska State Radio System
│   ├── 🟢 P25
│   ├── 🟢 VHF
│   ├── 🟢 700
│   └── 🟢 800
│
└── 🟢 SCANNERS
    │
    ├── 🟢 151 feeds
    ├── 🟢 78 counties
    └── 🟢 official agency feeds
```

---

### 51. Exact-source priority

#### Tier 1 — extremely high value

```text
NE-NDOT-HIGHWAY-CAMERAS
NE-NDOT-511
NE-NCC-ALPR
NE-SRS
NE-BROADCASTIFY
```

#### Tier 2 — high value

```text
NE-LINCOLN-TRAFFIC-CCTV
NE-LINCOLN-PUBLIC-SAFETY-CAMERAS
NE-OMAHA-TRAFFIC-CAMERAS
NE-OMAHA-COMMUNITY-CAMERA-REGISTRY
NE-NDOT-GISCAT
```

#### Tier 3 — supporting

```text
NE-LINCOLN-BWC
NE-OMAHA-FUSUS
NE-SRS-FCC
NE-LOCAL-COUNTY-RADIO
```

---

### 52. Nebraska camera source — canonical record

A real NDOT camera should ultimately look something like:

```text
{
    source: "NE-NDOT-HIGHWAY-CAMERAS",

    source_record_id: "OBJECTID",

    source_camera_id: "IRISID",

    name: "...",

    city: "...",

    route: "...",

    reference_post: "...",

    position: "...",

    lanes: "...",

    location_description: "...",

    latitude: "...",
    longitude: "...",

    brand: "...",
    model: "...",

    site_view: "...",

    photo_url: "...",

    status: "...",

    deployed: "...",
    serviced: "...",
    retired: "...",

    district: "...",

    provenance: {
        provider: "Nebraska Department of Transportation",
        service: "HighwayCamerasDOT",
        layer: 0
    }
}
```

**No guessed fields.**

Everything above is based on fields actually exposed by the public NDOT layer. ([GISCAT][1])

---

### 53. Nebraska assessment

| Category                        |           Rating |
| ------------------------------- | ---------------: |
| State traffic cameras           | 🟢 **Excellent** |
| Official camera GIS             | 🟢 **Excellent** |
| Exact camera coordinates        |               🟢 |
| Camera image URL field          | 🟢 **Excellent** |
| Camera IDs                      | 🟢 **Excellent** |
| Camera lifecycle                | 🟢 **Excellent** |
| Equipment metadata              |               🟢 |
| 511                             |               🟢 |
| Municipal traffic cameras       |               🟢 |
| Municipal public-safety cameras |               🟢 |
| ALPR deployment data            | 🟢 **Excellent** |
| ALPR vendor information         |               🟢 |
| ALPR raw plate data             |               🔴 |
| Statewide P25 radio             |               🟢 |
| Radio technical documentation   |               🟢 |
| Public scanner coverage         | 🟢 **Excellent** |
| County scanner coverage         | 🟢 **Excellent** |
| Private camera registries       |               🟡 |
| Procurement discovery           |               🟢 |

### Overall: **9.5 / 10**

Nebraska is **one of the best states so far** for the project.

The standout source is unquestionably:

[NDOT HighwayCamerasDOT FeatureServer](https://giscat.ne.gov/dot/rest/services/HighwayCamerasDOT/FeatureServer?utm_source=chatgpt.com)

It gives us an authoritative statewide camera inventory with **coordinates + identifiers + image references + equipment + lifecycle + status**. ([GISCAT][1])

The second major discovery is:

[Nebraska Crime Commission — ALPR Resources](https://ncc.nebraska.gov/automatic-license-plate-reader-resources?utm_source=chatgpt.com)

That repository gives us a **state-level mechanism for identifying ALPR deployments and obtaining annual agency reports**, including current 2026 records. ([Nebraska Crime Commission][2])

And the scanner situation is unusually strong: **151 public audio feeds across all 78 counties**, including numerous official agency feeds. ([Broadcastify][24])

**Nebraska complete. Next alphabetically: Nevada.**

[1]: https://giscat.ne.gov/dot/rest/services/HighwayCamerasDOT/MapServer/layers?utm_source=chatgpt.com "All Layers and Tables (HighwayCamerasDOT)"
[2]: https://ncc.nebraska.gov/automatic-license-plate-reader-resources?utm_source=chatgpt.com "Automatic License Plate Reader Resources | Nebraska Crime Commission"
[3]: https://dot.nebraska.gov/travel/?utm_source=chatgpt.com "Travel - NDOT"
[4]: https://play.google.com/store/apps/details?hl=en_US&id=crc.carsapp.ne&utm_source=chatgpt.com "Nebraska 511 - Apps on Google Play"
[5]: https://giscat.ne.gov/dot/rest/services/HighwayCamerasDOT/FeatureServer?utm_source=chatgpt.com "HighwayCamerasDOT (FeatureServer)"
[6]: https://giscat.ne.gov/dot/rest/services/HighwayCamerasDOT/FeatureServer "HighwayCamerasDOT (FeatureServer)"
[7]: https://giscat.ne.gov/dot/rest/services/HighwayCamerasDOT/FeatureServer/0?utm_source=chatgpt.com "Layer: OP Cameras CAT (ID: 0)"
[8]: https://dot2.nebraska.gov/policies-and-disclaimers/?utm_source=chatgpt.com "Policies and Disclaimers - NDOT"
[9]: https://www.lincoln.ne.gov/City/Departments/LTU/Transportation/Traffic-Engineering/Traffic-Cameras/FAQ?utm_source=chatgpt.com "Traffic Engineering Monitoring Cameras – City of Lincoln, NE"
[10]: https://www.lincoln.ne.gov/files/sharedassets/public/v/1/ltu/transportation/traffic-engineering/master-plan/traffic-management-master-plan.pdf?utm_source=chatgpt.com "Traffic Managment Master Plan"
[11]: https://www.lincoln.ne.gov/City/Departments/Police/Police-Activity/Public-Safety-Cameras?utm_source=chatgpt.com "Public Safety Cameras – City of Lincoln, NE"
[12]: https://cityofomahaconnect.org/camera-registration/?utm_source=chatgpt.com "Camera Registration - Connect Omaha"
[13]: https://cityofomahaconnect.org/privacy-faqs/?utm_source=chatgpt.com "Privacy FAQs - Connect Omaha"
[14]: https://cityofomahaconnect.org/camera-integration/?utm_source=chatgpt.com "Camera Integration - Connect Omaha"
[15]: https://www.nebraskalegislature.gov/laws/statutes.php?statute=60-3202&utm_source=chatgpt.com "Nebraska Legislature"
[16]: https://nebraskalegislature.gov/laws/statutes.php?statute=60-3203&utm_source=chatgpt.com "Nebraska Legislature"
[17]: https://nebraskalegislature.gov/laws/statutes.php?statute=60-3204&utm_source=chatgpt.com "Nebraska Legislature"
[18]: https://www.nebraskalegislature.gov/laws/statutes.php?statute=60-3209&utm_source=chatgpt.com "Nebraska Legislature"
[19]: https://nebraskalegislature.gov/laws/statutes.php?statute=60-3206&utm_source=chatgpt.com "Nebraska Legislature"
[20]: https://cio.nebraska.gov/network-serv/publicsafety/docs/ROC_training_presentation_withOCIOlogo.pdf?utm_source=chatgpt.com "NEBRASKA STATEWIDE RADIO SYSTEM"
[21]: https://project25.org/images/stories/ptig/P25_Trunking_Systems_February_2023_REV_04_230223.pdf?utm_source=chatgpt.com "Updates Jan. 2023"
[22]: https://statepatrol.nebraska.gov/divisions/administrative-services/communications?utm_source=chatgpt.com "Communications | Nebraska State Patrol"
[23]: https://das.nebraska.gov/materiel/purchasing/contracts/pdfs/14534%28oc%29ren%283%29ext%281%29awd.pdf?utm_source=chatgpt.com "Nebraska State Radio System"
[24]: https://status.broadcastify.com/listen/stid/31?utm_source=chatgpt.com "Nebraska Audio Feeds"
[25]: https://status.broadcastify.com/listen/official/?utm_source=chatgpt.com "Official Feeds"
[26]: https://status.broadcastify.com/listen/ctid/1678?utm_source=chatgpt.com "Douglas County, Nebraska Audio Feeds"
[27]: https://www.nossmedia.com/omaha-police-department?utm_source=chatgpt.com "Omaha Scanner - Omaha Police Department"
[28]: https://www.lincoln.ne.gov/City/Departments/Police/About-LPD/Transparency/Body-Worn-Cameras?utm_source=chatgpt.com "Body Worn Cameras – City of Lincoln, NE"
