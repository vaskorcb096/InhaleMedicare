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
const notify = () => toast.error("Please upload an image!");
const EditDoctor = ({ editDoctor, setEditDoctor }) => {
  console.log("EDIT DOCTOR")
  const [file, setFile] = useState("");
  const [info, setInfo] = useState(editDoctor);
  const { register } = useForm();
  const newInfo = { ...editDoctor };
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
      info.description === newInfo.description &&
      info.department===newInfo.department
    ) {
      //  toast.dismiss(loading);

      console.log("ashche");
      setEditDoctor({});

      return toast.error("You haven't changed anything!");

      // return ;
    }
    var imageData = new FormData();
    imageData.append("file", file);
    imageData.append("name", info.name);
    imageData.append("description", info.description);
    imageData.append("department", info.department);
    console.log(imageData);
    axios.patch(`doctorUpdate/${editDoctor._id}`, imageData).then((res) => {
      if (res.data) {
        console.log("AFS");
        setEditDoctor(imageData);
        return swal(
          "Successfully updated",
          "Doctors Profile has been successfully updated!",
          "success"
        );
      }
      setEditDoctor({});
      swal("Failed!", "Something went wrong! Please try again.", "error", {
        dangerMode: true,
      });
    }).catch(error => {
      
      setEditDoctor({});
      swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
  });;

    // var editData = new FormData();
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
         <section className="addService">
          <Form  method="POST"  className="w-100">
            <div
              className="py-5 mx-auto mt-5 bg-white form-main"
              style={{ borderRadius: "15px", maxWidth: "85rem" }}
            >
              <Form.Row className="justify-content-center">
                <Form.Group as={Col} md={5} sm={12} className="mr-md-5">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Doctor Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    {...register("name", { required: true })}
                    placeholder=" Doctor Name"
                    name="name"
                    onBlur={handleBlur}
                    defaultValue={editDoctor ? editDoctor.name : ""}
                  />
                </Form.Group>
                <Form.Group as={Col} md={5} sm={12}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Department
                  </Form.Label>
                  <Form.Control
                    style={{ maxWidth: "260px" }}
                    type="text"
                    {...register("department", { required: true })}
                    placeholder="Department Name"
                    name="department"
                    onBlur={handleBlur}
                    defaultValue={editDoctor ? editDoctor.department : ""}
                  />
                </Form.Group>
                <Form.Group as={Col} md={5} sm={12} className="mr-md-5 mt-md-3">
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
                    defaultValue={editDoctor ? editDoctor.description : ""}
                  />
                </Form.Group>
                <Form.Group as={Col} md={5} sm={12} className="mt-md-3">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Add Image
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
                <Button type="submit"
                 className="submitBtn btn-main"
                 onClick={handleSubmit}
                  >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </section>
      <Toaster />
    </div>
  );
};
export default EditDoctor;
