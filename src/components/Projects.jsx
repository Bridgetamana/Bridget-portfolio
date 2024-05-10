import React from "react";
import Project1 from "../assets/img/mini-shopping-cart-screenshot.png";
import Project2 from "../assets/img/uservalidati0n-screenshot.png";
import Project3 from "../assets/img/moviielist-screenshot.png";
import Project4 from "../assets/img/bankist-website-screenshot.png";
import Project5 from "../assets/img/porfolio-screenshot.png";
import Project6 from "../assets/img/uservalidati0n-screenshot.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      className="w-full mx-auto max-w-5xl p-6 lg:px-8 mt-16"
      id="project"
    >
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
            Projects 🚀
          </h1>
          <div className="grid md:grid-cols-2 p-4 mt-4 gap-12">
            {/* Project 1 */}
            <div className="rounded-md drop-shadow-lg shadow-lg bg-[#F0EFF1] dark:bg-[#221C25] max-w-lg mx-auto dark:border dark:border-[#BCB0C1]">
              <div className=" max-w-lg border-b-2 border-[#5F5263] dark:border-[#BCB0C1]">
                <img
                  src={Project1}
                  alt="Mini Shopping Cart Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-Worksans font-medium uppercase dark:text-[#DF8DFF] mb-2">
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
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Mini-shopping-cart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="rounded-md drop-shadow-lg shadow-lg bg-[#F0EFF1] dark:bg-[#221C25] max-w-lg mx-auto dark:border dark:border-[#BCB0C1]">
              <div className=" max-w-lg border-b-2 border-[#5F5263] dark:border-[#BCB0C1]">
                <img
                  src={Project2}
                  alt="Form Validation Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-Worksans font-medium uppercase dark:text-[#DF8DFF] mb-2">
                  Form Validation
                </h2>
                <p>
                  A form validation project built using HTML, CSS, and
                  JavaScript.
                </p>
                <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                  <li className="text-xs rounded-full">Javascript</li>
                  <li className="text-xs rounded-full">CSS</li>
                  <li className="text-xs rounded-full">HTML</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://uservalidati0n.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Form-Validation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="rounded-md drop-shadow-lg shadow-lg bg-[#F0EFF1] dark:bg-[#221C25] max-w-lg mx-auto dark:border dark:border-[#BCB0C1]">
              <div className=" max-w-lg border-b-2 border-[#5F5263] dark:border-[#BCB0C1]">
                <img
                  src={Project3}
                  alt="Movie List Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-Worksans font-medium uppercase dark:text-[#DF8DFF] mb-2">
                  Movie List
                </h2>
                <p>
                  A responsive movie website that allows users to search for
                  their favorite movies.
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
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Movie_list"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="rounded-md drop-shadow-lg shadow-lg bg-[#F0EFF1] dark:bg-[#221C25] max-w-lg mx-auto dark:border dark:border-[#BCB0C1]">
              <div className=" max-w-lg border-b-2 border-[#5F5263] dark:border-[#BCB0C1]">
                <img
                  src={Project4}
                  alt="Bankist Website Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-Worksans font-medium uppercase dark:text-[#DF8DFF] mb-2">
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
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Bankist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="rounded-md drop-shadow-lg shadow-lg bg-[#F0EFF1] dark:bg-[#221C25] max-w-lg mx-auto dark:border dark:border-[#BCB0C1]">
              <div className=" max-w-lg border-b-2 border-[#5F5263] dark:border-[#BCB0C1]">
                <img
                  src={Project5}
                  alt="Bridget's Portfolio Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-Worksans font-medium uppercase dark:text-[#DF8DFF]">
                  Bridget's portfolio
                </h2>
                <p>A single page portfolio</p>
                <ul className="flex flex-wrap m-4 items-center gap-6 list-disc uppercase">
                  <li className=" text-xs p-2 rounded-full">React</li>
                  <li className=" text-xs p-2 rounded-full">Tailwindcss</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://bridgetamana.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Bridget_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="rounded-md drop-shadow-lg shadow-lg bg-[#F0EFF1] dark:bg-[#221C25] max-w-lg mx-auto dark:border dark:border-[#BCB0C1]">
              <div className=" max-w-lg border-b-2 border-[#5F5263] dark:border-[#BCB0C1]">
                <img
                  src={Project6}
                  alt="Project 6"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-Worksans font-medium uppercase dark:text-[#DF8DFF]">
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
                    rel="noopener noreferrer"
                    className="underline hover:text-[#341B3E] cursor-pointer dark:hover:text-[#E592FF]"
                  >
                    Visit site
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
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
    </section>
  );
};

export default Projects;
