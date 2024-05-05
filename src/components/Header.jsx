import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsFillSunFill, BsMoonStars } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <nav className="sticky top-0 right-0 bg-[#F3F3F3] dark:bg-[#341A3E] z-50">
      <div className="w-full mx-auto max-w-7xl p-6 lg:px-8 lg:flex justify-between items-center">
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
            <span className="bg-[#DF8DFF] p-2 rounded-full">
              <FaHeart className="text-white text-sm" />
            </span>
            <a
              href="#"
              className="text-xl font-medium font-Worksans cursor-pointer"
            >
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
            <ul className="p-6 mt-4 bg-[#F0EFF1] dark:bg-[#341A3E] drop-shadow-lg flex flex-col items-center text-lg">
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
              <li
                className="p-2 cursor-pointer dark:bg-[#E592FF] dark:text-[#341A3E] dark:hover:border-[#F1D5FC] bg-[#341A3E] hover:bg-transparent dark:hover:bg-transparent hover:border-[1px] hover:border-[#341A3E] text-[#E592FF] hover:text-[#341A3E] dark:hover:text-[#E592FF] rounded-full"
                onClick={() => toggleDarkMode()}
              >
                {darkMode && (
                  <BsMoonStars className="text-2xl cursor-pointer" />
                )}
                {!darkMode && (
                  <BsFillSunFill className="text-2xl cursor-pointer" />
                )}
              </li>{" "}
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
          <ul className="flex gap-8 text-lg items-center">
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
            <li
              className={`p-2 cursor-pointer ${
                darkMode
                  ? "dark:bg-[#E592FF] dark:text-[#341A3E] dark:hover:border-[#F1D5FC]"
                  : "bg-[#341A3E] text-[#E592FF] hover:text-[#341A3E] dark:hover:text-[#E592FF]"
              } hover:bg-transparent hover:border-[1px] hover:border-[#341A3E] rounded-full`}
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <BsMoonStars className="text-2xl cursor-pointer" />
              ) : (
                <BsFillSunFill className="text-2xl cursor-pointer" />
              )}
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
