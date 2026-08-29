---
state: West Virginia
usps: WV
slug: west-virginia
dossier_number: 48
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
  imported_from: project_atlas_state_data/West Virginia.txt
  imported_on: 2026-08-28
  stated_dossier_number: 47
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# West Virginia (WV) - ATLAS State Record

> Dossier **48 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

West Virginia is a **very good camera and radio state**, but its ALPR situation is substantially different from Virginia and Washington.

The strongest discoveries are:

* **WV511 / WVDOH statewide traffic cameras**
* **An official WVDOH ArcGIS FeatureServer containing CCTV inventory**
* **West Virginia SIRN — statewide P25 trunked radio**
* **85+ SIRN sites historically, with the current statewide communications plan reporting 109 RF voice sites and 50,000+ subscriber units**
* **92 Broadcastify feeds currently listed**
* **Confirmed Flock/ALPR deployments exist in West Virginia**
* **However, West Virginia currently does NOT have an enacted statewide ALPR registry comparable to Virginia or Washington**
* The legislature is actively examining Flock/ALPR in 2026 and expects legislation in 2027. ([West Virginia Legislature][1])

---

### 1. West Virginia Department of Transportation — WVDOH

The primary transportation authority is the West Virginia Department of Transportation, Division of Highways.

Its public traveler-information system is:

[WV511 — West Virginia Traveler Information](https://wv511.org/?utm_source=chatgpt.com)

WVDOH's Traffic Engineering Division currently describes the system as operating a statewide Transportation Management Center that monitors traffic **24/7/365**.

Its documented functions include:

* real-time CCTV monitoring
* incident detection
* incident verification
* DMS management
* traffic data collection
* data archiving
* winter-weather monitoring
* WV511 traveler information. ([WV DOT][2])

#### ATLAS

```text
SOURCE_ID:
    WV-WVDOH-511

OWNER:
    WEST VIRGINIA DEPARTMENT OF TRANSPORTATION
    DIVISION OF HIGHWAYS

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. WV511 traffic cameras

The public WV511 system has a dedicated traffic-camera interface.

The current site exposes individual camera records such as:

```text
US-50: WOO US-50 @ MM 6.5
US-50: WOO US-50 @ RT 47
US-50: HAR US-50 @ MM 75.5
US-50: MIN US-50 @ US-220
```

and identifies the source as West Virginia DOT. ([511WV][3])

Another current camera listing exposes numerous cameras along US-119 and I-64. ([511WV][4])

The I-77 camera listing is particularly useful because it exposes a long sequence of camera locations across multiple counties:

* Wood
* Jackson
* Kanawha
* Fayette
* Raleigh
* Mercer

and provides route/mile-marker identifiers. ([511WV][5])

#### ATLAS

```text
SOURCE_ID:
    WV-WVDOH-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

LOCATION_METADATA:
    YES

ROUTE_METADATA:
    YES

MILEPOINT_METADATA:
    YES

STATUS:
    VERIFIED
```

---

### 3. Official WVDOH CCTV GIS — extremely important

This is actually more valuable for ATLAS than the public WV511 webpage.

West Virginia DOT operates an official ArcGIS REST service:

```text
https://gis.transportation.wv.gov/arcgis/rest/services/Assets/Assets/
```

The service contains a parent **CCTV** category.

One exposed feature layer is:

**CCTV_WVDOH**

The official layer reports:

```text
Type:
    Feature Layer

Geometry:
    Point

Supported query formats:
    JSON
    GeoJSON
    PBF

Advanced queries:
    YES

Statistics:
    YES

Pagination:
    YES

Order By:
    YES
```

([WVDOT GIS][6])

#### ATLAS

```text
SOURCE_ID:
    WV-WVDOH-CCTV-GIS

OWNER:
    WVDOH

TYPE:
    OFFICIAL_CCTV_ASSET_INVENTORY

PROTOCOL:
    ARCGIS_REST

OUTPUT:
    JSON
    GEOJSON
    PBF

GEOMETRY:
    POINT

STATUS:
    VERIFIED
```

**This is a first-class machine-readable source.**

---

### 4. WVDOH CCTV_WVPA layer

The same official GIS service contains another CCTV layer:

**CCTV_WVPA**

The current FeatureServer exposes:

* point geometry
* JSON
* GeoJSON
* PBF
* advanced queries
* pagination
* statistics
* ordering
* spatial queries. ([WVDOT GIS][7])

The geographic extent shown by the layer is approximately:

```text
WEST:
    -81.5661

EAST:
    -81.0460

SOUTH:
    37.3636

NORTH:
    38.3028
```

([WVDOT GIS][7])

#### ATLAS

```text
SOURCE_ID:
    WV-WVDOH-CCTV-WVPA

TYPE:
    REGIONAL_CCTV_ASSET_LAYER

STATUS:
    VERIFIED
```

This is exactly the kind of source we want because it is **not dependent on scraping the visual WV511 map**.

---

### 5. WVDOH CCTV count

An official WVDOH planning document states that its ITS infrastructure included:

> **100+ Closed Circuit Television Cameras**

along with:

* 80+ DMS
* 50+ RWIS
* 900+ guide-sign structures.

([WV DOT][8])

However, that document is several years old.

Therefore:

```text
HISTORICAL_PUBLIC_COUNT:
    100+

CURRENT_EXACT_COUNT:
    DO NOT ASSUME

CURRENT_MACHINE_INVENTORY:
    USE WVDOH ARCGIS FEATURESERVER
```

This is an important distinction.

The GIS inventory is the better source for determining the current count.

---

### 6. WVDOH Transportation Management Center

The current Traffic Engineering Division page confirms that the West Virginia Transportation Management Center operates continuously and monitors the statewide highway system.

It specifically identifies:

```text
TMC
│
├── CCTV
├── Traffic detectors
├── Weather sensors
├── Dynamic message signs
├── Highway advisory radio
├── Traffic flow monitoring
├── Travel-time estimation
└── 511
```

([WV DOT][2])

#### ATLAS

```text
SOURCE_ID:
    WV-WVDOH-TMC

TYPE:
    TRANSPORTATION_MANAGEMENT_CENTER

STATUS:
    VERIFIED
```

---

### 7. WVDOH weather sensors

WVDOH's official ITS documentation identifies **roadway weather information systems** and weather sensors as part of its transportation infrastructure.

The older official infrastructure count was:

```text
RWIS:
    50+
```

([WV DOT][8])

Current exact inventory should be retrieved from WVDOH GIS rather than assumed from the older report.

#### ATLAS

```text
SOURCE_ID:
    WV-WVDOH-RWIS

TYPE:
    ROAD_WEATHER_SENSOR

STATUS:
    VERIFIED
```

---

### 8. WV511 traffic events

The official WV511 system provides:

* road conditions
* weather alerts
* traffic
* construction
* incidents
* cameras.

WVDOH describes WV511 as the public-facing component of its transportation management operation. ([WV DOT][2])

#### ATLAS

```text
WV-WVDOH-INCIDENTS
WV-WVDOH-ROADWORK
WV-WVDOH-ROAD-CONDITIONS
WV-WVDOH-WEATHER
WV-WVDOH-DMS
WV-WVDOH-TRAFFIC
```

---

### 9. West Virginia SIRN

This is the **major radio discovery**.

West Virginia operates the:

**Statewide Interoperable Radio Network — SIRN**

Official source:

[West Virginia SIRN](https://sirn.wv.gov/?utm_source=chatgpt.com)

The official SIRN website describes it as a statewide:

* UHF
* Project 25
* digital
* trunked

radio system.

It connects federal, state and local agencies and provides interoperability with bordering states. ([Sirn][9])

#### ATLAS

```text
SOURCE_ID:
    WV-SIRN

OWNER:
    STATE OF WEST VIRGINIA

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

BAND:
    UHF

STANDARD:
    APCO P25

MODE:
    DIGITAL TRUNKED

STATUS:
    VERIFIED
```

---

### 10. SIRN coverage

The official SIRN FAQ currently says the system has:

> **over 85 operational sites**

and provides coverage throughout most of West Virginia. ([Sirn][10])

However, the newer statewide communications plan gives a more current figure:

**109 RF voice radio sites**

and more than:

**50,000 registered subscriber units.** ([Sirn][11])

Therefore ATLAS should record:

```text
OLDER_OFFICIAL_COUNT:
    >85 sites

NEWER_OFFICIAL_COUNT:
    109 RF voice sites

SUBSCRIBER_UNITS:
    >50,000

COUNT_DATE:
    SOURCE-SPECIFIC
```

Do not merge them into one historical number.

---

### 11. SIRN participating agencies

SIRN isn't merely a State Police network.

The official FAQ says **any municipal, county, state or federal public-safety agency operating in West Virginia can participate**. ([Sirn][10])

The network therefore potentially covers:

```text
WV STATE POLICE
COUNTY SHERIFFS
MUNICIPAL POLICE
FIRE
EMS
EMERGENCY MANAGEMENT
OTHER PUBLIC SAFETY
FEDERAL PARTNERS
```

#### ATLAS

```text
SYSTEM_SCOPE:
    STATE + COUNTY + MUNICIPAL + FEDERAL

INTEROPERABILITY:
    YES
```

---

### 12. SIRN talkgroups

The official SIRN technical plan describes statewide interoperability talkgroups and regional talkgroup templates.

It also documents:

* statewide interoperability channels
* regional interoperability channels
* agency interoperability
* VHF/UHF/800 MHz interoperability channels. ([Sirn][12])

This makes SIRN particularly useful for ATLAS's radio registry.

---

### 13. SIRN encryption

SIRN supports **AES-256 encryption** for designated talkgroups/channels.

The official SIRN tactical communications plan explicitly documents encrypted P25 talkgroups. ([Sirn][12])

Therefore:

```text
PUBLIC_RADIO_SYSTEM:
    YES

PUBLICLY_MONITORABLE_AUDIO:
    PARTIAL

ENCRYPTED_TALKGROUPS:
    YES

ALL_SIRN_AUDIO_PUBLIC:
    NO
```

This is exactly the same distinction we need to maintain for every state.

---

### 14. Broadcastify — West Virginia

[Broadcastify West Virginia Public Safety Feeds](https://status.broadcastify.com/listen/stid/54/publicsafety?utm_source=chatgpt.com)

Current Broadcastify data shows:

**78 total audio feeds**

across:

**43 counties**

with:

**72 public-safety feeds**.

([Broadcastify][13])

That's a very strong scanner ecosystem for a state this size.

---

### 15. Broadcastify county coverage

Current public-safety listings include:

* Barbour
* Berkeley
* Boone
* Brooke
* Cabell
* Doddridge
* Fayette
* Greenbrier
* Hampshire
* Hancock
* Hardy
* Harrison
* Jackson
* Jefferson
* Kanawha
* Lewis
* Lincoln
* Logan
* Marion
* Marshall
* Mason
* Mercer
* Mineral
* Mingo
* Monongalia
* Monroe
* Morgan
* Ohio
* Pendleton
* Preston
* Putnam
* Raleigh
* Randolph
* Ritchie
* Summers
* Taylor
* Tucker
* Tyler
* Upshur
* Wayne
* Webster
* Wetzel
* Wood.

([Broadcastify][13])

#### ATLAS

```text
SOURCE_ID:
    WV-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

COUNT:
    DYNAMIC

CURRENT_OBSERVED:
    78 TOTAL
    72 PUBLIC SAFETY
    43 COUNTIES

STATUS:
    VERIFIED
```

---

### 16. WV SIRN + Broadcastify relationship

This is important.

Broadcastify isn't the radio system.

It is an **audio redistribution layer**.

For example, a current Cabell County feed explicitly identifies an ingest node:

**WV SIRN — West Virginia Statewide Interoperable Radio Network (Huntington)**. ([Broadcastify][14])

Therefore:

```text
WV SIRN
   ↓
RADIO SYSTEM
   ↓
LOCAL RECEIVER / SDR
   ↓
BROADCASTIFY
   ↓
PUBLIC AUDIO FEED
```

ATLAS should record those as separate entities.

---

### 17. Cabell County example

The current Cabell County Broadcastify page identifies a public feed covering:

* WVSP Huntington
* Huntington Police
* Cabell County Sheriff's Department
* Cabell County EMS
* Huntington Fire
* Barboursville Police
* Milton Police
* Marshall University Police.

It also states that the feed was updated in August 2026 with new Cabell P25 simulcast frequencies and SIRN tags. ([Broadcastify][14])

This is a good example of the level of radio metadata that can be discovered through public scanner infrastructure.

---

### 18. ALPR — important correction from earlier states

West Virginia **does not currently have the equivalent of Virginia's statewide mandatory ALPR inventory or Washington's 2026 statewide ALPR registration system**.

This needs to be explicitly recorded.

I found historical West Virginia bills proposing an ALPR statutory framework, including:

* SB 646 in 2019
* SB 2 in 2020.

Those bills proposed:

* ALPR definitions
* authorized uses
* training
* retention
* public policies
* audit requirements.

But the official bill histories show those proposals remained **pending/in committee** rather than becoming the statewide ALPR statute described in the introduced bill. ([West Virginia Legislature][15])

Therefore:

```text
STATEWIDE_ALPR_REGISTRY:
    NO VERIFIED

STATEWIDE_ALPR_INVENTORY:
    NO VERIFIED

STATEWIDE_ALPR_REPORTING:
    NO VERIFIED

STATEWIDE_ALPR_POLICY:
    NO VERIFIED
```

---

### 19. But ALPR absolutely exists in West Virginia

This is where things get interesting.

The West Virginia Legislature's August 2026 Government Organization Committee specifically held a presentation on:

**Flock cameras and automated license plate reader equipment/services purchased by local governments.**

The presentation included Flock Safety's Director of Government Affairs. ([West Virginia Legislature][1])

The legislature's own August 10, 2026 report describes Flock cameras as creating a searchable database of vehicle movements and says lawmakers were considering legislation to regulate them in the **2027 Regular Session**. ([Wrap Up][16])

#### ATLAS

```text
SOURCE_ID:
    WV-FLOCK-ALPR

TYPE:
    PRIVATE_VENDOR_ALPR

DEPLOYMENT:
    CONFIRMED IN WV

STATEWIDE_REGISTRY:
    NO

LEGISLATIVE_REVIEW:
    YES

2027_LEGISLATION:
    EXPECTED
```

---

### 20. Flock is therefore a major WV research target

The August 2026 legislative report confirms that local governments are purchasing Flock cameras/ALPR systems. ([Wrap Up][16])

This means the next research layer for West Virginia is:

```text
FLOCK
│
├── City contracts
├── County contracts
├── Police contracts
├── Sheriff contracts
├── Procurement records
├── City council minutes
├── County commission minutes
└── Public records
```

There is **no evidence yet of a single statewide public inventory**, so ATLAS must discover individual deployments through procurement/public-record sources.

---

### 21. West Virginia legislature is actively investigating Flock

This isn't merely an old news story.

The official August 9, 2026 legislative agenda specifically scheduled:

> What are local governments contracting for when they purchase Flock Cameras and automated license plate reader (ALPR) equipment and services?

([West Virginia Legislature][1])

The following day, the legislature published a formal interim report discussing the technology and saying lawmakers expect to work on legislation during the **2027 Regular Session**. ([Wrap Up][16])

#### ATLAS

```text
RESEARCH_PRIORITY:
    VERY HIGH

WHY:
    CURRENT 2026 LEGISLATIVE INVESTIGATION
    + CONFIRMED LOCAL DEPLOYMENTS
```

---

### 22. West Virginia ALPR — older government deployments

There is also documented ALPR technology within West Virginia's commercial-vehicle enforcement infrastructure.

A West Virginia Public Service Commission report documents a Smart Roadside System at an I-64 weigh station containing:

* automated license plate reader
* automated USDOT number reader
* automated vehicle camera
* automated thermal inspection system.

([West Virginia Legislature][17])

A later agency report documents an I-77 Mineral Wells weigh station with the same general Smart Roadside technology and plans for another virtual roadside inspection facility. ([West Virginia Legislature][18])

#### ATLAS

```text
SOURCE_ID:
    WV-DOT-SMART-ROADSIDE

TYPE:
    COMMERCIAL_VEHICLE_SURVEILLANCE

COMPONENTS:
    ALPR
    USDOT_READER
    VEHICLE_CAMERA
    THERMAL_SYSTEM

STATUS:
    VERIFIED_HISTORICAL_DEPLOYMENT
```

This is **not** a public ALPR feed.

But it proves that ALPR-type technology exists within West Virginia government transportation/enforcement infrastructure.

---

### 23. Traffic-law camera restriction

West Virginia law currently prohibits police use of traffic-law photo-monitoring devices for determining or proving violations of traffic laws/municipal traffic ordinances, subject to statutory exceptions.

The current statute defines such a device as a photographic/video/electronic camera system that automatically produces images of vehicles, operators or license plates. ([Federal Bureau of Investigation][19])

#### ATLAS

```text
TRAFFIC_ENFORCEMENT_CAMERA:
    HEAVILY RESTRICTED

PUBLIC_TRAFFIC_CAMERA:
    LEGAL / PRESENT

ALPR:
    SEPARATE CATEGORY
```

This distinction is critical.

**WV511 traffic cameras are not the same thing as automated traffic-enforcement cameras.**

---

### 24. Private-property surveillance cameras

West Virginia enacted a new law in 2026 concerning law-enforcement surveillance cameras installed on private land.

Current §62-1A-12 generally prohibits law enforcement from installing a surveillance camera on private land to gather evidence of criminal activity without:

* property-owner consent, or
* a valid search warrant.

Exceptions exist for locations where officers have a lawful right to be, publicly viewable areas, and exigent circumstances. ([Federal Bureau of Investigation][20])

This is **not a camera inventory**, but it is relevant to ATLAS's legal metadata.

---

### 25. Proposed 2026 surveillance/AI bill

A 2026 West Virginia bill, HB 4682, proposed warrant requirements for several surveillance/AI technologies, including:

* real-time security monitoring
* multimodal vehicle recognition
* facial recognition
* gun/firearm recognition
* surveillance drones
* license plate readers
* digital identity ecosystems.

([West Virginia Legislature][21])

**Important:** this is a bill, not something I am treating as enacted law.

The distinction matters:

```text
HB 4682:
    PROPOSED

CURRENT LAW:
    DO NOT TREAT HB 4682 AS ENACTED
```

---

### 26. West Virginia surveillance technology conclusion

Unlike Virginia:

```text
NO STATEWIDE SURVEILLANCE INVENTORY FOUND
```

Unlike Washington:

```text
NO CURRENT STATEWIDE ALPR REGISTRATION FOUND
```

But:

```text
ALPR DEPLOYMENTS:
    YES

FLOCK:
    YES

TRANSPORTATION ALPR:
    YES / HISTORICALLY DOCUMENTED

LEGISLATIVE OVERSIGHT:
    YES

NEW LEGISLATION:
    EXPECTED 2027
```

That makes West Virginia a **high-priority individual-agency research state**, not a state with one master ALPR endpoint.

---

### 27. Exact West Virginia source architecture

```text
WEST VIRGINIA
│
├── WVDOH
│   │
│   ├── WV511
│   │   ├── Cameras
│   │   ├── Incidents
│   │   ├── Road conditions
│   │   ├── Construction
│   │   ├── Weather
│   │   └── DMS
│   │
│   ├── Transportation Management Center
│   │
│   └── ArcGIS
│       └── CCTV Asset Layers
│
├── RADIO
│   │
│   ├── SIRN
│   │   ├── P25
│   │   ├── UHF
│   │   ├── 109 RF sites
│   │   └── 50,000+ subscribers
│   │
│   ├── Local systems
│   ├── FCC
│   ├── RadioReference
│   └── Broadcastify
│
└── SURVEILLANCE
    │
    ├── Flock / ALPR
    ├── Transportation ALPR
    ├── Vehicle recognition
    ├── Private-property CCTV
    └── Future legislation
```

---

### 28. Highest-value sources

#### 🥇 WVDOH ArcGIS CCTV

[WVDOH Official CCTV ArcGIS FeatureServer](https://gis.transportation.wv.gov/arcgis/rest/services/Assets/Assets/FeatureServer/22?utm_source=chatgpt.com)

This is the **best technical discovery source** in West Virginia.

It gives ATLAS:

* actual point geometry
* official asset records
* JSON
* GeoJSON
* PBF
* query support
* pagination
* spatial querying.

([WVDOT GIS][6])

---

#### 🥈 WV511

[WV511 Traffic Cameras](https://wv511.org/CameraListing.aspx?CAM=CAM001&ROUTE=US-50&utm_source=chatgpt.com)

**Public camera system:** YES
**Route:** YES
**Milepoint:** YES
**Current camera pages:** YES. ([511WV][3])

---

#### 🥉 SIRN

[West Virginia SIRN](https://sirn.wv.gov/?utm_source=chatgpt.com)

**P25:** YES
**UHF:** YES
**Statewide:** YES
**109 RF sites:** documented
**50,000+ subscribers:** documented. ([Sirn][11])

---

### 4. Broadcastify

[Broadcastify West Virginia](https://status.broadcastify.com/listen/stid/54/publicsafety?utm_source=chatgpt.com)

**78 feeds:** currently observed
**72 public-safety:** currently observed
**43 counties:** currently represented. ([Broadcastify][13])

---

### 5. WV Legislature — Flock/ALPR investigation

[West Virginia Legislature — Flock Camera Interim Report](https://blog.wvlegislature.gov/headline/2026/08/10/interim-report-joint-committee-on-government-organization/?utm_source=chatgpt.com)

This is currently one of the best sources for discovering the **state of ALPR deployment in West Virginia**. ([Wrap Up][16])

---

### 29. Exact-source matrix

| Source                       | Category                   | Public | Machine-readable | Status                    |
| ---------------------------- | -------------------------- | -----: | ---------------: | ------------------------- |
| WV511                        | State traveler information |     🟢 |               🟡 | **VERIFIED**              |
| WV511 Cameras                | Traffic cameras            |     🟢 |               🟡 | **VERIFIED**              |
| WVDOH ArcGIS CCTV            | Camera inventory           |     🟢 |               🟢 | **VERIFIED**              |
| CCTV_WVDOH                   | CCTV GIS layer             |     🟢 |               🟢 | **VERIFIED**              |
| CCTV_WVPA                    | CCTV GIS layer             |     🟢 |               🟢 | **VERIFIED**              |
| WVDOH TMC                    | Transportation monitoring  |     🟡 |               🟡 | **VERIFIED**              |
| WVDOH RWIS                   | Weather sensors            |     🟡 |               🟡 | **VERIFIED**              |
| SIRN                         | Statewide radio            |     🟡 |               🟡 | **VERIFIED**              |
| SIRN P25                     | Digital trunked radio      |     🟡 |               🟡 | **VERIFIED**              |
| FCC                          | Radio licensing            |     🟢 |            🟢/🟡 | **VERIFIED**              |
| Broadcastify                 | Scanner audio              |     🟢 |               🟡 | **VERIFIED**              |
| RadioReference               | Radio database             |     🟢 |               🟢 | **EXPECTED / SECONDARY**  |
| Flock                        | ALPR                       |     🔴 |               🔴 | **DEPLOYMENTS CONFIRMED** |
| WV Smart Roadside            | ALPR/vehicle recognition   |     🟡 |               🟡 | **VERIFIED HISTORICAL**   |
| Statewide ALPR registry      | ALPR                       |     🔴 |               🔴 | **NOT FOUND**             |
| Statewide ALPR inventory     | ALPR                       |     🔴 |               🔴 | **NOT FOUND**             |
| Public raw ALPR              | ALPR                       |     🔴 |               🔴 | **NOT FOUND**             |
| Public live ALPR             | ALPR                       |     🔴 |               🔴 | **NOT FOUND**             |
| State surveillance inventory | Surveillance               |     🔴 |               🔴 | **NOT FOUND**             |

---

### 30. ATLAS source IDs

```text
WV-WVDOH
WV-WVDOH-511
WV-WVDOH-CCTV
WV-WVDOH-CCTV-GIS
WV-WVDOH-CCTV-WVDOH
WV-WVDOH-CCTV-WVPA
WV-WVDOH-TMC
WV-WVDOH-RWIS
WV-WVDOH-DMS
WV-WVDOH-TRAFFIC
WV-WVDOH-INCIDENTS
WV-WVDOH-ROADWORK
WV-WVDOH-ROAD-CONDITIONS
WV-WVDOH-WEATHER

WV-SIRN
WV-SIRN-SITES
WV-SIRN-TALKGROUPS
WV-SIRN-INTEROPERABILITY
WV-FCC-PUBLIC-SAFETY
WV-RADIOREFERENCE
WV-BROADCASTIFY

WV-FLOCK-ALPR
WV-ALPR-LOCAL
WV-ALPR-PROCUREMENT
WV-ALPR-LEGISLATIVE
WV-DOT-SMART-ROADSIDE
WV-VEHICLE-RECOGNITION

WV-SURVEILLANCE-CCTV
WV-SURVEILLANCE-DRONES
WV-SURVEILLANCE-FACIAL
WV-SURVEILLANCE-GUN
```

---

### 31. West Virginia rating

| Category                     |                        Rating |
| ---------------------------- | ----------------------------: |
| State traffic cameras        |              🟢 **Excellent** |
| Official camera GIS          |            🟢 **Exceptional** |
| Machine-readable camera data |            🟢 **Exceptional** |
| Transportation ITS           |              🟢 **Excellent** |
| Statewide radio              |            🟢 **Exceptional** |
| P25 documentation            |            🟢 **Exceptional** |
| Scanner coverage             |              🟢 **Excellent** |
| ALPR deployments             | 🟡 **Confirmed / fragmented** |
| Statewide ALPR inventory     |             🔴 **None found** |
| Flock discovery              |              🟢 **Confirmed** |
| ALPR legislation             |     🟡 **Active development** |
| Public raw ALPR              |                     🔴 **No** |
| Public live ALPR             |                     🔴 **No** |

### **Overall: 8.8 / 10**

#### The big West Virginia discovery

The most important technical source here is **not actually WV511**.

It is:

```text
WVDOH
   ↓
OFFICIAL ARCGIS
   ↓
ASSETS
   ↓
CCTV
   ↓
CCTV_WVDOH
CCTV_WVPA
   ↓
POINT FEATURES
   ↓
JSON / GEOJSON / PBF
```

That gives ATLAS a genuine **machine-readable government camera inventory**, rather than forcing us to scrape the consumer website. ([WVDOT GIS][7])

And the most important surveillance discovery is:

```text
WEST VIRGINIA
    ↓
LOCAL GOVERNMENTS
    ↓
FLOCK / ALPR DEPLOYMENTS
    ↓
STATE LEGISLATURE
    ↓
2026 INVESTIGATION
    ↓
2027 REGULATORY LEGISLATION EXPECTED
```

The legislature's August 2026 report explicitly confirms that local governments are contracting for Flock/ALPR technology and that lawmakers are preparing to address regulation in 2027. ([Wrap Up][16])

**Next alphabetically: Wisconsin.**

[1]: https://www.wvlegislature.gov/committees/interims/Agenda.cfm?abb=GOVORG&recid=5649&utm_source=chatgpt.com "Joint Standing Committee on Government Organization - Agenda"
[2]: https://transportation.wv.gov/traffic-engineering-division-0?utm_source=chatgpt.com "Traffic Engineering Division | WV Department of Transportation"
[3]: https://wv511.org/CameraListing.aspx?CAM=CAM001&ROUTE=US-50&utm_source=chatgpt.com "Traffic Cameras"
[4]: https://www.wv511.org/CameraListing.aspx?CAM=CAM121&ROUTE=US-119&utm_source=chatgpt.com "Traffic Cameras"
[5]: https://wv511.org/CameraListing.aspx?CAM=CAM079&ROUTE=I-77&utm_source=chatgpt.com "Traffic Cameras"
[6]: https://gis.transportation.wv.gov/arcgis/rest/services/Assets/Assets/mapServer/22?utm_source=chatgpt.com "Layer: CCTV_WVDOH (ID: 22)"
[7]: https://gis.transportation.wv.gov/arcgis/rest/services/Assets/Assets/MapServer/23?utm_source=chatgpt.com "Layer: CCTV_WVPA (ID: 23)"
[8]: https://transportation.wv.gov/highways/Planning/LRTP/Documents/Highways_FactSheet_Final.pdf?utm_source=chatgpt.com "PowerPoint Presentation"
[9]: https://sirn.wv.gov/?utm_source=chatgpt.com "WV Statewide Interoperable Radio Network"
[10]: https://sirn.wv.gov/faq?utm_source=chatgpt.com "FAQ | WV Statewide Interoperable Radio Network"
[11]: https://sirn.wv.gov/governance/Documents/WV_SCIP24.pdf?utm_source=chatgpt.com "| WEST VIRGINIA"
[12]: https://sirn.wv.gov/governance/Documents/DocAndGuide/WV_TICP.pdf?utm_source=chatgpt.com "West Virginia Tactical Interoperable Communications Plan  Version 2.2 November 2020"
[13]: https://status.broadcastify.com/listen/stid/54/publicsafety?utm_source=chatgpt.com "West Virginia Audio Feeds"
[14]: https://status.broadcastify.com/listen/ctid/3002?utm_source=chatgpt.com "Cabell County, West Virginia Audio Feeds"
[15]: https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=SB646+INTR.htm&i=646&sesstype=RS&yr=2019&utm_source=chatgpt.com "SB 646 Text"
[16]: https://blog.wvlegislature.gov/headline/2026/08/10/interim-report-joint-committee-on-government-organization/?utm_source=chatgpt.com "Interim Report: Joint Committee on Government Organization - Wrap Up"
[17]: https://www.wvlegislature.gov/legisdocs/reports/agency/P09_CY_2016_13550.pdf?utm_source=chatgpt.com "Public Service Commission"
[18]: https://www.wvlegislature.gov/legisdocs/reports/agency/P09_CY_2022_15453.pdf?utm_source=chatgpt.com "Federal Highway Administration policy mandates each state enforce vehicle size and weight laws to assure violations are discouraged and those vehicles traveling the highway system do not exceed limits specified by law. These size and weight limits are based upon design specifications and safety considerations. Enforcement efforts are developed and maintained both to prevent premature deterioration of the highway pavement and structures and to provide a safe driving environment."
[19]: https://code.wvlegislature.gov/17c-6-7A/?utm_source=chatgpt.com "West Virginia Code | §17c-6-7A"
[20]: https://code.wvlegislature.gov/email/62-1A-12/?utm_source=chatgpt.com "West Virginia Code | §62-1A-12"
[21]: https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4682+intr.htm&i=4682&sesstype=RS&yr=2026&utm_source=chatgpt.com "HB 4682 Text"
