import type { Metadata } from "next";
import { Contact } from "../../components/Contact";
import { SEO } from "../../data/seo.constants";

export const metadata: Metadata = {
  title: `Contact ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} | Hire for Engineering Roles`,
  description:
    `Get in touch with ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} & creator of Zashly, Zashio, Zashub. Open to full-time, remote & freelance engineering roles.`,
  keywords: [
    `Contact ${SEO.PERSON_NAME}`,
    `Hire ${SEO.PERSON_NAME}`,
    `${SEO.JOB_TITLE} for Hire`,
    "React Node.js Developer India",
    "Software Engineer for Hire India",
    "MERN Developer Contact",
    `${SEO.PERSON_NAME} Email`,
  ],
  alternates: {
    canonical: "/contact",
    languages: { "en-IN": "/contact", "x-default": "/contact" },
  },
  openGraph: {
    type: "website",
    url: `${SEO.SITE_URL}/contact`,
    title: `Contact ${SEO.PERSON_NAME} | ${SEO.JOB_TITLE} — Hire Me`,
    description:
      `Open to full-time, remote & freelance engineering roles. Contact ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE}, creator of Zashly, Zashio, Zashub.`,
    siteName: `${SEO.PERSON_NAME} Portfolio`,
    images: [
      {
        url: `${SEO.SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: `Contact ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${SEO.PERSON_NAME} | ${SEO.JOB_TITLE}`,
    description:
      `Hire ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} open to Full-Time, Remote, and Freelance engineering roles. Based in India.`,
    images: [`${SEO.SITE_URL}/twitter-image.png`],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SEO.SITE_URL}/contact/#contactpage`,
  url: `${SEO.SITE_URL}/contact`,
  name: `Contact ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE}`,
  description:
    `Contact page for ${SEO.PERSON_NAME}, ${SEO.JOB_TITLE} from ${SEO.LOCATION.locality}, ${SEO.LOCATION.region}, ${SEO.LOCATION.country}. Open to full-time, remote & freelance engineering roles.`,
  isPartOf: { "@id": `${SEO.SITE_URL}/#website` },
  about: { "@id": `${SEO.SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SEO.SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${SEO.SITE_URL}/contact`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" aria-label={`Contact ${SEO.PERSON_NAME}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Contact />
    </main>
  );
}
