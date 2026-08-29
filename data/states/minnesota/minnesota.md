---
state: Minnesota
usps: MN
slug: minnesota
dossier_number: 23
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
  imported_from: project_atlas_state_data/Minnesota.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Minnesota (MN) - ATLAS State Record

> Dossier **23 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Minnesota is another **very high-value state**, particularly because it has something Michigan did not: a **statutorily required public ALPR infrastructure trail**. Minnesota law requires law-enforcement agencies using ALPRs to maintain public logs and location records, and requires the BCA to maintain a statewide list of agencies and fixed locations, subject to security exceptions. ([Minnesota.gov][1])

It also has:

* statewide **511MN / MnDOT cameras**
* traffic cameras **and snowplow cameras**
* statewide **ARMER** P25 radio
* extensive public scanner coverage
* a legally mandated ALPR reporting/location system
* numerous documented Flock deployments
* public ALPR audits

---

### 1. Minnesota Department of Transportation

**MnDOT — Minnesota Department of Transportation**

MnDOT operates Minnesota's statewide traveler-information system.

The department explicitly directs the public to 511MN for:

* road conditions
* live highway cameras
* snowplow cameras
* closures

and states that its highway cameras are public. ([MnDOT][2])

#### Registry

```text
SOURCE_ID:
    MN-MNDOT

OWNER:
    Minnesota Department of Transportation

PRIMARY_SYSTEM:
    511MN

TYPE:
    STATE_TRANSPORTATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. 511MN

**511MN** is Minnesota's primary public traveler-information platform.

[Minnesota 511 / 511MN](https://511mn.org/?utm_source=chatgpt.com)

MnDOT's official documentation confirms that 511 provides real-time transportation information, while the current 511 application provides:

* traffic events
* road closures
* construction
* traffic speeds
* roadside camera images
* live video
* snowplow camera images
* road weather
* electronic roadway signs
* truck parking information. ([Google Play][3])

#### Registry

```text
SOURCE_ID:
    MN-511

OWNER:
    MnDOT

TYPE:
    STATEWIDE_TRAVELER_INFORMATION

DATA:
    CCTV
    PLOW_CAMERAS
    INCIDENTS
    CLOSURES
    CONSTRUCTION
    SPEED
    WEATHER
    DMS
    TRUCK_PARKING

STATUS:
    🟢 ACTIVE
```

---

### 3. Minnesota traffic cameras

This is the primary Minnesota camera source.

MnDOT explicitly describes its highway cameras as **public** and directs users to 511MN. ([MnDOT][2])

The current 511 documentation also describes finding cameras through the Cameras/Plow Cameras layers and opening an enlarged camera view. ([Minnesota 511][4])

#### Registry

```text
SOURCE_ID:
    MN-MNDOT-CCTV

OWNER:
    MnDOT

SYSTEM:
    511MN

TYPE:
    TRAFFIC_CCTV

ACCESS:
    PUBLIC

LIVE:
    🟢

STATUS:
    🟢 VERIFIED
```

---

### 4. Minnesota camera scale

The exact official current statewide camera count was **not located in the authoritative MnDOT sources during this pass**.

However, an independent current project that consumes 511MN data reports approximately:

```text
1,510+
Minnesota traffic cameras

~1,230 video
~270 image-only
```

This is useful as an **engineering discovery signal**, but I am **not promoting those numbers to an official MnDOT count**. ([GitHub][5])

#### Database treatment

```text
MN-MNDOT-CCTV

OFFICIAL_COUNT:
    UNKNOWN

THIRD_PARTY_OBSERVED:
    ~1,510

CONFIDENCE:
    🟡

DO NOT:
    hardcode 1,510 as official
```

The actual inventory should be generated directly from 511MN's underlying data.

---

### 5. 511MN camera API — current status

This is one of the places where we need to be strict.

I have verified:

```text
PUBLIC WEBSITE          🟢
PUBLIC CAMERA DATA      🟢
PUBLIC LIVE VIDEO       🟢
PUBLIC CAMERA IMAGES    🟢
MACHINE-READABLE API    🟡
EXACT ENDPOINT          🟡
```

I have **not found an authoritative MnDOT page publishing a documented API contract** for the camera inventory.

Therefore I will **not invent an endpoint**.

The correct engineering approach is browser/network capture of the public 511MN application.

---

### 6. 511MN camera favorites

The official 511MN help system explicitly documents camera objects.

Users can:

* locate cameras through the camera layer
* open a camera thumbnail
* open the full-screen camera
* favorite individual cameras

([Minnesota 511][4])

That confirms the camera inventory is a first-class object in the application.

#### Expected source model

```text
MN-511
   │
   └── CAMERA
       ├── ID
       ├── NAME
       ├── LOCATION
       ├── IMAGE/VIDEO
       └── STATUS
```

The exact field names still need network-level confirmation.

---

### 7. Live camera video

Minnesota's current 511 application explicitly advertises:

> roadside camera images and live video capabilities. ([Google Play][3])

That makes Minnesota particularly valuable for MAC EVIL.

#### Registry

```text
SOURCE_ID:
    MN-MNDOT-CCTV-VIDEO

TYPE:
    LIVE_TRAFFIC_VIDEO

STATUS:
    🟢 VERIFIED
```

---

### 8. Snowplow cameras

Minnesota is unusually valuable here.

The 511MN application explicitly provides **snowplow camera images**. ([Google Play][3])

MnDOT also says its plow cameras provide updated road-condition views through 511MN. ([MnDOT][2])

#### Registry

```text
SOURCE_ID:
    MN-MNDOT-PLOW-CAM

OWNER:
    MnDOT

TYPE:
    MOBILE_TRAFFIC_CAMERA

PLATFORM:
    511MN

STATUS:
    🟢 VERIFIED
```

---

### 9. Snowplow fleet

MnDOT reported that it operates **more than 800 snowplows** and more than 1,600 drivers. ([Newsline][6])

That does **not** mean there are 800 public cameras.

The correct relationship is:

```text
800+ snowplows
       │
       └── subset equipped with cameras
                    │
                    └── 511MN
```

Older MnDOT documentation specifically states that **275 MnDOT snowplows are equipped with cameras**. That number should be treated as historical rather than current. ([Minnesota.gov][7])

---

### 10. Traffic incidents

511MN provides current traffic events and road reports.

The application description confirms near-real-time:

* traffic incidents
* road closures
* construction
* travel delays. ([Google Play][3])

#### Registry

```text
SOURCE_ID:
    MN-511-INCIDENTS

TYPE:
    REAL_TIME_TRAFFIC_INCIDENTS

STATUS:
    🟢 VERIFIED
```

---

### 11. Traffic speeds

511MN exposes current traffic speeds.

The official application description specifically lists **current traffic speeds**. ([Google Play][3])

#### Registry

```text
SOURCE_ID:
    MN-511-SPEEDS

TYPE:
    REAL_TIME_TRAFFIC_SPEED

STATUS:
    🟢 VERIFIED
```

---

### 12. Electronic roadway signs

The 511MN application includes:

```text
Electronic roadway sign messages
```

as a public traveler-information feature. ([Google Play][3])

#### Registry

```text
SOURCE_ID:
    MN-MNDOT-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢 VERIFIED
```

---

### 13. Road-weather stations

511MN also exposes road-weather information. ([Google Play][3])

#### Registry

```text
SOURCE_ID:
    MN-511-RWIS

TYPE:
    ROAD_WEATHER

DATA:
    WEATHER
    ROAD_CONDITIONS

STATUS:
    🟢 VERIFIED
```

---

### 14. Truck parking

511MN provides real-time truck-parking availability for selected state-run rest areas. ([Google Play][3])

#### Registry

```text
SOURCE_ID:
    MN-511-TRUCK-PARKING

TYPE:
    REAL_TIME_PARKING

SCOPE:
    SELECT STATE-RUN REST AREAS

STATUS:
    🟢 VERIFIED
```

---

### 15. MnDOT Regional Transportation Management Center

Minnesota's **Regional Transportation Management Center (RTMC)** is the operational center behind metro freeway operations.

MnDOT says the RTMC brings together:

* State Patrol
* MnDOT Maintenance
* MnDOT Freeway Operations

to detect and respond to freeway incidents. It also identifies 511 traveler information as an RTMC service. ([MnDOT][8])

#### Registry

```text
SOURCE_ID:
    MN-MNDOT-RTMC

TYPE:
    TRANSPORTATION_OPERATIONS_CENTER

REGION:
    TWIN CITIES / METRO

STATUS:
    🟢 VERIFIED
```

---

### 16. RTMC camera infrastructure

The RTMC explicitly provides a mechanism for requesting footage from its highway traffic-camera system. ([MnDOT][8])

That gives us another important distinction:

```text
LIVE_PUBLIC_CAMERA
        ↓
511MN

RECORDED_CAMERA_FOOTAGE
        ↓
MnDOT data-practice request
```

So live access does **not** imply unrestricted historical video access.

---

### 17. Minnesota work-zone safety cameras

There is another camera category that must **not** be confused with traffic CCTV.

MnDOT is conducting a **work-zone speed safety camera pilot** beginning in late July 2026 at two locations:

* I-35W
* Highway 65

([Minnesota.gov][9])

#### Registry

```text
SOURCE_ID:
    MN-MNDOT-WZ-SPEED-CAM

TYPE:
    WORK_ZONE_SPEED_SAFETY_CAMERA

LOCATIONS:
    I-35W
    HIGHWAY 65

PILOT:
    🟢 ACTIVE 2026

NOT:
    STANDARD_TRAFFIC_CCTV
```

This is particularly important for the project's camera taxonomy.

---

### 18. ARMER

Now the radio side.

**ARMER — Allied Radio Matrix for Emergency Response**

is Minnesota's statewide public-safety radio system.

The Minnesota Department of Public Safety says ARMER is the **primary communications tool for the majority of state, county and local public-safety entities** in Minnesota. ([Minnesota Department of Public Safety][10])

#### Registry

```text
SOURCE_ID:
    MN-ARMER

OWNER:
    Minnesota Department of Transportation
    / Statewide ARMER program

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

BAND:
    700/800 MHz

TYPE:
    TRUNKED

STATUS:
    🟢 VERIFIED
```

---

### 19. ARMER statewide coverage

Minnesota's official ARMER material states that the system is the primary radio system for Minnesota response and serves:

* state agencies
* police
* fire
* EMS
* cities
* counties
* federal governments
* tribal governments. ([Minnesota Department of Health][11])

The current DPS page confirms participation is open to public-safety entities as well as city, county, state, federal and tribal governments. ([Minnesota Department of Public Safety][10])

#### Coverage

```text
MINNESOTA:
    87 counties

ARMER:
    STATEWIDE

PUBLIC SAFETY:
    🟢

MULTI-AGENCY:
    🟢
```

---

### 20. ARMER infrastructure

Historical state documentation reported approximately **333 sites on air** during the 2018 buildout period. ([Minnesota Department of Health][11])

Do **not** use 333 as the current tower count.

The network has continued to receive modifications and additions.

#### Database rule

```text
ARMER_SITE_COUNT:
    historical observation only

CURRENT_COUNT:
    requires current infrastructure dataset
```

---

### 21. ARMER talkgroups

ARMER is a trunked system and uses talkgroup IDs.

The state specifically notes that participation-plan amendments may be required when an agency seeks additional **radio or talkgroup IDs**. ([Minnesota Department of Public Safety][10])

#### Canonical structure

```text
ARMER
   │
   ├── SITE
   │
   ├── RADIO
   │
   └── TALKGROUP
       ├── agency
       ├── function
       ├── region
       └── encryption_status
```

---

### 22. ARMER encryption

Minnesota officially confirms that ARMER supports encryption.

Supported encryption includes:

* AES
* DES-OFB

The state also explicitly says that several statewide, regional and local tactical talkgroups—and an increasing number of local dispatch talkgroups—are encrypted. ([Minnesota Department of Public Safety][12])

#### Registry

```text
ARMER_ENCRYPTION:
    🟢 SUPPORTED

AES:
    🟢

DES-OFB:
    🟢

ALL_TRAFFIC_ENCRYPTED:
    🔴 FALSE

PUBLIC_MONITORABILITY:
    TALK-GROUP DEPENDENT
```

This is an important distinction for the scanner layer.

---

### 23. Public ARMER radio traffic

There is no indication that Minnesota provides a general state-operated public audio API for all ARMER traffic.

However, public third-party receiver infrastructure exists.

Broadcastify currently exposes Minnesota ARMER ingest nodes and public feeds.

For example, Ramsey County has an active ARMER simulcast ingest node. ([Broadcastify][13])

---

### 24. Broadcastify — Minnesota

Minnesota has a significant public scanner ecosystem.

Current Broadcastify's Minnesota directory reports:

```text
176 total audio feeds
88 counties
82 public-safety feeds
13 rail
8 other
7 amateur radio
4 aviation
2 marine
1 disaster event
```

([Broadcastify][14])

A separate public-safety-filtered snapshot reports 95 feeds across 55 counties, demonstrating that Broadcastify's directory totals vary by page/filter and are not necessarily a single immutable inventory. ([Broadcastify][15])

#### Registry

```text
SOURCE_ID:
    MN-BROADCASTIFY

TYPE:
    PUBLIC_RADIO_AUDIO

OBSERVED:
    176 TOTAL FEEDS
    88 COUNTIES

PUBLIC_SAFETY:
    82

STATUS:
    🟢 ACTIVE
```

---

### 25. Broadcastify Calls — ARMER

This is even more interesting than the traditional audio feeds.

Broadcastify Calls uses software-defined-radio ingest infrastructure.

The Ramsey County page currently shows:

```text
ARMER
Ramsey County Simulcast
```

as an active ingest node. ([Broadcastify][13])

Hennepin County has multiple active ARMER ingest nodes, including:

```text
Minneapolis N-S Simulcast
Minneapolis City Center Simulcast
Hennepin Co. East Simulcast
Hennepin Co. West Simulcast
```

([Broadcastify][16])

#### Registry

```text
SOURCE_ID:
    MN-ARMER-BROADCASTIFY-CALLS

TYPE:
    DIGITAL_RADIO_CALLS

SOURCE_NETWORK:
    ARMER

INGEST:
    SDR

STATUS:
    🟢 ACTIVE
```

---

### 26. Hennepin County

Hennepin is one of the most important scanner areas in Minnesota.

Broadcastify Calls currently reports coverage including:

```text
Law Dispatch
Law Tac
Law Talk
Fire Dispatch
Fire-Tac
Fire-Talk
EMS
Corrections
Interop
Multi-Talk
Public Works
Schools
Security
Transportation
```

([Broadcastify][16])

#### Registry

```text
SOURCE_ID:
    MN-HENNEPIN-ARMER

TYPE:
    COUNTY_PUBLIC_SAFETY_RADIO

NETWORK:
    ARMER

STATUS:
    🟢
```

---

### 27. Ramsey County / Saint Paul

Ramsey County is another major public-radio source.

Broadcastify currently provides feeds for:

* Ramsey County Sheriff
* Saint Paul Fire
* Saint Paul Police
* Washington County
* Maplewood
* North Saint Paul

and shows an active ARMER simulcast ingest node. ([Broadcastify][13])

#### Registry

```text
SOURCE_ID:
    MN-RAMSEY-ARMER

TYPE:
    COUNTY/MUNICIPAL_PUBLIC_SAFETY_RADIO

NETWORK:
    ARMER

STATUS:
    🟢
```

---

### 28. Minnesota ALPR — this state is different

This is the **major discovery** for Minnesota.

Minnesota law requires law-enforcement agencies that use ALPRs to maintain public documentation.

The state's Data Practices Office explicitly explains the ALPR requirements. ([Minnesota.gov][1])

This gives MAC EVIL a much better source-discovery path than merely searching for Flock contracts.

---

### 29. Public ALPR use logs

Minnesota law requires an agency using an ALPR to maintain a **public log**.

The log must include:

* times the ALPR actively collected data
* aggregate vehicle/plate counts
* databases used for comparison
* certain hit counts
* location for fixed/stationary readers. ([Minnesota.gov][17])

#### Registry

```text
SOURCE_ID:
    MN-ALPR-PUBLIC-LOGS

TYPE:
    ALPR_USAGE_METADATA

ACCESS:
    PUBLIC

STATUS:
    🟢 STATUTORILY REQUIRED
```

This is a **real public data source category**.

---

### 30. Fixed ALPR locations

Minnesota law goes even further.

Agencies must maintain:

```text
current locations
previous locations
dates at locations
```

for fixed/stationary ALPRs and surveillance devices with ALPR capability. ([MN Revisor's Office][18])

#### Registry

```text
SOURCE_ID:
    MN-ALPR-FIXED-LOCATIONS

TYPE:
    ALPR_LOCATION_REGISTRY

DATA:
    LOCATION
    DATE
    CURRENT/PREVIOUS

ACCESS:
    PUBLIC
    unless security exception applies

STATUS:
    🟢 STATUTORILY REQUIRED
```

This is **exactly the kind of source this project is looking for**.

---

### 31. Minnesota BCA statewide ALPR list

The law requires the **Minnesota Bureau of Criminal Apprehension (BCA)** to maintain a list of law-enforcement agencies using ALPRs or other surveillance devices with ALPR capability, including fixed locations.

The list is required to be available publicly on the BCA website except where a location is legitimately classified as security information. ([MN Revisor's Office][18])

#### Registry

```text
SOURCE_ID:
    MN-BCA-ALPR-REGISTRY

OWNER:
    Minnesota Bureau of Criminal Apprehension

TYPE:
    STATEWIDE_ALPR_AGENCY_REGISTRY

DATA:
    AGENCY
    ALPR_USE
    FIXED_LOCATIONS
    SURVEILLANCE_DEVICE_CAPABILITY

ACCESS:
    PUBLIC
    WITH SECURITY EXCEPTIONS

STATUS:
    🟢 STATUTORILY REQUIRED
```

**This is one of the highest-priority sources in the entire 50-state project.**

---

### 32. BCA ALPR notification

Agencies must notify BCA within **10 days** of:

* installation
* current use
* integration of ALPR technology into another surveillance device
* fixed location of a stationary ALPR.

([MN Revisor's Office][18])

Therefore BCA is supposed to have a statewide view of deployments.

---

### 33. ALPR data itself

Minnesota law limits what an ALPR may collect to:

```text
license plate number
date
time
vehicle location
plate/vehicle/environment images
```

([MN Revisor's Office][19])

This means the canonical ALPR observation model should be capable of:

```json
{
  "plate": "...",
  "timestamp": "...",
  "latitude": 0,
  "longitude": 0,
  "image": "...",
  "source": "..."
}
```

**However, the actual plate-read data are generally not public.**

---

### 34. ALPR privacy classification

Minnesota generally classifies ALPR data as private/nonpublic unless an exception makes particular records public. ([MN Revisor's Office][19])

Therefore:

```text
ALPR CAMERA LOCATION:
    🟢 potentially public

ALPR USAGE LOG:
    🟢 public

ALPR AUDIT:
    🟢 public

INDIVIDUAL PLATE READ:
    🔴 generally nonpublic
```

This distinction should be built directly into the database.

---

### 35. ALPR retention

Under the currently published statute, ALPR data not related to an active criminal investigation must generally be destroyed within **60 days**. ([MN Revisor's Office][19])

The public usage log is not subject to that same 60-day destruction requirement. ([Minnesota.gov][17])

#### Registry

```text
ALPR_RAW_READ:
    RETENTION <= 60 DAYS
    unless exception

ALPR_PUBLIC_LOG:
    retained separately
```

---

### 36. ALPR access auditing

Minnesota requires ALPR system access to use role-based authorization and requires actions involving ALPR data to be recorded in an audit trail.

The audit-trail data are public to the extent they are not otherwise classified. ([MN Revisor's Office][19])

#### Registry

```text
SOURCE_ID:
    MN-ALPR-AUDIT-TRAIL

TYPE:
    ALPR_ACCESS_AUDIT

PUBLIC:
    🟢 to extent legally public
```

---

### 37. Minnesota ALPR audits

Minnesota also requires periodic audits.

The state's Legislative Reference Library currently lists multiple 2026 ALPR audit reports, including:

* Richfield
* Minnetonka
* Minnetrista
* Corcoran
* Maple Grove
* New Hope
* St. Cloud
* South Lake Minnetonka

([Minnesota Legislative Reference Library][20])

This is an **excellent secondary discovery mechanism**.

#### Registry

```text
SOURCE_ID:
    MN-ALPR-AUDITS

TYPE:
    ALPR_DEPLOYMENT_AUDIT

ACCESS:
    PUBLIC

STATUS:
    🟢 ACTIVE
```

---

### 38. Flock Safety deployments

The 2026 mandated-report index specifically identifies:

```text
Minnetrista Police Department
    2026 ALPR Audit (Flock System)

Corcoran Police Department
    2026 ALPR Audit (Flock)

Richfield Police Department
    2026 ALPR Audit (Flock System)

South Lake Minnetonka Police Department
    2026 ALPR Audit (Flock System)
```

([Minnesota Legislative Reference Library][20])

This proves current Flock deployments in Minnesota without relying on vendor marketing.

---

### 39. More Minnesota ALPR deployments

The same mandated-report system identifies additional ALPR systems at:

```text
Maple Grove
New Hope
St. Cloud
Richfield
Minnetonka
Minnetrista
Corcoran
South Lake Minnetonka
```

([Minnesota Legislative Reference Library][21])

This should become a **municipality discovery queue**.

---

### 40. Flock-specific registry

```text
SOURCE_ID:
    MN-FLOCK

TYPE:
    MUNICIPAL_ALPR

CONFIRMED_MUNICIPALITIES:
    Richfield
    Minnetrista
    Corcoran
    South Lake Minnetonka

ADDITIONAL:
    more agencies likely

DISCOVERY_SOURCE:
    mandatory ALPR audits

STATUS:
    🟢 VERIFIED
```

---

### 41. Proposed 2026 Minnesota ALPR legislation

There is an important **current-status warning**.

2026 legislation has proposed moving Minnesota toward a centralized BCA ALPR repository.

For example, SF 4739 and HF 4205 proposed that BCA become the central repository for ALPR data and imposed additional restrictions on out-of-state sharing. ([MN Revisor's Office][22])

**These are bills, not automatically current law.**

Therefore:

```text
CURRENT_STATUTE:
    existing ALPR framework

2026 PROPOSED CHANGES:
    🟡 LEGISLATION

DO NOT:
    treat proposed repository as existing public API
```

This distinction is important because the law may change during the project's lifetime.

---

### 42. Minnesota law-enforcement incident data

Minnesota also has unusually strong public-data provisions around law-enforcement activity.

Minnesota Statute 13.82 makes numerous law-enforcement action fields public, including:

* time
* date
* place
* pursuit
* weapons
* agency
* units
* arrest/search basis
* response/incident number
* whether an ALPR was employed. ([MN Revisor's Office][23])

#### Registry

```text
SOURCE_ID:
    MN-LAW-ENFORCEMENT-PUBLIC-DATA

TYPE:
    LAW_ENFORCEMENT_EVENT_METADATA

STATUS:
    🟢 STATUTORILY PUBLIC
```

This is not a single statewide API, however.

---

### 43. CAD / dispatch

I did **not** establish a single statewide public Minnesota CAD API.

The public data architecture is instead fragmented by:

```text
county
city
sheriff
state agency
dispatch center
```

Therefore:

```text
MN-STATEWIDE-CAD-API

STATUS:
    🔴 NOT ESTABLISHED
```

We should search individual agencies separately.

---

### 44. Minnesota surveillance-device registry

The ALPR statute doesn't only cover standalone plate readers.

It also covers:

> other surveillance devices with automated license plate reader capability. ([MN Revisor's Office][18])

This is valuable because a device may otherwise be classified by an agency as:

```text
traffic camera
surveillance camera
security camera
mobile camera
```

while still having ALPR capability.

Our schema should therefore distinguish:

```text
CAMERA
CAMERA + ALPR CAPABILITY
ALPR-ONLY
```

---

### 45. Minnesota source hierarchy

The state's strongest source-discovery chain is:

```text
Minnesota Legislature
        ↓
Minn. Stat. 13.824
        ↓
BCA
        ↓
agency ALPR registry
        ↓
agency public log
        ↓
fixed-location records
        ↓
ALPR audit
        ↓
vendor/system identification
```

That is considerably better than relying solely on Google searches for "Flock Minnesota."

---

### 46. Minnesota camera hierarchy

```text
Minnesota
│
└── MnDOT
    │
    └── 511MN
        ├── CCTV
        ├── Live Video
        ├── Plow Cameras
        ├── Incidents
        ├── Closures
        ├── Construction
        ├── Traffic Speeds
        ├── DMS
        ├── Road Weather
        └── Truck Parking
```

---

### 47. Minnesota radio hierarchy

```text
Minnesota
│
└── ARMER
    │
    ├── State
    ├── Counties
    ├── Cities
    ├── Police
    ├── Fire
    ├── EMS
    ├── Tribal
    ├── Federal
    └── Interoperability
          │
          ├── Public/non-encrypted
          └── Encrypted
                │
                └── Public receiver ecosystem
                     └── Broadcastify
```

---

### 48. Minnesota ALPR hierarchy

```text
Minnesota
│
├── BCA
│   └── ALPR agency/location registry
│
├── Law Enforcement Agencies
│   ├── Public usage logs
│   ├── Fixed locations
│   ├── Audit reports
│   └── Policies
│
└── Vendors
    ├── Flock
    └── other ALPR systems
```

This is arguably the **cleanest ALPR discovery architecture we've found so far**.

---

### 49. Exact source registry

| Source ID                        | Owner              | Data                    | Access                               | Status             |
| -------------------------------- | ------------------ | ----------------------- | ------------------------------------ | ------------------ |
| `MN-511`                         | MnDOT              | statewide traveler data | Public                               | 🟢                 |
| `MN-MNDOT-CCTV`                  | MnDOT              | traffic cameras         | Public                               | 🟢                 |
| `MN-MNDOT-CCTV-VIDEO`            | MnDOT              | live video              | Public                               | 🟢                 |
| `MN-MNDOT-PLOW-CAM`              | MnDOT              | snowplow cameras        | Public                               | 🟢                 |
| `MN-511-INCIDENTS`               | MnDOT              | incidents               | Public                               | 🟢                 |
| `MN-511-SPEEDS`                  | MnDOT              | traffic speeds          | Public                               | 🟢                 |
| `MN-MNDOT-DMS`                   | MnDOT              | DMS                     | Public                               | 🟢                 |
| `MN-511-RWIS`                    | MnDOT              | road weather            | Public                               | 🟢                 |
| `MN-511-TRUCK-PARKING`           | MnDOT              | parking                 | Public                               | 🟢                 |
| `MN-MNDOT-WZ-SPEED-CAM`          | MnDOT              | work-zone speed cameras | Public program info                  | 🟢                 |
| `MN-ARMER`                       | State of Minnesota | P25 radio               | Public system / some public traffic  | 🟢                 |
| `MN-ARMER-BROADCASTIFY-CALLS`    | Third party        | radio calls             | Public feeds                         | 🟢                 |
| `MN-BROADCASTIFY`                | Third party        | scanner audio           | Public feeds                         | 🟢                 |
| `MN-BCA-ALPR-REGISTRY`           | BCA                | ALPR agencies/locations | Public subject to security exception | 🟢                 |
| `MN-ALPR-PUBLIC-LOGS`            | Law enforcement    | ALPR use                | Public                               | 🟢                 |
| `MN-ALPR-FIXED-LOCATIONS`        | Law enforcement    | fixed ALPR locations    | Public subject to exception          | 🟢                 |
| `MN-ALPR-AUDITS`                 | State/municipal    | ALPR audits             | Public                               | 🟢                 |
| `MN-FLOCK`                       | Municipal agencies | ALPR deployments        | Public documentation                 | 🟢                 |
| `MN-LAW-ENFORCEMENT-PUBLIC-DATA` | Agencies           | incident metadata       | Public by statute                    | 🟢                 |
| `MN-STATEWIDE-CAD`               | —                  | CAD                     | —                                    | 🔴 Not established |

---

### 50. Highest-priority ingestion targets

#### Tier 1 — immediate

```text
1. MN-MNDOT-CCTV
2. MN-MNDOT-CCTV-VIDEO
3. MN-MNDOT-PLOW-CAM
4. MN-BCA-ALPR-REGISTRY
5. MN-ALPR-FIXED-LOCATIONS
6. MN-ALPR-PUBLIC-LOGS
7. MN-ARMER
8. MN-ARMER-BROADCASTIFY-CALLS
```

The **BCA ALPR registry** is particularly important because Minnesota law explicitly requires it.

---

### 51. Tier 2

```text
9. MN-ALPR-AUDITS
10. MN-FLOCK
11. MN-511-INCIDENTS
12. MN-511-SPEEDS
13. MN-MNDOT-DMS
14. MN-511-RWIS
15. MN-511-TRUCK-PARKING
16. Minnesota municipal CCTV
17. Minnesota county CAD
```

---

### 52. Tier 3

```text
18. Work-zone speed cameras
19. Additional municipal ALPR vendors
20. Municipal surveillance cameras
21. Public safety video systems
22. Agency-specific CAD
23. Additional ARMER receiver networks
```

---

### 53. What we have NOT established

I am deliberately **not** claiming:

```text
🔴 An official current MnDOT statewide camera count
🔴 A documented public 511MN camera API endpoint
🔴 A public statewide ALPR plate-read database
🔴 A public statewide ARMER audio API
🔴 Public access to encrypted ARMER traffic
🔴 A statewide CAD API
🔴 A complete municipal CCTV inventory
```

Those require additional source-specific research.

---

### 54. Extremely important Minnesota discovery

Minnesota is the first state in our sequence where I would make the following a **mandatory ingestion objective**:

```text
MN-BCA-ALPR-REGISTRY
```

Why?

Because this isn't simply a website that happens to mention ALPR.

Minnesota law explicitly requires:

```text
agency notification
        ↓
BCA statewide list
        ↓
agency ALPR use
        ↓
fixed locations
        ↓
public availability
```

([MN Revisor's Office][18])

That means Minnesota potentially gives us something extremely close to the **exact statewide ALPR deployment source** you originally wanted.

---

### 55. Minnesota rating

#### **9.8 / 10 — EXTREMELY HIGH VALUE**

| Category                      |                 Rating |
| ----------------------------- | ---------------------: |
| State traffic cameras         |           🟢 Excellent |
| Live traffic video            |                     🟢 |
| Snowplow cameras              |                     🟢 |
| Traffic incidents             |                     🟢 |
| Traffic speeds                |                     🟢 |
| DMS                           |                     🟢 |
| Road weather                  |                     🟢 |
| Statewide P25 radio           |           🟢 Excellent |
| Public scanner ecosystem      |           🟢 Excellent |
| ALPR statutory infrastructure |     🟢 **Exceptional** |
| ALPR agency registry          | 🟢 **Required by law** |
| ALPR fixed locations          | 🟢 **Required by law** |
| ALPR public logs              | 🟢 **Required by law** |
| ALPR audits                   |                     🟢 |
| Flock deployments             |                     🟢 |
| Public individual plate reads |                     🔴 |
| Statewide CAD API             |                     🔴 |

Minnesota is therefore **one of the strongest states we've encountered for this project**, especially on the ALPR side.

---

### 56. Minnesota master source graph

```text
MINNESOTA
│
├── 🟢 MnDOT
│   │
│   └── 511MN
│       ├── 🟢 Traffic CCTV
│       ├── 🟢 Live Video
│       ├── 🟢 Snowplow Cameras
│       ├── 🟢 Incidents
│       ├── 🟢 Closures
│       ├── 🟢 Construction
│       ├── 🟢 Speeds
│       ├── 🟢 DMS
│       ├── 🟢 Road Weather
│       └── 🟢 Truck Parking
│
├── 🟢 ARMER
│   │
│   ├── MSP
│   ├── State Agencies
│   ├── Counties
│   ├── Cities
│   ├── Police
│   ├── Fire
│   ├── EMS
│   └── Tribal/Federal
│       │
│       └── P25
│           ├── 🟢 Non-encrypted
│           └── 🔴 Encrypted
│
├── 🟢 BCA
│   │
│   └── ALPR
│       ├── 🟢 Agency Registry
│       ├── 🟢 Fixed Locations
│       ├── 🟢 Public Logs
│       └── 🟢 Audits
│
├── 🟢 MUNICIPAL ALPR
│   ├── Flock
│   ├── Other Vendors
│   └── Local Systems
│
└── 🟢 PUBLIC RADIO
    └── Broadcastify
        ├── Audio Feeds
        └── Calls / SDR
```

**Minnesota complete for this state-level pass.**

**Next alphabetically: Mississippi.**

[1]: https://mn.gov/admin/data-practices/data/types/lawenforcement/alpr/?utm_source=chatgpt.com "ALPR Audits / Data Practices Office"
[2]: https://www.dot.state.mn.us/topics/index.html?utm_source=chatgpt.com "Popular Topics - MnDOT"
[3]: https://play.google.com/store/apps/details?hl=en_US&id=crc.carsapp.mn&utm_source=chatgpt.com "Minnesota 511 - Apps on Google Play"
[4]: https://511mn.org/help/section/how-to-create-and-manage-a-511-account.html?utm_source=chatgpt.com "511 - help and information"
[5]: https://github.com/cailinpitt/ClassicTraffic?utm_source=chatgpt.com "GitHub - cailinpitt/ClassicTraffic: Posts videos of state traffic cameras 🚗 · GitHub"
[6]: https://www.newsline.dot.state.mn.us/archive/22/November/30.html?utm_source=chatgpt.com "Newsline - Minnesota Department of Transportation Employee News"
[7]: https://mn.gov/dot/search/?query=cameras&utm_source=chatgpt.com "Search - MnDOT"
[8]: https://www.dot.state.mn.us/freeway-operations/?utm_source=chatgpt.com "RTMC - Freeway Operations - MnDOT"
[9]: https://mn.gov/dot/search/?query=cameras+url%3Adot.state.mn.us&sortby=&v=&utm_source=chatgpt.com "Search - MnDOT"
[10]: https://dps.mn.gov/divisions/ecn/networks/armer?utm_source=chatgpt.com "ARMER | Minnesota Department of Public Safety"
[11]: https://www.health.mn.gov/communities/ep/taccomm/armerradio.pdf?utm_source=chatgpt.com "ARMER Radio System"
[12]: https://dps.mn.gov/divisions/ecn/networks/armer/approved-armer-equipment?utm_source=chatgpt.com "Approved ARMER equipment | Minnesota Department of Public Safety"
[13]: https://status.broadcastify.com/listen/ctid/1371/publicsafety?utm_source=chatgpt.com "Ramsey County, Minnesota Audio Feeds"
[14]: https://status.broadcastify.com/listen/stid/27?utm_source=chatgpt.com "Minnesota Audio Feeds"
[15]: https://status.broadcastify.com/listen/stid/27/publicsafety?utm_source=chatgpt.com "Minnesota Audio Feeds"
[16]: https://status.broadcastify.com/listen/ctid/1336/publicsafety?utm_source=chatgpt.com "Hennepin County, Minnesota Audio Feeds"
[17]: https://mn.gov/admin/data-practices/data/types/lawenforcement/alpr/index.jsp?utm_source=chatgpt.com "ALPR Audits / Data Practices Office"
[18]: https://www.revisor.mn.gov/statutes/2024/cite/13.824/subd/13.824.2a?utm_source=chatgpt.com "Sec. 13.824 MN Statutes"
[19]: https://www.revisor.mn.gov/statutes/2023/cite/13.824/subd/13.824.1?utm_source=chatgpt.com "Sec. 13.824 MN Statutes"
[20]: https://www.lrl.mn.gov/mndocs/mandates_results?SL_Art=&SL_SS=0&SL_Sect=&SL_Subd=&SL_Year=none&SL_ch=&active=0&agency=&agencytext=&child=1&due1=&due2=&pubd1=&pubd2=&recd1=&recd2=&stat_num=&stat_subd=&title=&topics=30.144&utm_source=chatgpt.com "Mandated Reports - Search Results - Minnesota Legislative Reference Library"
[21]: https://www.lrl.mn.gov/mndocs/mandates_detail?orderid=8735&utm_source=chatgpt.com "Mandate Detail - Minnesota Legislative Reference Library"
[22]: https://www.revisor.mn.gov/bills/94/2026/0/SF/4739/versions/0/?utm_source=chatgpt.com "SF 4739 Introduction - 94th Legislature (2025 - 2026)"
[23]: https://www.revisor.mn.gov/statutes/cite/13.82?utm_source=chatgpt.com "Sec. 13.82 MN Statutes"
