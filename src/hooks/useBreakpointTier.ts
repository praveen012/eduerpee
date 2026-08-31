import { useEffect, useState } from "react";

export type BreakpointTier = "mobile" | "tablet" | "desktop";

function computeTier(): BreakpointTier {
  const w = window.innerWidth;
  if (w < 640) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

/** Matches the Tailwind sm(640)/lg(1024) breakpoints used elsewhere in the app. */
export function useBreakpointTier(): BreakpointTier {
  const [tier, setTier] = useState<BreakpointTier>(() =>
    typeof window === "undefined" ? "desktop" : computeTier()
  );

  useEffect(() => {
    const onResize = () => setTier(computeTier());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return tier;
}
