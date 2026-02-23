"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const services = [
  "Social Media Management",
  "Website Development",
  "Data Analytics",
  "Graphic & Poster Design",
  "Presentation Design",
  "Logo Design",
  "Video Editing",
  "UGC Videos",
  "CRM Solutions",
  "Brochure Design",
  "WhatsApp Business Setup",
  "Google Business Setup",
  "Other",
];

export default function ContactSection() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setFormState("success");
      setFormData({ name: "", email: "", service: "", message: "" });

      // Redirect to WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Hi! I'm ${formData.name}. I'm interested in ${formData.service || "your services"}. ${formData.message}`,
      );
      setTimeout(() => {
        window.open(
          `https://wa.me/918586989832?text=${whatsappMessage}`,
          "_blank",
        );
      }, 1500);
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Ready to Grow? Let's Connect."
          subtitle="Contact Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
                  <a
                    href="mailto:contact.businessvolunteers@gmail.com"
                    className="text-white hover:text-[var(--primary-light)] transition-colors"
                  >
                    contact.businessvolunteers@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">Phone</p>
                  <a
                    href="tel:+918586989832"
                    className="text-white hover:text-[var(--primary-light)] transition-colors"
                  >
                    +91 85869 89832
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">
                    Office
                  </p>
                  <p className="text-white">Noida Sec 62, Noida 201309</p>
                  <p className="text-[var(--text-muted)] text-sm">
                    Delhi NCR, India
                  </p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.389!2d77.3600!3d28.6279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456!2sNoida%20Sector%2062!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business Volunteers Office"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm text-[var(--text-muted)] mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-white/10 text-white placeholder:text-[var(--text-muted)]/50 focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm text-[var(--text-muted)] mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-white/10 text-white placeholder:text-[var(--text-muted)]/50 focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-sm text-[var(--text-muted)] mb-2"
                >
                  Service
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-white/10 text-white focus:border-[var(--primary)] focus:outline-none transition-colors appearance-none"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm text-[var(--text-muted)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-white/10 text-white placeholder:text-[var(--text-muted)]/50 focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === "loading"}
                className="btn-primary w-full justify-center !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Inquiry
                  </>
                )}
              </button>

              {formState === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={18} />
                  Message sent! Redirecting to WhatsApp...
                </div>
              )}

              {formState === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={18} />
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
