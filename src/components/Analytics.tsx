"use client";

// ── Analytics Placeholder ────────────────────────────────────────────────
// To activate analytics, set the corresponding environment variables in
// your .env.local (and on Vercel / your hosting platform):
//
//   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX   (Google Analytics 4)
//   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX               (Google Tag Manager)
//   NEXT_PUBLIC_CLARITY_ID=xxxxxxxx              (Microsoft Clarity)
//   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com (Plausible)
//
// Uncomment and install the relevant packages when ready:
//   npm install @next/third-parties   (for GA4 - built into Next.js)
//   npm install @microsoft/clarity    (for Clarity)
// ─────────────────────────────────────────────────────────────────────────

// Example GA4 implementation (uncomment when ready):
// import { GoogleAnalytics } from '@next/third-parties/google'
// <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />

export function Analytics() {
  // Uncomment the relevant block below when adding analytics:

  // ── Google Analytics 4 ──
  // if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return null;
  // return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />;

  // ── Microsoft Clarity ──
  // useEffect(() => {
  //   if (process.env.NEXT_PUBLIC_CLARITY_ID) {
  //     clarity('init', process.env.NEXT_PUBLIC_CLARITY_ID);
  //   }
  // }, []);

  return null;
}
