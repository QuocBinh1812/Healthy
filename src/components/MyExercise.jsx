import React from "react";
import scrollImg from "../assets/logo/scrollBar.png";
import MyExerciseItem from "./MyExerciseItem";

const MyExercise = () => {
  return (
    <div className="w-full mt-[56px]">
      <div className="myContainer">
        <div className="flex bg-dark_500_text w-full h-[52px] items-center p-[24px]">
          <p className="text-light font-inter m-0 text-[15px] h-max w-[96px] font-normal tracking-tighter">
            BODY RECORD
          </p>
          <p className="text-light font-inter m-0 text-[22px] h-max font-normal leading-[27px] tracking-tighter">
            2021.05.21
          </p>
        </div>
        <div className="flex max-[680px]:flex-col justify-between items-center px-[24px] bg-dark_500_text">
          <div className="flex-col max-w-[416px] w-full ">
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
          </div>
          <div className="flex-col max-w-[416px] w-full ">
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
            <MyExerciseItem content="家事全般（立位・軽い）" time="10min" />
          </div>
          <img src={scrollImg} className="h-[176px]" alt="scrollBar" />
        </div>
        {/* <div className="flex w-full  h-[304px] bg-dark_500_text"></div> */}
      </div>
    </div>
  );
};

export default MyExercise;
