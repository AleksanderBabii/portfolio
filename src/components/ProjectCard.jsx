import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

function ProjectCard({ title, description, imageUrl, projectUrl, index }) {
  const imageSrc = import.meta.env.BASE_URL + imageUrl.replace(/^\/+/, "");

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay: index * 0.15,
      }}
    >
      <img src={imageSrc} alt={title} className="project-image" />

      <div className="project-info">
        <h3>{title}</h3>

        <p>{description}</p>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
