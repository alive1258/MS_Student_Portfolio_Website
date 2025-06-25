import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyHobby = () => {
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
        <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
          I’m a PhD researcher and teaching assistant passionate about using
          cutting-edge technologies to solve real-world mechanical problems. I
          believe in bridging theory and practice through research, simulation,
          and education.
        </p>
        <div className="cursor-pointer mt-16  w-full max-w-[312px]">
          {/* END: Icon Wrapper */}
          <div
            className={`bg-[#fff] py-6 px-4 rounded-2xl group-hover:border border border-transparent `}
          >
            {/* START: Icon Wrapper */}
            <div className=" w-fit p-7  rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px]  rounded-br-[32px]">
              <Image
                src="/assets/images/e2.png"
                alt="h"
                width={40}
                height={40}
              />
            </div>
            {/* END: Icon Wrapper */}

            <h4 className={`text-lg  font-satoshi font-bold  mt-6`}>
              service.title
            </h4>
            <p className="text-[#71717A]  text-[16px] mt-6">
              service.description
            </p>
            {/* START: Link & Arrow */}
            <div className="group">
              <div className="service-card-link">
                <Link href="/">
                  <span
                    className={`text-[#71717A] group-hover:text-[#3B82F6] uppercase font-satoshi font-bold text-sm `}
                  >
                    get in touch
                  </span>
                </Link>
                <RiArrowRightLine
                  size={20}
                  className={`text-[#71717A] group-hover:text-blue-base  transition-all duration-300 ease-in-out`}
                />
              </div>
            </div>
            {/* END: Link & Arrow */}
          </div>
          {/* END: Card Wrapper */}
        </div>
      </div>
    </div>
  );
};

export default MyHobby;
