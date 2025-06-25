import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import SlideUp from "@/app/components/common/animations/SlideUp";
import Button from "@/app/components/common/Button/Button";

const ResearchAndPublicationCard = ({ item, idx, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className="bg-[#F5F5F4]  h-fit border border-[#E0E0E0] hover:shadow-xl transition-all duration-300 ease-in-out p-6 my-8 grid md:grid-cols-2 grid-cols-1 gap-8 rounded-2xl">
        {/* START IMAGE SECTION */}
        <div className={`${idx % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              className="w-full max-h-[410px] h-fit  object-cover rounded-2xl hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              src={item?.image}
              alt={item?.company}
              height={384}
              width={500}
            />
          </div>
        </div>
        {/* END IMAGE SECTION */}

        {/* START TEXT SECTION */}
        <div
          className={`${
            idx % 2 !== 0 ? "md:order-1" : "md:order-2"
          } flex flex-col justify-between`}
        >
          <div>
            {/* Project Title */}
            <h1 className="md:text-[32px] text-[20px] font-satoshi font-bold">
              <Link
                href={`/portfolio/${item.id}`}
                className="text-primary-base hover:text-blue-base"
              >
                {item?.title}
              </Link>
            </h1>

            {/* Project Description */}
            <div className="md:mt-8 mt-4 flex">
              <div className="bg-[#1A2A6C] h-10 size-10  flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99998 1.33301C4.31998 1.33301 1.33331 4.31967 1.33331 7.99967C1.33331 11.6797 4.31998 14.6663 7.99998 14.6663C11.68 14.6663 14.6666 11.6797 14.6666 7.99967C14.6666 4.31967 11.68 1.33301 7.99998 1.33301ZM7.33331 13.2863C4.69998 12.9597 2.66665 10.7197 2.66665 7.99967C2.66665 7.58634 2.71998 7.19301 2.80665 6.80634L5.99998 9.99967V10.6663C5.99998 11.3997 6.59998 11.9997 7.33331 11.9997V13.2863ZM11.9333 11.593C11.76 11.053 11.2666 10.6663 10.6666 10.6663H9.99998V8.66634C9.99998 8.29967 9.69998 7.99967 9.33331 7.99967H5.33331V6.66634H6.66665C7.03331 6.66634 7.33331 6.36634 7.33331 5.99967V4.66634H8.66665C9.39998 4.66634 9.99998 4.06634 9.99998 3.33301V3.05967C11.9533 3.85301 13.3333 5.76634 13.3333 7.99967C13.3333 9.38634 12.8 10.6463 11.9333 11.593Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="h-10 w-28  px-3 py-2 bg-[#EFEFEF] border-primary-base border-r">
                <h5 className="text-sm text-primary-muted">Publisher</h5>
              </div>
              <div className="h-10 px-3 py-2 bg-[#fff] w-full ">
                <h5 className="text-sm text-primary-muted">Taylor & francis</h5>
              </div>
            </div>
            {/* journal  */}
            <div className="mt-3 flex">
              <div className="bg-[#1A2A6C] h-10 size-10  flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 12.6668C7.08788 12.1402 6.05322 11.863 5 11.863C3.94678 11.863 2.91212 12.1402 2 12.6668V4.00014C2.91212 3.47353 3.94678 3.19629 5 3.19629C6.05322 3.19629 7.08788 3.47353 8 4.00014M8 12.6668C8.91212 12.1402 9.94678 11.863 11 11.863C12.0532 11.863 13.0879 12.1402 14 12.6668V4.00014C13.0879 3.47353 12.0532 3.19629 11 3.19629C9.94678 3.19629 8.91212 3.47353 8 4.00014M8 12.6668V4.00014"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="h-10 w-28 px-3 py-2 bg-[#EFEFEF] border-primary-base border-r">
                <h5 className="text-sm text-primary-muted">Journal </h5>
              </div>
              <div className="h-10 px-3 py-2 bg-[#fff] w-full ">
                <h5 className="text-sm text-primary-muted">
                  International Robotics and Automation (ICRA), 2023
                </h5>
              </div>
            </div>
            {/* DOI  */}
            <div className="mt-3 flex">
              <div className="bg-[#1A2A6C]  h-10 size-10  flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 10.1568L8 12.3788L12 10.1568V5.8435L8 3.6215L4 5.8435V10.1568ZM8 1.3335L2 4.66683V11.3335L8 14.6668L14 11.3335V4.66683L8 1.3335Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="h-10 w-28 px-3 py-2 bg-[#EFEFEF] border-primary-base border-r">
                <h5 className="text-sm text-primary-muted">DOI </h5>
              </div>
              <div className="h-10 px-3 py-2 bg-[#fff] w-full ">
                <h5 className="text-sm text-primary-muted">
                  10.1016/j.ijft.2023.100421
                </h5>
              </div>
            </div>

            {/* Tags */}
            <div className="md:mt-6 mt-5 flex flex-wrap gap-3">
              {item?.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className=" bg-[#A3A9C6]  text-[#fff] hover:text-[#1A2A6C]  cursor-pointer rounded-3xl px-4 py-2 text-sm transition-all duration-300 ease-in-out"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* View Live Project Link */}
          {/* View Live Project Link */}
          <div className="md:mt-9 mt-5 w-fit md:mx-0 mx-auto ">
            <Link href={`/portfolio/${item.id}`}>
              <Button content="View Details" />
            </Link>
          </div>
        </div>
        {/* END TEXT SECTION */}
      </div>
    </SlideUp>
  );
};

export default ResearchAndPublicationCard;
