"use client";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Navbar = dynamic(() => import("@/components/NavBar"), { ssr: false });
const AboutMe = dynamic(() => import("@/components/AboutMe"), { ssr: false });
const ProjectsPage = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const ExperiencePage = dynamic(() => import("@/components/Experience"), { ssr: false });
const ChatPage = dynamic(() => import("@/components/Chat"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

const MainPage: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar />
      <section id="header">
        <Header />
      </section>
      <section id="AiChat">
        <ChatPage />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainPage;
