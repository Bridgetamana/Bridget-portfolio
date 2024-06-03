import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BsFillSunFill, BsMoonStars } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCodepen,
  FaHeart,
} from "react-icons/fa";

const Header = () => {
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const menuVariant = {
    open: {
      rotate: 90,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 right-0 z-50 transition-colors duration-500 ${
        scrollPosition > 100
          ? "bg-[#EFE5FD] dark:bg-[#1E1421] shadow-md"
          : "bg-[#FDF7FF] dark:bg-[#170D1C] "
      }`}
    >
      <div className="w-full mx-auto max-w-7xl p-4 lg:flex justify-between items-center">
        <div className="flex items-center justify-between">
          <motion.span
            className="flex gap-2 items-center"
            initial={{ x: "-9rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <span className="bg-[#570071] dark:bg-[#DF8DFF] p-2 rounded-full">
              <FaHeart className="text-white text-sm" />
            </span>
            <a href="#" className="text-xl font-bold cursor-pointer">
              Bridget Amana
            </a>
          </motion.span>
          <motion.span
            className="text-2xl lg:hidden cursor-pointer"
            onClick={toggleMenu}
            variants={menuVariant}
            animate={menuOpen ? "open" : "closed"}
          >
            {menuOpen ? <LiaTimesSolid /> : <CgMenuRight />}
          </motion.span>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <motion.div
            className={`lg:hidden `}
            variants={variants}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
          >
            <ul
              role="list"
              className={`p-6 mt-4 drop-shadow-lg flex flex-col items-center text-lg ${
                scrollPosition > 100
                  ? "bg-[#EFE5FD] dark:bg-[#1E1421] shadow-md"
                  : "bg-[#FDF7FF] dark:bg-[#170D1C] "
              } `}
            >
              <motion.li
                className="p-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="about"
                  smooth={true}
                  className="hover:border-b-2 pb-2 border-[#7E2D9A] dark:border-[#E592FF]"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                className="p-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="skills"
                  smooth={true}
                  className="hover:border-b-2 pb-2 border-[#7E2D9A] dark:border-[#E592FF]"
                  onClick={toggleMenu}
                >
                  Skills
                </Link>
              </motion.li>
              <motion.li
                className="p-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="project"
                  smooth={true}
                  className="hover:border-b-2 pb-2 border-[#7E2D9A] dark:border-[#963eb1]"
                  onClick={toggleMenu}
                >
                  Project
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 cursor-pointer"
                onClick={() => toggleDarkMode()}
                title={
                  darkMode ? "Switch to dark mode" : "Switch to light mode"
                }
              >
                {!darkMode && <BsMoonStars className="text-2xl" />}
                {darkMode && <BsFillSunFill className="text-2xl" />}
              </motion.li>{" "}
              <motion.li className="p-2">
                <ul className="flex gap-4">
                  <motion.li
                    className="p-2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://github.com/Bridgetamana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8D43AA]"
                      title="Github"
                    >
                      <FaGithub />
                    </a>
                  </motion.li>
                  <motion.li
                    className="p-2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://twitter.com/amana_bridget"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8D43AA]"
                      title="Twitter"
                    >
                      <FaTwitter />
                    </a>
                  </motion.li>
                  <motion.li
                    className="p-2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/bridget-amana/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8D43AA]"
                      title="Linkedin"
                    >
                      <FaLinkedin />
                    </a>
                  </motion.li>
                  <motion.li
                    className="p-2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://codepen.io/Bridgetamana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8D43AA]"
                      title="Codepen"
                    >
                      <FaCodepen />
                    </a>
                  </motion.li>
                </ul>
              </motion.li>
            </ul>
          </motion.div>
        )}

        {/* Desktop Navigation */}
        <motion.div
          className="p-3 mt-0 hidden lg:flex"
          initial={{ x: "9rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <ul role="list" className="flex gap-8 text-lg items-center">
            <motion.li
              className="pr-4 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="about"
                smooth={true}
                className="hover:border-b-2 pb-2 border-[#7E2D9A] dark:border-[#E592FF]"
              >
                About
              </Link>
            </motion.li>
            <motion.li
              className="pr-4 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="skills"
                smooth={true}
                className="hover:border-b-2 pb-2 border-[#7E2D9A] dark:border-[#E592FF]"
              >
                Skills
              </Link>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="project"
                smooth={true}
                className="hover:border-b-2 pb-2 border-[#7E2D9A] dark:border-[#E592FF]"
              >
                Project
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 cursor-pointer"
              onClick={toggleDarkMode}
              title={darkMode ? "Switch to dark mode" : "Switch to light mode"}
            >
              {!darkMode ? <BsMoonStars /> : <BsFillSunFill />}
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
