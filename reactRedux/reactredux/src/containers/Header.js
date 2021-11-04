import React from 'react';
import "./header.css";
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className="ui-menu">
            <div className="ui container center">
                <h2>TCHAD-SHOP</h2>
                <Navbar />
            </div>
        </div>
    );

}

export default Header;