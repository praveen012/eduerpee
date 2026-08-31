import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@/utils/icon";
import type { EcosystemNode } from "@/components/hero3d/serviceEcosystemData";
import type { HeroCardLayout } from "./heroEcosystemLayout";
import { trackEvent } from "@/utils/analytics";

function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

export function ServiceCard2D({
  node,
  layout,
  lang,
  delay,
}: {
  node: EcosystemNode;
  layout: HeroCardLayout;
  lang: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: layout.side === "left" ? -16 : 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="absolute w-[44%] sm:w-[34%] lg:w-[23%]"
      style={{
        top: `${layout.topPercent}%`,
        [layout.side]: "0%",
      }}
    >
      <Link
        to={`/${lang}${node.href}`}
        className="group flex items-start gap-2.5 rounded-lg border bg-navy-950/95 p-2.5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 sm:gap-3 sm:p-3.5"
        onClick={() => trackEvent("hero_service_click", { service: node.id })}
        style={{
          borderColor: `${node.color}40`,
          boxShadow: `0 0 0 rgba(0,0,0,0)`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = node.color;
          e.currentTarget.style.boxShadow = `0 0 24px ${node.color}33`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${node.color}40`;
          e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
        }}
      >
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md sm:h-9 sm:w-9"
          style={{ background: `${node.color}22`, color: node.color }}
        >
          <Icon name={node.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </span>
        <div className="min-w-0">
          <div className="text-[11.5px] font-semibold leading-tight sm:text-[13.5px]" style={{ color: node.color }}>
            {node.label}
          </div>
          <p className="mt-0.5 hidden text-[11px] leading-snug text-mist-200/75 sm:block">
            {truncateAtWord(node.description, 56)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
