import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import "./MedibazarShop.css";
import Ratting from "./Ratting/Ratting";
import { Link } from "react-router-dom";
const MedibazarShop = (props) => {
  console.log(props);

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
  return (
    <div>
      <div className=" shopcard card ">
        <Link to={`/product/${_id}`}>
          <img
            className="shopimg medium img-fluid"
            src={`http://localhost:5000/${image}`}
            alt={name}
          />
        </Link>

        {props.showDescription && <p>{props.pro.description}</p>}
        <div className="shopcard-body  card-body">
          <Link to={`/product/${_id}`}>
            <h4>{name}</h4>
          </Link>
          <Ratting rating={rating} numReviews={numReviews}></Ratting>
          <div className="price">
            <strong>${price}</strong>
          </div>
        </div>

        {props.showAddToCart && (
          <Button
            onClick={() => props.handleAddProduct(props.pro)}
            className="cart-btn"
            variant="contained"
            color="secondary"
          >
            <i className="fas fa-cart-plus">Add to Cart</i>
          </Button>
        )}
      </div>
    </div>
  );
};

export default MedibazarShop;
