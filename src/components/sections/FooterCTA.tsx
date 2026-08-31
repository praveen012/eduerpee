import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { useI18n } from "@/i18n/I18nProvider";
import { trackEvent } from "@/utils/analytics";

export function FooterCTA() {
  const { lang, t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-brand-orange py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-xl">
          {t.footerCta.heading}
        </h2>
        <p className="max-w-lg text-[15px] text-white/85">{t.footerCta.description}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <CTAButton
            href={`/${lang}/contact`}
            variant="ghost"
            size="lg"
            onClick={() => trackEvent("cta_click", { cta: "footer_start_project" })}
          >
            {t.footerCta.primary}
          </CTAButton>
          <CTAButton
            href={`/${lang}/contact`}
            size="lg"
            icon={false}
            className="bg-navy-950 text-white hover:bg-navy-900"
            onClick={() => trackEvent("cta_click", { cta: "footer_talk_to_expert" })}
          >
            {t.footerCta.secondary}
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
