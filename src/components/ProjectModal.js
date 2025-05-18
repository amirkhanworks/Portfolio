import React from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-lg font-bold">✕</button>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-2"><strong>Issue:</strong> {project.issue}</p>
        <p className="text-gray-700 mb-2"><strong>Solution:</strong> {project.solution}</p>
        <p className="text-gray-700"><strong>Benefit:</strong> {project.benefit}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
