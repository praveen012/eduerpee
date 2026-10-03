// Replaces the old "dot-grid + blurred gradient blob" hero background (the
// generic default for dark AI-product sites) with a drafting-table motif:
// a copper grid, corner registration marks like a print layout, and a
// small annotation tag. Ties directly to what EduErpee does — architecting
// ERP/AI systems — rather than decorating the section with an unrelated
// glow. Used by Hero.tsx and PageHero.tsx so every page's top band shares
// one consistent, deliberate texture instead of each page inventing its own.
export function BlueprintField({
  tag,
  className = "",
}: {
  /** Small corner annotation, e.g. "FIG. 01 — AI CORE". Omit to leave it off. */
  tag?: string;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-copper) 1px, transparent 1px), linear-gradient(90deg, var(--color-copper) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Registration crosshairs, like corner marks on a technical print — a
          few fixed points, not tiled across the whole field, so they read
          as deliberate marks rather than more grid noise. */}
      {[
        { top: "8%", left: "4%" },
        { top: "8%", left: "96%" },
        { top: "88%", left: "4%" },
      ].map((pos, i) => (
        <svg key={i} className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 opacity-30" style={pos} viewBox="0 0 20 20">
          <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-copper)" strokeWidth="1" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-copper)" strokeWidth="1" />
          <circle cx="10" cy="10" r="3" fill="none" stroke="var(--color-copper)" strokeWidth="1" />
        </svg>
      ))}
      {tag && (
        <span
          className="absolute right-5 top-5 sm:right-8 sm:top-8 font-body text-[11px] tracking-[0.04em] opacity-40"
          style={{ color: "var(--color-copper)" }}
        >
          {tag}
        </span>
      )}
    </div>
  );
}
