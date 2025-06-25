"use client";
import React, { useState } from "react";

import { projectData } from "@/utils/fakeData/projectData";
import { projectCategories } from "@/utils/fakeData/projectCategories";
import Image from "next/image";

const Snapshots = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // FILTERING CASE STUDIES BASED ON SELECTED CATEGORY
  const filteredData =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((item) => item.category === selectedCategory);
  return (
    <div className="">
      {/* Blurred Background Shape */}

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
          <h2 className="text-primary-base text-center text-2xl font-bold">
            Snapshots of My World
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
        </div>
        <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
          Beyond research and engineering, here’s a glimpse into the books that
          shaped my thinking, movies that sparked my imagination, and personal
          moments that made life richer.
        </p>

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

        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-3 grid-rows-1 gap-4 mt-16">
          <div className="md:row-span-2 bg-amber-300">
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src="/assets/images/sayem_image.png"
                alt="zamirulPic"
                width={400}
                height={400}
                className="h-full rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
          <div className="md:col-start-1 md:row-start-3 bg-amber-300">
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src="/assets/images/sayem_image.png"
                alt="zamirulPic"
                width={400}
                height={400}
                className="h-full rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-2 md:row-start-1 bg-amber-300">
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src="/assets/images/sayem_image.png"
                alt="zamirulPic"
                width={400}
                height={400}
                className="h-[440px]  rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
          <div className="md:col-start-2 md:row-start-2 bg-amber-300">
            {" "}
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src="/assets/images/sayem_image.png"
                alt="zamirulPic"
                width={400}
                height={400}
                className="h-full rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
          <div className="md:col-start-2 md:row-start-3 bg-amber-300">
            {" "}
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src="/assets/images/sayem_image.png"
                alt="zamirulPic"
                width={400}
                height={400}
                className="h-full rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
          <div className="md:row-span-2 md:col-start-3 md:row-start-2 bg-amber-300">
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src="/assets/images/sayem_image.png"
                alt="zamirulPic"
                width={400}
                height={400}
                className="h-full rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
        </div>

        {/* START FILTERED PORTFOLIO CARD LIST */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-16">
          {/* {filteredData?.slice(0, 5)?.map((item, idx) => (
            <ExtraCurriculumCard
              item={item}
              idx={idx}
              key={`${item.id}-${selectedCategory}`}
              delay={idx * 0.3}
            />
          ))} */}
        </div>
        {/* END FILTERED PORTFOLIO CARD LIST */}
      </div>
    </div>
  );
};

export default Snapshots;
