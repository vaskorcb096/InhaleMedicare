
import React from 'react';
import { Carousel } from 'react-bootstrap';
import images01 from '../../../images/doctors.png';
import images02 from '../../../images/do-2.png';
import images03 from '../../../images/do-3.png';
import images04 from '../../../images/Abortionamico591x531.png';
import images05 from '../../../images/World-health-dayrafiki591x531.png';
import images09 from '../../../images/Group 140.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import './HomeMain.css'


const HomeMain = () => {
    return (
        <div className="container-fluid main_header">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row">
                        <div className="col-md-5 col-12 main_header_left">
                        
                            
                        
                        <section class="left-sec">
                          <h3> We Are Here For Your Care</h3>
                          <h1> <span style={{color:'#264653'}}>We</span><span style={{color:'#e9c46a'}}> The </span><span style={{color:'#f4a261'}}>Best</span> <span style={{color:'#e76f51'}}>Doctors</span></h1>
                          <p>We are here for your care 24/7. Any help just call us.</p>
                         
                         
                          <Link className="btnlink"to="/appointmentbook">
                          <Button variant="contained" color='secondary'>Make An Appointment
                            </Button>
                            </Link>
                          </section>

  

                        </div>
                        <div className="col-md-7 col-12 main_header_right">
                        <Carousel>  
                        <Carousel.Item>
      
      
    <img
    
      className="w-80 img-fluid"
      src={images04}
      alt="First slide"

      
    />
   
  </Carousel.Item>
  <Carousel.Item>
      
      <img
      
        className="w-78 img-fluid"
        src={images05}
        alt="First slide"
  
        
      />
     
    </Carousel.Item>
    <Carousel.Item>
      
      <img
      
        className="w-80 img-fluid"
        src={images01}
        alt="First slide"
  
        
      />
     
    </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-80 img-fluid"
      src={images02}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-80 img-fluid"
      src={images03}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
                        
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default HomeMain;