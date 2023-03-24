import React from "react";
import { RiImageEditLine, RiHeartsFill } from "react-icons/ri";
import { importAll } from "../utils/hooks/useGetImage";
import { MdPhotoCamera } from "react-icons/md";
import team2 from "../assets/images/team2.png";
import ServiceItem from "./ServiceItem";

import GarleryItem from "../components/GarleryItem";
const Service = () => {
  const myIcon = importAll(
    require.context("../assets/logo", false, /\.(png|jpg|jpe?g|svg)$/)
  );
  const foodPicture = importAll(
    require.context("../assets/Photo/img", false, /\.(png|jpg|jpe?g|svg)$/)
  );
  return (
    <div id="Service" className=" w-full py-[22px] ">
      <div className="myContainer">
        <div className="flex-col justify-center items-center gap-9">
          <div className="flex max-[770px]:flex-col justify-center items-center gap-[84px]">
            <ServiceItem icon={myIcon["food.png"]} title="Morning" />
            <ServiceItem icon={myIcon["food.png"]} title="Lunch" />
            <ServiceItem icon={myIcon["food.png"]} title="Dinner" />
            <ServiceItem icon={myIcon["coffee-15.png"]} title="Snack" />
          </div>
        </div>
        <div className="flex justify-center mt-[25px] mb-[28px] items-center gap-2 flex-wrap max-w-[960px]">
          <GarleryItem team={foodPicture["m03.jpg"]} title="05.21.Morning" />
          <GarleryItem team={foodPicture["l03.jpg"]} title="05.21.Morning" />
          <GarleryItem team={foodPicture["d01.jpg"]} title="05.21.Morning" />
          <GarleryItem team={foodPicture["l01.jpg"]} title="05.21.Morning" />
          <GarleryItem team={foodPicture["m03.jpg"]} title="05.21.Morning" />
          <GarleryItem team={foodPicture["l02.jpg"]} title="05.21.Morning" />
          <GarleryItem team={foodPicture["d02.jpg"]} title="05.21.Morning" />
          <GarleryItem team={foodPicture["m03.jpg"]} title="05.21.Morning" />
        </div>

        <button class="service__button py-[14px] max-w-[296px] px-[4px] rounded my-0 mx-auto text-center flex justify-center items-center">
          <span class="text-[18px] w-[288px] text-light font-light leading-7">
            記録をもっと見る
          </span>
        </button>
      </div>
    </div>
  );
};

export default Service;
