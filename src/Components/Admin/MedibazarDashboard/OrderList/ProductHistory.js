import React from "react";

const ProductHistory = (props) => {
  console.log("productHistroy", props);
  return (
    <div className="p-3">
      <div className="row card-1  Item-inside">
        <div className="col-12 col-md-12 col-lg-4 img-div">
          <img
            src={`https://quiet-earth-03350.herokuapp.com/${props.pro.image}`}
            alt="menupIc"
            className="img-fluid cart "
          />
        </div>
        <div className="col-12 col-md-12 col-lg-8">
          <div className="main-title pt-4 pb-3">
            <h1>{props.pro.name}</h1>

            <p>{props.pro.description}</p>
            <p>{props.pro.count} Product are Buy</p>
          </div>
          <div className="menu-price-book">
            <div className="price-book-divide d-flex justify-content-between">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHistory;
