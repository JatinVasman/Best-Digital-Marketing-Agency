"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    business: "Taste of Punjab",
    role: "Owner",
    quote:
      "We were skeptical about digital marketing for a restaurant. Business Volunteers changed our mind completely. Their reels brought actual footfall — one video alone drove more walk-ins in a week than we had the entire previous month. They truly understand food marketing.",
  },
  {
    name: "Priya Malhotra",
    business: "Priya's Boutique",
    role: "Founder",
    quote:
      "My Instagram went from being a dead page to a genuine sales channel. They designed a cohesive brand look, started posting consistently, and now I receive daily DMs asking about products. Their patience with feedback is incredible — they treat my business like their own.",
  },
  {
    name: "Ankit Verma",
    business: "FitZone Gym",
    role: "Director",
    quote:
      "I had burnt through ₹20K on self-managed ads with zero leads. Business Volunteers restructured my campaigns from scratch — proper targeting, sharp creatives, clear funnels. Now I consistently get 8-10 qualified leads daily. The performance dashboard they provide is a game-changer.",
  },
  {
    name: "Sonya Mehta",
    business: "Decor by Sonya Mehta",
    role: "Founder",
    quote:
      "The website they built for my interior design studio is absolutely stunning. Every project page feels luxurious, and potential clients have told me the site itself convinced them to book a consultation. It has become my most powerful sales tool.",
  },
  {
    name: "Vikram Joshi",
    business: "Vasoo Bamboo Arts",
    role: "CEO",
    quote:
      "As a traditional artisan business, we never thought a website could drive sales for us. Business Volunteers built something elegant and simple that reflects our craft perfectly. Now we rank on Google for bamboo products and receive orders from across India.",
  },
  {
    name: "Neha Kapoor",
    business: "Layers Clothing",
    role: "Marketing Head",
    quote:
      "Our previous website was clunky and outdated. The redesign Business Volunteers delivered is clean, fast, and mobile-first. Online orders have jumped significantly since launch. Their understanding of e-commerce UX is impressive.",
  },
  {
    name: "Dr. Manish Thakur",
    business: "PhysioLife Clinic",
    role: "Owner",
    quote:
      "Patient acquisition was entirely word-of-mouth before. Business Volunteers set up our Google profile properly, ran hyper-local campaigns, and created educational content. In three months, daily appointments went from 5 to a consistent 14. Remarkable transformation.",
  },
  {
    name: "Dr. Kavita Rao",
    business: "SmileCare Dental",
    role: "Director",
    quote:
      "Starting from zero social media presence to receiving 20+ patient inquiries weekly — that is what Business Volunteers achieved for us. Their ability to market a medical practice authentically, without it feeling salesy, sets them apart from every other agency we spoke with.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-[var(--accent)] fill-[var(--accent)]"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Don't Take Our Word for It"
          subtitle="Client Voices"
        />

        <div className="masonry-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-elevated p-6"
            >
              <Stars />
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] font-bold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {testimonial.role}, {testimonial.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
