import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-16 md:w-20 flex flex-col items-center justify-center bg-main p-2 md:p-4 z-50">
      <Link href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mb-6">
        <FaGithub size={30} color="#fff" />
      </Link>
      <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mb-6">
        <FaLinkedin size={30} color="#0077B5" />
      </Link>
      <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={30} color="#E1306C" />
      </Link>
    </div>
  );
};

export default Sidebar;
