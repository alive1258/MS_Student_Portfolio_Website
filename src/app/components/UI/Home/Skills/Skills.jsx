// import SlideUp from "@/app/components/common/animations/SlideUp";
// import React from "react";
// import SkillCard from "./SkillCard";

// const Skills = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
//       next: { revalidate: 30 },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch hero data");
//     }

//     const datas = await res.json();
//     const skillsItem = datas?.data?.data;
//     console.log(skillsItem, "skillsItem");
//     return (
//       <div className="bg-[#101828] md:mt-32 mt-20">
//         <div className="container py-24">
//           <SlideUp className="flex items-center justify-center space-x-4">
//             <div
//               className="mt-1"
//               style={{
//                 width: "64px",
//                 height: "24px",
//                 background:
//                   "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
//               }}
//             ></div>
//             <h2 className="text-[#fff] text-2xl font-bold">
//               Skills & Expertise
//             </h2>
//             <div
//               className="mt-1"
//               style={{
//                 width: "64px",
//                 height: "24px",
//                 background:
//                   "linear-gradient(90deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
//               }}
//             ></div>
//           </SlideUp>
//           <SlideUp>
//             <p className="mt-10 text-[#fff] text-center font-semibold md:text-3xl text-2xl">
//               A snapshot of my core strengths in power electronics,
//               <br /> simulations, research, and technical problem-solving.
//             </p>
//           </SlideUp>

//           <div className="grid mt-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-4">
//             {skillsItem.length > 0 ? (
//               skillsItem?.map((item, index) => (
//                 <SkillCard key={index} item={item} />
//               ))
//             ) : (
//               <div className="col-span-2 text-center text-gray-500 text-xl py-20">
//                 Coming Soon — skillsItem content will be available shortly.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Hero section fetch failed:", error);
//     return (
//       <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
//         Oops! Something went wrong while loading the hero section.
//       </div>
//     );
//   }
// };

// export default Skills;

import React from "react";
import SlideUp from "@/app/components/common/animations/SlideUp";
import SkillCard from "./SkillCard";

const Skills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) throw new Error("Failed to fetch skills data");

    const data = await res.json();
    const skillsRaw = data?.data?.data || [];

    // Group by skillsCategory.title
    const groupedSkills = skillsRaw.reduce((acc, skill) => {
      const categoryTitle = skill.skillsCategory?.title || "Uncategorized";
      if (!acc[categoryTitle]) acc[categoryTitle] = [];
      acc[categoryTitle].push(skill);
      return acc;
    }, {});

    // Convert grouped object to array for rendering
    const skillCategories = Object.entries(groupedSkills).map(
      ([title, skills]) => ({
        skillsCategory: { title },
        skills: skills.map(({ skill_title, skill_amount }) => ({
          title: skill_title.trim(),
          percentage: parseInt(skill_amount),
        })),
      })
    );

    return (
      <div className="bg-[#101828] md:mt-32 mt-20">
        <div className="container py-24">
          <SlideUp className="flex items-center justify-center space-x-4">
            <div
              className="mt-1"
              style={{
                width: "64px",
                height: "24px",
                background:
                  "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            />
            <h2 className="text-[#fff] text-2xl font-bold">
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
            />
          </SlideUp>

          <SlideUp>
            <p className="mt-10 text-[#fff] text-center font-semibold md:text-3xl text-2xl">
              A snapshot of my core strengths in power electronics,
              <br /> simulations, research, and technical problem-solving.
            </p>
          </SlideUp>

          <div className="grid mt-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {skillCategories.length > 0 ? (
              skillCategories.map((item, index) => (
                <SkillCard key={index} item={item} />
              ))
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
