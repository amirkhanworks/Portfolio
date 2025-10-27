import React, { useState, useEffect, Suspense, useCallback, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import { FaChevronUp } from 'react-icons/fa';

import SidebarLayout from './components/SidebarLayout';
import ExperienceSection from './components/ExperienceSection';
const BlogSection = React.lazy(() => import('./BComponents/BlogSection'));
import ClientsSection from './components/ClientsSection';
import LoadingSpinner from './components/LoadingSpinner';
// Only import performance monitoring in development
const { usePerformance } = process.env.NODE_ENV === 'development' 
  ? require('./hooks/usePerformance') 
  : { usePerformance: () => {} };

// Lazy load heavy components
const CertificationsSection = React.lazy(() => import('./components/CertificationsSection'));
const SkillsMatrix = React.lazy(() => import('./components/SkillsMatrix'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
const ProfessionalSummary = React.lazy(() => import('./components/ProfessionalSummary'));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));

import ReadingProgress from './components/ReadingProgress';
const DevOpsPipelineVisualizer = React.lazy(() => import('./components/DevOpsPipelineVisualizer'));
const MetricsDashboard = React.lazy(() => import('./components/MetricsDashboard'));

// Client components removed - now showing only logos and names

// Throttle function for performance optimization
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = throttle(() => {
      setVisible(window.scrollY > 300);
    }, 100); // Throttle to 100ms

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

function Home() {
  const location = useLocation();

         useEffect(() => {
           if (location.state?.scrollToClients) {
             const section = document.getElementById("clients");
             if (section) section.scrollIntoView({ behavior: "smooth" });
           }
         }, [location]);

  return (
    <>
      <div className="space-y-8 sm:space-y-10">
        <Suspense fallback={<LoadingSpinner />}>
          <ProfessionalSummary />
        </Suspense>
        
        {/* Metrics Dashboard - Key Achievements */}
        <Suspense fallback={<LoadingSpinner />}>
          <MetricsDashboard />
        </Suspense>
        
        {/* Client Projects - Prioritized */}
        <ClientsSection />
        
        <ExperienceSection />
        
        {/* DevOps Pipeline Visualizer - Interactive Feature */}
        <Suspense fallback={<LoadingSpinner />}>
          <DevOpsPipelineVisualizer />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <SkillsMatrix />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <CertificationsSection />
        </Suspense>
        
        {/* Blog Section - Mobile Only */}
        <div className="block lg:hidden">
          <Suspense fallback={<LoadingSpinner />}>
            <BlogSection />
          </Suspense>
        </div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </div>

      <footer id="contact" className="text-sm text-gray-500 mt-16 text-center pb-8">
        <p className="text-gray-400">© {new Date().getFullYear()} Akash Roy. Built with React + Tailwind. Hosted on Azure.</p>
      </footer>
    </>
  );
}

function App() {
  // Performance monitoring - only in development
  usePerformance();

  // Optimized mouse tracking with throttling
  useEffect(() => {
    const updateCursor = throttle((e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    }, 16); // ~60fps throttling

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

         // Memoize routes to prevent unnecessary re-renders
         const routes = useMemo(() => (
           <Routes>
             <Route path="/" element={<SidebarLayout><Home /></SidebarLayout>} />
           </Routes>
         ), []);

  return (
    <>
      <div id="radial-overlay" />
      {routes}
      <ScrollToTopButton />
      <ReadingProgress />
    </>
  );
}

export default App;
