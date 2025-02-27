"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "center center",
            scrub: false,
          },
        }
      );
    });
  }, []);

  const roles = [
    { name: "Full-Stack Developer", emoji: "🚀", img: "fullstack.webp" },
    { name: "Data Analysis Beginner", emoji: "🌍", img: "data_analysis.webp" },
    { name: "ML Enthusiast", emoji: "💡", img: "ml.webp" },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden pt-10">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={async (engine) => await loadFull(engine)}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#FFD700", "#00BFFF"] },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 2.5, random: true },
            move: {
              enable: true,
              speed: 1.2,
              direction: "top-right",
              straight: false,
              outModes: { default: "out" },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 space-y-32">
        {/* About Me Section */}
        <section ref={(el) => { sectionsRef.current[0] = el as HTMLDivElement; }} className="flex flex-col items-center justify-center min-h-screen px-10">
          <motion.h2 className="text-5xl font-bold mb-10 metallic-text">About Me</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              "🚀 Aspiring Software Engineer and Web Developer",
              "💻 Expertise in Full-Stack Development, DSA, and IoT Systems",
              "🛠️ Strong background in building user-focused applications",
              "👨‍💻 Experienced in leading teams and solving complex challenges",
              "🤖 Machine Learning Enthusiast",
              "🌍 Passionate about delivering impactful software solutions",
            ].map((point, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-md font-semibold shadow-lg border border-gray-700 text-center hover:shadow-yellow-500 transition-transform transform hover:scale-105 metallic-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
              >
                {point}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Roles Section */}
        <section ref={(el) => { sectionsRef.current[1] = el as HTMLDivElement; }} className="flex flex-col items-center justify-center min-h-screen px-10">
          <motion.h2 className="text-5xl font-bold mb-6 metallic-text">Roles</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-md font-semibold shadow-lg border border-gray-700 text-center hover:shadow-yellow-500 transition-transform transform hover:scale-105 metallic-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
              >
                <img src={role.img} alt={role.name} className="w-28 h-40 mx-auto mb-4" />
                <span className="block text-xl">{role.emoji} {role.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section ref={(el) => { sectionsRef.current[2] = el as HTMLDivElement; }} className="flex flex-col items-center justify-center min-h-screen px-10">
          <motion.h2 className="text-5xl font-bold mb-10 metallic-text">Education</motion.h2>

          <div className="relative w-full max-w-3xl">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full"></div>

            <div className="space-y-10">
              {[
                { title: "B.Tech in Internet of Things", school: "Aditya College of Engineering, Surampalem", year: "📅 2022 - 2026", score: "CGPA: 8.24" },
                { title: "Intermediate (+2) in MPC", school: "Pragati Vidyalaya Jnr College, Samalkot", year: "📅 2020 - 2022", score: "Percentage: 93.6%" },
                { title: "Schooling (10th Standard)", school: "Pratibha Vidya Niketan, Samalkot", year: "📅 2020", score: "Percentage: 99%" },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-between bg-gray-900 backdrop-blur-lg border border-gray-500 shadow-xl rounded-lg p-6 w-4/5 mx-auto hover:shadow-yellow-500 transition-transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-6 h-6 bg-yellow-500 rounded-full border-4 border-gray-800"></div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                    <p className="text-gray-300 text-sm">{edu.school}</p>
                    <p className="text-green-400 text-sm font-semibold">{edu.score}</p>
                  </div>
                  <span className="text-yellow-400 text-sm">{edu.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
