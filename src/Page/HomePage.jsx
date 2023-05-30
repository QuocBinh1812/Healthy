import React from "react";
import Service from "../components/Service.jsx";
import HeroSection from "../components/HeroSection.jsx";
import MyMap from "../components/MyMap.jsx";
import My3dScreen from "../components/My3dScreen.jsx";
import { Canvas } from "react-three-fiber";
import MyStart from "../components/MyStart";
const HomePage = ({ isWidth }) => {
  return (
    <>
      <HeroSection isWidth={isWidth} />
      <Service />
      <MyMap />
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <My3dScreen />
      </Canvas>
    </>
  );
};

export default HomePage;
