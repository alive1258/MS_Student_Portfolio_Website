import SlideRight from "@/app/components/common/animations/SlideRight";
import React from "react";

const ExperienceCard = ({ item }) => {
  return (
    <SlideRight delay={0.2}>
      <div className="mt-8">
        <div className="group border-b border-gray-200 pb-8 cursor-pointer bg-white hover:bg-[#F5F7FA] transition-all ease-in-out duration-300 rounded-xl md:p-6">
          <div className="flex md:space-x-6 space-x-3 items-start">
            {/* Icon */}
            <div className="bg-[#FCB1B1] md:p-4 p-2 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 8L21.3333 16L28 10.6667L25.3333 24H6.66667L4 10.6667L10.6667 16L16 8Z"
                  stroke="#EF4444"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-[#3D3D3D] md:text-2xl text-xl font-semibold">
                {item?.faculty_name}
              </h1>
              <div className="mt-3 text-[18px] text-info-muted flex space-x-6">
                <p>{item?.institute_name}</p>
                <p>{item?.duration}</p>
              </div>

              {/* Smooth expand on hover */}
              <div className="mt-6 text-[18px] text-info-muted ml-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all ease-in-out duration-500">
                <div className="">
                  <p>{item?.position}</p>
                </div>
                <div className="mt-4 ">
                  <p>{item?.subject}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideRight>
  );
};

export default ExperienceCard;
