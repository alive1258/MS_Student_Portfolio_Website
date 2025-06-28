"use client";
import SlideUp from "@/app/components/common/animations/SlideUp";
import React from "react";

const ExtraTitle = () => {
  return (
    <div>
      {/* Section Heading */}
      <SlideUp className="flex items-center justify-center space-x-4">
        <div
          className="mt-1"
          style={{
            width: "64px",
            height: "24px",
            background:
              "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        ></div>
        <h2 className="text-primary-base text-center text-2xl font-bold">
          Extra Curriculum Activities
        </h2>
        <div
          className="mt-1"
          style={{
            width: "64px",
            height: "24px",
            background:
              "linear-gradient(90deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        ></div>
      </SlideUp>

      {/* Subheading */}
      <SlideUp>
        <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
          A glimpse into my academic engagements, leadership roles, research
          involvements, and community contributions that shaped my personal and
          professional growth.
        </p>
      </SlideUp>
    </div>
  );
};

export default ExtraTitle;
