import Image from "next/image";
import React from "react";

const ExtraCurriculumCard = () => {
  return (
    <div className="bg-[#F5F5F4] h-fit border border-[#E0E0E0] hover:shadow-xl transition-all duration-300 ease-in-out  p-4  grid md:grid-cols-3 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-4 rounded-2xl">
      {/* START IMAGE SECTION */}
      <div className="bg-[#fff] w-full flex items-center justify-center shadow-sm rounded-lg">
        <div className="rounded-2xl">
          <Image
            src="/assets/images/e1.png"
            alt="Extra Curriculum Activities"
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
          <h1 className="md:text-2xl text-lg font-satoshi font-bold">
            Extra Curriculum Activities
          </h1>

          <div className="mt-4 space-y-2">
            <p>Inter Hall Football Championship 2015</p>
            <p>Sher E Bangla Hall, BUET, Dhaka, Bangladesh.</p>
            <p>August 23, 2015</p>
          </div>
        </div>
      </div>
      {/* END TEXT SECTION */}
    </div>
  );
};

export default ExtraCurriculumCard;
