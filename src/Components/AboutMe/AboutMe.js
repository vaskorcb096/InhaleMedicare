
import Paper from "@material-ui/core/Paper";
import React,{useContext, useEffect,useState} from "react";
import profile1 from "../../images/doctors profile/doctor-pp1.jpg";
import Navbar from "../Home/Navbar/Navbar";
import {Link} from 'react-router-dom';
import "./AboutMe.css";
import { UserContext } from "../../App";
import axios from "axios";
import { Button } from "@material-ui/core";
import EditProfile from "./EditProfile/EditProfile";
const AboutMe = () => {

 

  const [aboutMe,setAboutMe]=useState([]);
  const [editProfile,setEditProfile]=useState({});
  useEffect(()=>{
    console.log("dg");
    axios.get("/getAboutMe").then((res)=>{
      setAboutMe(res.data);
    });
  },[]);
  const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData]=useContext(UserContext);
  console.log(loggedInUser);

  console.log("Aboutme",aboutMe);
  
  const specificUser=aboutMe.filter((item)=>item.email===loggedInUser.email);
 
  console.log("sf",loggedInUser);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container doctorsProfile">
        <Paper square>
         
          {editProfile.email?(
            <EditProfile editProfile={editProfile}
            setEditProfile={setEditProfile}>

            </EditProfile>
          ):(
            <div className="row">
             <div id="outer" className="col-md-4">
               <div className="userpp">
                {specificUser[0]?(
                    <img
                    className="imgProfile img-fluid"
                    src={`https://quiet-earth-03350.herokuapp.com/${specificUser[0].image}`}
                    alt="user profile"
                  ></img>

                ):loggedInUser.image?( <img
                  className="imgProfile img-fluid"
                  src={profile1}
                  alt="user profile"
                ></img>):(
                  <img
                  className="imgProfile img-fluid"
                  src={profile1}
                  alt="user profile"
                ></img> 
                )
                 
                }
               </div>
             </div>
             <div className="col-md-6">
               <div className="profile-head">
                 <h4 style={{Color:'#0666a3'}}id="profileName">Mr.    
                 {
                 specificUser.length>0?specificUser[0].user_name:loggedInUser.user_name}
                 </h4>
                 <h6> {
                 specificUser[0]?specificUser[0].user_profession:"Undefined"}</h6>
                 <p className="profile ratting mt-3 mb-5">
                   Description: <span>{specificUser[0]?specificUser[0].user_details:"undefined"}</span>{" "}
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
                       <label>Parmanent Address</label>
                     </div>
                     <div className="col-md-6">
                       <p>{ specificUser[0]?specificUser[0].parmanent_address:"Undefined Address"}</p>
                     </div>
                   </div>
                   <div className="row mt-3">
                     <div className="col-md-6">
                       <label>Current Address</label>
                     </div>
                     <div className="col-md-6">
                       <p>{ specificUser[0]?specificUser[0].current_address:"Undefined Address"}</p>
                     </div>
                   </div>
                   <div className="row mt-3">
                     <div className="col-md-6">
                       <label>Phone Number</label>
                     </div>
                     <div className="col-md-6">
                       <p>12345678978854</p>
                     </div>
                   </div>
                   <div className="row mt-3">
                     <div className="col-md-6">
                       <label>User ID</label>
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
                       <label>User ID</label>
                     </div>
                     <div className="col-md-6">
                       <p>12345678978854</p>
                     </div>
                   </div>
                   <div className="row mt-3">
                     <div className="col-md-6">
                       <label>User ID</label>
                     </div>
                     <div className="col-md-6">
                       <p>12345678978854</p>
                     </div>
                   </div>
                   <div className="row mt-3">
                     <div className="col-md-6">
                       <label>User ID</label>
                     </div>
                     <div className="col-md-6">
                       <p>12345678978854</p>
                     </div>
                   </div>
                   <div className="row mt-3">
                     <div className="col-md-6">
                       <label>User ID</label>
                     </div>
                     <div className="col-md-6">
                       <p>12345678978854</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-md-2">
               <Button style={{color:'#0666a3' }}
                 
                 className="editProfileButton"
                 name="btnAddAndMore"
                 onClick={()=>( setEditProfile(specificUser[0]))}
               
               >Edit Profile</Button>
             </div>
           </div>
          )

          }
         
        </Paper>
      </div>
    </>
  );
};

export default AboutMe;
