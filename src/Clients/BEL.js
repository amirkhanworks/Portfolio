import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Terraform',
  'Azure Boards',
  'Policy as Code',
  'Change Management',
  'Azure Resource Manager',
  'Azure Policy',
  'PowerShell',
  'Azure Monitor',
  'ITSM Integration'
];

const bullets = [
  'Automated infrastructure provisioning via Terraform modules for repeatable deployments',
  'Integrated Azure Boards with internal ITSM for ticket-to-deployment traceability',
  'Created reusable pipeline templates using Azure DevOps for scalable IAC delivery',
  'Reduced manual provisioning effort by 60% by templatizing core infra components',
  'Ensured secure policy adherence and approval gating using pipelines and variable groups',
  'Implemented comprehensive monitoring and alerting for infrastructure health',
  'Streamlined change management processes with automated approval workflows'
];

const BEL = () => {
  return (
    <ClientPage
      title="BEL – Infrastructure Automation (MSP)"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully delivered infrastructure automation that reduced manual provisioning effort by 60%. Received commendation from BEL for implementing efficient MSP processes and achieving 99.5% deployment success rate."
      projectSummary="Provisioned Azure infrastructure for BEL under a Managed Service Provider (MSP) engagement. Integrated Azure DevOps with internal ITSM tooling to streamline ticket-driven deployments, change requests, and resource automation workflows."
      duration="9 months"
      teamSize="4-person team"
      impact="60% reduction in manual effort"
      projectType="Managed Service Provider"
    />
);
};

export default BEL;
