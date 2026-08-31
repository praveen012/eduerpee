import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { FooterCTA } from "@/components/sections/FooterCTA";

const categories = [
  "AI & Automation", "ERP", "Software Development", "Cloud & DevOps",
  "Cybersecurity", "Digital Transformation", "Business Technology",
  "Mobile Apps", "Web Development", "SaaS",
];

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog"
        description="Insights on ERP, AI, cloud, cybersecurity and digital transformation from EduErpee Technology."
        path="/blog"
      />
      <PageHero
        eyebrow="Insights"
        title="Business Technology, Explained"
        description="The blog architecture is CMS-ready — connect a headless CMS or database via the /api layer to publish articles. Categories below are wired for filtering once posts are populated."
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
          <div className="mt-10 rounded-lg border border-dashed border-ink-900/15 dark:border-white/15 p-10 text-center">
            <p className="text-[13.5px] text-ink-500 dark:text-mist-200/60">
              No articles published yet. Connect a CMS or database to <code className="font-mono text-[12px]">src/services/blog.ts</code> to populate this page.
            </p>
          </div>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
