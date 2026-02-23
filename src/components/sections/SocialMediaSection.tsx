"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const socialImages = Array.from({ length: 12 }, (_, i) => {
  const num = i + 8; // files: 8.webp through 19.webp
  return {
    src: `/social/${num}.webp`,
    alt: `Social media campaign design ${num} by Business Volunteers`,
  };
});

export default function SocialMediaSection() {
  return (
    <section id="social-media" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Scroll-Stopping Social Content"
          subtitle="Social Media"
        />

        {/* Image Grid — 3 cols on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {socialImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative rounded-xl overflow-hidden bg-[var(--surface)] border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-300"
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="btn-primary inline-flex items-center gap-2"
          >
            View Full Gallery <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
