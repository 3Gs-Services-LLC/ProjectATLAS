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
};

export default nextConfig;
