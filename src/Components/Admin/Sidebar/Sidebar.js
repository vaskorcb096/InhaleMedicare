import "./Sidebar.css";
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between col-sm-12 col-md-12 col-lg-12  py-5 px-4" >
    <ul style={{marginLeft:'1px'}} className="list-unstyled">
        
        <li>
            <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </Link>
        </li>
         <div>
            <li>
                <Link to="/admin/admin_Panel" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal}  /> <span>Inhale Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/medibazarDashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal}  /> <span>Medibazar Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/prescriptions" className="text-white">
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
            </li>
           
            <li>
                <Link to="/doctor/setting" className="text-white" >
                    <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                </Link>
            </li>
        </div>
    </ul>
    <div >
        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
    </div>
</div>
  );
};
export default Sidebar;