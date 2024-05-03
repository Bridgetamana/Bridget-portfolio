import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

import { FaHeart } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full mx-auto max-w-7xl justify-between p-6 lg:px-8 lg:flex sticky top-0 right-0 bg-[#F3F3F3] z-50">
      <span className="flex items-center justify-between">
        <span className="flex gap-2 items-center">
          <span className="bg-[#DF8DFF] p-2 rounded-full">
            <FaHeart className="text-white text-sm" />
          </span>
          <a
            href="#"
            className="text-xl font-medium font-Worksans cursor-pointer"
          >
            Bridget Amana
          </a>
        </span>
        <span className="text-2xl lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <LiaTimesSolid /> : <CgMenuRight />}
        </span>
      </span>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } transition duration-300 `}
      >
        <ul className="p-6 mt-4 bg-[#F0EFF1] drop-shadow-lg flex flex-col items-center text-lg">
          <li className="p-2 ">
            <a href="#about" className="hover:border-b-2 pb-2 border-[#7E2D9A]">
              About
            </a>
          </li>
          <li className="p-2">
            <a
              href="#skills"
              className="hover:border-b-2 pb-2 border-[#7E2D9A]"
            >
              Skills
            </a>
          </li>
          <li className="p-2">
            <a
              href="#project"
              className="hover:border-b-2 pb-2 border-[#7E2D9A]"
            >
              Project
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="p-3 mt-0 hidden lg:flex">
        <ul className="flex gap-8 text-lg">
          <li className="pr-4 ">
            <a href="#about" className="hover:border-b-2 pb-2 border-[#7E2D9A]">
              About
            </a>
          </li>
          <li className=" pr-4">
            <a
              href="#skills"
              className="hover:border-b-2 pb-2 border-[#7E2D9A]"
            >
              Skills
            </a>
          </li>
          <li className="">
            <a
              href="#project"
              className="hover:border-b-2 pb-2 border-[#7E2D9A]"
            >
              Project
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
