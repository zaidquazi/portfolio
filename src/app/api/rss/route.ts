import { NextResponse } from "next/server";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

// Future blog posts will be loaded from a CMS or data file.
// For now we expose the feed with portfolio metadata so RSS aggregators
// and search engines can discover the feed endpoint immediately.
const feedMeta = {
  title: "Zaid Husain — Full Stack Developer Blog",
  description:
    "Technical articles on React.js, Node.js, MERN Stack, TypeScript, MongoDB, System Design, and software engineering by Zaid Husain.",
  link: BASE_URL,
  language: "en-IN",
  copyright: `© ${new Date().getFullYear()} Zaid Husain`,
  managingEditor: "zaidhusain@gmail.com (Zaid Husain)",
  webMaster: "zaidhusain@gmail.com (Zaid Husain)",
  lastBuildDate: new Date().toUTCString(),
  category: ["Technology", "Software Engineering", "Web Development"],
};

// Placeholder posts — replace with real data when blog is live
const posts: Array<{
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
  category: string[];
}> = [
  // Future blog posts will be added here
  // Example structure:
  // {
  //   title: "Building a Production-Grade REST API with Node.js and Express",
  //   description: "A deep-dive into structuring scalable REST APIs...",
  //   link: `${BASE_URL}/blog/nodejs-rest-api-guide`,
  //   pubDate: new Date("2025-01-01").toUTCString(),
  //   guid: `${BASE_URL}/blog/nodejs-rest-api-guide`,
  //   category: ["Node.js", "REST API", "Backend"],
  // },
];

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${feedMeta.title}</title>
    <link>${feedMeta.link}</link>
    <description>${feedMeta.description}</description>
    <language>${feedMeta.language}</language>
    <copyright>${feedMeta.copyright}</copyright>
    <managingEditor>${feedMeta.managingEditor}</managingEditor>
    <webMaster>${feedMeta.webMaster}</webMaster>
    <lastBuildDate>${feedMeta.lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/opengraph-image.png</url>
      <title>${feedMeta.title}</title>
      <link>${feedMeta.link}</link>
    </image>
    ${feedMeta.category.map((cat) => `<category>${cat}</category>`).join("\n    ")}
    ${posts
      .map(
        (post) => `<item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.link}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <guid isPermaLink="true">${post.guid}</guid>
      <dc:creator>Zaid Husain</dc:creator>
      ${post.category.map((cat) => `<category>${cat}</category>`).join("\n      ")}
    </item>`
      )
      .join("\n    ")}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
