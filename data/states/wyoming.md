---
state: Wyoming
usps: WY
slug: wyoming
dossier_number: 50
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
  imported_from: project_atlas_state_data/Wyoming.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Wyoming (WY) - ATLAS State Record

> Dossier **50 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Wyoming is an unusually strong state for this project despite its small population.

The biggest discoveries are:

* **WYDOT operates a statewide public highway-camera network.**
* WYDOT officially reported **222 web cameras** statewide in 2024 and was replacing 61 obsolete/inoperable cameras. ([Wyoming Department of Transportation][1])
* The public **WYDOT 511** system exposes cameras, incidents, road conditions, atmospheric sensors, and other transportation information. ([Wyoming Department of Transportation][2])
* WYDOT has an actual **camera browsing backend**, not merely a map.
* **WyoLink** is Wyoming's statewide public-safety interoperable radio system.
* Official WYDOT documentation identifies **105 WyoLink network radio sites**, with more than 500 participating agencies/departments and more than 16,000 users in its 2023 system overview. ([Wyoming Department of Transportation][3])
* WyoLink is **P25 digital trunked radio**. ([Wyoming Department of Transportation][4])
* Broadcastify currently shows **30 Wyoming feeds** statewide. ([Broadcastify][5])
* **ALPR absolutely exists in Wyoming**, including Flock deployments in places such as Jackson and Cheyenne. ([ACLU of Wyoming][6])
* Wyoming is currently considering **major statewide ALPR restrictions**, with 2026 legislation and a 2027 working draft. ([Wyoming Legislative Service Office][7])
* I found **no verified statewide public ALPR inventory/feed**.

---

### 1. WYDOT — Wyoming Department of Transportation

Wyoming Department of Transportation

WYDOT is the primary statewide transportation-data authority.

Its official 511 system is:

[WYDOT 511 / Wyoming Road & Travel Information](https://www.wyoroad.info/?utm_source=chatgpt.com)

WYDOT explicitly identifies its 511 system as the authoritative source for current road and travel information. ([Wyoming Department of Transportation][2])

The system provides:

```text
ROAD CONDITIONS
INCIDENTS
CLOSURES
ADVISORIES
WEB CAMERAS
ATMOSPHERIC SENSORS
VARIABLE SPEED LIMITS
WEATHER
REST AREAS
```

#### ATLAS

```text
SOURCE_ID:
    WY-WYDOT-511

OWNER:
    WYDOT

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. Wyoming statewide traffic cameras

This is the strongest camera source in the state.

WYDOT's official 2024 announcement states that its statewide network contained:

> **222 web cameras**

and that the agency was replacing **61 inoperable/outdated cameras and related infrastructure**. ([Wyoming Department of Transportation][1])

These cameras take photographs of road conditions every few minutes. WYDOT says the 511 tools are maintained by its Transportation Management Center 24/7/365. ([Wyoming Department of Transportation][1])

#### ATLAS

```text
SOURCE_ID:
    WY-WYDOT-CCTV

TYPE:
    STATE_HIGHWAY_CAMERA_NETWORK

PUBLIC:
    YES

APPROXIMATE_DOCUMENTED_COUNT:
    222

IMAGE_TYPE:
    PERIODIC_STILL_IMAGES

STATUS:
    VERIFIED
```

**Important:** 222 is a documented 2024 inventory figure, not something I would blindly use as the current 2026 count.

---

### 3. WYDOT camera backend

This is one of the better discoveries of the Wyoming research.

WYDOT has a dedicated camera service:

[WYDOT Web Cameras](https://webcams.wyoroad.info/?utm_source=chatgpt.com)

The camera backend exposes route-oriented camera browsing.

For example, its current camera browsing interface exposes Interstate 25, I-80 and I-90 route segments with mile-marker ranges. ([WYDOT Travel Information Service][8])

Example:

```text
I-25
Colorado State Line → Cheyenne
Cheyenne → Wheatland
Wheatland → Douglas
Douglas → Casper
Casper → Buffalo

I-80
Utah State Line → Rock Springs
Rock Springs → Rawlins
Rawlins → Laramie
Laramie → Cheyenne
Cheyenne → Nebraska State Line

I-90
...
```

This is extremely useful for ATLAS because the system is already organized around:

```text
ROUTE
MILEPOINT
CAMERA
IMAGE
```

rather than just a JavaScript map.

#### ATLAS

```text
SOURCE_ID:
    WY-WYDOT-WEBCAMS

TYPE:
    PUBLIC_CAMERA_BACKEND

PROTOCOL:
    WEB / SERVER-SIDE CAMERA DIRECTORY

STATUS:
    VERIFIED
```

---

### 4. WYDOT camera geographic model

The Wyoming camera system is particularly good for route normalization.

A camera can be associated with:

```text
STATE ROUTE
US ROUTE
INTERSTATE
MILE MARKER
CAMERA SITE
IMAGE
```

That means ATLAS can normalize:

```text
route = I-80
milepoint = 313.2
state = WY
```

and independently attach the actual camera coordinates when discovered.

---

### 5. WYDOT 511 mobile architecture confirms the camera layer

WYDOT's current 511 documentation says users can select a **cameras layer**, click camera icons, and obtain an image; a second interaction exposes additional images at the same location. ([Wyoroad][9])

That is significant because it confirms the underlying conceptual structure:

```text
CAMERA SITE
    │
    ├── IMAGE 1
    ├── IMAGE 2
    ├── IMAGE 3
    └── ...
```

ATLAS should therefore model **Camera** separately from **Observation/Image**.

---

### 6. WYDOT historical camera count

WYDOT's 2024 announcement gives the strongest official numeric evidence:

```text
STATEWIDE WEB CAMERAS:
    222

CAMERAS/INFRASTRUCTURE BEING REPLACED:
    61
```

The replacement program was necessary because of:

* aging equipment
* harsh weather
* remote locations
* limited electrical access
* limited internet/cellular service. ([Wyoming Department of Transportation][1])

Therefore:

```text
CURRENT_EXACT_COUNT:
    QUERY LIVE SOURCE

HISTORICAL_OFFICIAL_COUNT:
    222
```

Do **not** simply insert 222 as today's count.

---

### 7. WYDOT atmospheric sensors

The official 511 system explicitly exposes **Atmospheric Sensors**. ([Wyoming Department of Transportation][2])

#### ATLAS

```text
SOURCE_ID:
    WY-WYDOT-ATMOSPHERIC-SENSORS

TYPE:
    WEATHER / ATMOSPHERIC SENSOR

PUBLIC:
    YES

STATUS:
    VERIFIED
```

This is a separate source from CCTV.

---

### 8. WYDOT road conditions

WYDOT's 511 platform exposes current road conditions by:

* district
* route
* city/town.

([Wyoming Department of Transportation][2])

#### ATLAS

```text
WY-WYDOT-ROAD-CONDITIONS
WY-WYDOT-CLOSURES
WY-WYDOT-ADVISORIES
WY-WYDOT-INCIDENTS
```

---

### 9. WYDOT variable speed limits

The official system also exposes:

**Variable Speed Limit information.** ([Wyoming Department of Transportation][2])

This is not a camera source, but it is valuable transportation-state data.

#### ATLAS

```text
SOURCE_ID:
    WY-WYDOT-VSL

TYPE:
    VARIABLE_SPEED_LIMIT

STATUS:
    VERIFIED
```

---

### 10. WYDOT TMC

WYDOT's 511 system is maintained by the agency's Transportation Management Center.

The 2024 WYDOT announcement says the TMC maintains the 511 tools **24 hours a day, seven days a week**. ([Wyoming Department of Transportation][1])

#### ATLAS

```text
SOURCE_ID:
    WY-WYDOT-TMC

TYPE:
    TRANSPORTATION_MANAGEMENT_CENTER

STATUS:
    VERIFIED
```

---

### 11. WYDOT ITS

WYDOT's Technology Division explicitly includes:

* GIS
* Intelligent Transportation Systems
* Transportation Management System
* IT
* Emergency Communications.

It also says the technology network extends to roadside devices providing real-time road-condition and other transportation information. ([Wyoming Department of Transportation][10])

#### ATLAS

```text
WY-WYDOT-GIS
WY-WYDOT-ITS
WY-WYDOT-TMC
WY-WYDOT-ROADSIDES
```

---

### 12. WYDOT GIS

There are publicly accessible Wyoming GIS services containing WYDOT transportation layers.

For example, an official Wyoming GIS FeatureServer exposes:

**WYDOT_County_Roads**

with:

* JSON
* GeoJSON
* PBF
* advanced queries
* pagination
* spatial queries. ([Wyoming State Geological Survey][11])

Another official GIS service exposes:

**WYDOT_Highways**. ([Wyoming GIS][12])

And WYDOT milepost data are exposed through another ArcGIS layer with route and milepost fields. ([Wyoming GIS][13])

#### Important distinction

I have **not** established that these particular GIS layers are the authoritative live CCTV inventory.

Therefore:

```text
WYDOT GIS:
    VERIFIED

WYDOT GIS CCTV LAYER:
    NOT YET VERIFIED

WYDOT WEB CAMERA SYSTEM:
    VERIFIED
```

Do not invent a CCTV FeatureServer merely because the transportation GIS exists.

---

### 13. WYDOT mileposts

The WYDOT milepost layer is particularly useful for ATLAS.

The public layer contains:

```text
MP_ID
ROUTE
MP
GEOMETRY
```

and supports JSON, GeoJSON and PBF. ([Wyoming GIS][13])

#### ATLAS

```text
SOURCE_ID:
    WY-WYDOT-MILEPOSTS

TYPE:
    TRANSPORTATION_REFERENCE_DATA

MACHINE_READABLE:
    YES

STATUS:
    VERIFIED
```

This can help normalize camera route/milepoint metadata.

---

### 14. WyoLink — statewide public-safety radio

The major radio source is:

**WyoLink**

Official source:

[WyoLink — Wyoming Statewide Public Safety Radio](https://www.dot.state.wy.us/home/administration/wyolink.html?utm_source=chatgpt.com)

WYDOT explicitly describes WyoLink as:

> Wyoming's Statewide, Public Safety, Interoperable Radio Communications System.

It provides communications to public-safety and service agencies throughout Wyoming. ([Wyoming Department of Transportation][14])

#### ATLAS

```text
SOURCE_ID:
    WY-WYOLINK

OWNER:
    WYDOT

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STATUS:
    VERIFIED
```

---

### 15. WyoLink is statewide

WyoLink supports:

```text
STATE
LOCAL
COUNTY
FEDERAL
PUBLIC SAFETY
SERVICE AGENCIES
```

The official membership documentation explicitly allows public-safety agencies, first responders, emergency-response support providers, and local/county/state/federal government agencies to participate. ([Wyoming Department of Transportation][15])

#### ATLAS

```text
SYSTEM_SCOPE:
    STATEWIDE

INTEROPERABILITY:
    YES

AGENCY_LEVELS:
    LOCAL
    COUNTY
    STATE
    FEDERAL
```

---

### 16. WyoLink P25

WyoLink is a digital trunked radio system using **Project 25**.

Official WyoLink documentation defines P25 and trunked-system concepts, including talkgroups, sites and roaming. ([Wyoming Department of Transportation][4])

A 2022 Teton County procurement specifically describes a:

> WyoLink-capable, Project 25 compliant, 800 MHz trunked radio site

connected directly to the statewide WyoLink system. ([BidNet Direct][16])

#### ATLAS

```text
STANDARD:
    P25

TYPE:
    DIGITAL TRUNKED

BAND:
    800 MHz
    + other infrastructure/components

STATUS:
    VERIFIED
```

---

### 17. WyoLink network size

An official WYDOT emergency-communications report says technicians completed yearly inspections for:

**105 WyoLink Network radio sites**. ([Wyoming Department of Transportation][3])

A WYDOT WyoLink presentation similarly reports:

```text
105 WyoLink Network Sites
500+ Agencies/Departments
16,000+ Users
12+ million calls/year
```

([Wyoming Department of Transportation][17])

That is a very substantial statewide radio system.

---

### 18. WyoLink site map

WYDOT publishes:

**WyoLink Local Towers & Locations Site Map**

through its official Maps and Equipment page. ([Wyoming Department of Transportation][18])

This is a valuable discovery source because it establishes the physical infrastructure layer:

```text
WyoLink
   ↓
RADIO SITE
   ↓
TOWER / LOCATION
```

#### ATLAS

```text
SOURCE_ID:
    WY-WYOLINK-SITES

TYPE:
    RADIO_SITE_INVENTORY

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 19. WyoLink regional talkgroups

Official WyoLink documentation describes:

* County Agency Talkgroups — CAT
* Multiple Agency Talkgroups — MAT
* regional mutual-aid communications
* proprietary talkgroups
* statewide/interoperability functions. ([Wyoming Department of Transportation][17])

The 2023 presentation describes **seven regional MAT areas**. ([Wyoming Department of Transportation][17])

#### ATLAS

```text
WY-WYOLINK-TALKGROUPS
WY-WYOLINK-CAT
WY-WYOLINK-MAT
WY-WYOLINK-STATE
WY-WYOLINK-AGENCY
```

---

### 20. WyoLink encryption

WyoLink supports encryption.

The Teton County WyoLink procurement specifically identifies end-user features including:

```text
EMERGENCY
ENCRYPTION
PRIORITY SCANNING
```

([BidNet Direct][16])

Therefore:

```text
PUBLIC RADIO SYSTEM:
    YES

PUBLICLY MONITORABLE AUDIO:
    PARTIAL

ENCRYPTED TRAFFIC:
    YES
```

Do not represent the entire WyoLink system as publicly listenable.

---

### 21. Wyoming Highway Patrol

The Wyoming Highway Patrol is a major WyoLink user.

WyoLink documentation identifies state-level agencies as participants, while WYDOT Emergency Communications specifically maintains the WHP radio fleet. ([Wyoming Department of Transportation][19])

#### ATLAS

```text
SOURCE_ID:
    WY-WHP-RADIO

TYPE:
    STATE_POLICE_RADIO

SYSTEM:
    WYOlink

PUBLIC_AUDIO:
    PARTIAL
```

---

### 22. WyoLink roadside infrastructure

This is another interesting discovery.

WYDOT says its Emergency Communications group supports communications for hundreds of roadside ITS devices, including:

* weather stations
* dynamic message signs
* weigh-in-motion
* traffic counting
* traffic signals
* other roadside systems.

([Wyoming Department of Transportation][19])

So Wyoming has a tightly integrated architecture:

```text
                 WYDOT
                   │
       ┌───────────┴───────────┐
       ▼                       ▼
    WyoLink                   ITS
       │                       │
       │                ┌──────┼──────┐
       │                ▼      ▼      ▼
       │              RWIS    DMS   Traffic
       │
       └──── communications/backhaul
```

This is very useful for ATLAS source discovery.

---

### 23. Broadcastify — Wyoming

Broadcastify currently lists:

**30 Wyoming feeds**.

([Broadcastify][5])

#### ATLAS

```text
SOURCE_ID:
    WY-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

CURRENT_OBSERVED_FEEDS:
    30

COUNT:
    DYNAMIC

STATUS:
    VERIFIED
```

---

### 24. Broadcastify WyoLink example — Converse County

A current Converse County feed is especially useful because it explicitly identifies:

**WyoLink — Project 25 Phase 1**

and the relevant WyoLink site/control-channel information. ([Broadcastify][20])

The feed carries talkgroups including:

```text
13-CAT 1
13-CAT 2
13-CAT 3
13-CAT 4
13-EMA
13-Fire/EMS
13-Fire Tac
13-GFD
13-Rural
13-SAR
WHP BMF
```

([Broadcastify][20])

This is excellent evidence for connecting the **public audio layer** to the underlying WyoLink system.

---

### 25. Broadcastify — Campbell County

Campbell County currently has:

* 2 audio feeds
* Broadcastify Calls coverage
* 1 Calls ingest node.

The ingest node is identified as:

**WyoLink (Gillette VHF)**. ([Broadcastify][21])

The county page lists services including:

```text
Law Dispatch
Law Tac
Law Talk
Fire Dispatch
Fire-Tac
EMS Dispatch
Corrections
Hospital
Schools
```

([Broadcastify][21])

This is another strong example of:

```text
WYOlink
   ↓
SDR / RECEIVER
   ↓
Broadcastify
   ↓
PUBLIC AUDIO
```

---

### 26. Wyoming scanner ecosystem

The scanner hierarchy should therefore be modeled as:

```text
FCC
  │
  ├── licenses
  └── frequencies
        │
        ▼
      WyoLink
        │
        ├── sites
        ├── talkgroups
        └── agencies
              │
              ▼
          Receivers / SDR
              │
              ▼
        Broadcastify
              │
              ▼
        Public audio
```

This is much more useful than treating Broadcastify as the radio system itself.

---

### 27. FCC — Wyoming public-safety radio

The FCC remains the foundational licensing source for Wyoming radio infrastructure.

#### ATLAS

```text
SOURCE_ID:
    WY-FCC-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

PUBLIC:
    YES

FIELDS:
    CALLSIGN
    LICENSEE
    FREQUENCY
    LOCATION
    EMISSION
    LICENSE STATUS
```

This should be used to validate local systems outside WyoLink as well.

---

### 28. RadioReference — Wyoming

[RadioReference Wyoming Database](https://www.radioreference.com/db/browse/stid/56?utm_source=chatgpt.com)

RadioReference is useful for:

* WyoLink talkgroups
* WyoLink sites
* local systems
* county systems
* frequencies
* agency mappings.

#### ATLAS

```text
SOURCE_ID:
    WY-RADIOREFERENCE

TYPE:
    RADIO_METADATA

PUBLIC:
    YES

STATUS:
    SECONDARY / VERIFIED DISCOVERY SOURCE
```

It should not replace official WYDOT/WyoLink documentation where the latter exists.

---

### 29. ALPR — Wyoming

Now the important surveillance section.

Wyoming **does have ALPR deployments**.

The strongest current evidence I found is from the ACLU of Wyoming, which states that Flock Safety ALPR cameras have been installed in Wyoming communities including:

* **Jackson**
* **Cheyenne**.

The organization describes them as continuously collecting vehicle data accessible to law enforcement. ([ACLU of Wyoming][6])

#### ATLAS

```text
ALPR_DEPLOYMENT:
    YES

FLOCK:
    YES

KNOWN_COMMUNITIES:
    JACKSON
    CHEYENNE

STATEWIDE_REGISTRY:
    NOT VERIFIED
```

---

### 30. Wyoming Flock camera count — third-party only

A current community-derived OpenStreetMap-based database reports:

**66 Flock/ALPR cameras in Wyoming**

as of an August 15, 2026 snapshot. ([Flock Camera Locations][22])

However, this is **not an official Wyoming government inventory**.

Therefore ATLAS should record:

```text
OBSERVED_THIRD_PARTY_COUNT:
    66

SOURCE:
    OSM / COMMUNITY

CONFIDENCE:
    MEDIUM / DISCOVERY

OFFICIAL_STATE_COUNT:
    UNKNOWN
```

**Do not put "66" into the official Wyoming ALPR inventory.**

---

### 31. Wyoming ALPR statewide legislation

This is one of the most important discoveries of the entire Wyoming dossier.

Wyoming House Bill **HB0181** proposes restrictions concerning:

* biometric data
* geolocation data
* automatic license plate reader systems.

The bill specifically addresses government entities obtaining, retaining, accessing, requesting or using ALPR systems and installing them on public buildings or public roads/highways. ([Wyoming Legislative Service Office][7])

#### ATLAS

```text
SOURCE_ID:
    WY-ALPR-LEGISLATION-2026

TYPE:
    SURVEILLANCE_LEGISLATION

STATUS:
    PROPOSED

NOT:
    CURRENT_LAW
```

---

### 32. Wyoming 2027 ALPR working draft

There is also a **2027 working draft** addressing biometric data and license plate readers.

The draft proposes restrictions including:

* government acquisition/use
* third-party ALPR data
* sharing ALPR-derived data outside the jurisdiction
* warrant requirements
* restrictions on toll/road-use applications. ([Wyoming Legislative Service Office][23])

Again:

```text
2027 WORKING DRAFT
        ≠
ENACTED LAW
```

This should be recorded as legislative research, not current operational policy.

---

### 33. Wyoming ALPR regulatory environment

The current evidence therefore produces this picture:

```text
WYOMING
│
├── ALPR EXISTS
│
├── FLOCK EXISTS
│   ├── Jackson
│   └── Cheyenne
│
├── NO VERIFIED STATEWIDE PUBLIC INVENTORY
│
├── 2026 ALPR LEGISLATION
│
└── 2027 WORKING DRAFT
```

This is a **very active ALPR-policy environment**.

---

### 34. Wyoming local ALPR research targets

The next-level ATLAS discovery work should target:

```text
CHEYENNE
JACKSON
CASPER
LARAMIE
GILLETTE
ROCK SPRINGS
SHERIDAN
GREEN RIVER
EVANSTON
CODY
```

For each:

```text
CITY POLICE
COUNTY SHERIFF
CITY COUNCIL
COUNTY COMMISSION
PROCUREMENT
BUDGET
CONTRACTS
FLOCK
AXON
ALPR
LPR
AUTOMATED LICENSE PLATE
```

The objective is to obtain actual:

```text
CAMERA COUNT
LOCATION
VENDOR
CONTRACT
START DATE
RETENTION
DATA SHARING
PUBLIC POLICY
```

---

### 35. Important false-positive warning

There is a major search-engine trap with Wyoming ALPR.

Searching for:

> "Wyoming Police Flock"

can return **Wyoming, Ohio**.

For example, a current official Wyoming, Ohio Police Department document confirms a Flock ALPR program. ([Wyoming, OH][24])

That is **not Wyoming the state**.

ATLAS must therefore enforce:

```text
STATE:
    WY

CITY:
    Wyoming, WY
```

rather than relying on keyword matches.

This is exactly the kind of false-positive that can contaminate a national surveillance database.

---

### 36. Wyoming municipal CCTV

Outside WYDOT, there are likely additional:

```text
CITY CCTV
COUNTY CCTV
POLICE CCTV
AIRPORT CAMERAS
UNIVERSITY CAMERAS
PARKING CAMERAS
PRIVATE-PUBLIC PARTNERSHIPS
```

but I did **not** find a verified statewide inventory aggregating these.

Therefore:

```text
STATEWIDE_MUNICIPAL_CCTV:
    NO

STATEWIDE_PUBLIC_CCTV_REGISTRY:
    NO

INDIVIDUAL_DEPLOYMENTS:
    RESEARCH REQUIRED
```

---

### 37. Wyoming airport cameras

Potential research targets include:

```text
Cheyenne Regional Airport
Jackson Hole Airport
Casper/Natrona County Airport
Yellowstone Regional Airport
Gillette-Campbell County Airport
Rock Springs-Sweetwater County Airport
Laramie Regional Airport
Central Wyoming Regional Airport
```

But these should **not** be marked as public live camera sources without an actual public endpoint.

---

### 38. Wyoming National Park cameras

This is an interesting additional layer.

Wyoming contains:

* Yellowstone National Park
* Grand Teton National Park.

These federal systems are **not WYDOT**.

There are public webcams in and around these parks, but ATLAS should distinguish:

```text
FEDERAL PARK CAMERA
```

from:

```text
WYDOT STATE CAMERA
```

This means Yellowstone/Grand Teton should eventually be researched as a **federal/public-land camera source**, not simply a Wyoming state source.

---

### 39. Wyoming weather cameras

The Wyoming 511 ecosystem already provides highway cameras and atmospheric sensors.

The camera network is therefore simultaneously useful for:

```text
TRAFFIC
WEATHER
ROAD CONDITIONS
SNOW
ICE
WIND
VISIBILITY
```

The camera itself should still remain:

```text
CAMERA
```

with observations classified independently.

---

### 40. Recommended Wyoming canonical architecture

```text
WYOMING
│
├── STATE
│
├── WYDOT
│   │
│   ├── 511
│   │   ├── CCTV
│   │   ├── INCIDENTS
│   │   ├── ROAD CONDITIONS
│   │   ├── CLOSURES
│   │   ├── VSL
│   │   └── WEATHER
│   │
│   ├── WEB CAMERA BACKEND
│   │
│   ├── GIS
│   │   ├── ROADS
│   │   └── MILEPOSTS
│   │
│   └── TMC
│
├── RADIO
│   │
│   ├── WyoLink
│   │   ├── Sites
│   │   ├── Talkgroups
│   │   ├── CAT
│   │   ├── MAT
│   │   └── Agencies
│   │
│   ├── WHP
│   ├── County
│   ├── Municipal
│   ├── FCC
│   ├── RadioReference
│   └── Broadcastify
│
├── ALPR
│   │
│   ├── Flock
│   ├── Local Agencies
│   ├── Procurement
│   ├── Contracts
│   └── Legislation
│
└── FEDERAL
    │
    ├── Yellowstone
    └── Grand Teton
```

---

### 41. Exact ATLAS source IDs

```text
WY-WYDOT
WY-WYDOT-511
WY-WYDOT-WEBCAMS
WY-WYDOT-CCTV
WY-WYDOT-TMC
WY-WYDOT-ITS
WY-WYDOT-GIS
WY-WYDOT-MILEPOSTS
WY-WYDOT-ROAD-CONDITIONS
WY-WYDOT-INCIDENTS
WY-WYDOT-CLOSURES
WY-WYDOT-ADVISORIES
WY-WYDOT-VSL
WY-WYDOT-ATMOSPHERIC-SENSORS
WY-WYDOT-RWIS
WY-WYDOT-TRAFFIC
WY-WYDOT-DMS

WY-WYOLINK
WY-WYOLINK-SITES
WY-WYOLINK-TALKGROUPS
WY-WYOLINK-CAT
WY-WYOLINK-MAT
WY-WYOLINK-AGENCIES
WY-WHP-RADIO
WY-COUNTY-RADIO
WY-MUNICIPAL-RADIO
WY-FCC-PUBLIC-SAFETY
WY-RADIOREFERENCE
WY-BROADCASTIFY

WY-FLOCK-ALPR
WY-LOCAL-ALPR
WY-ALPR-PROCUREMENT
WY-ALPR-CONTRACTS
WY-ALPR-POLICIES
WY-ALPR-LEGISLATION

WY-MUNICIPAL-CCTV
WY-AIRPORT-CCTV
WY-UNIVERSITY-CCTV

WY-NPS-YELLOWSTONE-CAMERAS
WY-NPS-GRAND-TETON-CAMERAS
```

---

### 42. Exact-source matrix

| Source                           | Category             | Public | Machine-readable | Status                        |
| -------------------------------- | -------------------- | -----: | ---------------: | ----------------------------- |
| WYDOT 511                        | Traveler information |     🟢 |            🟢/🟡 | **VERIFIED**                  |
| WYDOT Webcams                    | Traffic cameras      |     🟢 |            🟢/🟡 | **VERIFIED**                  |
| WYDOT CCTV                       | Public cameras       |     🟢 |            🟢/🟡 | **VERIFIED**                  |
| WYDOT TMC                        | Traffic management   |     🟡 |               🟡 | **VERIFIED**                  |
| WYDOT atmospheric sensors        | Weather              |     🟢 |               🟡 | **VERIFIED**                  |
| WYDOT mileposts                  | GIS/reference        |     🟢 |               🟢 | **VERIFIED**                  |
| WYDOT highways GIS               | GIS                  |     🟢 |               🟢 | **VERIFIED**                  |
| WyoLink                          | State radio          |     🟡 |               🟡 | **VERIFIED**                  |
| WyoLink sites                    | Radio infrastructure |     🟢 |               🟡 | **VERIFIED**                  |
| WyoLink talkgroups               | Radio metadata       |     🟡 |               🟡 | **VERIFIED**                  |
| Wyoming Highway Patrol           | State police radio   |     🟡 |               🟡 | **VERIFIED**                  |
| FCC                              | Radio licensing      |     🟢 |            🟢/🟡 | **VERIFIED**                  |
| RadioReference                   | Radio metadata       |     🟢 |               🟡 | **VERIFIED**                  |
| Broadcastify                     | Scanner audio        |     🟢 |               🟡 | **VERIFIED**                  |
| Flock                            | ALPR                 |     🔴 |               🔴 | **DEPLOYMENTS CONFIRMED**     |
| Local ALPR                       | ALPR                 |     🔴 |               🔴 | **FRAGMENTED**                |
| OSM/community Flock map          | ALPR discovery       |     🟢 |               🟢 | **SECONDARY**                 |
| Statewide ALPR registry          | ALPR                 |     🔴 |               🔴 | **NOT FOUND**                 |
| Statewide ALPR feed              | ALPR                 |     🔴 |               🔴 | **NOT FOUND**                 |
| Statewide surveillance inventory | Surveillance         |     🔴 |               🔴 | **NOT FOUND**                 |
| Yellowstone public cameras       | Federal              |     🟢 |               🟡 | **SEPARATE FEDERAL RESEARCH** |
| Grand Teton public cameras       | Federal              |     🟢 |               🟡 | **SEPARATE FEDERAL RESEARCH** |

---

### 43. Wyoming rating

| Category                   |                Rating |
| -------------------------- | --------------------: |
| State traffic cameras      |      🟢 **Excellent** |
| Camera count/documentation |      🟢 **Excellent** |
| Camera backend             |      🟢 **Excellent** |
| Transportation GIS         |      🟢 **Excellent** |
| Road/weather data          |      🟢 **Excellent** |
| Statewide radio            |    🟢 **Exceptional** |
| P25 infrastructure         |    🟢 **Exceptional** |
| Radio site documentation   |      🟢 **Excellent** |
| Scanner coverage           |       🟡 **Moderate** |
| ALPR deployments           |      🟡 **Confirmed** |
| ALPR statewide inventory   |     🔴 **None found** |
| ALPR public data           |     🔴 **None found** |
| ALPR legislation research  |    🟢 **Very active** |
| Municipal CCTV             |     🟡 **Fragmented** |
| Federal camera sources     | 🟢 **High potential** |

### **Overall: 9.0 / 10**

---

### 44. Most important Wyoming discoveries

#### 🥇 **WYDOT's 222-camera statewide network**

This is one of the clearest official statewide camera inventories we've found.

WYDOT itself says the network had **222 web cameras** in 2024. ([Wyoming Department of Transportation][1])

#### 🥈 **WYDOT has a dedicated camera backend**

The public camera system isn't merely a pin layer on a map. Its camera browser organizes cameras by route and milepoint. ([WYDOT Travel Information Service][8])

#### 🥉 **WyoLink is exceptionally well documented**

Official documentation gives us:

```text
105 sites
500+ agencies/departments
16,000+ users
12+ million calls/year
P25
regional MATs
CATs
site maps
```

([Wyoming Department of Transportation][3])

### 4. **Public scanner feeds can be directly tied to WyoLink**

The Converse County feed explicitly identifies WyoLink P25 and individual talkgroups. ([Broadcastify][20])

### 5. **ALPR is present but fragmented**

Flock deployments are confirmed in Wyoming communities including Jackson and Cheyenne. ([ACLU of Wyoming][6])

The third-party OSM-based inventory currently reports 66 cameras, but that is **not an official statewide count**. ([Flock Camera Locations][22])

### 6. **Wyoming is actively considering statewide ALPR restrictions**

The 2026 HB0181 proposal and 2027 working draft are significant sources for understanding the state's surveillance environment. ([Wyoming Legislative Service Office][7])

---

### 45. Final Wyoming source stack

```text
                         WYOMING
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
        WYDOT            WyoLink            ALPR
          │                 │                 │
     ┌────┼────┐       ┌────┼────┐       ┌────┼────┐
     ▼    ▼    ▼       ▼    ▼    ▼       ▼    ▼    ▼
    511  GIS  TMC    Sites Talkgroups FCC  Flock Local
     │    │    │       │      │             │
     ▼    ▼    ▼       └──────┘             ▼
   CCTV Mileposts                   Contracts/Procurement
     │
     ▼
 PUBLIC CAMERA
 OBSERVATIONS
```

**Wyoming is now complete.**

That means the **50-state pass is complete**: Alabama through Wyoming, with the final state being Wyoming. The next useful phase is no longer another state—it is to **consolidate all 50 state dossiers into a normalized master source registry**, deduplicate common systems/vendors (511, ArcGIS, WyoLink/WISCOM/SIRN, Flock, Broadcastify, FCC, etc.), and identify which sources have actual machine-readable endpoints versus merely public webpages.

[1]: https://www.dot.state.wy.us/news/wydot-announces-upgrades-to-511-website-web-cameras-1?utm_source=chatgpt.com "WYDOT announces upgrades to 511 website, web cameras"
[2]: https://www.dot.state.wy.us/home/news_info/road--travel-information.html?utm_source=chatgpt.com "Road & Travel Information"
[3]: https://www.dot.state.wy.us/home/administration/emergency-communications/annual_reports.html?utm_source=chatgpt.com "Annual Reports"
[4]: https://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Wyolink/Membership/WyoLink_Handbook_2016.pdf?utm_source=chatgpt.com "WyoLink"
[5]: https://status.broadcastify.com/listen/coid/1/publicsafety?utm_source=chatgpt.com "Browse Audio Feeds"
[6]: https://www.aclu-wy.org/campaigns-initiatives/turn-off-flock/?utm_source=chatgpt.com "Turn Off Flock - ACLU of Wyoming"
[7]: https://wyoleg.gov/2026/Introduced/HB0181.pdf?utm_source=chatgpt.com "26LSO-0379"
[8]: https://webcams.wyoroad.info/pls/Browse/WRR.CameraByShield?SelectedRoute=WY296&utm_source=chatgpt.com "WYDOT 511 Service"
[9]: https://www.wyoroad.info/511/WY511iOS.html?utm_source=chatgpt.com "WYDOT 511 Service"
[10]: https://www.dot.state.wy.us/home/administration/strategic-plans/technology-division.html?utm_source=chatgpt.com "Technology Division"
[11]: https://ims.wsgs.wyo.gov/arcgis/rest/services/WY_STREAM_DATA/WYOMING_STREAM_DATA/FeatureServer/29?utm_source=chatgpt.com "Layer: WYDOT_County_Roads (ID: 29)"
[12]: https://gis.deq.wyo.gov/arcgis/rest/services/WY_STREAM_DATA/WYOMING_STREAM_DATA/MapServer/30?utm_source=chatgpt.com "Layer: WYDOT_Highways (ID: 30)"
[13]: https://gis.deq.wyo.gov/arcgis/rest/services/SPILLSVIEW/MapServer/1?utm_source=chatgpt.com "Layer: WYDOT MILEPOSTS (ID: 1)"
[14]: https://www.dot.state.wy.us/home/administration/wyolink.html?utm_source=chatgpt.com "WyoLink"
[15]: https://www.dot.state.wy.us/home/administration/wyolink/membership.html?utm_source=chatgpt.com "Membership"
[16]: https://www.bidnetdirect.com/public/supplier/solicitations/statewide/22591361964/abstract?utm_source=chatgpt.com "Wyolink Capable P25 800mhz Trunked Radio Site- Teton County - Bid Information - County Of Teton | BidNet Direct"
[17]: https://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Administration/WyoLink/Telecom_talking%20points_March2023.pdf?utm_source=chatgpt.com "What is WyoLink?"
[18]: https://www.dot.state.wy.us/home/administration/wyolink/maps-and-equipment.html?utm_source=chatgpt.com "Maps and Equipment"
[19]: https://www.dot.state.wy.us/home/administration/emergency-communications/public_safety_radio.html?utm_source=chatgpt.com "Public Safety Radio"
[20]: https://status.broadcastify.com/listen/feed/45835?utm_source=chatgpt.com "Converse County (Douglas/Glenrock) Public Safety"
[21]: https://status.broadcastify.com/listen/ctid/3126?utm_source=chatgpt.com "Campbell County, Wyoming Audio Feeds"
[22]: https://flockcameralocations.com/locations/wyoming?utm_source=chatgpt.com "Flock Camera Locations in Wyoming — Live WY ALPR Map | Flock Camera Locations"
[23]: https://wyoleg.gov/InterimCommittee/2026/S19-2026071427LSO-0033v0.4.pdf?utm_source=chatgpt.com "27LSO-0033 v0.4 Biometric data and license plate readers-regulation."
[24]: https://www.wyomingohio.gov/DocumentCenter/View/1079/Automated-License-Plate-Readers-Policy?bidId=&utm_source=chatgpt.com "Wyoming Police Department"
