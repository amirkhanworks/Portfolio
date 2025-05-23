import React from 'react';
import { CheckCircle, Layers, Award, ShieldCheck } from 'lucide-react';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Azure Key Vault',
  'SonarQube',
  'OWASP ZAP',
  'Azure Monitor',
  'Mend Bolt'
];

const bullets = [
  'Automated provisioning of landing zones and core services via Terraform',
  'Cut deployment time by 30% with reusable CI/CD pipelines.',
  'Boosted security by 25% using integrated DevSecOps tools (SonarQube, ZAP, Mend Bolt).',
  'Set up centralized monitoring and distributed logging with Azure Monitor.',
  'Accelerated deployment velocity by 30% using reusable YAML-based CI/CD pipelines integrated with GitOps strategies',
];

const CharlesStanley = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#0f172a] border border-cyan-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          Charles Stanley – DevOps Platform Transformation
        </h1>

        <Section
          title="Project Summary"
          icon={<Layers size={18} />}
          content="Led the DevOps transformation for Charles Stanley (financial services) under LTIMindtree. Architected Azure-based infrastructure, delivered end-to-end CI/CD pipelines, and enabled secure, scalable, and compliant deployments aligned with financial regulatory needs."
        />

        <Section title="Skills & Tools" icon={<ShieldCheck size={18} />} techList={techStack} />

        <Section title="My Contributions & Impact" icon={<CheckCircle size={18} />} list={bullets} />

        <Section
          title="Recognition"
          icon={<Award size={18} />}
          content="Acknowledged by LTIMindtree for spearheading automation efforts and compliance architecture for a UK-based financial institution."
        />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <h1 className="text-2xl font-bold text-accent">Charles Stanley – DevOps Platform Transformation</h1>

        <MobileBlock title="Project Summary">
          Led the DevOps transformation for Charles Stanley (financial services) under LTIMindtree. Architected Azure-based infrastructure, delivered end-to-end CI/CD, and aligned deployments with regulatory compliance.
        </MobileBlock>

        <MobileBlock title="Skills & Tools">
          <div className="flex flex-wrap gap-2">
            {techStack.map((t, i) => (
              <span key={i} className="bg-cyan-700 text-xs px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </MobileBlock>

        <MobileBlock title="My Contributions & Impact">
          <ul className="list-disc list-inside text-sm space-y-1">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </MobileBlock>

        <MobileBlock title="Recognition">
          Acknowledged by LTIMindtree for spearheading automation efforts and compliance architecture for a UK-based financial institution.
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

export default CharlesStanley;
