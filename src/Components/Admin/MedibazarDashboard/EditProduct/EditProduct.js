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
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginRight: 0,
  },
}));

const EditProduct = ({ editProduct, setEditProduct }) => {
  console.log("EIDT" ,editProduct);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState(editProduct);
  const { register } = useForm();
  const newInfo = { ...editProduct };
  const handleBlur = (event) => {
    
    console.log(event.target.name, "sdf dd ",event.target.value);
    info[event.target.name] = event.target.value;
    //console.log(event.target.value);

    //setInfo(newInfo);
  };
  const handleFileChange = (event) => {
  //  const loading = toast.loading("Uploading...Please wait!");
    const newFile = event.target.files[0];

    console.log(newFile);
    setFile(newFile);
  };

  const handleSubmit = async (event) => {
    console.log("dfg", info);
    event.preventDefault();
    console.log(info, " Hi ", newInfo);

    if (
      file === "" &&
      info.name === newInfo.name &&
      info.Category === newInfo.Category &&
      info.price === newInfo.price &&
      info.countInStock === newInfo.countInStock &&
      info.brand === newInfo.brand &&
      info.numReviews === newInfo.numReviews &&
      info.description === newInfo.description
    ) {
      //  toast.dismiss(loading);

      console.log("ashche");
      setEditProduct({});

      return toast.error("You haven't changed anything!");

      // return ;
    }
    else if(file === "") {
      toast.error("Plz Upload An Image");
    }
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
    axios.patch(`productUpdate/${editProduct._id}`, imageData).then((res) => {
      if (res.data) {
        console.log("AFS");
        setEditProduct(imageData);
        return swal(
          "Successfully updated",
          "Your Product has been successfully updated!",
          "success"
        );
      }
      setEditProduct({});
      swal("Failed!", "Something went wrong! Please try again.", "error", {
        dangerMode: true,
      });
    }).catch(error => {
      
      setEditProduct({});
      swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
  });;

    // var editData = new FormData();
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className="addService">
        <Form className="w-100">
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
                  // defaultValue={editProduct ? editProduct.name}
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter name"
                  name="name"
                  defaultValue={editProduct ? editProduct.name : ""}
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
                  name="price"
                  defaultValue={editProduct ? editProduct.price : ""}
                  onBlur={handleBlur}
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
                  name="countInStock"
                  defaultValue={editProduct ? editProduct.countInStock : ""}
                  {...register("countInStock", { required: true })}
                  placeholder="Availabe Products "
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
                  defaultValue={editProduct ? editProduct.brand : ""}
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
                  defaultValue={editProduct ? editProduct.Category : ""}
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
                  defaultValue={editProduct ? editProduct.numReviews : ""}
                  {...register("price", { required: true })}
                  placeholder="Enter numReviews "
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group as={Col} md={5} sm={12} className="mr-md-5 mt-md-3">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Product Description
                </Form.Label>
                <Form.Control
                  style={{ height: "10rem" }}
                  type="text"
                  as="textarea"
                  name="description"
                  defaultValue={editProduct ? editProduct.description : ""}
                  {...register("description", { required: true })}
                  placeholder="Enter Product description"
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group as={Col} md={5} sm={12} className="mt-md-3">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Update Product Image
                </Form.Label>
                <Button
                  as={"label"}
                  htmlFor="upload"
                  variant="outline-primary"
                  className="d-block p-2 upload-btn"
                >
                  <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />
                  Upload Image
                </Button>
                <Form.Control
                  hidden="hidden"
                  id="upload"
                  type="file"
                  name="file"
                  
                  // onClick={handleFileChange}

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
                Update
              </Button>
            </div>
          </div>
        </Form>
      </section>
      <Toaster />
    </div>
  );
};
export default EditProduct;
