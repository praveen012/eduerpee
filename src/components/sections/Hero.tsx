import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { Container } from "@/components/common/Container";
import { BlueprintField } from "@/components/common/BlueprintField";
import { Globe } from "@/components/common/Globe";
import { useI18n } from "@/i18n/I18nProvider";
import { useLocalizedContent } from "@/data/useLocalizedContent";
import { trackEvent } from "@/utils/analytics";

export function Hero() {
  const { t, lang } = useI18n();
  const { trustStats } = useLocalizedContent();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -50]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 0.92]);
  const visualOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const floatingBadges = [
    { label: "AI & Automation", top: "6%", left: "4%", delay: 0 },
    { label: "Cloud-Native", top: "66%", left: "-2%", delay: 0.6 },
    { label: "Custom ERP", top: "40%", left: "82%", delay: 1.2 },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-950">
      <BlueprintField tag="SYS. 01 — GLOBAL DELIVERY" />

      <Container className="relative pt-14 pb-10 sm:pt-18 sm:pb-14 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Left — copy, left-aligned on desktop for an asymmetric, more
              dynamic composition than the old centered-stack layout. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-[620px] text-center lg:text-left"
          >
            <span
              className="inline-flex items-center gap-2 font-body text-[13px]"
              style={{ color: "var(--color-graphite)" }}
            >
              <span className="h-[5px] w-[5px] rounded-full" style={{ background: "var(--color-copper)" }} />
              {t.hero.eyebrow}
            </span>
            <h1
              className="mt-5 font-display text-[32px] sm:text-[44px] lg:text-[54px] font-semibold leading-[1.1] tracking-tight"
              style={{ color: "var(--color-vellum)" }}
            >
              {t.hero.headlinePart1} {t.hero.headlinePart2}{" "}
              <span style={{ color: "var(--color-copper)" }}>{t.hero.headlinePart3}</span>
            </h1>
            <p className="mt-7 text-[15.5px] sm:text-[16.5px] leading-[1.65]" style={{ color: "var(--color-graphite)" }}>
              {t.hero.subhead}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <CTAButton
                href={`/${lang}/contact`}
                size="lg"
                className="!rounded-full !bg-[var(--color-copper)] hover:!bg-[var(--color-copper-dim)]"
                onClick={() => trackEvent("cta_click", { cta: "hero_start_project" })}
              >
                {t.hero.ctaPrimary}
              </CTAButton>
              <CTAButton
                href={`/${lang}/solutions`}
                size="lg"
                variant="ghost"
                icon={false}
                className="!rounded-full !border-white/15 hover:!border-[var(--color-copper)]"
                onClick={() => trackEvent("cta_click", { cta: "hero_explore_solutions" })}
              >
                {t.hero.ctaSecondary}
              </CTAButton>
            </div>
          </motion.div>

          {/* Right — the globe. Kept as the hero visual per confirmed
              direction (the sunburst/stat-badge treatment was tried and
              reverted). */}
          <motion.div
            style={{
              ...(reducedMotion ? {} : { y: visualY, scale: visualScale, opacity: visualOpacity }),
            }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[460px] px-1 py-4 sm:px-2"
          >
            {!reducedMotion &&
              floatingBadges.map((b) => (
                <motion.span
                  key={b.label}
                  className="absolute z-10 hidden items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-medium lg:inline-flex"
                  style={{
                    top: b.top,
                    left: b.left,
                    background: "rgba(7,11,20,0.85)",
                    borderColor: "color-mix(in srgb, var(--color-copper) 35%, transparent)",
                    color: "var(--color-vellum)",
                    backdropFilter: "blur(4px)",
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                >
                  <span className="h-[5px] w-[5px] rounded-full" style={{ background: "var(--color-cyanotype)" }} />
                  {b.label}
                </motion.span>
              ))}
            <Globe />
          </motion.div>
        </div>
      </Container>

      {/* Full-width trust strip — a flat band of real achievements with a
          checkmark each, rather than another row of big animated stat
          numbers, so the hero ends on a calm, scannable note. */}
      <div className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(5,8,15,0.55)" }}>
        <Container className="flex flex-col flex-wrap items-center gap-x-10 gap-y-4 py-5 sm:flex-row">
          <span className="font-body text-[13px] font-medium tracking-tight" style={{ color: "var(--color-vellum)" }}>
            What Sets Us Apart
          </span>
          <span className="hidden h-4 w-px sm:block" style={{ background: "rgba(255,255,255,0.14)" }} />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-start">
            {trustStats.slice(0, 4).map((s) => (
              <span key={s.label} className="inline-flex items-center gap-2 whitespace-nowrap text-[13.5px]" style={{ color: "var(--color-graphite)" }}>
                <Check className="h-[15px] w-[15px] shrink-0" style={{ color: "var(--color-cyanotype)" }} />
                <span style={{ color: "var(--color-vellum)" }}>{s.value}</span> {s.label}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
