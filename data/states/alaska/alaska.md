---
state: Alaska
usps: AK
slug: alaska
dossier_number: 2
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
  imported_from: project_atlas_state_data/Alaska.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Alaska (AK) - ATLAS State Record

> Dossier **2 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

I went deeper on Alaska than the initial Alabama pass. The major finding is that **Alaska 511 has an unusually well-documented public API**, but it requires a developer key. That means it is a **publicly documented machine-readable source, credential-gated**, rather than an unauthenticated public endpoint.

I am keeping that distinction explicit.

---

### 1. Alaska 511 — statewide camera API

**Organization:** Alaska Department of Transportation & Public Facilities (ADOT&PF)

**System:** Alaska 511

**Status: 🟢 CONFIRMED**

Official API documentation:

[Alaska 511 API documentation](https://511.alaska.gov/developers/doc?utm_source=chatgpt.com)

The official documentation states that the REST API exposes:

* Cameras
* Message signs
* Events
* Alerts
* Road conditions
* Airports
* EV charging stations
* Weather stations
* Bridges
* Temporary work zones
* Wildfire perimeters
* Wildfire incidents

([Alaska 511][1])

This is a particularly valuable discovery because the camera source is **explicitly documented by the state**, rather than inferred by reverse engineering.

---

### 2. Exact camera endpoint

#### Camera inventory

**Exact endpoint:**

`https://511.alaska.gov/api/v2/get/cameras`

Official documentation:

[Alaska 511 GET Cameras API](https://511.alaska.gov/help/endpoint/cameras?utm_source=chatgpt.com)

The endpoint returns all cameras.

Required parameter:

`key`

Optional:

`format=json`

or

`format=xml`

([Alaska 511][2])

#### Authentication

**Developer API key required.**

The state says:

> A registered account is needed before requesting a developer API key.

The API is throttled to **10 calls per 60 seconds**. ([Alaska 511][1])

#### Classification

```text
ALASKA
└── ADOT&PF
    └── Alaska 511
        └── Cameras API
            ├── PUBLICLY DOCUMENTED
            ├── API KEY REQUIRED
            └── JSON / XML
```

**Status: 🟢 CONFIRMED**

---

### 3. Camera API data structure

This is where Alaska becomes especially useful.

The official API documents these camera fields:

| Field        | Available |
| ------------ | --------- |
| Camera ID    | ✅         |
| Source       | ✅         |
| Source ID    | ✅         |
| Roadway      | ✅         |
| Direction    | ✅         |
| Latitude     | ✅         |
| Longitude    | ✅         |
| Location     | ✅         |
| Sort order   | ✅         |
| Camera views | ✅         |

([Alaska 511][2])

The `Views` object contains:

* View ID
* URL
* Status
* Description

The official example includes:

```text
Id: 2
Source: ADOT&PF
SourceId: 01
Roadway: Seward Highway
Direction: North
Latitude: 60.929619
Longitude: -149.346632
Location: Seward Highway @ Bird Point MP 96.3

Views:
    Id: 467
    Url: https://511.alaska.gov/map/Cctv/467
    Status: Enabled
    Description: Both direction
```

([Alaska 511][2])

That's an extremely clean canonical camera inventory.

---

### 4. Alaska 511 camera-view URLs

The camera records don't merely identify a camera.

They expose individual view URLs such as:

`https://511.alaska.gov/map/Cctv/467`

These are actual live camera-view records documented by Alaska 511. ([Alaska 511][2])

Current Alaska 511 pages also expose camera IDs directly.

For example:

`https://511.alaska.gov/tooltip/Cameras/51`

currently identifies:

**Seward Highway @ Divide MP12**

and reports current associated weather information and a last-updated timestamp. 

Another current camera:

`https://511.alaska.gov/tooltip/Cameras/10`

is:

**Parks Highway @ Hawk Lane MP 53.2**

and currently has multiple camera views listed. 

So the system is demonstrably **active in 2026**, not merely a legacy API.

---

### 5. Actual camera imagery

There is a subtle but important issue here.

The official API exposes the **camera view URL**, but the API documentation does **not** expose a direct `.jpg`/`.m3u8` field the way Alabama's ALGO API does.

Therefore:

#### Camera inventory

🟢 **CONFIRMED**

#### Camera-view endpoint

🟢 **CONFIRMED**

#### Direct image/video media endpoint

🟡 **NOT YET CONFIRMED**

I'm not going to infer the media URL from the website.

The current 511 camera pages clearly render camera content, but the underlying media endpoint needs to be extracted separately from the current application/network behavior before we classify it as a direct media source.

---

### 6. Alaska 511 camera coverage

The API identifies the source as:

`ADOT&PF`

and returns roadway/location coordinates statewide. ([Alaska 511][2])

The current public camera system includes cameras on roads such as:

* Seward Highway
* Parks Highway
* Glenn Highway
* Richardson Highway
* other ADOT&PF-maintained routes

For example, current camera records include:

**Seward Highway @ Portage Glacier Road MP 78.9** 

**Seward Highway @ Divide MP12** 

**Parks Highway @ Rex Bridge MP 276** 

**Glenn Highway @ MP 176.6** 

**Richardson Highway @ Sheep Creek MP 18.6** 

This establishes actual statewide deployment rather than merely an API with no active cameras.

---

### 7. Alaska 511 — traffic events API

**Exact endpoint:**

`https://511.alaska.gov/api/v2/get/event`

**Status: 🟢 CONFIRMED**

Official documentation:

[Alaska 511 Events API](https://511.alaska.gov/help/endpoint/event?utm_source=chatgpt.com)

The API returns traffic events and documents fields including:

* ID
* source ID
* organization
* roadway
* direction
* description
* reported timestamp

([Alaska 511][3])

Again:

**API key required.**

#### Classification

`STATE_DOT → TRAFFIC_EVENTS → API`

---

### 8. Alaska 511 — broader traffic-data API

The API documentation confirms the following additional exact resource families:

```text
/v2/get/cameras
/v2/get/event
/v2/get/...
```

with officially documented resources for:

* Cameras
* Message Signs
* Events
* Alerts
* Road Conditions
* Airports
* EV Charging Stations
* Weather Stations
* Bridges
* Temporary Workzones
* Wildfire Perimeters
* Wildfire Incidents

([Alaska 511][1])

I am **not assigning exact endpoint paths to every one yet** merely by extrapolating the naming convention.

The camera and event endpoints above are directly verified.

---

### 9. Alaska 511 — wildfire data

This deserves its own category because it isn't merely traffic information.

The official API documentation explicitly lists:

**Wildfire Perimeters**

and

**Wildfire Incidents**

as API resources. ([Alaska 511][1])

#### Status

🟢 **CONFIRMED DATA SOURCE FAMILY**

#### Access

Developer API key.

#### Exact individual endpoint

🟡 **Not promoted yet** — needs direct endpoint verification.

---

### 10. Alaska 511 — weather stations

The official API explicitly provides:

**Weather Stations**

as a machine-readable resource. ([Alaska 511][1])

This is useful because camera records are also associated with environmental observations in the public interface.

For example, current camera pages report:

* air temperature
* dewpoint
* relative humidity
* wind speed
* wind direction
* surface temperature where available
* last update



#### Classification

`ADOT&PF → 511 → WEATHER / ROAD ENVIRONMENT`

🟢 **CONFIRMED**

---

### 11. Alaska 911 infrastructure GIS

Alaska has another excellent public GIS source.

#### Official service

`https://maps.commerce.alaska.gov/server/rest/services/Hosted/Alaska_911_Systems_and_Communications_Infrastructure_Map/FeatureServer`

**Status: 🟢 CONFIRMED**

The official Alaska service contains:

1. `Public_Safety_Answering_Points`
2. `Call_Routing_911`
3. `Telecommunications_Towers_from_FCC`
4. `Wireless_Coverage_4G_LTE`
5. `Wireless_Coverage_3G_4G`
6. `Wireless_Coverage_3G`
7. `Wireless_Coverage_Analog`
8. `Wireless_Coverage_2G`
9. `State_Trooper_Detachments`

([Alaska Commerce Maps][4])

This is valuable infrastructure data.

---

### 12. Alaska PSAP locations

Layer:

`Public_Safety_Answering_Points`

within the Alaska 911 FeatureServer.

The service is public and queryable through ArcGIS. ([Alaska Commerce Maps][4])

#### Classification

`STATE → 911 → PSAP INVENTORY`

🟢 **CONFIRMED**

This does **not** mean it contains actual 911 calls.

It is infrastructure/location data.

---

### 13. Alaska 911 call-routing infrastructure

Exact layer:

`Call_Routing_911`

**Layer ID:** `1`

Official endpoint:

`https://maps.commerce.alaska.gov/server/rest/services/Hosted/Alaska_911_Systems_and_Communications_Infrastructure_Map/FeatureServer/1`

The layer is a point FeatureServer and supports:

* JSON
* GeoJSON
* PBF
* advanced queries
* statistics

Its display field is:

`psap_name`

([Alaska Commerce Maps][5])

#### Classification

`911 → CALL ROUTING INFRASTRUCTURE`

🟢 **CONFIRMED**

---

### 14. Alaska State Trooper locations

The same statewide 911 infrastructure service contains:

`State_Trooper_Detachments`

Layer 8. ([Alaska Commerce Maps][4])

This is useful for mapping public-safety infrastructure but is **not a live police data feed**.

#### Status

🟢 **CONFIRMED**

---

### 15. Anchorage Police Department — RTCC

Anchorage deserves special attention.

The Anchorage Police Department currently operates a:

**Real Time Crime Center**

APD explicitly describes the RTCC as a human-operated center used to coordinate active calls, generate investigative leads, and locate suspects or missing people. ([Anchorage Police Department][6])

This is important because APD also specifically states:

> APD does not use Flock cameras.

It also states that facial recognition technology was banned by the Anchorage Assembly in 2023. ([Anchorage Police Department][6])

#### Classification

`ANCHORAGE → POLICE → RTCC`

🟢 **CONFIRMED EXISTENCE**

#### Public RTCC camera feed

🔴 **NOT FOUND**

The RTCC should therefore **not** be entered as a public camera-data source.

---

### 16. Anchorage ALPR

APD has a dedicated:

**Automated License Plate Reader Policy**

and an:

**LPR FAQ**

on its public site. ([Anchorage Police Department][6])

So:

`Anchorage APD → ALPR/LPR program`

🟢 **CONFIRMED**

But APD specifically says it **does not use Flock cameras**. ([Anchorage Police Department][6])

#### Public plate-read feed

🔴 **NOT FOUND**

#### Public ALPR camera inventory

🔴 **NOT FOUND**

#### Public LPR policy

🟢 **CONFIRMED**

This is exactly the distinction we're going to maintain.

---

### 17. Anchorage traffic-signal cameras

This turned out to be an important false-positive.

Anchorage has a formal:

**Traffic Signal Camera Use Policy**

The municipality distinguishes between:

* signal detection cameras
* traffic signal cameras capable of recording footage

The policy says signal-detection cameras that do not record are outside the policy. ([Municipality of Anchorage][7])

The city has traffic-signal cameras that can produce footage, but access is restricted to authorized Traffic Engineering personnel, with specified APD access under an October 2025 agreement. ([Municipality of Anchorage][7])

#### Public live feed

🔴 **NOT FOUND**

#### Public camera inventory

🔴 **NOT FOUND**

#### Camera system exists

🟢 **CONFIRMED**

This is **not** a public camera source and therefore doesn't enter the confirmed public-camera dataset.

---

### 18. Anchorage municipal GIS

Anchorage maintains extensive public ArcGIS infrastructure.

The city's public GIS ecosystem includes transportation datasets and other municipal infrastructure. ([ArcGIS Services][8])

I searched the publicly indexed services specifically for traffic-camera layers.

I found an old generic:

`Traffic_Cameras`

FeatureServer:

`https://services8.arcgis.com/vrKxMj6W1o5wlmJi/arcgis/rest/services/Traffic_Cameras/FeatureServer`

but its metadata is **not Alaska-specific** and its extent spans a large multi-state area. ([ArcGIS Services][9])

Therefore:

#### Anchorage-specific ArcGIS CCTV layer

🔴 **NOT CONFIRMED**

I am explicitly **not** adding that service to Alaska's camera inventory.

---

### 19. Alaska ALPR location data — OpenStreetMap

There is a third-party public ALPR location source derived from OpenStreetMap.

The current Alaska-specific index reports **one mapped ALPR/Flock camera** in Alaska as of its August 15, 2026 snapshot. ([Flock Camera Locations][10])

Another independent index currently reports **zero documented Alaska ALPR cameras**. ([Flock Scanner][11])

That discrepancy is actually useful.

It demonstrates why these sources must be treated as:

`COMMUNITY-MAPPED LOWER BOUND`

rather than official inventories.

#### Status

🟢 **PUBLIC ALPR LOCATION DATA**

but:

`THIRD_PARTY / OSM-DERIVED`

#### Actual ALPR reads

🔴 **NO**

The source explicitly says it does not provide access to live plate reads. ([Flock Camera Locations][10])

---

### 20. Alaska DMV vehicle database

Alaska DMV operates:

**AKPLATE**

Official portal:

`https://online.dmv.alaska.gov/DMVAkplate/`

The portal allows approved users to obtain vehicle information after registration and approval. ([DMV Alaska][12])

#### Classification

`STATE DMV → VEHICLE INFORMATION`

#### Public access

🔴 **NO**

It requires approval and authentication.

#### ALPR relevance

It is **not an ALPR source** and should not be confused with one.

---

### 21. Police scanner / radio sources

I searched for Alaska-specific public scanner sources and official agency radio feeds.

Unlike Alabama, I did **not** find a sufficiently strong current official-agency feed that I am comfortable putting into the **CONFIRMED OFFICIAL INTERNET RADIO FEED** category.

There are third-party scanner services covering Alaska, but I am not going to manufacture a list of feeds without verifying the individual feed pages and their current status.

#### Current classification

`ALASKA PUBLIC POLICE/FIRE SCANNER FEEDS`

🟡 **PUBLIC THIRD-PARTY SOURCES EXIST**

#### Official government Internet radio feed

🔴 **NOT CONFIRMED**

That's deliberately conservative.

---

### 22. Alaska 911 — actual calls

This is another important negative finding.

I found the statewide:

`Alaska_911_Systems_and_Communications_Infrastructure_Map`

but it provides **911 infrastructure**, not the individual call records. ([Alaska Commerce Maps][4])

#### Statewide public 911 call/CAD feed

🔴 **NOT FOUND**

#### Public statewide CAD API

🔴 **NOT FOUND**

#### Public statewide 911 infrastructure GIS

🟢 **CONFIRMED**

---

### Alaska — verified source matrix

| Source                           | Type                  | Exact source          | Access            | Status           |
| -------------------------------- | --------------------- | --------------------- | ----------------- | ---------------- |
| Alaska 511 Cameras               | CCTV inventory        | `/api/v2/get/cameras` | API key           | 🟢               |
| Alaska 511 Camera Views          | Camera views          | `/map/Cctv/{id}`      | Public web        | 🟢               |
| Alaska 511 Events                | Traffic events        | `/api/v2/get/event`   | API key           | 🟢               |
| Alaska 511 Alerts                | Alerts                | API documented        | API key           | 🟢 family        |
| Alaska 511 Road Conditions       | Road conditions       | API documented        | API key           | 🟢 family        |
| Alaska 511 Weather               | Weather stations      | API documented        | API key           | 🟢 family        |
| Alaska 511 Wildfire              | Wildfire              | API documented        | API key           | 🟢 family        |
| Alaska 911 GIS                   | 911 infrastructure    | FeatureServer         | Public            | 🟢               |
| Alaska PSAP layer                | 911 infrastructure    | FeatureServer/0       | Public            | 🟢               |
| Alaska Call Routing              | 911 infrastructure    | FeatureServer/1       | Public            | 🟢               |
| Alaska Trooper Detachments       | Police infrastructure | FeatureServer/8       | Public            | 🟢               |
| Anchorage APD RTCC               | Crime center          | Public information    | Public info       | 🟢 existence     |
| Anchorage APD ALPR               | ALPR                  | Policy/FAQ            | Public info       | 🟢 existence     |
| Anchorage ALPR reads             | ALPR                  | —                     | —                 | 🔴 not found     |
| Anchorage traffic-signal cameras | CCTV                  | Municipal system      | Restricted        | 🔴 not public    |
| Alaska ALPR locations            | ALPR locations        | OSM-derived           | Public            | 🟢 third-party   |
| Alaska DMV AKPLATE               | Vehicle database      | DMV portal            | Approval required | 🔴 not public    |
| Alaska police scanner            | Radio                 | Third-party feeds     | Varies            | 🟡               |
| Alaska official police radio     | Radio                 | —                     | —                 | 🔴 not confirmed |
| Statewide 911 CAD                | CAD                   | —                     | —                 | 🔴 not found     |

---

### Most valuable Alaska discoveries

#### 🥇 Alaska 511

This is the big one.

Unlike a lot of states, Alaska **explicitly publishes API documentation** for its traffic system. The camera endpoint is precisely documented, including the schema and example records. ([Alaska 511][2])

The only significant restriction is the developer key.

#### 🥈 Statewide 911 infrastructure

Alaska's Commerce system gives us a genuine statewide ArcGIS source for:

* PSAPs
* 911 call routing
* communications infrastructure
* telecom towers
* wireless coverage
* State Trooper detachments

([Alaska Commerce Maps][4])

#### 🥉 Anchorage RTCC / ALPR

Anchorage is particularly useful as a **negative/constraint case**.

The city confirms an RTCC and LPR program, but also explicitly says APD does **not** use Flock cameras. There is no public plate-read feed discovered so far. ([Anchorage Police Department][6])

#### Important negative finding

I am **not** counting Anchorage's traffic-signal cameras as public surveillance feeds. The municipal policy confirms the cameras exist and can produce footage, but access is restricted. ([Municipality of Anchorage][7])

---

#### Alaska final status

**Public machine-readable sources found:** **multiple**

**Public camera inventory:** 🟢 **CONFIRMED**

**Direct public camera media:** 🟡 **requires deeper endpoint extraction**

**Traffic/event API:** 🟢 **CONFIRMED**

**Statewide 911 infrastructure:** 🟢 **CONFIRMED**

**Public ALPR location data:** 🟢 **third-party only**

**Public ALPR read stream:** 🔴 **not found**

**Official public police-radio Internet feed:** 🔴 **not confirmed**

**Third-party scanner coverage:** 🟡 **exists, individual feeds require verification**

**Restricted government camera systems:** 🟢 **confirmed to exist, excluded from public-source inventory**

**Next state: ARIZONA.**

[1]: https://511.alaska.gov/developers/doc?utm_source=chatgpt.com "Alaska API Documentation | Alaska 511"
[2]: https://511.alaska.gov/help/endpoint/cameras?utm_source=chatgpt.com "Alaska GET Cameras API Documentation | Alaska 511"
[3]: https://511.alaska.gov/help/endpoint/event?utm_source=chatgpt.com "Alaska GET Events API Documentation | Alaska 511"
[4]: https://maps.commerce.alaska.gov/server/rest/services/Hosted/Alaska_911_Systems_and_Communications_Infrastructure_Map/FeatureServer?utm_source=chatgpt.com "Hosted/Alaska_911_Systems_and_Communications_Infrastructure_Map (FeatureServer)"
[5]: https://maps.commerce.alaska.gov/server/rest/services/Hosted/Alaska_911_Systems_and_Communications_Infrastructure_Map/FeatureServer/1?utm_source=chatgpt.com "Layer: Call_Routing_911 (ID: 1)"
[6]: https://www.anchoragepolice.com/safe?utm_source=chatgpt.com "Real Facts, Inside the Real Time Crime Center at the Anchorage Police Department — Anchorage Police Department"
[7]: https://www.muni.org/Departments/traffic/Documents/Traffic_Signal_Camera_Use_Records_Policy_2025-10-14.pdf?utm_source=chatgpt.com "MUNICIPALITY OF ANCHORAGE"
[8]: https://services2.arcgis.com/Ce3DhLRthdwbHlfF/arcgis/rest/services/Road_Service_Areas_Hosted/FeatureServer?utm_source=chatgpt.com "Road_Service_Areas_Hosted (FeatureServer)"
[9]: https://services8.arcgis.com/vrKxMj6W1o5wlmJi/arcgis/rest/services/Traffic_Cameras/FeatureServer?utm_source=chatgpt.com "Traffic_Cameras (FeatureServer)"
[10]: https://flockcameralocations.com/locations/alaska?utm_source=chatgpt.com "Flock Camera Locations in Alaska — Live AK ALPR Map | Flock Camera Locations"
[11]: https://flockscanner.com/flock-camera-map/ak/?utm_source=chatgpt.com "Flock Camera Map: Alaska · FlockScanner"
[12]: https://online.dmv.alaska.gov/DMVAkplate/?utm_source=chatgpt.com "DMV Akplate - Home"
