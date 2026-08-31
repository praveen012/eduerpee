import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AINetworkField } from "@/components/common/AINetworkField";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { solutions } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export function SolutionsSection() {
  const { t } = useI18n();
  return (
    <section id="solutions" className="relative overflow-hidden py-20 sm:py-28 bg-mist-100/60 dark:bg-navy-900/30">
      <AINetworkField count={16} className="opacity-[0.15] dark:opacity-50" />
      <Container className="relative">
        <SectionHeader
          eyebrow={t.solutions.eyebrow}
          heading={t.solutions.heading}
          description={t.solutions.description}
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.id} solution={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
