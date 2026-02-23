"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, Calendar } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogPreview() {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="section-padding section-contained">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Insights & Perspectives"
          subtitle="From Our Blog"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${blog.slug}`} className="block group">
                <div className="card-elevated p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-4">
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3 text-white group-hover:text-[var(--primary-light)] transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {blog.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-2 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-light)] group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
