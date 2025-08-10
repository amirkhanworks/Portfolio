import React from 'react';

import argo from '../assets/Tech/Argo CD.png';
import azureDevops from '../assets/Tech/Azure Devops.png';
import azure from '../assets/Tech/Azure.png';
import docker from '../assets/Tech/Docker.png';
import githubActions from '../assets/Tech/GitHub Actions.png';
import githubCopilot from '../assets/Tech/Github Copilot.png';
import grafana from '../assets/Tech/Grafana.png';
import prometheus from '../assets/Tech/Prometheus.png';
import sonarQube from '../assets/Tech/SonarQube.png';
import terraform from '../assets/Tech/HashiCorp Terraform.png';
import kubernetes from '../assets/Tech/Kubernetes.png';
import linux from '../assets/Tech/Linux.png';
import powershell from '../assets/Tech/Powershell.png';
import gitlab from '../assets/Tech/GitLab.png';
import helm from '../assets/Tech/Helm.png';
import jira from '../assets/Tech/Jira.png';

const techGroups = [
  {
    heading: 'Container & Orchestration',
    tools: [
      { name: 'Docker', icon: docker },
      { name: 'Kubernetes', icon: kubernetes },
      { name: 'Helm', icon: helm }
    ]
  },
  {
    heading: 'Cloud & Infrastructure',
    tools: [
      { name: 'Azure Cloud', icon: azure },
      { name: 'Terraform', icon: terraform },
      { name: 'PowerShell', icon: powershell },
      { name: 'Linux', icon: linux }
    ]
  },
  {
    heading: 'CI/CD & GitOps',
    tools: [
      { name: 'GitHub Actions', icon: githubActions },
      { name: 'Azure DevOps', icon: azureDevops },
      { name: 'GitLab', icon: gitlab },
      { name: 'Argo CD', icon: argo }
    ]
  },
  {
    heading: 'Monitoring & Collaboration',
    tools: [
      { name: 'Grafana', icon: grafana },
      { name: 'Prometheus', icon: prometheus },
      { name: 'SonarQube', icon: sonarQube },
      { name: 'Jira', icon: jira },
      { name: 'GitHub Copilot', icon: githubCopilot }
    ]
  }
];

const TechStack = React.memo(() => {
  return (
    <div id="tech" className="px-6 py-9 bg-[#0f172a] rounded-xl shadow-inner border border-white/10">
              <h2 className="text-2xl font-bold mb-12 text-accent mb-8">Technical Expertise</h2>
      <div className="space-y-12">
        {techGroups.map((group) => (
          <div key={group.heading}>
            <h3 className="text-lg font-semibold text-white mb-4">{group.heading}</h3>
            <div className="flex flex-wrap gap-4">
              {group.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
                >
                  <img src={tool.icon} alt={tool.name} className="h-5 w-5 object-contain" />
                  <span className="text-sm text-white">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TechStack;
