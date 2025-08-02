import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Mic, FileText, Video, ExternalLink } from 'lucide-react';

const speakingEngagements = [
  {
    title: "DevOps Transformation at Scale",
    type: "Conference Talk",
    event: "Azure DevOps Summit 2024",
    date: "March 2024",
    description: "Shared insights on migrating 15+ enterprise applications to Azure with zero downtime.",
    link: "https://azure-devops-summit.com/akash-roy",
    icon: <Mic size={20} />
  },
  {
    title: "Cost Optimization in Multi-Cloud Environments",
    type: "Webinar",
    event: "Cloud Native Foundation",
    date: "January 2024",
    description: "Presented strategies for reducing cloud costs by 40% while maintaining performance.",
    link: "https://cloudnative.org/webinars/cost-optimization",
    icon: <Video size={20} />
  },
  {
    title: "Building Resilient CI/CD Pipelines",
    type: "Article",
    event: "DevOps.com",
    date: "December 2023",
    description: "Comprehensive guide on creating robust deployment pipelines that scale with your team.",
    link: "https://devops.com/building-resilient-cicd-pipelines",
    icon: <FileText size={20} />
  }
];

const SpeakingSection = memo(() => {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Speaking & Writing</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Sharing knowledge and insights with the DevOps community through talks, articles, and webinars
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {speakingEngagements.map((engagement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-cyan-400">
                {engagement.icon}
              </div>
              <span className="text-xs text-cyan-400 font-medium">{engagement.type}</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2">{engagement.title}</h3>
            <p className="text-sm text-cyan-400 mb-1">{engagement.event}</p>
            <p className="text-xs text-gray-400 mb-3">{engagement.date}</p>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {engagement.description}
            </p>
            
            <a
              href={engagement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              View Details
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default SpeakingSection; 