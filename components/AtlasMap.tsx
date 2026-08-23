"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

// Leaflet measures its container's size once, synchronously, at construction
// time. In a CSS Grid layout (.atlas-shell's 340px/1fr columns), that
// measurement can race the grid finishing layout, leaving Leaflet convinced
// the map is much smaller than it actually is -- tiles and clusters then
// stay stuck at whatever tiny viewport it first measured. A ResizeObserver
// on the real container size is the standard fix: it re-measures whenever
// the container's actual size changes, not just once at mount.
function ResizeHandler() {
  const map = useMap();
  useEffect(() => {
    const container = map.getContainer();
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(container);
    return () => ro.disconnect();
  }, [map]);
  return null;
}

type CameraFeature = {
  type: "Feature";
  geometry: { type: "Point"; coordinates: [number, number] };
  properties: {
    id: string;
    category: "camera" | "workzone";
    title: string;
    road: string | null;
    state: string;
    source: string;
    sourceUrl: string;
    license: string;
  };
};

type FC = { type: "FeatureCollection"; features: CameraFeature[] };

export default function AtlasMap({ data }: { data: FC }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;

  return (
    <MapContainer
      center={[39.5, -98.35]}
      zoom={4}
      minZoom={3}
      maxZoom={17}
      style={{ height: "100%", width: "100%" }}
    >
      <ResizeHandler />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        subdomains="abcd"
        maxZoom={19}
      />
      <MarkerClusterGroup chunkedLoading disableClusteringAtZoom={11} maxClusterRadius={50}>
        {data.features.map((f) => {
          const [lon, lat] = f.geometry.coordinates;
          const isWorkzone = f.properties.category === "workzone";
          return (
            <CircleMarker
              key={f.properties.id}
              center={[lat, lon]}
              radius={5}
              pathOptions={{
                color: isWorkzone ? "#f0a23c" : "#4facfe",
                fillColor: isWorkzone ? "#f0a23c" : "#4facfe",
                fillOpacity: 0.85,
                weight: 1,
              }}
            >
              <Popup>
                <div className="popup-title">{f.properties.title}</div>
                <div className="popup-meta">
                  {f.properties.road ? `${f.properties.road} · ` : ""}
                  {f.properties.state}
                  <br />
                  Source:{" "}
                  <a href={f.properties.sourceUrl} target="_blank" rel="noreferrer">
                    {f.properties.source}
                  </a>
                </div>
                <span
                  className={`popup-license ${
                    /public|cc0/i.test(f.properties.license) ? "public" : ""
                  }`}
                >
                  License: {f.properties.license}
                </span>
              </Popup>
            </CircleMarker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
