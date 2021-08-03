import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import "./MedibazarShop.css";
import Ratting from "./Ratting/Ratting";
import { Link } from "react-router-dom";
const MedibazarShop = (props) => {
  

  const {
    _id,
    name,
    category,
    image,
    price,
    countInStock,
    brand,
    rating,
    numReviews,
    description,
    inCart,
  } = props.pro;
  console.log("shop",props.pro);
  return (
    <div className="mb-3 productcard">
      <Link style={{textDecoration:'none'}}className="imgBx" to={`/product/${_id}`}>
        <img
          className="img-fluid"
          src={`https://quiet-earth-03350.herokuapp.com/${image}`}
          alt={name}
        />
      </Link>
      {props.showDescription && <p>{props.pro.description}</p>}
      <div className="contentBx">
        <Link style={{textDecoration:'none'}} to={`/product/${_id}`}>
          <h4>{name}</h4>
        </Link>
        <Ratting rating={rating} numReviews={numReviews}></Ratting>
        <div className="price">
            <strong>$<span  className="text-danger">{price}</span></strong>
          </div>
          {props.showAddToCart && (
          <Button
            onClick={() => props.handleAddProduct(props.pro)}
            className="buy"
            
          >
            <i className="fas fa-cart-plus">Add to Cart</i>
          </Button>
        )}
      </div>
    </div>
  );
};

export default MedibazarShop;
