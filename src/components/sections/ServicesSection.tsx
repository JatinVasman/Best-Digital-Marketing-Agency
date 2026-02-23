"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Share2,
  Globe,
  BarChart3,
  Palette,
  Presentation,
  Hexagon,
  Film,
  Video,
  Users,
  BookOpen,
  MessageCircle,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Building scroll-stopping content strategies that grow communities and drive meaningful engagement across every platform.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance, mobile-first websites engineered for conversions, speed, and an unforgettable user experience.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Transforming raw numbers into strategic clarity — understand what works, what doesn't, and where to double down.",
  },
  {
    icon: Palette,
    title: "Graphic & Poster Design",
    desc: "Bold, contemporary visuals that capture attention in milliseconds and communicate your message with precision.",
  },
  {
    icon: Presentation,
    title: "Presentation Design",
    desc: "Investor-ready pitch decks and corporate presentations that tell compelling stories and close deals.",
  },
  {
    icon: Hexagon,
    title: "Logo Design",
    desc: "Distinctive brand marks engineered for recognition, versatility, and emotional connection.",
  },
  {
    icon: Film,
    title: "Video Editing",
    desc: "Cinematic reels, explainers, and brand films edited to perfection — content that people actually watch till the end.",
  },
  {
    icon: Video,
    title: "UGC Videos",
    desc: "Raw, authentic creator-style content that feels real, builds trust, and outperforms polished ads.",
  },
  {
    icon: Users,
    title: "CRM Solutions",
    desc: "Intelligent customer relationship systems that automate follow-ups, track behavior, and maximize lifetime value.",
  },
  {
    icon: BookOpen,
    title: "Brochure Design",
    desc: "Print-ready and digital brochures that weave your brand narrative into every page with elegance.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Setup",
    desc: "Complete WhatsApp Business configuration — catalogs, auto-replies, and seamless customer messaging workflows.",
  },
  {
    icon: Search,
    title: "Google Business Setup",
    desc: "Fully optimized Google Business profiles to dominate local search and attract nearby customers on autopilot.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="What We Bring to the Table"
          subtitle="Our Expertise"
        />

        {/* Uniform Grid — all cards same size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="card-elevated p-6 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(232, 93, 58, 0.1)",
                  }}
                >
                  <Icon size={24} className="text-[var(--primary)]" />
                </div>
                <h3
                  className="text-lg font-bold mb-3 text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
