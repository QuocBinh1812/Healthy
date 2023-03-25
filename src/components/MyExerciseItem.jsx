import React from "react";

const MyExerciseItem = ({ content, time }) => {
  return (
    <div className="flex-col mt-2">
      <div className="flex text-[15px]   font-light leading-[22px] text-light justify-between  items-center">
        <div className="ha">
          ・ {"  "}
          {content}
        </div>
        <div className="text-[18] font-normal mr-3 leading-[22px] text-primary_300">
          {time}
        </div>
      </div>
      <div className="text-[15] ml-[20px] font-normal leading-[22px] text-primary_300">
        26kacl
      </div>
      <div className="mt-1 w-full h-[2px] bg-gray_400_text"></div>
    </div>
  );
};

export default MyExerciseItem;
