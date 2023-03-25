import React from "react";
import RecommendItem from "./RecommendItem";
import { importAll } from "../utils/hooks/useGetImage";

const AboutSection = () => {
  const myIcon = importAll(
    require.context("../assets/Photo/img", false, /\.(png|jpg|jpe?g|svg)$/)
  );
  return (
    <div id="About" className=" w-full p-10 mt-[110px]">
      <div className="myContainer ">
        <div className="flex max-[770px]:flex-col justify-between items-center gap-[48px]">
          <RecommendItem
            imgRecom={myIcon["MyRecommend-1.jpg"]}
            title="Body record"
            content="自分のカラダの記録"
          />
          <RecommendItem
            imgRecom={myIcon["MyRecommend-2.jpg"]}
            title="MY EXERCISE"
            content="自分のカラダの記録"
          />
          <RecommendItem
            imgRecom={myIcon["MyRecommend-3.jpg"]}
            title="MY DIARY"
            content="自分の日記"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
