/** @type {import('next').NextConfig} */
const nodeMajor = Number.parseInt(process.versions.node.split(".")[0] ?? "0", 10);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    // Node 22+ has shown flaky webpack filesystem-cache behavior in dev.
    if (dev && nodeMajor >= 22) {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
