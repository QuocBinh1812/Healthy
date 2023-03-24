import React from "react";
import { LineChart } from "recharts";

const RecordLine = () => {
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
    <div className="w-full">
      <div className="myContainer">
        <div className="flex w-full bg-black h-[304px]"></div>
      </div>
    </div>
  );
};

export default RecordLine;
