import React, { useContext } from "react";
import { Link } from "react-router-dom";
import images01 from "../../../images/icon/iconfinder_cmyk-04_906567 (2).png";
import images02 from "../../../images/icon/iconfinder_calendar-clock_299096 (1).png";
import images03 from "../../../images/icon/iconfinder_18_4698596.png";
import images04 from "../../../images/icon/community.png";
import images05 from "../../../images/icon/work-in-progress.png";
import images06 from "../../../images/icon/wrench.png";
import images07 from "../../../images/icon/doctor.png";
import images08 from "../../../images/icon/contacts.png";
import images09 from "../../../images/icon/medical-history.png";
import images10 from "../../../images/icon/improve.png";
import images11 from "../../../images/icon/medical-kit.png";
import "./Dashboard.css";
import { UserContext } from "../../../App";
import ProfilePopper from "../../ProfilePopper/ProfilePopper";

const Dashboard = () => {
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
    <>
      <section id="dashboard">
        <h1 className="text-center">INHALE CARE </h1>

        <div className="dashboard_container  text-center">
          <div className="row  ">
            <div className="col"></div>
          </div>

          <div style={{ color: "white" }} className="mt-3 row">
            <div className="mb-3 col-lg-3 col-md-6 ">
              <Link
                style={{ textDecoration: "none" }}
                className="text-white styleddash "
                to="/totalAppointments"
              >
                <div style={{ backgroundColor: "#842d72" }} className="card">
                  <div className="card-body d-flex  align-items-center justify-content-center">
                    <div>
                      <img
                        className="p-1"
                        style={{ height: "48px" }}
                        src={images10}
                        alt=""
                      />
                      <h3 className="p-1">77</h3>
                    </div>

                    <h5 className="p-1">Total Appointments</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mb-3 col-lg-3 col-md-6 ">
              <Link
                style={{ textDecoration: "none" }}
                className="text-white styleddash "
                to="/todayAppointments"
              >
                <div style={{ backgroundColor: "#ee316b" }} className="card">
                  <div className="card-body d-flex">
                    <div>
                      <img src={images03} alt="" />
                      <h2>78</h2>
                    </div>

                    <h5 className="pt-3">Today's Appointments </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mb-3 col-lg-3 col-md-6 ">
              <Link
                style={{ textDecoration: "none" }}
                className="text-white styleddash "
                to="/successfullAppointments"
              >
                <div style={{ backgroundColor: "#ffb037" }} className="card">
                  <div className="card-body d-flex">
                    <div>
                      <img src={images01} alt="" />
                      <h2 className="todaypattient">96</h2>
                    </div>

                    <h5 className="pt-3" style={{ marginLeft: "0.5em" }}>
                      Successfull Appointments
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            {loggedInUser.admin && (
              <>
            <div className="mb-3 col-lg-3 col-md-6 ">
              <Link
                style={{ textDecoration: "none" }}
                className="text-white styleddash "
                to="/pendingAppointments"
              >
                <div style={{ backgroundColor: "#1f9589" }} className="card">
                  <div className="card-body d-flex ">
                    <div>
                      <img src={images02} alt="" />
                      <h2>09</h2>
                    </div>

                    <h5 className="pt-3">Pending Appointments</h5>
                  </div>
                </div>
              </Link>
            </div>
           
                <div className="mb-3 col-lg-3 col-md-6 ">
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-white styleddash "
                    to="/serviceSection"
                  >
                    <div
                      style={{ backgroundColor: "#293250" }}
                      className="card"
                    >
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                          <img
                            className="p-2"
                            style={{ height: "90px" }}
                            src={images11}
                            alt=""
                          />
                        </div>

                        <h5 className="pt-3">Add Service</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="mb-3 col-lg-3 col-md-6 ">
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-white styleddash "
                    to="/manageService"
                  >
                    <div
                      style={{ backgroundColor: "#6DD47E" }}
                      className="card"
                    >
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                          <img
                            className="p-2"
                            style={{ height: "90px" }}
                            src={images04}
                            alt=""
                          />
                        </div>

                        <h5> Manage Service</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            )}

            <div className="mb-3 col-lg-3 col-md-6 ">
              <Link
                style={{ textDecoration: "none" }}
                className="text-white styleddash "
                to="/inhaleReview"
              >
                <div  style={{ backgroundColor: "#6b7b8c" }} className="card">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="p-2"
                        style={{ height: "90px" }}
                        src={images09}
                        alt=""
                      />
                    </div>

                    <h5 className="p-32">Inhale Review</h5>
                  </div>
                </div>
              </Link>
            </div>

          
            {loggedInUser.admin && (
              <>
                <div className="mb-3 col-lg-3 col-md-6 ">
                <Link  style={{ textDecoration: "none" }}
                className="text-white styleddash "
                to="/showContact">
                  <div style={{ backgroundColor: "#ff6e40" }} className="card">
                    <div className="card-body d-flex align-items-center justify-content-center">
                      <div>
                        <img
                          className="p-2"
                          style={{ height: "90px" }}
                          src={images08}
                          alt=""
                        />
                      </div>

                      <h5 className="p-2">Contact Us</h5>
                    </div>
                  </div>
                  </Link>
                  
                </div>

                <div className="mb-3 col-lg-3 col-md-6 ">
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-white styleddash "
                    to="/addDoctor"
                  >
                    <div
                      style={{ backgroundColor: "#210070" }}
                      className="card"
                    >
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                          <img
                            className="p-2"
                            style={{ height: "90px" }}
                            src={images07}
                            alt=""
                          />
                        </div>

                        <h5 className="p-2">Add Doctor</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="mb-3 col-lg-3 col-md-6 ">
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-white styleddash "
                    to="/manageDoctor"
                  >
                    <div
                      style={{ backgroundColor: "#00E1D9" }}
                      className="card"
                    >
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                          <img
                            className="p-1"
                            style={{ height: "90px" }}
                            src={images05}
                            alt=""
                          />
                        </div>

                        <h5>Manage Doctor</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
