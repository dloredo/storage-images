/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pleasant-toucan-940.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
