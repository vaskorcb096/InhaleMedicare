import React, { useContext } from "react";
import { Link } from "react-router-dom";
import images01 from "../../../images/icon/add-to-cart.png";
import images02 from "../../../images/icon/iconfinder_calendar-clock_299096 (1).png";
import images03 from "../../../images/icon/iconfinder_18_4698596.png";
import images04 from "../../../images/icon/list.png";
import "../Dashboard/Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import { UserContext } from "../../../App";
const MedibazarDashboard = () => {
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
  return (
    <div className="container-fluid row ">
      <div className=" vx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      {loggedInUser.admin ? (
        <>
          <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
            <section id="dashboard">
              <h1 className="text-center">MEDIBAZAR DASHBAORD </h1>
              <h1 className="mr-0">Product Overview</h1>
              <div className="dashboard_container  text-center">
                <div className="row  ">
                  <div className="col"></div>
                </div>

                <div style={{ color: "white" }} className="mt-3 row">
                  <div className="mb-3 col-lg-3 col-md-6 ">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="text-white styleddash "
                      to="/addProduct"
                    >
                      <div
                        style={{ backgroundColor: "#842d72" }}
                        className="card"
                      >
                        <div className="card-body d-flex align-items-center justify-content-center">
                          <div>
                            <img
                              className="p-2"
                              style={{ height: "90px" }}
                              src={images01}
                              alt=""
                            />
                          </div>

                          <h5 className="p-2">Add Product</h5>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="mb-3 col-lg-3 col-md-6 ">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="text-white styleddash "
                      to="/manageProduct"
                    >
                      <div
                        style={{ backgroundColor: "#ee316b" }}
                        className="card"
                      >
                        <div className="card-body d-flex align-items-center justify-content-center">
                          <div>
                            <img src={images03} alt="" />
                            <h2>78</h2>
                          </div>

                          <h5>Manage Product </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mb-3 col-lg-3 col-md-6 ">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="text-white styleddash "
                      to="/orderProduct"
                    >
                      <div
                        style={{ backgroundColor: "#ffb037" }}
                        className="card"
                      >
                        <div className="card-body d-flex align-items-center justify-content-center">
                          <div>
                            <img
                              style={{ height: "48px", width: "48px" }}
                              src={images04}
                              alt=""
                            />
                            <h2 className="todaypattient">96</h2>
                          </div>
                          <h5 className="p-1" style={{ marginLeft: "0.5em" }}>
                            {" "}
                            Order List
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mb-3 col-lg-3 col-md-6 ">
                    <div
                      style={{ backgroundColor: "#1f9589" }}
                      className="card"
                    >
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                          <img src={images02} alt="" />
                          <h2>09</h2>
                        </div>

                        <h5 className="p-1">Pending Order</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <div className="col-md-10 col-sm-12 col-lg-10">
            <section id="dashboard">
              <h1 className="text-center">MEDIBAZAR DASHBAORD </h1>
              <h1 className="mr-0">Product Overview</h1>
            
                <div className="d-flex justify-content-center row">
                <div className="mb-3 col-lg-3 col-md-6 ">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="text-white styleddash "
                      to="/orderProduct"
                    >
                      <div
                        style={{ backgroundColor: "#ffb037" }}
                        className="card"
                      >
                        <div className="card-body d-flex align-items-center justify-content-center">
                          <div>
                            <img
                              style={{ height: "48px", width: "48px" }}
                              src={images04}
                              alt=""
                            />
                            <h2 className="todaypattient">96</h2>
                          </div>
                          <h5 className="p-1" style={{ marginLeft: "0.5em" }}>
                            {" "}
                            Order List
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>


                  <div className="mb-3 col-lg-3 col-md-6 ">
                    <div
                      style={{ backgroundColor: "#1f9589" }}
                      className="card"
                    >
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                          <img src={images02} alt="" />
                          <h2>09</h2>
                        </div>

                        <h5 className="p-1">Pending Order</h5>
                      </div>
                    </div>
                  </div>
                  

                </div>
            
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default MedibazarDashboard;
