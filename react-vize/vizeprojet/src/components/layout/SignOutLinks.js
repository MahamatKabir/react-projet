import React from "react";
import {NavLink} from 'react-router-dom';

const SignOutLinks=()=> {
    return(
        <ul className="right">
            <li > <NavLink to="/signin">signup</NavLink></li>
            <li > <NavLink to="/signout">login</NavLink></li>
            
        </ul>
    )
}

export default SignOutLinks;