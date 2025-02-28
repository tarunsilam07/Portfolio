"use client";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents SSR error

    const handleScroll = () => {
      const sections = ["AiChat", "about", "skills", "experience", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section: string) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-main bg-opacity-80 flex justify-between items-center px-6 md:px-12 py-4 z-50">
      <div className="flex items-center w-full justify-between">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="hidden md:flex space-x-6 md:space-x-12 text-white">
        {["AiChat", "about", "skills", "experience", "projects", "contact"].map((item) => (
          <motion.a
            key={item}
            onClick={() => handleClick(item)}
            className={`cursor-pointer text-sm md:text-lg hover:text-blue-400 transition duration-300 ${
              activeSection === item ? "font-bold text-blue-400" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.a>
        ))}
      </div>

      <div className="hidden md:flex space-x-6 px-2">
        <Link href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={25} className="text-white hover:text-gray-400 transition duration-300" />
        </Link>
        <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={25} className="text-blue-500 hover:text-blue-400 transition duration-300" />
        </Link>
        <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={25} className="text-pink-500 hover:text-pink-400 transition duration-300" />
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 space-y-6 text-white md:hidden">
          {["AiChat", "about", "skills", "experience", "projects", "contact"].map((item) => (
            <motion.a
              key={item}
              onClick={() => handleClick(item)}
              className={`cursor-pointer text-lg hover:text-blue-400 transition duration-300 ${
                activeSection === item ? "font-bold text-blue-400" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
          <div className="flex space-x-6">
            <Link href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={25} className="text-white hover:text-gray-400 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={25} className="text-blue-500 hover:text-blue-400 transition duration-300" />
            </Link>
            <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={25} className="text-pink-500 hover:text-pink-400 transition duration-300" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
