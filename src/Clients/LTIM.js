import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure Virtual Desktop',
  'Azure DevOps',
  'Terraform',
  'Azure ExpressRoute',
  'Azure Active Directory',
  'Azure Monitor',
  'VPN Configuration',
  'Policy Automation',
  'GitOps',
  'Infrastructure as Code'
];

const bullets = [
      'Configured and deployed Azure Virtual Desktop for secure remote access to 10,000+ employees',
  'Enabled secure remote work with zero downtime using ExpressRoute, VPN, and AD',
      'Cut manual effort by 40% via IaC-based onboarding and policy automation',
      'Ensured audit-ready deployments with internal IT & compliance collaboration',
  'Reduced support overhead with self-service environment provisioning',
  'Implemented comprehensive monitoring and alerting for virtual desktop infrastructure',
  'Automated user onboarding and access management processes'
];

const LTIM = () => {
  return (
    <ClientPage
      title="LTIMindtree – Azure Virtual Desktop Infrastructure"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered Azure Virtual Desktop infrastructure supporting 10,000+ employees during COVID-19. Received commendation from LTIMindtree leadership for enabling seamless remote work with zero downtime."
      projectSummary="Deployed secure Azure Virtual Desktop infrastructure during COVID-19 to support remote access for 10,000+ employees across LTIMindtree. Delivered scalable, secure, and compliant virtual desktop solution with automated provisioning and monitoring."
      duration="12 months"
      teamSize="6-person team"
      impact="10,000+ employees supported"
      projectType="Virtual Desktop Infrastructure"
    />
);
};

export default LTIM;
