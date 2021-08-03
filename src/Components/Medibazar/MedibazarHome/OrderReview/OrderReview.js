import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
  addToDatabaseCart,
} from "../../../../utilities/databaseManager";
import data from "../data";
import Cart from "../MedibazarShop/Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./OrderReview.css";
import { useForm } from "react-hook-form";
import { Paper } from "@material-ui/core";
import ReviewCart from "../MedibazarShop/Cart/ReviewCart";
import Navbar from "../../../Home/Navbar/Navbar";
import load2 from '../../../../images/icon/image_processing20190910-766-z53wuz.gif'
import {  Spinner } from 'react-bootstrap';

const OrderReview = () => {
  const [cart, setCart] = useState([]);

  const history = useHistory();

  const handleProccedCheckout = () => {
    history.push("/shipment");
  };
  const goToShopping=()=>{
    history.push("/medibazar");
  }

  const removeProduct = (productKey) => {
    console.log("Removed Clicked");
    const newCart = cart.filter((pd) => pd._id !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  const decrement = (productKey) => {
    const ToBeAddedKey = productKey;
    const sameProduct = cart.find((pd) => pd._id === ToBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct && sameProduct.quantity > 0) {
      count = sameProduct.quantity - 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd._id !== ToBeAddedKey);
      newCart = [sameProduct,...others];
      setCart(newCart);
      addToDatabaseCart(sameProduct._id, count);
    }
  };
  const increment = (productKey) => {
    console.log("increment hobe", cart, "sadf", productKey);
    const ToBeAddedKey = productKey;
    const sameProduct = cart.find((pd) => pd._id === ToBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd._id !== ToBeAddedKey);
      newCart = [sameProduct,...others];
      setCart(newCart);
      addToDatabaseCart(sameProduct._id, count);
    }
   
  };
  console.log(cart);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    
    fetch("/getByproducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => {
        const cartProducts = productKeys.map((key) => {
          const product = data.find((pd) => pd._id === key);
          product.quantity = savedCart[key];
          return product;
        });
        setCart(cartProducts);
        setLoading(false);
      });
  }, []);
 

  return (
    <div className="val ">
     {loading?(
       <div className="d-flex justify-content-center align-item-center">
         
           <h6 className="text-white" style={{paddingTop:'200px'}} ><Spinner  animation="grow" variant="warning" />Loading</h6> 

         

       </div>
     ):(
       <>
       <Navbar></Navbar>
    <div style={{paddingTop:'100px'}}className="cll container container-fluid cc">
      
      {cart.length>0 ? (
        <div className=" row">
          <div className="col-7">
            <h1 className="pl-3 text-white">Order Review</h1>
            {cart.map((pd) => (
              <ReviewItem
                product={pd}
                removeProduct={removeProduct}
                key={pd._id}
                decrement={decrement}
                increment={increment}
              ></ReviewItem>
            ))}
          </div>

          <div className="text-center col-5">
           <Paper>
           <div  className="checkoutButton text-center">
              <ReviewCart orderReview={true}cart={cart}>
                <Button
                  onClick={handleProccedCheckout}
                  variant="contained"
                  color="primary"
                  
                >
                  Procced Checkout
                </Button>
              </ReviewCart>
            </div>
             
           </Paper>
            
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-white">Your Cart is Empty</h3>
          <Button onClick={goToShopping} variant="contained" color="primary">
            Go to Shopping
          </Button>
        </div>
      )}
    </div>
       </>
     )}
    
    </div>
  );
};

export default OrderReview;
