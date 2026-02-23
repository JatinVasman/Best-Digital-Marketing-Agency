"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { Gift, UserCheck, PartyPopper, BarChart3 } from "lucide-react";

const crmSteps = [
  {
    image: "/CRM/1.webp",
    title: "Collect Customer Data",
    desc: "Gather customer details, birthdays, anniversaries & preferences at every touchpoint seamlessly.",
    color: "from-[#e85d3a] to-[#f4845f]",
  },
  {
    image: "/CRM/2.webp",
    title: "Segment & Analyze",
    desc: "Automatically categorize customers by behavior, visit frequency & spending patterns with AI.",
    color: "from-[#f4845f] to-[#e2b74b]",
  },
  {
    image: "/CRM/3.webp",
    title: "Automate Campaigns",
    desc: "Trigger personalized messages, offers & follow-ups based on customer activity & events.",
    color: "from-[#e2b74b] to-[#e85d3a]",
  },
  {
    image: "/CRM/4.webp",
    title: "Track & Optimize",
    desc: "Monitor campaign performance, redemption rates & ROI with real-time analytics dashboards.",
    color: "from-[#e85d3a] to-[#c23616]",
  },
];

const crmServices = [
  {
    icon: Gift,
    title: "Personalized Occasions",
    desc: "Automated birthday and anniversary wishes that make customers feel valued and drive them back to your brand.",
  },
  {
    icon: UserCheck,
    title: "Smart Retention",
    desc: "Intelligent follow-ups for dormant or lost customers, turning inactive leads into loyal repeat buyers.",
  },
  {
    icon: PartyPopper,
    title: "Festive Promos",
    desc: "Seasonal campaigns with trackable coupon redemption systems to maximize ROI during peak periods.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    desc: "Advanced segmentation and history tracking to understand exactly what makes your customers buy.",
  },
];

export default function CRMSection() {
  return (
    <section id="crm" className="section-padding relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeading
          title="Revenue-First CRM Solutions"
          subtitle="Customer Relationships"
        />

        {/* Vertical Steps Design */}
        <div className="space-y-24 mt-16">
          {crmSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-3xl" />

                  {/* Floating Number */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center font-heading text-xl font-bold text-white">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <h3 className="text-3xl lg:text-4xl font-bold font-heading text-white">
                  {step.title}
                </h3>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-lg">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crmServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--surface)] border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon size={28} className="text-[var(--primary)]" />
              </div>
              <h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[var(--primary-light)] transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-16 rounded-[40px] bg-gradient-to-br from-[var(--surface)] to-[var(--background)] border border-white/10 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]" />
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Ready to <span className="gradient-text">Automate</span> Your
            Growth?
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
            Stop losing customers to complexity. Our CRM solutions turn data
            into a revenue-generating machine.
          </p>
          <a href="#contact" className="btn-primary">
            Get Started with CRM
          </a>
        </motion.div>
      </div>
    </section>
  );
}
