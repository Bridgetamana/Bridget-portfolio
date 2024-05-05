import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#570071] dark:bg-[#F1D5FC] mt-16 text-[#EDEAEF] dark:text-[#26272A] ">
      <div
        className="w-full mx-auto max-w-7xl p-6 lg
      pt-24 pb-10 flex justify-between items-center"
      >
        <h1 className="font-Worksans font-semibold mb-4">
          © 2024, Built by Bridget Amana.
        </h1>
        <ul className="flex gap-4 items-center pointer-events-auto">
          <li>
            <a href="https://github.com/Bridgetamana" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/amana_bridget" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bridget-amana/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
