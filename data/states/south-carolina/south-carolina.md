---
state: South Carolina
usps: SC
slug: south-carolina
dossier_number: 40
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
  imported_from: project_atlas_state_data/South Carolina.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# South Carolina (SC) - ATLAS State Record

> Dossier **40 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

South Carolina is a **very strong state for this project**. The state has a documented statewide CCTV program, a live 511 system, a statewide P25 radio network, substantial public scanner/call coverage, and confirmed government Flock ALPR deployments.

One important distinction: **the public camera system is real and extensive, but I have not yet verified a public SCDOT camera FeatureServer/API containing the complete camera inventory.** I am marking that as unverified rather than guessing.

---

### 1. South Carolina Department of Transportation — SCDOT

The primary transportation source is the South Carolina Department of Transportation.

SCDOT operates the state's intelligent transportation infrastructure and its public **511SC** system.

#### Primary source

[511 South Carolina](https://www.511sc.org/?utm_source=chatgpt.com)

The current 511SC system provides:

* traffic cameras
* incidents
* construction
* congestion
* weather
* events
* traffic speeds
* message signs
* evacuation routes
* Waze crash information
* Waze congestion information
* Waze hazards
* precipitation
* live camera views. ([511SC][1])

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-511

OWNER:
    South Carolina Department of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

STATUS:
    🟢 VERIFIED
```

---

### 2. SCDOT statewide CCTV program

This is one of the strongest findings in South Carolina.

SCDOT has an official Traffic Engineering Guideline specifically dedicated to:

**Shared Viewership of Closed Circuit Television Traffic Monitoring Cameras**

SCDOT states that it:

> installs, operates and maintains CCTV traffic monitoring cameras throughout the state

and that these cameras are part of its ITS program. ([SCDOT][2])

The cameras are managed through **five Traffic Management Centers**.

SCDOT's ATMS software operates the cameras and other ITS infrastructure. ([SCDOT][2])

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-CCTV

TYPE:
    STATE_TRAFFIC_CCTV

OWNER:
    SCDOT

MANAGEMENT:
    5 Traffic Management Centers

ITS:
    🟢 YES

STATUS:
    🟢 VERIFIED
```

---

### 3. SCDOT CCTV sharing

The official guideline is particularly useful because it identifies who receives camera viewership.

SCDOT says camera feeds are shared through cooperative agreements with:

* South Carolina Department of Public Safety
* South Carolina Emergency Management Division
* county first responders
* county emergency-management divisions
* local media. ([SCDOT][2])

This gives us an important **relationship graph**:

```text
SCDOT CCTV
    │
    ├── SCDPS
    ├── SCEMD
    ├── County First Responders
    ├── County Emergency Management
    └── Local Media
```

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-CCTV-SHARING

TYPE:
    CAMERA_VIEWERSHIP_RELATIONSHIP

STATUS:
    🟢 VERIFIED
```

---

### 4. SCDOT cameras are not recorded

This is explicitly confirmed by both the official SCDOT guideline and 511SC.

SCDOT states that its CCTV cameras **do not record live streams**. ([SCDOT][2])

511SC likewise says:

* SCDOT does not record traffic-camera video
* past footage is unavailable. ([511SC][1])

Therefore:

```text
LIVE:
    🟢 YES

RECORDING:
    🔴 NO

HISTORICAL_VIDEO:
    🔴 NO

PUBLIC_VIDEO_ARCHIVE:
    🔴 NO
```

This should be stored directly in the ATLAS source metadata.

---

### 5. SCDOT cameras cannot be used for law-enforcement investigations

Another important restriction:

SCDOT's CCTV guideline states the cameras are **not to be employed for**:

* law-enforcement investigations
* speed enforcement
* collection of personal information.

([SCDOT][2])

That means the SCDOT CCTV system is fundamentally a:

```text
TRAFFIC MANAGEMENT
+
TRAVELER INFORMATION
+
INCIDENT RESPONSE
```

system, rather than an ALPR or surveillance database.

---

### 6. 511SC camera interface

The live 511SC interface currently exposes a dedicated **Cameras** section.

The page allows searching cameras by location and route. ([511SC][1])

It also exposes the camera layer through the map/traveler-information interface. ([511SC][1])

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-511-CAMERAS

TYPE:
    PUBLIC_CAMERA_DIRECTORY

ACCESS:
    PUBLIC WEB

LIVE:
    🟢

STATUS:
    🟢 VERIFIED
```

---

### 7. 511SC geographic regions

The current 511SC map identifies:

```text
Piedmont Region
Midlands Region
Pee Dee Region
Lowcountry Region
```

along with an entire-state view. ([511SC][1])

This gives us a convenient extraction structure:

```text
SC
├── Piedmont
├── Midlands
├── Pee Dee
└── Lowcountry
```

---

### 8. SCDOT direct camera endpoints

This is where I am deliberately stopping short of claiming more than I have verified.

The public site unquestionably has live cameras.

However, I have **not yet established from authoritative evidence a stable public machine-readable camera endpoint** such as:

```text
/api/cameras
FeatureServer/0
GeoJSON
REST JSON
XML
```

Therefore:

```text
PUBLIC_CAMERA_UI:
    🟢 VERIFIED

LIVE_IMAGES:
    🟢 VERIFIED

LIVE_STREAMS:
    🟢 VERIFIED

MACHINE_READABLE_CAMERA_REGISTRY:
    🟡 NOT YET VERIFIED

PUBLIC_ARCGIS_CAMERA_FEATURESERVER:
    🟡 NOT VERIFIED
```

The correct next technical step for ATLAS would be to inspect the 511SC application's actual network requests.

**Do not manufacture an API URL.**

---

### 9. SCDOT ArcGIS environment

SCDOT does maintain an official ArcGIS Online environment.

[SCDOT ArcGIS Online](https://scdot.maps.arcgis.com/?utm_source=chatgpt.com)

SCDOT describes the portal as allowing staff, business partners and others to access and publish transportation geospatial information. It also provides access to downloadable key datasets. ([SCDOT Maps][3])

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-ARCGIS

TYPE:
    TRANSPORTATION_GIS_PORTAL

STATUS:
    🟢 VERIFIED
```

This is important because **the SCDOT camera inventory may ultimately be discoverable through this environment**, but I have not found enough evidence to claim that it currently publishes the camera layer there.

---

### 10. SCDOT CCTV engineering documentation

SCDOT publishes ITS engineering drawings that explicitly document CCTV installations.

One official drawing is:

**CCTV Steel 50' Pole — Typical Detail**

It identifies:

* CCTV equipment
* ITS local control cabinet
* conduit
* grounding
* electrical infrastructure
* camera pole
* equipment mounting.

([SCDOT][4])

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-ITS-CCTV-DOCUMENTATION

TYPE:
    ITS_INFRASTRUCTURE_DOCUMENTATION

STATUS:
    🟢 VERIFIED
```

This isn't a camera inventory, but it is valuable for identifying the physical infrastructure behind the camera system.

---

### 11. SCDOT traffic information

511SC exposes several separate real-time data layers.

Current layers include:

```text
Incidents
Construction
Congestion
Weather
Events
Crashes — Waze
Congestion — Waze
Hazards — Waze
```

([511SC][1])

#### Registry

```text
SC-SCDOT-INCIDENTS
SC-SCDOT-CONSTRUCTION
SC-SCDOT-CONGESTION
SC-SCDOT-WEATHER
SC-SCDOT-EVENTS
SC-SCDOT-WAZE-CRASHES
SC-SCDOT-WAZE-CONGESTION
SC-SCDOT-WAZE-HAZARDS
```

All are:

```text
STATUS:
    🟢 PUBLICLY EXPOSED BY 511SC
```

The exact machine endpoints still need extraction.

---

### 12. SCDOT Waze integration

This is particularly valuable for ATLAS.

The public 511SC application exposes dedicated:

* Waze crashes
* Waze congestion
* Waze hazards

layers. ([511SC][1])

That means South Carolina is not merely using Waze internally; the **511 public interface is presenting Waze-derived information**.

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-WAZE

TYPE:
    THIRD_PARTY_TRAFFIC_DATA

SUBTYPES:
    CRASH
    CONGESTION
    HAZARD

STATUS:
    🟢 VERIFIED
```

---

### 13. Charleston beach cameras

511SC's official FAQ contains an interesting exception.

SCDOT specifically says the **Charleston Beach cameras are not maintained by SCDOT**.

They are maintained by:

* Folly Beach
* Sullivan's Island
* Isle of Palms. 

This is an important source-discovery relationship.

```text
CHARLESTON BEACH CAMERAS
│
├── Folly Beach
├── Sullivan's Island
└── Isle of Palms
```

#### Registry

```text
SOURCE_ID:
    SC-CHARLESTON-BEACH-CAMERAS

OWNER:
    MUNICIPALITIES

SCDOT:
    🔴 NOT OWNER

STATUS:
    🟢 VERIFIED
```

These should **not** be attributed to SCDOT in the final database.

---

### 14. Palmetto 800

Now the radio system.

South Carolina's statewide public-safety radio system is:

### PALMETTO 800

The South Carolina Department of Administration describes it as the state's statewide 800 MHz radio and mobile-data system. ([South Carolina Administration][5])

Official:

[South Carolina Palmetto 800](https://www.admin.sc.gov/services/technology-services/palmetto-800?utm_source=chatgpt.com)

#### Registry

```text
SOURCE_ID:
    SC-PALMETTO-800

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

BAND:
    800 MHz

STATUS:
    🟢 VERIFIED
```

---

### 15. Palmetto 800 users

South Carolina describes Palmetto 800 as a shared statewide system supporting:

* state government
* local governments
* power utilities
* Motorola
* law enforcement
* fire
* EMS
* other public-safety agencies.

([South Carolina Administration][5])

SLED says the network has **more than 80,000 users** and is one of the largest shared statewide radio networks in the nation. ([South Carolina Law Enforcement Division][6])

That makes Palmetto 800 one of the most significant statewide radio sources we've found so far.

---

### 16. Palmetto 800 architecture

The official state description identifies:

```text
800 MHz
P25
Trunked Radio
Mobile Data
Statewide Interoperability
```

([South Carolina Administration][5])

#### Registry

```text
SYSTEM:
    SC-PALMETTO-800

RADIO_STANDARD:
    P25

ARCHITECTURE:
    TRUNKED

BAND:
    800 MHz

STATEWIDE:
    🟢

INTEROPERABILITY:
    🟢
```

---

### 17. Palmetto 800 participating agencies

The state's interoperability report identifies agencies including:

* South Carolina Highway Patrol
* State Transport Police
* Bureau of Protective Services
* SLED
* Department of Juvenile Justice
* MUSC
* Department of Mental Health law enforcement
* Department of Natural Resources law enforcement
* South Carolina Ports Authority
* Department of Revenue enforcement
* South Carolina State University Police
* SCDOT
* State Transport Police.

([South Carolina Administration][7])

This creates a substantial statewide radio relationship graph.

---

### 18. SCDOT itself uses Palmetto 800

The interoperability report specifically identifies:

* SCDOT dispatch
* SHEP
* engineers involved in hurricane evacuations/recovery

as Palmetto 800 users. ([South Carolina Administration][7])

Therefore:

```text
SC-SCDOT
    │
    └── SC-PALMETTO-800
```

This is useful because traffic and public-safety data can potentially be correlated at the **system metadata level**.

---

### 19. Palmetto 800 encryption

The current Palmetto 800 User Advisory Committee agenda explicitly lists an:

**Encryption Sub-Committee**

as part of its work. ([South Carolina Administration][8])

Therefore:

```text
ENCRYPTION:
    🟢 SYSTEM CAPABILITY / CURRENT ISSUE

PUBLIC MONITORABILITY:
    CHANNEL DEPENDENT

RAW SYSTEM ACCESS:
    🔴 NOT PUBLIC
```

ATLAS should only use legally/publicly available scanner feeds.

---

### 20. Broadcastify — South Carolina

South Carolina has substantial public scanner coverage.

The strongest current evidence comes from **Broadcastify Calls**, which is actively receiving Palmetto 800 traffic.

For example, the current Lexington County coverage shows Palmetto 800 groups actively seen within the previous 24 hours. ([Broadcastify][9])

Current examples include:

```text
West Columbia Police
Cayce Police
Lexington County Sheriff
South Carolina Highway Patrol
```

plus many other agencies. ([Broadcastify][9])

---

### 21. Broadcastify Calls — Charleston

Charleston County currently shows extensive Palmetto 800 activity.

Current groups include:

```text
Charleston Police
Charleston County Sheriff
North Charleston Police
Folly Beach
Mount Pleasant Police
Isle of Palms / Sullivan's Island
SC Ports Authority Police
South Carolina Highway Patrol
Charleston County EMS
Medical transport
Public works
CARTA
```

([Broadcastify][10])

This is an exceptionally valuable source.

#### Registry

```text
SOURCE_ID:
    SC-BROADCASTIFY-CALLS-CHARLESTON

SYSTEM:
    PALMETTO 800

TYPE:
    RADIO_CALLS

STATUS:
    🟢 LIVE COVERAGE
```

---

### 22. Broadcastify Calls — Horry County

Horry County currently has Palmetto 800 coverage including:

* SCHP Horry
* SCHP Charleston/Berkeley
* SCHP Georgetown/Williamsburg
* SCHP Florence/Dillon/Marion
* SCHP Aiken
* SCHP Orangeburg/Calhoun
* SCHP Bamberg/Barnwell/Allendale/Hampton
* SCHP Sumter/Clarendon
* SCHP Richland
* SCHP Lexington.

([Broadcastify][11])

There are also separate Horry County radio systems.

#### Registry

```text
SOURCE_ID:
    SC-BROADCASTIFY-CALLS-HORRY

TYPE:
    RADIO_CALLS

PALMETTO_800:
    🟢

LOCAL_HORRY_SYSTEM:
    🟢

STATUS:
    🟢 VERIFIED
```

---

### 23. Broadcastify Calls — Aiken

Aiken County currently has:

* Aiken County Sheriff
* North Augusta Police
* multiple fire departments

and an active **Palmetto 800 Aiken County Simulcast** ingest node. ([Broadcastify][12])

#### Registry

```text
SOURCE_ID:
    SC-BROADCASTIFY-CALLS-AIKEN

SYSTEM:
    PALMETTO 800

NODE:
    Aiken County Simulcast

STATUS:
    🟢 VERIFIED
```

---

### 24. Broadcastify Calls — Darlington

Darlington County currently shows:

* Hartsville PD
* Darlington County Sheriff
* Darlington PD
* South Carolina Highway Patrol
* SC DNR
* local fire.

([Broadcastify][13])

#### Registry

```text
SOURCE_ID:
    SC-BROADCASTIFY-CALLS-DARLINGTON

TYPE:
    RADIO_CALLS

SYSTEM:
    PALMETTO 800

STATUS:
    🟢 VERIFIED
```

---

### 25. Broadcastify public audio feeds

In addition to Calls, conventional live audio feeds exist.

One current example is:

**Aiken County Sheriff Dispatch**

which is broadcasting from the Palmetto 800 Aiken County Simulcast. ([Broadcastify][14])

Another example is:

**Lee & Surrounding County Feeds**

which explicitly identifies Lee, EMS, Fire, Kershaw and SCHP on Palmetto 800/P25. ([Broadcastify][15])

#### Registry

```text
SC-BROADCASTIFY-AUDIO
    │
    ├── County feeds
    ├── Municipal feeds
    ├── Fire feeds
    ├── EMS feeds
    └── Palmetto 800 feeds
```

---

### 26. South Carolina ALPR — state-level evidence

This state has a particularly important ALPR discovery.

The South Carolina Criminal Justice Academy's September 10, 2025 meeting minutes document a presentation about:

### Flock Cameras

by representatives of the **South Carolina Department of Public Safety**.

The minutes state that the state's Division of Technology was seeking approval to use the **AI component within Flock** before finalizing the contract.

The Law Enforcement Training Council approved use of the AI component in the Flock ALPR system. ([South Carolina Criminal Justice Academy][16])

#### Registry

```text
SOURCE_ID:
    SC-SCDPS-FLOCK

AGENCY:
    SOUTH CAROLINA DEPARTMENT OF PUBLIC SAFETY

VENDOR:
    FLOCK SAFETY

TYPE:
    ALPR

AI_COMPONENT:
    🟢 APPROVED

STATUS:
    🟢 OFFICIAL GOVERNMENT RECORD
```

This is a **major source**.

---

### 27. South Carolina state Flock system

The 2025 state document establishes:

```text
STATE-LEVEL FLOCK:
    🟢 CONFIRMED

ALPR:
    🟢 CONFIRMED

AI:
    🟢 CONFIRMED

CONTRACT DEVELOPMENT:
    🟢 DOCUMENTED

RAW PLATE DATA:
    🔴 NOT PUBLIC
```

This is substantially stronger than merely finding a municipal Flock deployment.

---

### 28. Sullivan's Island Flock

The Town of Sullivan's Island Police Department currently states directly that it uses:

### Flock Safety Automated License Plate Reader technology

The town provides:

* Flock Safety transparency portal
* ALPR policy
* FAQ
* privacy/responsible-policing statement.

([Sullivan's Island][17])

#### Registry

```text
SOURCE_ID:
    SC-SULLIVANS-ISLAND-PD-ALPR

VENDOR:
    FLOCK SAFETY

TYPE:
    MUNICIPAL_ALPR

TRANSPARENCY_PORTAL:
    🟢 YES

POLICY:
    🟢 YES

STATUS:
    🟢 VERIFIED
```

---

### 29. Sullivan's Island additional camera infrastructure

The same police department documents additional technology including:

* CAD
* GIS-guided police computers
* in-car cameras
* radios
* body cameras.

([Sullivan's Island][17])

These are **not** equivalent to publicly accessible traffic cameras.

Therefore:

```text
IN-CAR_CAMERA:
    🟢 EXISTS

BODY_CAMERA:
    🟢 EXISTS

PUBLIC_LIVE_FEED:
    🔴 NOT VERIFIED
```

Do not ingest them as public camera sources.

---

### 30. SCDOT commercial vehicle LPR

There is another very interesting source buried in an official SCDOT engineering specification.

SCDOT's I-26 widening documentation specifies an:

### LPR Camera

within the commercial vehicle weigh/sort system.

The system is designed to:

* automatically detect vehicles
* capture license-plate images
* identify alphanumeric plate information
* identify jurisdiction/location of issue
* query the CVIEW database.

([SCDOT][18])

#### Registry

```text
SOURCE_ID:
    SC-SCDOT-CVIEW-LPR

OWNER:
    SCDOT / Commercial Vehicle System

TYPE:
    COMMERCIAL_VEHICLE_LPR

FUNCTION:
    VEHICLE IDENTIFICATION

DATABASE:
    CVIEW

STATUS:
    🟢 OFFICIAL ENGINEERING SPECIFICATION
```

**Important:** this is **not evidence of a public ALPR feed**.

It is evidence that SCDOT infrastructure includes LPR technology for commercial-vehicle operations.

---

### 31. Commercial LPR classification

This needs to be separated from police ALPR.

```text
SC-SCDOT-CVIEW-LPR
        │
        ├── Commercial vehicle inspection
        ├── Plate recognition
        ├── Vehicle identification
        └── CVIEW lookup

NOT:
        ├── Public traffic camera
        ├── Public ALPR feed
        └── Public plate database
```

This is nevertheless an important **source-discovery lead**.

---

### 32. South Carolina ALPR source graph

At minimum we now have:

```text
SOUTH CAROLINA
│
├── SCDPS
│   └── Flock ALPR
│
├── Sullivan's Island PD
│   └── Flock ALPR
│
├── SCDOT
│   └── Commercial Vehicle LPR
│       └── CVIEW
│
└── Additional municipal ALPR
    └── requires agency-by-agency discovery
```

---

### 33. What I did NOT find

This is just as important.

I did **not** find an authoritative public statewide dataset containing:

```text
every ALPR camera
every ALPR coordinate
every Flock camera
every police ALPR camera
every plate-reader capture
```

Therefore:

```text
STATEWIDE_ALPR_INVENTORY:
    🔴 NOT VERIFIED

RAW_ALPR_DATABASE:
    🔴 NOT PUBLIC

PUBLIC_PLATE_SEARCH:
    🔴 NOT VERIFIED

PUBLIC_ALPR_LIVE_FEED:
    🔴 NOT VERIFIED
```

The correct approach is to continue municipal procurement/policy/FOIA-source discovery.

---

### 34. South Carolina camera source hierarchy

For ATLAS, I would structure the camera sources as:

```text
SC
│
└── SCDOT
    │
    ├── 511SC
    │   ├── Camera Directory
    │   ├── Live Camera Views
    │   ├── Incidents
    │   ├── Construction
    │   ├── Congestion
    │   ├── Weather
    │   ├── Events
    │   ├── Waze Crashes
    │   ├── Waze Congestion
    │   └── Waze Hazards
    │
    ├── ITS
    │   └── CCTV
    │       ├── TMC 1
    │       ├── TMC 2
    │       ├── TMC 3
    │       ├── TMC 4
    │       └── TMC 5
    │
    └── ArcGIS
        └── Transportation GIS
```

---

### 35. South Carolina radio source hierarchy

```text
SC
│
└── PALMETTO 800
    │
    ├── SCHP
    ├── State Transport Police
    ├── SLED
    ├── SCDNR
    ├── SCDOT
    ├── Local Police
    ├── Sheriffs
    ├── Fire
    ├── EMS
    ├── Hospitals
    ├── Ports
    ├── Public Works
    └── Other interoperable users
```

Broadcastify then provides public observation points into portions of that system.

---

### 36. Important Broadcastify discovery method

The Broadcastify Calls data is actually more useful than simply finding "scanner feeds."

It exposes individual talkgroups and systems.

For example, Charleston currently exposes actual Palmetto 800 talkgroups such as:

```text
Charleston PD Peninsula
Charleston PD West Ashley
CCSO North
CCSO West
North Charleston PD
Folly Public Safety
Mount Pleasant PD
Isle of Palms/Sullivan's Island
SC Ports Authority PD
SCHP
EMS
Public Works
```

([Broadcastify][10])

This means the ATLAS source model should store:

```text
RADIO_SYSTEM
    ↓
SIMULCAST/NODE
    ↓
TALKGROUP
    ↓
AGENCY
    ↓
PUBLIC_INGEST_SOURCE
```

rather than simply storing "South Carolina police scanner."

---

### 37. South Carolina source matrix

| Source                   | Category        | Public | Machine-readable | Status |
| ------------------------ | --------------- | -----: | ---------------: | ------ |
| 511SC                    | Traveler info   |     🟢 |               🟡 | 🟢     |
| SCDOT CCTV               | Traffic cameras |     🟢 |               🟡 | 🟢     |
| SCDOT live camera views  | Video           |     🟢 |               🟡 | 🟢     |
| SCDOT camera archive     | Video           |     🔴 |                — | 🔴     |
| SCDOT ArcGIS             | GIS             |     🟢 |               🟢 | 🟢     |
| SCDOT incidents          | Traffic         |     🟢 |               🟡 | 🟢     |
| SCDOT construction       | Traffic         |     🟢 |               🟡 | 🟢     |
| SCDOT congestion         | Traffic         |     🟢 |               🟡 | 🟢     |
| SCDOT Waze crashes       | Traffic         |     🟢 |               🟡 | 🟢     |
| SCDOT Waze congestion    | Traffic         |     🟢 |               🟡 | 🟢     |
| SCDOT Waze hazards       | Traffic         |     🟢 |               🟡 | 🟢     |
| Palmetto 800             | Radio           |     🟡 |     ❌ raw system | 🟢     |
| Broadcastify             | Scanner         |     🟢 |               🟡 | 🟢     |
| Broadcastify Calls       | Radio calls     |     🟢 |            🟢/🟡 | 🟢     |
| SCDPS Flock              | ALPR            |     🟡 |                ❌ | 🟢     |
| Sullivan's Island Flock  | ALPR            |     🟡 |                ❌ | 🟢     |
| SCDOT commercial LPR     | LPR             |     🟡 |                ❌ | 🟢     |
| Statewide ALPR inventory | ALPR            |     🔴 |                — | 🔴     |

---

### 38. Highest-priority sources

#### 🥇 SCDOT / 511SC CCTV

This is the primary camera source.

[511SC Camera/Traffic System](https://www.511sc.org/?utm_source=chatgpt.com)

---

#### 🥈 SCDOT CCTV architecture

This establishes the statewide system independently of the web interface.

[SCDOT CCTV Viewership Guideline](https://www.scdot.org/business/pdf/accessMgt/Traffic-Engineering-Guidelines/tg36.pdf?utm_source=chatgpt.com)

---

#### 🥉 Palmetto 800

[South Carolina Palmetto 800](https://www.admin.sc.gov/services/technology-services/palmetto-800?utm_source=chatgpt.com)

This is the statewide public-safety radio backbone.

---

### 4. Broadcastify Calls

Charleston, Lexington, Aiken, Horry, Darlington and other counties currently expose active Palmetto 800 call activity. ([Broadcastify][9])

---

### 5. SCDPS Flock

The 2025 Law Enforcement Training Council minutes provide official evidence of the state's Flock ALPR/AI deployment. ([South Carolina Criminal Justice Academy][16])

---

### 6. Municipal Flock

Sullivan's Island provides a particularly clean official ALPR source with a transparency portal and policy. ([Sullivan's Island][17])

---

### 39. South Carolina ATLAS rating

| Category                                |           Rating |
| --------------------------------------- | ---------------: |
| State traffic cameras                   | 🟢 **Excellent** |
| Official CCTV documentation             | 🟢 **Excellent** |
| Public camera interface                 |               🟢 |
| Live camera views                       |               🟢 |
| Public machine-readable camera registry |               🟡 |
| SCDOT GIS                               |               🟢 |
| Traffic incidents                       |               🟢 |
| Waze-derived traffic layers             |               🟢 |
| Statewide P25                           | 🟢 **Excellent** |
| Public scanner coverage                 | 🟢 **Excellent** |
| Broadcastify Calls                      | 🟢 **Excellent** |
| State-level Flock ALPR                  |               🟢 |
| Municipal Flock                         |               🟢 |
| Commercial LPR                          |               🟢 |
| Statewide ALPR inventory                |               🔴 |
| Raw ALPR data                           |               🔴 |

### **Overall: 9.1 / 10**

South Carolina is one of the stronger states we've encountered.

The combination of **SCDOT CCTV + 511SC + Palmetto 800 + extensive Broadcastify Calls + confirmed Flock infrastructure** makes it particularly valuable for the source database.

---

### 40. Final South Carolina source registry

```text
SC-SCDOT-511
SC-SCDOT-CCTV
SC-SCDOT-CCTV-SHARING
SC-SCDOT-511-CAMERAS
SC-SCDOT-INCIDENTS
SC-SCDOT-CONSTRUCTION
SC-SCDOT-CONGESTION
SC-SCDOT-WEATHER
SC-SCDOT-EVENTS
SC-SCDOT-WAZE-CRASHES
SC-SCDOT-WAZE-CONGESTION
SC-SCDOT-WAZE-HAZARDS
SC-SCDOT-ARCGIS
SC-SCDOT-ITS-CCTV-DOCUMENTATION
SC-SCDOT-CVIEW-LPR

SC-PALMETTO-800

SC-BROADCASTIFY
SC-BROADCASTIFY-CALLS-CHARLESTON
SC-BROADCASTIFY-CALLS-HORRY
SC-BROADCASTIFY-CALLS-AIKEN
SC-BROADCASTIFY-CALLS-DARLINGTON
SC-BROADCASTIFY-CALLS-LEXINGTON

SC-SCDPS-FLOCK
SC-SULLIVANS-ISLAND-PD-ALPR

SC-CHARLESTON-BEACH-CAMERAS
```

#### South Carolina is complete.

**Next alphabetically: South Dakota.**

[1]: https://www.511sc.org/ "511SC"
[2]: https://www.scdot.org/business/pdf/accessMgt/Traffic-Engineering-Guidelines/tg36.pdf?utm_source=chatgpt.com "TG-36-CCTV Viewership Guideline.pdf"
[3]: https://scdot.maps.arcgis.com/home/index.html?utm_source=chatgpt.com "South Carolina Department of Transportation"
[4]: https://www.scdot.org/content/dam/scdot-legacy/business/pdf/i77panther/attachb/traffic/3.%20ITS%20Standard%20Drawings.pdf?utm_source=chatgpt.com "SCDOT  
South Carolina Department of Transportatio"
[5]: https://www.admin.sc.gov/services/technology-services/palmetto-800?utm_source=chatgpt.com "Palmetto 800 | Department of Administration"
[6]: https://www.sled.sc.gov/departments/state-administrative-agency-saa-homeland-security?utm_source=chatgpt.com "State Administrative Agency (SAA) for Homeland Security | South Carolina Law Enforcement Division"
[7]: https://www.admin.sc.gov/sites/admin/files/Documents/OED/Interoperability%20Report.pdf?utm_source=chatgpt.com "Proviso 93.7:"
[8]: https://admin.sc.gov/news-events/events/technology-and-information-services/palmetto-800-user-advisory-committee-0?utm_source=chatgpt.com "Palmetto 800 User Advisory Committee Meeting | Department of Administration"
[9]: https://status.broadcastify.com/calls/coverage/ctid/?ctid=2344&tagId=9&utm_source=chatgpt.com "Lexington County South Carolina Calls Coverage"
[10]: https://status.broadcastify.com/calls/coverage/ctid/?ctid=2322&tagId=26&utm_source=chatgpt.com "Charleston County South Carolina Calls Coverage"
[11]: https://status.broadcastify.com/calls/coverage/ctid/?ctid=2338&tagId=6&utm_source=chatgpt.com "Horry County South Carolina Calls Coverage"
[12]: https://status.broadcastify.com/listen/ctid/2314?utm_source=chatgpt.com "Aiken County, South Carolina Audio Feeds"
[13]: https://status.broadcastify.com/calls/coverage/ctid/?ctid=2328&tagId=3&utm_source=chatgpt.com "Darlington County South Carolina Calls Coverage"
[14]: https://status.broadcastify.com/listen/feed/40847?utm_source=chatgpt.com "Aiken County Sheriff Dispatch"
[15]: https://status.broadcastify.com/listen/feed/30973?utm_source=chatgpt.com "Lee & Surrounding County Feeds"
[16]: https://sccja.sc.gov/wp-content/uploads/September-25-LETC-Minutes.pdf?utm_source=chatgpt.com "South Carolina Criminal Justice Academy"
[17]: https://sullivansisland.sc.gov/departments/police-department?utm_source=chatgpt.com "Police Department | Town of Sullivan's Island Official Website"
[18]: https://www.scdot.org/business/pdf/I26Widening/AttachB/Weigh/Weigh%20and%20Sort%20System%20Specification.pdf?utm_source=chatgpt.com "3. As trucks advance toward the station and pass by the radar, vehicle speed, length and lane is determined. This data is compared with possible matches from the previous radar and/or WIM sensors. A match shall be based on vehicle type and a time window of when that vehicle would have been expected based on its speeds and the distances between the devices."
