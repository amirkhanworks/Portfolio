import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Import tech logos
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

const skillCategories = [
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "Microsoft Azure", level: 95, icon: azure },
      { name: "Terraform", level: 95, icon: terraform },
      { name: "PowerShell", level: 90, icon: powershell },
      { name: "Linux", level: 85, icon: linux }
    ]
  },
  {
    category: "Container & Orchestration",
    skills: [
      { name: "Docker", level: 95, icon: docker },
      { name: "Kubernetes", level: 90, icon: kubernetes },
      { name: "Helm", level: 85, icon: helm }
    ]
  },
  {
    category: "CI/CD & GitOps",
    skills: [
      { name: "Azure DevOps", level: 95, icon: azureDevops },
      { name: "GitHub Actions", level: 90, icon: githubActions },
      { name: "GitLab", level: 85, icon: gitlab },
      { name: "Argo CD", level: 80, icon: argo }
    ]
  },
  {
    category: "Monitoring & Collaboration",
    skills: [
      { name: "Grafana", level: 85, icon: grafana },
      { name: "Prometheus", level: 85, icon: prometheus },
      { name: "SonarQube", level: 85, icon: sonarQube },
      { name: "Jira", level: 90, icon: jira },
      { name: "GitHub Copilot", level: 80, icon: githubCopilot }
    ]
  }
];

const SkillsMatrix = memo(() => {
  return (
    <section id="skills" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Core Competencies</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Proficiency levels across my core technical skills - showing depth of expertise in each area
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-4 sm:p-6"
          >
                          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 sm:mb-6">{category.category}</h3>
              <div className="space-y-3 sm:space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <img src={skill.icon} alt={skill.name} className="h-4 w-4 object-contain" />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-xs text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default SkillsMatrix; 