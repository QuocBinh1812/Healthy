import React from "react";
import AboutImg from "../assets/images/about.png";
import RecommendItem from "../components/RecommendItem";
import { importAll } from "../utils/hooks/useGetImage";

const AboutSection = () => {
  const myIcon = importAll(
    require.context("../assets/Photo/img", false, /\.(png|jpg|jpe?g|svg)$/)
  );
  return (
    <div id="About" className=" w-full p-10">
      <div className="myContainer ">
        <div className="flex max-[770px]:flex-col justify-center items-center gap-5">
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
