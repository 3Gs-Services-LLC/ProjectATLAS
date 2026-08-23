# A.T.L.A.S.

## America Through Lenses And Surveillance

### Codename

**MAC EVIL — Massive American Camera Enumeration, Validation, Ingestion & Location Engine**

---

# 0. YOUR ROLE

You are Claude Code operating as the principal engineering organization responsible for transforming this specification into a production-grade system.

Act simultaneously as:

* Principal Architect
* Staff Backend Engineer
* Staff Data Engineer
* GIS Engineer
* Distributed Systems Engineer
* Security Engineer
* SRE
* API Engineer
* Database Engineer
* QA / Test Engineer
* Reliability Engineer
* Research Engineer
* Technical Writer
* DevOps / Deployment Engineer

You are not merely a code generator.

You are responsible for determining whether the proposed architecture is correct, verifying its assumptions, researching current external systems, implementing the system, testing it, identifying defects, correcting them, documenting the result, and demonstrating that the final repository actually satisfies the requirements.

Do not blindly implement this document.

Treat it as the **engineering mandate and product specification**.

Where this specification contains assumptions, verify them.

Where current authoritative evidence contradicts an assumption, identify the contradiction and make an evidence-based architectural decision.

Where requirements conflict, do not silently choose one.

Where a requirement is impossible, unsafe, legally uncertain, technically obsolete, or unnecessarily complex, explicitly identify the issue and propose a defensible alternative.

Never fabricate facts, APIs, endpoints, fields, credentials, camera records, test results, source coverage, licenses, or implementation status.

---

# 1. MISSION

Build **ATLAS**, a production-grade national camera-ingestion platform that aggregates publicly published camera data throughout the United States into one authoritative, searchable, normalized camera registry.

The conceptual product is similar to a nationwide 511 camera layer.

ATLAS is a **public-source aggregation and normalization system**.

It is not an Internet-wide camera discovery system.

The desired result is:

> Give ATLAS a legitimate public camera source and it can reliably turn that source into normalized national camera records while preserving provenance, source policy, attribution, reliability, identity, geography, and historical state.

---

# 2. ABSOLUTE SECURITY / LEGAL BOUNDARY

This is non-negotiable.

ATLAS may ingest only cameras and camera metadata intentionally exposed by an identifiable public source or authorized API/feed.

ATLAS MUST NOT:

* scan the public Internet for open camera ports;
* perform CIDR/network enumeration;
* perform IP-range scanning;
* perform RTSP enumeration;
* perform ONVIF enumeration;
* perform Shodan-style discovery;
* brute-force camera URLs;
* guess hostnames;
* guess credentials;
* bypass authentication;
* exploit cameras;
* access private cameras;
* circumvent paywalls;
* circumvent CAPTCHAs;
* circumvent access controls;
* circumvent rate limits;
* defeat technical protections;
* extract private API credentials;
* extract cookies;
* extract session identifiers;
* extract authentication tokens;
* transform a discovered private camera into an ATLAS source;
* fingerprint arbitrary Internet hosts to discover cameras.

ATLAS is an aggregation engine for **intentionally published public camera data**.

If a source requires an API key:

* the operator must supply the key through ATLAS credential configuration;
* ATLAS may use that credential only according to the source's authorized mechanism;
* ATLAS must never discover, extract, or bypass credentials.

Public accessibility does not automatically mean unrestricted redistribution.

---

# 3. CORE ENGINEERING PRINCIPLE

ATLAS strength must come from:

* comprehensive legitimate source aggregation;
* source research;
* source verification;
* heterogeneous adapters;
* normalization;
* provenance;
* evidence;
* geospatial indexing;
* identity resolution;
* reliability engineering;
* health monitoring;
* source lifecycle management;
* coverage analysis;
* continuous legitimate source discovery.

Not unauthorized probing.

---

# 4. ENGINEERING DOCTRINE

Use these principles throughout the entire project.

## 4.1 Truth over convenience

Never invent missing information.

Represent uncertainty explicitly.

Use:

* VERIFIED
* OBSERVED
* DOCUMENTED
* DERIVED
* INFERRED
* UNKNOWN
* CONFLICTING
* UNVERIFIED

Do not silently convert UNKNOWN into a value.

---

## 4.2 Evidence over assumption

Every important externally-derived claim should have evidence.

Examples:

* source exists;
* source publishes camera data;
* source authorizes access;
* field exists;
* endpoint exists;
* camera count;
* coordinate;
* representation;
* license;
* attribution;
* redistribution permission;
* source relationship;
* API behavior.

---

## 4.3 Preserve raw truth

Never destroy source information during normalization.

Store:

```text
canonical fields
+
source-specific fields
+
raw source record
+
provenance
+
evidence
```

---

## 4.4 Stale-but-known-good beats destructive corruption

If a new source response is broken, retain previously valid information.

Do not replace valid data with nulls simply because a parser received incomplete data.

---

## 4.5 Reversible operations

Important data mutations must be explainable and reversible where practical.

Especially:

* merges;
* splits;
* retirements;
* source changes;
* policy changes;
* operator overrides.

---

## 4.6 Build incrementally

Do not attempt to construct the entire national system in one uncontrolled pass.

Every major implementation stage should leave the repository:

* buildable;
* testable;
* understandable;
* recoverable.

---

# 5. CLAUDE CODE EXECUTION PROTOCOL

Before implementation, perform a complete repository audit.

If the repository already exists:

1. Inspect the entire repository.
2. Inspect all existing `CLAUDE.md` files.
3. Inspect project configuration.
4. Inspect package/dependency manifests.
5. Inspect build system.
6. Inspect tests.
7. Inspect existing source integrations.
8. Inspect existing camera models.
9. Inspect existing database schema.
10. Inspect deployment configuration.
11. Inspect Git state.
12. Identify currently working functionality.
13. Identify broken functionality.
14. Identify technical debt.
15. Identify reusable components.
16. Identify architectural contradictions.
17. Identify assumptions that require external verification.

Do not destroy working functionality merely to replace it with a theoretically cleaner architecture.

Preserve useful existing work unless there is a demonstrated reason to replace it.

---

# 6. PHASED EXECUTION

Use the following lifecycle.

```text
PHASE 0
Repository + Requirements Audit

PHASE 1
Research + External Verification

PHASE 2
Architecture + ADRs

PHASE 3
Implementation Plan

PHASE 4
Foundation + Database

PHASE 5
Source Registry + Policy + Evidence

PHASE 6
Adapter SDK + Generic Adapters

PHASE 7
Real Source Integration

PHASE 8
Normalization + Geography

PHASE 9
Identity Resolution

PHASE 10
Health + Observations

PHASE 11
API + Search

PHASE 12
Map + Administrative Interface

PHASE 13
Security + Chaos Testing

PHASE 14
Deployment + Operations

PHASE 15
Final Acceptance Audit
```

Do not declare completion because the code compiles.

---

# 7. PHASE 0 — REPOSITORY AUDIT

Produce:

```text
docs/ATLAS-ASSESSMENT.md
```

Document:

* actual repository architecture;
* languages;
* frameworks;
* databases;
* queues;
* frontend;
* backend;
* existing ingestion;
* existing source adapters;
* existing camera data;
* existing APIs;
* existing tests;
* existing deployment;
* existing security controls;
* current strengths;
* current weaknesses;
* migration requirements;
* proposed changes.

Classify existing components:

```text
KEEP
CHANGE
REFACTOR
REMOVE
ADD
UNKNOWN
```

Do not make material architectural changes before this assessment.

---

# 8. PHASE 1 — RESEARCH AND VERIFICATION

Use authoritative current sources whenever source-specific behavior matters.

Prioritize:

1. official agency documentation;
2. official developer documentation;
3. official GIS/open-data catalogs;
4. official API specifications;
5. official terms/licenses;
6. official source responses;
7. authoritative transportation standards;
8. secondary sources only when necessary.

Do not treat search results as proof of an API.

Do not invent an endpoint because another system uses a similar URL.

Before implementing a source-specific adapter, establish:

* source URL;
* official documentation;
* actual endpoint/feed;
* current response format;
* authentication;
* pagination;
* rate limits;
* camera fields;
* view structure;
* representation structure;
* status semantics;
* terms;
* license;
* attribution;
* redistribution policy;
* update frequency.

---

# 9. SOURCE VERIFICATION PIPELINE

Every candidate source progresses through:

```text
UNRESEARCHED
↓
CANDIDATE
↓
DOCUMENTED
↓
TECHNICALLY_VERIFIED
↓
POLICY_VERIFIED
↓
ADAPTER_IMPLEMENTED
↓
FIXTURE_CAPTURED
↓
INTEGRATION_TESTED
↓
PRODUCTION_VERIFIED
↓
ACTIVE
```

Possible terminal states:

```text
REJECTED
DEFERRED
REQUIRES_CREDENTIALS
POLICY_UNCLEAR
REPLACED
RETIRED
```

Never treat "endpoint found" as "source verified."

---

# 10. SOURCE VERIFICATION REPORT

Create a machine-readable and human-readable verification record.

Include:

```text
source
provider
jurisdiction
official_url
documentation_url
terms_url
license
verification_date
verification_method
access_method
authentication
rate_limit
observed_format

records_discovered
records_valid
records_invalid
source_id_uniqueness

coordinate_validity
coordinate_system
coverage

still_available
video_available
stream_types

metadata_storage_policy
image_access_policy
image_redistribution_policy
video_access_policy
video_redistribution_policy

result
```

Result:

```text
VERIFIED
PARTIALLY_VERIFIED
FAILED_VALIDATION
```

---

# 11. SOURCE REGISTRY

Create a first-class source registry.

Required fields:

```text
source_id
provider_id
jurisdiction
name
description
source_type
base_url
documentation_url
terms_url
license
attribution
authentication_type
credential_reference
rate_limit
update_frequency
coverage_geometry
adapter_type
adapter_version
enabled
last_success
last_failure
last_checked
failure_count
health_status
discovered_at
verified_at
verification_method
operator_notes
```

Source types include:

```text
GOVERNMENT_OPEN
GOVERNMENT_API
GOVERNMENT_WEB
REGIONAL_511
MUNICIPAL_OPEN
COUNTY_OPEN
TOLL_AUTHORITY
PUBLIC_INSTITUTION
AUTHORIZED_PRIVATE
OTHER_PUBLIC
```

Access types:

```text
OPEN
API_KEY
ACCOUNT_REQUIRED
LICENSE_REQUIRED
PARTNER_ONLY
UNKNOWN
```

---

# 12. SOURCE POLICY MODEL

Public access is not equivalent to redistribution permission.

Create a machine-readable policy model:

```json
{
  "access_allowed": true,
  "metadata_storage_allowed": true,
  "metadata_redistribution_allowed": false,
  "image_access_allowed": true,
  "image_proxy_allowed": false,
  "image_redistribution_allowed": false,
  "video_access_allowed": true,
  "video_proxy_allowed": false,
  "video_redistribution_allowed": false,
  "attribution_required": true,
  "retention_limit": null,
  "terms_url": "",
  "notes": ""
}
```

Unknown policy values must default conservatively.

Never interpret UNKNOWN as unrestricted.

---

# 13. POLICY VERSIONING

Create:

```text
source_policies
source_policy_versions
```

Record:

* source;
* policy;
* effective date;
* expiration;
* terms;
* license;
* attribution;
* evidence;
* reviewer;
* review date;
* confidence.

Historical policy versions must be preserved.

---

# 14. EVIDENCE SYSTEM

Create a first-class evidence system.

Concept:

```text
FACT
↓
CLAIM
↓
EVIDENCE
```

Evidence may include:

* official documentation;
* source response;
* GIS record;
* terms document;
* license document;
* source webpage;
* operator verification;
* automated validation;
* captured schema;
* response hash.

Record:

```text
evidence_id
source_id
retrieved_at
evidence_type
location
content_hash
description
verification_status
```

Important canonical fields should be able to reference their provenance/evidence.

---

# 15. SOURCE LINEAGE

Every canonical camera must be traceable to its source records.

Example:

```text
canonical_camera
├── source_link
│   ├── source_record
│   ├── provenance
│   └── evidence
├── source_link
│   ├── source_record
│   ├── provenance
│   └── evidence
└── source_link
    ├── source_record
    ├── provenance
    └── evidence
```

An operator must be able to answer:

> Where did this camera come from?

and:

> Why does ATLAS believe these records represent the same camera?

---

# 16. SOURCE DISCOVERY

Build a legitimate source-discovery subsystem.

Research:

1. State DOT websites.
2. State 511 systems.
3. Metropolitan/regional 511 systems.
4. County transportation agencies.
5. Municipal transportation departments.
6. Toll authorities.
7. Port authorities.
8. Airports where cameras are explicitly public.
9. Public universities where cameras are explicitly public.
10. Public transit agencies where cameras are explicitly public.
11. Public ArcGIS/Open Data portals.
12. Government GIS catalogs.
13. CKAN/open-data portals.
14. Official API documentation.
15. Official XML/JSON/GeoJSON feeds.
16. Official RSS/XML feeds.
17. Public HLS/DASH/MJPEG/JPEG representations explicitly published or linked by authorized sources.
18. Other legitimate public datasets.

Do not assume one source per state.

---

# 17. NATIONAL COVERAGE MATRIX

Track all:

* 50 states;
* DC;
* territories where applicable.

For each jurisdiction:

```text
primary_511
secondary_511
DOT_GIS
municipal_sources
regional_sources
source_count
camera_count
last_ingestion
health
coverage_confidence
```

Do not call a jurisdiction "covered" merely because a 511 website exists.

Coverage means evidence-backed source ingestion.

---

# 18. RESEARCH QUEUE

Coverage gaps are research opportunities, not scanning permission.

Create:

```text
research_queue
research_attempts
research_evidence
research_decisions
```

A research item may contain:

```text
jurisdiction
agency
suspected_source
reason
discovery_url
status
evidence
notes
```

Statuses:

```text
UNRESEARCHED
RESEARCHING
CANDIDATE
VERIFIED
REJECTED
DUPLICATE
REQUIRES_CREDENTIALS
POLICY_UNCLEAR
DEFERRED
```

---

# 19. SOURCE ADAPTER ARCHITECTURE

Never place source-specific parsing logic in the core ingestion engine.

Implement:

```text
SourceAdapter
```

with:

```text
discover()
validate()
fetch_metadata()
normalize()
enumerate_cameras()
enumerate_views()
fetch_representation()
health_check()
get_terms()
get_attribution()
get_rate_limit()
get_update_frequency()
```

Generic adapters:

* REST JSON;
* REST XML;
* GeoJSON;
* ArcGIS FeatureServer;
* ArcGIS MapServer;
* ArcGIS REST query;
* CKAN;
* static JSON;
* static XML;
* CSV;
* RSS/XML;
* officially published HTML;
* HLS;
* DASH;
* MJPEG;
* JPEG/PNG snapshot.

Vendor-specific adapters must use a plugin architecture.

---

# 20. ADAPTER SDK

A new source must be addable without modifying core ingestion logic.

Adapter configuration must be able to declare:

* metadata schema;
* field mappings;
* authentication;
* pagination;
* rate limits;
* camera identity;
* view extraction;
* representation extraction;
* status extraction;
* geospatial extraction;
* terms;
* attribution.

---

# 21. ADAPTER CONTRACT TESTING

Every adapter must satisfy a common contract.

Tests must cover:

```text
discover
validate
fetch_metadata
parse
normalize
camera enumeration
view enumeration
representation enumeration
pagination
empty response
malformed response
HTTP failure
authentication failure
rate limiting
terms
attribution
```

An adapter is not production-ready merely because one example response parses.

---

# 22. RAW SOURCE DATA

Where policy permits, preserve raw source records.

Store:

```text
source_records
```

with:

```text
source_id
retrieved_at
original_record_hash
original_record
source_record_url
source_record_identifier
schema_fingerprint
adapter_version
```

Do not destroy source-specific fields.

---

# 23. SOURCE SCHEMA FINGERPRINTING

For each source run, calculate a structural schema fingerprint.

Distinguish:

```text
NO_CHANGE
NON_BREAKING_SCHEMA_CHANGE
BREAKING_SCHEMA_CHANGE
UNKNOWN
```

A field reordering should not be considered schema drift.

Required-field disappearance should.

---

# 24. SCHEMA DRIFT

If required fields disappear:

* fail safely;
* preserve previous valid data;
* create schema-drift event;
* alert;
* do not overwrite good data with nulls.

If optional fields appear:

* preserve them in source extensions;
* evaluate adapter changes;
* do not unnecessarily break ingestion.

---

# 25. SOURCE RUN ATOMICITY

A source run must progress through:

```text
FETCH
↓
VALIDATE
↓
RECONCILE
↓
COMMIT
```

Do not partially commit a source run that appears catastrophically incomplete.

Example:

```text
10,000 previous records
217 current records
```

must not automatically retire 9,783 cameras.

---

# 26. SOURCE COMPLETENESS

Every source run should classify completeness:

```text
COMPLETE
PARTIAL
UNKNOWN
INVALID
```

Use:

* previous record count;
* current record count;
* pagination success;
* schema health;
* source response completeness;
* configured thresholds.

---

# 27. SOURCE RUN MODEL

Create:

```text
source_runs
```

Fields:

```text
run_id
source_id
started_at
finished_at
status
records_seen
records_created
records_updated
records_removed
records_invalid
records_unchanged
schema_version
adapter_version
error_count
warning_count
duration_ms
completeness
schema_fingerprint
commit_decision
```

---

# 28. CANONICAL CAMERA MODEL

At minimum:

```text
atlas_camera_id
source_id
provider_id
source_camera_id
source_camera_name
canonical_name
description
roadway
route_number
route_name
direction
location_description
latitude
longitude
elevation
state
county
city
postal_code
milepost
nearest_intersection
nearest_exit
agency
owner
operator
jurisdiction
camera_type
camera_status
operational_status
publication_status
first_seen_at
last_seen_at
last_metadata_update_at
last_successful_observation_at
last_failed_at
consecutive_failures
confidence_score
source_confidence
geographic_confidence
identity_confidence
freshness_score
accessibility_class
legal_access_class
attribution
license
terms_url
source_url
map_url
documentation_url
source_extensions
schema_version
```

---

# 29. CAMERA / VIEW / REPRESENTATION

Never confuse cameras with views.

Canonical hierarchy:

```text
CAMERA
  ↓
VIEW
  ↓
REPRESENTATION
```

One physical camera may have multiple views.

One view may have multiple representations.

Do not create four cameras simply because four URLs exist.

Do not collapse distinct physical cameras simply because they share an intersection.

---

# 30. VIEW MODEL

Required:

```text
atlas_view_id
camera_id
source_view_id
name
description
direction
orientation_degrees
field_of_view_degrees
image_url
video_url
stream_type
transport
codec
container
resolution
frame_rate
bitrate
audio_present
snapshot_available
video_available
stream_status
last_successful_fetch
last_failure
failure_reason
content_type
etag
last_modified
cache_control
expiration
source_sort_order
```

---

# 31. REPRESENTATION TYPES

Normalize:

```text
STILL_IMAGE
MJPEG
HLS
DASH
WEBRTC
MP4_CLIP
JPEG_SEQUENCE
PNG_SEQUENCE
HTML_EMBED
UNKNOWN
```

Determine representation from:

* declared source metadata;
* Content-Type;
* documented URL;
* manifest inspection;
* safe file-signature inspection.

Never infer protocol from arbitrary open ports.

---

# 32. DIRECTION MODEL

Normalize:

```text
UNKNOWN
NORTHBOUND
NORTHEASTBOUND
EASTBOUND
SOUTHEASTBOUND
SOUTHBOUND
SOUTHWESTBOUND
WESTBOUND
NORTHWESTBOUND
BOTH_DIRECTIONS
ALL_DIRECTIONS
INBOUND
OUTBOUND
NONE
```

Always preserve the original source direction.

---

# 33. LOCATION NORMALIZATION

Store WGS84 decimal degrees.

Preserve:

* original coordinate;
* original CRS;
* transformed coordinate;
* transformation method.

Validate:

```text
latitude [-90,+90]
longitude [-180,+180]
```

Detect:

* swapped coordinates;
* Web Mercator mistakenly represented as lat/lon;
* null island;
* duplicate coordinates;
* suspicious rounding;
* statewide defaults;
* coordinates outside source jurisdiction.

If recoverable from an authoritative source, repair while preserving provenance.

Never silently modify coordinates.

---

# 34. GEOSPATIAL ENRICHMENT

Use authoritative geographic datasets where appropriate.

Possible enrichment:

* state;
* county;
* municipality;
* ZIP/ZCTA;
* roadway;
* route;
* interstate;
* milepost;
* nearest intersection;
* nearest exit;
* urban area;
* MSA;
* road functional class;
* OpenStreetMap references where licensing permits;
* agency jurisdiction.

Never overwrite source facts with derived facts.

Store:

```text
source_value
derived_value
confidence
method
timestamp
```

---

# 35. IDENTITY RESOLUTION

This is a core subsystem.

The same physical camera may appear in:

* state 511;
* regional 511;
* ArcGIS;
* agency website;
* legacy feed;
* vendor API;
* image endpoint;
* video endpoint.

Never deduplicate solely by name.

Identity signals:

1. source camera ID;
2. source view ID;
3. exact/near coordinates;
4. roadway;
5. direction;
6. normalized location;
7. milepost;
8. intersection;
9. image similarity where policy permits;
10. stream URL similarity;
11. image URL similarity;
12. provider;
13. agency;
14. description;
15. temporal consistency.

Use geospatial candidate generation followed by weighted matching.

---

# 36. IDENTITY STATES

Use:

```text
MATCHED
PROBABLE_MATCH
POSSIBLE_MATCH
DISTINCT
NEEDS_REVIEW
```

Never automatically merge uncertain records.

Every merge must be explainable.

---

# 37. IDENTITY GRAPH

Create an identity graph retaining source identities.

Example:

```text
canonical_camera
├── source_camera_A
├── source_camera_B
└── source_camera_C
```

Store why each relationship exists.

---

# 38. IDENTITY MERGE / SPLIT

Operators must be able to:

```text
MERGE
KEEP_SEPARATE
IGNORE
DEFER
SPLIT
```

All operations are audited.

Underlying source relationships must remain recoverable.

---

# 39. TEMPORAL IDENTITY

A camera may move.

Track:

* source ID;
* location history;
* name history;
* representation history;
* observations.

Distinguish:

```text
same camera moved
```

from:

```text
new physical camera replacing old camera
```

Do not decide solely from current coordinates.

---

# 40. PROVENANCE

Every normalized record must carry:

```text
schema_version
adapter_version
observed_at
normalized_at
source_id
provider_id
source_record_identifier
source_record_url
original_record_hash
```

Preserve source-specific extensions.

---

# 41. SOURCE LINEAGE AND FACT CONFLICTS

If two sources disagree:

```text
Source A: EASTBOUND
Source B: WESTBOUND
```

do not silently pick one.

Record:

```text
CONFLICT
```

with each source's claim.

Resolve only through evidence.

---

# 42. SOURCE LIFECYCLE

Sources:

```text
DISCOVERED
ACTIVE
DEGRADED
DISABLED
RETIRED
REPLACED
```

Cameras:

```text
DISCOVERED
ACTIVE
STALE
MISSING
RETIRED
REMOVED
```

Do not immediately delete disappeared cameras.

---

# 43. DISAPPEARANCE POLICY

A camera disappearing from one ingestion must not automatically be deleted.

Example:

```text
1 failed run → no change

2 successful complete runs missing → stale

N consecutive verified misses → retired candidate

operator/source confirmation → retired
```

Make thresholds configurable.

---

# 44. SOURCE REMOVAL SAFETY

A missing record is meaningful only if the source run itself was healthy and sufficiently complete.

A broken source must never cause mass deletion.

---

# 45. INGESTION PIPELINE

Durable pipeline:

```text
DISCOVER
→ REGISTER SOURCE
→ FETCH SOURCE METADATA
→ PARSE
→ VALIDATE
→ NORMALIZE
→ GEOCODE / ENRICH
→ IDENTITY MATCH
→ UPSERT
→ SCHEDULE OBSERVATION
→ HEALTH CHECK
→ RECORD STATUS
→ INDEX
→ API
```

Use queues.

One broken source must never block the system.

---

# 46. LOGICAL SERVICES

Use logical components:

1. source-registry
2. discovery-worker
3. source-fetcher
4. parser-worker
5. normalization-worker
6. geospatial-worker
7. identity-worker
8. observation-worker
9. health-worker
10. indexer
11. API
12. administrative dashboard
13. metrics/telemetry
14. audit system

Choose concrete technologies based on repository reality and evidence.

Prefer mature, boring technology.

Do not introduce distributed complexity merely because it looks impressive.

---

# 47. SOURCE SCHEDULING

Metadata schedules may be:

* high-frequency;
* daily;
* weekly;
* monthly.

Still images:

* on-demand;
* scheduled health samples;
* configurable.

Video:

**Do not continuously record by default.**

ATLAS must not become a nationwide surveillance archive by default.

---

# 48. MEDIA RETENTION

Metadata and health observations are the default.

Image/video retention requires explicit configuration and must be:

* policy-aware;
* license-aware;
* source-aware;
* storage-bounded;
* retention-controlled;
* auditable.

Indefinite recording is prohibited by default.

---

# 49. HEALTH MODEL

Every camera/view needs independent health status.

Check:

* metadata;
* image;
* stream;
* HTTP status;
* DNS;
* TLS;
* latency;
* content type;
* content size;
* freshness;
* image decodability;
* manifest validity;
* stream startup;
* source-reported disabled/blocked state.

Health states:

```text
ONLINE
ONLINE_STALE
DEGRADED
OFFLINE
DISABLED
BLOCKED
UNKNOWN
```

---

# 50. FAILURE CODES

Distinguish:

```text
SOURCE_DOWN
CAMERA_DISABLED
CAMERA_BLOCKED
AUTH_REQUIRED
RATE_LIMITED
NOT_FOUND
GONE
TLS_ERROR
DNS_ERROR
TIMEOUT
INVALID_CONTENT
STALE_CONTENT
EMPTY_CONTENT
PARSER_ERROR
STREAM_ERROR
TEMPORARY_FAILURE
UNKNOWN_FAILURE
```

One failure does not make a camera dead.

Use:

* retries;
* exponential backoff;
* hysteresis;
* circuit breakers.

Record recovery events.

---

# 51. FRESHNESS

Calculate separately:

```text
metadata_freshness
image_freshness
stream_freshness
source_freshness
```

Do not treat HTTP 200 as proof of camera health.

For images use:

* ETag;
* Last-Modified;
* content hash.

Do not falsely mark legitimate unchanged images as broken.

---

# 52. STREAM TESTING

## HLS

* fetch manifest;
* validate playlist;
* verify segment accessibility;
* verify media sequence progression where appropriate;
* use bounded tests.

## DASH

* validate MPD;
* verify playable representation.

## MJPEG

* verify multipart response;
* verify boundaries;
* decode sample frames.

Do not continuously consume streams just to determine health.

---

# 53. RATE LIMITING

Each source has an independent rate policy.

Honor:

* documented limits;
* Retry-After;
* source terms;
* API quotas;
* authentication requirements.

Implement:

* token buckets;
* adaptive throttling;
* exponential backoff.

Never hammer failing sources.

Use:

```text
global budget
provider budget
source budget
host budget
representation budget
```

---

# 54. CACHING

Use:

* conditional GET;
* ETag;
* If-Modified-Since;
* Cache-Control;
* source-defined TTL.

Do not repeatedly download unchanged metadata.

---

# 55. FAILURE ISOLATION

Every adapter runs in a bounded worker context.

Enforce:

* request timeout;
* memory limit;
* response-size limit;
* decompression limit;
* parser timeout;
* retry limit;
* circuit breaker.

Remote data is untrusted input.

---

# 56. SAFE NETWORK FETCHER

Create a centralized safe fetch layer.

Adapters must not independently implement insecure HTTP fetching.

Before fetching representation URLs:

* validate declared source relationship;
* validate allowed hosts;
* validate protocols;
* validate ports;
* restrict redirects;
* resolve DNS safely;
* prevent DNS rebinding;
* block private destinations;
* block loopback;
* block link-local;
* block metadata-service addresses;
* revalidate redirected destinations;
* enforce response limits.

Support IPv4 and IPv6 protections.

---

# 57. SSRF PROTECTION

Explicitly block:

* localhost;
* loopback;
* RFC1918;
* link-local;
* IPv6 loopback;
* IPv6 link-local;
* IPv6 unique-local;
* IPv4-mapped IPv6;
* cloud metadata addresses;
* private DNS resolution;
* rebinding attacks.

Test these.

A source-controlled URL must never be able to make ATLAS access arbitrary internal infrastructure.

---

# 58. DOMAIN AUTHORIZATION

Store:

```text
declared_domains
declared_hosts
declared_redirect_hosts
declared_media_hosts
```

A vendor CDN referenced by an authorized source may be explicitly permitted.

A random third-party domain must not become trusted merely because it appeared in one response.

---

# 59. REDIRECT SECURITY

Every redirect must be evaluated again.

Do not trust redirects simply because the original URL was trusted.

---

# 60. RESPONSE SECURITY

Enforce:

* maximum response size;
* maximum decompressed size;
* compression ratio guard;
* timeout;
* nesting limits;
* parser limits.

Protect against:

* zip bombs;
* decompression bombs;
* JSON bombs;
* malformed GIS;
* malicious media.

---

# 61. XML SECURITY

XML adapters must protect against:

* XXE;
* external entities;
* external DTDs;
* entity expansion;
* excessive nesting;
* parser bombs.

Use safe parsers.

---

# 62. HTML SECURITY

Official HTML sources may be supported when they intentionally publish camera information.

Static extraction is preferred.

Do not execute arbitrary JavaScript merely to discover camera endpoints.

Controlled browser automation may be used only when:

* the source is legitimately public/authorized;
* static retrieval is insufficient;
* the browser is isolated;
* credentials are not extracted;
* cookies/session tokens are not harvested;
* anti-bot protections are not bypassed;
* private APIs are not discovered;
* unrelated network resources are not probed.

An observed network URL is not automatically an authorized ATLAS representation.

The adapter must establish the legitimate source relationship.

---

# 63. MEDIA SECURITY

Never execute media content.

Use safe media libraries with:

* process isolation;
* resource limits;
* time limits;
* memory limits.

No shell execution based on source-controlled URLs.

---

# 64. DATABASE

Prefer:

**PostgreSQL + PostGIS**

unless repository evidence establishes a compelling alternative.

Recommended tables:

```text
providers
sources
source_runs
source_records
cameras
camera_views
representations
camera_source_links
identity_candidates
identity_merges
camera_observations
health_events
geographic_enrichment
attributions
licenses
rate_limit_policies
adapter_versions
ingestion_jobs
dead_letter_jobs
audit_events
source_policies
source_policy_versions
evidence_records
research_queue
research_attempts
```

---

# 65. INDEXING

At minimum:

* GiST geography/geometry;
* state;
* county;
* route;
* roadway;
* status;
* provider;
* source;
* camera type;
* direction;
* last successful observation;
* last metadata update;
* canonical camera ID;
* source camera ID.

Consider trigram/full-text search.

---

# 66. HIGH-VOLUME OBSERVATIONS

Design for:

* 10,000,000+ camera/view records;
* 100,000+ sources/source records;
* millions of health observations.

Partition high-volume time-series observations where appropriate.

Scale horizontally where justified.

---

# 67. API

Build versioned REST API.

Examples:

```text
GET /api/v1/cameras
GET /api/v1/cameras/{id}
GET /api/v1/cameras/{id}/views
GET /api/v1/cameras/{id}/observations
GET /api/v1/cameras/{id}/health
GET /api/v1/cameras/near
GET /api/v1/cameras/bbox
GET /api/v1/cameras/search
GET /api/v1/sources
GET /api/v1/providers
GET /api/v1/jurisdictions
GET /api/v1/stats
```

Support:

* JSON;
* GeoJSON;
* cursor pagination;
* field selection;
* filtering;
* sorting;
* bounding boxes;
* radius;
* geospatial queries.

---

# 68. FILTERING

Support:

* state;
* county;
* city;
* ZIP;
* roadway;
* route;
* direction;
* agency;
* provider;
* source;
* camera type;
* operational status;
* video availability;
* still availability;
* stream type;
* jurisdiction;
* bounding box;
* radius;
* nearest camera;
* text;
* source health;
* freshness;
* confidence.

---

# 69. SEARCH NORMALIZATION

Understand:

```text
I-94
I 94
Interstate 94
Interstate-94
```

and similar forms.

Preserve original source strings.

Support searches such as:

```text
I-94
US 20
Michigan City
Chicago
Kennedy
mile 34
northbound
Indiana DOT
```

---

# 70. MAP

The national map must never load millions of cameras into the browser.

Use:

* viewport queries;
* server-side filtering;
* clustering;
* zoom-aware aggregation.

At low zoom:

```text
clusters / counts
```

At high zoom:

```text
individual cameras
```

Use canonical camera identity before clustering.

Do not cluster known-distinct physical cameras into one identity.

---

# 71. CAMERA DETAIL

Return:

* canonical identity;
* name;
* location;
* roadway;
* direction;
* agency;
* provider;
* source;
* status;
* freshness;
* confidence;
* views;
* permitted still URL;
* permitted video URL;
* stream type;
* last successful observation;
* terms;
* license;
* attribution;
* useful source-specific metadata.

Never expose credentials.

Never leak signed URLs containing secrets.

---

# 72. ADMINISTRATIVE API

Examples:

```text
POST /admin/v1/sources
PATCH /admin/v1/sources/{id}
POST /admin/v1/sources/{id}/validate
POST /admin/v1/sources/{id}/run
GET /admin/v1/sources/{id}/health
GET /admin/v1/sources/{id}/runs
```

Protect all administrative operations.

---

# 73. ADMIN DASHBOARD

Show:

## Sources

* healthy;
* degraded;
* failing;
* never tested;
* disabled;
* retired.

## Cameras

* total;
* active;
* stale;
* offline;
* disabled;
* blocked;
* duplicate candidates;
* unresolved identity candidates.

## Ingestion

* jobs/sec;
* failures;
* retries;
* queue depth;
* latency;
* parser failures.

## Map

* cameras;
* source overlays;
* duplicate candidates;
* unhealthy cameras;
* coverage gaps.

---

# 74. IDENTITY REVIEW UI

Display:

* source A;
* source B;
* coordinates;
* distance;
* names;
* roadways;
* directions;
* images where legitimately accessible;
* stream metadata;
* matching score;
* matching reasons.

Actions:

```text
MERGE
KEEP_SEPARATE
IGNORE
DEFER
SPLIT
```

All actions audited.

---

# 75. SOURCE CHANGE DETECTION

Detect:

* new cameras;
* removed cameras;
* renamed cameras;
* moved cameras;
* changed URLs;
* changed views;
* changed direction;
* changed status;
* changed provider;
* changed schema.

Do not immediately delete disappeared cameras.

---

# 76. URL CHANGE RECOVERY

If source ID remains stable and URL changes:

Update representation.

Do not create a new camera.

If source ID changes:

Run identity resolution.

Never merge solely from URL similarity.

---

# 77. SOURCE RECONCILIATION

Every successful complete source run compares:

```text
source records
vs
ATLAS source links
```

Detect:

```text
new
changed
missing
duplicate
invalid
```

Never confuse temporary source failure with mass removal.

---

# 78. OBSERVATION MODEL

Create:

```text
observation_id
camera_id
view_id
observed_at
result
http_status
latency_ms
content_type
content_length
etag
last_modified
content_hash
image_decodable
manifest_valid
stream_progressing
error_code
error_detail
worker_version
```

Do not store full media unless explicitly authorized.

---

# 79. SOURCE RUN MODEL

Duplicate of §27 — same title, same content. Consolidated there on 2026-08-23 to stop the two copies drifting apart; see §27 for the actual field list. This section intentionally left as a pointer rather than renumbering the rest of the document.

---

# 80. IDEMPOTENCY

Running the same source repeatedly must not create duplicates.

Same source record + same source state should produce an idempotent operation.

Apply this to:

* cameras;
* views;
* representations;
* source links;
* observations;
* source runs.

---

# 81. DISTRIBUTED JOB SAFETY

Prevent duplicate concurrent processing through:

* job IDs;
* leases;
* locks where justified;
* optimistic concurrency;
* idempotent writes;
* uniqueness constraints.

---

# 82. BACKPRESSURE

Do not allow unlimited concurrent source traffic.

Use bounded queues and workers.

The system must degrade gracefully rather than collapse.

---

# 83. CIRCUIT BREAKERS

Per-source circuit breaker:

```text
CLOSED
↓
OPEN
↓
HALF_OPEN
↓
CLOSED
```

Do not repeatedly hammer unavailable sources.

---

# 84. QUALITY MODEL

Do not reduce quality internally to one opaque score.

Track independently:

```text
completeness
accuracy
freshness
availability
consistency
reliability
geographic_precision
identity_confidence
representation_confidence
policy_confidence
```

Optional overall score may be derived later.

---

# 85. CONFIDENCE

Every camera may have:

```text
identity_confidence
location_confidence
availability_confidence
stream_confidence
overall_confidence
```

Store the reasons contributing to scores.

---

# 86. SOURCE QUALITY

Track:

```text
coverage_score
freshness_score
reliability_score
metadata_quality_score
geographic_quality_score
stream_quality_score
legal_access_score
```

Do not hide these dimensions behind one score.

---

# 87. COVERAGE CONFIDENCE

Never state that a state is completely covered unless evidence supports that conclusion.

Use:

```text
SOURCE_EXISTS
SOURCE_VERIFIED
SOURCE_INGESTING
CAMERAS_OBSERVED
GEOGRAPHIC_COVERAGE_KNOWN
COVERAGE_COMPLETENESS_UNKNOWN
```

It is acceptable for coverage completeness to remain UNKNOWN.

---

# 88. SOURCE RETIREMENT

If a source disappears:

Do not immediately delete historical source records.

Track:

```text
ACTIVE
DEGRADED
DISABLED
RETIRED
REPLACED
```

Preserve historical lineage.

---

# 89. DATA VERSIONING

Every normalized record carries:

```text
schema_version
adapter_version
observed_at
normalized_at
```

Database migrations should be reversible where practical.

API versions must remain stable.

---

# 90. LEGAL / POLICY LAYER

Every source must retain:

* license;
* terms URL;
* attribution;
* redistribution status;
* access method;
* operator notes.

Support policies such as:

```text
metadata-only
external-link-only
proxy-disabled
image-disabled
video-disabled
```

Never assume public accessibility means unrestricted redistribution.

---

# 91. SOURCE PROXYING

Do not automatically proxy all streams.

Prefer returning an authorized source URL.

If proxying is explicitly permitted:

* enforce policy;
* enforce bandwidth limits;
* prevent SSRF;
* cache appropriately;
* apply attribution;
* honor retention.

---

# 92. PRIVACY

ATLAS is a camera-data aggregation platform.

Do not implement:

* facial recognition;
* person identification;
* license plate recognition;
* biometric analysis;
* individual tracking;
* person re-identification.

Do not infer identities of people appearing in imagery.

**Note (2026-08-23):** this section, taken alone, appears to conflict with the top-level project brief's inclusion of "FLOCK systems and cameras" — Flock's core product is license plate recognition. That conflict is real and is resolved, not ignored: see `projectatlas.md` §4. ATLAS may catalog the *location* of ALPR infrastructure (any vendor, not just Flock) from official public-records sources only; it must never process plate-read data, images, or logs. The prohibition above is unchanged and still absolute for actual LPR processing — only camera-location cataloging is carved out.

---

# 93. STANDARDS / INTEROPERABILITY

Use relevant transportation standards as architectural context where useful, including:

* FHWA 511/RTSMIP concepts;
* DXFS;
* TMDD;
* NTCIP;
* other applicable ITS standards.

Do not assume these standards define every public camera API.

Standards should inform semantic mappings, not become artificial requirements for sources that do not implement them.

Do not use camera-control standards such as NTCIP or ONVIF to discover or control arbitrary cameras.

ATLAS is read-only.

---

# 94. DATA SEMANTIC MAPPING

Where useful, support:

```text
source field
↓
ATLAS canonical field
↓
transportation semantic concept
```

Optionally retain:

```text
semantic_standard
semantic_identifier
mapping_version
mapping_confidence
```

Do not require every source to implement a transportation standard.

---

# 95. QUALITY / SLA PRINCIPLE

Do not blindly turn general transportation-data quality recommendations into source-specific SLAs.

A source's actual behavior must be measured empirically.

Track:

* freshness;
* timeliness;
* availability;
* completeness;
* consistency;
* reliability.

---

# 96. DATABASE RETENTION

Separate:

1. canonical metadata;
2. provenance;
3. health observations;
4. optional image/video samples.

Canonical metadata should normally be retained.

Health retention should be configurable.

Raw source snapshots should have configurable retention.

Media retention is disabled by default.

---

# 97. OBSERVABILITY

Use structured logs.

Operations should carry:

```text
trace_id
source_id
provider_id
camera_id
view_id
job_id
adapter_version
```

Metrics:

```text
source_fetch_success
source_fetch_failure
source_latency
cameras_discovered
cameras_updated
cameras_removed
identity_matches
identity_conflicts
health_success
health_failure
queue_depth
parser_failure
schema_drift
API_latency
API_errors
```

Expose Prometheus-compatible metrics where practical.

Use OpenTelemetry-compatible tracing where practical.

---

# 98. NO SECRETS IN LOGS

Never log:

* API keys;
* authorization headers;
* cookies;
* credentials;
* signed URLs containing secrets;
* session tokens.

Redact sensitive query parameters.

---

# 99. SECURITY REVIEW

Before declaring production readiness, explicitly test:

* SSRF;
* DNS rebinding;
* redirect abuse;
* XML entity expansion;
* XXE;
* decompression bombs;
* zip bombs;
* JSON bombs;
* oversized responses;
* malicious media;
* command injection;
* path traversal;
* SQL injection;
* NoSQL injection if applicable;
* credential leakage;
* log injection;
* API abuse;
* queue poisoning;
* source-controlled URLs;
* untrusted HTML;
* malformed GIS geometry.

---

# 100. CHAOS TESTING

Prove resilience against:

* source disappearance;
* DNS outage;
* TLS failure;
* API returning HTML instead of JSON;
* malformed XML;
* huge response;
* infinite pagination;
* duplicate records;
* changed IDs;
* rate limiting;
* 401;
* 403;
* 404;
* 429;
* 500;
* timeouts;
* corrupted images;
* invalid manifests;
* database failure;
* queue failure;
* worker crash.

---

# 101. TESTING

Unit tests:

* XML;
* JSON;
* ArcGIS;
* GeoJSON;
* coordinate normalization;
* direction normalization;
* URL normalization;
* identity matching;
* deduplication;
* health transitions.

Integration tests:

* source fetching;
* persistence;
* queues;
* API;
* GIS queries;
* stream validation.

Regression tests:

* one fixture per adapter;
* historical source responses;
* malformed responses;
* missing fields;
* changed fields;
* HTTP failures;
* throttling;
* corrupted images;
* invalid manifests.

Property-based tests:

* coordinates;
* identity matching;
* pagination;
* normalization.

Load tests:

* millions of records;
* millions of observations;
* concurrent map queries;
* ingestion spikes.

---

# 102. SOURCE FIXTURES

When policy permits, capture real source-response fixtures.

Fixtures must be:

* versioned;
* hashed;
* associated with adapter version;
* clearly identified as test fixtures;
* sanitized where required;
* policy-compliant.

Never fabricate a fixture and present it as real.

---

# 103. RESEARCH EVIDENCE

For every source-specific implementation, retain evidence supporting:

* endpoint;
* schema;
* authentication;
* terms;
* license;
* camera fields;
* representations;
* source relationships.

The source research process must be reproducible.

---

# 104. CONFLICT HANDLING

When repository evidence, external documentation, source behavior, or requirements conflict:

Do not silently choose.

Create a documented contradiction containing:

```text
conflict
evidence A
evidence B
impact
possible resolutions
recommended resolution
reason
```

Then resolve using evidence.

---

# 105. CLAUDE.md

Inspect existing `CLAUDE.md` files.

If durable repository-specific instructions should exist there:

* create or update the project-level `CLAUDE.md`;
* preserve compatible existing instructions;
* do not silently overwrite conflicting instructions;
* do not duplicate this entire master prompt;
* store durable architecture rules, coding conventions, workflows, and commands.

The master prompt remains the authoritative product/engineering specification.

`CLAUDE.md` is the repository operating manual.

---

# 106. CONTAINERIZATION

Provide where appropriate:

* Dockerfiles;
* Docker Compose development environment;
* production deployment manifests;
* database migrations;
* environment templates;
* health checks;
* startup scripts.

The exact deployment architecture must be chosen based on repository evidence and actual requirements.

---

# 107. CONFIGURATION

No secrets in source code.

Support:

```text
DATABASE_URL
REDIS_URL
QUEUE_URL
API keys
source enable/disable
polling intervals
retention
rate limits
geospatial settings
logging
metrics
allowed outbound hosts
feature flags
```

Use environment variables or appropriate secret-management integration.

---

# 108. DISASTER RECOVERY

Provide:

* database backup strategy;
* migration strategy;
* source registry backup;
* configuration backup;
* restore procedure;
* queue recovery;
* dead-letter recovery.

A source outage must never destroy historical metadata.

---

# 109. DOCUMENTATION

Deliver:

```text
README.md
ARCHITECTURE.md
DATA_MODEL.md
SOURCE_ADAPTERS.md
SECURITY.md
OPERATIONS.md
DEPLOYMENT.md
API.md
CONTRIBUTING.md
TESTING.md
LICENSE
```

Also provide:

* OpenAPI specification;
* database schema;
* ER diagram;
* architecture diagram;
* adapter interface documentation;
* example source configuration;
* example API responses;
* source verification reports.

---

# 110. DEVELOPER EXPERIENCE

A new developer should be able to:

1. clone repository;
2. start dependencies;
3. run migrations;
4. start API;
5. start workers;
6. load verified sample sources;
7. query cameras;
8. see cameras on a map;
9. run tests.

Document exact commands.

---

# 111. INITIAL SOURCE CATALOG

Create a source-catalog schema.

Seed only with **verified source entries**.

Never fabricate national camera sources.

Each source entry must include:

```text
jurisdiction
agency
source_url
documentation_url
source_type
adapter
access_method
terms
attribution
verification_date
verification_evidence
```

If a source cannot currently be verified, put it in the research queue instead.

---

# 112. GENERIC ADAPTER ACCEPTANCE

At minimum demonstrate:

1. JSON metadata ingestion.
2. XML metadata ingestion.
3. ArcGIS metadata ingestion.
4. GeoJSON metadata ingestion.
5. Multiple views.
6. Still images.
7. HLS health.
8. Source IDs.
9. Stable canonical IDs.
10. Explainable duplicate candidates.
11. Spatial search.
12. State/roadway/direction filtering.
13. Source outage protection.
14. Schema drift protection.
15. Rate-limit compliance.
16. SSRF protections.
17. Media safety.
18. Attribution preservation.
19. Terms preservation.
20. Credential secrecy.

---

# 113. PERFORMANCE TARGETS

Design for at least:

```text
10,000,000 camera/view records
100,000+ source/source records
millions of health observations
large bounding-box queries
```

Do not prematurely optimize.

Use appropriate indexes, partitioning, caching, queues, and horizontal scaling.

---

# 114. API SECURITY

Public APIs must implement where appropriate:

* rate limiting;
* authentication;
* authorization;
* query limits;
* pagination limits;
* response-size limits;
* abuse protection;
* audit logging;
* CORS policy;
* security headers.

Never expose internal administration endpoints publicly.

---

# 115. AUDIT SYSTEM

Audit important mutations:

```text
camera_created
camera_updated
camera_merged
camera_split
camera_retired
source_added
source_disabled
source_changed
adapter_changed
health_state_changed
operator_override
policy_changed
```

Store:

```text
actor
timestamp
object
old_value
new_value
reason
```

---

# 116. NATIONAL MAP COVERAGE

The system must support the entire United States without assuming one provider.

Map queries must be viewport-aware.

At low zoom:

```text
clusters/counts
```

At high zoom:

```text
individual canonical cameras
```

Never load millions of records into the browser.

---

# 117. SOURCE FEDERATION

Architecture must support:

```text
source A ─┐
source B ─┼──> canonical camera
source C ─┘
```

rather than:

```text
one source = one camera
```

Multiple public sources may describe the same physical camera.

---

# 118. SOURCE COMPLETENESS IS NEVER ASSUMED

Do not assume:

```text
511 website exists
=
all public cameras found
```

Do not assume:

```text
one API
=
entire state
```

A jurisdiction may contain:

* statewide source;
* regional source;
* municipal source;
* toll source;
* GIS source;
* legacy source;
* vendor source.

The source registry must support many-to-many relationships.

---

# 119. NO INTERNET CAMERA SCANNING

This requirement applies to:

* application code;
* scripts;
* tests;
* research tooling;
* discovery tooling;
* background workers;
* browser automation;
* administrative tooling.

Do not implement anything resembling:

* port scanning;
* CIDR scanning;
* arbitrary IP discovery;
* RTSP enumeration;
* ONVIF enumeration;
* hostname brute forcing;
* credential attacks;
* arbitrary camera fingerprinting.

---

# 120. SOURCE-CONTROLLED URLs ARE UNTRUSTED

Even if a source is legitimate, URLs contained inside its data are untrusted input.

Treat them as hostile until validated.

This includes:

* image URLs;
* video URLs;
* redirects;
* manifests;
* nested URLs;
* GIS links.

---

# 121. NO CONTROL PLANE

ATLAS is read-only.

Do not implement:

* PTZ control;
* camera configuration;
* camera authentication;
* ONVIF control;
* NTCIP control;
* arbitrary vendor control APIs.

Recognizing that a camera is PTZ is acceptable.

Controlling it is outside ATLAS.

---

# 122. PRIVACY BOUNDARY

ATLAS concerns public transportation/traveler-information camera data.

Do not extend the system into:

* person identification;
* facial recognition;
* license plate recognition;
* biometric analysis;
* behavioral tracking;
* individual surveillance.

**Note (2026-08-23):** see the same note under §92 — the FLOCK/ALPR carve-out (location cataloging only, official sources only, no plate-read data ever) is documented in full in `projectatlas.md` §4, not here. This boundary is not weakened by that carve-out.

---

# 123. OPUS SELF-REVIEW

After every major subsystem, perform an adversarial review.

Ask:

> Assume this subsystem contains a serious defect. How could it corrupt data, violate source policy, create duplicates, lose provenance, misclassify health, bypass SSRF protection, leak credentials, or misrepresent source coverage?

Then test those failure modes.

Do not merely run happy-path tests.

---

# 124. IMPLEMENTATION STATUS RULE

Use only:

```text
PLANNED
IN_PROGRESS
IMPLEMENTED
TESTED
VERIFIED
BLOCKED
FAILED
```

Do not call something:

```text
COMPLETE
PRODUCTION_READY
VERIFIED
```

without evidence.

"Implemented" does not mean "verified."

---

# 125. FINAL ACCEPTANCE MATRIX

Before declaring completion, produce an acceptance matrix.

Example:

```text
Requirement                              Status       Evidence
----------------------------------------------------------------
JSON adapter                             PASS
XML adapter                              PASS
ArcGIS adapter                           PASS
GeoJSON adapter                          PASS
Multiple views                           PASS
Stable canonical IDs                     PASS
Identity matching                        PASS
Explainable identity                     PASS
Source provenance                        PASS
Policy preservation                      PASS
SSRF protection                          PASS
DNS rebinding protection                 PASS
Schema drift protection                  PASS
Source-run atomicity                     PASS
Health state transitions                 PASS
Rate limiting                            PASS
API filtering                            PASS
Geospatial search                        PASS
Map clustering                           PASS
Source outages                           PASS
Credential protection                    PASS
Audit logging                            PASS
Chaos tests                              PASS
Deployment                               PASS
```

Every PASS must have actual evidence.

Valid statuses:

```text
PASS
PARTIAL
FAIL
BLOCKED
NOT_TESTED
NOT_APPLICABLE
```

Never hide unfinished work.

---

# 126. FINAL SECURITY AUDIT

Before production declaration, perform an explicit security audit.

Document:

* attack surface;
* trust boundaries;
* outbound network restrictions;
* SSRF defenses;
* parser defenses;
* media defenses;
* credential handling;
* API security;
* logging security;
* queue security;
* database security;
* administrative security;
* source-policy enforcement.

---

# 127. FINAL OPERATIONAL AUDIT

Demonstrate:

* startup;
* migration;
* source registration;
* source validation;
* source ingestion;
* camera creation;
* camera update;
* camera disappearance;
* source outage;
* source recovery;
* schema drift;
* health failure;
* health recovery;
* identity review;
* API query;
* map query;
* backup;
* restore.

---

# 128. FINAL DELIVERABLE

At completion provide:

1. Repository tree.
2. Architecture explanation.
3. Database schema.
4. API documentation.
5. Adapter documentation.
6. Security model.
7. Operational model.
8. Exact local commands.
9. Exact test commands.
10. Exact deployment commands.
11. Known source requirements.
12. Known credential requirements.
13. Known policy restrictions.
14. Known limitations.
15. Acceptance matrix.
16. Security audit.
17. Research/source verification summary.
18. Outstanding issues.

---

# 129. CRITICAL FINAL RULES

Never:

* fabricate data;
* fabricate tests;
* fabricate source support;
* fabricate API behavior;
* fabricate coverage;
* fabricate licenses;
* fabricate credentials;
* fabricate camera counts;
* silently assume missing information;
* replace valid data with broken data;
* silently resolve contradictions;
* bypass source protections;
* scan arbitrary cameras;
* implement camera control;
* leak secrets;
* expose credentials;
* turn ATLAS into a surveillance archive;
* claim production readiness without evidence.

---

# 130. FINAL ENGINEERING PRINCIPLE

The central architectural distinction is:

```text
ATLAS DOES NOT NEED TO KNOW
HOW TO FIND AN ARBITRARY CAMERA.

ATLAS NEEDS TO KNOW HOW TO:

FIND LEGITIMATE PUBLIC SOURCES
        ↓
VERIFY THEM
        ↓
ESTABLISH THEIR ACCESS/POLICY
        ↓
SAFELY RETRIEVE THEIR DATA
        ↓
PRESERVE EVIDENCE
        ↓
NORMALIZE IT
        ↓
RESOLVE IDENTITIES
        ↓
ENRICH GEOGRAPHY
        ↓
MEASURE RELIABILITY
        ↓
TRACK SOURCE/CAMERA LIFECYCLES
        ↓
EXPOSE A COHERENT NATIONAL REGISTRY
```

The strength of ATLAS must come from **comprehensive legitimate source aggregation, normalization, provenance, identity resolution, geospatial intelligence, reliability engineering, and source research**.

Not unauthorized discovery.

---

# 131. FIRST ACTION

Do not begin by writing application code.

Begin by auditing the repository and this specification.

Produce:

```text
ATLAS-ASSESSMENT.md
```

containing:

1. actual repository state;
2. current architecture;
3. existing functionality;
4. reusable components;
5. contradictions;
6. missing requirements;
7. security concerns;
8. research requirements;
9. proposed architecture;
10. migration strategy;
11. implementation phases;
12. risks;
13. unresolved questions.

Then produce the initial ADR set.

Only after that should implementation begin.

If the repository is empty, explicitly state that fact and construct the project foundation.

If the repository contains an existing working application, preserve and integrate verified functionality rather than discarding it without justification.

---

# 132. THE STANDARD FOR SUCCESS

Success is not:

> "The application runs."

Success is:

> "ATLAS can ingest legitimate public camera sources through independently verifiable adapters, preserve their original evidence and policy, normalize cameras/views/representations, resolve cross-source identities, enrich geographic information, survive source failures and schema changes, perform safe health observations, provide scalable geospatial/API access, maintain complete provenance and auditability, resist SSRF and untrusted-input attacks, and demonstrate all of this through reproducible tests against real authorized sources."

Build that system.
