import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import EditService from "../EditService/EditService";

const ManageService = () => {
  const [service, setService] = useState([]);
  const [editService, setEditService] = useState({});
  useEffect(() => {
    axios.get("/servicedata").then((res) => {
        setService(res.data);
    });
  }, []);
  console.log(service);
  const handleDeleteService = (id) => {
    // /deleteOneProduct/:id
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this Service?",
      icon: "warning",
      buttons: [true, "Yes"],
      dangerMode: true,
    }).then((wantDelete) => {
      if (wantDelete) {
        // const loading = toast.loading('Deleting...Please wait!');
        const removedService = service.filter((item) => item._id !== id);
        axios
          .delete(`/deleteOneService/${id}`)
          .then((res) => {
            if (res.data) {
                setService(removedService);
              return swal(
                "Successfully Deleted!",
                "Your Service has been successfully deleted.",
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
        {editService._id ? (
          <EditService
            setEditService={setEditService}
            editService={editService}
          ></EditService>
        ) : (
          <div className="container container-fluid">
            <h4>All Service</h4>

            <table class="contentTable sticky">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Link</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              {service.map((pro) => {
                return (
                  <tbody>
                    <tr>
                      <td>{pro.title}</td>
                     
                      <td>{pro.description.slice(0, 15)}....</td>
                      <td>{pro.llink}</td>
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
                            onClick={() => setEditService(pro)}
                          >
                            <FontAwesomeIcon icon={faEdit} className="mx-1" />
                          </Button>
                          <Button
                            variant="outline-danger"
                            className="p-1 ml-1 mb-0"
                            onClick={() => handleDeleteService(pro._id)}
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

export default ManageService;
