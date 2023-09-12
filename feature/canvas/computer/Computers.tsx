"use client";
import { Canvas } from "@react-three/fiber";
import style from "./computer.module.scss";
import {
  Html,
  Loader,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";
import Loading from "@/feature/UI/lottieAnimate/Loading";
const Computer = function () {
  const computer = useGLTF("/assets/canvas/computer/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="white" />
      <pointLight intensity={7} position={[0, 3, 1]} />
      <primitive object={computer.scene} position={[0, -2, -2.2]} scale={1.3} />
    </mesh>
  );
};
const ComputerCanvas = () => {
  return (
    <Canvas
      camera={{ position: [20, 3, 0], fov: 30 }}
      className={style["computer-canvas"]}
    >
      <OrbitControls
        // autoRotate
        // autoRotateSpeed={0.1}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
      />

      <Suspense
        fallback={
          <Html className={style["computer-placeholder"]}>{<Loading />}</Html>
        }
      >
        <Computer />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
