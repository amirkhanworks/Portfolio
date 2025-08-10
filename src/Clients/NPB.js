import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Microsoft Azure',
  'Azure SQL Database',
  'Azure App Services',
  'Azure Key Vault',
  'Azure Monitor',
  'Power BI',
  'Azure Active Directory',
  'CI/CD Pipelines'
];

const bullets = [
  'Designed and implemented cloud-native architecture for banking applications',
  'Configured Azure SQL Database with high availability and disaster recovery',
  'Implemented secure authentication using Azure Active Directory',
  'Set up comprehensive monitoring and alerting with Azure Monitor',
  'Automated deployment pipelines using Azure DevOps and Terraform',
  'Integrated Power BI for real-time analytics and reporting',
  'Reduced infrastructure costs by 45% through cloud optimization'
];

const NPB = () => {
  return (
    <ClientPage
      title="NPB – Digital Banking Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a modern digital banking platform that improved customer experience and operational efficiency. Received recognition for implementing robust security measures and achieving 99.9% uptime."
      projectSummary="Modernized legacy banking systems by implementing a cloud-native digital banking platform on Azure. Delivered secure, scalable infrastructure with real-time analytics and automated deployment capabilities."
      duration="14 months"
      teamSize="7-person team"
      impact="45% cost reduction"
      projectType="Digital Banking Platform"
    />
);
};

export default NPB;
