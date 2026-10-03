import { useMemo } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import {
  solutions as baseSolutions,
  services as baseServices,
  industries as baseIndustries,
  processSteps as baseProcessSteps,
  testimonials as baseTestimonials,
  team as baseTeam,
  trustStats as baseTrustStats,
  whyChooseUs as baseWhyChooseUs,
} from "@/data/content";
import { contentTranslations } from "@/data/contentTranslations";
import type { Solution, Service, Industry, ProcessStep, Testimonial, TeamMember } from "@/types/content";

/**
 * English (content.ts) is the single source of truth for shape/ids/icons/hrefs.
 * This hook overlays the current language's translated strings (title,
 * description, features, bio, etc. — never ids, icons, hrefs or brand/person
 * names) from contentTranslations.ts on top of it. Any item or field missing
 * a translation silently falls back to English, so a partial translation
 * never breaks the page.
 */
export function useLocalizedContent() {
  const { lang } = useI18n();

  return useMemo(() => {
    const t = contentTranslations[lang];

    const solutions: Solution[] = baseSolutions.map((s) => {
      const o = t?.solutions[s.id];
      return o ? { ...s, title: o.title, description: o.description, features: o.features } : s;
    });

    const services: Service[] = baseServices.map((s) => {
      const o = t?.services[s.id];
      return o ? { ...s, title: o.title, description: o.description } : s;
    });

    const industries: Industry[] = baseIndustries.map((i) => {
      const o = t?.industries[i.id];
      return o ? { ...i, title: o.title } : i;
    });

    const processSteps: ProcessStep[] = baseProcessSteps.map((p) => {
      const o = t?.processSteps[String(p.step)];
      return o ? { ...p, title: o.title, description: o.description } : p;
    });

    const testimonials: Testimonial[] = baseTestimonials.map((item) => {
      const o = t?.testimonials[item.id];
      return o ? { ...item, quote: o.quote, industry: o.industry, solution: o.solution } : item;
    });

    const team: TeamMember[] = baseTeam.map((m) => {
      const o = t?.team[m.id];
      return o ? { ...m, role: o.role, bio: o.bio } : m;
    });

    const trustStats = baseTrustStats.map((stat, i) => {
      const o = t?.trustStats[String(i)];
      return o ? { ...stat, label: o.label } : stat;
    });

    const whyChooseUs = baseWhyChooseUs.map((item, i) => {
      const o = t?.whyChooseUs[String(i)];
      return o ? { ...item, title: o.title, description: o.description } : item;
    });

    return { solutions, services, industries, processSteps, testimonials, team, trustStats, whyChooseUs };
  }, [lang]);
}
