// src/pages/Projects.js
import React from "react";
import ProjectCard from "../components/ProjectCard";

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

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
