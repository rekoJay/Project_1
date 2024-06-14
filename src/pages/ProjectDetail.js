import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="card-img-top project-image"
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
        </div>
      </Link>
      <div className="card-body">
        <p className="card-text">{project.description}</p>
        <ul className="list-inline">
          {project.technologies.map((tech, index) => (
            <li key={index} className="list-inline-item">
              <i className="fas fa-check"></i> {tech}
            </li>
          ))}
        </ul>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary github-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
