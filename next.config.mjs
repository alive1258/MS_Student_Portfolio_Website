/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.findrmeet.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
