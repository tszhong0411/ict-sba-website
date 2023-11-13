import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev'
      }
    ]
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
