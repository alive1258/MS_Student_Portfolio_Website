import Image from "next/image";
import React from "react";
import AcademiaAndIndustryCard from "./AcademiaAndIndustryCard";

const AcademiaAndIndustry = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/experience`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch experience data");
    }

    const experiencesData = await response.json();
    const experienceItem = experiencesData?.data?.data;
    return (
      <div className="container md:mt-32 mt-20">
        <div className="flex  justify-center md:space-x-4 space-x-1">
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
            ACADEMIA & INDUSTRY
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

        <div className="my-14 space-y-6">
          {experienceItem?.map((item, index) => (
            <AcademiaAndIndustryCard
              key={item.id}
              item={item}
              idx={index}
              delay={0.4 * index}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("data fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the hero section.
      </div>
    );
  }
};

export default AcademiaAndIndustry;
