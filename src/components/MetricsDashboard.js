import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Zap, Server, Shield, Clock, Target } from 'lucide-react';

const metrics = [
  {
    id: 'experience',
    label: 'Years Experience',
    value: '6+',
    icon: Clock,
    color: 'from-cyan-600 to-cyan-700',
    description: 'Professional DevOps experience'
  },
  {
    id: 'projects',
    label: 'Projects Delivered',
    value: '50+',
    icon: Target,
    color: 'from-cyan-600 to-teal-600',
    description: 'Successfully completed projects'
  },
  {
    id: 'clients',
    label: 'Enterprise Clients',
    value: '15+',
    icon: Users,
    color: 'from-teal-600 to-teal-700',
    description: 'Fortune 500 & global enterprises'
  },
  {
    id: 'uptime',
    label: 'System Uptime',
    value: '99.9%',
    icon: Server,
    color: 'from-cyan-700 to-cyan-800',
    description: 'Average infrastructure uptime'
  }
];

const MetricsDashboard = memo(() => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      metrics.forEach((metric) => {
        const numericValue = parseInt(metric.value);
        if (!isNaN(numericValue)) {
          let current = 0;
          const increment = numericValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            setAnimatedValues(prev => ({
              ...prev,
              [metric.id]: Math.floor(current)
            }));
          }, 20);
        }
      });
    }
  }, [isVisible]);

  return (
    <section id="metrics" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Impact Metrics</h2>
          <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            Quantifiable results and achievements across my DevOps career
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${metric.color} rounded-xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}>
                {/* Icon */}
                <div className="flex items-center justify-center mb-2 sm:mb-4">
                  <metric.icon className="text-white w-6 h-6 sm:w-10 sm:h-10" />
                </div>

                {/* Value */}
                <motion.div
                  className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-center text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {metric.value}
                </motion.div>

                {/* Label */}
                <div className="text-xs sm:text-sm font-medium text-center text-white/90">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default MetricsDashboard;
