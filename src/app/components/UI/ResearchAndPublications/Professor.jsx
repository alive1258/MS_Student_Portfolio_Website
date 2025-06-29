"use client";
import React, { useRef } from "react";
import ProfessorCard from "./ProfessorCard";

const Professor = ({ professorsItem }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <div className="flex justify-center md:space-x-4 space-x-1">
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
          Professor
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

      <div className="relative mt-12">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          onClick={() => scroll("left")}
        >
          ◀
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-10 scrollbar-hide scroll-smooth snap-x"
        >
          {professorsItem?.map((item, index) => (
            <div
              className="snap-start shrink-0 w-full md:w-[90%]"
              key={item.id}
            >
              <ProfessorCard item={item} idx={index} delay={0.4 * index} />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          onClick={() => scroll("right")}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Professor;
