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
  metadataBase: new URL("https://bestmarketingagency.online"),
  verification: {
    google: "4EbWl68EzlLFhEbzmTBc7qEaXp5pq6cUD0VM071q650",
  },
  title: "Best Digital Marketing Agency in India | Business Volunteers",
  description:
    "Business Volunteers — results-driven digital marketing agency in India. Social media, web development, branding, SEO & performance marketing.",
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
    canonical: "https://bestmarketingagency.online",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in India | Business Volunteers",
    description:
      "Results-driven digital marketing agency in India — social media management, website development, branding, SEO, and performance marketing.",
    url: "https://bestmarketingagency.online",
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
    url: "https://bestmarketingagency.online",
    logo: "https://bestmarketingagency.online/logo.webp",
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
    url: "https://bestmarketingagency.online",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://bestmarketingagency.online/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "Services", "Portfolio", "About", "Blog", "Contact"],
    url: [
      "https://bestmarketingagency.online/",
      "https://bestmarketingagency.online/#services",
      "https://bestmarketingagency.online/#work",
      "https://bestmarketingagency.online/#about",
      "https://bestmarketingagency.online/blog",
      "https://bestmarketingagency.online/#contact",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Business Volunteers",
    image: "https://bestmarketingagency.online/logo.webp",
    "@id": "https://bestmarketingagency.online",
    url: "https://bestmarketingagency.online",
    telephone: "+91-85869-89832",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Noida Sec 62",
      addressLocality: "Noida",
      postalCode: "201309",
      addressRegion: "UP",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6273,
      longitude: 77.3725,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    priceRange: "$$",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Social Media Management",
        description:
          "Professional management of your social media presence to grow your brand and engage your audience.",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Website Development",
        description:
          "High-performance, responsive websites tailored to your business goals.",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Data Analytics",
        description:
          "Insights-driven data analysis to optimize your marketing performance.",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Graphic & Poster Design",
        description:
          "Creative visual content that communicates your brand message.",
      },
      {
        "@type": "Service",
        position: 5,
        name: "Presentation Design",
        description: "Professional decks that help you win more business.",
      },
      {
        "@type": "Service",
        position: 6,
        name: "Logo Design",
        description: "Unique and memorable brand identities.",
      },
      {
        "@type": "Service",
        position: 7,
        name: "Video Editing",
        description: "High-quality video content for all platforms.",
      },
      {
        "@type": "Service",
        position: 8,
        name: "UGC Videos",
        description: "Authentic user-generated content that builds trust.",
      },
      {
        "@type": "Service",
        position: 9,
        name: "CRM Solutions",
        description: "Smart CRM systems to strengthen customer relationships.",
      },
      {
        "@type": "Service",
        position: 10,
        name: "Brochure Design",
        description: "Professional print and digital marketing materials.",
      },
      {
        "@type": "Service",
        position: 11,
        name: "WhatsApp Business Setup",
        description:
          "Streamlined customer communication via WhatsApp Business.",
      },
      {
        "@type": "Service",
        position: 12,
        name: "Google Business Setup",
        description: "Optimized Google Business profiles for local search.",
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
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
