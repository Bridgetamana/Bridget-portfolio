import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" border-t-2 border-[#570071] border-dashed mt-16 text-[#5C4F62]">
      <div
        className="w-full mx-auto max-w-5xl p-6 lg:px-8 lg
      py-24 flex justify-between"
      >
        <h1 className="font-Worksans font-semibold mb-4">
          © 2023, Built by Bridget Amana.
        </h1>
        <ul className="flex gap-4 items-center pointer-events-auto">
          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer