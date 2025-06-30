"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { HiMiniXMark, HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Button from "../../common/Button/Button";
import { RiArrowUpLine } from "@remixicon/react";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  const closeSidebar = () => setOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMenuLinkClick = () => {
    setOpenModal("");
    closeSidebar();
    scrollToTop();
  };
  const hamburgerMenu = () => {
    setOpen(!open);
  };
  const toggleSidebar = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollPercent(Math.round(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { display: "Home", path: "/" },
    { display: "About", path: "/about" },
    { display: "Research & Publications", path: "/research-and-publications" },
    { display: "Projects", path: "/projects" },
    { display: "Experience", path: "/experience" },
    { display: "ECA", path: "/extra-curriculum" },
    { display: "Articles", path: "/articles" },
  ];

  return (
    <div className="w-full fixed z-[500] bg-white text-gray-900 border-b border-gray-200">
      <div className="md:max-w-[1440px] md:w-full px-5  mx-auto py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-semibold">ABU SAYEM</h3>
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center z-50">
          <button onClick={toggleSidebar}>
            {!open ? (
              <HiOutlineBars3BottomLeft className="w-8 h-8 text-gray-900" />
            ) : (
              <HiMiniXMark className="w-8 h-8 text-red-900" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={`flex space-x-6 flex-col md:flex-row items-center md:gap-5 gap-4 absolute md:static left-0 top-0 w-full md:w-auto transition-transform duration-500 ease-in-out ${
            open
              ? "translate-x-0 top-20 pt-10 bg-white md:bg-transparent h-screen "
              : "-translate-x-full md:translate-x-0 md:top-0 md:pt-0 md:h-0 top-20 pt-10 h-screen bg-white md:bg-transparent "
          }`}
        >
          {items.map(({ display, path }) => (
            <Link
              key={path}
              onClick={handleMenuLinkClick}
              className={`text-[16px] font-medium hover:text-[#3F51B5] duration-300 ${
                pathName === path
                  ? "font-semibold text-[#3F51B5]"
                  : "text-primary-base"
              }`}
              href={path}
            >
              <li>{display}</li>
            </Link>
          ))}

          <Link onClick={handleMenuLinkClick} href="/contact">
            <Button content="Lets Talk" />
          </Link>
        </ul>
      </div>

      {/* soacil icon ?  */}
      {/* Social icons */}
      <div className="hidden  lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
            <a
              target="_new"
              className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/zamirul-kabir-575a41279/"
            >
              Linkedin <BsLinkedin size={30} />
            </a>
          </li>
          <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#08D1B2]">
            <a
              target="_new"
              className="flex pl-4 pr-2 justify-between items-center w-full "
              href="https://www.researchgate.net/profile/Md-Sayem-21"
            >
              <span className="text-[#fff]">Research Gate</span>
              <Image
                src="/assets/images/research_gate.png"
                alt="research_gate"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </a>
          </li>
          <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1E88E5]">
            <a
              target="_new"
              className="flex pl-4 pr-2 justify-between items-center w-full "
              href="https://surli.cc/plkknf"
            >
              <span className="text-[#fff]">Google Scholar</span>
              <Image
                src="/assets/images/google_scholar.png"
                alt="research_gate"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </a>
          </li>
          {/* bg-[#565f69] */}
          <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#006699] ">
            <a
              target="_new"
              className="flex pl-4 pr-2 justify-between items-center w-full "
              href="https://surli.cc/zlpgpa"
            >
              <span className="text-[#fff]">IEEE</span>
              <Image
                src="/assets/images/IEEELogo.png"
                alt="research_gate"
                width={50}
                height={60}
                className="rounded-lg"
              />
            </a>
          </li>
          <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1877F2]">
            <a
              target="_new"
              className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/100009058770776/"
            >
              Facebook <FaFacebookSquare size={30} />
            </a>
          </li>

          {/* bg-[#565f69] */}
          {/* <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E1306c] ">
            <a
              target="_new"
              className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/zamirul463/"
            >
              Instagram
            </a>
          </li> */}
        </ul>
      </div>
      {/* scroll Percent section    */}
      <div className="hidden lg:flex fixed flex-col right-0  mr-4 bottom-4">
        <div className="space-y-4 relative">
          <div
            className={`absolute right-0 mr-4 bottom-0 transition-opacity duration-500 ${
              scrollPercent === 100
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <div
              className="group relative size-14 rounded-full flex justify-center items-center border-2 border-gray-100 bg-white"
              style={{
                background: `conic-gradient(#1A2A6C ${
                  scrollPercent * 3.6
                }deg, #E4E4E7 ${scrollPercent * 3.6}deg)`,
              }}
            >
              {/* Inner Circle with Percentage */}
              <div className="size-11 bg-white rounded-full flex items-center justify-center text-sm  text-[#1A2A6C]">
                {scrollPercent}%
              </div>

              {/* Scroll to top button (only visible on hover) */}
              <button
                aria-label="Scroll to top"
                onClick={scrollToTop}
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full hover:bg-[#1A2A6C] hover:border-[#1A2A6C] cursor-pointer"
              >
                <RiArrowUpLine className="text-white" size={28} />
              </button>
            </div>
          </div>

          {/* Scroll to top button */}
          <div
            onClick={scrollToTop}
            className={`absolute right-0  mr-4 bottom-4 bg-white size-14 ml-2 border-4 transition-all duration-500 ease-in-out group cursor-pointer hover:bg-[#1A2A6C] hover:border-[#1A2A6C] rounded-full flex justify-center items-center border-[#1A2A6C] ${
              scrollPercent === 100
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <RiArrowUpLine
              className="text-[#1A2A6C] group-hover:text-white"
              size={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
