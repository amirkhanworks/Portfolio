import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import ProjectModal from './components/ProjectModal';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './BComponents/BlogSection';
import TechStack from './BComponents/TechStack';
import ClientsSection from './components/ClientsSection';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowLeft, FaChevronUp } from 'react-icons/fa';
import profilePic from './assets/Profile photo/Me.jpg';

// Client Pages
import Surety from './Clients/Surety';
import CAB from './Clients/CAB';
import MPSEDC from './Clients/MPSEDC';
import LTIM from './Clients/LTIM';

// Scroll To Top Button
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

function Layout({ children, showBack }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative z-10 text-white font-sans">
      {/* Sidebar */}
      <aside className="lg:w-[30%] w-full h-auto lg:h-screen lg:sticky lg:top-0 z-20 bg-[#0e0f23]/80 backdrop-blur p-6 md:p-8 flex flex-col items-center justify-center">
        <img
          src={profilePic}
          alt="Akash Roy"
          className="rounded-full w-44 h-44 object-cover mb-6 border-4 border-accent shadow-lg animate-float"
        />
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-2">
          Akash <span className="text-accent">Roy</span>
        </h1>
        <p className="text-sm text-cyan-400 text-center mt-2">
          Empowering digital transformation through resilient DevOps pipelines and secure, scalable cloud infrastructure.
        </p>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <div className="flex space-x-6 text-2xl text-gray-300">
            <a href="mailto:youremail@example.com" className="hover:text-accent"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/akashroy05" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><FaGithub /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><FaTwitter /></a>
          </div>
          <a
            href="/Akash - DevOps 2025.pdf"
            download
            className="px-4 py-2 bg-cyan-600 text-white text-sm font-semibold rounded hover:bg-cyan-700 transition"
          >Download Resume</a>
        </div>

        {/* Mobile Nav (static below profile) */}
        <nav className="lg:hidden w-full mt-6 text-sm font-medium">
          <div className="flex justify-center flex-wrap gap-4 border-t border-white/10 pt-4">
            <a href="#about" className="text-gray-300 hover:text-accent">ABOUT</a>
            <a href="#techstack" className="text-gray-300 hover:text-accent">TECH</a>
            <a href="#experience" className="text-gray-300 hover:text-accent">EXPERIENCE</a>
            <a href="#clients" className="text-gray-300 hover:text-accent">CLIENTS</a>
            <a href="#blogs" className="text-gray-300 hover:text-accent">BLOGS</a>
          </div>
        </nav>
      </aside>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex fixed top-0 right-0 w-[70%] z-50 bg-transparent backdrop-blur-md px-6 md:px-12 py-4 justify-end space-x-6 text-sm font-medium border-b border-white/10">
        <a href="#about" className="text-gray-300 hover:text-accent">ABOUT</a>
        <a href="#techstack" className="text-gray-300 hover:text-accent">TECH</a>
        <a href="#experience" className="text-gray-300 hover:text-accent">EXPERIENCE</a>
        <a href="#clients" className="text-gray-300 hover:text-accent">CLIENTS</a>
        <a href="#blogs" className="text-gray-300 hover:text-accent">BLOGS</a>
      </nav>

      {/* Main */}
      <main className="relative lg:w-[70%] w-full px-6 md:px-12 lg:pt-24 pb-10 bg-[#0e0f23]/80 backdrop-blur z-10 overflow-hidden">
        {showBack && (
          <button
            onClick={() => navigate('/', { state: { scrollToClients: true } })}
            className="absolute top-6 left-6 text-cyan-400 hover:text-white text-xl z-50"
            aria-label="Back"
          >
            <FaArrowLeft />
          </button>
        )}
        {children}
      </main>
    </div>
  );
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

      <div className="max-w-4xl mx-auto">
        <TechStack />
        <ExperienceSection />
        <ClientsSection />
        <BlogSection />
      </div>
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
        <Route path="/" element={<Layout><Home setSelectedProject={setSelectedProject} /></Layout>} />
        <Route path="/surety" element={<Layout showBack={true}><Surety /></Layout>} />
        <Route path="/cab" element={<Layout showBack={true}><CAB /></Layout>} />
        <Route path="/mpsedc" element={<Layout showBack={true}><MPSEDC /></Layout>} />
        <Route path="/ltim" element={<Layout showBack={true}><LTIM /></Layout>} />
      </Routes>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
