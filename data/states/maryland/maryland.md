---
state: Maryland
usps: MD
slug: maryland
dossier_number: 20
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
  imported_from: project_atlas_state_data/Maryland.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Maryland (MD) - ATLAS State Record

> Dossier **20 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Maryland is one of the **highest-value states we've encountered so far** for this project.

Unlike states where we have to hunt for individual camera systems, Maryland exposes a substantial amount of its transportation infrastructure through official machine-readable services.

The major discovery is **CHART**, Maryland's Coordinated Highways Action Response Team. It provides:

* 553+ publicly listed live traffic cameras
* official camera metadata
* public camera URLs
* JSON/XML feeds
* traffic incidents
* closures
* weather stations/RWIS
* speed sensors
* DMS
* travel times
* WZDx
* ArcGIS services

Maryland is also unusually valuable for ALPR research because state law requires annual reporting on ALPR deployments, reads, retention, requests and audits.

The latest 2025 report provides actual deployment numbers.

---

### 1. Maryland Department of Transportation / CHART

**Agency:** Maryland Department of Transportation
**Primary system:** Coordinated Highways Action Response Team

Maryland's official 511 service is CHART Web.

The state describes CHART Web as Maryland's official 511 Traveler Information service. It provides traffic, closures, weather, cameras and other transportation information. ([Maryland 511][1])

#### Registry

```text
SOURCE_ID:
    MD-CHART

OWNER:
    Maryland Department of Transportation
    State Highway Administration

SYSTEM:
    Coordinated Highways Action Response Team

TYPE:
    STATEWIDE_ATMS / 511

STATUS:
    🟢 VERIFIED
```

---

### 2. CHART Live Traffic Cameras

This is the **primary Maryland camera source**.

The official CHART camera page currently reports:

> **553 entries**

and exposes camera names, locations, regions and live camera views. ([Maryland 511][2])

The page contains cameras throughout:

```text
Annapolis
Baltimore
Eastern Shore
Southern Maryland
Washington DC region
Western Maryland
```

The camera inventory includes Interstate, US, MD routes and other roadway locations. ([Maryland 511][2])

#### Registry

```text
SOURCE_ID:
    MD-CHART-CCTV

TYPE:
    TRAFFIC_CCTV

PUBLIC:
    🟢 YES

DOCUMENTED CURRENT INVENTORY:
    553

STATUS:
    🟢 ACTIVE
```

**Important:** 553 is the current web inventory observed on the official page, not a permanent statewide camera count. The database should store it as:

```text
observed_count = 553
observed_at = 2026-08-28
```

rather than hardcoding "Maryland has 553 cameras."

---

### 3. Official CHART camera API/data feed

This is where Maryland becomes extremely valuable.

CHART's official Data Feeds page explicitly provides:

```text
JSON
XML
```

feeds. ([Maryland 511][3])

For cameras, the documentation states that the **Live Traffic Cameras** feed contains:

* camera categories
* CCTV IP/domain
* communication mode
* description
* camera ID
* cached update timestamp
* latitude
* longitude
* milepost
* name
* operational status
* public video URL
* route number
* route prefix
* route suffix

([Maryland 511][3])

#### This is essentially exactly the data model we want.

```text
camera.id
camera.name
camera.description
camera.lat
camera.lon
camera.route
camera.milepost
camera.category
camera.opStatus
camera.publicVideoURL
camera.cctvIp
camera.lastCachedDataUpdateTime
```

#### Registry

```text
SOURCE_ID:
    MD-CHART-CCTV-FEED

FORMAT:
    JSON
    XML

TYPE:
    MACHINE_READABLE_CCTV

STATUS:
    🟢 VERIFIED
```

---

### 4. CHART camera operational status

The official feed documents these states:

```text
OK
COMM_FAILURE
HARDWARE_FAILURE
COMM_MARGINAL
HARDWARE_WARNING
```

([Maryland 511][3])

This is extremely useful.

The national ingestion system should **not delete a camera when it stops working**.

Instead:

```text
camera.status = COMM_FAILURE
```

or:

```text
camera.status = HARDWARE_FAILURE
```

and retain the camera record.

---

### 5. CHART public video URLs

The official feed specifically provides:

```text
publicVideoURL
```

and describes it as the URL for the public to view the camera video. ([Maryland 511][3])

This is a major distinction.

We're not merely getting:

```text
lat/lon
```

We're getting:

```text
camera metadata
+
public playback URL
```

#### Registry

```text
MECHANISM:
    publicVideoURL

ACCESS:
    public

AUTHENTICATION:
    not indicated

STATUS:
    🟢 VERIFIED
```

---

### 6. Maryland ArcGIS camera service

Maryland publishes the same camera inventory through official MD iMAP ArcGIS.

The FeatureServer is:

```text
https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/FeatureServer
```

The service is explicitly described as providing Maryland traffic-camera locations from CHART and URLs to live camera feeds. ([MD Geodata][4])

#### Registry

```text
SOURCE_ID:
    MD-IMAP-TRAFFIC-CAMERAS

TYPE:
    ARCGIS_FEATURESERVER

OWNER:
    MD iMAP / CHART

STATUS:
    🟢 VERIFIED
```

---

### 7. ArcGIS camera layer

The actual layer is:

```text
Traffic Cameras
ID:
    0
```

The official FeatureServer supports:

```text
JSON
GeoJSON
PBF
```

and advanced queries. ([MD Geodata][5])

#### Fields

The layer exposes:

```text
OBJECTID
location
county
feedID
url
iframe
lat
long
SHAPE
```

([MD Geodata][6])

That means Maryland gives us **two independent official machine-readable camera sources**:

```text
CHART feed
     +
MD iMAP ArcGIS
```

This is excellent for cross-validation.

---

### 8. Exact ArcGIS endpoint

```text
https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/FeatureServer/0
```

Official FeatureServer layer. ([MD Geodata][5])

And MapServer:

```text
https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/MapServer/0
```

([MD Geodata][6])

---

### 9. Downloadable camera dataset

Maryland's ArcGIS service also exposes a direct data-download mechanism.

The official download extension identifies:

```text
Traffic Cameras
```

and provides a downloadable ZIP dataset:

```text
TRAN_TrafficCameras_CHART.zip
```

([MD Geodata][7])

#### Registry

```text
SOURCE_ID:
    MD-CHART-CCTV-DOWNLOAD

TYPE:
    BULK_DATASET

FORMAT:
    ZIP

STATUS:
    🟢 VERIFIED
```

This is especially useful for the initial national database bootstrap.

---

### 10. CHART ArcGIS camera service

Maryland also exposes CHART directly through its SHA ArcGIS server:

```text
https://chartimap1.sha.maryland.gov/arcgis/rest/services/CHART/Cameras/MapServer
```

The service contains:

```text
CCTV
```

as layer 0 and supports:

```text
JSON
GeoJSON
PBF
```

with a maximum record count of 2,000. ([Chartimap Maryland][8])

#### Registry

```text
SOURCE_ID:
    MD-CHART-ARCGIS-CCTV

TYPE:
    ARCGIS_MAPSERVER

LAYER:
    CCTV

STATUS:
    🟢 VERIFIED
```

This gives us **three separate official camera representations**:

```text
CHART JSON/XML
       │
       ├── MD iMAP FeatureServer
       │
       └── SHA CHART MapServer
```

That's extremely valuable for validation.

---

### 11. CHART traffic incident feed

The official Data Feeds service provides machine-readable:

```text
Traffic Incidents and Events
```

in:

```text
JSON
XML
```

([Maryland 511][3])

The feed includes:

```text
id
county
lat
lon
description
incidentType
direction
lanes
lane status
source
opCenter
participants
startDateTime
lastCachedDataUpdateTime
vehicles
```

among other fields. ([Maryland 511][3])

#### Registry

```text
SOURCE_ID:
    MD-CHART-INCIDENTS

TYPE:
    TRAFFIC_INCIDENTS

FORMAT:
    JSON/XML

STATUS:
    🟢 VERIFIED
```

---

### 12. Incident source attribution

Maryland's feed actually identifies where incidents originate.

Possible sources include:

```text
Local Police
State Police
CHART Unit
SHA
MDTA
CCTV
Lane Closure Permits
Montgomery County TMC
Media
Citizen
System Alarm
Other
```

([Maryland 511][3])

This is particularly useful for your project's source graph.

Instead of just:

```text
incident
```

we can store:

```text
incident.source = MDTA
```

or:

```text
incident.source = Local Police
```

etc.

---

### 13. CHART road closures

Maryland also publishes:

```text
Active Road Closures
```

through JSON/XML. ([Maryland 511][3])

The feed includes:

```text
closureStartDate
closureStartTime
closureEndDate
closureEndTime
closureDays
county
lat
lon
description
reason
lanesClosed
planned
trackingNumber
```

and other fields. ([Maryland 511][3])

#### Registry

```text
SOURCE_ID:
    MD-CHART-CLOSURES

TYPE:
    ROAD_CLOSURES

FORMAT:
    JSON/XML

STATUS:
    🟢 VERIFIED
```

---

### 14. CHART RWIS / weather stations

Maryland's CHART feed also exposes:

```text
Local Weather Station Data
```

The system uses Environmental Sensor Stations and RWIS/NIRS infrastructure. ([Maryland 511][9])

Data includes:

```text
airTemp
dewPoint
gustSpeed
humidity
visibility
precipitationType
pavementTemp
wind
lat
lon
lastUpdate
```

([Maryland 511][9])

#### Registry

```text
SOURCE_ID:
    MD-CHART-RWIS

TYPE:
    ROAD_WEATHER

FORMAT:
    JSON/XML

STATUS:
    🟢 VERIFIED
```

---

### 15. CHART speed sensors

CHART also publishes:

```text
Speed Sensor Data
```

with machine-readable location and speed information. ([Maryland 511][3])

Fields include:

```text
id
lat
lon
name
description
opStatus
owningOrg
zones[]
```

and zone-level:

```text
speed
direction
bearing
```

([Maryland 511][3])

#### Registry

```text
SOURCE_ID:
    MD-CHART-SPEED

TYPE:
    TRAFFIC_SPEED_SENSOR

STATUS:
    🟢 VERIFIED
```

---

### 16. CHART Dynamic Message Signs

Maryland publishes current DMS data.

The feed provides:

```text
id
lat
lon
name
description
msgHTML
msgMulti
msgPlain
opStatus
commMode
```

([Maryland 511][9])

#### Registry

```text
SOURCE_ID:
    MD-CHART-DMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢 VERIFIED
```

---

### 17. CHART travel-time routes

Maryland also publishes current travel-time route data.

The feed provides:

```text
route
length
speed
travelTimeSecs
trend
updateTime
locations[]
```

([Maryland 511][9])

#### Registry

```text
SOURCE_ID:
    MD-CHART-TRAVEL-TIMES

TYPE:
    TRAVEL_TIME

STATUS:
    🟢 VERIFIED
```

---

### 18. CHART WZDx

The Data Feeds page explicitly provides a:

```text
Work Zone Data Exchange
WZDx
```

feed. ([Maryland 511][9])

#### Registry

```text
SOURCE_ID:
    MD-CHART-WZDX

TYPE:
    WORK_ZONE_DATA

STANDARD:
    WZDx

STATUS:
    🟢 VERIFIED
```

This should eventually be ingested into the national work-zone layer.

---

### 19. CHART snow emergencies

Maryland exposes current and recently lifted snow emergencies.

The feed includes:

```text
countyId
county
name
timeDeclared
timeLifted
exceptions
```

([Maryland 511][9])

#### Registry

```text
SOURCE_ID:
    MD-CHART-SNOW-EMERGENCY

TYPE:
    WEATHER / ROAD STATUS

STATUS:
    🟢 VERIFIED
```

---

### 20. Maryland Transportation Authority

Maryland has a second major camera operator:

**Maryland Transportation Authority (MDTA).**

MDTA maintains its own official traffic-camera page. ([Maryland Transportation Authority][10])

It covers facilities including:

```text
Baltimore Harbor Tunnel
Fort McHenry Tunnel
Francis Scott Key Bridge
John F. Kennedy Memorial Highway
Thomas J. Hatem Memorial Bridge
Intercounty Connector
William Preston Lane Jr. Memorial Bridge
```

The MDTA camera page is therefore a separate source from SHA/CHART.

#### Registry

```text
SOURCE_ID:
    MD-MDTA-CCTV

OWNER:
    Maryland Transportation Authority

TYPE:
    TRANSPORTATION_CCTV

STATUS:
    🟢 VERIFIED
```

---

### 21. MDTA CCTV infrastructure

MDTA's 2025 board materials identify a system-wide CCTV replacement project.

The project covers multiple MDTA facilities and includes:

```text
roadway cameras
tunnel cameras
PTZ cameras
security cameras
fiber communications
```



This confirms that the MDTA camera system is considerably larger than simply the publicly visible traveler-information cameras.

#### Important distinction

```text
PUBLIC TRAFFIC CAMERAS
        ≠
ENTIRE MDTA CCTV INVENTORY
```

We should only count cameras that have been verified as publicly published.

---

### 22. MDTA camera source

```text
SOURCE_ID:
    MD-MDTA-CCTV-PUBLIC

TYPE:
    PUBLIC_TRAFFIC_CAMERA

PUBLIC_ACCESS:
    🟢

MACHINE_READABLE:
    🟡

STATUS:
    🟢 VERIFIED
```

The public webpage is confirmed.

A dedicated machine-readable inventory still needs direct endpoint discovery.

---

### 23. MDTA toll/video plate capture

This is another major surveillance-related source.

MDTA operates electronic toll collection and video tolling systems.

MDTA board material explains that when a vehicle passes a toll facility without an active transponder, the system captures images of **both front and rear license plates** and uses the best image to identify the registered owner. ([FlippingBook][11])

This is not the same thing as a police ALPR network.

It should be classified separately:

```text
SOURCE_ID:
    MD-MDTA-VIDEO-TOLLING

TYPE:
    ELECTRONIC_TOLL_PLATE_CAPTURE

OWNER:
    Maryland Transportation Authority

STATUS:
    🟢 VERIFIED
```

---

### 24. MDTA toll plate data

Maryland's public-record statute explicitly distinguishes electronic toll systems from ordinary ALPR data.

The Maryland Public Information Act restriction for captured ALPR data does **not** apply to electronic toll collection or associated transaction systems operated by or with MDTA. ([Justia Law][12])

Therefore our database should not put MDTA toll capture into the same category as ordinary police ALPR.

Use:

```text
ALPR
```

for law-enforcement plate readers and:

```text
TOLL_PLATE_CAPTURE
```

for tolling systems.

---

### 25. Maryland ALPR law

Maryland has unusually detailed statutory regulation of ALPR.

Maryland Public Safety Article §3-509 defines an ALPR system as fixed or mobile high-speed cameras combined with algorithms that convert plate images into machine-readable data. ([Maryland General Assembly][13])

Captured plate data includes:

```text
GPS coordinates
dates
times
photographs
license plate numbers
other derived data
```

([Maryland General Assembly][13])

#### Registry

```text
SOURCE_ID:
    MD-ALPR-LAW

STATUTE:
    Public Safety §3-509

TYPE:
    LEGAL_FRAMEWORK

STATUS:
    🟢 VERIFIED
```

---

### 26. Maryland ALPR data is not public-record data

Maryland law explicitly says information gathered by an ALPR system is **not subject to disclosure under the Maryland Public Information Act**. ([Maryland General Assembly][13])

This is a critical project rule.

Therefore:

```text
RAW ALPR READS
    🔴 NOT PUBLIC

PLATE NUMBERS
    🔴 NOT PUBLIC

GPS + timestamp + plate
    🔴 NOT PUBLIC
```

But:

```text
SYSTEM EXISTENCE
    🟢 PUBLIC

UNIT COUNTS
    🟢 PUBLIC VIA ANNUAL REPORT

AGENCY
    🟢 PUBLIC

VENDOR
    🟢 OFTEN PUBLIC

POLICY
    🟢 PUBLIC

CONTRACT
    🟢 OFTEN PUBLIC
```

---

### 27. Maryland ALPR annual reporting

This is one of the best state-level surveillance source mechanisms in the country.

Maryland requires an annual report containing:

```text
number of ALPR units
units submitting to MCAC
number of readings
number submitted to MCAC
number retained
requests
releases
out-of-state requests
federal requests
data breaches
audits
```

([Maryland General Assembly][13])

Maryland's State Archives confirms reports are published annually, including 2025, 2024 and earlier years. ([Maryland State Archives][14])

#### Registry

```text
SOURCE_ID:
    MD-ALPR-ANNUAL-REPORT

OWNER:
    Maryland State Police / MCAC

TYPE:
    ALPR_DEPLOYMENT_STATISTICS

STATUS:
    🟢 VERIFIED

UPDATE:
    ANNUAL
```

This is a **gold-mine discovery source**.

---

### 28. 2025 Maryland ALPR report

The 2025 report covers calendar year **2024**.

One section reports:

```text
Montgomery County Police
779 ALPR units

10 ELSAG
769 Axon in-car
```

Only the 10 ELSAG units submit data to MCAC. ([DLS Library][15])

That gives us:

```text
AGENCY:
    Montgomery County Police

TOTAL_ALPR_UNITS:
    779

ELSAG:
    10

AXON:
    769

MCAC_SUBMITTING:
    10
```

This is a perfect example of why the national database needs:

```text
vendor
device_type
network_participation
```

rather than simply `camera_count`.

---

### 29. Montgomery County ALPR reads

The same report states that Montgomery County Police generated:

```text
93,238,025 readings
```

during 2024.

The ELSAG units submitted:

```text
7,709,210 readings
```

to MCAC. ([DLS Library][15])

The department retained:

```text
93,238,025
```

as of December 31, 2024, with reads purged after 365 days under its policy. ([DLS Library][15])

#### Registry

```text
SOURCE_ID:
    MD-MONTGOMERY-COUNTY-ALPR

UNITS:
    779

READS_2024:
    93,238,025

MCAC_READS:
    7,709,210

RETENTION:
    365 days

VENDORS:
    ELSAG
    Axon
```

---

### 30. Maryland Coordination and Analysis Center

The state statute identifies the:

**Maryland Coordination and Analysis Center (MCAC)**

as the central state entity involved in ALPR data.

Law allows qualifying historical ALPR data to be uploaded to a database operated by MCAC. ([Maryland General Assembly][13])

#### Registry

```text
SOURCE_ID:
    MD-MCAC-ALPR

TYPE:
    STATEWIDE_ALPR_INTELLIGENCE

FUNCTION:
    centralized ALPR data repository / requests

PUBLIC_RAW_DATA:
    🔴 NO

STATISTICS:
    🟢 YES

STATUS:
    🟢 VERIFIED
```

---

### 31. Statewide ALPR count

The 2025 reporting system provides agency-level counts and MCAC participation.

One published 2025 report section reports:

```text
368 systems
```

connected/submitting through the Prince George's County Police server arrangement and states that the department stored data for 17 agencies. ([DLS Library][15])

This figure should **not** be interpreted as "Maryland has exactly 368 ALPR cameras."

It is:

```text
368
systems connected to that reporting/server environment
```

The report contains multiple agency-specific counting methodologies.

So our national registry should record:

```text
reported_unit_count
reporting_scope
report_year
agency
source_document
```

rather than collapsing everything into one statewide total.

---

### 32. Prince George's County ALPR

The 2025 report specifically identifies Prince George's County Police as a major ALPR data-holder.

The report states that its system:

```text
stored data for 17 agencies
```

and reported:

```text
137,781,368 reads
```

submitted to MCAC in the PGPD section. ([DLS Library][15])

There are some internally inconsistent numbers across portions of the published reporting, so the raw source document should be retained rather than silently normalizing the figures.

#### Registry

```text
SOURCE_ID:
    MD-PRINCE-GEORGES-PD-ALPR

TYPE:
    LAW_ENFORCEMENT_ALPR

MCAC:
    🟢

MULTI_AGENCY:
    🟢

STATUS:
    🟢 VERIFIED
```

---

### 33. Howard County ALPR

Howard County Police provides an unusually good public description of its system.

The department currently operates:

```text
27 ALPR cameras
```

throughout the county and says it began using ALPR in 2011. ([Howard County][16])

The department explicitly says:

```text
NOT Flock Safety
```

and says the system is agency-managed. ([Howard County][16])

#### Registry

```text
SOURCE_ID:
    MD-HOWARD-PD-ALPR

AGENCY:
    Howard County Police Department

CAMERAS:
    27

VENDOR:
    Axon

FLOCK:
    NO

TYPE:
    FIXED ALPR

STATUS:
    🟢 VERIFIED
```

---

### 34. Howard County ALPR data

HCPD states that the system captures:

```text
license plate image
plate number
vehicle color
make
vehicle type
time
location
```

and does not use facial recognition or live registered-owner lookups. ([Howard County][16])

It retains data for:

```text
≤ 1 year
```

unless preserved for an active investigation or proceeding. ([Howard County][16])

#### Important

This is an excellent example of an ALPR system where:

```text
camera location
+
system metadata
+
policy
```

are public,

while:

```text
individual plate observations
```

are not.

---

### 35. Salisbury Police ALPR

Salisbury currently has a large Flock deployment.

As of August 2026:

```text
~70% deployed
```

with a planned/complete system of:

```text
40 ALPR cameras
40 PTZ cameras
3 mobile camera trailers
```

according to current reporting. ([WBOC][17])

The department says ALPR information is retained for:

```text
30 days
```

and access is limited to authorized Salisbury Police personnel. ([WBOC][17])

#### Registry

```text
SOURCE_ID:
    MD-SALISBURY-PD-FLOCK

AGENCY:
    Salisbury Police Department

VENDOR:
    Flock Safety

ALPR:
    40 planned

PTZ:
    40 planned

MOBILE_TRAILERS:
    3

RETENTION:
    30 days

DEPLOYMENT:
    ~70% as of Aug 2026

STATUS:
    🟢 ACTIVE / DEPLOYING
```

This is a particularly useful hybrid source because Salisbury is deploying:

```text
ALPR
+
PTZ
+
mobile surveillance
```

---

### 36. Maryland Flock ecosystem

Community-mapped data currently identifies approximately:

```text
906
```

Flock/ALPR cameras in Maryland. ([Flock Camera Locations][18])

But this is **not an official statewide inventory**.

The source explicitly states that the map is based on OpenStreetMap community data and may be incomplete. ([Flock Camera Locations][18])

#### Registry

```text
SOURCE_ID:
    MD-ALPR-OSM

TYPE:
    COMMUNITY_DISCOVERY

COUNT:
    906

OBSERVED:
    2026-08-15

CONFIDENCE:
    🟡

USE:
    DISCOVERY / CROSS-CHECK
```

Do **not** use 906 as Maryland's official ALPR count.

---

### 37. Maryland vendor diversity

Maryland is important because ALPR is not synonymous with Flock.

Verified systems include:

```text
ELSAG
Axon
Flock Safety
```

and community mapping identifies additional manufacturers such as:

```text
Leonardo
Rekor
```

in Maryland. ([Flock Camera Locations][19])

#### National database implication

Vendor must be a first-class field:

```text
vendor_id
vendor_name
product
deployment_type
```

---

### 38. Maryland police radio / scanner ecosystem

Maryland currently has approximately:

```text
85 audio feeds
```

on Broadcastify's statewide listing. ([Broadcastify][20])

The dedicated Maryland page reports:

```text
66 public-safety feeds
24 counties
```

in one current directory snapshot, while the broader feed listing shows 85 total Maryland feeds because it includes other radio categories. ([Broadcastify][21])

Therefore:

```text
TOTAL_AUDIO_FEEDS:
    ~85

PUBLIC_SAFETY:
    ~64–66

COUNTIES:
    24–25
```

depending on the directory snapshot and category.

#### Registry

```text
SOURCE_ID:
    MD-BROADCASTIFY

TYPE:
    PUBLIC_SAFETY_AUDIO

STATUS:
    🟢 PUBLIC
```

---

### 39. Maryland scanner geographic coverage

The current Maryland Broadcastify directory covers:

```text
Allegany
Anne Arundel
Baltimore County
Baltimore City
Calvert
Caroline
Carroll
Cecil
Charles
Dorchester
Frederick
Garrett
Harford
Howard
Kent
Montgomery
Prince George's
Queen Anne's
St. Mary's
Somerset
Talbot
Washington
Wicomico
Worcester
```

plus statewide coverage. ([Broadcastify][21])

This is strong statewide coverage.

---

### 40. Frederick County scanner

A current public feed specifically carries:

```text
Frederick County Sheriff
Maryland State Police
Fire
EMS
Highway
```

and identifies Maryland State Police Barrack B. ([Broadcastify][22])

#### Registry

```text
SOURCE_ID:
    MD-FREDERICK-PUBLIC-SAFETY-AUDIO

TYPE:
    PUBLIC_SAFETY_RADIO

COVERAGE:
    Sheriff
    MSP
    Fire
    EMS
    Highway

STATUS:
    🟢 LIVE
```

---

### 41. Baltimore County scanner

The current Baltimore County Municipal Police feed covers all:

```text
10 Baltimore County precincts
```

with the documented police dispatch talkgroups:

```text
9600 Wilkens
9601 Woodlawn
9602 Franklin
9603 Pikesville
9604 Towson
9605 Cockeysville
9606 Parkville
9607 White Marsh
9608 Essex
9609 Northpoint
```

([Broadcastify][23])

#### Registry

```text
SOURCE_ID:
    MD-BALTIMORE-COUNTY-PD-AUDIO

TYPE:
    LAW_ENFORCEMENT_RADIO

PRECINCTS:
    10

STATUS:
    🟢 PUBLIC STREAM
```

---

### 42. Baltimore City radio

The Washington-Baltimore Broadcastify metro directory currently lists:

```text
Baltimore City Fire
Baltimore City Police
Baltimore City Police Central
Baltimore City Police Eastern
Baltimore City Police Northeast
Baltimore City Police Northern
Baltimore City Police Northwest
Baltimore City Police Southeast
Baltimore City Police Southern
Baltimore City Police Southwest
Baltimore City Police Western
```

([Broadcastify][24])

This provides substantial public scanner coverage of Baltimore City.

---

### 43. Maryland CAD

I did **not** establish a statewide publicly accessible CAD API during this pass.

Therefore:

```text
STATEWIDE_PUBLIC_CAD:
    🔴 NOT VERIFIED
```

There are individual local CAD/incident portals, but I am not going to pretend those constitute a statewide Maryland CAD feed.

---

### 44. Maryland statewide transportation architecture

Maryland's transportation graph is unusually clean:

```text
MARYLAND
│
├── MDOT SHA / CHART
│   │
│   ├── CCTV
│   ├── incidents
│   ├── closures
│   ├── RWIS
│   ├── speed sensors
│   ├── DMS
│   ├── travel times
│   ├── WZDx
│   └── snow emergencies
│
└── MDTA
    │
    ├── traffic CCTV
    ├── toll/video cameras
    ├── electronic toll capture
    └── transportation facilities
```

---

### 45. Maryland ALPR architecture

```text
LAW ENFORCEMENT ALPR
│
├── Maryland State Police
│
├── MCAC
│
├── Montgomery County
│   ├── ELSAG
│   └── Axon
│
├── Prince George's County
│   └── multi-agency server
│
├── Howard County
│   └── Axon-managed system
│
├── Salisbury
│   └── Flock
│
└── numerous municipal/county agencies
```

---

### 46. Maryland is NOT just Flock

This is worth emphasizing.

We have verified:

| Vendor           | Maryland evidence                        |
| ---------------- | ---------------------------------------- |
| **Axon**         | Montgomery County / Howard County        |
| **ELSAG**        | Montgomery County fixed/mobile/trailer   |
| **Flock Safety** | Salisbury and numerous local deployments |
| **Leonardo**     | Community-mapped Maryland cameras        |
| **Rekor**        | Community-mapped Maryland cameras        |

The national engine therefore needs a **vendor-neutral ALPR schema**.

---

### 47. Maryland source registry

| Source ID                          | Owner        | Data                 | Type         | Status |
| ---------------------------------- | ------------ | -------------------- | ------------ | ------ |
| `MD-CHART`                         | MDOT SHA     | 511/traffic          | ATMS         | 🟢     |
| `MD-CHART-CCTV`                    | MDOT SHA     | 553+ cameras         | CCTV         | 🟢     |
| `MD-CHART-CCTV-FEED`               | MDOT SHA     | camera JSON/XML      | API          | 🟢     |
| `MD-IMAP-TRAFFIC-CAMERAS`          | MD iMAP      | camera GIS           | ArcGIS       | 🟢     |
| `MD-CHART-ARCGIS-CCTV`             | SHA          | CCTV GIS             | ArcGIS       | 🟢     |
| `MD-CHART-CCTV-DOWNLOAD`           | MD iMAP      | bulk camera dataset  | ZIP          | 🟢     |
| `MD-CHART-INCIDENTS`               | MDOT         | incidents            | JSON/XML     | 🟢     |
| `MD-CHART-CLOSURES`                | MDOT         | closures             | JSON/XML     | 🟢     |
| `MD-CHART-RWIS`                    | MDOT         | weather/RWIS         | JSON/XML     | 🟢     |
| `MD-CHART-SPEED`                   | MDOT         | speeds               | JSON/XML     | 🟢     |
| `MD-CHART-DMS`                     | MDOT         | DMS                  | JSON/XML     | 🟢     |
| `MD-CHART-TRAVEL-TIMES`            | MDOT         | travel times         | JSON/XML     | 🟢     |
| `MD-CHART-WZDX`                    | MDOT         | work zones           | WZDx         | 🟢     |
| `MD-MDTA-CCTV`                     | MDTA         | traffic cameras      | CCTV         | 🟢     |
| `MD-MDTA-VIDEO-TOLLING`            | MDTA         | plate images/tolling | Toll capture | 🟢     |
| `MD-ALPR-LAW`                      | Maryland     | ALPR law             | Legal        | 🟢     |
| `MD-ALPR-ANNUAL-REPORT`            | MSP/MCAC     | statewide statistics | Report       | 🟢     |
| `MD-MCAC-ALPR`                     | MCAC         | ALPR intelligence    | ALPR         | 🟢     |
| `MD-MONTGOMERY-COUNTY-ALPR`        | MCPD         | 779 units            | ALPR         | 🟢     |
| `MD-PRINCE-GEORGES-PD-ALPR`        | PGPD         | ALPR/multi-agency    | ALPR         | 🟢     |
| `MD-HOWARD-PD-ALPR`                | HCPD         | 27 cameras           | ALPR         | 🟢     |
| `MD-SALISBURY-PD-FLOCK`            | Salisbury PD | 40 ALPR planned      | ALPR         | 🟢     |
| `MD-ALPR-OSM`                      | Community    | 906 mapped           | Discovery    | 🟡     |
| `MD-BROADCASTIFY`                  | Third party  | ~85 feeds            | Radio        | 🟢     |
| `MD-BALTIMORE-COUNTY-PD-AUDIO`     | Third party  | 10 precincts         | Radio        | 🟢     |
| `MD-FREDERICK-PUBLIC-SAFETY-AUDIO` | Third party  | police/fire/EMS      | Radio        | 🟢     |

---

### 48. Exact machine-readable sources

#### Primary camera feed

**Official CHART Data Feeds**

[Maryland CHART Data Feeds](https://www.chart.maryland.gov/DataFeeds/GetDataFeeds?utm_source=chatgpt.com)

This is the source I would prioritize for ingestion because the documentation explicitly defines the camera schema. ([Maryland 511][3])

---

#### Camera ArcGIS

[Maryland Traffic Camera FeatureServer](https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/FeatureServer/0?utm_source=chatgpt.com)

Official camera GIS with coordinates and feed URLs. ([MD Geodata][5])

---

#### CHART CCTV ArcGIS

[CHART CCTV MapServer](https://chartimap1.sha.maryland.gov/arcgis/rest/services/CHART/Cameras/MapServer?utm_source=chatgpt.com)

Official SHA CHART CCTV service. ([Chartimap Maryland][8])

---

#### CHART camera browser

[Maryland CHART Live Traffic Cameras](https://www.chart.maryland.gov/TrafficCameras/GetTrafficCameras?utm_source=chatgpt.com)

Current public camera inventory, currently showing 553 entries. ([Maryland 511][2])

---

#### MDTA cameras

[Maryland Transportation Authority Traffic Cameras](https://mdta.maryland.gov/traffic-cameras-by-facility?utm_source=chatgpt.com)

Official MDTA traffic-camera portal. ([Maryland Transportation Authority][10])

---

### 49. Exact ALPR source

The most important ALPR source isn't a camera API.

It is the state's **mandatory annual ALPR report**.

[Maryland State Police mandated reports](https://www.msa.maryland.gov/msa/mdmanual/23dsp/html/dspr.html?utm_source=chatgpt.com)

The page maintains the annual ALPR reports from 2014 through 2025. ([Maryland State Archives][14])

That gives us an official longitudinal ALPR deployment dataset.

---

### 50. Maryland final classification

| Category                            |                  Maryland |
| ----------------------------------- | ------------------------: |
| Official 511                        |                        🟢 |
| Public live traffic cameras         |                        🟢 |
| Current documented camera inventory |                   **553** |
| Camera JSON                         |                        🟢 |
| Camera XML                          |                        🟢 |
| Camera GeoJSON                      |                        🟢 |
| Camera PBF                          |                        🟢 |
| Camera ArcGIS FeatureServer         |                        🟢 |
| Camera bulk download                |                        🟢 |
| Camera public video URLs            |                        🟢 |
| Traffic incidents API               |                        🟢 |
| Road closures API                   |                        🟢 |
| RWIS API                            |                        🟢 |
| Speed sensors                       |                        🟢 |
| DMS                                 |                        🟢 |
| Travel times                        |                        🟢 |
| WZDx                                |                        🟢 |
| MDTA cameras                        |                        🟢 |
| Toll plate capture                  |                        🟢 |
| State ALPR reporting                |                        🟢 |
| MCAC ALPR                           |                        🟢 |
| Raw ALPR reads public               |                        🔴 |
| Howard County ALPR                  |                 🟢 **27** |
| Montgomery County ALPR              | 🟢 **779 reported units** |
| Salisbury Flock                     |    🟢 **40 ALPR planned** |
| Community-mapped ALPR               |                🟡 **906** |
| Public scanner feeds                |                🟢 **~85** |
| Statewide public CAD                |                        🔴 |

### **Maryland rating: 10/10 — EXTREMELY HIGH VALUE**

Maryland is arguably the **best transportation-data state we've catalogued so far**.

The critical discovery is that Maryland doesn't just publish a website showing cameras. It publishes a **documented machine-readable camera feed with coordinates, identifiers, operational state and public video URLs**, while simultaneously exposing the camera inventory through multiple official ArcGIS services. ([Maryland 511][3])

For the national ingestion engine, Maryland should therefore become a reference implementation:

```text
MD
│
├── SOURCE DISCOVERY
│
├── CHART JSON/XML
│       ↓
│   CAMERA REGISTRY
│
├── MD iMAP FeatureServer
│       ↓
│   CROSS-VALIDATION
│
├── CHART ArcGIS
│       ↓
│   CROSS-VALIDATION
│
├── PUBLIC VIDEO URL
│       ↓
│   STREAM RESOLUTION
│
├── MDTA CCTV
│
├── CHART INCIDENTS
├── CHART RWIS
├── CHART SPEED
├── CHART DMS
├── CHART WZDx
│
└── ALPR ANNUAL REPORTS
        ↓
    AGENCY/VENDOR/COUNT
        ↓
    NO RAW PLATE DATA
```

**Maryland is complete for this pass.**

**Next alphabetically: Massachusetts.**

[1]: https://chart.maryland.gov/?utm_source=chatgpt.com "CHART - Coordinated Highways Action Response Team"
[2]: https://www.chart.maryland.gov/TrafficCameras/GetTrafficCameras?utm_source=chatgpt.com "CHART - Live Cameras"
[3]: https://chart.maryland.gov/DataFeeds/GetDataFeeds?utm_source=chatgpt.com "CHART - Data Feeds"
[4]: https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/FeatureServer?utm_source=chatgpt.com "Transportation/MD_TrafficCameras (FeatureServer)"
[5]: https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/FeatureServer/0?utm_source=chatgpt.com "Layer: Traffic Cameras (ID: 0)"
[6]: https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/MapServer/0?utm_source=chatgpt.com "Layer: Traffic Cameras (ID: 0)"
[7]: https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_TrafficCameras/MapServer/exts/MDiMAPDataDownload/customLayers/0?utm_source=chatgpt.com "MDiMAPDataDownload: customLayers: 0"
[8]: https://chartimap1.sha.maryland.gov/arcgis/rest/services/CHART/Cameras/MapServer?utm_source=chatgpt.com "CHART/Cameras (MapServer)"
[9]: https://www.chart.maryland.gov/DataFeeds/GetDataFeeds?utm_source=chatgpt.com "CHART - Data Feeds"
[10]: https://mdta.maryland.gov/traffic-cameras-by-facility?utm_source=chatgpt.com "Traffic Cameras | MDTA"
[11]: https://online.flippingbook.com/view/315259647/16-17/?utm_source=chatgpt.com "MDTA Board Meeting Materials"
[12]: https://law.justia.com/codes/maryland/general-provisions/title-4/subtitle-3/part-ii/section-4-326/?utm_source=chatgpt.com "Maryland General Provisions Code Section 4-326 (2025) - Captured Plate Data :: 2025 Maryland Code :: U.S. Codes and Statutes :: U.S. Law :: Justia"
[13]: https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gps&enactments=false&section=3-509&utm_source=chatgpt.com "Laws - Statute Text"
[14]: https://www.msa.maryland.gov/msa/mdmanual/23dsp/html/dspr.html "State Police, Maryland Department of - Reports (Mandated)"
[15]: https://dlslibrary.state.md.us/publications/Exec/MDSP/PS3-509%28e%29_2025.pdf?utm_source=chatgpt.com "LICENSE PLATE READER (LPR) PROGRAM"
[16]: https://www.howardcountymd.gov/police/automated-license-plate-reader?utm_source=chatgpt.com "Automated License Plate Reader (ALPR) | Howard County"
[17]: https://www.wboc.com/news/salisbury-police-detail-flock-camera-safeguards-as-privacy-questions-continue/article_2fca89d3-6e2c-4f61-9bef-02afedbd13e0.html?utm_source=chatgpt.com "Salisbury police detail Flock camera safeguards as privacy questions continue | Latest News | wboc.com"
[18]: https://flockcameralocations.com/locations/maryland?utm_source=chatgpt.com "Flock Camera Locations in Maryland — Live MD ALPR Map | Flock Camera Locations"
[19]: https://flockcameralocations.com/locations/maryland/baltimore?utm_source=chatgpt.com "Flock Camera Locations in Baltimore, MD — Live Map | Flock Camera Locations"
[20]: https://status.broadcastify.com/listen/?utm_source=chatgpt.com "Browse Audio Feeds"
[21]: https://status.broadcastify.com/listen/stid/24/publicsafety?utm_source=chatgpt.com "Maryland Audio Feeds"
[22]: https://status.broadcastify.com/listen/feed/9809?utm_source=chatgpt.com "Frederick County Sheriff, Fire and EMS, State Police"
[23]: https://status.broadcastify.com/listen/feed/31110?utm_source=chatgpt.com "Baltimore County Municipal Police Departments"
[24]: https://status.broadcastify.com/listen/mid/18?utm_source=chatgpt.com "Washington-Baltimore Metro Audio Feeds"
