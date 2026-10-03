import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

interface AINetworkFieldProps {
  /** Number of nodes to render */
  count?: number;
  /** Color of nodes/lines - hex */
  color?: string;
  /** Secondary accent color for a portion of nodes */
  accentColor?: string;
  className?: string;
}

interface Node {
  x: number;
  y: number;
  r: number;
  delay: number;
  duration: number;
  accent: boolean;
}

/**
 * A lightweight, original AI/network-themed ambient background: softly
 * pulsing nodes connected by faint lines, slowly drifting. Built from
 * scratch with SVG + CSS animations (no images, no WebGL, no assets from
 * any third-party site) — inspired by the *concept* of AI-network visuals
 * common on AI product sites, not copied from any specific one. Respects
 * prefers-reduced-motion (renders static when set).
 */
export function AINetworkField({ count = 22, color = "#E8640A", accentColor = "#06B6D4", className = "" }: AINetworkFieldProps) {
  const reducedMotion = useReducedMotion();

  const nodes = useMemo<Node[]>(() => {
    // Deterministic pseudo-random layout (stable across renders/SSR, no
    // Math.random() reshuffling on every re-render) — a pure hash of the
    // index, not a mutable closure counter.
    const hash = (n: number) => {
      const x = Math.sin(n * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      x: hash(i * 7 + 1) * 100,
      y: hash(i * 13 + 2) * 100,
      r: 1.4 + hash(i * 17 + 3) * 1.8,
      delay: hash(i * 23 + 4) * 6,
      duration: 3 + hash(i * 29 + 5) * 3,
      accent: i % 5 === 0,
    }));
  }, [count]);

  // Connect each node to its nearest 1-2 neighbours for a subtle web,
  // without O(n^2) visual clutter.
  const lines = useMemo(() => {
    const result: { a: Node; b: Node; key: string }[] = [];
    nodes.forEach((a, i) => {
      const distances = nodes
        .map((b, j) => ({ b, j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
        .filter((n) => n.j !== i)
        .sort((p, q) => p.d - q.d)
        .slice(0, 2);
      distances.forEach(({ b, j }) => {
        const key = [i, j].sort().join("-");
        if (!result.some((l) => l.key === key)) result.push({ a, b, key });
      });
    });
    return result;
  }, [nodes]);

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {lines.map(({ a, b, key }) => (
        <line key={key} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={color} strokeWidth={0.08} strokeOpacity={0.18} />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.35}
          fill={n.accent ? accentColor : color}
          opacity={reducedMotion ? 0.5 : undefined}
          style={
            reducedMotion
              ? undefined
              : {
                  animation: `aiNodePulse ${n.duration}s ease-in-out ${n.delay}s infinite`,
                  transformBox: "fill-box",
                  transformOrigin: "center",
                }
          }
        />
      ))}
      <style>{`
        @keyframes aiNodePulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.8); }
        }
      `}</style>
    </svg>
  );
}
