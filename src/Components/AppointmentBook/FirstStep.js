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
const FirstStep = () => {
    const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
  


  const handleDateChange = (date) => {
    setSelectedDate(date);
    setUserData({...userData,"date":date.toDateString()});
    console.log(selectedDate.toDateString());
  };
  const handleTimeChange = (time) => {
    setSelectedTime(time);

  };
  const buttonHandler=()=>{
    console.log("hi");
    //setUserData({...userData,"date":selectedDate.toDateString()});
    setUserData({...userData,"time":selectedTime.toTimeString()});
    setStep(2);
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