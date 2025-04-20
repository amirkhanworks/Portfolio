import React from 'react';

const ProjectCard = ({ project, onClick }) => (
  <div
    className="p-6 bg-zinc-800 rounded-lg shadow hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
    onClick={() => onClick(project)}
  >
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-gray-400 text-sm mt-2">{project.summary}</p>
  </div>
);

export default ProjectCard;
