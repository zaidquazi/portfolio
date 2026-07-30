import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://zaidhusainonline.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/projects",
          "/experience",
          "/contact",
          "/resume",
          "/blog",
          "/projects/",
        ],
        disallow: [
          "/static/",
          "/*.json$",
          "/404",
          "/500",
        ],
      },
      {
        // Allow Google to crawl everything
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // Allow Bing to crawl
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
