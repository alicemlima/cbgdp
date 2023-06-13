/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/cbgdp2023',
  assetPrefix: '/cbgdp2023/',
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;