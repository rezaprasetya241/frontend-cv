/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.NEXT_PUBLIC_API,
  },
};

module.exports = nextConfig;
