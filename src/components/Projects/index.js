import React, { useState, useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import "./index.css";

function Projects() {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const { addProjects } = useContext(ProjectContext);

  const onSubmitForm = (event) => {
    event.preventDefault();
    const newProject = {
      projectName: projectName,
      projectLink: projectLink,
      projectDescription: projectDescription,
    };
    addProjects(newProject);
    setProjectName("");
    setProjectLink("");
    setProjectDescription("");
  };

  return (
    <div className="projects-container">
      <h1 className="projects-header">Add Project</h1>
      <form className="project-card" onSubmit={onSubmitForm}>
        <div className="project-card-item">
          <label>Project Name</label>
          <input
            type="text"
            className="input"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
        </div>
        <div className="project-card-item">
          <label>Project Link</label>
          <input
            type="text"
            className="input"
            onChange={(e) => setProjectLink(e.target.value)}
            value={projectLink}
          />
        </div>
        <div className="project-card-item">
          <label>Description</label>
          <textarea
            type="text"
            className="input-content"
            onChange={(e) => setProjectDescription(e.target.value)}
            value={projectDescription}
          />
        </div>
        <button type="submit" className="add-btn">
            Add
        </button>
      </form>
      <img
        src="https://res.cloudinary.com/dgonqoet4/image/upload/v1704426423/Vector_lwqbum_kofzg5.png"
        alt="add-project-image"
        className="add-project-image"
      />
    </div>
  );
}

export default Projects;
