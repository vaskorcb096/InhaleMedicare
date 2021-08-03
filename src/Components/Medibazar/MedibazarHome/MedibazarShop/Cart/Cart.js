import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Cart.css";
import { UserContext } from "../../../../../App";
import ReviewCart from "./ReviewCart";

const Cart = (props) => {
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
  console.log("fg", totalAmount);

  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
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
      
        <div className="text-white">
          <h6 className="text-danger"><strong>Total Order {cart.length}</strong></h6>
          <p>Prodcut Price: {formatNumber(total)}</p>
          <p>
            <small>Shipping Cost: {shipping}</small>
          </p>
          <p>
            <small>Tax+Vat: {formatNumber(tax)}</small>
          </p>
          <p>Total Price:{formatNumber(total + shipping + tax)}</p>
          <br />
          {props.children}
        </div>
   
    </>
  );
};

export default Cart;