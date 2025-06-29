import React from "react";
import Marquee from "react-fast-marquee";

const FooterSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/skills?limit=100`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch hero data");
    }

    const datas = await res.json();
    const skillItem = datas?.data?.data;

    return (
      <div className="bg-[#6FC] py-4  uppercase">
        {/* service 1  */}
        <Marquee direction="left" pauseOnHover={true} speed={90}>
          {skillItem?.map((service, index) => (
            <div key={index} className="mx-4 flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.6432 10.2417L15.8607 8.13894L13.7579 2.35644C13.6267 1.99556 13.3876 1.6838 13.0732 1.46349C12.7587 1.24318 12.384 1.125 12 1.125C11.6161 1.125 11.2414 1.24318 10.9269 1.46349C10.6124 1.6838 10.3734 1.99556 10.2422 2.35644L8.13942 8.13894L2.35692 10.2417C1.99605 10.3729 1.68429 10.612 1.46398 10.9264C1.24367 11.2409 1.12549 11.6156 1.12549 11.9996C1.12549 12.3835 1.24367 12.7582 1.46398 13.0727C1.68429 13.3872 1.99605 13.6262 2.35692 13.7574L8.13942 15.8602L10.2422 21.6427C10.3734 22.0036 10.6124 22.3153 10.9269 22.5356C11.2414 22.7559 11.6161 22.8741 12 22.8741C12.384 22.8741 12.7587 22.7559 13.0732 22.5356C13.3876 22.3153 13.6267 22.0036 13.7579 21.6427L15.8607 15.8602L21.6432 13.7574C22.0041 13.6262 22.3158 13.3872 22.5361 13.0727C22.7564 12.7582 22.8746 12.3835 22.8746 11.9996C22.8746 11.6156 22.7564 11.2409 22.5361 10.9264C22.3158 10.612 22.0041 10.3729 21.6432 10.2417ZM14.5988 13.9252C14.4442 13.9814 14.3038 14.0707 14.1875 14.187C14.0712 14.3033 13.9818 14.4437 13.9257 14.5983L12 19.8943L10.0744 14.5983C10.0183 14.4437 9.92887 14.3033 9.81257 14.187C9.69627 14.0707 9.55588 13.9814 9.4013 13.9252L4.10536 11.9996L9.4013 10.0739C9.55588 10.0178 9.69627 9.92838 9.81257 9.81208C9.92887 9.69578 10.0183 9.55539 10.0744 9.40081L12 4.10487L13.9257 9.40081C13.9818 9.55539 14.0712 9.69578 14.1875 9.81208C14.3038 9.92838 14.4442 10.0178 14.5988 10.0739L19.8947 11.9996L14.5988 13.9252Z"
                  fill="black"
                />
              </svg>
              <span className="text-[#2C2C2C] text-[20px]  font-bold">
                {service?.skill_title}
              </span>
            </div>
          ))}
        </Marquee>
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

export default FooterSkills;
