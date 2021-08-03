import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeIcon from '../HomeIcon/HomeIcon';
import HomeMain from '../HomeMain/HomeMain';
import HomeMakeAppointment from '../HomeMakeAppointment/HomeMakeAppointment';
import HomeServices from '../HomeServies/HomeServices';
import Navbar from '../Navbar/Navbar';
import './Home.css'


const Home = () => {
    return (
        <>
       
            <Navbar></Navbar>
           
            <Header></Header>
            
            
            <HomeIcon></HomeIcon>
            <HomeMakeAppointment></HomeMakeAppointment>
            <HomeServices></HomeServices>
            <Counter></Counter>
            <Testimonial></Testimonial>
           <Footer></Footer>
            
        </>
    );
};

export default Home;