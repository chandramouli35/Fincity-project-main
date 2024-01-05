import React from "react";

const ProjectContext=React.createContext({
    projects:[],
    addProjects:()=>{}
})

export default ProjectContext