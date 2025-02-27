"use client";
import React from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import frontendIcon from "../../public/frontend.json" assert { type: "json" };
import backendIcon from "../../public/backend.json" assert { type: "json" };
import programmingIcon from "../../public/programming.json" assert { type: "json" };
import databaseIcon from "../../public/database (2).json" assert { type: "json" };
import toolsIcon from "../../public/tools.json" assert { type: "json" };

import reactIcon from "../../public/react.json" assert { type: "json" };
import nextIcon from "../../public/nextjs.json" assert { type: "json" };
import tailwindIcon from "../../public/tailwind.png";
import htmlIcon from "../../public/html.json" assert { type: "json" };
import cssIcon from "../../public/css.json" assert { type: "json" };
import nodeIcon from "../../public/nodejs.json" assert { type: "json" };
import expressIcon from "../../public/expressjs.png"
import jsIcon from "../../public/js.json" assert { type: "json" };
import pythonIcon from "../../public/python.json" assert { type: "json" };
import cppIcon from "../../public/cpp.json" assert { type: "json" };
import cIcon from "../../public/c.json" assert { type: "json" };
import tsIcon from "../../public/ts.json" assert { type: "json" };
import mongodbIcon from "../../public/mongodb.json" assert { type: "json" };
import mysqlIcon from "../../public/sql.json" assert { type: "json" };
import firebaseIcon from "../../public/firebase.json" assert { type: "json" };
import gitIcon from "../../public/git.json" assert { type: "json" };
import apiIcon from "../../public/api.json" assert { type: "json" };
import postmanIcon from "../../public/postman.json" assert { type: "json" };
import dataAnalysisIcon from "../../public/dataanalysis.json" assert { type: "json" };
import vscodeIcon from "../../public/vscode.png";
import adobeIcon from "../../public/adobe.jpg"
import jupyterIcon from "../../public/jupyter.jpg"
import vercelIcon from "../../public/vercel.png"
import railwayIcon from "../../public/railway.png"
import numpyIcon from "../../public/numpy.json"
import pandasIcon from "../../public/pandas.jpg"
import matplotIcon from "../../public/matplot.webp"
import seabornIcon from "../../public/seaborn.png"
import shadcnIcon from "../../public/shadcn.png"

interface Skill {
  name: string;
  icon: string | object;
  isLottie: boolean;
}

interface SkillCategory {
  title: string;
  icon: string | object;
  isLottie: boolean;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: programmingIcon,
    isLottie: true,
    skills: [
      { name: "C", icon: cIcon, isLottie: true },
      { name: "C++", icon: cppIcon, isLottie: true },
      { name: "JavaScript", icon: jsIcon, isLottie: true },
      { name: "Python", icon: pythonIcon, isLottie: true },
      { name: "TypeScript", icon: tsIcon, isLottie: true },
    ],
  },
  {
    title: "Frontend",
    icon: frontendIcon,
    isLottie: true,
    skills: [
      { name: "HTML5", icon: htmlIcon, isLottie: true },
      { name: "CSS3", icon: cssIcon, isLottie: true },
      { name: "Tailwind", icon: tailwindIcon, isLottie: false },
      { name: "React.js", icon: reactIcon, isLottie: true },
      { name: "Next.js", icon: nextIcon, isLottie: true },
      { name: "Shadcn", icon: shadcnIcon, isLottie: false },
    ],
  },
  {
    title: "Backend",
    icon: backendIcon,
    isLottie: true,
    skills: [
      { name: "Node.js", icon: nodeIcon, isLottie: true },
      { name: "Express.js", icon: expressIcon, isLottie: false },
      { name: "Next.js", icon: nextIcon, isLottie: true },
      { name: "API", icon: apiIcon, isLottie: true },
    ],
  },
  {
    title: "Databases",
    icon: databaseIcon,
    isLottie: true,
    skills: [
      { name: "MongoDB", icon: mongodbIcon, isLottie: true },
      { name: "MySQL", icon: mysqlIcon, isLottie: true },
      { name: "Firebase", icon: firebaseIcon, isLottie: true },
    ],
  },
  {
    title: "Data Analysis",
    icon: dataAnalysisIcon,
    isLottie: true,
    skills: [
      { name: "Numpy", icon: numpyIcon, isLottie: true },
      { name: "Pandas", icon: pandasIcon, isLottie: false },
      { name: "Matplotlib", icon: matplotIcon, isLottie: false },
      { name: "Seaborn", icon: seabornIcon, isLottie: false },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: toolsIcon,
    isLottie: true,
    skills: [
      { name: "Vercel", icon: vercelIcon, isLottie: false },
      { name: "Railway", icon: railwayIcon, isLottie: false },
      { name: "Jupyter", icon: jupyterIcon, isLottie: false },
      { name: "Git", icon: gitIcon, isLottie: true },
      { name: "Postman", icon: postmanIcon, isLottie: true },
      { name: "VS Code", icon: vscodeIcon, isLottie: false },
      // { name: "Adobe", icon: adobeIcon, isLottie: false },
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
      });

      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-main text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.h2 className="text-6xl font-bold mb-10 metallic-text">Skills</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {skillsData?.map((category, index) => (
          <motion.div
            key={index}
            ref={(el) => { cardRefs.current[index] = el; }}
            className="bg-transparent border border-gray-700/30 backdrop-blur-xl p-6 rounded-3xl w-full hover:scale-105 transition-transform duration-500"
          >
            {category.isLottie ? (
              <Lottie animationData={category.icon} className="w-28 h-28 mx-auto" />
            ) : (
              <Image src={category.icon as string} alt={category.title} width={112} height={112} className="mx-auto" />
            )}
            <motion.h3 className="text-3xl font-bold mb-4 text-center metallic-text">{category.title}</motion.h3>
            <ul className="text-lg text-gray-300 flex flex-wrap justify-center gap-4">
              {category.skills?.map((skill, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center p-3 bg-transparent rounded-xl shadow-lg border border-gray-600/30 hover:bg-gray-800/20 transition duration-300"
                >
                  {skill.isLottie ? (
                    <Lottie animationData={skill.icon} className="w-12 h-12" />
                  ) : (
                    <Image src={skill.icon as string} alt={skill.name} width={48} height={48} />
                  )}
                  <span className="text-base font-bold metallic-text">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;