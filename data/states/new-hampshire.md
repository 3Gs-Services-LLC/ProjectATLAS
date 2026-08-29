---
state: New Hampshire
usps: NH
slug: new-hampshire
dossier_number: 29
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
  imported_from: project_atlas_state_data/New Hampshire.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# New Hampshire (NH) - ATLAS State Record

> Dossier **29 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

New Hampshire is a **very interesting state for this project**.

It has three particularly important characteristics:

1. **New Hampshire DOT (NHDOT) participates in New England 511**, which exposes a substantial public traffic-camera network.
2. NHDOT has a public GIS/REST infrastructure, although I did **not** find a clean statewide CCTV FeatureServer comparable to Nebraska or Nevada during this pass.
3. New Hampshire has an unusually well-defined **state LPR registration/reporting system**, including mandatory registration of every law-enforcement LPR before deployment and annual reporting requirements. ([NH Revenue Administration][1])

The scanner situation is also excellent: **86 public audio feeds covering 11 counties**, including a statewide New Hampshire State Police feed. ([Broadcastify][2])

---

### 1. New Hampshire Department of Transportation — NHDOT

The primary transportation authority is:

**New Hampshire Department of Transportation (NHDOT)**

NHDOT's Traffic Management Center operates the state's transportation-management infrastructure. Its own strategic plan says the TMC uses:

* traffic cameras
* motor-vehicle detection systems
* probe data

to monitor traffic, incidents and roadway activity. ([NHDOT][3])

#### Registry

```text
SOURCE_ID:
    NH-NHDOT

OWNER:
    New Hampshire Department of Transportation

TYPE:
    STATE_TRANSPORTATION

STATUS:
    🟢 VERIFIED
```

---

### 2. New England 511

New Hampshire does **not operate an isolated 511 website**.

It participates in the regional:

[New England 511](https://newengland511.org/)

system with:

* MaineDOT
* NHDOT
* Vermont Agency of Transportation. ([Maine][4])

The three agencies jointly maintain the system and provide real-time travel information. ([Maine][4])

#### Registry

```text
SOURCE_ID:
    NH-NE511

TYPE:
    REGIONAL_511_SYSTEM

OWNER:
    MAINE / NEW HAMPSHIRE / VERMONT DOT PARTNERSHIP

STATUS:
    🟢 VERIFIED
```

---

### 3. New Hampshire traffic cameras — VERIFIED PUBLIC SOURCE

The official camera interface is:

[New England 511 Cameras](https://newengland511.org/cctv)

The current site explicitly provides a **Cameras** section. ([New England 511][5])

The main map also has a camera layer and allows users to select individual camera views. ([New England 511][6])

This is a real public camera source.

```text
SOURCE_ID:
    NH-NE511-CCTV

TYPE:
    PUBLIC_TRAFFIC_CAMERA

STATUS:
    🟢 VERIFIED

PUBLIC:
    YES
```

---

### 4. The camera network is not merely theoretical

NHDOT's own strategic plan states that its Traffic Management Center uses traffic cameras as ITS equipment to remotely monitor:

* traffic conditions
* incidents
* roadway activity. ([NHDOT][3])

So the New England 511 cameras are tied to an actual NHDOT transportation-management system.

---

### 5. Exact camera-data endpoint discovery

This is an important finding.

The old New England 511 camera endpoint:

```text
http://newengland511.org/Traffic/GetCameras
```

is reportedly **broken/deprecated**.

A current reverse-engineering reference identifies the newer camera resources as:

```text
https://newengland511.org/map/mapIcons/Cameras
```

and camera-image paths in the form:

```text
https://newengland511.org/map/Cctv/{itemId}
```

The source explicitly identifies these as the newer API/feed structure. ([Greasy Fork][7])

#### Important classification

The endpoint structure is **not directly documented in the NHDOT public documentation I found**, so I am marking it:

```text
NH-NE511-CAMERA-API

STATUS:
    🟡 VERIFIED DISCOVERY

SOURCE AUTHORITY:
    NEW ENGLAND 511 DOMAIN

API DOCUMENTATION:
    NOT OFFICIALLY DOCUMENTED

ACTION:
    DIRECT HTTP TEST REQUIRED
```

This is exactly the kind of source we should capture and validate before building an adapter.

---

### 6. Camera records appear to contain individual camera identities

The current 511 interface supports selecting individual camera views and saving them to a user's "My Cameras" collection. ([New England 511][8])

That means the system is not simply generating one giant static image.

It maintains:

```text
CAMERA
    ↓
CAMERA VIEW
    ↓
IMAGE
```

which is useful for the ATLAS data model.

---

### 7. Real camera examples

Current public indexing of New England 511 cameras identifies actual New Hampshire camera records such as:

```text
93 N, MM 99.6
93 S, MM 95.9
112 N, MM 14.8
I-93 N MM 105.6
101 E 50.8
101 E 86.9
101 W 88.3
95 S, MM 6.0
```

with New England 511 identified as the provider. ([Ventusky][9])

These are useful examples confirming that the camera inventory contains roadway location identifiers and mile-marker information.

---

### 8. Camera naming structure

The indexed camera names demonstrate a useful normalized pattern:

```text
ROUTE
DIRECTION
MILE MARKER
OPTIONAL DEVICE DESCRIPTION
```

Examples:

```text
93 N MM 99.6
93 S MM 95.9
101 E 50.8
101 E 86.9
```

Some records additionally identify equipment:

```text
ST NN 4.1 CCTV AX T
FEE S 17.8 CCTV AX SWZ C-01
```

([Ventusky][10])

That is valuable because some camera names expose **manufacturer/device information**.

---

### 9. Camera manufacturer evidence

The indexed New Hampshire camera records include names containing:

```text
CCTV AX
```

which strongly suggests Axis equipment for those particular cameras, but the name alone is insufficient to classify every NHDOT camera as Axis.

So:

```text
manufacturer:
    UNKNOWN unless source record explicitly confirms it

equipment_hint:
    AX / Axis for records where name contains it
```

No blanket vendor assumption.

---

### 10. NHDOT CCTV equipment

NHDOT's technical procurement documentation explicitly lists CCTV cameras supported by its Advanced Transportation Management System.

The documented equipment includes:

```text
ACTi ACM-8500
American Dynamics SD Ultra VII
American Dynamics SD Ultra 8
Axis Camera 214
Cohu PTZ
Cohu 382x/383x
Cohu 3855
Cohu iDome
Pelco D
Quest / Quest Plus
```

([New Hampshire DOT Maps][11])

This is historical/technical equipment information, **not a current inventory of every installed camera**.

Store it as:

```text
SOURCE:
    NHDOT ATMS technical documentation

TYPE:
    EQUIPMENT_REFERENCE

NOT:
    CURRENT_CAMERA_INVENTORY
```

---

### 11. PTZ cameras

NHDOT's ATMS documentation specifically supports **PTZ cameras**.

More recent work-zone ITS documentation says PTZ cameras can be individually mounted on temporary trailer units and connected back to the NHDOT ATMS. ([New Hampshire DOT Maps][11])

Therefore New Hampshire has at least two camera deployment classes:

```text
PERMANENT TRAFFIC CCTV
TEMPORARY / WORK-ZONE PTZ CCTV
```

This distinction should be preserved.

---

### 12. Work-zone cameras

NHDOT's work-zone ITS specification states that PTZ cameras are:

* mounted on trailer units
* equipped with digital modems/wireless interfaces
* connected to the NHDOT ATMS
* managed through the NHDOT Traffic Management Center. ([New Hampshire DOT Maps][11])

#### Registry

```text
SOURCE_ID:
    NH-NHDOT-WORKZONE-CCTV

TYPE:
    TEMPORARY_TRAFFIC_CCTV

STATUS:
    🟢 VERIFIED

PUBLIC_511_INTEGRATION:
    POSSIBLE / MUST VERIFY PER PROJECT
```

Do not automatically add these as permanent cameras.

---

### 13. NHDOT GIS infrastructure

NHDOT operates a public ArcGIS REST server:

[ NHDOT ArcGIS REST Services ](https://maps.dot.nh.gov/arcgis_server/rest/services)

The public server exposes multiple folders including:

```text
Traffic
Highways
Facilities
Hosted
```

([New Hampshire DOT Maps][12])

This is important for source discovery.

---

### 14. NHDOT Traffic GIS

The public Traffic folder currently contains:

```text
Traffic/NHDOT_SIGNALS_AND_BEACONS
```

as FeatureServer and MapServer. ([New Hampshire DOT Maps][12])

The actual service:

[NHDOT Signals and Beacons FeatureServer](https://maps.dot.nh.gov/arcgis_server/rest/services/Traffic/NHDOT_SIGNALS_AND_BEACONS/FeatureServer)

contains:

```text
Signalized Intersections
Beacons
Cabinets for Signalized Intersections
```

([New Hampshire DOT Maps][13])

This is not a CCTV inventory, but it is valuable supporting transportation infrastructure.

---

### 15. Signal infrastructure

The Signals and Beacons service provides:

```text
SOURCE_ID:
    NH-NHDOT-SIGNALS

LAYERS:
    Signalized Intersections
    Beacons
    Signal Cabinets

FORMAT:
    JSON

MAX_RECORD_COUNT:
    2000

OWNER:
    NHDOT
```

([New Hampshire DOT Maps][13])

This should be ingested separately from cameras.

---

### 16. NHDOT road network

NHDOT also publishes:

[NHDOT Functional Road System FeatureServer](https://maps.dot.nh.gov/arcgis_server/rest/services/Highways/NHDOT_HIGHWAYS_Functional_System/FeatureServer)

It contains the state's roads classified by functional system. ([New Hampshire DOT Maps][14])

This can provide useful geographic relationships:

```text
CAMERA
   ↓
ROAD
   ↓
ROUTE
   ↓
ROAD CLASS
```

---

### 17. Camera-location normalization

For New Hampshire, preserve the original camera name because it often contains:

```text
route
direction
mile marker
equipment designation
```

Example:

```text
93 N MM 99.6
```

should become:

```text
route:
    I-93

direction:
    N

mile_marker:
    99.6
```

**but only after parsing the original string.**

Always retain:

```text
source_name:
    "93 N MM 99.6"
```

---

### 18. NHDOT roadway sensors

NHDOT's technical documentation also identifies roadway sensors integrated with the ATMS.

Examples include:

```text
EIS RTMS
ISS G4 RTMS
Wavetronix RTMS
Wavetronix HD SmartSensor
```

and other vehicle-detection systems. ([New Hampshire DOT Maps][11])

These should be classified:

```text
DEVICE_TYPE:
    TRAFFIC_DETECTION

NOT:
    CAMERA

NOT:
    ALPR
```

---

### 19. License Plate Readers — this is where New Hampshire gets unusual

New Hampshire has a **formal state registration system specifically for law-enforcement LPRs**.

The state rules say their purpose is to establish:

> the procedure for the registration of automated license plate readers used by law enforcement within the state, and the annual reporting requirements.

([NH Revenue Administration][1])

#### Registry

```text
SOURCE_ID:
    NH-DOS-LPR-REGISTRY

OWNER:
    New Hampshire Department of Safety

TYPE:
    GOVERNMENT_ALPR_REGISTRATION

STATUS:
    🟢 VERIFIED — HIGH VALUE
```

---

### 20. LPR registration is mandatory

The rules require the head of a law-enforcement agency to register **each LPR with the commissioner before use**. ([NH Revenue Administration][1])

The registration requires certification that:

```text
LPR complies with RSA 261:75-b
agency has an LPR policy
agency has documented training
device is maintained according to manufacturer recommendations
```

([NH Revenue Administration][1])

This is an extremely valuable discovery source.

---

### 21. What the registration system potentially gives us

The official rules establish:

```text
AGENCY
    ↓
LPR
    ↓
REGISTRATION
    ↓
DEPLOYMENT
    ↓
ANNUAL REPORT
```

The registration form is called:

```text
DSCO1
```

and is submitted to the Department of Safety. ([NH Revenue Administration][1])

#### ATLAS classification

```text
NH-LPR-REGISTRATION

DATA TYPE:
    DEPLOYMENT REGISTRATION

AUTHORITY:
    STATE DEPARTMENT OF SAFETY

ACCESS:
    REQUIRES PUBLIC-RECORD / AGENCY-DOCUMENT RESEARCH
```

---

### 22. Annual ALPR reporting

New Hampshire law requires agencies using LPRs to report annually.

Required information includes:

```text
number of devices
number of matches
matches identifying wanted vehicles/persons
stops
searches
releases
arrests
other outcomes
```

([NH Revenue Administration][15])

This makes New Hampshire potentially much better for **deployment research** than states with no statewide reporting requirement.

---

### 23. Major 2026 legal development

This is particularly important because we're researching the state **now**.

New Hampshire's existing LPR statute was scheduled for repeal on:

### January 1, 2027

But in 2026 the legislature passed:

### HB 1059

which **eliminated that prospective repeal**.

The bill became:

```text
CHAPTER 88
```

and was approved:

```text
May 28, 2026
```



Therefore the LPR regulatory framework remains in place.

---

### 24. LPR data retention

Current RSA 261:75-b provides a very unusual restriction.

Records of plates read by each LPR generally:

```text
MUST NOT BE RECORDED OR TRANSMITTED
```

and must be purged within:

### **3 minutes**

unless a specified event occurs, such as an alarm resulting in an arrest/citation or identifying a wanted/missing vehicle/person. ([NH Revenue Administration][15])

This is one of the strictest LPR retention frameworks encountered in this research.

---

### 25. New Hampshire LPR type

The statute defines the technology as an automated high-speed camera plus optical-character-recognition technology capable of:

```text
reading plates
identifying plates
checking lists
generating alarms
storing records for a prescribed period
```

([NH Revenue Administration][16])

So we can confidently classify:

```text
TECHNOLOGY:
    ALPR / LPR

CAPTURE:
    LICENSE PLATE

OCR:
    YES

LAW ENFORCEMENT:
    YES
```

---

### 26. LPR is restricted to law enforcement

The law restricts the use of automated number-plate scanning devices to:

```text
local law enforcement
county law enforcement
state law enforcement
```

subject to the statutory conditions. ([NH Revenue Administration][15])

Therefore this is not a general public/private ALPR registry.

---

### 27. Current LPR technology appears vehicle-oriented

A 2026 legislative hearing report contains testimony from a New Hampshire Department of Safety captain stating that the state's LPR devices are **typically mounted on a limited number of police vehicles**. ([NH Revenue Administration][17])

That is important.

It suggests the New Hampshire deployment model may be substantially more:

```text
POLICE VEHICLE
     ↓
MOBILE LPR
```

than:

```text
ROADSIDES
     ↓
FIXED FLOCK NETWORK
```

at least for the systems described in that testimony.

---

### 28. Do NOT assume Flock

I did **not** find sufficient authoritative evidence in this pass to state:

```text
New Hampshire = Flock statewide
```

That would be a guess.

Instead:

```text
ALPR:
    CONFIRMED

VENDOR:
    NOT YET ESTABLISHED STATEWIDE

FIXED:
    NOT ESTABLISHED STATEWIDE

MOBILE:
    CONFIRMED AS A DEPLOYMENT MODEL
```

---

### 29. ALPR public-data strategy

New Hampshire's official framework gives us a very specific research path:

```text
NH DEPARTMENT OF SAFETY
        │
        ├── LPR Registration Form DSCO1
        │
        ├── Agency policies
        │
        └── Annual reports
                │
                ▼
        AGENCY DEPLOYMENT DATABASE
```

The registration requirement itself is official. ([NH Revenue Administration][1])

The next stage for ATLAS should be obtaining the actual **registration records and annual reports**, where publicly releasable.

---

### 30. Public-safety radio

New Hampshire has extensive public scanner coverage.

Broadcastify currently reports:

### **86 audio feeds**

across:

### **11 counties**

with:

```text
80 public safety
4 amateur radio
1 aviation
1 rail
```

([Broadcastify][2])

#### Registry

```text
SOURCE_ID:
    NH-BROADCASTIFY

TOTAL_FEEDS:
    86

PUBLIC_SAFETY:
    80

COUNTIES:
    11

STATUS:
    🟢 VERIFIED — VERY STRONG
```

---

### 31. Statewide New Hampshire State Police scanner

Broadcastify has a dedicated:

### **New Hampshire State Police**

statewide feed.

The statewide page lists it as:

```text
NH State Police Statewide
```

([Broadcastify][18])

#### Registry

```text
SOURCE_ID:
    NH-SP-BROADCASTIFY

AGENCY:
    New Hampshire State Police

COVERAGE:
    STATEWIDE

PUBLIC_AUDIO:
    YES

STATUS:
    🟢 VERIFIED
```

---

### 32. County scanner coverage

The current Broadcastify inventory covers:

```text
Belknap
Carroll
Cheshire
Coos
Grafton
Hillsborough
Merrimack
Rockingham
Strafford
Sullivan
Statewide
```

([Broadcastify][2])

That is **11 counties represented**.

---

### 33. Major scanner systems

Examples currently available include:

```text
Manchester Fire
Nashua Fire Rescue
Concord Police
Concord Fire
Derry Police
Derry Fire
Dover Police
Portsmouth Fire
Rochester Police/Fire
Londonderry Police/Fire
Lebanon Police
New Hampshire State Police
```

([Broadcastify][2])

---

### 34. P25 radio evidence

Individual New Hampshire public feeds provide actual technical radio information.

For example, the Lebanon Police feed documents:

```text
155.250 MHz
P25
NAC 517
```

([Broadcastify][19])

That establishes that at least some New Hampshire public-safety communications are carried using P25 digital radio.

---

### 35. Northern New Hampshire Law Net

Broadcastify also carries:

### **Northern New Hampshire Law Net**

covering northern New Hampshire and Vermont. ([Broadcastify][20])

This is a useful regional interoperability source.

---

### 36. Broadcastify Calls infrastructure

Hillsborough County currently has multiple Broadcastify Calls ingest nodes, including:

```text
Amherst NH
City of Nashua
Hillsborough County
```

([Broadcastify][21])

This is different from ordinary audio feeds.

It indicates that software-defined-radio-based **calls ingestion infrastructure** is also operating in New Hampshire.

---

### 37. Calls coverage

Hillsborough County currently reports Broadcastify Calls coverage for:

```text
Law Dispatch
Fire Dispatch
Fire-Tac
Fire-Talk
EMS Dispatch
EMS-Tac
Interop
Public Works
Transportation
```

([Broadcastify][21])

This is highly valuable for a scanner-data aggregator.

---

### 38. Official agency feeds

Several feeds are explicitly identified as official agency-provided feeds.

Examples include:

```text
Bedford Fire
Hudson Fire
New Boston Fire
Lakes Region Mutual Fire Aid
```

([Broadcastify][21])

Therefore ATLAS should track:

```text
feed_provider_type:
    OFFICIAL_AGENCY

vs.

COMMUNITY_SCANNER
```

---

### 39. Radio architecture

The state Department of Corrections has also documented moving from analog radio toward digital systems meeting P25 standards, with interoperability coordinated through the Department of Safety Emergency Services Division. ([New Hampshire Department of Corrections][22])

This is supporting evidence for a broader state transition toward digital/P25 communications.

It does **not** establish one single statewide P25 trunked system, so we should not claim that.

---

### 40. Highway surveillance

New Hampshire has an unusual statutory provision concerning highway surveillance.

State legislation authorized highway surveillance specifically for the security of:

```text
I-95 Piscataqua River Bridge
Sarah Mildred Long Bridge
Memorial Bridge
Little Bay Bridges
```



This is important because it shows a separate category:

```text
TRANSPORTATION CCTV
```

versus:

```text
BRIDGE SECURITY SURVEILLANCE
```

Do not merge the two.

---

### 41. Little Bay Bridge surveillance

The statutory language specifically includes the Little Bay Bridges in Dover/Newington. 

Therefore ATLAS should have a source/discovery record:

```text
NH-BRIDGE-SECURITY-CCTV

LOCATIONS:
    Little Bay Bridges
    Dover/Newington

PURPOSE:
    Security

SOURCE:
    State legislative authorization

PUBLIC_LIVE_FEED:
    NOT ESTABLISHED
```

---

### 42. Municipal CCTV — Dover

Dover is particularly interesting because its traffic system includes:

* Gridsmart cameras
* traffic signals
* traffic-management integration with NHDOT.

A city/NHDOT research report states that NHDOT staff sought **read-only access** to view Dover's Transparity and Gridsmart cameras. ([NH DMV][23])

This confirms that Dover has a separate municipal camera infrastructure.

#### Registry

```text
SOURCE_ID:
    NH-DOVER-TRAFFIC-CCTV

TYPE:
    MUNICIPAL_TRAFFIC_CCTV

TECHNOLOGY:
    GRIDSAMRT
    TRANSPARITY

STATUS:
    🟢 VERIFIED EXISTENCE
```

The source establishes the systems exist; it does **not** establish that the feeds are publicly accessible.

---

### 43. Municipal CCTV classification

Dover demonstrates why the database needs:

```text
PUBLIC_FEED:
    YES / NO / UNKNOWN

LAW_ENFORCEMENT_ACCESS:
    YES / NO / UNKNOWN

TRANSPORTATION_ACCESS:
    YES / NO / UNKNOWN

PUBLIC_METADATA:
    YES / NO
```

A camera can exist without having a public stream.

---

### 44. Body-worn / dashboard cameras

New Hampshire has an official state **Body-Worn and Dashboard Camera Fund** under its administrative rules. ([NH Revenue Administration][24])

This confirms a formal statewide law-enforcement camera program.

#### Registry

```text
SOURCE_ID:
    NH-DOS-BWC-DASHCAM

TYPE:
    LAW_ENFORCEMENT_BODY/DASH_CAMERA

PUBLIC_LIVE_FEED:
    NO

STATUS:
    🟢 VERIFIED PROGRAM
```

This is not a public-camera source, but it belongs in the broader surveillance-device registry.

---

### 45. New Hampshire source architecture

```text
NEW HAMPSHIRE
│
├── 🟢 NHDOT
│   │
│   ├── 🟢 New England 511
│   ├── 🟢 Traffic CCTV
│   ├── 🟢 Work-zone PTZ
│   ├── 🟢 ATMS
│   ├── 🟢 Vehicle detection
│   ├── 🟢 Signals
│   ├── 🟢 Beacons
│   └── 🟢 Road network GIS
│
├── 🟢 ALPR
│   │
│   ├── 🟢 LPR registration
│   ├── 🟢 DSCO1
│   ├── 🟢 annual reporting
│   ├── 🟢 agency policies
│   └── 🟢 strict retention law
│
├── 🟢 RADIO
│   │
│   ├── 🟢 NH State Police
│   ├── 🟢 local police
│   ├── 🟢 fire
│   ├── 🟢 EMS
│   └── 🟢 interoperability
│
├── 🟢 SCANNER
│   │
│   ├── 🟢 86 feeds
│   ├── 🟢 80 public safety
│   └── 🟢 11 counties
│
├── 🟢 MUNICIPAL
│   │
│   └── 🟢 Dover Gridsmart/Transparity
│
└── 🟡 BRIDGE SECURITY
    │
    └── Little Bay / Piscataqua / Memorial
```

---

### 46. Exact source registry

#### Primary camera sources

| Source ID                | Source                      | Type           | Status       |
| ------------------------ | --------------------------- | -------------- | ------------ |
| `NH-NE511`               | New England 511             | 511            | 🟢           |
| `NH-NE511-CCTV`          | New England 511 Cameras     | Public CCTV    | 🟢           |
| `NH-NHDOT-ATMS`          | NHDOT ATMS                  | ITS/CCTV       | 🟢           |
| `NH-NHDOT-WORKZONE-CCTV` | Work-zone PTZ               | Temporary CCTV | 🟢           |
| `NH-DOVER-TRAFFIC-CCTV`  | Dover Gridsmart/Transparity | Municipal CCTV | 🟢 existence |

The official New England 511 site confirms the public camera layer and camera-view functionality. ([New England 511][6])

---

### 47. Primary ALPR sources

| Source ID             | Source                                   | Type                       | Status      |
| --------------------- | ---------------------------------------- | -------------------------- | ----------- |
| `NH-DOS-LPR-REGISTRY` | NH Department of Safety LPR registration | ALPR registry              | 🟢          |
| `NH-DOS-LPR-REPORTS`  | Annual LPR reports                       | ALPR deployment/statistics | 🟢 required |
| `NH-LPR-LAW`          | RSA 261:75-b                             | Legal/retention            | 🟢          |
| `NH-LPR-RULES`        | Saf-C 7200                               | Registration rules         | 🟢          |

The rules explicitly establish registration and annual reporting. ([NH Revenue Administration][1])

---

### 48. Primary radio/scanner sources

| Source ID               | Source             | Coverage          | Status |
| ----------------------- | ------------------ | ----------------- | ------ |
| `NH-BROADCASTIFY`       | Broadcastify NH    | 86 feeds          | 🟢     |
| `NH-SP-BROADCASTIFY`    | NH State Police    | Statewide         | 🟢     |
| `NH-COUNTY-SCANNERS`    | County feeds       | 11 counties       | 🟢     |
| `NH-BROADCASTIFY-CALLS` | Broadcastify Calls | Multiple services | 🟢     |

([Broadcastify][2])

---

### 49. What we **do not** have yet

I am deliberately separating confirmed sources from things that still need deeper research.

#### Not yet confirmed:

```text
🔴 Public statewide ALPR location dataset
🔴 Public fixed-Flock inventory
🔴 Public ALPR camera coordinates
🔴 Public statewide radio-system frequency database from NH government
🔴 Public NHDOT CCTV FeatureServer containing camera records
🔴 Public NHDOT HLS/MJPEG endpoint directly documented
```

The **camera network itself is confirmed**.

The **ALPR registration requirement is confirmed**.

The **scanner feeds are confirmed**.

But I am not going to manufacture the missing technical endpoints.

---

### 50. Best next-step ingestion targets

For an actual source-ingestion engine, New Hampshire should be attacked in this order:

```text
1.
NEW ENGLAND 511
        ↓
camera inventory endpoint
        ↓
camera IDs
        ↓
lat/lon
        ↓
image URLs

2.
NH DEPARTMENT OF SAFETY
        ↓
LPR registrations
        ↓
agency
        ↓
device
        ↓
deployment
        ↓
annual report

3.
BROADCASTIFY
        ↓
86 feeds
        ↓
11 counties
        ↓
feed URLs
        ↓
agency/service

4.
NHDOT GIS
        ↓
signals
        ↓
beacons
        ↓
roads
        ↓
ITS infrastructure

5.
MUNICIPAL SYSTEMS
        ↓
Dover
        ↓
Manchester
        ↓
Nashua
        ↓
Concord
        ↓
Portsmouth
        ↓
other municipalities
```

---

### 51. Final New Hampshire assessment

| Category                         |                                     Rating |
| -------------------------------- | -----------------------------------------: |
| State traffic cameras            |                           🟢 **Excellent** |
| Public camera interface          |                                         🟢 |
| Machine-readable camera endpoint | 🟡 **Discovered; needs direct validation** |
| Camera coordinates               |    🟢 likely available through camera data |
| Camera IDs                       |                                         🟢 |
| Camera image source              |                                         🟢 |
| NHDOT CCTV GIS                   |  🟡 **Not found as clean statewide layer** |
| NHDOT ATMS                       |                                         🟢 |
| Work-zone PTZ                    |                                         🟢 |
| Traffic detection                |                                         🟢 |
| Municipal CCTV                   |                                         🟢 |
| ALPR existence                   |                           🟢 **Excellent** |
| ALPR registration requirement    |                           🟢 **Excellent** |
| ALPR annual reporting            |                           🟢 **Excellent** |
| ALPR location data               |                                         🟡 |
| ALPR vendor data                 |           🔴 **Not established statewide** |
| ALPR raw data                    |                                         🔴 |
| State police scanner             |                                         🟢 |
| Scanner feeds                    |                           🟢 **Excellent** |
| County coverage                  |                                         🟢 |
| Calls/SDR infrastructure         |                                         🟢 |
| Radio technical data             |                                         🟡 |
| Bridge-security surveillance     |                                🟢 evidence |

### Overall: **9.1 / 10**

#### The biggest discovery in New Hampshire is actually ALPR.

Unlike many states where we have to hunt for individual police contracts, New Hampshire law requires **every law-enforcement LPR to be registered before deployment**, and agencies are subject to annual reporting requirements. ([NH Revenue Administration][1])

That makes the **NH Department of Safety** a potentially extremely valuable statewide ALPR source.

And the legislature **just preserved that regulatory framework in 2026**, eliminating the scheduled 2027 repeal. 

For cameras, the strongest source is the official **New England 511 camera system**, backed by NHDOT's documentation that its TMC uses traffic cameras and detection systems for real-time operations. ([New England 511][5])

For radio, New Hampshire is excellent: **86 public feeds, 80 public-safety feeds, 11 counties, plus a statewide NH State Police feed**. ([Broadcastify][2])

**New Hampshire complete. Next alphabetically: New Jersey.**

[1]: https://gc.nh.gov/rules/state_agencies/saf-c7200.html?utm_source=chatgpt.com "Saf-C 7200"
[2]: https://status.broadcastify.com/listen/stid/33/publicsafety?utm_source=chatgpt.com "New Hampshire Audio Feeds"
[3]: https://www.dot.nh.gov/sites/g/files/ehbemt811/files/inline-documents/nhdot_tsmo_strategic_plan_2023_final_1.pdf?utm_source=chatgpt.com "TSMO BUREAU"
[4]: https://www.maine.gov/dot/news/new-england-511-website-upgrade?utm_source=chatgpt.com "New England 511 Website Upgrade | Maine Department of Transportation"
[5]: https://newengland511.org/cctv?utm_source=chatgpt.com "New England Cameras | View Live New England Cameras | New England 511"
[6]: https://newengland511.org/map?utm_source=chatgpt.com "New England 511| 511 Traffic | Commuter Information"
[7]: https://greasyfork.org/vi/scripts/407690-wme-dot-cameras/code?utm_source=chatgpt.com "WME DOT Cameras - Mã nguồn"
[8]: https://www.newengland511.org/about/help?utm_source=chatgpt.com "New England Help | New England 511"
[9]: https://www.ventusky.com/webcam-720974417?utm_source=chatgpt.com "Webcams - Woodstock | Ventusky"
[10]: https://www.ventusky.com/webcam-861156055?utm_source=chatgpt.com "Webcams - University of New Hampshire, Thompson Farm Observatory, Durham, New Hampshire | Ventusky"
[11]: https://maps.dot.nh.gov/proposal/11238S.Proposal.pdf?utm_source=chatgpt.com "ATTACHMENT A"
[12]: https://maps.dot.nh.gov/arcgis_server/rest/services/Traffic?utm_source=chatgpt.com "Folder: Traffic"
[13]: https://maps.dot.nh.gov/arcgis_server/rest/services/Traffic/NHDOT_SIGNALS_AND_BEACONS/FeatureServer?utm_source=chatgpt.com "Traffic/NHDOT_SIGNALS_AND_BEACONS (FeatureServer)"
[14]: https://maps.dot.nh.gov/arcgis_server/rest/services/Highways/NHDOT_HIGHWAYS_Functional_System/FeatureServer?utm_source=chatgpt.com "Highways/NHDOT_HIGHWAYS_Functional_System (FeatureServer)"
[15]: https://gc.nh.gov/rsa/html/XXI/261/261-75-b.htm?utm_source=chatgpt.com "Section 261:75-b Use of Number Plate Scanning Devices Regulated."
[16]: https://www.gc.nh.gov/legislation/2014/HB0675.html?utm_source=chatgpt.com "HB 0675"
[17]: https://gc.nh.gov/bill_Status/pdf.aspx?id=21410&q=HearingRpt&utm_source=chatgpt.com "Senator McConkey asked what technology was used in the license plate scanning devices."
[18]: https://status.broadcastify.com/listen/ctid/3343/publicsafety?utm_source=chatgpt.com "Statewide New Hampshire, New Hampshire Audio Feeds"
[19]: https://status.broadcastify.com/listen/feed/31407?utm_source=chatgpt.com "Lebanon Police"
[20]: https://status.broadcastify.com/listen/ctid/1765?utm_source=chatgpt.com "Grafton County, New Hampshire Audio Feeds"
[21]: https://status.broadcastify.com/listen/ctid/1766/publicsafety?utm_source=chatgpt.com "Hillsborough County, New Hampshire Audio Feeds"
[22]: https://www.corrections.nh.gov/sites/g/files/ehbemt536/files/inline-documents/sonh/capital-budget-presentation-march-10-2023-final_0.pdf?utm_source=chatgpt.com "New Hampshire"
[23]: https://mm.nh.gov/files/uploads/dot/remote-docs/nhdot-research-aid-atspm-dover-2022-report.pdf?utm_source=chatgpt.com "Accelerated Innovation Deployment"
[24]: https://www.gc.nh.gov/rules/state_agencies/saf-c.html?utm_source=chatgpt.com "TABLE OF CONTENTS"
