import React from "react";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import "./Admin_Panel.css";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  border: "1px solid red",
};
const Admin_Panel = () => {
  return (
    <div 
     className="container-fluid row ">
      <div className=" vx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      <div
       
      
        className="adminpanel col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center"
      >
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};
export default Admin_Panel;
