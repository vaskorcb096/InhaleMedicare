import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDungeon, faHome, faSchool, faTrophy } from '@fortawesome/free-solid-svg-icons'
import './HomeIcon.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import images01 from '../../../images/icon/improve.png';
import images02 from '../../../images/icon/medical-kit.png';
import images03 from '../../../images/icon/AdobeStock_207418957_Preview-removebg-preview.png';
import images04 from '../../../images/icon/open.png';
import EmergencyForm from './EmergencyForm/EmergencyForm';
import OpenningHourForm from './OpenningHourForm/OpenningHourForm';


const HomeIcon = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [modalIsOpen1,setIsOpen1] = React.useState(false);
  function openModal() {
    setIsOpen(true);
    setIsOpen1(false);
  }
  function closeModal(){
    setIsOpen(false);
  }
  function openModal1() {
    setIsOpen1(true);
    setIsOpen(false);
  }
  function closeModal1(){
    setIsOpen1(false);
  }
    return (
        <div>

<section id="home-icon" className="pb-5 text-center">
    <div className="content-wrap pb-3">

    </div>
    <div className="containerx text-center">
      <div className="row">
        <div id="box-1"className="box col-md-4 ">
       
        <img style={{height:'80px'}}src={images02} alt=""/>
          <h3 className="my-2">Emergency Care</h3>
          <p className="lead mb-3">emergency care is needed immediately  needs to be  in a medical facility, while if it is an urgent medical issue .</p>
          <Button onClick={openModal} variant="contained" color='primary'>
            Learn More
          
         
         </Button>
         <EmergencyForm modalIsOpen ={modalIsOpen} closeModal={closeModal}></EmergencyForm>
        </div>
        <div id="box-2" className="box  col-md-4">
        <img style={{height:'80px'}}src={images04} alt=""/>
          <h3 className="my-2">Openning Hours</h3>
          <p className="lead mb-3"> Needed immediately and patient needs to be shifted in a medical facility, while if it is an urgent medical issue .</p>
          <Button onClick={openModal1} variant="contained" color="secondary">
          Learn More
         </Button>
         
         <OpenningHourForm modalIsOpen1 ={modalIsOpen1} closeModal1={closeModal1}></OpenningHourForm>
        </div>
        <div id="box-3"className="box  col-md-4">
        <img style={{height:'80px'}}src={images03} alt=""/>
          <h3 className="my-2">24 Hours Service</h3>
          <p className="lead mb-3">emergency care is needed immediately and patient needs  medical facility, while if it is an urgent medical issue .</p>
         
         
         <Button  variant="contained" color='primary'>
         <Link className="btnlink"to="/contactus">Contact Now</Link>
         </Button>
       
        </div>
      </div>
    </div>
  
  </section>
            
        </div>
    );
};

export default HomeIcon;