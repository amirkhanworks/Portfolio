import React from 'react';
import { X } from 'lucide-react';

const ExperienceModal = ({ open, data, onClose }) => {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#111827] max-w-xl w-full mx-4 rounded-lg p-6 relative animate-fadeZoomIn overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white rounded-md shadow-md p-1 flex items-center justify-center">
            <img src={data.logo} alt={data.company} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-cyan-300 font-semibold text-lg">{data.company}</h3>
            <p className="text-sm text-gray-300">{data.title}</p>
            <p className="text-xs text-gray-500">{data.year}</p>
          </div>
        </div>

        <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 pl-1">
          {data.bullets.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceModal;
