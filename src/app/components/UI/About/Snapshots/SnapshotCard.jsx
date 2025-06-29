import SlideUp from "@/app/components/common/animations/SlideUp";
import Image from "next/image";
import React from "react";

const SnapshotCard = ({ item, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className=" border border-[#E0E0E0] p-4  md:gap-y-0 gap-y-4 rounded-2xl">
        {/* START IMAGE SECTION */}

        <div className="rounded-2xl relative overflow-hidden">
          <Image
            className=" h-[250px] w-full hover:scale-110 duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] object-cover"
            src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
            alt={item?.title || " Image"}
            width={200}
            height={200}
          />
        </div>
      </div>
    </SlideUp>
  );
};

export default SnapshotCard;
