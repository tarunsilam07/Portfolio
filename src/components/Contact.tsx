"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import Footer from "./Footer";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("/api/contact", formData);
      setSuccess("Message sent successfully!");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen bg-main text-white px-6 py-12">
      <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-5xl font-bold text-center mb-8 text-blue-400">
        Get in Touch
      </motion.h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-lg text-gray-300 mb-4">
            Feel free to reach out! Fill the form below or contact me directly.
          </motion.p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-400 text-xl" />
              <span className="text-gray-300">tarun79767@gmail.com</span>
            </div>
            {/* <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-400 text-xl" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div> */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <span className="text-gray-300">Samalkot, India</span>
            </div>
          </div>
        </div>

        <motion.form initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <label className="block mb-2">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400" />
          
          <label className="block mt-4 mb-2">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400" />
          
          <label className="block mt-4 mb-2">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400 h-16 resize-none"></textarea>
          
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
          
          <button type="submit" className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </motion.form>
      </div>
      <Footer/>
    </motion.div>
  );
};

export default ContactPage;
