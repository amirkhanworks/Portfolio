import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Database, Cloud, GitBranch, Shield, ChevronDown, ChevronUp } from 'lucide-react';

const ArchitectureSection = memo(() => {
  const [showBlocks, setShowBlocks] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const architectureFeatures = [
    {
      icon: <Monitor className="text-cyan-400" size={24} />,
      title: "Application CI/CD Pipeline",
      description: "Complete application deployment pipeline with quality gates and automated testing management",
      technicalDetails: [
        "Azure Pipelines (PR/CI/CD) with SonarQube Cloud for code analysis, linting, and security scanning",
        "Multi-stage deployment: Staging slot → Acceptance tests → Production slot swap with zero downtime"
      ]
    },
    {
      icon: <Server className="text-blue-400" size={24} />,
      title: "Azure App Services",
      description: "Scalable web application hosting with staging and production slot management",
      technicalDetails: [
        "Azure App Services with staging and production slots for blue-green deployment strategy",
        "Azure Key Vault integration for secure secrets management and Azure Artifacts for package management"
      ]
    },
    {
      icon: <Database className="text-green-400" size={24} />,
      title: "Infrastructure as Code (IaC)",
      description: "Automated infrastructure provisioning with security scanning and compliance management",
      technicalDetails: [
        "Terraform for infrastructure provisioning with Terrascan for security policy enforcement and compliance reporting",
        "Azure Pipelines (CI/CD) for IaC validation, resource tagging, and Terraform state management"
      ]
    },
    {
      icon: <Cloud className="text-purple-400" size={24} />,
      title: "Azure Monitoring Stack",
      description: "Comprehensive monitoring and observability with centralized logging and analytics management",
      technicalDetails: [
        "Azure Monitor, Application Insights, and Log Analytics Workspace for end-to-end observability",
        "Azure Blob Storage for unstructured data management and application insights storage"
      ]
    },
    {
      icon: <GitBranch className="text-orange-400" size={24} />,
      title: "DevOps Workflow",
      description: "Integrated development workflow with parallel CI/CD and IaC pipeline management",
      technicalDetails: [
        "Parallel pipelines: Application CI/CD (PR → SonarQube → CI → CD) and IaC pipeline (CI → Terrascan → Terraform)",
        "Azure DevOps integration with repositories, artifacts, and automated deployment orchestration"
      ]
    },
    {
      icon: <Shield className="text-red-400" size={24} />,
      title: "Security & Quality Gates",
      description: "Multi-layered security with automated quality checks and compliance management",
      technicalDetails: [
        "SonarQube Cloud for code quality analysis, linting, and security vulnerability scanning",
        "Terrascan for infrastructure security scanning and Terraform compliance policy enforcement"
      ]
    }
  ];

  return (
    <section id="architecture" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Portfolio Architecture</h2>
          <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            A comprehensive overview of the technical architecture powering this portfolio, showcasing modern DevOps practices and cloud-native design patterns.
          </p>
        </motion.div>

        {/* Architecture Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-[#111827] border border-cyan-700 rounded-xl p-4 sm:p-6 overflow-hidden">
            <div className="text-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">
                Interactive Architecture Overview
              </h3>
              <p className="text-gray-400 text-sm">
                Watch the complete system architecture in action
              </p>
            </div>
            
            <div 
              className="relative rounded-lg overflow-hidden bg-black/20 cursor-pointer"
              onClick={() => setShowBlocks(!showBlocks)}
            >
              <video
                src="/Portfolio Architecture.mov"
                alt="Portfolio Architecture Overview"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                onLoadedData={(e) => {
                  e.target.play().catch(() => {
                    // Fallback if autoplay fails
                    console.log('Autoplay prevented, video ready for manual play');
                  });
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Architecture Features Grid - Hidden by default */}
        <AnimatePresence>
          {showBlocks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
          {architectureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-[#111827] border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500 transition-colors duration-300 cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="flex items-start gap-3 mb-3">
                {feature.icon}
                <h3 className="text-lg font-semibold text-white flex-1">
                  {feature.title}
                </h3>
                <motion.div
                  animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedCard === index ? (
                    <ChevronUp className="text-cyan-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </motion.div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {feature.description}
              </p>
              
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">
                        Technical Implementation Details:
                      </h4>
                      <ul className="space-y-2">
                        {feature.technicalDetails.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: detailIndex * 0.05 }}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
});

ArchitectureSection.displayName = 'ArchitectureSection';

export default ArchitectureSection;
