import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import firebaseConfig from "../../../firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../../App";
import { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import images01 from "../../../images/icon/github.svg";
import images02 from "../../../images/icon/google.svg";
import { FaFacebookF } from 'react-icons/fa';
import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../Home/Navbar/Navbar";
import { Box, Paper } from "@material-ui/core";
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
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        console.log(idToken);
        sessionStorage.setItem("jwtoken", idToken);
      
      })
      .catch(function (error) {
        // Handle error
      });
  };
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        console.log(displayName);
        const signedInUser = {
          isSignedIn: true,
          user_name: displayName,
          email: email,
          image: photoURL,
        };
        setUser(signedInUser);
        const newUserInfo = { ...user };
        newUserInfo.error = "";
        newUserInfo.success = true;
        newUserInfo.isSignedIn = true;
        newUserInfo.email = email;
        newUserInfo.user_name = displayName;
        newUserInfo.image = photoURL;
        setUser(newUserInfo);
       
        sessionStorage.setItem("userInfo",JSON.stringify(newUserInfo));
        

        storeAuthToken();


        history.replace(from);
       
        toast.success("Login Successfully.");
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

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };


  const handleSubmit = async (event) => {


    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(async result=>
     {
    
       const data={

         email  :  result.user.email
       }


       if(result.user.emailVerified) {
        const res = await fetch("https://quiet-earth-03350.herokuapp.com/signin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const data = res.json();
        console.log("data", data);
        if (res.status === 400 || !data) {
         
          toast.error("Invalid Credentials😐😐");
        } else {
          console.log(email);
          const signedInUser = {
            isSignedIn: true,
            email,
          };
          console.log(signedInUser);
          setUser(signedInUser);
          toast.success("Sign in  Successfully ❤❤");
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          newUserInfo.isSignedIn = true;
          newUserInfo.email = email;
          setUser(newUserInfo);
          sessionStorage.setItem("userInfo",JSON.stringify(newUserInfo));
          history.push(from);
        }



       }
          

      else toast.error('Please verify your account first , check your email')

     //   console.log('success',result.user);

     //   InsertUserInfo( { displayName, emailVerified, email });

     //   history.push('/');

     //   window.location.reload(false);
           
     })
     .catch(err=>
       {
        toast.error("Invalid Credentials😐😐");
       })


    event.preventDefault();
  };

  return (
    <div
      className="drow"
      style={{ minHeight: "650px", backgroundColor: "#172b4d" }}
    >
    
     
      <Navbar></Navbar>
      <Grid style={{ paddingTop: "100px" }}>
        <div class="login container mt--8 pb-5">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
              <div class="card login2 border-0 mb-0">
                <div class="card-header bg-transparent pb-5">
                  <div class="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div class="btn-wrapper text-center">
                    <Box component="span">
                      <span className="pr-2">
                      <Button
                        onClick={handleSignIn}
                        
                        className="materialButton"
                        
                        
                      >
                        <Box component="span" marginRight="4px">
                        <img src={images02} alt={"Google"}></img>
                  
                        </Box>
                        
                        <Box component="span" marginLeft=".75rem">
                        <strong>GOOGLE</strong>
                        </Box>
                      </Button>

                      </span>
                     
                      <Button className="materialButton">

                        <Box component="span" style={{ paddingRight: "4px" }}>
                      <FaFacebookF></FaFacebookF>
                          
                        </Box>
                        <Box component="span" marginLeft=".75rem">

                          <strong>Facebook</strong>
                          
                        </Box>
                      </Button>
                    </Box>
                  </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                  <div class="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form onSubmit={handleSubmit} method="POST">
                    <div class="form-group mb-3">
                      <div class="input-group input-group-merge input-group-alternative">
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
                      <div class="input-group input-group-merge input-group-alternative">
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
                    <div class="custom-control custom-control-alternative custom-checkbox">
                      <input
                        class="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        class="custom-control-label"
                        for=" customCheckLogin"
                      >
                        <span class="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div class="text-center">
                      <Box
                        textAlign="center"
                        marginTop="1.5rem"
                        marginBottom="1.5rem"
                      >
                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          
                       
                        >
                          Sign in
                        </Button>
                      </Box>
                      <Toaster />
                    </div>
                  </form>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-6">
                  <a href="#" className="text-light">
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div class="col-6 text-right">
                  <NavLink to="/signup">
                    <small className="text-light">Sign up here!</small>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default Login;
