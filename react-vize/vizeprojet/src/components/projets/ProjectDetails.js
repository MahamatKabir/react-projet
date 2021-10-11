import React from "react";

const ProjectDetails=(props)=> {

    const id=props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0 ">
                <div className="card-content ">
                    <span className="card-title">Yazilim Plan-{id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac</p>
                </div> 
                <div className="card-action grey lignten grey-text">
                    <p>Yazan AOS</p>
                    <p className="grey-text"> 18 kasım 2018</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default ProjectDetails;