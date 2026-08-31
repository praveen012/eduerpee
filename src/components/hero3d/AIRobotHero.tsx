import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { useBreakpointTier } from "@/hooks/useBreakpointTier";
import { RobotFallback } from "./RobotFallback";
import { RobotErrorBoundary } from "./RobotErrorBoundary";
import { HoloPanels } from "./HoloPanels";
import { MobileServiceList } from "./MobileServiceList";

// The 3D scene (three.js + R3F + drei) is only pulled into the bundle when
// it's actually going to render, keeping the initial page load light.
const RobotScene = lazy(() => import("./RobotScene").then((m) => ({ default: m.RobotScene })));

export function AIRobotHero({ lang, exploreLabel }: { lang: string; exploreLabel?: string }) {
  const webgl = useWebGLSupport();
  const tier = useBreakpointTier();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Pause the render loop when the hero scrolls off-screen — no point
  // spending GPU cycles on an invisible canvas.
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const showStaticFallback = webgl === "unsupported" || reducedMotion;
  const showLoading = webgl === "checking";

  return (
    <div ref={containerRef} className="w-full">
      {/* Canvas box owns its own aspect ratio — sized from its own width,
          independent of whatever renders below it (the mobile service
          list). Breakpoints match useBreakpointTier's 640/1024 thresholds. */}
      <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-video">
        {(showLoading || showStaticFallback) && <RobotFallback />}

        {!showLoading && !showStaticFallback && (
          <RobotErrorBoundary>
            <Suspense fallback={<RobotFallback />}>
              <RobotScene tier={tier} paused={paused} lang={lang} exploreLabel={exploreLabel} />
            </Suspense>
          </RobotErrorBoundary>
        )}

        {!showStaticFallback && !showLoading && tier === "desktop" && <HoloPanels />}
      </div>

      {tier === "mobile" && <MobileServiceList lang={lang} />}
    </div>
  );
}
