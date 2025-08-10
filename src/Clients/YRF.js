import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'App Services',
  'CI/CD',
  'Azure Front Door',
  'Global Hosting',
  'Azure CDN',
  'Azure Monitor',
  'Azure Key Vault',
  'Slot-based Deployments',
  'Content Security'
];

const bullets = [
  'Architected Azure hosting for global availability with traffic from multiple regions',
  'Setup secure and scalable CI/CD pipelines with rollback support and infra separation',
  'Enabled seamless deployment using Azure Pipelines with slot-based deployments',
  'Improved developer velocity by 50% through DevOps automation and PR triggers',
  'Ensured compliance with content security and GDPR through Azure policy integration',
  'Implemented global content delivery with Azure CDN for improved user experience',
  'Reduced deployment time by 70% through automated CI/CD processes'
];

const YRF = () => {
  return (
    <ClientPage
      title="Yash Raj Films – Casting App DevOps & Hosting"
      techStack={techStack}
      bullets={bullets}
      recognition="Recognized by leadership for delivering a performant, secure platform supporting high-traffic casting workflows with minimal downtime. Received commendation for implementing global hosting solution with 99.9% uptime."
      projectSummary="Led the DevOps implementation for a global casting application used by Yash Raj Films to manage actor/actress submissions. Designed scalable Azure architecture and CI/CD pipelines for global user traffic from casting teams across multiple regions."
      duration="8 months"
      teamSize="5-person team"
      impact="50% developer velocity improvement"
      projectType="Entertainment Platform"
    />
);
};

export default YRF;
