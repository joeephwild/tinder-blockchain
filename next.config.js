/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  images: {
    domains: ['moralis.io', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
