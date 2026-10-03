import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { useLocalizedContent } from "@/data/useLocalizedContent";
import { useI18n } from "@/i18n/I18nProvider";
import type { Service } from "@/types/content";

const tabs: { key: Service["category"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI" },
  { key: "cloud", label: "Cloud & Azure" },
  { key: "development", label: "Development" },
  { key: "outsourcing", label: "Staff Augmentation" },
  { key: "design", label: "Design" },
  { key: "marketing", label: "Marketing" },
  { key: "security", label: "Security & Support" },
  { key: "consulting", label: "Consulting" },
];

export function ServicesSection() {
  const { t } = useI18n();
  const { services } = useLocalizedContent();
  const [active, setActive] = useState<Service["category"] | "all">("all");
  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={t.services.eyebrow} heading={t.services.heading} />

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                active === tab.key
                  ? "bg-brand-orange text-white"
                  : "bg-ink-900/5 dark:bg-white/8 text-ink-700 dark:text-mist-200/80 hover:bg-ink-900/10 dark:hover:bg-white/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
