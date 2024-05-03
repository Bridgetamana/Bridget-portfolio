import React from 'react'
import { CgMenuRight } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";



const Header = () => {
  return (
    <div className="w-full mx-auto max-w-7xl justify-between p-6 lg:px-8 lg:flex">
      <span className="flex items-center justify-between">
        <span className="flex gap-2 items-center">
          <span className="bg-[#DF8DFF] p-2 rounded-full">
            <FaHeart className="text-white text-sm" />
          </span>
          <p className="text-xl font-medium font-Worksans">Bridget Amana</p>
        </span>
        <span className=" text-2xl lg:hidden">
          <CgMenuRight />
        </span>
        <span className="hidden">X</span>
      </span>
      <div className="p-3 border border-black mt-4 lg:border-0 lg:mt-0">
        <ul className="lg:flex lg:gap-8">
          <li className="lg:border-r lg:border-[#1E1F24] pr-4">
            <a href="#">About</a>
          </li>
          <li className=" lg:border-r lg:border-[#1E1F24] pr-4">
            <a href="#">Skills</a>
          </li>
          <li className="">
            <a href="#">Project</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header