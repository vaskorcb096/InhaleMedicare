import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import axios from "axios";
import { UserContext } from "../../../../App";
const DisplayAppointment = (props) => {

  const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
  //console.log("dfsdfg....",userData);
  const { appointmentResult, handleStatusChange } = props;

  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
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
          {appointmentResult.map((data) => {
            return (
              <tbody id={data._id}>
                <tr>
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.contactNumber}</td>
                  <td>{data.email}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td> {data.preferredDoctors}</td>
                  <td>{data.purposeOfAppointment.slice(0, 15)}....</td>
                  <td>
                    {loggedInUser.admin? <select
                      className={
                        data.status === "Pending"
                          ? "btn btn-danger"
                          : data.status === "Done"
                          ? "btn btn-success"
                          : "btn btn-info"
                      }
                      defaultValue={data.status}
                      onChange={(e) =>
                        handleStatusChange(data._id, e.target.value)
                      }
                    >
                      <option className="bg-white text-muted">Pending</option>
                      <option className="bg-white text-muted">On going</option>
                      <option className="bg-white text-muted">Done</option>
                    </select>:<select
                      className={
                        data.status === "Pending"
                          ? "btn btn-danger"
                          : data.status === "Done"
                          ? "btn btn-success"
                          : "btn btn-info"
                      }
                      defaultValue={data.status}
                      onChange={(e) =>
                        handleStatusChange(data._id, e.target.value)
                      }
                    >
                     
                      <option className="bg-white text-muted">{data.status}</option>
                    </select>}
                   
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </TableContainer>
    </div>
  );
};

export default DisplayAppointment;
