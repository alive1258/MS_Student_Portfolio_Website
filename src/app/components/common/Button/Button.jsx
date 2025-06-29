import { RiArrowRightUpLine } from "@remixicon/react";

const Button = ({ content }) => {
  return (
    <button className="relative inline-flex group   font-medium text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-2 rounded-full bg-primary-muted text-white-base hover:opacity-90  overflow-hidden">
      <span className="z-10 text-[#fff]">{content}</span>

      {/* Icon wrapper */}
      <span className="relative w-6 h-6 ml-2 flex items-center justify-center">
        {/* Default icon with rotation on hover */}
        <RiArrowRightUpLine
          className="transform text-[#fff] transition-all duration-300 ease-in-out group-hover:rotate-45"
          size={24}
        />
      </span>
    </button>
  );
};

export default Button;
