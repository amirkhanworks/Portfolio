import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Microsoft Azure',
  'Azure Kubernetes Service',
  'Azure Container Registry',
  'Helm Charts',
  'Prometheus',
  'Grafana',
  'Azure Monitor',
  'Azure Key Vault'
];

const bullets = [
  'Designed and implemented containerized microservices architecture for financial applications',
  'Configured Azure Kubernetes Service (AKS) with auto-scaling and load balancing',
  'Implemented comprehensive monitoring with Prometheus, Grafana, and Azure Monitor',
  'Automated deployment pipelines using Azure DevOps and Helm charts',
  'Implemented security best practices with Azure Key Vault for secrets management',
  'Set up disaster recovery and backup solutions for critical financial data',
  'Reduced application deployment time by 70% through containerization and automation'
];

const LF = () => {
  return (
    <ClientPage
      title="LF – Financial Technology Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a modern, scalable financial technology platform that improved system reliability by 99.9%. Received recognition for implementing industry-leading DevOps practices in a regulated financial environment."
      projectSummary="Modernized legacy financial systems by implementing containerized microservices on Azure Kubernetes Service. Delivered a robust, scalable platform with advanced monitoring, security, and automation capabilities for financial operations."
      duration="18 months"
      teamSize="8-person team"
      impact="99.9% system reliability"
      projectType="Financial Technology Platform"
    />
  );
};

export default LF;
