import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTAButton } from "@/components/common/CTAButton";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export function TestimonialsSection() {
  const { t, lang } = useI18n();
  return (
    <section id="customers" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow={t.testimonials.eyebrow} heading={t.testimonials.heading} />
          <CTAButton href={`/${lang}/case-studies`} variant="secondary" size="md">
            {t.testimonials.viewAll}
          </CTAButton>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((tm) => (
            <TestimonialCard key={tm.id} testimonial={tm} />
          ))}
        </div>
      </Container>
    </section>
  );
}
