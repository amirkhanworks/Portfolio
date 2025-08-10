import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Award, TrendingUp, Users, ChevronDown, ChevronUp } from 'lucide-react';

const ProfessionalSummary = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700 rounded-2xl p-4 sm:p-6"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
          </div>

          {/* Condensed Overview */}
          <div className="text-center mb-6 px-2 sm:px-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              Senior DevOps Engineer at <span className="text-cyan-400 font-semibold">McKinsey & Company</span>, 
              contributing to <span className="text-cyan-400 font-semibold">Periscope</span> - a flagship data analytics platform. 
              6+ years of experience in enterprise cloud infrastructure, specializing in Azure, Kubernetes, and DevSecOps.
            </p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm sm:text-base"
            >
              <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
          </div>

          {/* Expandable Detailed Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="border-t border-cyan-700/50 pt-6 sm:pt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Detailed Overview */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Professional Overview</h3>
                      <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                          Currently working on cloud infrastructure and DevOps practices for enterprise-scale data solutions, 
                          supporting CI/CD pipelines for analytics applications, and collaborating with cross-functional teams 
                          on platform reliability and scalability.
                        </p>
                        <p>
                          My background spans multiple industries including finance, manufacturing, and retail sectors, 
                          where I've successfully delivered scalable solutions that serve millions of users.
                        </p>
                      </div>
                    </motion.div>

                    {/* Key Strengths */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Strengths</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Target className="text-cyan-400 mt-1" size={20} />
                          <div>
                            <h4 className="font-semibold text-white">Data Platform Engineering</h4>
                            <p className="text-sm text-gray-400">Building robust infrastructure for enterprise analytics platforms</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <TrendingUp className="text-cyan-400 mt-1" size={20} />
                          <div>
                            <h4 className="font-semibold text-white">DevOps & CI/CD</h4>
                            <p className="text-sm text-gray-400">Streamlining deployment pipelines for data processing applications</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Award className="text-cyan-400 mt-1" size={20} />
                          <div>
                            <h4 className="font-semibold text-white">Cloud Infrastructure</h4>
                            <p className="text-sm text-gray-400">Designing scalable and reliable cloud solutions</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Users className="text-cyan-400 mt-1" size={20} />
                          <div>
                            <h4 className="font-semibold text-white">Cross-functional Collaboration</h4>
                            <p className="text-sm text-gray-400">Working with diverse teams to deliver platform reliability</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});

export default ProfessionalSummary; 