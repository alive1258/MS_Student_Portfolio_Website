import React from "react";
import Professor from "./Professor";

const ProfessorData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/professors`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch professors data");
    }

    const professorsData = await response.json();
    const professorsItem = professorsData?.data?.data;

    return (
      <div className="relative overflow-hidden md:mt-32 mt-20">
        {/* Purple blurred circle (top-left) */}
        <div
          className="absolute"
          style={{
            width: "400px",
            height: "400px",
            left: "-253px",
            top: "-200px",
            borderRadius: "400px",
            opacity: 0.4,
            background: "var(--Purple-500, #A855F7)",
            filter: "blur(200px)",
          }}
        ></div>

        {/* Green blurred circle (bottom-right) */}
        <div
          className="absolute"
          style={{
            width: "400px",
            height: "400px",
            aspectRatio: "1 / 1",
            right: "-230px",
            bottom: "-232px",
            borderRadius: "400px",
            opacity: 0.4,
            background: "var(--Green-400, #4ADE80)",
            filter: "blur(200px)",
          }}
        ></div>

        <div className="my-14 container   space-y-6">
          <Professor professorsItem={professorsItem} />
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

export default ProfessorData;
