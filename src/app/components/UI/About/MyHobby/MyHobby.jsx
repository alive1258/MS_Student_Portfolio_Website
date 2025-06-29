import React from "react";
import HobbyCard from "./HobbyCard";

const MyHobby = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-hobbies`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch hero data");
    }

    const datas = await res.json();
    const hobbyItems = datas?.data?.data;
    return (
      <div className="bg-[#F5F7FA]">
        <div className="container py-24">
          <div className="flex items-center justify-center space-x-4">
            <div
              className="mt-1"
              style={{
                width: "64px",
                height: "24px",
                background:
                  "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            ></div>
            <h2 className="text-primary-base text-2xl font-bold">My Hobby</h2>
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
          <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-xl">
            I’m a PhD researcher and teaching assistant passionate about using
            cutting-edge technologies to solve real-world mechanical problems. I
            believe in bridging theory and practice through research,
            simulation, and education.
          </p>
          <div className="cursor-pointer mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {hobbyItems?.map((item, index) => (
              <HobbyCard key={item?.id} item={item} delay={index * 0.4} />
            ))}
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

export default MyHobby;
