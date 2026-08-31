import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AINetworkField } from "@/components/common/AINetworkField";
import { Icon } from "@/utils/icon";
import { techStack } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export function TechStackSection() {
  const { t } = useI18n();
  return (
    <section id="technologies" className="relative overflow-hidden py-20 sm:py-28 bg-navy-950">
      <AINetworkField className="opacity-70" />
      <Container className="relative">
        <SectionHeader
          eyebrow={t.technologies.eyebrow}
          heading={t.technologies.heading}
          description={t.technologies.description}
          light
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((cat) => (
            <div
              key={cat.category}
              className="group rounded-lg border border-white/10 bg-navy-950/90 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-orange/40"
            >
              <div className="flex items-center gap-2">
                <Icon name={cat.icon} className="h-4 w-4 text-brand-orange transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist-200/60">
                  {cat.category}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-[13px] text-mist-200/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
