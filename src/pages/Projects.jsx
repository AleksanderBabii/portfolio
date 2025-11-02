import React from "react";
import data from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";


function Projects() {
    return (
        <section className="projects-section">
            {data.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </section>
    );
}

export default Projects;