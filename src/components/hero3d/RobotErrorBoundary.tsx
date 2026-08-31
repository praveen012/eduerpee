import { Component, type ReactNode } from "react";
import { RobotFallback } from "./RobotFallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Defense-in-depth: the 3D scene loads real-time (materials, and
 * previously an external environment texture that turned out to crash
 * the entire page when its CDN request failed — see RobotScene.tsx
 * history). If anything in the Three.js/R3F tree throws — a texture
 * failing to load, a WebGL context loss, anything — this catches it and
 * falls back to the static illustration instead of taking down the rest
 * of the page with it.
 */
export class RobotErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("3D robot scene failed, falling back to static illustration:", error);
  }

  render() {
    if (this.state.hasError) return <RobotFallback />;
    return this.props.children;
  }
}
