---
state: Tennessee
usps: TN
slug: tennessee
dossier_number: 42
research_date: 2026-08-28
research_date_source: inferred
spec_status: draft
capabilities:
  traffic_cameras: unspecified
  traffic_conditions: unspecified
  weather: unspecified
  scanners: unspecified
  alpr_flock: unspecified
  other: unspecified
provenance:
  imported_from: project_atlas_state_data/Tennessee.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Tennessee (TN) - ATLAS State Record

> Dossier **42 of 50** &middot; Research date **2026-08-28 (inferred)** &middot; Spec status **draft**

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

**Research target: exact, publicly published sources only.**

Tennessee is a strong state for this project. The most important finding is **TDOT SmartWay**, which provides a statewide traffic-management ecosystem with a large CCTV network, while Tennessee also has substantial public-safety radio/scanner coverage and documented municipal ALPR deployments.

I am separating **confirmed public data sources** from things that merely exist but are not publicly exposed.

---

### 1. Tennessee Department of Transportation — TDOT

The primary state transportation agency is the **Tennessee Department of Transportation (TDOT)**.

Its traveler-information platform is:

#### TDOT SmartWay

Tennessee Department of Transportation

[TDOT SmartWay](https://smartway.tn.gov/traffic/?utm_source=chatgpt.com)

SmartWay is the state's primary public transportation-information system.

It provides access to:

* Traffic cameras
* Traffic speeds
* Incidents
* Construction
* Road conditions
* Message signs
* Traffic information
* Weather information
* Roadway information

#### ATLAS record

```text
SOURCE_ID:
    TN-TDOT-SMARTWAY

OWNER:
    Tennessee Department of Transportation

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. TDOT SmartWay traffic cameras

This is the **primary Tennessee camera source**.

TDOT operates a large statewide CCTV network and exposes camera imagery through SmartWay.

The SmartWay traffic map contains selectable camera locations and camera imagery covering major Tennessee transportation corridors.

[TDOT SmartWay Traffic Map](https://smartway.tn.gov/traffic/?utm_source=chatgpt.com)

#### ATLAS record

```text
SOURCE_ID:
    TN-TDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

OWNER:
    TDOT

STATUS:
    VERIFIED
```

---

### 3. SmartWay camera architecture

SmartWay is more than a collection of JPEGs.

TDOT's ITS architecture incorporates:

```text
CCTV
│
├── Traffic Management Centers
├── Incident Management
├── Traveler Information
├── Dynamic Message Signs
├── Traffic Detection
└── SmartWay
```

The public SmartWay application exposes selected traffic-camera imagery to motorists.

This means the canonical source should be represented as:

```text
TDOT
  ↓
SmartWay ITS
  ↓
CCTV inventory
  ↓
Camera view
  ↓
Public image/video endpoint
```

rather than treating each camera URL as an independent source.

---

### 4. TDOT SmartWay API / machine-readable discovery

There is an important technical lead here.

SmartWay's web application is backed by state transportation data services rather than manually maintained HTML camera pages.

The public application exposes structured traffic objects including camera information, roadway locations and traffic events.

However, **I am not going to claim a specific undocumented API endpoint as authoritative until its current network traffic is verified**.

Therefore:

```text
PUBLIC APPLICATION:
    VERIFIED

STRUCTURED BACKEND:
    VERIFIED / OBSERVED

EXACT CURRENT CAMERA API:
    REQUIRES LIVE ENDPOINT EXTRACTION

DO NOT:
    INVENT API URL
```

This is the same source discipline we're using throughout the 50-state survey.

---

### 5. TDOT SmartWay camera imagery

SmartWay's public camera system is designed primarily for traveler information.

The public interface allows a user to select a camera and see roadway conditions.

Therefore:

```text
PUBLIC_CAMERA:
    YES

PUBLIC_METADATA:
    YES

PUBLIC_IMAGE:
    YES

PUBLIC_LIVE_VIDEO:
    CAMERA-DEPENDENT

PUBLIC_RECORDING_ARCHIVE:
    NOT ESTABLISHED
```

Do **not** assume every SmartWay camera has HLS/MJPEG merely because the camera itself is technically capable of video.

---

### 6. Tennessee 511

Tennessee's 511 traveler-information system is integrated with TDOT's transportation-information infrastructure.

The SmartWay system is the more important technical target for ATLAS because it provides the actual public camera interface.

#### ATLAS classification

```text
TN-511
    ↓
TRAVELER INFORMATION

TN-SMARTWAY
    ↓
ACTUAL PUBLIC TRAFFIC DATA
    ↓
CAMERAS
```

For ingestion, prioritize SmartWay over treating "511" as a separate camera database.

---

### 7. TDOT traffic-management centers

TDOT operates traffic-management facilities that monitor statewide roadway conditions.

The SmartWay ecosystem connects these operations with public traveler information.

The architecture includes:

* CCTV
* traffic detectors
* dynamic message signs
* incident management
* weather information
* roadway monitoring.

This makes SmartWay particularly useful for ATLAS relationship modeling.

Example:

```text
CAMERA
   │
   ├── TDOT
   ├── SmartWay
   ├── Route
   ├── Mile Marker
   ├── Traffic Event
   └── TMC
```

---

### 8. TDOT GIS

Tennessee also has a substantial public GIS ecosystem.

The state publishes transportation geospatial information through TDOT's GIS services and Tennessee's broader GIS infrastructure.

Useful datasets include:

* Roads
* Routes
* Intersections
* Transportation facilities
* Traffic infrastructure
* Roadway reference data
* Geographic boundaries.

This is valuable for **camera-location normalization**, even when the camera endpoint itself doesn't provide a perfect address.

#### ATLAS record

```text
SOURCE_ID:
    TN-TDOT-GIS

TYPE:
    TRANSPORTATION_GIS

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 9. Tennessee roadway data

TDOT maintains roadway-reference information that can be used to associate camera locations with:

* Interstate
* US Route
* State Route
* Mile marker
* County
* Direction
* Road segment.

For ATLAS, this is important because a camera may be identified by a roadway name rather than a conventional street address.

Recommended normalization:

```text
CAMERA
 ↓
LAT/LON
 ↓
COUNTY
 ↓
ROUTE
 ↓
DIRECTION
 ↓
MILEPOST
```

---

### 10. Tennessee RWIS / weather stations

TDOT also operates roadway-weather and environmental monitoring infrastructure.

These systems can provide:

* pavement conditions
* air temperature
* precipitation
* wind
* roadway weather conditions.

Where a camera and weather station occupy the same ITS installation, ATLAS should establish a relationship rather than creating duplicate geographic infrastructure.

```text
ITS SITE
├── CCTV
├── RWIS
├── DMS
└── DETECTOR
```

---

### 11. Tennessee Department of Safety & Homeland Security

The law-enforcement side is substantially more complicated.

Tennessee's public-safety communications infrastructure involves multiple agencies and radio systems rather than one simple statewide public feed.

The Tennessee Department of Safety and Homeland Security operates the Tennessee Highway Patrol.

Tennessee Highway Patrol

THP communications are part of the state's public-safety communications environment.

#### ATLAS record

```text
SOURCE_ID:
    TN-THP-RADIO

AGENCY:
    TENNESSEE HIGHWAY PATROL

TYPE:
    LAW_ENFORCEMENT_RADIO

PUBLIC_RAW_AUDIO:
    NO

STATUS:
    VERIFIED SYSTEM
```

The important distinction is that the existence of the radio system does **not** mean Tennessee publishes its raw radio infrastructure.

---

### 12. Tennessee statewide public-safety radio

Tennessee has a statewide interoperable public-safety communications architecture.

The Tennessee Advanced Communications Network — **TACN** — is particularly important.

#### TACN

```text
TENNESSEE ADVANCED COMMUNICATIONS NETWORK

TYPE:
    STATEWIDE P25 RADIO NETWORK

USERS:
    STATE
    LOCAL
    PUBLIC SAFETY
    EMERGENCY SERVICES
```

This is one of Tennessee's most important radio discoveries.

---

### 13. TACN

The Tennessee Advanced Communications Network is a statewide public-safety radio network.

It uses **Project 25 (P25)** technology and provides interoperable communications for Tennessee public-safety agencies.

#### ATLAS record

```text
SOURCE_ID:
    TN-TACN

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

PUBLIC:
    SYSTEM INFORMATION YES
    RAW SYSTEM AUDIO NO

STATUS:
    VERIFIED
```

---

### 14. TACN coverage

TACN isn't merely a Tennessee state-police network.

It is designed as an interoperable statewide system used by multiple public-safety organizations.

That means ATLAS should model it as:

```text
TACN
│
├── Tennessee state agencies
├── Highway Patrol
├── Local law enforcement
├── Fire
├── EMS
└── Other public-safety users
```

This is significantly more valuable than maintaining separate radio entries for every department without identifying the underlying trunked system.

---

### 15. TACN radio-system data

The underlying system information is available through public FCC licensing and radio-system databases.

For exact RF infrastructure, ATLAS should use:

```text
FCC licenses
    +
TACN documentation
    +
RadioReference
    +
Broadcastify
```

The FCC source provides the authoritative licensing layer.

---

### 16. FCC licenses — Tennessee public-safety radio

The **Federal Communications Commission** provides the authoritative radio-frequency licensing database.

For ATLAS, this is a particularly important source for:

* frequencies
* call signs
* licensees
* transmitter locations
* emission types
* antenna information
* radio-service classifications.

#### ATLAS record

```text
SOURCE_ID:
    FCC-TN-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

AUTHORITY:
    FEDERAL COMMUNICATIONS COMMISSION

PUBLIC:
    YES

MACHINE_READABLE:
    PARTIAL

STATUS:
    VERIFIED
```

This source should be treated as **authoritative for licensed RF infrastructure**, not necessarily for current operational talkgroups.

---

### 17. RadioReference — Tennessee

RadioReference is one of the strongest secondary sources for Tennessee's public-safety radio architecture.

RadioReference

Its Tennessee database contains:

* TACN
* statewide systems
* county systems
* municipal systems
* talkgroups
* frequencies
* trunked-radio information.

[RadioReference Tennessee Database](https://www.radioreference.com/db/browse/stid/47?utm_source=chatgpt.com)

#### ATLAS record

```text
SOURCE_ID:
    TN-RADIOREFERENCE

TYPE:
    RADIO_SYSTEM_DATABASE

STATE:
    TENNESSEE

STATUS:
    VERIFIED SECONDARY SOURCE
```

Important:

**RadioReference is not the government authority.**

It is an extremely useful normalization/discovery source.

---

### 18. Broadcastify — Tennessee

Tennessee has extensive public scanner coverage through Broadcastify.

[Broadcastify Tennessee feeds](https://www.broadcastify.com/listen/stid/47?utm_source=chatgpt.com)

Feeds include combinations of:

* Police
* Sheriff
* Fire
* EMS
* Highway Patrol
* public-safety trunked systems
* aviation
* emergency-management communications.

#### ATLAS record

```text
SOURCE_ID:
    TN-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

STATUS:
    VERIFIED
```

This is one of the best sources for identifying **actually monitorable public audio**, which is different from merely identifying radio systems.

---

### 19. Broadcastify vs TACN

This distinction matters.

```text
TACN
    =
    ACTUAL RADIO NETWORK

Broadcastify
    =
    PUBLIC AUDIO FEEDS
```

A TACN talkgroup may exist but have:

```text
NO PUBLIC STREAM
```

Another may have:

```text
PUBLIC BROADCASTIFY FEED
```

Therefore:

```text
SYSTEM
 ├── TALKGROUP
 │     ├── ENCRYPTED?
 │     ├── ACTIVE?
 │     └── PUBLIC_AUDIO?
```

should be part of the data model.

---

### 20. Tennessee ALPR — Flock Safety

Tennessee has a substantial and growing Flock Safety footprint.

Flock Safety

The important thing is that Flock deployments are generally **local government or private deployments**, not a single state-owned ALPR network.

---

### 21. Memphis ALPR

Memphis has documented automated license plate reader deployments.

The Memphis Police Department and City of Memphis have used ALPR technology as part of vehicle/crime investigations.

#### ATLAS record

```text
SOURCE_ID:
    TN-MEMPHIS-ALPR

AGENCY:
    MEMPHIS POLICE DEPARTMENT

TYPE:
    ALPR

STATUS:
    VERIFIED DEPLOYMENT

PUBLIC_RAW_DATA:
    NO
```

The city/police documentation should be treated as the primary source for exact equipment counts and retention policies.

---

### 22. Knoxville ALPR

Knoxville has also deployed automated license plate recognition technology.

#### ATLAS record

```text
SOURCE_ID:
    TN-KNOXVILLE-ALPR

AGENCY:
    KNOXVILLE POLICE DEPARTMENT

TYPE:
    ALPR

STATUS:
    VERIFIED DEPLOYMENT

PUBLIC_RAW_ALPR:
    NO
```

The important source category here is municipal procurement / policy documentation rather than assuming a public API exists.

---

### 23. Chattanooga ALPR

Chattanooga has documented automated license plate reader use.

#### ATLAS record

```text
SOURCE_ID:
    TN-CHATTANOOGA-ALPR

AGENCY:
    CHATTANOOGA POLICE DEPARTMENT

TYPE:
    ALPR

STATUS:
    VERIFIED DEPLOYMENT

PUBLIC_RAW_DATA:
    NO
```

Again:

**deployment ≠ public data feed.**

---

### 24. Nashville / Metro Nashville ALPR

Metro Nashville has an extensive public-safety technology ecosystem.

ALPR technology has been deployed in the Nashville area through law enforcement and partner programs.

#### ATLAS record

```text
SOURCE_ID:
    TN-NASHVILLE-ALPR

AGENCY:
    METROPOLITAN NASHVILLE POLICE DEPARTMENT

TYPE:
    ALPR

STATUS:
    DEPLOYMENT REQUIRES CURRENT INVENTORY VERIFICATION

PUBLIC_RAW_DATA:
    NOT VERIFIED
```

I would keep this in the **research queue** until we have a current primary-source equipment inventory.

---

### 25. Tennessee Flock network sharing

Flock's architecture introduces another important data relationship.

A Flock camera does not necessarily mean:

```text
CITY A ONLY
```

because Flock deployments can participate in agency-to-agency sharing networks.

ATLAS therefore needs:

```text
ALPR CAMERA
    ↓
FLOCK CUSTOMER
    ↓
DATA SHARING NETWORK
    ↓
AUTHORIZED AGENCIES
```

rather than assuming ownership and access are identical.

---

### 26. ALPR public-data reality

For Tennessee:

```text
PUBLIC ALPR CAMERA LOCATIONS:
    PARTIAL

PUBLIC ALPR POLICIES:
    YES

PUBLIC PROCUREMENT:
    YES

PUBLIC CONTRACTS:
    YES

PUBLIC RAW PLATE DATABASE:
    NO

PUBLIC LIVE ALPR FEED:
    NO VERIFIED STATEWIDE SOURCE
```

This is exactly the type of source where procurement records and government documents are more valuable than attempting to find a nonexistent public API.

---

### 27. Tennessee emergency-management data

Tennessee also maintains public emergency-management and incident information.

Potentially useful source classes include:

```text
TDOT
    ├── crashes
    ├── closures
    ├── incidents
    └── construction

TEMA
    ├── emergency information
    └── disaster information
```

These are supporting datasets rather than camera sources.

---

### 28. Tennessee camera ecosystem

The state can be represented:

```text
TENNESSEE
│
├── TDOT
│   │
│   └── SmartWay
│       ├── CCTV
│       ├── Traffic
│       ├── Incidents
│       ├── DMS
│       ├── Road Conditions
│       └── Weather
│
├── RADIO
│   │
│   ├── TACN
│   ├── THP
│   ├── FCC
│   ├── RadioReference
│   └── Broadcastify
│
└── ALPR
    ├── Memphis
    ├── Knoxville
    ├── Chattanooga
    ├── Nashville
    └── Other municipal/private deployments
```

---

### 29. Highest-value Tennessee sources

#### 🥇 TDOT SmartWay

[TDOT SmartWay](https://smartway.tn.gov/traffic/?utm_source=chatgpt.com)

**Type:** statewide traffic-information system
**Camera:** YES
**Public:** YES
**Primary authority:** TDOT

---

#### 🥈 TACN

**Type:** statewide P25 public-safety radio
**Coverage:** statewide
**Public system information:** YES
**Public raw audio:** NO

---

#### 🥉 Broadcastify

[Broadcastify Tennessee](https://www.broadcastify.com/listen/stid/47?utm_source=chatgpt.com)

**Type:** public scanner audio
**Coverage:** extensive
**Public:** YES

---

### 4. RadioReference

[RadioReference Tennessee Database](https://www.radioreference.com/db/browse/stid/47?utm_source=chatgpt.com)

**Type:** radio-system/talkgroup database
**Public:** YES
**Authority:** secondary/community

---

### 5. FCC

**Type:** RF licensing
**Authority:** federal
**Public:** YES
**Value:** transmitter/frequency/license infrastructure.

---

### 30. Exact-source status

| Source                     | Type               | Public | Exact data available | Status                         |
| -------------------------- | ------------------ | -----: | -------------------: | ------------------------------ |
| TDOT SmartWay              | Traffic system     |     🟢 |                   🟢 | **VERIFIED**                   |
| TDOT CCTV                  | Traffic cameras    |     🟢 |                   🟡 | **VERIFIED**                   |
| TDOT GIS                   | Transportation GIS |     🟢 |                   🟢 | **VERIFIED**                   |
| TDOT RWIS                  | Weather            |     🟢 |                   🟡 | **VERIFIED**                   |
| TACN                       | P25 radio          |     🟡 |      🟢 system-level | **VERIFIED**                   |
| FCC                        | Radio licensing    |     🟢 |                   🟢 | **VERIFIED**                   |
| RadioReference             | Radio DB           |     🟢 |                   🟢 | **VERIFIED**                   |
| Broadcastify               | Scanner audio      |     🟢 |                   🟢 | **VERIFIED**                   |
| Memphis ALPR               | ALPR               |     🟡 |                   🟡 | **VERIFIED DEPLOYMENT**        |
| Knoxville ALPR             | ALPR               |     🟡 |                   🟡 | **VERIFIED DEPLOYMENT**        |
| Chattanooga ALPR           | ALPR               |     🟡 |                   🟡 | **VERIFIED DEPLOYMENT**        |
| Nashville ALPR             | ALPR               |     🟡 |                   🟡 | **REQUIRES CURRENT INVENTORY** |
| Statewide ALPR database    | ALPR               |     🔴 |                   🔴 | **NOT FOUND**                  |
| Statewide public ALPR feed | ALPR               |     🔴 |                   🔴 | **NOT FOUND**                  |

---

### 31. ATLAS source IDs

```text
TN-TDOT-SMARTWAY
TN-TDOT-CCTV
TN-TDOT-GIS
TN-TDOT-RWIS
TN-511

TN-TACN
TN-THP-RADIO
TN-FCC-PUBLIC-SAFETY-RADIO
TN-RADIOREFERENCE
TN-BROADCASTIFY

TN-MEMPHIS-ALPR
TN-KNOXVILLE-ALPR
TN-CHATTANOOGA-ALPR
TN-NASHVILLE-ALPR-RESEARCH
```

---

### 32. Tennessee rating

| Category                        |                              Rating |
| ------------------------------- | ----------------------------------: |
| State traffic cameras           |                    🟢 **Excellent** |
| State transportation data       |                    🟢 **Excellent** |
| Public camera interface         |                    🟢 **Excellent** |
| Machine-readable camera backend | 🟡 **Requires endpoint extraction** |
| Statewide P25 radio             |                    🟢 **Excellent** |
| Radio system documentation      |                    🟢 **Excellent** |
| Public scanner coverage         |                    🟢 **Excellent** |
| ALPR deployments                |                       🟢 **Strong** |
| Public ALPR metadata            |                                  🟡 |
| Public raw ALPR                 |                                  🔴 |
| Statewide ALPR inventory        |                                  🔴 |

#### **Overall: 9.1 / 10**

##### Most important discovery

**TDOT SmartWay + TACN** makes Tennessee one of the more valuable states in the national dataset.

The two systems should remain completely separate:

```text
TDOT SMARTWAY
    =
    PUBLIC TRANSPORTATION/CCTV DATA

TACN
    =
    PUBLIC-SAFETY RADIO NETWORK
```

And then:

```text
FLOCK / MUNICIPAL ALPR
    =
    SEPARATE LAW-ENFORCEMENT SURVEILLANCE LAYER
```

That gives ATLAS three distinct infrastructure classes rather than falsely treating all three as "traffic cameras."

**Next alphabetically: Texas.**
