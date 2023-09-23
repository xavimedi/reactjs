import React from "react";

const projectsData = [
  {
    title: "KXZ Residentials",
    photo: "Residentials.png",
    link: "https://java.codeup.com/capstone/",
    github: "https://github.com/Kyaw-Hughes-Medina-Capstone/Residential",
    description: "Description for Project 1",
    langs: "Java, HTML, CSS, Spring, MapBox, MySQL",
  },
  {
    title: "CoffeeScript Café",
    photo: "CoffeeScript.png",
    link: "https://java.codeup.com/javascript-i/coffee-project/",
    github: "https://github.com/Medina-OSullivan-Coffee-Project/coffee-project",
    description: "Description for Project 2",
    langs: "JavaScript, HTML, CSS, jQuery, Unit Testing",
  },
  {
    title: "Project 3",
    photo: "project3.jpg",
    link: "https://example.com/project2",
    description: "Description for Project 3",
  },
];

class ProjectCard extends React.Component<{ project: any }> {
  render() {
    let { project } = this.props;
    return (
      <div className="project-card">
        <img className="project-img" src={project.photo} />
        <div className="project-card-text">
          {project.title}
          <p>{project.description}</p>
          <p>{project.langs}</p>
          <a href={project.link} target="_blank">
            learn more
          </a>
          <a href={project.github} target="_blank">
            github
          </a>
        </div>
      </div>
    );
  }
}

function Projects() {
  return (
    <div className="projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
