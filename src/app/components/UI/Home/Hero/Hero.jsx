import HeroCard from "./HeroCard";

const Hero = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/home-hero-section`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch hero data");
    }

    const datas = await res.json();
    const heroItem = datas?.data?.data?.[0];

    return (
      <div className="md:pt-36 pt-28 relative h-full w-full overflow-hidden">
        <div className="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px] "></div>

        {/* Blurred Background Circles */}
        <div className="absolute md:block hidden blurred-blue-circle"></div>
        <div
          className="absolute rounded-full opacity-40 blur-[150px] bg-[#E9C12F]"
          style={{
            width: "593.727px",
            height: "531.226px",
            right: "-72.727px",
            top: "-345.17px",
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA] pointer-events-none"
          style={{
            width: "699.729px",
            height: "626.07px",
            left: "152.271px",
            bottom: "-477.762px",
          }}
        />

        {/* Hero Section Content */}
        <div className="grid md:grid-cols-2 grid-cols-1 container md:gap-20 gap-10">
          {heroItem ? (
            <HeroCard item={heroItem} />
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

export default Hero;
