import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#570071] dark:bg-[#F1D5FC] mt-16 text-[#EDEAEF] dark:text-[#26272A]">
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h2 className="text-lg font-medium mb-4 lg:mb-0">
            © 2024, Built by Bridget Amana.
          </h2>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/Bridgetamana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C372E2]"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/amana_bridget"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C372E2]"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bridget-amana/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C372E2]"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
