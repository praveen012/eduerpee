import { motion } from "framer-motion";
import { holoPanels } from "./holoPanelsData";

const positions = [
  "top-6 left-2 sm:left-6",
  "top-1/3 right-1 sm:right-4",
  "bottom-20 left-1 sm:left-4",
  "bottom-6 right-2 sm:right-8",
  "top-6 right-2 sm:right-8",
];

export function HoloPanels({ visible = true }: { visible?: boolean }) {
  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {holoPanels.map((panel, i) => (
        <motion.div
          key={panel.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
          className={`absolute ${positions[i % positions.length]} rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm`}
        >
          <div className="font-mono text-[9px] tracking-[0.16em] text-mist-200/50">
            {panel.label}
          </div>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-mono text-[9.5px] font-medium text-mist-100/80">
              {panel.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
