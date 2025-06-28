import SlideUp from "@/app/components/common/animations/SlideUp";
import Image from "next/image";
import React from "react";

const HobbyCard = ({ item, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      {/* END: Icon Wrapper */}
      <div
        className={`bg-[#fff] hover:scale-105 transition-all ease-in-out duration-500  py-6 px-4 rounded-2xl group-hover:border border border-gray-200`}
      >
        {/* START: Icon Wrapper */}
        <div className="">
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
            alt={item?.title}
            width={60}
            height={60}
          />
        </div>
        {/* END: Icon Wrapper */}

        <h4 className={`text-lg  font-satoshi font-bold  mt-5`}>
          {item?.title}
        </h4>
        <p className="text-[#71717A]  text-[16px] mt-5">{item?.description}</p>

        {/* END: Link & Arrow */}
      </div>
    </SlideUp>
  );
};

export default HobbyCard;
