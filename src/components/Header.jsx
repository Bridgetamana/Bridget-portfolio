import React, { useState } from "react";
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

  return (
    <div className="w-full mx-auto max-w-7xl justify-between p-6 lg:px-8 lg:flex sticky top-0 right-0 bg-[#F3F3F3] z-50">
      <span className="flex items-center justify-between">
        <span className="flex gap-2 items-center">
          <span className="bg-[#DF8DFF] p-2 rounded-full">
            <FaHeart className="text-white text-sm" />
          </span>
          <a
            href="#"
            className="text-xl font-medium font-Worksans cursor-pointer"
          >
            Bridget Amana
          </a>
        </span>
        <motion.span
          className="text-2xl lg:hidden cursor-pointer"
          onClick={toggleMenu}
          variants={menuVariant}
          animate={menuOpen ? "open" : "closed"}
        >
          {menuOpen ? <LiaTimesSolid /> : <CgMenuRight />}
        </motion.span>
      </span>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          className={`lg:hidden `}
          variants={variants}
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
        >
          <ul className="p-6 mt-4 bg-[#F0EFF1] drop-shadow-lg flex flex-col items-center text-lg">
            <motion.li
              className="p-2 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#about"
                className="hover:border-b-2 pb-2 border-[#7E2D9A]"
              >
                About
              </a>
            </motion.li>
            <motion.li
              className="p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#skills"
                className="hover:border-b-2 pb-2 border-[#7E2D9A]"
              >
                Skills
              </a>
            </motion.li>
            <motion.li
              className="p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#project"
                className="hover:border-b-2 pb-2 border-[#7E2D9A]"
              >
                Project
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}

      {/* Desktop Navigation */}
      <div className="p-3 mt-0 hidden lg:flex">
        <ul className="flex gap-8 text-lg">
          <motion.li
            className="pr-4 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#about" className="hover:border-b-2 pb-2 border-[#7E2D9A]">
              About
            </a>
          </motion.li>
          <motion.li
            className=" pr-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#skills"
              className="hover:border-b-2 pb-2 border-[#7E2D9A]"
            >
              Skills
            </a>
          </motion.li>
          <motion.li
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#project"
              className="hover:border-b-2 pb-2 border-[#7E2D9A]"
            >
              Project
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
