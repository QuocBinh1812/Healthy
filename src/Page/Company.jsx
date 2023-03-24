import React from "react";
import facebookPng from "../assets/images/facebook.png";
const Company = () => {
  return (
    <div id="myCompany" className="w-full p-10">
      <div className="myContainer">
        <div className="flex-col text-center">
          <p className="text-[20px]  text-colorAuth ">
            Trusted by 5,000+ Companies Worldwide
          </p>
          <div className="flex-center gap-6">
            <div className="w-[151px] h-[40px]">
              <img src={`${facebookPng}`} alt="facebook" />
            </div>
            <div className="w-[151px] h-[40px]">
              <img src={`${facebookPng}`} alt="facebook" />
            </div>
            <div className="w-[151px] h-[40px]">
              <img src={`${facebookPng}`} alt="facebook" />
            </div>
            <div className="w-[151px] h-[40px]">
              <img src={`${facebookPng}`} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
