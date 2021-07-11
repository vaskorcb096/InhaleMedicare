import React from 'react';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeIcon from '../HomeIcon/HomeIcon';
import HomeMain from '../HomeMain/HomeMain';
import HomeMakeAppointment from '../HomeMakeAppointment/HomeMakeAppointment';
import HomeServices from '../HomeServies/HomeServices';
import Navbar from '../Navbar/Navbar';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    return (
        <>
       
            <Navbar></Navbar>
            <Header></Header>
            <HomeIcon></HomeIcon>
            <HomeMakeAppointment></HomeMakeAppointment>
            <HomeServices></HomeServices>
            <Testimonial></Testimonial>
            <Counter></Counter>
            
            <Blogs></Blogs>
           <Footer></Footer>
            
        </>
    );
};

export default Home;