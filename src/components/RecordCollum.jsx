import React from "react";
import RecordCollumItem from "./RecordCollumItem";

const RecordCollum = () => {
  return (
    <div id="About" className=" w-full p-10 mt-[110px]">
      <div className="myContainer ">
        <div className="flex max-[770px]:flex-col justify-between items-center gap-[32px]">
          <RecordCollumItem title="RECOMMENDED COLUMN" content="オススメ" />
          <RecordCollumItem title="RECOMMENDED COLUMN" content="オススメ" />
          <RecordCollumItem title="RECOMMENDED COLUMN" content="オススメ" />
          <RecordCollumItem title="RECOMMENDED COLUMN" content="オススメ" />
        </div>
      </div>
    </div>
  );
};

export default RecordCollum;
