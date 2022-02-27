/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
}

module.exports = nextConfig
