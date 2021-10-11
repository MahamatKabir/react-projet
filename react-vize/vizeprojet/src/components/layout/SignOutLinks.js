import React from "react";
import {NavLink} from 'react-router-dom';

const SignOutLinks=()=> {
    return(
        <ul className="right">
            <li > <NavLink to="/">signup</NavLink></li>
            <li > <NavLink to="/">login</NavLink></li>
            
        </ul>
    )
}

export default SignOutLinks;