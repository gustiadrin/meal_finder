// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["www.themealdb.com"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.themealdb.com",
//         port: "",
//         pathname: "/images/media/meals/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** */
// const nextConfig = {
//   output: "standalone",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.themealdb.com",
//         pathname: "/images/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        pathname: "/images/**",
      },
    ],
  },
  // Opcional: Rewrites para evitar 404 en rutas dinámicas
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
