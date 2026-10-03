import { Link } from "react-router-dom";
import { Icon } from "@/utils/icon";
import type { Service } from "@/types/content";
import { useI18n } from "@/i18n/I18nProvider";

const categoryColor: Record<Service["category"], string> = {
  development: "text-domain-enterprise bg-domain-enterprise/10",
  ai: "text-domain-ai bg-domain-ai/10",
  cloud: "text-domain-cloud bg-domain-cloud/10",
  design: "text-domain-design bg-domain-design/10",
  marketing: "text-domain-marketing bg-domain-marketing/10",
  security: "text-domain-security bg-domain-security/10",
  outsourcing: "text-pink-500 bg-pink-500/10",
  consulting: "text-domain-enterprise bg-domain-enterprise/10",
};

export function ServiceCard({ service }: { service: Service }) {
  const { lang } = useI18n();
  return (
    <Link
      to={`/${lang}${service.href}`}
      className="group flex items-start gap-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-navy-900 p-5 transition-colors hover:border-brand-orange/40"
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${categoryColor[service.category]}`}>
        <Icon name={service.icon} className="h-[18px] w-[18px]" />
      </span>
      <div>
        <h3 className="font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">
          {service.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500 dark:text-mist-200/70">
          {service.description}
        </p>
      </div>
    </Link>
  );
}
