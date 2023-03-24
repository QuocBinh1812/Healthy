import logo from "./logo.svg";
import "./App.css";
import Header from "./Page/Header";
import HeroSection from "./Page/HeroSection.jsx";
import Service from "./Page/Service";
import AboutSection from "./Page/AboutSection.jsx";
import TeamSection from "./Page/TeamSection";
import Contact from "./Page/Contact";
import Company from "./Page/Company";
import Clound from "./Page/Clound";
import { useEffect, useState } from "react";
import Footer from "./Page/Footer";
import RecordLine from "./Page/RecordLine";
function App() {
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
    <div className="bg-light wrapper">
      <Header isMobile={isMobile} />
      <HeroSection isWidth={isWidth} />
      <Service />
      <AboutSection />
      <RecordLine />
      <Footer />
    </div>
  );
}

export default App;
