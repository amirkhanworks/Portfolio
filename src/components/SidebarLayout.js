import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaArrowLeft, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import profilePic from '../assets/Profile photo/Me.jpg';

const SidebarLayout = ({ children, showBack }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative z-10 text-white font-sans">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0e0f23]/90 backdrop-blur border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#about" className="text-sm font-semibold text-white">Akash <span className="text-accent">Roy</span></a>
          <button
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-cyan-300 hover:text-white hover:bg-white/5 transition"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="px-4 pb-3">
            <div className="grid grid-cols-3 gap-2 text-xs">
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">ABOUT</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#metrics" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">METRICS</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#pipeline" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">DEMO</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#architecture" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">ARCH</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#clients" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">PROJECTS</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">EXP</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">SKILLS</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#certifications" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">CERTS</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#testimonials" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center col-span-2">TESTIMONIALS</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="px-3 py-2 rounded bg-white/5 text-gray-200 text-center">CONTACT</a>
            </div>
          </nav>
        )}
      </header>
      {/* Sidebar */}
      <aside className="lg:w-[30%] w-full h-auto lg:h-screen lg:sticky lg:top-0 z-20 bg-[#0e0f23]/80 backdrop-blur p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[50vh] lg:min-h-screen mt-14 lg:mt-0">
        <img
          src={profilePic}
          alt="Akash Roy"
          className="rounded-full w-32 h-32 sm:w-44 sm:h-44 object-cover mb-4 sm:mb-6 border-4 border-accent shadow-lg animate-float"
          decoding="async"
          fetchpriority="high"
          loading="eager"
        />

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
          Akash <span className="text-accent">Roy</span>
        </h1>

        <p className="text-xs sm:text-sm text-cyan-400 text-center mt-2 mb-4 px-4 leading-snug">
          I make sure your cloud runs on autopilot — fast, secure, and drama-free. No more 3 AM calls! 😄
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 text-xl sm:text-2xl text-gray-300 mb-4">
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
            href="/Akash DevOps 2026.pdf"
            download
            className="px-5 py-2 bg-cyan-600 text-white text-sm font-semibold rounded hover:bg-cyan-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Divider line - hidden since mobile nav moved to header */}
        <div className="hidden" />
      </aside>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex fixed top-0 right-0 w-[70%] z-50 bg-transparent backdrop-blur-md px-6 md:px-12 py-4 justify-end space-x-4 text-sm font-medium border-b border-white/10">
        <a href="#about" className="text-gray-300 hover:text-accent">ABOUT</a>
        <a href="#metrics" className="text-gray-300 hover:text-accent">METRICS</a>
        <a href="#pipeline" className="text-gray-300 hover:text-accent">DEMO</a>
        <a href="#architecture" className="text-gray-300 hover:text-accent">ARCHITECTURE</a>
        <a href="#clients" className="text-gray-300 hover:text-accent">PROJECTS</a>
        <a href="#experience" className="text-gray-300 hover:text-accent">EXPERIENCE</a>
        <a href="#skills" className="text-gray-300 hover:text-accent">SKILLS</a>
        <a href="#certifications" className="text-gray-300 hover:text-accent">CERTS</a>
        <a href="#testimonials" className="text-gray-300 hover:text-accent">TESTIMONIALS</a>
        <a href="#contact" className="text-gray-300 hover:text-accent">CONTACT</a>
      </nav>

      {/* Main Content */}
      <main className="relative lg:w-[70%] w-full px-2 sm:px-4 md:px-6 lg:px-12 lg:pt-24 pb-10 bg-[#0e0f23]/80 backdrop-blur z-10 overflow-hidden">
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
