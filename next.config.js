/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "ukr"],
    localeDetection: false,
  },
};

module.exports = nextConfig;
