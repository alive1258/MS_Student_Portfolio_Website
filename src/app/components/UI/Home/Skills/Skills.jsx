import React from "react";
import SkillCard from "./SkillCard";
import SlideUp from "@/app/components/common/animations/SlideUp";
import { cardData } from "@/utils/fakeData/cardData";

const Skills = async () => {
  try {
    // Fetch categories first
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/skills-category?limit=100`,
      {
        next: { revalidate: 30 },
      }
    );

    // Fetch all skills (no filter param needed here because we will group client-side)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/skills?limit=100`,
      {
        next: { revalidate: 30 },
      }
    );
    const responses = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/section-description`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!responses.ok) {
      throw new Error("Failed to fetch section-description data");
    }
    const sectionData = await responses.json();

    const sectionsItem = sectionData?.data?.data?.find(
      (item) => item?.title === "Skills & Expertise"
    );

    if (!response.ok) throw new Error("Failed to fetch categories data");
    if (!res.ok) throw new Error("Failed to fetch skills data");

    const categoriesData = await response.json();
    const skillsData = await res.json();

    const categories = categoriesData?.data?.data || [];
    const skills = skillsData?.data?.data || [];

    // Group skills by category id and assign a color from cardData
    const groupedSkills = categories.map((category, idx) => {
      const matchedCard = cardData[idx % cardData.length]; // safe fallback
      return {
        title: category.title,
        color: matchedCard?.color,
        bgColor: matchedCard?.bgColor,
        gradient: matchedCard?.gradient,
        borderColor: matchedCard?.borderColor,
        skills: skills
          .filter(
            (skill) => String(skill.skills_category_id) === String(category.id)
          )
          .map((skill) => ({
            title: skill.skill_title,
            percentage: Number(skill.skill_amount) || 0,
            bgColor: matchedCard?.bgColor, // ✅ pass class string like "from-transparent via-yellow-500 to-transparent"
            color: matchedCard?.color, // ✅ pass class string like "from-transparent via-yellow-500 to-transparent"
          })),
      };
    });

    return (
      <div className="bg-[#101828] overflow-hidden relative md:mt-32 mt-20 ">
        <div className="absolute md:block hidden bottom-gradient-line"></div>
        <div className="absolute md:block hidden custom-gradient-line"></div>
        <div className="container py-24 relative overflow-hidden">
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
            <h2 className="text-[#fff] text-center text-2xl font-bold">
              Skills & Expertise
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
            {sectionsItem && (
              <p className="mt-10 text-[#fff] md:w-3/4  mx-auto text-center font-semibold md:text-3xl text-xl">
                {sectionsItem?.description}
              </p>
            )}
          </SlideUp>
          {/* Your background decorations and titles */}
          <div
            className="absolute -bottom-[973px] left-[20px] rounded-full opacity-40 pointer-events-none z-0"
            style={{
              width: "1460px",
              height: "1540px",
              borderRadius: "1540px",
              border: "7px solid #FFF",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "222px",
              height: "222px",
              right: "923px",
              top: "551px",
              background: "#FFF",
              opacity: 0.2,
              filter: "blur(50px)",
              borderRadius: "50%",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "222px",
              height: "222px",
              right: "103px",
              top: "251px",
              background: "#FFF",
              opacity: 0.2,
              filter: "blur(50px)",
              borderRadius: "50%",
            }}
          />
          {/* Skill Cards */}
          <div className="grid mt-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {groupedSkills.length > 0 ? (
              groupedSkills.map((category, idx) =>
                category.skills.length > 0 ? (
                  <SkillCard key={idx} item={category} delay={0.4 * idx} />
                ) : null
              )
            ) : (
              <div className="col-span-2 text-center text-gray-500 text-xl py-20">
                Coming Soon — skills data will be available shortly.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Skills section fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the skills section.
      </div>
    );
  }
};

export default Skills;
