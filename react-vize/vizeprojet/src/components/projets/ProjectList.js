import React from "react";
import ProjectSummary from "./ProjectSummer";

const ProjectList=({projects})=> {
    return(
        <div className="project-list section">
            {projects && projects.map(project=>{
                return(
                    <ProjectSummary project={project} key={projects.id} />
                )
            })}
        </div>
        
    )
}

export default ProjectList;