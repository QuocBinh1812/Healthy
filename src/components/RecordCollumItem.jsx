import React from "react";

const RecordCollumItem = ({ title, content }) => {
  return (
    <div className="flex relative max-w-[270px] justify-center items-center  max-[790px]:text-center">
      <div className="bg-dark_600  w-[216px] h-[144px]"></div>
      <div className="absolute text-center flex-col">
        <h3 className="text-[22px] font-normal mb-[10px]   text-primary_300  capitalize">
          {title}
        </h3>
        <div className="w-[56px] my-0 mx-auto h-[2px] bg-light"></div>
        <div className="flex justify-center items-center my-0 mx-auto ">
          <p className="ha text-[18px] text-light  m-0 p-[7px] font-light]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordCollumItem;
