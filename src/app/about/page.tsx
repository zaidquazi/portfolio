import type { Metadata } from "next";
import { AboutMe } from "../../components/AboutMe";
import { TechnicalSkills } from "../../components/TechnicalSkills";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zaidhusain.com";

export const metadata: Metadata = {
  title: "About Zaid Husain | Full Stack Developer — Amravati, India",
  description:
    "Learn about Zaid Husain, a Full Stack Developer and Computer Science Engineer from Amravati, Maharashtra, India. Specializes in React.js, Node.js, MongoDB, TypeScript, and Python. Open to Full-Time and Internship roles.",
  keywords: [
    "About Zaid Husain",
    "Zaid Husain Full Stack Developer",
    "Full Stack Developer Amravati",
    "MERN Developer India",
    "Computer Science Engineer India",
    "React Node MongoDB Developer",
  ],
  alternates: {
    canonical: "/about",
    languages: { "en-IN": "/about", "x-default": "/about" },
  },
  openGraph: {
    type: "profile",
    url: `${BASE_URL}/about`,
    title: "About Zaid Husain | Full Stack Developer — Amravati, India",
    description:
      "Computer Science Engineer and Full Stack Developer from Amravati, India. Building scalable web applications with React.js, Node.js, and the MERN stack.",
    siteName: "Zaid Husain Portfolio",
    firstName: "Zaid",
    lastName: "Husain",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "About Zaid Husain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zaid Husain | Full Stack Developer",
    description:
      "CS Engineer and MERN Stack Developer from Amravati, India. Building scalable software.",
    images: [`${BASE_URL}/twitter-image.png`],
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/about/#profilepage`,
  url: `${BASE_URL}/about`,
  name: "About Zaid Husain — Full Stack Developer",
  description:
    "Profile page of Zaid Husain, Full Stack Developer and Computer Science Engineer based in Amravati, Maharashtra, India.",
  mainEntity: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Zaid Husain",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript. Based in Amravati, Maharashtra, India.",
    knowsAbout: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
      "Python",
      "Docker",
      "MERN Stack",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amravati",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${BASE_URL}/about`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" aria-label="About Zaid Husain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <AboutMe />
      <TechnicalSkills />
    </main>
  );
}
