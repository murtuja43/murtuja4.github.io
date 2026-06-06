/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (no Node server at runtime)
  output: "export",
  // User Pages site served at domain root → no basePath needed
  images: {
    unoptimized: true,
  },
  // Emit /section/index.html style routes; safer for static hosting
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
