import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-305",
    status: "Active",
    link: "#"
  },
  {
    name: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "AZ-400",
    status: "Active",
    link: "#"
  },
  {
    name: "Kubernetes Administrator",
    issuer: "CNCF",
    date: "2023",
    credentialId: "CKA",
    status: "Active",
    link: "#"
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    credentialId: "HCTA",
    status: "Active",
    link: "#"
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2021",
    credentialId: "SAA-C03",
    status: "Active",
    link: "#"
  }
];

const CertificationsSection = memo(() => {
  return (
    <section id="certifications" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Certifications</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Some fancy certificates that prove I'm not just making this stuff up 😉
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-cyan-400">
                <Award size={24} />
              </div>
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                {cert.status}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
            <p className="text-cyan-400 text-sm mb-2">{cert.issuer}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>
              <span className="font-mono text-xs">{cert.credentialId}</span>
            </div>
            
            <a 
              href={cert.link}
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
            >
              <span>Verify Credential</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default CertificationsSection; 