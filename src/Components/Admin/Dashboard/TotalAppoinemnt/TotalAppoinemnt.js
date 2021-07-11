import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DisplayAppointment from "./DisplayAppointment";

const TotalAppoinemnt = () => {
  return(
    <div className="container-fluid row ">
    <div className=" vxx col-md-2 col-sm-12 col-lg-2 jx ">
      <Sidebar></Sidebar>
    </div>
    <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
      <DisplayAppointment></DisplayAppointment>
    </div>
  </div>
  );
 
};

export default TotalAppoinemnt;
