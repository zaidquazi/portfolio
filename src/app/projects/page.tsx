import type { Metadata } from "next";
import { Work } from "../../components/Work";
import { SEO } from "../../data/seo.constants";

export const metadata: Metadata = {
  title: `Projects by ${SEO.PERSON_NAME} — Zashly, Zashio & Zashub | ${SEO.JOB_TITLE}`,
  description:
    `Explore Zashly, Zashio & Zashub — production-grade platforms built by ${SEO.PERSON_NAME} using React, Node.js, MongoDB, PostgreSQL, Socket.IO & WebRTC.`,
  keywords: [
    `${SEO.PERSON_NAME} Projects`,
    `${SEO.JOB_TITLE} Portfolio`,
    "Zashly",
    "Zashio",
    "Zashub",
    "MERN Stack Projects",
    "React Node.js Projects",
    "Software Engineer Projects India",
    "WebRTC Project",
    "PostgreSQL Project",
    "Socket.IO Chat App",
  ],
  alternates: {
    canonical: "/projects",
    languages: { "en-IN": "/projects", "x-default": "/projects" },
  },
  openGraph: {
    type: "website",
    url: `${SEO.SITE_URL}/projects`,
    title: `Projects by ${SEO.PERSON_NAME} — Zashly, Zashio & Zashub`,
    description:
      `Explore Zashly, Zashio & Zashub — production-grade platforms built by ${SEO.PERSON_NAME}.`,
    siteName: `${SEO.PERSON_NAME} Portfolio`,
    images: [
      {
        url: `${SEO.SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: `${SEO.PERSON_NAME} — Projects Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects by ${SEO.PERSON_NAME} — Zashly, Zashio & Zashub`,
    description:
      `Explore Zashly, Zashio & Zashub — production-grade platforms built by ${SEO.PERSON_NAME}.`,
    images: [`${SEO.SITE_URL}/twitter-image.png`],
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SEO.SITE_URL}/projects/#collectionpage`,
  url: `${SEO.SITE_URL}/projects`,
  name: `Projects — ${SEO.PERSON_NAME} ${SEO.JOB_TITLE} Portfolio`,
  description:
    `A curated collection of software projects by ${SEO.PERSON_NAME}, including Zashly, Zashio, and Zashub.`,
  author: { "@id": `${SEO.SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SEO.SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SEO.SITE_URL}/projects`,
      },
    ],
  },
  hasPart: [
    { "@id": `${SEO.SITE_URL}/#zashly` },
    { "@id": `${SEO.SITE_URL}/#zashio` },
    { "@id": `${SEO.SITE_URL}/#zashub` },
  ]
};

export default function ProjectsPage() {
  return (
    <main id="main-content" aria-label={`Projects by ${SEO.PERSON_NAME}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <Work />
    </main>
  );
}
