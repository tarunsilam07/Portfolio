"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      for (let section of sections) {
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
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-3 flex justify-between items-center bg-transparent">
      {/* Nav Links */}
      <div className="flex space-x-6 md:space-x-10">
        {["about", "skills", "projects", "contact"].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <a
              onClick={() => handleClick(item)}
              className={`cursor-pointer text-sm md:text-lg text-white hover:text-blue-400 transition duration-300 relative ${
                activeSection === item ? "font-bold text-blue-400" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Hire Me Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="px-4 py-2 text-sm md:text-base bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
      >
        Hire Me
      </motion.button>
    </nav>
  );
};

export default Navbar;
