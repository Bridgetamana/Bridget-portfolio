import React from "react";
import MiniShoppingCart from "../assets/img/mini-shopping-cart-project.png";
import UserValidation from "../assets/img/user-validation-project.png";
import MovieList from "../assets/img/movie-list-project.png";
import BankistWebsite from "../assets/img/bankist-website-project.png";
import BridgetPortfolio from "../assets/img/portfolio-project.png";
import JobApplicationTracker from "../assets/img/job-application-tracker-project.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      className="w-full mx-auto max-w-5xl p-6 lg:px-8 mt-10"
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
          <h1 className="text-4xl mb-4 text-[#570071] dark:text-[#DF8DFF]">
            Projects 🚀
          </h1>
          <div className="grid md:grid-cols-2 p-4 mt-4 gap-12">
            {/* Project 1 */}
            <div className="rounded-md shadow-lg bg-[#FEFCFF] dark:bg-[#1E1421] max-w-lg mx-auto dark:border dark:border-[#3C273D] dark:text-[#F7FAFC] text-[#1E1F24]">
              <div className="max-w-lg border-b-2 border-[#5F5263]">
                <img
                  src={MiniShoppingCart}
                  alt="Mini Shopping Cart Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold uppercase mb-2 dark:text-[#F7FAFC] text-[#251C29]">
                  Mini-shopping-cart
                </h2>
                <p className="">
                  This is a simple e-commerce web application that allows users
                  to browse products, add items to their cart, and view their
                  cart summary.
                </p>
                <ul className="flex flex-wrap ml-4 mt-2 items-center gap-6 list-disc uppercase">
                  <li className="text-xs rounded-full">Javascript</li>
                  <li className="text-xs rounded-full">CSS</li>
                  <li className="text-xs rounded-full">HTML</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://mini-shopping-cart02.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Mini-shopping-cart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="rounded-md shadow-lg bg-[#FEFCFF] dark:bg-[#1E1421] max-w-lg mx-auto dark:border dark:border-[#3C273D] dark:text-[#F7FAFC] text-[#1E1F24]">
              <div className="">
                <img
                  src={UserValidation}
                  alt="Form Validation Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold uppercase mb-2 dark:text-[#F7FAFC] text-[#251C29]">
                  Form Validation
                </h2>
                <p>
                  This is a web application focused on user authentication and
                  form validation. It provides a simple interface for users to
                  create an account with clear feedback for validation errors.
                </p>
                <ul className="flex flex-wrap ml-4 mt-2 items-center gap-6 list-disc uppercase">
                  <li className="text-xs rounded-full">Javascript</li>
                  <li className="text-xs rounded-full">CSS</li>
                  <li className="text-xs rounded-full">HTML</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://uservalidati0n.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Form-Validation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="rounded-md shadow-lg bg-[#FEFCFF] dark:bg-[#1E1421] max-w-lg mx-auto dark:border dark:border-[#3C273D] dark:text-[#F7FAFC] text-[#1E1F24]">
              <div className="">
                <img
                  src={MovieList}
                  alt="Movie List Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold uppercase mb-2 dark:text-[#F7FAFC] text-[#251C29]">
                  Movie List
                </h2>
                <p>
                  Movie List is a web application designed to allow users to
                  search for movies and view detailed information about them.
                </p>
                <ul className="flex flex-wrap ml-4 mt-2 items-center gap-6 list-disc uppercase">
                  <li className=" text-xs p-2 rounded-full">HTML</li>
                  <li className=" text-xs p-2 rounded-full">CSS</li>
                  <li className=" text-xs p-2 rounded-full">Javascript</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://moviielist.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Movie_list"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="rounded-md shadow-lg bg-[#FEFCFF] dark:bg-[#1E1421] max-w-lg mx-auto dark:border dark:border-[#3C273D] dark:text-[#F7FAFC] text-[#1E1F24]">
              <div className="">
                <img
                  src={BankistWebsite}
                  alt="Bankist Website Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold uppercase mb-2 dark:text-[#F7FAFC] text-[#251C29]">
                  Bankist Website
                </h2>
                <p>
                  Bankist is a minimalist banking website designed to provide a
                  user-friendly interface for banking services.
                </p>
                <ul className="flex flex-wrap ml-4 mt-2 items-center gap-6 list-disc uppercase">
                  <li className=" text-xs p-2 rounded-full">React</li>
                  <li className=" text-xs p-2 rounded-full">Tailwindcss</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://bankistwebsite01.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Bankist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="rounded-md shadow-lg bg-[#FEFCFF] dark:bg-[#1E1421] max-w-lg mx-auto dark:border dark:border-[#3C273D] dark:text-[#F7FAFC] text-[#1E1F24]">
              <div className="">
                <img
                  src={BridgetPortfolio}
                  alt="Bridget's Portfolio Project"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold uppercase mb-2 dark:text-[#F7FAFC] text-[#251C29]">
                  Bridget's portfolio
                </h2>
                <p>
                  This is a personal portfolio website to showcase my work as a
                  frontend developer. The site features a dark mode theme, a
                  clean and minimalistic design.
                </p>
                <ul className="flex flex-wrap ml-4 mt-2 items-center gap-6 list-disc uppercase">
                  <li className=" text-xs p-2 rounded-full">React</li>
                  <li className=" text-xs p-2 rounded-full">Tailwindcss</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://bridgetamana.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Bridget_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Source code
                  </a>
                </span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="rounded-md shadow-lg bg-[#FEFCFF] dark:bg-[#1E1421] max-w-lg mx-auto dark:border dark:border-[#3C273D] dark:text-[#F7FAFC] text-[#1E1F24]">
              <div className="">
                <img
                  src={JobApplicationTracker}
                  alt="Project 6"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold uppercase">
                  Job Application Tracker
                </h2>
                <p>
                  The Job Application Tracker is a web application designed to
                  help users keep track of their job applications. It allows
                  users to add, and manage their job applications easily.{" "}
                </p>
                <ul className="flex flex-wrap ml-4 mt-2 items-center gap-6 list-disc uppercase">
                  <li className=" text-xs p-2 rounded-full">React</li>
                  <li className=" text-xs p-2 rounded-full">tailwindcss</li>
                </ul>
                <span className="flex gap-8 mt-8 items-center">
                  <a
                    href="https://job-applicati0n-tracker.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
                  >
                    Visit site
                  </a>
                  <a
                    href="https://github.com/Bridgetamana/Job-Application-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8D43AA] cursor-pointer dark:hover:text-[#E592FF] hover:no-underline"
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
