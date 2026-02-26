import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Business Volunteers Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://bestmarketingagency.online/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://bestmarketingagency.online/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: ["/logo.webp"],
    },
  };
}

function BlogPostingSchema({ blog }: { blog: (typeof blogs)[0] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: "Business Volunteers",
      url: "https://bestmarketingagency.online",
    },
    publisher: {
      "@type": "Organization",
      name: "Business Volunteers",
      logo: {
        "@type": "ImageObject",
        url: "https://bestmarketingagency.online/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bestmarketingagency.online/blog/${blog.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content.split("\n\n");

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <BlogPostingSchema blog={blog} />

      <article className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
              <Calendar size={16} />
              {blog.date}
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {blog.title}
            </h1>
            <p className="text-lg text-[var(--primary-light)] leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-12" />

          {/* Content */}
          <div className="prose-custom space-y-6">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-[var(--text-muted)] leading-[1.8] text-base md:text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-[var(--surface)] border border-white/10 text-center">
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to grow your business?
            </h3>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              Let Business Volunteers handle your digital marketing while you
              focus on what you do best.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex">
              Get a Free Consultation
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More from our blog
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogs
                .filter((b) => b.slug !== blog.slug)
                .slice(0, 2)
                .map((relatedBlog) => (
                  <Link
                    key={relatedBlog.slug}
                    href={`/blog/${relatedBlog.slug}`}
                    className="card-elevated p-5 group block"
                  >
                    <h4 className="font-semibold text-sm group-hover:text-[var(--primary-light)] transition-colors line-clamp-2 mb-2">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      {relatedBlog.date}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
