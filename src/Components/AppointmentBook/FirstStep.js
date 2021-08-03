import React,{useContext,useState} from 'react';

import {Button,TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../../App';
// pick a date util library
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import toast from 'react-hot-toast';
const FirstStep = () => {
    const [loggedInUser,setLoggedInUser,currentStep,cuStep,sStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [cnt, setCnt] = useState(0);
    console.log("frstStep",loggedInUser);

  const handleDateChange = (date) => {
    if(cnt===1) {
      setCnt(()=>2);
    }
    if(cnt===0) {
      setCnt(()=>1);
    }
   
    setSelectedDate(date);
    setUserData({...userData,"date":date.toDateString()});
    console.log(selectedDate.toDateString());
  };
  const handleTimeChange = (time) => {
    if(cnt===1) {
      setCnt(()=>2);
    }
    if(cnt===0) {
      setCnt(()=>1);
    }
    setUserData({...userData,"time":time.toDateString()});
    setSelectedTime(time);

  };
  const buttonHandler=()=>{
    if(cnt==2) {
    console.log("hi");
    //setUserData({...userData,"date":selectedDate.toDateString()});
    setUserData({...userData,"time":selectedTime.toTimeString()});
    setStep(2);
    }
    else {
      toast.error("Please Picked a Date and Time");
    }
  }
  
    return (
       
        <div >
          
                            <div>
                            
                        {/* <TextField label="Pick a Date" value={userData["date"]} onChange={(e)=>setUserData({...userData,"date":e.target.value})} margin="normal" variant="outlined"color="secondary"></TextField> */}
                        {/* </div> */}
                        {/* <div> */}
                        {/* <TextField label="Pic a Time" value={userData["time"]} onChange={(e)=>setUserData({...userData,"time":e.target.value})} margin="normal" variant="outlined"color="secondary"></TextField> */}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                           
                            <KeyboardDatePicker
                            disableToolbar
                            margin="normal"
                            id="date-picker-dialog"
                            label="Select The Date"
                            format="MM/dd/yyyy"
                            value={selectedDate}  
                            onChange={date=>handleDateChange(date)}
                           
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        </Grid>
                        <Grid container justify="space-around">
                           
                        <KeyboardTimePicker
                                label="Select The Time"
                                placeholder="08:00 AM"
                                mask="__:__ _M"
                                value={selectedTime}
                                onChange={time => handleTimeChange(time)}
                       />
                           
                        </Grid>
                 </MuiPickersUtilsProvider>
                        </div>
                      
                        <div>
                        <Button variant ="contained" onClick={buttonHandler} color="primary">Next</Button>
                        </div>
            
            
            
           
        </div>
    );
};

export default FirstStep;