import type { Metadata } from "next";
import { Work } from "../../components/Work";
import { projects } from "../../data/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zaidhusainonline.vercel.app";

export const metadata: Metadata = {
  title: "Projects | Zaid Husain — Full Stack Developer Portfolio",
  description:
    "Explore projects by Zaid Husain — Full Stack Developer. Includes Talent Nexus (React, Node.js, PostgreSQL, Supabase), Zashly (Socket.IO, WebRTC, MERN), Home Town Hub (MERN Stack). Demonstrating real-world software engineering skills.",
  keywords: [
    "Zaid Husain Projects",
    "Full Stack Developer Portfolio",
    "MERN Stack Projects",
    "React Node.js Projects",
    "Software Engineer Projects India",
    "Talent Nexus",
    "Zashly App",
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
    url: `${BASE_URL}/projects`,
    title: "Projects | Zaid Husain — Full Stack Developer Portfolio",
    description:
      "Full Stack projects by Zaid Husain using React.js, Node.js, MongoDB, PostgreSQL, Socket.IO, and WebRTC. View case studies with architecture decisions and technical highlights.",
    siteName: "Zaid Husain Portfolio",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Zaid Husain — Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Zaid Husain — Full Stack Developer",
    description:
      "Full Stack projects by Zaid Husain: React, Node.js, MongoDB, Socket.IO, WebRTC. See case studies and architecture decisions.",
    images: [`${BASE_URL}/twitter-image.png`],
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/projects/#collectionpage`,
  url: `${BASE_URL}/projects`,
  name: "Projects — Zaid Husain Full Stack Developer Portfolio",
  description:
    "A curated collection of Full Stack software projects by Zaid Husain, demonstrating expertise in React.js, Node.js, MongoDB, PostgreSQL, Socket.IO, and WebRTC.",
  author: { "@id": `${BASE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${BASE_URL}/projects`,
      },
    ],
  },
  hasPart: projects.map((project) => ({
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.oneLiner,
    url: `${BASE_URL}/projects/${project.slug}`,
    codeRepository: project.githubUrl,
    programmingLanguage: project.techSummary,
    author: { "@id": `${BASE_URL}/#person` },
  })),
};

export default function ProjectsPage() {
  return (
    <main id="main-content" aria-label="Projects by Zaid Husain">
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
