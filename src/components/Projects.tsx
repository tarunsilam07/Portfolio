"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Watashino Bloggy",
    description:
      "Watashino Bloggy is a user-friendly platform for sharing thoughts, experiences, and creativity through interactive blogging.",
    imageUrl: "/watashino_bloggy.png",
    projectUrl: "https://watashino-bloggy.vercel.app",
  },
  {
    id: 2,
    title: "Blue Pulse",
    description:
      "An IoT-based system that monitors water quality in real-time, tracking parameters for efficient management and sustainability.",
    imageUrl: "/water_monitoring.webp",
    projectUrl: "https://github.com/tarunsilam07/Blue_Pulse",
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "A tool that shortens long URLs while tracking clicks and analytics, ensuring easy link management and efficient sharing.",
    imageUrl: "/url_shortner.webp",
    projectUrl: "https://github.com/tarunsilam07/Node_JS-Projects",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-main text-white px-6 py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-10 metallic-text"
      >
        My Projects
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
            }}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transition-transform"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 metallic-text text-blue-400">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
              {project.projectUrl && (
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Project →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
      >
        <div className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-xl">
          <Image
            src="/billing.jpg"
            alt="Currently Working On"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-4 metallic-text">Currently Working On</h2>
          <p className="text-lg text-gray-300">
            I&apos;m currently working on an <span className="font-bold text-blue-400">Autonomous Billing System</span> that
            eliminates the need for manual checkouts. My focus is on integrating
            smart sensors and AI-powered camera to detect purchased items
            in real-time. As customers walk out, the system automatically
            generates a bill, which is displayed on a digital screen and
            processed via a mobile payment app. Right now, I&apos;m refining the
            detection accuracy and optimizing the backend to ensure smooth,
            error-free transactions. The goal is to make shopping seamless,
            fast, and fully automated, enhancing the retail experience with
            cutting-edge technology.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
