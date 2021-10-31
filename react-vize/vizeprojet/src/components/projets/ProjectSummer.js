import React from "react";

const ProjectSummary=({project})=> {
    
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.baslik}</span>
                    <p>Yazan {project.isim} {project.soyisim}</p>
                    <p className="grey-text"> 21 kasım 2018</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default ProjectSummary;