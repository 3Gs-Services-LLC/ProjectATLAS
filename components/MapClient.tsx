"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AtlasMap = dynamic(() => import("./AtlasMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#8b96a3",
        fontSize: 13,
      }}
    >
      Loading map…
    </div>
  ),
});

export default function MapClient({ dataUrl }: { dataUrl: string }) {
  return <MapLoader dataUrl={dataUrl} />;
}

function MapLoader({ dataUrl }: { dataUrl: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((r) => r.json())
      .then(setData)
      .catch((e) => console.error("Failed to load camera data", e));
  }, [dataUrl]);

  if (!data) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#8b96a3",
          fontSize: 13,
        }}
      >
        Loading {`>10,000`} real data points…
      </div>
    );
  }

  return <AtlasMap data={data} />;
}
