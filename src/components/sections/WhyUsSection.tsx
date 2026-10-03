import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLocalizedContent } from "@/data/useLocalizedContent";
import { useI18n } from "@/i18n/I18nProvider";

export function WhyUsSection() {
  const { t } = useI18n();
  const { whyChooseUs } = useLocalizedContent();
  return (
    <section id="why" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={t.why.eyebrow}
          heading={t.why.heading}
          description={t.why.description}
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <div key={item.title} className="flex gap-5">
              <span className="font-mono text-2xl font-semibold text-brand-orange/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[16px] font-semibold text-ink-900 dark:text-mist-100">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
