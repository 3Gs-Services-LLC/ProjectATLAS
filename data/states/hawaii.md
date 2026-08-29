---
state: Hawaii
usps: HI
slug: hawaii
dossier_number: 11
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
  imported_from: project_atlas_state_data/Hawaii.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Hawaii (HI) - ATLAS State Record

> Dossier **11 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Hawaii is unusual compared with Georgia. It has a **real statewide/HDOT traffic-camera program and public camera interfaces**, but the underlying machine-readable camera inventory is much harder to expose publicly. I found strong evidence for the camera system, direct public camera access, historical technical documentation, Honolulu ALPR documentation, and public radio feeds. I did **not** find evidence of a public statewide ALPR feed or statewide live police CAD feed.

The important part is that I am separating **confirmed exact sources** from things that merely appear on maps or third-party sites.

---

### 1. HDOT / GoAkamai traffic cameras

**Organization:** Hawaii Department of Transportation
**System:** GoAkamai Advanced Traveler Information System
**Category:** Public traffic cameras
**Status: 🟢 CONFIRMED**

[Hawaii Department of Transportation](https://hidot.hawaii.gov/?utm_source=chatgpt.com)

HDOT itself identifies **GoAkamai Traffic Cameras** as its traffic-camera service and says GoAkamai provides current freeway/highway conditions for **Oahu and Maui**. ([Hawaii Department of Transportation][1])

This is an official state transportation source.

---

### 2. GoAkamai camera system

The official GoAkamai documentation describes the system as providing:

* map-based access to streaming traffic cameras
* camera snapshots
* video streams
* camera search
* camera tours
* camera geographic selection
* continuously updated images

The official FAQ states that cameras are updated every few minutes and that a camera icon can provide a real-time photo and, where available, a video stream. ([GoAkamai][2])

#### Classification

```text
Official agency:
    🟢 HDOT

Public camera interface:
    🟢

Live snapshots:
    🟢

Video streams:
    🟢 where available

Machine-readable inventory:
    🟡 not yet established

Public API:
    🔴 not established
```

---

### 3. Historical size of the GoAkamai camera inventory

This is an important source-discovery clue.

HDOT documentation from the GoAkamai rollout stated that the system linked **over 200 traffic cameras** for on-site snapshots. ([Hawaii Department of Transportation][3])

A current third-party camera-monitoring project identifies **310+ Hawaii traffic cameras**, with approximately:

```text
280+ video
30+ image-only
```

and identifies GoAkamai as its Hawaii source. ([GitHub][4])

That latter figure is **not an official HDOT count**, so we should not insert 310 into the authoritative state inventory.

The useful conclusion is:

> Hawaii's public traffic-camera system is substantially larger than a handful of cameras.

---

### 4. GoAkamai exact public interface

[GoAkamai](https://goakamai.org/?utm_source=chatgpt.com)

The official GoAkamai FAQ documents the camera interface in detail.

The camera layer provides:

```text
camera location
camera snapshot
camera search
camera tour
video stream when available
```

The FAQ specifically says the camera image is updated every few minutes and that the video stream can be activated from the camera interface. ([GoAkamai][2])

---

### 5. GoAkamai video behavior

The official documentation says:

```text
camera selected
      ↓
real-time photo
      ↓
optional video stream
      ↓
30-second playback
      ↓
user can resume
```

The video stream automatically stops after 30 seconds, but the user can restart it. ([GoAkamai][2])

This is significant because the Hawaii source should support both:

```text
snapshot
```

and:

```text
stream
```

rather than assuming every camera is JPEG-only.

---

### 6. GoAkamai machine-readable endpoint status

I specifically searched for:

```text
GoAkamai API
GoAkamai JSON
GoAkamai camera API
GoAkamai M3U8
GoAkamai camera endpoint
```

I did **not** find a currently documented public developer API equivalent to Georgia's:

```text
/api/v2/get/cameras
```

Therefore:

```text
Official camera UI:
    🟢

Official camera service:
    🟢

Documented public REST camera API:
    🔴 NOT FOUND

Documented public JSON camera inventory:
    🔴 NOT FOUND

Documented public GeoJSON camera inventory:
    🔴 NOT FOUND
```

This distinction is important.

**Do not invent an API endpoint for Hawaii.**

---

### 7. HDOT's own documentation confirms camera ownership/source

HDOT's website directly describes GoAkamai as the service for checking current traffic conditions and identifies the cameras as part of the transportation system. ([Hawaii Department of Transportation][1])

So the source relationship should be:

```text
State of Hawaii
    ↓
Hawaii Department of Transportation
    ↓
Highways Division
    ↓
GoAkamai
    ↓
Traffic Cameras
```

---

### 8. GoAkamai coverage

HDOT currently describes GoAkamai traffic cameras for:

```text
Oahu
Maui
```

([Hawaii Department of Transportation][1])

The older GoAkamai documentation says camera tours were initially limited to Oahu, while the broader system incorporated other transportation information. ([GoAkamai][2])

#### Current classification

```text
Oahu:
    🟢

Maui:
    🟢

Hawaii Island:
    🟡 camera evidence exists elsewhere,
    but official GoAkamai statewide coverage not established

Kauai:
    🟡

Lanai:
    🔴 no GoAkamai traffic-camera inventory established

Molokai:
    🔴 no GoAkamai traffic-camera inventory established
```

---

### 9. Important current restriction

There is a very important development.

A current Hawaii camera website states that **HDOT and GoAkamai traffic cameras have been removed from its public aggregation at the request of the State of Hawaii**. ([Pacific Watch][5])

This does **not** mean HDOT's own GoAkamai camera service disappeared.

It means:

```text
Third-party aggregation:
    restricted/removed

Official HDOT / GoAkamai:
    still identified by HDOT
```

That distinction should be retained in the database.

---

### 10. Hawaii traffic-camera source hierarchy

For the project:

#### Tier A

```text
HDOT
    ↓
GoAkamai
```

#### Tier B

```text
official HDOT documentation
```

#### Tier C

```text
third-party camera aggregators
```

#### Tier D

```text
community camera maps
```

Never substitute a Tier-C camera count for the official source.

---

### 11. GoAkamai traffic events

The GoAkamai FAQ confirms that its interactive map includes current:

* incidents
* construction
* special events
* weather events
* lane closures
* alerts

([GoAkamai][2])

The system also updates the event list every few minutes. ([GoAkamai][2])

#### Status

```text
Official event information:
    🟢

Live public event UI:
    🟢

Documented public event API:
    🔴 not found
```

---

### 12. GoAkamai lane-closure data

GoAkamai exposes planned HDOT lane closures.

The documentation states that selecting a lane-closure segment provides:

```text
start date
end date
starting milepost
ending milepost
nature of work
```

([GoAkamai][2])

#### Canonical source

```text
GA-HI-GOAkamai-LaneClosures
```

Recommended type:

```text
TRANSPORTATION_EVENT
```

---

### 13. Hawaii traffic-volume data

GoAkamai also exposes historical traffic-volume information on key state routes. ([GoAkamai][2])

The system can display:

```text
road segment
average daily vehicle volume
```

This is useful ancillary data but is not itself a camera source.

---

### 14. Hawaii Doppler traffic sensors

The original GoAkamai architecture used **73 Doppler radar stations** to provide real-time traffic-flow information on Oahu. ([Hawaii Department of Transportation][3])

That is a separate sensor class:

```text
HDOT
 ├── Cameras
 └── Traffic radar
```

The radar data should not be misclassified as video surveillance.

---

### 15. Hawaii ArcGIS camera discovery

I searched ArcGIS services for Hawaii traffic-camera layers.

There are numerous ArcGIS camera datasets, but the search results do **not establish that the services are official HDOT camera inventories**.

For example, ArcGIS has generic `Traffic_Cameras`, `Cameras`, and `Traffic_Camera` FeatureServer services, but their geographic extents and ownership metadata do not establish Hawaii DOT provenance. ([ArcGIS Services][6])

#### Therefore:

```text
Generic ArcGIS camera layers:
    🟡 candidates

Official Hawaii DOT ArcGIS camera service:
    🔴 NOT CONFIRMED
```

This is exactly the kind of thing we **must not incorrectly ingest as state data**.

---

### 16. Hawaii ALPR — Honolulu Police Department

This is a much stronger ALPR source.

The Honolulu Police Department maintains an official ALPR policy.

[Honolulu Police Department ALPR Policy](https://www.honolulupd.org/policy/policy-automated-license-plate-reader/?utm_source=chatgpt.com)

The policy explicitly states that HPD uses:

> Automated License Plate Reader technology

for official law-enforcement purposes. ([Honolulu Police Department][7])

#### Status

🟢 **OFFICIAL CONFIRMED ALPR DEPLOYMENT**

---

### 17. HPD ALPR type

HPD's policy defines ALPR as a device using:

```text
cameras
+
computer technology
+
license-plate image comparison
```

The system compares captured plates against lists of plates of interest. ([Honolulu Police Department][7])

Therefore this is unquestionably an ALPR system rather than a normal traffic camera.

---

### 18. HPD ALPR mobile deployment

The policy explicitly describes ALPR cameras mounted to police vehicles.

Operators must:

* inspect the ALPR equipment
* activate the ALPR software
* receive updated hot lists
* search detections
* keep ALPR activated during patrol

([Honolulu Police Department][7])

This means the known deployment is at least partly:

```text
MOBILE ALPR
```

rather than solely fixed roadside cameras.

---

### 19. HPD ALPR history

Honolulu Police Department's ALPR deployment is not new.

A 2014 report documented HPD's purchase and installation of **12 ALPRs in 2013** for approximately $238,988. ([Honolulu Civil Beat][8])

That is historical evidence, not a current camera count.

The correct database record should be:

```text
deployment:
    documented

historical_count:
    12

historical_date:
    2013

current_count:
    UNKNOWN
```

Do **not** carry the 12-camera figure forward as the 2026 count.

---

### 20. HPD ALPR retention

This is one of the most useful exact findings.

HPD's policy states that downloaded ALPR data is purged after:

```text
90 days
```

unless it has become evidence or is subject to lawful production. ([Honolulu Police Department][7])

#### Canonical field

```text
retention_period:
    90 days

exceptions:
    evidentiary/legal hold
```

---

### 21. HPD ALPR data location

The policy states that downloaded ALPR data is stored at a secured, offsite **FBI-certified data-storage location**. ([Honolulu Police Department][7])

This establishes:

```text
storage:
    remote/offsite

security:
    FBI-certified facility
```

It does **not** establish a public endpoint.

---

### 22. HPD ALPR data sharing

HPD's policy says ALPR data cannot be shared with:

```text
media
general public
non-law-enforcement personnel/agencies
```

without appropriate written approval.

It can be provided to law-enforcement agencies/personnel with authorization. ([Honolulu Police Department][7])

#### Therefore:

```text
Public ALPR data API:
    🔴

Public plate-read feed:
    🔴

Law-enforcement sharing:
    🟢 policy-authorized
```

---

### 23. HPD hot-list data

The ALPR system automatically downloads the current hot list at least **four times per day**. ([Honolulu Police Department][7])

The hot list can include plates associated with:

* stolen vehicles
* vehicles involved in crimes
* wanted persons
* missing persons
* special investigative lists

([Honolulu Police Department][7])

Again, this is **not a public hot-list feed**.

---

### 24. Hawaii ALPR beyond Honolulu

The ALPR research trail is not limited to HPD.

An ACLU Hawaii records archive identifies historical ALPR records requests involving:

```text
Honolulu Police Department
Hawaii Police Department
Kauai Police Department
Maui Police Department
Hawaii State Department of Transportation
```

([American Civil Liberties Union][9])

That is useful evidence that ALPR technology was investigated/requested across multiple Hawaii jurisdictions.

But these records are historical.

#### Current status

```text
HPD:
    🟢 current official policy

Hawaii County Police:
    🟡 historical ALPR evidence

Maui Police:
    🟡 historical ALPR evidence

Kauai Police:
    🟡 historical ALPR evidence

HDOT:
    🟡 historical ALPR records

Statewide current ALPR inventory:
    🔴 not found
```

---

### 25. Hawaii ALPR community mapping

Current OSM-derived sources show a relatively small documented ALPR footprint compared with many mainland states.

One current dataset reports:

```text
73 documented ALPR locations
4 counties
```

and explicitly states that this is a **floor, not an inventory**. ([Unsurveilled][10])

Another current OSM-derived dataset reports:

```text
71 documented cameras
```

and says the data was checked against OpenStreetMap in August 2026. ([Finding Flock][11])

Another current OSM-derived source reports:

```text
79 cameras
```

as of August 24, 2026. ([Flock Scanner][12])

#### Correct conclusion

The counts differ because they are different snapshots/processing methods.

Therefore:

```text
official Hawaii ALPR count:
    UNKNOWN

minimum community-mapped footprint:
    ~70+
```

---

### 26. ALPR vendors in Hawaii

The current community-derived data identifies vendors including:

```text
Flock Safety
Motorola / Vigilant
Genetec
```

One dataset reports:

```text
Flock:
    53

Motorola/Vigilant:
    19

Genetec:
    5

Unknown:
    2
```

([Flock Scanner][12])

Another dataset identifies:

```text
Flock Safety
Motorola Solutions
Genetec
```

among mapped Hawaii cameras. ([Finding Flock][11])

#### Important

These are **OSM/community-derived vendor tags**, not a Hawaii government inventory.

---

### 27. Hawaii ALPR exact source hierarchy

```text
TIER A
HPD official ALPR policy
        ↓
TIER B
agency public records / procurement
        ↓
TIER C
OpenStreetMap / DeFlock-derived mapping
        ↓
TIER D
independent camera databases
```

The national source database should preserve the provenance level.

---

### 28. Hawaii statewide ALPR API

I found:

```text
HPD ALPR system:
    🟢 confirmed

Public HPD ALPR data:
    🔴

Public statewide ALPR API:
    🔴

Public live plate-read stream:
    🔴

Public historical plate-read database:
    🔴
```

This is not a missing-research assumption; it follows from the official policy's explicit restrictions on public sharing and the absence of a documented public endpoint. ([Honolulu Police Department][7])

---

### 29. Hawaii police/fire/EMS radio

Broadcastify currently lists:

```text
Hawaii:
    6 audio feeds
```

in its state directory. ([Broadcastify][13])

#### Status

🟢 **PUBLIC RADIO FEEDS EXIST**

However, Hawaii has dramatically less public scanner coverage than many mainland states.

---

### 30. Broadcastify Hawaii source

[Broadcastify Hawaii feeds](https://status.broadcastify.com/listen/?stid=15&utm_source=chatgpt.com)

The current Broadcastify state directory lists **6 Hawaii feeds**. ([Broadcastify][13])

The project should record Broadcastify as:

```text
source_type:
    PUBLIC_SAFETY_AUDIO

provider:
    Broadcastify

state:
    Hawaii

feed_count:
    6
```

with the count timestamped.

---

### 31. Radio feed caveat

Broadcastify is not a government data source.

The correct relationship is:

```text
Hawaii public-safety radio
        ↓
radio transmission
        ↓
scanner receiver
        ↓
Broadcastify broadcaster
        ↓
public stream
```

Therefore:

```text
underlying public radio:
    🟢

official state API:
    🔴

third-party public stream:
    🟢
```

---

### 32. Hawaii police CAD

I found evidence that Hawaii PSAP/911 and police systems contain incident/dispatch information, but I did **not** find a publicly documented statewide live CAD API.

Therefore:

```text
Statewide live CAD:
    🔴 NOT FOUND

Local agency records:
    🟡

911/PSAP infrastructure:
    🟢
```

Do not represent Hawaii as having a public statewide CAD feed.

---

### 33. Honolulu police information systems

HPD's ALPR policy references the:

```text
City and County of Honolulu computer system
```

as one of the sources associated with hot-list information. ([Honolulu Police Department][7])

This establishes integration between ALPR and internal law-enforcement information systems.

It does **not** establish public access.

---

### 34. Hawaii noise-detection cameras

There is another interesting camera class.

HDOT issued a formal RFP for a:

**Traffic Noise Detection Camera Pilot Project**

The project called for cameras capable of traffic-noise detection and related data management. ([HIEPRO][14])

The RFP says the pilot was authorized by Act 63 and called for at least two noise cameras initially. ([HIEPRO][14])

#### Classification

```text
camera type:
    TRAFFIC NOISE DETECTION

agency:
    HDOT

status:
    🟡 documented pilot/project

public live feed:
    🔴 not established
```

This should be recorded separately from CCTV and ALPR.

---

### 35. Hawaii traffic cameras vs ALPR

This distinction is especially important in Hawaii.

```text
HDOT / GoAkamai
    ↓
traffic cameras
    ↓
public snapshots/video

HPD
    ↓
ALPR
    ↓
law-enforcement plate detections
    ↓
restricted data

HDOT
    ↓
noise detection camera pilot
    ↓
specialized traffic monitoring
```

These are three different surveillance classes.

---

### 36. Hawaii exact source registry

| Source                     | Organization    | Exact source                     | Status |
| -------------------------- | --------------- | -------------------------------- | ------ |
| GoAkamai                   | HDOT            | `goakamai.org`                   | 🟢     |
| HDOT traffic cameras       | HDOT            | GoAkamai camera layer            | 🟢     |
| Camera snapshots           | GoAkamai        | camera interface                 | 🟢     |
| Camera video               | GoAkamai        | camera interface                 | 🟢     |
| GoAkamai camera API        | HDOT            | not publicly documented          | 🔴     |
| GoAkamai JSON inventory    | HDOT            | not found                        | 🔴     |
| GoAkamai GeoJSON inventory | HDOT            | not found                        | 🔴     |
| Traffic events             | HDOT/GoAkamai   | public map                       | 🟢     |
| Lane closures              | HDOT/GoAkamai   | public map                       | 🟢     |
| Traffic volume             | HDOT/GoAkamai   | public map                       | 🟢     |
| Traffic radar              | HDOT            | historical GoAkamai architecture | 🟢     |
| HPD ALPR                   | Honolulu Police | official policy                  | 🟢     |
| HPD ALPR retention         | HPD             | official policy                  | 🟢     |
| HPD ALPR public data       | HPD             | restricted                       | 🔴     |
| Statewide ALPR API         | Hawaii          | —                                | 🔴     |
| ALPR community map         | OSM             | derived                          | 🟢     |
| Police radio               | Broadcastify    | public feeds                     | 🟢     |
| Fire radio                 | Broadcastify    | public feeds                     | 🟢     |
| EMS radio                  | Broadcastify    | public feeds                     | 🟢     |
| Statewide live CAD         | Hawaii          | —                                | 🔴     |
| Noise-detection cameras    | HDOT            | RFP/pilot                        | 🟡     |

---

### 37. Recommended Hawaii source objects

#### Source 1 — HDOT GoAkamai

```text
SOURCE_ID:
    HI-HDOT-GOAKAMAI

organization:
    Hawaii Department of Transportation

program:
    GoAkamai

source_type:
    TRAFFIC_INFORMATION

camera_capability:
    true

snapshot_capability:
    true

video_capability:
    true

coverage:
    Oahu
    Maui

public_interface:
    https://goakamai.org/

machine_api:
    UNKNOWN / NOT DOCUMENTED

provenance:
    OFFICIAL_STATE
```

---

#### Source 2 — HPD ALPR

```text
SOURCE_ID:
    HI-HPD-ALPR

organization:
    Honolulu Police Department

source_type:
    ALPR

deployment:
    MOBILE

confirmed:
    true

historical_deployment:
    12 units documented in 2013

retention:
    90 days

public_read_feed:
    false

public_database:
    false

provenance:
    OFFICIAL_AGENCY_POLICY
```

---

#### Source 3 — Hawaii community ALPR

```text
SOURCE_ID:
    HI-OSM-ALPR

organization:
    OpenStreetMap contributors

source_type:
    ALPR_LOCATION

approximate_documented_count:
    70+

official:
    false

provenance:
    COMMUNITY_MAPPED

coordinate_data:
    true
```

---

#### Source 4 — Hawaii public radio

```text
SOURCE_ID:
    HI-BROADCASTIFY

organization:
    Broadcastify / independent feed providers

source_type:
    PUBLIC_SAFETY_AUDIO

current_feed_count:
    6

official:
    false

public:
    true
```

---

### 38. Hawaii source quality ranking

#### 🥇 GoAkamai / HDOT

**Quality: 9/10**

Excellent official source.

The problem is **machine-readable endpoint discovery**, not lack of public cameras.

---

#### 🥈 HPD ALPR policy

**Quality: 9/10**

Excellent evidence of an actual ALPR deployment and unusually good documentation of:

* deployment method
* operators
* retention
* sharing
* hot lists
* security
* system access

---

#### 🥉 HDOT noise-camera RFP

**Quality: 8/10**

Strong official documentation of a specialized camera deployment.

---

#### #4 Broadcastify

**Quality: 7/10**

Excellent public access to actual radio, but it is third-party infrastructure rather than a government source.

---

#### #5 OSM ALPR mapping

**Quality: 6/10**

Excellent for **finding physical camera locations**, but it must be marked as community-derived.

---

### 39. What we should NOT ingest as authoritative Hawaii data

I specifically would **not** currently treat these as official Hawaii camera inventories:

```text
Generic ArcGIS Traffic_Cameras layers
```

unless their ownership/provenance can be tied back to HDOT.

Likewise:

```text
71 ALPR
73 ALPR
79 ALPR
```

should **not** become:

```text
"Hawaii has 79 ALPRs."
```

They mean:

```text
"At least approximately 70+ ALPR locations
have been mapped by community/open-data projects."
```

That is a very different statement.

---

### 40. Hawaii final classification

| Category                             | Rating               |
| ------------------------------------ | -------------------- |
| Official traffic camera system       | 🟢 **Excellent**     |
| Public camera snapshots              | 🟢                   |
| Public camera video                  | 🟢                   |
| Official machine-readable camera API | 🔴 **Not found**     |
| Official camera GeoJSON              | 🔴 **Not found**     |
| Official camera ArcGIS service       | 🔴 **Not confirmed** |
| Traffic incidents                    | 🟢                   |
| Lane closures                        | 🟢                   |
| Traffic volumes                      | 🟢                   |
| Traffic radar                        | 🟢                   |
| Official ALPR deployment evidence    | 🟢                   |
| ALPR policy                          | 🟢 **Excellent**     |
| ALPR retention information           | 🟢                   |
| Public ALPR plate data               | 🔴                   |
| Public statewide ALPR API            | 🔴                   |
| ALPR physical-location mapping       | 🟢 community         |
| Police radio                         | 🟢                   |
| Fire radio                           | 🟢                   |
| EMS radio                            | 🟢                   |
| Public statewide CAD API             | 🔴                   |
| Specialized traffic-noise cameras    | 🟡                   |

---

### 41. Bottom line — Hawaii

Hawaii is **not as clean a machine-readable state as Georgia**, but it has a valuable official camera system.

The authoritative chain is:

```text
STATE OF HAWAII
      │
      ▼
HAWAII DEPARTMENT OF TRANSPORTATION
      │
      ▼
GOAKAMAI
      │
      ├── TRAFFIC CAMERAS 🟢
      │     ├── snapshots
      │     └── video
      │
      ├── TRAFFIC EVENTS 🟢
      ├── LANE CLOSURES 🟢
      ├── TRAFFIC VOLUMES 🟢
      └── TRAFFIC RADAR 🟢
```

The ALPR chain is separate:

```text
HONOLULU POLICE DEPARTMENT
      │
      ▼
ALPR
      │
      ├── mobile cameras 🟢
      ├── plate detections 🟢
      ├── hot lists 🟢
      ├── 90-day retention 🟢
      └── public access 🔴
```

And the public radio chain:

```text
HAWAII PUBLIC-SAFETY RADIO
      │
      ▼
SCANNER / SDR
      │
      ▼
BROADCASTIFY
      │
      ▼
PUBLIC AUDIO 🟢
```

#### Most important discovery for the national project

**Do not discard Hawaii because GoAkamai does not expose an obvious documented REST API.**

The official system demonstrably provides **hundreds of traffic cameras, snapshots, and video streams**, and the next research step for the ingestion engine should be **protocol-level discovery of the current GoAkamai camera layer** rather than scraping the rendered website blindly. The official documentation explicitly confirms that the map is interacting with individual camera objects and retrieving snapshots/video. ([GoAkamai][2])

**Next alphabetically: Idaho.**

[1]: https://hidot.hawaii.gov/page/212/?utm_source=chatgpt.com "Department of Transportation - State of Hawaii"
[2]: https://goakamai.org/goakamaifaqs/?utm_source=chatgpt.com "GoAkamai FAQs"
[3]: https://hidot.hawaii.gov/wp-content/uploads/2013/04/2013_02_27_Nuuanu_Kalihi_Liliha_Town_Meeting.pdf?utm_source=chatgpt.com "GoAkamai Advanced Traveler Information System – www.goakamai.org"
[4]: https://github.com/cailinpitt/ClassicTraffic?utm_source=chatgpt.com "GitHub - cailinpitt/ClassicTraffic: Posts videos of state traffic cameras 🚗 · GitHub"
[5]: https://pacificwatch.app/cameras?utm_source=chatgpt.com "Hawaii Traffic & Scenic Cameras | Pacific Watch"
[6]: https://services8.arcgis.com/vrKxMj6W1o5wlmJi/arcgis/rest/services/Traffic_Cameras/FeatureServer?utm_source=chatgpt.com "Traffic_Cameras (FeatureServer)"
[7]: https://www.honolulupd.org/policy/policy-automated-license-plate-reader/?utm_source=chatgpt.com "Automated License Plate Reader - Honolulu Police Department"
[8]: https://www.civilbeat.org/2014/06/its-your-money-hpd-spends-240000-to-record-license-plates/?utm_source=chatgpt.com "It’s Your Money: HPD Spends $240,000 to Record License Plates - Honolulu Civil Beat"
[9]: https://www.aclu.org/documents/alpr-documents-hawaii?utm_source=chatgpt.com "ALPR Documents: Hawaii | American Civil Liberties Union"
[10]: https://www.unsurveilled.org/atlas/hawaii/?utm_source=chatgpt.com "Hawaii — known ALPR locations — Unsurveilled"
[11]: https://www.findingflock.com/cameras/hawaii?utm_source=chatgpt.com "71 Flock & ALPR Cameras in Hawaii · Finding Flock"
[12]: https://flockscanner.com/flock-camera-map/hi/?utm_source=chatgpt.com "Flock Camera Map: Hawaii · FlockScanner"
[13]: https://status.broadcastify.com/listen/?utm_source=chatgpt.com "Browse Audio Feeds"
[14]: https://hiepro.ehawaii.gov/resources/133125/Request%20for%20Proposals%20Part%20I-1%20of%204%20FINAL%20SPECIFICATIONS%20MTRB%202023%2002.pdf?utm_source=chatgpt.com "RELEASE DATE: February 14, 2024The State of Hawaii"
