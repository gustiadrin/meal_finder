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

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Crucial para Vercel
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
