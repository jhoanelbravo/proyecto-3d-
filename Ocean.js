import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Ocean = ({ modelRef }) => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current && modelRef.current) {
      const time = clock.getElapsedTime();

      // Obtener la posición del barco
      const boatX = modelRef.current.position.x;
      const boatZ = modelRef.current.position.z;

      // Actualizar la geometría para simular olas alrededor del barco
      mesh.current.geometry.attributes.position.needsUpdate = true;
      const positions = mesh.current.geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 1];

        // Calcular la distancia del punto al barco
        const distance = Math.sqrt((x - boatX) ** 2 + (z - boatZ) ** 2);

        // Modificar la altura para simular el impacto de las olas
        positions[i + 2] = Math.sin(distance * 5 - time * 2) * 0.1;
      }
    }
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
      <planeGeometry args={[50, 50, 100, 100]} />
      <meshStandardMaterial color={"#001a33"} />
    </mesh>
  );
};

export default Ocean;
