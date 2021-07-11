import React, { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import images01 from '../../../images/icon/undraw_welcome_3gvl.svg';
import './Navbar.css'
import {NavLink,Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = (props) => {
  const val=props.color;
  const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData]=useContext(UserContext)
  console.log(loggedInUser);

    return (
      
        <ReactBootStrap.Navbar collapseOnSelect fixed="top" expand="lg" style={{ backgroundImage: 'linear-gradient(170deg, #00C6A7 , #1E4D92 )'}} variant="light">
        
            
  <ReactBootStrap.Navbar.Brand style={{color:'white'}} className="inhillnev " to="/"><img  style={{width:'100px',height:'40px',left:'-100px'}}src={images01} alt="helo"/><strong>INHALE CARE</strong></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto navhover">
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb active"to="/home" style={{color:'white'}}>HOME</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link} className="nabb" to="/about" style={{color:'white'}}>ABOUT</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link} className="nabb" to="/ourdoctor" style={{color:'white'}}>OUR DOCTORS</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" to="/medibazar" style={{color:'white'}}>MEDIBAZAR</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" to="/service" style={{color:'white'}}>SERVICE</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" to="/admin/admin_panel" style={{color:'white'}}>DASHBOARD</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" to="/contactus" style={{color:'white'}}>CONTACT US</ReactBootStrap.Nav.Link>
      
  
      {
        loggedInUser.email && loggedInUser.isSignedIn?
        <ReactBootStrap.NavDropdown title={loggedInUser.email} id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item onClick={()=>setLoggedInUser({})}>Sign Out</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item  activeClassName="menu_item selected" as={Link} to="/aboutme"  >View Profile</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
       
        :
        <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" style={{color:'white'}}  className="logindesign"to="/signin">LOG IN</ReactBootStrap.Nav.Link>

        
      }
  </ReactBootStrap.Nav>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

    );
};

export default Navbar;