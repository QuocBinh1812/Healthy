import React from "react";

const GalerryColItem = ({ imgTeam, day, hours, content, hashtag }) => {
  return (
    <div>
      <div className="flex-col relative max-w-[234px] max-[790px]:text-center">
        <div className="">
          <img className="w-[234px] h-[234px] " src={imgTeam} alt="team1" />
        </div>

        <div className="absolute bottom-0  left-0  flex justify-center items-center bg-primary_300 max-w-[120px]">
          <div className="ha text-[15px] text-light  p-[7px] mx-2 font-inter font-normal]">
            {day}
            <span className="ml-3">{hours}</span>
          </div>
        </div>
      </div>
      <div className="flex-col mt-[7px]">
        <p className="ha text-[15px] max-w-[234px] leading-[22px] text-dark_500_text  m-0  font-light]">
          {content}
        </p>
        {hashtag.map((item, index) => (
          <span className="text-primary_400 text-[12px] font-light mr-3   ">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GalerryColItem;
