import { Button } from '@material-ui/core';
import React, { useContext,useState,useEffect } from 'react';
import { UserContext } from '../../../../App';

import { getDatabaseCart, processOrder } from '../../../../utilities/databaseManager';
import CheckOut from './CheckOut';

const Second = () => {
  const [allProducts,setAllProducts]=useState([]);
  const [cart, setCart] = useState([]);
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
    totalAmount,
    setTotalAmount
  ] = useContext(UserContext);
  const savedCart=getDatabaseCart();
  const productKeys = Object.keys(savedCart)
 
   
const orderDetails={loggedInEmail:loggedInUser.email,products:savedCart,shipment:finalData,orderTime:new Date().toDateString(),productPrice:loggedInUser.total}

   
      console.log("finalData",finalData);
      const backreverse=()=>{
        sStep(1);
      }
    
    return (
        <div className="d-flex justify-content-center">
          <Button onClick={backreverse} className="m-5" variant="contained" color="green"  >
           Back
          </Button>
          <CheckOut  orderDetails={orderDetails}></CheckOut>
          
         
           <br/>
           
        </div>
    );
};

export default Second;