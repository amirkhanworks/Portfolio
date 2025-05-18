import React from 'react';
import { CheckCircle } from 'lucide-react';

const experience = [
  {
    year: '2023 – Present',
    title: 'Senior Product Engineer · LTIMindtree',
    url: 'https://www.ltimindtree.com/',
    bullets: [
      'Modernized 10+ legacy systems using Azure PaaS and Containers',
      'Integrated Dynatrace, SonarQube & OWASP ZAP for DevSecOps',
      'Automated onboarding via Logic Apps & Power Automate',
      'Provisioned infra with Terraform & deployed OpenAI-based apps'
    ],
    tools: ['Azure DevOps', 'Terraform', 'AKS', 'Docker', 'Logic Apps', 'OpenAI']
  },
  {
    year: '2021 – 2023',
    title: 'Technical Consultant (DevOps) · IFI Techsolutions',
    url: 'https://ifitechnologies.com/',
    bullets: [
      'Delivered CI/CD pipelines using Azure DevOps and PaaS tools',
      'Led POCs, presales demos, and client workshops on AVD',
      'Configured VNet, NSG, DNS and secured Azure networks'
    ],
    tools: ['Azure PaaS', 'Terraform', 'JMeter', 'Azure Virtual Desktop']
  },
  {
    year: '2020 – 2021',
    title: 'Senior Cloud Engineer · IFI Techsolutions',
    url: 'https://ifitechnologies.com/',
    bullets: [
      'Managed virtualization for 6000+ users',
      'Automated deployments with PowerShell & Runbooks',
      'Deployed ADDS & enabled secure remote hiring'
    ],
    tools: ['Azure Automation', 'PowerShell', 'ADDS', 'AVD', 'Azure VM']
  },
  {
    year: '2019 – 2020',
    title: 'Cloud Engineer · IFI Techsolutions',
    url: 'https://ifitechnologies.com/',
    bullets: [
      'Built virtual IT environments for manufacturing & investment clients',
      'Supported Fortune 500 clients and Azure Expert MSP certification'
    ],
    tools: ['Azure VNet', 'Azure Maps', 'Azure Cognitive Services', 'Azure IoT']
  }
];

const ExperienceSection = () => (
  <section id="experience" className="mb-16 text-white">
    <h2 className="text-2xl font-bold text-accent mb-4">Experience</h2>
    <div className="space-y-12">
      {experience.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6">
          <p className="text-sm text-gray-400 w-full md:w-32 shrink-0 md:pt-2">{item.year}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group border border-cyan-700 hover:border-cyan-400 transition-all rounded-lg p-6 bg-[#0e0e0e] shadow-md hover:shadow-[0_0_15px_#00ffff]"
          >
            <h3 className="text-lg font-semibold text-cyan-300 group-hover:underline mb-3">{item.title}</h3>
            <ul className="list-none text-sm text-gray-300 space-y-2 mb-4">
              {item.bullets.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-cyan-400 mt-[2px]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-cyan-700 text-xs text-white px-2 py-1 rounded shadow"
                >
                  {tool}
                </span>
              ))}
            </div>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
