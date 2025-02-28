"use client";
import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import BackgroundParticles from "@/particles/BackgroundParticle";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (textRef.current && btnRef.current && bgRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, delay: 1 }
      );

      gsap.to(bgRef.current, {
        backgroundPosition: "50% 100%",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const memoizedParticles = useMemo(() => <BackgroundParticles />, []);

  return (
    <header
      ref={bgRef}
      className="h-screen flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
    >
      {memoizedParticles}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center z-10 px-4 md:px-8"
      >
        <motion.h2
          ref={textRef}
          className="text-4xl md:text-5xl font-bold mb-4 metallic-text"
          animate={{
            y: [0, -5, 0],
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
        >
          Hello, I&apos;m Tarun!
        </motion.h2>
        <p className="text-base md:text-lg text-gray-300 mb-16 metallic-text">
          FullStack Developer | ML Enthusiast | Tech Explorer
        </p>

        <motion.div
          className="w-32 md:w-40 h-32 md:h-40 bg-gray-700 rounded-full overflow-hidden shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            src="/profile.webp"
            alt="Tarun"
            width={160}
            height={160}
            className="rounded-full object-cover"
            priority
          />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <motion.a
            ref={btnRef}
            href="/Tarun_Silam_Resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            whileHover={{ scale: 1.1, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-blue-500 opacity-30 rounded-full z-0"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-14 md:w-16 h-14 md:h-16 bg-blue-500 opacity-30 rounded-full z-0"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </header>
  );
}
