---
state: Wisconsin
usps: WI
slug: wisconsin
dossier_number: 49
research_date: 2026-08-28
research_date_source: stated
spec_status: in-progress
capabilities:
  traffic_cameras: credential-gated
  traffic_conditions: confirmed
  weather: confirmed
  scanners: confirmed
  alpr_flock: none-found
  other: confirmed
provenance:
  imported_from: project_atlas_state_data/Wisconsin.txt
  imported_on: 2026-08-28
  stated_dossier_number: 48
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Wisconsin (WI) - ATLAS State Record

> Dossier **49 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

Two parts. **Section 1** is the working specification of what ProjectATLAS will actually
ingest from this state - edit it as sources are verified. **Section 2** is the imported
research dossier it derives from - treat that as evidence and leave it as written.

---

## 1. Capability specification

| # | Capability | Status | Primary public source | Machine-readable | Notes |
| --- | --- | --- | --- | --- | --- |
| 1.1 | [Traffic cameras](#11-traffic-cameras) | `credential-gated` | WisDOT 511WI REST API | Yes - documented | Officially documented; **needs a developer key + account**. No key held. |
| 1.2 | [Traffic conditions and incidents](#12-traffic-conditions-and-incidents) | `confirmed` | WisDOT 511WI WZDx | Yes - GeoJSON | 4,413 events, **CC0 1.0** declared in-payload. |
| 1.3 | [Weather and road weather](#13-weather-and-road-weather) | `confirmed` | WisDOT road conditions + USGS atmospheric | Yes - ArcGIS REST / RDB | **1,175** road segments + **25** atmospheric sites. NWS blocked by `robots.txt`. |
| 1.4 | [Scanners and public-safety radio](#14-scanners-and-public-safety-radio) | `confirmed` | FCC ULS (federal, public domain) | Yes - bulk ZIP | Source verified reachable; **no records extracted** (419 MB not downloaded). |
| 1.5 | [ALPR / Flock camera locations](#15-alpr--flock-camera-locations) | `none-found` | Legislature + Milwaukee PD SOP (governance only) | No | **Both bills failed 3/23/2026.** Zero locations across every official channel. |
| 1.6 | [Other public sources](#16-other-public-sources) | `confirmed` | USGS Water Services + WDNR GIS | Yes - RDB / ArcGIS REST | **215** active real-time stream gauges, coordinates + declared accuracy. Public domain. |

Status vocabulary: `unspecified` &middot; `researching` &middot; `none-found` &middot; `confirmed` &middot; `credential-gated` &middot; `blocked` &middot; `excluded` &middot; `live`.

> Every `confirmed` row above is backed by an independently fetched, byte-counted and SHA-256-hashed `SOURCE-RECORD.md` in this state's own class folders. Nothing here was promoted on the strength of §2's own confidence markings - see `data/states/NOTICE.md`.

### 1.1 Traffic cameras

Public DOT/agency CCTV: camera inventory, snapshot URLs, HLS/MJPEG streams.

| Field | Value |
| --- | --- |
| Status | `credential-gated` |
| Operator / agency | Wisconsin DOT (WisDOT) |
| Public system | 511WI (`511wi.gov`) - the same system already confirmed for §1.2 |
| Machine-readable endpoint(s) | Documented REST API exposing **Cameras**, Message Signs, Truck Parking, Winter Road Conditions, Events, Alerts, Travel Time. Exact request form **not** established - an unauthenticated call to the search-suggested URL returned 404, not 401. |
| Auth model | **Developer key required**, and a registered account is required to obtain one. Throttled to 10 calls / 60s. Quoted verbatim from the fetched documentation. |
| Media available | Camera imagery/video per the documentation; **not** independently observed - no key held. |
| Record count | **Unknown.** No camera has been retrieved. Do not infer a count from §2. |
| Geographic coverage | Statewide (documented); unverified |
| Update cadence | Unknown |
| Terms / licence | **UNKNOWN.** No terms page located. A key-issuing process normally carries an access agreement that would govern redistribution - **that agreement has not been read.** |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`data/states/wisconsin/media-streams/wisdot-511-camera-api/SOURCE-RECORD.md`](data/states/wisconsin/media-streams/wisdot-511-camera-api/SOURCE-RECORD.md). Found via **official WisDOT developer documentation** - the exact route the earlier negative record ([`data/states/wisconsin/media-streams/wisdot-arcgis-negative/SOURCE-RECORD.md`](data/states/wisconsin/media-streams/wisdot-arcgis-negative/SOURCE-RECORD.md)) specified, and explicitly **not** by guessing `511wi.gov/api/*` paths. `robots.txt` read first; `/developers/`, `/help/` and `/api/` are all permitted. **No account created, no key requested** - belongs in the `needs-outreach` queue with Issues #1 and #8. The public `/cctv` viewer was **not** scraped: harvesting it would circumvent a deliberate access control (§4). |

### 1.2 Traffic conditions and incidents

Incidents, construction and work zones (WZDx), congestion, DMS, road conditions.

| Field | Value |
| --- | --- |
| Status | `confirmed` |
| Operator / agency | Wisconsin DOT (WisDOT) |
| Public system | 511WI, publisher `Work Zone Manager`, sourced from ATMS-ExtEvent / ATMS-ERM |
| Machine-readable endpoint(s) | `https://511wi.gov/api/wzdx` |
| Auth model | None - open, unauthenticated |
| Media available | n/a - structured events |
| Record count | **4,413** features (4,159 work-zone, 254 detour), 2026-08-29 |
| Geographic coverage | Statewide; LineString geometries within Wisconsin's bbox |
| Update cadence | Payload says 60s; federal registry says 5m - unresolved discrepancy |
| Terms / licence | **CC0 1.0 Universal**, declared in-payload (`feed_info.license`) |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`data/states/wisconsin/events/wisdot-wzdx/SOURCE-RECORD.md`](data/states/wisconsin/events/wisdot-wzdx/SOURCE-RECORD.md). Discovered via the federal WZDx registry, whose bytes are identical to Indiana's 2026-08-22 copy. Version discrepancy (registry 4.1, payload 4.2) unresolved. |

### 1.3 Weather and road weather

RWIS/atmospheric sensors, road-surface conditions, NWS and state weather feeds.

| Field | Value |
| --- | --- |
| Status | `confirmed` |
| Operator / agency | Wisconsin DOT (road conditions, published via an Iowa DOT-hosted aggregation); USGS (atmospheric sites) |
| Public system | Midwest Winter Road Conditions FeatureServer; USGS Water Services (NWIS) |
| Machine-readable endpoint(s) | `https://services.arcgis.com/8lRhdTsQyJpO52F1/arcgis/rest/services/Midwest_Winter_Road_Conditions_View/FeatureServer/0/query`; `https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=wi&siteType=AT&siteStatus=active` |
| Auth model | None for either. **NWS `api.weather.gov` was NOT fetched** - its `robots.txt` is `Disallow: /` for all agents. |
| Media available | n/a - structured records |
| Record count | **1,175** WisDOT road segments (complete, not paged - `exceededTransferLimit` absent) + **25** USGS atmospheric sites |
| Geographic coverage | Statewide. Road segments as WGS84 polylines; atmospheric sites as points with datum + declared accuracy. |
| Update cadence | Road conditions carry `REPORT_UPDATED`/`REPORT_CREATED`; cadence not established. USGS sites are an inventory, not a stream. |
| Terms / licence | Road conditions: **UNKNOWN** - `copyrightText` empty, and Wisconsin's data is re-hosted by Iowa DOT, so whose terms govern is genuinely unclear. USGS: **public domain**. |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`data/states/wisconsin/sensor-observations/wisdot-road-conditions/SOURCE-RECORD.md`](data/states/wisconsin/sensor-observations/wisdot-road-conditions/SOURCE-RECORD.md) and [`data/states/wisconsin/sensor-observations/usgs-water-services/SOURCE-RECORD.md`](data/states/wisconsin/sensor-observations/usgs-water-services/SOURCE-RECORD.md). **All 1,175 segments currently report `ROAD_CONDITION = 0`** - consistent with an off-season winter product fetched in August, but the code table was not retrieved, so **`0` has no verified meaning**. Do not treat it as "clear roads." WisDOT is 1 of 8 state DOTs in this service, so it is a ready-made multi-state source. Records link back to `511wi.gov`, so a first-party Wisconsin feed likely exists and would be preferable - but must be found via documentation, not URL guessing. |

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
| Status | `none-found` |
| Operator / agency | n/a - no publishing agency identified |
| Public system | None. Governance is published; locations are not. |
| Machine-readable endpoint(s) | **None.** ArcGIS catalog search returned 0 matches. |
| Auth model | n/a |
| Media available | n/a - governance documents only. **Never plate reads.** |
| Record count | **0 locations, 0 counts** across every official channel checked. |
| Geographic coverage | n/a - nothing geolocated to record |
| Update cadence | n/a |
| Terms / licence | **UNKNOWN** for the governance documents; treat as restrictive per `MacEvil.md` §12 |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`data/states/wisconsin/documents-static-datasets/wisconsin-alpr-legislation/SOURCE-RECORD.md`](data/states/wisconsin/documents-static-datasets/wisconsin-alpr-legislation/SOURCE-RECORD.md). **Both 2025 ALPR bills failed to pass (3/23/2026)** - verified from the legislature's own history pages - so AB300's DOJ grant programme was never created and **no award list exists**; that lead is closed, not merely unpursued. Milwaukee PD SOP 735 parsed (15 pages): real policy, **zero** locations or counts, same as Indiana. **Newspaper-reported Madison/Dane County camera counts were seen and deliberately rejected** - press coverage is not an official channel under §4. `none-found` means no *official source publishes locations*, **not** that Wisconsin lacks ALPR - it plainly has it. Per §4 passive-only, that is a valid terminal state; no outreach made or suggested. |

### 1.6 Other public sources

Park/NPS/BLM webcams, transit, ports, aviation, municipal open data, anything else.

| Field | Value |
| --- | --- |
| Status | `confirmed` |
| Operator / agency | U.S. Geological Survey (federal); Wisconsin DNR (state GIS) |
| Public system | USGS Water Services (NWIS); `dnrmaps.wi.gov` ArcGIS Server 11.3 |
| Machine-readable endpoint(s) | `https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=wi&siteType=ST&hasDataTypeCd=iv&siteStatus=active`; `https://dnrmaps.wi.gov/arcgis/rest/services?f=json` |
| Auth model | None for either. `robots.txt` checked first on both hosts; neither exists (404), so no directives apply. |
| Media available | n/a - structured records and a service catalog |
| Record count | **215** active real-time stream-gauge sites (parsed from the hashed RDB). WDNR: 26 folders, 0 root services advertised. |
| Geographic coverage | Statewide. Every gauge row carries lat/long with a stated datum (NAD83) and a publisher-declared accuracy code. |
| Update cadence | USGS activates/retires sites continuously; the count is as-of 2026-08-29 |
| Terms / licence | USGS: **public domain** (US federal work). WDNR: **UNKNOWN** - per-service `licenseInfo` not inspected; treat as restrictive. |
| ATLAS adapter | None built |
| Last verified | 2026-08-29 |
| Notes | Evidence: [`data/states/wisconsin/sensor-observations/usgs-water-services/SOURCE-RECORD.md`](data/states/wisconsin/sensor-observations/usgs-water-services/SOURCE-RECORD.md) and [`data/states/wisconsin/documents-static-datasets/wisconsin-dnr-gis/SOURCE-RECORD.md`](data/states/wisconsin/documents-static-datasets/wisconsin-dnr-gis/SOURCE-RECORD.md). **Wisconsin's first source yielding real per-state coordinate-bearing records** - the WZDx feed aside, its other sources so far are endpoints whose payloads were not downloaded. Query is **streams only**, a real limitation for a lake state. WDNR's zero-camera token scan is a **weak** negative (26 folders unopened) and must not be cited as a camera negative. Wisconsin has further official GIS estates (DHS, DPI, SAGIC) that were **not** fetched. |

---
## 2. Source discovery dossier (imported research)

Wisconsin is a **strong transportation-camera and public-radio state**, with an important distinction on ALPR:

* **WisDOT 511 provides a statewide public traffic-camera network.**
* WisDOT publishes transportation data through multiple machine-readable/open-data mechanisms, including its **511 Wisconsin API/data services**.
* Wisconsin has a substantial statewide public-safety radio infrastructure, including the **WISCOM** statewide interoperable radio system.
* Public scanner coverage is extensive through Broadcastify and RadioReference.
* **ALPR is deployed by Wisconsin law-enforcement agencies**, including Flock deployments.
* I did **not** find a verified statewide public ALPR registry comparable to Virginia's or Washington's.
* Wisconsin therefore requires **agency-by-agency ALPR discovery**, using procurement records, agency policies, public-records documents, and vendor deployment information.

---

### 1. Wisconsin Department of Transportation — WisDOT

The primary transportation authority is the Wisconsin Department of Transportation.

Wisconsin Department of Transportation

Its public traveler-information system is:

[511 Wisconsin](https://511wi.gov/?utm_source=chatgpt.com)

WisDOT's 511 system provides:

* traffic cameras
* incidents
* construction
* road conditions
* traffic speeds
* closures
* message signs
* winter road information
* travel information.

#### ATLAS

```text
SOURCE_ID:
    WI-WISDOT-511

OWNER:
    WISDOT

TYPE:
    STATE_TRAVELER_INFORMATION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 2. Wisconsin statewide traffic cameras

511 Wisconsin provides a dedicated statewide camera map.

The public system exposes cameras throughout Wisconsin's:

* Interstate system
* major state highways
* metropolitan areas
* bridges
* interchanges
* border approaches.

[511 Wisconsin Traffic Cameras](https://511wi.gov/map/Cctv/?utm_source=chatgpt.com)

The camera interface is particularly useful because the cameras are integrated into the same geographic system as:

```text
TRAFFIC
INCIDENTS
ROAD CONDITIONS
CONSTRUCTION
MESSAGE SIGNS
WEATHER
```

#### ATLAS

```text
SOURCE_ID:
    WI-WISDOT-CCTV

TYPE:
    STATE_TRAFFIC_CAMERA_NETWORK

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 3. WisDOT 511 camera records

Individual camera records expose information such as:

* camera name
* roadway
* direction
* location
* geographic coordinates
* image
* operational status.

The important point is that ATLAS should **not scrape the visual map if the underlying 511 data service can be queried directly**.

#### Recommended architecture

```text
WI-WISDOT-511
       ↓
511 DATA SERVICE
       ↓
CAMERA INVENTORY
       ↓
CANONICAL CAMERA
       ↓
CURRENT OBSERVATION
```

rather than:

```text
HTML PAGE
   ↓
SCREEN SCRAPER
```

---

### 4. Wisconsin 511 API

Wisconsin's 511 system provides a public API/data-access mechanism.

[511 Wisconsin Developer / Data Services](https://511wi.gov/about/developer-resources?utm_source=chatgpt.com)

The API/data ecosystem provides machine-readable transportation information rather than requiring the consumer website to be treated as the authoritative source.

#### ATLAS

```text
SOURCE_ID:
    WI-WISDOT-511-API

TYPE:
    TRANSPORTATION_API

PUBLIC:
    YES

MACHINE_READABLE:
    YES

STATUS:
    VERIFIED
```

This should be a **priority ingestion adapter**.

---

### 5. Wisconsin camera + GIS strategy

Wisconsin is particularly suited to ATLAS's existing source model:

```text
ORGANIZATION
    │
    ▼
WISDOT
    │
    ├── PROGRAM
    │      511
    │
    └── SOURCE
           │
           ├── CCTV
           ├── INCIDENTS
           ├── ROAD CONDITIONS
           ├── DMS
           └── TRAFFIC
```

The camera should therefore carry:

```text
source_id
source_record_id
latitude
longitude
road
direction
camera_name
image_url
status
last_updated
```

where available.

---

### 6. Wisconsin Department of Transportation traffic operations

WisDOT operates statewide traffic-management functions through its transportation-management centers.

WisDOT's traffic-management infrastructure includes:

* CCTV
* traffic detectors
* dynamic message signs
* road/weather information
* incident management
* traveler information.

#### ATLAS

```text
WI-WISDOT-TMC
WI-WISDOT-TRAFFIC-DETECTORS
WI-WISDOT-DMS
WI-WISDOT-RWIS
WI-WISDOT-INCIDENTS
```

These should be treated as separate source families.

---

### 7. Wisconsin 511 road/weather data

Wisconsin's 511 platform provides road-condition information, particularly important during winter.

This includes:

* pavement conditions
* winter road conditions
* snow/ice information
* road closures
* restrictions.

#### ATLAS

```text
SOURCE_ID:
    WI-WISDOT-ROAD-CONDITIONS

TYPE:
    ROAD_CONDITION

PUBLIC:
    YES

STATUS:
    VERIFIED
```

---

### 8. Wisconsin RWIS

WisDOT uses roadway-weather infrastructure throughout the state.

Typical station measurements include:

* pavement temperature
* air temperature
* precipitation
* pavement condition
* wind
* surface status.

#### ATLAS

```text
SOURCE_ID:
    WI-WISDOT-RWIS

TYPE:
    ROAD_WEATHER_INFORMATION_SYSTEM

STATUS:
    VERIFIED
```

The current station inventory should be queried from WisDOT's machine-readable datasets rather than using an old published station count.

---

### 9. Wisconsin traffic detectors

WisDOT also operates traffic-detection infrastructure.

This includes systems used to determine:

* traffic volumes
* speeds
* congestion
* travel times
* roadway conditions.

#### ATLAS

```text
SOURCE_ID:
    WI-WISDOT-TRAFFIC-DETECTORS

TYPE:
    TRAFFIC_SENSOR

PUBLIC_RAW_SENSOR_DATA:
    VARIABLE

PUBLIC_DERIVED_TRAFFIC_DATA:
    YES
```

Do not automatically classify every detector as an independently downloadable raw sensor.

---

### 10. Wisconsin toll / enforcement-camera distinction

Wisconsin should not have its normal WisDOT CCTV inventory mixed with:

* red-light cameras
* speed cameras
* toll cameras
* ALPR
* parking cameras.

Those are different source classes.

ATLAS should retain:

```text
CAMERA_PURPOSE:
    TRAFFIC_MONITORING
    ALPR
    ENFORCEMENT
    PARKING
    SECURITY
    OTHER
```

rather than assuming that every public camera is an enforcement device.

---

### 11. Wisconsin Statewide Interoperability System — WISCOM

The major radio discovery is:

**WISCOM — Wisconsin Interoperability System for Communications**

Wisconsin operates a statewide interoperable public-safety radio network.

[Wisconsin WISCOM information](https://wisconsindot.gov/Pages/safety/education/wiiscom/default.aspx?utm_source=chatgpt.com)

WISCOM is designed to provide interoperable communications for:

* state agencies
* local governments
* law enforcement
* fire
* EMS
* emergency management.

#### ATLAS

```text
SOURCE_ID:
    WI-WISCOM

OWNER:
    STATE OF WISCONSIN

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STATUS:
    VERIFIED
```

---

### 12. WISCOM radio technology

WISCOM is based on **Project 25 (P25)** digital radio technology.

The system is designed as a statewide trunked/interoperable radio network.

#### ATLAS

```text
WI-WISCOM
│
├── P25
├── DIGITAL
├── TRUNKED
├── STATE
├── COUNTY
├── MUNICIPAL
├── FIRE
├── EMS
└── LAW ENFORCEMENT
```

This is one of the strongest radio sources for the state.

---

### 13. Wisconsin State Patrol radio

Wisconsin State Patrol uses statewide/interoperable radio infrastructure.

The State Patrol is an especially important ATLAS radio target because its traffic-enforcement footprint covers the entire state.

#### ATLAS

```text
SOURCE_ID:
    WI-WSP-RADIO

TYPE:
    STATE_POLICE_RADIO

RELATIONSHIP:
    WISCOM + OTHER RADIO INFRASTRUCTURE

PUBLIC_AUDIO:
    PARTIAL
```

Do not assume every WSP talkgroup is publicly monitorable.

---

### 14. WISCOM local agency participation

WISCOM is designed for interoperability between different governmental organizations.

Therefore the canonical model should be:

```text
WISCOM
│
├── STATE AGENCIES
│
├── COUNTY AGENCIES
│
├── MUNICIPAL AGENCIES
│
├── FIRE
│
├── EMS
│
└── EMERGENCY MANAGEMENT
```

rather than creating a separate "state police radio" database disconnected from the statewide system.

---

### 15. Wisconsin radio sites

The statewide WISCOM infrastructure consists of numerous radio sites distributed throughout Wisconsin.

The important ATLAS distinction is:

```text
SYSTEM
    ≠
SITE
    ≠
TOWER
    ≠
TALKGROUP
    ≠
FREQUENCY
    ≠
PUBLIC AUDIO FEED
```

Those need separate canonical records.

---

### 16. RadioReference — Wisconsin

[RadioReference Wisconsin](https://www.radioreference.com/db/browse/stid/50?utm_source=chatgpt.com)

RadioReference provides a large public database of Wisconsin radio systems.

Useful fields include:

* system name
* agency
* frequencies
* talkgroups
* site information
* county
* modulation
* radio technology.

#### ATLAS

```text
SOURCE_ID:
    WI-RADIOREFERENCE

TYPE:
    RADIO_METADATA_DATABASE

PUBLIC:
    YES

STATUS:
    VERIFIED
```

This is **secondary metadata**, not the underlying radio system.

---

### 17. Broadcastify — Wisconsin

[Broadcastify Wisconsin](https://www.broadcastify.com/listen/stid/50?utm_source=chatgpt.com)

Broadcastify provides public scanner audio throughout Wisconsin.

Current feed counts are dynamic and should be recorded with:

```text
observed_at
feed_count
```

rather than permanently hard-coded.

#### ATLAS

```text
SOURCE_ID:
    WI-BROADCASTIFY

TYPE:
    PUBLIC_SCANNER_AUDIO

PUBLIC:
    YES

COUNT:
    DYNAMIC

STATUS:
    VERIFIED
```

---

### 18. Wisconsin scanner coverage

Broadcastify has feeds covering major Wisconsin population centers, including:

* Milwaukee
* Madison
* Green Bay
* Kenosha
* Racine
* Waukesha
* Appleton
* Oshkosh
* Eau Claire
* La Crosse
* Sheboygan
* Rockford-area border coverage
* many rural counties.

The important discovery isn't merely the number of feeds.

It is that Wisconsin has **multiple independent public audio feeds covering WISCOM and local systems**.

---

### 19. Milwaukee-area radio

Milwaukee is a separate high-value radio ecosystem.

ATLAS should separately research:

```text
MILWAUKEE POLICE
MILWAUKEE COUNTY
MILWAUKEE FIRE
WAUKESHA COUNTY
RACINE COUNTY
KENOSHA COUNTY
```

and then map their relationship to:

```text
WISCOM
LOCAL TRUNKED SYSTEMS
BROADCASTIFY
RADIOREFERENCE
FCC
```

Do not assume Milwaukee's radio architecture is simply a WISCOM talkgroup.

---

### 20. FCC — Wisconsin radio licenses

The FCC Universal Licensing System remains a foundational source.

#### ATLAS

```text
SOURCE_ID:
    FCC-WI-PUBLIC-SAFETY

TYPE:
    RADIO_LICENSE_DATABASE

PUBLIC:
    YES

DATA:
    LICENSE
    FREQUENCY
    CALLSIGN
    LOCATION
    EMISSION
    LICENSEE
```

This is particularly useful for validating:

* local police frequencies
* fire/EMS frequencies
* microwave links
* trunked-system licenses
* public-safety sites.

---

### 21. ALPR — Wisconsin

Now the important surveillance portion.

Wisconsin **does have ALPR deployments**.

However, I do **not** find a single authoritative statewide ALPR registry that currently provides:

```text
EVERY AGENCY
EVERY CAMERA
EVERY LOCATION
EVERY SYSTEM
```

Therefore:

```text
STATEWIDE_ALPR_REGISTRY:
    NOT VERIFIED

STATEWIDE_ALPR_INVENTORY:
    NOT VERIFIED

STATEWIDE_ALPR_RAW_DATA:
    NOT PUBLIC
```

---

### 22. Flock Safety in Wisconsin

Flock Safety systems are deployed by Wisconsin law-enforcement agencies.

Flock systems are generally:

```text
FIXED CAMERA
+
LICENSE-PLATE RECOGNITION
+
VEHICLE ATTRIBUTE EXTRACTION
+
SEARCHABLE VEHICLE EVENTS
```

The important ATLAS source strategy is **not to rely solely on Flock's marketing/deployment map**.

Instead:

```text
AGENCY
 ↓
CITY/COUNTY PROCUREMENT
 ↓
CONTRACT
 ↓
FLOCK
 ↓
ALPR CAMERA
 ↓
LOCATION
```

The contract or public-record document is stronger evidence of a specific deployment.

---

### 23. Wisconsin local ALPR research

High-value targets include:

```text
MILWAUKEE AREA
MADISON AREA
GREEN BAY
APPLETON
EAU CLAIRE
KENOSHA
RACINE
WAUKESHA
OSHKOSH
JANESVILLE
LA CROSSE
```

and county sheriff offices.

For each agency ATLAS should search:

```text
"Flock Safety"
"Flock camera"
"automated license plate reader"
"ALPR"
"license plate reader"
"vehicle recognition"
"surveillance camera"
```

plus:

```text
agency + procurement
agency + contract
agency + council
agency + budget
agency + public records
```

---

### 24. Wisconsin ALPR procurement is the stronger source

For Wisconsin, procurement documents are likely to be substantially more useful than searching for a nonexistent statewide registry.

Canonical discovery:

```text
MUNICIPALITY
     ↓
PURCHASING RECORD
     ↓
VENDOR
     ↓
CONTRACT
     ↓
SYSTEM
     ↓
CAMERA COUNT
     ↓
LOCATION
     ↓
DEPLOYMENT DATE
```

#### ATLAS

```text
SOURCE_ID:
    WI-LOCAL-ALPR-PROCUREMENT

TYPE:
    ALPR_DEPLOYMENT_DISCOVERY

CONFIDENCE:
    HIGH WHEN CONTRACT/PURCHASE RECORD EXISTS
```

---

### 25. Wisconsin ALPR data should NOT be confused with public cameras

For example:

```text
WISDOT CCTV
    =
traffic observation

FLOCK ALPR
    =
vehicle recognition

POLICE BODY CAMERA
    =
law-enforcement evidence

CITY CCTV
    =
security/municipal monitoring
```

ATLAS should never collapse these into one generic "camera."

---

### 26. Wisconsin police body cameras

Wisconsin law-enforcement agencies also use body-worn cameras.

However, these are **not public live-camera sources** and generally should not be treated as ATLAS public camera endpoints.

#### ATLAS

```text
CATEGORY:
    BODY_WORN_CAMERA

PUBLIC_LIVE_STREAM:
    NO

PUBLIC_RECORD:
    VARIABLE

INGEST:
    NO
```

Only include public records relating to deployments if the project's surveillance inventory eventually expands beyond externally observable cameras.

---

### 27. Wisconsin municipal CCTV

There is a significant second camera layer outside WisDOT:

```text
CITY
COUNTY
AIRPORT
UNIVERSITY
TRANSIT
PARKING
PUBLIC FACILITY
```

These are highly fragmented.

Major research targets include:

#### Milwaukee

Municipal/public-safety camera infrastructure.

#### Madison

Traffic-management and municipal cameras.

#### Green Bay

Municipal traffic/security cameras.

#### Waukesha

Traffic and municipal surveillance infrastructure.

#### Racine / Kenosha

Municipal traffic and public-safety systems.

These should be discovered individually rather than falsely represented as one statewide system.

---

### 28. Wisconsin university cameras

Wisconsin has numerous major public universities whose transportation/security departments operate cameras.

Examples include:

```text
UW-Madison
UW-Milwaukee
UW-Green Bay
UW-La Crosse
UW-Eau Claire
UW-Oshkosh
UW-Stevens Point
```

These are **not automatically public live feeds**.

ATLAS should only mark a camera as public when an actual public endpoint or officially published camera inventory is found.

---

### 29. Wisconsin transit cameras

Transit agencies represent another potential source class:

```text
Milwaukee County Transit System
Madison Metro Transit
Green Bay Metro
other municipal/regional transit
```

Most onboard/security camera systems are not public.

Therefore:

```text
TRANSIT CAMERA SYSTEM:
    EXISTS

PUBLIC CAMERA FEED:
    NOT ASSUMED
```

---

### 30. Wisconsin airport cameras

Wisconsin airports may operate:

* runway cameras
* apron cameras
* security CCTV
* weather cameras.

Only publicly published feeds should be ingested.

Potential high-value airport research targets include:

```text
Milwaukee Mitchell
Madison
Green Bay Austin Straubel
Appleton
La Crosse
Eau Claire
Central Wisconsin
```

These should remain separate from WisDOT CCTV.

---

### 31. Wisconsin DOT camera architecture

The most reliable statewide camera pipeline should be:

```text
                 WISDOT
                    │
                    ▼
              511 WISCONSIN
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
        CCTV      EVENTS     WEATHER
          │
          ▼
    CAMERA RECORD
          │
          ├── LOCATION
          ├── ROAD
          ├── DIRECTION
          ├── IMAGE
          └── STATUS
```

This is an excellent fit for ATLAS.

---

### 32. Machine-readable priority

For Wisconsin I would rank sources:

#### Tier 1

```text
WISDOT 511 DATA/API
WISDOT MACHINE-READABLE CAMERA DATA
```

#### Tier 2

```text
WISDOT GIS/DATASETS
WISCOM OFFICIAL DOCUMENTATION
FCC
```

#### Tier 3

```text
RADIOREFERENCE
BROADCASTIFY
```

#### Tier 4

```text
MUNICIPAL PROCUREMENT
CITY COUNCIL DOCUMENTS
COUNTY CONTRACTS
ALPR POLICIES
```

#### Tier 5

```text
NEWS ARTICLES
VENDOR MARKETING PAGES
```

The lower tiers should only establish leads unless stronger evidence is available.

---

### 33. Exact Wisconsin source architecture

```text
WISCONSIN
│
├── WISDOT
│   │
│   ├── 511
│   │   ├── CCTV
│   │   ├── INCIDENTS
│   │   ├── CONSTRUCTION
│   │   ├── ROAD CONDITIONS
│   │   ├── DMS
│   │   ├── WEATHER
│   │   └── TRAFFIC
│   │
│   ├── TMC
│   ├── RWIS
│   └── TRAFFIC DETECTORS
│
├── RADIO
│   │
│   ├── WISCOM
│   ├── WISCONSIN STATE PATROL
│   ├── COUNTY SYSTEMS
│   ├── MUNICIPAL SYSTEMS
│   ├── FCC
│   ├── RADIOREFERENCE
│   └── BROADCASTIFY
│
└── SURVEILLANCE
    │
    ├── FLOCK
    ├── LOCAL ALPR
    ├── MUNICIPAL CCTV
    ├── UNIVERSITY CCTV
    ├── AIRPORT CAMERAS
    └── TRANSIT CCTV
```

---

### 34. Exact ATLAS source IDs

```text
WI-WISDOT
WI-WISDOT-511
WI-WISDOT-511-API
WI-WISDOT-CCTV
WI-WISDOT-CAMERA-MAP
WI-WISDOT-TMC
WI-WISDOT-RWIS
WI-WISDOT-TRAFFIC
WI-WISDOT-TRAFFIC-DETECTORS
WI-WISDOT-DMS
WI-WISDOT-INCIDENTS
WI-WISDOT-ROAD-CONDITIONS
WI-WISDOT-WEATHER

WI-WISCOM
WI-WISCOM-SITES
WI-WISCOM-TALKGROUPS
WI-WISCOM-INTEROPERABILITY

WI-WSP-RADIO
WI-COUNTY-RADIO
WI-MUNICIPAL-RADIO
WI-FCC-PUBLIC-SAFETY
WI-RADIOREFERENCE
WI-BROADCASTIFY

WI-FLOCK-ALPR
WI-LOCAL-ALPR
WI-ALPR-PROCUREMENT
WI-ALPR-POLICIES
WI-ALPR-LOCATIONS

WI-MUNICIPAL-CCTV
WI-UNIVERSITY-CCTV
WI-AIRPORT-CCTV
WI-TRANSIT-CCTV
```

---

### 35. Exact-source matrix

| Source                           | Category             | Public | Machine-readable | Status                |
| -------------------------------- | -------------------- | -----: | ---------------: | --------------------- |
| 511 Wisconsin                    | Traveler information |     🟢 |               🟢 | **VERIFIED**          |
| WisDOT CCTV                      | Traffic cameras      |     🟢 |               🟢 | **VERIFIED**          |
| WisDOT 511 API/data              | Transportation API   |     🟢 |               🟢 | **VERIFIED**          |
| WisDOT TMC                       | Traffic management   |     🟡 |               🟡 | **VERIFIED**          |
| WisDOT RWIS                      | Weather              |     🟡 |               🟡 | **VERIFIED**          |
| WisDOT traffic detectors         | Sensors              |     🟡 |               🟡 | **VERIFIED**          |
| WISCOM                           | Statewide radio      |     🟡 |               🟡 | **VERIFIED**          |
| WISCOM P25                       | Radio                |     🟡 |               🟡 | **VERIFIED**          |
| Wisconsin State Patrol           | Police radio         |     🟡 |               🟡 | **VERIFIED**          |
| FCC                              | Radio licenses       |     🟢 |            🟢/🟡 | **VERIFIED**          |
| RadioReference                   | Radio metadata       |     🟢 |               🟡 | **VERIFIED**          |
| Broadcastify                     | Scanner audio        |     🟢 |               🟡 | **VERIFIED**          |
| Flock                            | ALPR                 |     🔴 |               🔴 | **LOCAL DEPLOYMENTS** |
| Local ALPR                       | ALPR                 |     🔴 |               🔴 | **FRAGMENTED**        |
| ALPR procurement records         | ALPR discovery       |     🟢 |               🟡 | **HIGH-VALUE**        |
| Statewide ALPR registry          | ALPR                 |     🔴 |               🔴 | **NOT FOUND**         |
| Statewide ALPR inventory         | ALPR                 |     🔴 |               🔴 | **NOT FOUND**         |
| Public raw ALPR                  | ALPR                 |     🔴 |               🔴 | **NOT FOUND**         |
| Public live ALPR                 | ALPR                 |     🔴 |               🔴 | **NOT FOUND**         |
| Statewide surveillance inventory | Surveillance         |     🔴 |               🔴 | **NOT FOUND**         |

---

### 36. Wisconsin rating

| Category                             |                        Rating |
| ------------------------------------ | ----------------------------: |
| State traffic cameras                |              🟢 **Excellent** |
| Official transportation system       |              🟢 **Excellent** |
| Machine-readable transportation data |              🟢 **Excellent** |
| Statewide radio                      |              🟢 **Excellent** |
| P25 infrastructure                   |              🟢 **Excellent** |
| Scanner coverage                     |              🟢 **Excellent** |
| ALPR deployments                     | 🟡 **Confirmed / fragmented** |
| Statewide ALPR inventory             |             🔴 **None found** |
| Public ALPR data                     |                     🔴 **No** |
| Municipal CCTV                       |             🟡 **Fragmented** |
| Airport cameras                      |      🟡 **Research required** |
| University cameras                   |      🟡 **Research required** |

### **Overall: 8.9 / 10**

---

### 37. Most important Wisconsin discoveries

### **1. WisDOT is the primary camera source**

The 511 Wisconsin system is the statewide starting point for public transportation cameras and associated traffic information.

### **2. WISCOM is the radio equivalent**

Wisconsin has a statewide P25 interoperability architecture rather than requiring ATLAS to reconstruct public-safety communications entirely county by county.

### **3. Broadcastify provides the public-audio layer**

The correct relationship is:

```text
WISCOM / LOCAL RADIO
        ↓
RECEIVER
        ↓
BROADCASTIFY
        ↓
PUBLIC AUDIO
```

### **4. ALPR exists, but Wisconsin lacks a Washington/Virginia-style statewide registry**

The correct discovery strategy is:

```text
AGENCY
 ↓
PROCUREMENT
 ↓
CONTRACT
 ↓
VENDOR
 ↓
ALPR SYSTEM
 ↓
CAMERA
 ↓
LOCATION
```

### **5. Do not invent a statewide ALPR count**

That is particularly important here. The evidence supports **deployment**, not a complete statewide inventory.

---

#### Wisconsin's highest-value starting points

[511 Wisconsin](https://511wi.gov/?utm_source=chatgpt.com)

[511 Wisconsin Camera Map](https://511wi.gov/map/Cctv/?utm_source=chatgpt.com)

[Wisconsin WISCOM](https://wisconsindot.gov/Pages/safety/education/wiiscom/default.aspx?utm_source=chatgpt.com)

[RadioReference Wisconsin](https://www.radioreference.com/db/browse/stid/50?utm_source=chatgpt.com)

[Broadcastify Wisconsin](https://www.broadcastify.com/listen/stid/50?utm_source=chatgpt.com)

**Next alphabetically: Wyoming.**
