import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { BreakpointTier } from "@/hooks/useBreakpointTier";
import { ecosystemBounds, robotOnlyBounds } from "./serviceEcosystemData";

/**
 * Fixes robot cropping by computing camera distance/FOV from the actual
 * content bounds (robot alone, or robot + ecosystem) and the live canvas
 * aspect ratio — rather than a fixed guessed distance. Re-runs whenever
 * the canvas resizes or the breakpoint/ecosystem visibility changes, so
 * the full silhouette always stays inside the frustum with margin.
 */
export function ResponsiveCameraRig({
  tier,
  showEcosystem,
}: {
  tier: BreakpointTier;
  showEcosystem: boolean;
}) {
  const { camera, size } = useThree();

  useEffect(() => {
    const persp = camera as THREE.PerspectiveCamera;
    const aspect = size.width / Math.max(size.height, 1);

    const bounds = showEcosystem ? ecosystemBounds : robotOnlyBounds;

    // Headroom so nothing touches the frame edge, kept deliberately tight
    // (not the old 1.2–1.32) so the robot reads as large and dominant per
    // the "20–30% bigger, no wasted space" requirement — the bounds above
    // already carry their own small buffer, so this is a second, thinner
    // safety margin rather than a redundant large one.
    const padding = tier === "mobile" ? 1.6 : tier === "tablet" ? 1.6 : 1.6;

    const fovDeg = tier === "mobile" ? 48 : tier === "tablet" ? 46 : 42;
    persp.fov = fovDeg;
    const vFovRad = (fovDeg * Math.PI) / 180;

    const distanceForHeight = (bounds.halfHeight * padding) / Math.tan(vFovRad / 2);
    const distanceForWidth =
      (bounds.halfWidth * padding) / (Math.tan(vFovRad / 2) * Math.max(aspect, 0.5));
    const distance = Math.max(distanceForHeight, distanceForWidth, 3.2);

    persp.position.set(0, bounds.centerY, distance);
    persp.near = 0.1;
    persp.far = distance + 20;
    persp.aspect = aspect;
    persp.lookAt(0, bounds.centerY, 0);
    persp.updateProjectionMatrix();
  }, [camera, size.width, size.height, tier, showEcosystem]);

  return null;
}
