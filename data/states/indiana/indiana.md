---
state: Indiana
usps: IN
slug: indiana
dossier_number: 14
research_date: 2026-08-28
research_date_source: stated
spec_status: in-progress
capabilities:
  traffic_cameras: confirmed
  traffic_conditions: confirmed
  weather: researching
  scanners: confirmed
  alpr_flock: researching
  other: confirmed
provenance:
  imported_from: project_atlas_state_data/Indiana.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Indiana (IN) - ATLAS State Record

> Dossier **14 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

Two parts. **Section 1** is the working specification of what ProjectATLAS will actually
ingest from this state - edit it as sources are verified. **Section 2** is the imported
research dossier it derives from - treat that as evidence and leave it as written.

---

## 1. Capability specification

| # | Capability | Status | Primary public source | Machine-readable | Notes |
| --- | --- | --- | --- | --- | --- |
| 1.1 | [Traffic cameras](#11-traffic-cameras) | `confirmed` | INDOT via Castle Rock CARS-Hub | Yes - XML | 746 cameras counted 2026-08-29 from hashed `cctv.xml`. **Licence UNKNOWN.** |
| 1.2 | [Traffic conditions and incidents](#12-traffic-conditions-and-incidents) | `confirmed` | INDOT WZDx + CARS-Hub FEU | Yes - GeoJSON/XML | WZDx is CC0; CARS-Hub FEU licence UNKNOWN. |
| 1.3 | [Weather and road weather](#13-weather-and-road-weather) | `researching` | none established | - | No RWIS layer found via ArcGIS; a CARS-Hub feed is credential-gated, subject unconfirmed. |
| 1.4 | [Scanners and public-safety radio](#14-scanners-and-public-safety-radio) | `confirmed` | FCC ULS (federal, public domain) | Yes - bulk ZIP | Source verified reachable; **no records extracted** (419 MB not downloaded). |
| 1.5 | [ALPR / Flock camera locations](#15-alpr--flock-camera-locations) | `researching` | IIFC + ISP policy documents (in.gov) | No - PDF | Policy confirmed; **zero locations or counts disclosed**. |
| 1.6 | [Other public sources](#16-other-public-sources) | `confirmed` | USGS Water Services + IndianaMap GIS | Yes - RDB / ArcGIS REST | **246** active real-time stream gauges, coordinates + declared accuracy. Public domain. |

Status vocabulary: `unspecified` &middot; `researching` &middot; `none-found` &middot; `confirmed` &middot; `credential-gated` &middot; `blocked` &middot; `excluded` &middot; `live`.

> Every `confirmed` row above is backed by an independently fetched, byte-counted and SHA-256-hashed `SOURCE-RECORD.md` in this state's own class folders. Nothing here was promoted on the strength of §2's own confidence markings - see `data/states/NOTICE.md`.

### 1.1 Traffic cameras

Public DOT/agency CCTV: camera inventory, snapshot URLs, HLS/MJPEG streams.

| Field | Value |
| --- | --- |
| Status | `confirmed` |
| Operator / agency | Indiana DOT (INDOT) |
| Public system | CARS-Hub (`inhub.carsprogram.org`), Castle Rock CARS platform |
| Machine-readable endpoint(s) | `/data/cctv.xml` (schema `/schemas/CCTV.xsd`) |
| Auth model | None for `cctv.xml` - open, unauthenticated. Sibling feeds `feu-m`/`feu-w` return 401; **not** bypassed. |
| Media available | Camera inventory with `still-images` per device. Stream URLs not established by this record. |
| Record count | **746** - counted 2026-08-29 (746 `<inventory-item>`, 746 unique `device-id`) |
| Geographic coverage | Statewide; device names follow INDOT route/mile-marker convention |
| Update cadence | Not established |
| Terms / licence | **UNKNOWN** - no terms/attribution text found. Treat as restrictive per `MacEvil.md` §12. |
| ATLAS adapter | None built |
| Last verified | Payload fetched 2026-08-22; recounted 2026-08-29 |
| Notes | Evidence: [`data/states/indiana/media-streams/indot-cars-hub/SOURCE-RECORD.md`](data/states/indiana/media-streams/indot-cars-hub/SOURCE-RECORD.md). ArcGIS returned no Indiana camera layer, which is the expected result given cameras arrive via CARS - see [`data/states/indiana/media-streams/indot-arcgis-negative/SOURCE-RECORD.md`](data/states/indiana/media-streams/indot-arcgis-negative/SOURCE-RECORD.md). |

### 1.2 Traffic conditions and incidents

Incidents, construction and work zones (WZDx), congestion, DMS, road conditions.

| Field | Value |
| --- | --- |
| Status | `confirmed` |
| Operator / agency | Indiana DOT (INDOT) |
| Public system | 511IN / WZDx feed + CARS-Hub FEU feeds |
| Machine-readable endpoint(s) | `https://in.carsprogram.org/carsapi_v1/api/wzdx`; CARS-Hub `/data/feu-t.xml`, `/data/feu-g.xml`, `/data/waze/cifs.xml` |
| Auth model | None - all unauthenticated |
| Media available | n/a - structured events |
| Record count | 1,411 WZDx `Feature` objects (2026-08-22 fetch) |
| Geographic coverage | Statewide |
| Update cadence | Registry lists 5m for the WZDx feed |
| Terms / licence | WZDx: **CC0 1.0**, declared in-payload. CARS-Hub FEU: **UNKNOWN**. |
| ATLAS adapter | None built |
| Last verified | 2026-08-22 |
| Notes | Evidence: [`data/states/indiana/events/indot-wzdx/SOURCE-RECORD.md`](data/states/indiana/events/indot-wzdx/SOURCE-RECORD.md). Registry/payload version discrepancy (4.1 vs 4.0) unresolved. |

### 1.3 Weather and road weather

RWIS/atmospheric sensors, road-surface conditions, NWS and state weather feeds.

| Field | Value |
| --- | --- |
| Status | `researching` |
| Operator / agency | Not established |
| Public system | Not established |
| Machine-readable endpoint(s) | None verified |
| Auth model | n/a |
| Media available | n/a |
| Record count | n/a |
| Geographic coverage | n/a |
| Update cadence | n/a |
| Terms / licence | n/a |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 (negative) |
| Notes | ArcGIS discovery returned no Indiana RWIS/road-weather service ([`data/states/indiana/media-streams/indot-arcgis-negative/SOURCE-RECORD.md`](data/states/indiana/media-streams/indot-arcgis-negative/SOURCE-RECORD.md)). CARS-Hub `/data/feu-w.xml` returns 401; its subject is **not** confirmed to be weather and was not assumed - credentials tracked at Issue #1. `gisdata.in.gov` was not enumerated. |

### 1.4 Scanners and public-safety radio

Statewide radio system, Broadcastify/RadioReference feeds, public CAD/dispatch.

| Field | Value |
| --- | --- |
| Status | `confirmed` |
| Operator / agency | Federal Communications Commission (FCC) |
| Public system | Universal Licensing System (ULS) bulk download |
| Machine-readable endpoint(s) | `https://data.fcc.gov/download/pub/uls/complete/` - `l_LMpriv.zip` (Land Mobile Private) is the public-safety archive |
| Auth model | None. `robots.txt` read first; disallows only `PiplBot`. License View API is unusable (301 -> `www.fcc.gov` -> 403 WAF); **no UA spoofing attempted**. |
| Media available | n/a - licence records, not media. Scanner *audio* is a separate, unresolved question. |
| Record count | **Not established.** 419,411,523-byte archive deliberately not downloaded; verified by `HEAD` + 4-byte range (`PK`) only. |
| Geographic coverage | National, includes this state - but no per-state extraction performed |
| Update cadence | Archive `Last-Modified` 2026-08-23; FCC publishes daily/weekly transaction files |
| Terms / licence | US federal government work - **public domain** |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`sources/fcc-uls/SOURCE-RECORD.md`](sources/fcc-uls/SOURCE-RECORD.md). National source, filed under `sources/` like other federal sources. **Broadcastify and RadioReference were deliberately not fetched** - commercial ToS, not official channels - despite being cited heavily in §2. |

### 1.5 ALPR / Flock camera locations

Camera **locations only** - never their read data. Transparency portals, registries, policy records.

| Field | Value |
| --- | --- |
| Status | `researching` |
| Operator / agency | Indiana Intelligence Fusion Center (IIFC); Indiana State Police (ISP) |
| Public system | Published policy documents on `in.gov` - no registry or portal |
| Machine-readable endpoint(s) | **None.** Three PDFs, fetched and text-extracted. |
| Auth model | None. `robots.txt` read first; `/iifc/files/` and `/isp/files/` both permitted. |
| Media available | n/a - governance documents only. **Never plate reads.** |
| Record count | **0 locations, 0 counts.** 19+17+2 pages parsed; no lat/long, no deployment location, no device count. ArcGIS catalog search returned 0 matches. |
| Geographic coverage | n/a - nothing geolocated to record |
| Update cadence | Static documents (2019, 2022) |
| Terms / licence | **UNKNOWN** - not stated; treat as restrictive per `MacEvil.md` §12 |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`data/states/indiana/documents-static-datasets/indiana-alpr-policy/SOURCE-RECORD.md`](data/states/indiana/documents-static-datasets/indiana-alpr-policy/SOURCE-RECORD.md). Indiana operates ALPR under written policy but publishes **no locations** - so §4's `JURISDICTION_ONLY` fallback has nothing to attach to, and no coordinate was invented. No crowdsourced source used; §4 excludes them and §2 cites several. Passive-only: no outreach made or suggested. |

### 1.6 Other public sources

Park/NPS/BLM webcams, transit, ports, aviation, municipal open data, anything else.

| Field | Value |
| --- | --- |
| Status | `confirmed` |
| Operator / agency | U.S. Geological Survey (federal); State of Indiana / IndianaMap (state GIS) |
| Public system | USGS Water Services (NWIS); `gisdata.in.gov` ArcGIS Server 11.5 |
| Machine-readable endpoint(s) | `https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=in&siteType=ST&hasDataTypeCd=iv&siteStatus=active`; `https://gisdata.in.gov/server/rest/services?f=json` |
| Auth model | None for either. `robots.txt` checked first on both hosts; neither declares directives. |
| Media available | n/a - structured records and a service catalog |
| Record count | **246** active real-time stream-gauge sites (parsed from the hashed RDB). IndianaMap: 11 folders, 72 root services advertised. |
| Geographic coverage | Statewide. Every gauge row carries lat/long with a stated datum (NAD83) and a publisher-declared accuracy code. |
| Update cadence | USGS activates/retires sites continuously; the count is as-of 2026-08-29 |
| Terms / licence | USGS: **public domain** (US federal work). IndianaMap: **UNKNOWN** - per-service `licenseInfo` not inspected; treat as restrictive. |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`data/states/indiana/sensor-observations/usgs-water-services/SOURCE-RECORD.md`](data/states/indiana/sensor-observations/usgs-water-services/SOURCE-RECORD.md) and [`data/states/indiana/documents-static-datasets/indianamap-catalog/SOURCE-RECORD.md`](data/states/indiana/documents-static-datasets/indianamap-catalog/SOURCE-RECORD.md). Gauge evidence sits in `sensor-observations/` while answering this subject row - the class and subject axes are orthogonal by design. Query is **streams only**; groundwater, lake and atmospheric sites were excluded and are not in the 246. IndianaMap enumeration closed a §9 open item and returned **zero** camera/CCTV/webcam/traffic tokens, corroborating that Indiana's cameras come via CARS. |

---
## 2. Source discovery dossier (imported research)

Indiana is a **very high-value state** for this project. It is particularly important because we can establish several **actual machine-readable government endpoints**, not merely websites that display information.

The biggest discovery is the **Indiana CARS-Hub**, which is considerably better than treating 511IN as just a web map.

---

### 1. Indiana Department of Transportation — CARS-Hub

**Agency:** Indiana Department of Transportation (INDOT)
**System:** CARS-Hub
**Primary endpoint:**

[Indiana CARS-Hub](http://inhub.carsprogram.org/index.jsf?utm_source=chatgpt.com)

**Status: 🟢 CONFIRMED — OFFICIAL**

The live CARS-Hub page explicitly identifies itself as:

> CARS-Hub
> This service is provided by the Indiana Department of Transportation.

It exposes the following documents directly:

```text
FEU-t
FEU-g
FEU-m
FEU-w

FEU-t indexed
FEU-g indexed
FEU-i indexed
FEU-m indexed
FEU-w indexed

CCTV

Waze CIFS Feed
```

([CARS-Hub][1])

This is one of the most important sources in the entire national project.

---

### 2. Exact CARS-Hub source map

The current official index gives us:

| Source        | Exact public resource | Classification       |
| ------------- | --------------------- | -------------------- |
| FEU-t         | `/data/feu-t.xml`     | Traffic/event        |
| FEU-g         | `/data/feu-g.xml`     | Geographic/event     |
| FEU-m         | `/data/feu-m.xml`     | Message/event        |
| FEU-w         | `/data/feu-w.xml`     | Weather              |
| FEU-t indexed | `/data/feu-t/index`   | Indexed event        |
| FEU-g indexed | `/data/feu-g/index`   | Indexed event        |
| FEU-i indexed | `/data/feu-i/index`   | Incident/event       |
| FEU-m indexed | `/data/feu-m/index`   | Indexed event        |
| FEU-w indexed | `/data/feu-w/index`   | Indexed weather      |
| **CCTV**      | `/data/cctv.xml`      | **Camera inventory** |
| Waze CIFS     | `/data/waze/cifs.xml` | Incident/event       |

The official page also publishes the corresponding XSD schemas for every feed. ([CARS-Hub][1])

That means the source registry should store both:

```text
endpoint
schema_endpoint
```

rather than trying to infer schemas from live records.

---

### 3. CARS-Hub FEU-t — confirmed raw XML

I was able to retrieve the actual FEU-t XML.

[Indiana CARS-Hub FEU-t XML](http://inhub.carsprogram.org/data/feu-t.xml?utm_source=chatgpt.com)

The current XML identifies the sender as:

```text
organization-id:
    Indiana DOT

organization-name:
    Indiana DOT

center-id:
    Indiana DOT
```

It uses the TransCore FEU namespace:

```text
http://www.transcore.org
```

and contains event IDs, priorities, headlines, descriptions, roadway locations, geographic coordinates, directions, update times and validity periods. 

---

### 4. Indiana FEU coordinate format

This is particularly important for our ingestion engine.

The feed contains coordinates such as:

```text
latitude:
    41333737

longitude:
    -85493660
```

These represent decimal degrees using an implied six-decimal-place scale.

Therefore:

```text
41333737
    ↓
41.333737

-85493660
    ↓
-85.493660
```

This is a **real source-specific normalization rule**.

It must be recorded in the parser configuration rather than assumed globally.

---

### 5. FEU-t source record

```text
SOURCE_ID:
    IN-INDOT-CARS-FEU-T

organization:
    Indiana Department of Transportation

system:
    CARS-Hub

format:
    XML

standard:
    TransCore FEU

namespace:
    http://www.transcore.org

data:
    traffic events
    restrictions
    roadwork
    closures
    lane restrictions
    roadway locations
    validity periods
    priorities

coordinates:
    integer-scaled decimal degrees

schema:
    FEU-t.xsd

status:
    OFFICIAL / PUBLIC
```

([CARS-Hub][1])

---

### 6. CARS-Hub CCTV

This is the **critical camera source**.

The official CARS-Hub index explicitly exposes:

```text
CCTV
    data/cctv.xml
    schemas/CCTV.xsd
```

([CARS-Hub][1])

So we have independently verified the existence of:

```text
IN-INDOT-CARS-CCTV
```

as an official machine-readable camera source.

#### Important caveat

The current web crawler receives a `401 Unauthorized` when attempting to directly retrieve `cctv.xml`, despite the official index exposing the endpoint. 

That means:

```text
CCTV endpoint exists:
    🟢 CONFIRMED

CCTV feed is anonymously retrievable through this research interface:
    🔴 NOT CONFIRMED

CCTV requires some access condition:
    🟡 POSSIBLE
```

We **must not** convert that into "the CCTV feed is unavailable."

The official index proves the endpoint exists.

---

### 7. CARS-Hub indexed feeds

Indiana provides an unusually useful second layer:

```text
/data/feu-t/index
/data/feu-g/index
/data/feu-i/index
/data/feu-m/index
/data/feu-w/index
```

with:

```text
schemas/FEU-index.xsd
```

([CARS-Hub][1])

This is significant because an indexed distribution can be much more efficient than repeatedly downloading a giant full XML document.

For the national ingestion engine:

```text
FULL_FEED
    ↓
historical/full synchronization

INDEXED_FEED
    ↓
incremental discovery / targeted retrieval
```

should be considered.

---

### 8. FEU-i

The CARS-Hub index specifically exposes:

```text
FEU-i (indexed)
    /data/feu-i/index
```

([CARS-Hub][1])

This is important enough to register separately even before we fully reverse-engineer its record semantics.

```text
SOURCE_ID:
    IN-INDOT-CARS-FEU-I-INDEX

status:
    🟢 official endpoint confirmed

semantic interpretation:
    🟡 requires schema/record inspection
```

We should **not guess** what the `i` means simply from the letter.

---

### 9. Waze CIFS feed

Indiana also officially exposes:

```text
/data/waze/cifs.xml
schemas/Waze-CIFS.xsd
```

([CARS-Hub][1])

This is a major source because it represents a **third-party event feed integrated into INDOT's public CARS infrastructure**.

#### Source

```text
SOURCE_ID:
    IN-INDOT-CARS-WAZE-CIFS

organization:
    INDOT

upstream:
    Waze

format:
    XML

standard:
    CIFS

schema:
    Waze-CIFS.xsd

type:
    traffic incident/event
```

This should be linked as:

```text
INDOT
  └── CARS-Hub
       └── Waze CIFS
            └── Waze
```

rather than incorrectly treating Waze as an INDOT-owned source.

---

### 10. TrafficWise

Indiana's public traffic interface is **TrafficWise**.

The current INDOT page identifies TrafficWise as the state's traffic-information system and lists traffic cameras among its features. ([Indiana.gov][2])

The official Indiana tourism site describes TrafficWise as providing:

* traffic conditions
* road closures
* traffic cameras
* travel times
* message boards
* crash information
* work zones
* incidents

and specifically says users can view real-time camera images and their locations. ([Visit Indiana][3])

---

### 11. TrafficWise's current public frontend

The historical CARS URL:

[INDOT TrafficWise / CARS URL](http://indot.carsprogram.org/main.jsf?utm_source=chatgpt.com)

currently redirects to:

```text
https://511in.org
```

The redirect is confirmed by the current endpoint. ([INDOT Trafficwise][4])

Therefore:

```text
old:
    indot.carsprogram.org/main.jsf

current public UI:
    511in.org
```

The CARS-Hub data backend remains a separate and much more valuable source.

---

### 12. TrafficWise / 511IN camera architecture

The public 511IN frontend is **not the source we should use as our primary camera registry**.

For the project:

```text
511IN
    = public presentation layer

CARS-Hub
    = government data layer
```

This is a critical distinction.

The national engine should prefer:

```text
INDOT CARS-Hub CCTV
```

over scraping the 511IN user interface.

---

### 13. INDOT statewide ITS/CCTV infrastructure

INDOT's own strategic documentation describes Advanced Traffic Management Systems consisting of:

```text
vehicle detection
CCTV cameras
communications
```

and states that TrafficWise provides real-time traffic-condition information to the public. ([Indiana.gov][5])

More recent INDOT project documentation identifies TrafficWise as the statewide ITS implementation and specifically describes ATMS components including:

* DMS
* HAR
* CCTV
* traffic detection devices
* incident response
* Hoosier Helper
* management systems

([Indiana.gov][6])

So the camera network is not just a handful of web cameras.

It is part of Indiana's broader ATMS infrastructure.

---

### 14. Indiana CARS CCTV classification

```text
SOURCE_ID:
    IN-INDOT-CARS-CCTV

authority:
    Indiana Department of Transportation

system:
    CARS-Hub

resource:
    /data/cctv.xml

schema:
    /schemas/CCTV.xsd

category:
    TRAFFIC_CAMERA

likely record types:
    fixed/mobile CCTV inventory
    camera metadata
    geographic location
    image/stream references

public UI:
    TrafficWise / 511IN

raw endpoint:
    official endpoint confirmed

anonymous retrieval:
    not confirmed

status:
    OFFICIAL
```

**Do not put a guessed camera count in the database.**

---

### 15. Indiana GIS — public ArcGIS infrastructure

Indiana also operates a substantial public ArcGIS environment.

For example, INDOT exposes public FeatureServer services through:

[INDOT GIS REST services](https://gis.indot.in.gov/rh/rest/services/?utm_source=chatgpt.com)

One currently exposed INDOT FeatureServer supports:

```text
JSON
GeoJSON
PBF
```

and advanced queries. ([Indiana GIS][7])

This is important because Indiana's GIS infrastructure can potentially provide **location/reference data for transportation assets** independently of the CARS feed.

---

### 16. Indiana Geographic Information Office

Indiana's statewide Geographic Information Office also publishes public GIS services.

The current IGIO infrastructure exposes public FeatureServers with:

* JSON
* GeoJSON
* PBF
* query operations
* spatial queries
* statistics
* pagination

([GIS Data][8])

This should be considered a **secondary enrichment source**, not automatically a camera source.

---

### 17. INDOT AADT

The current INDOT GIS system exposes:

```text
AADT - most current
```

as a public FeatureServer layer.

It contains:

* AADT
* single-unit AADT
* combination AADT
* route
* traffic section
* site number
* measurement information

and supports JSON/GeoJSON/PBF queries. ([Indiana GIS][7])

#### Classification

```text
IN-INDOT-AADT

type:
    TRAFFIC_VOLUME

camera:
    false

use:
    traffic-data enrichment
```

Don't incorrectly turn traffic-count sites into cameras.

---

### 18. Indiana statewide ALPR

Indiana has a significant ALPR ecosystem, but **there is not one publicly documented statewide ALPR inventory equivalent to Illinois' 588-camera ISP program**.

Indiana State Police has an official LPR policy.

The ISP document defines LPRs as systems used to:

* scan plates
* detect plates
* identify plate numbers
* compare against selected databases

and restricts operation/access to authorized personnel. ([Indiana.gov][9])

#### Classification

```text
statewide ISP LPR program:
    🟢 confirmed

public statewide LPR camera inventory:
    🔴 not found

public individual plate reads:
    🔴 not found

public statewide LPR API:
    🔴 not found
```

---

### 19. Indiana Intelligence Fusion Center ALPR documentation

The Indiana Intelligence Fusion Center has an official ALPR privacy policy.

It defines an ALPR system as high-speed cameras installed:

```text
fixed location
OR
mobile patrol vehicle
```

and states that a standard LPR record can contain:

* OCR plate interpretation
* plate photograph
* contextual vehicle photograph
* geographic coordinates
* date/time
* camera/unit identifier

([Indiana.gov][10])

This is extremely useful for the data model.

---

### 20. Indiana ALPR canonical record

The official IIFC description effectively validates:

```text
ALPR_OBSERVATION
{
    plate_text,
    plate_image,
    vehicle_image,
    latitude,
    longitude,
    timestamp,
    camera_id
}
```

([Indiana.gov][10])

Again:

**This defines the structure of the system. It does NOT mean those records are publicly available.**

---

### 21. Indianapolis — Flock ALPR

Indianapolis has a confirmed Flock ALPR deployment.

Indiana Court of Appeals records describe IMPD's Flock system as:

> a license plate reader system stationed throughout the entire city

and describe officers searching by vehicle characteristics and using Flock alerts. ([Public Courts Indiana][11])

That gives us:

```text
SOURCE_ID:
    IN-INDIANAPOLIS-FLOCK

organization:
    Indianapolis Metropolitan Police Department

vendor:
    Flock Safety

type:
    ALPR

deployment:
    citywide

public individual reads:
    🔴

public API:
    🔴 not established
```

---

### 22. Gary — Flock ALPR

This is particularly important for Northwest Indiana.

An Indiana Court of Appeals decision from 2025 identifies a **Gary Flock camera system** consisting of approximately:

> 70 stationary cameras

and says the system operates as a license-plate recognition system taking photographs of vehicles and their plates. ([Public Courts Indiana][12])

#### Exact source record

```text
SOURCE_ID:
    IN-GARY-FLOCK

agency:
    Gary Police Department

vendor:
    Flock Safety

camera_count:
    approximately 70

count_date:
    documented in 2025 court record

type:
    stationary ALPR

public individual reads:
    🔴
```

This is an excellent example of why court records can be valuable **secondary source evidence for infrastructure inventories**.

---

### 23. Lake County Sheriff — Flock

Lake County is another major ALPR cluster.

Official Lake County Commissioners records show the Sheriff's Department requested:

```text
10 Flock Safety Falcon LPR cameras
```

to integrate into the Sheriff's Real Time Center and share live feeds with other law-enforcement agencies. ([Lake County Indiana][13])

A later 2025 county record documents:

* an existing Flock contract
* multi-geo search
* convoy search
* plate-swap insights
* multistate insights
* hotlist hotspot insights
* relocation of an LPR camera
* addition of another Flock LPR camera

([Lake County Indiana][14])

This establishes that Lake County's deployment was actively evolving through 2025.

---

### 24. Porter County — Flock

The Town of Porter officially documented a planned purchase of:

```text
2 Flock Safety license plate reader cameras
```

with approximately:

```text
$6,000/year
```

recurring subscription cost.

The minutes state the cameras are strictly license-plate readers and do not include facial recognition. ([Indiana.gov][15])

#### Source

```text
IN-PORTER-FLOCK

agency:
    Town of Porter Police Department

vendor:
    Flock Safety

camera_count:
    2 planned

status:
    official procurement
```

---

### 25. Lafayette — Flock ALPR

Lafayette Police Department currently publishes an official Flock ALPR FAQ.

It confirms:

* fixed cameras
* vehicle images
* plate number
* make/model
* vehicle color
* timestamp
* camera location
* 30-day retention
* law-enforcement-only searching
* no public ALPR search access

([Lafayette, IN][16])

This is one of the best local ALPR transparency sources in Indiana.

---

### 26. Lafayette ALPR record

```text
SOURCE_ID:
    IN-LAFAYETTE-FLOCK

agency:
    Lafayette Police Department

vendor:
    Flock Safety

type:
    fixed ALPR

captures:
    plate
    make
    model
    color
    timestamp
    location
    vehicle image

retention:
    30 days

public search:
    false

status:
    OFFICIAL
```

([Lafayette, IN][16])

---

### 27. West Lafayette — Flock ALPR

This one is particularly current.

On **August 24, 2026**, West Lafayette Police announced a public information session specifically concerning its use of ALPR technology.

The city confirms Flock Safety is its ALPR provider and says the session will address:

* captured information
* searches
* safeguards
* limitations
* retention
* accountability

([West Lafayette][17])

#### Source

```text
IN-WEST-LAFAYETTE-FLOCK

agency:
    West Lafayette Police Department

vendor:
    Flock Safety

status:
    ACTIVE / CURRENT

public reads:
    false
```

This is a very current deployment confirmation.

---

### 28. Indiana ALPR network conclusion

We can therefore prove a substantial Indiana Flock network:

```text
INDIANA FLOCK
│
├── Indianapolis
├── Gary
├── Lake County Sheriff
├── Lafayette
├── West Lafayette
├── Porter
├── Cedar Lake
├── Lake Station
└── other agencies
```

Lake County's own records specifically mention Gary, Cedar Lake, Lake Station and other departments participating in or acquiring Flock cameras. ([Lake County Indiana][13])

#### But:

```text
total Indiana Flock cameras:
    UNKNOWN
```

Do not manufacture a statewide number.

---

### 29. Fort Wayne — acoustic surveillance

Indiana has another category that is easy to miss.

Fort Wayne Police is currently testing **Flock Safety Raven**, an acoustic detection system.

The official city announcement says Raven detects specific acoustic signatures associated with public-safety threats and does **not** record or store conversations.

It says detected audio data is retained for:

```text
21 days
```

and that Raven integrates with FlockOS and can correlate alerts with license-plate-reader information. ([City of Fort Wayne][18])

This is extremely relevant to your project's:

> cameras, ALPRs, police scanners, etc.

scope.

---

### 30. Fort Wayne Raven source

```text
SOURCE_ID:
    IN-FORT-WAYNE-FLOCK-RAVEN

agency:
    Fort Wayne Police Department

vendor:
    Flock Safety

platform:
    Raven / FlockOS

type:
    acoustic detection

purpose:
    public-safety acoustic event detection

conversation recording:
    false

retention:
    21 days

integration:
    Flock ALPR / FlockOS

status:
    ACTIVE PILOT / TESTING
```

([City of Fort Wayne][18])

---

### 31. Indiana police scanner infrastructure

Indiana operates the statewide **Project Hoosier SAFE-T** network.

The Indiana Public Safety Commission describes SAFE-T as a statewide interoperable digital public-safety communications network.

The state says it provides:

```text
95% statewide mobile coverage
126 communication sites
```

and is an 800 MHz trunked system. ([IN.gov][19])

A current Indiana statewide communications field guide identifies SAFE-T as:

```text
700/800 MHz
P25 Phase 1
statewide
```

([Indiana.gov][20])

---

### 32. SAFE-T source record

```text
SOURCE_ID:
    IN-IPSC-SAFE-T

organization:
    Indiana Integrated Public Safety Commission

system:
    Project Hoosier SAFE-T

type:
    statewide P25 trunked radio

bands:
    700 / 800 MHz

coverage:
    statewide

purpose:
    police
    fire
    EMS
    emergency management
    interagency communications

public live audio stream:
    🔴 official statewide stream not established
```

([Indiana.gov][20])

---

### 33. SAFE-T is not itself a public scanner feed

This distinction matters.

SAFE-T is:

```text
radio infrastructure
```

not:

```text
public Internet audio stream
```

The state documentation describes the network as serving public-safety agencies. ([Indiana.gov][20])

For public audio, we need separate sources.

---

### 34. Broadcastify — Indiana

Broadcastify currently lists approximately:

```text
176 audio feeds
80 counties
156 public-safety feeds
13 rail
13 amateur radio
4 aviation
6 other
```

on its Indiana public-safety page. ([Broadcastify][21])

Another current Broadcastify browse page lists **206 Indiana feeds** in its state totals, illustrating that the count varies depending on the category/page being viewed. ([Broadcastify][22])

Therefore we should store the count with:

```text
source
query/category
timestamp
```

rather than hard-code one number.

---

### 35. Indiana scanner coverage

Broadcastify's Indiana feeds cover at least:

* Allen
* Benton
* Boone
* Clark
* DeKalb
* Elkhart
* Floyd
* Grant
* Hamilton
* Hendricks
* Howard
* Jackson
* Jasper
* Jefferson
* Johnson
* Knox
* Kosciusko
* LaPorte
* Lake
* Madison
* Marion
* Monroe
* Porter
* St. Joseph
* Tippecanoe
* Vanderburgh
* Vigo
* Wabash
* Wayne
* many others

The current page lists **80 counties with feeds**. ([Broadcastify][21])

---

### 36. Broadcastify Calls

Indiana has not merely static audio feeds.

Broadcastify Calls provides actual call-ingest coverage from software-defined-radio nodes.

For example, Lake County currently has Broadcastify Calls coverage with:

```text
Law Dispatch
Law Tac
Law Talk
Fire Dispatch
Fire-Tac
Fire-Talk
Emergency Ops
Public Works
Security
Utilities
```

and active SDR ingest nodes for Indiana Project Hoosier SAFE-T and Lake County simulcast systems. ([Broadcastify][23])

This is considerably more useful to a data-ingestion system than simply embedding a scanner player.

---

### 37. Lake County scanner source

```text
SOURCE_ID:
    IN-LAKE-BROADCASTIFY-CALLS

coverage:
    Lake County, Indiana

systems:
    Project Hoosier SAFE-T
    Lake County simulcast

types:
    police
    fire
    EMS
    public works
    utilities
    etc.

ingest:
    SDR

public:
    yes

status:
    LIVE
```

([Broadcastify][23])

---

### 38. Marion County scanner source

Broadcastify currently provides Indianapolis/Marion County coverage including:

```text
Indianapolis Metropolitan Police
Indianapolis Fire Department
IMPD Southeast District
```

and multiple SAFE-T/MESA ingest nodes. ([Broadcastify][24])

This makes:

```text
IN-MARION-BROADCASTIFY-CALLS
```

another high-value source.

---

### 39. Elkhart County scanner source

Elkhart/Goshen/Elkhart County coverage includes:

* Elkhart PD
* Elkhart FD
* Goshen PD
* Goshen FD
* Elkhart County Sheriff
* Wakarusa
* Bristol
* Nappanee
* Millersburg
* Middlebury
* Indiana State Police District 24
* county fire districts

([Broadcastify][25])

This is a good example of the level of agency-level coverage that should be stored.

---

### 40. Tippecanoe County scanner source

Tippecanoe currently has Broadcastify Calls coverage for:

* law dispatch
* law tactical
* law talk
* fire dispatch
* EMS
* corrections
* emergency operations
* public works
* schools
* utilities

with active P25 simulcast ingest nodes. ([Broadcastify][26])

---

### 41. Indiana public CAD / calls-for-service

Indiana does **not** appear to have one statewide public CAD API.

But there are excellent local sources.

The strongest current example is:

#### Bloomington Police Department

The official Bloomington Open Data portal publishes:

```text
Calls for Service
```

with:

* case number
* datetime
* month
* weekday
* nature
* district
* agency
* report

and currently has approximately:

```text
632,000 rows
```

The dataset was updated **July 28, 2026**. ([Tyler Data & Insights][27])

---

### 42. Bloomington CAD source

```text
SOURCE_ID:
    IN-BLOOMINGTON-PD-CFS

agency:
    Bloomington Police Department

type:
    Calls for Service

fields:
    case_number
    datetime
    nature
    district
    agency
    report

rows:
    ~632,000

last verified:
    2026-07-28

public API:
    🟢

license:
    Open Data Commons PDDL

status:
    OFFICIAL
```

([Tyler Data & Insights][27])

This is an excellent source.

---

### 43. Bloomington CAD dispatch zones

Bloomington also publishes the actual police dispatch zones.

The dataset states they were created for use in the **Spillman computer-aided dispatch (CAD)** system used by Monroe County Central Dispatch. ([Tyler Data & Insights][28])

It contains:

```text
zone ID
agency code
agency
area
geometry
```

and was updated **August 4, 2026**. ([Tyler Data & Insights][28])

This is valuable geographic enrichment for CFS data.

---

### 44. Monroe County CAD architecture

This gives us:

```text
MONROE COUNTY
     │
Central Dispatch
     │
Spillman CAD
     │
┌────┴──────────────┐
│                   │
Dispatch Zones   Calls for Service
```

The public zone dataset proves the CAD backend and jurisdiction structure. ([Tyler Data & Insights][28])

---

### 45. South Bend public police data

South Bend maintains an official Police Transparency Hub.

It says public police-interaction data includes:

* calls for service
* cases
* arrests
* use of force

and says the source is the Police Department's **records management system**. ([South Bend, Indiana][29])

South Bend also exposes an ArcGIS REST service containing a:

```text
CallsForService_2017
```

feature layer with:

```text
JSON
GeoJSON
```

support. ([South Bend GIS][30])

---

### 46. South Bend source

```text
SOURCE_ID:
    IN-SOUTH-BEND-PD-CFS

agency:
    South Bend Police Department

type:
    calls for service / police interactions

source system:
    police records management system

public:
    yes

API:
    ArcGIS REST

formats:
    JSON
    GeoJSON

status:
    OFFICIAL
```

([South Bend, Indiana][29])

---

### 47. Indianapolis police open data

Indianapolis has a substantial public GIS environment.

The city's ArcGIS server currently exposes an **IMPD** folder containing:

```text
IMPD_Citations_Public
IMPD_Crash_Public
IMPD_NIBRS_Public
IMPD_Public_Data
IMPD_UseOfForce_Public
IMPD_Zones
IMPDBeatMap
IMPDDistricts
PoliceBeatsAware
```

([Indy GIS][31])

The public data feature service includes an `Incidents_Public` layer containing incident points categorized into:

```text
Drug
Other
Property
Traffic
Violent
```

([Indy GIS][32])

This is a major public-safety source.

---

### 48. Indianapolis police source registry

```text
IN-IMPD-PUBLIC-DATA
IN-IMPD-CRASH
IN-IMPD-CITATIONS
IN-IMPD-NIBRS
IN-IMPD-USE-OF-FORCE
IN-IMPD-ZONES
IN-IMPD-BEATS
```

All are public ArcGIS services exposed by the City of Indianapolis. ([Indy GIS][31])

---

### 49. Indianapolis public-safety portal

Indianapolis also operates a Public Safety Communications Portal.

However, it explicitly says access is intended for:

* law enforcement
* media
* authorized organizations

and report information is subject to restrictions. ([Impdppr][33])

Therefore:

```text
public portal exists:
    🟢

unrestricted public CAD/report API:
    🔴
```

Do not treat the portal as an open API.

---

### 50. Indiana police-data aggregation

OpenPoliceData's current dataset registry identifies Indiana sources including:

```text
Bloomington:
    Calls for Service
    Citations
    Complaints
    Crashes
    Officer-Involved Shootings
    Use of Force
    Vehicle Pursuits

Griffith:
    Calls for Service
    2014 → 2025
```

([OpenPoliceData][34])

This is not itself an authoritative government source, but it is an excellent **discovery index** for locating additional government datasets.

For our project:

```text
OpenPoliceData
    =
DISCOVERY SOURCE

not
    =
AUTHORITATIVE SOURCE
```

---

### 51. Griffith Police Department

Griffith is particularly useful because its public data is available in machine-readable forms.

The current dataset exposes:

```text
CSV
JSON
XLSX
HTML
```

and contains:

* date
* time
* incident number
* nature
* address

for calls for service. ([Open Police Data][35])

This is a direct public CFS source.

---

### 52. Indiana automated camera enforcement

Indiana's ALPR ecosystem should be separated from traffic enforcement.

We have confirmed:

```text
ALPR
Flock
CCTV
traffic cameras
security cameras
acoustic detection
```

but they are not interchangeable.

For example:

```text
Flock:
    ALPR

INDOT CCTV:
    traffic surveillance

Raven:
    acoustic detection

city security cameras:
    conventional video
```

The database needs separate device categories.

---

### 53. Indiana public camera hierarchy

Indiana should be modeled approximately as:

```text
INDIANA
│
├── INDOT
│   ├── CARS-Hub
│   │   ├── CCTV
│   │   ├── FEU-t
│   │   ├── FEU-g
│   │   ├── FEU-m
│   │   ├── FEU-w
│   │   ├── FEU-i
│   │   └── Waze CIFS
│   │
│   ├── TrafficWise
│   └── INDOT GIS
│
├── IPSC
│   └── SAFE-T
│
├── ISP
│   └── LPR
│
├── INDIANAPOLIS
│   ├── IMPD
│   └── Flock
│
├── GARY
│   └── Flock
│
├── LAKE COUNTY
│   └── Flock
│
├── LAFAYETTE
│   └── Flock
│
├── WEST LAFAYETTE
│   └── Flock
│
├── FORT WAYNE
│   └── Flock Raven
│
├── BLOOMINGTON
│   └── CAD/CFS
│
├── SOUTH BEND
│   └── CAD/CFS / police data
│
├── GRIFFITH
│   └── CFS
│
└── BROADCASTIFY
    └── statewide scanner ecosystem
```

---

### 54. Exact Indiana source registry

| Source ID                 | Agency              | Data           | Type           | Status |
| ------------------------- | ------------------- | -------------- | -------------- | ------ |
| `IN-INDOT-CARS-CCTV`      | INDOT               | CCTV inventory | **Camera**     | 🟢     |
| `IN-INDOT-CARS-FEU-T`     | INDOT               | FEU-t          | Traffic/event  | 🟢     |
| `IN-INDOT-CARS-FEU-G`     | INDOT               | FEU-g          | Traffic/event  | 🟢     |
| `IN-INDOT-CARS-FEU-I`     | INDOT               | FEU-i          | Event/index    | 🟢     |
| `IN-INDOT-CARS-FEU-M`     | INDOT               | FEU-m          | Event          | 🟢     |
| `IN-INDOT-CARS-FEU-W`     | INDOT               | FEU-w          | Weather        | 🟢     |
| `IN-INDOT-CARS-WAZE`      | INDOT/Waze          | CIFS           | Incident       | 🟢     |
| `IN-INDOT-AADT`           | INDOT               | AADT           | Traffic volume | 🟢     |
| `IN-ISP-LPR`              | ISP                 | LPR            | **ALPR**       | 🟢     |
| `IN-IPSC-SAFE-T`          | IPSC                | SAFE-T         | Radio          | 🟢     |
| `IN-INDIANAPOLIS-FLOCK`   | IMPD                | Flock          | **ALPR**       | 🟢     |
| `IN-GARY-FLOCK`           | Gary PD             | Flock          | **ALPR**       | 🟢     |
| `IN-LAKE-FLOCK`           | Lake County Sheriff | Flock          | **ALPR**       | 🟢     |
| `IN-LAFAYETTE-FLOCK`      | Lafayette PD        | Flock          | **ALPR**       | 🟢     |
| `IN-WEST-LAFAYETTE-FLOCK` | WLPD                | Flock          | **ALPR**       | 🟢     |
| `IN-PORTER-FLOCK`         | Porter PD           | Flock          | **ALPR**       | 🟢     |
| `IN-FORT-WAYNE-RAVEN`     | Fort Wayne PD       | Raven          | Acoustic       | 🟢     |
| `IN-BLOOMINGTON-CFS`      | Bloomington PD      | Calls          | CAD/CFS        | 🟢     |
| `IN-SOUTH-BEND-CFS`       | South Bend PD       | Calls          | CAD/CFS        | 🟢     |
| `IN-GRIFFITH-CFS`         | Griffith PD         | Calls          | CAD/CFS        | 🟢     |
| `IN-IMPD-PUBLIC-DATA`     | IMPD                | Incidents      | Police         | 🟢     |
| `IN-BROADCASTIFY`         | Third party         | Scanner feeds  | Radio          | 🟢     |

---

### 55. Highest-value Indiana sources

#### 🥇 #1 — CARS-Hub

**10/10**

This is the Indiana equivalent of a gold mine.

It gives us actual government-published:

```text
XML
XSD
CCTV
traffic events
weather
incidents
Waze
indexed feeds
```

([CARS-Hub][1])

---

#### 🥇 #2 — INDOT CCTV

**10/10**

The existence of the official:

```text
/data/cctv.xml
/schemas/CCTV.xsd
```

is directly confirmed by INDOT's CARS-Hub index. ([CARS-Hub][1])

---

#### 🥇 #3 — Indiana Flock ecosystem

**9.5/10**

We can independently prove deployments in:

* Indianapolis
* Gary
* Lake County
* Lafayette
* West Lafayette
* Porter
* other communities

with actual government/court documentation. ([Public Courts Indiana][11])

---

#### 🥇 #4 — SAFE-T + Broadcastify

**9.5/10**

The state provides the statewide P25 infrastructure; Broadcastify provides extensive public Internet access to portions of it. ([Indiana.gov][20])

---

#### 🥇 #5 — Local CAD/open police data

**9/10**

Indiana has a surprisingly good collection of local machine-readable police datasets.

Bloomington, South Bend, Indianapolis and Griffith alone provide substantial data. ([Tyler Data & Insights][27])

---

### 56. What Indiana does NOT publicly provide

After checking the state and local sources:

```text
🔴 statewide public ALPR read API
🔴 statewide ALPR camera inventory
🔴 public ISP ALPR historical plate database
🔴 statewide public CAD API
🔴 statewide official SAFE-T Internet audio feed
🔴 guaranteed public live video for every INDOT CCTV unit
🔴 complete statewide Flock inventory
```

But the infrastructure itself is very well documented.

---

### 57. Important legal/access distinction

For this project, Indiana gives us three different levels:

#### LEVEL 1 — Direct public machine data

```text
CARS-Hub FEU
CARS-Hub indexed feeds
Waze CIFS
INDOT GIS
Bloomington CFS
South Bend GIS
Indianapolis GIS
Griffith CFS
```

#### LEVEL 2 — Publicly documented infrastructure

```text
CARS CCTV
ISP LPR
Flock
SAFE-T
Raven
```

#### LEVEL 3 — Public third-party access

```text
Broadcastify
```

The national engine should preserve that distinction.

---

### 58. Indiana's particularly important discovery

There is a major architectural lesson here.

Indiana doesn't require us to scrape:

```text
511IN
```

to obtain its transportation data.

The official government system exposes:

```text
CARS-Hub
    │
    ├── XML
    ├── XSD
    ├── indexed feeds
    ├── CCTV
    └── Waze CIFS
```

([CARS-Hub][1])

That is exactly the kind of source the national ingestion engine should prioritize.

---

### 59. Indiana final classification

| Category                               | Indiana           |
| -------------------------------------- | ----------------- |
| Official statewide traffic system      | 🟢                |
| Official machine-readable traffic feed | 🟢                |
| Official XML                           | 🟢                |
| Official XSD schemas                   | 🟢                |
| Official CCTV feed endpoint            | 🟢                |
| Anonymous CCTV retrieval verified      | 🟡                |
| Traffic camera public UI               | 🟢                |
| Waze integration                       | 🟢                |
| Public statewide ALPR reads            | 🔴                |
| ALPR infrastructure                    | 🟢                |
| Flock network                          | 🟢                |
| Flock statewide count                  | 🔴 UNKNOWN        |
| Indianapolis Flock                     | 🟢                |
| Gary Flock                             | 🟢 ~70 documented |
| Lake County Flock                      | 🟢                |
| Lafayette Flock                        | 🟢                |
| West Lafayette Flock                   | 🟢                |
| Porter Flock                           | 🟢                |
| Acoustic detection                     | 🟢 Fort Wayne     |
| Statewide P25 radio                    | 🟢                |
| Public statewide radio stream          | 🔴                |
| Public scanner ecosystem               | 🟢                |
| Public CAD/CFS                         | 🟢 locally        |
| Statewide CAD                          | 🔴                |
| Public police GIS                      | 🟢                |
| Public crash data                      | 🟢                |
| Public NIBRS                           | 🟢                |
| Public use-of-force data               | 🟢 locally        |

---

### 60. Final Indiana source priority

For the actual **national source-discovery database**, I would rank Indiana:

```text
PRIORITY 1
IN-INDOT-CARS-CCTV

PRIORITY 2
IN-INDOT-CARS-FEU-T
IN-INDOT-CARS-FEU-I
IN-INDOT-CARS-WAZE

PRIORITY 3
IN-INDOT-CARS-FEU-G
IN-INDOT-CARS-FEU-M
IN-INDOT-CARS-FEU-W

PRIORITY 4
IN-ISP-LPR

PRIORITY 5
IN-INDIANAPOLIS-FLOCK
IN-GARY-FLOCK
IN-LAKE-FLOCK
IN-LAFAYETTE-FLOCK
IN-WEST-LAFAYETTE-FLOCK

PRIORITY 6
IN-IPSC-SAFE-T

PRIORITY 7
IN-BROADCASTIFY

PRIORITY 8
IN-BLOOMINGTON-CFS
IN-SOUTH-BEND-CFS
IN-GRIFFITH-CFS
IN-IMPD-PUBLIC-DATA
```

**Indiana is therefore `VERY HIGH PRIORITY` for the national source registry.**

And unlike some states, we now have **actual government feed endpoints—not merely evidence that a system exists.**

**Next alphabetically: Iowa.**

[1]: https://inhub.carsprogram.org/index.jsf "CARS-Hub"
[2]: https://www.in.gov/indot/contact-indot/indot-mobile-app/?utm_source=chatgpt.com "INDOT: INDOT Mobile App"
[3]: https://visitindiana.in.gov/tour-indiana/traffic/?utm_source=chatgpt.com "Traffic and Travel Information for Indiana | Visit Indiana"
[4]: https://indot.carsprogram.org/main.jsf "INDOT Trafficwise Map"
[5]: https://www.in.gov/indot/files/TMC_TrafficManagementStrategicPlan_v2-4.pdf?utm_source=chatgpt.com "Microsoft Word - 00_ITS Strategic Plan Cover.doc"
[6]: https://www.in.gov/indot/doing-business-with-indot/files/8094-FlexRoad-Technical-Proposal-Vol-II-PD2403_Walsh-Meade-JV.pdf?utm_source=chatgpt.com "I-465 Phases 3 and 4 Advanced Traffic Management Systems (R-28107)"
[7]: https://gis.indot.in.gov/rh/rest/services/Roads_and_Highways/INDOT_RH_SPMS/FeatureServer/16?utm_source=chatgpt.com "Layer: AADT - most current (ID: 16)"
[8]: https://gisdata.in.gov/server/rest/services/Hosted/Administrative_Boundaries_of_Indiana_Current/FeatureServer/8?utm_source=chatgpt.com "Layer: PolicePolygon (ID: 8)"
[9]: https://www.in.gov/isp/files/License-Plate-Reader.pdf?utm_source=chatgpt.com "STANDARD OPERATING PROCEDURE"
[10]: https://www.in.gov/iifc/files/Indiana-Intelligence-Fusion-Center-License-Plate-Reader-Privacy-Policy-2022.pdf?utm_source=chatgpt.com "Automatic License Plate Reader (ALPR)—ALPR systems comprise high-speed cameras mounted at a fixed location or on a mobile patrol vehicle (see Fixed LPR, Mobile LPR, and Portable LPR definitions) that function to:"
[11]: https://public.courts.in.gov/Decisions/api/Document/Opinion?Id=ZZmDltpxG8uZbBn2FGDEV388y_AnhWS2A2NtwZItnLpzSJWXpojfrvgLxfgb9G9J0&utm_source=chatgpt.com "Joseph Johnson v. State of Indiana"
[12]: https://public.courts.in.gov/Decisions/api/Document/Opinion?Id=y1sQJpf_T0sUXjneRY01LHNw0UOPAt4Hnwk4TNYzonvhLI1UCpfK9zukReDMIfcZ0&utm_source=chatgpt.com "Martell Jevon Flippins v. State of Indiana"
[13]: https://lakecountyin.gov/departments/commissioners/minutes-c/2024-commissioners-minutes/2024%2008-21-2024.pdf?utm_source=chatgpt.com "Microsoft Word - 2024 08-21-2024"
[14]: https://lakecountyin.gov/departments/commissioners/minutes-c/2025/2025%2008-20-2025.pdf?force_download=true&utm_source=chatgpt.com "Docusign Envelope ID: CED3EA14-0D14-4355-8BC1-AB66DBCC089E"
[15]: https://www.in.gov/towns/porter/files/town-council-minutes/Town-Council-Minutes-11-12-2025.pdf?utm_source=chatgpt.com "<table id=\"e1\">"
[16]: https://www.lafayette.in.gov/3787/Flock-Safety-Cameras-Frequently-Asked-Qu?utm_source=chatgpt.com "Flock Safety Cameras Frequently Asked Questions | Lafayette, IN - Official Website"
[17]: https://www.westlafayette.in.gov/Home/Components/News/News/360/?utm_source=chatgpt.com "Understanding WLPD&#39;s Use of Automated License Plate Readers | News List | West Lafayette, IN"
[18]: https://www.cityoffortwayne.in.gov/m/newsflash/Home/Detail/571?utm_source=chatgpt.com "Testing of Flock Safety Raven Audio Detection System • Fort Wayne, IN"
[19]: https://faqs.in.gov/hc/en-us/articles/115005056187-What-is-Project-Hoosier-SAFE-T?utm_source=chatgpt.com "What is Project Hoosier SAFE-T? – IN.gov"
[20]: https://www.in.gov/ipsc/files/IN-FOG_OCT.v2.pdf?utm_source=chatgpt.com "State of Indiana Tactical Interoperable Communications"
[21]: https://status.broadcastify.com/listen/stid/18/publicsafety?utm_source=chatgpt.com "Indiana Audio Feeds"
[22]: https://status.broadcastify.com/listen/?utm_source=chatgpt.com "Browse Audio Feeds"
[23]: https://status.broadcastify.com/listen/ctid/737/publicsafety?utm_source=chatgpt.com "Lake County, Indiana Audio Feeds"
[24]: https://status.broadcastify.com/listen/ctid/741/publicsafety?utm_source=chatgpt.com "Marion County, Indiana Audio Feeds"
[25]: https://status.broadcastify.com/listen/feed/21905?utm_source=chatgpt.com "Elkhart, Goshen & Elkhart County Police, Fire & EMS"
[26]: https://status.broadcastify.com/listen/ctid/771/publicsafety?utm_source=chatgpt.com "Tippecanoe County, Indiana Audio Feeds"
[27]: https://data.bloomington.in.gov/Police/Calls-for-Service/t5xf-ggw6?utm_source=chatgpt.com "Calls for Service | City of Bloomington Open Data"
[28]: https://data.bloomington.in.gov/Police/Police-Dispatch-Zones/samh-99bv?utm_source=chatgpt.com "Police Dispatch Zones | City of Bloomington Open Data"
[29]: https://southbendin.gov/transparency-and-performance/police-transparency-hub/complaintsandadministrativeinvestigations/?utm_source=chatgpt.com "Complaints and Administrative Investigations Data - South Bend, Indiana"
[30]: https://gis.southbendin.gov/arcgis/rest/services/OpenData/Police_UOF_Incidents/MapServer/layers?utm_source=chatgpt.com "All Layers and Tables (OpenData/Police_UOF_Incidents)"
[31]: https://gis.indy.gov/server/rest/services/IMPD?utm_source=chatgpt.com "Folder: IMPD"
[32]: https://gis.indy.gov/server/rest/services/IMPD/IMPD_Public_Data/FeatureServer/1?utm_source=chatgpt.com "Layer: Incidents_Public (ID: 1)"
[33]: https://impdppr.indy.gov/About.aspx?utm_source=chatgpt.com "About Us"
[34]: https://openpolicedata.readthedocs.io/en/stable/datasets/index.html?utm_source=chatgpt.com "Datasets — OpenPoliceData 0.5.4 documentation"
[35]: https://www.openpolicedata.com/GriffithIN/CFS/2025CFS.php?utm_source=chatgpt.com "Calls For Service"
