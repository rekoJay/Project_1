import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Jewoo Song, a passionate developer with expertise in [Your
        Technologies].
      </p>

      <section className="introduction">
        <h2>About Me</h2>
        <div className="intro-content">
          <p>
            I am a passionate developer with a keen interest in web development
            and software engineering. I have experience working with various
            technologies including React, Node.js, and MongoDB. I love solving
            complex problems and building efficient, scalable solutions.
          </p>
          <img
            src="path_to_your_image.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Recent Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
