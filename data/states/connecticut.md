---
state: Connecticut
usps: CT
slug: connecticut
dossier_number: 7
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
  imported_from: project_atlas_state_data/Connecticut.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Connecticut (CT) - ATLAS State Record

> Dossier **7 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Connecticut is a **strong transportation-data state**, but it is different from California and Colorado in an important way:

* CTDOT has **350+ public traffic cameras**
* CTroads has a documented **public developer API**
* the API exposes **incidents, message signs, and alerts**
* the public API requires a **developer key**
* the public CTroads site exposes the cameras, but the currently documented API does **not clearly expose a camera endpoint**
* Connecticut has a substantial public police/fire/EMS radio ecosystem
* ALPR deployment is significant and rapidly changing
* Connecticut currently has unusually active state-level ALPR policy changes, so ALPR sources need timestamping carefully

---

### 1. CTDOT statewide traffic cameras

**Organization:** Connecticut Department of Transportation (CTDOT)
**System:** CTroads
**Category:** State DOT / CCTV
**Status: 🟢 CONFIRMED**

Connecticut's official traffic system is **CTroads**.

CTDOT states that CTroads provides:

* real-time traffic cameras
* incidents
* road closures
* construction
* lane closures
* weather alerts
* forecasts
* travel times
* traffic speeds

and access to images from **hundreds of traffic cameras** around Connecticut. ([Connecticut.gov][1])

The official Connecticut government traffic page specifically identifies:

> CTDOT Traffic Cameras

and states that I-95, I-91, I-84 and portions of Routes 2, 8, 9 and 72 have traffic cameras. ([Connecticut.gov][2])

---

### 2. Exact CTroads camera page

The official camera directory is:

[CTroads Cameras](https://ctroads.org/cctv?utm_source=chatgpt.com)

The current directory states:

**over 350 DOT cameras across Connecticut**.

It also says the images refresh frequently and cover major interstates and roadways. ([CT Roads][3])

#### Classification

```text
CONNECTICUT
└── CTDOT
    └── CTroads
        └── CCTV
```

🟢 **CONFIRMED**

---

### 3. CTroads camera media source

CTroads explicitly states:

> Images are provided by CTDOT and Trafficland.

([CT Roads][4])

This is extremely important.

The camera architecture appears to be:

```text
CTDOT
   ↓
CTroads
   ↓
Camera metadata
   ↓
Image
   ↓
Trafficland / CTDOT
```

#### Source classification

```text
camera inventory:
    🟢 CTDOT / CTroads

image provider:
    🟢 CTDOT + Trafficland

direct media endpoint:
    🟡 requires technical extraction
```

I am **not** going to invent a JPEG URL, HLS URL, or Trafficland endpoint without verifying an actual record.

---

### 4. CTDOT cameras do NOT record

This is explicitly confirmed by CTDOT.

The department says CTroads traffic cameras are used for **live monitoring** and do not record. CTDOT states that traffic-camera recordings therefore do not exist for disclosure. ([Connecticut.gov][5])

#### Canonical classification

```text
live_image:
    YES

recorded_video:
    NO

historical_camera_video:
    NO
```

This is important for the national database.

Do not represent a Connecticut traffic camera as a video archive source.

---

### 5. CTDOT camera coverage

The current CTroads camera page says:

**350+ DOT cameras**

and describes them as covering major interstates and roadways. ([CT Roads][3])

The Connecticut government traffic page specifically identifies:

```text
I-95
I-91
I-84
Route 2
Route 8
Route 9
Route 72
```

as equipped with traffic cameras. ([Connecticut.gov][2])

#### Status

🟢 **CONFIRMED**

---

### 6. CTDOT camera expansion

Connecticut is actively expanding and replacing camera infrastructure.

A 2026 CTDOT project for the Greater Hartford area is replacing cameras and communications equipment on I-91/I-291 and expanding coverage.

The project calls for:

**23 new cameras**

including **5 new locations**. ([Connecticut.gov][6])

Therefore, older camera counts are not authoritative.

#### Required ingestion fields

```text
first_seen
last_seen
source_updated
status
```

---

### 7. CTroads API

This is one of Connecticut's strongest discoveries.

CTroads maintains an official developer API.

The official documentation says:

> The REST API provides simple interfaces to most of the data available on the CTroads website.

It specifically identifies access to:

* traffic speeds
* incidents
* roadwork
* cameras

and says the API is intended for developers building Connecticut traffic applications. ([CT Roads][7])

#### Important complication

The currently exposed documentation lists the specific API calls for:

* Events
* Message Signs
* Alerts
* Event Feeds

but does **not currently expose a camera API documentation page alongside those endpoints**. ([CT Roads][7])

So:

```text
CTroads API exists:
    🟢

camera API specifically documented:
    🟡

camera data on public CTroads website:
    🟢
```

This is a distinction worth preserving.

---

### 8. CTroads API authentication

The CTroads API requires a developer key.

The official documentation says:

```text
key={developerKey}
format={XmlOrJson}
```

and requires users to register for an account before requesting the developer key. ([CT Roads][7])

#### Throttling

The documented throttle is:

**10 calls every 60 seconds.** ([CT Roads][7])

#### Classification

```text
API:
    🟢 public developer program

authentication:
    🟡 free developer key required

anonymous API:
    🔴 not documented
```

This fits the project's source model:

```text
access_method = developer_key
credential_required = true
operator_supplied = true
```

---

### 9. CTroads Events API

This is a particularly useful exact source.

#### Endpoint

```text
http://ctroads.org/api/v2/get/event
```

with:

```text
key
format
```

parameters. ([CT Roads][8])

The endpoint returns traffic events.

---

### 10. CTroads event schema

The documented event API returns:

```text
ID
SourceId
Organization
RoadwayName
DirectionOfTravel
Description
Reported
LastUpdated
StartDate
PlannedEndDate
LanesAffected
Latitude
Longitude
LatitudeSecondary
LongitudeSecondary
EventType
EventSubType
IsFullClosure
Severity
Comment
EncodedPolyline
Restrictions
Recurrence
RecurrenceSchedules
```

([CT Roads][8])

This is an excellent canonical event source.

---

### 11. Connecticut event types

The API documents event types including:

```text
roadwork
closures
accidentsAndIncidents
```

([CT Roads][8])

The older API documentation additionally identifies:

```text
specialEvents
transitMode
generalInfo
winterDrivingIndex
```

([CT Roads][9])

#### Canonical mapping

```text
EVENT
├── accident / incident
├── roadwork
├── closure
├── special event
├── transit
├── general information
└── winter conditions
```

---

### 12. Connecticut incident source

The official CT.gov traffic page describes **CT Traffic Incidents** as:

> an updated listing of traffic incidents as they are reported by the CTDOT Highway Operations Center.

([Connecticut.gov][2])

Therefore the event feed has a strong official provenance:

```text
CTDOT Highway Operations Center
        ↓
CTroads
        ↓
Public event API
```

#### Status

🟢 **CONFIRMED**

---

### 13. CTroads Message Sign API

Connecticut also exposes VMS/DMS information.

#### Exact endpoint

```text
http://ctroads.org/api/v2/get/messagesigns
```

with:

```text
key
format
```

([CT Roads][10])

---

### 14. CTroads message-sign schema

The API provides:

```text
Id
Name
Roadway
DirectionOfTravel
Messages
Latitude
Longitude
LastUpdated
```

([CT Roads][10])

This is another very clean machine-readable source.

#### Example source record

The official documentation includes examples such as:

```text
Id: ConnDOT--377
Name: 95S Stratford S/O x31
Roadway: I-95
DirectionOfTravel: Southbound
Latitude: 41.181914
Longitude: -73.144044
```

([CT Roads][10])

---

### 15. CTroads Alerts API

#### Exact endpoint

```text
http://ctroads.org/api/v2/get/alerts
```

with:

```text
key
format
```

([CT Roads][11])

The API returns:

```text
Id
Message
Notes
StartTime
EndTime
LastUpdated
Regions
HighImportance
SendNotification
```

([CT Roads][11])

#### Status

🟢 **CONFIRMED**

---

### 16. CTroads Event Feeds API

There is also:

```text
http://ctroads.org/api/geteventfeeds
```

which accepts:

```text
feed
key
```

([CT Roads][12])

This provides another potential ingestion mechanism for event sources.

#### Classification

🟢 **CONFIRMED API**

#### Exact feed catalog

🟡 Requires developer-key access / runtime inspection.

---

### 17. CTroads traffic speeds

CTroads explicitly provides:

* freeway travel times
* freeway speeds
* traffic speeds along routes

and states that speed information is available for Connecticut and adjacent states. ([Connecticut.gov][1])

The developer documentation also identifies **Traffic Speeds** as part of the API's supported data. ([CT Roads][7])

#### Status

```text
traffic speeds:
    🟢 confirmed on platform

public API:
    🟢 API family confirmed

exact endpoint:
    🟡 current documentation needs further extraction
```

---

### 18. Connecticut weather information

CTroads exposes:

* weather alerts
* weather incidents
* forecasts
* radar

on its public traffic map. ([CT Roads][13])

#### Status

🟢 **CONFIRMED**

#### Exact machine-readable weather API

🟡 **Not established in this pass**

Do not invent one.

---

### 19. CTroads camera API — important negative finding

This deserves its own section because it could easily be misreported.

The general CTroads developer documentation says the REST API includes **Cameras**, but the currently visible API call list only documents:

```text
GetEvents
GetMessageSigns
GetAlerts
GetEventFeeds
```

([CT Roads][7])

A current independent audit likewise characterizes Connecticut as having:

* Events API
* Message Signs API
* Alerts API

while noting cameras/weather are available on the website but not clearly exposed in the documented API. ([iThub][14])

#### Therefore:

**Camera inventory:** 🟢

**Public camera images:** 🟢

**Documented public camera REST endpoint:** 🟡

**Exact camera API endpoint:** 🔴 **not confirmed**

This is precisely the kind of thing we should flag rather than guess.

---

### 20. CTroads camera image provider

CTroads explicitly says:

**Images are provided by CTDOT and Trafficland.** ([CT Roads][4])

That gives us a second source target:

```text
Trafficland
```

#### Status

🟢 **Confirmed as a media provider**

#### Direct Trafficland Connecticut endpoint

🟡 **Not yet extracted**

The correct next technical step would be to inspect an actual CTroads camera page/network request and identify the image URL associated with a real camera ID.

---

### 21. Connecticut public police/fire/EMS radio

Connecticut has a substantial scanner ecosystem.

Current Broadcastify indexing reports:

**163 public-safety audio feeds**

across **9 counties**, plus additional amateur, rail and other feeds. ([Broadcastify][15])

The broader current directory reports:

**174 total feeds**

across Connecticut. ([Broadcastify][16])

The difference is a dynamic-directory timing/category difference, so the database should record observed counts with timestamps.

---

### 22. Connecticut radio by county

Current public-safety indexing includes:

| County     | Public-safety feeds |
| ---------- | ------------------: |
| Fairfield  |                  27 |
| Hartford   |                  42 |
| Litchfield |                  17 |
| Middlesex  |                  16 |
| New Haven  |                  25 |
| New London |                  20 |
| Tolland    |                   6 |
| Windham    |                   7 |
| Statewide  |                   3 |

([Broadcastify][15])

This is an excellent starting directory for the radio-source layer.

---

### 23. Connecticut State Police radio

Broadcastify currently lists a:

**Connecticut State Police**

feed among the top public-safety feeds. ([Broadcastify][15])

Other current feeds combine CSP with local agencies and specific state police troops.

For example, the New Haven County directory includes a feed covering:

* Connecticut State Police
* Norwich PD
* Groton City/Town PD
* Ledyard PD
* Stonington PD
* Coventry PD
* Plainfield PD
* East Lyme PD
* DEEP
* other agencies

([Broadcastify][17])

#### Status

🟢 **PUBLIC RADIO FEEDS CONFIRMED**

---

### 24. Connecticut police radio examples

Current public feeds include:

* Connecticut State Police
* Torrington Police
* Waterbury Police
* Hartford Police
* Norwich Police
* Ansonia Police
* Derby Police
* Seymour Police
* Shelton Police
* Tolland County public safety
* Greater New Haven Police

([Broadcastify][15])

#### Classification

These should initially be categorized:

```text
public_third_party_radio
```

unless a particular feed is separately identified as an agency-provided official feed.

---

### 25. Connecticut fire/EMS radio

Current public feeds include:

* Litchfield County Fire/EMS
* Waterford Police/Fire/EMS
* Hartford Police/Fire/EMS
* Southington Police/Fire
* New Haven Fire
* Milford Fire
* Wallingford Fire
* Waterbury Police/Fire
* South Central Region Fire/EMS
* multiple municipal fire departments

([Broadcastify][15])

#### Status

🟢 **CONFIRMED PUBLIC RADIO SOURCES**

---

### 26. Connecticut ALPR — statewide mapped locations

Current OSM-derived sources disagree somewhat on the count.

One current dataset reports:

**938 ALPR/Flock cameras**

as of August 15, 2026. ([Flock Camera Locations][18])

Another reports:

**928 documented readers**

across 84 Connecticut cities/towns. ([Flock Camera][19])

A separate OSM-derived Atlas currently reports:

**940 camera coordinates**. ([Unsurveilled][20])

FlockScanner's latest statewide map reports:

**1,184 Connecticut cameras**. ([Flock Scanner][21])

#### Why the discrepancy?

These datasets have:

* different extraction dates
* different classification rules
* different vendor filtering
* different handling of camera types

#### Correct conclusion

> Connecticut has roughly **900–1,200 community-documented ALPR locations**, depending on the dataset and snapshot date.

These are **not official statewide government counts**.

---

### 27. Exact upstream ALPR source

The strongest underlying source remains:

**OpenStreetMap**

FlockScanner states that its entire national database originates from OSM.

The records use:

```text
man_made=surveillance
surveillance:type=ALPR
```

with optional:

```text
manufacturer
direction
```

and are licensed under **ODbL**. ([Flock Scanner][22])

#### Status

🟢 **CONFIRMED**

This means our ingestion engine can independently reproduce the Connecticut ALPR location layer from OSM/Overpass rather than relying on a third-party website.

---

### 28. Connecticut ALPR vendor distribution

One current Connecticut OSM-derived dataset reports:

| Vendor              | Mapped cameras |
| ------------------- | -------------: |
| Flock Safety        |            612 |
| Rekor               |            152 |
| Axis Communications |             78 |
| Motorola Solutions  |             12 |
| Genetec             |              7 |
| Dahua               |              6 |
| Hikvision           |              5 |
| Uniview             |              5 |
| other/unknown       |      remainder |

([Flock Camera][19])

Another current Atlas snapshot reports:

* Flock Safety: 624
* Rekor: 152
* Axis: 79
* unspecified: 47
* Motorola: 12
* Genetec: 7
* Dahua: 6
* Hikvision: 5
* Avigilon: 3
* Axon: 3
* Bosch: 1
* Neology: 1

([Unsurveilled][20])

Again, these are **mapped observations**, not official deployment counts.

---

### 29. Connecticut ALPR operators

Current community-mapped data identifies operators including:

* New Haven Police Department
* Southington Police Department
* Fairfield Police Department
* Norwich Police Department
* Milford Police Department
* West Hartford Police Department
* Glastonbury Police Department
* commercial locations such as Lowe's

([Flock Camera][19])

This reinforces an important database rule:

```text
manufacturer ≠ operator
```

and:

```text
operator ≠ owner
```

---

### 30. New Haven ALPR

New Haven is currently the largest documented Connecticut municipal concentration in the sources reviewed.

One current OSM-derived dataset reports:

**128 readers**

inside New Haven. ([Finding Flock][23])

It identifies New Haven as the largest indexed Connecticut city in that dataset.

#### Status

🟢 **Community-mapped location data**

🔴 **Not an official citywide inventory**

---

### 31. Connecticut official ALPR records

This is where Connecticut gets particularly interesting.

The Connecticut Police Officer Standards and Training Council has published an **ALPR Model Policy**.

The policy says ALPR records should include:

* query information
* hit information
* identity of person/agency accessing data
* date/time
* reason for access
* number and location of ALPR cameras
* audit records
* usage reports

([Connecticut.gov][24])

#### This proves that official ALPR inventory records exist.

The policy explicitly says:

> Records shall be maintained on the number and location of all ALPR cameras, including vehicle-mounted camera systems.

([Connecticut.gov][24])

#### Classification

```text
official ALPR camera inventory:
    🟢 CONFIRMED TO EXIST

public statewide downloadable inventory:
    🔴 NOT FOUND

agency-specific records:
    🟡 potentially obtainable
```

---

### 32. Connecticut ALPR retention

The POSTC model policy states:

**ALPR data shall be retained for no more than 30 days**, unless preserved as potential evidence in a criminal, administrative or civil matter. ([Connecticut.gov][24])

This is important source metadata.

Our project should store policy metadata separately from camera-location data:

```text
jurisdiction
policy_effective_date
retention_period
sharing_policy
```

---

### 33. Connecticut ALPR sharing

The model policy addresses sharing of ALPR data outside Connecticut and requires additional conditions. ([Connecticut.gov][24])

This is relevant because a national aggregator cannot assume that a publicly documented camera location means the associated **plate-read database** is publicly accessible.

---

### 34. Connecticut ALPR legislation — current 2026 situation

Connecticut's ALPR rules are actively changing.

The governor announced on **August 7, 2026** that he was asking POSTC to review municipal use of safety cameras and ALPR technology and urged municipalities to pause installation of new equipment while guidance was developed. ([Connecticut.gov][25])

The 2026 legislature also considered:

**HB 5449 — An Act Concerning Automated License Plate Reader Systems.**

The bill would establish significant restrictions beginning October 1, 2026. ([Connecticut General Assembly][26])

#### This means:

Do **not** treat a Connecticut ALPR count from August 2026 as a permanent deployment count.

---

### 35. Connecticut ALPR records and FOI

A Connecticut Freedom of Information Commission decision specifically involved records concerning a municipal police department's use of ALPR technology.

The decision states that the requested records were public records under Connecticut's FOI law. ([Connecticut.gov][27])

This is important.

It establishes a legitimate research path:

```text
Municipal ALPR deployment
        ↓
FOI/public records
        ↓
camera locations
contracts
policies
audit records
possibly usage records
```

#### Status

🟢 **Public-record pathway confirmed**

---

### 36. Connecticut ALPR plate reads

I did **not** find a statewide public API providing live or historical:

```text
plate
timestamp
camera
location
vehicle
```

records.

#### Classification

**Statewide public ALPR read API: 🔴 NOT FOUND**

**Statewide public ALPR read database: 🔴 NOT FOUND**

**Official ALPR records exist: 🟢**

**Agency-specific public-record access: 🟡**

---

### 37. Connecticut automated speed cameras

This is a separate technology and must not be mixed with ALPR.

CTDOT activated its **Know the Zone: Automated Work Zone Speed Control Program** beginning June 1, 2026. ([Connecticut.gov][28])

Initial deployments included:

```text
I-95 Interchange 43 — West Haven
I-95 Interchange 74 — East Lyme
Route 2 — Colchester
```

([Connecticut.gov][28])

During the testing period, CTDOT reports:

**8.4 million+ vehicles detected**

and approximately:

**1.36 million speeding detections**.

([Connecticut.gov][28])

#### Classification

```text
automated speed enforcement:
    🟢 CONFIRMED

ALPR:
    separate technology
```

---

### 38. Connecticut wrong-way cameras

CTDOT also operates **wrong-way detection cameras**.

CTDOT explains that these systems:

* record only when an instance of wrong-way driving occurs
* relay the event to police
* do not provide a continuous livestream
* do not store information unless an event triggers recording

([Connecticut.gov][5])

#### Classification

```text
wrong-way detection:
    🟢 confirmed

continuous public stream:
    🔴 no

event-triggered recording:
    🟢 yes
```

---

### 39. Connecticut traffic-signal cameras

CTDOT distinguishes traffic-signal cameras from traffic CCTV.

Traffic-signal cameras:

* detect vehicles
* help control signal timing
* do not record information

([Connecticut.gov][5])

#### Classification

```text
traffic-signal detection camera:
    🟢 public technology information

public video feed:
    🔴 no

ALPR:
    🔴 not the same technology
```

---

### 40. Connecticut source architecture

The state should be represented like this:

```text
CONNECTICUT
│
├── CTDOT
│   │
│   ├── CTroads
│   │   ├── Traffic Cameras
│   │   ├── Incidents
│   │   ├── Roadwork
│   │   ├── Closures
│   │   ├── Traffic Speeds
│   │   ├── Message Signs
│   │   ├── Alerts
│   │   └── Weather
│   │
│   ├── Wrong-Way Detection
│   ├── Traffic-Signal Detection
│   └── Work-Zone Speed Cameras
│
├── Connecticut State Police
│   └── Public radio ecosystem
│
├── Municipal Police
│   ├── ALPR
│   └── public records
│
└── OpenStreetMap
    └── community-mapped ALPR locations
```

---

### 41. Exact Connecticut machine-readable sources

| Source                       | Exact endpoint                               | Authentication | Status |
| ---------------------------- | -------------------------------------------- | -------------- | ------ |
| CTroads Events               | `http://ctroads.org/api/v2/get/event`        | Developer key  | 🟢     |
| CTroads Message Signs        | `http://ctroads.org/api/v2/get/messagesigns` | Developer key  | 🟢     |
| CTroads Alerts               | `http://ctroads.org/api/v2/get/alerts`       | Developer key  | 🟢     |
| CTroads Event Feeds          | `http://ctroads.org/api/geteventfeeds`       | Developer key  | 🟢     |
| CTroads Cameras              | CTroads `/cctv`                              | Public         | 🟢     |
| CTroads camera API           | Not clearly documented                       | —              | 🟡     |
| CTDOT camera images          | CTroads/Trafficland                          | Public website | 🟢     |
| ALPR locations               | OpenStreetMap                                | Public/ODbL    | 🟢     |
| ALPR official camera records | Municipal/POSTC records                      | FOI / agency   | 🟡     |
| ALPR reads                   | —                                            | —              | 🔴     |

---

### 42. Connecticut master inventory

|  # | Source                                    | Category          | Access                 | Status |
| -: | ----------------------------------------- | ----------------- | ---------------------- | ------ |
|  1 | CTDOT traffic cameras                     | CCTV              | Public                 | 🟢     |
|  2 | CTroads camera directory                  | CCTV              | Public                 | 🟢     |
|  3 | CTDOT camera images                       | Media             | Public                 | 🟢     |
|  4 | Trafficland camera images                 | Media             | Public through CTroads | 🟢     |
|  5 | CTroads Events API                        | Traffic/incident  | Developer key          | 🟢     |
|  6 | CTroads Message Signs API                 | DMS/VMS           | Developer key          | 🟢     |
|  7 | CTroads Alerts API                        | Alerts            | Developer key          | 🟢     |
|  8 | CTroads Event Feeds API                   | Events            | Developer key          | 🟢     |
|  9 | CTroads traffic speeds                    | Traffic           | API/platform           | 🟢     |
| 10 | CTroads weather                           | Weather           | Public platform        | 🟢     |
| 11 | CTDOT Highway Operations Center incidents | Incident          | Public                 | 🟢     |
| 12 | Connecticut State Police radio            | Radio             | Public                 | 🟢     |
| 13 | Municipal police radio                    | Radio             | Public                 | 🟢     |
| 14 | Fire/EMS radio                            | Radio             | Public                 | 🟢     |
| 15 | OSM ALPR                                  | ALPR locations    | ODbL                   | 🟢     |
| 16 | Municipal ALPR records                    | ALPR              | FOI                    | 🟡     |
| 17 | POSTC ALPR records/policies               | ALPR              | Public                 | 🟢     |
| 18 | Work-zone speed cameras                   | Enforcement       | Public system          | 🟢     |
| 19 | Wrong-way detection cameras               | Enforcement       | Government system      | 🟢     |
| 20 | Traffic-signal detection cameras          | Traffic detection | Government system      | 🟢     |
| 21 | Statewide ALPR location database          | ALPR              | —                      | 🔴     |
| 22 | Statewide ALPR read API                   | ALPR              | —                      | 🔴     |
| 23 | Statewide police CAD API                  | CAD               | —                      | 🔴     |

---

### 43. Highest-value Connecticut sources

#### 🥇 CTroads

This is the primary source.

[CTroads](https://ctroads.org/?utm_source=chatgpt.com)

It combines:

```text
CCTV
incidents
closures
roadwork
speeds
message signs
weather
alerts
```

into one state transportation platform. ([CT Roads][13])

---

#### 🥈 CTroads Events API

```text
http://ctroads.org/api/v2/get/event
```

Developer key required.

Provides structured:

* incident location
* roadway
* direction
* severity
* lanes
* timestamps
* event type
* restrictions
* geometry

([CT Roads][8])

This should be a **high-priority ingestion adapter**.

---

#### 🥉 CTroads Message Signs API

```text
http://ctroads.org/api/v2/get/messagesigns
```

Provides exact:

* sign ID
* location
* roadway
* direction
* current message
* timestamp

([CT Roads][10])

---

### 4. CTroads Alerts API

```text
http://ctroads.org/api/v2/get/alerts
```

Provides structured emergency/advisory information. ([CT Roads][11])

---

### 5. Connecticut ALPR / OSM

Approximately **900–1,200 mapped ALPR locations**, depending on snapshot/source.

The underlying source is OSM and is independently reusable under ODbL. ([Flock Scanner][22])

---

### 44. Most important unresolved Connecticut source

#### CTroads camera API

This is the one thing I would **not mark as solved yet**.

We have confirmed:

```text
350+ cameras
       ↓
CTroads
       ↓
public images
       ↓
CTDOT / Trafficland
```

But the currently documented developer API doesn't expose a clearly documented `GetCameras` endpoint.

The general CTroads documentation mentions cameras, but its currently listed API calls do not include one. ([CT Roads][7])

Therefore:

**Camera source = 🟢**

**Camera media = 🟢**

**Machine-readable camera API = 🟡**

**Exact media URLs = 🟡**

That is a **technical extraction target**, not a reason to guess.

---

### 45. Connecticut final classification

| Category                     | Result                   |
| ---------------------------- | ------------------------ |
| Public traffic cameras       | 🟢 **350+**              |
| Live camera images           | 🟢                       |
| Recorded camera video        | 🔴 **No**                |
| Camera API                   | 🟡                       |
| Camera media provider        | 🟢 CTDOT / Trafficland   |
| Traffic incidents            | 🟢                       |
| Roadwork                     | 🟢                       |
| Closures                     | 🟢                       |
| Traffic speeds               | 🟢                       |
| VMS/DMS                      | 🟢                       |
| Alerts                       | 🟢                       |
| Weather information          | 🟢                       |
| Public police radio          | 🟢                       |
| Public fire/EMS radio        | 🟢                       |
| ALPR locations               | 🟢 **~900–1,200 mapped** |
| Official ALPR camera records | 🟢 **exist**             |
| ALPR records via FOI         | 🟡                       |
| Public ALPR read API         | 🔴                       |
| Statewide ALPR database      | 🔴                       |
| Work-zone speed cameras      | 🟢                       |
| Wrong-way detection          | 🟢                       |
| Statewide police CAD API     | 🔴                       |

#### Bottom line

**Connecticut is a good source state, particularly for transportation data.**

The strongest exact sources are:

```text
CTroads Events API
CTroads Message Signs API
CTroads Alerts API
CTroads public CCTV directory
CTDOT / Trafficland camera images
OpenStreetMap ALPR
POSTC ALPR records/policy
Broadcastify Connecticut radio ecosystem
```

The **CTroads camera backend is the one remaining technical discovery target** before we can call the camera ingestion path completely resolved.

**Next state: DELAWARE.**

[1]: https://portal.ct.gov/dot/knowledge-base/articles/faqs/how-do-i-get-real-time-traffic-alerts-and-updates?utm_source=chatgpt.com "How do I get real-time traffic alerts and updates?"
[2]: https://portal.ct.gov/Services/Driving-and-Transportation/Getting-Around/Traffic?utm_source=chatgpt.com "CT.gov: Traffic"
[3]: https://ctroads.org/cctv?filters%5B0%5D%5Bi%5D=1&filters%5B0%5D%5Bs%5D=East+Lyme&filters%5B1%5D%5Bi%5D=2&filters%5B1%5D%5Bs%5D=I-95&length=10&order%5Bdir%5D=asc&order%5Bi%5D=0&start=0&utm_source=chatgpt.com "Connecticut Cameras | View Live Connecticut Cameras | CT Travel Smart"
[4]: https://ctroads.org/region/Eastern?utm_source=chatgpt.com "Connecticut Traffic, Live Traffic Reports & Traffic Map | CT roads"
[5]: https://portal.ct.gov/dot/knowledge-base/articles/faqs/do-any-of-the-ctdot-cameras-record?utm_source=chatgpt.com "Do any of the CTDOT cameras record?"
[6]: https://portal.ct.gov/dot/ctdot-construction-advisories/2026/upgrade-and-installation-of-advanced-traffic-management-systems-in-the-greater-hartford-area?utm_source=chatgpt.com "Upgrade and Installation of Advanced Traffic Management Systems in the Greater Hartford Area"
[7]: https://ctroads.org/developers/help?utm_source=chatgpt.com "API Documentation for CT roads | CT Traffic, Traffic Cams"
[8]: https://ctroads.org/help/endpoint/event?utm_source=chatgpt.com "Connecticut GET Events API Documentation | CT roads"
[9]: https://ctroads.org/developers/help/api/get-api-getevents_key_format?utm_source=chatgpt.com "Connecticut GET api/GetEvents | CT roads"
[10]: https://ctroads.org/help/endpoint/messagesigns?utm_source=chatgpt.com "Connecticut GET Message Signs API Documentation | CT roads"
[11]: https://ctroads.org/help/endpoint/alerts?utm_source=chatgpt.com "Connecticut GET Advisories API Documentation | CT roads"
[12]: https://ctroads.org/developers/help/api/get-api-geteventfeeds_feed_key?utm_source=chatgpt.com "Connecticut GET api/GetEventFeeds | CT roads"
[13]: https://ctroads.org/region/All%20Regions?utm_source=chatgpt.com "Connecticut Traffic, Live Traffic Reports & Traffic Map | CT roads"
[14]: https://ithub.global.ssl.fastly.net/nicglazkov/commutescout/blob/main/docs/state-expansion-audit.md?utm_source=chatgpt.com "commutescout/docs/state-expansion-audit.md at main · nicglazkov/commutescout · GitHub"
[15]: https://status.broadcastify.com/listen/stid/9/publicsafety?utm_source=chatgpt.com "Connecticut Audio Feeds"
[16]: https://status.broadcastify.com/listen/stid/9?utm_source=chatgpt.com "Connecticut Audio Feeds"
[17]: https://status.broadcastify.com/listen/ctid/308/publicsafety?utm_source=chatgpt.com "New Haven County, Connecticut Audio Feeds"
[18]: https://flockcameralocations.com/locations/connecticut?utm_source=chatgpt.com "Flock Camera Locations in Connecticut — Live CT ALPR Map | Flock Camera Locations"
[19]: https://flockcamera.app/locations/connecticut/?utm_source=chatgpt.com "Flock Cameras in Connecticut — 928 ALPR Locations Mapped"
[20]: https://unsurveilled.org/atlas/connecticut/?utm_source=chatgpt.com "Connecticut — known ALPR locations — Unsurveilled"
[21]: https://flockscanner.com/flock-camera-map/?utm_source=chatgpt.com "Flock Camera Map by State (USA) · FlockScanner"
[22]: https://flockscanner.com/flock-camera-database/?utm_source=chatgpt.com "Flock Camera Database & Data Source · FlockScanner"
[23]: https://www.findingflock.com/cameras/connecticut/new-haven?utm_source=chatgpt.com "128 Flock & ALPR Cameras in New Haven, CT"
[24]: https://portal.ct.gov/-/media/post/_files/postc-lpr-model-policy-22426-final.pdf?rev=c151eebcdf604cdebb77e72877ccc7ad&utm_source=chatgpt.com "J. **ALPR Records**"
[25]: https://portal.ct.gov/governor/news/press-releases/2026/08-2026/governor-lamont-calls-for-review-of-safety-cameras?utm_source=chatgpt.com "Governor Lamont Calls for Review of Safety Cameras and Automated License Plate Reader Technology, Urges Municipalities To Pause Installation of Any New Equipment"
[26]: https://prdext3.cga.ct.gov/asp/CGABillStatus/cgabillstatus.asp?bill_num=HB05449&selBillType=Bill&which_year=2026&utm_source=chatgpt.com "C G A - Connecticut General Assembly"
[27]: https://portal.ct.gov/-/media/foi/finaldecisions/2025/nov19/2024-0808.pdf?utm_source=chatgpt.com "STATE OF CONNECTICUT"
[28]: https://portal.ct.gov/dot/ctdot-press-releases/2026/ctdot-to-activate-work-zone-speed-cameras-on-june-1?utm_source=chatgpt.com "CTDOT to Activate Work Zone Speed Cameras on June 1"
