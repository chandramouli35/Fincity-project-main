import React from "react";
import ProjectContext from "../../context/ProjectContext";
import "./index.css";
import Footer from "../Footer";

function AddedProjects() {
  const urls = [
    "https://res.cloudinary.com/dgonqoet4/image/upload/v1704428225/pdp1do9yo3b0abu4x5ir.png",
    "https://res.cloudinary.com/dgonqoet4/image/upload/v1704428227/wqlczkmmixdse20xlyx5.png",
    "https://res.cloudinary.com/dgonqoet4/image/upload/v1704428227/ttau9aois0vstu0vsaju.png",
  ];

  return (
    <ProjectContext.Consumer>
      {(value) => {
        const { projects } = value;
        console.log(projects);

        return (
          <div className="added-projects-container">
            <h2 className="added-projects-head">Projects</h2>
            <div className="projects-image-content-card">
              {projects.map((project, index) => {
                const randomIndex = Math.floor(Math.random() * urls.length);
                const randomUrl = urls[randomIndex];

                return (
                  <div key={index} className="added-projects-card">
                    <img
                      src={randomUrl}
                      alt="Project Image"
                      className="project-image"
                    />
                    <div className="added-projects-content">
                      <h2 className="added-projects-title">
                        {project.projectName}
                      </h2>
                      <div className="project-details">
                        <p className="project-des">{project.projectDescription}</p>
                        <button type="button" className="vew-button">View Project</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Footer/>
          </div>
        );
      }}
    </ProjectContext.Consumer>
  );
}

export default AddedProjects;
