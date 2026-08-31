import { ecosystemNodes } from "@/components/hero3d/serviceEcosystemData";

export interface HeroCardLayout {
  id: string;
  side: "left" | "right";
  /** Vertical center of the card, as a % of the ecosystem container height */
  topPercent: number;
  /** Where this card's connector line meets the robot, as % of container */
  robotAnchor: { x: number; y: number };
}

// 8 real services (4 left / 4 right) — reuses the same verified EduErpee
// service content (label/description/icon/color) already defined for the
// 3D scene in serviceEcosystemData.ts, just laid out flat here. "Logo &
// Brand Identity" is intentionally left out of this hero display only —
// it's still a real, listed service everywhere else on the site (nav,
// /services, sitemap) — to keep the hero focused on the current AI/Azure/
// staff-augmentation positioning. AI, Cloud & DevOps (Azure) and IT Staff
// Augmentation lead the left column since those are the current business
// focus. topPercent/robotAnchor values reuse the exact 4-slot geometry
// already confirmed (via screenshot) to render without overlap or
// clipping — only which service occupies each slot changed.
export const heroCardLayout: HeroCardLayout[] = [
  { id: "ai-chatbot", side: "left", topPercent: 8, robotAnchor: { x: 38, y: 20 } },
  { id: "cloud-devops", side: "left", topPercent: 28, robotAnchor: { x: 36, y: 34 } },
  { id: "staff-augmentation", side: "left", topPercent: 48, robotAnchor: { x: 37, y: 48 } },
  { id: "mobile-apps", side: "left", topPercent: 68, robotAnchor: { x: 39, y: 62 } },

  { id: "digital-marketing", side: "right", topPercent: 8, robotAnchor: { x: 62, y: 20 } },
  { id: "ui-ux", side: "right", topPercent: 28, robotAnchor: { x: 64, y: 34 } },
  { id: "web-dev", side: "right", topPercent: 48, robotAnchor: { x: 63, y: 48 } },
  { id: "support", side: "right", topPercent: 68, robotAnchor: { x: 61, y: 62 } },
];

export const heroCards = heroCardLayout.map((layout) => {
  const node = ecosystemNodes.find((n) => n.id === layout.id)!;
  return { ...layout, node };
});
