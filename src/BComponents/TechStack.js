// File: src/BComponents/TechStack.js
import React from 'react';

// Image imports from assets/Tech
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
//import googleCloud from '../assets/Tech/Google Cloud.png';
import gitlab from '../assets/Tech/GitLab.png';
import helm from '../assets/Tech/Helm.png';
import jira from '../assets/Tech/Jira.png';

const tools = [
  { name: 'Argo CD', icon: argo },
  { name: 'Azure DevOps', icon: azureDevops },
  { name: 'Azure Cloud', icon: azure },
  { name: 'Docker', icon: docker },
  { name: 'GitHub Actions', icon: githubActions },
  { name: 'GitHub Copilot', icon: githubCopilot },
  { name: 'Grafana', icon: grafana },
  { name: 'Prometheus', icon: prometheus },
  { name: 'SonarQube', icon: sonarQube },
  { name: 'Terraform', icon: terraform },
  { name: 'Kubernetes', icon: kubernetes },
  { name: 'Linux', icon: linux },
  { name: 'PowerShell', icon: powershell },
  //{ name: 'Google Cloud', icon: googleCloud },
  { name: 'GitLab', icon: gitlab },
  { name: 'Helm', icon: helm },
  { name: 'Jira', icon: jira }
];

const TechStack = () => {
  return (
    <section id="techstack" className="mt-6 mb-8">
      <h2 className="text-2xl font-bold text-accent mb-4">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 transition w-16 h-16 flex items-center justify-center">
              <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="mt-2 text-sm text-slate-300 group-hover:text-white text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
