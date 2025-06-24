import React from "react";

const HomeAbout = () => {
  return (
    <div className="container md:mt-32 mt-20">
      <div className="flex items-center justify-center space-x-4">
        <div
          className="mt-1"
          style={{
            width: "64px",
            height: "24px",
            background:
              "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        ></div>
        <h2 className="text-primary-base text-2xl font-bold">About</h2>
        <div
          className="mt-1"
          style={{
            width: "64px",
            height: "24px",
            background:
              "linear-gradient(90deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        ></div>
      </div>
      <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
        I’m a PhD researcher and teaching assistant passionate about using
        cutting-edge technologies to solve real-world mechanical problems. I
        believe in bridging theory and practice through research, simulation,
        and education.
      </p>
      <div className="mt-12 ">
        <div className="bg-gray-200 w-full rounded-xl h-[700px]">
          <h1 className="flex  justify-center items-center">video content</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
