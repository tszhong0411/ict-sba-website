import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },

  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error'
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config
  }
}

export default withContentlayer(nextConfig)
