import React from "react";
import { useForm } from "react-hook-form";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "./Shipment.css";
import { useContext } from "react";
import { UserContext } from "../../../../App";

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
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
 const classes = useStyles();
  return (
    <div className={classes.root} >
      <Paper  elevation={3}>
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

        <input  type="submit" />
        </form>
      </Paper>
    </div>
  );
};

export default Shipment;
