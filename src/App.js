import React, { useState, useEffect } from 'react';
import './index.css';
import ProjectModal from './components/ProjectModal';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import BlogSection from './BComponents/BlogSection';
import ContactForm from './BComponents/ContactForm';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import profilePic from './assets/Me.jpg';

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
      {/* Radial Background */}
      <div id="radial-overlay" />

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
          <p className="text-md text-gray-400 text-center mb-6">
            DevOps Engineer <br /> Cloud Architect <br /> Digital Transformation
          </p>
          <div className="flex space-x-6 text-2xl text-gray-300">
            <a href="mailto:youremail@example.com" className="hover:text-accent">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/akashroy05" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaGithub />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaTwitter />
            </a>
          </div>

          {/* Mobile Nav */}
          <nav className="block lg:hidden mt-8 w-full text-center border-t border-gray-700 pt-4">
            <div className="flex justify-center flex-wrap gap-4 text-sm font-medium">
              <a href="#about" className="text-gray-300 hover:text-accent">ABOUT</a>
              <a href="#experience" className="text-gray-300 hover:text-accent">EXPERIENCE</a>
              <a href="#projects" className="text-gray-300 hover:text-accent">PROJECTS</a>
              <a href="#blogs" className="text-gray-300 hover:text-accent">BLOGS</a>
              <a href="#contact" className="text-gray-300 hover:text-accent">CONTACT</a>
            </div>
          </nav>
        </aside>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex fixed top-0 right-0 w-[70%] z-50 bg-transparent backdrop-blur-md px-6 md:px-12 py-4 justify-end space-x-6 text-sm font-medium border-b border-white/10">
          <a href="#about" className="text-gray-300 hover:text-accent">ABOUT</a>
          <a href="#experience" className="text-gray-300 hover:text-accent">EXPERIENCE</a>
          <a href="#projects" className="text-gray-300 hover:text-accent">PROJECTS</a>
          <a href="#blogs" className="text-gray-300 hover:text-accent">BLOGS</a>
          <a href="#contact" className="text-gray-300 hover:text-accent">CONTACT</a>
        </nav>

        {/* Main Content */}
        <main className="relative lg:w-[70%] w-full px-6 md:px-12 pt-8 lg:pt-24 pb-10 bg-[#0e0f23]/80 backdrop-blur z-10 overflow-hidden">
          <section id="about" className="mb-16 pt-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-accent border-b border-accent mb-4 inline-block">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I’m a Senior Product Engineer at LTIMindtree, where I drive digital transformation for global enterprises by building scalable, secure, and high-performance cloud solutions.
              <br /><br />
              My core expertise spans Azure DevOps, Terraform, Kubernetes, Logic Apps, and CI/CD automation.
              <br /><br />
              Previously at IFI Techsolutions, I led initiatives around cloud adoption, pre-sales solutioning, and proof-of-concepts.
              <br /><br />
              As a collaborative leader and continuous learner, I’m passionate about solving complex problems and pushing the boundaries of DevOps.
            </p>
          </section>

          <div className="max-w-4xl mx-auto">
            <ExperienceSection />
            <ProjectSection />
            <BlogSection />
            <ContactForm />
          </div>

          <footer id="contact" className="text-sm text-gray-500 mt-16 text-center">
            <p>© {new Date().getFullYear()} CodeSync. Built with React + Tailwind. Hosted on Azure.</p>
          </footer>
        </main>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

export default App;
