import { motion } from "framer-motion";

const nodes = [
  { id: "core", x: 260, y: 210, r: 30, label: "EduErpee Core", primary: true },
  { id: "school", x: 90, y: 90, r: 20, label: "School ERP" },
  { id: "inventory", x: 430, y: 80, r: 18, label: "Inventory" },
  { id: "library", x: 60, y: 320, r: 17, label: "Library" },
  { id: "transport", x: 450, y: 330, r: 18, label: "Transport" },
  { id: "clinic", x: 250, y: 40, r: 16, label: "Clinic" },
  { id: "ai", x: 380, y: 220, r: 15, label: "AI" },
  { id: "cloud", x: 140, y: 210, r: 15, label: "Cloud" },
];

const edges: [string, string][] = [
  ["core", "school"],
  ["core", "inventory"],
  ["core", "library"],
  ["core", "transport"],
  ["core", "clinic"],
  ["core", "ai"],
  ["core", "cloud"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function ModuleMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 400"
      className={className}
      role="img"
      aria-label="Diagram of EduErpee's connected ERP modules: school, inventory, library, transport, clinic, AI and cloud, linked to a central platform core."
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={260} cy={210} r={110} fill="url(#coreGlow)" />

      {edges.map(([a, b], i) => {
        const A = byId[a];
        const B = byId[b];
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={A.x}
            y1={A.y}
            x2={B.x}
            y2={B.y}
            stroke="#F97316"
            strokeWidth={1}
            strokeOpacity={0.35}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.15 * i, ease: "easeOut" }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.primary ? "#F97316" : "#0B1220"}
            fillOpacity={n.primary ? 1 : 0.9}
            stroke="#F97316"
            strokeOpacity={n.primary ? 0 : 0.4}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 * i + 0.2 }}
          />
          <text
            x={n.x}
            y={n.y + n.r + 14}
            textAnchor="middle"
            fontSize={n.primary ? 11 : 9.5}
            fontFamily="JetBrains Mono, monospace"
            fill="#0B1220"
            className="dark:fill-mist-100"
            opacity={0.75}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
