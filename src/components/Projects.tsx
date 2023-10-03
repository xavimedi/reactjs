import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectsData = [
  {
    title: "KXZ Residentials",
    photo: "Residentials.png",
    github: "https://github.com/Kyaw-Hughes-Medina-Capstone/Residential",
    description:
      "A full stack web application for bringing together property managers" +
      " with potential renters while enhancing the documentation capabilities" +
      " for repairs, work orders of properties, and inquiries for potential" +
      " rental properties. Listings can be made with a full comprehensive" +
      " list of features and photos. Utilizes MapBox and FileStack for geolocation" +
      " and image hosting, respectively. Built while attending Codeup.",
    langs: "Java, HTML, CSS, Spring, MapBox, MySQL",
  },
  {
    title: "CoffeeScript Café",
    photo: "CoffeeScript.png",
    github: "https://github.com/Medina-OSullivan-Coffee-Project/coffee-project",
    description:
      "A full stack web application for searching, sorting, and filtering" +
      " a collection of coffees with various roasts and flavors. Allows a user" +
      " to add coffee by name and roast by allowing the creation of a JavaScript object. Built while attending Codeup.",
    langs: "JavaScript, HTML, CSS, jQuery, Unit Testing",
  },
  {
    title: "Java Adlister",
    photo: "Adlister.png",
    github: "https://github.com/Hughes-Mata-Medina-Adlister/Adlister",
    description:
      "A full stack web application designed to be a 'Craigslist' clone" +
      " that allows the creation of a user account, required to post, edit, and" +
      " view other ads posted. User information in the database is encrypted with JBCrypt. Built while attending Codeup.",
    langs: "JavaScript, JSP, HTML, CSS, TomCat, JSP, MySQL, JDBC, JBCrypt",
  },
];

class ProjectCard extends React.Component<{ project: any }> {
  render() {
    let { project } = this.props;
    return (
      <div className="project-card">
        <img className="project-img" src={project.photo} />
        <div className="project-card-text">
          <p>{project.title}</p>
          <p>{project.description}</p>
          <p>{project.langs}</p>
          <p className="projectgithub">
            <a href={project.github} target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </a>
          </p>
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
