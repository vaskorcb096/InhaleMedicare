import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import firebaseConfig from "../../../firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from "../../../App";
import { useContext, useState } from "react";
import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../Home/Navbar/Navbar";
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    isSignedIn: false,
    user_name: "",
    email: "",
    password: "",
    photo: "",
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const storeAuthToken=()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      console.log(idToken);
      sessionStorage.setItem('jwtoken',idToken);
      
    }).catch(function(error) {
      // Handle error
    });
  }
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { firstName, lastName, photoURL, email } = res.user;
        console.log(res);
        const signedInUser = {
          isSignedIn: true,
          user_name: firstName,

          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
      
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        newUserInfo.isSignedIn=true;
        newUserInfo.email=email;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        storeAuthToken();
       
     
        history.replace(from);
        window.alert("Login Successfully");
        toast('Here is your toast.');
      })
      .catch((err) => {
        var errorCode = err.code;
        var errorMessage = err.message;
        var email = err.email;
        var credential = err.credential;
      });
  };

  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        var user = res.user;
        console.log("fb User aftr Sign In", user);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        // Sign-out successful.

        const signedOutuser = {
          isSignedIn: false,

          user_name: "",

          photo: "",
          email: "",
          password: "",
          error: "",
          success: false,
        };
        setUser(signedOutuser);
      })
      .catch((err) => {
        // An error happened.
      });
  };

  const  handleChange=(event)=>{

    if(event.target.name ==="email") {
        setEmail(event.target.value);
    }
    else {
        setPassword(event.target.value);  
    }

  }
 
  const handleSubmit = async (event) => {
    event.preventDefault();
     const res=await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data=res.json();
    console.log("data",data)
    if(res.status===400  ||  !data) {
        window.alert("Invalid Credentials");
    }
    else{
        
      console.log(email); 
        const signedInUser = {
          isSignedIn: true,
         email,
       
        };
        console.log(signedInUser);
        setUser(signedInUser);
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        newUserInfo.isSignedIn=true;
        newUserInfo.email=email;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        window.alert("Login Successfully");
        history.push(from);

    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div class="login-form pt-5">
        <form onSubmit={handleSubmit} method="POST">
          <h2 class="text-center">Log in</h2>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <span class="fa fa-user"></span>
                </span>
              </div>
              <input
               
                value={email}
                 onChange={handleChange}
                type="email"
                class="form-control"
                name="email"
                placeholder="Email Adreess"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
              id="password"
              type="password"
               class="form-control"
               name="password"
               placeholder="Password"
               required="required"
                value={password}
                onChange={handleChange}
                
              />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary login-btn btn-block">
              Log in
            </button>
          </div>
          <div class="clearfix">
            <label class="float-left form-check-label">
              <input type="checkbox" /> Remember me
            </label>
            <NavLink to="#" class="float-right">
              Forgot Password?
            </NavLink>
          </div>
          <div class="or-seperator">
            <i>or</i>
          </div>
          <p class="text-center">Login with your social media account</p>
          <div class="text-center social-btn">
            <NavLink to="/" class="btn btn-secondary">
              <i class="fa fa-facebook"></i>&nbsp; Facebook
            </NavLink>
            <NavLink to="/" class="btn btn-info">
              <i class="fa fa-twitter"></i>&nbsp; Twitter
            </NavLink>
            {user.isSignedIn ? (
              <button onClick={handleSignOut} class="btn btn-danger">
                <i class="fa fa-google"></i>&nbsp; Google Sign Out
              </button>
            ) : (
              <button onClick={handleSignIn} class="btn btn-danger">
                <i class="fa fa-google"></i>&nbsp; Google Sign In
              </button>
            )}
          </div>
        </form>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>Logged In Succesfully</p>
        )}
        <p class="text-center text-muted small">
          Don't have an account? <NavLink to="/signup">Sign up here!</NavLink>
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
