import type { OrbitConfig } from "./clientOrbitData";
import { ClientCard3D } from "./ClientCard3D";

export function OrbitRing({ orbit, spinning }: { orbit: OrbitConfig; spinning: boolean }) {
  const { cards, radius, cardWidth, cardHeight, duration, direction, tiltDeg, verticalOffsetPx, baseAngleOffset } = orbit;

  return (
    <div
      className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
      style={{
        width: cardWidth,
        height: cardHeight,
        transform: `translate(-50%, calc(-50% + ${verticalOffsetPx}px)) rotateX(${tiltDeg}deg)`,
      }}
    >
      <div
        className="h-full w-full [transform-style:preserve-3d]"
        style={
          spinning
            ? {
                animationName: direction === 1 ? "orbitSpinCW" : "orbitSpinCCW",
                animationDuration: `${duration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }
            : undefined
        }
      >
        {cards.map(({ client, angle }, i) => (
          <div
            key={`${orbit.id}-${client.id}-${i}`}
            className="absolute left-0 top-0 [backface-visibility:hidden]"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform: `rotateY(${angle + baseAngleOffset}deg) translateZ(${radius}px)`,
            }}
          >
            <ClientCard3D client={client} width={cardWidth} height={cardHeight} />
          </div>
        ))}
      </div>
    </div>
  );
}
