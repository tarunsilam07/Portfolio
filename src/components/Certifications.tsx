"use client"
import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuedBy: "Coursera",
    validateLink: "https://coursera.org/verify/123456",
    downloadLink: "/certificates/fullstack.pdf",
  },
  {
    title: "Machine Learning",
    issuedBy: "Udacity",
    validateLink: "https://udacity.com/verify/654321",
    downloadLink: "/certificates/ml.pdf",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide">Certifications</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-850 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 backdrop-blur-lg bg-opacity-80 border border-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-blue-400">{cert.title}</h2>
            <p className="text-gray-300 mt-2">Issued by: <span className="font-semibold text-gray-100">{cert.issuedBy}</span></p>
            <div className="flex gap-4 mt-6">
              <a
                href={cert.validateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3 border border-blue-500 text-blue-500 rounded-xl text-center font-medium hover:bg-blue-500 hover:text-white transition"
              >
                Validate
              </a>
              <a
                href={cert.downloadLink}
                download
                className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-xl text-center font-medium hover:bg-blue-500 transition"
              >
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
