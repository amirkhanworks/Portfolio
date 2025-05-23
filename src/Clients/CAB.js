import React from 'react';
import { CheckCircle, Layers, Award, ShieldCheck } from 'lucide-react';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Microsoft Azure',
  'DevSecOps',
  'Project Delivery'
];

const bullets = [
  'Delivered 100% uptime with optimized load handling under peak traffic.',
  'Led infra setup, CI/CD automation, and Azure service configuration',
  'Ensured compliance and security through DevSecOps best practices',
  'Accelerated delivery by 25% through CI/CD automation and IaC',
  'Reduced ops overhead with streamlined, scalable workflows.'
];

const CAB = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#0f172a] border border-cyan-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          Cricket Association of Bengal – ICC 2023 Ticketing Platform
        </h1>

        <Section
          title="Project Summary"
          icon={<Layers size={18} />}
          content="Architected and deployed a scalable ticketing platform for ICC 2023 using Azure and Terraform, ensuring secure, high-availability performance for 20,000+ users."
        />

        <Section title="Tech Stack" icon={<ShieldCheck size={18} />} techList={techStack} />

        <Section title="My Contribution" icon={<CheckCircle size={18} />} list={bullets} />

        <Section
          title="Recognition"
          icon={<Award size={18} />}
          content="Appreciated by event authorities for high system reliability and seamless user experience during peak demand."
        />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <h1 className="text-2xl font-bold text-accent">
          Cricket Association of Bengal – ICC 2023 Ticketing Platform
        </h1>

        <MobileBlock title="Project Summary">
          Architected and deployed a scalable ticketing platform for ICC 2023 using Azure and Terraform, ensuring secure, high-availability performance for 20,000+ users.
        </MobileBlock>

        <MobileBlock title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {techStack.map((t, i) => (
              <span key={i} className="bg-cyan-700 text-xs px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </MobileBlock>

        <MobileBlock title="My Contribution">
          <ul className="list-disc list-inside text-sm space-y-1">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </MobileBlock>

        <MobileBlock title="Recognition">
          Appreciated by event authorities for system reliability and seamless user experience.
        </MobileBlock>
      </div>
    </div>
  );
};

const Section = ({ title, icon, content, list, techList }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 text-cyan-400 mb-2">
      {icon}
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
    {content && <p className="text-sm text-gray-300 leading-relaxed">{content}</p>}
    {list && (
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pl-1 mt-2">
        {list.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}
    {techList && (
      <div className="flex flex-wrap gap-2 mt-2">
        {techList.map((tech, idx) => (
          <span key={idx} className="bg-cyan-700 text-white text-xs px-3 py-1 rounded-full shadow-sm">
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

const MobileBlock = ({ title, children }) => (
  <div className="border-l-4 border-cyan-700 pl-4">
    <h2 className="text-base font-semibold text-cyan-400 mb-1">{title}</h2>
    <div className="text-sm text-gray-300">{children}</div>
  </div>
);

export default CAB;
