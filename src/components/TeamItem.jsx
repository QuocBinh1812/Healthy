import React from "react";

const TeamItem = ({ team: imgTeam, title, content }) => {
  return (
    <div className="flex-col max-w-[270px] max-[790px]:text-center">
      <div className="mb-5 ">
        <img
          className="w-full rounded-[50px]"
          srcSet={`${imgTeam}`}
          alt="team1"
        />
      </div>
      <h5 className="text-[20px] mb-3  text-mediumSlateBlue dark:text-lightBlue_1 capitalize">
        {title}
      </h5>
      <p className="text-[16px] mb-3  text-darkBlue_1 dark:text-lightBlue_1">
        {content}
      </p>
    </div>
  );
};

export default TeamItem;
