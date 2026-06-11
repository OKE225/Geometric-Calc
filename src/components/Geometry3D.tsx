import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  offSecondLight?: boolean;
}

const Geometry3D = ({ children, offSecondLight }: Props) => {
  return (
    <Canvas
      camera={{
        position: [5, 5, 15],
        fov: 20,
        far: 10_000,
      }}>
      <ambientLight intensity={2.25} />
      <directionalLight intensity={1.25} position={[2, 3, 1]} />

      {!offSecondLight && (
        <directionalLight intensity={1.25} position={[-2, -3, -1]} />
      )}

      <OrbitControls autoRotate autoRotateSpeed={-4} enablePan={false} />

      <mesh position={[0, 0, 0]} scale={1}>
        {children}
      </mesh>
    </Canvas>
  );
};

export default Geometry3D;
