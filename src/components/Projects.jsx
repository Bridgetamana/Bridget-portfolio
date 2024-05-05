import React from 'react'
import Project from "../assets/img/thumbnail-project.webp";
import Project1 from "../assets/img/mini-shopping-cart-screenshot.png";
import Project2 from "../assets/img/uservalidati0n-screenshot.png";
import Project3 from "../assets/img/moviielist-screenshot.png";
import Project4 from "../assets/img/porfolio-screenshot.png";
import { motion } from "framer-motion";

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
          <h1 className="text-4xl font-Worksans font-semibold mb-4 text-[#DF8DFF]">
            Projects &#128187;
          </h1>
        </span>
        <div className="grid md:grid-cols-2 p-4 mt-4 text-[#7B6B81] gap-12">
          {/* Project 1 */}
          <div className="rounded-md drop-shadow-md shadow-md bg-[#F0EFF1] dark:bg-[#221626] max-w-lg mx-auto dark:border-[1px] dark:border-[#5F606A]">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img
                src={Project1}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-4 dark:text-[#B2B3BD]">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#261C29] dark:text-[#DF8DFF] mb-2">
                Mini-shopping-cart
              </h2>
              <p>
                A mini-shopping cart page project built using HTML, CSS, and
                JavaScript.
              </p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                <li className="text-xs rounded-full">Javascript</li>
                <li className="text-xs rounded-full">CSS</li>
                <li className="text-xs rounded-full">HTML</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a
                  href="https://mini-shopping-cart02.netlify.app/"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Visit site
                </a>
                <a
                  href="https://github.com/Bridgetamana/Mini-shopping-cart"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Source code
                </a>
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-md drop-shadow-md shadow-md bg-[#F0EFF1] dark:bg-[#221626] max-w-lg mx-auto dark:border-[1px] dark:border-[#5F606A] ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img
                src={Project2}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-4 dark:text-[#B2B3BD]">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#261C29] dark:text-[#DF8DFF] mb-2">
                Form-validation
              </h2>
              <p>
                A user-friendly form designed to collect data with built-in
                validation checks.
              </p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                <li className=" text-xs p-2 rounded-full">HTML</li>
                <li className=" text-xs p-2 rounded-full">CSS</li>
                <li className=" text-xs p-2 rounded-full">Javascript</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a
                  href="https://uservalidati0n.netlify.app/"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Visit site
                </a>
                <a
                  href="https://github.com/Bridgetamana/form-validation"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Source code
                </a>
              </span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-md drop-shadow-md shadow-md bg-[#F0EFF1] dark:bg-[#221626] max-w-lg mx-auto dark:border-[1px] dark:border-[#5F606A] ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img
                src={Project3}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-4 dark:text-[#B2B3BD]">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#261C29] dark:text-[#DF8DFF] mb-2">
                Movie List
              </h2>
              <p>
                A responsive movie website that allows users to search for their
                favorite movies.
              </p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                <li className=" text-xs p-2 rounded-full">HTML</li>
                <li className=" text-xs p-2 rounded-full">CSS</li>
                <li className=" text-xs p-2 rounded-full">Javascript</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a
                  href="https://moviielist.netlify.app/"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Visit site
                </a>
                <a
                  href="https://github.com/Bridgetamana/Movie_list"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Source code
                </a>
              </span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="rounded-md drop-shadow-md shadow-md bg-[#F0EFF1] dark:bg-[#221626] max-w-lg mx-auto dark:border-[1px] dark:border-[#5F606A] ">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img
                src={Project}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-4 dark:text-[#B2B3BD]">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#261C29] dark:text-[#DF8DFF] mb-2">
                Bankist Website
              </h2>
              <p>
                This is a minimalist online banking application built with
                React.
              </p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                <li className=" text-xs p-2 rounded-full">React</li>
                <li className=" text-xs p-2 rounded-full">Tailwindcss</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a
                  href="https://bankistwebsite01.netlify.app/"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Visit site
                </a>
                <a
                  href="https://github.com/Bridgetamana/Bankist"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Source code
                </a>
              </span>
            </div>
          </div>

          {/* Project 5 */}
          <div className="rounded-md drop-shadow-md shadow-md bg-[#F0EFF1] dark:bg-[#221626] max-w-lg mx-auto dark:border-[1px] dark:border-[#5F606A]">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img
                src={Project4}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-4 dark:text-[#B2B3BD]">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#261C29] dark:text-[#DF8DFF]">
                Bridget's portfolio
              </h2>
              <p>Bridget's portfolio</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                <li className=" text-xs p-2 rounded-full">React</li>
                <li className=" text-xs p-2 rounded-full">Tailwindcss</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a
                  href="https://github.com/Bridgetamana/Bridget_portfolio"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Visit site
                </a>
                <a
                  href="https://bridgetamana.netlify.app/"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Source code
                </a>
              </span>
            </div>
          </div>

          {/* Project 6 */}
          <div className="rounded-md drop-shadow-md shadow-md bg-[#F0EFF1] dark:bg-[#221626] max-w-lg mx-auto dark:border-[1px] dark:border-[#5F606A]">
            <div className=" max-w-lg border-b-2 border-[#B4A2BB]">
              <img
                src={Project}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-4 dark:text-[#B2B3BD]">
              <h2 className="text-2xl font-Worksans font-medium uppercase text-[#261C29] dark:text-[#DF8DFF]">
                Title
              </h2>
              <p>Description</p>
              <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                <li className=" text-xs p-2 rounded-full">language</li>
                <li className=" text-xs p-2 rounded-full">language</li>
              </ul>
              <span className="flex gap-8 mt-8 items-center">
                <a
                  href="#"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
                  Visit site
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                >
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