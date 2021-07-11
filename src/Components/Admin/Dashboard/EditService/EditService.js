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
const EditService = ({ editService, setEditService }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState(editService);
  const { register } = useForm();
  const newInfo = { ...editService };
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
      info.title === newInfo.title &&
      info.description === newInfo.description &&
      info.llink===newInfo.llink
    ) {
      //  toast.dismiss(loading);

      console.log("ashche");
      setEditService({});

      return toast.error("You haven't changed anything!");

      // return ;
    }
    var imageData = new FormData();
    imageData.append("file", file);
    imageData.append("title", info.title);
    imageData.append("description", info.description);
    imageData.append("llink", info.llink);
    console.log(imageData);
    axios.patch(`serviceUpdate/${editService._id}`, imageData).then((res) => {
      if (res.data) {
        console.log("AFS");
        setEditService(imageData);
        return swal(
          "Successfully updated",
          "Your Service has been successfully updated!",
          "success"
        );
      }
      setEditService({});
      swal("Failed!", "Something went wrong! Please try again.", "error", {
        dangerMode: true,
      });
    }).catch(error => {
      
      setEditService({});
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
                    Service Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    {...register("title", { required: true })}

                    placeholder="Enter Title"
                    name="title"
                    defaultValue={editService ? editService.title : ""}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group as={Col} md={5} sm={12}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    More Details
                  </Form.Label>
                  <Form.Control
                    style={{ maxWidth: "260px" }}
                    type="text"
                    {...register("llink", { required: true })}
                    placeholder="Enter the Link"
                    name="llink"
                    onBlur={handleBlur}
                    defaultValue={editService ? editService.llink : ""}
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
                    defaultValue={editService ? editService.description : ""}
                  onBlur={handleBlur}
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
export default EditService;
