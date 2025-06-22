import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaArrowLeft, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/Profile photo/Me.jpg';

const SidebarLayout = ({ children, showBack }) => {
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

        <p className="text-sm text-cyan-400 text-center mt-2 mb-4 px-4 leading-snug">
          I make sure your cloud runs on autopilot — fast, secure, and drama-free.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl text-gray-300 mb-4">
          <a
            href="https://linkedin.com/in/akashroy05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/akash-roy-123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:akashroy.636@gmail.com"
            className="hover:text-accent"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Button */}
        <div className="w-full flex justify-center mb-4">
          <a
            href="/Akash - DevOps 2025.pdf"
            download
            className="px-5 py-2 bg-cyan-600 text-white text-sm font-semibold rounded hover:bg-cyan-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Divider line - visible on mobile only */}
        <div className="w-full h-[2px] bg-cyan-500 my-3 block lg:hidden" />

        {/* Mobile Navigation */}
        <div className="flex lg:hidden flex-wrap justify-center gap-4 text-sm text-white">
          <a href="#about" className="hover:text-accent">ABOUT</a>
          <a href="#techstack" className="hover:text-accent">TECH</a>
          <a href="#experience" className="hover:text-accent">EXPERIENCE</a>
          <a href="#clients" className="hover:text-accent">CLIENTS</a>
          <a href="#blogs" className="hover:text-accent">BLOGS</a>
        </div>
      </aside>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex fixed top-0 right-0 w-[70%] z-50 bg-transparent backdrop-blur-md px-6 md:px-12 py-4 justify-end space-x-6 text-sm font-medium border-b border-white/10">
        <a href="#about" className="text-gray-300 hover:text-accent">ABOUT</a>
        <a href="#techstack" className="text-gray-300 hover:text-accent">TECH</a>
        <a href="#experience" className="text-gray-300 hover:text-accent">EXPERIENCE</a>
        <a href="#clients" className="text-gray-300 hover:text-accent">CLIENTS</a>
        <a href="#blogs" className="text-gray-300 hover:text-accent">BLOGS</a>
      </nav>

      {/* Main Content */}
      <main className="relative lg:w-[70%] w-full px-6 md:px-12 lg:pt-24 pb-10 bg-[#0e0f23]/80 backdrop-blur z-10 overflow-hidden">
        {showBack && (
          <div className="w-full px-4 md:px-6 lg:px-12 pt-6">
            <button
              onClick={() => navigate('/', { state: { scrollToClients: true } })}
              className="flex items-center text-cyan-400 hover:text-white text-lg font-medium"
              aria-label="Back"
            >
              <FaArrowLeft className="mr-2" />
              <span>Back</span>
            </button>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
