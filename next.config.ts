import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ["cdn.simpleicons.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({
})

export default withMDX(nextConfig)