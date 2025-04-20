import React from 'react';
import { CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'Cricket Association of Bengal | App Deployment',
    org: 'IFI Techsolutions',
    bullets: [
      'Hosted and deployed an online ticketing platform for ICC World Cup 2023',
      'Designed cost-effective Azure DevOps-based deployment pipelines',
      'Managed delivery, security compliance and infrastructure monitoring'
    ],
    tools: ['Azure DevOps', 'Terraform', 'Microsoft Azure', 'DevSecOps']
  },
  {
    title: 'LTI | Azure Virtual Desktop & Infra',
    org: 'IFI Techsolutions',
    bullets: [
      'Deployed VDI infra for secure remote work during COVID-19',
      'Integrated ExpressRoute, VPN, AVD, and Azure AD for seamless access'
    ],
    tools: ['Azure ExpressRoute', 'AVD', 'Azure AD', 'Security Mgmt']
  },
  {
    title: 'Solvathon | Azure Virtual Desktop',
    org: 'IFI Techsolutions',
    bullets: [
      'Enabled hackathon with isolated AVD environments for 400+ participants',
      'Integrated Terraform and GitHub for streamlined provisioning'
    ],
    tools: ['Project Delivery', 'Virtual Desktop', 'Terraform']
  },
  {
    title: 'Ladli Behna Yojana | Application Hosting',
    org: 'IFI Techsolutions',
    bullets: [
      'Engineered infra for scalable G2C platform with Azure App Gateway',
      'Implemented SonarQube, compliance and cost-optimized architecture'
    ],
    tools: ['Azure DevOps', 'Terraform', 'SonarQube', 'Compliance Manager']
  },
  {
    title: 'Surety | Compliance as a Service',
    org: 'IFI Techsolutions',
    bullets: [
      'Built RegTech platform integrating Azure Entra ID, AI services and CI/CD',
      'Led infra design, security config, and gap analysis automation'
    ],
    tools: ['Azure AD', 'Azure DevOps', 'Microsoft Cognitive Services', 'Mend Bolt']
  }
];

const ProjectSection = () => (
  <section id="projects" className="mb-16">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-700 rounded-xl p-5 shadow-lg hover:shadow-cyan-600/30 transition-all duration-500 ease-in-out group"
        >
          <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500 transition duration-300"></div>
          <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-cyan-300 mb-3">{project.org}</p>
          <ul className="list-none text-sm text-gray-300 space-y-2">
            {project.bullets.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-cyan-400 mt-[2px] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="bg-cyan-600/70 text-xs text-white px-2 py-1 rounded-full backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectSection;
