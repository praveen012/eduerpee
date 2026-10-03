import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function HoloPlatform({ quality }: { quality: "high" | "low" }) {
  const ring = useRef<THREE.Mesh>(null);
  const segments = quality === "high" ? 64 : 32;

  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.08;
  });

  return (
    <group position={[0, -1.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <ringGeometry args={[0.9, 1.5, segments]} />
        <meshBasicMaterial color="#0E7C86" transparent opacity={0.16} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[1.55, 1.62, segments]} />
        <meshBasicMaterial color="#3FB6C2" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <circleGeometry args={[0.9, segments]} />
        <meshBasicMaterial color="#0E7C86" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
