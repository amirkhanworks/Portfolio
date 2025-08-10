import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import { FaChevronUp } from 'react-icons/fa';

import SidebarLayout from './components/SidebarLayout';
import ProjectModal from './components/ProjectModal';
import ExperienceSection from './components/ExperienceSection';
const BlogSection = React.lazy(() => import('./BComponents/BlogSection'));
import ClientsSection from './components/ClientsSection';
import PhotoGallery from './components/PhotoGallery';
import LoadingSpinner from './components/LoadingSpinner';
import { usePerformance } from './hooks/usePerformance';

import CertificationsSection from './components/CertificationsSection';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import ProfessionalSummary from './components/ProfessionalSummary';
import FeaturedProjects from './components/FeaturedProjects';
import TestimonialsSection from './components/TestimonialsSection';



import ReadingProgress from './components/ReadingProgress';

// Lazy load client components
const Surety = React.lazy(() => import('./Clients/Surety'));
const CAB = React.lazy(() => import('./Clients/CAB'));
const MPSEDC = React.lazy(() => import('./Clients/MPSEDC'));
const LTIM = React.lazy(() => import('./Clients/LTIM'));
const BEL = React.lazy(() => import('./Clients/BEL'));
const CDAC = React.lazy(() => import('./Clients/CDAC'));
const YRF = React.lazy(() => import('./Clients/YRF'));
const CharlesStanley = React.lazy(() => import('./Clients/CharlesStanley'));


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-cyan-700 hover:bg-cyan-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
      aria-label="Scroll to top"
    >
      <FaChevronUp size={16} className="sm:w-5 sm:h-5" />
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
      <div className="space-y-8 sm:space-y-12">
        <ProfessionalSummary />
        <ExperienceSection />
        <SkillsMatrix />
        <CertificationsSection />
        {/* <FeaturedProjects /> */}
        <ClientsSection />
        <PhotoGallery />
        {/* Blog Section - Mobile Only */}
        <div className="block lg:hidden">
          <Suspense fallback={<LoadingSpinner />}>
            <BlogSection />
          </Suspense>
        </div>
        <TestimonialsSection />
        <ContactSection />
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
  
  // Performance monitoring
  usePerformance();



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
        <Route path="/surety" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><Surety /></Suspense></SidebarLayout>} />
        <Route path="/cab" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><CAB /></Suspense></SidebarLayout>} />
        <Route path="/mpsedc" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><MPSEDC /></Suspense></SidebarLayout>} />
        <Route path="/ltim" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><LTIM /></Suspense></SidebarLayout>} />
        <Route path="/bel" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><BEL /></Suspense></SidebarLayout>} />
        <Route path="/cdac" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><CDAC /></Suspense></SidebarLayout>} />
        <Route path="/yrf" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><YRF /></Suspense></SidebarLayout>} />
        <Route path="/charlesstanley" element={<SidebarLayout showBack={true}><Suspense fallback={<LoadingSpinner />}><CharlesStanley /></Suspense></SidebarLayout>} />

        </Routes>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ScrollToTopButton />
      <ReadingProgress />
    </>
  );
}

export default App;
