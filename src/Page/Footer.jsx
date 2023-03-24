import React from "react";

const Footer = () => {
  const arrFooter = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];
  return (
    <div className="w-full bg-dark_500_text z-50   ">
      <div className="myContainer">
        <div className="flex gap-[45px] py-[56px]">
          {arrFooter.map((i) => (
            <div className="text-[11px] font-light text-light tracking-tight">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
