import React, { useEffect, useState,useContext } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import {TableContainer,TableHead,TableBody,TableCell,TableRow,Table} from '@material-ui/core';
import axios from "axios";
import { UserContext } from "../../../../App";

const TodayAppointment = () => {
    const [TodayAppointment,setTodayAppointment]=useState([]);
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
    useEffect(()=>{
      
        axios.get('/getTodayAppointment').then((res)=>{
          console.log("sef",loggedInUser);
          if(loggedInUser.admin===true) {

          setTodayAppointment(res.data)
          }
          else {
            const val=res.data;
            console.log("fdhg",res.data);
            var result=val.filter((da)=>{
              return da.email===loggedInUser.email
            })
            setTodayAppointment(result);
          }
      })
      
     
       
    },[])
    console.log("appointment",TodayAppointment);
  return (
    <div className="container-fluid row ">
      <div className=" vxx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
        <div className="container container-fluid">
       
          <table class="contentTable sticky">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th> Preferred Doctors</th>
                <th>Purpose of Appointment</th>
                <th>Status</th>
               
              </tr>
            </thead>
            {TodayAppointment.map((data) => {
              return (
                <tbody>
                  <tr>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.contactNumber}</td>
                    <td>{data.email}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td> {data.preferredDoctors}</td>
                    <td>{data.purposeOfAppointment.slice(0, 15)}....</td>
                    <td><select
                      className={
                        data.status === "Pending"
                          ? "btn btn-danger"
                          : data.status === "Done"
                          ? "btn btn-success"
                          : "btn btn-info"
                      }
                     
                    >
                      <option className="bg-white text-muted">Pending</option>
                    </select></td>
                  </tr>
                </tbody>
              );
            })}
          </table>
      

        </div>
       
      </div>
    </div>
  );
};

export default TodayAppointment;
