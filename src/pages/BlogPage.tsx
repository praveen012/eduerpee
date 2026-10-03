import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { blogPosts } from "@/data/blogPosts";
import { useLocalizedBlogPosts } from "@/data/useLocalizedBlogPost";
import { useI18n } from "@/i18n/I18nProvider";

const categories = [
  "AI & Automation", "ERP", "Software Development", "Cloud & DevOps",
  "Cybersecurity", "Digital Transformation", "Business Technology",
  "Mobile Apps", "Web Development", "SaaS",
];

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  const { lang } = useI18n();
  const localizedPosts = useLocalizedBlogPosts();

  return (
    <>
      <SEO
        title="Blog"
        description="Insights on ERP, AI, cloud, cybersecurity and digital transformation from EduErpee Technology."
        path="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "EduErpee Technology Blog",
          url: "https://www.eduerpee.com/en/blog",
          description: "Insights on ERP, AI, cloud, cybersecurity and digital transformation from EduErpee Technology.",
          publisher: { "@type": "Organization", name: "EduErpee Technology Private Limited", url: "https://www.eduerpee.com" },
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            url: `https://www.eduerpee.com/en/blog/${p.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Insights"
        title="Business Technology, Explained"
        description="Practical articles on ERP, AI automation, cloud and digital transformation for growing businesses."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-md bg-ink-900/5 dark:bg-white/8 px-3.5 py-1.5 text-[13px] font-medium text-ink-700 dark:text-mist-200/80">
                {c}
              </span>
            ))}
          </div>

          {localizedPosts.length === 0 ? (
            <div className="mt-10 rounded-lg border border-dashed border-ink-900/15 dark:border-white/15 p-10 text-center">
              <p className="text-[13.5px] text-ink-500 dark:text-mist-200/60">
                No articles published yet. Connect a CMS or database to <code className="font-mono text-[12px]">src/services/blog.ts</code> to populate this page.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {localizedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/${lang}/blog/${post.slug}`}
                  className="group flex flex-col rounded-lg border border-ink-900/10 dark:border-white/10 p-6 transition-colors hover:border-brand-orange"
                >
                  <span className="inline-flex w-fit items-center rounded-md bg-ink-900/5 dark:bg-white/8 px-2.5 py-1 text-[11.5px] font-medium text-ink-700 dark:text-mist-200/80">
                    {post.category}
                  </span>
                  <h2 className="mt-4 font-display text-lg font-semibold leading-snug text-ink-900 dark:text-mist-100 group-hover:text-brand-orange">
                    {post.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-[12px] text-ink-500 dark:text-mist-200/55">
                    <span>{formatDate(post.date, lang)} · {post.readTime}</span>
                    <ArrowRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
