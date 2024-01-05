import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AddedProjects from "./components/AddedProjects";
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import ProjectContext from "./context/ProjectContext";
import "./App.css";

const data = [
  {
    projectName: "Book Hub",
    projectLink: "http://bookhubcm.ccbp.tech/ ",
    projectDescription:
      "Designed a comprehensive book management platform, inspired by Goodreads.       Implemented advanced features such as login, home, bookshelves, search, and rating with React Router,      React Rating Stars, React Select, and fetch APIs.       Enhanced the user experience with a visually appealing UI, designed with Figma and Bootstrap, and      secured access with client storage authentication."
  },
  {
    projectName: "Todos Application",
    projectLink: "http://cmoulitodo1.ccbp.tech/ ",
    projectDescription:
      'A robust task tracking system with CRUD capabilities, crafted to simplify task management.       Designed with HTML, CSS and Bootstrap to ensure a user-friendly interface for managing tasks.       Dynamic UI updates through JavaScript event listeners and DOM operations for seamless CRUD      operations.       Secure task persistence through local storage methods, ensuring that tasks are never lost.',
  },
];

function App() {
  const [projects, setProjects] = useState(data);
console.log(projects)
  const addProjects = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const contextValue = {
    projects,
    addProjects,
  };

  return (
    <BrowserRouter>
      <ProjectContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/add-projects" element={<AddedProjects />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
        </Routes>
      </ProjectContext.Provider>
    </BrowserRouter>
  );
}

export default App;
