import React from 'react';

function ExperienceModal({ open, onClose, data }) {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#0f172a] rounded-lg p-6 w-[90%] max-w-xl animate-modal-in shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl font-bold hover:text-accent"
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h3 className="text-xl font-bold text-accent mb-1">{data.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{data.company} • {data.tenure}</p>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {data.summary.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {data.techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="bg-cyan-700 text-white text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceModal;
