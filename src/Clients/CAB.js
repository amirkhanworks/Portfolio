import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Microsoft Azure',
  'DevSecOps',
  'Project Delivery'
];

const bullets = [
  'Delivered 100% uptime with optimized load handling under peak traffic.',
  'Led infra setup, CI/CD automation, and Azure service configuration',
  'Ensured compliance and security through DevSecOps best practices',
  'Accelerated delivery by 25% through CI/CD automation and IaC',
  'Reduced ops overhead with streamlined, scalable workflows.'
];

const CAB = () => {
  return (
    <ClientPage
      title="Cricket Association of Bengal – ICC 2023 Ticketing Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Appreciated by event authorities for high system reliability and seamless user experience during peak demand."
      projectSummary="Architected and deployed a scalable ticketing platform for ICC 2023 using Azure and Terraform, ensuring secure, high-availability performance for 20,000+ users."
    />
  );
};

export default CAB;
