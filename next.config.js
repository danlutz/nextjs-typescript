require('dotenv').config()
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')

const nextConfig = {
  target: 'server',
  compress: true,
  poweredByHeader: false,
  // Will be available on both server and client
  publicRuntimeConfig: {
    ALGOLIA_SEARCH_APPID: process.env.ALGOLIA_SEARCH_APPID,
    ALGOLIA_SEARCH_SEARCH_KEY: process.env.ALGOLIA_SEARCH_SEARCH_KEY,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    HOST: process.env.HOST || 'http://localhost:3000',
  },
  // Will only be available on the server side
  serverRuntimeConfig: {
    VERY_SECRET_STUFF: process.env.VERY_SECRET_STUFF,
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }
    // Load svg files as React components
    // This allows to inline SVG's and using them without performing a HTTP request
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const plugins = [withSass]

module.exports = withPlugins(plugins, nextConfig)
