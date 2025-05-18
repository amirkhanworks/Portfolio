import React, { useState, useEffect, useRef } from 'react';
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
    tools: ['Azure DevOps', 'Terraform', 'Microsoft Azure', 'DevSecOps'],
    issue: 'Manual deployments during high traffic caused downtime risks.',
    solution: 'Built CI/CD pipelines using Azure DevOps for zero-downtime.',
    benefit: 'Improved deployment reliability and reduced go-live friction.'
  },
  {
    title: 'LTI | Azure Virtual Desktop & Infra',
    org: 'IFI Techsolutions',
    bullets: [
      'Deployed VDI infra for secure remote work during COVID-19',
      'Integrated ExpressRoute, VPN, AVD, and Azure AD for seamless access'
    ],
    tools: ['Azure ExpressRoute', 'AVD', 'Azure AD', 'Security Mgmt'],
    issue: 'Legacy VPN infra failed under remote access load.',
    solution: 'Designed AVD with ExpressRoute and VPN gateway routing.',
    benefit: 'Enabled scalable secure access for all employees.'
  },
  {
    title: 'Solvathon | Azure Virtual Desktop',
    org: 'IFI Techsolutions',
    bullets: [
      'Enabled hackathon with isolated AVD environments for 400+ participants',
      'Integrated Terraform and GitHub for streamlined provisioning'
    ],
    tools: ['Project Delivery', 'Virtual Desktop', 'Terraform'],
    issue: 'Provisioning VMs manually for 400+ devs was unscalable.',
    solution: 'Automated AVD deployment with GitHub Actions & Terraform.',
    benefit: 'Reduced provisioning time from days to minutes.'
  },
  {
    title: 'Ladli Behna Yojana | Application Hosting',
    org: 'IFI Techsolutions',
    bullets: [
      'Engineered infra for scalable G2C platform with Azure App Gateway',
      'Implemented SonarQube, compliance and cost-optimized architecture'
    ],
    tools: ['Azure DevOps', 'Terraform', 'SonarQube', 'Compliance Manager'],
    issue: 'Compliance issues and traffic spikes during scheme launch.',
    solution: 'Used Azure Gateway and CI/CD pipelines with SonarQube.',
    benefit: 'Achieved scalability and passed security audit on first attempt.'
  },
  {
    title: 'Surety | Compliance as a Service',
    org: 'IFI Techsolutions',
    bullets: [
      'Built RegTech platform integrating Azure Entra ID, AI services and CI/CD',
      'Led infra design, security config, and gap analysis automation'
    ],
    tools: ['Azure AD', 'Azure DevOps', 'Microsoft Cognitive Services', 'Mend Bolt'],
    issue: 'Manually checking security gaps delayed releases.',
    solution: 'Integrated automated gap analysis into pipelines.',
    benefit: 'Shortened release cycles and improved audit-readiness.'
  }
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    if (selectedProject && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold text-accent mb-4">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-700 rounded-xl p-5 shadow-lg hover:shadow-cyan-600/30 transition-all duration-500 ease-in-out group cursor-pointer"
            onClick={() => setSelectedProject(project)}
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-white rounded-xl p-6 w-full max-w-xl relative shadow-2xl transform scale-95 opacity-0 animate-modal-in"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2 text-gray-800">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Issue:</strong> {selectedProject.issue}</p>
            <p className="text-gray-700 mb-2"><strong>Solution:</strong> {selectedProject.solution}</p>
            <p className="text-gray-700"><strong>Benefit:</strong> {selectedProject.benefit}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
