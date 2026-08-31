import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AINetworkField } from "@/components/common/AINetworkField";
import { Icon } from "@/utils/icon";
import { industries } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export function IndustriesSection() {
  const { t } = useI18n();
  return (
    <section id="industries" className="relative overflow-hidden py-20 sm:py-28 bg-mist-100/60 dark:bg-navy-900/30">
      <AINetworkField className="opacity-[0.18] dark:opacity-60" />
      <Container className="relative">
        <SectionHeader
          eyebrow={t.industries.eyebrow}
          heading={t.industries.heading}
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group flex items-center gap-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm px-4 py-3.5 transition-all duration-300 hover:border-brand-orange/40 hover:shadow-md"
            >
              <Icon name={ind.icon} className="h-4 w-4 shrink-0 text-brand-orange transition-transform duration-300 group-hover:scale-125" />
              <span className="text-[13px] font-medium text-ink-800 dark:text-mist-200">{ind.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
