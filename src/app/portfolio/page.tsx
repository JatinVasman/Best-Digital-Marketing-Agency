import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Portfolio | Business Volunteers",
  description:
    "Explore our social media work — brand campaigns, content designs, and creative projects delivered for clients across industries.",
  alternates: {
    canonical: "https://bestmarketingagency.online/portfolio",
  },
  openGraph: {
    title: "Social Media Portfolio | Business Volunteers",
    description:
      "Explore our social media work — brand campaigns, content designs, and creative projects.",
    url: "https://bestmarketingagency.online/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Portfolio | Business Volunteers",
    description:
      "Explore our social media work — brand campaigns, content designs, and creative projects delivered for clients across industries.",
    images: ["/logo.webp"],
  },
};

const socialImages = Array.from({ length: 18 }, (_, i) => {
  const num = i + 8; // files are 8.webp through 25.webp
  return {
    src: `/social/${num}.webp`,
    alt: `Social media campaign design ${num} by Business Volunteers`,
  };
});

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="pt-32 pb-12 px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p
            className="text-sm uppercase tracking-[3px] text-[var(--primary-light)] mb-4 font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Social Media Gallery
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Creative Work
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl">
            A curated selection of social media campaigns, brand visuals, and
            creative content we have designed for our clients.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {socialImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-[var(--surface)] border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[var(--text-muted)] mb-6">
            Want similar results for your brand?
          </p>
          <Link href="/#contact" className="btn-primary inline-flex">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
