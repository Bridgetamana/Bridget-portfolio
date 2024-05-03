import React from "react";
import Headshot from "../assets/img/Headshot.jpg";

const HeroSection = () => {
  return (
    <div className="w-full mx-auto max-w-5xl p-6 lg:px-8 mt-16">
      <div className="gap-12 items-center flex flex-col-reverse lg:flex-row flex-wrap">
        <div className="flex-grow flex-shrink basis-[200px]">
          <img
            src={Headshot}
            alt="Bridget Amana"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex-grow flex-shrink basis-[50%] max-w-sm">
          <h1 className="text-4xl font-Worksans font-semibold mb-4">
            Hello, 🙃
          </h1>
          <p className="text-xl">
            I'm Bridget Amana . Frontend developer, Lorem ipsum, and Lorem Ipsum{" "}
          </p>
          <button className="uppercase mt-8">
            <a
              href="#"
              className="text-lg border-2 border-[#BBBCC5] rounded-full py-3 px-5 hover:bg-[#570071] hover:text-[#EFEFF0] hover:border-0 transition-all "
            >
              Download my Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
