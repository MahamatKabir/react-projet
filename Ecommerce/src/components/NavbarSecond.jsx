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
          <Link to="/galeri">News</Link>
          <a href="#contact">Contact</a>
          <div class="dropdown">
            <button class="dropbtn">Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <a href="#about">About</a>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i> </a>
        </div>
      </div>

      {/* <Navbar className="tchado" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Navbar>*/}

    </div>
  )

};

export default NavbarSecond;