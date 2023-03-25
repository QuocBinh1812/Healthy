import React from "react";
import Service from "../components/Service.jsx";
import HeroSection from "../components/HeroSection.jsx";

const HomePage = ({ isWidth }) => {
  return (
    <>
      <HeroSection isWidth={isWidth} />
      <Service />
    </>
  );
};

export default HomePage;
