import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { GlobalLayout } from "../components/layout";
import { Analytics } from "../components/Analytics";
import { CursorSpotlight } from "../components/ui/CursorSpotlight";
import { SEO, getSameAsLinks } from "../data/seo.constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.SITE_URL),

  title: {
    default: `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} | Creator of Zashly, Zashio & Zashub`,
    template: `%s — ${SEO.PERSON_NAME} | ${SEO.JOB_TITLE}`,
  },
  description:
    `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} building Zashly, Zashio & Zashub. Specializing in React, Node.js, MERN Stack, PostgreSQL & scalable architecture.`,
  keywords: [
    SEO.PERSON_NAME,
    `${SEO.PERSON_NAME} Portfolio`,
    `${SEO.PERSON_NAME} ${SEO.JOB_TITLE}`,
    `${SEO.PERSON_NAME} Zashly`,
    `${SEO.PERSON_NAME} Zashio`,
    `${SEO.PERSON_NAME} Zashub`,
    `${SEO.PERSON_NAME} GitHub`,
    "Full-Stack Software Engineer India",
    "MERN Stack Developer",
    "MERN Developer Portfolio",
    "React Developer India",
    "Node.js Developer India",
    "Next.js Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Python Developer",
    "Software Engineer Portfolio",
    "Computer Science Engineer India",
    "Real-Time Chat Platform",
    "AI Recruitment Platform",
    "Community Platform",
    "WebRTC Developer",
    "Socket.IO Developer",
    "Docker Developer"
  ],
  authors: [{ name: SEO.PERSON_NAME, url: SEO.SITE_URL }],
  creator: SEO.PERSON_NAME,
  publisher: SEO.PERSON_NAME,
  applicationName: `${SEO.PERSON_NAME} Portfolio`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: SEO.SITE_URL,
    title: `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} | Creator of Zashly, Zashio & Zashub`,
    description:
      `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} building Zashly, Zashio & Zashub. Specializing in React, Node.js, MERN Stack, PostgreSQL & scalable architecture.`,
    siteName: `${SEO.PERSON_NAME} Portfolio`,
    images: [
      {
        url: `${SEO.SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} | Creator of Zashly, Zashio & Zashub`,
    description:
      `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} building Zashly, Zashio & Zashub.`,
    images: [`${SEO.SITE_URL}/twitter-image.png`],
    creator: "@zaidhusain",
    site: "@zaidhusain",
  },
  category: "technology",
  other: {
    "theme-color": "#0a0a0a",
    "color-scheme": "dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": SEO.PERSON_NAME,
    "application-name": `${SEO.PERSON_NAME} Portfolio`,
    "msapplication-TileColor": "#0a0a0a",
    "msapplication-config": "/browserconfig.xml",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SEO.SITE_URL}/#person`,
      name: SEO.PERSON_NAME,
      jobTitle: SEO.JOB_TITLE,
      description: `${SEO.JOB_TITLE} specializing in React.js, Node.js, MongoDB, PostgreSQL, TypeScript, and Python. Based in ${SEO.LOCATION.locality}, ${SEO.LOCATION.region}, ${SEO.LOCATION.country}.`,
      url: SEO.SITE_URL,
      image: {
        "@type": "ImageObject",
        "@id": `${SEO.SITE_URL}/#personImage`,
        url: `${SEO.SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        caption: `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE}`,
      },
      sameAs: getSameAsLinks(),
      email: SEO.EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: SEO.LOCATION.locality,
        addressRegion: SEO.LOCATION.region,
        addressCountry: SEO.LOCATION.country,
      },
      nationality: {
        "@type": "Country",
        name: "India",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "B.Tech Computer Science Engineering",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Amravati",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      knowsAbout: SEO.KNOWS_ABOUT,
      hasOccupation: {
        "@type": "Occupation",
        name: SEO.JOB_TITLE,
        occupationLocation: {
          "@type": "City",
          name: SEO.LOCATION.locality,
        },
        skills: SEO.KNOWS_ABOUT.join(", "),
      },
      creator: [
        { "@id": `${SEO.SITE_URL}/#zashly` },
        { "@id": `${SEO.SITE_URL}/#zashio` },
        { "@id": `${SEO.SITE_URL}/#zashub` },
      ],
      seeks: {
        "@type": "JobPosting",
        title: SEO.JOB_TITLE,
        description:
          "Open to Full-Time, Internship, Freelance, Remote, and Open Source Collaboration opportunities in software engineering.",
        jobLocationType: "TELECOMMUTE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SEO.SITE_URL}/#website`,
      url: SEO.SITE_URL,
      name: `${SEO.PERSON_NAME} Portfolio`,
      description:
        `Personal portfolio of ${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} from ${SEO.LOCATION.locality}, India.`,
      publisher: { "@id": `${SEO.SITE_URL}/#person` },
      author: { "@id": `${SEO.SITE_URL}/#person` },
      inLanguage: "en-IN",
      hasPart: [
        { "@id": `${SEO.SITE_URL}/#zashly` },
        { "@id": `${SEO.SITE_URL}/#zashio` },
        { "@id": `${SEO.SITE_URL}/#zashub` },
      ],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SEO.SITE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SEO.SITE_URL}/#profilepage`,
      url: SEO.SITE_URL,
      name: `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} Portfolio`,
      description:
        `Portfolio of ${SEO.PERSON_NAME}, ${SEO.JOB_TITLE} specializing in React.js, Node.js, MERN Stack, and TypeScript.`,
      isPartOf: { "@id": `${SEO.SITE_URL}/#website` },
      about: { "@id": `${SEO.SITE_URL}/#person` },
      mainEntity: { "@id": `${SEO.SITE_URL}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SEO.SITE_URL,
          },
        ],
      },
    },
    {
      "@type": "WebApplication",
      "@id": `${SEO.SITE_URL}/#zashly`,
      name: SEO.PROJECTS.ZASHLY.NAME,
      url: SEO.PROJECTS.ZASHLY.URL,
      description: SEO.PROJECTS.ZASHLY.DESCRIPTION,
      applicationCategory: "SocialNetworkingApplication",
      creator: { "@id": `${SEO.SITE_URL}/#person` },
      author: { "@id": `${SEO.SITE_URL}/#person` },
      codeRepository: SEO.PROJECTS.ZASHLY.GITHUB,
      isPartOf: { "@id": `${SEO.SITE_URL}/#website` },
    },
    {
      "@type": "WebApplication",
      "@id": `${SEO.SITE_URL}/#zashio`,
      name: SEO.PROJECTS.ZASHIO.NAME,
      url: SEO.PROJECTS.ZASHIO.URL,
      description: SEO.PROJECTS.ZASHIO.DESCRIPTION,
      applicationCategory: "BusinessApplication",
      creator: { "@id": `${SEO.SITE_URL}/#person` },
      author: { "@id": `${SEO.SITE_URL}/#person` },
      codeRepository: SEO.PROJECTS.ZASHIO.GITHUB,
      isPartOf: { "@id": `${SEO.SITE_URL}/#website` },
    },
    {
      "@type": "WebApplication",
      "@id": `${SEO.SITE_URL}/#zashub`,
      name: SEO.PROJECTS.ZASHUB.NAME,
      url: SEO.PROJECTS.ZASHUB.URL,
      description: SEO.PROJECTS.ZASHUB.DESCRIPTION,
      applicationCategory: "WebApplication",
      creator: { "@id": `${SEO.SITE_URL}/#person` },
      author: { "@id": `${SEO.SITE_URL}/#person` },
      codeRepository: SEO.PROJECTS.ZASHUB.GITHUB,
      isPartOf: { "@id": `${SEO.SITE_URL}/#website` },
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <CursorSpotlight />
        <GlobalLayout>{children}</GlobalLayout>
        <Analytics />
      </body>
    </html>
  );
}

