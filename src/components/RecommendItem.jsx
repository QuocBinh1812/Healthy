import React from "react";

const RecommendItem = ({ imgRecom, title, content }) => {
  return (
    <div className="flex relative max-w-[270px] justify-center items-center  max-[790px]:text-center">
      <div className="bg-dark_600 border-[24px] border-primary_300">
        <img
          className="w-[248px] h-[240px] opacity-[0.25]"
          src={imgRecom}
          alt="team1"
        />
      </div>
      <div className="absolute text-center flex-col">
        <h3 className="text-[25px] font-normal mb-[10px] font-inter  text-primary_300 dark:text-lightBlue_1 capitalize">
          {title}
        </h3>
        <div className="flex justify-center items-center my-0 mx-auto bg-primary_400 ">
          <p className="ha text-[15px] text-light  m-0 p-[7px] font-inter font-normal]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendItem;
