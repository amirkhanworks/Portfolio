import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Compliance Management',
  'Microsoft Azure',
  'Project Management',
  'Azure Application Gateway',
  'SonarQube',
  'Azure Key Vault',
  'Azure Monitor',
  'Payment Processing'
];

const bullets = [
  'Designed and deployed scalable application infrastructure on Azure for government welfare program',
  'Configured Azure Application Gateway and SonarQube for vulnerability scanning and security compliance',
  'Optimized platform for secure payment processing and beneficiary data management for 2M+ users',
  'Implemented cost-efficient architecture with compliance automation for government regulations',
  'Collaborated with stakeholders to ensure scalable and regulation-ready systems',
  'Set up automated monitoring and alerting for critical payment processing systems',
  'Reduced infrastructure costs by 30% through optimization and automation'
];

const MPSEDC = () => {
  return (
    <ClientPage
      title="Mukhymantri Ladli Behna Yojana – Beneficiary Management & Hosting"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered a secure, scalable platform serving 2M+ beneficiaries. Received commendation from state government for ensuring zero downtime during critical payment processing periods."
      projectSummary="Led the infrastructure development for the Ladli Behna Yojana to empower women beneficiaries in Madhya Pradesh. Delivered a secure, scalable Azure-based platform for processing payments, managing data, and ensuring regulatory compliance for 2M+ beneficiaries."
      duration="10 months"
      teamSize="5-person team"
      impact="2M+ beneficiaries served"
      projectType="Government Welfare Platform"
    />
);
};

export default MPSEDC;
