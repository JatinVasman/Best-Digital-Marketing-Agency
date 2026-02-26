import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://businessvolunteers.online"),
  title: "Best Digital Marketing Agency in India | Business Volunteers",
  description:
    "Business Volunteers is a results-driven digital marketing agency in India offering social media management, website development, branding, SEO, and performance marketing for growing businesses.",
  keywords: [
    "best digital marketing agency India",
    "digital marketing company India",
    "social media marketing agency",
    "website development agency India",
    "branding agency India",
    "performance marketing India",
    "SEO agency India",
    "affordable digital marketing",
    "lead generation agency India",
    "creative advertising agency",
    "Business Volunteers",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://businessvolunteers.online",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in India | Business Volunteers",
    description:
      "Results-driven digital marketing agency in India — social media management, website development, branding, SEO, and performance marketing.",
    url: "https://businessvolunteers.online",
    siteName: "Business Volunteers",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Business Volunteers Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in India | Business Volunteers",
    description:
      "Results-driven digital marketing agency in India — social media, web development, branding & more.",
    images: ["/logo.webp"],
  },
  icons: {
    icon: "/logo.webp",
  },
};

function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Business Volunteers",
    alternateName: "Best Marketing Agency",
    url: "https://businessvolunteers.online",
    logo: "https://businessvolunteers.online/logo.webp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-85869-89832",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Noida Sec 62",
      addressLocality: "Noida",
      postalCode: "201309",
      addressRegion: "UP",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/thebusinessvolunteers/",
      "https://www.facebook.com/people/Business-Volunteers/61579138254807/",
      "https://www.linkedin.com/company/business-volunteers1",
      "https://www.youtube.com/@TheBusinessVolunteers",
      "https://x.com/Business8920",
      "https://in.pinterest.com/businessvolunteers/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Business Volunteers",
    url: "https://businessvolunteers.online",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://businessvolunteers.online/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "Services", "Portfolio", "About", "Blog", "Contact"],
    url: [
      "https://businessvolunteers.online/",
      "https://businessvolunteers.online/#services",
      "https://businessvolunteers.online/#work",
      "https://businessvolunteers.online/#about",
      "https://businessvolunteers.online/blog",
      "https://businessvolunteers.online/#contact",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
    </>
  );
}

import QuickChat from "@/components/ui/QuickChat";
import CursorFollower from "@/components/ui/CursorFollower";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <StructuredData />
        <CursorFollower />
        {children}
        <QuickChat />
        <Analytics />
      </body>
    </html>
  );
}
