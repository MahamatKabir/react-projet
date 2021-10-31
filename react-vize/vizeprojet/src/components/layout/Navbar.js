import React from "react";

import {Link} from 'react-router-dom';
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import {connect} from "react-redux";


const Navbar=(props)=> {
    const {auth,profile} = props;
    const links= auth.uid ? <SignInLinks /*profile bilgiler devam*/profile={profile}/*end*//>:<SignOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3 left">
           <div className="container">
               <Link to="/" className="brand-logo"> Yazilim Plan </Link>
               {links}
               
           </div>
        </nav>
    )

}
const mapStateToProps=(state) => {
    console.log(state);
    return{
       auth:state.firebase.auth,
       profile:state.firebase.profile  /*profile bilgiler*/
    }
}

export default connect(mapStateToProps)(Navbar);