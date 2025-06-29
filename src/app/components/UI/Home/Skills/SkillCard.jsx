"use client";
import SlideUp from "@/app/components/common/animations/SlideUp";
import React from "react";

const SkillCard = ({ item, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className="relative h-full  text-[#fff] overflow-hidden md:w-[424px] w-full p-6    rounded-[24px] border border-white/20 bg-[linear-gradient(234deg,_rgba(199,215,245,0.10)_2.11%,_rgba(14,26,50,0.10)_50.54%,_rgba(210,225,255,0.10)_98.98%)] backdrop-blur-[4.5px]">
        {/* Top Gradient Line */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#81CC1A] to-transparent" /> */}
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r ${item.gradient}`}
        />
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r ${item.gradient}`}
        />
        {/* Category Title */}
        <h1 className="text-2xl font-semibold ">{item?.title}</h1>

        {/* Skill List */}
        {item?.skills?.map((skill, index) => (
          <div key={index} className="mt-6">
            <div className="flex space-x-4">
              {/* Icon */}
              <div
                className="flex items-center justify-center w-14 h-14 p-4 aspect-square rounded-[99px]"
                style={{
                  background:
                    "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                  border: `1px solid ${item.borderColor}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#84CC16"
                    d="M21.643 10.243 15.86 8.14l-2.103-5.782a2.003 2.003 0 0 0-3.655 0L8.14 8.14l-5.782 2.103a2.002 2.002 0 0 0 0 3.714L8.14 15.86l2.103 5.783a2.003 2.003 0 0 0 3.655 0l2.103-5.783 5.783-2.103a2.002 2.002 0 0 0 0-3.714ZM14.6 13.926c-.155.056-.295.145-.412.262a.996.996 0 0 0-.262.412L12 19.895l-1.926-5.295a.996.996 0 0 0-.412-.412 1.01 1.01 0 0 0-.261-.262l-5.296-1.925 5.296-1.926a1.01 1.01 0 0 0 .261-.261c.117-.118.257-.207.412-.263L12 4.106l1.926 5.295c.056.155.145.295.262.412.117.118.257.207.412.263l5.296 1.925-5.296 1.926Z"
                  />
                </svg>
              </div>

              {/* Skill Info */}
              <div className="w-full">
                <div className="flex justify-between">
                  <h1 className="text-[16px] font-semibold">{skill.title}</h1>
                </div>
                <div className="flex space-x-4">
                  {/* Bar */}
                  <div className="md:w-[245px] w-full rounded-xl mt-4 h-4 bg-[rgba(1,5,13,0.5)]">
                    <div
                      className="h-4 rounded-xl"
                      style={{
                        width: `${skill.percentage}%`,
                        background: skill.bgColor, // ✅ Correct usage
                      }}
                    ></div>
                  </div>

                  <p className="text-[16px] mt-2.5 font-semibold">
                    {skill.percentage}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideUp>
  );
};

export default SkillCard;
