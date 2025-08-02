import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';

const FloatingMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for the floating nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'tech', label: 'Tech' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'speaking', label: 'Speaking' },
    { id: 'clients', label: 'Clients' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 lg:hidden"
          >
            <div className="bg-[#0e0f23]/95 backdrop-blur-md border-b border-cyan-700/50 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center border border-cyan-500">
                    <span className="text-white font-semibold text-xs">AR</span>
                  </div>
                  <span className="text-white font-semibold text-sm">Akash Roy</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={scrollToTop}
                    className="p-2 text-cyan-400 hover:text-white transition-colors"
                    aria-label="Scroll to top"
                  >
                    <ChevronUp size={16} />
                  </button>
                  
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-cyan-400 hover:text-white transition-colors"
                    aria-label="Toggle navigation"
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-[#0e0f23]/95 backdrop-blur-md border-b border-cyan-700/50">
              <div className="grid grid-cols-2 gap-1 p-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-900/20 rounded transition-colors"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMobileNav; 