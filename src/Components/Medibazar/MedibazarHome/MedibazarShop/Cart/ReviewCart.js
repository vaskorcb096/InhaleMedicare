import React from "react";
import "./Cart.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState ,useContext} from "react";
import { UserContext } from "../../../../../App";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ReviewCart = (props) => {
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
    setTotalAmount,
  ] = useContext(UserContext);
    const [tota,setTota]=useState(0);
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
  const tp = cart.reduce((tp, pd) => tp + pd.quantity, 0);
 
  
  
 
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 0) {
    shipping = 2.26;
  } else if (total > 17) {
    shipping = 4.46;
  }
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  let tax = total / 10;
  console.log("sdf",cart);
  loggedInUser.total=total;
  console.log("loggedInUser",loggedInUser);
  var val=(sessionStorage.getItem('userInfo'));
  let vall=JSON.parse(val);
  console.log("vall",vall);
  var xxx={
    ...vall,
    total:loggedInUser.total,
  }
 
  sessionStorage.removeItem('userInfo');
  sessionStorage.setItem('userInfo', JSON.stringify(xxx));
 
  return (
    <>
      <div style={{
            
           
            paddingTop:'96px'
          }}>
        <div
          style={{
            
            height: "310px",
            minWidth:'200px',
            width: "100%",
            maxHeight:"310px",
          
          }}
        className="Item-Cart card"
        >
          <div className="card-body">
            <h3 class="text-left card-title">Total Order {tp}</h3>

            <div id="visitor" style={{}} className="tx">
              <div
               
                style={{
                  
                }}
              >
               
                <h5 style={{fontWeight:'900px'}} className="text-left">
                  Prodcut Price: {formatNumber(total)}
                </h5>
                <h6 className="text-left">
                  <small>Shipping Cost: {shipping}</small>
                </h6>
                <h6 className="text-left">
                  <small>Tax+Vat: {formatNumber(tax)}</small>
                </h6>
                <h6 className="text-left">
                  Total Price:{formatNumber(total + shipping + tax)}
                </h6>
              </div>
            </div>
          </div>
          <div>
            <hr className="mt-0 mb-0" />
          </div>
          <div class="card-body text-center ">
            <br />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCart;
