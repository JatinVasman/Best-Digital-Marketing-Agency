import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/thebusinessvolunteers/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/people/Business-Volunteers/61579138254807/",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/business-volunteers1",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@TheBusinessVolunteers",
    label: "YouTube",
  },
  { icon: Twitter, href: "https://x.com/Business8920", label: "X (Twitter)" },
];

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "About Us", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
  { label: "Social Gallery", href: "/portfolio" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0c0a] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.webp"
                alt="Business Volunteers Logo"
                width={40}
                height={40}
              />
              <span
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Business Volunteers
              </span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
              Best Marketing Agency — turning attention into revenue through
              data-driven digital marketing.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-6 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[var(--text-muted)] text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-6 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-[var(--primary)] mt-1 shrink-0"
                />
                <a
                  href="mailto:contact.businessvolunteers@gmail.com"
                  className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  contact.businessvolunteers@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-[var(--primary)] mt-1 shrink-0"
                />
                <a
                  href="tel:+918586989832"
                  className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  +91 85869 89832
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[var(--primary)] mt-1 shrink-0"
                />
                <a
                  href="https://maps.app.goo.gl/EpeFsJs9NPm7aRFG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  Noida Sec 62, Noida 201309
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-6 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Find Us
            </h4>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.389!2d77.3600!3d28.6279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456!2sNoida%20Sector%2062!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Volunteers Office Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Business Volunteers. All rights
            reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            India&apos;s Best Marketing Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
