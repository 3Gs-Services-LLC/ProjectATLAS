---
state: Washington
usps: WA
slug: washington
dossier_number: 47
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
  imported_from: project_atlas_state_data/Washington.txt
  imported_on: 2026-08-28
  stated_dossier_number: 46
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Washington (WA) - ATLAS State Record

> Dossier **47 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Washington is another **top-tier state** for this project. The camera side is exceptionally strong: WSDOT currently reports **1,681 traffic cameras** on its public real-time travel system. The ALPR side also just became substantially more interesting because Washington enacted a new statewide ALPR law in 2026 that requires **agency registration with the Attorney General and, beginning later, annual reporting including camera locations**. ([WSDOT][1])

---

### 1. Washington State Department of Transportation — WSDOT

Washington State Department of Transportation

The primary transportation source is the official WSDOT Real-Time Travel system.

[WSDOT Real-Time Travel / Traffic Cameras](https://wsdot.com/travel/real-time/traffic-cameras?utm_source=chatgpt.com)

The current WSDOT system exposes:

* traffic cameras
* traffic alerts
* truck restrictions
* mountain-pass conditions
* weather stations
* travel times
* border-crossing information
* traffic flow
* mileposts
* wildland fires
* ferry information.

The current public page reports **1,681 cameras**. WSDOT specifically describes them as still-image cameras used to monitor traffic and weather conditions. ([WSDOT][1])

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-REALTIME

OWNER:
    WASHINGTON STATE DEPARTMENT OF TRANSPORTATION

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

CAMERAS:
    1,681 CURRENTLY REPORTED

STATUS:
    VERIFIED
```

---

### 2. WSDOT statewide traffic-camera network

This is one of the strongest camera sources in the entire 50-state project.

WSDOT's current public system states:

```text
1,681 cameras
```

and explicitly says:

> We operate still-image cameras on roads throughout the state to monitor traffic and weather conditions.

([WSDOT][1])

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

IMAGE_TYPE:
    STILL IMAGE

CURRENT_COUNT:
    1,681

STATUS:
    VERIFIED
```

**Important:** this is a current source count, not an old historical estimate.

---

### 3. WSDOT camera map

The official WSDOT map has a dedicated **Cameras** layer.

The map also exposes:

```text
Traffic flow
Alerts
Cameras
Truck restrictions
Mountain pass reports
Weather stations
Rest areas
Park & Rides
Travel times
Border wait times
Wildland fires
Mileposts
```

([WSDOT][2])

#### ATLAS source

```text
WA-WSDOT-CAMERA-MAP
```

This should be treated as the **public presentation layer** for the underlying camera inventory.

---

### 4. WSDOT camera data is still-image based

This is important for the national schema.

Washington should **not** automatically be classified as a public HLS/live-video state.

WSDOT currently describes these cameras as:

```text
STILL-IMAGE CAMERAS
```

used for traffic/weather monitoring. ([WSDOT][1])

Therefore:

```text
PUBLIC CAMERA:
    YES

PUBLIC IMAGE:
    YES

PUBLIC STILL IMAGE:
    YES

PUBLIC HLS:
    NOT ESTABLISHED

PUBLIC MJPEG:
    NOT ESTABLISHED

PUBLIC CONTINUOUS VIDEO:
    NOT ESTABLISHED
```

Some historical WSDOT documentation discusses live imagery and older camera systems, but the current public system's authoritative description is **still-image cameras**. ([WSDOT][3])

For ATLAS, believe the current source.

---

### 5. WSDOT Traveler Information API

The current WSDOT real-time page explicitly links to a:

**Traveler Information API**

([WSDOT][1])

This is extremely important.

Unlike states where we only find a JavaScript map and have to reverse-engineer it, Washington **officially exposes a machine-oriented traveler-information interface**.

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-TRAVELER-API

OWNER:
    WSDOT

TYPE:
    OFFICIAL_TRAVELER_INFORMATION_API

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 6. Camera API should be treated separately

The API should be modeled as:

```text
WA-WSDOT-TRAVELER-API
│
├── CAMERAS
├── ALERTS
├── TRUCK RESTRICTIONS
├── MOUNTAIN PASSES
├── WEATHER
├── TRAVEL TIMES
└── OTHER TRAVEL DATA
```

rather than creating a separate unrelated camera scraper.

This is exactly the type of source architecture ATLAS should prefer.

---

### 7. WSDOT border cameras

WSDOT has a dedicated border-crossing information system.

The current official page states that there are **16 traffic cameras** at or near Washington's Canadian border crossings, including:

* I-5 Peace Arch
* SR 543 Pacific Highway
* SR 539 Guide Meridian
* SR 9 Sumas.

([WSDOT][4])

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-BORDER-CCTV

TYPE:
    BORDER_TRAFFIC_CAMERA

COUNT:
    16

PUBLIC:
    YES

STATUS:
    VERIFIED
```

These are not necessarily additional unique physical cameras; ATLAS should deduplicate them against the statewide camera inventory.

---

### 8. Washington State Ferries cameras

Washington State Ferries is part of WSDOT.

The current WSDOT ferry site provides **terminal traffic cameras** as part of its real-time ferry information. ([WSDOT][5])

#### ATLAS

```text
SOURCE_ID:
    WA-WSF-TERMINAL-CCTV

OWNER:
    WASHINGTON STATE FERRIES / WSDOT

TYPE:
    MARINE_TERMINAL_TRAFFIC_CAMERA

PUBLIC:
    YES

STATUS:
    VERIFIED
```

This is worth ingesting because the camera network isn't restricted to highways.

---

### 9. WSDOT traffic detectors

WSDOT's current real-time page also describes **induction-loop traffic detectors** embedded in roadways.

They provide information to:

* traffic signals
* ramp meters
* travel-time signs
* Traffic Management Centers
* public traffic-condition displays.

([WSDOT][1])

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-TRAFFIC-DETECTORS

TYPE:
    ROADWAY_SENSOR

TECHNOLOGY:
    INDUCTION_LOOP

PUBLIC_DERIVED_DATA:
    YES

RAW_SENSOR_NETWORK:
    NOT NECESSARILY PUBLIC
```

This is not a camera, but it is valuable contextual data.

---

### 10. WSDOT weather stations

The current real-time system exposes **weather stations** and says they provide current and forecast weather conditions at strategic points along the road. ([WSDOT][1])

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-WEATHER

TYPE:
    ROAD_WEATHER_STATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 11. WSDOT mountain-pass data

The public system currently exposes **16 mountain-pass reports**. ([WSDOT][1])

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-MOUNTAIN-PASSES

TYPE:
    ROAD_CONDITION / WEATHER

COUNT:
    16

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 12. WSDOT traffic alerts

The real-time system is also fed by Washington Traffic Management Centers.

WSDOT states that its TMCs and Washington State Ferries report:

* closures
* collisions
* construction
* reduced ferry service
* low tides
* other roadway/ferry events.

([WSDOT][1])

#### ATLAS

```text
SOURCE_ID:
    WA-WSDOT-ALERTS

TYPE:
    TRANSPORTATION_EVENTS

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 13. WSDOT CCTV infrastructure

WSDOT has a long-established statewide CCTV network.

A WSDOT report documented **860 CCTV cameras in 2012**, with those cameras providing live images to the public. ([WSDOT][3])

That historical number is useful only as a historical reference.

The current public inventory is much larger:

```text
CURRENT:
    1,681 cameras

HISTORICAL:
    860 CCTV cameras in 2012
```

Do **not** merge these counts.

---

### 14. Washington State Patrol — radio

Washington State Patrol

Washington State Patrol operates its own statewide land-mobile-radio infrastructure.

Washington's statewide communications documentation says WSP's Electronic Services Division operates and maintains the agency's statewide:

* LMR network
* microwave network
* data networks
* voice networks.

It supports more than:

* 2,500 mobile/portable radios
* 45 communications consoles
* 7 communications centers
* 63 offices
* 2 data centers
* **120+ communications sites**.

([Washington Technology Solutions][6])

#### ATLAS

```text
SOURCE_ID:
    WA-WSP-LMR

OWNER:
    WASHINGTON STATE PATROL

TYPE:
    STATEWIDE_LAW_ENFORCEMENT_RADIO

STATUS:
    VERIFIED
```

---

### 15. WSP radio is P25

Washington's official material confirms P25 infrastructure.

A Washington State Patrol radio audit describes the move to a **P25 digital radio system**, and Washington's current interoperability standards require new trunked systems to be at least Project 25. ([Washington State Online Services][7])

#### ATLAS

```text
SYSTEM:
    WA-WSP-LMR

STANDARD:
    APCO P25

TYPE:
    DIGITAL LMR

STATUS:
    VERIFIED
```

---

### 16. Washington does NOT have one giant unified public radio system

This is important.

Washington operates:

```text
WSP STATE SYSTEM
+
COUNTY SYSTEMS
+
CITY SYSTEMS
+
REGIONAL SYSTEMS
+
SPECIAL-PURPOSE SYSTEMS
```

The state's interoperability documents explicitly describe multiple independent mission-critical voice/data systems managed by different agencies. ([Washington Technology Solutions][6])

Therefore ATLAS should **not** create:

```text
WASHINGTON RADIO SYSTEM
```

as though everything were one trunked system.

Instead:

```text
WASHINGTON
│
├── WSP
├── PSERN
├── County systems
├── City systems
├── Fire/EMS systems
└── Other agency systems
```

---

### 17. Puget Sound Emergency Radio Network — PSERN

The Seattle/Puget Sound region is particularly important.

Broadcastify currently identifies PSERN ingest nodes serving:

* Seattle/Eastside
* South King
* other regional areas.

([Broadcastify][8])

#### ATLAS

```text
SOURCE_ID:
    WA-PSERN

TYPE:
    REGIONAL_PUBLIC_SAFETY_RADIO

REGION:
    PUGET SOUND

STATUS:
    VERIFIED
```

This is a major regional radio source and should be modeled independently of WSP.

---

### 18. Broadcastify — Washington

[Broadcastify Washington](https://www.broadcastify.com/listen/stid/53?utm_source=chatgpt.com)

The current Washington listing shows **85 audio feeds across 36 counties** in the public-safety category page, while the broader state page currently shows **111 total feeds** across public safety, rail, amateur, aviation, marine and other categories. ([Broadcastify][9])

#### ATLAS

```text
SOURCE_ID:
    WA-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

COUNT:
    DYNAMIC

STATUS:
    VERIFIED
```

Because feed counts change, ATLAS should store:

```text
observed_at
feed_count
```

rather than hard-coding the number.

---

### 19. Broadcastify Washington coverage

Current public-safety coverage includes counties such as:

* King
* Pierce
* Spokane
* Snohomish
* Whatcom
* Yakima
* Thurston
* Clark
* Kitsap
* Skagit
* Benton
* Chelan
* many others.

([Broadcastify][9])

This is strong evidence that Washington has a broad public scanner ecosystem.

---

### 20. Seattle / King County scanner sources

King County currently has Broadcastify coverage for:

* Auburn Police
* Federal Way Police
* King County Sheriff
* NORCOM
* Bellevue/Clyde Hill/Medina
* Kirkland/Normandy Park
* Bothell/Lake Forest Park/Mercer Island
* Seattle police
* Seattle Fire
* Washington State Patrol.

([Broadcastify][8])

#### ATLAS

```text
SOURCE_FAMILY:
    WA-KING-COUNTY-RADIO

SUBSYSTEMS:
    KCSO
    SEATTLE
    NORCOM
    WSP
    FIRE/EMS
```

---

### 21. Encryption caveat

Broadcastify explicitly notes that encrypted channels are unavailable.

For example, the Seattle feed says encrypted channels are not available, and Seattle Fire notes that it has begun encrypting operational channels. ([Broadcastify][8])

Therefore:

```text
PUBLIC_RADIO_SYSTEM:
    YES

PUBLIC_AUDIO:
    PARTIAL

ENCRYPTED_CHANNELS:
    NOT AVAILABLE THROUGH PUBLIC SCANNER FEEDS
```

Again: **never interpret missing audio as missing radio infrastructure.**

---

### 22. FCC radio licensing

The FCC should be another foundational source.

ATLAS should use FCC licensing to cross-reference:

```text
CALL SIGN
LICENSEE
FREQUENCY
SITE
TRANSMITTER
LAT/LON
EMISSION
SERVICE
```

This is particularly valuable for Washington because the state contains a large number of independent local and regional radio systems.

#### ATLAS

```text
SOURCE_ID:
    FCC-WA-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

AUTHORITY:
    FEDERAL

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 23. Washington ALPR — major 2026 development

This is where Washington becomes extremely interesting.

Washington enacted **Chapter 239, Laws of 2026**, establishing a statewide ALPR framework.

The Washington Attorney General now has an official:

**Automated License Plate Reader (ALPR) System Registration**

page.

[Washington Attorney General — ALPR System Registration](https://www.atg.wa.gov/automated-license-plate-reader-alpr?utm_source=chatgpt.com)

The AG says the law requires **all state and local agencies that operate or intend to operate an ALPR system to register that system with the Attorney General.** ([Washington Attorney General's Office][10])

This is a major ATLAS discovery.

---

### 24. Washington ALPR registration

The AG registration requires the head of the agency to certify that:

* the ALPR system complies with the law
* the agency has adopted an ALPR policy
* documented training exists for personnel operating the system.

Agencies **may not operate an ALPR system that has not been registered**. ([Washington Attorney General's Office][10])

#### ATLAS

```text
SOURCE_ID:
    WA-AG-ALPR-REGISTRY

OWNER:
    WASHINGTON ATTORNEY GENERAL

TYPE:
    STATEWIDE_ALPR_REGISTRATION

COVERAGE:
    STATE + LOCAL AGENCIES

PUBLIC_REGISTRATION:
    YES

STATUS:
    VERIFIED
```

---

### 25. This is potentially a master ALPR discovery source

The architecture is:

```text
WASHINGTON ATTORNEY GENERAL
          │
          ▼
     ALPR REGISTRY
          │
    ┌─────┴─────┐
    ▼           ▼
  AGENCY       SYSTEM
    │           │
    ├── policy  ├── registration
    └── training
```

For ATLAS this is much better than searching for:

```text
Flock Washington
Motorola Washington ALPR
Axon Washington ALPR
Rekor Washington
Peregrine Washington
etc.
```

The state itself now requires the agencies to register.

---

### 26. Washington ALPR law

The new law defines an ALPR system as software/algorithmic technology, alone or with fixed/mobile cameras, that converts license-plate imagery into computer-readable data. ([Washington State Legislature][11])

It explicitly excludes certain automated traffic/school-bus/speed-camera systems unless they interact with ALPR systems.

#### ATLAS canonical category

```text
CAMERA_CLASS:
    ALPR

NOT AUTOMATICALLY:
    SPEED CAMERA
    RED-LIGHT CAMERA
    SCHOOL-BUS CAMERA
    PHOTO TOLL CAMERA
```

This distinction should be built into the schema.

---

### 27. Who can use Washington ALPR?

The new law authorizes different uses for:

#### Law enforcement

Comparison against authorized databases concerning:

* stolen vehicles
* missing/endangered persons
* NCMEC-related lists
* warrants
* vehicles involved in specified felony/gross-misdemeanor investigations.

#### Parking enforcement

For:

* parking restrictions
* certain impound/immobilization lists.

#### Transportation agencies

For:

* real-time traffic information
* traffic modeling/studies
* construction-delay analysis
* route-use analysis
* commercial-vehicle enforcement at WSP sites/weigh stations.

([Washington State Legislature][12])

This is an important source distinction.

---

### 28. Washington transportation ALPR

The new law specifically authorizes transportation agencies to use ALPR for:

```text
REAL-TIME TRAFFIC INFORMATION
TRAFFIC MODELING
TRAFFIC STUDIES
CONSTRUCTION DELAY ANALYSIS
ROUTE-USE ANALYSIS
COMMERCIAL VEHICLE ENFORCEMENT
```

([Washington State Legislature][12])

Therefore ATLAS should create:

```text
WA-WSDOT-ALPR
```

as a **research target**, even if we don't yet have evidence of a specific public WSDOT ALPR deployment.

#### Current classification

```text
LEGAL AUTHORITY:
    YES

SPECIFIC WSDOT DEPLOYMENT:
    NOT YET CONFIRMED

PUBLIC ALPR DATA:
    NO
```

Do not turn legal authority into a deployment claim.

---

### 29. Washington ALPR registration vs. public data

The underlying ALPR data is **not public under the Washington Public Records Act**, except for bona fide research without individually identifiable information. ([Washington State Legislature][13])

So:

```text
PUBLIC ALPR RAW DATA:
    NO

PUBLIC PLATE HISTORY:
    NO

PUBLIC LIVE PLATE FEED:
    NO

PUBLIC ALPR REGISTRATION:
    YES

PUBLIC ALPR POLICIES:
    YES / REQUIRED

PUBLIC CAMERA LOCATIONS:
    FUTURE ANNUAL REPORTING
```

---

### 30. Future ALPR annual reporting

Washington's law requires agencies using ALPR systems to submit annual reports to appropriate legislative committees.

The annual reporting includes:

* camera locations
* ALPR practices
* usage
* other required reporting information.

([Washington State Legislature][14])

However, the reporting deadlines are staged.

The Attorney General must develop model policies by **July 1, 2027**, while agencies using ALPR must adopt compliant policies and submit annual reports by **December 1, 2027**. ([Washington State Legislature][14])

#### ATLAS

```text
CURRENT:
    ALPR REGISTRATION

FUTURE:
    AGENCY POLICIES
    ANNUAL USAGE REPORTS
    CAMERA LOCATIONS

FIRST MAJOR REPORTING DEADLINE:
    2027
```

This should be tracked as a future source.

---

### 31. Washington ALPR retention

The new law generally limits ALPR retention to **21 days**, with exceptions for:

* court orders/warrants/subpoenas
* parking enforcement
* traffic studies
* commercial-vehicle enforcement
* evidence of specified unlawful conduct.

([Washington State Legislature][15])

Examples:

```text
PARKING:
    ≤12 hours after final disposition

TRAFFIC STUDIES:
    ≤30 days

COMMERCIAL VEHICLE:
    ≤6 months

LAW ENFORCEMENT EVIDENCE:
    potentially longer under statutory exception
```

([Washington State Legislature][15])

---

### 32. Private ALPR

Washington's new law also addresses privately held ALPR data.

An agency may obtain privately held ALPR data **only through a valid court-issued probable-cause warrant**. ([Washington State Legislature][13])

This means ATLAS should distinguish:

```text
GOVERNMENT ALPR
PRIVATE ALPR
LAW-ENFORCEMENT ACCESS TO PRIVATE ALPR
```

rather than treating all three as one source.

---

### 33. Washington surveillance ecosystem

The new ALPR law is narrower than Virginia's giant surveillance-reporting framework.

I have **not** found a Washington equivalent requiring every law-enforcement agency to publish one comprehensive statewide inventory of:

* CCTV
* gunshot detection
* Bluetooth
* RFID
* drones
* radio scanners
* biometrics
* etc.

Therefore I will **not** claim that such a statewide surveillance inventory exists.

Current confirmed Washington statewide mechanism:

```text
ALPR:
    YES

CCTV:
    WSDOT PUBLIC NETWORK

RADIO:
    WSP + LOCAL SYSTEMS

OTHER SURVEILLANCE:
    INDIVIDUAL-AGENCY RESEARCH REQUIRED
```

---

### 34. Washington traffic-camera ecosystem

The verified statewide structure is:

```text
WASHINGTON
│
└── WSDOT
    │
    └── REAL-TIME TRAVEL
        │
        ├── 1,681 cameras
        ├── Traffic flow
        ├── Alerts
        ├── Truck restrictions
        ├── Mountain passes
        ├── Weather stations
        ├── Travel times
        ├── Border crossings
        ├── Wildland fires
        └── Mileposts
```

([WSDOT][1])

---

### 35. Washington radio ecosystem

```text
WASHINGTON RADIO
│
├── WASHINGTON STATE PATROL
│   └── STATEWIDE LMR
│
├── PSERN
│   └── PUGET SOUND
│
├── COUNTY SYSTEMS
│
├── CITY SYSTEMS
│
├── FIRE / EMS
│
├── FCC
│
├── RADIOREFERENCE
│
└── BROADCASTIFY
```

Washington's official interoperability documentation confirms the existence of multiple independent systems rather than one universal statewide system. ([Washington Technology Solutions][6])

---

### 36. Highest-value Washington sources

#### 🥇 WSDOT Real-Time Travel

[WSDOT Traffic Cameras / Real-Time Travel](https://wsdot.com/travel/real-time/traffic-cameras?utm_source=chatgpt.com)

**Current cameras:** 1,681
**Public:** YES
**Official:** YES
**Still images:** YES
**API:** YES — Traveler Information API. ([WSDOT][1])

---

#### 🥈 Washington Attorney General ALPR Registry

[Washington AG — ALPR System Registration](https://www.atg.wa.gov/automated-license-plate-reader-alpr?utm_source=chatgpt.com)

**Statewide ALPR registration:** YES
**State agencies:** YES
**Local agencies:** YES
**Required before operation:** YES. ([Washington Attorney General's Office][10])

---

#### 🥉 Washington ALPR statute

[RCW Chapter 10.130 — ALPR](https://app.leg.wa.gov/RCW/default.aspx?cite=10.130&utm_source=chatgpt.com)

Defines:

* authorized use
* registration
* retention
* sharing
* vendor requirements
* reporting
* camera-location reporting.

([Washington State Legislature][12])

---

### 4. Washington State Patrol radio

[Washington State Patrol](https://www.wsp.wa.gov/?utm_source=chatgpt.com)

**Statewide LMR:** YES
**P25:** YES
**120+ communications sites:** documented. ([Washington Technology Solutions][6])

---

### 5. Broadcastify Washington

[Broadcastify Washington](https://www.broadcastify.com/listen/stid/53?utm_source=chatgpt.com)

**Public scanner audio:** YES
**36 counties represented:** YES
**Dynamic feed inventory:** YES. ([Broadcastify][9])

---

### 37. Exact-source matrix

| Source                         | Category             | Public | Machine-readable | Status                                      |
| ------------------------------ | -------------------- | -----: | ---------------: | ------------------------------------------- |
| WSDOT Real-Time Travel         | Traveler information |     🟢 |               🟢 | **VERIFIED**                                |
| WSDOT Traffic Cameras          | Traffic cameras      |     🟢 |               🟢 | **VERIFIED**                                |
| WSDOT Traveler Information API | API                  |     🟢 |               🟢 | **VERIFIED**                                |
| WSDOT Border Cameras           | Border CCTV          |     🟢 |               🟢 | **VERIFIED**                                |
| WSDOT Ferry Terminal Cameras   | CCTV                 |     🟢 |               🟡 | **VERIFIED**                                |
| WSDOT Weather Stations         | Weather              |     🟢 |            🟢/🟡 | **VERIFIED**                                |
| WSDOT Traffic Detectors        | Road sensors         |     🟡 |               🟡 | **VERIFIED**                                |
| WSP LMR                        | State police radio   |     🟡 |               🟡 | **VERIFIED**                                |
| PSERN                          | Regional radio       |     🟡 |               🟡 | **VERIFIED**                                |
| FCC                            | Radio licenses       |     🟢 |            🟢/🟡 | **VERIFIED**                                |
| Broadcastify                   | Scanner audio        |     🟢 |               🟡 | **VERIFIED**                                |
| WA AG ALPR Registry            | ALPR inventory       |     🟢 |               🟡 | **VERIFIED / NEW 2026**                     |
| WA ALPR annual reporting       | ALPR inventory       |     🟢 |               🟡 | **FUTURE / 2027**                           |
| WSDOT ALPR                     | Transportation ALPR  |     🔴 |               🔴 | **LEGAL AUTHORITY; DEPLOYMENT UNCONFIRMED** |
| Private ALPR                   | ALPR                 |     🔴 |               🔴 | **ACCESS REQUIRES WARRANT**                 |
| Public raw ALPR                | ALPR                 |     🔴 |               🔴 | **NOT PUBLIC**                              |
| Public live ALPR               | ALPR                 |     🔴 |               🔴 | **NOT FOUND**                               |

---

### 38. ATLAS source IDs

```text
WA-WSDOT
WA-WSDOT-REALTIME
WA-WSDOT-CCTV
WA-WSDOT-TRAVELER-API
WA-WSDOT-CAMERA-MAP
WA-WSDOT-BORDER-CCTV
WA-WSF-TERMINAL-CCTV
WA-WSDOT-TRAFFIC-DETECTORS
WA-WSDOT-WEATHER
WA-WSDOT-MOUNTAIN-PASSES
WA-WSDOT-ALERTS

WA-WSP-LMR
WA-PSERN
WA-FCC-PUBLIC-SAFETY
WA-RADIOREFERENCE
WA-BROADCASTIFY

WA-AG-ALPR-REGISTRY
WA-ALPR
WA-ALPR-ANNUAL-REPORTING
WA-WSDOT-ALPR
WA-WSP-ALPR
WA-PRIVATE-ALPR
```

---

### 39. Washington rating

| Category                    |                     Rating |
| --------------------------- | -------------------------: |
| State traffic cameras       |         🟢 **Exceptional** |
| Current camera inventory    | 🟢 **Exceptional — 1,681** |
| Official camera API         |           🟢 **Excellent** |
| Transportation data         |         🟢 **Exceptional** |
| Border cameras              |           🟢 **Excellent** |
| Ferry cameras               |                🟢 **Good** |
| State police radio          |           🟢 **Excellent** |
| Regional radio              |           🟢 **Excellent** |
| Public scanner coverage     |           🟢 **Excellent** |
| ALPR legal framework        |         🟢 **Exceptional** |
| ALPR statewide registration |         🟢 **Exceptional** |
| ALPR public inventory       |            🟡 **Emerging** |
| Public raw ALPR             |                  🔴 **No** |
| Public live ALPR            |                  🔴 **No** |

### **Overall: 9.7 / 10**

#### Biggest Washington discoveries

**#1 — 1,681 official WSDOT cameras**

This is one of the largest verified state DOT camera inventories we've encountered. WSDOT explicitly provides the public camera map and an official Traveler Information API. ([WSDOT][1])

**#2 — Washington just created a statewide ALPR registration system**

Every state/local agency operating or intending to operate ALPR must register with the Attorney General, and the agency must certify compliance, policy, and training. ([Washington Attorney General's Office][10])

**#3 — Future reports will contain camera locations**

Washington's new law requires annual ALPR reporting and specifically identifies **locations of cameras used as part of ALPR systems** as reportable information. ([Washington State Legislature][14])

So Washington's ALPR discovery pipeline should ultimately become:

```text
WA ATTORNEY GENERAL
        ↓
ALPR REGISTRATION
        ↓
AGENCY
        ↓
ALPR SYSTEM
        ↓
CAMERAS
        ↓
LOCATIONS
        ↓
ANNUAL USAGE REPORTS
```

That is exactly the sort of **official, scalable source** we want for ATLAS.

**Next alphabetically: West Virginia.**

[1]: https://wsdot.com/travel/real-time/traffic-cameras?utm_source=chatgpt.com "Real-time travel data | WSDOT"
[2]: https://wsdot.com/Travel/Real-time/Map/?featureid=3072&featuretype=camera&utm_source=chatgpt.com "Travel Center Map | WSDOT"
[3]: https://wsdot.wa.gov/publications/fulltext/graynotebook/cr12.pdf?utm_source=chatgpt.com "2012 Congestion Report"
[4]: https://apps.wsdot.wa.gov/travel/roads-bridges/border-crossings?utm_source=chatgpt.com "Border crossings | WSDOT"
[5]: https://wsdot.wa.gov/travel/washington-state-ferries?utm_source=chatgpt.com "Washington State Ferries | WSDOT"
[6]: https://watech.wa.gov/sites/default/files/2023-10/WA%20SCIP_DRAFT_8.8.23.pdf?utm_source=chatgpt.com "WASHINGTON"
[7]: https://portal.sao.wa.gov/ReportSearch/Home/ViewReportFile?arn=1015481&isFinding=false&utm_source=chatgpt.com "WSP_Radio_book.indb"
[8]: https://status.broadcastify.com/listen/ctid/2974/publicsafety?utm_source=chatgpt.com "King County, Washington Audio Feeds"
[9]: https://status.broadcastify.com/listen/stid/53/publicsafety?utm_source=chatgpt.com "Washington Audio Feeds"
[10]: https://www.atg.wa.gov/automated-license-plate-reader-alpr?utm_source=chatgpt.com "Automated License Plate Reader (ALPR) | Washington State"
[11]: https://app.leg.wa.gov/RCW/default.aspx?cite=10.130.020&utm_source=chatgpt.com "RCW 10.130.020:"
[12]: https://leg.wa.gov/media/rm0dp4jb/2026pam2.pdf?utm_source=chatgpt.com "WASHINGTON LAWS, 2026  Ch. 239"
[13]: https://app.leg.wa.gov/RCW/default.aspx?cite=10.130.050&utm_source=chatgpt.com "RCW 10.130.050:"
[14]: https://app.leg.wa.gov/RCW/default.aspx?cite=10.130.070&utm_source=chatgpt.com "RCW 10.130.070:"
[15]: https://app.leg.wa.gov/RCW/default.aspx?cite=10.130.040&utm_source=chatgpt.com "RCW 10.130.040:"
