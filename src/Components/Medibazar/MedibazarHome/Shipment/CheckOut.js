import { Button } from '@material-ui/core';
import React,{useState,useContext} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { UserContext } from '../../../../App';
import { processOrder } from '../../../../utilities/databaseManager';

const CheckOut = (props) => {
    
 const {orderDetails}=props
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
 
    const [product,setProduct]=useState({
        name:"Medibazar",
        price:loggedInUser.total,
        productBuy:loggedInUser.email
      
      })
       console.log("dfg",loggedInUser);
        const makePayment =token=>{
        
          const body={
            token,
            product,
            price:orderDetails.productPrice,
           
      
          }
          const headers={
            "Content-type":"application/json"
          }
          return  fetch(`https://quiet-earth-03350.herokuapp.com/payment`,{
            method:"POST",
            headers,
            body:JSON.stringify(body)
          }).then(response=>{
            console.log("RESPONSE",response)
            const {status}=response;
            console.log("STATUS",status);
            fetch('https://quiet-earth-03350.herokuapp.com/addOrder',{
              method:"POST",
              headers:{
                "Content-type":"application/json"
              },
              body:JSON.stringify(orderDetails)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data){
               processOrder();
                alert("Your Order Placed Successfully");
      
              }
            })
             
            sStep(3);
      
      
      
          })
          .catch(error=>console.log(error))
        }
    return (
        <div>
         
                  <StripeCheckout stripeKey="pk_test_51JEIJkK8csuOv1BYKQwhV3xwWawa0oPe8dE6MVR1eIm5SbOdjTE2uqUqsGwCxtQ2W5GMYXlfDZwQI84OksMBjZLW00KBTqsejr"
                  token={makePayment} name="Inahale Care And Medibazar"
                  amount={loggedInUser.total*100}
       
                  >
                    
                 <Button className="m-5" variant="contained" color="green"  >
                   Buy Product in just {loggedInUser.total} $
                 </Button>
                  </StripeCheckout>
          
            
        </div>
    );
};

export default CheckOut;