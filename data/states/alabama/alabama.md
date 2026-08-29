---
state: Alabama
usps: AL
slug: alabama
dossier_number: 1
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
  imported_from: project_atlas_state_data/Alabama.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Alabama (AL) - ATLAS State Record

> Dossier **1 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

### 1. ALDOT / ALGO Traffic — statewide traffic-camera system

#### Organization

**Alabama Department of Transportation (ALDOT)**

#### Public system

**ALGO Traffic**

ALDOT itself confirms that ALGO provides Alabama traffic information and **live traffic camera feeds**. The University of Alabama's Center for Advanced Public Safety says the system provides access to the network of ALDOT cameras, incidents, construction, congestion, message signs, and weather-related road information. ([Alabama Department of Transportation][1])

Official public camera interface:

[ALGO Traffic Cameras](https://www.algotraffic.com/cameras?utm_source=chatgpt.com)

#### Actual machine-readable camera API

**CONFIRMED**

`https://api.algotraffic.com/v3.0/Cameras`

This isn't a guessed endpoint. It is independently documented in a working public data extraction implementation that requests that exact endpoint and parses the returned JSON. ([Forgejo: Beyond coding. We Forge.][2])

The returned camera records include fields including:

```text
id
location
location.latitude
location.longitude
location.city
location.county
displayRouteDesignator
routeDesignator
displayCrossStreet
crossStreet
direction
responsibleRegion
hlsUrl
imageUrl
accessLevel
```

A documented example contains:

```text
id: 1164
latitude: 30.56705
longitude: -88.19211
route: I-10
cross street: Theodore Dawes Rd
direction: East
accessLevel: Public
```

and, critically:

```text
hlsUrl:
https://cdn3.wowza.com/.../playlist.m3u8

imageUrl:
https://api.algotraffic.com/v3/Cameras/1164/snapshot.jpg
```

The extraction code specifically checks that the camera's `accessLevel` is `Public`, that the HLS URL is HTTPS, and that the image URL is HTTPS. ([Forgejo: Beyond coding. We Forge.][2])

#### Direct media

**CONFIRMED**

The Alabama source therefore isn't merely:

`ALDOT → webpage → camera`

It is:

`ALDOT → ALGO API → camera record → HLS playlist + JPEG snapshot`

That is a **high-value source**.

#### HLS

**CONFIRMED**

The documented camera object exposes an `hlsUrl` ending in:

`playlist.m3u8`

The example is hosted through the Wowza CDN. ([Forgejo: Beyond coding. We Forge.][2])

#### Snapshot

**CONFIRMED**

Camera-specific snapshot pattern documented by the extraction implementation:

`https://api.algotraffic.com/v3/Cameras/{camera_id}/snapshot.jpg`

Example:

`https://api.algotraffic.com/v3/Cameras/1164/snapshot.jpg` ([Forgejo: Beyond coding. We Forge.][2])

#### Access

The API records have an explicit `accessLevel`, with the documented public cameras carrying:

`Public`

That is much stronger evidence than simply finding a camera webpage. ([Forgejo: Beyond coding. We Forge.][2])

#### Important current limitation

ALGO has apparently implemented additional camera-playback protections. The current Google Play listing notes that version 3.1.0+ implemented "new digital protection methods on camera playback." ([Google Play][3])

Therefore:

**Camera inventory API:** CONFIRMED
**Public camera metadata:** CONFIRMED
**Public snapshot endpoint:** CONFIRMED
**HLS URL exposure:** CONFIRMED historically/documented
**Whether every current HLS URL remains directly usable without additional authorization:** **REQUIRES CURRENT LIVE VERIFICATION**

I'm deliberately not claiming that last part without testing the current service.

---

### 2. ALGO Traffic — traffic/incident data

This is another important source family.

The public ALGO interface exposes categories including:

* Crash
* Incident
* Road condition
* Roadwork
* Regional event
* Facility
* Weather alerts
* ALDOT messages
* ALEA alerts

The public application currently exposes these as distinct data layers. ([ALGO Traffic][4])

#### Machine-readable API family

The public API namespace is:

`https://api.algotraffic.com/v3.0/`

The camera endpoint is confirmed at:

`https://api.algotraffic.com/v3.0/Cameras`

The existence of the API is also independently recorded as an external data URL associated with ALDOT. ([Wikidata][5])

#### Status

**CONFIRMED API FAMILY**

I am **not yet promoting individual incident endpoints to CONFIRMED** until I can establish their exact current paths rather than infer them from the UI.

That is the level of rigor we're going to use for every state.

---

### 3. ALDOT traffic camera network — official confirmation

ALDOT's own site explicitly directs the public to ALGO for **live traffic camera feeds**. ([Alabama Department of Transportation][1])

ALDOT's 2026 reporting also confirms that new cameras were added to the system, including:

* 11 new cameras on I-565 in Limestone/Madison counties
* existing I-65 cameras in Morgan/Limestone counties
* I-565 and US-31/SR-20 cameras
* US-72/US-43
* SR-20
* SR-133

and says their live feeds are viewable through ALGO. ([ALDOT News Hub][6])

So this is not an abandoned historical dataset.

**Current system:** CONFIRMED ACTIVE

---

### 4. ALDOT GIS infrastructure

ALDOT maintains public ArcGIS infrastructure:

[ALDOT ArcGIS REST Services Directory](https://aldotgisonline.dot.state.al.us/serveronline/rest/services?utm_source=chatgpt.com)

The public directory exposes numerous FeatureServer/MapServer services and supports REST/JSON. ([ALDOT GIS Online][7])

However, after checking the exposed service catalog, I have **not found a clearly named statewide ALDOT CCTV FeatureServer equivalent to California's CCTV layer**.

Therefore:

**ALDOT GIS:** CONFIRMED
**Dedicated statewide CCTV ArcGIS layer:** **NOT YET CONFIRMED**

This is important because we don't want to duplicate the ALGO source and falsely claim there is a GIS camera layer when we haven't found it.

---

### 5. ALDOT traffic-monitoring infrastructure

ALDOT also exposes a public Traffic Data Management GIS application.

[ALDOT Traffic Data GIS](https://aldotgis.dot.state.al.us/TDMPublic/?utm_source=chatgpt.com)

The underlying ArcGIS item identifies itself as `TDMPublic` and covers Alabama traffic-data geography. ([Alabama DOT GIS][8])

This is useful for **traffic measurement infrastructure**, but I am not classifying it as a camera source.

#### Classification

`TRAFFIC_DATA / SENSOR_INFRASTRUCTURE`

**Not CCTV.**

---

### 6. ALDOT cameras — video retention

This is an important piece of metadata.

ALDOT explicitly says its traffic cameras **do not record or store footage**. They are intended for real-time traffic management. ([ALDOT News Hub][9])

So the source should be represented as:

```text
LIVE_CAMERA
    ├── HLS/video
    └── snapshot
        └── no ALDOT historical video archive
```

**Historical footage:** NOT PUBLICLY PROVIDED BY ALDOT

---

### 7. Alabama LPR / ALPR system

This is much more interesting.

Alabama has a statewide legal framework governing **License Plate Recognition (LPR)**.

The Alabama Administrative Code defines an LPR system as fixed/mobile cameras that convert license-plate images into computer-readable information and defines LPR data to include:

* GPS coordinates
* date/time
* photograph
* license plate number

It also establishes a **State LPR Registry** maintained by the ALEA CJIS Division. ([Alabama Administrative Code][10])

#### State registry

**CONFIRMED EXISTENCE**

Alabama maintains:

`State LPR Registry`

under ALEA CJIS.

However:

**PUBLIC MACHINE-READABLE LPR READ DATABASE:** **NOT FOUND**

This distinction is critical.

The law requires agencies to maintain LPR access/dissemination logs and governs retention/sharing. ([Alabama Administrative Code][11])

But I have not found an openly accessible API exposing the individual plate reads.

Therefore I am **not claiming that Alabama provides a public ALPR-read feed**.

---

### 8. Alabama ALPR policies / agency-level data

The state regulations require capturing agencies to publish policies concerning:

* database use
* retention
* sharing
* operator training

([Alabama Administrative Code][12])

This gives us a useful **discovery path**:

`ALEA → LPR Registry → individual capturing agencies → published LPR policies → camera locations / contracts / public records`

But again:

**policy ≠ data feed**

So at this point:

| ALPR source                            | Status                       |
| -------------------------------------- | ---------------------------- |
| Alabama LPR regulatory framework       | **CONFIRMED**                |
| State LPR Registry exists              | **CONFIRMED**                |
| Public individual ALPR reads API       | **NOT FOUND**                |
| Public statewide ALPR camera inventory | **NOT FOUND**                |
| Agency ALPR policies                   | **PUBLIC / AGENCY-SPECIFIC** |
| Flock deployments                      | **CONFIRMED**                |
| Public Flock read database             | **NOT FOUND**                |

---

### 9. Birmingham — Flock / ALPR infrastructure

Birmingham is particularly interesting.

The city's public ArcGIS server contains a Police folder:

`https://gisweb.birminghamal.gov/arcgis/rest/services/Police`

The folder currently exposes:

* `Police/flock_location`
* `Police/real_time_crime_center`

([Birmingham GIS][13])

#### Flock location service

**CONFIRMED PUBLIC SERVICE EXISTS**

`https://gisweb.birminghamal.gov/arcgis/rest/services/Police/flock_location/MapServer`

However, there is an important anomaly.

The service is named `flock_location`, but its current service description says:

> Birmingham Beats & Precincts

and does **not currently expose a normal public layer listing** in the REST directory. ([Birmingham GIS][14])

Therefore:

**Birmingham Flock service endpoint:** CONFIRMED
**Current usable Flock camera-location layer:** **UNVERIFIED**

I will not pretend that the service name alone proves the camera records are presently exposed.

---

### 10. Birmingham — Real-Time Crime Center GIS

Birmingham also publicly exposes:

`Police/real_time_crime_center/MapServer`

([Birmingham GIS][15])

This is extremely relevant to the project because the service is explicitly associated with the city's **Real-Time Crime Center**.

However, the publicly indexed REST information isn't currently giving us a clean camera inventory/data layer.

#### Status

**CONFIRMED PUBLIC GIS SERVICE**

**Public camera records:** UNVERIFIED

This goes into the "investigate deeper" queue rather than the confirmed camera registry.

---

### 11. Montgomery — 911 calls

Montgomery has a much cleaner public source.

#### Official ArcGIS service

`Emergency_911_Calls`

([ArcGIS Services][16])

The service description explicitly says:

> This dataset contains 911 call data received within the City of Montgomery.

It is a public FeatureServer and supports queries.

The data is extracted from **911 Logix**, the web-based analytics service provided by Public Safety Network Americas. ([ArcGIS Services][16])

#### Classification

`CITY → 911 → CALL DATA`

**Status: CONFIRMED**

This is exactly the type of source we're looking for.

---

### 12. Montgomery — GIS infrastructure

Montgomery's official GIS server is publicly exposed:

[City of Montgomery GIS REST Services](https://gis.montgomeryal.gov/server/rest/services?utm_source=chatgpt.com)

The service directory exposes public FeatureServers and MapServers. ([Montgomery GIS][17])

I have **not yet found a dedicated municipal traffic-camera layer** there.

So:

`Montgomery municipal CCTV inventory: NOT FOUND`

but:

`Montgomery 911/CAD-derived data: CONFIRMED`

---

### 13. Alabama police/public-safety radio

This category needs a different classification.

There is a large public scanner ecosystem in Alabama.

The current public index shows roughly **140+ publicly available audio feeds across Alabama**, covering dozens of counties. ([Broadcastify][18])

Examples include:

* Alabama State Troopers — Mobile Post
* Alabama State Police — Birmingham/Decatur/Jasper
* Huntsville Police
* Jefferson County Sheriff
* Hoover/Vestavia Hills Police & Fire
* Mobile-area public safety
* Montgomery County law enforcement
* Dothan Public Safety
* Lee County Public Safety
* Tallapoosa County/Alexander City
* numerous fire/EMS services

([Broadcastify][18])

#### But these are mostly third-party rebroadcasts.

They are **not automatically official government data sources**.

---

### 14. Official Alabama scanner feed

There is at least one particularly important exception.

Broadcastify identifies an **Official Feeds** category for feeds provided directly by public-safety agencies.

Alabama currently has:

#### Hoover Fire Department

Broadcastify describes this as:

> the official live radio feed of the Hoover Fire Department

([Broadcastify][19])

#### Classification

`CITY → FIRE → OFFICIAL PUBLIC RADIO FEED`

**Status: CONFIRMED**

This is substantially different from a random scanner hobbyist feed.

---

### 15. Huntsville / Madison County radio

Current public coverage includes:

* Huntsville Police
* Huntsville/Madison County Public Safety
* Huntsville Fire/Rescue
* Madison Fire/Rescue

The Madison County page confirms a public ingest node using the **Alabama Interoperable Radio System (AIRS)** Huntsville simulcast. ([Broadcastify][20])

However, some agencies are now encrypted.

The current listing explicitly says Madison City Police and Madison County Sheriff are no longer monitored due to encryption. ([Broadcastify][20])

#### Classification

`THIRD_PARTY_RADIO_REBROADCAST`

**Public:** Yes
**Official agency feed:** Not established
**Underlying radio system:** AIRS
**Encryption:** Some agencies/channels

---

### 16. Montgomery County radio

Public sources currently include:

`Montgomery County (AL) Law Enforcement`

and Montgomery County fire/public-safety feeds.

Broadcastify also identifies the underlying ingest infrastructure as the:

`Montgomery Metro Communications Cooperative District (MMCCD) Simulcast`

([Broadcastify][21])

Again:

**Public audio:** CONFIRMED
**Official government feed:** not established
**Third-party rebroadcast:** CONFIRMED

---

### 17. Alabama statewide scanner infrastructure

The underlying radio system is worth recording even though the raw radio itself isn't an Internet API.

The Alabama public-safety ecosystem includes:

**AIRS — Alabama Interoperable Radio System**

Public scanner ingest nodes are currently receiving AIRS traffic in places including Huntsville and Jefferson County. ([Broadcastify][20])

This means the eventual source registry should have two separate records:

```text
ALABAMA
└── AIRS
    ├── RF/TRS infrastructure
    └── PUBLIC INTERNET REBROADCASTS
```

rather than treating Broadcastify as the originating radio system.

---

### 18. Third-party ALPR location data

I also found several current public ALPR-location databases.

One current dataset reports approximately **2,450 documented ALPR locations in Alabama**, including Flock, Motorola, Genetec, Axis, Neology, Avigilon, Rekor and others. ([Flock Camera][22])

Another current dataset maps approximately **2,500 ALPR/Flock locations in Alabama** from OpenStreetMap community data. ([Flock Camera Locations][23])

These are useful, but they are **not official Alabama government datasets**.

#### Classification

`THIRD_PARTY → ALPR LOCATION INDEX`

**Status: CONFIRMED**

#### Important distinction

These databases tell us:

> "An ALPR camera has been documented here."

They do **not** provide:

> "Here is the camera's live plate-read stream."

I will maintain that distinction throughout the project.

---

### 19. Public ALPR audit/search data

There is also a third-party dataset of **released ALPR search/audit records**.

The current service describes itself as containing lawfully obtained released search-audit records with source-batch provenance. ([PlateReaderMap][24])

That is potentially valuable for the project because it is **actual historical ALPR-derived data**, rather than merely camera locations.

But:

**Alabama-specific coverage needs verification before inclusion.**

I'm therefore marking it:

`ALPR AUDIT DATA → LEAD`

not confirmed Alabama source.

---

### Alabama master inventory — current

| Source                       | Category             |     Public | Exact machine source               | Status                                |
| ---------------------------- | -------------------- | ---------: | ---------------------------------- | ------------------------------------- |
| ALGO Traffic                 | Traffic cameras      |        Yes | `api.algotraffic.com/v3.0/Cameras` | 🟢 **CONFIRMED**                      |
| ALGO camera HLS              | Video                |        Yes | `hlsUrl → .m3u8`                   | 🟢 **CONFIRMED**                      |
| ALGO camera snapshots        | Images               |        Yes | `/v3/Cameras/{id}/snapshot.jpg`    | 🟢 **CONFIRMED**                      |
| ALDOT/ALGO camera inventory  | CCTV metadata        |        Yes | API                                | 🟢 **CONFIRMED**                      |
| ALDOT traffic data GIS       | Traffic sensors/data |        Yes | ArcGIS                             | 🟢 **CONFIRMED**                      |
| ALGO incidents               | Incidents            |        Yes | API family                         | 🟡 Endpoint still being verified      |
| ALGO road conditions         | Road data            |        Yes | API family                         | 🟡 Endpoint still being verified      |
| Alabama LPR Registry         | ALPR                 | Government | Registry exists                    | 🟢 **CONFIRMED EXISTENCE**            |
| Alabama public ALPR reads    | ALPR                 |          — | —                                  | 🔴 **NOT FOUND**                      |
| Birmingham Flock GIS service | ALPR locations       |        Yes | ArcGIS                             | 🟡 **SERVICE FOUND; DATA UNVERIFIED** |
| Birmingham RTCC GIS          | Public safety        |        Yes | ArcGIS                             | 🟡 **SERVICE FOUND**                  |
| Montgomery 911               | CAD/911              |        Yes | ArcGIS FeatureServer               | 🟢 **CONFIRMED**                      |
| Hoover Fire                  | Radio                |        Yes | Broadcastify official feed         | 🟢 **OFFICIAL FEED**                  |
| Huntsville Police            | Radio                |        Yes | Broadcastify                       | 🟢 **PUBLIC REBROADCAST**             |
| Montgomery County LE         | Radio                |        Yes | Broadcastify                       | 🟢 **PUBLIC REBROADCAST**             |
| Jefferson County LE          | Radio                |        Yes | Broadcastify                       | 🟢 **PUBLIC REBROADCAST**             |
| Alabama State Police         | Radio                |        Yes | Broadcastify feeds                 | 🟢 **PUBLIC REBROADCAST**             |
| Alabama AIRS                 | Radio system         |         RF | Public ingest nodes                | 🟢 **CONFIRMED SYSTEM**               |
| OSM ALPR locations           | ALPR locations       |        Yes | OSM                                | 🟢 **THIRD-PARTY**                    |
| Flock camera indexes         | ALPR locations       |        Yes | Third-party datasets               | 🟢 **THIRD-PARTY**                    |

#### What I found most important in Alabama

The **highest-value discovery** is unquestionably ALGO.

We have an actual public machine-readable camera API that exposes **coordinates + road location + direction + access level + HLS + snapshots**. That is considerably better than merely having a 511 website. ([Forgejo: Beyond coding. We Forge.][2])

The second major discovery is that Alabama's ALPR situation is **not equivalent to its CCTV situation**. Alabama clearly operates a statewide LPR registry and agencies operate substantial ALPR networks, but I have **not found a public live plate-read API**. Alabama law also imposes specific restrictions around use, sharing and retention of LPR data. ([Alabama Administrative Code][11])

The third is **Birmingham's public GIS infrastructure**, which contains explicit `flock_location` and `real_time_crime_center` services. Those deserve a much deeper investigation before we leave Alabama. ([Birmingham GIS][13])

And for radio, Alabama has a very substantial public ecosystem, including at least one **explicitly official agency feed** and many third-party rebroadcasts. ([Broadcastify][19])

##### Alabama status

**Research pass: substantially complete at the state level, but not yet exhausted at the municipal level.**

I will **not move to Alaska until the Alabama state-level sources are cataloged**, and I will treat Birmingham, Huntsville, Mobile, Montgomery, Tuscaloosa, Hoover, Auburn, Gulf Shores, etc. as separate municipal source investigations within Alabama.

[1]: https://www.aldot.gov/travel.html?utm_source=chatgpt.com "Travel Information"
[2]: https://git.chandlerswift.com/chandlerswift/maps.chandlerswift.com/commit/4f816352b52f4eb98d311f8128ec2b2f9668a379?utm_source=chatgpt.com "Add Alabama DOT cameras · 4f816352b5 - chandlerswift/maps.chandlerswift.com - Forgejo: Beyond coding. We Forge."
[3]: https://play.google.com/store/apps/details?id=edu.ua.caps.aldotAlgoTraffic&utm_source=chatgpt.com "ALGO Traffic - Apps on Google Play"
[4]: https://www.algotraffic.com/?utm_source=chatgpt.com "ALGO Traffic"
[5]: https://www.wikidata.org/wiki/Q872788?utm_source=chatgpt.com "Alabama Department of Transportation - Wikidata"
[6]: https://aldotnews.com/2026/01/24/know-before-you-go-during-winter-storm/?utm_source=chatgpt.com "Know before you go during winter storm - ALDOT News Hub"
[7]: https://aldotgisonline.dot.state.al.us/serveronline/rest/services?utm_source=chatgpt.com "Folder: /"
[8]: https://aldotgis.dot.state.al.us/TDMPublic/?utm_source=chatgpt.com "TDM Public"
[9]: https://www.aldotnews.com/fast-facts/?utm_source=chatgpt.com "FAQ - ALDOT News Hub"
[10]: https://admincode.legislature.state.al.us/administrative-code/265-X-6-.02?utm_source=chatgpt.com "Alabama Administrative Code"
[11]: https://admincode.legislature.state.al.us/administrative-code/265-X-6-.04?utm_source=chatgpt.com "Alabama Administrative Code"
[12]: https://admincode.legislature.state.al.us/administrative-code/265-X-6-.08?utm_source=chatgpt.com "Alabama Administrative Code"
[13]: https://gisweb.birminghamal.gov/arcgis/rest/services/Police "Folder: Police"
[14]: https://gisweb.birminghamal.gov/arcgis/rest/services/Police/flock_location/MapServer "Police/flock_location (MapServer)"
[15]: https://gisweb.birminghamal.gov/arcgis/rest/services/Police/real_time_crime_center/MapServer?f=jsapi&utm_source=chatgpt.com "ArcGIS API for JavaScript: Police/real_time_crime_center"
[16]: https://services7.arcgis.com/xNUwUjOJqYE54USz/ArcGIS/rest/services/Emergency_911_Calls/FeatureServer?utm_source=chatgpt.com "Emergency_911_Calls (FeatureServer)"
[17]: https://gis.montgomeryal.gov/server/rest/services?utm_source=chatgpt.com "Folder: /"
[18]: https://www.broadcastify.com/listen/?stid=1&utm_source=chatgpt.com "Alabama Live Audio Feeds"
[19]: https://status.broadcastify.com/listen/official/?utm_source=chatgpt.com "Official Feeds"
[20]: https://status.broadcastify.com/listen/ctid/45/publicsafety?utm_source=chatgpt.com "Madison County, Alabama Audio Feeds"
[21]: https://status.broadcastify.com/listen/ctid/51/publicsafety?utm_source=chatgpt.com "Montgomery County, Alabama Audio Feeds"
[22]: https://flockcamera.app/locations/alabama/?utm_source=chatgpt.com "Flock Cameras in Alabama — 2,450 ALPR Locations Mapped"
[23]: https://flockcameralocations.com/locations/alabama?utm_source=chatgpt.com "Flock Camera Locations in Alabama — Live AL ALPR Map | Flock Camera Locations"
[24]: https://platereadermap.com/plate-lookup/?utm_source=chatgpt.com "Public ALPR License Plate Search | PlateReaderMap"
