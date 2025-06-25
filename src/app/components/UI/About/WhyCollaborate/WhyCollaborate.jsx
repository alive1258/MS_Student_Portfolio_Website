import SlideUp from "@/app/components/common/animations/SlideUp";
import { cardData } from "@/utils/fakeData/cardData";
import React from "react";
import ChooseCard from "./ChooseCard";

const WhyCollaborate = () => {
  return (
    <div>
      <div className="bg-[#18181B] ">
        <div className="container py-20">
          <SlideUp>
            <h1 className="md:text-[40px] text-[34px] font-satoshi font-bold text-[#FFF]  mx-auto text-center">
              Why Collaborate with Sayem on <br /> Power Electronics Research
            </h1>
          </SlideUp>

          <div className="mt-14 flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0 flex-wrap">
            {cardData?.map((card, index) => (
              <ChooseCard card={card} key={card.id} delay={index * 0.4} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCollaborate;
