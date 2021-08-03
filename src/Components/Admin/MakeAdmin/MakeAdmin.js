
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import toast,{ Toaster } from "react-hot-toast";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {

  const { register } = useForm();
  const notify = () =>toast.error('Please upload an image!');
  const [info, setInfo] = useState('');
  const handleBlur = (event) => {
    const newInfo = { ...info };
    console.log(event.target.name, event.target.value);
    newInfo[event.target.name] = event.target.value;
    //console.log(event.target.value);

    setInfo(newInfo);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();


    console.log(info);
    var imageData = new FormData();
    imageData.append("email", info.email);

    

    const res = await fetch("https://quiet-earth-03350.herokuapp.com/addAdmin", {
      method: "POST",
      body: imageData,
    });
    const data = res.json();
    if (res.status === 422) {
      return  window.alert("Sorry!", "Plz Filled The Admin Email   Properly!", "warning");
    } 
    if(data && res.status===201) {
      swal("Great", "You Added  Another Admin!", "success");
    }
  };

  return (
    <div className="container-fluid row ">
      <div className=" vx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
        <section className="addService">
          <Form  method="POST"  className="w-100">
            <div
              className="py-5 mx-auto mt-5 bg-white form-main"
              
            >
              <Form.Row className="justify-content-center">
                <Form.Group as={Col} md={12} sm={12}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Admin Email
                  </Form.Label>
                  <Form.Control
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="Admin Email"
                    name="email"
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <div className="text-center mt-4 ">
                <Button type="submit"
                 className="mr-3 submitBtn btn-main"
                 onClick={handleSubmit}
                  >
                 Add
                </Button>
                </div>
              </Form.Row>
              
            
             
            </div>
          </Form>
        </section>
      </div>
      <Toaster/>
    </div>
  );
};

export default MakeAdmin;
