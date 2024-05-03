import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div className="w-full mx-auto max-w-5xl p-6 lg:px-8 mt-16">
      <div>
        <span>
          <h1 className="text-4xl font-Worksans font-semibold mb-4">
            Skills 🛠️
          </h1>
          <p className="text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quas
            aliquid ex error id dolorem minus est earum unde, quam.
          </p>
        </span>
        <div className="text-[#5C4F62] ">
          <div className="py-6">
            <h2 className="text-xl font-semibold">Languages</h2>
            <ul className="border-b-2 border-[#570071] border-dashed mt-4 flex flex-wrap pb-4 uppercase font-semibold mb-8">
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
          <div>
            <h2 className="text-xl font-semibold">Libraries/Frameworks</h2>
            <ul className="border-b-2 border-[#570071] border-dashed mt-4 flex flex-wrap pb-4 uppercase  font-semibold">
              <li className="flex items-center gap-2 mr-8">
                <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3"></span>
                <p>Tailwindcss</p>
                <BiLogoTailwindCss className="text-xl" />
              </li>
              <li className="flex items-center gap-2 mr-8">
                <span className="w-2 h-2 bg-[#7A7B86] rounded-full mr-3 "></span>
                <p>React</p>
                <FaReact className="text-xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
