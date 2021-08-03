import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../../../App';

const Third = () => {
    const [
        loggedInUser,
        setLoggedInUser,
        currentStep,
        cuStep,
        sStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        
      ] = useContext(UserContext);
      const actionListener=()=>{
        sStep(1);
      }
     
    return (
        <div className="d-flex  flex-column  justify-content-center ">
           <h4 className="text-center mt-3 mb-3">Thank You</h4>
           
        
       <div className="d-flex justify-content-center">
       <Button className="m-3"variant="contained" color="primary">
         <Link style={{color:'white', textDecoration: 'none' }} to="/medibazar">Go TO MEDIBAZAR</Link>
        </Button>
        <Button className="m-3" onClick={actionListener} variant="contained" color="primary">
         Shipment Form 
        </Button>
       </div>
     
        </div>
    );
};

export default Third;