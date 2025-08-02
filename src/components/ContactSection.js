import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Download, MessageCircle } from 'lucide-react';

const ContactSection = memo(() => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Akash - DevOps 2025.pdf';
    link.download = 'Akash_Roy_DevOps_Resume.pdf';
    link.click();
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/akashroy-devops/30min', '_blank');
  };

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Got a DevOps challenge that needs solving? Let's chat about how I can help your team level up their cloud game!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827] border border-cyan-700 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:akashroy.636@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                  akashroy.636@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+91-9876543210" className="text-white hover:text-cyan-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Mumbai, India (Open to Remote/Relocation)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Calendar className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Availability</p>
                <p className="text-white">Available for new opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#111827] border border-cyan-700 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">Next Steps</h3>
          
          <div className="space-y-4">
            <button
              onClick={handleDownloadResume}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <button
              onClick={handleScheduleCall}
              className="w-full bg-transparent border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Schedule a Call
            </button>
            
            <a
              href="mailto:akashroy.636@gmail.com?subject=DevOps Opportunity Discussion"
              className="w-full bg-transparent border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Send Message
            </a>
          </div>
          
                      <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-700 rounded-lg">
              <p className="text-sm text-cyan-300 font-medium mb-2">What I'm Looking For:</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Senior DevOps roles where I can make an impact</li>
                <li>• Cloud architecture gigs that challenge me</li>
                <li>• Leadership opportunities to grow teams</li>
                <li>• Remote/hybrid work (I love my home office!)</li>
              </ul>
            </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ContactSection; 