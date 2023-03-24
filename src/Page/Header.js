import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Logo from "../assets/logo/グループ 134.png";
import MenuHeader from "../components/MenuHeader.jsx";

//import * as myIcon from "../assets/logo";
import DrawMenu from "../components/DrawMenu";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const Header = ({ isMobile }) => {
  const headerRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(
  //   window.matchMedia("max-width: 770px").matches
  // );

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const myIcon = importAll(
    require.context("../assets/logo", false, /\.(png|jpe?g|svg)$/)
  );
  const handleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  // const fade = useSpring({

  const fadehidenShow = useSpring({
    from: { display: "none" },
    display: "block",
    reverse: !isNavOpen,
  });
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = " ";
    }
  }, isNavOpen);
  useEffect(() => {
    // window.addEventListener("resize", () => {
    //   setIsMobile(window.matchMedia("(max-width: 770px)").matches);
    //   console.log(window.matchMedia("(max-width: 770px)").matches);
    // });
    window.addEventListener("scroll", () => {
      if (headerRef.current && window.scrollY > 100) {
        headerRef.current.style.boxShadow =
          "0px 0px 10px 0px rgba(0, 0, 0, 0.5)";
      } else {
        headerRef.current.style.boxShadow = "none";
      }
    });
  }, []);
  return (
    <div
      ref={headerRef}
      className="w-full bg-dark_500_text z-50  fixed top-0 left-0 "
    >
      <animated.div
        style={fadehidenShow}
        className="w-[290vh] h-[100vh] absolute bg-darkBlue_4 opacity-10 hidden"
      ></animated.div>
      <div className="myContainer  ">
        <div className="flex h-header  items-center justify-between">
          <img
            className="w-[109px] h-[40px] ml-[17px] mr-[18px] "
            src={Logo}
            alt="logo"
          />
          <div className="flex-center  relative">
            {!isMobile && (
              <ul className="text-[16px] flex-center    mb-0">
                <MenuHeader icon={myIcon["icon_memo.png"]} title="自分の記録" />
                <MenuHeader
                  icon={myIcon["icon_challenge.png"]}
                  title="チャレンジ"
                />
                <MenuHeader
                  icon={myIcon["icon_info.png"]}
                  title="お知らせ"
                  count={1}
                />
              </ul>
            )}
            {isNavOpen ? (
              <img
                className="w-[32px] h-[32px] cursor-pointer"
                src={myIcon["icon_close.png"]}
                alt="logo"
                onClick={handleMenu}
              />
            ) : (
              <img
                className="w-[32px] h-[32px] cursor-pointer"
                src={myIcon["icon_menu.png"]}
                alt="logo"
                onClick={handleMenu}
              />
            )}
            <DrawMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
