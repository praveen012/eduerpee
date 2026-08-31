import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CTAButton } from "@/components/common/CTAButton";
import { Container } from "@/components/common/Container";
import { StatsCounter } from "@/components/common/StatsCounter";
import { HeroEcosystem } from "@/components/hero-flat/HeroEcosystem";
import { useI18n } from "@/i18n/I18nProvider";
import { trustStats } from "@/data/content";
import { trackEvent } from "@/utils/analytics";

export function Hero() {
  const { t, lang } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const robotY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -50]);
  const robotScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 0.92]);
  const robotOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 -left-56 h-[380px] w-[380px] rounded-full bg-domain-ai/10 blur-[110px]" />

      <Container className="relative pt-10 sm:pt-14 lg:pt-16">
        <motion.div
          style={reducedMotion ? undefined : { y: robotY, scale: robotScale, opacity: robotOpacity }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full px-1 sm:px-2 lg:px-3"
        >
          <HeroEcosystem lang={lang} />
        </motion.div>
      </Container>

      <Container className="relative pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mx-auto mt-4 sm:mt-6 lg:mt-8 max-w-[900px] text-center"
        >
          <span className="eyebrow text-brand-orange">{t.hero.eyebrow}</span>
          <h1 className="mx-auto mt-5 max-w-[900px] font-display text-[32px] sm:text-[44px] lg:text-[60px] font-semibold leading-[1.1] tracking-tight">
            <span className="text-white">{t.hero.headlinePart1} </span>
            <span className="text-brand-orange">{t.hero.headlinePart2} </span>
            <span className="text-white">{t.hero.headlinePart3}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[820px] text-[15.5px] sm:text-[16.5px] leading-[1.65] text-mist-200/75">
            {t.hero.subhead}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CTAButton
              href={`/${lang}/contact`}
              size="lg"
              onClick={() => trackEvent("cta_click", { cta: "hero_start_project" })}
            >
              {t.hero.ctaPrimary}
            </CTAButton>
            <CTAButton
              href={`/${lang}/solutions`}
              size="lg"
              variant="ghost"
              icon={false}
              onClick={() => trackEvent("cta_click", { cta: "hero_explore_solutions" })}
            >
              {t.hero.ctaSecondary}
            </CTAButton>
          </div>
        </motion.div>

        <div className="mx-auto mt-14 sm:mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-5">
          {trustStats.map((s) => (
            <StatsCounter key={s.label} value={s.value} label={s.label} light />
          ))}
        </div>
      </Container>
    </section>
  );
}
