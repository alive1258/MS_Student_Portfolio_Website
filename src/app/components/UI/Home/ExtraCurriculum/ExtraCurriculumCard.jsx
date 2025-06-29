import SlideUp from "@/app/components/common/animations/SlideUp";
import Image from "next/image";
import React from "react";

const ExtraCurriculumCard = ({ item, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className="bg-[#F5F5F4] md:h-[200px] h-full  border border-[#E0E0E0] hover:shadow-xl transition-all duration-300 ease-in-out p-4 grid md:grid-cols-3 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-4 rounded-2xl">
        {/* START IMAGE SECTION */}
        <div className="bg-[#fff] w-full flex items-center justify-center shadow-sm rounded-lg">
          <div className="rounded-2xl">
            <Image
              className="h-[150px]"
              src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
              alt={item?.title || " Image"}
              width={200}
              height={200}
            />
          </div>
        </div>
        {/* END IMAGE SECTION */}

        {/* START TEXT SECTION */}
        <div className="col-span-2">
          <div>
            {/* Title */}
            <h1 className="md:text-2xl text-lg font-bold">{item?.title}</h1>

            <div className="mt-4 space-y-2">
              <p>{item?.organization}</p>
              <p>{item?.institute}</p>
              <p>{item?.description}</p>
            </div>
          </div>
        </div>
        {/* END TEXT SECTION */}
      </div>
    </SlideUp>
  );
};

export default ExtraCurriculumCard;
