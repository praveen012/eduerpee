import { motion, useReducedMotion } from "framer-motion";

export interface GlobePin {
  id: string;
  label: string;
  /** Position as a percentage of the globe's own box, 0-100. */
  top: number;
  left: number;
  /** Which side the label sits on, so it doesn't run off the globe's edge. */
  side: "left" | "right";
}

// Real EduErpee service areas only (src/data/locations.ts) — two actual
// offices (Azamgarh, Delhi NCR/Greater Noida) plus the markets the
// Locations page already names as remote-delivery targets. Positions are
// an illustrative front-hemisphere layout, not literal lat/long.
const DEFAULT_PINS: GlobePin[] = [
  { id: "azamgarh", label: "Azamgarh (HQ)", top: 46, left: 62, side: "right" },
  { id: "delhi-ncr", label: "Delhi NCR", top: 34, left: 58, side: "right" },
  { id: "usa", label: "USA", top: 38, left: 16, side: "left" },
  { id: "eu", label: "EU", top: 22, left: 36, side: "left" },
  { id: "uae-gcc", label: "UAE & GCC", top: 52, left: 40, side: "left" },
];

/**
 * A CSS-only "global reach" globe — no WebGL, so it stays cheap, but reads
 * as dimensional via a radial-gradient sphere, meridian/latitude rings and
 * a slow continuous spin (the meridians' horizontal scale cycles to fake
 * rotation around a vertical axis). Pins are the real places EduErpee
 * actually serves (see locations.ts), not decoration. Spin and pin pulse
 * both stop under prefers-reduced-motion.
 */
export function Globe({ pins = DEFAULT_PINS, className = "" }: { pins?: GlobePin[]; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[420px] ${className}`}>
      {/* The sphere itself */}
      <div
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #3A4356 0%, #232B3D 35%, #141A28 68%, #0B0F19 100%)",
          boxShadow:
            "inset -22px -22px 50px rgba(0,0,0,0.55), inset 14px 14px 36px rgba(207,145,92,0.12), 0 30px 60px -20px rgba(0,0,0,0.6)",
        }}
      >
        {/* Meridians — vertical ellipses whose horizontal scale animates to
            fake the sphere spinning around a vertical axis. */}
        {[0.12, 0.38, 0.65, 0.92].map((scale, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid color-mix(in srgb, var(--color-cyanotype) 22%, transparent)",
              transform: `scaleX(${scale})`,
            }}
            animate={
              reducedMotion
                ? undefined
                : { scaleX: [scale, 1 - scale < 0.08 ? 0.08 : 1 - scale, scale] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
          />
        ))}
        {/* Latitude lines — static horizontal rings */}
        {[28, 50, 72].map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0"
            style={{ top: `${top}%`, borderTop: "1px solid color-mix(in srgb, var(--color-cyanotype) 14%, transparent)" }}
          />
        ))}
      </div>

      {/* Pins + labels for real service areas */}
      {pins.map((pin, i) => (
        <div key={pin.id} className="absolute" style={{ top: `${pin.top}%`, left: `${pin.left}%` }}>
          <span
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "var(--color-copper)" }}
          />
          <motion.span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ width: 14, height: 14, border: "1.5px solid var(--color-copper)" }}
            animate={reducedMotion ? undefined : { scale: [1, 2.1, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
          />
          <span
            className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border px-2 py-1 font-body text-[11px] font-medium ${
              pin.side === "right" ? "left-[10px]" : "right-[10px] -translate-x-full"
            }`}
            style={{
              background: "rgba(7,11,20,0.85)",
              borderColor: "color-mix(in srgb, var(--color-copper) 30%, transparent)",
              color: "var(--color-vellum)",
              backdropFilter: "blur(4px)",
            }}
          >
            {pin.label}
          </span>
        </div>
      ))}
    </div>
  );
}
