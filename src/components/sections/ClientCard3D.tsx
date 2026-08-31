import { clients } from "@/data/content";

const LOGO_AREA_WIDTH_PCT = 78; // spec: 70-80% of card content area
const LOGO_AREA_HEIGHT_PCT = 62; // spec: 55-65% of card content area

export function ClientCard3D({
  client,
  width,
  height,
}: {
  client: (typeof clients)[number];
  width: number;
  height?: number;
}) {
  const initials = client.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const fontScale = Math.min(1, width / 190);
  // Card content area, after the card's own padding — used to size the
  // fixed logo container as a percentage, never as a function of the
  // source image's own dimensions.
  const contentHeight = (height ?? width * 0.62) - 16 * fontScale;
  const logoAreaWidth = width * (LOGO_AREA_WIDTH_PCT / 100);
  const logoAreaHeight = contentHeight * (LOGO_AREA_HEIGHT_PCT / 100);

  const content = (
    <div
      className="group/card flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-brand-orange/30 text-center backdrop-blur-md transition-all duration-300 ease-out hover:z-10 hover:scale-[1.08] hover:border-brand-orange/70"
      style={{
        padding: `${8 * fontScale}px`,
        background:
          "linear-gradient(160deg, rgba(249,115,22,0.20) 0%, rgba(124,45,18,0.32) 55%, rgba(20,10,5,0.55) 100%)",
        boxShadow: "0 8px 30px rgba(249,115,22,0.12), inset 0 1px 0 rgba(255,255,255,0.10)",
      }}
    >
      {client.logoUrl ? (
        // Fixed-size logo container, sized as a percentage of the card —
        // never derived from the source image's own width/height, so a
        // 2000×500 logo and a 500×500 logo end up perceptually the same
        // size. A light backdrop keeps any logo (dark, light, colorful)
        // readable against the dark glass card without recoloring it.
        <div
          className="flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-white/92 p-1.5 shadow-sm"
          style={{ width: logoAreaWidth, height: logoAreaHeight }}
        >
          <img
            src={client.logoUrl}
            alt={client.name}
            className="h-full w-full opacity-90 transition-opacity duration-300 group-hover/card:opacity-100"
            style={{
              objectFit: "contain",
              objectPosition: client.logoObjectPosition ?? "center",
              transform: `scale(${client.logoScale ?? 1})`,
            }}
          />
        </div>
      ) : (
        <>
          <span
            className="flex items-center justify-center rounded-full bg-white/10 font-display font-bold text-white transition-colors duration-300 group-hover/card:bg-brand-orange/30"
            style={{ width: 26 * fontScale + 8, height: 26 * fontScale + 8, fontSize: 11 * fontScale }}
          >
            {initials}
          </span>
          <span className="font-display font-semibold text-white" style={{ fontSize: Math.max(10, 12 * fontScale) }}>
            {client.name}
          </span>
        </>
      )}
      <span
        className="text-mist-200/55 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{ fontSize: Math.max(9, 10 * fontScale) }}
      >
        {client.industry}
      </span>
    </div>
  );

  return client.url ? (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full [transform-style:preserve-3d]"
    >
      {content}
    </a>
  ) : (
    <div className="h-full w-full [transform-style:preserve-3d]">{content}</div>
  );
}
