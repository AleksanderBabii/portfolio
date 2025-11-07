import React from "react";
import data from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages/_projects.scss";

function Projects() {
  return (
    <section className="projects-section">
      {data.map((project, index) => (
        <ProjectCard key={project.id} {...project} index={index} />
      ))}
    </section>
  );
}

export default Projects;
