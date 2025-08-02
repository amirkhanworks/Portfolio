import React, { memo } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Cloud Platforms",
    skills: [
      { name: "Microsoft Azure", level: 95 },
      { name: "AWS", level: 85 },
      { name: "Google Cloud", level: 75 }
    ]
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      { name: "Azure DevOps", level: 95 },
      { name: "GitHub Actions", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "GitLab CI", level: 80 }
    ]
  },
  {
    category: "Infrastructure as Code",
    skills: [
      { name: "Terraform", level: 95 },
      { name: "ARM Templates", level: 90 },
      { name: "CloudFormation", level: 80 },
      { name: "Ansible", level: 75 }
    ]
  },
  {
    category: "Container & Orchestration",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "Helm", level: 85 },
      { name: "Azure AKS", level: 90 }
    ]
  },
  {
    category: "Monitoring & Observability",
    skills: [
      { name: "Azure Monitor", level: 95 },
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 80 },
      { name: "ELK Stack", level: 75 }
    ]
  },
  {
    category: "Security & Compliance",
    skills: [
      { name: "Azure Security Center", level: 90 },
      { name: "SonarQube", level: 85 },
      { name: "OWASP ZAP", level: 80 },
      { name: "Compliance Frameworks", level: 85 }
    ]
  }
];

const SkillsMatrix = memo(() => {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Core Competencies</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          How good I am at different tech stuff (be honest, we all have our favorites!)
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
                    <span className="text-sm text-gray-300">{skill.name}</span>
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