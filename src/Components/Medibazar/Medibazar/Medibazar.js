import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import MedibazarHome from '../MedibazarHome/MedibazarHome';
import MedibazarNavbar from '../MedibazarNavbar/MedibazarNavbar';

import './Medibazar.css';

const Medibazar = () => {
  
    return (
        
       
        
        <div className="medicontainer">
             <MedibazarHome></MedibazarHome>
        </div>
    );
};

export default Medibazar;