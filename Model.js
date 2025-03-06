import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; // ✅ Importar desde @react-three/fiber

const Model = forwardRef(({ modelPath }, ref) => {
  const { scene } = useGLTF(modelPath);
  const localRef = useRef();

  useFrame(({ clock }) => {
    if (localRef.current) {
      // Movimiento de balanceo
      localRef.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.05;
      localRef.current.position.y = -0.8 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return <primitive object={scene} scale={1} ref={localRef} />;
});

export default Model;
