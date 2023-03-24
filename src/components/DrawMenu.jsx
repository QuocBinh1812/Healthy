import React from "react";
import { useSpring, animated } from "react-spring";
import { Affix } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-scroll";
const DrawMenu = ({ isNavOpen, setIsNavOpen }) => {
  const fadehidenShow = useSpring({
    from: { display: "none" },
    display: "block",
    reverse: !isNavOpen,
  });
  const arrItem = [
    "自分の記録",
    "体重グラフ",
    "目標",
    "選択中のコース",
    "コラム一覧",
    "設定",
  ];
  return (
    <Affix
      style={{
        position: "absolute",
        top: 50,
        right: 280,
        zIndex: 1000,
        backgroundColor: "#777777",
      }}
    >
      <animated.div
        className=" w-[280px] transition-all z-5000 bg-g hidden bg-gray_400_text  fixed "
        style={fadehidenShow}
      >
        {arrItem.map((i) => (
          <div
            className="py-[23px] pl-[32px] border-t-light border-b-dark_600 border-[1px] text-[18px] font-light leading-6 text-light"
            key={i}
          >
            {i}
          </div>
        ))}
      </animated.div>
    </Affix>
  );
};

export default DrawMenu;
