import React , { Component} from  'react';
import Natification from  './Natification';
import ProjectList from '../projets/ProjectList';
import {connect} from 'react-redux';

class Dashboard extends Component{
    render() {
        const {projects}=this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                   <div className="col s12 m6">
                       <ProjectList projects={projects} />
                   </div>
                   <div className="col s12 m5"></div>
                   <Natification />
                </div> 
            </div>
        )
        
    }
}
const mapStateToProps =(state)=>{
    return {
        projects:state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard)