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
          <h1 className="text-4xl font-Worksans font-semibold mb-4 text-[#570071] dark:text-[#DF8DFF]">
            Skills 🛠️
          </h1>
          <div className="text-[#7B6B81] dark:text-[#B2B3BD]">
            <div className="py-6">
              <h2 className="text-xl font-semibold">Languages</h2>
              <ul className="border-b-2 border-[#570071] dark:border-[#E592FF] border-dashed mt-4 pb-4 uppercase font-semibold flex flex-wrap">
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3"></span>
                  <p>HTML</p>
                  <FaHtml5 className="text-xl" />
                </li>
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3"></span>
                  <p>CSS</p>
                  <FaCss3 className="text-xl" />
                </li>
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3"></span>
                  <p>Javascript</p>
                  <IoLogoJavascript className="text-xl" />
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h2 className="text-xl font-semibold">Libraries/Frameworks</h2>
              <ul className="border-b-2 border-[#570071] dark:border-[#E592FF] border-dashed mt-4 pb-4 uppercase font-semibold flex flex-wrap">
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3"></span>
                  <p>Tailwind CSS</p>
                  <BiLogoTailwindCss className="text-xl" />
                </li>
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3"></span>
                  <p>React</p>
                  <FaReact className="text-xl" />
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h2 className="text-xl font-semibold">Version control</h2>
              <ul className="border-b-2 border-[#570071] dark:border-[#E592FF] border-dashed mt-4 pb-4 uppercase font-semibold mb-8 flex flex-wrap">
                <li className="flex items-center gap-2 mr-8">
                  <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3"></span>
                  <p>Github</p>
                  <FaGithub className="text-xl" />
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
