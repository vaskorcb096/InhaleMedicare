import React from 'react'
import { NavLink } from 'react-router-dom'
import './Signup.css'
import firebaseConfig from '../../../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";

import { UserContext } from '../../../App';
import  { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

function Signup() {
    
    const [newUser,setNewUser]=useState(false);
    const  [user,setUser]=useState({
        isSignedIn:false,
        user_name:'',
        email:'',
        password:'',
        cppassword:'',
        photo:'',

    });
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);

   const history=useHistory();
   const location=useLocation();

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleSignIn=() => {
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {userName,photoURL,email}=res.user;
            console.log(res);
            const signedInUser={
             isSignedIn:true,
             user_name:userName,
           
             email:email,
             photo:photoURL,
            }
            setUser(signedInUser);
        })
        .catch(err => {
            var errorCode = err.code;
            var errorMessage = err.message;
            var email = err.email;
            var credential = err.credential;
           
          });

    }
    const handleFbSignIn=()=>{
        firebase.auth().signInWithPopup(fbProvider)
        .then(res=> {
            
           
            
            var user = res.user;
            console.log('fb User aftr Sign In',user);
            
          }).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    const handleSignOut = () =>{
        firebase.auth().signOut()
        .then(res => {
            // Sign-out successful.

            const signedOutuser={
            isSignedIn:false,

            user_name:'',
            photo:'',
            email:'',
            password:'',
            cppassword:'',
            error:'',
            success:false,
            }
            setUser(signedOutuser);
          })
          .catch(err => {
            // An error happened.
          });


    }
    const handleInputs =(event)=>{
       
      console.log(event.target.name , event.target.value);
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
     
          const newUserInfo={...user};
          newUserInfo[event.target.name]=event.target.value;
          setUser(newUserInfo);
      }

    
    const handleBlur =(event)=>{
       
        let isFormValid=true;
        if(event.target.name === 'user_name') {
            const ab=event.target.value;
            if(ab.length<1)isFormValid=false;
    
          }
      console.log(event.target.name , event.target.value);
      if(event.target.name === 'email') {
        isFormValid=/\S+@\S+\.\S+/.test(event.target.value);

      }
     if(event.target.name === 'password') {
         const isPasswordValid=event.target.value.length>6
         const passwordHasNumber=/\d{1}/.test(event.target.value);
         isFormValid=isPasswordValid && passwordHasNumber;
      }
      if(event.target.name === 'cppassword') {
        const isPasswordValid=event.target.value.length>6
        const passwordHasNumber=/\d{1}/.test(event.target.value);
        isFormValid=isPasswordValid && passwordHasNumber;
        if(user.password!==user.cppassword) {
            isFormValid=false;
        }
     }
     
      if(isFormValid) {
          const newUserInfo={...user};
          newUserInfo[event.target.name]=event.target.value;
          setUser(newUserInfo);
      }

    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(user);
        if(user.email){
          
           
            const {user_name ,email,password,cppassword}=user;
           
            const res =await fetch('http://localhost:5000/register',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    user_name,
                    email,
                    password,
                    cppassword,
                })  
    
            })
            const data=await res.json();
            console.log(data);
            if(typeof(data.error)!=="undefined") {
                console.log(data.error);
                const v=data.error;
                const newUserInfo={...user};
                newUserInfo.error=v;
                newUserInfo.success=false;
                setUser(newUserInfo);
            }
            else {
                console.log("hello",data);
                const newUserInfo={...user};
                newUserInfo.error="";
                newUserInfo.success=true;
                setUser(newUserInfo);
                window.alert("Registration Successfull");
                console.log("Successful Registration");
                history.push("/signin");
               
            }
    

        }
       
       
       
        }

    
    return (
        <>
            
            <div class="signup-form">
                <form onSubmit={handleSubmit} method="post">
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <input  onChange={handleInputs}  onBlur={handleBlur}  type="radio" id="hosiptalAdmin" name="admin" value="hospital"required="required"/>
                <label for="hosiptalAdmin"> Hospital</label>
                <input  onChange={handleInputs}  onBlur={handleBlur}  type="radio" id="doctorAdmin" name="admin" value="doctor"required="required"/>
                <label for="doctorAdmin"> Doctor</label>
                <input  onChange={handleInputs}  onBlur={handleBlur}  type="radio" id="patientAdmin" name="admin" value="patient" required="required"/>
                <label for="patientAdmin"> Patient</label>
               
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
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        <input value={user.cppassword} onChange={handleInputs} onBlur={handleBlur}  type="password" class="form-control" name="cppassword" placeholder="Confrim Password" required="required" />
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div>
                <p style={{color:'red'}}>{user.error}</p>
             {
              user.success && <p style={{color:'green'}}>Created Succesfully</p>
             }
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
            
                

                <div class="text-center">Already have an account? <NavLink to="/signin">Login here</NavLink></div>
              
            </div>

        </>
    )
}

export default Signup