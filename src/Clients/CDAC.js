import React from 'react';
import { Layers, ShieldCheck, CheckCircle } from 'lucide-react';

const techStack = [
  'Azure DevOps',
  'Pipelines',
  'Boards',
  'CI/CD',
  'DevOps Coaching'
];

const bullets = [
  'Designed hands-on workshop curriculum for Azure DevOps, CI/CD, Git, Boards',
  'Trained over 300 engineers and stakeholders in two live seminar sessions',
  'Implemented CI/CD pipelines on production application with code branching',
  'Established DevOps best practices like environment separation and test automation',
  'Received appreciation for aligning teams on a common DevOps approach'
];

const CDAC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#0f172a] border border-cyan-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          CDAC – DevOps Enablement & Training
        </h1>

        <Section
          title="Project Summary"
          icon={<Layers size={18} />}
          content="Collaborated with CDAC to upskill internal teams and implement DevOps on a live application. Conducted a DevOps workshop for 300+ attendees including developers, QAs, and project managers while also setting up CI/CD practices on an active project."
        />

        <Section title="Tech Stack" icon={<ShieldCheck size={18} />} techList={techStack} />

        <Section title="My Contribution" icon={<CheckCircle size={18} />} list={bullets} />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <h1 className="text-2xl font-bold text-accent">CDAC – DevOps Enablement & Training</h1>

        <MobileBlock title="Project Summary">
          Collaborated with CDAC to upskill internal teams and implement DevOps on a live application. Conducted a DevOps workshop for 300+ attendees including developers, QAs, and project managers while also setting up CI/CD practices on an active project.
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

export default CDAC;
