import React, { useState } from 'react';
import LTIMLogo from '../assets/Company Logo/LTIMindtree.png';
import IFILogo from '../assets/Company Logo/IFI_Tech.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experience = [
  {
    year: '2023 – Present',
    company: 'LTIMindtree',
    title: 'Senior Product Engineer',
    logo: LTIMLogo,
    bullets: [
      'Led Azure PaaS and container modernization across 10+ projects, cutting infra costs by 30% and improving scalability.',
      'Drove CAF methodology adoption, reducing hosting costs by 30% and accelerating time-to-market by 50%.',
      'Integrated DevSecOps tools (SonarQube, ZAP), improving code quality and reducing vulnerabilities by 40%.',
      'Automated onboarding via Logic Apps & Power Automate, saving 60% in manual operations effort.',
      'Enabled secure policy management via Key Vault & Blueprints, ensuring 100% compliance in deployments.'
    ]
  },
  {
    year: '2021 – 2023',
    company: 'IFI Techsolutions',
    title: 'Technical Consultant (DevOps)',
    logo: IFILogo,
    bullets: [
      'Delivered 10+ CI/CD pipelines on Azure DevOps, reducing deployment time by 60%.',
      'Built secure landing zones and automated infrastructure with Terraform and Bicep.',
      'Streamlined network policy using Azure Firewall & NSG, improving perimeter security compliance by 90%.',
      'Trained 5+ client teams on pipeline adoption and security best practices.',
      'Helped clients achieve zero downtime releases for mission-critical workloads.'
    ]
  },
  {
    year: '2020 – 2021',
    company: 'IFI Techsolutions',
    title: 'Senior Cloud Engineer',
    logo: IFILogo,
    bullets: [
      'Managed virtualization for 6000+ users with Azure-based VDI setup.',
      'Automated patching and update schedules with PowerShell & Azure Automation, saving 30% admin effort.',
      'Migrated legacy apps to Azure App Services, reducing infra cost by 20%.',
      'Designed role-based access policies to restrict workload exposure in hybrid environments.',
      'Led secure file-sharing design for remote work enablement.'
    ]
  },
  {
    year: '2019 – 2020',
    company: 'IFI Techsolutions',
    title: 'Cloud Engineer',
    logo: IFILogo,
    bullets: [
      'Built virtual IT environments for manufacturing & investment clients.',
      'Helped achieve Azure Expert MSP compliance through audited security benchmarks.',
      'Implemented backup and DR strategies on Azure Vault.',
      'Contributed to cost-optimization by resizing compute VMs and optimizing SQL DTUs.',
      'Supported multiple presales PoCs on IoT & AI services.'
    ]
  }
];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="experience" className="px-4 pt-10 pb-4 text-white max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-accent mb-6">Experience</h2>

      <div className="flex flex-col gap-5">
        {experience.map((exp, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row gap-4 ${i === experience.length - 1 ? 'mb-0' : ''}`}
          >
            <div className="text-sm text-gray-400 w-32 sm:text-right sm:pt-2">{exp.year}</div>

            <div className="flex-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === i ? null : i);
                }}
                className="w-full text-left group flex items-center justify-between bg-[#0f111a] border border-cyan-700 hover:border-cyan-400 transition rounded-xl px-5 py-4 focus:outline-none shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-cyan-300 font-semibold text-base">{exp.company}</h3>
                    <p className="text-sm text-gray-300">{exp.title}</p>
                  </div>
                </div>
                <span className="text-cyan-400">
                  {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === i ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                } bg-black/30 border border-cyan-800 rounded-lg px-6 py-4 text-sm text-gray-200`}
              >
                <div className="space-y-2 leading-relaxed">
                  {exp.bullets.map((point, idx) => (
                    <p key={idx} className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-cyan-500">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
