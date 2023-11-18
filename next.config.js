const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d22f1kls6ex9ii.cloudfront.net",
      },
    ],
  },
};

module.exports = withNextra(nextConfig);
