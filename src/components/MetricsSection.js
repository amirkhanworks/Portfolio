import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

const metrics = [
  {
    icon: <TrendingUp size={24} />,
    title: "Cost Reduction",
    value: "40%",
    description: "Average cloud infrastructure cost savings across projects"
  },
  {
    icon: <Zap size={24} />,
    title: "Deployment Speed",
    value: "60%",
    description: "Faster deployment cycles through automation"
  },
  {
    icon: <Users size={24} />,
    title: "User Impact",
    value: "10M+",
    description: "End users served across enterprise applications"
  },
  {
    icon: <Shield size={24} />,
    title: "Uptime",
    value: "99.99%",
    description: "Production system availability achieved"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Projects Delivered",
    value: "50+",
    description: "Successful cloud migration and DevOps projects"
  },
  {
    icon: <Zap size={24} />,
    title: "Team Growth",
    value: "15+",
    description: "Engineers mentored and teams led"
  }
];

const MetricsSection = memo(() => {
  return (
    <section id="achievements" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Key Achievements</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Here are some numbers that show I actually know what I'm doing 😄
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-4 sm:p-6 text-center hover:border-cyan-500 transition-colors"
          >
            <div className="text-cyan-400 mb-4 flex justify-center">
              {metric.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">{metric.title}</h4>
            <p className="text-sm text-gray-400">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default MetricsSection; 