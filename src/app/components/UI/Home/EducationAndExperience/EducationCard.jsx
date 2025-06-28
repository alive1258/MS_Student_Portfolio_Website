import SlideLeft from "@/app/components/common/animations/SlideLeft";
import React from "react";

const EducationCard = ({ item }) => {
  return (
    <SlideLeft delay={0.2}>
      <div className="mt-8">
        <div className="group border-b border-gray-200 pb-8 cursor-pointer bg-white hover:bg-[#F5F7FA] transition-all ease-in-out duration-300 rounded-xl p-6">
          <div className="flex space-x-6 items-start">
            {/* Icon */}
            <div className="bg-[#95DCBC] p-4 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M16 25.8336C14.1758 24.7804 12.1064 24.2259 10 24.2259C7.89356 24.2259 5.82423 24.7804 4 25.8336V8.50027C5.82423 7.44705 7.89356 6.89258 10 6.89258C12.1064 6.89258 14.1758 7.44705 16 8.50027M16 25.8336C17.8242 24.7804 19.8936 24.2259 22 24.2259C24.1064 24.2259 26.1758 24.7804 28 25.8336V8.50027C26.1758 7.44705 24.1064 6.89258 22 6.89258C19.8936 6.89258 17.8242 7.44705 16 8.50027M16 25.8336V8.50027"
                  stroke="#19B36E"
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
                <p>{item?.session}</p>
              </div>

              {/* Smooth expand on hover */}
              <div className="mt-6 text-[18px] text-info-muted ml-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all ease-in-out duration-500">
                <div className="flex space-x-6">
                  <p>Result:</p>
                  <p>{item?.result}</p>
                </div>
                <div className="mt-4 flex space-x-6">
                  <p>Major subject:</p>
                  <p>{item?.subject}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLeft>
  );
};

export default EducationCard;
