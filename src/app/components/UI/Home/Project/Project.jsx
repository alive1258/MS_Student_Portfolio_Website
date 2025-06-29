import SlideUp from "@/app/components/common/animations/SlideUp";
import ButtonOutline from "@/app/components/common/Button/ButtonOutline";
import ProjectCard from "./ProjectCard";

const Project = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch hero data");
    }

    const datas = await res.json();
    const projectsItem = datas?.data?.data;

    return (
      <div className="bg-[#F5F7FA] ">
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
            ></div>
            <h2 className="text-primary-base text-2xl font-bold">
              Featured Projects
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
              I’m a PhD researcher and teaching assistant passionate about using
              cutting-edge technologies to solve real-world mechanical problems.
              I believe in bridging theory and practice through research,
              simulation, and education.
            </p>
          </SlideUp>

          <div className="mt-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {projectsItem.length > 0 ? (
              projectsItem?.map((item, index) => (
                <ProjectCard key={index} item={item} delay={0.4 * index} />
              ))
            ) : (
              <div className="col-span-2 text-center text-gray-500 text-xl py-20">
                Coming Soon — project content will be available shortly.
              </div>
            )}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <ButtonOutline content="View All Projects" />
          </div>
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

export default Project;
