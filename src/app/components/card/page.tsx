import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800/50 rounded-2xl shadow-xl p-6 m-4 hover:bg-gray-700/50 transition-colors">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;
