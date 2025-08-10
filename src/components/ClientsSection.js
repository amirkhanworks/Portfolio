import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

import suretyLogo from '../assets/Clients/Surety.png';
import cabLogo from '../assets/Clients/CAB.png';
import mpLogo from '../assets/Clients/mpsedc.png';
import ltimLogo from '../assets/Clients/LTIM.png';
import belLogo from '../assets/Clients/BEL.png';
import cdacLogo from '../assets/Clients/cdac.png';
import csLogo from '../assets/Clients/Charles Stanley.png';
import yrfLogo from '../assets/Clients/yrf.png';



const industries = [
  {
    name: 'Finance & Investment',
    clients: [
      { name: 'Charles Stanley', logo: csLogo, link: '/charlesstanley' },
      { name: 'Surety', logo: suretyLogo, link: '/surety' },
    ],
  },
  {
    name: 'Public Sector / Government',
    clients: [
      { name: 'CAB', logo: cabLogo, link: '/cab' },
      { name: 'MPSEDC', logo: mpLogo, link: '/mpsedc' },
      { name: 'BEL', logo: belLogo, link: '/bel' },
      { name: 'CDAC', logo: cdacLogo, link: '/cdac' },
    ],
  },
  {
    name: 'Technology & IT Services',
    clients: [
      { name: 'LTIMindtree', logo: ltimLogo, link: '/ltim' },
    ],
  },
  {
    name: 'Media & Entertainment',
    clients: [
      { name: 'Yash Raj Films', logo: yrfLogo, link: '/yrf' },
    ],
  },
];



const ClientsSection = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <div id="clients" className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Client Portfolio</h2>
          <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            Diverse portfolio across finance, government, technology, and entertainment sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {industries.map((industry, industryIndex) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: industryIndex * 0.1, duration: 0.5 }}
              className="bg-[#111827] border border-cyan-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">{industry.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {industry.clients.map((client, index) => (
                <motion.div
                  key={client.name}
                    className="bg-white rounded-lg p-2 sm:p-3 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => navigate(client.link)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                    transition={{ delay: (industryIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-center justify-center h-16 sm:h-20">
                      <LazyImage src={client.logo} alt={client.name} className="h-6 sm:h-8 object-contain mb-1" />
                      <span className="text-xs sm:text-sm text-center text-gray-800 font-medium leading-tight">{client.name}</span>
                    </div>
                </motion.div>
              ))}
            </div>
            </motion.div>
        ))}
      </div>
    </div>
    </>
  );
});

export default ClientsSection;
