export function EcosystemCore() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ transform: "translate(-50%, -50%) translateZ(-200px)" }}
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 animate-pulse rounded-full bg-brand-orange/30 blur-xl" />
        <div className="absolute inset-2 rounded-full border border-brand-orange/50" />
        <div className="absolute -inset-3 rounded-full border border-domain-cloud/25" />
        <span
          className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full font-display text-sm font-bold text-white"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #3A4356 0%, #232B3D 35%, #141A28 68%, #0B0F19 100%)",
            boxShadow:
              "inset -6px -6px 14px rgba(0,0,0,0.55), inset 4px 4px 10px rgba(37,99,235,0.18), 0 8px 16px -6px rgba(0,0,0,0.6)",
          }}
        >
          E
        </span>
      </div>
    </div>
  );
}
