import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function StatsCounter({
  value,
  label,
  light = false,
}: {
  value: string;
  label: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  // Only animate simple "digits + optional trailing +" values like "100+".
  // Anything else (e.g. "24/7", "Global") is stripping/regex-fragile — a
  // naive \D-strip on "24/7" collapses it to "247" and re-appends "/",
  // rendering "247/" — so those render as plain static text instead.
  const isSimpleCount = /^\d+\+?$/.test(value);
  const numeric = isSimpleCount ? parseInt(value, 10) : NaN;
  const suffix = isSimpleCount ? value.replace(/[0-9]/g, "") : "";
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(numeric)) return;
    let frame: number;
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(numeric * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="relative pl-3"
    >
      {/* A short tick instead of a boxed card — reads as a spec-sheet entry
          (value / what it measures) rather than another rounded stat tile. */}
      <span
        className="absolute left-0 top-1 h-4 w-px"
        style={{ background: light ? "var(--color-copper)" : "currentColor", opacity: light ? 0.7 : 0.3 }}
      />
      <div
        className={`font-display text-[28px] sm:text-[34px] font-semibold tracking-tight leading-none ${
          light ? "" : "text-ink-900 dark:text-mist-100"
        }`}
        style={light ? { color: "var(--color-vellum)" } : undefined}
      >
        {isNaN(numeric) ? value : display}
        {!isNaN(numeric) && suffix}
      </div>
      <div
        className={`mt-1.5 text-[12.5px] leading-snug ${light ? "" : "text-ink-500 dark:text-mist-200/60"}`}
        style={light ? { color: "var(--color-graphite)" } : undefined}
      >
        {label}
      </div>
    </motion.div>
  );
}
