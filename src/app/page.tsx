"use client"
import React from "react";
import AboutMe from "@/components/AboutMe";
import ChatPage from "@/components/Chat";
import ExperiencePage from "@/components/Experience";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import ProjectsPage from "@/components/Projects";
import Skills from "@/components/Skills";
import  ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";

const MainPage: React.FC = () => {
  const refs = {
    header: React.useRef<HTMLElement | null>(null),
    AiChat: React.useRef<HTMLElement | null>(null),
    about: React.useRef<HTMLElement | null>(null),
    skills: React.useRef<HTMLElement | null>(null),
    experience: React.useRef<HTMLElement | null>(null),
    projects: React.useRef<HTMLElement | null>(null),
    contact: React.useRef<HTMLElement | null>(null),
  };

  return (
    <div className="main-container">
      <Navbar refs={refs} />
      <section ref={refs.header}>
        <Header />
      </section>
      <section ref={refs.AiChat}>
        <ChatPage />
      </section>
      <section ref={refs.about}>
        <AboutMe />
      </section>
      <section ref={refs.skills}>
        <Skills />
      </section>
      <section ref={refs.experience}>
        <ExperiencePage />
      </section>
      <section ref={refs.projects}>
        <ProjectsPage />
      </section>
      <section ref={refs.contact}>
        <ContactPage />
      </section>
      <Footer refs={refs}/>
      
    </div>
  );
};

export default MainPage;
