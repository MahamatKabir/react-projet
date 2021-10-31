import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';


class CreateProject extends Component {
    state={
        baslik: "",
        icerik: ""
    }

    handleChange = (e) => {
        this.setState(
            {[e.target.id]:e.target.value})

    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
        
    }
    render() {
        const {auth}=this.props;
        //if(!auth.uid) return <Redirect to='/signin'/> //güvenlik işlemi
        return (
            <div className="container">
                <form  onSubmit={this.handleSubmit}  className="white">
                    <h5 className="grey-text text-darken-3">Yazilim Oluştur</h5>
                    <div className="input-field">
                        <label htmlFor="email">Yazilim Başlik</label>
                        <textarea id="başlik"   className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Yazilim Içerik</label>
                        <textarea id="içerik"   className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn red lighten-1 z-depth-0">Kaydat</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps =(state)=> {   //güvenli işlemleri 6 
    return {
        
        auth:state.firebase.auth,
    }
        
    
   
}
const mapDispatchToProps =(dispatch)=> {
    return {
        createProject:(project)=>dispatch(createProject(project))
    }
}

export default connect(
    /*guvenlik işlemleri 7*/mapStateToProps /*yeni numara end*/ ,
    null,
     mapDispatchToProps)
     (CreateProject)
