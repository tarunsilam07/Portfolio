"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer: React.FC<{ refs: Record<string, React.RefObject<HTMLElement | null>> }> = ({ refs }) => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToSection = (section: string) => {
    const element = refs[section]?.current;
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-main text-white py-8 px-4 md:px-12 relative">
      <div className="absolute inset-0 bg-white opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10 text-center md:text-left">
        
        {/* Left Section - Brand & Tagline */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 tracking-wide">Tarun Silam</h2>
          <p className="text-gray-400 text-sm mt-1">Building the future with code and innovation.</p>
        </div>

        {/* Center Section - Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-xs md:text-sm uppercase tracking-wide font-medium">
          {["AiChat", "about", "skills", "experience", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group transition duration-300 hover:text-blue-400 focus:outline-none"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Section - Social Links */}
        <div className="flex justify-center md:justify-start space-x-5">
          <Link href="https://github.com/tarunsilam07" target="_blank" aria-label="GitHub">
            <FaGithub size={22} className="hover:text-gray-400 transition transform hover:scale-110 duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/tarun-silam-83a46021a" target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={22} className="hover:text-blue-400 transition transform hover:scale-110 duration-300" />
          </Link>
          <Link href="https://www.instagram.com/tarun_077__" target="_blank" aria-label="Instagram">
            <FaInstagram size={22} className="hover:text-pink-400 transition transform hover:scale-110 duration-300" />
          </Link>
          <Link href="mailto:tarun79767@gmail.com" aria-label="Email">
            <FaEnvelope size={22} className="hover:text-blue-400 transition transform hover:scale-110 duration-300" />
          </Link>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="mt-6 text-center text-gray-500 text-xs border-t border-gray-800 pt-4 relative z-10">
        {year !== null && (
          <>© {year} <span className="text-white font-semibold">Tarun Silam</span>. All Rights Reserved.</>
        )}
      </div>
    </footer>
  );
};

export default Footer;
