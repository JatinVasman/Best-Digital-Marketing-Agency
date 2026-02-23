"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "CRM", href: "#crm" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#12100e]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/#hero"
          className="flex items-center gap-2"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              handleNavClick("#hero");
            }
          }}
        >
          <Image
            src="/logo.webp"
            alt="Business Volunteers Logo"
            width={45}
            height={45}
            priority
          />
          <span
            className="text-xl font-bold hidden sm:block"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Business Volunteers
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive =
              link.href.startsWith("#") && activeSection === sectionId;
            return (
              <button
                key={link.label}
                onClick={() => {
                  if (link.href.startsWith("/")) {
                    window.location.href = link.href;
                  } else {
                    handleNavClick(link.href);
                  }
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[var(--primary)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          className="hidden md:block btn-primary text-sm !py-3 !px-6"
          onClick={() => handleNavClick("#contact")}
        >
          Get a Free Consultation
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#12100e]/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.href.startsWith("/")) {
                      window.location.href = link.href;
                    } else {
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-left text-lg py-3 px-4 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                className="btn-primary mt-4 text-center justify-center"
                onClick={() => handleNavClick("#contact")}
              >
                Get a Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
