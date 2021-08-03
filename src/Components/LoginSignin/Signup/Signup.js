import React from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
import firebaseConfig from "../../../firebase.config";
import firebase from "firebase/app";
import "firebase/auth";

import { UserContext } from "../../../App";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import Navbar from "../../Home/Navbar/Navbar";
import { Grid } from "@material-ui/core";
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


function Signup() {
  //const [newUser,setNewUser]=useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    user_name: "",
    email: "",
    password: "",
    cppassword: "",
    photo: "",
  });
  // const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  const history = useHistory();
  // const location=useLocation();

  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleInputs = (event) => {
    console.log(event.target.name, event.target.value);
    /*if(event.target.name === 'email') {
        isFormValid=/\S+@\S+\.\S+/.test(event.target.value);

      }
     if(event.target.name === 'password') {
         const isPasswordValid=event.target.value.length>6
         const passwordHasNumber=/\d{1}/.test(event.target.value);
         isFormValid=isPasswordValid && passwordHasNumber;
      }
      /*if(event.target.name === 'mobile') {
       
        isFormValid=event.target.value===11?true:false;
     }
     */

    const newUserInfo = { ...user };
    newUserInfo[event.target.name] = event.target.value;
    setUser(newUserInfo);
  };

  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "user_name") {
      const ab = event.target.value;
      if (ab.length < 1) isFormValid = false;
    }
    console.log(event.target.name, event.target.value);
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (event.target.name === "cppassword") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
      if (user.password !== user.cppassword) {
        isFormValid = false;
      }
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    if (user.email) {
      const { user_name, email, password, cppassword } = user;
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(async re => {

          console.log('paisi  ',re);

     
      //   updateUserName(userInformation.displayName)

      window.alert('check your email and verify your email address');

      await re.user.sendEmailVerification()
      console.log('successfully sign in ');


      const res = await fetch("https://quiet-earth-03350.herokuapp.com/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user_name,
          email,
          password,
          cppassword,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (typeof data.error !== "undefined") {
        console.log(data.error);
        const v = data.error;
        const newUserInfo = { ...user };
        newUserInfo.error = v;
        newUserInfo.success = false;
        setUser(newUserInfo);
      } else {
        console.log("hello", data);
        const newUserInfo = { ...user };
        newUserInfo.error = "";
        newUserInfo.success = true;
        setUser(newUserInfo);
        toast.success("Registration Successfully Done 🤩🤩");
        console.log("Successful Registration");
        history.push("/signin");
      }
    }).catch((error)=>{
      window.alert('already have a account');
    })
    }
  };

  return (
    <div style={{ minHeight: "640px", backgroundColor: "#172b4d" }}>
      <Navbar></Navbar>
      <Grid style={{ paddingTop: "75px" }}>
        <div  class="login container mt-8 pb-5">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
            <div class="login2 signup-form">
                <form onSubmit={handleSubmit} method="post">
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
               
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <span class="fa fa-user"></span>
                            </span>
                        </div>
                        <input  value={user.user_name} onChange={handleInputs}  onBlur={handleBlur}  type="text" class="form-control" name="user_name" placeholder="User Name" required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input value={user.email} onChange={handleInputs} onBlur={handleBlur} type="email" id="email"   class="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                
               
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        <input value={user.password} onChange={handleInputs}   onBlur={handleBlur}  type="password" class="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
               
                <div class="form-group">
                    <div class="input-group input-group-merge input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        <input value={user.cppassword} onChange={handleInputs} onBlur={handleBlur}  type="password" class="form-control" name="cppassword" placeholder="Confrim Password" required="required" />
                    </div>
                </div>
                {user.password.length>3?(
                            <small class="text-muted font-italic">password strength: <span class="text-success font-weight-700">strong</span></small>
                ):user.password.length>0?(<small class="text-muted font-italic">password strength: <span class="text-danger font-weight-700">too weak</span></small>):""}
               
                
                <div class="form-group">
                    <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div>
                <p style={{color:'red'}}>{user.error}</p>
             {
              user.success && <p style={{color:'green'}}>Created Succesfully</p>
             }
                <div class="form-group">
                    <button type="submit" class="btn btn-info btn-lg">Sign Up</button>
                </div>
            </form>
            
                

                <div className="text-light text-center">Already have an account? <NavLink  className="text-light"  to="/signin">Login here</NavLink></div>
              
            </div>
            </div>
          </div>
        </div>
      </Grid>
      <Toaster
        position="top-right"
        reverseOrder={true}
        />
    </div>
  );
}

export default Signup;
