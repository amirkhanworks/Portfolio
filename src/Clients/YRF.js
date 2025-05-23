import React from 'react';
import { Layers, ShieldCheck, CheckCircle, Award } from 'lucide-react';

const techStack = [
  'Azure DevOps',
  'App Services',
  'CI/CD',
  'Azure Front Door',
  'Global Hosting'
];

const bullets = [
  'Architected Azure hosting for global availability with traffic from multiple regions',
  'Setup secure and scalable CI/CD pipelines with rollback support and infra separation',
  'Enabled seamless deployment using Azure Pipelines with slot-based deployments',
  'Improved developer velocity by 50% through DevOps automation and PR triggers',
  'Ensured compliance with content security and GDPR through Azure policy integration'
];

const YRF = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#0f172a] border border-cyan-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          Yash Raj Films – Casting App DevOps & Hosting
        </h1>

        <Section
          title="Project Summary"
          icon={<Layers size={18} />}
          content="Led the DevOps implementation for a global casting application used by Yash Raj Films to manage actor/actress submissions. Designed scalable Azure architecture and CI/CD pipelines for global user traffic from casting teams."
        />

        <Section title="Skills" icon={<ShieldCheck size={18} />} techList={techStack} />

        <Section title="My Contribution" icon={<CheckCircle size={18} />} list={bullets} />

        <Section
          title="Recognition"
          icon={<Award size={18} />}
          content="Recognized by leadership for delivering a performant, secure platform supporting high-traffic casting workflows with minimal downtime."
        />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <h1 className="text-2xl font-bold text-accent">Yash Raj Films – Casting App DevOps & Hosting</h1>

        <MobileBlock title="Project Summary">
          Led the DevOps implementation for a global casting application used by Yash Raj Films. Delivered scalable Azure architecture and CI/CD for high-traffic casting submissions.
        </MobileBlock>

        <MobileBlock title="Skills">
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
          Recognized by leadership for delivering a performant, secure platform supporting high-traffic casting workflows with minimal downtime.
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

export default YRF;
