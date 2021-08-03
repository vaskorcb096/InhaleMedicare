import axios from "axios";
import React, { useEffect, useState } from "react";
import "./OrderDetails.css";
import ProductHistory from "./ProductHistory";

const OrderDetails = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const { editOrders, setEditOrders } = props;
  useEffect(() => {
    const keys = Object.keys(editOrders.products[0]);
    const value = Object.values(editOrders.products[0]);
    console.log("Keys", value);
    if (products.length > 0) {
      console.log(products);
      let j=0;
      const previousCart = keys.map((existingKey) => {
        const product = products.find((pd) => pd._id === existingKey);
        product.count=value[j];
        j++;
        
        return product;
      });
      setCart(previousCart);
    }
  }, [products]);

  console.log("sadf", cart);

  return (
    <div>
      <div class="container-fluid px-1 px-md-2 px-lg-4  mx-auto pb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11">
            <div class="card cardx border-0">
              <div class="row justify-content-center">
                <h3 class="mb-4">Order Details</h3>
              </div>
              <div class="row">
                <div class="col-sm-7 border-line pb-3">
                  <div class="form-group">
                    <h4>Total Product:{cart.length}</h4>
                    {/* start */}
                    {cart.map((pro) => (
                      <ProductHistory pro={pro} key={pro._id} ></ProductHistory>
                    ))}
                    {/* end */}
                  </div>
                </div>
                <div class="col-sm-5 text-sm-center justify-content-center pt-4 pb-4">
                  {" "}
                  <small class="text-sm text-muted">Customer ID</small>
                  <h5 class="mb-3">{editOrders.shipment[0]._id}</h5>{" "}

                  <small class="text-sm text-muted">Customer Name</small>
                  <h5 class="mb-3">{editOrders.shipment[0].name}</h5>{" "}

                  <small class="text-sm text-muted">Customer Email</small>
                  <h5 class="mb-3">{editOrders.shipment[0].email}</h5>{" "}

                  <small class="text-sm text-muted">Customer Address</small>
                  <h5 class="mb-3">{editOrders.shipment[0].address}</h5>{" "}

                  <small class="text-sm text-muted">Customer phone</small>
                  <h5 class="mb-3">{editOrders.shipment[0].phone}</h5>{" "}

                
                  <small class="text-sm text-muted">Payment amount</small>
                  <div class="row px-3 justify-content-sm-center">
                    <h2 class="">
                      <span class="text-md font-weight-bold mr-2">$</span>
                      <span class="text-danger">{editOrders.productPrice}</span>
                    </h2>
                  </div>{" "}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
