/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  reactStrictMode: false,
  swcMinify: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  dir: 'src',
})