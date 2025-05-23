import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  ShieldCheck,
  BadgeCheck
} from 'lucide-react';

const slides = [
  {
    title: 'LTI | Azure Virtual Desktop and Infrastructure',
    summary:
      'Deployed secure Azure Virtual Desktop infrastructure during COVID-19 to support remote access for 10,000+ employees across LTI.',
    skills: ['Azure ExpressRoute', 'Azure Virtual Desktop', 'Azure Active Directory'],
    contributions: [
      'Configured and deployed Azure Virtual Desktop for secure remote access to 10,000+ employees',
      'Enabled secure remote work with zero downtime using ExpressRoute, VPN, and AD.',
      'Cut manual effort by 40% via IaC-based onboarding and policy automation',
      'Ensured audit-ready deployments with internal IT & compliance collaboration',
      'Reduced support overhead with self-service environment provisioning'
    ]
  },
  {
    title: 'LTIMindtree Solvathon | Azure Virtual Desktop',
    summary:
      'Provisioned secure, isolated Azure Virtual Desktops for 400+ participants during LTIMindtree’s 48-hour internal hackathon.',
    skills: ['Project Management', 'Project Delivery', 'Virtual Desktop', 'Terraform'],
    contributions: [
      'Provisioned 400+ isolated virtual desktops for hackathon participants',
      'Enabled seamless Git integration for collaborative development',
      'Built infra using reusable Terraform templates for rapid provisioning',
      'Automated onboarding and access setup for all contestants',
      'Delivered high availability with zero infra issues during the event'
    ]
  }
];

const LTIM = () => {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const handlePrev = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-white relative">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-10 text-cyan-500 hover:text-cyan-300 transition"
      >
        <ChevronLeft size={28} />
      </button>

      <div className="border border-cyan-800 bg-[#0f172a] rounded-lg px-6 py-8 shadow-md">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold text-accent mb-6">{current.title}</h1>
          <Section title="Project Summary" icon={<Layers size={18} />} content={current.summary} />
          <Section title="Skills" icon={<ShieldCheck size={18} />} techList={current.skills} />
          <Section title="My Contribution" icon={<BadgeCheck size={18} />} list={current.contributions} />
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          <h1 className="text-xl font-bold text-accent">{current.title}</h1>
          <MobileBlock title="Project Summary">{current.summary}</MobileBlock>
          <MobileBlock title="Skills">
            <div className="flex flex-wrap gap-2">
              {current.skills.map((skill, i) => (
                <span key={i} className="bg-cyan-700 text-xs px-2 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </MobileBlock>
          <MobileBlock title="My Contribution">
            <ul className="list-disc list-inside text-sm space-y-1">
              {current.contributions.map((point, idx) => <li key={idx}>{point}</li>)}
            </ul>
          </MobileBlock>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-10 text-cyan-500 hover:text-cyan-300 transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

const Section = ({ title, icon, content, techList, list }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 text-cyan-400 mb-2">
      {icon}
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
    {content && <p className="text-sm text-gray-300 leading-relaxed">{content}</p>}
    {techList && (
      <div className="flex flex-wrap gap-2 mt-2">
        {techList.map((tech, idx) => (
          <span key={idx} className="bg-cyan-700 text-white text-xs px-3 py-1 rounded-full shadow-sm">
            {tech}
          </span>
        ))}
      </div>
    )}
    {list && (
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-2">
        {list.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

const MobileBlock = ({ title, children }) => (
  <div className="border-l-4 border-cyan-700 pl-4">
    <h2 className="text-base font-semibold text-cyan-400 mb-1">{title}</h2>
    <div className="text-sm text-gray-300">{children}</div>
  </div>
);

export default LTIM;
