import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";

/**
 * A flat, hand-drawn SVG robot illustration standing in for a photoreal
 * render (which would need an image-generation or licensed 3D asset
 * pipeline neither available here). Built to match the reference's read:
 * white/silver humanoid, warm orange glow at the eyes and chest core,
 * standing on a glowing circular platform, "E" emblem on the chest.
 *
 * Movement is layered like a real idling machine rather than one flat
 * pulse: feet/legs stay planted (grounded), the upper body sways gently
 * at the waist (weight shift + breathing), the head independently turns
 * as if scanning the room, each arm swings on its own slightly offset
 * rhythm (so they never mirror each other, which reads as lifeless), the
 * antenna sways with the body's motion, and the eyes occasionally glance
 * sideways. Each animation loops on its own duration/offset so the whole
 * figure never falls into a visibly repeating cycle.
 */
export function RobotIllustration({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const anim = (keyframes: TargetAndTransition) => (reduced ? undefined : keyframes);

  return (
    <svg
      viewBox="0 0 420 560"
      className={className}
      role="img"
      aria-label="Illustration of the EduErpee AI robot, a white and orange humanoid standing on a glowing circular platform, representing the AI technology core that connects EduErpee's services."
    >
      <defs>
        <radialGradient id="platformGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#F97316" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bodyMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4F5F7" />
          <stop offset="45%" stopColor="#D8DBE1" />
          <stop offset="100%" stopColor="#AEB3BD" />
        </linearGradient>
        <linearGradient id="bodyMetalDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C7CBD3" />
          <stop offset="100%" stopColor="#8A8F99" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB877" />
          <stop offset="45%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#C2410C" />
        </radialGradient>
        <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="210" cy="500" rx="150" ry="26" fill="url(#platformGlow)" />
      <motion.ellipse
        cx="210"
        cy="500"
        rx="118"
        ry="16"
        fill="none"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeOpacity="0.55"
        animate={anim({ rx: [118, 124, 118] })}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <ellipse cx="210" cy="500" rx="80" ry="10" fill="none" stroke="#22D3EE" strokeOpacity="0.4" strokeWidth="1" />

      <rect x="172" y="380" width="26" height="100" rx="10" fill="url(#bodyMetalDark)" />
      <rect x="222" y="380" width="26" height="100" rx="10" fill="url(#bodyMetalDark)" />
      <rect x="168" y="470" width="34" height="18" rx="6" fill="#3F4552" />
      <rect x="218" y="470" width="34" height="18" rx="6" fill="#3F4552" />
      <rect x="165" y="350" width="90" height="42" rx="16" fill="url(#bodyMetal)" />

      <motion.g
        style={{ transformOrigin: "210px 355px" }}
        animate={anim({ rotate: [-1.4, 1.4, -1.4], y: [0, -3, 0] })}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="150" y="230" width="120" height="130" rx="26" fill="url(#bodyMetal)" />
        <rect x="150" y="230" width="120" height="130" rx="26" fill="none" stroke="#9AA0AC" strokeWidth="1" strokeOpacity="0.6" />
        <path d="M172 250 L172 340" stroke="#9AA0AC" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M248 250 L248 340" stroke="#9AA0AC" strokeWidth="1" strokeOpacity="0.5" />

        <circle cx="210" cy="295" r="30" fill="#1B2130" />
        <motion.circle
          cx="210"
          cy="295"
          r="24"
          fill="url(#coreGlow)"
          filter="url(#softGlow)"
          animate={anim({ r: [24, 27, 24], opacity: [0.95, 1, 0.95] })}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="210" y="304" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight={700} fontSize="26" fill="#FFF7ED">
          E
        </text>

        <circle cx="140" cy="248" r="26" fill="url(#bodyMetal)" />
        <circle cx="280" cy="248" r="26" fill="url(#bodyMetal)" />
        <motion.circle
          cx="140"
          cy="248"
          r="6"
          fill="#F97316"
          animate={anim({ opacity: [0.6, 1, 0.6] })}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="280"
          cy="248"
          r="6"
          fill="#F97316"
          animate={anim({ opacity: [0.6, 1, 0.6] })}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.g
          style={{ transformOrigin: "140px 248px" }}
          animate={anim({ rotate: [4, -7, 4] })}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="112" y="260" width="24" height="90" rx="11" fill="url(#bodyMetalDark)" />
          <circle cx="118" cy="358" r="15" fill="url(#bodyMetal)" />
        </motion.g>

        <motion.g
          style={{ transformOrigin: "280px 248px" }}
          animate={anim({ rotate: [-4, 8, -4] })}
          transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <rect x="284" y="260" width="24" height="90" rx="11" fill="url(#bodyMetalDark)" />
          <circle cx="302" cy="358" r="15" fill="url(#bodyMetal)" />
        </motion.g>

        <rect x="196" y="205" width="28" height="30" rx="8" fill="url(#bodyMetalDark)" />

        <motion.g
          style={{ transformOrigin: "210px 167px" }}
          animate={anim({ rotate: [-7, 6, -3, 5, -7] })}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", times: [0, 0.28, 0.52, 0.78, 1] }}
        >
          <rect x="160" y="120" width="100" height="95" rx="34" fill="url(#bodyMetal)" />
          <rect x="160" y="120" width="100" height="95" rx="34" fill="none" stroke="#9AA0AC" strokeWidth="1" strokeOpacity="0.6" />
          <rect x="174" y="152" width="72" height="32" rx="14" fill="#151A24" />

          <motion.ellipse
            cx="196"
            cy="168"
            rx="9"
            ry="7"
            fill="#F97316"
            filter="url(#softGlow)"
            animate={anim({ opacity: [0.85, 1, 0.85], cx: [196, 199, 196, 193, 196] })}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", times: [0, 0.28, 0.52, 0.78, 1] }}
          />
          <motion.ellipse
            cx="224"
            cy="168"
            rx="9"
            ry="7"
            fill="#F97316"
            filter="url(#softGlow)"
            animate={anim({ opacity: [0.85, 1, 0.85], cx: [224, 227, 224, 221, 224] })}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", times: [0, 0.28, 0.52, 0.78, 1] }}
          />

          <motion.g
            style={{ transformOrigin: "210px 120px" }}
            animate={anim({ rotate: [3, -3, 3] })}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="210" y1="120" x2="210" y2="100" stroke="#8A8F99" strokeWidth="3" strokeLinecap="round" />
            <circle cx="210" cy="96" r="5" fill="#F97316" filter="url(#softGlow)" />
          </motion.g>
        </motion.g>
      </motion.g>
    </svg>
  );
}
