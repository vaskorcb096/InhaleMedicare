import React, { useState } from 'react';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import {Button,Col, Form } from "react-bootstrap";
import Button2 from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import Navbar from '../../Home/Navbar/Navbar';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      marginRight: 0,
    },
  }));

const EditProfile = ({editProfile,setEditProfile}) => {

  const [file, setFile] = useState("");
  const [info, setInfo] = useState(editProfile);
  const { register } = useForm();
  const newInfo = { ...editProfile };
  const handleBlur = (event) => {
    
    console.log(event.target.name, "sdf dd ",event.target.value);
    info[event.target.name] = event.target.value;
    console.log(event.target.value);

    //setInfo(newInfo);
   // console.log("there arre ",info );
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
      info.user_name === newInfo.user_name &&
      info.user_profession === newInfo.user_profession &&
      info.parmanent_address===newInfo.parmanent_address &&
      info.current_address===newInfo.current_address && 
      info.user_details===newInfo.user_details
    ) {
      //  toast.dismiss(loading);

      console.log("ashche");
      setEditProfile({});

      return toast.error("You haven't changed anything!");

      // return ;
    }
    else if(file==="") {
      toast.error("You Must Upload An Image!");
    }
    else {
      var imageData = new FormData();
      imageData.append("file", file);
      imageData.append("user_name", info.user_name);
      imageData.append("user_profession", info.user_profession);
      imageData.append("parmanent_address", info.parmanent_address);
      imageData.append("current_address", info.current_address);
      imageData.append("user_details", info.user_details);
      console.log(imageData);
      axios.patch(`profileUpdate/${editProfile.email}`, imageData).then((res) => {
        if (res.data) {
          console.log("AFS");
          setEditProfile(imageData);
          return swal(
            "Successfully updated",
            "Your Profile has been successfully updated!",
            "success"
          );
        }
           setEditProfile({});
        swal("Failed!", "Something went wrong! Please try again.", "error", {
          dangerMode: true,
        });
      }).catch(error => {
        
        setEditProfile({});
        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
    });;
  
      // var editData = new FormData();
    }
    
  
    
  };


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar></Navbar>
        <section className="editProfile">
           <Form  method="POST"  className="w-100">
             <div
               className="py-5 mx-auto mt-5 bg-white form-main"
               style={{ borderRadius: "15px", maxWidth: "85rem" }}
             >
               <Form.Row className="justify-content-center">
                 <Form.Group as={Col} md={5} sm={12} className="mr-md-5">
                   <Form.Label style={{ fontWeight: "bold" }}>
                     User Name
                   </Form.Label>
                   <Form.Control
                     type="text"
                     {...register("user_name", { required: true })}
 
                     placeholder="User Name"
                     name="user_name"
                    defaultValue={editProfile.user_name ? editProfile.user_name : ""}
                     onBlur={handleBlur}
                   />
                 </Form.Group>
                 <Form.Group as={Col} md={5} sm={12}>
                   <Form.Label style={{ fontWeight: "bold" }}>
                     User Profession
                   </Form.Label>
                   <Form.Control
                     style={{ maxWidth: "260px" }}
                     type="text"
                     {...register("user_profession", { required: true })}
                     placeholder="Profession"
                     name="user_profession"
                  
                    defaultValue={editProfile.user_profession? editProfile.user_profession : ""}
                    onBlur={handleBlur}
                   />
                 </Form.Group>
                 <Form.Group as={Col} md={5} sm={12} className="mr-md-5">
                   <Form.Label style={{ fontWeight: "bold" }}>
                     Parmanent Address
                   </Form.Label>
                   <Form.Control
                     type="text"
                    {...register("parmanent_address", { required: true })}
 
                     placeholder="Parmanent Address "
                     name="parmanent_address"
                   defaultValue={editProfile.parmanent_address ? editProfile.parmanent_address : ""}
                    onBlur={handleBlur}
                   />
                 </Form.Group>
                 <Form.Group as={Col} md={5} sm={12}>
                   <Form.Label style={{ fontWeight: "bold" }}>
                   current Address
                   </Form.Label>
                   <Form.Control
                     style={{ maxWidth: "260px" }}
                     type="text"
                     {...register("current_address", { required: true })}
                     placeholder="Current Address"
                     name="current_address"
                    onBlur={handleBlur}
                    defaultValue={editProfile.current_address ? editProfile.current_address : ""}
                   />
                 </Form.Group>
                 <Form.Group as={Col} md={5} sm={12} className="mr-md-5 mt-md-3">
                   <Form.Label style={{ fontWeight: "bold" }}>
                     User Details
                   </Form.Label>
                   <Form.Control
                     style={{ height: "10rem" }}
                     type="text"
                     as="textarea"
                     {...register("user_details", { required: true })}
                     placeholder="Details"
                     name="user_details"
                     defaultValue={editProfile.user_details ? editProfile.user_details : ""}
                   onBlur={handleBlur}
                   />
                 </Form.Group>
                 <Form.Group as={Col} md={5} sm={12} className="mt-md-3">
                   <Form.Label style={{ fontWeight: "bold" }}>
                     Change Image
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
                     {...register("image")}
                     placeholder="Upload photo"
                     name="file"
                     onChange={handleFileChange}
                   />
                 </Form.Group>
               </Form.Row>
               <div className="text-center mt-4">
                 <Button2 type="submit"
                 variant="contained"
                 color="secondary"
                 // className="submitBtn btn-main"
                  onClick={handleSubmit}
                   >
                   Submit
                 </Button2>
               </div>
             </div>
           </Form>
         </section>
     
       <Toaster />
     </div>
    );
};

export default EditProfile;