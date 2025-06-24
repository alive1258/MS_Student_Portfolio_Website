"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { HiMiniXMark, HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Button from "../../common/Button/Button";

// import itcmLogo from "../../../../public/assets/images/logoITCM.jpg";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const topFunction = () => {
    setOpen(!open);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const items = [
    { display: "Home", path: "/" },
    { display: "About", path: "/about" },
    { display: "Research & Publications", path: "/research-publications" },
    { display: "Products", path: "/products" },
    { display: "Experience", path: "/experience" },
    { display: "ECA", path: "/eca" },
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
          <button onClick={topFunction}>
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
              ? "translate-x-0 top-28 "
              : "-translate-x-full md:translate-x-0 top-28"
          }`}
        >
          {items.map(({ display, path }) => (
            <Link
              key={path}
              onClick={() => setOpen(false)}
              className={`text-[16px] font-normal hover:text-[#3F51B5] duration-300 ${
                pathName === path
                  ? "font-semibold text-[#3F51B5]"
                  : "text-primary-base"
              }`}
              href={path}
            >
              <li>{display}</li>
            </Link>
          ))}

          <Button content="Lets Talk" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
