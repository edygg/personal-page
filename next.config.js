/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/personal-page",
  assetPrefix: "/personal-page",
}

module.exports = nextConfig
