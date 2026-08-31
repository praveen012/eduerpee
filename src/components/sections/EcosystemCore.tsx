export function EcosystemCore() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 animate-pulse rounded-full bg-brand-orange/30 blur-xl" />
        <div className="absolute inset-2 rounded-full border border-brand-orange/50" />
        <div className="absolute -inset-3 rounded-full border border-domain-cloud/25" />
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-brand-orange-dark font-display text-sm font-bold text-white shadow-lg">
          E
        </span>
      </div>
    </div>
  );
}
