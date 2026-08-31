import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/utils/icon";
import { domainStyles } from "@/utils/domain";
import type { Solution } from "@/types/content";
import { useI18n } from "@/i18n/I18nProvider";

export function SolutionCard({ solution }: { solution: Solution }) {
  const { t, lang } = useI18n();
  const style = domainStyles[solution.domain];

  return (
    <Link
      to={`/${lang}${solution.href}`}
      className={`group relative flex flex-col rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-navy-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5 ${style.ring}`}
    >
      <span className={`flex h-11 w-11 items-center justify-center rounded-md ${style.bg} ${style.text}`}>
        <Icon name={solution.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-[17px] font-semibold text-ink-900 dark:text-mist-100">
        {solution.title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500 dark:text-mist-200/70">
        {solution.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {solution.features.map((f) => (
          <span
            key={f}
            className="rounded border border-ink-900/10 dark:border-white/10 px-2 py-0.5 text-[11px] font-mono text-ink-500 dark:text-mist-200/60"
          >
            {f}
          </span>
        ))}
      </div>
      <span className={`mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium ${style.text}`}>
        {t.solutions.exploreCta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
