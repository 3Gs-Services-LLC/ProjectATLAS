/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict Mode's dev-only double-invoke of effects breaks react-leaflet's
  // MapContainer ("Map container is already initialized") — disabled here,
  // not a production-runtime concern since Strict Mode double-invoking is
  // dev-only behavior.
  reactStrictMode: false,
};

export default nextConfig;
