import { motion } from "framer-motion";
import { heroCards } from "./heroEcosystemLayout";

// Cards sit at x=0% (left) / x=100% (right) edges with ~23-24% width, so
// the line starts just past the card's inner edge.
const CARD_EDGE_X = { left: 25, right: 75 };

export function ConnectorLines() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {heroCards.map((card, i) => {
        const startX = CARD_EDGE_X[card.side];
        const startY = card.topPercent + 4; // roughly the card's vertical center
        const midX = card.side === "left" ? card.robotAnchor.x - 4 : card.robotAnchor.x + 4;
        const { x: endX, y: endY } = card.robotAnchor;

        const path = `M ${startX} ${startY} L ${midX} ${startY} L ${endX} ${endY}`;

        return (
          <g key={card.id}>
            <motion.path
              d={path}
              fill="none"
              stroke={card.node.color}
              strokeWidth="0.35"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.65 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            />
            {/* Corner + endpoint dots */}
            <circle cx={startX} cy={startY} r="0.5" fill={card.node.color} opacity={0.9} />
            <circle cx={midX} cy={startY} r="0.4" fill={card.node.color} opacity={0.7} />
            <circle cx={endX} cy={endY} r="0.5" fill={card.node.color} opacity={0.9} />

            {/* Slow traveling data particle, card → robot (animated along
                the elbow's 3 points directly, rather than CSS offset-path,
                for reliable cross-browser support) */}
            <motion.circle
              r="0.55"
              fill={card.node.color}
              initial={{ opacity: 0 }}
              animate={{
                cx: [startX, midX, endX],
                cy: [startY, startY, endY],
                opacity: [0.15, 1, 0.15],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.35,
                times: [0, 0.5, 1],
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}
