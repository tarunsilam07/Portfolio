"use client";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC<{ refs: Record<string, React.RefObject<HTMLElement | null>> }> = ({ refs }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // if (typeof window === "undefined") return; // Prevent SSR issues

    const handleScroll = () => {
      let currentSection = "";
      for (const section in refs) {
        if (section === "header") continue;
        const element = refs[section]?.current;
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  const handleClick = (section: string) => {
    if (typeof window !== "undefined") {
      refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = Object.keys(refs)
    .filter((item) => item !== "header")
    .map((item) => (
      <motion.a
        key={item}
        onClick={() => handleClick(item)}
        className={`cursor-pointer text-lg transition duration-300 ${
          activeSection === item ? "font-bold text-blue-400" : "hover:text-blue-400"
        }`}
        whileHover={{ scale: 1.1 }}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </motion.a>
    ));

  const socialLinks = [
    { href: "https://github.com/yourprofile", icon: <FaGithub size={25} className="text-white hover:text-gray-400" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/yourprofile", icon: <FaLinkedin size={25} className="text-blue-500 hover:text-blue-400" />, label: "LinkedIn" },
    { href: "https://www.instagram.com/yourprofile", icon: <FaInstagram size={25} className="text-pink-500 hover:text-pink-400" />, label: "Instagram" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg flex items-center justify-between px-6 md:px-12 py-4 z-50 shadow-lg">
      {/* Clickable Name */}
      <div
        className="flex items-center space-x-2 text-white text-xl md:text-2xl font-semibold cursor-pointer"
        onClick={() => handleClick("header")}
      >
        <BiCodeAlt className="text-blue-400" size={28} />
        <span>Tarun</span>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-8 text-white">{navLinks}</div>

      {/* Social media links */}
      <div className="hidden md:flex space-x-6">
        {socialLinks.map(({ href, icon, label }) => (
          <Link key={href} href={href} target="_blank" aria-label={label}>
            {icon}
          </Link>
        ))}
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 backdrop-blur-lg flex flex-col items-center py-6 space-y-6 text-white md:hidden">
          {navLinks}
          <div className="flex space-x-6">
            {socialLinks.map(({ href, icon, label }) => (
              <Link key={href} href={href} target="_blank" aria-label={label}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
