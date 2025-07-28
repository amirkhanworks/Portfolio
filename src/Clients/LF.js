import React from 'react';
import { Layers, ShieldCheck, CheckCircle, Award } from 'lucide-react';

const techStack = [
  'Azure Kubernetes Service',
  'Azure Monitor',
  'Terraform',
  'GitHub Actions',
  'Container Apps'
];

const bullets = [
  'Led infrastructure-as-code deployment using Terraform across Azure workloads.',
  'Implemented GitHub Actions workflows for containerized deployment on AKS.',
  'Set up autoscaling and secure ingress for media workloads using Azure Gateway.',
  'Integrated Azure Monitor with custom dashboards for real-time app observability.',
  'Reduced deployment time by 60% through CI/CD pipeline optimizations.'
];

const LF = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#0f172a] border border-cyan-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          Luv Films – Streaming Platform Infra & DevOps
        </h1>

        <Section
          title="Project Summary"
          icon={<Layers size={18} />}
          content="Handled DevOps architecture and AKS deployment for a streaming content platform by Luv Films. Focused on container orchestration, pipeline automation, and infrastructure-as-code delivery."
        />

        <Section title="Skills" icon={<ShieldCheck size={18} />} techList={techStack} />

        <Section title="My Contribution" icon={<CheckCircle size={18} />} list={bullets} />

        <Section
          title="Recognition"
          icon={<Award size={18} />}
          content="Appreciated by client team for delivering scalable infra with minimal manual intervention and 100% uptime during campaign peaks."
        />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <h1 className="text-2xl font-bold text-accent">Luv Films – Streaming Platform Infra & DevOps</h1>

        <MobileBlock title="Project Summary">
          Handled DevOps architecture and AKS deployment for Luv Films' streaming platform with scalable infrastructure and optimized GitHub Actions pipelines.
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
          Appreciated by client team for delivering scalable infra with minimal manual intervention and 100% uptime during campaign peaks.
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

export default LF;