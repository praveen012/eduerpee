import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@/utils/icon";
import { RobotIllustration } from "./RobotIllustration";
import { ConnectorLines } from "./ConnectorLines";
import { ServiceCard2D } from "./ServiceCard2D";
import { heroCards } from "./heroEcosystemLayout";
import { useBreakpointTier } from "@/hooks/useBreakpointTier";
import { trackEvent } from "@/utils/analytics";

export function HeroEcosystem({ lang }: { lang: string }) {
  const tier = useBreakpointTier();

  if (tier === "mobile") {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[220px]">
          <RobotIllustration className="h-auto w-full" />
        </div>
        <ul className="mt-6 flex w-full flex-col gap-2">
          {heroCards.map((card, i) => (
            <motion.li
              key={card.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Link
                to={`/${lang}${card.node.href}`}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 active:bg-white/[0.06]"
                style={{ borderLeftColor: card.node.color, borderLeftWidth: 3 }}
                onClick={() => trackEvent("hero_service_click", { service: card.node.id, layout: "mobile_list" })}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                  style={{ background: `${card.node.color}22`, color: card.node.color }}
                >
                  <Icon name={card.node.icon} className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-mist-100">{card.node.label}</div>
                  <div className="truncate text-[11px] text-mist-200/55">{card.node.description}</div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl">
      <ConnectorLines />
      {heroCards.map((card, i) => (
        <ServiceCard2D key={card.id} node={card.node} layout={card} lang={lang} delay={0.15 + i * 0.05} />
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute left-1/2 top-[6%] w-[30%] aspect-[3/4] -translate-x-1/2"
      >
        <RobotIllustration className="h-full w-full" />
      </motion.div>
    </div>
  );
}
