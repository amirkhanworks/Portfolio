import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Download, MessageCircle } from 'lucide-react';

const CallToActionSection = memo(() => {
  const handleScheduleCall = () => {
    window.open('https://calendly.com/akashroy-devops/30min', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Akash - DevOps 2025.pdf';
    link.download = 'Akash_Roy_DevOps_Resume.pdf';
    link.click();
  };

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your DevOps?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help your team achieve faster deployments, lower costs, and better reliability. 
          Whether you need cloud migration, CI/CD optimization, or team scaling - I've got you covered.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScheduleCall}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
          >
            <Calendar size={20} />
            Schedule a Call
            <ArrowRight size={16} />
          </button>
          
          <button
            onClick={handleDownloadResume}
            className="bg-transparent border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
          
          <a
            href="mailto:akashroy.636@gmail.com?subject=DevOps Opportunity Discussion"
            className="bg-transparent border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Send Message
          </a>
        </div>
        
        <div className="mt-8 p-4 bg-cyan-900/20 border border-cyan-700 rounded-lg max-w-2xl mx-auto">
          <p className="text-sm text-cyan-300 font-medium mb-2">What I Bring to Your Team:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-400">
            <div>• 6+ years DevOps experience</div>
            <div>• Azure & Kubernetes expert</div>
            <div>• 40% cost reduction track record</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default CallToActionSection; 