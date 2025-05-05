import React from "react";

const ProjectCard = ({ title, description, mediaUrl, mediaType = "image" }) => {
  return (
    <div className="bg-gray-800/50 rounded-2xl shadow-xl p-4 m-4 hover:bg-gray-700/50 transition-colors max-w-md">
      {/* Media */}
      <div className="mb-4 rounded-lg overflow-hidden">
        {mediaType === "video" ? (
          <video src={mediaUrl} className="w-full object-cover" controls />
        ) : (
          <img src={mediaUrl} alt={title} className="w-full object-cover" />
        )}
      </div>
      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      {/* Description */}
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md w-full">View Project</button>
    </div>
  );
};

export default ProjectCard;
