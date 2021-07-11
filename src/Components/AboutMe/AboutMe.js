
import Paper from "@material-ui/core/Paper";
import React,{useContext, useEffect,useState} from "react";
import profile1 from "../../images/doctors profile/doctor-pp1.jpg";
import Navbar from "../Home/Navbar/Navbar";
import {Link} from 'react-router-dom';
import "./AboutMe.css";
import { UserContext } from "../../App";
const AboutMe = () => {
  const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData]=useContext(UserContext);
  console.log(loggedInUser);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container doctorsProfile">
        <Paper square>
          <form method="GET">
            <div className="row">
              <div id="outer" className="col-md-4">
                <div className="userpp">
                  <img
                    className="imgProfile img-fluid"
                    src={profile1}
                    alt="user profile"
                  ></img>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h4 style={{Color:'#0666a3'}}id="profileName">Mr. 
                  {
                  loggedInUser.user_name?loggedInUser.user_name :loggedInUser.name}
                  </h4>
                  <h6>Junior Software Enginner</h6>
                  <p className="profile ratting mt-3 mb-5">
                    Rankings: <span>1/10</span>{" "}
                  </p>

                  <ul className="nav nav-tabs " role="tablist">
                    <li class="nav-item">
                      <Link
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        to="/home"
                        role="tab"
                      >
                        Personal Imformation
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        id="profile-tab"
                        data-toggle="tab"
                        to="/profile"
                        role="tab"
                      >
                        Contact Information
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active "
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade "
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <lalbel>User ID</lalbel>
                      </div>
                      <div className="col-md-6">
                        <p>12345678978854</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="editProfileButton"
                  name="btnAddAndMore"
                  value="Edit Profile"
                ></input>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default AboutMe;
