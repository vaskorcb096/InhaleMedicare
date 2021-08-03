import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import EditDoctor from "../EditDoctor/EditDoctor";

const ManageDoctor = () => {
  const [doctor, setDoctor] = useState([]);
  const [editDoctor, setEditDoctor] = useState({});
  useEffect(() => {
    axios.get("/getDoctor").then((res) => {
        setDoctor(res.data);
    });
  }, []);
 
  const handleDeleteDoctor= (id) => {
    // /deleteOneProduct/:id
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete  This Doctor?",
      icon: "warning",
      buttons: [true, "Yes"],
      dangerMode: true,
    }).then((wantDelete) => {
      if (wantDelete) {
        // const loading = toast.loading('Deleting...Please wait!');
        const removedDoctor = doctor.filter((item) => item._id !== id);
        axios
          .delete(`/deleteOneDoctor/${id}`)
          .then((res) => {
            if (res.data) {
                setDoctor(removedDoctor);
              return swal(
                "Successfully Deleted!",
                "Selected Doctor has been successfully deleted.",
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
        {editDoctor._id ? (
          <EditDoctor
          setEditDoctor={setEditDoctor}
            editDoctor={editDoctor}
          ></EditDoctor>
        ) : (
          <div className="container container-fluid">
            <h4>All Doctors</h4>

            <table class="contentTable sticky">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              {doctor.map((pro) => {
                return (
                  <tbody>
                    <tr>
                      <td>{pro.name}</td>
                      <td>{pro.department}</td>
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
                            onClick={() => setEditDoctor(pro)}
                          >
                            <FontAwesomeIcon icon={faEdit} className="mx-1" />
                          </Button>
                          <Button
                            variant="outline-danger"
                            className="p-1 ml-1 mb-0"
                            onClick={() => handleDeleteDoctor(pro._id)}
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

export default ManageDoctor;
