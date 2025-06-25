import { caseStudiesData } from "@/utils/fakeData/caseStudiesData";
import React from "react";
import ResearchAndPublicationCard from "./ResearchAndPublicationCard";
import SlideUp from "@/app/components/common/animations/SlideUp";

const ResearchAndPublications = () => {
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
        <h2 className="text-primary-base text-center text-2xl font-bold">
          Research & Publications
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
          Exploring cutting-edge solutions in CFD, AI, <br /> and Robotics
          through rigorous academic inquiry.
        </p>
      </SlideUp>
      {/* all project  */}
      <div className="mt-16">
        {caseStudiesData?.slice(0, 5)?.map((item, idx) => (
          <ResearchAndPublicationCard
            item={item}
            idx={idx}
            key={item.id}
            // key={`${item.id}-${selectedCategory}`}
            delay={idx * 0.3}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchAndPublications;
