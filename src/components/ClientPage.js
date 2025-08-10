import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Layers, 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  TrendingUp,
  ExternalLink
} from 'lucide-react';

const ClientPage = ({ 
  title, 
  techStack, 
  bullets, 
  recognition,
  projectSummary,
  duration,
  teamSize,
  impact,
  clientLogo,
  projectType = "Enterprise Solution"
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Layers size={16} /> },
    { id: 'tech', label: 'Tech Stack', icon: <ShieldCheck size={16} /> },
    { id: 'contributions', label: 'Contributions', icon: <CheckCircle size={16} /> },
    { id: 'recognition', label: 'Recognition', icon: <Award size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0f23] via-[#1a1b2e] to-[#0e0f23]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-8">


          <div className="max-w-6xl mx-auto">
            <div className="bg-[#111827]/50 backdrop-blur-sm border border-cyan-700/30 rounded-2xl p-8 shadow-xl">
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 font-inter">
                      {title}
                    </h1>
                    <p className="text-cyan-400 font-semibold text-lg">{projectType}</p>
                  </motion.div>
                </div>

                {/* Project Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4 mt-4 lg:mt-0"
                >
                  {duration && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock size={16} />
                      <span className="text-sm">{duration}</span>
                    </div>
                  )}
                  {teamSize && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users size={16} />
                      <span className="text-sm">{teamSize}</span>
                    </div>
                  )}
                  {impact && (
                    <div className="flex items-center gap-2 text-cyan-400">
                      <TrendingUp size={16} />
                      <span className="text-sm font-semibold">{impact}</span>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-[#1f2937] text-gray-300 hover:bg-[#374151]'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="min-h-[400px]"
              >
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="bg-[#1f2937]/50 rounded-xl p-6 border border-cyan-700/20">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Layers size={20} className="text-cyan-400" />
                        Project Summary
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {projectSummary}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="space-y-6">
                    <div className="bg-[#1f2937]/50 rounded-xl p-6 border border-cyan-700/20">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <ShieldCheck size={20} className="text-cyan-400" />
                        Technology Stack
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {techStack.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-cyan-600/20 border border-cyan-500/30 rounded-lg p-3 hover:bg-cyan-600/30 transition-colors"
                          >
                            <span className="text-cyan-300 font-medium text-sm">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'contributions' && (
                  <div className="space-y-6">
                    <div className="bg-[#1f2937]/50 rounded-xl p-6 border border-cyan-700/20">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle size={20} className="text-cyan-400" />
                        Key Contributions
                      </h3>
                      <div className="space-y-4">
                        {bullets.map((bullet, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{bullet}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'recognition' && (
                  <div className="space-y-6">
                    <div className="bg-[#1f2937]/50 rounded-xl p-6 border border-cyan-700/20">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Award size={20} className="text-cyan-400" />
                        Recognition & Impact
                      </h3>
                      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4 border border-cyan-500/30">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {recognition}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClientPage; 