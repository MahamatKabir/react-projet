import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Navsecon.css";

const NavbarSecond = () => {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  window.onscroll = function () { myFunctionne() };

  const myFunctionne = () => {
    var header = document.getElementById("myTopnav");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  return (
    <div >
      <div className="topnav-container">
        <div className="topnav" id="myTopnav">
          <a href="#home" className="activie">Home</a>
          <Link to="/galeri">Kadin</Link>
          <a href="#contact">Erkek</a>
          <div class="dropdown">
            <button class="dropbtn">Çocuk
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <a href="#about">Iletişim</a>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i> </a>
        </div>
      </div>
    </div>
  )

};

export default NavbarSecond;