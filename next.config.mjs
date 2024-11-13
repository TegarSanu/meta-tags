/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    react: {
      throwIfNamespace: false,
    },
  },
};

export default nextConfig;
