import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Sidebar from "../../Sidebar/Sidebar";
import swal from "sweetalert";
import toast,{ Toaster } from "react-hot-toast";

const AddDoctor = () => {

  const { register } = useForm();
  const notify = () =>toast.error('Please upload an image!');

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
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file==="") {
      return notify();
  }
    console.log(info);
    var imageData = new FormData();
    imageData.append("file", file);
    imageData.append("name", info.name);
    imageData.append("department", info.department);
    imageData.append("description", info.description);
    console.log(imageData);
    

    const res = await fetch("https://quiet-earth-03350.herokuapp.com/addDoctor", {
      method: "POST",
      body: imageData,
    });
    const data = res.json();
    if (res.status === 422) {
      return  window.alert("Sorry!", "Plz Filled The Doctor  Information Properly!", "warning");
    } else if(res.status===500) {
      swal("Sorry!", "Failed to Upload Image!", "error");
    }
    if(data && res.status===201) {
      return swal("Great", "You Added One Doctor!", "success");
    }
  };

 /* const onSubmit = async (data) => {
    console.log("hello");
    if (!editService && !data.image[0]) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!');
        let imageURL = editService ? editService.image : "";

        if (!editService || (editService && data.image[0])) {
            const imageData = new FormData();
            imageData.set('key', '08d5da1c81cc5c52012f0b930505d031');
            imageData.append('image', data.image[0]);
            try {
                const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
                imageURL = res.data.data.display_url;
            } catch (error) {
                toast.dismiss(loading);
                return toast.error('Failed to upload the image!');
            }
        }

        const serviceInfo = {
            title: data.title,
            description: data.description,
            price: data.price,
            image: imageURL
        }

        if (editService) {
            if (restrictPermission(editService._id)) {
                toast.dismiss(loading);
                setEditService({});
                return swal("Permission restriction!", "As a test-admin, you don't have permission to edit 6 core services. But you can edit your added services.", "info");
            }
            if (
                data.title === editService.title &&
                data.price === editService.price &&
                imageURL === editService.image &&
                data.description === editService.description
            ) {
                toast.dismiss(loading);
                setEditService({});
                return toast.error("You haven't changed anything!");
            }
            axios.patch(`https://gerez-server.herokuapp.com/update/${editService._id}`, serviceInfo)
                .then(res => {
                    toast.dismiss(loading);
                    if (res.data) {
                        setEditService(serviceInfo);
                        return swal("Successfully updated", "Your service has been successfully updated!", "success");
                    }
                    setEditService({});
                    swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                })
                .catch(error => {
                    toast.dismiss(loading);
                    setEditService({});
                    swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                });
            return;
        }

        axios.post('https://gerez-server.herokuapp.com/addService', serviceInfo)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Successfully Uploaded", "Your new service has been successfully added.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            });
            
  };
  */

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
              
            </div>
            <div className="text-center mt-4">
                <Button type="submit"
                 className="submitBtn btn-main"
                 onClick={handleSubmit}
                  >
                  Submit
                </Button>
              </div>
          </Form>
        </section>
      </div>
      <Toaster/>
    </div>
  );
};

export default AddDoctor;
