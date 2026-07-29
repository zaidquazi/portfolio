import type { Metadata } from "next";
import { Contact } from "../../components/Contact";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  title: "Contact Zaid Husain | Full Stack Developer — Hire Me",
  description:
    "Get in touch with Zaid Husain — Full Stack Developer from Amravati, India. Open to Full-Time, Internship, Freelance, and Remote software engineering opportunities. Reach out via email or phone.",
  keywords: [
    "Contact Zaid Husain",
    "Hire Zaid Husain",
    "Full Stack Developer for Hire",
    "React Node.js Developer India",
    "Software Engineer for Hire India",
    "MERN Developer Contact",
    "Zaid Husain Email",
  ],
  alternates: {
    canonical: "/contact",
    languages: { "en-IN": "/contact", "x-default": "/contact" },
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/contact`,
    title: "Contact Zaid Husain | Full Stack Developer — Hire Me",
    description:
      "Open to Full-Time, Internship, Freelance, and Remote software engineering opportunities. Contact Zaid Husain — Full Stack Developer, MERN Stack, React, Node.js.",
    siteName: "Zaid Husain Portfolio",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Zaid Husain — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Zaid Husain | Full Stack Developer",
    description:
      "Hire Zaid Husain — Full Stack Developer open to Full-Time, Internship, and Freelance opportunities. Based in India.",
    images: [`${BASE_URL}/twitter-image.png`],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact/#contactpage`,
  url: `${BASE_URL}/contact`,
  name: "Contact Zaid Husain — Full Stack Developer",
  description:
    "Contact page for Zaid Husain, Full Stack Developer from Amravati, Maharashtra, India. Open to Full-Time, Internship, Freelance, and Remote software engineering opportunities.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${BASE_URL}/contact`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" aria-label="Contact Zaid Husain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Contact />
    </main>
  );
}
