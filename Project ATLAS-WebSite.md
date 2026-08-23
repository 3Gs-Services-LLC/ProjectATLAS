# ProjectATLAS — U.S. PUBLIC SITUATIONAL DATA INGESTION / DATABASE EXPANSION

## ROLE

You are the implementation/research agent for the ProjectATLAS project.

Your task is to design and implement a robust, extensible ingestion system capable of building a continuously updated database of publicly accessible data across the UNITED STATES OF AMERICA.

The immediate target is:

> Build the largest practical, legally/ethically sourced U.S. public camera + traffic + emergency + weather/event dataset that can be assembled from publicly exposed sources.

Do NOT limit the project to 511 systems.

Do NOT assume that "traffic camera" means 511.

Do NOT assume every source is XML.

Do NOT use fake/mock/sample data.

Do NOT invent endpoints.

Every record imported into the production database must originate from an actually discovered source and retain provenance showing exactly where it came from.

The existing INDOT CCTV XML/XSD and existing ProjectATLAS camera data are already in the project. DO NOT duplicate or replace them unnecessarily.

---

# 1. PRIMARY OBJECTIVE

Create a unified source-discovery and ingestion architecture capable of ingesting:

CAMERAS:
- traffic cameras
- highway cameras
- intersection cameras
- DOT cameras
- municipal traffic cameras
- bridge cameras
- tunnel cameras
- toll-road cameras
- border cameras where publicly published
- airport cameras
- runway cameras
- airport weather cameras
- aviation webcams
- port cameras
- harbor cameras
- marina cameras
- beach cameras
- surf cameras
- lake cameras
- river cameras
- dam cameras
- weather webcams
- ski webcams
- mountain webcams
- scenic webcams
- national park webcams
- wildlife cameras
- volcano cameras
- geological monitoring cameras
- observatory cameras
- city/skyline webcams
- public campus webcams
- public event webcams
- public construction/project cameras
- other publicly published cameras

TRAFFIC:
- traffic incidents
- crashes where publicly exposed
- road closures
- lane closures
- construction
- work zones
- congestion
- travel times
- speeds
- road conditions
- restrictions
- detours
- traffic events
- truck restrictions
- bridge restrictions
- tunnel restrictions
- special events affecting traffic
- evacuation routes/closures
- transportation advisories

WEATHER:
- NWS alerts
- severe thunderstorm warnings
- tornado warnings
- flood warnings
- flash flood warnings
- winter weather warnings
- blizzard warnings
- ice warnings
- heat warnings
- wind warnings
- hurricane/tropical cyclone information
- wildfire weather
- marine weather
- aviation weather
- weather observations
- radar products
- lightning data where publicly available
- weather station observations
- public weather cameras

EMERGENCY / PUBLIC SAFETY:
- public emergency alerts
- IPAWS/CAP alerts
- NWS alerts
- evacuation notices
- wildfire incidents
- FEMA disaster information
- public emergency-management feeds
- publicly published incident feeds
- public CAD feeds when an agency explicitly publishes them
- public fire/EMS incident feeds when explicitly available
- public police incident feeds when explicitly available
- public road emergency feeds
- public hazardous-material incident feeds
- emergency shelter/status feeds where machine-readable
- public missing-road/closure emergency information
- other public government emergency information

ENVIRONMENTAL EVENTS:
- wildfire
- smoke
- air quality
- earthquakes
- volcanoes
- tsunami
- coastal hazards
- floods
- river gauges
- landslides
- severe storms
- hurricanes
- winter storms
- drought
- environmental monitoring

---

# 2. EXISTING PROJECT DATA — DO NOT DUPLICATE

The project already contains:

- INDOT CCTV XML
- INDOT CCTV XSD
- INDOT CCTV inspection output
- approximately 740 INDOT CCTV inventory records
- existing TrafficWise/511 investigation
- existing TrafficWise GraphQL discovery
- existing HLS/M3U8 discovery
- existing skysfs3/skysfs4 observations
- existing ProjectATLAS camera ingestion architecture

Treat these as existing authoritative project assets.

Before adding another INDOT source:

1. inspect the existing database
2. inspect existing source adapters
3. inspect existing camera IDs
4. deduplicate by stable source identity
5. preserve the original source/provenance
6. do not create duplicate cameras simply because another source references them

---

# 3. SOURCE DISCOVERY STRATEGY

Build a SOURCE REGISTRY.

Every discovered source gets a source record before ingestion.

SOURCE RECORD:

- source_id
- source_name
- operator
- agency
- source_type
- category
- subcategory
- jurisdiction
- state
- county
- city
- country
- official_domain
- source_page
- machine_endpoint
- endpoint_type
- authentication_required
- api_key_required
- registration_required
- rate_limit
- format
- protocol
- license
- attribution_requirement
- terms_url
- discovered_at
- last_verified_at
- last_successful_fetch
- status
- health_status
- parser
- adapter
- notes
- confidence
- provenance

Never store a URL without storing its source context.

---

# 4. CAMERA SOURCE DISCOVERY — REQUIRED RESEARCH

Investigate these as FIRST-CLASS source families.

## A. OpenTrafficCamMap

Repository:
AidanWelch/OpenTrafficCamMap

Current documented scale:
approximately 7,515 traffic cameras.

Investigate:

- USA.json
- all U.S. state entries
- source URLs
- stream formats
- encodings
- coordinates
- direction
- descriptions
- any source/provider metadata
- v1 versus current data format
- repository history
- update process

Build an adapter.

Do not assume the current USA.json schema remains permanent.

The repository explicitly states its data can change and recommends cloning for an immutable snapshot.

Store:
- source commit/hash
- retrieval date
- original camera record
- normalized camera record

---

# 5. OpenEye

Investigate OpenEye's public camera directory and API.

Official documentation domain:
openeye.cam

Current documentation exposes:

- REST API
- camera catalog
- geographic search
- category search
- bounding-box search
- nearest-camera search
- individual camera metadata
- preview images
- live video/WHEP for applicable streams
- MCP interface
- camera categories

Required categories include:

- traffic
- ski
- surf
- weather
- wildlife
- park
- city
- port
- airport
- volcano
- aurora
- other

Implement an OpenEye adapter.

Prefer public/free feeds.

Store:
- OpenEye ID
- handle
- source operator
- source URL
- preview URL
- live stream metadata
- category
- coordinates
- attribution
- redistribution metadata
- source URL
- verification timestamp

Do not assume every OpenEye stream is free.

Respect the metadata supplied by OpenEye regarding:
- attribution
- redistribution
- preview embedding
- source hosting
- paid/free status

---

# 6. OpenCCTV

Investigate opencctv.org as a CAMERA DISCOVERY/AGGREGATION source.

Current public site reports:
- 70,000+ U.S. cameras
- 150,000+ global cameras
- hundreds of public source operators

Categories include:
- traffic
- weather
- beach
- ski
- aviation
- nature
- harbor
- airport
- satellite/other

IMPORTANT:

Do NOT blindly treat an aggregator's database as the original camera authority.

For every OpenCCTV camera:

1. capture aggregator record
2. identify original operator
3. identify original source URL
4. identify original stream/image URL if publicly exposed
5. record OpenCCTV as discovery provenance
6. prefer the original public operator as canonical source
7. retain OpenCCTV as an alternate discovery source

If an original source cannot be established, retain the record with:
source_type = aggregator_only
confidence appropriately lowered.

Investigate whether OpenCCTV provides:
- API
- JSON
- sitemap
- structured pages
- source registry
- downloadable data
- category endpoints
- state endpoints

Do not invent an API.

---

# 7. Datumfeed

Investigate Datumfeed as a public-camera registry.

Look specifically for:
- API
- OpenAPI specification
- camera registry
- source registry
- verification information
- licensing
- attribution
- redistribution
- feed health
- geographic metadata

Datumfeed should be treated as:
CAMERA DISCOVERY + PROVENANCE + VERIFICATION

not automatically as the original stream provider.

Build an adapter if a usable public API/data export exists.

---

# 8. Argus

Investigate the Argus GitHub project and associated repositories.

Do NOT rely on its advertised camera count without independently determining what is actually available in the repository.

Determine:

- actual data files
- actual database
- source code
- source lists
- stream URLs
- geographic metadata
- country/state coverage
- update mechanism
- licensing
- source provenance
- whether data is downloadable
- whether data can be programmatically imported

If a structured dataset exists, create an adapter.

If only source code exists, analyze the source code for additional public source discovery mechanisms.

Do not blindly execute unknown third-party collection scripts.

---

# 9. Live-Environment-Streams

Investigate the GitHub project:

Live-Environment-Streams

Focus on:
- GeoJSON
- 5,000+ outdoor webcams claim
- HLS
- RTSP
- weather
- environment
- traffic
- geospatial metadata

Build an adapter if the data is actually available.

Normalize all discovered streams.

---

# 10. GITHUB CAMERA-REPOSITORY DISCOVERY

Search GitHub continuously for repositories matching:

- traffic-cameras
- traffic camera
- webcams
- public webcams
- highway cameras
- DOT cameras
- CCTV feeds
- camera feeds
- HLS cameras
- M3U8 cameras
- GeoJSON webcams
- camera API
- webcam API
- traffic webcam
- public camera map
- city cameras
- state DOT cameras
- airport webcams
- weather webcams
- wildlife webcams

Use GitHub search/API where legitimately available.

Build a discovery table:

repository
owner
URL
license
camera count
states
categories
data format
last updated
source authority
machine-readable data
adapter status

DO NOT automatically trust repositories.

Each repository is a discovery source until its underlying camera sources are verified.

---

# 11. 511 SYSTEM DISCOVERY

Do NOT manually hard-code only Indiana.

Build a national 511 source registry.

Search for every U.S. state/territory transportation information system.

Potential patterns:

- 511
- state DOT
- traffic information
- camera API
- CCTV
- traveler information
- ArcGIS
- Open511
- JSON
- XML
- GeoJSON
- REST

For each state determine:

- official 511 website
- camera endpoint
- incident endpoint
- road-condition endpoint
- closure endpoint
- construction endpoint
- travel-time endpoint
- weather endpoint
- API documentation
- API key requirement
- registration requirement
- data license
- update frequency

Do not assume every state uses the same platform.

Build adapters by actual API schema.

---

# 12. OPEN511

Investigate Open511 as a transportation data standard.

Look for U.S. implementations.

Extract:
- camera feeds
- event feeds
- road information
- closures
- traffic events

Do not assume an Open511 endpoint exists simply because an agency references the specification.

Verify each implementation.

---

# 13. ARC GIS CAMERA DISCOVERY

This is a HIGH PRIORITY discovery mechanism.

Search public ArcGIS REST infrastructure for:

- CCTV
- camera
- traffic camera
- traffic cameras
- webcam
- road camera
- highway camera
- intersection camera
- live camera
- camera inventory
- traffic monitoring
- traffic management camera
- ITS camera

Search:
- FeatureServer
- MapServer
- ImageServer
- GeoJSON output
- REST services
- public ArcGIS Hub datasets

Build an ArcGIS source-discovery subsystem.

For every layer:

1. inspect metadata
2. inspect fields
3. identify coordinates
4. identify camera IDs
5. identify image/video URLs
6. identify source page
7. identify operator
8. identify update timestamp
9. identify license
10. test actual endpoint
11. store raw response
12. normalize into canonical schema

Do not treat an ArcGIS map layer as a live camera stream unless the layer actually exposes the stream/image source.

---

# 14. OPENSTREETMAP CAMERA DISCOVERY

Use OpenStreetMap primarily for CAMERA LOCATION DISCOVERY.

Search relevant tags such as:

- surveillance
- surveillance:type=traffic
- webcam
- camera
- traffic camera

Use OSM to discover:
- approximate camera location
- operator if tagged
- name
- source URL if tagged
- website
- camera type

OSM is not automatically the live stream source.

When OSM points to a source:
resolve and verify the source.

Store OSM as discovery provenance.

---

# 15. U.S. FEDERAL CAMERA SOURCES

Research public cameras from:

- National Park Service
- NOAA
- National Weather Service
- USGS
- Bureau of Land Management
- U.S. Forest Service
- Army Corps of Engineers
- Bureau of Reclamation
- Federal Highway Administration
- National Ocean Service
- U.S. Geological Survey
- National Transportation systems where public
- public federal facilities with intentionally published webcams

Categories:

- weather
- wildlife
- scenic
- environmental
- volcano
- river
- dam
- lake
- ocean
- coast
- mountain
- transportation

Do not assume a federal agency has an API.

Find actual machine-readable/public sources.

---

# 16. NOAA / NWS

Build a dedicated weather-data subsystem.

Primary categories:

- alerts
- observations
- forecasts
- radar
- severe weather
- hurricanes
- marine
- aviation
- weather stations
- climate
- lightning where publicly available

Use official NOAA/NWS machine-readable services wherever possible.

Important data families to investigate:

- NWS API
- CAP alerts
- NOAA weather alerts
- observation stations
- radar products
- NEXRAD
- NHC tropical cyclone data
- SPC severe-weather products
- NOAA environmental data

Store source timestamps and valid/expiration times.

Weather alerts are EVENTS, not cameras.

---

# 17. FEMA / IPAWS

Build a public emergency-alert ingestion subsystem.

Investigate:
- IPAWS
- Common Alerting Protocol
- FEMA emergency information
- disaster declarations
- public alert data
- evacuation information

Do not ingest private emergency communications.

Only ingest publicly exposed government emergency information.

Normalize alerts into:

alert_id
source
issuer
event
headline
description
severity
urgency
certainty
effective
onset
expires
area
polygon
geocode
instruction
references
raw_source
retrieved_at

---

# 18. WZDx

Build a WZDx ingestion adapter.

Research current FHWA WZDx specification and active U.S. public feeds.

Ingest:
- work zones
- lane closures
- road closures
- construction
- detours
- restrictions
- planned events
- traffic impacts

Preserve:
- road geometry
- location
- start/end
- event type
- lanes affected
- restrictions
- source
- confidence
- update timestamp

Do not confuse WZDx with camera data.

---

# 19. STATE DOT TRAFFIC DATA

For EVERY state:

research the official DOT.

Find:

- 511
- camera feeds
- incident feeds
- road closures
- construction
- travel times
- speed data
- road weather
- road conditions
- message signs
- highway restrictions
- emergency traffic information

Priority states:

AL
AK
AZ
AR
CA
CO
CT
DE
FL
GA
HI
ID
IL
IN
IA
KS
KY
LA
ME
MD
MA
MI
MN
MS
MO
MT
NE
NV
NH
NJ
NM
NY
NC
ND
OH
OK
OR
PA
RI
SC
SD
TN
TX
UT
VT
VA
WA
WV
WI
WY

Also include:

DC
Puerto Rico
U.S. Virgin Islands
Guam
American Samoa
Northern Mariana Islands

Keep U.S. states/territories separate in jurisdiction metadata.

---

# 20. EMERGENCY RESPONSE DATA

Research public machine-readable sources for:

- fire incidents
- EMS incidents
- police incidents
- rescue incidents
- hazardous materials
- evacuation orders
- wildfire incidents
- public safety alerts
- emergency management
- road emergencies

IMPORTANT:

Only ingest data explicitly exposed for public consumption.

Do not attempt to access private CAD systems.

Do not attempt to bypass authentication.

If an agency has no public feed:
record:

public_source_available = false

and continue.

Do not fabricate data.

Potential source families to investigate:

- municipal open data
- county open data
- ArcGIS
- Socrata
- CKAN
- CAP
- FEMA
- NWS
- state emergency management
- public fire/EMS APIs
- public police incident APIs
- public incident maps

---

# 21. SOCrata / OPEN DATA DISCOVERY

Search public Socrata/open-data portals for:

- traffic cameras
- crashes
- incidents
- road closures
- construction
- emergency calls
- fire calls
- EMS
- police incidents
- weather
- environmental monitoring

For every dataset:

- domain
- dataset ID
- API endpoint
- schema
- update frequency
- license
- owner
- jurisdiction

Build generic Socrata ingestion support.

---

# 22. CKAN DISCOVERY

Search public CKAN catalogs for the same categories.

Build generic CKAN dataset discovery.

---

# 23. DATA.GOV

Use Data.gov as a DISCOVERY INDEX, not automatically as the final source.

Search for:

- CCTV
- traffic cameras
- traffic incidents
- road closures
- weather
- emergency
- wildfire
- flood
- earthquake
- public safety
- webcams

When a dataset is found:

resolve the original provider.

Store Data.gov as provenance.

---

# 24. NOAA / USGS ENVIRONMENTAL EVENTS

Build event adapters for:

USGS:
- earthquakes
- volcanoes
- water
- hazards

NOAA:
- weather
- storms
- hurricanes
- marine
- environmental

NWS:
- warnings
- watches
- advisories
- observations

Normalize them into a unified EVENT table.

---

# 25. CAMERA PROTOCOL SUPPORT

The camera database must support at minimum:

IMAGE
JPEG
PNG
WEBP

IMAGE_STREAM

IMAGE_STREAM_BY_TIMESTAMP

M3U8
M3U9
HLS

MJPEG

MP4

H.264

H.265

VP8

VP9

WebRTC/WHEP

RTSP metadata where publicly exposed

Do not assume RTSP is browser-playable.

Store the protocol separately from rendering capability.

---

# 26. CANONICAL CAMERA DATABASE SCHEMA

Create a normalized camera table.

camera_id
canonical_id
source_camera_id
source_id
operator_id
name
description
category
subcategory
country
state
territory
county
city
postal_code
latitude
longitude
altitude
heading
direction
road
route
milepost
intersection
location_accuracy
timezone
camera_type
transportation_type
stream_type
encoding
format
stream_url
snapshot_url
preview_url
page_url
source_url
operator_url
license
terms_url
attribution_required
attribution_text
redistribution_allowed
embedding_allowed
authentication_required
api_key_required
is_public
is_free
is_live
last_frame_at
last_verified_at
last_successful_fetch
failure_count
health_status
http_status
content_type
etag
last_modified
update_interval
source_priority
confidence
created_at
updated_at

---

# 27. CAMERA SOURCE TABLE

source_id
source_name
operator
agency
domain
source_type
country
state
county
city
official
aggregator
repository
api
website
documentation_url
terms_url
license
contact_url
requires_registration
requires_api_key
rate_limit
robots_policy
status
last_checked
last_success

---

# 28. EVENT DATABASE

Create a generalized event table.

event_id
source_id
external_id
event_type
event_subtype
title
description
severity
urgency
certainty
status
start_time
end_time
updated_time
latitude
longitude
geometry
polygon
road
route
milepost
direction
state
county
city
source_url
raw_data_reference
created_at
updated_at

EVENT TYPES:

TRAFFIC
CRASH
CLOSURE
CONSTRUCTION
WORK_ZONE
CONGESTION
ROAD_CONDITION
WEATHER
TORNADO
THUNDERSTORM
FLOOD
WINTER_STORM
HURRICANE
WILDFIRE
EARTHQUAKE
VOLCANO
TSUNAMI
EVACUATION
EMERGENCY
FIRE
EMS
POLICE
HAZMAT
MARINE
AVIATION
ENVIRONMENTAL
OTHER

---

# 29. SOURCE PROVENANCE

THIS IS MANDATORY.

Every record must be traceable.

Example:

camera:
  canonical_id = us-in-indot-xxxxx

sources:
  - INDOT CCTV XML
  - OpenTrafficCamMap
  - OpenEye
  - OpenCCTV
  - OSM

The database must retain all source relationships.

Never destroy alternate source information during deduplication.

---

# 30. DEDUPLICATION

Build deterministic + probabilistic camera matching.

Strong identifiers:
- operator + source_camera_id
- exact stream URL
- exact snapshot URL

Secondary:
- coordinates
- camera name
- road
- intersection
- direction

Use spatial matching.

Suggested initial thresholds:

EXACT:
same operator + source ID

VERY HIGH:
same normalized stream URL

HIGH:
coordinates within ~25 meters + similar name

MEDIUM:
coordinates within ~100 meters + same road/intersection

LOW:
similar names without coordinate agreement

Never merge cameras solely because names are similar.

Keep merge history.

---

# 31. SOURCE PRIORITY

For duplicate cameras, prefer:

1. official government/operator source
2. official transportation agency
3. official public institution
4. original public broadcaster/operator
5. verified registry
6. reputable aggregator
7. community repository

Never replace an original source with an aggregator when the original is available.

---

# 32. RAW DATA ARCHIVE

For every ingestion source, preserve raw responses when practical.

Directory:

data/raw/<source>/<date>/

Examples:

data/raw/indot/2026-08-22/
data/raw/opentrafficcammap/2026-08-22/
data/raw/openeye/2026-08-22/
data/raw/nws/2026-08-22/

Do not store unlimited data forever.

Implement retention.

Keep:
- source snapshot
- checksum
- retrieval timestamp
- parser version

---

# 33. SOURCE HEALTH MONITORING

Every source gets:

ONLINE
DEGRADED
OFFLINE
AUTH_REQUIRED
RATE_LIMITED
MALFORMED
REMOVED
UNKNOWN

Every camera gets:

LIVE
STALE
OFFLINE
UNKNOWN

Track:

HTTP status
DNS failure
TLS failure
timeout
invalid JSON
invalid XML
invalid stream
empty response
stale image
expired stream

---

# 34. SCHEDULING

Different sources need different refresh rates.

CAMERA METADATA:
6–24 hours

CAMERA SNAPSHOTS:
source-defined

LIVE CAMERA HEALTH:
5–30 minutes

TRAFFIC INCIDENTS:
1–5 minutes

ROAD CLOSURES:
1–5 minutes

WZDx:
5–15 minutes

NWS ALERTS:
1 minute or source recommendation

USGS earthquakes:
1–5 minutes

WEATHER OBSERVATIONS:
5–15 minutes

STATIC SOURCE REGISTRY:
24 hours

Do not hammer endpoints.

Honor documented limits.

---

# 35. API ADAPTER ARCHITECTURE

Create:

src/ingestion/

  sources/
    indot/
    511/
    arcgis/
    open511/
    opentrafficcammap/
    openeye/
    opencctv/
    datumfeed/
    argus/
    live-environment-streams/
    osm/
    data-gov/
    socrata/
    ckan/
    nws/
    noaa/
    fema/
    ipaws/
    usgs/
    wzdx/

  core/
    SourceRegistry
    CameraNormalizer
    EventNormalizer
    Deduplicator
    ProvenanceManager
    HealthMonitor
    Scheduler

  discovery/
    GitHubDiscovery
    ArcGISDiscovery
    OpenDataDiscovery
    StateDOTDiscovery
    CameraDirectoryDiscovery

Each adapter must implement a common interface.

Example conceptual interface:

discover()
fetch()
parse()
normalize()
validate()
upsert()
healthCheck()

Do not make every source adapter responsible for database details.

---

# 36. DISCOVERY ENGINE

Build a discovery engine that can continuously search for NEW public U.S. camera/data sources.

Discovery targets:

GitHub
ArcGIS
Socrata
CKAN
Data.gov
OpenStreetMap
official government websites
official DOT websites
public camera directories

Search terms:

"traffic camera"
"traffic cameras"
"CCTV"
"webcam"
"live camera"
"road camera"
"highway camera"
"intersection camera"
"ITS camera"
"traffic monitoring"
"camera inventory"
"camera feed"
"camera API"
"M3U8"
"HLS"
"MJPEG"
"webcam JSON"
"camera GeoJSON"
"camera FeatureServer"
"camera MapServer"

Also search each U.S. state + these terms.

---

# 37. IMPORTANT: DO NOT BUILD A SCRAPER THAT ONLY UNDERSTANDS HTML

Prefer:

1. XML
2. JSON
3. GeoJSON
4. REST API
5. ArcGIS REST
6. Open511
7. documented feeds
8. machine-readable repository data
9. direct image/video endpoint

HTML scraping should be the last resort and only for discovering a public source.

---

# 38. CAMERA CLASSIFICATION

Each camera must receive:

PRIMARY CATEGORY

TRAFFIC
WEATHER
NATURE
WILDLIFE
SCENIC
CITY
SKYLINE
BEACH
SURF
MARINE
PORT
AIRPORT
AVIATION
SKI
VOLCANO
ENVIRONMENTAL
TRANSPORTATION
PUBLIC_SPACE
OTHER

SECONDARY TAGS:

highway
interstate
state-route
local-road
intersection
bridge
tunnel
border
toll-road
downtown
mountain
river
lake
ocean
coast
wildlife
airport
runway
terminal
harbor
construction
weather
etc.

---

# 39. TRAFFIC INFORMATION CLASSIFICATION

Normalize traffic events into:

CRASH
DISABLED_VEHICLE
DEBRIS
CONGESTION
ROAD_CLOSURE
LANE_CLOSURE
CONSTRUCTION
WORK_ZONE
ROAD_HAZARD
FLOODING
ICE
SNOW
FOG
FIRE
POLICE_ACTIVITY
SPECIAL_EVENT
WEIGHT_RESTRICTION
HEIGHT_RESTRICTION
BRIDGE_RESTRICTION
TUNNEL_RESTRICTION
DETOUR
OTHER

---

# 40. WEATHER CLASSIFICATION

Normalize:

TORNADO
SEVERE_THUNDERSTORM
FLASH_FLOOD
FLOOD
WINTER_STORM
BLIZZARD
ICE_STORM
WIND
HAIL
LIGHTNING
FOG
DUST
HEAT
COLD
HURRICANE
TROPICAL_STORM
COASTAL
MARINE
FIRE_WEATHER
SMOKE
AIR_QUALITY
OTHER

---

# 41. EMERGENCY CLASSIFICATION

Normalize:

FIRE
EMS
POLICE
RESCUE
HAZMAT
EVACUATION
MISSING_PERSON
PUBLIC_SAFETY
ACTIVE_INCIDENT
DISASTER
ROAD_EMERGENCY
INFRASTRUCTURE_FAILURE
OTHER

Only ingest publicly published information.

---

# 42. DATA QUALITY

Every record must have:

source
retrieved_at
last_verified_at
confidence

Never create records with invented coordinates.

If coordinates are absent:

latitude = null
longitude = null
location_status = unknown

Do not geocode unless the source or a reliable geocoder is intentionally used.

If geocoding is used:
store:
- original location
- geocoder
- geocode timestamp
- confidence

---

# 43. NO MOCK DATA

ABSOLUTE REQUIREMENT:

Never create fake camera IDs.

Never create fake URLs.

Never create placeholder streams.

Never create fake coordinates.

Never claim a source exists unless verified.

Never claim an endpoint works unless tested.

Never inflate counts.

Every count displayed by the application must come from actual imported records.

---

# 44. SOURCE VERIFICATION

Before a source is promoted to production:

1. identify source owner
2. identify official source page
3. identify actual machine endpoint
4. make a real request
5. verify HTTP status
6. verify response type
7. parse response
8. inspect records
9. validate coordinates
10. validate camera/event IDs
11. verify actual image/video if applicable
12. store provenance
13. record timestamp
14. classify confidence

---

# 45. LEGAL / ETHICAL SOURCE RULE

ProjectATLAS is intended to ingest information intentionally made publicly accessible.

Use:
- official public APIs
- public XML
- public JSON
- public GeoJSON
- public ArcGIS services
- public webcams
- public HLS
- public image endpoints
- public government data
- public open-data repositories
- public camera directories
- public datasets
- publicly documented feeds

Do not:
- bypass authentication
- defeat access controls
- exploit vulnerabilities
- obtain private credentials
- access private cameras
- access private surveillance systems
- circumvent technical restrictions
- collect credentials
- bypass paywalls or access controls

If a source requires an API key or registration:
record it as:

AUTH_REQUIRED

Do not attempt to circumvent it.

If an agency provides a public access-request mechanism:
record:

ACCESS_REQUEST_AVAILABLE = true

and record the request/contact URL.

---

# 46. FLOCK / ALPR / LAW-ENFORCEMENT CAMERAS

Research publicly released datasets and intentionally public camera feeds associated with:

- ALPR
- Flock
- license plate readers
- police camera networks
- public safety camera networks

BUT:

Only include actual publicly released/machine-readable data.

Do not attempt to discover private law-enforcement infrastructure.

For public records/data portals:
ingest the published dataset.

For public live cameras:
ingest only where the operator intentionally publishes the camera publicly.

Create camera_type values:

ALPR
TRAFFIC_ENFORCEMENT
PUBLIC_SAFETY
LAW_ENFORCEMENT_PUBLIC
OTHER

Do not automatically classify every police camera as a public live camera.

---

# 47. DATABASE

Use a real relational database.

Prefer PostgreSQL/PostGIS if the project architecture supports it.

If the existing ProjectATLAS architecture requires SQLite:
use SQLite initially but design schemas so migration to PostGIS is straightforward.

Required tables:

sources
source_endpoints
source_runs
cameras
camera_sources
camera_health
camera_snapshots
camera_streams
events
event_sources
event_geometry
weather_observations
alerts
organizations
jurisdictions
roads
raw_documents
discovery_candidates
deduplication_matches
source_errors

Use indexes on:

latitude
longitude
state
county
city
category
subcategory
source_id
operator_id
camera_id
external_id
event_type
start_time
end_time
status

Add spatial indexes where supported.

---

# 48. API FOR ProjectATLAS

Expose normalized endpoints.

GET /api/cameras
GET /api/cameras/:id
GET /api/cameras/near
GET /api/cameras/bbox
GET /api/cameras/category/:category
GET /api/cameras/state/:state
GET /api/cameras/source/:source

GET /api/events
GET /api/events/near
GET /api/events/bbox
GET /api/events/type/:type
GET /api/events/state/:state

GET /api/weather
GET /api/alerts
GET /api/sources
GET /api/sources/:id
GET /api/health
GET /api/stats

Support:
bbox
radius
state
county
city
category
subcategory
source
operator
status
live
updated_since
event_type
severity

---

# 49. MAP PERFORMANCE

The database may eventually contain hundreds of thousands of cameras.

DO NOT send every camera to the renderer at startup.

Use:
- bounding-box queries
- clustering
- viewport loading
- state/county filters
- category filters
- spatial indexes

The renderer should request only cameras visible in the current map area.

---

# 50. INGESTION PRIORITY

Implement in this order:

PHASE 1:
Existing INDOT data

PHASE 2:
OpenTrafficCamMap

PHASE 3:
OpenEye

PHASE 4:
511 nationwide

PHASE 5:
ArcGIS discovery

PHASE 6:
OpenCCTV discovery/provenance

PHASE 7:
Datumfeed

PHASE 8:
Live-Environment-Streams

PHASE 9:
GitHub discovery

PHASE 10:
OpenStreetMap discovery

PHASE 11:
NWS / NOAA

PHASE 12:
FEMA / IPAWS

PHASE 13:
WZDx

PHASE 14:
USGS

PHASE 15:
Data.gov / Socrata / CKAN

PHASE 16:
State/county/city emergency feeds

PHASE 17:
Federal/public environmental cameras

PHASE 18:
Additional source discovery

---

# 51. SOURCE COUNTS

Build a dashboard showing:

total cameras
live cameras
offline cameras
unknown cameras
traffic cameras
weather cameras
nature cameras
wildlife cameras
airport cameras
port cameras
ski cameras
beach cameras
city cameras
other cameras

By:

country
state
county
source
operator
category

Also show:

total traffic events
active traffic events
weather alerts
emergency alerts
wildfires
earthquakes
floods
road closures
work zones

Never hard-code counts.

---

# 52. NATIONAL COVERAGE REPORT

Create a generated report:

U.S. state
camera count
traffic camera count
weather camera count
other camera count
traffic-event sources
emergency sources
weather sources
source count
last successful ingestion
coverage confidence

This will reveal states where ProjectATLAS has weak coverage.

---

# 53. DISCOVERY CANDIDATE SYSTEM

Every newly discovered source should initially enter:

discovery_candidates

Fields:

candidate_id
name
url
domain
source_type
discovered_from
state
category
description
suspected_operator
status
review_reason
first_seen
last_seen

Statuses:

NEW
INVESTIGATING
VERIFIED
PRODUCTION
REJECTED
DUPLICATE
DEAD

This prevents unverified sources from contaminating production.

---

# 54. AUTOMATED DISCOVERY

Implement scheduled discovery jobs.

Example:

daily:
- GitHub camera repositories
- ArcGIS camera services
- Data.gov datasets
- Socrata datasets
- CKAN datasets

weekly:
- government source discovery
- state DOT source audit
- camera directory comparison
- source health audit

monthly:
- full U.S. source rediscovery
- dead-source cleanup
- duplicate analysis

---

# 55. CHANGE DETECTION

For every source:

detect:
- new cameras
- removed cameras
- changed URLs
- changed coordinates
- changed names
- changed stream types
- changed categories
- changed licenses
- changed operators

Never silently overwrite history.

Store changes.

---

# 56. VERSIONING

Every imported record should have:

first_seen
last_seen
current_version
previous_version/reference

For repositories:
store commit hash.

For API responses:
store retrieval timestamp.

For XML:
store checksum.

For JSON:
store checksum.

---

# 57. SOURCE LICENSING

Store licensing independently from technical accessibility.

A URL being publicly accessible does NOT automatically mean unrestricted redistribution.

Fields:

publicly_accessible
redistribution_allowed
embedding_allowed
commercial_use
attribution_required
license
terms_url
source_notes

If unknown:

license_status = UNKNOWN

Do not invent a license.

---

# 58. CAMERA PLAYBACK

ProjectATLAS should not assume every source can be directly played.

Create:

stream_capability

values:

DIRECT_IMAGE
IMAGE_REFRESH
HLS
MJPEG
WEBRTC
MP4
EMBED_ONLY
LINK_ONLY
UNKNOWN

The database stores the source even when the renderer cannot directly play it.

---

# 59. TESTING

Create tests for every adapter.

Tests must verify:

- endpoint reachable
- response parses
- schema valid
- records > 0
- coordinates valid
- URLs valid
- no duplicate explosion
- source metadata present
- provenance present

Do not use fake fixtures unless explicitly marked as unit-test fixtures.

Production validation must use real current data.

---

# 60. FAILURE POLICY

If a source fails:

DO NOT delete all its records immediately.

Set:

source.status = DEGRADED/OFFLINE

Camera records remain with:
last_successful_fetch

After a configurable number of failures:
mark stale.

Only remove a camera after positive evidence that the source removed it or a configured retention period has elapsed.

---

# 61. SECURITY

The ingestion system must:

- use timeouts
- limit response sizes
- validate URLs
- prevent SSRF
- restrict allowed protocols
- avoid arbitrary internal network access
- sanitize XML
- disable unsafe XML entity expansion
- validate JSON
- limit redirects
- enforce rate limits
- use a user-agent identifying ProjectATLAS where appropriate
- log failures

Do not allow an imported source URL to cause arbitrary local network requests.

---

# 62. SOURCE RESEARCH OUTPUT

Before writing large amounts of code, create:

docs/PUBLIC_DATA_SOURCES.md

It must contain:

SOURCE
OWNER
CATEGORY
JURISDICTION
URL
MACHINE ENDPOINT
FORMAT
AUTH
LICENSE
UPDATE FREQUENCY
CAMERA COUNT
EVENT TYPES
STATUS
ADAPTER
LAST VERIFIED

Create:

docs/CAMERA_SOURCE_MATRIX.md

Create:

docs/EVENT_SOURCE_MATRIX.md

Create:

docs/DISCOVERY_STRATEGY.md

Create:

docs/DATA_MODEL.md

---

# 63. REQUIRED INITIAL SOURCE MATRIX

Research and verify these source families:

CAMERAS:

[ ] Existing INDOT CCTV
[ ] Existing TrafficWise
[ ] OpenTrafficCamMap
[ ] OpenEye
[ ] OpenCCTV
[ ] Datumfeed
[ ] Argus
[ ] Live-Environment-Streams
[ ] GitHub traffic-camera repositories
[ ] State 511 systems
[ ] State DOT systems
[ ] State transportation ArcGIS
[ ] City transportation ArcGIS
[ ] County transportation ArcGIS
[ ] Open511
[ ] OpenStreetMap camera discovery
[ ] NPS
[ ] NOAA
[ ] NWS
[ ] USGS
[ ] BLM
[ ] USFS
[ ] USACE
[ ] BOR
[ ] airport webcams
[ ] port webcams
[ ] harbor webcams
[ ] ski webcams
[ ] beach/surf webcams
[ ] wildlife webcams
[ ] scenic webcams
[ ] municipal webcam systems

TRAFFIC:

[ ] 511 APIs
[ ] Open511
[ ] WZDx
[ ] state DOT incident feeds
[ ] state DOT closure feeds
[ ] state DOT construction feeds
[ ] state DOT travel times
[ ] state DOT road conditions
[ ] municipal traffic feeds
[ ] county traffic feeds

WEATHER:

[ ] NWS API
[ ] NWS CAP
[ ] NOAA
[ ] NEXRAD
[ ] SPC
[ ] NHC
[ ] weather stations
[ ] public weather cameras

EMERGENCY:

[ ] FEMA
[ ] IPAWS/CAP
[ ] state emergency management
[ ] county emergency management
[ ] municipal emergency management
[ ] public fire feeds
[ ] public EMS feeds
[ ] public police incident feeds
[ ] public CAD feeds
[ ] wildfire feeds
[ ] evacuation feeds

ENVIRONMENT:

[ ] USGS earthquakes
[ ] USGS volcanoes
[ ] USGS water
[ ] NOAA marine
[ ] NOAA coastal
[ ] wildfire
[ ] smoke
[ ] air quality
[ ] flood gauges
[ ] river gauges
[ ] tsunami
[ ] environmental monitoring

DISCOVERY:

[ ] Data.gov
[ ] Socrata
[ ] CKAN
[ ] ArcGIS Hub
[ ] ArcGIS REST
[ ] GitHub
[ ] OpenStreetMap
[ ] camera aggregators
[ ] open-data catalogs

---

# 64. IMPORTANT DISTINCTION

Separate:

ORIGINAL SOURCE

from

AGGREGATOR

from

DISCOVERY SOURCE

Example:

INDOT = original

OpenTrafficCamMap = discovery/aggregation

OpenCCTV = aggregation

OpenEye = aggregation/provider depending on feed

OSM = geospatial discovery

GitHub repository = discovery/data repository

The same camera may appear in all five.

Do not count it five times.

---

# 65. FINAL DATABASE GOAL

The desired end state is:

ONE DATABASE

containing:

PUBLIC CAMERAS
+
TRAFFIC INFORMATION
+
WEATHER
+
EMERGENCY INFORMATION
+
ENVIRONMENTAL EVENTS

with:

- nationwide coverage
- state/county/city hierarchy
- geospatial querying
- source provenance
- deduplication
- live health
- historical source changes
- source licensing
- camera categories
- event categories
- machine-readable source metadata

ProjectATLAS should be able to answer:

"Show every known public camera within 10 miles."

"Show every live traffic camera in Indiana."

"Show cameras near this crash."

"Show weather cameras near this tornado warning."

"Show active road closures within this viewport."

"Show public cameras near this wildfire."

"Show all cameras in Indiana that have HLS."

"Show every camera source that has gone offline."

"Show every source covering this county."

"Show the original source behind this camera."

---

# 66. IMMEDIATE TASK

Do NOT immediately rewrite the whole application.

First:

1. Inspect the existing ProjectATLAS repository.
2. Identify the existing camera schema.
3. Identify the existing ingestion system.
4. Identify the existing INDOT adapter.
5. Identify the existing database/storage system.
6. Identify existing API routes.
7. Identify existing renderer expectations.
8. Identify existing deduplication logic.
9. Identify existing tests.
10. Produce a short architecture assessment.

Then create:

docs/PUBLIC_DATA_SOURCES.md
docs/CAMERA_SOURCE_MATRIX.md
docs/EVENT_SOURCE_MATRIX.md
docs/DATA_MODEL.md
docs/DISCOVERY_STRATEGY.md

Then implement the normalized source/data model.

Then implement adapters incrementally.

DO NOT break the existing working application.

DO NOT replace working INDOT functionality.

DO NOT rebuild the renderer until the backend data model is stable.

---

# 67. REQUIRED FIRST IMPLEMENTATION SET

After inspection, implement the highest-value verified adapters in this order:

1. Existing INDOT
2. OpenTrafficCamMap
3. OpenEye
4. nationwide 511 discovery
5. ArcGIS discovery
6. OpenCCTV discovery/provenance
7. Datumfeed
8. NWS
9. FEMA/IPAWS/CAP
10. WZDx
11. USGS
12. Data.gov/Socrata/CKAN discovery

After each adapter:

- run real ingestion
- record actual record count
- record failures
- run deduplication
- verify provenance
- run tests
- report exact results

NEVER report an estimated count as an actual count.

---

# 68. REPORTING FORMAT TO ME

At the end of each implementation phase report:

SOURCE:
STATUS:
ENDPOINT:
AUTH:
FORMAT:
RAW RECORDS:
VALID RECORDS:
DUPLICATES:
NEW RECORDS:
FAILED RECORDS:
CAMERAS:
EVENTS:
LAST VERIFIED:
LICENSE:
PROVENANCE:
FILES CHANGED:
TESTS:
BUILD:
KNOWN PROBLEMS:
NEXT STEP:

Use exact numbers from real execution.

No mock numbers.

No guessed URLs.

No invented APIs.

No claims of success without actually testing the source.

---

# 69. FINAL PRINCIPLE

ProjectATLAS should become a SOURCE-AGNOSTIC PUBLIC SITUATIONAL DATA PLATFORM.

The goal is NOT:

"collect websites."

The goal is:

DISCOVER
→ VERIFY
→ INGEST
→ NORMALIZE
→ DEDUPLICATE
→ GEOLOCATE
→ CLASSIFY
→ HEALTH-CHECK
→ ATTRIBUTE
→ STORE
→ SERVE

Build the infrastructure so that adding the 500th source is as easy as adding the 5th.

The system must continue discovering new U.S. public sources instead of requiring the developer to manually find every camera one at a time.
```

[1]: https://github.com/AidanWelch/OpenTrafficCamMap?utm_source=chatgpt.com "GitHub - AidanWelch/OpenTrafficCamMap: A crowdsourced database of traffic cameras · GitHub"
[2]: https://openeye.cam/docs?utm_source=chatgpt.com "Docs · OpenEye"
[3]: https://opencctv.org/cameras/united-states?utm_source=chatgpt.com "70,327 Live Cameras in United States (2026) - Watch Live Webcams | opencctv.org"
[4]: https://ops.fhwa.dot.gov/publications/fhwahop20041/fhwahop20041.pdf?utm_source=chatgpt.com "The WZDx data feed will be incrementally enhanced to evolve into a data feed that supports advanced warnings to AVs in and around work zones. The current version (WZDx v1.1) is a first step in this effort and highlights common core elements that serve as a foundation for required data for effective data exchange. This version addresses data currently supported by existing data feeds published by public and private-sector organizations."
[5]: https://www.fema.gov/sites/default/files/documents/fema_tip-40-nwems-over-noaa-weather-radio.pdf?utm_source=chatgpt.com "FEMA - INTEGRATED PUBLIC ALERT & WARNING SYSTEM (IPAWS) TIPSTIP 40: Non-Weather Emergency Messages"
