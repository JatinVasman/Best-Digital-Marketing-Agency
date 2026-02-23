"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Compass, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Target,
    emoji: "🎯",
    title: "Deep Dive",
    desc: "We immerse ourselves in your brand, market, and competition to find the strategic edge.",
  },
  {
    icon: Compass,
    emoji: "📐",
    title: "Blueprint",
    desc: "A detailed action plan with clear milestones, KPIs, and creative direction tailored to your goals.",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Build & Launch",
    desc: "Our designers and developers bring the strategy to life with pixel-perfect execution.",
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Measure & Scale",
    desc: "Real-time tracking, A/B testing, and continuous optimization to compound your results.",
  },
];

export default function MethodologySection() {
  return (
    <section id="methodology" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Our Battle-Tested Process"
          subtitle="How It Works"
        />

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Connecting Line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[var(--primary)]/20 via-[var(--primary)]/40 to-[var(--primary)]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center relative"
              >
                {/* Number circle */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 rounded-full bg-[var(--surface)] border-2 border-[var(--primary)]/20 flex flex-col items-center justify-center transition-all duration-500 hover:border-[var(--primary)] hover:shadow-[0_0_30px_rgba(108,92,231,0.2)]">
                  <span className="text-3xl mb-1">{step.emoji}</span>
                  <span
                    className="text-xs font-bold text-[var(--primary-light)] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Step {index + 1}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-[280px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
