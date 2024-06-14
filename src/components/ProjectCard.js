import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
        <h2>{project.title}</h2>
      </Link>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
