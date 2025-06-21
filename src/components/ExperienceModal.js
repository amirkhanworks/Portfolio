import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ExperienceModal = ({ open, data, onClose }) => {
  if (!open || !data) return null;

  const responsibilities = data.responsibilities ?? [];
  const achievements = data.achievements ?? [];

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#111827] max-w-3xl w-full rounded-lg p-6 relative animate-fadeZoomIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold text-white mb-1">{data.title}</h2>
        <p className="text-gray-400 text-sm mb-4">{data.company} | {data.year}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <h3 className="text-base font-semibold text-white mb-2">Key Responsibilities</h3>
            <ul className="space-y-2 list-disc list-inside">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white mb-2">Key Achievements</h3>
            <ul className="space-y-2 list-disc list-inside">
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
