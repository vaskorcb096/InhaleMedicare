import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Button2 from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddProduct";
import axios from "axios";
import swal from "sweetalert";
import toast,{ Toaster } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginRight: 0,
  },
}));
const notify = () =>toast.error('Please upload an image!');;

const AddProduct = () => {
  const { register } = useForm();

  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const handleBlur = (event) => {
    const newInfo = { ...info };
    console.log(event.target.name, event.target.value);
    newInfo[event.target.name] = event.target.value;
    //console.log(event.target.value);

    setInfo(newInfo);
  };
  const handleFileChange = (event) => {
    const newFile = event.target.files[0];

    console.log(newFile);
    setFile(newFile);
  };
  const handleCategorySubmit =async(event)=>{
    event.preventDefault();
    var categoryData = new FormData();
    categoryData.append("category", info.category);

    const res = await fetch("https://quiet-earth-03350.herokuapp.com/addcategory", {
      method: "POST",
      body: categoryData,
    });
    const data = res.json();
    if (res.status === 422) {
      return  window.alert("Sorry!", "Plz Filled The Category Properly!", "warning");
    } 
    if(data && res.status===201) {
      swal("Great", "You Added By Product Category!", "success");
    }
    
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file==="") {
      return notify();
  }
    console.log(info);
    var imageData = new FormData();
    imageData.append("file", file);
    imageData.append("name", info.name);
    imageData.append("price", info.price);
    imageData.append("countInStock", info.countInStock);
    imageData.append("brand", info.brand);
    imageData.append("Category", info.Category);
    imageData.append("numReviews", info.numReviews);
    imageData.append("description", info.description);
    console.log(imageData);
    

    const res = await fetch("https://quiet-earth-03350.herokuapp.com/addProduct", {
      method: "POST",
      body: imageData,
    });
    const data = res.json();
    if (res.status === 422) {
      return  window.alert("Sorry!", "Plz Filled The Prodcut Properly!", "warning");
    } else if(res.status===500) {
      swal("Sorry!", "Failed to Upload Image!", "error");
    }
    if(data && res.status===201) {
      swal("Great", "You Added By Product!", "success");
    }
  };

  const [addProduct, setAddProduct] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const handleAddProduct = () => {
    setAddProduct(true);
  };
  const handleAddCategory=()=>{
    setAddCategory(true);
    setAddProduct(false);
  }

  const classes = useStyles();
  return (
    <div className="container-fluid row ">
      <div  className=" vxx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
        <div className={classes.root}>
          <Button2
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon style={{ color: green[500] }}>add_circle</Icon>}
            onClick={handleAddProduct}
          >
            Add Product
          </Button2>
          <Button2
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon style={{ color: green[500] }}>add_circle</Icon>}
            onClick={handleAddCategory}
          >
            Add Category
          </Button2>
          <div>
            {addProduct && (
              <section className="addService">
                <Form method="POST" className="w-100">
                  <div
                    className="py-5 mx-auto mt-5 bg-white form-main"
                    style={{ borderRadius: "15px", maxWidth: "85rem" }}
                  >
                    <Form.Row className="justify-content-center">
                      <Form.Group as={Col} md={5} sm={12} className="mr-md-5">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Name of products
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("name", { required: true })}
                          placeholder="Enter name"
                          name="name"
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={5} sm={12}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Product Price
                        </Form.Label>
                        <Form.Control
                          style={{ maxWidth: "260px" }}
                          type="number"
                          onBlur={handleBlur}
                          name="price"
                          {...register("price", { required: true })}
                          placeholder="Enter the Products Price "
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={5} sm={12} className="mr-md-5">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Availabe Products
                        </Form.Label>
                        <Form.Control
                          type="number"
                          {...register("countInStock", { required: true })}
                          placeholder="Availabe Products "
                          name="countInStock"
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={5} sm={12}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Product brand
                        </Form.Label>
                        <Form.Control
                          style={{ maxWidth: "260px" }}
                          type="text"
                          name="brand"
                          {...register("brand", { required: true })}
                          placeholder="Enter the Brand Name "
                          onBlur={handleBlur}
                        />
                      </Form.Group>

                      <Form.Group as={Col} md={5} sm={12} className="mr-md-5">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          products Category
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("Category", { required: true })}
                          placeholder="Enter products Category"
                          name="Category"
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={5} sm={12}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          total number of Reviews
                        </Form.Label>
                        <Form.Control
                          style={{ maxWidth: "260px" }}
                          type="number"
                          name="numReviews"
                          {...register("price", { required: true })}
                          placeholder="Enter numReviews "
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md={5}
                        sm={12}
                        className="mr-md-5 mt-md-3"
                      >
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Product Description
                        </Form.Label>
                        <Form.Control
                          style={{ height: "10rem" }}
                          type="text"
                          as="textarea"
                          name="description"
                          {...register("description", { required: true })}
                          placeholder="Enter Product description"
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={5} sm={12} className="mt-md-3">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Add Product Image
                        </Form.Label>
                        <Button
                          as={"label"}
                          htmlFor="upload"
                          variant="outline-primary"
                          className="d-block p-2 upload-btn"
                        >
                          <FontAwesomeIcon
                            icon={faCloudUploadAlt}
                            className="mr-2"
                          />
                          Upload Image
                        </Button>
                        <Form.Control
                          hidden="hidden"
                          id="upload"
                          type="file"
                          name="file"
                          onChange={handleFileChange}
                          {...register("image")}
                          placeholder="Upload photo"
                        />
                      </Form.Group>
                    </Form.Row>
                    <div className="text-center mt-4">
                      <Button
                        onClick={handleSubmit}
                        type="submit"
                        className="submitBtn btn-main"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </Form>
              </section>
            )}
            {
              addCategory && !addProduct &&(
                <section className="addService">
                <Form method="POST" className="w-100">
                  <div
                    className="py-5 mx-auto mt-5 bg-white form-main"
                    style={{ borderRadius: "15px", maxWidth: "85rem" }}
                  >
                    <Form.Row className="justify-content-center">
                      
                      <Form.Group as={Col} md={12} sm={12} className="mr-md-5">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          products Category
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("Category", { required: true })}
                          placeholder="Enter products Category"
                          name="category"
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      
                     
              
                    </Form.Row>
                    <div className="text-center mt-4">
                      <Button
                        onClick={handleCategorySubmit}
                        type="submit"
                        className="submitBtn btn-main"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </Form>
              </section>
              )

            }
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default AddProduct;
