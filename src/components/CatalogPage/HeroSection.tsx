import { useState, useEffect } from "react";
import Hero from "../../asset/Hero.png";
import Bar from "./Bar";
import { Card } from "./Card";
import CardWithHover from "./CardBuy";
import CardScaleBuy from "./CardBuy";
import CardHover from "./CardHover";
import CardInro from "./CardInro";
import CardScale from "./CardScale";
import Page from "./CardSlide";
import EndCard from "./EndCard";
import New from "./New";
import CardScaleAnimation from "./SpecialCard";
import HeroSectionSkeleton from "./Sketleton";
import CardPro from "./CaffeePage/CardPro";

export default function HeroSection() {
  const [loading, setLoading] = useState(true);

  const cardData = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/12/ab/fa/12abfa3d38b33088630a14b944e40aef.jpg",
      width: "w-40",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/74/3c/12/743c12c810c6efc255620b2b935b1203.jpg",
      width: "w-40",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/d3/c1/50/d3c150b29a1c7711d737aad9106b63bd.jpg",
      width: "w-40",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/564x/1e/22/5f/1e225f41205d2f32fa57dd2f65c585f6.jpg",
      width: "w-40",
    },
  ];

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {loading ? (
        <HeroSectionSkeleton />
      ) : (
        <>
          <div className="inset-0 ">
            <div className="flex w-1/2 justify-between m-auto">
              <h1 className="absolute text-5xl text-white font-bold leading-tight mb-4 mt-60">
                30%
              </h1>
              <h1 className="absolute text-5xl text-white font-bold leading-tight mb-4 mt-60  pl-[700px]">
                Off
              </h1>
            </div>
            <img
              src={Hero}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center mt-[700px] ">
            <CardScale />
          </div>
          <div className="mt-64">
            <Page />
          </div>
          <div className="mt-10">
            <Bar />
          </div>
          <div>
            <CardPro/>
          </div>
          <div className="w-4/5 m-auto">
            <h1 className="text-4xl font-bold text-center py-10 text-white">
              Popular order{" "}
            </h1>
            <CardHover />
          </div>
          <div className="w-4/5 m-auto">
            <h1 className="text-4xl font-bold text-center py-10 text-white">
              Special Menu for today
            </h1>
            <CardScaleAnimation />
          </div>
          <div className="w-4/5 m-auto mt-14">
            <New />
          </div>
          <div className="m-auto w-4/5 mt-10  ">
            <h1 className="text-4xl font-bold text-center py-10 text-white ">
              Coffee Bean
            </h1>
            <CardWithHover />
          </div>
          <div className="w-4/5 m-auto mt-14">
            <h1 className="text-4xl font-bold text-center py-10 text-white">
              Introduction
            </h1>
            <CardInro />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-center py-10 text-white">
              Full Option
            </h1>
            <EndCard />
          </div>
        </>
      )}
    </>
  );
}
