const LINE_ANGLES = [20, 75, 130, 200, 255, 320];
const COLORS = ["#E8640A", "#06B6D4", "#7C3AED"];

/**
 * Deliberately static rather than tracking each rotating card's live
 * position — accurately following independently CSS-animated 3D
 * transforms would need a per-frame JS loop reading computed transform
 * matrices, which is exactly the complexity/cost tradeoff the "lighter
 * CSS" approach was chosen to avoid. This reads as an abstract network
 * radiating from the core (per the spec's intent — "EduErpee connects
 * businesses through technology") without literally chasing cards.
 */
export function ConnectionLines({ radius = 200 }: { radius?: number }) {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width={radius * 2}
      height={radius * 2}
      viewBox={`${-radius} ${-radius} ${radius * 2} ${radius * 2}`}
      aria-hidden="true"
    >
      {LINE_ANGLES.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <line
            key={deg}
            x1={0}
            y1={0}
            x2={x}
            y2={y}
            stroke={COLORS[i % COLORS.length]}
            strokeWidth={1}
            strokeOpacity={0.25}
          />
        );
      })}
    </svg>
  );
}
