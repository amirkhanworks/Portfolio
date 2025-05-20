// src/components/ExperienceCard.js
import React from 'react';

const ExperienceCard = ({ title, company, tenure, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer border border-cyan-700 bg-[#111827] rounded-md p-4 hover:bg-[#1e293b] transition"
  >
    <h3 className="text-cyan-400 font-semibold text-lg">{title}</h3>
    <p className="text-gray-300 text-sm">{company}</p>
    <p className="text-xs text-gray-500 mt-1">{tenure}</p>
    <p className="text-cyan-500 text-sm mt-3 underline">View Details</p>
  </div>
);

export default ExperienceCard;
