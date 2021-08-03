import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./ManageProduct.css";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import EditProduct from "../EditProduct/EditProduct";
import ChartProduct from "./ChartProduct";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState({});
  useEffect(() => {
    axios.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  const handleDeleteProduct = (id) => {
    // /deleteOneProduct/:id
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this Product?",
      icon: "warning",
      buttons: [true, "Yes"],
      dangerMode: true,
    }).then((wantDelete) => {
      if (wantDelete) {
        // const loading = toast.loading('Deleting...Please wait!');
        const removedProduct = products.filter((item) => item._id !== id);
        axios
          .delete(`/deleteOneProduct/${id}`)
          .then((res) => {
            if (res.data) {
              setProducts(removedProduct);
              return swal(
                "Successfully Deleted!",
                "Your Product has been successfully deleted.",
                "success"
              );
            }
            swal(
              "Failed!",
              "Something went wrong! Please try again.",
              "error",
              { dangerMode: true }
            );
          })
          .catch((err) => {
            console.log(err);

            swal(
              "Failed!",
              "Something went wrong! Please try again.",
              "error",
              { dangerMode: true }
            );
          });
      }
    });
  };

  return (
   
    <div className="container-fluid row ">
     
      <div className=" vxx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
    
      
      
        {editProduct._id ? (
          <EditProduct
            setEditProduct={setEditProduct}
            editProduct={editProduct}
          ></EditProduct>
        ) : (
          
          <div className="container container-fluid">
              <ChartProduct></ChartProduct>
            <h4>All Products</h4>

            <table class="contentTable sticky">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>countInStoc</th>
                  <th>numReviews</th>
                  <th>description</th>
                  <th>image</th>
                  <th>Action</th>
                </tr>
              </thead>
              {products.map((pro) => {
                return (
                  <tbody>
                    <tr>
                      <td>{pro.name}</td>
                      <td>{pro.Category}</td>
                      <td>{pro.price}</td>
                      <td>{pro.brand}</td>
                      <td>{pro.countInStock}</td>
                      <td>{pro.numReviews}</td>
                      <td>{pro.description.slice(0, 15)}....</td>
                      <td>
                        <img
                         style={{height:'50px',width:'50px'}}
                          className="img-fluid"
                          src={`https://quiet-earth-03350.herokuapp.com/${pro.image}`}
                          alt={pro.name}
                        />
                      </td>
                      <td className="text-center">
                        <div className="d-flex flex-row">
                          <Button
                            variant="outline-success"
                            className="p-1 mr-1 mb-0"
                            onClick={() => setEditProduct(pro)}
                          >
                            <FontAwesomeIcon icon={faEdit} className="mx-1" />
                          </Button>
                          <Button
                            variant="outline-danger"
                            className="p-1 ml-1 mb-0"
                            onClick={() => handleDeleteProduct(pro._id)}
                          >
                            <FontAwesomeIcon icon={faTrash} className="mx-1" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default ManageProduct;
