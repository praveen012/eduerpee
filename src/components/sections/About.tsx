import { Target, Rocket, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useI18n } from "@/i18n/I18nProvider";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To empower businesses with affordable, scalable technology solutions that simplify operations, automate workflows and drive measurable growth.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    body: "To be the most trusted IT partner for SMEs worldwide, known for delivering enterprise-grade solutions at accessible pricing with exceptional support.",
  },
  {
    icon: Sparkles,
    title: "Our Values",
    body: "Customer-first approach, transparent pricing, quality over shortcuts, continuous innovation and unwavering commitment to client success.",
  },
];

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={t.about.eyebrow}
          heading={t.about.heading}
          description={t.about.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-ink-900/10 dark:border-white/10 p-6">
              <p.icon className="h-5 w-5 text-brand-orange" />
              <h3 className="mt-4 font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">
                {p.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
