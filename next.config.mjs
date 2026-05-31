/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // SVGs are handled via SVGR-generated components in components/icons,
  // so no webpack SVG loader is wired here by default.
};

export default nextConfig;
