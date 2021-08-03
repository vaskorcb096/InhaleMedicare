import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { Image } from 'react-bootstrap';

const ShowContact = () => {
    const lik="https://i.ibb.co/5GzXkwq/user.png";
    const [contact,setContact]=useState([]);
    useEffect(() => {
       fetch('getContact')
       .then(data=>data.json())
       .then(items=>{
           setContact(items);
       })
    }, [])
    console.log("contact",contact);
    return (
        <div className="container-fluid row ">
        <div className=" vxx col-md-2 col-sm-12 col-lg-2 jx ">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-lg-10">
            <h2>Contact Information</h2>
        <div className="row">
           
         {
            
             contact.map((item)=>
             
               <div  className="col-12 pl-5 pr-5 pt-5">
              
                        <div className="card">
                            <div className="d-flex justify-content-between">
                            <img className="p-1 rounded-circle" src={lik}  alt="" width="80"/>
                            <p className="pr-2"><strong>Email:</strong>{item.email}</p>
                            </div>
                            
                        <h6 className="pl-3 pr-3 text-primary">{item.name}</h6>
                          <p className="pl-3 pr-3"><strong>Message:</strong>{item.message}</p>
                          
                       
                        </div>
                        </div>   
            
           )
         }
        
                     
                     </div>
            
        </div>
        </div>

    );
};

export default ShowContact;