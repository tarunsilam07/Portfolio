"use client"
import React from "react";
import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("@/components/AboutMe"), { ssr: false });
const ChatPage = dynamic(() => import("@/components/Chat"), { ssr: false });
const ExperiencePage = dynamic(() => import("@/components/Experience"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Navbar = dynamic(() => import("../components/NavBar"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const ProjectsPage = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const ContactPage = dynamic(() => import("@/components/Contact"), { ssr: false });

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
      <Footer refs={refs} />
    </div>
  );
};

export default MainPage;
