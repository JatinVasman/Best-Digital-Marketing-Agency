"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Business Volunteers offer?",
    answer:
      "We offer a complete suite of digital marketing services including social media management, website development, SEO, paid advertising, graphic design, video editing, CRM solutions, logo design, brochure design, WhatsApp Business setup, and Google Business profile optimization.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is designed to be accessible for businesses of all sizes — from small local shops to growing startups. We offer customized packages based on your specific needs and budget. Contact us for a free consultation and quote.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Initial engagement improvements are typically visible within 2-4 weeks. Significant growth in leads, traffic, and conversions usually becomes clear within 60-90 days of consistent campaign execution.",
  },
  {
    question: "What makes Business Volunteers different from other agencies?",
    answer:
      "We started by helping businesses for free because we believed in building trust first. That ethos still drives us — we keep pricing honest, we communicate transparently, and we measure success by your growth, not vanity metrics.",
  },
  {
    question: "Can you manage my existing social media accounts?",
    answer:
      "Yes. We perform a thorough audit of your current profiles, develop a refreshed strategy, and take over content creation, scheduling, engagement, and performance reporting.",
  },
];

function FAQStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding section-contained">
      <FAQStructuredData />
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading title="Everything You Need to Know" subtitle="FAQ" />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between gap-4 ${
                    isOpen
                      ? "bg-[var(--surface)] border border-[var(--primary)]/30"
                      : "bg-[var(--surface)]/50 border border-white/5 hover:border-white/10"
                  }`}
                >
                  <span
                    className="font-semibold text-sm md:text-base"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[var(--primary)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 py-4 text-[var(--text-muted)] text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
