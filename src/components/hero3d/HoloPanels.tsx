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
          className={`absolute ${positions[i % positions.length]} rounded-md border px-3 py-1.5 backdrop-blur-sm`}
          style={{
            borderColor: "var(--color-paper-line)",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 4px 16px -4px rgba(14,124,134,0.15)",
          }}
        >
          <div className="font-mono text-[9px] tracking-[0.16em]" style={{ color: "var(--color-slate)" }}>
            {panel.label}
          </div>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--color-teal)" }} />
            <span className="font-mono text-[9.5px] font-medium" style={{ color: "var(--color-ink)" }}>
              {panel.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
