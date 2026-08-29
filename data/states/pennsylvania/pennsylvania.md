---
state: Pennsylvania
usps: PA
slug: pennsylvania
dossier_number: 38
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
  imported_from: project_atlas_state_data/Pennsylvania.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Pennsylvania (PA) - ATLAS State Record

> Dossier **38 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Pennsylvania is another **very high-value state** for this project.

The important distinction is that Pennsylvania has **multiple separate source systems**:

1. **PennDOT / 511PA**
2. **PennDOT ArcGIS**
3. **Pennsylvania Turnpike Commission**
4. **PA-STARNet statewide P25 radio**
5. **County/municipal radio systems**
6. **Large public scanner ecosystem**
7. **A substantial ALPR ecosystem**
8. **Pennsylvania State Police ALPR infrastructure**

The PennDOT GIS camera layer is particularly good because it exposes substantially more than just coordinates.

---

### 1. Pennsylvania Department of Transportation

Primary transportation agency:

**PennDOT — Pennsylvania Department of Transportation**

Traveler-information system:

**511PA**

![Image](https://images.openai.com/static-rsc-4/o7UztzzWWsRnLGL_csuZXrOAu6DgXfJQy-MXuZnZeI80FLw2nm2NPOtH1XWAsS_tdhk9Xof6JhnOC-KgKJImc1hZqDyw0RXm4-K9IDUwyTBdfemtyuOoxeMnROr9e9KK_ZveiGP-Eybb2PFKpvVljWbZw3VzwuMAfHfbZK2WccEw3N4yqpNuiUGju6C-VUol?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/cLzLbX6PHEQzbR1MvHLBsxHXcmUsVgI8LPu_khvjFcNBNyzuX-8LkQNonp6Xul468xt1tiTPovEY2h6GoUoFUri56aJga23Ki2TxhGQozSjad_EkLgU57XhdGbxtHovo3ZIFiZ2neSAWQb9NLaJA399hphUeso-EurwxoWrhkBS6nKFQb8VUVEWD5KekSC9N?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/zj06gk09TzW0BgEuHvz2dM6xb1_ecwBJDohTS37k7qqh-r6K0Gsrc-9x4FOfZ0r9Yy1z4NAQv6SnVh5nsGMe8tUMDG4pe-uQKiT7KRZFymQ5NfApDk0HQiksx4OQW0ggjo44xAhMxrnMAxvyWNfEdktPkkBdVk7l5jc2O18OaWtF2pkLL4EKpid4tT6ig1Vf?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/TZras_z-8Bdk3BWep26ProIHkmFzRUrvHoDiwialeFmpioJVMI5QW85UMnnP0oMdpVtZEbLScBuoWqALhqqzSQVBNaud-2Gb8zgc95mudA7ZBHsKjclG0JQ6HFfH5_Z--TSmItmyvLBt1WLHVXiqz_rtSII7-C2S38P9XxZuo7iDBt-d3sUful-eeRfa6WuN?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/s5_qXVkd-J_SLJ9dBLv43US1NYKgL0VbrhCtP_NAIrDHpy0LGPitlZA-HfOX4w0EqYueUmHqnNLIbg1EUFVPm5wrJavJ4VCth6juSOMQAHh7x6KzkxPOf7eDSHiwH_NQJ_BFwu-Fqq1MfhygldfZP-0D3ey_gRn_TL5ExnxMR2AmiVApIw_UIQ_bGAdLKn9e?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/wwc32Brbi5oK1VcmUkB1tuo_I6w713vIcYZulgeO7k4AkYUMPbiKkbfkqsUItb6BqYSEor3FKEeSu-UxyLzwvznQxctedT6qHqaMMYqDp1IPCetUExvbNe5hXwmctF6HzS50XXavC1P8hMas2ofgFyQTNF74M_bB4F9Q1UxFg9yeJLpxNXxGqG5a7sp13-L7?purpose=fullsize)

Official:

[511PA](https://www.511pa.com/?utm_source=chatgpt.com)

PennDOT states that 511PA provides access to **more than 950 traffic cameras**. ([Pennsylvania Government][1])

#### Registry

```text
SOURCE_ID:
    PA-PENNDOT-511PA

OWNER:
    Pennsylvania Department of Transportation

PROGRAM:
    511PA

TYPE:
    STATE_TRAVELER_INFORMATION

STATUS:
    🟢 VERIFIED
```

---

### 2. PennDOT transportation data feeds

PennDOT explicitly provides transportation-related data feeds for:

* general public
* commercial vendors
* transportation agencies
* researchers
* media
* other users.

PennDOT says the feeds are available **free of charge**, but access requires submitting its Data Feed Request Form. ([Pennsylvania Government][2])

This is important:

> **PennDOT data is public, but some machine feeds require registration.**

It should not be treated as an anonymous/open API without verification.

```text
PUBLIC_DATA:
    🟢 YES

COST:
    🟢 FREE

REGISTRATION:
    🟡 REQUIRED FOR DATA FEEDS

AUTHENTICATION:
    🟡 DEPENDS ON FEED

CAMERA_STREAM_LICENSE:
    🟡 REQUIRED
```

PennDOT specifically says use of traffic-camera streams is governed by a **Non-Exclusive Video Sharing License Agreement**. ([Pennsylvania Government][2])

---

### 3. PennDOT CCTV feed

PennDOT officially lists:

### Traffic Cameras

and states:

> Real-time streaming video images from over 950 traffic cameras.

([Pennsylvania Government][2])

#### Registry

```text
SOURCE_ID:
    PA-PENNDOT-CCTV

TYPE:
    TRAFFIC_CAMERA

COUNT:
    950+

DATA:
    REAL-TIME STREAMING VIDEO

STATUS:
    🟢 VERIFIED
```

This is one of the strongest official state-camera inventories in the country.

---

### 4. PennDOT Camera List

PennDOT provides a dedicated:

### 511PA Camera List

from the official data-feed page. ([Pennsylvania Government][2])

The public 511PA interface also exposes camera functionality directly through its map and camera pages. ([511PA][3])

#### Registry

```text
SOURCE_ID:
    PA-PENNDOT-511PA-CAMERA-LIST

PARENT:
    PA-PENNDOT-CCTV

TYPE:
    CAMERA_DIRECTORY

STATUS:
    🟢 VERIFIED
```

---

### 5. PennDOT ArcGIS — Traffic Cameras

This is the **major discovery**.

PennDOT publishes a direct ArcGIS REST Feature Layer:

### `Traffic Cameras`

Official endpoint:

[PennDOT Traffic Cameras ArcGIS REST Layer](https://gis.penndot.pa.gov/gis/rest/services/paprojects/paprojects/MapServer/14?utm_source=chatgpt.com)

The layer is:

```text
Layer ID:
    14

Name:
    Traffic Cameras

Geometry:
    Point
```

([PennDOT GIS][4])

#### Registry

```text
SOURCE_ID:
    PA-PENNDOT-CCTV-ARCGIS

TYPE:
    ARCGIS_FEATURE_LAYER

LAYER:
    Traffic Cameras

GEOMETRY:
    POINT

STATUS:
    🟢 VERIFIED
```

---

### 6. This is a machine-readable source

The ArcGIS layer supports:

```text
JSON
GeoJSON
PBF
```

and supports:

* advanced queries
* statistics
* ordering
* distinct queries
* pagination
* spatial queries
* SQL expressions.

([PennDOT GIS][4])

That means this is **not merely a map layer intended for human viewing**.

It is a usable machine-data source.

#### ATLAS classification

```text
MACHINE_READABLE:
    🟢 YES

JSON:
    🟢

GEOJSON:
    🟢

PBF:
    🟢

PAGINATION:
    🟢

SPATIAL QUERY:
    🟢

SQL QUERY:
    🟢
```

---

### 7. Exact PennDOT camera fields

This is where Pennsylvania becomes particularly valuable.

The layer exposes:

```text
STATEWIDE_ID
DISTRICT_ID
STATUS_ID
STATUS_NAME

MPMS_PROJ_ID
PLAN_DEPLOY_YEAR

INSTALL_TYPE_ID
INSTALL_TYPE_NAME

STRUCT_TYPE_ID
STRUCT_TYPE_NAME

POLE_HEIGHT

LOC_DISTRICT_NO
OWNER_DISTRICT_NO

LOCATION_DESC
MILE_MARKER
EXIT_NUMBER

CTY_CODE
CTY_NAME

ST_RT_NO
SR_NAME
JURIS
SEG_NO
OFFSET

IS_INTERSTATE

LATITUDE
LONGITUDE

SOURCE_IS_LATLONG
SIDE_IND

MANUFACTURER
MODEL

POWER_TYPE_ID
POWER_TYPE_NAME

COMM_TYPE_ID
COMM_TYPE_NAME

INSTALLATION_DATE

URL

IS_FROM_STATEWIDE
IS_FROM_REGIONAL
IS_FROM_ROPS
IS_FROM_MPMS

RECORD_UPDATE
GEOMETRY
ID
```

([PennDOT GIS][4])

This is **far more useful than a basic camera list**.

---

### 8. PennDOT camera identity

The most important field is:

```text
STATEWIDE_ID
```

This should become the primary source-record identifier.

Recommended mapping:

```text
STATEWIDE_ID
        ↓
sourceRecordId
```

Not:

```text
OBJECTID
```

because the statewide ID is clearly intended to identify the asset across PennDOT's statewide system.

#### Recommended ATLAS mapping

```text
sourceRecordId:
    STATEWIDE_ID

sourceDistrict:
    DISTRICT_ID

status:
    STATUS_NAME

location:
    LATITUDE
    LONGITUDE

description:
    LOCATION_DESC

road:
    ST_RT_NO
    SR_NAME

county:
    CTY_NAME

milepost:
    MILE_MARKER

exit:
    EXIT_NUMBER
```

---

### 9. Camera manufacturer/model

This is an unusually useful discovery.

PennDOT exposes:

```text
MANUFACTURER
MODEL
```

([PennDOT GIS][4])

Therefore ATLAS can potentially identify hardware vendors without reverse engineering individual camera pages.

```text
CAMERA
├── manufacturer
├── model
├── installation date
├── structure
├── pole height
├── communication type
└── power type
```

This is excellent provenance data.

---

### 10. Camera communication type

PennDOT exposes:

```text
COMM_TYPE_ID
COMM_TYPE_NAME
```

([PennDOT GIS][4])

That means the dataset may distinguish communication technologies used by the deployed equipment.

This should be preserved exactly.

Do **not** convert these to assumptions like:

```text
"fiber"
"cellular"
"wireless"
```

unless the actual enumeration values are retrieved.

---

### 11. Camera power type

Likewise:

```text
POWER_TYPE_ID
POWER_TYPE_NAME
```

are available. ([PennDOT GIS][4])

This is useful for infrastructure classification.

```text
POWER:
    raw PennDOT enumeration
```

rather than guessing.

---

### 12. Camera installation information

The layer contains:

```text
PLAN_DEPLOY_YEAR
INSTALLATION_DATE
INSTALL_TYPE_ID
INSTALL_TYPE_NAME
STRUCT_TYPE_ID
STRUCT_TYPE_NAME
POLE_HEIGHT
```

([PennDOT GIS][4])

This means ATLAS can track the **physical infrastructure** associated with each camera.

That is useful for:

* historical deployments
* replacement detection
* infrastructure research
* asset lifecycle tracking.

---

### 13. Camera URL

The dataset contains:

```text
URL
```

with a maximum length of 2,000 characters. ([PennDOT GIS][4])

This is extremely important.

```text
CAMERA METADATA
       +
DIRECT URL FIELD
```

The URL's actual semantics need to be sampled from records before classifying it as:

* still-image endpoint
* video stream
* camera detail page
* redirect
* other.

So:

```text
URL:
    🟢 VERIFIED

URL TYPE:
    🟡 RECORD-LEVEL VALIDATION REQUIRED
```

We should **not guess**.

---

### 14. Camera status

The layer exposes:

```text
STATUS_ID
STATUS_NAME
```

([PennDOT GIS][4])

This allows ATLAS to distinguish operational states using PennDOT's own values.

Again:

> Preserve the original enumeration.

Do not invent a translation like `online/offline` until the actual values are inspected.

---

### 15. Camera ownership/source provenance

PennDOT exposes:

```text
IS_FROM_STATEWIDE
IS_FROM_REGIONAL
IS_FROM_ROPS
IS_FROM_MPMS
```

([PennDOT GIS][4])

These are especially interesting.

They indicate that the inventory can incorporate cameras from different PennDOT data/provenance pathways.

ATLAS should retain all four flags.

```text
provenance:
    statewide
    regional
    rops
    mpms
```

---

### 16. Geographic precision

The layer has both:

```text
LATITUDE
LONGITUDE
```

and point geometry. ([PennDOT GIS][4])

Therefore:

```text
COORDINATES:
    🟢 DIRECT

CONVERSION REQUIRED:
    ❌ NO

GEOMETRY:
    POINT
```

This is preferable to systems where coordinates are encoded as scaled integers.

---

### 17. Roadway relationship

PennDOT exposes:

```text
ST_RT_NO
SR_NAME
MILE_MARKER
EXIT_NUMBER
IS_INTERSTATE
SIDE_IND
OFFSET
SEG_NO
JURIS
```

([PennDOT GIS][4])

This allows a much richer canonical camera object:

```text
ROADWAY
├── route number
├── route name
├── mile marker
├── exit
├── interstate flag
├── side
├── offset
└── segment
```

This is excellent for spatial normalization.

---

### 18. PennDOT traffic incidents

PennDOT also provides:

### Road Condition Reporting System — RCRS

The Commonwealth describes it as real-time information for:

* traffic incidents
* roadwork
* winter road conditions
* other events.

([Pennsylvania Government][2])

#### Registry

```text
SOURCE_ID:
    PA-PENNDOT-RCRS

TYPE:
    TRAFFIC_EVENT

DATA:
    INCIDENTS
    ROADWORK
    WINTER_CONDITIONS
    OTHER_EVENTS

STATUS:
    🟢 VERIFIED
```

---

### 19. 511PA Roadway Network

PennDOT also publishes:

### 511PA Roadway Network

with accompanying documentation/API. ([Pennsylvania Government][2])

```text
SOURCE_ID:
    PA-PENNDOT-511PA-ROADWAY

TYPE:
    ROADWAY_NETWORK

STATUS:
    🟢 VERIFIED
```

This should be treated as a separate source from the camera inventory.

---

### 20. Traffic speed data

PennDOT provides access to real-time and historical traffic-speed data for Pennsylvania routes.

However, this source has eligibility restrictions.

PennDOT states eligible organizations can request traffic-speed data supplied by INRIX, including historical route data going back to 2011. ([Pennsylvania Government][5])

Eligibility includes:

* Eastern Transportation Coalition members
* contractors/universities working for PennDOT.

Therefore:

```text
SOURCE:
    PA-PENNDOT-INRIX-SPEED

STATUS:
    🟡 RESTRICTED

PUBLIC_ANONYMOUS:
    🔴

GENERAL_PUBLIC_API:
    🔴
```

Do not classify it as a generally available public feed.

---

### 21. Pennsylvania Turnpike cameras

The Pennsylvania Turnpike Commission operates its own roadway camera system.

Official:

[PA Turnpike Traffic Cameras](https://www.paturnpike.com/traveling/traffic-cameras?utm_source=chatgpt.com)

The Turnpike provides a dedicated traffic-camera interface showing cameras along its roadway system. ([PA Turnpike][6])

#### Registry

```text
SOURCE_ID:
    PA-PTC-CCTV

OWNER:
    Pennsylvania Turnpike Commission

TYPE:
    TOLL_ROAD_TRAFFIC_CAMERA

STATUS:
    🟢 VERIFIED
```

---

### 22. Turnpike camera data access

This requires an important distinction.

The Pennsylvania Turnpike's roadway-camera policy says partners requesting roadway camera video feeds must request a:

**PTC Data Feed and Digital Data Access Request Form**

and submit it to the Commission. ([PA Turnpike][7])

Therefore:

```text
PUBLIC_CAMERA_PAGE:
    🟢 YES

PARTNER_VIDEO_FEED:
    🟡 REQUEST REQUIRED

ANONYMOUS_STREAM_API:
    🔴 NOT ESTABLISHED
```

---

### 23. Turnpike does NOT retain live CCTV

This is an important negative finding.

The Pennsylvania Turnpike Commission states that it **does not retain video from its live-feed traffic cameras**.

Because the video isn't recorded, it is unavailable through its Right-to-Know process. ([PA Turnpike][8])

Therefore:

```text
LIVE_VIDEO:
    🟢

RECORDED_CCTV_ARCHIVE:
    🔴

RTKL_CCTV_VIDEO:
    🔴
```

This distinction needs to remain in the source database.

---

### 24. Turnpike CMS/DMS

The Turnpike also operates permanent:

### Changeable Message Signs

and controls them through its Traffic Operations Center. ([PA Turnpike][9])

```text
SOURCE_ID:
    PA-PTC-CMS

TYPE:
    DYNAMIC_MESSAGE_SIGN

STATUS:
    🟢 VERIFIED
```

---

### 25. Pennsylvania statewide public-safety radio

Now the radio side.

Pennsylvania operates:

### PA-STARNet

The Pennsylvania State Police describes it as the Commonwealth's statewide wireless voice and data network for public safety and emergency-response communications. ([Pennsylvania Government][10])

#### Registry

```text
SOURCE_ID:
    PA-STARNet

OWNER:
    Commonwealth of Pennsylvania

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    APCO P25

STATUS:
    🟢 VERIFIED
```

---

### 26. PA-STARNet scale

Pennsylvania reports:

```text
22 Commonwealth agencies
150 towers
288 microwave links
95%+ mobile coverage in every county
```

([Pennsylvania Government][10])

It also states the system supports county and municipal agencies and other external organizations. ([Pennsylvania Government][10])

This makes PA-STARNet one of the most important statewide radio systems in the country.

---

### 27. Radio bands

PA-STARNet uses:

```text
VHF
UHF
800 MHz
```

and is P25-based. ([Pennsylvania Government][10])

The current system is described as:

### P25 Phase II TDMA

with standards-based interoperability. ([Pennsylvania Government][10])

---

### 28. Encryption

This needs to be recorded carefully.

Pennsylvania's official description identifies:

```text
AES FIPS 140-2 encrypted communications
Link Layer Authentication
```

as capabilities of PA-STARNet. ([Pennsylvania Government][10])

This means:

```text
PA-STARNet:
    🟢 PUBLIC SYSTEM INFORMATION

EVERY TALKGROUP:
    ❌ NOT ASSUMED MONITORABLE

ENCRYPTED TRAFFIC:
    🔴 NOT PUBLICLY DECODABLE
```

We only record publicly accessible radio feeds where they actually exist.

---

### 29. Broadcastify — Pennsylvania

Pennsylvania has an enormous public scanner ecosystem.

Current Broadcastify data:

### 430 audio feeds

across:

### all 67 counties

including:

### 250 public-safety feeds.

([Broadcastify][11])

#### Registry

```text
SOURCE_ID:
    PA-BROADCASTIFY

STATE:
    PA

COUNTIES:
    67

TOTAL_FEEDS:
    430

PUBLIC_SAFETY:
    250

STATUS:
    🟢 VERIFIED
```

This is an excellent statewide index.

---

### 30. Broadcastify county coverage

Broadcastify currently lists all 67 counties.

Examples:

```text
Adams
Allegheny
Armstrong
Beaver
Bedford
Berks
Blair
Bradford
Bucks
Butler
Cambria
Centre
Chester
Clarion
Clearfield
Clinton
Crawford
Cumberland
Dauphin
Delaware
Erie
Fayette
Franklin
Lancaster
Lehigh
Luzerne
Lycoming
Mercer
Monroe
Montgomery
Northampton
Philadelphia
Pike
Schuylkill
Somerset
Susquehanna
Washington
Westmoreland
York
...
```

The current Broadcastify directory confirms all 67 counties have entries. ([Broadcastify][11])

---

### 31. Broadcastify Calls — PA-STARNet

This is even more useful than simple audio feeds.

Broadcastify Calls currently reports active Pennsylvania Statewide Radio Network ingest infrastructure.

For example, Lancaster County currently shows:

```text
PA-STARNet:
    Pennsylvania Statewide Radio Network
    Cornwall (LANC01)
```

with a last-seen timestamp of seconds before the page was checked. ([Broadcastify][12])

#### Registry

```text
SOURCE_ID:
    PA-BROADCASTIFY-CALLS-STARNET

PARENT:
    PA-STARNet

TYPE:
    P25_CALLS_INGEST

STATUS:
    🟢 VERIFIED
```

---

### 32. Lancaster County example

Lancaster County currently has multiple public feeds including:

* Lancaster County Fire and EMS
* digital countywide dispatch
* paging
* operations channels
* airport
* railroad.

It also has multiple Calls ingest nodes including:

```text
LCWC South Simulcast
LCWC Northeast Simulcast
PA-STARNet Cornwall (LANC01)
```

([Broadcastify][12])

This is exactly the kind of **system → site/simulcast → talkgroup → call** hierarchy ATLAS should preserve.

---

### 33. ALPR — Pennsylvania

Pennsylvania has a very large ALPR ecosystem.

A current community-derived inventory documents:

### 3,208 ALPR cameras

in Pennsylvania as of August 27, 2026. ([Finding Flock][13])

However:

> **This is not an official Pennsylvania government inventory.**

It is based on OpenStreetMap/community mapping and other documentation.

Therefore:

```text
PA_ALPR_COUNT:
    🟡 3,208 DOCUMENTED

OFFICIAL_STATEWIDE_COUNT:
    🔴 NOT ESTABLISHED

SOURCE:
    COMMUNITY / OSM DERIVED
```

---

### 34. ALPR vendors

The current Pennsylvania inventory identifies numerous vendors.

The mapped records include:

```text
Flock Safety
Motorola Solutions
PlateSmart
Genetec
Axis Communications
Leonardo/Elsag
Neology
Automotus
Ekin
Axon
```

Unsure/unattributed records are also explicitly preserved as unspecified rather than guessed. ([Unsurveilled][14])

That is exactly how our database should behave.

---

### 35. Flock Safety

Flock is a major Pennsylvania ALPR provider.

Current community mapping identifies:

### 643 Flock Safety cameras

within the particular county-assigned dataset cited by Unsurveilled, alongside other vendors and unspecified records. ([Unsurveilled][14])

The broader Finding Flock dataset reports:

### 3,208 total documented ALPR cameras statewide

with Flock representing a substantial portion of the documented ecosystem. ([Finding Flock][13])

Again:

**Do not treat these counts as an official state inventory.**

---

### 36. Pittsburgh

Pittsburgh is one of the largest documented ALPR concentrations in Pennsylvania.

The current Finding Flock dataset identifies Pittsburgh as the Pennsylvania city with the largest documented count. ([Finding Flock][13])

A separate OpenStreetMap-derived database currently reports:

### 609 cameras

within its Pittsburgh mapping area. ([Flock Camera Locations][15])

The datasets differ because they use different geographic scopes and methodologies.

Therefore ATLAS should store:

```text
COUNT:
    source-specific

NOT:
    "Pittsburgh has exactly X cameras"
```

---

### 37. Philadelphia

Philadelphia also has a substantial documented ALPR presence.

The current OpenStreetMap-derived Pennsylvania inventory identifies:

### 241

cameras for Philadelphia in its city mapping dataset. ([Flock Camera Locations][15])

Again:

```text
STATUS:
    🟡 COMMUNITY-MAPPED

OFFICIAL_PPD_TOTAL:
    NOT ESTABLISHED
```

---

### 38. Erie Police Department

There is official Pennsylvania public-record evidence concerning ALPR use by the:

### Erie Police Department

A 2026 Pennsylvania Office of Open Records final determination documents a Right-to-Know request seeking:

* active ALPR contracts
* vendor agreements
* system specifications
* number of deployed cameras
* fixed vs. mobile units.

([Open Records Pennsylvania][16])

This is highly valuable for ATLAS because it proves the existence of an official records trail even where a clean API doesn't exist.

#### Registry

```text
SOURCE_ID:
    PA-ERIE-PD-ALPR-RECORDS

TYPE:
    ALPR_DEPLOYMENT_RECORDS

SOURCE:
    PENNSYLVANIA RIGHT-TO-KNOW PROCESS

STATUS:
    🟢 OFFICIAL RECORD EVIDENCE
```

---

### 39. Pennsylvania State Police ALPR

This is a significant discovery.

A Pennsylvania State Police directive states that upon an Amber Alert activation, the Pennsylvania Criminal Intelligence Center can enter the plate into the:

### Axon Automated License Plate Recognition system.

([Pennsylvania Government][17])

#### Registry

```text
SOURCE_ID:
    PA-PSP-AXON-ALPR

AGENCY:
    Pennsylvania State Police

VENDOR:
    Axon

TYPE:
    LAW_ENFORCEMENT_ALPR

STATUS:
    🟢 OFFICIAL POLICY EVIDENCE
```

This is stronger evidence than a community map because it comes directly from Pennsylvania State Police documentation.

---

### 40. ALPR policy vs. public camera data

PennDOT's own 2025 traffic-signal handbook also explicitly discusses ALPRs.

It describes ALPRs as cameras/software used by law enforcement to scan plates and compare the resulting information against designated lists. ([PennDOT Docs][18])

It also discusses fixed ALPR installation locations such as traffic-signal supports. ([PennDOT Docs][18])

This confirms that ALPR infrastructure is a recognized component of Pennsylvania transportation infrastructure.

But:

```text
PennDOT CCTV:
    🟢 public structured inventory

Law-enforcement ALPR:
    🟡 deployment records

RAW ALPR CAPTURES:
    🔴 not public
```

That distinction is critical.

---

### 41. ALPR legislation — current status

Pennsylvania does **not currently have a clean statewide ALPR inventory**.

There is also active legislative activity in 2026 concerning ALPR.

On August 27, 2026, Pennsylvania Senator Doug Mastriano circulated a co-sponsorship memo proposing restrictions on automatic license plate readers. ([Palegis][19])

Another August 27 memo from Senator Daniel Laughlin proposes prohibiting networked license-plate-surveillance cameras such as Flock systems. ([Palegis][20])

These are **proposed legislation**, not enacted law.

Therefore:

```text
CURRENT LAW:
    do not classify these proposals as law

LEGISLATIVE STATUS:
    🟡 ACTIVE PROPOSALS
```

---

### 42. Pennsylvania ALPR source hierarchy

The proper ATLAS hierarchy is:

```text
OFFICIAL GOVERNMENT
        │
        ├── PSP ALPR policy
        ├── municipal contracts
        ├── RTKL decisions
        └── agency procurement records
                │
                ▼
COMMUNITY MAPPING
        │
        ├── OpenStreetMap
        ├── Finding Flock
        ├── Unsurveilled
        └── other mapping projects
```

The community sources are excellent for **discovery**, but not proof of statewide completeness.

---

### 43. Pennsylvania camera architecture

The state should be represented as:

```text
PENNSYLVANIA
│
├── PennDOT
│   │
│   ├── 511PA
│   │
│   ├── CCTV
│   │   ├── Camera List
│   │   └── ArcGIS Feature Layer
│   │
│   ├── RCRS
│   │
│   └── Roadway Network
│
├── Pennsylvania Turnpike Commission
│   │
│   ├── CCTV
│   └── CMS
│
├── PA State Police
│   │
│   ├── PA-STARNet
│   └── Axon ALPR
│
├── County/municipal agencies
│   │
│   ├── P25 systems
│   ├── ALPR
│   └── local CCTV
│
└── Public scanner ecosystem
    │
    ├── Broadcastify
    └── Broadcastify Calls
```

---

### 44. Primary exact source records

#### PennDOT CCTV ArcGIS

[PennDOT Traffic Cameras REST Layer](https://gis.penndot.pa.gov/gis/rest/services/paprojects/paprojects/MapServer/14?utm_source=chatgpt.com)

```text
SOURCE_ID:
    PA-PENNDOT-CCTV-ARCGIS

LAYER:
    14

NAME:
    Traffic Cameras

FORMAT:
    JSON
    GeoJSON
    PBF

GEOMETRY:
    POINT

STATUS:
    🟢 VERIFIED
```

([PennDOT GIS][4])

---

#### PennDOT official data-feed portal

[PennDOT Transportation Data Feed Access](https://www.pa.gov/services/penndot/request-access-to-transportation-related-data-feeds?utm_source=chatgpt.com)

```text
SOURCE_ID:
    PA-PENNDOT-DATA-FEEDS

CAMERAS:
    950+

RCRS:
    YES

ACCESS:
    REQUEST / REGISTRATION

COST:
    FREE

STATUS:
    🟢 VERIFIED
```

([Pennsylvania Government][2])

---

#### 511PA

[511PA](https://www.511pa.com/?utm_source=chatgpt.com)

```text
SOURCE_ID:
    PA-511PA

TYPE:
    TRAVELER INFORMATION

CAMERAS:
    950+

STATUS:
    🟢 VERIFIED
```

---

#### PA Turnpike CCTV

[PA Turnpike Traffic Cameras](https://www.paturnpike.com/traveling/traffic-cameras?utm_source=chatgpt.com)

```text
SOURCE_ID:
    PA-PTC-CCTV

TYPE:
    TOLL_ROAD_CAMERA

STATUS:
    🟢 VERIFIED
```

---

#### PA-STARNet

[Pennsylvania PA-STARNet official information](https://www.pa.gov/agencies/psp/programs/pa-starnet?utm_source=chatgpt.com)

```text
SOURCE_ID:
    PA-STARNet

TYPE:
    STATEWIDE_PUBLIC_SAFETY_RADIO

STANDARD:
    P25

STATUS:
    🟢 VERIFIED
```

([Pennsylvania Government][10])

---

### 45. Pennsylvania source matrix

| Source                   | Category     | Machine-readable | Access              | Status      |
| ------------------------ | ------------ | ---------------: | ------------------- | ----------- |
| PennDOT CCTV ArcGIS      | Cameras      |               🟢 | Direct              | 🟢          |
| PennDOT CCTV feed        | Cameras      |               🟡 | Registration        | 🟢          |
| 511PA Camera List        | Cameras      |               🟡 | Public/partner      | 🟢          |
| PennDOT RCRS             | Incidents    |            🟢/🟡 | Feed request        | 🟢          |
| 511PA Roadway            | Road network |            🟢/🟡 | Feed request        | 🟢          |
| PA Turnpike CCTV         | Cameras      |               🟡 | Partner request     | 🟢          |
| PA Turnpike CMS          | DMS          |               🟡 | Public system       | 🟢          |
| PA-STARNet               | Radio        |      ❌ raw radio | Public system info  | 🟢          |
| Broadcastify             | Scanner      |               🟡 | Public feeds        | 🟢          |
| Broadcastify Calls       | Radio calls  |               🟡 | Public coverage     | 🟢          |
| PSP Axon ALPR            | ALPR         |                ❌ | Agency system       | 🟢 evidence |
| Municipal ALPR contracts | ALPR         |                ❌ | RTKL/public records | 🟢          |
| OSM ALPR inventory       | ALPR         |               🟢 | Community           | 🟡          |
| Finding Flock            | ALPR         |               🟢 | Community           | 🟡          |

---

### 46. Pennsylvania ATLAS score

| Category                                   |           Rating |
| ------------------------------------------ | ---------------: |
| State traffic cameras                      | 🟢 **Excellent** |
| Official machine-readable camera inventory | 🟢 **Excellent** |
| Camera coordinates                         |               🟢 |
| Camera URLs                                |               🟢 |
| Camera hardware metadata                   |               🟢 |
| Camera installation metadata               |               🟢 |
| Live camera streams                        |               🟢 |
| Traffic incidents                          |               🟢 |
| Roadwork                                   |               🟢 |
| Road conditions                            |               🟢 |
| Statewide P25                              | 🟢 **Excellent** |
| Public scanner feeds                       | 🟢 **Excellent** |
| Broadcastify Calls                         |               🟢 |
| ALPR deployments                           |               🟢 |
| Official statewide ALPR inventory          |               🔴 |
| Raw ALPR data                              |               🔴 |
| ALPR vendor records                        |               🟢 |
| ALPR location data                         |               🟡 |
| Turnpike cameras                           |               🟢 |
| Turnpike machine feed                      |               🟡 |

### **Overall: 9.7 / 10**

Pennsylvania is arguably **better than Oregon for the camera-data portion** because PennDOT's ArcGIS layer exposes actual asset-level infrastructure information such as manufacturer, model, installation date, communication type, power type, route, milepost, status, and a URL.

---

### 47. Highest-priority ingestion targets

If ATLAS were ingesting Pennsylvania today, I would prioritize them in this order:

#### 🥇 PennDOT Traffic Cameras ArcGIS

**Direct machine-readable source.**

```text
STATEWIDE_ID
LATITUDE
LONGITUDE
STATUS
ROAD
COUNTY
MILEPOST
MANUFACTURER
MODEL
INSTALLATION_DATE
URL
...
```

This should be a **Tier-1 source**.

---

#### 🥈 PennDOT 511PA camera feed

Potentially provides the actual streaming-video layer, but requires PennDOT feed access and a video-sharing agreement. ([Pennsylvania Government][2])

---

#### 🥉 PennDOT RCRS

Real-time incidents and roadwork.

---

### 4. PA-STARNet

Statewide P25 system.

---

### 5. Broadcastify / Broadcastify Calls

Excellent public-radio coverage, including actual PA-STARNet ingest nodes.

---

### 6. Pennsylvania Turnpike CCTV

Separate camera ecosystem that should not be merged into PennDOT ownership.

---

### 7. ALPR records

Use official municipal/PSP documents as provenance, then use community mapping to discover likely physical locations.

---

### 48. Final Pennsylvania classification

```text
╔══════════════════════════════════════════════╗
║           PENNSYLVANIA — ATLAS               ║
╠══════════════════════════════════════════════╣
║                                              ║
║ PENNDOT CAMERAS          🟢 EXCELLENT        ║
║ ARC GIS CAMERA LAYER     🟢 EXCELLENT        ║
║ CAMERA COORDINATES       🟢 VERIFIED         ║
║ CAMERA URLS              🟢 VERIFIED         ║
║ HARDWARE METADATA        🟢 VERIFIED         ║
║ INSTALLATION DATA        🟢 VERIFIED         ║
║ LIVE STREAMS             🟢 VERIFIED         ║
║                                              ║
║ RCRS INCIDENTS           🟢 VERIFIED         ║
║ ROADWAY DATA             🟢 VERIFIED         ║
║                                              ║
║ TURNPIKE CCTV            🟢 VERIFIED         ║
║                                              ║
║ PA-STARNet               🟢 P25              ║
║ RADIO COVERAGE           🟢 STATEWIDE        ║
║ SCANNER FEEDS            🟢 430              ║
║ PUBLIC SAFETY FEEDS      🟢 250              ║
║                                              ║
║ ALPR DEPLOYMENTS         🟢 EXTENSIVE        ║
║ ALPR LOCATIONS           🟡 COMMUNITY DATA   ║
║ RAW ALPR DATA            🔴 NOT PUBLIC       ║
║ STATEWIDE ALPR REGISTRY  🔴 NOT FOUND        ║
║                                              ║
║ OVERALL                  ⭐ 9.7 / 10         ║
╚══════════════════════════════════════════════╝
```

**Pennsylvania is complete.**

**Next alphabetically: Rhode Island.**

[1]: https://www.pa.gov/services/penndot/request-access-to-transportation-related-data-feeds?utm_source=chatgpt.com "Request Access to Transportation-Related Data Feeds | Commonwealth of Pennsylvania"
[2]: https://www.pa.gov/services/penndot/request-access-to-transportation-related-data-feeds "Request Access to Transportation-Related Data Feeds | Commonwealth of Pennsylvania"
[3]: https://www.511pa.com/?lang=en&utm_source=chatgpt.com "511PA"
[4]: https://gis.penndot.pa.gov/gis/rest/services/paprojects/paprojects/MapServer/14 "Layer: Traffic Cameras (ID: 14)"
[5]: https://www.pa.gov/agencies/penndot/research-planning-and-innovation/transportation-systems-management-operations/tsmo-performance-management-and-data-resources?utm_source=chatgpt.com "TSMO Performance Management and Data Resources | Department of Transportation | Commonwealth of Pennsylvania"
[6]: https://www.paturnpike.com/traveling/traffic-cameras?utm_source=chatgpt.com "Traffic Cameras"
[7]: https://pol.paturnpike.com/api/PolicyLetters/6142489/?utm_source=chatgpt.com "PA TURNPIKE COMMISSION POLICY This is a statement of official Pennsylvania Turnpike Policy POLICY SUBJECT: Roadway Camera Video Sharing Policy | RESPONSIBLE DEPARTMENT: Information Technology | NUMBER: 8.14 APPROVAL DATE: 08-16-2022 EFFECTIVE DATE: 08-31-2022 REVISED DATE: 05-23-2024 None --- | --- | ---"
[8]: https://www.paturnpike.com/news/right-to-know-requests?utm_source=chatgpt.com "Right to Know Requests | PA Turnpike"
[9]: https://www.paturnpike.com/traveling/safety/advanced-travelers-information-system?utm_source=chatgpt.com "Advanced Travelers Information System | PA Turnpike"
[10]: https://www.pa.gov/agencies/psp/programs/pa-starnet "PA-STARNet | State Police | Commonwealth of Pennsylvania"
[11]: https://status.broadcastify.com/listen/stid/42?utm_source=chatgpt.com "Pennsylvania Audio Feeds"
[12]: https://status.broadcastify.com/listen/ctid/2276?utm_source=chatgpt.com "Lancaster County, Pennsylvania Audio Feeds"
[13]: https://www.findingflock.com/cameras/pennsylvania?utm_source=chatgpt.com "3,208 Flock & ALPR Cameras in Pennsylvania · Finding Flock"
[14]: https://www.unsurveilled.org/atlas/pennsylvania/?utm_source=chatgpt.com "Pennsylvania — known ALPR locations — Unsurveilled"
[15]: https://flockcameralocations.com/locations/pennsylvania?utm_source=chatgpt.com "Flock Camera Locations in Pennsylvania — Live PA ALPR Map | Flock Camera Locations"
[16]: https://www.openrecords.pa.gov/Appeals/DocketGetFile.cfm?id=271249&utm_source=chatgpt.com "FINAL DETERMINATION"
[17]: https://www.pa.gov/content/dam/copapwp-pagov/en/psp/documents/regs-manuals/ar_9-3.pdf?utm_source=chatgpt.com "AR 9-3, Pennsylvania Amber Alert Plan Child Abduction Notification System"
[18]: https://docs.penndot.pa.gov/Public/Bureaus/BOO/CT/CT%20T-25-001%20Pub%20149%20Rewrite/Step%201/Pub%20149%20Draft%20%281-25%29%20-%20CT%20Step%201.pdf?utm_source=chatgpt.com "Pennsylvania Department of Transportation"
[19]: https://www.palegis.us/senate/co-sponsorship/memo?memoID=49155&utm_source=chatgpt.com "Senate Co-Sponsorship Memo 49155 Information; 2025-2026 Regular Session - PA State Senate"
[20]: https://www.palegis.us/senate/co-sponsorship/memo?memoID=49153&utm_source=chatgpt.com "Senate Co-Sponsorship Memo 49153 Information; 2025-2026 Regular Session - PA State Senate"
