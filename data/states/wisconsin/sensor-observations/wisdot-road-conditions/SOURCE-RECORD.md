# Source Record — Wisconsin DOT road conditions (Midwest Winter Road Conditions service)

**Retrieved:** 2026-08-29, via direct HTTPS requests (`curl` 8.21.0, self-identifying User-Agent: `ProjectATLAS-SourceResearch/1.0 (contact: 3gservicesmilton@gmail.com)`).
**Method:** Discovered from this project's **own prior evidence** — the hashed ArcGIS search response saved at `data/states/wisconsin/media-streams/wisdot-arcgis-negative/arcgis-search-wisconsin-2026-08-29.json`, where this service appeared and was correctly set aside as "not a camera layer." Revisited for capability §1.3, where it is directly on point. Queried through the ArcGIS REST `/query` endpoint the service itself advertises (`capabilities: Query`). No access control bypassed.

## Identity

- **Publisher of the Wisconsin records:** **Wisconsin DOT** — the `SOURCE` attribute on all 1,175 Wisconsin features reads exactly `Wisconsin DOT`, and every one carries `SOURCE_LINK = https://511wi.gov/`, tying this back to the same 511WI system as `data/states/wisconsin/events/wisdot-wzdx/`.
- **Host of the service:** Iowa DOT (`IowaDOT_SODA` on ArcGIS Online). This is a **multi-state aggregation hosted by a different state's DOT**, which matters for provenance: Wisconsin is the data's publisher, Iowa DOT is the distributor. Do not attribute the hosting to WisDOT.
- **Official URL:** `https://services.arcgis.com/8lRhdTsQyJpO52F1/arcgis/rest/services/Midwest_Winter_Road_Conditions_View/FeatureServer/0`
- **Coverage:** 8 state DOTs, confirmed by querying distinct `SOURCE` values rather than trusting the description: `Illinois DOT`, `Kansas DOT`, `Minnesota DOT`, `Missouri DOT`, `Nebraska DOT`, `North Dakota DOT`, `South Dakota DOT`, `Wisconsin DOT`.
- **License:** **UNKNOWN.** The service's `copyrightText` is empty and `serviceDescription` is empty. Treat as restrictive per `MacEvil.md` §12. Note this is *weaker* licence evidence than Wisconsin's WZDx feed, which declares CC0 inside its own payload.

## Endpoint inventory (verified, this session)

| Endpoint | HTTP status | Bytes | SHA-256 | Saved as |
|---|---|---|---|---|
| `…/FeatureServer?f=json` | 200 | 3,177 | `a8f530abb6858b28317b8e0c34a4b9d40261172d43345ecb93b4bfcce7a4c57d` | `featureserver-meta-2026-08-29.json` |
| `…/FeatureServer/0?f=json` | 200 | 18,297 | `03da322f31ca358117f63cf7d9ae1c39bcdf065ecf5971ae94d045c3dbd469fe` | `layer0-schema-2026-08-29.json` |
| `…/0/query` `returnDistinctValues=true&outFields=SOURCE` | 200 | 718 | `e07c2a05a74b2752856061e03181f188db167b44f293b23deb545333e9460169` | `distinct-sources-2026-08-29.json` |
| `…/0/query` `where=SOURCE='Wisconsin DOT'&outFields=*&outSR=4326` | 200 | 5,798,527 | `37eee03c546665fd1011d2fddaac398b295a430b0976f270659f64d8cfc567ee` | `data/2026-08-29/wisconsin-road-conditions.json` |

## Content verification (parsed, not assumed)

**Counts, obtained via `returnCountOnly` before fetching anything:** 6,684 features service-wide, **1,175 of them Wisconsin DOT**. The full Wisconsin fetch returned exactly 1,175 features with `exceededTransferLimit` absent, so **this is the complete Wisconsin set, not a truncated page** — worth stating, because the layer's `maxRecordCount` is 2,000 and a larger state would have paged.

Geometry is `esriGeometryPolyline`, requested in WGS84 (`outSR=4326`). First record: route `I-94`, segment `"I-94, St. Croix River to USH 12 (Driving)"` — a real, specific Wisconsin interstate segment.

## An honest observation about the data's current state

**Every one of the 1,175 Wisconsin features has `ROAD_CONDITION = 0`**, and `HEADLINE` is null on the first record.

This is recorded as an observation, **not** diagnosed as a fault. The service is a *winter* road-conditions product and this fetch was made on **29 August** — an all-zero condition code across every segment is exactly what an off-season winter product would be expected to show. But this session did **not** retrieve a code lookup table, so the meaning of `0` is **unverified**: it may mean "normal/no adverse condition," or "no report," or something else.

**Do not build anything on the assumption that `0` means clear roads.** The right way to settle this is to re-query in winter and see whether non-zero values appear, and to find the publisher's code definitions. Both are open items below.

What *is* established: the segment inventory is real, complete for Wisconsin, geometrically valid, and correctly attributed.

## Classification note — a genuine ambiguity, recorded rather than hidden

This record sits in `sensor-observations/`, but that placement is **arguable**. Road-condition reports are periodic coded status values over fixed road segments, which fits "periodic readings"; but a condition that begins and ends over a segment is also event-shaped, and Wisconsin's work zones went to `events/`.

This is a concrete instance of the unresolved four-class taxonomy question in `projectatlas.md` §9 — the scheme has no consumer and no defined adjudication rule, so this placement is a judgement call that a future decision may reverse. Flagging it here so the decision has a real case to reason about rather than an abstraction.

## Open items

1. **Determine what `ROAD_CONDITION` integer codes mean.** No lookup table was retrieved. Until then the field is unusable.
2. **Re-query in winter** to confirm non-zero values appear, which would validate both the field and the feed's liveness.
3. Resolve the licence: `copyrightText` is empty and the service is hosted by Iowa DOT while publishing Wisconsin's data. Whose terms govern redistribution is genuinely unclear and should not be guessed.
4. The other **7 state DOTs** in this service are a ready-made multi-state road-conditions source — Illinois, Kansas, Minnesota, Missouri, Nebraska, North Dakota, South Dakota. Same schema, one adapter. Directly relevant to `Project ATLAS-WebSite.md` §69's "the 500th source as easy as the 5th."
5. Reconcile against 511WI directly: these records point at `511wi.gov`, so Wisconsin likely publishes the same conditions first-party. A first-party feed would be preferable to a re-host with an unknown licence — but **do not go guessing `511wi.gov/api/*` paths** to find it (§4).
