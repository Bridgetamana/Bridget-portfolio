import React from "react";
import Project from "../assets/img/thumbnail-project.webp";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full mx-auto max-w-5xl p-6 lg:px-8 lg:mt-16">
      <motion.div className="gap-12 items-center flex flex-col-reverse lg:flex-row flex-wrap">
        <motion.div
          className="max-w-md"
          initial={{ y: "9rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "fade-in",
          }}
        >
          <img
            src={Project}
            alt="Bridget Amana"
            className="w-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          className="max-w-sm "
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <h1 className="text-4xl font-Worksans font-semibold mb-4 text-[#570071]">
            Hello, 🙃
          </h1>
          <p className="text-xl">
            I'm Bridget Amana . Frontend developer, Lorem ipsum, and Lorem Ipsum{" "}
          </p>
          <button className="uppercase mt-8">
            <a
              href="#"
              className="md:text-lg border-2 border-[#BBBCC5] rounded-full py-3 px-5 hover:bg-[#570071] hover:text-[#EFEFF0] hover:border-0 transition-all "
            >
              Download my Resume
            </a>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
