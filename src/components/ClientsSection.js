import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import suretyLogo from '../assets/Clients/Surety.png';
import cabLogo from '../assets/Clients/CAB.png';
import mpLogo from '../assets/Clients/mpsedc.png';
import ltimLogo from '../assets/Clients/LTIM.png';
import belLogo from '../assets/Clients/BEL.png';
import cdacLogo from '../assets/Clients/cdac.png';
import csLogo from '../assets/Clients/Charles Stanley.png';
import yrfLogo from '../assets/Clients/yrf.png';
import lfLogo from '../assets/Clients/LuvFilms.png';

const industries = [
  {
    name: 'Finance & Investment',
    clients: [
      { name: 'Charles Stanley', logo: csLogo, link: '/charlesStanley' },
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
      { name: 'Luv Films', logo: lfLogo, link: '/lf' },
    ],
  },
];

const ClientsSection = () => {
  const navigate = useNavigate();

  return (
    <div id="clients" className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-12 text-accent mb-8">Clients I have worked with</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry) => (
          <div key={industry.name} className="bg-[#141824] border border-gray-700 rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
            <div className="flex flex-wrap gap-4">
              {industry.clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  className="bg-white rounded-lg p-3 cursor-pointer w-[100px] h-[90px] flex flex-col items-center justify-center"
                  onClick={() => navigate(client.link)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <img src={client.logo} alt={client.name} className="h-10 object-contain" />
                  <span className="mt-2 text-[10px] text-center text-gray-800">{client.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
