import React from 'react';
import { useNavigate } from 'react-router-dom';

import suretyLogo from '../assets/Clients/Surety.png';
import cabLogo from '../assets/Clients/CAB.png';
import mpLogo from '../assets/Clients/mpsedc.png';
import ltimLogo from '../assets/Clients/LTIM.png';
import belLogo from '../assets/Clients/BEL.png';
import cdacLogo from '../assets/Clients/cdac.png';
import csLogo from '../assets/Clients/Charles Stanley.png';
import yrfLogo from '../assets/Clients/yrf.png';

const clients = [
  { name: 'Surety', logo: suretyLogo, link: '/surety' },
  { name: 'Cricket Association of Bengal', logo: cabLogo, link: '/cab' },
  { name: 'MPSEDC – Ladli Behna Yojana', logo: mpLogo, link: '/mpsedc' },
  { name: 'LTIMindtree', logo: ltimLogo, link: '/ltim' },
  { name: 'BEL', logo: belLogo, link: '/bel' },
  { name: 'CDAC', logo: cdacLogo, link: '/cdac' },
  { name: 'Charles Stanley', logo: csLogo, link: '/charles' },
  { name: 'Yash Raj Films', logo: yrfLogo, link: '/yrf' }
];

const ClientsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="clients" className="my-20">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Clients I’ve Worked With
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6 place-items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            onClick={() => navigate(client.link)}
            className="cursor-pointer flex flex-col items-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white p-4 rounded-xl shadow-lg w-24 h-24 flex items-center justify-center group-hover:shadow-cyan-500/30 transition">
              <img src={client.logo} alt={client.name} className="object-contain h-full" />
            </div>
            <span className="mt-4 text-center text-sm text-gray-300 group-hover:text-white px-2">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
