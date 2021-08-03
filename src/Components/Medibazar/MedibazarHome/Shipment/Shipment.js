
import React, { useContext } from 'react';
import {Stepper,StepLabel,Step} from '@material-ui/core/';
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Third from './Third';
import Second from './Second';
import First from './First';
import { UserContext } from '../../../../App';
import Navbar from '../../../Home/Navbar/Navbar';
import "./Shipment.css";

import "./Shipment.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(16),

      margin: "auto",
      
    },
    paddingTop:'50px',
  },
}));

const Shipment = () => {
    const [loggedInUser,setLoggedInUser,currentStep,cuStep,sStep,setStep,userData,setUserData,finalData,setFinalData]=useContext(UserContext)
    const useStyles=makeStyles({
       
        root:{
            width:"70%",
            margin:"auto",
           
        }
    })
    const classes =useStyles();
    function showStep(step){
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
                return <First></First>
            case 2:
                return <Second></Second>
            case 3:
                return <Third></Third>
        }
        
    }
    return (
        <div className={classes.root}>
        <Navbar></Navbar>

       
            <div className="pt-5">
            <ThemeProvider>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
           
        <Stepper activeStep={cuStep-1} alternativeLabel>
           <Step>
               <StepLabel>
                Shipment Form
               </StepLabel>
               </Step>
               <Step>
               <StepLabel>
               Stripe Method
               </StepLabel>
               </Step>
               <Step>
               <StepLabel>
                 Successfully Done
               </StepLabel>
               </Step>
          
        </Stepper>
        {showStep(cuStep)}
       
        </Paper>
      </Container>
    </ThemeProvider>
    </div>
    </div>

     
        

    );
};

export default Shipment;
