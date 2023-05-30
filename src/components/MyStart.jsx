import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
function Star() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  const vertices = [
    [0, 0, 1.5],
    [0, 0, -1.5],
    [1.5, 0, 0],
    [-1.5, 0, 0],
    [0, 1.5, 0],
    [0, -1.5, 0],
  ];

  const faces = [
    [0, 1, 4],
    [1, 2, 4],
    [2, 3, 4],
    [3, 0, 4],
    [1, 0, 5],
    [2, 1, 5],
    [3, 2, 5],
    [0, 3, 5],
  ];

  return (
    <mesh ref={meshRef}>
      <tetrahedronBufferGeometry attach="geometry" args={[1, 0]} />
      <meshStandardMaterial attach="material" color="#ffc800" />
      <group scale={[0.5, 0.5, 0.5]}>
        <geometry attach="geometry" vertices={vertices} faces={faces} />
        <meshStandardMaterial attach="material" color="#ffc800" />
      </group>
    </mesh>
  );
}

function MyStart() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Star />
    </Canvas>
  );
}

export default MyStart;
