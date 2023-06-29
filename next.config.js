/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path')

module.exports = nextConfig

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}
