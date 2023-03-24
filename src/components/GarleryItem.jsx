import React from "react";

const GarleryItem = ({ team: imgTeam, title }) => {
  return (
    <div className="flex-col relative max-w-[270px] max-[790px]:text-center">
      <div className="">
        <img className="w-[234px] h-[234px] " src={imgTeam} alt="team1" />
      </div>

      <div className="absolute bottom-0 left-0  flex justify-center items-center bg-primary_300 max-w-[120px]">
        <p className="ha text-[15px] m-0 p-[7px] font-inter font-normal]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default GarleryItem;
