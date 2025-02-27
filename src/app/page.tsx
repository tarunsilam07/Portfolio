"use client";
import Contact from '@/components/Contact';
import Header from '../components/Header';
import AboutMe from '@/components/AboutMe';
import Navbar from '@/components/NavBar';
import ProjectsPage from '@/components/Projects';
import Skills from '@/components/Skills';
import ExperiencePage from '@/components/Experience';
import ChatPage from '@/components/Chat';

const MainPage: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar/>
      <section id="header">
        <Header/>
      </section>
      <section id="AiChat">
        <ChatPage/>
      </section>
      <section id="about">
        <AboutMe/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="experience">
        <ExperiencePage/>
      </section>
      <section id="projects">
        <ProjectsPage/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
};

export default MainPage;


  
