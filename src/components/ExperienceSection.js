import React, { useState, useCallback, memo } from 'react';
import LTIMLogo from '../assets/Company Logo/LTIMindtree.jpg';
import IFILogo from '../assets/Company Logo/IFI_Tech.jpeg';
import McKinseyLogo from '../assets/Company Logo/McKinsey.jpg';
import { ChevronDown, ChevronUp, Building2, Calendar, MapPin, Award, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';

const experience = [
  {
    company: 'McKinsey & Company',
    logo: McKinseyLogo,
    year: '2025 – Present',
    roles: [
      {
        title: 'Senior DevOps Engineer',
        duration: '2025 – Present',
        responsibilities: [
          'Contributing to Periscope - McKinsey\'s flagship data analytics and visualization platform.',
          'Supporting cloud infrastructure and DevOps practices for enterprise-scale data solutions.',
          'Working on CI/CD pipelines for data processing and analytics applications.',
          'Collaborating with cross-functional teams on platform reliability and scalability.'
        ],
        achievements: [
          'About Periscope: A comprehensive business intelligence platform that enables organizations to visualize, analyze, and act on their data.',
          'The platform serves Fortune 500 companies with real-time analytics, interactive dashboards, and advanced data modeling capabilities.',
          'Periscope empowers business leaders to make data-driven decisions through intuitive visualizations and collaborative analytics tools.',
          'As part of the team, contributing to a platform that processes billions of data points and serves thousands of users globally.'
        ]
      }
    ]
  },
  {
    company: 'LTIMindtree',
    logo: LTIMLogo,
    year: '2023 – 2025',
    roles: [
      {
        title: 'Senior Product Engineer',
        duration: '2023 – 2024',
        responsibilities: [
          'Led Azure PaaS and container modernization across enterprise applications.',
          'Drove DevSecOps automation with SonarQube, ZAP, and GitHub Actions.',
          'Implemented automated onboarding via Azure Logic Apps & Power Automate.',
          'Managed enterprise access policies using Azure Key Vault & Blueprints.'
        ],
        achievements: [
          'Reduced infrastructure costs by 30% and accelerated release cycles by 50%.',
          'Delivered multi-region deployments for 6 business-critical systems.',
          'Enabled 100% compliance in production pipelines through policy-as-code.',
          'Won “Engineering Excellence Award” for scalable cloud delivery.'
        ]
      }
    ]
  },
  {
    company: 'IFI Techsolutions',
    logo: IFILogo,
    year: '2019 – 2023',
    roles: [
      {
        title: 'Technical Consultant (DevOps)',
        duration: '2021 – 2023',
        responsibilities: [
          'Designed CI/CD pipelines for Fortune 100 & 500 enterprise clients.',
          'Implemented IaC via Terraform across Azure Landing Zones.',
          'Led migration projects for hybrid cloud & containerized workloads.',
          'Advised clients on Azure CAF adoption and governance automation.'
        ],
        achievements: [
          'Delivered 15+ end-to-end projects across BFSI, Manufacturing & Retail.',
          'Reduced delivery time by 40% using reusable pipeline templates.',
          'Built scalable infrastructure serving over 10 million end users.',
          'Recognized for driving $2.5M cloud transformation deal.'
        ]
      },
      {
        title: 'Senior Cloud Engineer',
        duration: '2020 – 2021',
        responsibilities: [
          'Maintained and optimized Azure cloud environments for enterprise clients.',
          'Developed custom monitoring and alerting solutions using Azure Monitor and Grafana.',
          'Implemented secure access workflows with RBAC and conditional access policies.',
          'Managed AKS clusters and implemented scaling rules for performance optimization.'
        ],
        achievements: [
          'Achieved 99.99% uptime for core customer-facing applications.',
          'Reduced alert noise by 60% through optimized observability dashboards.',
          'Implemented secure multi-region disaster recovery across 3 environments.',
          'Contributed to $1M+ RFP wins through strategic architectural input.'
        ]
      },
      {
        title: 'Cloud Engineer',
        duration: '2019 – 2020',
        responsibilities: [
          'Provisioned and configured Azure VMs, VNets, and storage infrastructure.',
          'Collaborated with senior engineers in developing automated CI/CD pipelines.',
          'Supported production deployments and patching during critical cutovers.',
          'Documented infrastructure architecture and facilitated support handoffs for clients.'
        ],
        achievements: [
          'Completed Microsoft Azure Administrator Associate certification.',
          'Provided technical support for 10+ international enterprise customers.',
          'Reduced manual operational effort by 30% through PowerShell automation.',
          'Promoted within a year for consistent high performance and technical excellence.'
        ]
      }
    ]
  }
];

const ExperienceSection = memo(() => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = useCallback((index) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  return (
    <div id="experience" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-4">
            Progressive career growth demonstrating technical leadership and strategic impact across enterprise environments
          </p>
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 px-2">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#111827] to-[#0f1419] border border-cyan-700/50 rounded-2xl p-1 transition-all hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 group experience-card"
          >
            <div className="bg-gradient-to-br from-[#111827] to-[#0f1419] rounded-2xl p-4 sm:p-6">
              <div
                onClick={() => toggleIndex(index)}
                className="cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-900/10 hover:to-blue-900/10 rounded-xl p-3 sm:p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
                      <LazyImage 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="relative h-14 w-14 sm:h-18 sm:w-18 object-contain rounded-lg bg-white/5 p-2 shadow-lg border border-white/10" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span className="font-medium">{exp.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 size={14} />
                          <span>{exp.roles[0].title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">
                        {openIndex === index ? 'Show Less' : 'Show More'}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-1 rounded-full bg-cyan-900/30 group-hover:bg-cyan-900/50"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden mt-6 sm:mt-8"
                  >
                    <div className="border-t border-gradient-to-r from-cyan-700/50 via-cyan-700 to-cyan-700/50 pt-6 sm:pt-8">
                      {exp.roles.map((role, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                          className="mb-6 sm:mb-8"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-lg">
                                <Target size={16} className="text-cyan-400" />
                              </div>
                              <h4 className="text-lg sm:text-xl font-bold text-white">
                                {role.title}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 px-3 py-1.5 rounded-full border border-cyan-700/50">
                              <Calendar size={14} className="text-cyan-400" />
                              <span className="text-xs sm:text-sm text-cyan-300 font-medium">
                                {role.duration}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-700/50"
                            >
                              <h5 className="font-semibold text-white mb-4 flex items-center gap-3">
                                <div className="p-1.5 bg-cyan-900/50 rounded-lg">
                                  <Target size={14} className="text-cyan-400" />
                                </div>
                                <span>Key Responsibilities</span>
                              </h5>
                              <ul className="space-y-3 text-sm text-gray-300">
                                {role.responsibilities.map((point, idx) => (
                                  <motion.li 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.4 + idx * 0.1, duration: 0.3 }}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                                  >
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{point}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-700/50"
                            >
                              <h5 className="font-semibold text-white mb-4 flex items-center gap-3">
                                <div className="p-1.5 bg-green-900/50 rounded-lg">
                                  <Award size={14} className="text-green-400" />
                                </div>
                                <span>{exp.company === 'McKinsey & Company' ? 'Product Information' : 'Key Achievements'}</span>
                              </h5>
                              <ul className="space-y-3 text-sm text-gray-300">
                                {role.achievements.map((point, idx) => (
                                  <motion.li 
                                    key={idx} 
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.4 + idx * 0.1, duration: 0.3 }}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                                  >
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{point}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default ExperienceSection;
