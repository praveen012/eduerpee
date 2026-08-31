import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { testimonials } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export default function CaseStudiesPage() {
  const { t } = useI18n();
  return (
    <>
      <SEO
        title="Case Studies & Client Success Stories"
        description="Real results from EduErpee clients across e-commerce, real estate, wholesale, interior design and education."
        path="/case-studies"
      />
      <PageHero eyebrow={t.caseStudies.eyebrow} title={t.caseStudies.heading} />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </Container>
      </section>
      <FooterCTA />
    </>
  );
}
