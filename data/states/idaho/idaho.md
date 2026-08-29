---
state: Idaho
usps: ID
slug: idaho
dossier_number: 12
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
  imported_from: project_atlas_state_data/Idaho.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Idaho (ID) - ATLAS State Record

> Dossier **12 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Idaho is a **very strong state for this project**.

Unlike Hawaii, Idaho has an unusually good combination of:

* official statewide 511 API
* official camera API
* official ArcGIS/GeoJSON camera inventory
* camera metadata including make/model and communications
* WZDx
* traffic events
* weather stations
* Waze reports through 511
* official statewide transportation GIS
* documented ALPR deployments
* documented multi-agency ALPR sharing
* public scanner feeds
* official ISP incident map

The biggest limitation is that the **ALPR data itself is not publicly exposed as a live plate-read feed**.

---

### 1. Idaho Transportation Department / Idaho 511

**Organization:** Idaho Transportation Department (ITD)
**System:** Idaho 511
**Category:** Statewide transportation information

Idaho Transportation Department

[Idaho 511](https://511.idaho.gov/?utm_source=chatgpt.com)

**Status: 🟢 CONFIRMED**

Idaho 511 has a documented REST API providing access to most of the data displayed by the public 511 system. ITD explicitly lists:

* road conditions
* restrictions
* cameras
* weather stations
* message signs
* mountain passes
* events
* advisories
* weigh stations
* runaway truck ramps
* rest areas

The API requires a registered developer account/key and is throttled to **10 calls per 60 seconds**. ([Idaho 511][1])

This is one of the strongest transportation sources encountered so far.

---

### 2. Exact Idaho 511 API

The documented API base is:

```text
https://511.idaho.gov/api/v2/
```

The important part for the project is that this isn't inferred from network traffic.

**ITD itself publishes the API documentation.** ([Idaho 511][1])

#### Authentication

```text
key = developer API key
```

The key is required for the documented API calls.

Therefore:

```text
public website:
    🟢

public API:
    🟢

API authentication:
    🔐 developer key required

API source:
    official ITD
```

This should be represented as an **official authenticated public-data source**, not as an inaccessible/private system.

---

### 3. Idaho 511 — camera API

This is the most important Idaho discovery.

#### Exact endpoint

```text
https://511.idaho.gov/api/v2/get/cameras
```

[Idaho 511 camera API documentation](https://511.idaho.gov/help/endpoint/cameras?utm_source=chatgpt.com)

**Status: 🟢 CONFIRMED**

ITD explicitly documents this endpoint as:

> Returns all cameras.

It supports:

```text
format=json
format=xml
```

and requires the developer key. ([Idaho 511][2])

---

### 4. Camera API data model

The official camera API returns:

```text
Id
Source
SourceId
Roadway
Direction
Latitude
Longitude
Location
SortOrder
Views
```

This is excellent for your canonical camera model. ([Idaho 511][2])

#### Canonical mapping

```text
ITD API
    ↓
Id
    → source_camera_id

Source
    → source

SourceId
    → source_native_id

Roadway
    → roadway

Direction
    → direction

Latitude
    → latitude

Longitude
    → longitude

Location
    → location_description

Views
    → camera_views
```

---

### 5. Camera view records

The API's `Views` objects include fields such as:

```text
Id
Url
Status
Description
```

The official example shows a camera view URL such as:

```text
https://511.idaho.gov/map/Cctv/2403
```

with a status field and camera description. ([Idaho 511][2])

This is extremely useful because Idaho doesn't merely publish a list of map coordinates.

It publishes **camera → view relationships**.

---

### 6. Idaho official ArcGIS camera inventory

Idaho is even better than the 511 API alone.

ITD maintains an official ArcGIS open-data service:

```text
IdahoTransportationLayersForOpenData
```

and it contains:

```text
Closed Circuit Television Camera (CCTV)
```

as **Layer 143**. ([Idaho Transportation Department GIS][3])

#### Exact service

```text
https://gis.itd.idaho.gov/arcgisprod/rest/services/ArcGISOnline/IdahoTransportationLayersForOpenData/MapServer/143
```

This is a directly queryable ArcGIS Feature Layer.

---

### 7. Official CCTV layer properties

The CCTV layer is:

```text
Type:
    Feature Layer

Geometry:
    Point

MaxRecordCount:
    10,000

Supported formats:
    JSON
    GeoJSON
```

ITD's description says the CCTV cameras provide **streaming video for monitoring traffic conditions and assisting with incident response activities**. ([Idaho Transportation Department GIS][3])

This is a **Tier-A authoritative camera inventory**.

---

### 8. Exact CCTV fields

This is particularly valuable.

The official ITD layer exposes:

```text
OBJECTID
DISTRICT
LATITUDE
LONGITUDE
SITE_ID
SITE_IP_ADDRESS_PHONE
SITE_POWER_TYPE
SITE_COMMS_TYPE
CAMERA_MAKE
CAMERA_MODEL
Shape
```

([Idaho Transportation Department GIS][3])

That gives the ingestion system significantly more than simple coordinates.

---

### 9. Camera hardware metadata

Idaho's official inventory exposes:

```text
CAMERA_MAKE
CAMERA_MODEL
```

This means the national database can preserve actual hardware provenance.

Recommended structure:

```text
camera
 ├── manufacturer
 ├── model
 ├── communications_type
 ├── power_type
 ├── site_id
 └── district
```

This is **real source data**, not inferred hardware.

---

### 10. Camera communications metadata

The CCTV layer includes:

```text
SITE_COMMS_TYPE
```

and:

```text
SITE_IP_ADDRESS_PHONE
```

The latter is sensitive infrastructure metadata and should be treated carefully.

For the public-data ingestion project, I would preserve:

```text
communications_type
```

but **not automatically expose raw infrastructure contact/IP information in a public UI**.

The existence of the field is nevertheless important for source discovery. ([Idaho Transportation Department GIS][3])

---

### 11. Camera attachments

The CCTV Feature Layer has:

```text
Has Attachments:
    true
```

([Idaho Transportation Department GIS][3])

That means the ArcGIS source may contain associated attachment resources.

This deserves a second-stage source investigation because attachments can sometimes contain:

* camera imagery
* diagrams
* site documentation
* installation photographs
* supporting metadata

Do **not** assume they are live camera frames until individually verified.

---

### 12. Idaho 511 camera source vs ArcGIS source

We now have two authoritative paths:

```text
                    ITD
                     │
          ┌──────────┴──────────┐
          │                     │
      Idaho 511             ITD GIS
          │                     │
    /api/v2/get/cameras       Layer 143
          │                     │
      live service             inventory
          │                     │
          └──────────┬──────────┘
                     │
               canonical camera
```

This is excellent for cross-validation.

---

### 13. Idaho camera coverage

The official ArcGIS CCTV layer has a statewide extent covering Idaho's transportation network. The source metadata identifies it as ITD's CCTV infrastructure, while the 511 API describes itself as returning all cameras. ([Idaho 511][2])

I would therefore classify the source as:

```text
coverage:
    STATEWIDE / ITD NETWORK

inventory:
    official

exact count:
    DO NOT hard-code without querying current layer
```

The database should derive the count dynamically.

---

### 14. Idaho 511 map

[Idaho 511 live map](https://511.idaho.gov/map?utm_source=chatgpt.com)

The public map exposes:

* cameras
* road conditions
* traffic speeds
* closures
* incidents
* roadwork
* special events
* future roadwork
* Waze reports
* message signs
* weather stations
* weather radar
* forecasts
* weather alerts
* restrictions
* weigh stations
* runaway truck ramps
* mountain passes
* border crossings

([Idaho 511][4])

---

### 15. Idaho traffic events API

#### Exact endpoint

```text
https://511.idaho.gov/api/v2/get/event
```

[Idaho 511 event API documentation](https://511.idaho.gov/help/endpoint/event?utm_source=chatgpt.com)

**Status: 🟢**

The API returns:

```text
ID
SourceId
Organization
RoadwayName
DirectionOfTravel
Description
```

and additional event information. ([Idaho 511][5])

---

### 16. Idaho advisories API

#### Exact endpoint

```text
https://511.idaho.gov/api/v2/get/alerts
```

[Idaho 511 advisories API documentation](https://511.idaho.gov/help/endpoint/alerts?utm_source=chatgpt.com)

The API provides:

```text
Id
Message
Notes
StartTime
EndTime
Regions
HighImportance
SendNotification
```

([Idaho 511][6])

---

### 17. Idaho message-sign API

#### Exact endpoint

```text
https://511.idaho.gov/api/v2/get/messagesigns
```

[Idaho 511 message-sign API documentation](https://511.idaho.gov/help/endpoint/messagesigns?utm_source=chatgpt.com)

Returns:

```text
Id
Name
Roadway
DirectionOfTravel
Messages
Latitude
Longitude
LastUpdated
LocationDescription
```

([Idaho 511][7])

This is a very useful ancillary source.

---

### 18. Idaho weather station API

#### Exact endpoint

```text
https://511.idaho.gov/api/v2/get/weatherstations
```

[Idaho 511 weather-station API documentation](https://511.idaho.gov/help/endpoint/weatherstations?utm_source=chatgpt.com)

The API exposes:

```text
Id
Latitude
Longitude
LastUpdated
AirTemperature
WindDirectionGust
WindSpeedGust
SubsurfaceTemperature
IcePercent
Status
CameraSource
CameraSourceId
Name
```

and additional weather fields. ([Idaho 511][8])

---

### 19. Camera ↔ weather-station relationship

This is an especially interesting field.

The weather station API includes:

```text
CameraSource
CameraSourceId
```

([Idaho 511][8])

Therefore Idaho explicitly publishes relationships between weather stations and associated camera sources.

Canonical relationship:

```text
WeatherStation
      │
      └── CameraSourceId
                ↓
             Camera
```

This should become a relationship in the national registry rather than duplicated text.

---

### 20. Idaho Waze reports

The Idaho 511 public map includes:

```text
Waze Reports
 ├── Waze Incidents
 └── Waze Closures
```

([Idaho 511][4])

That means Idaho's official traveler-information interface incorporates Waze-derived reports.

However:

```text
public map:
    🟢

documented Idaho-specific Waze API:
    🔴 not established
```

Do not assume the Waze layer has the same API endpoint as Idaho's own feeds.

---

### 21. Idaho WZDx

The Idaho 511 developer documentation explicitly provides:

```text
https://511.idaho.gov/api/wzdx
```

for Work Zone Data Exchange information. ([Idaho 511][1])

#### Status

🟢 **CONFIRMED**

This should be its own source:

```text
SOURCE_ID:
    ID-ITD-WZDX

type:
    WORK_ZONE_DATA

standard:
    WZDx
```

---

### 22. Idaho ArcGIS ITS master service

ITD also publishes an official:

```text
GDWarehouse/IntelligentTransportationSystems
```

service.

Its metadata describes it as infrastructure information for ITD's ITS system and specifically identifies:

```text
CCTV
DMS
RWIS
```

among its tags. ([GISP Idaho][9])

This provides another authoritative GIS path.

---

### 23. Idaho ITS infrastructure categories

The official ITD open-data map contains:

```text
Bluetooth Detection
CVISN
Highway Advisory Radio
Dynamic Message Sign
Closed Circuit Television Camera
Highway Advisory Radio Beacon
Road Weather Information System
Traffic Signals
```

([Idaho Transportation Department GIS][10])

This is useful because Idaho is publishing a broader **ITS asset registry**, not merely a camera map.

---

### 24. Bluetooth traffic detection

ITD's official layer describes Bluetooth detectors as providing elapsed time between known locations, allowing calculation of:

* travel time
* average travel speed

([Idaho Transportation Department GIS][3])

This is a non-camera surveillance/sensing category.

Canonical type:

```text
TRAFFIC_SENSOR
```

not:

```text
CAMERA
```

---

### 25. Highway Advisory Radio

The official Idaho GIS layer identifies Highway Advisory Radio sites.

The layer includes:

```text
HAR_SITE
ROUTE
MP
FCC_FREQ
LATITUDE
LONGITUDE
SITE_TYPE
TRANSMITTER_LOCATION
```

([Idaho Transportation Department GIS][3])

This is valuable for your **public radio infrastructure** dataset.

It is not police radio, but it is official transportation radio infrastructure.

---

### 26. RWIS

Idaho's official ITS GIS also contains Road Weather Information System stations.

The layer includes environmental sensors such as:

```text
air temperature/humidity
pressure
visibility/rain
wind
snow
road surface
deep base
```

and even camera fields:

```text
CAMERA_1
CAMERA_2
CAMERA_3
```

([Idaho Transportation Department GIS][3])

This is another explicit camera relationship.

---

### 27. Idaho ALPR — Ada County Sheriff

Now we move into law-enforcement surveillance.

**Organization:** Ada County Sheriff's Office

The current **2025 ACSO policy manual** explicitly documents ALPR technology.

The policy says ACSO uses ALPR for:

* stolen vehicles
* wanted vehicles/persons
* stolen plates
* missing persons
* active warrants
* suspect interdiction
* locating suspects
* stolen-property recovery

([Ada County][11])

#### Status

🟢 **CONFIRMED CURRENT AGENCY DEPLOYMENT**

---

### 28. ACSO ALPR data fields

The ACSO policy explicitly states that its ALPR system captures:

```text
license plate images
vehicle images
plate text
date
time
location
```

([Ada County][11])

This is a very useful definition for our canonical ALPR model.

---

### 29. ACSO ALPR is not facial recognition

The policy explicitly says the ALPR system is not used to detect:

```text
facial images
people
gender
race
```

Although those things might inadvertently appear in a camera frame, there is no detection/search function for them. ([Ada County][11])

So:

```text
ALPR:
    🟢

facial recognition:
    separate system
```

Do not conflate the two.

---

### 30. ACSO ALPR retention

This is another exact number.

ACSO says:

```text
ALPR retention:
    60 days
```

After 60 days the data is purged unless it has become evidence, is reasonably expected to become evidence, or is subject to lawful production. ([Ada County][11])

Canonical:

```text
retention_period:
    60 days
```

---

### 31. ACSO ALPR data access

The policy says ALPR data is protected by login/password-controlled systems capable of documenting:

```text
name
date
time
```

of access.

Access is limited to authorized law-enforcement purposes. ([Ada County][11])

Therefore:

```text
public live plate feed:
    🔴

public ALPR database:
    🔴

authorized law-enforcement access:
    🟢
```

---

### 32. ACSO ALPR system platform

The policy identifies:

```text
Axon Administrator(s)
Criminal Investigations Division Lieutenant
Evidence.com
CJIS-compliant digital evidence management
```

in the administration/storage/access process. ([Ada County][11])

This is useful vendor/platform provenance.

---

### 33. Idaho statewide ALPR network

Here is where Idaho becomes particularly interesting.

An official Idaho State Police strategic-plan document states that the **Madison County Sheriff's Office** received several ALPRs, both fixed and portable.

The document says Madison County collaborated with **13 law-enforcement agencies** connected to the ALPR system through:

* dispatch centers
* officer mobile computers
* smartphones

([Idaho State Police][12])

This is a significant regional ALPR network.

---

### 34. Madison County ALPR deployment

The official state document says some of the ALPRs had been operational since **2011** and were used for:

* stolen-vehicle recovery
* apprehending wanted individuals
* attempts to locate
* drug interdiction

It also says Madison County received funding for **two additional ALPR projects in 2020** to expand coverage. ([Idaho State Police][12])

#### Database record

```text
agency:
    Madison County Sheriff's Office

deployment:
    fixed + portable

operational_since:
    2011 or earlier

regional_network:
    13 law-enforcement agencies

additional_projects:
    2 funded in 2020
```

---

### 35. Agencies connected to the Madison County ALPR network

The official source establishes **13 participating law-enforcement agencies**, but the state document I found does not enumerate all 13 names in the relevant section.

Therefore:

```text
network_count:
    13

individual_agencies:
    NOT YET FULLY IDENTIFIED
```

This is a good candidate for later procurement/public-record research.

---

### 36. Boise Police ALPR evidence

Boise has historical budget evidence for an:

```text
Automated license plate recognition system
```

in its city technology initiatives. ([City of Boise][13])

More recent Boise Police documentation also demonstrates operational interaction with ALPR systems across Idaho.

A 2024 Boise Police report states that officers verified that several Idaho agencies had alerts placed in their respective ALPR systems, including:

```text
Caldwell PD
Nampa PD
Meridian PD
Twin Falls PD
```

along with federal agencies. ([City of Boise][14])

This is strong evidence of a multi-agency ALPR environment.

---

### 37. Idaho ALPR network discovered

We can now establish at least:

```text
Ada County Sheriff's Office
Boise Police Department
Madison County Sheriff's Office
Caldwell Police Department
Nampa Police Department
Meridian Police Department
Twin Falls Police Department
```

as agencies with documented ALPR involvement.

However, their exact **current camera counts** are not established by the sources above.

Do not manufacture counts.

---

### 38. Idaho statewide ALPR API

I searched specifically for:

```text
Idaho ALPR API
Idaho statewide ALPR feed
Idaho plate reader API
ISP ALPR feed
Idaho ALPR open data
```

#### Result

```text
official statewide live ALPR API:
    🔴 NOT FOUND

public plate-read database:
    🔴 NOT FOUND

public statewide ALPR inventory:
    🔴 NOT FOUND
```

The evidence instead points toward agency-controlled systems.

---

### 39. Public ALPR location sources

There are community/open mapping projects that can be useful for locating Idaho ALPR hardware.

But they are **secondary sources**.

Recommended classification:

```text
official agency deployment:
    TIER A

state procurement/grant evidence:
    TIER B

community ALPR mapping:
    TIER C
```

They can be used to discover candidate locations and then cross-check them against official records.

---

### 40. Idaho police scanner / public-safety radio

[Broadcastify Idaho public-safety feeds](https://status.broadcastify.com/listen/stid/16/publicsafety?utm_source=chatgpt.com)

Current Broadcastify results show:

```text
23 public-safety audio feeds
16 counties
```

with feeds covering agencies across Idaho. ([Broadcastify][15])

Examples include:

* Nez Perce & Asotin County Sheriff/Fire/EMS
* Kootenai County Fire/EMS
* South Boundary County Public Safety
* Mountain Home Police / Elmore County Sheriff / EMS
* Ada County Area Public Safety
* SIRCOMM Primary Dispatch
* Washington County Sheriff
* Panhandle Public Safety

([Broadcastify][15])

---

### 41. Scanner feed classification

These are **public audio streams**, not official government APIs.

Correct model:

```text
radio transmission
       ↓
scanner receiver
       ↓
independent feed provider
       ↓
Broadcastify
       ↓
public stream
```

Therefore:

```text
public:
    🟢

official:
    🔴

usable as public audio source:
    🟢
```

---

### 42. Idaho State Police Citizen Connect

This is another important discovery.

[Idaho State Police Citizen Connect](https://isp.idaho.gov/about-us/citizen-connect/?utm_source=chatgpt.com)

ISP currently provides an interactive map for:

> recent ISP incidents and cases

The page reports the current application version and says the map was last updated **April 6, 2026**. ([Idaho State Police][16])

#### Status

🟢 **OFFICIAL PUBLIC INCIDENT MAP**

This is not the same thing as a live CAD API.

---

### 43. ISP Citizen Connect classification

```text
agency:
    Idaho State Police

system:
    Citizen Connect

data:
    recent incidents/cases

public:
    🟢

interactive:
    🟢

documented REST API:
    🔴 not established

live CAD:
    🔴 not established
```

This is still a valuable source because it gives us public incident information directly from ISP.

---

### 44. Idaho CAD

I found evidence of CAD data embedded in individual Boise Police records.

For example, a released BPD report references a related CAD complaint number. ([City of Boise][14])

That proves CAD exists operationally.

It does **not** prove:

```text
public CAD API
```

Therefore:

```text
operational CAD:
    🟢

public CAD records:
    🟡

public live statewide CAD:
    🔴
```

---

### 45. Idaho public-record access

Idaho State Police moved public-record requests to **JustFOIA** beginning December 16, 2024. ([Idaho State Police][17])

[Idaho State Police public-record portal](https://idahostatepolice.justfoia.com/publicportal?utm_source=chatgpt.com)

This is useful for the research project because ALPR procurement records, contracts, inventories, policies, and system documentation may be obtainable through formal public-record requests.

This is **a records-discovery mechanism**, not a camera feed.

---

### 46. Idaho traffic camera source hierarchy

```text
TIER A
Idaho 511 REST API
        │
        └── cameras

TIER A
ITD ArcGIS
        │
        └── CCTV Layer 143

TIER A
ITD ITS Feature Services
        │
        ├── CCTV
        ├── DMS
        ├── RWIS
        ├── HAR
        └── Bluetooth

TIER A
Idaho WZDx

TIER A
ISP Citizen Connect

TIER B
Agency ALPR policies
        │
        ├── ACSO
        └── Madison County

TIER C
Broadcastify
        │
        └── public scanner feeds

TIER C
community ALPR maps
```

---

### 47. Exact source registry — Idaho

| Source ID         | Organization           | Source                             | Type             | Status |
| ----------------- | ---------------------- | ---------------------------------- | ---------------- | ------ |
| `ID-ITD-511`      | ITD                    | Idaho 511                          | Transportation   | 🟢     |
| `ID-ITD-511-CAM`  | ITD                    | `/api/v2/get/cameras`              | Camera API       | 🟢     |
| `ID-ITD-CCTV`     | ITD                    | ArcGIS Layer 143                   | Camera inventory | 🟢     |
| `ID-ITD-EVENT`    | ITD                    | `/api/v2/get/event`                | Events           | 🟢     |
| `ID-ITD-ALERT`    | ITD                    | `/api/v2/get/alerts`               | Advisories       | 🟢     |
| `ID-ITD-DMS`      | ITD                    | `/api/v2/get/messagesigns`         | DMS              | 🟢     |
| `ID-ITD-RWIS`     | ITD                    | `/api/v2/get/weatherstations`      | Weather          | 🟢     |
| `ID-ITD-WZDX`     | ITD                    | `/api/wzdx`                        | Work zones       | 🟢     |
| `ID-ITD-ITS`      | ITD                    | Intelligent Transportation Systems | ITS GIS          | 🟢     |
| `ID-ISP-CITIZEN`  | Idaho State Police     | Citizen Connect                    | Incidents        | 🟢     |
| `ID-ACSO-ALPR`    | Ada County Sheriff     | ALPR policy/system                 | ALPR             | 🟢     |
| `ID-MADISON-ALPR` | Madison County Sheriff | ALPR network                       | ALPR             | 🟢     |
| `ID-BOISE-ALPR`   | Boise PD               | ALPR system                        | ALPR             | 🟢     |
| `ID-BROADCASTIFY` | Third party            | Idaho feeds                        | Radio            | 🟢     |

---

### 48. Exact camera source record

```text
SOURCE_ID:
    ID-ITD-CCTV

organization:
    Idaho Transportation Department

program:
    Intelligent Transportation Systems

dataset:
    Closed Circuit Television Camera (CCTV)

transport:
    ArcGIS REST FeatureServer/MapServer

service:
    IdahoTransportationLayersForOpenData

layer:
    143

geometry:
    Point

formats:
    JSON
    GeoJSON

fields:
    OBJECTID
    DISTRICT
    LATITUDE
    LONGITUDE
    SITE_ID
    SITE_IP_ADDRESS_PHONE
    SITE_POWER_TYPE
    SITE_COMMS_TYPE
    CAMERA_MAKE
    CAMERA_MODEL

public:
    true

official:
    true
```

([Idaho Transportation Department GIS][3])

---

### 49. Exact 511 camera source record

```text
SOURCE_ID:
    ID-ITD-511-CAM

organization:
    Idaho Transportation Department

endpoint:
    https://511.idaho.gov/api/v2/get/cameras

method:
    GET

authentication:
    developer key

formats:
    JSON
    XML

returns:
    cameras
    views

fields:
    Id
    Source
    SourceId
    Roadway
    Direction
    Latitude
    Longitude
    Location
    SortOrder
    Views
```

([Idaho 511][2])

---

### 50. Critical discovery — Idaho is an excellent cross-validation state

This is one of the strongest findings so far.

We have:

```text
SOURCE A
ITD 511 API
      ↓
camera identity + views

SOURCE B
ITD ArcGIS
      ↓
camera identity + physical infrastructure

SOURCE C
ITD ITS
      ↓
broader ITS infrastructure

SOURCE D
511 weather API
      ↓
camera relationships
```

That allows the ingestion engine to compare:

```text
511 camera
    ↕
ArcGIS CCTV site
    ↕
ITS infrastructure
    ↕
RWIS camera association
```

instead of trusting one source blindly.

---

### 51. Idaho source-quality ranking

#### 🥇 ITD 511 + ITD ArcGIS

**10/10**

This is exactly the kind of authoritative machine-readable source we want.

---

#### 🥈 ISP Citizen Connect

**8/10**

Official public incident visualization.

---

#### 🥉 ACSO ALPR documentation

**9/10 for deployment evidence**

Excellent policy-level evidence, but no public live data.

---

#### #4 Madison County ALPR network

**9/10 for deployment evidence**

Official state documentation confirms the multi-agency network.

---

#### #5 Broadcastify

**7/10**

Excellent public audio availability, but third-party.

---

### 52. What Idaho does NOT currently give us

I would mark these as unresolved rather than pretending they exist:

```text
🔴 statewide public ALPR plate-read API
🔴 statewide public ALPR historical database
🔴 statewide live police CAD API
🔴 statewide live fire/EMS CAD API
🔴 official statewide police-radio API
```

There is substantial evidence of the underlying systems, but not public machine-readable access.

---

### 53. Idaho final classification

| Category                              | Idaho         |
| ------------------------------------- | ------------- |
| Official statewide traffic camera API | 🟢 **YES**    |
| Camera JSON                           | 🟢            |
| Camera XML                            | 🟢            |
| Official camera GeoJSON               | 🟢            |
| Official ArcGIS CCTV inventory        | 🟢            |
| Camera coordinates                    | 🟢            |
| Camera make/model                     | 🟢            |
| Camera communications metadata        | 🟢            |
| Camera views                          | 🟢            |
| Traffic events API                    | 🟢            |
| Advisories API                        | 🟢            |
| DMS API                               | 🟢            |
| Weather API                           | 🟢            |
| WZDx                                  | 🟢            |
| Waze reports                          | 🟢 public map |
| RWIS                                  | 🟢            |
| Bluetooth detection                   | 🟢            |
| Highway Advisory Radio                | 🟢            |
| Official public incident map          | 🟢            |
| ALPR deployments                      | 🟢            |
| ALPR multi-agency network             | 🟢            |
| Public ALPR reads                     | 🔴            |
| Public ALPR API                       | 🔴            |
| Public statewide CAD                  | 🔴            |
| Public scanner audio                  | 🟢            |
| Public statewide police radio API     | 🔴            |

---

### 54. Idaho bottom line

**Idaho is a major source state for the national database.**

The camera architecture is almost ideal:

```text
                 IDAHO DOT
                     │
          ┌──────────┴──────────┐
          │                     │
      IDAHO 511             ITD GIS
          │                     │
     REST API              ArcGIS REST
          │                     │
     cameras/views         CCTV inventory
          │                     │
          └──────────┬──────────┘
                     │
             CANONICAL CAMERA
```

And the law-enforcement side gives us:

```text
                 IDAHO
                   │
       ┌───────────┴────────────┐
       │                        │
   STATE ISP                LOCAL AGENCIES
       │                        │
Citizen Connect       ┌────────┼────────┐
       │              │        │        │
   incidents        ACSO   Madison   Boise/etc.
                        │
                       ALPR
```

The **most valuable exact sources to preserve immediately** are:

1. `https://511.idaho.gov/api/v2/get/cameras`
2. ITD ArcGIS **Layer 143 — Closed Circuit Television Camera**
3. `https://511.idaho.gov/api/v2/get/event`
4. `https://511.idaho.gov/api/v2/get/alerts`
5. `https://511.idaho.gov/api/v2/get/messagesigns`
6. `https://511.idaho.gov/api/v2/get/weatherstations`
7. `https://511.idaho.gov/api/wzdx`
8. ITD Intelligent Transportation Systems Feature Services
9. ISP Citizen Connect
10. ACSO ALPR policy
11. Madison County ALPR network documentation
12. Idaho public-safety radio feeds

**Idaho is therefore a 🟢 high-priority ingestion state.**

**Next alphabetically: Illinois.**

[1]: https://511.idaho.gov/developers/doc?utm_source=chatgpt.com "Idaho API Documentation | Idaho 511"
[2]: https://511.idaho.gov/help/endpoint/cameras?utm_source=chatgpt.com "Idaho GET Cameras | Idaho 511"
[3]: https://gis.itd.idaho.gov/arcgisprod/rest/services/ArcGISOnline/IdahoTransportationLayersForOpenData/MapServer/layers "All Layers and Tables (ArcGISOnline/IdahoTransportationLayersForOpenData)"
[4]: https://511.idaho.gov/map?utm_source=chatgpt.com "Idaho 511"
[5]: https://511.idaho.gov/help/endpoint/event?utm_source=chatgpt.com "Idaho GET Events | Idaho 511"
[6]: https://511.idaho.gov/help/endpoint/alerts?utm_source=chatgpt.com "Idaho GET Advisories | Idaho 511"
[7]: https://511.idaho.gov/help/endpoint/messagesigns?utm_source=chatgpt.com "Idaho GET Message Signs API Documentation | Idaho 511"
[8]: https://511.idaho.gov/help/endpoint/weatherstations?utm_source=chatgpt.com "Idaho GET Weather Stations | Idaho 511"
[9]: https://gisp.itd.idaho.gov/server/rest/services/GDWarehouse/IntelligentTransportationSystems/FeatureServer/info/iteminfo?utm_source=chatgpt.com "ItemInfo"
[10]: https://gis.itd.idaho.gov/arcgisprod/rest/services/ArcGISOnline/RoadFeatureLayers/MapServer?utm_source=chatgpt.com "ArcGISOnline/RoadFeatureLayers (MapServer)"
[11]: https://adacounty.id.gov/sheriff/wp-content/uploads/sites/2/2025/06/ACSO-Policy-Online-Version-06-01-2025.pdf?utm_source=chatgpt.com "POLICY MANUAL"
[12]: https://isp.idaho.gov/wp-content/uploads/PGR/JAG/FY-2023-Edward-Byrne-Justice-Assistance-Grant-JAG-Strategy.pdf?utm_source=chatgpt.com "Idaho Strategic Plan 2019-2023"
[13]: https://www.cityofboise.org/media/1915/fy2019-annual-budget-book.pdf?utm_source=chatgpt.com "untitled"
[14]: https://www.cityofboise.org/media/21107/final-release.pdf?utm_source=chatgpt.com "Boise Police Department."
[15]: https://status.broadcastify.com/listen/stid/16/publicsafety?utm_source=chatgpt.com "Idaho Audio Feeds"
[16]: https://isp.idaho.gov/about-us/citizen-connect/?utm_source=chatgpt.com "ISP Citizen Connect | Idaho State Police"
[17]: https://isp.idaho.gov/idaho-state-police-announces-transition-to-justfoia-for-public-records-requests/?utm_source=chatgpt.com "Idaho State Police Announces Transition to JustFOIA for Public Records Requests | Idaho State Police"
