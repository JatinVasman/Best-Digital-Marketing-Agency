"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section id="video-showcase" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden"
          style={{
            border: "2px solid rgba(232, 93, 58, 0.15)",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
