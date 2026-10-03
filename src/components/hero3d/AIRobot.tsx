import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ROBOT_SCALE } from "./serviceEcosystemData";

interface AIRobotProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  quality: "high" | "low";
  hoveredColor?: string | null;
}

const TEAL = "#0E7C86";
const TEAL_LIGHT = "#3FB6C2";
const SKY = "#38BDF8";

/**
 * A procedural, abstract AI robot — no external GLTF asset required.
 * Built to read as premium and intentional rather than a toy: smooth
 * capsule/sphere forms, glass-like torso panel, glowing chest core,
 * soft emissive eyes. Kept low-poly enough to run well on modest GPUs.
 */
export function AIRobot({ mouse, quality, hoveredColor = null }: AIRobotProps) {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);

  const segments = quality === "high" ? 48 : 20;

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#E4E7EC",
        metalness: 0.55,
        roughness: 0.35,
      }),
    []
  );

  const jointMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#9AA1AE",
        metalness: 0.45,
        roughness: 0.45,
      }),
    []
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#1E293B",
        metalness: 0.2,
        roughness: 0.05,
        transmission: 0.65,
        thickness: 0.4,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    []
  );

  const coreColor = useMemo(() => new THREE.Color(TEAL), []);
  const hoverColorObj = useMemo(() => (hoveredColor ? new THREE.Color(hoveredColor) : null), [hoveredColor]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Idle breathing + slow bob
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.6) * 0.06;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        mouse.current.x * 0.22,
        0.04
      );
    }

    // Subtle head tracking, clamped to a small, premium-feeling range
    if (head.current) {
      const targetY = THREE.MathUtils.clamp(mouse.current.x * 0.28, -0.14, 0.14);
      const targetX = THREE.MathUtils.clamp(-mouse.current.y * 0.18, -0.1, 0.12);
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, targetY, 0.05);
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, targetX, 0.05);
    }

    // AI core pulse — reacts to a hovered service by glowing brighter and
    // tinting toward that service's color, as if sending a pulse to it.
    if (core.current) {
      const basePulse = 1 + Math.sin(t * 1.6) * 0.06;
      const pulse = hoverColorObj ? basePulse * 1.18 : basePulse;
      core.current.scale.setScalar(pulse);
      const mat = core.current.material as THREE.MeshStandardMaterial;
      const targetIntensity = (hoverColorObj ? 2.6 : 1.6) + Math.sin(t * (hoverColorObj ? 3.2 : 1.6)) * 0.5;
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetIntensity, 0.15);
      const targetColor = hoverColorObj ? hoverColorObj : coreColor;
      mat.color.lerp(targetColor, 0.12);
      mat.emissive.lerp(targetColor, 0.12);
    }

    // Rotating data rings around the core
    if (ring1.current) ring1.current.rotation.z = t * 0.5;
    if (ring2.current) ring2.current.rotation.z = -t * 0.35;

    // Eye glow pulse (slow, calm — not blinking/creepy)
    const eyeGlow = 1.2 + Math.sin(t * 1.1) * 0.3;
    [leftEye.current, rightEye.current].forEach((eye) => {
      if (eye) (eye.material as THREE.MeshStandardMaterial).emissiveIntensity = eyeGlow;
    });
  });

  return (
    <group scale={ROBOT_SCALE}>
      <group ref={group} position={[0, -0.3, 0]}>
      {/* Head */}
      <group ref={head} position={[0, 1.85, 0]}>
        <mesh material={bodyMaterial} castShadow>
          <capsuleGeometry args={[0.42, 0.28, 8, segments]} />
        </mesh>
        {/* Visor / face plate */}
        <mesh position={[0, -0.02, 0.36]} material={glassMaterial}>
          <boxGeometry args={[0.58, 0.32, 0.06]} />
        </mesh>
        {/* Eyes */}
        <mesh ref={leftEye} position={[-0.15, -0.02, 0.4]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color={TEAL_LIGHT} emissive={TEAL_LIGHT} emissiveIntensity={1.4} toneMapped={false} />
        </mesh>
        <mesh ref={rightEye} position={[0.15, -0.02, 0.4]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color={TEAL_LIGHT} emissive={TEAL_LIGHT} emissiveIntensity={1.4} toneMapped={false} />
        </mesh>
      </group>

      {/* Neck */}
      <mesh position={[0, 1.5, 0]} material={jointMaterial}>
        <cylinderGeometry args={[0.12, 0.14, 0.18, segments]} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.9, 0]} material={bodyMaterial} castShadow>
        <capsuleGeometry args={[0.5, 0.9, 8, segments]} />
      </mesh>

      {/* Chest glass panel */}
      <mesh position={[0, 1.05, 0.44]} rotation={[0.05, 0, 0]} material={glassMaterial}>
        <circleGeometry args={[0.34, segments]} />
      </mesh>

      {/* AI Core */}
      <mesh ref={core} position={[0, 1.05, 0.47]}>
        <sphereGeometry args={[0.16, segments, segments]} />
        <meshStandardMaterial
          color={TEAL}
          emissive={TEAL}
          emissiveIntensity={1.8}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={ring1} position={[0, 1.05, 0.47]}>
        <torusGeometry args={[0.26, 0.008, 8, segments]} />
        <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={1} toneMapped={false} />
      </mesh>
      <mesh ref={ring2} position={[0, 1.05, 0.47]} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[0.32, 0.006, 8, segments]} />
        <meshStandardMaterial color={SKY} emissive={SKY} emissiveIntensity={0.9} toneMapped={false} />
      </mesh>

      {/* Shoulders + arms (simple elegant capsules, not overly mechanical) */}
      {[-1, 1].map((side) => (
        <group key={side} position={[0.62 * side, 1.2, 0]}>
          <mesh material={bodyMaterial}>
            <sphereGeometry args={[0.16, segments, segments]} />
          </mesh>
          <mesh position={[0.08 * side, -0.35, 0]} rotation={[0, 0, 0.15 * side]} material={jointMaterial}>
            <capsuleGeometry args={[0.1, 0.5, 6, segments]} />
          </mesh>
        </group>
      ))}

      {/* Lower body / base */}
      <mesh position={[0, 0.05, 0]} material={jointMaterial}>
        <cylinderGeometry args={[0.34, 0.22, 0.7, segments]} />
      </mesh>
      </group>
    </group>
  );
}
