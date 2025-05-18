import React from 'react';
import {
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiReact,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc'; // ✅ Correct import

const tools = [
  { name: 'Azure DevOps', icon: <VscAzureDevops size={32} className="text-purple-400" /> },
  { name: 'Terraform', icon: <SiTerraform size={32} className="text-indigo-400" /> },
  { name: 'Docker', icon: <SiDocker size={32} className="text-blue-300" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={32} className="text-blue-500" /> },
  { name: 'GitHub Actions', icon: <SiGithubactions size={32} className="text-gray-300" /> },
  { name: 'Prometheus', icon: <SiPrometheus size={32} className="text-orange-500" /> },
  { name: 'Grafana', icon: <SiGrafana size={32} className="text-yellow-400" /> },
  //{ name: 'React', icon: <SiReact size={32} className="text-cyan-300" /> },
];

const TechStack = () => {
  return (
    <section id="techstack" className="mt-16 mb-8">
      <h2 className="text-2xl font-bold text-accent mb-4">
        Tech Stack
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 transition">
              {tool.icon}
            </div>
            <span className="mt-2 text-sm text-slate-300 group-hover:text-white">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
