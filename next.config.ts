import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permette immagini esterne (es. loghi di organizzazioni/progetti) senza
    // dover allowlistare ogni singolo hostname in questo file.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
