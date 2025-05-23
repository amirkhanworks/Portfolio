import React from 'react';
import { CheckCircle, Layers, Award, ShieldCheck } from 'lucide-react';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Compliance Management',
  'Microsoft Azure',
  'Project Management'
];

const bullets = [
  'Designed and deployed scalable application infrastructure on Azure',
  'Configured Azure Application Gateway and SonarQube for vulnerability scanning',
  'Optimized platform for secure payment processing and beneficiary data management',
  'Implemented cost-efficient architecture with compliance automation',
  'Collaborated with stakeholders to ensure scalable and regulation-ready systems'
];

const MPSEDC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#0f172a] border border-cyan-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          Mukhymantri Ladli Behna Yojana – Beneficiary Management & Hosting
        </h1>

        <Section
          title="Project Summary"
          icon={<Layers size={18} />}
          content="Led the infrastructure development for the Ladli Behna Yojana to empower women beneficiaries in Madhya Pradesh. Delivered a secure, scalable Azure-based platform for processing payments, managing data, and ensuring regulatory compliance."
        />

        <Section title="Tech Stack" icon={<ShieldCheck size={18} />} techList={techStack} />

        <Section title="My Contribution" icon={<CheckCircle size={18} />} list={bullets} />

        <Section
          title="Impact"
          icon={<Award size={18} />}
          content="Successfully enabled high availability and secure handling of beneficiary data. Improved deployment timelines and ensured continuous compliance with state regulations."
        />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <h1 className="text-2xl font-bold text-accent">Mukhymantri Ladli Behna Yojana – Beneficiary Management & Hosting</h1>

        <MobileBlock title="Project Summary">
          Led Azure infrastructure setup for MP's Ladli Behna Yojana, ensuring secure, compliant management of beneficiary data and payments.
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

        <MobileBlock title="Impact">
          Ensured high system availability, secured financial data, and accelerated deployment to meet government compliance.
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

export default MPSEDC;
