import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Navbar= ()=> {
    return (
        <div className="navbar">
        <div className="navbar-container">
            <Link to="/ProductListing"><h2>erkek</h2> </Link> 
            <h2>kadin</h2>
            
        </div>
    </div>
    )
}

export default Navbar;
