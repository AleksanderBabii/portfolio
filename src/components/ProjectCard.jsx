// Project cards component
import React from 'react';    
import { motion } from 'framer-motion';

function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={
projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
            </a>    
        </div>
    </motion.div>
    );
}
export default ProjectCard;
