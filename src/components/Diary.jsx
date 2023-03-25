import React from "react";
import DiaryItem from "./DiaryItem";

const Diary = () => {
  return (
    <div id="Diary" className=" w-full py-[22px]">
      <div className="myContainer">
        <div className="w-[229px] h-[32px] font-inter font-normal text-[22px] leading-[27px] tracking-[0.11px] text-dark_500_text">
          MY DIARY
        </div>
        <div className="flex justify-center items-center gap-[12px] flex-wrap max-w-[960px]">
          <DiaryItem></DiaryItem>
          <DiaryItem></DiaryItem>
          <DiaryItem></DiaryItem>
          <DiaryItem></DiaryItem>
          <DiaryItem></DiaryItem>
          <DiaryItem></DiaryItem>
          <DiaryItem></DiaryItem>
          <DiaryItem></DiaryItem>
        </div>
      </div>
    </div>
  );
};

export default Diary;
