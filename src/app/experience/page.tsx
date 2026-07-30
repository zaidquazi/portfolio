import type { Metadata } from "next";
import { Experience } from "../../components/Experience";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zaidhusainonline.vercel.app";

export const metadata: Metadata = {
  title: "Experience | Zaid Husain — Full Stack Developer Engineering Journey",
  description:
    "Engineering journey and professional experience of Zaid Husain — Full Stack Developer from Amravati, India. 6 months MERN Developer internship experience with hands-on projects in React.js, Node.js, MongoDB, and TypeScript.",
  keywords: [
    "Zaid Husain Experience",
    "Zaid Husain Internship",
    "MERN Developer Experience",
    "Full Stack Developer Experience India",
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
    url: `${BASE_URL}/experience`,
    title: "Experience | Zaid Husain — Full Stack Developer Engineering Journey",
    description:
      "Professional engineering journey and work experience of Zaid Husain. MERN Stack Developer with internship experience in React.js, Node.js, MongoDB, and TypeScript.",
    siteName: "Zaid Husain Portfolio",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Zaid Husain — Engineering Journey and Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Zaid Husain — Engineering Journey",
    description:
      "Engineering journey of Zaid Husain: MERN Stack internship, full-stack projects, DevOps, and ongoing CS engineering degree.",
    images: [`${BASE_URL}/twitter-image.png`],
  },
};

const experiencePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/experience/#webpage`,
  url: `${BASE_URL}/experience`,
  name: "Experience — Zaid Husain Engineering Journey",
  description:
    "Engineering journey and professional experience of Zaid Husain, Full Stack Developer based in Amravati, Maharashtra, India.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experience",
        item: `${BASE_URL}/experience`,
      },
    ],
  },
};

export default function ExperiencePage() {
  return (
    <main id="main-content" aria-label="Engineering Experience of Zaid Husain">
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
