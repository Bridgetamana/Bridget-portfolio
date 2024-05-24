import React from "react";
import { FaHtml5, FaGithub, FaCss3, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="w-full mx-auto max-w-5xl p-6 lg:px-8 mt-16" id="skills">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "ease-in",
        }}
      >
        <div>
          <h1 className="text-4xl mb-4 text-[#570071] dark:text-[#DF8DFF]">
            Skills 🛠️
          </h1>
          <div className="dark:text-[#F0EDF0]/[87%] text-[#251C29]/[87%]">
            <div className="pb-4 pt-8">
              <h2 className="text-xl font-medium text-[#251C29] dark:text-[#F0EDF0]">
                Languages
              </h2>
              <ul className="mt-4 uppercase flex flex-wrap">
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#302D32]/50 dark:bg-[#BCB0C1] rounded-full mr-3"></span>
                  <p>HTML</p>
                  <FaHtml5 className="text-xl text-[#302D32]/50 dark:text-[#BCB0C1]" />
                </li>
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#302D32]/50 dark:bg-[#BCB0C1] rounded-full mr-3"></span>
                  <p>CSS</p>
                  <FaCss3 className="text-xl text-[#302D32]/50 dark:text-[#BCB0C1]" />
                </li>
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#302D32]/50 dark:bg-[#BCB0C1] rounded-full mr-3"></span>
                  <p>Javascript</p>
                  <IoLogoJavascript className="text-xl text-[#302D32]/50 dark:text-[#BCB0C1]" />
                </li>
              </ul>
            </div>
            <div className="py-4">
              <h2 className="text-xl font-medium text-[#251C29] dark:text-[#F0EDF0]">
                Libraries/Frameworks
              </h2>
              <ul className="mt-4 uppercase flex flex-wrap">
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#302D32]/50 dark:bg-[#BCB0C1] rounded-full mr-3"></span>
                  <p>Tailwind CSS</p>
                  <BiLogoTailwindCss className="text-xl text-[#302D32]/50 dark:text-[#BCB0C1]" />
                </li>
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#302D32]/50 dark:bg-[#BCB0C1] rounded-full mr-3"></span>
                  <p>React</p>
                  <FaReact className="text-xl text-[#302D32]/50 dark:text-[#BCB0C1]" />
                </li>
              </ul>
            </div>
            <div className="py-4">
              <h2 className="text-xl font-medium text-[#251C29] dark:text-[#F0EDF0]">
                Version control
              </h2>
              <ul className="mt-4 uppercase mb-8 flex flex-wrap">
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#302D32]/50 dark:bg-[#BCB0C1] rounded-full mr-3"></span>
                  <p>Github</p>
                  <FaGithub className="text-xl text-[#302D32]/50 dark:text-[#BCB0C1]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
