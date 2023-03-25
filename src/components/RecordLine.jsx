import React from "react";
import LineChart from "./LineChart";

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
        <div className="flex bg-dark_500_text w-full h-[52px] items-center p-[24px]">
          <p className="text-light font-inter m-0 text-[15px] h-max w-[96px] font-normal tracking-tighter">
            BODY RECORD
          </p>
          <p className="text-light font-inter m-0 text-[22px] h-max font-normal leading-[27px] tracking-tighter">
            2021.05.21
          </p>
        </div>
        <div className="flex w-full  h-[304px] bg-dark_500_text">
          <LineChart data={data} />
        </div>
        <div className="flex bg-dark_500_text w-full h-[52px] items-center py-[14px] px-[32px] gap-[16px]">
          <button class="bg-light px-[20px] m-0 py-[4px] rounded-[11px] my-0  text-center flex justify-center items-center">
            <span class="text-[15px] text-primary_300  font-light leading-7">
              記
            </span>
          </button>
          <button class="bg-light px-[20px] m-0 py-[4px] rounded-[11px] my-0  text-center flex justify-center items-center">
            <span class="text-[15px] text-primary_300  font-light leading-7">
              記
            </span>
          </button>
          <button class="bg-light px-[20px] m-0 py-[4px] rounded-[11px] my-0  text-center flex justify-center items-center">
            <span class="text-[15px] text-primary_300  font-light leading-7">
              記
            </span>
          </button>
          <button class="bg-primary_300 px-[20px] m-0 py-[4px] rounded-[11px] my-0  text-center flex justify-center items-center">
            <span class="text-[15px] text-light  font-light leading-7">記</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordLine;
