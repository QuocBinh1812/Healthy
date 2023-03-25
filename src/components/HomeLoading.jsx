import React, { useState } from "react";
import tixLogo from "../assets/logo/グループ 134.png";
import { useSpring, animated } from "react-spring";
export default function HomeLoading() {
  const [flip, set] = useState(false);
  const fade = useSpring({
    reset: true,
    reverse: flip,
    from: { rotate: -45 },
    rotate: 45,
    delay: 100,
    onRest: () => set(!flip),
  });
  return (
    <div className="w-full h-[100vh] bg-slate-700 flex justify-center items-center">
      <animated.img
        style={fade}
        className="w-20 h-20"
        src={tixLogo}
        alt="load"
      ></animated.img>
    </div>
  );
}
