import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Icosahedron, Torus } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function FloatingShape({ position, color, geo }: { position: [number, number, number]; color: string; geo: "sphere" | "ico" | "torus" }) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.2;
    ref.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  const material = (
    <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.1} metalness={0.8} />
  );

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.5} position={position}>
      {geo === "sphere" && <Sphere ref={ref} args={[1, 64, 64]}>{material}</Sphere>}
      {geo === "ico" && <Icosahedron ref={ref} args={[1.1, 0]}>{material}</Icosahedron>}
      {geo === "torus" && <Torus ref={ref} args={[0.9, 0.3, 32, 100]}>{material}</Torus>}
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
        <directionalLight position={[-5, -5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#22d3ee" />

        <FloatingShape position={[-2.5, 1, 0]} color="#8b5cf6" geo="ico" />
        <FloatingShape position={[2.8, -0.5, -1]} color="#3b82f6" geo="sphere" />
        <FloatingShape position={[0, 1.8, -2]} color="#06b6d4" geo="torus" />
        <FloatingShape position={[1.5, -1.8, 0.5]} color="#a855f7" geo="ico" />
      </Suspense>
    </Canvas>
  );
}
