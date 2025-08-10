import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Microsoft Azure',
  'Azure Virtual Desktop',
  'Azure Active Directory',
  'Azure Monitor',
  'Azure Security Center',
  'PowerShell',
  'Azure Policy',
  'Compliance Management'
];

const bullets = [
  'Designed and implemented secure Azure Virtual Desktop infrastructure for remote work',
  'Configured Azure Active Directory with conditional access and multi-factor authentication',
  'Implemented comprehensive security policies using Azure Security Center and Azure Policy',
  'Set up automated monitoring and alerting for security events and compliance violations',
  'Automated deployment and management using PowerShell and Azure DevOps',
  'Implemented compliance frameworks and audit-ready security controls',
  'Reduced security incidents by 80% through automated security monitoring and response'
];

const RPAC = () => {
  return (
    <ClientPage
      title="RPAC – Secure Remote Work Infrastructure"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a secure remote work infrastructure that enabled seamless operations during challenging times. Received recognition for implementing robust security measures and achieving zero security breaches."
      projectSummary="Built a comprehensive secure remote work infrastructure using Azure Virtual Desktop and advanced security controls. Delivered a scalable, compliant platform that enabled secure remote operations for enterprise clients."
      duration="6 months"
      teamSize="4-person team"
      impact="80% reduction in security incidents"
      projectType="Secure Remote Work Platform"
    />
  );
};

export default RPAC;
