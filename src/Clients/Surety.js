import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure Active Directory',
  'Azure DevOps',
  'Microsoft Azure',
  'Microsoft Cognitive Services',
  'Compliance Management'
];

const bullets = [
  'Led application architecture and infrastructure deployment for a RegTech solution',
  'Integrated AI-driven gap analysis to align with regulatory standards (SOX, GDPR)',
  'Configured Azure Entra ID, App Services, and compliance workflows for multi-tenant delivery',
  'Built quality validation pipelines using SonarQube and Mend Bolt',
  'Enabled secure, audit-ready CI/CD across environments'
];

const Surety = () => {
  return (
    <ClientPage
      title="Surety – Compliance-as-a-Service Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Recognized for secure architecture design and collaboration with client leadership to ensure audit-ready deployment."
      projectSummary="Built a RegTech platform with AI-driven compliance gap detection. Delivered scalable, audit-ready Azure infrastructure with automated security and deployment workflows."
    />
  );
};

export default Surety;
