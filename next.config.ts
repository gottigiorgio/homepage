import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Dietro a un reverse proxy: non serve annunciare lo stack.
  poweredByHeader: false,

  images: {
    // Allowlist esplicita invece del wildcard "**": con il wildcard chiunque
    // puo' usare /_next/image di questo dominio per ottimizzare immagini
    // arbitrarie, consumando CPU e banda del server. Per aggiungere il logo di
    // una nuova organizzazione basta aggiungere il suo hostname qui sotto.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.gottigiorgio.dev",
        pathname: "/immagini/**",
      },
      {
        protocol: "https",
        hostname: "fbitech.it",
      },
    ],
    // AVIF prima di WebP: avatar e loghi pesano meno, quindi LCP piu' basso
    // (che Google usa come segnale di ranking).
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
