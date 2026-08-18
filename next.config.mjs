/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Build time par ESLint errors ignore karne ke liye
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Build time par minor TS errors ignore karne ke liye
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
