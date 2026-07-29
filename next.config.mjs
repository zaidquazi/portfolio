/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // ── Image Optimization ───────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 768, 1024, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ── Compression ────────────────────────────────────────────────────
  compress: true,

  // ── Security & Performance Headers ─────────────────────────────────
  async headers() {
    return [
      // ── Security headers for all routes ──────────────────────────
      {
        source: "/(.*)",
        headers: [
          // HTTPS enforcement
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // XSS / clickjacking protection
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // DNS Prefetch
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Permissions Policy — restrict powerful features
          {
            key: "Permissions-Policy",
            value: [
              "camera=()",
              "microphone=()",
              "geolocation=()",
              "interest-cohort=()",
              "payment=()",
              "usb=()",
              "accelerometer=()",
              "gyroscope=()",
              "magnetometer=()",
            ].join(", "),
          },
          // Cross-Origin policies
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: self + inline for Next.js hydration + analytics
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms",
              // Styles: self + inline for CSS-in-JS + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: self + Google Fonts CDN
              "font-src 'self' https://fonts.gstatic.com data:",
              // Images: self + data URIs + HTTPS sources for avatars/analytics
              "img-src 'self' data: blob: https://www.google-analytics.com https://*.clarity.ms https://*.githubusercontent.com",
              // Connections: self + GitHub API + Vercel + Analytics
              "connect-src 'self' https://api.github.com https://vitals.vercel-insights.com https://www.google-analytics.com https://*.clarity.ms https://*.bing.com",
              // Media
              "media-src 'self'",
              // Objects blocked
              "object-src 'none'",
              // Base URI restriction
              "base-uri 'self'",
              // Form actions restricted to self
              "form-action 'self'",
              // Frame ancestors restriction (who can embed this site)
              "frame-ancestors 'self'",
              // Frame SRC (what this site can embed - e.g. YouTube, LinkedIn)
              "frame-src 'self' https://www.youtube.com https://www.linkedin.com",
              // Upgrade insecure requests
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },

      // ── Static asset long-cache headers ──────────────────────────
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:path*.png",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=31536000, stale-while-revalidate=86400, immutable",
          },
        ],
      },
      {
        source: "/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="Zaid-Husain-Resume.pdf"',
          },
        ],
      },

      // ── RSS feed headers ──────────────────────────────────────────
      {
        source: "/api/rss",
        headers: [
          {
            key: "Content-Type",
            value: "application/rss+xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // ── Redirects ────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Redirect /rss.xml to the RSS API route for canonical feed URL
      {
        source: "/rss.xml",
        destination: "/api/rss",
        permanent: false,
      },
      {
        source: "/feed.xml",
        destination: "/api/rss",
        permanent: false,
      },
      {
        source: "/atom.xml",
        destination: "/api/rss",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
