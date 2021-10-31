import React , { Component} from  'react';
import Natification from  './Natification';
import ProjectList from '../projets/ProjectList';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'; // güvenlik sağliyor 3

class Dashboard extends Component{
    render() {
        const {projects,auth}= this.props;//cette partie j ai ajouter auth 2 güvenlik
        if(!auth.uid) return <Redirect to='/signin' /> //güvenlik işlemi  5
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
        projects:state.project.projects,
        auth:state.firebase.auth //güvenlik auth işlemi başlangiç 1
    }
}
export default connect(mapStateToProps)(Dashboard)