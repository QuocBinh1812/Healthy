import React from "react";

const DiaryItem = () => {
  return (
    <div className="p-[16px] w-[231px] h-[231px] text-gray_diary border-2 border-solid border-gray_diary">
      <div className="w-[147px] h-[48px] text-dark_500_text font-inter text-[18px] font-normal leading-[22px] tracking-[0.09px]">
        2021.05.21 <br /> 23:25
      </div>
      <div className="w-[200px] h-[132px] text-dark_500_text font-light text-[12px] leading-[16px] tracking-[0.06px]">
        私の日記の記録が一部表示されます。
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </div>
    </div>
  );
};

export default DiaryItem;
