import ZoomIn from "@/app/components/common/animations/ZoomIn";
import Image from "next/image";
import React from "react";

const JourneyCard = ({ item }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div>
          <ZoomIn>
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
                alt={item?.title || "Journey Image"}
                width={400}
                height={400}
                className="md:h-[440px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </ZoomIn>
        </div>

        {/* Right: Text Content */}
        <div>
          <h1 className="text-primary-muted text-3xl font-semibold">
            {item?.title}
          </h1>

          <p className="mt-6 text-[20px] text-[#7C7C7C]">{item?.description}</p>

          {item?.sub_title && (
            <h4 className="mt-8 text-[#464646] text-xl font-semibold">
              {item?.sub_title}
            </h4>
          )}

          {/* Skills List */}
          <div className="mt-6 space-y-2">
            {item?.skills?.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                {/* Tick Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_198_1561)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4949 3.63308C19.7165 3.49979 19.9811 3.45752 20.2332 3.51513C20.4853 3.57274 20.7052 3.72577 20.8469 3.94208L21.8369 5.45208C21.966 5.64934 22.0212 5.88585 21.9928 6.11987C21.9645 6.35388 21.8544 6.57036 21.6819 6.73108L21.6079 6.80108L21.3829 7.01608C20.1379 8.22368 18.9307 9.46961 17.7629 10.7521C15.5659 13.1681 12.9569 16.3301 11.2009 19.3981C10.7109 20.2541 9.51391 20.4381 8.80391 19.6991L2.31891 12.9611C2.22598 12.8645 2.15341 12.7502 2.10553 12.625C2.05765 12.4998 2.03542 12.3662 2.04018 12.2323C2.04494 12.0983 2.07658 11.9667 2.13322 11.8452C2.18987 11.7237 2.27036 11.6148 2.36991 11.5251L4.32991 9.75708C4.50215 9.60179 4.72301 9.51119 4.95469 9.5008C5.18637 9.4904 5.41445 9.56085 5.59991 9.70008L8.90891 12.1811C14.0779 7.08408 17.0089 5.12808 19.4949 3.63308ZM19.7049 5.84908C17.4149 7.28108 14.5569 9.35808 9.70691 14.2071C9.53672 14.3773 9.31085 14.4804 9.07077 14.4975C8.83068 14.5146 8.59249 14.4445 8.39991 14.3001L5.05791 11.7941L4.47691 12.3181L9.79391 17.8441C11.6399 14.7741 14.1809 11.7181 16.2839 9.40608C17.3913 8.18953 18.5335 7.00504 19.7089 5.85408L19.7049 5.84908Z"
                      fill="#03A9F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_198_1561">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#464646] text-[20px]">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
