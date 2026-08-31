import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { processSteps } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export function ProcessSection() {
  const { t } = useI18n();
  return (
    <section className="py-20 sm:py-28 bg-mist-100/60 dark:bg-navy-900/30">
      <Container>
        <SectionHeader eyebrow={t.process.eyebrow} heading={t.process.heading} />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-5">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < processSteps.length - 1 && (
                <div className="hidden sm:block absolute top-4 left-[calc(50%+22px)] w-[calc(100%-22px)] h-px bg-ink-900/10 dark:bg-white/15" />
              )}
              <div className="flex sm:flex-col items-start sm:items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange font-mono text-xs font-semibold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-[14.5px] font-semibold text-ink-900 dark:text-mist-100">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
