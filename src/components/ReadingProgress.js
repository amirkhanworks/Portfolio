import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

// Throttle function for scroll optimization
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

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    });
  }, []);

  useEffect(() => {
    const throttledUpdateProgress = throttle(updateProgress, 16); // ~60fps

    window.addEventListener('scroll', throttledUpdateProgress, { passive: true });
    return () => window.removeEventListener('scroll', throttledUpdateProgress);
  }, [updateProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  );
};

export default ReadingProgress; 