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
import MedibazarNavbar from "../../MedibazarNavbar/MedibazarNavbar";

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
    }
    //  addToDatabaseCart(sameProduct._id, count);
  };
  console.log(cart);

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
      });
  }, []);

  return (
    <>
    <MedibazarNavbar></MedibazarNavbar>
    <div style={{paddingTop:'100px'}}className="container container-fluid cc">
      
      {cart.length>0 ? (
        <div className=" row">
          <div className="col-8">
            <h1>Order Review</h1>
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

          <div className="col-4">
            <div className="checkoutButton text-center">
              <Cart cart={cart}>
                <Button
                  onClick={handleProccedCheckout}
                  variant="contained"
                  color="primary"
                >
                  Procced Checkout
                </Button>
              </Cart>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Your Cart is Empty</h3>
          <Button onClick={goToShopping} variant="contained" color="primary">
            Go to Shopping
          </Button>
        </div>
      )}
    </div>
    </>
  );
};

export default OrderReview;
