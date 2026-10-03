import { services } from "@/data/content";

export interface EcosystemNode {
  id: string;
  label: string;
  sublabel: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  /** [x, y, z] in world units, computed once below */
  position: [number, number, number];
}

// Per-service accent color. Broadly follows the category system used
// elsewhere on the site (development=blue, ai=violet, cloud=cyan,
// design/marketing=orange family, security=teal) with mobile split out
// from web so the two read as visually distinct, per the design brief.
const colorById: Record<string, string> = {
  "web-dev": "#1D4ED8", // blue
  "mobile-apps": "#DB2777", // pink
  "ui-ux": "#8B5CF6", // violet — design
  "cloud-devops": "#0891B2", // cyan/blue — Azure/cloud
  "digital-marketing": "#F59E0B", // amber
  "ai-chatbot": "#7C3AED", // violet — AI
  "staff-augmentation": "#EC4899", // rose — outsourcing/people
  branding: "#FB923C", // orange (lighter, distinct from ui-ux)
  support: "#0D9488", // teal
};

// Now that the hero robot area is full-width (see Hero.tsx) rather than a
// narrow right-hand column, the ellipse's aspect ratio is widened to match
// the container's new ~16:9 desktop shape (aspect_video) — RY stays close
// to the robot's own vertical reach so the top/bottom nodes sit near its
// silhouette, RX widens to use the extra horizontal room instead of
// clustering everything narrowly around the center.
const ELLIPSE_RX = 3.4;
const ELLIPSE_RY = 1.9;
const CENTER_Y = 0.5;

// Real EduErpee services only — nothing invented. Evenly distributed
// around an ellipse so every arrow terminates at a real, visible node.
export const ecosystemNodes: EcosystemNode[] = services.map((s, i) => {
  const angle = -Math.PI / 2 + (i / services.length) * Math.PI * 2; // start at top, clockwise
  const x = ELLIPSE_RX * Math.cos(angle);
  const y = CENTER_Y + ELLIPSE_RY * Math.sin(angle);
  const z = Math.cos(angle * 2) * 0.35; // slight depth variation for a 3D feel

  return {
    id: s.id,
    label: s.title,
    sublabel: s.category.toUpperCase(),
    description: s.description,
    href: s.href,
    icon: s.icon,
    color: colorById[s.id] ?? "#E8640A",
    position: [x, y, z],
  };
});

// Bounding geometry the responsive camera rig frames the scene against.
// Buffers are kept small and deliberate (not the old generous 0.45) —
// the camera rig's own padding multiplier is the safety margin, so
// stacking a second large buffer here just wastes visual space.
export const ecosystemBounds = {
  halfWidth: ELLIPSE_RX + 0.2,
  halfHeight: ELLIPSE_RY + 0.15,
  centerY: CENTER_Y,
};

// Robot silhouette is scaled ROBOT_SCALE larger in AIRobot.tsx; these
// bounds account for that so the mobile (robot-only) camera still frames
// it correctly.
export const ROBOT_SCALE = 1.15;

export const robotOnlyBounds = {
  halfWidth: 1.62 + 0.2, // platform ring radius (unscaled) + small buffer
  halfHeight: 1.91 + 0.15, // (head-top * ROBOT_SCALE to platform-bottom) / 2 + buffer
  centerY: 0.51,
};
