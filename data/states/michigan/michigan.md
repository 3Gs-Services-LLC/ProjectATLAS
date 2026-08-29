---
state: Michigan
usps: MI
slug: michigan
dossier_number: 22
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
  imported_from: project_atlas_state_data/Michigan.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Michigan (MI) - ATLAS State Record

> Dossier **22 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Michigan is a **very high-value state** for this project.

The biggest discoveries are:

1. **MDOT Mi Drive** — statewide public traffic-camera system.
2. **Michigan Public Safety Communications System (MPSCS)** — enormous statewide P25 public-safety radio network.
3. **Michigan State Police LEIN ALPR infrastructure** — officially documented, but restricted.
4. **Extensive Broadcastify coverage** — hundreds of Michigan audio feeds and MPSCS-based feeds.
5. **Municipal ALPR/Flock deployments** — significant, but much more fragmented than the statewide camera/radio infrastructure.

The important difference from Massachusetts is that Michigan has a particularly strong **statewide radio architecture**.

---

### 1. Michigan Department of Transportation

**Michigan Department of Transportation — MDOT**

MDOT operates the state's principal highway transportation-information system.

MDOT is responsible for nearly **10,000 miles of state highway**, consisting primarily of Michigan's I, M and US routes. ([Michigan.com][1])

#### Registry

```text
SOURCE_ID:
    MI-MDOT

OWNER:
    Michigan Department of Transportation

PRIMARY_SYSTEM:
    Mi Drive

TYPE:
    STATE_TRANSPORTATION

COVERAGE:
    STATEWIDE

STATUS:
    🟢 VERIFIED
```

---

### 2. Mi Drive

**Mi Drive** is the primary Michigan traveler-information platform.

MDOT explicitly says Mi Drive displays:

* road construction
* lane closures
* current speeds
* traffic cameras
* incidents
* snowplows/maintenance vehicles
* truck parking
* message signs

and other transportation information. ([Michigan.com][1])

The live Mi Drive map is:

[Michigan Mi Drive live map](https://mdotjboss.state.mi.us/MiDrive/map?utm_source=chatgpt.com)

#### Registry

```text
SOURCE_ID:
    MI-MIDRIVE

OWNER:
    MDOT

TYPE:
    STATEWIDE_TRAVELER_INFORMATION

DATA:
    CCTV
    SPEED
    INCIDENTS
    CONSTRUCTION
    DMS
    SNOWPLOWS
    TRUCK_PARKING

STATUS:
    🟢 ACTIVE
```

---

### 3. Michigan statewide traffic cameras

This is the **primary Michigan camera source**.

MDOT explicitly states:

> Mi Drive traffic cameras provide live viewing and are not continuously recorded. ([Michigan.com][1])

This is important for our database because the source is clearly:

```text
LIVE_PUBLIC_CAMERA
```

rather than a historical video archive.

#### Registry

```text
SOURCE_ID:
    MI-MDOT-CCTV

OWNER:
    MDOT

SYSTEM:
    Mi Drive

TYPE:
    TRAFFIC_CCTV

COVERAGE:
    STATEWIDE

LIVE:
    🟢

CONTINUOUS_RECORDING:
    🔴

PUBLIC:
    🟢

STATUS:
    🟢 VERIFIED
```

---

### 4. Exact Mi Drive camera interface

MDOT exposes a dedicated camera-list application:

[Mi Drive Camera List](https://mdotjboss.state.mi.us/MiDrive/cameras?utm_source=chatgpt.com)

The application provides filtering by:

```text
Route
County
Location
Description
Image
```

and is specifically dedicated to camera inventory/display. ([MDOT Public Applications][2])

This is a strong indication that the camera inventory is being served separately from the general map interface.

---

### 5. Mi Drive machine-readable discovery

This requires an important distinction.

We have **verified that Mi Drive serves live camera data**, but I have **not yet established a documented public API contract** for the underlying camera JSON endpoints.

The website is clearly dynamically loading its camera inventory.

Therefore:

```text
MI-MDOT-CCTV

PUBLIC WEBSITE:
    🟢

LIVE IMAGES:
    🟢

CAMERA INVENTORY:
    🟢

DOCUMENTED PUBLIC API:
    🟡 NOT ESTABLISHED

UNDERLYING NETWORK ENDPOINT:
    🟡 REQUIRES DIRECT CAPTURE/RESEARCH
```

We should **not invent an API URL** simply because the website obviously has one internally.

That distinction matters for the ingestion engine.

---

### 6. Mi Drive camera coverage

MDOT describes Mi Drive as covering Michigan's state highway system.

MDOT's official documentation states the system displays camera locations throughout Michigan and that motorists can view camera and DMS locations through Mi Drive. ([Michigan.com][3])

The older MDOT ITS documentation also explicitly described Mi Drive as providing statewide live surveillance-camera feeds. ([Michigan.com][4])

#### Registry

```text
SOURCE_ID:
    MI-MDOT-CCTV

GEOGRAPHIC_SCOPE:
    STATEWIDE

PRIMARY_ROADS:
    I
    M
    US

SOURCE_CONFIDENCE:
    🟢 HIGH
```

---

### 7. Mi Drive camera images

MDOT documentation confirms that camera images are displayed directly through Mi Drive.

A Michigan freight-planning document shows an actual Mi Drive camera display with:

```text
Image provided by MDOT
Updated:
timestamp
```

and identifies the displayed object as a roadway camera. ([Michigan.com][5])

This confirms that camera objects have at minimum:

```text
camera
location
image
timestamp
```

as useful canonical fields.

---

### 8. Mi Drive current camera inventory endpoint

The dedicated camera application is:

```text
https://mdotjboss.state.mi.us/MiDrive/cameras
```

but the currently indexed page reports that it dynamically loads the records and may display:

```text
Showing 0 to 0
Please wait - loading...
```

This is consistent with a client-side data request rather than a static HTML table. ([MDOT Public Applications][2])

#### Engineering conclusion

For MAC EVIL:

```text
ADAPTER:
    MI_MIDRIVE

DISCOVERY:
    NETWORK_CAPTURE

NOT:
    scrape static HTML
```

The correct next research step for this source is to capture the browser's XHR/fetch requests and identify the actual camera endpoint.

---

### 9. MDOT traffic speeds

Mi Drive also publishes current traffic speeds.

The live map explicitly exposes:

```text
Current Speeds
```

as a separate layer. ([MDOT Public Applications][6])

#### Registry

```text
SOURCE_ID:
    MI-MDOT-SPEEDS

TYPE:
    REAL_TIME_TRAFFIC_SPEED

STATUS:
    🟢 VERIFIED
```

---

### 10. MDOT incidents

Mi Drive exposes current roadway incidents.

The map contains:

```text
Incidents
Active incidents
```

as a dedicated data layer. ([MDOT Public Applications][6])

#### Registry

```text
SOURCE_ID:
    MI-MDOT-INCIDENTS

TYPE:
    TRAFFIC_INCIDENT

SCOPE:
    STATE_ROUTES

STATUS:
    🟢 VERIFIED
```

---

### 11. MDOT construction and closures

Mi Drive separately exposes:

```text
Current Construction
Current Total Closure
Future Construction
```

and other construction/closure information. ([MDOT Public Applications][6])

#### Registry

```text
SOURCE_ID:
    MI-MDOT-CONSTRUCTION

TYPE:
    ROAD_CONSTRUCTION

SUBTYPES:
    CURRENT
    FUTURE
    TOTAL_CLOSURE
    LANE_CLOSURE

STATUS:
    🟢 VERIFIED
```

---

### 12. MDOT DMS

Mi Drive also exposes:

```text
Message Sign Location
```

as a layer. ([MDOT Public Applications][6])

This means Michigan should have a separate:

```text
DYNAMIC_MESSAGE_SIGN
```

source category.

#### Registry

```text
SOURCE_ID:
    MI-MDOT-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢 VERIFIED
```

---

### 13. MDOT snowplow/maintenance vehicles

This is another real-time data layer.

Mi Drive exposes:

```text
Snowplow Maintenance Vehicles
```

and MDOT specifically warns that this feature displays active **MDOT-only** snowplows and maintenance vehicles. ([MDOT Public Applications][6])

#### Registry

```text
SOURCE_ID:
    MI-MDOT-MAINTENANCE-VEHICLES

TYPE:
    FLEET_TRACKING

OBJECT:
    SNOWPLOW / MAINTENANCE VEHICLE

STATUS:
    🟢 VERIFIED
```

This is not a camera source, but it belongs in the transportation-observation layer.

---

### 14. MDOT vehicle detectors

Michigan also operates roadway vehicle detectors.

MDOT's West Michigan Transportation Operations Center explains that a vehicle detector determines:

```text
speed
volume
lane occupancy
vehicle lane
vehicle classification/size
```

for a point on the freeway. ([Michigan.com][3])

#### Registry

```text
SOURCE_ID:
    MI-MDOT-VEHICLE-DETECTORS

TYPE:
    TRAFFIC_SENSOR

DATA:
    SPEED
    VOLUME
    LANE_OCCUPANCY
    VEHICLE_CLASS

STATUS:
    🟢 VERIFIED
```

This is valuable for the national system because it is **non-camera traffic telemetry**.

---

### 15. MDOT Transportation Operations Centers

Michigan operates regional Transportation Operations Centers.

The West Michigan TOC documentation confirms the operational integration of:

```text
cameras
DMS
vehicle detectors
traffic speeds
incidents
Mi Drive
```

across its region. ([Michigan.com][3])

This indicates that Michigan's camera infrastructure is part of a broader ITS network rather than an isolated website.

---

### 16. Michigan Public Safety Communications System

Now the **major discovery**.

Michigan operates:

**Michigan's Public Safety Communications System — MPSCS**

The state describes MPSCS as its statewide public-safety communications solution covering **all 83 counties** and serving local, state, federal, tribal and private first responders. ([Michigan.com][7])

#### Registry

```text
SOURCE_ID:
    MI-MPSCS

OWNER:
    Michigan Department of Technology,
    Management & Budget

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

BAND:
    700/800 MHz

PROTOCOL:
    P25 DIGITAL

COVERAGE:
    ALL 83 COUNTIES

STATUS:
    🟢 VERIFIED
```

---

### 17. Size of MPSCS

This is not a small statewide radio system.

As of August 2025, Michigan reports:

```text
355+ radio towers
155,471+ radios
83 counties
```

and describes MPSCS as the **second-largest trunked communication system in the world**. ([Michigan.com][8])

#### Registry

```text
SYSTEM:
    MPSCS

OBSERVED:
    355+ TOWERS
    155,471+ RADIOS

COVERAGE:
    STATEWIDE

LAST_CONFIRMED:
    2025-08
```

These are infrastructure statistics, not the number of publicly monitorable talkgroups.

---

### 18. MPSCS P25

MPSCS is a digital P25 system.

Michigan's own documentation states that MPSCS operates as an:

```text
800/700 MHz
digital trunked radio network
```

and its fire-paging documentation specifically identifies the network as a **digital P25 network**. ([Michigan.com][9])

#### Registry

```text
SYSTEM:
    MPSCS

DIGITAL:
    🟢

P25:
    🟢

TRUNKED:
    🟢

700/800MHz:
    🟢
```

---

### 19. MPSCS public-safety agencies

MPSCS serves a very broad collection of agencies.

The state says the system supports:

```text
local
state
federal
tribal
private
```

first responders in all 83 counties. ([Michigan.com][7])

This means our agency-source graph should not treat MPSCS as merely:

```text
Michigan State Police radio
```

It is much larger.

---

### 20. Michigan State Police on MPSCS

MPSCS was originally implemented to serve Michigan State Police before its scope expanded to other agencies. ([Michigan.com][8])

Therefore:

```text
MI-MSP
    ↓
MI-MPSCS
    ↓
multiple talkgroups
```

is the correct relationship.

---

### 21. Michigan Department of Natural Resources

Michigan DNR is also a major MPSCS user.

The state's MPSCS documentation specifically states that the Departments of Natural Resources and Transportation rely on the system. ([Michigan.com][8])

#### Registry

```text
AGENCY:
    Michigan DNR

RADIO_SYSTEM:
    MPSCS

TYPE:
    STATE_PUBLIC_SAFETY_RADIO
```

---

### 22. MDOT radio

MDOT is also represented in Michigan's public-safety/interoperability radio ecosystem.

The MPSCS interoperability board includes MDOT representation, and the state describes MPSCS as supporting statewide public-safety communications. ([Michigan.com][10])

So the graph becomes:

```text
MPSCS
├── MSP
├── MDOT
├── DNR
├── local police
├── local fire
├── EMS
├── emergency management
└── other public-safety agencies
```

---

### 23. MPSCS towers

A March 2025 MPSCS board document gives a concrete infrastructure count:

```text
346 MPSCS towers
```

as of December 10, 2024. ([Michigan.com][11])

The later August 2025 state page reports **355+ towers**, indicating expansion/change. ([Michigan.com][8])

Therefore:

```text
2024:
    346

2025:
    355+

CURRENT DATABASE:
    don't hardcode either
```

Store infrastructure observations by date.

---

### 24. MPSCS fire paging

Michigan operates an 800-MHz fire-paging service over MPSCS.

At the beginning of 2023, Michigan reported:

```text
8,600+
digital pagers

500 agencies
900 fire/EMS stations
```

using or implementing the service. ([Michigan.com][9])

#### Registry

```text
SOURCE_ID:
    MI-MPSCS-FIRE-PAGING

TYPE:
    DIGITAL_FIRE_PAGING

NETWORK:
    MPSCS

STATUS:
    🟢 VERIFIED
```

---

### 25. MPSCS encryption

MPSCS supports encryption.

The official radio documentation references:

```text
encryption keys
OTAR
encryption keyloaders
```

and MPSCS has a dedicated Encryption Work Group. ([Michigan.com][12])

Therefore:

```text
talkgroup.monitorability
```

must be represented independently from:

```text
talkgroup.exists
```

---

### 26. MPSCS public radio data

The state publishes substantial **system metadata**, including:

* system information
* member resources
* radio information
* approved equipment
* interoperability documentation
* tower information
* paging information
* system policies

The MPSCS site is therefore a legitimate **source-discovery authority**. ([Michigan.com][7])

But:

```text
PUBLIC SYSTEM DOCUMENTATION
        ≠
PUBLIC AUDIO API
```

We should not claim that MPSCS itself offers an official public audio stream.

---

### 27. Broadcastify — Michigan

Michigan has an extensive public scanner ecosystem.

Current Broadcastify data shows approximately:

```text
337 audio feeds
84 counties
```

with the category breakdown including:

```text
153 Public Safety
37 Amateur Radio
13 Rail
11 Other
5 Marine
2 Aviation
```

in the current directory snapshot. ([Broadcastify][13])

Another current public-safety-specific listing reports:

```text
187 audio feeds
70 counties
153 public-safety feeds
```

The discrepancy comes from how Broadcastify's pages classify/aggregate feeds, so we should not hardcode either number as an absolute inventory. ([Broadcastify][14])

#### Registry

```text
SOURCE_ID:
    MI-BROADCASTIFY

TYPE:
    PUBLIC_RADIO_AUDIO

OBSERVED_FEEDS:
    ~337 overall

PUBLIC_SAFETY:
    ~153

COUNTIES:
    84 directory categories

STATUS:
    🟢 ACTIVE
```

---

### 28. Michigan public-safety scanner coverage

The current directory covers a very large portion of Michigan.

Examples include:

```text
Alcona
Alger
Allegan
Alpena
Antrim
Arenac
Barry
Bay
Benzie
Berrien
Branch
Calhoun
Cass
Charlevoix
Cheboygan
Chippewa
Clare
Clinton
Crawford
Delta
Dickinson
Eaton
Emmet
Genesee
Gladwin
Gogebic
Grand Traverse
Gratiot
Hillsdale
Houghton
Huron
Ingham
Ionia
Iosco
Iron
Isabella
Jackson
Kalamazoo
Kent
Lapeer
Lenawee
Livingston
Macomb
Marquette
Muskegon
Oakland
Ottawa
Saginaw
St. Clair
Washtenaw
Wayne
...
```

with many counties having multiple feeds. ([Broadcastify][13])

---

### 29. MPSCS feeds on Broadcastify

This is especially useful.

Broadcastify feed descriptions explicitly identify feeds as receiving:

```text
non-encrypted digital communications
from the Project 25 Phase I
Michigan Public Safety Communications System
```

using software-defined radio. ([Broadcastify][15])

That gives us a very clean relationship:

```text
MPSCS
   ↓
P25 Phase I
   ↓
non-encrypted talkgroups
   ↓
SDR receiver
   ↓
Broadcastify
```

---

### 30. Wayne County

Wayne County is one of the strongest scanner areas.

The current directory includes:

```text
Detroit Police Dispatch
Wayne County Public Safety
Downriver Public Safety
Detroit/Eastpointe/Warren Police & Fire
Grosse Pointes/Harper Woods
Northville/Plymouth
Romulus/Huron Township
Westland/Garden City
```

among others. ([Broadcastify][16])

#### Registry

```text
SOURCE_ID:
    MI-WAYNE-PUBLIC-AUDIO

TYPE:
    COUNTY_PUBLIC_SAFETY_AUDIO

STATUS:
    🟢 ACTIVE
```

---

### 31. Detroit Police Dispatch

Detroit has a dedicated public Broadcastify feed:

```text
Detroit Police Dispatch
```

which is currently one of the highest-listened Michigan public-safety feeds. ([Broadcastify][13])

#### Registry

```text
SOURCE_ID:
    MI-DETROIT-PD-AUDIO

AGENCY:
    Detroit Police Department

TYPE:
    PUBLIC_SCANNER

STATUS:
    🟢 ACTIVE
```

---

### 32. Jackson County

Jackson County has multiple feeds.

One feed specifically states it receives non-encrypted P25 Phase I communications from MPSCS. ([Broadcastify][15])

#### Registry

```text
SOURCE_ID:
    MI-JACKSON-PUBLIC-AUDIO

TYPE:
    COUNTY_PUBLIC_SAFETY_AUDIO

NETWORK:
    MPSCS

STATUS:
    🟢
```

---

### 33. Washtenaw County

Washtenaw County currently has MPSCS-related feeds and Broadcastify Calls coverage.

Broadcastify reports coverage for:

```text
Law Dispatch
Law Tac
Law Talk
Fire Dispatch
Fire Tac
EMS
Corrections
Hospital
Interop
Public Works
Schools
Security
Transportation
```

through its Calls system. ([Broadcastify][17])

This is extremely useful because it demonstrates that the public data isn't limited to police dispatch.

---

### 34. Livingston County

Livingston County also has MPSCS feeds.

The directory identifies:

```text
Livingston County Public Safety / MSP District 1 North
```

as receiving non-encrypted P25 Phase I MPSCS communications. ([Broadcastify][18])

---

### 35. Michigan ALPR — LEIN

Now we get to the **law-enforcement ALPR infrastructure**.

Michigan State Police's **Law Enforcement Information Network (LEIN)** documentation explicitly discusses an:

```text
Automated License Plate Reader File
```

for law-enforcement agencies. ([Michigan.com][19])

The documentation says agencies may purchase license-plate screening technology from vendors whose systems scan plates and compare them against criminal-justice records. ([Michigan.com][19])

#### Registry

```text
SOURCE_ID:
    MI-LEIN-ALPR

OWNER:
    Michigan State Police

SYSTEM:
    LEIN

TYPE:
    ALPR_BACKEND_DATA

ACCESS:
    🔴 RESTRICTED

STATUS:
    🟢 VERIFIED
```

---

### 36. LEIN ALPR file update frequency

This is an unusually useful technical detail.

Michigan says LEIN Field Services provides updated criminal-justice extracts:

```text
4 times per day
```

for use with mobile and fixed ALPR devices operated by law-enforcement agencies. ([Michigan.com][19])

#### Registry

```text
SOURCE_ID:
    MI-LEIN-ALPR

UPDATE:
    4x DAILY

PURPOSE:
    ALPR HOT-LIST / SCREENING DATA
```

This is **not the same thing as the camera observations themselves**.

---

### 37. LEIN ALPR data contents

Michigan says the extract combines NCIC data and LEIN hot files.

The documented categories include:

```text
Stolen Vehicle
License Plate
Wanted Person
Missing Person
Gang
Known/Suspected Terrorist
Supervised Release
National Sex Offender Registry
Immigration Violator
```

plus Michigan LEIN hot-file categories. ([Michigan.com][19])

This is a **backend lookup source**, not a public plate-location database.

---

### 38. LEIN ALPR access requirements

This is very important.

Michigan requires an agency requesting access to the ALPR file to submit:

```text
CJIS-017
```

a Memorandum of Understanding.

After execution, LEIN Field Services assigns FTP-site access. ([Michigan.com][19])

#### Registry

```text
ACCESS:
    RESTRICTED

REQUIREMENT:
    QUALIFIED LAW-ENFORCEMENT AGENCY

AGREEMENT:
    CJIS-017 MOU

DELIVERY:
    FTP

PUBLIC:
    🔴
```

We **do not attempt to obtain this restricted feed**.

---

### 39. Michigan LEIN is not an ALPR camera registry

This distinction is critical.

The LEIN ALPR file tells us:

```text
what criminal-justice records
ALPR systems can screen against
```

It does **not** give us:

```text
where every Michigan ALPR camera is
```

Therefore:

```text
MI-LEIN-ALPR
```

belongs in the **ALPR backend/infrastructure** category, not the camera-location inventory.

---

### 40. Michigan State Police ALPR hardware

Michigan's official documentation confirms that law-enforcement agencies can use both:

```text
mobile
fixed
```

ALPR devices. ([Michigan.com][19])

#### Registry

```text
ALPR_TYPES:
    FIXED
    MOBILE

STATUS:
    🟢 OFFICIALLY DOCUMENTED
```

Again, this establishes the technology class—not the statewide number of deployed units.

---

### 41. Michigan State Police technical/biometric infrastructure

MSP has a dedicated **Biometrics and Identification Division**.

The state describes the division as covering:

```text
forensic audio/video analysis
facial identification
fingerprint identification
DNA
forensic art
polygraph
```

among other identification technologies. ([Michigan.com][20])

#### Registry

```text
SOURCE_ID:
    MI-MSP-BID

TYPE:
    BIOMETRICS_IDENTIFICATION

CAPABILITIES:
    AUDIO_VIDEO_ANALYSIS
    FACIAL_IDENTIFICATION
    FINGERPRINT
    DNA
    FORENSICS

STATUS:
    🟢 VERIFIED
```

This is not a public camera feed, but it is relevant to the broader surveillance/data-source inventory.

---

### 42. Detroit surveillance infrastructure

Detroit should be treated as a separate municipal research target.

The city's police/technology infrastructure is not equivalent to MDOT or MSP.

For the national database:

```text
Michigan
├── State
│   ├── MDOT
│   ├── MSP
│   ├── MPSCS
│   └── LEIN
│
└── Municipal
    ├── Detroit
    ├── Grand Rapids
    ├── Warren
    ├── Sterling Heights
    ├── Ann Arbor
    ├── Lansing
    └── hundreds of others
```

The municipal ALPR layer is sufficiently fragmented that I would **not manufacture a statewide number**.

---

### 43. Flock / municipal ALPR

Michigan clearly has municipal Flock/ALPR activity, but the current research pass did **not** establish a sufficiently authoritative statewide camera inventory.

Therefore:

```text
MI-FLOCK-STATEWIDE

STATUS:
    🟡 DISCOVERY REQUIRED

DO NOT:
    assign an invented camera count
```

This is intentional.

The proper method is:

```text
municipality
    ↓
police department
    ↓
procurement records
    ↓
contract
    ↓
vendor
    ↓
camera count
    ↓
locations
    ↓
status
```

rather than assuming every Michigan municipality using an ALPR vendor is still active.

---

### 44. Municipal ALPR data sources we should pursue

For Michigan, the highest-value municipal discovery sources are:

```text
City procurement portals
County procurement portals
Police department policies
City council agendas
City council minutes
Contracts
FOIA disclosures
Annual reports
Surveillance policies
Vendor agreements
```

Especially:

```text
Flock Safety
Motorola Solutions
Rekor
Genetec
Vigilant
PlateSmart
Axon
```

But vendor presence should be established from actual records before entering it.

---

### 45. Michigan scanner architecture

The radio side can be represented:

```text
MICHIGAN
│
└── MPSCS
    │
    ├── MSP
    ├── MDOT
    ├── DNR
    ├── Local Police
    ├── Fire
    ├── EMS
    ├── Emergency Management
    └── Other Partners
          │
          └── P25
              │
              ├── encrypted
              └── non-encrypted
                    │
                    └── public SDR feeds
                         │
                         └── Broadcastify
```

This is an exceptionally clean model.

---

### 46. Michigan camera architecture

The transportation side:

```text
MICHIGAN
│
└── MDOT
    │
    └── Mi Drive
        │
        ├── CCTV
        ├── Speeds
        ├── Incidents
        ├── Construction
        ├── DMS
        ├── Snowplows
        ├── Truck Parking
        └── Vehicle Detectors
```

---

### 47. Michigan ALPR architecture

The ALPR side:

```text
MICHIGAN
│
├── MSP / LEIN
│   └── ALPR screening backend
│
├── State agencies
│   └── fixed/mobile ALPR
│
└── Municipal agencies
    ├── Flock
    ├── other ALPR vendors
    └── local systems
```

The key point is that **LEIN is the statewide backend, not a statewide camera registry**.

---

### 48. Exact source registry

| Source ID                      | Owner             | Data                | Machine-readable | Access               | Status |
| ------------------------------ | ----------------- | ------------------- | ---------------: | -------------------- | ------ |
| `MI-MIDRIVE`                   | MDOT              | traffic information |               🟡 | Public               | 🟢     |
| `MI-MDOT-CCTV`                 | MDOT              | traffic cameras     |               🟡 | Public               | 🟢     |
| `MI-MDOT-SPEEDS`               | MDOT              | speeds              |               🟡 | Public               | 🟢     |
| `MI-MDOT-INCIDENTS`            | MDOT              | incidents           |               🟡 | Public               | 🟢     |
| `MI-MDOT-CONSTRUCTION`         | MDOT              | construction        |               🟡 | Public               | 🟢     |
| `MI-MDOT-DMS`                  | MDOT              | message signs       |               🟡 | Public               | 🟢     |
| `MI-MDOT-MAINTENANCE-VEHICLES` | MDOT              | snowplows           |               🟡 | Public               | 🟢     |
| `MI-MDOT-VEHICLE-DETECTORS`    | MDOT              | traffic sensors     |               🟡 | Public/operational   | 🟢     |
| `MI-MPSCS`                     | State of Michigan | public-safety radio |         Metadata | Public documentation | 🟢     |
| `MI-MPSCS-FIRE-PAGING`         | MPSCS             | fire paging         |         Metadata | Public documentation | 🟢     |
| `MI-LEIN-ALPR`                 | MSP               | ALPR screening file |               🟢 | Restricted FTP       | 🟢     |
| `MI-MSP-BID`                   | MSP               | biometrics/video    |         Metadata | Public documentation | 🟢     |
| `MI-BROADCASTIFY`              | Third party       | radio audio         |               🟢 | Public feeds         | 🟢     |
| `MI-DETROIT-PD-AUDIO`          | Detroit           | police audio        |               🟢 | Public feed          | 🟢     |
| `MI-WAYNE-PUBLIC-AUDIO`        | Various           | public safety audio |               🟢 | Public feeds         | 🟢     |
| `MI-FLOCK-STATEWIDE`           | Municipal         | ALPR                |                — | Fragmented           | 🟡     |

---

### 49. Highest-priority Michigan ingestion targets

#### Tier 1

These should be attacked first from an engineering perspective:

```text
1. MI-MDOT-CCTV
2. MI-MDOT-INCIDENTS
3. MI-MDOT-SPEEDS
4. MI-MDOT-CONSTRUCTION
5. MI-MDOT-DMS
6. MI-MPSCS
7. MI-BROADCASTIFY
```

The biggest immediate technical research target is **the underlying Mi Drive network API**.

We have confirmed the website and camera system. The remaining question is the exact request/response format.

---

### 50. Tier 2

```text
8. MI-MDOT-VEHICLE-DETECTORS
9. MI-MDOT-MAINTENANCE-VEHICLES
10. MI-MPSCS-FIRE-PAGING
11. MI-DETROIT-PD-AUDIO
12. MI-WAYNE-PUBLIC-AUDIO
13. Municipal ALPR procurement
14. Municipal Flock deployments
```

---

### 51. Tier 3

```text
15. MI-LEIN-ALPR
16. MSP biometric/video infrastructure
17. encrypted MPSCS talkgroups
```

These are valuable for infrastructure mapping but should remain clearly marked as restricted/non-public where applicable.

---

### 52. What we have NOT established

I am deliberately **not** claiming:

```text
🔴 A public statewide ALPR-camera inventory
🔴 A public statewide ALPR-read database
🔴 Public LEIN access
🔴 Public access to encrypted MPSCS traffic
🔴 A public MPSCS audio API operated by Michigan
🔴 A complete statewide municipal CCTV inventory
🔴 A statewide CAD API
🔴 An exact current statewide Mi Drive camera count
```

The last one is particularly important.

We know Mi Drive has statewide cameras, but I have **not found an authoritative current camera-count figure** in this pass.

---

### 53. Important technical finding: Mi Drive needs direct network discovery

For this project, I would rank this as the most important unresolved Michigan task.

We have:

```text
https://mdotjboss.state.mi.us/MiDrive/cameras
```

and:

```text
https://mdotjboss.state.mi.us/MiDrive/map
```

The camera application dynamically loads its records. ([MDOT Public Applications][6])

Therefore the next step should be:

```text
Open Mi Drive
        ↓
DevTools
        ↓
Network
        ↓
XHR / Fetch
        ↓
Filter:
    camera
    cameras
    image
    map
    json
    api
        ↓
capture request
        ↓
capture response
        ↓
identify schema
        ↓
identify image URL
        ↓
identify coordinates
        ↓
identify camera ID
```

That is legitimate public-source reverse engineering of the application's **published public data flow**.

No authentication bypass is needed.

---

### 54. Expected canonical camera object

Based on the publicly visible Mi Drive camera interface and MDOT documentation, the ingestion adapter should ultimately attempt to normalize:

```json
{
  "source": "MI-MDOT-CCTV",
  "source_camera_id": "...",
  "name": "...",
  "description": "...",
  "latitude": 0,
  "longitude": 0,
  "route": "...",
  "county": "...",
  "direction": "...",
  "image_url": "...",
  "timestamp": "...",
  "status": "..."
}
```

**But those fields are not yet confirmed as the actual API schema.**

The adapter should be built from the captured response, not from this hypothetical object.

---

### 55. Scanner assessment

| Category                           |                    Michigan |
| ---------------------------------- | --------------------------: |
| State transportation camera system |                          🟢 |
| Statewide camera coverage          |                          🟢 |
| Public live camera viewing         |                          🟢 |
| Camera API documented              |                          🟡 |
| Traffic speeds                     |                          🟢 |
| Traffic incidents                  |                          🟢 |
| Construction                       |                          🟢 |
| DMS                                |                          🟢 |
| Vehicle detectors                  |                          🟢 |
| Statewide public-safety radio      |            🟢 **Excellent** |
| P25                                |                          🟢 |
| 700/800 MHz                        |                          🟢 |
| Statewide coverage                 |                          🟢 |
| Public scanner ecosystem           |            🟢 **Excellent** |
| ALPR backend                       |                          🟢 |
| Public ALPR backend access         |                          🔴 |
| Statewide ALPR camera inventory    |                          🔴 |
| Municipal ALPR                     | 🟡 **Large but fragmented** |
| Statewide CAD                      |                          🔴 |

---

### 56. Michigan final rating

### **9.6 / 10 — EXTREMELY HIGH VALUE**

Michigan is one of the better states we've encountered.

The strongest assets are:

#### **MDOT Mi Drive**

A genuine statewide public transportation-camera system with live camera viewing and multiple additional real-time data layers. ([Michigan.com][1])

#### **MPSCS**

An enormous statewide P25 public-safety radio network covering all 83 counties, with 355+ towers and more than 155,000 radios reported as of August 2025. ([Michigan.com][8])

#### **Broadcastify**

Hundreds of publicly accessible Michigan feeds, including numerous feeds explicitly receiving non-encrypted MPSCS traffic. ([Broadcastify][13])

#### **LEIN ALPR**

Official Michigan documentation establishes a statewide ALPR screening-data infrastructure, including fixed/mobile ALPR use and four-times-daily criminal-justice extracts. ([Michigan.com][19])

#### **Municipal ALPR**

There is a substantial local ALPR ecosystem, but it requires municipality-by-municipality verification rather than guessing a statewide number.

---

### 57. Michigan master source graph

```text
MICHIGAN
│
├── 🟢 MDOT
│   │
│   └── Mi Drive
│       ├── 🟢 CCTV
│       ├── 🟢 Traffic Speeds
│       ├── 🟢 Incidents
│       ├── 🟢 Construction
│       ├── 🟢 DMS
│       ├── 🟢 Snowplows
│       ├── 🟢 Truck Parking
│       └── 🟢 Vehicle Detectors
│
├── 🟢 MPSCS
│   │
│   ├── MSP
│   ├── MDOT
│   ├── DNR
│   ├── Local Police
│   ├── Fire
│   ├── EMS
│   └── Other Agencies
│       │
│       └── P25
│           ├── 🟢 Non-encrypted
│           └── 🔴 Encrypted
│
├── 🟢 MSP / LEIN
│   └── ALPR Screening Backend
│       └── 🔴 Restricted
│
├── 🟡 MUNICIPAL ALPR
│   ├── Flock
│   ├── other vendors
│   └── local systems
│
└── 🟢 PUBLIC RADIO
    └── Broadcastify
        └── hundreds of feeds
```

**Michigan is complete for this state-level pass.**

**Next alphabetically: Minnesota.**

[1]: https://www.michigan.gov/mdot/about/mi-drive-disclaimer?utm_source=chatgpt.com "Mi Drive"
[2]: https://mdotjboss.state.mi.us/MiDrive/cameras?utm_source=chatgpt.com "MDOT - Mi Drive Camera Lists"
[3]: https://www.michigan.gov/mdot/about/faqs/safety/wmtoc?utm_source=chatgpt.com "West Michigan Transportation Operations Center"
[4]: https://www.michigan.gov/mdot/-/media/Project/Websites/MDOT/Programs/TSMO/ITS/MDOT-ITS-Strategic-Plan-Appendix-A.pdf?hash=543E8C76F154C1143B269666E3724964&rev=890a7f54983344d481743cd333a7ef72&utm_source=chatgpt.com "MDOT’S STRATEGIC PLAN FOR INTELLIGENT TRANSPORTATION SYSTEMS"
[5]: https://www.michigan.gov/mdot/-/media/Project/Websites/MDOT/Programs/Planning/Michigan-Mobility/Freight-Plan-Amendment.pdf?hash=60FB1365FDAA4B5F73D40D3FF26DB0C4&rev=6a9acd6dd55348a6b8b811f61f564ab1&utm_source=chatgpt.com "Freight Plan Amendment"
[6]: https://mdotjboss.state.mi.us/MiDrive/map?constZone=true&lat=46.37648699871278&lon=-85.50956197211583&trafficLayer=true&zoom=14.532103642227945&utm_source=chatgpt.com "MDOT - Mi Drive Map"
[7]: https://www.michigan.gov/mpscs/?utm_source=chatgpt.com "Michigan's Public Safety Communications System"
[8]: https://www.michigan.gov/mpscs/inside?utm_source=chatgpt.com "Inside MPSCS"
[9]: https://www.michigan.gov/mpscs/radio/800-mhz-fire-paging-solution?utm_source=chatgpt.com "800 MHz Fire Paging Solution"
[10]: https://www.michigan.gov/mpscs/0%2C4640%2C7-184-67164---%2C00.html?utm_source=chatgpt.com "Interoperability Board and Work Groups"
[11]: https://www.michigan.gov/mpscs/-/media/Project/Websites/MPSCS/Interoperability-Board/MPSCIB-Board-Materials-March-2025.pdf?hash=D1C3A57EB4A08E3F2B2E19060A203DA1&rev=0281bbf4997d49618b9062e43e27074d&utm_source=chatgpt.com "STATE OF MICHIGAN"
[12]: https://www.michigan.gov/mpscs/radio?utm_source=chatgpt.com "Radios, Consoles, Pagers and Sirens"
[13]: https://status.broadcastify.com/listen/stid/26?utm_source=chatgpt.com "Michigan Audio Feeds"
[14]: https://status.broadcastify.com/listen/stid/26/publicsafety?utm_source=chatgpt.com "Michigan Audio Feeds"
[15]: https://status.broadcastify.com/listen/ctid/1264/publicsafety?utm_source=chatgpt.com "Jackson County, Michigan Audio Feeds"
[16]: https://status.broadcastify.com/listen/ctid/1308?utm_source=chatgpt.com "Wayne County, Michigan Audio Feeds"
[17]: https://status.broadcastify.com/listen/ctid/1307?utm_source=chatgpt.com "Washtenaw County, Michigan Audio Feeds"
[18]: https://status.broadcastify.com/listen/ctid/1273?utm_source=chatgpt.com "Livingston County, Michigan Audio Feeds"
[19]: https://www.michigan.gov/msp/le/lein/info/access-to-the-lein?utm_source=chatgpt.com "Access to the LEIN"
[20]: https://www.michigan.gov/msp/about-msp/msp-program-descriptions-and-organizational-structure?utm_source=chatgpt.com "MSP Program Descriptions and Organizational Structure"
