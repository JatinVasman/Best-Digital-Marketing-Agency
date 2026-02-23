"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    number: 1200,
    suffix: "+",
    label: "Brands Empowered",
    descriptor: "Across 15+ industries",
  },
  {
    number: 180,
    suffix: "+",
    label: "Campaigns Delivered",
    descriptor: "On time, every time",
  },
  {
    number: 100,
    suffix: "%",
    label: "Client Retention",
    descriptor: "They stay because it works",
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Numbers Don't Lie" subtitle="Our Impact" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <p
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </p>
              {/* Gradient underline */}
              <div className="w-20 h-1 mx-auto mb-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
              <p
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.label}
              </p>
              <p className="text-[var(--text-muted)] text-sm">
                {stat.descriptor}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
