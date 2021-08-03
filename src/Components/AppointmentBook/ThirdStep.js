import React, { useContext } from "react";
import { UserContext } from "../../App";

import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import swal from "sweetalert";

const ThirdStep = () => {
  const [loggedInUser,setLoggedInUser,currentStep,cuStep,sStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
  const subData =async(event)=>{
    //console.log(userData," ...userData");
    const {time,contactNumber,date,email,firstname,lastname,preferredDoctors,purposeOfAppointment}=userData;
    event.preventDefault();
    const res = await fetch("https://quiet-earth-03350.herokuapp.com/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        time,
        contactNumber,
        date,
        email,
        firstname,
        lastname,
        preferredDoctors,
        purposeOfAppointment

      }),
    });
    const data = res.json();
    console.log("data", data);
    if (res.status === 400 || !data) {
      window.alert("PLz Type Valid Filed");
    } else {
      setUserData([]);
      
      swal(
        "Thank you",
        "Plz Wait some moment . Untill approved Your appointment!",
        "success"
      );
      setStep(1);

    }
  }

  return (
    <div>
      <h3>Appointment Details</h3>

      <div>
        <h6>Preferred Doctors</h6>

        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          helperText="Leave blank if you do not have a preferred doctor"
          name="preferredDoctors"
          onChange={(e)=>setUserData({...userData,"preferredDoctors":e.target.value})} 
          size="small"
          fullWidth
        ></TextField>
      </div>
      <div>
        <h6> Purpose of appointment </h6>

        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          name="purposeOfAppointment"
          onChange={(e)=>setUserData({...userData,"purposeOfAppointment":e.target.value})} 
          multiline
          fullWidth
          size="small"
          rows={3}
          rowsMax={8}
        ></TextField>
      </div>
      <div>
        <Button
          onClick={() => setStep(2)}
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
        <Button onClick={subData} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
