"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[var(--background)] flex flex-col items-center justify-center"
        >
          {/* Ring */}
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-full border-4 border-white/5" />
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--primary)] border-r-[var(--primary-light)]"
              style={{ animation: "ring-spin 1.2s linear infinite" }}
            />
            {/* Logo */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/logo.webp"
                alt="Business Volunteers"
                width={56}
                height={56}
                priority
              />
            </motion.div>
          </div>

          {/* Brand Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-lg font-semibold tracking-wide text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Business Volunteers
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
