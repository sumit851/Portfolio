import React from "react";
import {ProjectCard} from "../../(components)/card/page";
const Project = () => {
  return (
    <div>
    <ProjectCard
        title="Pulse"
        description="This is a social media project"
        mediaUrl="/images/portfolio-photo-Photoroom.png" 
        mediaType="image" 
      />
    </div>
  );
};

export default Project;
