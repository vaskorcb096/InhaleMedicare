import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const DoctorsCard = (props) => {
    return (
        
             <div className="col-lg-3 col-md-3 pb-5 " >
                  <div className="card cardxx">
                  <div className="card-body">
                      <img src={`http://localhost:3000/${props.pro.image}`} alt="" className="img-fluid rounded-circle  mb-3"/>
                      <h3 className="doctorh3"><strong>{props.pro.name}</strong></h3>
                      <h6>{props.pro.department}</h6>
                      <p>{props.pro.description}</p>
                      <div className="d-flex flex-row justify-content-center ">
                          <a style={{paddingRight:'1em'}}href="https://www.facebook.com/"className="fb">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faFacebook}></FontAwesomeIcon></i>
                                    </a>
                                    <a style={{paddingRight:'1em'}} href="https://twitter.com/" className="tw">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faTwitter}></FontAwesomeIcon></i>
                                    </a>
                                    <a style={{paddingRight:'1em'}} href="www.instagram.com" className="ig">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faInstagram}></FontAwesomeIcon></i>
                                    </a>
                                    <a style={{paddingRight:'1em'}} href="www.linkedin.com" className="in">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faLinkedin}></FontAwesomeIcon></i>
                                    </a>
                          </div>
                        
                      </div>
                  </div>
              </div>
    );
};

export default DoctorsCard;