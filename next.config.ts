import { NextConfig } from 'next';

// Import next-pwa
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Add any other Next.js config options you have here
};

export default withPWA(nextConfig);