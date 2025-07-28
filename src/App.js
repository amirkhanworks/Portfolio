import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import { FaChevronUp } from 'react-icons/fa';

import SidebarLayout from './components/SidebarLayout';
import ProjectModal from './components/ProjectModal';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './BComponents/BlogSection';
import TechStack from './BComponents/TechStack';
import ClientsSection from './components/ClientsSection';
import PhotoGallery from './components/PhotoGallery';

import Surety from './Clients/Surety';
import CAB from './Clients/CAB';
import MPSEDC from './Clients/MPSEDC';
import LTIM from './Clients/LTIM';
import BEL from './Clients/BEL';
import CDAC from './Clients/CDAC';
import YRF from './Clients/YRF';
import CharlesStanley from './Clients/CharlesStanley';
import LF from './Clients/LF';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-cyan-700 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      aria-label="Scroll to top"
    >
      <FaChevronUp size={20} />
    </button>
  ) : null;
}

function Home({ setSelectedProject }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToClients) {
      const section = document.getElementById("clients");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section id="about" className="mb-16 pt-0 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-4">About Me</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>I’m a DevOps Engineer who enjoys solving real-world challenges through automation and scalable cloud architecture. I love making things efficient — whether that’s through CI/CD, IaC, or just simplifying what doesn’t need to be manual.</p>
          <p>I’ve been fortunate to contribute to some impactful projects and pick up recognition along the way — from enabling Azure Expert MSP status to driving secure DevOps for enterprise clients. I enjoy learning, experimenting, and finding better ways to build and ship software.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto space-y-16">
        <TechStack />
        <ExperienceSection />
        <ClientsSection />
        <BlogSection />
        <PhotoGallery />
      </div>

      <footer id="contact" className="text-sm text-gray-500 mt-16 text-center">
        <div className="flex flex-col items-center space-y-1 text-white text-opacity-90 text-[13px] font-light">
        </div>
        <p className="mt-4 text-gray-500">© {new Date().getFullYear()} Akash Roy. Built with React + Tailwind. Hosted on Azure.</p>
      </footer>
    </>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const updateCursor = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div id="radial-overlay" />
      <Routes>
        <Route path="/" element={<SidebarLayout><Home setSelectedProject={setSelectedProject} /></SidebarLayout>} />
        <Route path="/surety" element={<SidebarLayout showBack={true}><Surety /></SidebarLayout>} />
        <Route path="/cab" element={<SidebarLayout showBack={true}><CAB /></SidebarLayout>} />
        <Route path="/mpsedc" element={<SidebarLayout showBack={true}><MPSEDC /></SidebarLayout>} />
        <Route path="/ltim" element={<SidebarLayout showBack={true}><LTIM /></SidebarLayout>} />
        <Route path="/bel" element={<SidebarLayout showBack={true}><BEL /></SidebarLayout>} />
        <Route path="/cdac" element={<SidebarLayout showBack={true}><CDAC /></SidebarLayout>} />
        <Route path="/yrf" element={<SidebarLayout showBack={true}><YRF /></SidebarLayout>} />
        <Route path="/lf" element={<SidebarLayout showBack={true}><LF /></SidebarLayout>} /> {/* <-- Added route */}
        <Route path="/charlesstanley" element={<SidebarLayout showBack={true}><CharlesStanley /></SidebarLayout>} />
      </Routes>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
