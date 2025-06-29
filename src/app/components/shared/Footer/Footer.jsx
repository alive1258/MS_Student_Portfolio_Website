import React from "react";

import {
  RiDribbbleLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";
import Link from "next/link";

import FooterQuickLink from "./FooterQuickLink";
import FooterSkills from "./FooterSkills";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* <div className="bg-[#6FC] py-4  uppercase">
     
        <Marquee direction="left" pauseOnHover={true} speed={90}>
          {services?.map((service, index) => (
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
                {service}
              </span>
            </div>
          ))}
        </Marquee>
      </div> */}
      <FooterSkills />

      {/* <!-- START FOOTER SECTION   --> */}
      <div className="bg-[#101828]">
        {/* <div className="bg-[#18181B]"> */}
        <div className="container py-14 grid md:grid-cols-4 grid-cols-1 gap-6 text-white w-full">
          <div className="md:col-span-2">
            {/* <!-- START FOOTER LOGO DESIGN AREA --> */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold">Abu Sayem</h1>
            </div>
            {/* <!-- / END FOOTER LOGO DESIGN AREA --> */}

            <div className="mt-10">
              <p className="text-[#FAFAFA]  text-[16px] w-full md:max-w-[600px]">
                Solvex is a digital agency dedicated to creating innovative,
                user-centered designs for startups and businesses. We turn your
                vision into reality with engaging, responsive, and modern
                design.
              </p>

              {/* <!-- START FOOTER SOCIAL LINK AREA --> */}
              <div className="mt-10">
                <h4 className="w-fit  border-b pb-3 border-border-base">
                  Follow Us
                </h4>

                <div className="mt-6 flex items-center space-x-3">
                  <div className="footer-social-icon">
                    <RiFacebookFill size={20} />
                  </div>

                  <div className="footer-social-icon">
                    <RiInstagramLine size={20} />
                  </div>
                  <div className="footer-social-icon">
                    <RiLinkedinFill size={20} />
                  </div>
                  <div className="footer-social-icon">
                    <RiTwitterXLine size={20} />
                  </div>
                  <div className="footer-social-icon">
                    <RiDribbbleLine size={20} />
                  </div>
                </div>
              </div>
              {/* <!-- / END FOOTER SOCIAL LINK AREA --> */}
            </div>
          </div>

          {/* <!-- START FOOTER QUICK LINK AREA --> */}
          <div className=" md:mt-0 mt-8">
            <FooterQuickLink />
          </div>
          {/* <!-- / END FOOTER QUICK LINK AREA --> */}

          {/* <!-- START FOOTER SERVICE AREA --> */}
          <div className="  md:mt-0 mt-10">
            <h2 className="text-[#FAFAFA] font-satoshi font-bold text-lg w-fit border-b pb-1 uppercase border-[#3B82F6]">
              Subscribe newsletter
            </h2>

            <div className="mt-10 space-y-4">
              <div className="bg-[#27272A] h-14 border border-[#3F3F46] w-full  flex items-center justify-between px-2 py-2 rounded-lg">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent text-[#A1A1AA] text-[16px]  placeholder-[#A1A1AA] outline-none "
                />
                <button className="bg-[#6FC] px-4 py-2 rounded-lg uppercase text-[#000] ">
                  Sign Up
                </button>
              </div>
              <p className="text-[#fff]">
                🏆 IEEE Award – 2023 | 📜 10+ Published Papers
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-[#FAFAFA] md:text-start text-center  font-bold text-xl">
                Say Hello,
              </h4>
              <p className="mt-1 text-[#D4D4D8] md:text-start text-center  text-[16px]">
                abusayme@gmail.com
              </p>
            </div>
          </div>
          {/* <!-- / END FOOTER SERVICE AREA --> */}
        </div>

        {/* <!-- START FOOTER COPYRIGHT AREA --> */}
        <div className="text-[#D4D4D8] border-t border-[#3F3F46] py-6 text-sm  text-center">
          <p>
            Copyright © {year},{" "}
            <Link className="text-blue-base" href="/">
              Solvex
            </Link>{" "}
            All Rights Reserved.
          </p>
        </div>
        {/* <!-- / END FOOTER COPYRIGHT AREA --> */}
      </div>
    </footer>
  );
};

export default Footer;
