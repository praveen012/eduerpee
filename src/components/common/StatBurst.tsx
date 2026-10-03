import { motion, useReducedMotion } from "framer-motion";

export interface BurstBadge {
  value: string;
  label: string;
  top: string;
  side: "left" | "right";
  delay?: number;
}

// Real EduErpee trust numbers (src/data/content.ts trustStats) — not
// invented placeholder figures — surfaced as floating cards over a layered
// orange "sunburst" instead of the flat globe, per the reference layout's
// energetic hero treatment.
const DEFAULT_BADGES: BurstBadge[] = [
  { value: "100+", label: "Happy Clients", top: "10%", side: "left", delay: 0 },
  { value: "10+", label: "Years Building", top: "46%", side: "right", delay: 0.5 },
  { value: "6+", label: "Ready Products", top: "80%", side: "left", delay: 1 },
];

export function StatBurst({ badges = DEFAULT_BADGES, className = "" }: { badges?: BurstBadge[]; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[440px] ${className}`}>
      {/* Concentric rings — faint and wide at the edge, deep and saturated
          toward the center — built from color-mix on the brand token so it
          always tracks whatever the brand accent currently is. */}
      {[0, 1, 2, 3].map((i) => {
        const inset = i * 11;
        const alpha = 18 + i * 16;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              inset: `${inset}%`,
              background: `color-mix(in srgb, var(--color-copper) ${alpha}%, transparent)`,
            }}
          />
        );
      })}
      <div
        className="absolute inset-[44%] rounded-full"
        style={{
          background: "linear-gradient(145deg, var(--color-copper), var(--color-copper-dim))",
          boxShadow: "0 25px 50px -16px rgba(0,0,0,0.55)",
        }}
      />

      {badges.map((b) => (
        <motion.div
          key={b.label}
          className={`absolute z-10 flex items-center gap-2.5 whitespace-nowrap rounded-full border px-3.5 py-2.5 ${
            b.side === "left" ? "left-[-8%] sm:left-[-12%]" : "right-[-8%] sm:right-[-12%]"
          }`}
          style={{
            top: b.top,
            background: "rgba(7,11,20,0.85)",
            borderColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(6px)",
          }}
          animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: b.delay ?? 0 }}
        >
          <span className="flex -space-x-2.5">
            {[0, 1].map((j) => (
              <span
                key={j}
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 font-display text-[9px] font-bold text-white"
                style={{ borderColor: "rgba(7,11,20,0.9)", background: j === 0 ? "var(--color-copper)" : "var(--color-cyanotype)" }}
              >
                {j === 0 ? "E" : "U"}
              </span>
            ))}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13.5px] font-bold" style={{ color: "var(--color-vellum)" }}>
              {b.value}
            </span>
            <span className="text-[10.5px]" style={{ color: "var(--color-graphite)" }}>
              {b.label}
            </span>
          </span>
        </motion.div>
      ))}
    </div>
  );
}
