---
state: Arkansas
usps: AR
slug: arkansas
dossier_number: 4
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
  imported_from: project_atlas_state_data/Arkansas.txt
  imported_on: 2026-08-28
  stated_dossier_number: null
  transform: >-
    Dossier prose preserved verbatim. Heading levels re-leveled so the dossier
    nests under section 2 (numbered sections to h3, their subsections to h4-h6).
    The original title and the State/Research-date lines were hoisted into this
    frontmatter.
---

# Arkansas (AR) - ATLAS State Record

> Dossier **4 of 50** &middot; Research date **2026-08-28** &middot; Spec status **draft**

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

Arkansas is actually a very strong state for this project. The important distinction is that **ARDOT publishes a large live camera network, but its current public terms explicitly restrict third-party reuse of the camera data**. So I’m recording the source as real and public while separately recording its reuse restrictions.

---

### 1. ARDOT / IDrive Arkansas — statewide traffic cameras

**Organization:** Arkansas Department of Transportation (ARDOT)
**System:** IDrive Arkansas
**Category:** State DOT / CCTV
**Status: 🟢 CONFIRMED**

ARDOT's ITS Operations page says the department operates **almost 440 department-owned PTZ traffic cameras statewide** and provides live video from those cameras through IDriveArkansas.com. ([Arkansas Department of Transportation][1])

ARDOT's 2025 publication separately states that it has approximately **400 live traffic cameras across the state** available to the public. ([Arkansas Department of Transportation][2])

Official portal:

[IDrive Arkansas](https://www.idrivearkansas.com/?utm_source=chatgpt.com)

ARDOT's traveler-information page directly directs users to IDriveArkansas for current traffic conditions. ([Arkansas Department of Transportation][3])

#### Current inventory estimate

**~400–440 ARDOT-owned PTZ cameras**

The difference appears to be timing/definition rather than contradictory evidence.

**Classification:**

`STATE_DOT → ARDOT → IDRIVEARKANSAS → CCTV`

---

### 2. ARDOT camera media

This is where Arkansas gets particularly interesting.

ARDOT explicitly says:

> IDrive Arkansas provides live video feeds from ITS traffic cameras.

([Arkansas Department of Transportation][1])

There is also independent evidence of the actual underlying streaming architecture.

A public implementation that extracts state DOT cameras identifies Arkansas as:

`IDriveArkansas`

and handles its camera source as a token-authenticated source. ([GitHub][4])

Older direct camera-stream examples from IDriveArkansas exposed **Wowza/Akamai HLS `.m3u8` playlists**. ([Reddit][5])

For example, historically observed streams followed the pattern:

```text
https://wowzaprodXX-i.akamaihd.net/hls/live/.../chunklist.m3u8
```

#### Current status

**Camera network:** 🟢 CONFIRMED
**Live video:** 🟢 CONFIRMED
**HLS implementation:** 🟢 CONFIRMED historically / independently implemented
**Current exact HLS endpoint:** 🟡 requires current extraction

I am **not** taking an old `.m3u8` URL and claiming it is still active in 2026.

---

### 3. ARDOT camera inventory / identifiers

IDriveArkansas camera records expose camera information including:

* route
* mile marker
* direction
* camera view
* camera ID
* temperature
* elevation

A current ARDOT document shows an example camera:

**I-40 — Galloway, Exit 161**

with:

```text
Camera View: W
Temperature: 88°
Elevation: 250 ft.
Camera ID: 6008
```

([Ark Media][6])

That is strong evidence that the public system has stable camera identifiers.

#### Status

🟢 **CONFIRMED**

---

### 4. ARDOT camera types

The IDriveArkansas system does more than ordinary highway CCTV.

Its map categorizes:

* Traffic Cameras
* Work Zone Cameras
* Truck Parking

([Ark Media][6])

That means the eventual Arkansas registry should not flatten everything into `CCTV`.

Use:

```text
CAMERA
├── traffic
├── work_zone
└── truck_parking
```

where the source distinguishes them.

---

### 5. Work-zone cameras

**Status: 🟢 CONFIRMED**

IDriveArkansas specifically displays **Work Zone Camera** as a separate map category. ([Ark Media][6])

This is valuable because work-zone cameras can be temporary or mobile compared with the permanent ARDOT camera network.

#### Classification

`ARDOT → ITS → WORK_ZONE_CCTV`

---

### 6. Truck-parking cameras / monitoring

IDriveArkansas also lists **Truck Parking** in the camera-related map categories. ([Ark Media][6])

I am **not yet classifying these as publicly accessible camera feeds** because the evidence establishes the category/interface, but not a separate direct media endpoint.

#### Status

🟡 **CATEGORY CONFIRMED**

🟡 **PUBLIC MEDIA ENDPOINT NOT YET CONFIRMED**

---

### 7. ARDOT camera footage retention

This is a very important negative finding.

ARDOT's current IDrive documentation says:

> Video produced by the Traffic Camera feature is not recorded or archived.

([IDrive Arkansas][7])

An ARDOT presentation likewise states:

> ARDOT does not record or store traffic camera footage.

([Ark Media][6])

Therefore:

| Data                            | Status |
| ------------------------------- | ------ |
| Live camera                     | 🟢     |
| Current image/video             | 🟢     |
| Historical ARDOT camera archive | 🔴     |
| Public historical video API     | 🔴     |

This should be preserved in the source record.

---

### 8. Critical restriction — ARDOT camera reuse

This is one of the most important findings in Arkansas.

ARDOT's current Acceptable Use policy states that:

* IDriveArkansas is free to the public
* camera images are public through the site
* users may not capture the site within frames
* users may not directly or indirectly link to cameras from another website/app
* users may not build an application containing links to cameras
* ARDOT's data is subject to copyright restrictions
* authorization is not provided for third-party applications to use the data to create similar products
* users agree not to reverse engineer or adapt the code used to provide IDrive Arkansas

([IDrive Arkansas][8])

#### This changes the classification.

The source is:

**PUBLICLY ACCESSIBLE:** Yes

but:

**OPEN FOR UNRESTRICTED THIRD-PARTY REUSE:** **No**

Therefore the registry should record:

```text
access:
    public

authentication:
    source-dependent

reuse:
    restricted

reverse_engineering:
    prohibited by published terms

third_party_embedding:
    prohibited
```

This is exactly why the project needs an **access** field separate from a **legal/reuse** field.

---

### 9. IDrive Arkansas — traffic conditions

The IDrive system is not limited to cameras.

ARDOT says the portal provides current:

* traffic conditions
* construction
* traveler information
* road closures
* lane closures
* width restrictions

([Arkansas Department of Transportation][3])

The current map also displays:

* live traffic
* highway closures
* work zones
* traffic cameras
* cluster markers

([Ark Media][6])

#### Status

🟢 **CONFIRMED PUBLIC TRAVEL-INFORMATION SYSTEM**

---

### 10. IDrive Arkansas — incident / closure information

Current IDrive documentation demonstrates public highway-closure records containing fields such as:

* county
* route
* closure reason
* travel direction
* lanes closed
* total distance
* detour
* reporting agency
* date/time
* last update
* description

([Ark Media][6])

#### Classification

`ARDOT → TRAFFIC EVENTS / CLOSURES`

🟢 **CONFIRMED**

#### Exact machine endpoint

🔴 **Not yet independently verified**

I am not deriving an API URL from the website's JavaScript.

---

### 11. ARDOT ITS infrastructure

ARDOT says its statewide ITS inventory currently includes approximately:

* **440 PTZ traffic cameras**
* **100 Dynamic Message Signs**
* **~12 permanent Highway Advisory Radio sites**

([Arkansas Department of Transportation][1])

This gives us three distinct source categories:

```text
ARDOT ITS
├── CCTV
├── DMS
└── HAR
```

#### DMS

🟢 **CONFIRMED infrastructure**

#### HAR

🟢 **CONFIRMED infrastructure**

#### Public machine-readable DMS/HAR feed

🟡 **Not yet verified**

---

### 12. ARDOT Land Mobile Radio

ARDOT also operates its own statewide VHF conventional radio system.

ARDOT describes:

* 46 tower sites
* statewide VHF conventional coverage
* district/headquarters base radios
* approximately 1,200 mobile radios
* approximately 1,200 portable radios
* microwave radio links
* fiber connections

([Arkansas Department of Transportation][1])

This is **ARDOT operational radio**, not police scanner data.

#### Public Internet audio feed

🔴 **NOT FOUND**

So:

`ARDOT LMR system = confirmed`

but:

`ARDOT live Internet radio = not confirmed`

---

### 13. Arkansas public police/fire scanner ecosystem

Arkansas has a very substantial public radio ecosystem.

Current Broadcastify indexing reports approximately:

**247 audio feeds across 76 Arkansas counties**

with:

* 144 public-safety feeds
* 13 amateur-radio feeds
* 4 other
* 2 aviation
* 1 rail

([Broadcastify][9])

The public-safety-only index currently reports:

**177 public-safety feeds across 58 counties.** ([Broadcastify][10])

This is a major source family.

---

### 14. Arkansas official government radio feeds

This is particularly valuable.

Broadcastify's **Official Feeds** directory currently lists multiple Arkansas feeds explicitly identified as official agency broadcasts. ([Broadcastify][11])

Confirmed Arkansas official feeds include:

#### Fort Smith Police Dispatch

🟢 **OFFICIAL**

The official-feed directory identifies:

`Fort Smith Police Dispatch`

as an official public-safety feed. ([Broadcastify][11])

#### North Little Rock Police Dispatch 1

🟢 **OFFICIAL**

The individual feed says:

* Feed ID: `18094`
* Online
* 30-minute delay
* North Little Rock PD Dispatch 1
* AWIN system
* official feed provided by the North Little Rock Police Department

([Broadcastify][12])

This is an excellent source record because it gives us both the originating agency and the underlying radio network.

---

### 15. North Little Rock Police — exact source details

**Agency:** North Little Rock Police Department
**System:** Arkansas Wireless Information Network (AWIN)
**Talkgroup:** PD DISP1
**Feed:** Broadcastify Feed 18094
**Delay:** 30 minutes
**Public:** Yes
**Official:** Yes

The feed notes also state that **all department talk groups are encrypted**, which makes this public feed particularly useful because it represents a deliberate public rebroadcast rather than unrestricted access to the entire radio system. ([Broadcastify][12])

#### Classification

```text
ARKANSAS
└── NORTH LITTLE ROCK PD
    └── AWIN
        └── PD DISP1
            └── Official public Internet feed
```

🟢 **CONFIRMED**

---

### 16. Ouachita County Sheriff

Broadcastify's official-feed directory also lists:

**Ouachita County Sheriff Dispatch**

as an official Arkansas feed. ([Broadcastify][11])

#### Status

🟢 **CONFIRMED OFFICIAL FEED**

---

### 17. Pafford EMS

This is an interesting non-police source.

Broadcastify's official directory currently lists official Pafford EMS feeds for:

* Central Arkansas
* Crittenden
* North-Central Arkansas
* Northeast Arkansas
* Northwest Arkansas
* Southeast Arkansas
* Southwest Arkansas
* Southwest Arkansas 2

([Broadcastify][11])

#### Classification

`EMS → OFFICIAL PUBLIC RADIO`

🟢 **CONFIRMED**

This expands the radio portion of the registry beyond police.

---

### 18. Columbia County Fire

Broadcastify's official feed directory lists:

**Columbia County Rural Fire, Magnolia, Arkansas**

and identifies it as an official feed. ([Broadcastify][11])

#### Status

🟢 **CONFIRMED OFFICIAL FIRE FEED**

---

### 19. Arkansas State Police radio

The general Arkansas public-safety directory currently includes:

**Arkansas State Police Troop A Dispatch**

among the active public feeds. ([Broadcastify][10])

#### Important distinction

I found it as a **public scanner feed**, but the evidence retrieved in this pass does not establish that it is an **official agency-sponsored Broadcastify feed**.

Therefore:

**Public feed:** 🟢

**Official agency feed:** 🟡

I will not upgrade it without stronger evidence.

---

### 20. AWIN — Arkansas Wireless Information Network

North Little Rock's official feed explicitly identifies the underlying system as:

**AWIN — Arkansas Wireless Information Network**

([Broadcastify][12])

This is the statewide public-safety radio infrastructure behind many Arkansas law-enforcement/public-safety communications.

#### Classification

`STATE → PUBLIC SAFETY RADIO NETWORK`

🟢 **CONFIRMED**

#### Public raw AWIN Internet stream

🔴 **NOT FOUND**

#### Public third-party rebroadcasts

🟢 **CONFIRMED**

---

### 21. Arkansas ALPR — statewide public location data

Arkansas has a surprisingly large ALPR footprint.

Current community-derived OpenStreetMap data sources disagree significantly on the count:

| Dataset              |   Current documented Arkansas cameras |
| -------------------- | ------------------------------------: |
| FlockCamera.app      |                                   982 |
| FlockCameraLocations |                                   992 |
| Finding Flock        |                                 1,049 |
| FlockScanner         |                                 1,994 |
| Unsurveilled         | 999–1,021 depending county assignment |

([Flock Camera][13])

#### Why the discrepancy?

These are **community-derived OSM datasets**, not official state inventories.

Different projects:

* refresh at different times
* apply different filtering
* count different surveillance types
* interpret OSM records differently
* include/exclude unidentified devices differently

Therefore the correct statement is:

> **Arkansas has at least hundreds and probably well over 1,000 community-mapped ALPR locations, but there is no verified official statewide ALPR camera count from the sources examined.**

---

### 22. Arkansas ALPR — OpenStreetMap source

This is an actual reusable public data source.

The community datasets identify their source as:

**OpenStreetMap**

and make clear that camera coordinates are community mapped. ([Flock Camera Locations][14])

The underlying camera records can be represented using OSM surveillance tags.

#### Classification

`OPEN_DATA → OSM → SURVEILLANCE → ALPR`

🟢 **CONFIRMED**

#### License

**ODbL**

The datasets explicitly attribute the camera data to OpenStreetMap contributors. ([Flock Scanner][15])

---

### 23. Arkansas ALPR — Little Rock

Little Rock is one of the strongest Arkansas deployments.

Current community-derived data shows roughly:

**112–122 mapped ALPR cameras**, depending on dataset/date. ([Flock Camera][13])

One dataset records:

**Little Rock Police Department — 40 cameras**

as known operator-attributed cameras. ([Flock Camera][16])

#### Important

That **40 is not the total number of Little Rock cameras**.

It is the number for which the community dataset has identified the operator as LRPD.

#### Public LRPD plate-read API

🔴 **NOT FOUND**

#### Public LRPD camera inventory

🔴 **NOT CONFIRMED**

#### Community-mapped locations

🟢 **CONFIRMED**

---

### 24. Siloam Springs — ALPR + ordinary surveillance

This is one of the best examples of why we need separate camera classes.

The **official City of Siloam Springs** page states that its police department currently operates:

**4 Flock Safety cameras equipped with ALPR**

and additionally:

**5 Flock cameras in city parks that are live-streaming surveillance cameras but do not collect license-plate data.**

([Siloam Springs][17])

This is extremely valuable.

We have official confirmation of two distinct camera systems:

```text
SILOAM SPRINGS PD
├── 4 × ALPR
│   └── plate-reading
│
└── 5 × live surveillance
    └── video
    └── NOT ALPR
```

#### Public live stream URLs

🔴 **NOT FOUND**

#### Public ALPR reads

🔴 **NOT FOUND**

#### Official deployment information

🟢 **CONFIRMED**

---

### 25. Arkansas ALPR operators

The current community data identifies known operators including:

* Little Rock Police Department
* Jonesboro Police Department
* Rogers Police Department
* Trumann Police Department
* XNA
* Walmart
* Home Depot
* Lowe's

([Flock Camera][13])

Again, these are **documented operator-attribution records**, not an official statewide census.

---

### 26. Arkansas ALPR vendors

Current OSM-derived records identify equipment from:

* Flock Safety
* Avigilon
* Axis
* Genetec
* Axon
* Motorola Solutions
* Leonardo/ELSAG
* FLIR
* Neology
* Rekor
* LiveView Technologies

([Flock Camera][13])

#### Flock dominance

One current dataset attributes approximately **899 of 999 mapped Arkansas cameras to Flock Safety**, or about 90%. ([Unsurveilled][18])

That should be interpreted as:

`mapped cameras with vendor attribution`

—not an official Flock market-share figure.

---

### 27. Arkansas ALPR read data

This is the big negative finding.

I did **not** locate an Arkansas government API exposing live/historical:

```text
plate_number
timestamp
latitude
longitude
camera_id
vehicle attributes
```

from the state's ALPR infrastructure.

#### Status

🔴 **PUBLIC STATEWIDE ALPR READ FEED — NOT FOUND**

#### Public individual agency ALPR read feed

🔴 **NOT FOUND**

#### Public ALPR camera-location data

🟢 **CONFIRMED — OSM/community sources**

---

### 28. Arkansas ALPR law/data retention

Current Arkansas law regulates ALPR use and retention.

Current summaries of Arkansas Code §§ 12-12-1801 through 1808 state that government ALPR data retention is limited to **150 days**, while 2025 amendments added provisions for private landowners and businesses operating ALPR systems. ([Finding Flock][19])

This matters because it tells us that even if historical ALPR data is discovered through a public-records release, it may not represent indefinite historical coverage.

#### Classification

`LEGAL / GOVERNANCE`

Not a data feed.

---

### 29. Arkansas 911 / CAD

I searched for a statewide public Arkansas CAD/911 dataset/API.

#### Statewide public 911 call API

🔴 **NOT FOUND**

#### Statewide public CAD API

🔴 **NOT FOUND**

#### Public radio-derived incident information

🟢 **CONFIRMED through third-party sources**

But that should remain classified as:

`RADIO_REBROADCAST`

rather than:

`OFFICIAL_CAD`

---

### 30. Arkansas public safety data — important distinction

Arkansas gives us three different data layers:

```text
ARKANSAS PUBLIC SAFETY
│
├── AWIN
│   └── Radio network
│
├── Broadcastify
│   ├── official agency feeds
│   └── third-party scanner feeds
│
└── ALPR
    ├── government/agency deployments
    ├── OSM camera locations
    └── no public plate-read API found
```

Those must remain separate in the national catalog.

---

### Arkansas master source inventory

|  # | Source                        | Category            | Exact source                | Access                | Status                                 |
| -: | ----------------------------- | ------------------- | --------------------------- | --------------------- | -------------------------------------- |
|  1 | IDrive Arkansas               | State CCTV          | `idrivearkansas.com`        | Public                | 🟢                                     |
|  2 | ARDOT camera network          | CCTV                | ~440 cameras                | Public                | 🟢                                     |
|  3 | Traffic cameras               | CCTV                | IDrive                      | Public                | 🟢                                     |
|  4 | Work-zone cameras             | CCTV                | IDrive                      | Public                | 🟢                                     |
|  5 | Truck-parking camera category | CCTV                | IDrive                      | Public                | 🟡                                     |
|  6 | Camera HLS                    | Video               | Wowza/Akamai infrastructure | Source-dependent      | 🟡 current endpoint needs verification |
|  7 | Camera identifiers            | CCTV metadata       | IDrive                      | Public                | 🟢                                     |
|  8 | Traffic conditions            | Traffic             | IDrive                      | Public                | 🟢                                     |
|  9 | Highway closures              | Incident            | IDrive                      | Public                | 🟢                                     |
| 10 | Work zones                    | Work zones          | IDrive                      | Public                | 🟢                                     |
| 11 | ARDOT DMS                     | VMS                 | ITS                         | Public infrastructure | 🟢                                     |
| 12 | ARDOT HAR                     | Radio               | ITS                         | Public infrastructure | 🟢                                     |
| 13 | ARDOT LMR                     | Radio               | State VHF system            | Restricted            | 🟢 system                              |
| 14 | AWIN                          | Public safety radio | State network               | RF                    | 🟢                                     |
| 15 | Fort Smith PD                 | Radio               | Official Broadcastify       | Public                | 🟢                                     |
| 16 | North Little Rock PD          | Radio               | Feed 18094                  | Public                | 🟢                                     |
| 17 | Ouachita County Sheriff       | Radio               | Official Broadcastify       | Public                | 🟢                                     |
| 18 | Pafford EMS                   | EMS radio           | Official Broadcastify       | Public                | 🟢                                     |
| 19 | Columbia County Fire          | Fire radio          | Official Broadcastify       | Public                | 🟢                                     |
| 20 | Arkansas State Police         | Radio               | Broadcastify                | Public                | 🟡 official status not established     |
| 21 | Arkansas ALPR locations       | ALPR                | OpenStreetMap               | Public/ODbL           | 🟢                                     |
| 22 | Little Rock ALPR              | ALPR                | OSM-derived                 | Public                | 🟢                                     |
| 23 | Jonesboro ALPR                | ALPR                | OSM-derived                 | Public                | 🟢                                     |
| 24 | Rogers ALPR                   | ALPR                | OSM-derived                 | Public                | 🟢                                     |
| 25 | Siloam Springs ALPR           | ALPR                | Official city information   | Public info           | 🟢                                     |
| 26 | Siloam Springs live cameras   | CCTV                | Official city info          | Public info           | 🟢 existence                           |
| 27 | Arkansas statewide ALPR reads | ALPR                | —                           | —                     | 🔴                                     |
| 28 | Arkansas statewide CAD        | CAD                 | —                           | —                     | 🔴                                     |
| 29 | Arkansas statewide 911 calls  | 911                 | —                           | —                     | 🔴                                     |

---

### Highest-value Arkansas discoveries

#### 🥇 ARDOT — ~440 live cameras

This is the biggest source.

ARDOT explicitly states it operates **almost 440 PTZ cameras statewide** and delivers their live video through IDriveArkansas. ([Arkansas Department of Transportation][1])

#### 🥈 Official Arkansas police/EMS radio

Arkansas has an unusually good collection of **official agency-sponsored public radio feeds**, including:

* Fort Smith PD
* North Little Rock PD
* Ouachita County Sheriff
* Pafford EMS
* Columbia County Fire

([Broadcastify][11])

#### 🥉 AWIN

The Arkansas Wireless Information Network is the underlying statewide public-safety radio infrastructure. North Little Rock's official feed explicitly identifies its AWIN talkgroup. ([Broadcastify][12])

### 4. ALPR

Arkansas has a substantial ALPR footprint, but the **actual public data source we can reliably identify today is the location layer**, primarily through OpenStreetMap-derived datasets.

There is **no confirmed public Arkansas ALPR-read API** in this pass.

### 5. Siloam Springs

The official city page is especially useful because it explicitly distinguishes **4 ALPR cameras from 5 ordinary live-streaming Flock cameras**. ([Siloam Springs][17])

---

### Critical Arkansas finding

There is one thing I want carried forward into the master source database:

**ARDOT's camera system is public but not an unrestricted open-data source.**

Its published terms explicitly prohibit third-party applications from linking to or reusing its camera feeds and prohibit reverse engineering. ([IDrive Arkansas][8])

So the record should say:

> **Publicly accessible ≠ unrestricted public reuse.**

That distinction will matter enormously when we eventually determine which sources can actually be ingested into your project.

**Arkansas complete for this pass. Next: CALIFORNIA.**

[1]: https://ardot.gov/divisions/tsmo/its-operations/?utm_source=chatgpt.com "ITS Operations - Arkansas Department of Transportation"
[2]: https://ardot.gov/wp-content/uploads/ARHighwaysMagazine_2025-Issue-1_spreads.pdf?utm_source=chatgpt.com "2025 ISSUE 1"
[3]: https://ardot.gov/traveler-info/?utm_source=chatgpt.com "Traveler Info - Arkansas Department of Transportation"
[4]: https://github.com/cailinpitt/ClassicTraffic?utm_source=chatgpt.com "GitHub - cailinpitt/ClassicTraffic: Posts videos of state traffic cameras 🚗 · GitHub"
[5]: https://www.reddit.com/r/controllablewebcams/comments/lk59oa?utm_source=chatgpt.com "Help with State Hwy Cams"
[6]: https://media.ark.org/ardot/ATA_SMC_Website.pdf?utm_source=chatgpt.com "Microsoft PowerPoint - ATA_SMC_V11_NN"
[7]: https://site.idrivearkansas.com/index.php/policies/privacy?utm_source=chatgpt.com "Privacy | IDrive Arkansas"
[8]: https://site.idrivearkansas.com/index.php/policies/acceptable-use?utm_source=chatgpt.com "Acceptable Use | IDrive Arkansas"
[9]: https://status.broadcastify.com/listen/stid/5?utm_source=chatgpt.com "Arkansas Audio Feeds"
[10]: https://status.broadcastify.com/listen/stid/5/publicsafety?utm_source=chatgpt.com "Arkansas Audio Feeds"
[11]: https://status.broadcastify.com/listen/official/?utm_source=chatgpt.com "Official Feeds"
[12]: https://status.broadcastify.com/listen/feed/18094?utm_source=chatgpt.com "North Little Rock Police Dispatch 1"
[13]: https://flockcamera.app/locations/arkansas/?utm_source=chatgpt.com "Flock Cameras in Arkansas — 982 ALPR Locations Mapped"
[14]: https://flockcameralocations.com/locations/arkansas?utm_source=chatgpt.com "Flock Camera Locations in Arkansas — Live AR ALPR Map | Flock Camera Locations"
[15]: https://flockscanner.com/flock-camera-map/ar/?utm_source=chatgpt.com "Flock Camera Map: Arkansas · FlockScanner"
[16]: https://flockcamera.app/locations/arkansas/little-rock/?utm_source=chatgpt.com "Flock Cameras in Little Rock, AR — 112 ALPR Locations Mapped"
[17]: https://www.siloamsprings.gov/1739/FLOCK-Safety-Cameras?utm_source=chatgpt.com "FLOCK Safety Cameras | Siloam Springs, AR - Official Website"
[18]: https://unsurveilled.org/atlas/arkansas/?utm_source=chatgpt.com "Arkansas — known ALPR locations — Unsurveilled"
[19]: https://www.findingflock.com/cameras/arkansas?utm_source=chatgpt.com "1,049 Flock & ALPR Cameras in Arkansas · Finding Flock"
