/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
  ignoreBuildErrors: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
