/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Empty string for user root GitHub Pages site (username.github.io); set to '/repo-name' for project sites
  assetPrefix: '', // Empty string for user root GitHub Pages site; match basePath if deploying to subpath
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
