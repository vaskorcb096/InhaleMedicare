import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './EmergencyForm.css'
import images01 from '../../../../images/home_icon_modal/emergency number.jpg';
import images02 from '../../../../images/home_icon_modal/Logo 500x500 px.png';
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

 const EmergencyForm = ({modalIsOpen,closeModal }) => {
 
  return (
    
    <div>
       <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                
                <div className="text-center ">
                
                  <img src={images02} className="img-fluid change" alt=""/>
                </div>
                
            </Modal>
   
    
  </div>
  );
};
export default EmergencyForm;