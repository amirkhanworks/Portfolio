import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Cloud } from 'lucide-react';

const projects = [
  {
    title: "Azure Virtual Desktop (AVD) Implementation",
    description: "Led the implementation of Azure AVD for multiple organizations, transforming their infrastructure and enabling secure remote work capabilities.",
    tech: ["Azure AVD", "Azure DevOps", "PowerShell", "Azure AD", "Windows Virtual Desktop"],
    github: "https://github.com/akashroy/azure-avd-implementation",
    demo: null,
    category: "DevOps"
  },
  {
    title: "Infrastructure Transformation Platform",
    description: "Designed and implemented comprehensive infrastructure transformation solutions for enterprise clients, focusing on security and cost optimization.",
    tech: ["Azure", "Terraform", "Azure DevOps", "Security", "Cost Optimization"],
    github: "https://github.com/akashroy/infrastructure-transformation",
    demo: null,
    category: "Infrastructure"
  },
  {
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Built robust CI/CD pipelines and automation frameworks that accelerated deployment cycles and improved team productivity.",
    tech: ["Azure DevOps", "Jenkins", "Docker", "Kubernetes", "PowerShell"],
    github: "https://github.com/akashroy/devops-automation-framework",
    demo: null,
    category: "Automation"
  }
];

const FeaturedProjects = memo(() => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'DevOps': return <Cloud size={16} />;
      case 'Automation': return <Code size={16} />;
      case 'Infrastructure': return <Database size={16} />;
      case 'IaC': return <Database size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Featured Projects</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Here are some of the technical projects I've built that showcase my DevOps expertise
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center gap-2 mb-4">
              {getCategoryIcon(project.category)}
              <span className="text-xs text-cyan-400 font-medium">{project.category}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-md border border-cyan-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Github size={16} />
                Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default FeaturedProjects; 