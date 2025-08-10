import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Azure Key Vault',
  'SonarQube',
  'OWASP ZAP',
  'Azure Monitor',
  'Mend Bolt',
  'GitOps',
  'Azure Landing Zones',
  'Financial Compliance'
];

const bullets = [
  'Automated provisioning of landing zones and core services via Terraform for UK financial institution',
  'Cut deployment time by 30% with reusable CI/CD pipelines and GitOps strategies',
  'Boosted security by 25% using integrated DevSecOps tools (SonarQube, ZAP, Mend Bolt)',
  'Set up centralized monitoring and distributed logging with Azure Monitor',
  'Accelerated deployment velocity by 30% using reusable YAML-based CI/CD pipelines',
  'Implemented financial compliance frameworks and audit-ready security controls',
  'Reduced manual deployment errors by 90% through automation and validation'
];

const CharlesStanley = () => {
  return (
    <ClientPage
      title="Charles Stanley – DevOps Platform Transformation"
      techStack={techStack}
      bullets={bullets}
      recognition="Acknowledged by LTIMindtree for spearheading automation efforts and compliance architecture for a UK-based financial institution. Received commendation for delivering a secure, scalable platform that met all financial regulatory requirements."
      projectSummary="Led the DevOps transformation for Charles Stanley (financial services) under LTIMindtree. Architected Azure-based infrastructure, delivered end-to-end CI/CD pipelines, and enabled secure, scalable, and compliant deployments aligned with financial regulatory needs."
      duration="15 months"
      teamSize="5-person team"
      impact="30% deployment time reduction"
      projectType="Financial DevOps Platform"
    />
);
};

export default CharlesStanley;
