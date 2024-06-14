import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectList = [
    {
      id: "1",
      title: "Project 1",
      description: "This is the first project.",
      technologies: ["React", "Node.js"],
      imageUrl: "https://via.placeholder.com/150",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: "2",
      title: "Project 2",
      description: "This is the second project.",
      technologies: ["React", "Firebase"],
      imageUrl: "https://via.placeholder.com/150",
      githubUrl: "https://github.com/yourusername/project2",
    },
  ];

  return (
    <div className="App">
      <h1>Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
