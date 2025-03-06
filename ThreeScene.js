"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import Model from "./Model";
import Ocean from "./Ocean";
import { useRef } from "react";

const Moon = () => {
  return (
    <mesh position={[5, 10, -10]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial emissive={"#ffffff"} emissiveIntensity={1} />
    </mesh>
  );
};

const ThreeScene = ({ modelPath }) => {
  const modelRef = useRef();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Canvas camera={{ position: [0, 2, 7] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, -10]} intensity={1.5} color={"#ffffff"} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
        <Moon />
        <Environment preset="night" />

        {/* Océano dinámico */}
        <Ocean modelRef={modelRef} />

        {/* Modelo flotante */}
        <Model modelPath={modelPath} ref={modelRef} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
