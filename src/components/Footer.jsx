import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" border-t-2 bg-[#570071] mt-16 text-[#EDEAEF] ">
      <div
        className="w-full mx-auto max-w-7xl p-6 lg
      pt-24 pb-10 flex justify-between items-center"
      >
        <h1 className="font-Worksans font-semibold mb-4">
          © 2023, Built by Bridget Amana.
        </h1>
        <ul className="flex gap-4 items-center pointer-events-auto">
          <li>
            <a href="https://github.com/Bridgetamana">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/amana_bridget">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bridget-amana/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
