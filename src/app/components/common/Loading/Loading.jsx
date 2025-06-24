import React from "react";

const Loading = () => {
  return (
    <div className=" flex items-center justify-center h-screen ">
      <div className="flex justify-center items-center h-screen ">
        <div className="flex space-x-4">
          <div className="h-8 w-8 bg-[#0064f7] rounded-full dot delay-0"></div>
          <div className="h-8 w-8 bg-[#0064f7] rounded-full dot delay-300"></div>
          <div className="h-8 w-8 bg-[#0064f7] rounded-full dot delay-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
