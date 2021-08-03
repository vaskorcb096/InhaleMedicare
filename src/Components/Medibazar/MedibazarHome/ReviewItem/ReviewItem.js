/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, quantity, _id, brand, countInStock, image, description } =
    props.product;
    console.log("sefsef",props.product);
  const { cart, setCart } = useState();

  return (
    <div className="container  item1 col-11 my-5">
      <div className="row Item-inside">
        <div className="col-12 col-md-12 col-lg-4 img-div">
        
          <img src={`https://quiet-earth-03350.herokuapp.com/${image}`} alt="menupIc" className="img-fluid cart " />
        </div>
        <div className="col-12 col-md-12 col-lg-8">
          <div className="main-title pt-4 pb-3">
            <h1>{name}</h1>
            <p>{description.slice(0,20)}</p>
          </div>
          <div className="menu-price-book">
            <div className="price-book-divide d-flex justify-content-between">
              <h2>{quantity} prodcut are Buy</h2>
         
              <div class="quantity">
             
               
                <a class="quantity__minus"  title="Decrement" onClick={() => props.decrement(_id)}>
                  <span>-</span>
                </a>
                <input
                  name="quantity"
                  type="text"
                  class="quantity__input"
                  value={quantity}
                />
             
                <a class="quantity__plus" title="Increment"onClick={() => props.increment(_id)}>
                  <span>+</span>
                </a>
              </div>
              <Button
                
                variant="contained"
                color="primary"
                onClick={() => props.removeProduct(_id)}
              >
                Remove
              </Button>
            </div>
            <p>{countInStock} left in stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
