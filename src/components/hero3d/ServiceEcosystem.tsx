import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { Icon } from "@/utils/icon";
import { ecosystemNodes, type EcosystemNode, ROBOT_SCALE } from "./serviceEcosystemData";

// AI core sits at local (0, 0.75, 0.47) inside AIRobot's own tree, which is
// now wrapped in a scale={ROBOT_SCALE} group (see AIRobot.tsx) — scale that
// same way here so arrows/particles originate exactly at the glowing core,
// not the old pre-scale position.
const CORE_POS = new THREE.Vector3(0, 0.75, 0.47).multiplyScalar(ROBOT_SCALE);

function ArrowHead({ from, to, color, active }: { from: THREE.Vector3; to: THREE.Vector3; color: string; active: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);

  const { position, quaternion } = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(to, from).normalize();
    // Sit just before the node so the arrowhead visibly "points into" the card.
    const pos = new THREE.Vector3().lerpVectors(from, to, 0.9);
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    return { position: pos, quaternion: quat };
  }, [from, to]);

  useFrame(() => {
    if (!mesh.current) return;
    const mat = mesh.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = active ? 2.2 : 1;
  });

  return (
    <mesh ref={mesh} position={position} quaternion={quaternion}>
      <coneGeometry args={[0.055, 0.14, 10]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} toneMapped={false} />
    </mesh>
  );
}

function DataFlowParticle({ from, to, color, speed, offset, active }: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  color: string;
  speed: number;
  offset: number;
  active: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const effectiveSpeed = active ? speed * 2.4 : speed;
    const t = (state.clock.getElapsedTime() * effectiveSpeed + offset) % 1;
    mesh.current.position.lerpVectors(from, to, t);
    const mat = mesh.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = (active ? 1.8 : 1) + Math.sin(t * Math.PI) * 0.7;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.032, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} toneMapped={false} />
    </mesh>
  );
}

function EcosystemNodeItem({
  node,
  isHovered,
  onHoverChange,
  lang,
  exploreLabel,
}: {
  node: EcosystemNode;
  isHovered: boolean;
  onHoverChange: (id: string | null) => void;
  lang: string;
  exploreLabel: string;
}) {
  const target = useMemo(() => new THREE.Vector3(...node.position), [node.position]);
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      const bob = Math.sin(t * 0.5 + node.position[0]) * 0.06;
      group.current.position.set(node.position[0], node.position[1] + bob, node.position[2]);
      const scale = isHovered ? 1.12 : 1;
      group.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.15);
    }
  });

  return (
    <group>
      <Line points={[CORE_POS, target]} color={node.color} transparent opacity={isHovered ? 0.75 : 0.3} lineWidth={isHovered ? 1.6 : 1} />
      <ArrowHead from={CORE_POS} to={target} color={node.color} active={isHovered} />
      <DataFlowParticle from={CORE_POS} to={target} color={node.color} speed={0.16} offset={Math.random()} active={isHovered} />

      <group ref={group} position={node.position}>
        <Html center distanceFactor={7} zIndexRange={[20, 0]} occlude={false}>
          <a
            href={`/${lang}${node.href}`}
            onMouseEnter={() => onHoverChange(node.id)}
            onMouseLeave={() => onHoverChange(null)}
            onFocus={() => onHoverChange(node.id)}
            onBlur={() => onHoverChange(null)}
            className="block select-none rounded-lg border backdrop-blur-md transition-all duration-200"
            style={{
              borderColor: isHovered ? node.color : `${node.color}55`,
              background: isHovered ? "rgba(11,18,32,0.85)" : "rgba(11,18,32,0.55)",
              boxShadow: isHovered ? `0 0 28px ${node.color}55` : `0 0 16px ${node.color}18`,
              padding: isHovered ? "10px 14px" : "8px 12px",
              width: isHovered ? "196px" : "auto",
            }}
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Icon name={node.icon} className="h-3.5 w-3.5 shrink-0" style={{ color: node.color }} />
              <div>
                <div className="font-mono text-[10px] font-semibold tracking-[0.1em]" style={{ color: node.color }}>
                  {node.label}
                </div>
              </div>
            </div>
            {isHovered && (
              <>
                <p className="mt-2 whitespace-normal text-[10.5px] leading-snug text-mist-200/85">
                  {node.description}
                </p>
                <span
                  className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-medium"
                  style={{ color: node.color }}
                >
                  {exploreLabel}
                </span>
              </>
            )}
          </a>
        </Html>
      </group>
    </group>
  );
}

export function ServiceEcosystem({
  hoveredId,
  onHoverChange,
  lang,
  exploreLabel = "Explore Service →",
}: {
  hoveredId: string | null;
  onHoverChange: (id: string | null) => void;
  lang: string;
  exploreLabel?: string;
}) {
  return (
    <group>
      {ecosystemNodes.map((node) => (
        <EcosystemNodeItem
          key={node.id}
          node={node}
          isHovered={hoveredId === node.id}
          onHoverChange={onHoverChange}
          lang={lang}
          exploreLabel={exploreLabel}
        />
      ))}
    </group>
  );
}
