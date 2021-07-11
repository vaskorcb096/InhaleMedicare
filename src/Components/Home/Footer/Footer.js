import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChild,faClock,faDirections,faEnvelope,faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="fo">
            <div className="footer text-white">
           
           <div className="content-wrap">
               <div className="containerfooter">
                   <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="footer-item">
                               <div className="d-flex">
                               <i><FontAwesomeIcon  style={{color:'#F1C22E'}} className="fa-child" icon={faChild}></FontAwesomeIcon></i>
                               <h2 style={{color:'#F1C22E'}}>INHILL MEDICARE</h2>
                               </div>
                               
                               <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam possimus vitae consectetur omnis quam natus, officia culpa cum beatae itaque, reprehenderit molestias adipisci sapiente consequuntur!</p>
                               <a href="#">
                                   <i><FontAwesomeIcon className="fontSizeChanging" icon={faDirections}></FontAwesomeIcon></i>Read More
                               </a>
                           </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="footer-item">
                                <div className="footer-title ">Contact Info</div>
                                <ul className="list-info">
                                    <li>
                                        <div className="d-flex ">
                                        <div className="info-icon">
                                         <i><FontAwesomeIcon className="fontSizeChanging" icon={faMapMarker}></FontAwesomeIcon></i>
                                   </div>  
                                   <div className="ml-3 mt-2 info-text">
                                       Rongdhonu1,Chowkidiky,sylhet.
                                   </div>

                                        </div>
                                     
                                    </li>
                                    <li>

                                    <div className="d-flex ">
                                        <div className="info-icon">
                                         <i><FontAwesomeIcon className="fontSizeChanging" icon={faPhone}></FontAwesomeIcon></i>
                                   </div>  
                                   <div className="ml-3 mt-2 info-text">
                                      01738250027
                                   </div>

                                        </div>
                                        
                                    </li>
                                    <li>

                                    <div className="d-flex ">
                                        <div className="info-icon">
                                         <i><FontAwesomeIcon className="fontSizeChanging" icon={ faEnvelope}></FontAwesomeIcon></i>
                                   </div>  
                                   <div className="ml-3 mt-2 info-text">
                                       VaskorSyl@gmail.com
                                   </div>

                                        </div>
                                    </li>
                                    <li>

                                    <div className="d-flex ">
                                        <div className="info-icon">
                                         <i><FontAwesomeIcon className="fontSizeChanging" icon={faClock}></FontAwesomeIcon></i>
                                   </div>  
                                   <div className="ml-3 mt-2 info-text">
                                       Sat-Thru 09:00 -1700
                                   </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="footer-item">
                                <div className="footer-title">Our Site</div>
                                
                                <ul className="list ">
                                    <li><a className="text-white" href="#">About us</a></li>
                                    <li><a className="text-white" href="#">Our Doctors</a></li>
                                    <li><a className="text-white" href="#">Medibazar.com</a></li>
                                    <li><a className="text-white" href="#">Our Services</a></li>
                                    <li><a className="text-white" href="#">Contact US</a></li>
                                    
                                </ul>
                              
                                
                            </div> 

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                               <div className="footer-item">
                                   <div className="footer-title">
                                       Get In Touch
                                   </div>
                                   <div className="fc">
                                   <p >Lit sed The Best in dolor sit amet consectetur adipisicing elit sedconsectetur adipisicing</p>
                                   <div className="sosmed-icon d-inline-flex">
                                   <a href="https://www.facebook.com/"className="fb">
                                   <i><FontAwesomeIcon className="fontSizeChanging" icon={faFacebook}></FontAwesomeIcon></i>
                                   </a>
                                   <a href="https://twitter.com/" className="tw">
                                   <i><FontAwesomeIcon className="fontSizeChanging" icon={faTwitter}></FontAwesomeIcon></i>
                                   </a>
                                   <a href="www.instagram.com" className="ig">
                                   <i><FontAwesomeIcon className="fontSizeChanging" icon={faInstagram}></FontAwesomeIcon></i>
                                   
                                   
                                   </a>
                                   <a href="www.linkedin.com" className="in">
                                   <i><FontAwesomeIcon className="fontSizeChanging" icon={faLinkedin}></FontAwesomeIcon></i>
                                   </a>

                                   </div>
                                   
                                   </div>
                               </div>
                        </div>

                   </div>
               </div>
           </div>
        </div>
        <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
         </div>
            
       
    );
};

export default Footer;