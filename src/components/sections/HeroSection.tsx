"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-contained overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 w-full py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Massive Headline */}
          <div>
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[1.15] mb-10"
              style={{
                fontFamily: "var(--font-heading)",
                clipPath: isInView ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
                transition: "clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
              }}
            >
              Best Digital{" "}
              <span className="gradient-text">Marketing Agency</span>
            </motion.h1>
          </div>

          {/* Larger Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-[var(--text-muted)] leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            We craft data-driven campaigns that turn attention into revenue.
            From strategy to execution — your growth is our obsession.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              className="btn-primary text-lg !py-4 !px-10"
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Work
            </button>
            <button
              className="btn-secondary text-lg !py-4 !px-10"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
