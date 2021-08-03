import { Button, makeStyles, Paper } from "@material-ui/core";
import React, { useContext,useState } from "react";
import { UserContext } from "../../../../App";
import { useForm } from "react-hook-form";


const First = () => {
  const [loggedInUser,setLoggedInUser,currentStep,cuStep,sStep,setStep,userData,setUserData,finalData,setFinalData]=useContext(UserContext)
  
 // const [paymentInfo,setPaymentInfo]=useState({});
    const useStyles=makeStyles({
       
        root:{
            width:"50%",
            margin:"auto",     
        }
    })
    const classes =useStyles();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log("sf",data);
   // setPaymentInfo(data);
    setFinalData(data);
    sStep(2);
  }

  const buttonHandler = () => {
    console.log("hi");
    sStep(2);
  };

  return (
    <div className={classes.root} >
      
      <Paper className="d-flex justify-content-center"  elevation={3}>
        <form className="shipForm p-5"   onSubmit={handleSubmit(onSubmit)}>

          <input name="name"placeholder="Your Name"defaultValue={loggedInUser.user_name}
            ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.name && <span className="error">Name is required</span>}

         
           <input name="email"placeholder="Your email"defaultValue={loggedInUser.email}
           ref={register({ required: true })} />
         {/* errors will return when field validation fails  */}
         {errors.email && <span className="error">Email is required</span>}

         
          <input name="address"placeholder="Your Address"
          ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.address && <span className="error">Address is required</span>}

         
        <input name="phone"placeholder="Your Phone Number"
          ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.phone && <span className="error">Phone Number is required</span>}

        <input  style={{ backgroundImage: 'linear-gradient(170deg, #00C6A7 , #1E4D92 )',color:'white'}} type="submit" />
        </form>
      </Paper>
   
      <div>
       
      </div>
    </div>
  );
};

export default First;
