import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceCard from '../ServiceCard/ServiceCard';
import  { useEffect, useState } from 'react';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(()=>{
     fetch('/servicedata')
     .then(res => res.json())
     .then(data => {
       setService(data);
     })
   }, [1])
    return (
        <>
        <Navbar></Navbar>
        <div className="my-5 pt-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        
                             service.map((val)=>{
                                 console.log("df",val);
                                return <ServiceCard key={val._id}
                                pro={val}
                                ></ServiceCard>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Service;