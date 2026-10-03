import { useParams, Navigate, Link } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { FooterCTA } from "@/components/sections/FooterCTA";
import type { BlogBlock } from "@/data/blogPosts";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { useI18n } from "@/i18n/I18nProvider";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlockRenderer({ block, lang }: { block: BlogBlock; lang: string }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 font-display text-xl font-semibold text-ink-900 dark:text-mist-100 first:mt-0">
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="mt-7 font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-600 dark:text-mist-200/75">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-brand-orange" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "flow":
      return (
        <p className="mt-5 rounded-md border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.03] dark:bg-white/[0.04] px-4 py-3 font-mono text-[12.5px] leading-relaxed text-ink-700 dark:text-mist-200/80">
          {block.text}
        </p>
      );
    case "links":
      return (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-900/10 dark:border-white/10 pt-6">
          {block.items.map((link) => (
            <Link
              key={link.href}
              to={`/${lang}${link.href}`}
              className="rounded-md bg-ink-900/5 dark:bg-white/8 px-3 py-1.5 text-[12.5px] font-medium text-ink-700 dark:text-mist-200/80 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      );
  }
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const post = getBlogPostBySlug(slug ?? "");

  if (!post) return <Navigate to={`/${lang}/404`} replace />;

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: "EduErpee Technology Private Limited", url: "https://www.eduerpee.com" },
          mainEntityOfPage: `https://www.eduerpee.com/${lang}/blog/${post.slug}`,
        }}
      />
      <PageHero eyebrow={post.category} title={post.title} description={post.description} />
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="flex items-center gap-2 text-[12.5px] text-ink-500 dark:text-mist-200/55">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-2">
              {post.body.map((block, i) => (
                <BlockRenderer key={i} block={block} lang={lang} />
              ))}
            </div>
            <div className="mt-10 border-t border-ink-900/10 dark:border-white/10 pt-6">
              <Link
                to={`/${lang}/blog`}
                className="text-[12.5px] text-ink-500 dark:text-mist-200/60 hover:text-brand-orange"
              >
                ← Back to all articles
              </Link>
            </div>
          </article>

          <aside className="rounded-lg border border-ink-900/10 dark:border-white/10 p-6 h-fit">
            <h3 className="font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">
              Ready to Build a Smarter Business?
            </h3>
            <p className="mt-2 text-[13px] text-ink-500 dark:text-mist-200/70">
              Let's discuss your business requirements and build a solution designed around your workflow.
            </p>
            <CTAButton href={`/${lang}/contact`} className="mt-5 w-full justify-center">
              Book Free Demo
            </CTAButton>
          </aside>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
