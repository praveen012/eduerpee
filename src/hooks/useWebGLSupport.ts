import { useEffect, useState } from "react";

export type WebGLSupport = "checking" | "supported" | "unsupported";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

/** Returns whether WebGL is available in this browser. Checked once, client-side only. */
export function useWebGLSupport(): WebGLSupport {
  const [status, setStatus] = useState<WebGLSupport>("checking");

  useEffect(() => {
    setStatus(detectWebGL() ? "supported" : "unsupported");
  }, []);

  return status;
}

/** Coarse device tier so mobile/low-end devices get a cheaper scene. */
export function useDeviceTier(): "high" | "low" {
  const [tier, setTier] = useState<"high" | "low">("high");

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowMemory = "deviceMemory" in navigator && (navigator as { deviceMemory?: number }).deviceMemory! <= 4;
    setTier(isSmallScreen || isCoarsePointer || lowMemory ? "low" : "high");
  }, []);

  return tier;
}
