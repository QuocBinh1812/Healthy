import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import scrollImg from "../assets/logo/component_scroll.png";

const CustomerLayout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("max-width: 770px").matches
  );
  const [isWidth, setIsWidth] = useState(window.innerWidth);
  console.log("iswidth: ", isWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 770px)").matches);
      setIsWidth(window.innerWidth);
      //console.log(window.matchMedia("(max-width: 770px)").matches);
      console.log("iswidth: ", isWidth);
    });
  }, []);
  return (
    <div className="wrapper relative bg-light">
      <Header isMobile={isMobile} />
      <Outlet isWidth={isWidth} />
      <div
        className="w-max fixed absolute bottom-[500px] right-[80px]"
        onClick={scrollToTop}
      >
        <img className="w[48px] h-[48px]" src={scrollImg} alt="scroll" />
      </div>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
