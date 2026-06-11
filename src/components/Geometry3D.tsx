import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

interface Props {
  maxLength?: number;
  children: ReactNode;
  offSecondLight?: boolean;
}

const Geometry3D = ({ maxLength = 1, children, offSecondLight }: Props) => {
  return (
    <Canvas
      camera={{
        position: [5 * maxLength, 5 * maxLength, 15 * maxLength],
        fov: 20,
        far: 10_000,
      }}>
      <ambientLight intensity={2.25} />
      <directionalLight
        intensity={1.25}
        position={[2 * maxLength, 3 * maxLength, 1 * maxLength]}
      />

      {!offSecondLight && (
        <directionalLight
          intensity={1.25}
          position={[-2 * maxLength, -3 * maxLength, -1 * maxLength]}
        />
      )}

      <OrbitControls autoRotate autoRotateSpeed={-4} enablePan={false} />

      <mesh position={[0, 0, 0]} scale={1.5}>
        {children}
      </mesh>
    </Canvas>
  );
};

export default Geometry3D;
