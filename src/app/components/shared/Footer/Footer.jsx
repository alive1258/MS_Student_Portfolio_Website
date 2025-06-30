import React from "react";

import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";
import Link from "next/link";
import { SiIeee } from "react-icons/si";
import { SiGooglescholar } from "react-icons/si";
import { SiResearchgate } from "react-icons/si";
import FooterQuickLink from "./FooterQuickLink";
import FooterSkills from "./FooterSkills";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
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

                <div className="mt-14    flex items-center space-x-3">
                  {/* Facebook */}
                  <div className="relative group footer-social-icon">
                    <div className="absolute footer-social-icon-name">
                      Facebook
                    </div>
                    <RiFacebookFill size={20} />
                  </div>

                  {/* Twitter/X */}
                  <div className="relative group footer-social-icon">
                    <div className="absolute footer-social-icon-name">
                      Twitter
                    </div>
                    <RiTwitterXLine size={20} />
                  </div>

                  {/* LinkedIn */}
                  <div className="relative group footer-social-icon">
                    <div className="absolute footer-social-icon-name">
                      LinkedIn
                    </div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/md-sayem-8a53b2208/"
                    >
                      <RiLinkedinFill size={20} />
                    </a>
                  </div>

                  {/* IEEE */}
                  <div className="relative group footer-social-icon">
                    <div className="absolute footer-social-icon-name">IEEE</div>
                    <a target="_blank" href="https://surli.cc/zlpgpa">
                      <SiIeee size={20} />
                    </a>
                  </div>

                  {/* Google Scholar */}
                  <div className="relative group footer-social-icon">
                    <div className="absolute footer-social-icon-name">
                      GoogleScholar
                    </div>
                    <a target="_blank" href="https://surli.cc/plkknf">
                      <SiGooglescholar size={20} />
                    </a>
                  </div>

                  {/* ResearchGate */}
                  <div className="relative group footer-social-icon">
                    <div className="absolute footer-social-icon-name">
                      ResearchGate
                    </div>
                    <a
                      target="_blank"
                      href="https://www.researchgate.net/profile/Md-Sayem-21"
                    >
                      <SiResearchgate size={20} />
                    </a>
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
