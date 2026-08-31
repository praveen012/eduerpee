import { clients } from "@/data/content";

export interface OrbitCard {
  client: (typeof clients)[number];
  angle: number;
}

export interface OrbitConfig {
  id: "inner" | "middle" | "outer";
  cards: OrbitCard[];
  radius: number;
  cardWidth: number;
  cardHeight: number;
  /** Full rotation duration in seconds — slow and cinematic per the spec (20-40s+) */
  duration: number;
  /** 1 = clockwise, -1 = counter-clockwise, so orbits visibly counter-rotate */
  direction: 1 | -1;
  tiltDeg: number;
  verticalOffsetPx: number;
  /** Static starting rotation for the whole ring — staggers each orbit's
   *  cards apart from the others so the *resting* state (and reduced-motion
   *  users, who never see it move) isn't all three rings' "card 0" stacked
   *  facing forward simultaneously. */
  baseAngleOffset: number;
}

/** Cycles through the 6 real clients to fill a given card count — repeats
 *  are visual density only, so the orbit reads as full rather than
 *  sparse; every name shown is still a real, verified client. */
function fillOrbit(count: number): OrbitCard[] {
  const angleStep = 360 / count;
  return Array.from({ length: count }, (_, i) => ({
    client: clients[i % clients.length],
    angle: i * angleStep,
  }));
}

export const orbits: OrbitConfig[] = [
  {
    id: "inner",
    cards: fillOrbit(6), // spec: inner orbit 4–6 cards
    radius: 160,
    cardWidth: 118,
    cardHeight: 78,
    duration: 26,
    direction: 1,
    tiltDeg: -13,
    verticalOffsetPx: -6,
    baseAngleOffset: 0,
  },
  {
    id: "middle",
    cards: fillOrbit(6), // spec: middle orbit 6–8 cards
    radius: 265,
    cardWidth: 148,
    cardHeight: 94,
    duration: 38,
    direction: -1,
    tiltDeg: -13,
    verticalOffsetPx: 0,
    baseAngleOffset: 25,
  },
  {
    id: "outer",
    cards: fillOrbit(8), // spec: outer orbit 8–10 cards
    radius: 370,
    cardWidth: 172,
    cardHeight: 108,
    duration: 50,
    direction: 1,
    tiltDeg: -13,
    verticalOffsetPx: 6,
    baseAngleOffset: 47,
  },
];

/** Reduced set for tablet — spec section 17: "8-12 logos" total. Inner + outer only. */
export const tabletOrbits: OrbitConfig[] = [
  { ...orbits[0], cards: fillOrbit(6) },
  { ...orbits[2], cards: fillOrbit(6), radius: 300, cardWidth: 155, cardHeight: 96, baseAngleOffset: 30 },
];
