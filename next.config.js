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

/** */
const nextConfig = {
  output: "export", // Para generación estática
  images: {
    unoptimized: true, // Necesario con 'output: export'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        pathname: "/images/**",
      },
    ],
  },
  // Elimina cualquier configuración de 'standalone' o 'serverComponentsExternalPackages'
};

module.exports = nextConfig;
