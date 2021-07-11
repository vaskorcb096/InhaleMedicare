import {Link} from 'react-router-dom';
import React from 'react';
import doctor from '../../../images/5790-removebg.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './HomeMakeAppointment.css'

const HomeMakeAppointment = () => {
    return (
        <div style={{paddingRight:'150px',paddingLeft:'150px'}}>
           <section  className="make-appointment mt-5">
            <div className="appointment_container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <Link  variant="contained" to='/appointmentbook'className=" contact1-form-btn1">Now</Link>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    );
};

export default HomeMakeAppointment;