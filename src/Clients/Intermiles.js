import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Microsoft Azure',
  'Azure App Services',
  'Azure SQL Database',
  'Azure Redis Cache',
  'Azure CDN',
  'Azure Monitor',
  'Azure Key Vault',
  'CI/CD Pipelines'
];

const bullets = [
  'Designed and implemented scalable cloud infrastructure for loyalty program platform',
  'Configured Azure App Services with auto-scaling and load balancing for high traffic',
  'Implemented Azure Redis Cache for improved application performance and user experience',
  'Set up Azure CDN for global content delivery and reduced latency',
  'Automated deployment pipelines using Azure DevOps and Terraform',
  'Implemented comprehensive monitoring and alerting with Azure Monitor',
  'Reduced application response time by 60% through optimization and caching'
];

const Intermiles = () => {
  return (
    <ClientPage
      title="Intermiles – Loyalty Program Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a high-performance loyalty program platform that improved user engagement by 40%. Received recognition for implementing scalable architecture and achieving 99.9% uptime."
      projectSummary="Built a scalable cloud infrastructure for a major loyalty program platform serving millions of users. Delivered high-performance, globally distributed architecture with advanced caching and content delivery capabilities."
      duration="12 months"
      teamSize="6-person team"
      impact="40% user engagement increase"
      projectType="Loyalty Program Platform"
    />
  );
};

export default Intermiles;
