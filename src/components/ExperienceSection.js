import React, { useState } from 'react';
import LTIMLogo from '../assets/Company Logo/LTIMindtree.png';
import IFILogo from '../assets/Company Logo/IFI_Tech.png';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const experience = [
  {
    company: 'LTIMindtree',
    logo: LTIMLogo,
    year: '2023 – Present',
    roles: [
      {
        title: 'Senior Product Engineer',
        duration: '2023 – Present',
        responsibilities: [
          'Led Azure PaaS and container modernization across enterprise apps.',
          'Drove DevSecOps automation with SonarQube, ZAP, and GitHub Actions.',
          'Implemented automated onboarding via Azure Logic Apps & Power Automate.',
          'Managed enterprise access policies using Azure Key Vault & Blueprints.'
        ],
        achievements: [
          'Reduced infra cost by 30% and accelerated release cycle by 50%.',
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
          'Maintained and optimized Azure cloud environments.',
          'Built custom monitoring and alerting using Azure Monitor and Grafana.',
          'Created secure access workflows with RBAC and conditional policies.',
          'Managed AKS clusters and scaling rules for performance optimization.'
        ],
        achievements: [
          'Achieved 99.99% uptime for core customer-facing apps.',
          'Reduced alert noise by 60% through tuned observability dashboards.',
          'Enabled secure multi-region DR across 3 environments.',
          'Contributed to $1M+ RFP wins through strong architectural input.'
        ]
      },
      {
        title: 'Cloud Engineer',
        duration: '2019 – 2020',
        responsibilities: [
          'Provisioned and configured Azure VMs, VNets, and storage.',
          'Assisted senior engineers in building automated pipelines.',
          'Supported deployments and patching during production cutovers.',
          'Documented infrastructure and support handoffs for clients.'
        ],
        achievements: [
          'Completed Azure Administrator Associate certification.',
          'Handled support for 10+ international customers.',
          'Reduced manual effort by 30% via PowerShell automation.',
          'Promoted within a year for performance consistency.'
        ]
      }
    ]
  }
];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="experience" className="px-6 py-1">
      <h2 className="text-2xl font-bold mb-12 text-accent mb-8">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-4 transition"
          >
            <div
              onClick={() => toggleIndex(index)}
              className="cursor-pointer flex flex-col md:flex-row md:items-center md:justify-between hover:bg-[#1a1f2e] transition rounded-md px-2 py-1"
            >
              <div className="flex items-center gap-4">
                <img src={exp.logo} alt={exp.company} className="h-12 w-12 object-contain" />
                <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0">
                <span className="text-sm text-gray-400 md:mr-4">{exp.year}</span>
                <div className="ml-auto">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                  className="overflow-hidden mt-6 space-y-8"
                >
                  {exp.roles.map((role, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300 px-2"
                    >
                      <div className="md:pr-6 relative">
                        <h4 className="text-base font-semibold text-cyan-400 mb-1">
                          {role.title}{' '}
                          <span className="text-gray-400 text-sm">({role.duration})</span>
                        </h4>
                        <div className="md:border-r md:border-cyan-700 md:pr-6 md:mt-2">
                          <h5 className="font-semibold text-white mb-2">Key Responsibilities</h5>
                          <ul className="space-y-2 list-disc pl-4">
                            {role.responsibilities.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="md:pl-1 mt-8 md:mt-[35px]">
                        <h5 className="font-semibold text-white mb-2">Key Achievements</h5>
                        <ul className="space-y-2 list-disc pl-4">
                          {role.achievements.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
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
};

export default ExperienceSection;
