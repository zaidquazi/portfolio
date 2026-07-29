import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  title: "Blog | Zaid Husain — Full Stack Developer Technical Writing",
  description:
    "Technical blog by Zaid Husain — Full Stack Developer. Articles on React.js, Node.js, MongoDB, TypeScript, System Design, MERN Stack, DevOps, and software engineering best practices. Coming soon.",
  keywords: [
    "Zaid Husain Blog",
    "Full Stack Developer Blog",
    "React.js Technical Blog",
    "Node.js Blog India",
    "MERN Stack Articles",
    "Software Engineering Blog India",
    "TypeScript Blog",
    "System Design Blog",
  ],
  alternates: {
    canonical: "/blog",
    languages: { "en-IN": "/blog", "x-default": "/blog" },
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/blog`,
    title: "Blog | Zaid Husain — Technical Writing on React, Node.js, MERN",
    description:
      "Technical blog by Zaid Husain covering React.js, Node.js, MongoDB, TypeScript, System Design, and software engineering. Coming soon.",
    siteName: "Zaid Husain Portfolio",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Zaid Husain — Technical Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Zaid Husain — Technical Writing",
    description:
      "Technical articles on React.js, Node.js, MERN Stack, TypeScript, and System Design by Zaid Husain. Coming soon.",
    images: [`${BASE_URL}/twitter-image.png`],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BASE_URL}/blog/#blog`,
  url: `${BASE_URL}/blog`,
  name: "Zaid Husain — Full Stack Developer Technical Blog",
  description:
    "Technical blog covering React.js, Node.js, MongoDB, TypeScript, MERN Stack, System Design, and software engineering best practices.",
  author: { "@id": `${BASE_URL}/#person` },
  publisher: { "@id": `${BASE_URL}/#person` },
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <main
      id="main-content"
      aria-label="Technical Blog by Zaid Husain"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 2rem",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <header>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--text-tertiary, #6b7280)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Coming Soon
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "var(--text-primary, #f9fafb)",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Technical Blog
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--text-secondary, #9ca3af)",
            maxWidth: "520px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Sharing deep-dives on React.js, Node.js, System Design, MERN Stack,
          TypeScript, and software engineering best practices. Subscribe to be
          notified when articles go live.
        </p>
      </header>

      <nav aria-label="Return navigation">
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: "8px",
            color: "#3b82f6",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
          }}
        >
          ← Back to Portfolio
        </Link>
      </nav>
    </main>
  );
}
