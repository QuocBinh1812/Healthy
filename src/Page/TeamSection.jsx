import React from "react";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import TeamItem from "./TeamItem";
const TeamSection = () => {
  return (
    <div className="bg-red w-full p-9">
      <div className="myContainer">
        <div className="flex justify-center items-center max-[790px]:flex-col ">
          <div className="flex-col gap-3 max-w-[250px] text-center">
            <h5 className="text-[20px] mb-3  text-mediumSlateBlue dark:text-lightBlue_1 capitalize">
              Team Members
            </h5>
            <h2 className=" text-[50px] max-[790px]:text-[30px] font-bold dark:text-lightBlue_1 mb-4 max-w-[400px] leading-tight">
              The best team available
            </h2>
          </div>
          <div className="flex justify-center items-center gap-11 flex-wrap max-w-[940px]">
            <TeamItem team={team1} title="Rasu" content="Photo Editor" />
            <TeamItem team={team2} title="Shaif Arfan" content="Photographer" />
            <TeamItem team={team3} title="Ayan Bilai" content="Photographer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
