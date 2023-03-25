import React, { useState } from "react";

import GalerryColItem from "./GalerryColItem";
import { importAll } from "../utils/hooks/useGetImage";

const TeamSection = () => {
  const [isMore, setIsMore] = useState(false);
  const Picture = importAll(
    require.context("../assets/Photo/img", false, /\.(png|jpg|jpe?g|svg)$/)
  );

  const arr = [
    {
      imgTeam: "column-1.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imgTeam: "column-2.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imgTeam: "column-3.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imgTeam: "column-4.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imgTeam: "column-5.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imgTeam: "column-6.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imgTeam: "column-7.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imgTeam: "column-8.jpg",
      day: "2021.05.17",
      hours: "23:25",
      content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: ["#魚料理", "#和食", "#DHA"],
    },
  ];
  return (
    <div className="bg-red w-full p-9">
      <div className="myContainer">
        <div className="flex justify-center mt-[25px] mb-[28px] items-center gap-2 flex-wrap max-w-[960px]">
          {arr.map((item, index) => (
            <GalerryColItem
              key={index}
              imgTeam={Picture[`${item.imgTeam}`]}
              day={item.day}
              hours={item.hours}
              content={item.content}
              hashtag={item.hashtag}
            />
          ))}
        </div>
        {isMore && (
          <div className="flex justify-center mt-[25px] mb-[28px] items-center gap-2 flex-wrap max-w-[960px]">
            {arr.map((item, index) => (
              <GalerryColItem
                key={index}
                imgTeam={Picture[`${item.imgTeam}`]}
                day={item.day}
                hours={item.hours}
                content={item.content}
                hashtag={item.hashtag}
              />
            ))}
          </div>
        )}
        <button
          onClick={() => {
            setIsMore(!isMore);
          }}
          class="service__button py-[14px] max-w-[296px] px-[4px] rounded my-0 mx-auto text-center flex justify-center items-center"
        >
          <span class="text-[18px] w-[288px] text-light font-light leading-7">
            記録をもっと見る
          </span>
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
