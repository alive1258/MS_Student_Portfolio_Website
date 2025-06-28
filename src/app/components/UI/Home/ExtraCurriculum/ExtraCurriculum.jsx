import ExtraCurriculumClient from "./ExtraCurriculumClient";
import ExtraTitle from "./ExtraTitle";

const ExtraCurriculum = async () => {
  try {
    const res1 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/extra-curriculum-categories`,
      {
        next: { revalidate: 30 }, // ⏱️ ISR for 30 seconds
      }
    );

    const res2 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/extra-curriculum`,
      {
        next: { revalidate: 30 },
      }
    );

    const categoriesData = await res1.json();
    const defaultActivitiesData = await res2.json();

    return (
      <div className="relative overflow-hidden">
        {/* Blurred Background Shapes */}
        <div
          className="hidden md:block absolute -left-[183px] -bottom-[244px] rounded-[400px] opacity-40 -z-10"
          style={{
            width: "500px",
            height: "500px",
            background: "#FACC15",
            filter: "blur(200px)",
          }}
        ></div>
        <div
          className="absolute -right-[200px] -bottom-[187px] rounded-[400px] opacity-40 -z-10 hidden md:block"
          style={{
            width: "500px",
            height: "500px",
            background: "#A3E635",
            filter: "blur(200px)",
          }}
        ></div>

        <div className="container md:mt-32 mt-20">
          <ExtraTitle />

          {/* Interactive Client Component */}
          <ExtraCurriculumClient
            categories={categoriesData?.data?.data || []}
            defaultActivities={defaultActivitiesData?.data?.data || []}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("ExtraCurriculum fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading this section.
      </div>
    );
  }
};

export default ExtraCurriculum;
