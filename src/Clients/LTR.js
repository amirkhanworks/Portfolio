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
  'Istio Service Mesh'
];

const bullets = [
  'Designed and implemented containerized microservices architecture for logistics applications',
  'Configured Azure Kubernetes Service (AKS) with auto-scaling and load balancing',
  'Implemented service mesh using Istio for advanced traffic management and security',
  'Set up comprehensive monitoring with Prometheus, Grafana, and Azure Monitor',
  'Automated deployment pipelines using Azure DevOps and Helm charts',
  'Implemented security best practices with Azure Key Vault for secrets management',
  'Reduced application deployment time by 65% through containerization and automation'
];

const LTR = () => {
  return (
    <ClientPage
      title="LTR – Logistics Technology Platform"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a modern, scalable logistics platform that improved operational efficiency by 50%. Received recognition for implementing industry-leading DevOps practices in a complex logistics environment."
      projectSummary="Modernized legacy logistics systems by implementing containerized microservices on Azure Kubernetes Service. Delivered a robust, scalable platform with advanced monitoring, security, and automation capabilities for logistics operations."
      duration="16 months"
      teamSize="9-person team"
      impact="50% efficiency improvement"
      projectType="Logistics Technology Platform"
    />
  );
};

export default LTR;
