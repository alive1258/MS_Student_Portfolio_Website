import React from "react";
import Image from "next/image";

import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import SlideUp from "@/app/components/common/animations/SlideUp";

const DigitalFuture = () => {
  // === ANIMATION DELAY TIMINGS ===
  const titleDelay = 0.1;
  const paragraphDelay = 0.3;
  const buttonDelay = 0.6;

  return (
    <div className=" md:mt-32 mt-20 relative overflow-hidden w-full">
      {/* GRADIENT LINE DECORATION */}

      {/* =======================START MAIN CONTENT AREA ======================= */}

      <div className="pb-32 container mx-auto">
        {/* CTA CARD */}
        <div
          className="md:p-8 px-6 overflow-hidden bg-[#1A2A6C] text-white relative"
          style={{
            borderRadius: "16px",
          }}
        >
          {/* DECORATIVE IMAGE (HIDDEN ON SMALL SCREENS) */}
          <div className="absolute md:block hidden top-0 right-0">
            <Image
              className="rounded-2xl"
              src="/assets/images/decorativeElements.png"
              alt="Decorative Elements"
              height={455}
              width={402}
            />
          </div>

          <div className="flex justify-center md:py-20 py-16">
            <div className="text-white-base text-center">
              {/* === START TITLE SECTION === */}
              <SlideUp delay={titleDelay}>
                <div className="md:text-[32px] text-2xl font-black">
                  <SlideUp>
                    <h1 className="text-[#FAFAFA] md:text-[32px] text-[28px] font-black">
                      Collaborate with Sayem – Where Engineering Meets
                      Innovation
                    </h1>
                  </SlideUp>
                </div>
              </SlideUp>
              {/* === END TITLE SECTION === */}

              {/* === START PARAGRAPH TEXT === */}
              <SlideUp
                delay={paragraphDelay}
                className="mt-5  text-[16px] w-full md:max-w-[580px] mx-auto"
              >
                <p>
                  Advancing the field of Power Electronics through simulation,
                  data-driven research, and real-world impact. Whether you're in
                  academia or industry — let's collaborate and engineer
                  something exceptional!
                </p>
              </SlideUp>
              {/* === END PARAGRAPH TEXT === */}

              <SlideUp
                delay={buttonDelay}
                className="mt-12 flex justify-center items-center"
              >
                <Link href="/contact">
                  <button className="flex space-x-2 group uppercase  text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-1 rounded-full hover:bg-[#131313] bg-[#fff] hover:text-[#fff] text-[#000] hover:opacity-90">
                    <span>Discuss a Research Project</span>
                    <RiArrowRightUpLine
                      className="transform transition-all duration-300 ease-in-out group-hover:rotate-45"
                      size={24}
                    />
                  </button>
                </Link>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= END MAIN CONTAINER ======================= */}
    </div>
  );
};

export default DigitalFuture;
