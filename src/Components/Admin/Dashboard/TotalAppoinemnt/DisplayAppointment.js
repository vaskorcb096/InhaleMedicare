import React, { useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import axios from "axios";
const DisplayAppointment = () => {
  const [appointmentResult, setAppointmentResult] = useState([]);
  //const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
  //console.log("dfsdfg....",userData);
  useEffect(() => {
    axios.get("/getAppointment").then((res) => {
      setAppointmentResult(res.data);
    });
  }, []);

  const handleStatusChange = (id, status) => {
    let modifiedAppointment = [];
    appointmentResult.forEach(result => {
        if (result._id === id) {
          result.status = status;
        }
        modifiedAppointment.push(result)
    })
    setAppointmentResult(modifiedAppointment);
  

    const modifiedStatus = { id, status }
    axios.patch('updateAppointmentStatus', modifiedStatus)
    .then(res => res.data && toast.success(`Set to ${status}`))
    .catch(error => toast.error(error.message));
  }

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
                  <td>
                    <select
                      className={
                        data.status === "pending"
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
                    </select>
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
