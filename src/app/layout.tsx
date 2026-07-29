import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { GlobalLayout } from "../components/layout";
import { Analytics } from "../components/Analytics";
import { CursorSpotlight } from "../components/ui/CursorSpotlight";

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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zaidhusain.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Zaid Husain | Full Stack Developer — React, Node.js, MERN",
    template: "%s | Zaid Husain",
  },
  description:
    "Zaid Husain — Full Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, and Python. Computer Science Engineer from Amravati, Maharashtra, India. Open to Full-Time, Internship, and Freelance opportunities.",
  keywords: [
    "Zaid Husain",
    "Zaid Husain Developer",
    "Zaid Husain Portfolio",
    "Zaid Husain Full Stack Developer",
    "Full Stack Developer Amravati",
    "Full Stack Developer India",
    "React Developer India",
    "Node.js Developer India",
    "MERN Stack Developer",
    "MERN Developer Portfolio",
    "Next.js Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Python Developer",
    "Software Engineer Portfolio",
    "GitHub Zaid Husain",
    "Computer Science Engineer India",
    "Express.js Developer",
    "WebRTC Developer",
    "Socket.IO Developer",
    "Docker Developer",
    "Software Engineer Amravati",
    "React.js Portfolio",
  ],
  authors: [{ name: "Zaid Husain", url: BASE_URL }],
  creator: "Zaid Husain",
  publisher: "Zaid Husain",
  applicationName: "Zaid Husain Portfolio",
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
    url: BASE_URL,
    title: "Zaid Husain | Full Stack Developer — React, Node.js, MERN",
    description:
      "Full Stack Developer building scalable web applications with React.js, Node.js, MongoDB, PostgreSQL, and TypeScript. Based in Amravati, Maharashtra, India. Open to Software Engineering opportunities worldwide.",
    siteName: "Zaid Husain Portfolio",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Zaid Husain — Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid Husain | Full Stack Developer — React, Node.js, MERN",
    description:
      "Full Stack Developer specializing in React.js, Node.js, MongoDB, and TypeScript. Based in Amravati, India. Open to engineering roles.",
    images: [`${BASE_URL}/twitter-image.png`],
    creator: "@zaidhusain",
    site: "@zaidhusain",
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "BING_WEBMASTER_VERIFICATION_CODE",
      "yandex-verification": "YANDEX_VERIFICATION_CODE",
    },
  },
  category: "technology",
  other: {
    "theme-color": "#0a0a0a",
    "color-scheme": "dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Zaid Husain",
    "application-name": "Zaid Husain Portfolio",
    "msapplication-TileColor": "#0a0a0a",
    "msapplication-config": "/browserconfig.xml",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Zaid Husain",
      givenName: "Zaid",
      familyName: "Husain",
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, and Python. Computer Science Engineering student based in Amravati, Maharashtra, India.",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#personImage`,
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        caption: "Zaid Husain — Full Stack Developer",
      },
      sameAs: [
        "https://github.com/zaidhusain",
        "https://www.linkedin.com/in/zaid-husain-329596257/",
        "https://www.instagram.com/zaidhusain/",
      ],
      email: "zaidhusain@gmail.com",
      telephone: "+919309938127",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amravati",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
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
      knowsAbout: [
        "Full-Stack Web Development",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "TypeScript",
        "JavaScript",
        "Python",
        "Docker",
        "Socket.IO",
        "WebRTC",
        "REST APIs",
        "MERN Stack",
        "Git",
        "Supabase",
        "DevOps",
        "MLOps",
        "Computer Science Engineering",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationLocation: {
          "@type": "City",
          name: "Amravati",
        },
        skills:
          "React.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, Python, Docker, Socket.IO, WebRTC",
      },
      seeks: {
        "@type": "JobPosting",
        title: "Full Stack Developer",
        description:
          "Open to Full-Time, Internship, Freelance, Remote, and Open Source Collaboration opportunities in software engineering.",
        jobLocationType: "TELECOMMUTE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Zaid Husain Portfolio",
      description:
        "Personal portfolio of Zaid Husain — Full Stack Developer from Amravati, India.",
      publisher: { "@id": `${BASE_URL}/#person` },
      author: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: "Zaid Husain — Full Stack Developer Portfolio",
      description:
        "Portfolio of Zaid Husain, Full Stack Developer specializing in React.js, Node.js, MERN Stack, and TypeScript.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      mainEntity: { "@id": `${BASE_URL}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
        ],
      },
    },
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
