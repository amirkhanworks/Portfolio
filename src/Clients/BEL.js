import React from 'react';
import { Layers, ShieldCheck, CheckCircle } from 'lucide-react';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Azure Boards',
  'Policy as Code',
  'Change Management'
];

const bullets = [
  'Automated infrastructure provisioning via Terraform modules for repeatable deployments',
  'Integrated Azure Boards with internal ITSM for ticket-to-deployment traceability',
  'Created reusable pipeline templates using Azure DevOps for scalable IAC delivery',
  'Reduced manual provisioning effort by 60% by templatizing core infra components',
  'Ensured secure policy adherence and approval gating using pipelines and variable groups'
];

const BEL = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#0f172a] border border-cyan-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          BEL – Infrastructure Automation (MSP)
        </h1>

        <Section
          title="Project Summary"
          icon={<Layers size={18} />}
          content="Provisioned Azure infrastructure for BEL under a Managed Service Provider (MSP) engagement. Integrated Azure DevOps with internal ITSM tooling to streamline ticket-driven deployments, change requests, and resource automation workflows."
        />

        <Section title="Tech Stack" icon={<ShieldCheck size={18} />} techList={techStack} />

        <Section title="My Contribution" icon={<CheckCircle size={18} />} list={bullets} />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <h1 className="text-2xl font-bold text-accent">BEL – Infrastructure Automation (MSP)</h1>

        <MobileBlock title="Project Summary">
          Provisioned Azure infrastructure for BEL under a Managed Service Provider (MSP) engagement. Integrated Azure DevOps with internal ITSM tooling to streamline ticket-driven deployments, change requests, and resource automation workflows.
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

export default BEL;
