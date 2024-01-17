// eslint-disable-next-line
const relay = require('./relay.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@fullstack-relay/ui',
    '@fullstack-relay/form',
    '@fullstack-relay/enums',
    '@fullstack-relay/testutils',
  ],
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
      language: relay.language,
    },
    externalDir: true,
    experimental: {
      runtime: 'nodejs',
      concurrentFeatures: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    serverRuntimeConfig: {
      projectRoot: __dirname,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
