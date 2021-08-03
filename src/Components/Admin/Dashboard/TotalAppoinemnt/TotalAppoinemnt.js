import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import ChartSec from "./ChartSec/ChartSec";
import DisplayAppointment from "./DisplayAppointment";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../../../App";

const TotalAppoinemnt = () => {
  const [appointmentResult, setAppointmentResult] = useState([]);
  //const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
  //console.log("dfsdfg....",userData);
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
  useEffect(() => {
    axios.get("/getAppointment").then((res) => {
      console.log("sef", loggedInUser);
      if (loggedInUser.admin === true) {
        setAppointmentResult(res.data);
      } else {
        const val = res.data;
        console.log("fdhg", val);
        var result = val.filter((da) => {
          return da.email === loggedInUser.email;
        });
        setAppointmentResult(result);
      }
    });
  }, []);

  console.log("sf", appointmentResult);
  const handleStatusChange = (id, status) => {
    let modifiedAppointment = [];
    appointmentResult.forEach((result) => {
      if (result._id === id) {
        result.status = status;
      }
      modifiedAppointment.push(result);
    });

    setAppointmentResult(() => modifiedAppointment);

    const modifiedStatus = { id, status };
    console.log("sg", modifiedStatus);
    axios
      .patch("updateAppointmentStatus", modifiedStatus)
      .then((res) => {
        console.log(res.data);
        res.data && toast.success(`Set to ${status}`);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <div className="container-fluid row ">
        <div className="vxx col-md-2 col-sm-12 col-lg-2 jx ">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-lg-10 justify-content-center">
          <ChartSec appointmentResult={appointmentResult}></ChartSec>
          <DisplayAppointment
            appointmentResult={appointmentResult}
            handleStatusChange={handleStatusChange}
          ></DisplayAppointment>
        </div>
      </div>
    
    </div>
  );
};

export default TotalAppoinemnt;
