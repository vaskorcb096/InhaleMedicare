import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "../../Sidebar/Sidebar";
import { UserContext } from "../../../../App";

const InhaleReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [
    loggedInUser,
    setLoggedInUser,
    currentStep,
    setStep,
    userData,
    setUserData,
    finalData,
    setFinalData,
    submitData,
  ] = useContext(UserContext);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const handleBlur = (event) => {
    const newInfo = { ...info };
    console.log(event.target.name, event.target.value);
    newInfo[event.target.name] = event.target.value;
    //console.log(event.target.value);

    setInfo(newInfo);
  };

  const onSubmit = async (event) => {
    var today = new Date();
    var year = today.getFullYear();
    var mes = today.getMonth() + 1;
    if(mes===1)mes="Januray";
    else if(mes===2)mes="February";
    else if(mes===3)mes="March";
    else if(mes===4)mes="April";
    else if(mes===5)mes="May";
    else if(mes===6)mes="June";
    else if(mes===7)mes="July";
    else if(mes===8)mes="Auguest";
     else if(mes===9)mes="September";
      else if(mes===10)mes="Octobor";
      else if(mes===11)mes="November";
      else if(mes===12)mes="December";
      console.log(mes);


    var dia = today.getDate();
    var fecha = dia +" " +mes +" " + year;
    console.log(fecha);
    event.preventDefault();
    console.log(info);
    var imageData = new FormData();
    imageData.append("title", info.title);
    imageData.append("description", info.description);

    imageData.append(
      "image",
      loggedInUser.image || "https://i.ibb.co/5GzXkwq/user.png"
    );
    imageData.append("user_name", loggedInUser.user_name);
    imageData.append("date",fecha);
    console.log(imageData);

    const res = await fetch("https://quiet-earth-03350.herokuapp.com/addReview", {
      method: "POST",
      body: imageData,
    });
    const data = res.json();
    if (res.status === 422) {
      return window.alert(
        "Sorry!",
        "Plz Filled The  Information Properly!",
        "warning"
      );
    }
    if (data && res.status === 201) {
      swal("Thank you", "You are add your Review!", "success");
    }
  };
  const [rev,setRev]=useState([]);
   useEffect(()=>{
    fetch('getReview')
    .then((data)=>data.json())
    .then(item=>setRev(item));
   },[])
  return (
    <div className="container-fluid row ">
      <div className=" vx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
        {loggedInUser.admin?(
          <>
             
              <div className="row">
              <h2 className="pl-5">Reviews Information</h2>
                 
               {
                  
                   rev.map((item)=>
                   
                     <div  className="col-12 pl-5 pr-5 pt-5">
                    
                              <div className="card pb-1">
                                  <div className="d-flex justify-content-between">
                                  <img className="p-1 rounded-circle" src={item.image}  alt="" width="80"/>
                                  <p className="pr-2"><strong>Email:</strong>{item.date}</p>
                                  </div>
                                  
                              <h5 className="pl-3 pr-3 text-danger">{item.user_name}</h5>
                              <h6 className=" text-primary pl-3 pr-3">{item.description}</h6>
                                <p className="pl-3 pr-3">{item.description}</p>
                                
                             
                              </div>
                              </div>   
                  
                 )
               }
              
           </div>
           </>
        ):(
          <section className="addService">
          <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
            <div
              className="mx-auto mt-5 bg-white form-main"
              style={{ borderRadius: "15px" }}
            >
              <Form.Row className="justify-content-center">
                <Form.Group as={Col} md={10} sm={12}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Review Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Title"
                    name="title"
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group as={Col} md={10} sm={12}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Description
                  </Form.Label>
                  <Form.Control
                    style={{ height: "10rem" }}
                    type="text"
                    as="textarea"
                    {...register("description", { required: true })}
                    placeholder="Enter Description"
                    name="description"
                    onBlur={handleBlur}
                  />
                </Form.Group>
              </Form.Row>
            </div>
            <div className="text-center mt-4">
              <Button
                type="submit"
                className="submitBtn btn-main"
                onClick={onSubmit}
              >
                Submit
              </Button>
            </div>
          </Form>
        </section>

        )}
       
      </div>
    </div>
  );
};

export default InhaleReview;
