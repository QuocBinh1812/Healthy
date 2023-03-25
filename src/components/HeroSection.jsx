import React, { useState, useEffect } from "react";

import { Progress } from "antd";
import LineChart from "./LineChart";
import { importAll } from "../utils/hooks/useGetImage";
const HeroSection = ({ isWidth }) => {
  const myIcon = importAll(
    require.context("../assets/Photo/img", false, /\.(png|jpg|jpe?g|svg)$/)
  );

  const data = [
    { name: "6月 ", uv: 2400, pv: 2400, amt: 2400 },
    { name: "7月 ", uv: 2300, pv: 1700, amt: 2400 },
    { name: "8月 ", uv: 2000, pv: 1800, amt: 2400 },
    { name: "9月 ", uv: 2200, pv: 1900, amt: 2400 },
    { name: "10月 ", uv: 2000, pv: 2200, amt: 2400 },
    { name: "11月 ", uv: 1800, pv: 2400, amt: 2400 },
    { name: "12月 ", uv: 2100, pv: 1700, amt: 2400 },
    { name: "1月 ", uv: 1800, pv: 1600, amt: 2400 },
    { name: "2月 ", uv: 1600, pv: 1400, amt: 2400 },
    { name: "3月 ", uv: 1500, pv: 1300, amt: 2400 },
    { name: "4月 ", uv: 1500, pv: 1200, amt: 2400 },
    { name: "5月 ", uv: 1200, pv: 1000, amt: 2400 },
  ];

  return (
    <div id="Home" className="flex-center pt-[90px] font-notosans">
      <div className=" w-full">
        <div className="flex w-full justify-center items-center max-[680px]:flex-col">
          <div className="max-w-[540px] relative  h-[316px] flex justify-center items-center">
            <img
              className="w-[540px] max-[680px]:w-full h-full "
              src={myIcon["d01.jpg"]}
              alt="logo"
            />
            <Progress
              className="absolute "
              strokeColor="#FFFFFF"
              type="circle"
              percent={75}
              strokeWidth={3}
              trailWidth={30}
              width={200}
              style={{ zIndex: 1 }}
              format={(percent) => (
                <p
                  style={{
                    color: "#FFFFFF",
                    margin: "0px 40px",
                    fontSize: "18px",
                    fontFamily: "Inter",
                  }}
                >
                  {" "}
                  05/21{" "}
                  <span
                    style={{
                      color: "#FFFFFF",

                      fontSize: "25px",
                      fontFamily: "Inter",
                    }}
                  >{` ${percent} %`}</span>
                </p>
              )}
            />
          </div>
          <div className="ha bg-dark_600 w-[740px] max-[680px]:w-full pr-[102px] ">
            <LineChart data={data} widthWin={isWidth} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
