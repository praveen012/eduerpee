import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AIRobot } from "./AIRobot";
import { HoloPlatform } from "./HoloPlatform";
import { ServiceEcosystem } from "./ServiceEcosystem";
import { BackgroundParticles } from "./BackgroundParticles";
import { ResponsiveCameraRig } from "./ResponsiveCameraRig";
import { ecosystemNodes } from "./serviceEcosystemData";
import type { BreakpointTier } from "@/hooks/useBreakpointTier";

export function RobotScene({
  tier,
  paused,
  lang,
  exploreLabel,
}: {
  tier: BreakpointTier;
  paused: boolean;
  lang: string;
  exploreLabel?: string;
}) {
  const mouse = useRef({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const quality: "high" | "low" = tier === "desktop" ? "high" : "low";
  // Full radial ecosystem only where there's room to frame it without
  // cropping or crowding; mobile shows the robot alone in 3D (a separate
  // HTML list covers the services there — see MobileServiceList).
  const showEcosystem = tier !== "mobile";
  const hoveredNode = ecosystemNodes.find((n) => n.id === hoveredId) ?? null;

  const onPointerMove = (e: React.PointerEvent) => {
    const bounds = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouse.current.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
    mouse.current.y = ((e.clientY - bounds.top) / bounds.height) * 2 - 1;
  };

  return (
    <div
      className="h-full w-full overflow-hidden"
      onPointerMove={tier === "desktop" ? onPointerMove : undefined}
    >
      <Canvas
        dpr={quality === "high" ? [1, 1.75] : [1, 1]}
        gl={{ antialias: quality === "high", alpha: true, powerPreference: "high-performance" }}
        frameloop={paused ? "demand" : "always"}
      >
        <ResponsiveCameraRig tier={tier} showEcosystem={showEcosystem} />

        {/* Three-point-style lighting for a more dimensional, less flat
            look: a bright key light from the front-right, a cooler fill
            from the left to soften shadows, a warm rim light from behind
            to separate the robot from the light paper background, plus
            teal/sky accent lights for brand color in the highlights.
            Ambient is higher than the old dark-hero version so the white
            robot body still reads with form against a light backdrop. */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 4]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-4, 2, 2]} intensity={0.4} color="#DCEEF5" />
        <pointLight position={[0, 2, -3]} intensity={1.1} color="#0E7C86" />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#0E7C86" />
        <pointLight position={[-3, 1, 2]} intensity={0.7} color="#3FB6C2" />
        <pointLight position={[0, -2, -2]} intensity={0.45} color="#38BDF8" />

        <Suspense fallback={null}>
          <AIRobot mouse={mouse} quality={quality} hoveredColor={hoveredNode?.color ?? null} />
          <HoloPlatform quality={quality} />
          {showEcosystem && (
            <ServiceEcosystem
              hoveredId={hoveredId}
              onHoverChange={setHoveredId}
              lang={lang}
              exploreLabel={exploreLabel}
            />
          )}
          {quality === "high" && <BackgroundParticles count={120} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
