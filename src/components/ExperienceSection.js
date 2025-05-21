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
      'Modernized 10+ legacy systems using Azure PaaS and Containers',
      'Integrated Dynatrace, SonarQube & OWASP ZAP for DevSecOps',
      'Automated onboarding via Logic Apps & Power Automate',
      'Provisioned infra with Terraform & deployed OpenAI-based apps'
    ]
  },
  {
    year: '2021 – 2023',
    company: 'IFI Techsolutions',
    title: 'Technical Consultant (DevOps)',
    logo: IFILogo,
    bullets: [
      'Delivered CI/CD pipelines using Azure DevOps and PaaS tools',
      'Led POCs, presales demos, and client workshops on AVD',
      'Configured VNet, NSG, DNS and secured Azure networks'
    ]
  },
  {
    year: '2020 – 2021',
    company: 'IFI Techsolutions',
    title: 'Senior Cloud Engineer',
    logo: IFILogo,
    bullets: [
      'Managed virtualization for 6000+ users',
      'Automated deployments with PowerShell & Runbooks',
      'Deployed ADDS & enabled secure remote hiring'
    ]
  },
  {
    year: '2019 – 2020',
    company: 'IFI Techsolutions',
    title: 'Cloud Engineer',
    logo: IFILogo,
    bullets: [
      'Built virtual IT environments for manufacturing & investment clients',
      'Supported Fortune 500 clients and Azure Expert MSP certification'
    ]
  }
];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="experience" className="px-4 py-10 text-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-accent mb-10">Experience</h2>
      <div className="flex flex-col gap-8">
        {experience.map((exp, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-4">
            <div className="text-sm text-gray-400 w-32 sm:text-right sm:pt-1">{exp.year}</div>

            <div className="flex-1">
              <div
                onClick={() => toggle(i)}
                className="cursor-pointer group flex items-center justify-between bg-black border border-cyan-700 hover:border-cyan-400 transition rounded-lg px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 p-1 bg-white rounded-md shadow-md flex items-center justify-center">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-cyan-300 font-semibold">{exp.company}</h3>
                    <p className="text-sm text-gray-300">{exp.title}</p>
                  </div>
                </div>
                <span className="text-cyan-400">
                  {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </div>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === i ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 pl-2">
                  {exp.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
