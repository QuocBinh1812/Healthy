import React from "react";
import shape1 from "../assets/Photo/shape/shape1.png";
import { importAll } from "../utils/hooks/useGetImage";
const ServiceItem = ({ icon, title }) => {
  const myIcon = importAll(
    require.context("../assets/logo", false, /\.(png|jpg|jpe?g|svg)$/)
  );
  return (
    // <div className="flex p-[30px] group hover:bg-mediumSlateBlue rounded-3xl">
    //   <div className="flex-col justify-center items-start  max-w-[300px]">
    //     <div className="service__icon group-hover:bg-lightBlue_1 group-hover:text-mediumSlateBlue mb-2 ml-2">
    //       {icon}
    //     </div>

    //     <h5 className="text-[20px] mb-3 group-hover:text-lightBlue_1 text-darkBlue_2 dark:text-lightBlue_1 capitalize">
    //       {title}
    //     </h5>
    //     <p className="text-[16px] mb-3 group-hover:text-lightBlue_1 text-darkBlue_1 dark:text-lightBlue_1">
    //       {" "}
    //       {text}
    //     </p>
    //   </div>
    // </div>
    <div className="flex">
      <div className="flex relative max-w[150px] justify-center items-center ">
        {/* <h5 className="text-[20px] mb-3 group-hover:text-lightBlue_1 text-darkBlue_2 dark:text-lightBlue_1 capitalize">
          {title}
        </h5>
        <p className="text-[16px] mb-3 group-hover:text-lightBlue_1 text-darkBlue_1 dark:text-lightBlue_1">
          {" "}
          {text}
        </p> */}
        <img className="object-contain" src={shape1} alt="logo" />
        <div className="flex-col absolute items-center justify-center text-center mb-1">
          <div className="flex justify-center items-center">
            <img className="object-contain" src={icon} />
          </div>
          <p className="text-[20px] font-inter text-light mb-3 ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
