import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-300 mb-2"><strong>Role:</strong> {project.role}</p>
        <p className="text-gray-400 mb-2"><strong>Description:</strong> {project.description}</p>
        <p className="text-gray-400 mb-4"><strong>Tools:</strong> {project.tools.join(', ')}</p>
        <button onClick={onClose} className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
