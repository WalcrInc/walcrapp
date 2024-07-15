/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  sw: '/update-sw.js'
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: false,
  swcMinify: false,
})