"use client";
import React, { useState } from "react";
import ExtraCurriculumCard from "./ExtraCurriculumCard";
import { projectCategories } from "@/utils/fakeData/projectCategories";
import { projectData } from "@/utils/fakeData/projectData";
import SlideUp from "@/app/components/common/animations/SlideUp";

const ExtraCurriculum = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // FILTERING CASE STUDIES BASED ON SELECTED CATEGORY
  const filteredData =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((item) => item.category === selectedCategory);
  return (
    <div className="relative overflow-hidden">
      {/* Blurred Background Shape */}
      <div
        className="hidden md:block absolute -left-[183px] -bottom-[244px] rounded-[400px] opacity-40 -z-10"
        style={{
          width: "500px",
          height: "500px",
          background: "#FACC15",
          filter: "blur(200px)",
        }}
      ></div>
      {/* Blurred Lime Background Shape */}
      <div
        className="absolute -right-[200px] -bottom-[187px] rounded-[400px] opacity-40 -z-10 hidden md:block"
        style={{
          width: "500px",
          height: "500px",
          background: "#A3E635", // Fallback for var(--Lime-400)
          filter: "blur(200px)",
        }}
      ></div>
      <div className="container md:mt-32 mt-20">
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
        <SlideUp>
          <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
            A glimpse into my academic engagements, leadership roles, research
            involvements, and community contributions that shaped my personal
            and professional growth.
          </p>
        </SlideUp>

        {/* START CATEGORY FILTER BUTTONS */}
        <div className="my-14 flex justify-center flex-wrap gap-3">
          {projectCategories?.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border cursor-pointer text-sm rounded-3xl px-6 py-2 font-medium transition-all duration-300 ease-in-out ${
                selectedCategory === cat
                  ? "text-white-base bg-[#3B82F6] border-[#3B82F6]"
                  : "text-tertiary-base border-[#71717A] hover:text-[#3B82F6] hover:border-[#3B82F6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* END CATEGORY FILTER BUTTONS */}

        {/* START FILTERED PORTFOLIO CARD LIST */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-16">
          {filteredData?.slice(0, 5)?.map((item, idx) => (
            <ExtraCurriculumCard
              item={item}
              idx={idx}
              key={`${item.id}-${selectedCategory}`}
              delay={idx * 0.3}
            />
          ))}
        </div>
        {/* END FILTERED PORTFOLIO CARD LIST */}
      </div>
    </div>
  );
};

export default ExtraCurriculum;
