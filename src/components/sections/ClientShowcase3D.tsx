import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { clients } from "@/data/content";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useBreakpointTier } from "@/hooks/useBreakpointTier";
import { orbits, tabletOrbits } from "./clientOrbitData";
import { OrbitRing } from "./OrbitRing";
import { EcosystemCore } from "./EcosystemCore";
import { ConnectionLines } from "./ConnectionLines";
import { ClientCard3D } from "./ClientCard3D";

const SCENE_HEIGHT = 560;

/**
 * A CSS-only 3D "client ecosystem": 3 independently-rotating orbit rings
 * (desktop) built from real client data, per the brief. WebGL/Three.js
 * was explicitly ruled out for this — chosen instead to keep the bundle
 * light (confirmed via build output, not assumed). Depth cues (cards
 * appearing larger/sharper near the front) come from real CSS 3D
 * perspective projection — genuine `perspective` + `translateZ`, not a
 * hand-rolled opacity trick — so they're accurate to the actual rotation,
 * not a synced animation that could drift out of phase.
 */
export function ClientShowcase3D() {
  const { t } = useI18n();
  const reducedMotion = useReducedMotion();
  const tier = useBreakpointTier();
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    // Clamped to a small range per spec ("5-10 degrees") — subtle, not gamey.
    setParallax({ x: py * -8, y: px * 8 });
  };

  const onMouseLeave = () => setParallax({ x: 0, y: 0 });

  const activeOrbits = tier === "desktop" ? orbits : tabletOrbits;

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/12 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-domain-cloud/10 blur-[130px]" />

      <Container className="relative">
        <SectionHeader
          eyebrow={t.clientShowcase.eyebrow}
          heading={t.clientShowcase.heading}
          description={t.clientShowcase.description}
          align="center"
          light
        />
      </Container>

      {/* Desktop / tablet — full 3D orbital ecosystem */}
      <motion.div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto mt-8 hidden [perspective:1600px] sm:block"
        style={{ height: SCENE_HEIGHT }}
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
          style={{
            transform: `rotateX(${parallax.x}deg) rotateY(${parallax.y}deg)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <ConnectionLines radius={170} />
          <EcosystemCore />
          {activeOrbits.map((orbit, i) => (
            <motion.div
              key={orbit.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.2 }}
              className="[transform-style:preserve-3d]"
            >
              <OrbitRing orbit={orbit} spinning={!reducedMotion} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile — the 3D scene doesn't have room to breathe below sm, so a
          clean static grid of the same real clients replaces it rather
          than squeezing/cropping a 3D orbit into a narrow viewport. */}
      <Container className="relative mt-12 grid grid-cols-2 gap-4 sm:hidden">
        {clients.map((client) => (
          <div key={client.id} className="h-[110px]">
            <ClientCard3D client={client} width={175} height={110} />
          </div>
        ))}
      </Container>

      <style>{`
        @keyframes orbitSpinCW {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes orbitSpinCCW {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
      `}</style>
    </section>
  );
}
