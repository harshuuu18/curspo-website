import React from "react";
import "../NavBar/Navbar.css";
import {Navbar,Nav,Button} from 'react-bootstrap'

import "../../App.css"
import logo from '../../Assets/image-removebg-preview (33).png';


const NavBar = () => {
  return (
    // <nav className="topnav" id="myTopNav">
    //   <div className="logo">
    //   <img src={logo} alt="logo" />
    //     <h5>FitClub Sarah</h5>
    //   </div>
    //   <div className="list">
    //     <a href="#">Contents</a>
    //     <a href="#">Programs</a>
    //     <a href="#">Appointments</a>
    //     <a href="#">Live</a>
    //     <a href="#">Contact</a>
    //   </div>
    //   <div className="buttons">
    //     <button className="btn btn-md text-white">Become Member</button>
    //   </div>
    //   <a class="icon" onclick="myFunction()">
    //   <i class="fa fa-bars"></i></a>
    // </nav>
<div>
<Navbar fixed="top" className="border-bottom p-3 px-5 nav" bg="white" expand="lg">
<Navbar.Brand >
<div className="logo">
       <img src={logo} alt="logo" />
        <h5>FitClub Sarah</h5>
     </div>
</Navbar.Brand>
<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
<Navbar.Collapse id="navbar-toggle">
  <Nav className="topnav">
  <div className="list">
      <a href="#">Contents</a>
      <a href="#">Programs</a>
      <a href="#">Appointments</a>
      <a href="#">Live</a>
      <a href="#">Contact</a>
    </div>
    <div className="buttons" >
    <Button variant="primary" className="btn" style={{backgroundColor:" #d7337a", borderRadius:"6px", outline:"none", border:"none"}}>Become Member </Button>{' '}
    </div>
  </Nav>
</Navbar.Collapse>

</Navbar>
</div>
  );
};

export default NavBar;
