import React from 'react';
import { Nav, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import images01 from '../../images/Group 140.png'
import Navbar from '../Home/Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <>
        <Navbar></Navbar>
        <section id="about" className=" d-flex align-item-center aboutcls" >
            <div className="container-fluid nav_bg">
                <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row">
                       <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h1>
                               Welcome to About Page <br/>
                               <strong className="brand-name "> Inhale Care</strong>

                           </h1>
                           <h2 className="my-2">
                           We fight for the betterment of our patient's health.
                           </h2>
                           <div className="mt-3">
                               <NavLink as={Link} to="/service" className="btn-get-started">
                                   Contact Now
                                   
                               </NavLink>
                               
                           </div>
                       </div>
                       <div className="col-lg-6 order-1 order-lg-2  about-img">
                           <img src={images01} style={{height:'82vh'}} className="img-fluid animated" alt="about image"/>

                       </div>
                       </div>
                   </div>
                </div>
            </div>
        </section>
            
        </>
    );
};

export default About;