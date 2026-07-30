import type { Metadata } from "next";
import { Experience } from "../../components/Experience";
import { SEO } from "../../data/seo.constants";

export const metadata: Metadata = {
  title: `Experience — ${SEO.PERSON_NAME} | ${SEO.JOB_TITLE} Career & Engineering Journey`,
  description:
    `Engineering journey of ${SEO.PERSON_NAME} — MERN Developer internship, building Zashly, Zashio & Zashub. ${SEO.JOB_TITLE} with React, Node.js & DevOps.`,
  keywords: [
    `${SEO.PERSON_NAME} Experience`,
    `${SEO.PERSON_NAME} Internship`,
    "MERN Developer Experience",
    `${SEO.JOB_TITLE} Experience India`,
    "React Node.js Developer Experience",
    "Software Engineer Career",
    "Computer Science Engineer India",
  ],
  alternates: {
    canonical: "/experience",
    languages: { "en-IN": "/experience", "x-default": "/experience" },
  },
  openGraph: {
    type: "website",
    url: `${SEO.SITE_URL}/experience`,
    title: `Experience | ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} Engineering Journey`,
    description:
      `Professional engineering journey and work experience of ${SEO.PERSON_NAME}. ${SEO.JOB_TITLE} with internship experience in React.js, Node.js, MongoDB, and TypeScript.`,
    siteName: `${SEO.PERSON_NAME} Portfolio`,
    images: [
      {
        url: `${SEO.SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: `${SEO.PERSON_NAME} — Engineering Journey and Experience`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Experience | ${SEO.PERSON_NAME} — Engineering Journey`,
    description:
      `Engineering journey of ${SEO.PERSON_NAME}: MERN Stack internship, building Zashly, Zashio, Zashub, and ongoing CS engineering degree.`,
    images: [`${SEO.SITE_URL}/twitter-image.png`],
  },
};

const experiencePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SEO.SITE_URL}/experience/#webpage`,
  url: `${SEO.SITE_URL}/experience`,
  name: `Experience — ${SEO.PERSON_NAME} Engineering Journey`,
  description:
    `Engineering journey and professional experience of ${SEO.PERSON_NAME}, ${SEO.JOB_TITLE} based in ${SEO.LOCATION.locality}, ${SEO.LOCATION.region}, ${SEO.LOCATION.country}.`,
  isPartOf: { "@id": `${SEO.SITE_URL}/#website` },
  about: { "@id": `${SEO.SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SEO.SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experience",
        item: `${SEO.SITE_URL}/experience`,
      },
    ],
  },
};

export default function ExperiencePage() {
  return (
    <main id="main-content" aria-label={`Engineering Experience of ${SEO.PERSON_NAME}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(experiencePageSchema),
        }}
      />
      <Experience />
    </main>
  );
}
