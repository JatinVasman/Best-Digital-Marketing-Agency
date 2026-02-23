"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="The Team Behind the Results"
          subtitle="Our Story"
        />

        {/* Image — Centered, Constrained */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 0 50px rgba(232, 93, 58, 0.1)",
              border: "2px solid rgba(232, 93, 58, 0.15)",
            }}
          >
            <Image
              src="/about.webp"
              alt="Business Volunteers team — a results-driven digital marketing agency in Delhi NCR"
              width={900}
              height={400}
              className="w-full max-h-[400px] object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </motion.div>

        {/* Text Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-5 text-[var(--text-muted)] leading-relaxed text-lg">
            <p>
              Business Volunteers was born from a simple belief — every
              business, no matter how small, deserves world-class marketing.
            </p>
            <p>
              We started by helping local businesses in Delhi NCR build their
              digital presence, often for free, because we believed in earning
              trust before earning revenue. That foundation of integrity still
              drives everything we do.
            </p>
            <p>
              Today, we are a full-service digital marketing agency specializing
              in performance campaigns, creative branding, and technology-driven
              growth solutions. From restaurants and boutiques to real estate
              firms and tech startups — we have helped businesses across
              industries unlock their potential.
            </p>
            <p>
              Our approach is straightforward: understand the business deeply,
              craft a strategy rooted in data, execute with creative precision,
              and optimize relentlessly. No fluff, no vanity metrics — just
              real, measurable growth.
            </p>
          </div>

          <button
            className="btn-primary mt-8"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
