// Single source of truth for the subpath this site is deployed under
// (atlas_server.py serves out/ at /ProjectATLAS/*). Exposed to app code as
// NEXT_PUBLIC_BASE_PATH below so the two hand-written asset URLs in
// app/page.tsx (the logo <img> and the geojson fetch URL — anything Next
// doesn't manage itself) can stay in sync with basePath without a second
// hardcoded copy of this string.
const basePath = "/ProjectATLAS";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict Mode's dev-only double-invoke of effects breaks react-leaflet's
  // MapContainer ("Map container is already initialized") — disabled here,
  // not a production-runtime concern since Strict Mode double-invoking is
  // dev-only behavior.
  reactStrictMode: false,
  // Static export: this site has no server-side runtime behavior (the
  // fs.readFileSync in app/page.tsx runs at build time in a Server
  // Component, not per-request), so it can ship as plain static HTML/JS
  // served by any web server — no Node server process required in
  // production.
  output: "export",
  // The live deployment serves this export from /ProjectATLAS/*, not from
  // the domain root -- without this, every _next/static/* asset URL Next
  // generates is root-relative and 404s under that subpath.
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
