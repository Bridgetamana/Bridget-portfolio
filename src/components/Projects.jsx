import React from 'react'
import Project from "../assets/img/thumbnail-project.webp";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Projects = () => {

  return (
    <motion.div
      className="w-full mx-auto max-w-5xl p-6 lg:px-8 mt-16"
      id="project"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        type: "ease-in",
      }}
    >
      <div>
        <span>
          <h1 className="text-4xl font-Worksans font-semibold mb-4 text-[#570071]">
            Projects &#128187;
          </h1>
          <p className="text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quas
            aliquid ex error id dolorem minus est earum unde, quam.
          </p>
        </span>
        <div className="grid md:grid-cols-2  p-4 mt-4 text-[#7B6B81] gap-12">
          <div className="rounded-md drop-shadow-md bg-[#F0EFF1] max-w-lg mx-auto">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img src={Project} alt="" className="w-full" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#261C29]">
                Title
              </h2>
              <p>Description</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc">
                <li className="text-xs rounded-full">language</li>
                <li className="text-xs rounded-full">language</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a href="#" className="underline">
                  Visit site
                </a>
                <a href="#" className="underline">
                  Source code
                </a>
              </span>
            </div>
          </div>
          <div className="rounded-md drop-shadow-md bg-[#F0EFF1] max-w-lg mx-auto ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img src={Project} alt="" className="w-full" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#341B3E]">
                Title
              </h2>
              <p>Description</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc">
                <li className=" text-xs p-2 rounded-full">language</li>
                <li className=" text-xs p-2 rounded-full">language</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a href="#" className="underline">
                  Visit site
                </a>
                <a href="#" className="underline">
                  Source code
                </a>
              </span>
            </div>
          </div>
          <div className="rounded-md drop-shadow-md bg-[#F0EFF1] max-w-lg mx-auto ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img src={Project} alt="" className="w-full" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#341B3E]">
                Title
              </h2>
              <p>Description</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc">
                <li className=" text-xs p-2 rounded-full">language</li>
                <li className=" text-xs p-2 rounded-full">language</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a href="#" className="underline">
                  Visit site
                </a>
                <a href="#" className="underline">
                  Source code
                </a>
              </span>
            </div>
          </div>
          <div className="rounded-md drop-shadow-md bg-[#F0EFF1] max-w-lg mx-auto ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img src={Project} alt="" className="w-full" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#341B3E]">
                Title
              </h2>
              <p>Description</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc">
                <li className=" text-xs p-2 rounded-full">language</li>
                <li className=" text-xs p-2 rounded-full">language</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a href="#" className="underline">
                  Visit site
                </a>
                <a href="#" className="underline">
                  Source code
                </a>
              </span>
            </div>
          </div>
          <div className="rounded-md drop-shadow-md bg-[#F0EFF1] max-w-lg mx-auto ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img src={Project} alt="" className="w-full" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#341B3E]">
                Title
              </h2>
              <p>Description</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc">
                <li className=" text-xs p-2 rounded-full">language</li>
                <li className=" text-xs p-2 rounded-full">language</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a href="#" className="underline">
                  Visit site
                </a>
                <a href="#" className="underline">
                  Source code
                </a>
              </span>
            </div>
          </div>
          <div className="rounded-md drop-shadow-md bg-[#F0EFF1] max-w-lg mx-auto ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img src={Project} alt="" className="w-full" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#341B3E]">
                Title
              </h2>
              <p>Description</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc">
                <li className=" text-xs p-2 rounded-full">language</li>
                <li className=" text-xs p-2 rounded-full">language</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a href="#" className="underline">
                  Visit site
                </a>
                <a href="#" className="underline">
                  Source code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects