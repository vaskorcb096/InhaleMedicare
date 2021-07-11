
import React, { useContext } from 'react';
import {Stepper,StepLabel,Step} from '@material-ui/core/';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import {UserContext} from '../../App'
import './AppointmentBook'
import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import images01 from  '../../images/appointment/appointment2.svg'
import Navbar from '../Home/Navbar/Navbar';

const AppointmentBook = () => {
    const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData]=useContext(UserContext)
    const useStyles=makeStyles({
       
        root:{
            width:"50%",
            margin:"6rem auto ",
            border:'1px solid #999'
        }
    })
    const classes =useStyles();
    function showStep(step){
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
                return <FirstStep></FirstStep>
            case 2:
                return <SecondStep></SecondStep>
            case 3:
                return <ThirdStep></ThirdStep>
        }
        
    }
    return (
        <div className="container">
            <Navbar></Navbar>

       
            <div className="pt-5">
            <ThemeProvider>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
            <div className="row">
                <div className="col-md-5">
                    <img src={images01} className="img-fluid" alt="appointment booking"></img>
                </div>
            <div className="col-md-7">
        <Stepper activeStep={currentStep-1} orientation="horizontal">
           <Step>
               <StepLabel>

               </StepLabel>
               </Step>
               <Step>
               <StepLabel>

               </StepLabel>
               </Step>
               <Step>
               <StepLabel>

               </StepLabel>
               </Step>
          
        </Stepper>
        {showStep(currentStep)}
       
        </div>
            </div>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>
    </div>

     
        

    );
};

export default AppointmentBook;