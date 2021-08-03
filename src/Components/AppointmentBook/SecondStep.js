
import {Button,TextField} from '@material-ui/core';
import React, { useContext,useState } from 'react';
import {UserContext} from '../../App'

const SecondStep = () => {
    const  [loggedInUser,setLoggedInUser,currentStep,cuStep,sStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
    const [errors,setErrors]=useState([]);
  
 
   
    const handleChange=(event)=>{
        
    
       
        console.log("handleChange");
       
        if(event.target.name==="first-name") {

             if(!event.target.value){
           
             setErrors({...errors,"firstName-error":"cannot empty "})
             
          
          }
         else if(typeof userData["firstname"] !== "undefined"){
            console.log("paise");
            
            if(!userData["firstname"].match(/^[a-zA-Z]+$/)){
              
                setErrors({...errors,"firstName-error":"Only Letters "})
               
            }   
            else {
                setErrors({...errors,"firstName-error":""}) 
            }
            
 
         }
         else {
             setErrors({...errors,"firstName-error":""});
         }
        }
        if(event.target.name==="last-name") {

            if(!event.target.value){
          
            setErrors({...errors,"lastnameError":"cannot empty"})
          
          }
       else if(typeof userData["lastname"] !== "undefined"){
          
           
            if(!userData["lastname"].match(/^[a-zA-Z]+$/)){
              
                setErrors({...errors,"lastnameError":"Only Letters "})
               
            }   
             else if(userData["lastname"].length<2) {
                setErrors({...errors,"lastnameError":"Type 3 or More letters "})
            }
            else {
                setErrors({...errors,"lastnameError":""}) 
            }
            
            
 
         }
         else {
            setErrors({...errors,"lastnameError":""}) 
        }
    }
         if(event.target.name==="phone-number") {

            if(!event.target.value){
          
            setErrors({...errors,"phone-error":"cannot empty"});
            }
            else if(typeof userData["contactNumber"] !== "undefined"){
          
           
                if(!userData["contactNumber"].match(/^[0-9]+$/)){
                  
                    setErrors({...errors,"phone-error":"Only Digits "})
                   
                }   
                else if(userData["contactNumber"].length!==11) {
                    setErrors({...errors,"phone-error":"Type only 11 digits "})
                }
                else {
                    setErrors({...errors,"phone-error":""})
                }
                
     
             }
            
             else {
                
                setErrors({...errors,"phone-error":""});
            
        }

          
        }
        if(event.target.name === 'email-address') {
            if(!event.target.value){
          
                setErrors({...errors,"email-error":"cannot empty"});
                }
            
            else if(!userData["email"].match(/\S+@\S+\.\S+/)){
                  
                setErrors({...errors,"email-error":"Plz Type Valid Email Address"});
               
            } 
            else {
                setErrors({...errors,"email-error":""});
            }  
    
          }


        }
       

    const NextStep=()=>{
    
       

          if((typeof userData["contactNumber"] !== "undefined" && typeof userData["firstname"] !== "undefined" &&  typeof userData["lastname"] !== "undefined" && typeof userData["email"] !== "undefined") && (userData["firstname"].length>0 && userData["lastname"].length>2 && userData["contactNumber"].length===11 && userData["email"].match(/\S+@\S+\.\S+/))) setStep(3);
          else {
            if(!userData["firstname"]){
            
                setErrors({...errors,"firstName-error":"cannot empty "})
                console.log(errors);
              
           
           
             }
    
            else  if(typeof userData["firstname"] !== "undefined"){
               console.log("paise");
               
               if(!userData["firstname"].match(/^[a-zA-Z]+$/)){
                 
                   setErrors({...errors,"firstName-error":"Only Letters "})
                 
               
                  
               }   
               
    
            }
            else {
                setErrors({...errors,"firstName-error":""}) 
            }
              if(!userData["lastname"]){
               
               setErrors({...errors,"lastName-error":"cannot empty "})
               console.log("dgrf");
             
           
            }
    
             else if(typeof userData["lastname"] !== "undefined"){
              
               
               if(!userData["lastname"].match(/^[a-zA-Z]+$/)){
                 
                   setErrors({...errors,"lastnameError":"Only Letters "})
                  
             
                  
               }   
                else if(userData["lastname"].length<=2) {
                   setErrors({...errors,"lastnameError":"Type 3 or More letters "})
                  
               }
               
    
            }
             if(typeof userData["contactNumber"] !== "undefined"){
              
               
               
                if(userData["contactNumber"].length!==11) {
                   setErrors({...errors,"phone-error":"Type 11 digits "})
                  
                
               }
               
    
            }
            if(typeof userData["email"]!="undefined") {
                if(!userData["email"].match(/\S+@\S+\.\S+/)){
                  
                    setErrors({...errors,"email-error":"Plz Type Valid Email Address"});
                   
                }     
            }
          }
         
         
        

    }
    
    return (
       

        <div >
              <h3>Patient's Information</h3>

                            <div>
                            
                                 <h5>Patient's Name</h5>
                        <TextField autoComplete="off" 
                       
                        name="first-name"
                        label="First name" 
                        fullWidth size="small" 
                       
                        value={userData["firstname"]} 
                         onBlur={handleChange}
                          onChange={(e)=>setUserData({...userData,"firstname":e.target.value})}
                         margin="normal" 
                         variant="outlined"
                         color="secondary"
                         error
                         helperText={errors["firstName-error"]}
                         
                         ></TextField>
                        <TextField
                        autoComplete="off"
                       
                        name="last-name"
                         label="Last name"
                          fullWidth size="small"  
                          onBlur={handleChange}
                          value={userData["lastname"]}
                          onChange={(e)=>setUserData({...userData,"lastname":e.target.value})}
                           margin="normal" 
                           variant="outlined"
                           color="secondary"
                           error
                         helperText={errors["lastnameError"]}>
                               
                           </TextField>

                        </div>
                        
                        <div>
                        <TextField
                        
                         name="phone-number"
                         
                           type="number" 
                           label="Contact Number"
                            fullWidth size="small" 
                            onBlur={handleChange}
                            value={userData["contactNumber"]} 
                            onChange={(e)=>setUserData({...userData,"contactNumber":e.target.value})}
                             margin="normal"
                              variant="outlined"
                              color="secondary"
                              error
                              helperText={errors["phone-error"]}>

                              </TextField>
                        <TextField name="email-address"
                        
                         label="Email"
                          fullWidth value={userData["email"]} 
                          size="small"
                           onChange={(e)=>setUserData({...userData,"email":e.target.value})} 
                           margin="normal" variant="outlined"color="secondary"
                           error
                           helperText={errors["email-error"]}>

                           </TextField>
                        </div>
                        <div>
                        <Button className="mr-5"  onClick={()=>setStep(1)} variant ="contained" color="secondary">Back</Button>

                        <Button onClick={NextStep} variant ="contained" color="primary">Next</Button>
                       
                       
                        </div>
                       
               

            
           
        </div>
    );
};

export default SecondStep;