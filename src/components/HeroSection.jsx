import React from "react";
import HeroImage from "../assets/img/thumbnail-project.webp";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="w-full mx-auto max-w-6xl p-6 lg:px-8 lg:mt-16"
      id="about"
    >
      <motion.div className="gap-12 items-center flex flex-col-reverse lg:flex-row flex-wrap justify-center">
        <motion.div
          className="max-w-md"
          initial={{ x: "-9rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "fade-in",
          }}
        >
          <img
            src={HeroImage}
            alt="Bridget Amana's Thumbnail"
            className="w-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          className="max-w-sm"
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <h1 className="text-4xl font-Worksans font-semibold mb-4 text-[#570071] dark:text-[#DF8DFF] ">
            Hello, 🙃
          </h1>
          <p className="text-xl">
            I'm Bridget Amana, a frontend developer.
            <br /> I build websites that are not only clean, but also responsive
            and accessible.{" "}
          </p>
          <button className="uppercase mt-8">
            <a
              href="https://docs.google.com/document/d/147_EDeqMJ05WygU8LzrfLCc76hGqWBV-P4CfhvOndEo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-lg border-2 border-[#BBBCC5] rounded-full py-3 px-5 hover:bg-[#570471] dark:hover:bg-[#DF8DFF] hover:text-[#EFEFF0] hover:border-0 dark:hover:text-[#1E1E20]"
            >
              Download my Resume
            </a>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
