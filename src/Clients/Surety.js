import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure Active Directory',
  'Azure DevOps',
  'Microsoft Azure',
  'Microsoft Cognitive Services',
  'Compliance Management',
  'Terraform',
  'SonarQube',
  'Mend Bolt',
  'Azure App Services',
  'Multi-tenant Architecture'
];

const bullets = [
  'Led application architecture and infrastructure deployment for a RegTech solution serving 50+ financial institutions',
  'Integrated AI-driven gap analysis to align with regulatory standards (SOX, GDPR, PCI-DSS)',
  'Configured Azure Entra ID, App Services, and compliance workflows for multi-tenant delivery',
  'Built quality validation pipelines using SonarQube and Mend Bolt for automated security scanning',
  'Enabled secure, audit-ready CI/CD across development, staging, and production environments',
  'Implemented automated compliance reporting and audit trail generation',
  'Reduced deployment time by 60% through infrastructure automation and containerization'
];

const Surety = () => {
  return (
    <ClientPage
      title="Surety – Compliance-as-a-Service Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Recognized for secure architecture design and collaboration with client leadership to ensure audit-ready deployment. Received client commendation for delivering a scalable platform that reduced compliance overhead by 40%."
      projectSummary="Built a comprehensive RegTech platform with AI-driven compliance gap detection for financial institutions. Delivered scalable, audit-ready Azure infrastructure with automated security and deployment workflows, serving 50+ enterprise clients with zero security incidents."
      duration="8 months"
      teamSize="6-person team"
      impact="40% reduction in compliance overhead"
      projectType="RegTech Platform"
    />
);
};

export default Surety;
