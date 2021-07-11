import React, { useEffect, useState } from 'react';
import './OurDoctors.css'
import Navbar from '../Home/Navbar/Navbar';
import axios from 'axios';
import DoctorsCard from './DoctorsCard';

const OurDoctor = () => {
    const [doctor,setDoctor]=useState([]);
    useEffect(()=>{
     fetch('/getDoctor')
     .then(res => res.json())
     .then(data => {
        setDoctor(data);
     })
   }, [1])
    
    return (
        <>
        <Navbar></Navbar>
    
        <section id="ourdoctor">
          <div className="doctor_container my-3 py-5 text-center">
              <div className="row  mb-5">
                  <div className="col">
                      <h1 className="doctorh1">Our Doctors</h1>
                      <p className="mt-3">Here is our Best Doctor</p>
                  </div>
              </div>
              <div className="row">
                  {doctor.map((pro)=>{
                      return <DoctorsCard key={pro._id}
                      pro={pro}>

                      </DoctorsCard>

                      
                  }

                  

                  )}
             
              </div>
            </div>
        </section>
        </>
    );
};

export default OurDoctor;