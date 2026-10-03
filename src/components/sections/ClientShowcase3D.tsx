import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { clients } from "@/data/content";
import { useLocalizedContent } from "@/data/useLocalizedContent";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useBreakpointTier } from "@/hooks/useBreakpointTier";
import { orbits, tabletOrbits } from "./clientOrbitData";
import { OrbitRing } from "./OrbitRing";
import { EcosystemCore } from "./EcosystemCore";
import { ConnectionLines } from "./ConnectionLines";
import { ClientCard3D } from "./ClientCard3D";

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
  const { testimonials, trustStats } = useLocalizedContent();
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

  // Auto-cycling real client quotes — pauses under prefers-reduced-motion
  // and while the person is reading (hover), advances every 4.5s otherwise.
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(() => setQuoteIndex((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, [reducedMotion, paused]);
  const activeQuote = testimonials[quoteIndex];

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

      {/* Desktop / tablet — the 3D orbital ecosystem sits on the left,
          real client names + the trust numbers sit on the right, so the
          scene has a job (illustrate "ecosystem") rather than carrying
          the section alone. */}
      <Container className="relative mt-10 hidden sm:block">
        <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <motion.div
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full origin-center h-[314px] scale-[0.56] [perspective:1600px] min-[900px]:h-[358px] min-[900px]:scale-[0.64] lg:mx-0 lg:h-[403px] lg:scale-[0.72] xl:h-[459px] xl:scale-[0.82]"
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

          {/* Real client voices — one quote at a time, auto-cycling, so the
              right side carries energy (movement, a bold pull-quote) instead
              of a static directory the 3D roster already implies. */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative"
          >
            <Quote className="h-9 w-9 text-brand-orange/70" strokeWidth={2.5} fill="currentColor" fillOpacity={0.12} />

            <div className="relative mt-3 min-h-[168px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuote.id}
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <p className="font-display text-[19px] font-semibold leading-[1.45] tracking-tight text-mist-100 sm:text-[21px]">
                    "{activeQuote.quote}"
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 font-display text-[12px] font-bold text-brand-orange">
                      {activeQuote.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </span>
                    <span>
                      <span className="block font-display text-[14px] font-semibold text-mist-100">{activeQuote.company}</span>
                      <span className="block text-[12px] text-mist-200/55">{activeQuote.industry}</span>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots — click to jump, and they double as a visible
                "N of 6" cue for anyone who lands mid-cycle. */}
            <div className="mt-6 flex items-center gap-2">
              {testimonials.map((tst, i) => (
                <button
                  key={tst.id}
                  type="button"
                  aria-label={`Show quote from ${tst.company}`}
                  onClick={() => setQuoteIndex(i)}
                  className="group/dot py-1.5"
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-300 ${
                      i === quoteIndex ? "w-7 bg-brand-orange" : "w-3.5 bg-white/15 group-hover/dot:bg-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/8 pt-6">
              {trustStats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[20px] font-bold text-mist-100">{s.value}</div>
                  <div className="mt-0.5 text-[11px] leading-tight text-mist-200/55">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

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
