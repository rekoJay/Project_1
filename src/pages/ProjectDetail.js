// src/pages/ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is the first project.",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/username/project1",
    imageUrl: "path/to/image1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the second project.",
    technologies: ["React", "Firebase"],
    githubUrl: "https://github.com/username/project2",
    imageUrl: "path/to/image2.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is the third project.",
    technologies: ["React", "Express"],
    githubUrl: "https://github.com/username/project3",
    imageUrl: "path/to/image3.jpg",
  },
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-detail-image"
      />
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectDetail;
