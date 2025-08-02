import React, { useState, useCallback, memo } from 'react';
import LTIMLogo from '../assets/Company Logo/LTIMindtree.png';
import IFILogo from '../assets/Company Logo/IFI_Tech.png';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder for McKinsey logo - replace with actual logo file
const McKinseyLogo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWNLaW5zZXk8L3RleHQ+Cjwvc3ZnPgo=';

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
          'Orchestrated enterprise cloud infrastructure and DevOps practices for McKinsey Digital.',
          'Architected scalable CI/CD pipelines for enterprise applications.',
          'Spearheaded cloud migration and modernization initiatives across global teams.',
          'Established comprehensive security and compliance frameworks.'
        ],
        achievements: [
          'Accelerated deployment cycles by 60% through automated pipeline optimization.',
          'Reduced cloud infrastructure costs by 40% through intelligent resource management.',
          'Implemented zero-downtime deployment strategies for critical business applications.',
          'Mentored junior engineers and established DevOps culture across multiple teams.'
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
    <div id="experience" className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Professional Experience</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Progressive career growth demonstrating technical leadership and strategic impact
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-4 sm:p-6 transition-all hover:border-cyan-500"
          >
            <div
              onClick={() => toggleIndex(index)}
              className="cursor-pointer flex flex-col lg:flex-row lg:items-center lg:justify-between hover:bg-[#1a1f2e] transition rounded-lg px-3 sm:px-4 py-3"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <img src={exp.logo} alt={exp.company} className="h-12 w-12 sm:h-16 sm:w-16 object-contain rounded-lg" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">{exp.company}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{exp.year}</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full lg:w-auto mt-3 lg:mt-0">
                <span className="text-xs sm:text-sm text-gray-400 lg:mr-6 truncate">{exp.roles[0].title}</span>
                <div className="ml-auto">
                  {openIndex === index ? <ChevronUp size={20} className="sm:w-6 sm:h-6" /> : <ChevronDown size={20} className="sm:w-6 sm:h-6" />}
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
                  className="overflow-hidden mt-6 sm:mt-8 space-y-6 sm:space-y-8"
                >
                  {exp.roles.map((role, i) => (
                    <div
                      key={i}
                      className="border-t border-cyan-700 pt-4 sm:pt-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                        <h4 className="text-base sm:text-lg font-bold text-cyan-400">
                          {role.title}
                        </h4>
                        <span className="text-xs sm:text-sm text-gray-400 bg-cyan-900/20 px-2 sm:px-3 py-1 rounded-full self-start sm:self-auto">
                          {role.duration}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                          <h5 className="font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            Key Responsibilities
                          </h5>
                          <ul className="space-y-2 sm:space-y-3 text-sm text-gray-300">
                            {role.responsibilities.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-2">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Key Achievements
                          </h5>
                          <ul className="space-y-2 sm:space-y-3 text-sm text-gray-300">
                            {role.achievements.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-green-400 mt-2">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default ExperienceSection;
