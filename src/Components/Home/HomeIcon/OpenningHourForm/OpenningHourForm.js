import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './OpenningHourForm.css'
import images01 from '../../../../images/home_icon_modal/openning hour.JPG';
import images02 from '../../../../images/home_icon_modal/Tasks for Today.png';
import { Button } from '@material-ui/core';

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
     
      transform: 'translate(-50%, -50%)'

  }
};
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


Modal.setAppElement('#root')

 const OpenningHourForm = ({modalIsOpen1,closeModal1}) => {
 
  return (
    
    <div>
       <Modal
                isOpen={modalIsOpen1}
                onRequestClose={closeModal1}
                style={customStyles}
                contentLabel="Example Modal"
            >
                
                <div className="text-center">
                
                  <img src={images01} className="img-fluid" alt=""/>
                 
                 
                </div>
              
            </Modal>
   
    
  </div>
  );
};
export default OpenningHourForm;