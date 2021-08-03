import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import images01 from '../../../images/icon/undraw_welcome_3gvl.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css'
import {NavLink,Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Image } from 'react-bootstrap';
import toast, { Toaster }  from 'react-hot-toast';
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const Navbar = (props) => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggle = () => setDropdownOpen(prevState => !prevState);

  const lik="https://i.ibb.co/5GzXkwq/user.png";
  const [loggedInUser,setLoggedInUser,currentStep,cuStep,sStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
 const loggedOut=()=>{
 
  sessionStorage.removeItem('userInfo');
  setLoggedInUser({});
  toast.success("Logged Out.")
  history.push(from);
  
  }
useEffect(()=>{
  const val=sessionStorage.getItem('userInfo');
  console.log("vvvvv",typeof(val));
  if(val) {
  setLoggedInUser(JSON.parse(val));
  }

},[])

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
      {loggedInUser.email && loggedInUser.isSignedIn &&(
         <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" to="/admin/admin_panel" style={{color:'white'}}>DASHBOARD</ReactBootStrap.Nav.Link>
      )

      }
     
      <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" to="/contactus" style={{color:'white'}}>CONTACT US</ReactBootStrap.Nav.Link>
      
  
      {
        loggedInUser.email && loggedInUser.isSignedIn?
        <Dropdown style={{backgroundColor:'none'}} isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{backgroundColor:'transparent',border:'none'}}>
          {
            loggedInUser.image ? <Image style={{ maxWidth: "30px" }} src={loggedInUser.image} roundedCircle />:<Image style={{ maxWidth: "30px" }} src={lik} roundedCircle />
          }
        
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link style={{}} to="/aboutme">
            <FontAwesomeIcon icon={faUsers} /> <span>My Profile</span>
            </Link>
            </DropdownItem>
      
          <DropdownItem><FontAwesomeIcon icon={faCog}/> <span>Settings</span></DropdownItem>
          <DropdownItem><FontAwesomeIcon icon={faCalendar}/> <span>Activity</span></DropdownItem>
          <DropdownItem divider />
          <DropdownItem  onClick={loggedOut}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></DropdownItem>
         
        </DropdownMenu>
      </Dropdown>
        :
        <ReactBootStrap.Nav.Link activeClassName="menu_item selected" as={Link}  className="nabb" style={{color:'white'}}  className="logindesign"to="/signin">LOG IN</ReactBootStrap.Nav.Link>

        
      }
  </ReactBootStrap.Nav>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

    );
};

export default Navbar;