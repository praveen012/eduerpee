import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@/utils/icon";
import { ecosystemNodes } from "./serviceEcosystemData";

export function MobileServiceList({ lang }: { lang: string }) {
  return (
    <div className="relative mt-2">
      <div className="flex flex-col items-center">
        <span className="h-8 w-px bg-gradient-to-b from-brand-orange/60 to-transparent" />
      </div>
      <ul className="mt-1 flex flex-col gap-2">
        {ecosystemNodes.map((node, i) => (
          <motion.li
            key={node.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <Link
              to={`/${lang}${node.href}`}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 transition-colors active:bg-white/[0.06]"
              style={{ borderLeftColor: node.color, borderLeftWidth: 3 }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                style={{ background: `${node.color}22`, color: node.color }}
              >
                <Icon name={node.icon} className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="text-[13px] font-medium text-mist-100">{node.label}</div>
                <div className="truncate text-[11px] text-mist-200/55">{node.description}</div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
