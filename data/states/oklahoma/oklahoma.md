---
state: Oklahoma
usps: OK
slug: oklahoma
dossier_number: 36
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
  imported_from: project_atlas_state_data/Oklahoma.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Oklahoma (OK) - ATLAS State Record

> Dossier **36 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Oklahoma is an interesting state because the **public transportation website is real and substantial**, but the machine-readable access is more fragmented than Ohio.

The major findings are:

* **500+ ODOT cameras** are connected to OKTraffic.
* ODOT officially describes OKTraffic as providing **live camera streams**, DMS, weather, work zones, etc.
* ODOT's public WZDx/GeoJSON feeds are available for **work zones, closures, and detours**.
* The camera/incident/DMS portions of the current OKTraffic backend appear to require authentication, so I am **not going to pretend there is a public camera API when I cannot verify one**.
* Oklahoma has a major statewide P25 system: **OKWIN**.
* OKWIN has **43 sites, 520+ agencies, and 40,000 radios**, covering roughly 70% of the state's population. ([Welcome to Oklahoma's Official Web Site][1])
* Broadcastify currently lists **152 Oklahoma feeds across 61 counties**, including substantial OKWIN and Oklahoma City coverage. ([Broadcastify][2])
* Oklahoma has a very large Flock/ALPR footprint, but ALPR data itself is not a public feed.
* Oklahoma City currently has **90 Flock Falcon cameras** documented through public-record research, and the city renewed its Flock contract in August 2026. ([DeFlockOKC][3])

---

### 1. Oklahoma Department of Transportation

Primary transportation agency:

**Oklahoma Department of Transportation — ODOT**

Its public traveler-information platform is:

### OKTraffic

Official site:

[OKTraffic.org](https://oktraffic.org/?utm_source=chatgpt.com)

ODOT's own statewide ITS/TSMO plan describes OKTraffic as its traveler-information website and says it provides:

* current traffic conditions
* weather conditions
* live camera streams
* dynamic message signs
* EV charging stations
* temperature
* work zones
* wind-gust information. ([Welcome to Oklahoma's Official Web Site][4])

#### Registry

```text
SOURCE_ID:
    OK-ODOT-OKTRAFFIC

OWNER:
    Oklahoma Department of Transportation

PROGRAM:
    OKTraffic

TYPE:
    STATEWIDE_TRAVELER_INFORMATION

STATUS:
    🟢 VERIFIED
```

---

### 2. Oklahoma's camera network

This is a major discovery.

ODOT stated in March 2024 that **more than 500 cameras** were already connected to OKTraffic and the Drive Oklahoma application. The same announcement awarded a project to install additional cameras at:

* 6 Tulsa locations
* 5 Oklahoma City locations

for a total of 11 additional traffic-camera locations. ([Welcome to Oklahoma's Official Web Site][5])

Therefore:

```text
ODOT CAMERA NETWORK:

500+
    +
additional installations
    =
STATEWIDE NETWORK
```

#### Registry

```text
SOURCE_ID:
    OK-ODOT-CCTV

APPROXIMATE INVENTORY:
    500+ documented by ODOT in 2024

TYPE:
    TRAFFIC CCTV

STATUS:
    🟢 VERIFIED
```

**Do not record "500+" as the current exact count.** It is the most recent official count I found, but additional cameras have been added since then.

---

### 3. ODOT officially confirms live camera streams

ODOT's statewide ITS plan specifically says:

> OKTraffic ... provides users ... access to live camera streams.

It also says the Drive Oklahoma mobile application integrates the OKTraffic system and its live-feed web cameras. ([Welcome to Oklahoma's Official Web Site][4])

So this is not merely a map containing periodically updated JPEGs.

```text
LIVE CAMERA STREAMS:
    🟢 OFFICIALLY CONFIRMED
```

However:

```text
PUBLIC MACHINE-READABLE STREAM API:
    ❓ NOT VERIFIED
```

That distinction is important.

---

### 4. OKTraffic camera URLs

A particularly useful historical technical discovery exists in research analyzing the OKTraffic website.

The study found that OKTraffic's camera images used URLs containing camera IDs and a timestamp/cache-busting value. It documented the behavior as a JavaScript-generated image URL that changes approximately every second. ([Loyola Chicago Research Portal][6])

This establishes that the frontend historically generated camera-image requests rather than requiring the browser to render the entire camera system from a conventional video API.

But:

**This is historical technical evidence, not a current official API specification.**

Therefore:

```text
OLD URL MECHANISM:
    🟡 DOCUMENTED

CURRENT URL FORMAT:
    ❓ MUST BE RE-VERIFIED

SAFE TO BUILD AGAINST:
    🔴 NOT YET
```

---

### 5. Current OKTraffic API situation

This is where Oklahoma differs sharply from Ohio.

A recent independent statewide transportation-data audit found:

```text
OK WZDx:
    PUBLIC

OK incidents:
    AUTHENTICATED

OK cameras:
    AUTHENTICATED

OK DMS:
    AUTHENTICATED
```

The audit specifically identified the public WZDx endpoints while reporting that camera/incident/DMS requests return `401` and require an ODOT arrangement. ([iThub][7])

This is consistent with the current public OKTraffic site being operational while the underlying machine-readable interfaces aren't simply exposed as an anonymous public API.

#### ATLAS classification

```text
OKTRAFFIC WEBSITE:
    🟢

CAMERA SYSTEM:
    🟢

PUBLIC CAMERA DATA:
    🟡

ANONYMOUS CAMERA API:
    🔴 NOT VERIFIED

AUTHENTICATED API:
    🟡 EXISTS / ACCESS CONTROLLED

ODOT ARRANGEMENT:
    🟡 REQUIRED FOR FULL MACHINE ACCESS
```

---

### 6. Exact public WZDx sources

This is where Oklahoma becomes much cleaner.

The public transportation-data audit identifies three Oklahoma WZDx/GeoJSON resources:

```text
https://oktraffic.org/api/Geojsons/workzones
https://oktraffic.org/api/Geojsons/closures
https://oktraffic.org/api/Geojsons/detours
```

The audit reports these as public and CC0, with an openly published token where required. ([iThub][7])

#### Registry

```text
SOURCE_ID:
    OK-ODOT-WZDX

ENDPOINTS:
    /api/Geojsons/workzones
    /api/Geojsons/closures
    /api/Geojsons/detours

FORMAT:
    GeoJSON

AUTH:
    PUBLIC TOKEN

LICENSE:
    CC0

STATUS:
    🟢 VERIFIED
```

---

### 7. Work zones

Exact source:

```text
https://oktraffic.org/api/Geojsons/workzones
```

#### ATLAS

```text
SOURCE_ID:
    OK-ODOT-WORKZONES

TYPE:
    WORK_ZONE

FORMAT:
    GEOJSON

LICENSE:
    CC0

STATUS:
    🟢 VERIFIED
```

---

### 8. Road closures

Exact source:

```text
https://oktraffic.org/api/Geojsons/closures
```

#### ATLAS

```text
SOURCE_ID:
    OK-ODOT-CLOSURES

TYPE:
    ROAD_CLOSURE

FORMAT:
    GEOJSON

LICENSE:
    CC0

STATUS:
    🟢 VERIFIED
```

---

### 9. Detours

Exact source:

```text
https://oktraffic.org/api/Geojsons/detours
```

#### ATLAS

```text
SOURCE_ID:
    OK-ODOT-DETOURS

TYPE:
    DETOUR

FORMAT:
    GEOJSON

LICENSE:
    CC0

STATUS:
    🟢 VERIFIED
```

---

### 10. Important distinction: camera vs WZDx

Do **not** merge these into one source.

Oklahoma currently gives us:

```text
                    OKTraffic
                       │
             ┌─────────┴─────────┐
             │                   │
       PUBLIC WZDx          CONTROLLED DATA
             │                   │
       ┌─────┼─────┐       ┌─────┼─────┐
       │     │     │       │     │     │
    Work  Closure Detour  Cameras Incidents DMS
    Zones
```

The WZDx portion is suitable for direct machine ingestion.

The camera portion requires further authorization/research before treating it as an official public API.

---

### 11. ODOT road-weather data

ODOT has substantial weather instrumentation.

The 2021 ODOT announcement reported:

### 167 road-weather sites

feeding temperature data into OKTraffic. ([Welcome to Oklahoma's Official Web Site][8])

ODOT's current statewide ITS documentation also describes weather data as part of OKTraffic. ([Welcome to Oklahoma's Official Web Site][4])

#### Registry

```text
SOURCE_ID:
    OK-ODOT-RWIS

TYPE:
    ROAD_WEATHER_SENSOR

KNOWN_SCALE:
    167 sites documented in 2021

STATUS:
    🟢 VERIFIED

CURRENT_EXACT_COUNT:
    ❓
```

Again, don't promote the old 167 number to a current exact count.

---

### 12. Sensor cameras

This is another important category.

ODOT's documentation explicitly distinguishes:

```text
WEB CAMERAS
+
SENSOR CAMERAS
```

as components of OKTraffic. ([Transportation Operations][9])

This is useful for ATLAS because these should not automatically be classified as ordinary CCTV.

```text
CAMERA_TYPES:

traffic observation
sensor camera
mobile camera
snowplow camera
```

---

### 13. Mobile snowplow cameras

Oklahoma also has:

### OKRoads

ODOT says OKRoads uses:

* static cameras
* mobile dash cameras from active snowplow vehicles
* weather/road condition information. ([Welcome to Oklahoma's Official Web Site][4])

The strategic plan specifically states that much of the imagery is derived from mobile sources.

#### Registry

```text
SOURCE_ID:
    OK-ODOT-SNOWPLOW-CAMERAS

PROGRAM:
    OKRoads

TYPE:
    MOBILE_ROADWAY_CAMERA

PLATFORM:
    SNOWPLOW / MOBILE

STATUS:
    🟢 VERIFIED
```

---

### 14. OKRoads

Official road-condition platform:

[OKRoads.org](https://okroads.org/?utm_source=chatgpt.com)

ODOT's statewide plan says OKRoads provides:

* weather-related highway conditions
* closures
* static camera imagery
* mobile snowplow imagery
* weather radar
* weather conditions. ([Welcome to Oklahoma's Official Web Site][4])

#### Registry

```text
SOURCE_ID:
    OK-ODOT-OKROADS

TYPE:
    ROAD_CONDITION_SYSTEM

STATUS:
    🟢 VERIFIED
```

---

### 15. Drive Oklahoma application

ODOT's public mobile application:

### Drive Oklahoma

integrates OKTraffic and OKRoads.

The National Operations Center of Excellence documents that the application includes:

* Google traffic
* Waze traffic
* NOAA weather
* live web cameras
* DMS
* sensor cameras
* work zones
* road conditions
* snowplow pictures
* radar. ([Transportation Operations][10])

This gives us another potential source-discovery target.

#### ATLAS status

```text
DRIVE OKLAHOMA:
    🟢 VERIFIED

PUBLIC DATA:
    🟢

DIRECT API:
    ❓

BACKEND REVERSE ENGINEERING:
    🟡 POTENTIAL
```

---

### 16. ODOT CCTV expansion is active

ODOT's procurement records show ongoing CCTV construction.

A 2024 ODOT project specifically covered:

```text
Oklahoma County
+
Tulsa County
```

with CCTV installations at multiple interstate/highway intersections. ([Oklahoma Department of Transportation][11])

Another 2024 ODOT specification covers installation of stationary and PTZ CCTV cameras. ([Oklahoma Department of Transportation][12])

This proves the camera inventory is actively expanding.

---

### 17. ODOT camera capabilities

The procurement documents explicitly identify:

```text
CCTV CAMERA
PAN-TILT-ZOOM
```

as ODOT equipment categories. ([Oklahoma Department of Labor][13])

Therefore:

```text
FIXED CCTV:
    🟢

PTZ CCTV:
    🟢

MOBILE CCTV:
    🟢

SNOWPLOW CAMERA:
    🟢
```

---

### 18. Oklahoma ALPR

Oklahoma has a **very large ALPR deployment footprint**.

The most current independent map/database I found reports:

### 1,429 ALPR/Flock cameras documented statewide

as of August 27, 2026. ([Finding Flock][14])

The same source reports:

```text
1,053
inside its indexed cities

376
outside city limits
```

and identifies:

```text
858 Flock Safety
23 Motorola Solutions
```

among cameras where manufacturer was recorded. ([Finding Flock][14])

#### Important classification

This is **not an official Oklahoma government statewide inventory**.

Therefore:

```text
STATEWIDE ALPR COUNT:
    🟡 COMMUNITY-DERIVED

FLOCK LOCATIONS:
    🟡 DISCOVERY DATA

OFFICIAL AUTHORITATIVE COUNT:
    ❓
```

But the scale is significant enough that it absolutely belongs in the source registry.

---

### 19. Oklahoma City Flock

Oklahoma City is one of the strongest individual deployments.

The city began its Flock relationship in:

### 2023

after an earlier pilot beginning in 2022. ([KGOU][15])

Public-record research reports:

### 90 Flock Falcon cameras

in Oklahoma City. ([DeFlockOKC][3])

#### Registry

```text
SOURCE_ID:
    OK-OKCPD-FLOCK

AGENCY:
    Oklahoma City Police Department

VENDOR:
    Flock Safety

MODEL:
    Falcon

KNOWN_COUNT:
    90

STATUS:
    🟢 VERIFIED THROUGH PUBLIC RECORDS
```

---

### 20. Oklahoma City contract renewal — 2026

This is current and important.

On:

### August 18, 2026

the Oklahoma City Council voted to extend the Flock Safety contract.

Vote:

```text
5 FOR
3 AGAINST
1 ABSENT
```

KOSU reports the contract renewal and confirms the city has maintained an active Flock contract since 2023. ([KOSU][16])

So the Oklahoma City Flock system is **currently active** as of this research.

---

### 21. Oklahoma City Flock data controls changed

The 2026 renewal is particularly interesting.

The approved changes reportedly included:

* Oklahoma City controlling federal data sharing
* reducing retention from 30 days to 7 days
* ending automatic nationwide sharing
* allowing case-by-case sharing for significant incidents. ([Don't Flock][17])

This should be captured as a **policy/versioned relationship**, not merely a static Flock deployment.

```text
OKCPD-FLOCK
    │
    ├── deployment
    ├── contract
    ├── retention policy
    ├── sharing policy
    └── renewal history
```

---

### 22. Guthrie Flock

Guthrie is another documented deployment.

The Guthrie City Council approved a Flock system in:

### 2022

as a two-year trial funded by a Department of Justice grant. ([Oklahoma State Capital][18])

The system was subsequently documented as sharing local traffic data with outside government agencies.

#### Registry

```text
SOURCE_ID:
    OK-GUTHRIE-FLOCK

AGENCY:
    Guthrie Police Department

VENDOR:
    Flock Safety

APPROVED:
    2022

STATUS:
    🟢 VERIFIED
```

---

### 23. Tulsa Flock

Tulsa is also confirmed.

The ACLU of Oklahoma documented that:

> Tulsa's police force ... bought a flock of cameras after a one-year trial.

([ACLU of Oklahoma][19])

Therefore:

```text
SOURCE_ID:
    OK-TULSA-PD-FLOCK

AGENCY:
    Tulsa Police Department

VENDOR:
    Flock Safety

STATUS:
    🟢 VERIFIED
```

---

### 24. University of Oklahoma ALPR

This is easy to overlook.

The University of Oklahoma Police Department has a formal:

### Policy 427 — Automated License Plate Readers

The policy says OU PD uses ALPR technology to capture and store license-plate data and images. It specifically says the information is for official departmental use and is not open to public review. ([University of Oklahoma][20])

#### Registry

```text
SOURCE_ID:
    OK-OU-PD-ALPR

AGENCY:
    University of Oklahoma Police Department

TYPE:
    ALPR

PUBLIC_RAW_DATA:
    🔴

STATUS:
    🟢 VERIFIED
```

---

### 25. Oklahoma ALPR legal environment

Oklahoma is unusual.

State legislation specifically addresses automatic license plate readers.

Oklahoma law permits participating agencies to use ALPR systems for enforcement of the state's compulsory-insurance requirements, and data collected under that program receives special statutory treatment. ([NCSL][21])

There has also been substantial disagreement about how the statute applies to modern Flock deployments.

The Oklahoma House itself conducted an interim study on the issue, and the House reported concerns that local governments were using Flock systems beyond what state law permits. ([Oklahoma House of Representatives][22])

So we should **not make a blanket legal conclusion** that all Oklahoma ALPR deployments are unlawful.

Correct ATLAS classification:

```text
ALPR EXISTENCE:
    🟢

ALPR DEPLOYMENT:
    🟢

ALPR RAW DATA:
    🔴

LEGAL STATUS:
    🟡 JURISDICTION / USE-CASE DEPENDENT

STATEWIDE UNIFIED ALPR API:
    🔴
```

---

### 26. Oklahoma statewide radio — OKWIN

Now we get to one of the strongest radio discoveries.

### Oklahoma Wireless Information Network

**OKWIN**

Official Oklahoma DPS source:

[Oklahoma Wireless Information Network (OKWIN)](https://oklahoma.gov/dps/programs-services/okwin.html?utm_source=chatgpt.com)

ODPS describes OKWIN as:

> a 43-site, 800 MHz trunked public-safety communications radio system.

It is a partnership among:

* Oklahoma DPS
* Edmond
* Norman
* Shawnee
* Tulsa
* Owasso. ([Welcome to Oklahoma's Official Web Site][1])

---

### 27. OKWIN scale

The official DPS page currently states:

```text
43 sites

800 MHz

520+ agencies

40,000 handheld/mobile radios

70% of Oklahoma population
```

([Welcome to Oklahoma's Official Web Site][1])

This makes OKWIN one of the most important radio sources we've encountered.

#### Registry

```text
SOURCE_ID:
    OK-OKWIN

OWNER:
    Oklahoma Department of Public Safety + partners

TYPE:
    STATEWIDE / REGIONAL PUBLIC-SAFETY LMR

SITES:
    43

BAND:
    800 MHz

AGENCIES:
    520+

RADIOS:
    40,000+

POPULATION COVERAGE:
    ~70%

STATUS:
    🟢 VERIFIED
```

---

### 28. OKWIN radio standard

The official Oklahoma Field Operations Guide identifies:

```text
OKWIN
TYPE:
    Trunked

MODE:
    P25

BAND:
    800 MHz
```

([Welcome to Oklahoma's Official Web Site][23])

The current OKWIN vendor requirements also require:

* P25 trunking
* P25 compliance
* AMBE+2 vocoder
* secure system-key handling. ([Welcome to Oklahoma's Official Web Site][24])

#### Registry

```text
STANDARD:
    APCO P25

MODE:
    TRUNKED DIGITAL

BAND:
    800 MHz
```

---

### 29. OKWIN is not the entire Oklahoma radio ecosystem

This is important.

Oklahoma also has:

#### Oklahoma City Radio System

```text
OCRS
```

#### Broken Arrow Communications Regional Network

```text
BACRN
```

#### Oklahoma Multi-Agency Communications System

```text
OMACS
```

The state's Field Operations Guide lists these systems alongside OKWIN. ([Welcome to Oklahoma's Official Web Site][23])

The statewide interoperability plan states that OKWIN is the largest statewide LMR network, while Oklahoma City and BACRN provide additional coverage around the state's largest population centers. ([Welcome to Oklahoma's Official Web Site][25])

---

### 30. Oklahoma City radio

The Oklahoma City Trunked Radio System is separately identified as:

```text
TYPE:
    P25 trunked

BAND:
    800 MHz

AREA:
    Canadian County
    Cleveland County
    Oklahoma County
```

The state Field Operations Guide documents this system. ([Welcome to Oklahoma's Official Web Site][23])

#### Registry

```text
SOURCE_ID:
    OK-OKC-OCRS

TYPE:
    MUNICIPAL / METRO P25

STATUS:
    🟢 VERIFIED
```

---

### 31. OMACS

The:

### Oklahoma Multi-Agency Communications System

is another P25 trunked system.

The official state guide identifies:

```text
BAND:
    700/800 MHz

TYPE:
    Trunked

MODE:
    P25

AREA:
    Oklahoma County / Pottawatomie County
```

([Welcome to Oklahoma's Official Web Site][23])

#### Registry

```text
SOURCE_ID:
    OK-OMACS

TYPE:
    REGIONAL / MULTI-AGENCY P25

STATUS:
    🟢 VERIFIED
```

---

### 32. Broadcastify Oklahoma

Current Broadcastify statistics show:

### 152 Oklahoma audio feeds

across:

### 61 counties

with:

### 133 public-safety feeds

plus amateur, rail and other categories. ([Broadcastify][2])

This is an excellent public audio-distribution layer.

#### Registry

```text
SOURCE_ID:
    OK-BROADCASTIFY

STATE:
    OK

TOTAL_AUDIO_FEEDS:
    152

PUBLIC_SAFETY:
    133

COUNTIES:
    61

STATUS:
    🟢 VERIFIED

OBSERVED:
    2026-08-28
```

---

### 33. Oklahoma City Broadcastify

One of the major feeds is:

### Oklahoma City Area Police and Fire

It monitors the Oklahoma City P25 system.

However, there is a critical limitation.

Broadcastify's current notes say:

> as of May 2025, all law enforcement has been encrypted on this system.

([Broadcastify][26])

Therefore:

```text
OKC POLICE:
    🔴 ENCRYPTED

OKC FIRE:
    🟢 PUBLIC PORTIONS

OKC AREA FIRE:
    🟢

PUBLIC POLICE AUDIO:
    🟡 LIMITED / DISPATCH DEPENDENT
```

This is exactly the type of distinction ATLAS needs to preserve.

---

### 34. Oklahoma Highway Patrol

Broadcastify has an Oklahoma Highway Patrol feed for:

### Troop A

covering:

* Comm
* Metro
* Rural
* Turner
* Kilpatrick. ([Broadcastify][27])

#### Registry

```text
SOURCE_ID:
    OK-OHP-TROOP-A-BROADCASTIFY

AGENCY:
    Oklahoma Highway Patrol

TYPE:
    PUBLIC SCANNER AUDIO

STATUS:
    🟢 VERIFIED
```

The Oklahoma City metro feed also lists OHP Troop A. ([Broadcastify][28])

---

### 35. Tulsa radio coverage

Tulsa County is particularly strong.

Broadcastify currently has:

### 2 Broadcastify Calls ingest nodes

for the Tulsa simulcast of OKWIN. ([Broadcastify][29])

There are also multiple conventional audio feeds, including:

* Tulsa Police
* Tulsa County Sheriff
* OHP Troop B
* Tulsa Regional Public Safety
* regional fire. ([Broadcastify][29])

---

### 36. Cleveland County

Cleveland County has active Broadcastify Calls coverage.

Current calls data identifies talkgroups on:

```text
OKWIN P25
OMACS
Oklahoma City Metro Public Safety
```

including:

* Cleveland County Sheriff
* Moore Police
* Noble Police
* Lexington Police
* OHP
* tribal police
* OKCPD. ([Broadcastify][30])

This is particularly valuable because it proves the public Calls layer can observe **multiple Oklahoma radio systems**, not just OKWIN.

---

### 37. Canadian County

Canadian County currently has Broadcastify Calls coverage for:

```text
Law Dispatch
Law Tac
Fire Dispatch
Fire-Tac
EMS Dispatch
EMS-Tac
Corrections
Emergency Ops
Interop
Transportation
```

([Broadcastify][31])

#### Registry

```text
SOURCE_ID:
    OK-CANADIAN-COUNTY-CALLS

TYPE:
    BROADCASTIFY_CALLS

STATUS:
    🟢 VERIFIED
```

---

### 38. Oklahoma Calls architecture

The public audio situation is therefore:

```text
                         OKLAHOMA RADIO
                              │
        ┌─────────────────────┼──────────────────────┐
        │                     │                      │
      OKWIN                  OCRS                  OMACS
        │                     │                      │
        └─────────────────────┼──────────────────────┘
                              │
                         RF SYSTEMS
                              │
                    SDR / Scanner Receivers
                              │
                    ┌─────────┴─────────┐
                    │                   │
               Broadcastify        Broadcastify
                 Feeds                Calls
```

---

### 39. Oklahoma camera situation

The correct answer for the camera portion is **not** "there is no API."

There clearly is a backend.

ODOT has:

* 500+ cameras
* live streams
* camera metadata
* camera locations
* OKTraffic frontend
* Drive Oklahoma integration
* active CCTV procurement
* camera/sensor systems.

([Welcome to Oklahoma's Official Web Site][5])

But I cannot currently verify a **current anonymous machine-readable camera endpoint** that ATLAS can legally and reliably ingest.

Therefore:

```text
CAMERA INVENTORY:
    🟢

CAMERA STREAMS:
    🟢

PUBLIC WEB ACCESS:
    🟢

CURRENT DOCUMENTED PUBLIC API:
    🔴

BACKEND EXISTS:
    🟢

API ACCESS:
    🟡
```

This is much more useful than falsely labeling a discovered endpoint as public.

---

### 40. Oklahoma source hierarchy

The state should be modeled like this:

```text
OKLAHOMA
│
├── ODOT
│   │
│   ├── OKTraffic
│   │   ├── 500+ CCTV
│   │   ├── live streams
│   │   ├── DMS
│   │   ├── weather
│   │   ├── sensors
│   │   └── work zones
│   │
│   ├── OKRoads
│   │   ├── road conditions
│   │   ├── static cameras
│   │   └── snowplow cameras
│   │
│   └── Public WZDx
│       ├── workzones
│       ├── closures
│       └── detours
│
├── ALPR
│   ├── Oklahoma City
│   ├── Tulsa
│   ├── Guthrie
│   ├── University of Oklahoma
│   └── many other local deployments
│
├── RADIO
│   ├── OKWIN
│   ├── OCRS
│   ├── BACRN
│   └── OMACS
│
└── PUBLIC AUDIO
    └── Broadcastify
        ├── 152 feeds
        └── Calls
```

---

### 41. Exact ATLAS registry

#### ODOT camera network

```json
{
  "source_id": "OK-ODOT-CCTV",
  "state": "OK",
  "owner": "Oklahoma Department of Transportation",
  "program": "OKTraffic",
  "type": "traffic_camera_network",
  "known_inventory": "500+",
  "live_streams": true,
  "public_web_access": true,
  "anonymous_machine_api": false,
  "api_status": "access-controlled",
  "confidence": "high"
}
```

---

#### ODOT WZDx

```json
{
  "source_id": "OK-ODOT-WZDX",
  "state": "OK",
  "type": "work_zone_data",
  "format": "GeoJSON",
  "endpoints": [
    "https://oktraffic.org/api/Geojsons/workzones",
    "https://oktraffic.org/api/Geojsons/closures",
    "https://oktraffic.org/api/Geojsons/detours"
  ],
  "license": "CC0",
  "status": "public",
  "confidence": "high"
}
```

---

#### OKWIN

```json
{
  "source_id": "OK-OKWIN",
  "state": "OK",
  "owner": "Oklahoma Department of Public Safety and partner agencies",
  "type": "public_safety_radio",
  "standard": "P25",
  "band": "800 MHz",
  "sites": 43,
  "agencies": "520+",
  "subscriber_radios": "40000+",
  "population_coverage": "70%",
  "status": "active",
  "confidence": "high"
}
```

---

#### ALPR

```json
{
  "source_id": "OK-ALPR",
  "state": "OK",
  "type": "law_enforcement_alpr",
  "documented_vendors": [
    "Flock Safety",
    "Motorola Solutions"
  ],
  "community_documented_cameras": 1429,
  "authoritative_statewide_count": false,
  "raw_plate_data_public": false,
  "confidence": "medium"
}
```

The 1,429 figure is explicitly community/OpenStreetMap-derived and should **never** be represented as an official Oklahoma government count. ([Finding Flock][14])

---

#### Broadcastify

```json
{
  "source_id": "OK-BROADCASTIFY",
  "state": "OK",
  "type": "public_scanner_audio",
  "total_feeds": 152,
  "public_safety_feeds": 133,
  "counties": 61,
  "observed": "2026-08-28",
  "confidence": "high"
}
```

---

### 42. Oklahoma assessment

| Category                            |                   Rating |
| ----------------------------------- | -----------------------: |
| State traffic cameras               |         🟢 **Excellent** |
| Camera inventory                    |              🟢 **500+** |
| Live camera streams                 |                       🟢 |
| Current public camera API           | 🟡 **Access-controlled** |
| Historical camera endpoint evidence |                       🟡 |
| PTZ cameras                         |                       🟢 |
| Mobile/snowplow cameras             |                       🟢 |
| Road/weather sensors                |                       🟢 |
| Work zones                          |               🟢 **CC0** |
| Closures                            |               🟢 **CC0** |
| Detours                             |               🟢 **CC0** |
| ALPR existence                      |         🟢 **Excellent** |
| ALPR documented scale               |                       🟢 |
| Official statewide ALPR inventory   |                       🔴 |
| Raw ALPR data                       |                       🔴 |
| Statewide radio                     |         🟢 **Excellent** |
| P25                                 |                       🟢 |
| OKWIN scale                         |     🟢 **520+ agencies** |
| Public scanner feeds                |               🟢 **152** |
| Broadcastify Calls                  |                       🟢 |
| Police encryption                   |           🟡 Significant |

### **Overall: 8.9 / 10**

#### Best Oklahoma sources

**1. ODOT/OKTraffic camera network**

500+ cameras with officially confirmed live streams. ([Welcome to Oklahoma's Official Web Site][5])

**2. ODOT WZDx**

```text
oktraffic.org/api/Geojsons/workzones
oktraffic.org/api/Geojsons/closures
oktraffic.org/api/Geojsons/detours
```

Public/CC0 according to the current transportation-source audit. ([iThub][7])

**3. OKWIN**

43-site, 800-MHz P25 network with 520+ agencies and 40,000+ radios. ([Welcome to Oklahoma's Official Web Site][1])

**4. Broadcastify**

152 Oklahoma feeds across 61 counties, including 133 public-safety feeds. ([Broadcastify][2])

**5. ALPR**

Very large Flock footprint, with 1,429 cameras currently documented by a community/OpenStreetMap-derived database. ([Finding Flock][14])

---

#### One important unresolved Oklahoma target

The **camera API/backend** is the thing I would investigate next if this were an implementation phase.

We know the cameras exist. We know the frontend receives them. We know historical research identified dynamic camera-image URLs. We know ODOT is actively adding cameras. But I am **not marking an undocumented current endpoint as authoritative until it can be directly verified**.

That keeps the source database clean: **confirmed source ≠ suspected endpoint**.

**Oklahoma is complete.**

#### Next alphabetically: **Oregon**.

[1]: https://oklahoma.gov/dps/programs-services/okwin.html?utm_source=chatgpt.com "Oklahoma Wireless Information Network (OKWIN)"
[2]: https://status.broadcastify.com/listen/stid/40/publicsafety?utm_source=chatgpt.com "Oklahoma Audio Feeds"
[3]: https://deflockokc.com/records.html?utm_source=chatgpt.com "Records Requests - DeFlockOKC"
[4]: https://oklahoma.gov/content/dam/ok/en/odot/about-us/odot-information/23-10-19%20ODOTStrategicPlan_Statewide_Final.pdf?utm_source=chatgpt.com "ITS and TSMO Strategic Plan (Statewide)"
[5]: https://oklahoma.gov/odot/about-us/newsroom/2024/march-commission-meeting-wrap-up--gatz-briefs-commissioners-on-t.html?utm_source=chatgpt.com "March Commission Meeting Wrap-Up: Gatz briefs commissioners on Transportation Cabinet changes, solar eclipse preparations underway; $108 million in projects awarded"
[6]: https://scholars.luc.edu/files/40226114/Automated%20Discovery%20of%20Network%20Cameras%20in%20Heterogeneous%20Web%20Pages.pdf?utm_source=chatgpt.com "Loyola University Chicago"
[7]: https://ithub.global.ssl.fastly.net/nicglazkov/commutescout/blob/main/docs/state-expansion-audit.md?utm_source=chatgpt.com "commutescout/docs/state-expansion-audit.md at main · nicglazkov/commutescout · GitHub"
[8]: https://oklahoma.gov/odot/about-us/newsroom/2021/december/december-commission-meeting-wrap-up-road-conditions-app--website.html?utm_source=chatgpt.com "December Commission Meeting Wrap-Up Road conditions app, websites ready for winter weather; $108 million in contracts awarded"
[9]: https://transportationops.org/case-studies/oklahoma-construction-app?utm_source=chatgpt.com "Oklahoma Construction App | National Operations Center of Excellence"
[10]: https://transportationops.org/case-studies/drive-oklahoma-app?utm_source=chatgpt.com "The Drive Oklahoma App | National Operations Center of Excellence"
[11]: https://www.odot.org/contracts/2024/24021501/plans_advert/446_2402_STP-299S%28333%29IT_3541606/0001-3541606-ODOT%20CAMERA%20TITLE%20SHEET.pdf?utm_source=chatgpt.com "0001-3541606-ODOT CAMERA TITLE SHEET.dgn"
[12]: https://www.odot.org/contracts/2024/24101701/docs/CO435_24101701_JP3808804_SampleProposal.pdf?utm_source=chatgpt.com "PROPOSAL 240247"
[13]: https://www.okladot.state.ok.us/contracts/pdfs/itemlist2009.pdf?utm_source=chatgpt.com "OKLAHOMA DEPARTMENT OF TRANSPORTATION               DATE : 06/02/20"
[14]: https://www.findingflock.com/cameras/oklahoma?utm_source=chatgpt.com "1,429 Flock & ALPR Cameras in Oklahoma · Finding Flock"
[15]: https://www.kgou.org/politics-and-government/2026-07-01/surveillance-or-safety-okc-city-council-to-consider-automated-license-plate-reader-contract-renewal?utm_source=chatgpt.com "Surveillance or safety? OKC City Council to consider automated license plate reader contract renewal | KGOU - Oklahoma's NPR Source"
[16]: https://www.kosu.org/okc-renews-flock-contract?utm_source=chatgpt.com "Oklahoma City Council renews license plate reader contract despite pushback | KOSU"
[17]: https://www.dontflock.com/news/oklahoma-city-council-renews-flock-safety-contract-5-3/?utm_source=chatgpt.com "Oklahoma City Council renews Flock Safety contract – Don't Flock"
[18]: https://www.oklahomastatecapital.com/wiki/event/flock-system-in-guthrie/64?utm_source=chatgpt.com "Flock System in Guthrie | OSC Wiki"
[19]: https://www.acluok.org/news/threat-privacy-and-civil-liberties-automatic-license-plate-readers/?utm_source=chatgpt.com "The Threat to Privacy and Civil Liberties with Automatic License Plate Readers - ACLU of Oklahoma"
[20]: https://ou.edu/content/dam/OUPD/documents/RELEASE_20230502_T013027_University%20of%20Oklahoma%20Police%20Department%20Policy%20Manual.pdf?utm_source=chatgpt.com "Policy 427  
University of Oklahoma Police Departm"
[21]: https://www.ncsl.org/technology-and-communication/automated-license-plate-readers-state-statutes?utm_source=chatgpt.com "Automated License Plate Readers: State Statutes"
[22]: https://www.okhouse.gov/posts/news-20241008_1?utm_source=chatgpt.com "Gann Study of License Plate Readers Highlights Need for Statute Updates"
[23]: https://oklahoma.gov/content/dam/ok/en/homeland-security/documents/interoperable-comms/okfog-final.pdf?utm_source=chatgpt.com "Oklahoma Field Operations Guide (OKFOG) — Version 3.0 – 2020"
[24]: https://oklahoma.gov/dps/programs-services/okwin/vendor.html?utm_source=chatgpt.com "Vendor"
[25]: https://www.oklahoma.gov/content/dam/ok/en/homeland-security/documents/interoperable-comms/ok-scip.pdf?utm_source=chatgpt.com "FSU
OKLAHOMA 
STATEWIDE COMMUNICATION 
INTEROPERAB"
[26]: https://status.broadcastify.com/listen/feed/318?utm_source=chatgpt.com "Oklahoma City Area Police and Fire"
[27]: https://status.broadcastify.com/listen/feed/43081?utm_source=chatgpt.com "Oklahoma Highway Patrol - Troop A"
[28]: https://status.broadcastify.com/listen/mid/32?utm_source=chatgpt.com "Oklahoma City Metro Audio Feeds"
[29]: https://status.broadcastify.com/listen/ctid/2199?utm_source=chatgpt.com "Tulsa County, Oklahoma Audio Feeds"
[30]: https://status.broadcastify.com/calls/coverage/ctid/?ctid=2141&tagId=24&utm_source=chatgpt.com "Cleveland County Oklahoma Calls Coverage"
[31]: https://status.broadcastify.com/listen/ctid/2136/publicsafety?utm_source=chatgpt.com "Canadian County, Oklahoma Audio Feeds"
