import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Package, TestTube, Rocket, CheckCircle, ArrowRight, Clock, Zap, TrendingUp, Shield, Activity, Terminal, Code, Database, Server } from 'lucide-react';

const pipelineStages = [
  {
    id: 'code',
    name: 'Code',
    icon: GitBranch,
    description: 'Version control with Git, branching strategies, and code review workflows',
    tools: ['GitHub', 'GitLab', 'Azure Repos'],
    metrics: { time: '2 min', success: '99.8%' },
    color: 'from-cyan-600 to-cyan-700',
    emoji: '💻',
    details: [
      'Pull request automation',
      'Code review workflows',
      'Branch protection rules',
      'Commit validation'
    ],
    realWorldExample: 'Implemented GitFlow strategy for 50+ developers across 15 microservices, reducing merge conflicts by 85%',
    businessImpact: 'Faster feature delivery, reduced bugs, improved code quality'
  },
  {
    id: 'build',
    name: 'Build',
    icon: Package,
    description: 'Automated builds with dependency management and artifact creation',
    tools: ['Docker', 'Azure DevOps', 'GitHub Actions'],
    metrics: { time: '5 min', success: '99.5%' },
    color: 'from-cyan-700 to-cyan-800',
    emoji: '🔨',
    details: [
      'Multi-stage Docker builds',
      'Dependency caching',
      'Artifact versioning',
      'Build optimization'
    ],
    realWorldExample: 'Optimized Docker builds for .NET applications, reducing build time from 15 minutes to 3 minutes',
    businessImpact: '50% faster deployments, reduced infrastructure costs, improved developer productivity'
  },
  {
    id: 'test',
    name: 'Test',
    icon: TestTube,
    description: 'Comprehensive automated testing and security scanning',
    tools: ['SonarQube', 'OWASP ZAP', 'Mend Bolt'],
    metrics: { time: '8 min', success: '98.9%' },
    color: 'from-cyan-600 to-teal-700',
    emoji: '🧪',
    details: [
      'Unit & integration tests',
      'Code quality analysis',
      'Security vulnerability scan',
      'Test coverage reports'
    ],
    realWorldExample: 'Implemented automated security scanning that caught 200+ vulnerabilities before production deployment',
    businessImpact: 'Zero security incidents, 95% test coverage, reduced manual testing effort'
  },
  {
    id: 'deploy',
    name: 'Deploy',
    icon: Rocket,
    description: 'Automated deployment with zero-downtime and instant rollback',
    tools: ['Kubernetes', 'Helm', 'Argo CD'],
    metrics: { time: '3 min', success: '99.9%' },
    color: 'from-teal-600 to-teal-700',
    emoji: '🚀',
    details: [
      'Blue-green deployments',
      'Canary releases',
      'Automatic rollback',
      'Health monitoring'
    ],
    realWorldExample: 'Deployed 500+ microservices to production with zero downtime using Kubernetes and Argo CD',
    businessImpact: '99.9% uptime, instant rollback capability, 10x faster deployments'
  }
];

const DevOpsPipelineVisualizer = memo(() => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const terminalCommands = [
    { command: '$ git push origin feature/new-pipeline', output: '✓ Pushed to repository', delay: 1000 },
    { command: '$ docker build -t app:latest .', output: '✓ Build completed in 3.2s', delay: 2000 },
    { command: '$ npm test', output: '✓ All tests passed (98.9% coverage)', delay: 1500 },
    { command: '$ kubectl apply -f k8s/', output: '✓ Deployed to production', delay: 1000 }
  ];

  const runPipeline = () => {
    setIsAnimating(true);
    setTerminalOutput('');
    setCurrentStep(0);
    
    let stepIndex = 0;
    const runStep = () => {
      if (stepIndex < terminalCommands.length) {
        const step = terminalCommands[stepIndex];
        setCurrentStep(stepIndex);
        setTerminalOutput(prev => prev + `\n${step.command}`);
        
        setTimeout(() => {
          setTerminalOutput(prev => prev + `\n${step.output}`);
          stepIndex++;
          setTimeout(runStep, 500);
        }, step.delay);
      } else {
        setTimeout(() => {
          setIsAnimating(false);
          setTerminalOutput(prev => prev + '\n✓ Pipeline completed successfully!');
        }, 1000);
      }
    };
    
    runStep();
  };

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">DevOps Pipeline Expertise</h2>
          <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-4 mb-6">
            Interactive terminal simulation of real-world CI/CD pipeline execution
          </p>
          
          {/* Enhanced Terminal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 max-w-5xl mx-auto border border-gray-600 shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-600">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-300 text-sm font-mono bg-gray-800 px-3 py-1 rounded-md">
                  akash@devops-pipeline:~$
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Terminal className="w-4 h-4" />
                <span className="text-xs">Terminal</span>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="bg-black rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[180px] sm:min-h-[220px] border border-gray-700">
              <div className="text-green-400 mb-3">
                <span className="text-gray-500">akash@devops-pipeline:~$</span> ./run-pipeline.sh
              </div>
              <div className="text-cyan-400 mb-4 flex items-center gap-2">
                <span>🚀</span>
                <span>Starting CI/CD Pipeline Execution...</span>
              </div>
              
              {/* Animated Terminal Output */}
              <div className="text-gray-300 whitespace-pre-wrap min-h-[100px] sm:min-h-[120px] leading-relaxed">
                {terminalOutput}
                {isAnimating && (
                  <motion.span
                    className="text-green-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    █
                  </motion.span>
                )}
              </div>
              
              {/* Pipeline Progress Indicators */}
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4">
                {pipelineStages.map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    className="flex items-center gap-1 sm:gap-2"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: currentStep >= index ? 1 : 0.3,
                      scale: currentStep === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                      currentStep > index ? 'bg-green-400' : 
                      currentStep === index ? 'bg-yellow-400' : 'bg-gray-600'
                    }`} />
                    <span className="text-xs text-gray-400">{stage.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* DevOps Architecture Flow */}
        <div className="relative mb-8">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="border border-gray-600 rounded"></div>
              ))}
            </div>
          </div>
          
          <div className="relative grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-3 md:gap-2">
            {pipelineStages.map((stage, index) => (
              <React.Fragment key={stage.id}>
                <motion.div
                  className="relative flex-1 w-full md:w-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setSelectedStage(stage)}
                  >
                    <div className={`relative bg-gradient-to-br ${stage.color} rounded-xl p-3 sm:p-6 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/10 backdrop-blur-sm`}>
                      {/* DevOps Icon Badge */}
                      <div className="absolute -top-1 -right-1 sm:-top-3 sm:-right-3 text-lg sm:text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                        {stage.emoji}
                      </div>
                      
                      {/* Code Pattern Overlay */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="grid grid-cols-4 gap-1 h-full">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-sm"></div>
                          ))}
                        </div>
                      </div>

                      {/* Animated Progress Indicator */}
                      {isAnimating && (
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{
                            delay: index * 1,
                            duration: 1,
                            ease: "easeInOut"
                          }}
                        />
                      )}

                      {/* Pulse Ring Animation */}
                      {isAnimating && (
                        <motion.div
                          className="absolute inset-0 border-4 border-white rounded-xl"
                          initial={{ opacity: 0.5, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.1 }}
                          transition={{
                            delay: index * 1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                        />
                      )}

                      <div className="flex flex-col items-center text-center relative z-10">
                        <motion.div
                          className="mb-1 sm:mb-3 relative"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <stage.icon className="text-white w-5 h-5 sm:w-9 sm:h-9" />
                          {/* Icon glow */}
                          <motion.div
                            className="absolute inset-0 bg-white rounded-full blur-lg opacity-0 group-hover:opacity-30"
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                        
                        <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-3 text-white">{stage.name}</h3>
                        
                        {/* Metrics Bar */}
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-xs bg-white/10 rounded-lg px-1.5 sm:px-3 py-1 sm:py-2 backdrop-blur-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="text-white/80 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                            <span className="font-semibold text-white text-xs">{stage.metrics.time}</span>
                          </div>
                          <div className="hidden sm:block w-px h-4 bg-white/30" />
                          <div className="flex items-center gap-1">
                            <TrendingUp className="text-white/80 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                            <span className="font-semibold text-white text-xs">{stage.metrics.success}</span>
                          </div>
                        </div>

                        {/* Click indicator */}
                        <motion.div
                          className="mt-2 sm:mt-3 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ y: 5 }}
                          whileHover={{ y: 0 }}
                        >
                          <span className="hidden sm:inline">Click for details →</span>
                          <span className="sm:hidden">Tap for details</span>
                        </motion.div>
                      </div>

                      {/* Success Checkmark Animation */}
                      {isAnimating && (
                        <motion.div
                          className="absolute top-1 right-1 sm:top-3 sm:right-3 bg-white rounded-full p-0.5 sm:p-1"
                          initial={{ scale: 0, opacity: 0, rotate: -180 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          transition={{ 
                            delay: index * 1 + 0.8, 
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <CheckCircle className="text-green-600 w-3 h-3 sm:w-5 sm:h-5" />
                        </motion.div>
                      )}

                      {/* Hover border effect */}
                      <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-300" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* DevOps Flow Connector */}
                {index < pipelineStages.length - 1 && (
                  <motion.div
                    className="hidden md:block relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {/* Data Flow Animation */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ 
                        x: [0, 20, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </motion.div>
                    <ArrowRight size={32} className="text-cyan-400" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Run Pipeline Button */}
        <div className="text-center mb-8">
          <motion.button
            onClick={runPipeline}
            disabled={isAnimating}
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            whileHover={!isAnimating ? { scale: 1.05 } : {}}
            whileTap={!isAnimating ? { scale: 0.95 } : {}}
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">
              {isAnimating ? 'Executing Pipeline...' : 'Execute Pipeline Demo'}
            </span>
            <span className="sm:hidden">
              {isAnimating ? 'Running...' : 'Run Demo'}
            </span>
          </motion.button>
          <p className="text-gray-400 text-xs mt-2 px-4">
            <span className="hidden sm:inline">Click to see real-time terminal execution simulation</span>
            <span className="sm:hidden">Tap to see terminal simulation</span>
          </p>
        </div>

        {/* Stage Details Modal */}
        <AnimatePresence>
          {selectedStage && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStage(null)}
            >
              <motion.div
                className={`bg-gradient-to-br ${selectedStage.color} rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl my-8`}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with emoji */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <motion.div
                    className="bg-white/10 p-3 rounded-xl backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <selectedStage.icon size={40} className="text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white">{selectedStage.name} Stage</h3>
                    <p className="text-white/70 text-sm mt-1">Pipeline Component</p>
                  </div>
                  <span className="text-5xl">{selectedStage.emoji}</span>
                </div>

                <p className="text-white/90 mb-6 leading-relaxed text-base">
                  {selectedStage.description}
                </p>

                {/* Real World Example */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg text-white flex items-center gap-2">
                    <Shield size={18} />
                    Real-World Implementation
                  </h4>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {selectedStage.realWorldExample}
                    </p>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg text-white flex items-center gap-2">
                    <TrendingUp size={18} />
                    Business Impact
                  </h4>
                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-4 backdrop-blur-sm border border-green-700/30">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {selectedStage.businessImpact}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg text-white flex items-center gap-2">
                    <Activity size={18} />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedStage.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                      >
                        <CheckCircle size={16} className="text-white mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white/90">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg text-white flex items-center gap-2">
                    <Package size={18} />
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStage.tools.map((tool, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium backdrop-blur-sm cursor-default transition-all"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={20} className="text-white" />
                      <span className="text-sm font-medium text-white/80">Average Time</span>
                    </div>
                    <p className="text-3xl font-bold text-white">{selectedStage.metrics.time}</p>
                    <p className="text-xs text-white/60 mt-1">Per execution</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={20} className="text-white" />
                      <span className="text-sm font-medium text-white/80">Success Rate</span>
                    </div>
                    <p className="text-3xl font-bold text-white">{selectedStage.metrics.success}</p>
                    <p className="text-xs text-white/60 mt-1">Last 30 days</p>
                  </motion.div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedStage(null)}
                  className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30 text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close Details
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default DevOpsPipelineVisualizer;
