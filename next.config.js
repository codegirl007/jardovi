/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: {not: /url/}, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
  experimental: {
    optimizePackageImports: ['ua-parser-js', 'axios', 'i18next', 'framer-motion', 'swiper']
  }
}

module.exports = nextConfig
