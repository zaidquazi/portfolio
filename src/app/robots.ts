import type { MetadataRoute } from "next";
import { SEO } from "../data/seo.constants";

const BASE_URL = SEO.SITE_URL;

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
          "/blog",
          "/projects/",
        ],
        disallow: [
          "/api/",
          "/static/",
          "/*.json$",
          "/404",
          "/500",
        ],
        crawlDelay: 10,
      },
      {
        // Allow Google to crawl everything without delay
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
