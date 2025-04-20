import React, { useState, useEffect } from 'react';
import './index.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ProjectModal from './components/ProjectModal';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import BlogSection from './BComponents/BlogSection';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const updateCursor = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans grid md:grid-cols-[30%_70%] grid-cols-1">
      
      {/* Sidebar */}
      <aside className="md:min-h-screen h-full px-8 py-10 text-white border-r border-zinc-800">
        <div className="sticky top-10">
          <h1 className="text-3xl font-extrabold tracking-tight">CodeSync</h1>
          <p className="text-sm text-gray-400 mt-2">Connecting Code, Teams, and Success</p>
          <p className="mt-6 text-gray-400 text-sm leading-relaxed">
            I'm a DevOps engineer with expertise in building scalable infrastructure, secure cloud solutions,
            and continuous delivery pipelines using Azure and GitHub Actions.
          </p>

          <nav className="mt-10 space-y-2 text-sm font-medium">
            <a href="#about" className="block text-gray-300 hover:text-cyan-400">ABOUT</a>
            <a href="#experience" className="block text-gray-300 hover:text-cyan-400">EXPERIENCE</a>
            <a href="#projects" className="block text-gray-300 hover:text-cyan-400">PROJECTS</a>
            <a href="#blogs" className="block text-gray-300 hover:text-cyan-400">BLOGS</a>
            <a href="#contact" className="block text-gray-300 hover:text-cyan-400">CONTACT</a>
          </nav>

          <div className="flex space-x-4 mt-10 text-xl text-gray-400">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaGithub /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaTwitter /></a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="px-6 md:px-12 py-10">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I design and automate scalable systems on the Azure cloud, aligning DevOps practices with business outcomes.
            With a background in engineering and cloud-native development, I specialize in end-to-end delivery pipelines,
            infrastructure as code, and containerization.
          </p>
        </section>

        {/* EXPERIENCE SECTION */}
        <ExperienceSection />

        {/* PROJECTS SECTION */}
        <ProjectSection />

        {/* BLOGS SECTION */}
        <BlogSection />

        {/* FOOTER */}
        <footer id="contact" className="text-sm text-gray-500 mt-16">
          <p className="pb-6">
            © {new Date().getFullYear()} CodeSync. Built with React + Tailwind. Hosted on Azure.
          </p>
        </footer>
      </main>

      {/* PROJECT MODAL */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
