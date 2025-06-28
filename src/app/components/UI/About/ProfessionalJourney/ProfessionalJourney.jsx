import React from "react";
import JourneyCard from "./JourneyCard";

const ProfessionalJourney = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about-me`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch hero data");
    }

    const datas = await res.json();
    const aboutMeItem = datas?.data?.data?.[0];
    return (
      <div className="relative mt-20 overflow-hidden">
        {/* Glowing Blurred top Circle */}
        <div
          className="absolute -left-[162px] -top-[262px] w-[400px] h-[400px] rounded-full"
          style={{
            background: "#22D3EE",
            filter: "blur(200px)",
            borderRadius: "400px",
          }}
        ></div>
        {/* Bottom-Right Lime Blur */}
        <div
          className="absolute -right-[218px] -bottom-[185px] w-[400px] h-[400px] rounded-full"
          style={{
            background: "#A3E635",
            filter: "blur(200px)",
          }}
        ></div>
        <div className="container py-20 ">
          {aboutMeItem ? (
            <JourneyCard item={aboutMeItem} />
          ) : (
            // Placeholder UI when no data
            <div className="col-span-2 text-center text-gray-500 text-xl py-20">
              Coming Soon — Hero section content will be available shortly.
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Hero section fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the hero section.
      </div>
    );
  }
};

export default ProfessionalJourney;
