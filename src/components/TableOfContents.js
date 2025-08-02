import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ArrowRight } from 'lucide-react';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About Me', description: 'Professional overview and key strengths' },
    { id: 'experience', label: 'Professional Experience', description: 'Career progression and achievements' },
    { id: 'skills', label: 'Core Competencies', description: 'Skills matrix with proficiency levels and logos' },
    { id: 'certifications', label: 'Certifications', description: 'Professional credentials and training' },
    { id: 'projects', label: 'Featured Projects', description: 'Technical projects and implementations' },
    { id: 'testimonials', label: 'What People Say', description: 'Client and colleague testimonials' },
    { id: 'clients', label: 'Client Portfolio', description: 'Work examples and client projects' },
    { id: 'blogs', label: 'Blogs', description: 'Personal insights and technical articles' },
    { id: 'gallery', label: 'Photo Gallery', description: 'Personal moments and experiences' },
    { id: 'contact', label: 'Get In Touch', description: 'Contact information and next steps' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for header height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* TOC Toggle Button - Desktop */}
      <div className="hidden lg:block fixed top-24 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0e0f23]/95 backdrop-blur-md border border-cyan-700 rounded-xl p-4 text-cyan-400 hover:text-white hover:bg-cyan-900/30 hover:border-cyan-500 transition-all duration-300 shadow-lg"
          aria-label="Table of Contents"
        >
          <List size={20} />
        </button>
      </div>

      {/* Table of Contents Modal */}
      <AnimatePresence>
        {isOpen && (
                      <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0e0f23]/95 backdrop-blur-md border border-cyan-700 rounded-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Table of Contents</h3>
                  <p className="text-gray-400 text-sm">Quick navigation to all sections</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left p-5 bg-[#111827] border border-cyan-700 rounded-xl hover:border-cyan-500 hover:bg-cyan-900/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors text-base">
                        {section.label}
                      </h4>
                      <ArrowRight size={18} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {section.description}
                    </p>
                  </motion.button>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-700 rounded-xl">
                <p className="text-sm text-cyan-300 font-medium mb-3">Quick Navigation Tips:</p>
                <ul className="text-xs text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Use the floating nav on mobile for quick access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Scroll through sections or jump directly to any section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>All sections are optimized for mobile viewing</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TableOfContents; 