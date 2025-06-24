"use client";

import { RiArrowRightUpLine } from "@remixicon/react";

const ButtonOutline = ({ content }) => {
  return (
    <div className="text-center  group relative inline-flex group ">
      <button
        className={`px-6 py-3 cursor-pointer flex text-[#2c2c2c] transition-all ease-in-out   border duration-300 border-[#1A2A6C] hover:text-[#fff] hover:bg-[#1A2A6C] focus:ring-0 focus:outline-none  font-medium rounded-3xl text-[16px]  text-center
       `}
      >
        <span>{content}</span>
        <span className="relative w-6 h-6 ml-2 flex items-center justify-center">
          {/* Default icon with rotation on hover */}
          <RiArrowRightUpLine
            className="transform text-[#2c2c2c] group-hover:text-[#fff] transition-all duration-300 ease-in-out group-hover:rotate-45"
            size={24}
          />
        </span>
      </button>
    </div>
  );
};

export default ButtonOutline;
