import React from "react";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

const ProjectDetails=(props)=> {
    const {project,auth} = props;
    if(!auth.uid) return <Redirect to='/signin' />
    //const id=props.match.params.id;
    if(project){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0 ">
                    <div className="card-content ">
                        <span className="card-title">{project.baslik}</span>
                        <p>{project.icerik}</p>
                    </div> 
                    <div className="card-action grey lignten grey-text">
                        <div>{project.isim} {project.soyisim}</div>
                        <div> 21 kasım 2018</div>
                    </div>
                </div>  
            </div>  
        ) }else{
            return(
                <div className="container center">
                    <p>veriler Yükleniyor</p>
                </div>
            )
        }
   
}
const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProjectDetails);