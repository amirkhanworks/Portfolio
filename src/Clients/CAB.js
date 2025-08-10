import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure Kubernetes Service',
  'Azure DevOps',
  'Terraform',
  'Helm Charts',
  'Prometheus',
  'Grafana',
  'Azure Container Registry',
  'Azure Monitor',
  'Istio Service Mesh',
  'Azure Key Vault'
];

const bullets = [
  'Designed and implemented containerized microservices architecture for banking applications',
  'Configured Azure Kubernetes Service (AKS) with auto-scaling and load balancing',
  'Implemented service mesh using Istio for advanced traffic management and security',
  'Set up comprehensive monitoring with Prometheus, Grafana, and Azure Monitor',
  'Automated deployment pipelines using Azure DevOps and Helm charts',
  'Implemented security best practices with Azure Key Vault for secrets management',
  'Reduced application deployment time by 70% through containerization and automation'
];

const CAB = () => {
  return (
    <ClientPage
      title="CAB – Banking Infrastructure Modernization"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a modern, scalable banking infrastructure that improved system reliability by 99.9%. Received recognition for implementing industry-leading DevOps practices in a regulated financial environment."
      projectSummary="Modernized legacy banking infrastructure by implementing containerized microservices on Azure Kubernetes Service. Delivered a robust, scalable platform with advanced monitoring, security, and automation capabilities for a major banking institution."
      duration="12 months"
      teamSize="8-person team"
      impact="99.9% system reliability"
      projectType="Banking Infrastructure"
    />
);
};

export default CAB;
