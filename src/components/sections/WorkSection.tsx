"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    client: "Decor by Sonya Mehta",
    industry: "Interior Design",
    image: "/Website/Sonya-decor.webp",
    link: "https://decorembysonyamehta.com",
    result: "3x more inquiries",
  },
  {
    client: "Vasoo Bamboo Arts",
    industry: "Crafts & Artisan",
    image: "/Website/vasoobamboo.webp",
    link: "https://vasoobambooarts.in",
    result: "First page on Google",
  },
  {
    client: "Vihaara",
    industry: "Real Estate",
    image: "/Website/vihara.webp",
    link: "https://vihaara.org",
    result: "40% more site visits",
  },
  {
    client: "Layers Clothing",
    industry: "Fashion & Apparel",
    image: "/Website/layers.webp",
    link: "https://layersclothing.in",
    result: "2x online orders",
  },
  {
    client: "Daily Mob Design",
    industry: "Advertising Agency",
    image: "/Website/dailymobdesign.webp",
    link: "https://dailymobdesign.com",
    result: "Complete brand overhaul",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Projects That Speak for Themselves"
          subtitle="Our Portfolio"
        />

        <div className="space-y-20">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.client}
                initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div
                    className="relative rounded-2xl overflow-hidden group"
                    style={{
                      boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.client} — ${project.industry} project by Business Volunteers`}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`${isReversed ? "lg:order-1 lg:text-right" : "lg:order-2"}`}
                >
                  <p className="text-sm text-[var(--primary-light)] uppercase tracking-wider mb-2 font-semibold">
                    {project.industry}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.client}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold mb-6">
                    {project.result}
                  </div>
                  <div className={`${isReversed ? "lg:justify-end" : ""} flex`}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !py-3 !px-6 text-sm inline-flex items-center gap-2"
                    >
                      Visit Site <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
