import { readFileSync } from "fs";
import path from "path";
import MapClient from "@/components/MapClient";

type CameraFeature = {
  properties: {
    category: "camera" | "workzone";
    state: string;
    source: string;
  };
};

function loadStats() {
  const filePath = path.join(process.cwd(), "public", "data", "cameras.geojson");
  const raw = readFileSync(filePath, "utf8");
  const geo = JSON.parse(raw) as { features: CameraFeature[] };

  const byState: Record<string, number> = {};
  const bySource: Record<string, number> = {};
  let cameraCount = 0;
  let workzoneCount = 0;

  for (const f of geo.features) {
    const p = f.properties;
    byState[p.state] = (byState[p.state] || 0) + 1;
    bySource[p.source] = (bySource[p.source] || 0) + 1;
    if (p.category === "workzone") workzoneCount += 1;
    else cameraCount += 1;
  }

  const states = Object.entries(byState).sort((a, b) => b[1] - a[1]);
  const sources = Object.entries(bySource).sort((a, b) => b[1] - a[1]);

  return { total: geo.features.length, cameraCount, workzoneCount, states, sources };
}

export default function Home() {
  const { total, cameraCount, workzoneCount, states, sources } = loadStats();

  return (
    <div className="atlas-shell">
      <aside className="atlas-sidebar">
        <div className="atlas-brand">
          <img src="/ProjectATLAS%20Main%20Logo.png" alt="ProjectATLAS" />
          <div>
            <h1>PROJECT ATLAS</h1>
            <div className="atlas-brand-sub">Phase 1 evidence preview</div>
          </div>
        </div>

        <div className="preview-banner">
          <strong>This is a preview, not the production system.</strong> Every
          point on this map is real, independently-verified data gathered
          during Phase 1 source research — no mock data. There is no live
          database or ingestion pipeline yet; this is a static snapshot. Full
          provenance for every source is in{" "}
          <code>docs/research/PHASE1-SOURCE-VERIFICATION.md</code>.
        </div>

        <div className="stat-grid">
          <div className="stat-card">
            <div className="num">{total.toLocaleString()}</div>
            <div className="label">Total points</div>
          </div>
          <div className="stat-card">
            <div className="num">{cameraCount.toLocaleString()}</div>
            <div className="label">Cameras</div>
          </div>
          <div className="stat-card">
            <div className="num">{workzoneCount.toLocaleString()}</div>
            <div className="label">Work zones</div>
          </div>
          <div className="stat-card">
            <div className="num">{states.length}</div>
            <div className="label">Jurisdictions</div>
          </div>
        </div>

        <div>
          <div className="legend-row" style={{ marginBottom: 4 }}>
            <span className="dot dot-camera" /> Traffic camera
          </div>
          <div className="legend-row">
            <span className="dot dot-workzone" /> Work zone event
          </div>
        </div>

        <div>
          <div className="section-title">By jurisdiction</div>
          <div className="state-list">
            {states.map(([state, count]) => (
              <div className="state-row" key={state}>
                <span>{state}</span>
                <span className="count">{count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="section-title">By source</div>
          <div className="state-list">
            {sources.map(([source, count]) => (
              <div className="state-row" key={source}>
                <span>{source}</span>
                <span className="count">{count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-note">
          Real endpoints hit, real record counts, license status shown
          per-source (many are UNKNOWN and marked as such — never treated as
          &ldquo;unrestricted&rdquo;, per project policy). Several large
          state totals shown here are first-page samples (ArcGIS default
          page-size caps), not necessarily each state&rsquo;s full inventory
          — see the research log for exact per-source figures.
          <br />
          <br />
          Data current as of the Phase 1 research session that gathered it.
          Not a live feed.
        </div>
      </aside>

      <div className="atlas-map-area">
        <div className="map-title-overlay">
          U.S. public camera &amp; work-zone locations — real, verified data
        </div>
        <MapClient dataUrl="/data/cameras.geojson" />
      </div>
    </div>
  );
}
