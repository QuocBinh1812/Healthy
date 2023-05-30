import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
const My3dScreen = () => {
  const meshRef = useRef();
  const meshRef2 = useRef();
  //const textureRef = useLoader(THREE.TextureLoader, "../assets/logo/food.png");

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={meshRef}>
        <boxBufferGeometry />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
      {/* <mesh ref={meshRef2}>
        <boxBufferGeometry />
        <meshStandardMaterial map={textureRef} />
      </mesh> */}
    </>
  );
};

export default My3dScreen;
