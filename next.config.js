//import type { NextConfig } from "next";

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

/** */

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
  // ¡No uses output: 'export' ni output: 'standalone'!
};

module.exports = nextConfig;
