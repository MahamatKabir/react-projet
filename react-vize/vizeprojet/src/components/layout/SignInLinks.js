import React from "react";
import {NavLink} from 'react-router-dom';

const SignInLinks=()=> {
    return(
        <ul className="right">
            <li > <NavLink to="/create">Yeni Projet</NavLink></li>
            <li > <NavLink to="/">Log Out</NavLink></li>
            <li > <NavLink to="/" className="btn btn-floating teal lignten-1">AOS</NavLink></li>
        </ul>
    )
}

export default SignInLinks;