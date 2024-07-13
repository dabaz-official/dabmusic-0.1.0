import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default pwaConfig(nextConfig);
