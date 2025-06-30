import SlideUp from "@/app/components/common/animations/SlideUp";
import React from "react";
import AboutCard from "./AboutCard";

const HomeAbout = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/home-about-section`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch home-about-section data");
    }

    const datas = await res.json();

    const homeAboutItem = datas?.data?.data?.[0];

    return (
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
        </SlideUp>
        <div>
          {homeAboutItem ? (
            <AboutCard item={homeAboutItem} />
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

export default HomeAbout;
