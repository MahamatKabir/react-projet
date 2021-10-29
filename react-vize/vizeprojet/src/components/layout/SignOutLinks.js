import React from "react";
import {NavLink} from 'react-router-dom';


const SignOutLinks=()=> {
    return(
        <ul className="right">
            <li > <NavLink to="/signin">login</NavLink></li>
            <li > <NavLink to="/signout">signup</NavLink></li>   
        </ul>
    )
}



export default SignOutLinks;