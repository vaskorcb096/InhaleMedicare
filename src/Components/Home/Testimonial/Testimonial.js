import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import images01 from '../../../images/testimonial/quote.png';
import images02 from '../../../images/testimonial/testimonial.png'
import images03 from '../../../images/testimonial/team-3.jpg'
import images04 from '../../../images/testimonial/undraw_feedback_h2ft.svg'
import images05 from '../../../images/testimonial/undraw_project_feedback_2s92 (1).svg'
import images06 from '../../../images/testimonial/undraw_review_fkgn.svg'
import images07 from '../../../images/testimonial/team-4-removebg-preview.png'
import './Testimonial.css'


const defaultProps = {
    bgcolor: 'background.paper',
  
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
    margin:'auto',
  };
  

const Testimonial = () => {
    return (
       <>
       <h1 className="p-5 text-center">What's Our Patients Says</h1>
       <div className="row">
       
           <div  className="col-3">
             <img style={{height:'370px'}} src={images06} className="img-fluid" alt=""/> 
           </div>
           <div className="col-6">
           <Box className="centerx text-start" style={{height:'420px'}}>
            
            
            <Carousel>  
                             
                             <Carousel.Item >
                                 <Box  borderRadius={20} {...defaultProps} className="row carousel_testimonial" style={{width:'650px', height:'330px'}}>
                                    <Box   className="col-2">
                                    <img style={{height:'70px'}}src={images02} alt=""/> 
                                    <img className="rounded-circle"  style={{height:'70px',marginTop:'170px'}}src={images03} alt=""/> 
                                    </Box>
                                    <Box style={{textAlign:'left'}} className="col-10">
                                   
                                        <Box className="using" style={{height:'240px'}} >
                                        <p>WLorem ipsum r aceodio quas similique dolorem illumissimt sjoi sjtoio ih gui giu uygihiy nigyu7fo uytfi gydtyfij igyyugj jyyfyuvji fyfuh vi fuyij amet consectetur adipisicing elit. Impedit cumque possimus, excepturi quisquam vel provident cum praesentium nostrum, enim magnam itaque odio quas similique dolorem illum assumenda, quia dignissimos perspiciatis.</p>
                                        </Box>
                                        
                                       
                                       
                                        <Box  className="row ">
                                            <Box  className="col-8 slow" >
                                                 <span className="firstname_lastname">Kelita Ratherfords</span>
                                                 <br/>
                                                 <span className="p-unbold">Software Enginner at Microsoft.</span>
                                                 <p className="p-unbold">Lorem ipsum dolor sit amet.</p>
                                                 
                                            </Box>
                                           
                                            <Box className="text-right col-4"> 
                                            <p>21 Januray 2021</p>

                                            </Box>
                                        </Box>

                                    </Box>

                                 </Box>
                                 
                                   
                            </Carousel.Item>


                            <Carousel.Item >
                                 <Box  borderRadius={20} {...defaultProps} className="row carousel_testimonial" style={{width:'650px', height:'330px'}}>
                                    <Box   className="col-2">
                                    <img style={{height:'70px'}}src={images02} alt=""/> 
                                    <img className="rounded-circle"  style={{height:'70px',marginTop:'170px'}}src={images03} alt=""/> 
                                    </Box>
                                    <Box style={{textAlign:'left'}} className="col-10">
                                   
                                        <Box className="using" style={{height:'240px'}} >
                                        <p>WLorem ipsum r aceodio quas similique dolorem illum quia dignissimos perspiciatis.</p>
                                        </Box>
                                        
                                       
                                       
                                        <Box  className="row ">
                                            <Box  className="col-8 slow" >
                                                 <span className="firstname_lastname">Kelita Ratherfords</span>
                                                 <br/>
                                                 <span className="p-unbold">Software Enginner at Microsoft.</span>
                                                 <p className="p-unbold">Lorem ipsum dolor sit amet.</p>
                                                 
                                            </Box>
                                           
                                            <Box className="text-right col-4"> 
                                            <p>21 Januray 2021</p>

                                            </Box>
                                        </Box>

                                    </Box>

                                 </Box>
                                 
                                   
                            </Carousel.Item>

                            <Carousel.Item >
                                 <Box  borderRadius={20} {...defaultProps} className="row carousel_testimonial" style={{width:'650px', height:'330px'}}>
                                    <Box   className="col-2">
                                    <img style={{height:'70px'}}src={images02} alt=""/> 
                                    <img className="rounded-circle"  style={{height:'70px',marginTop:'170px'}}src={images07} alt=""/> 
                                    </Box>
                                    <Box style={{textAlign:'left'}} className="col-10">
                                   
                                        <Box className="using" style={{height:'240px'}} >
                                        <p>WLorem iptfi gydtyfij igyyugj jyyfyuvji fyfuh vi fuyij amet consectetur adipisicing elit. Impedit cumque possimus, excepturi quisquam vel provident cum praesentium nostrum, enim magnam itaque odio quas similique dolorem illum assumenda, quia dignissimos perspiciatis.sum dolor sit sjoi sjtoio ih gui giu uygihiy nigyu7fo uytfi gydtyfij igyyugj jyyfyuvji fyfuh vi fuyij amet consectetur adipisicing elit. Impedit cumque possimus, excepturi quisquam vel provident cum praesentium nostrum, enim magnam itaque odio quas similique dolorem illum assumenda, quia dignissimos perspiciatis.</p>
                                        </Box>
                                        
                                       
                                       
                                        <Box  className="row ">
                                            <Box  className="col-8 slow" >
                                                 <span className="firstname_lastname">Grower Hawking</span>
                                                 <br/>
                                                 <span className="p-unbold">Software Enginner at Google.</span>
                                                 <p className="p-unbold">Washnigton,Dc</p>
                                                 
                                            </Box>
                                           
                                            <Box className="text-right col-4"> 
                                            <p>21 Januray 2021</p>

                                            </Box>
                                        </Box>

                                    </Box>

                                 </Box>
                                 
                                   
                            </Carousel.Item>
                            
                        
                         </Carousel>
             
        </Box>

           </div>
           <div className="col-3">
           <img style={{height:'400px'}}src={images05} className="img-fluid" alt=""/> 
           </div>
       
       

       </div>
      
        </>
    );
};

export default Testimonial;