"use client";
import { Canvas } from "@react-three/fiber";
import style from "./planet.module.scss";
import { Html, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Computer = function () {
  const computer = useGLTF("/assets/canvas/planet/scene.gltf");
  return (
    <mesh>
      {/* <hemisphereLight intensity={2} groundColor="white" /> */}
      {/* <pointLight intensity={7} position={[0, 3, 1]} /> */}
      <primitive
        object={computer.scene}
        scale={3}
        position-y={0}
        position-x={0}
      />
    </mesh>
  );
};
const PlanetCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className={style["planet-canvas"]}
    >
      <OrbitControls
        autoRotate
        autoRotateSpeed={3}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <Suspense
        fallback={
          <Html className={style["planet-placeholder"]}>loading...</Html>
        }
      >
        <Computer />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
