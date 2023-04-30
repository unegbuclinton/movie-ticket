/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org/t/p/w500/",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
