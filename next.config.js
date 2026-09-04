/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // set to '/REPO_NAME' only if NOT deploying to a root username.github.io repo
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
