import "./Sidebar.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Image } from 'react-bootstrap';
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
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";
import ProfilePopper from "../../ProfilePopper/ProfilePopper";


const Sidebar = () => {
  
  const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  const [isAdmin, setIsAdmin] = useState(false);
  const [list, setList] = useState([]);
  const [
    loggedInUser,
    setLoggedInUser,
    currentStep,
    setStep,
    userData,
    setUserData,
    finalData,
    setFinalData,
    submitData,
  ] = useContext(UserContext);
  console.log(loggedInUser, "odmino");

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
 
  useEffect(() => {
    fetch("/getAdmin")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  useEffect(() => {
    const result = list.find((cuval) => {
      console.log(cuval.email, "sf", loggedInUser.email);
      return cuval.email === loggedInUser.email;
    });
    if (result) {
      setIsAdmin(true);
      setLoggedInUser((pre)=>({
          ...pre,
          ['admin']:true
      }));
    }
  }, [list]);

 

  console.log(loggedInUser, "isAdmin");
  return (
    <div
      id="sticky-sidebar"
      className="sidebar d-flex flex-column justify-content-between col-sm-12 col-md-12 col-lg-12  py-5 px-4"
    >
      <ul style={{ marginLeft: "1px" }} className="list-unstyled">
      

        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <div>
          <li>
            <Link to="/admin/admin_Panel" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} />{" "}
              <span>Inhale Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/medibazarDashboard" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} />{" "}
              <span>Medibazar Dashboard</span>
            </Link>
          </li>
          {loggedInUser.admin && (
            <li>
              <Link to="/makeAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
          )}

          <li>
            <Link to="/doctor/setting" className="text-white">
              <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
            </Link>
          </li>
        </div>
      </ul>
      <div>
        <Link onClick={loggedOut} className="text-white">
       
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout   <Image  style={{ maxWidth: "30px" }} src={loggedInUser.image} roundedCircle /></span> 
          
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
