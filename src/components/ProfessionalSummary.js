import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, Users } from 'lucide-react';

const ProfessionalSummary = memo(() => {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700 rounded-2xl p-4 sm:p-6"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* About Me */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Professional Overview</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a Senior DevOps Engineer with 6+ years of experience transforming enterprise cloud infrastructure. 
                  I specialize in cutting infrastructure costs by 40%, accelerating deployments by 60%, and maintaining 
                  99.99% system uptime across complex environments.
                </p>
                <p>
                  I've led 15+ cloud migration projects serving over 10M users across finance, manufacturing, and retail. 
                  My expertise spans Azure, Kubernetes, and DevSecOps - helping companies migrate to the cloud seamlessly 
                  while building scalable, secure DevOps practices.
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Strengths</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="text-cyan-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Strategic Cloud Architecture</h4>
                    <p className="text-sm text-gray-400">Building cloud solutions that scale and don't break the bank</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-cyan-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">DevOps Transformation</h4>
                    <p className="text-sm text-gray-400">Making CI/CD pipelines that developers actually want to use</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="text-cyan-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Technical Leadership</h4>
                    <p className="text-sm text-gray-400">Helping teams grow and build awesome stuff together</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="text-cyan-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Stakeholder Management</h4>
                    <p className="text-sm text-gray-400">Translating tech talk into business value for execs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
});

export default ProfessionalSummary; 