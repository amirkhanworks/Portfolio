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
  'Healthcare Compliance'
];

const bullets = [
  'Designed and implemented HIPAA-compliant Azure Virtual Desktop infrastructure for healthcare',
  'Configured Azure Active Directory with conditional access and multi-factor authentication',
  'Implemented comprehensive security policies using Azure Security Center and Azure Policy',
  'Set up automated monitoring and alerting for security events and compliance violations',
  'Automated deployment and management using PowerShell and Azure DevOps',
  'Implemented healthcare compliance frameworks and audit-ready security controls',
  'Reduced security incidents by 85% through automated security monitoring and response'
];

const LTHC = () => {
  return (
    <ClientPage
      title="LTHC – Healthcare Technology Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a HIPAA-compliant healthcare technology platform that improved patient care efficiency by 35%. Received recognition for implementing robust security measures and achieving zero compliance violations."
      projectSummary="Built a comprehensive HIPAA-compliant healthcare technology platform using Azure Virtual Desktop and advanced security controls. Delivered a scalable, compliant platform that enabled secure healthcare operations and improved patient care."
      duration="20 months"
      teamSize="10-person team"
      impact="35% care efficiency improvement"
      projectType="Healthcare Technology Platform"
    />
  );
};

export default LTHC;
