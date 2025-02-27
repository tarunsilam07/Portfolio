"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        role: "Member",
        company: "Stanford University d.school ",
        duration: "Oct 2023 - Present",
        description:
            "Represented Aditya College at the UIF Summit in the Netherlands, focusing on innovation. Led campus initiatives promoting innovation and sustainability.",
    },
  {
    role: "Fullstack Developer/Team Lead",
    company: "Team BluePluse",
    duration: "Aug 2024 - Nov 2024",
    description:
      "Led a team in building a real-time water quality monitoring system using IoT and Developed a MERN stack-based monitoring system with real-time data visualization.",
  },
  {
    role: "Full Stack Developer",
    company: "Personal Project ",
    duration: "Dec 2024",
    description:
      " Built a blog site using the Next JS with JWT authentication and email verification. Enabled users to post blogs, interact with other blogs, like and comment on blogs and follow other users",
  },
  {
    role: "Web Development Intern",
    company: "Skillcraft Technology",
    duration: "Oct 2024 - Nov 2024",
    description:
      "Created responsive web pages using HTML, CSS, and JavaScript and designed user-friendly interfaces. ",
  },
];

const ExperiencePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-main text-white px-4 md:px-8 py-16"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold text-center metallic-text mb-12"
      >
        My Experience
      </motion.h1>

      <div className="max-w-4xl mx-auto relative">
        <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={`mb-12 flex w-full ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } justify-center`}
          >
            <div className="relative w-full md:w-1/2">
              <div className="hidden md:flex absolute top-5 left-1/2 md:left-[-30px] w-10 h-10 bg-blue-500 rounded-full items-center justify-center shadow-lg transform -translate-x-1/2 md:translate-x-0">
                <FaBriefcase className="text-white text-lg" />
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-500 text-center md:text-left">
                <h2 className="text-lg md:text-xl font-semibold text-blue-400">
                  {exp.role}
                </h2>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <p className="mt-2 text-gray-200">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
