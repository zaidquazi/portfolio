import type { Metadata } from "next";
import { AboutMe } from "../../components/AboutMe";
import { TechnicalSkills } from "../../components/TechnicalSkills";
import { SEO } from "../../data/seo.constants";

export const metadata: Metadata = {
  title: `About ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} & Creator of Zashly, Zashio, Zashub`,
  description:
    `Meet ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} from India. Creator of Zashly, Zashio & Zashub. Expert in React, Node.js, MongoDB, PostgreSQL & AI applications.`,
  keywords: [
    `About ${SEO.PERSON_NAME}`,
    `${SEO.PERSON_NAME} ${SEO.JOB_TITLE}`,
    "Full-Stack Software Engineer India",
    "Creator of Zashly",
    "Creator of Zashio",
    "Creator of Zashub",
    "React Node MongoDB Developer",
  ],
  alternates: {
    canonical: "/about",
    languages: { "en-IN": "/about", "x-default": "/about" },
  },
  openGraph: {
    type: "profile",
    url: `${SEO.SITE_URL}/about`,
    title: `About ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE}`,
    description:
      `${SEO.JOB_TITLE} from India. Creator of Zashly, Zashio & Zashub.`,
    siteName: `${SEO.PERSON_NAME} Portfolio`,
    firstName: SEO.PERSON_NAME.split(' ')[0],
    lastName: SEO.PERSON_NAME.split(' ')[1],
    images: [
      {
        url: `${SEO.SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: `About ${SEO.PERSON_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${SEO.PERSON_NAME} | ${SEO.JOB_TITLE}`,
    description:
      `${SEO.JOB_TITLE} and creator of Zashly, Zashio, and Zashub.`,
    images: [`${SEO.SITE_URL}/twitter-image.png`],
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SEO.SITE_URL}/about/#profilepage`,
  url: `${SEO.SITE_URL}/about`,
  name: `About ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE}`,
  description:
    `Profile page of ${SEO.PERSON_NAME}, ${SEO.JOB_TITLE} based in ${SEO.LOCATION.locality}, ${SEO.LOCATION.region}, ${SEO.LOCATION.country}.`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SEO.SITE_URL}/#person`,
    name: SEO.PERSON_NAME,
    jobTitle: SEO.JOB_TITLE,
    description:
      `${SEO.JOB_TITLE} specializing in React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript.`,
    knowsAbout: SEO.KNOWS_ABOUT,
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO.LOCATION.locality,
      addressRegion: SEO.LOCATION.region,
      addressCountry: SEO.LOCATION.country,
    },
    creator: [
      { "@id": `${SEO.SITE_URL}/#zashly` },
      { "@id": `${SEO.SITE_URL}/#zashio` },
      { "@id": `${SEO.SITE_URL}/#zashub` },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SEO.SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SEO.SITE_URL}/about`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" aria-label={`About ${SEO.PERSON_NAME}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <AboutMe />
      <TechnicalSkills />
    </main>
  );
}
