import SlideLeft from "@/app/components/common/animations/SlideLeft";
import SlideUp from "@/app/components/common/animations/SlideUp";
import ZoomIn from "@/app/components/common/animations/ZoomIn";
import Button from "@/app/components/common/Button/Button";
import ButtonOutline from "@/app/components/common/Button/ButtonOutline";
import Image from "next/image";
import React from "react";

const HeroCard = ({ item }) => {
  return (
    <>
      {/* Left Section */}
      <div className="flex justify-center items-center">
        <div className="md:mt-6">
          <p>{item?.name}</p>

          <h2 className="md:text-4xl text-primary-base text-2xl font-bold pt-4">
            {item?.class_name || "MS Student &"}
          </h2>

          <div className="pt-8 text-lg">
            <SlideLeft delay={0.4}>
              <h2 className="text-[#3479FD] md:text-4xl text-2xl font-bold">
                {item?.course_name}
              </h2>
              <p className="text-secondary-base md:text-lg text-base mt-8">
                {item?.description}
              </p>
            </SlideLeft>
          </div>

          <SlideUp className="md:mt-10 md:space-y-0 space-y-4 mt-6 md:flex items-center gap-6">
            <div>
              <Button content="View Our Work" />
            </div>
            <div>
              {item?.cv_link && (
                <a
                  href={item?.cv_link}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonOutline content="Download CV" />
                </a>
              )}
            </div>
          </SlideUp>
        </div>
      </div>

      {/* Right Section */}
      <ZoomIn>
        <div>
          <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
            <Image
              // src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.image}`}
              src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
              alt={item?.title || "Hero Image"}
              width={400}
              height={700}
              className="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            />
          </div>
        </div>
      </ZoomIn>
    </>
  );
};

export default HeroCard;
