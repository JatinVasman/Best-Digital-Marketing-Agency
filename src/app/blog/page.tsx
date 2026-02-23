import Link from "next/link";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { blogs } from "@/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Insights & Perspectives | Business Volunteers",
  description:
    "Tips, trends, and strategies in digital marketing, branding, web development, and social media from the Business Volunteers team.",
  alternates: {
    canonical: "https://businessvolunteers.online/blog",
  },
  openGraph: {
    title: "Blog — Insights & Perspectives | Business Volunteers",
    description:
      "Tips, trends, and strategies in digital marketing, branding, web development, and social media.",
    url: "https://businessvolunteers.online/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p
            className="text-sm uppercase tracking-[3px] text-[var(--primary-light)] mb-4 font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            From Our Blog
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Insights & Perspectives
          </h1>
          <p className="text-lg text-[var(--text-muted)]">
            Tips, trends, and strategies to grow your business in the digital
            age.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="space-y-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="block group"
            >
              <article className="card-elevated p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                  <h2
                    className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[var(--primary-light)] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {blog.title}
                  </h2>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="shrink-0 self-center">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-light)] group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
