import React from "react";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignInLinks=(props)=> {
    return(
        <ul className="right">
            <li > <NavLink to="/create">Yeni Projet</NavLink></li>
            <li > <a onClick={props.signOut}>Log Out</a></li>
            <li > <NavLink to="/">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps=(dispatch)=> {
    return {
        signOut:()=> {dispatch(signOut())}
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks)