import logo from './logo.svg';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import OurDoctor from './Components/OurDoctors/OurDoctor';
import Admin_Panel from './Components/Admin/Admin_Panel/Admin_Panel';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import About from './Components/About/About';
import Service from './Components/Services/Service/Service';
import ContactUs from './Components/ContactUs/ContactUs';
import AppointmentBook from './Components/AppointmentBook/AppointmentBook';
import Medibazar from './Components/Medibazar/Medibazar/Medibazar';
import ProductDetails from './Components/Medibazar/MedibazarHome/MedibazarShop/ProductDetails/ProductDetails';
import OrderReview from './Components/Medibazar/MedibazarHome/OrderReview/OrderReview';
import Signup from './Components/LoginSignin/Signup/Signup';
import Login from './Components/LoginSignin/Login/Login';
import Shipment from './Components/Medibazar/MedibazarHome/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AboutMe from './Components/AboutMe/AboutMe';
import TotalAppoinemnt from './Components/Admin/Dashboard/TotalAppoinemnt/TotalAppoinemnt';
import ServiceSection from './Components/Admin/Dashboard/ServiceSection/ServiceSection';
import MedibazarDashboard from './Components/Admin/MedibazarDashboard/MedibazarDashboard';
import AddProduct from './Components/Admin/MedibazarDashboard/AddProduct/AddProduct';
import ManageProduct from './Components/Admin/MedibazarDashboard/ManageProduct/ManageProduct';
import TodayAppointment from './Components/Admin/Dashboard/TodayAppointment/TodayAppointment';
import SuccessfullAppointment from './Components/Admin/Dashboard/SuccessfullAppointment/SuccessfullAppointment';
import PendingAppointment from './Components/Admin/Dashboard/PendingAppointment/PendingAppointment';
import ManageService from './Components/Admin/Dashboard/ManageService/ManageService';
import AddDoctor from './Components/Admin/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from './Components/Admin/Dashboard/ManageDoctor/ManageDoctor';








export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  const [currentStep,setStep]=useState(1); 
  const [userData,setUserData]=useState([]);
  const [finalData,setFinalData]=useState([]);

  function submitData(){
    setFinalData(finalData=>[...finalData,userData]);
    setUserData("");
    setStep(1);

  }
  
return (
  <UserContext.Provider value={[loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData]}>
    

<Router>
      
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        
        <Route exact path="/ourdoctor">
       <OurDoctor></OurDoctor>
        </Route>
        <Route exact path="/about">
       <About></About>
        </Route>
        <Route exact path="/service">
       <Service></Service>
        </Route>
        <Route exact path="/contactus">
       <ContactUs></ContactUs>
        </Route>
        
       
        <Route exact path="/signup">
         <Signup></Signup>
        </Route>
        <Route exact path="/signin">
         <Login></Login>
        </Route>
        <Route exact path="/medibazar">
         <Medibazar></Medibazar>
        </Route>
        <Route exact path="/appointmentbook">
         <AppointmentBook></AppointmentBook>
        </Route>
        <Route path="/product/:productId">
        <ProductDetails></ProductDetails>
        </Route>
        <Route exact path="/orderreview">
          <OrderReview></OrderReview>
        </Route>
        <Route exact path="/aboutme">
         <AboutMe> </AboutMe>
        </Route>
        <Route exact path="/totalAppointments">
        <TotalAppoinemnt></TotalAppoinemnt>
        </Route>
        <Route exact path="/todayAppointments">
          <TodayAppointment></TodayAppointment>
        </Route>
        <Route exact path="/pendingAppointments">
         <PendingAppointment></PendingAppointment>
        </Route>
        <Route exact path="/successfullAppointments">
         <SuccessfullAppointment></SuccessfullAppointment>
        </Route>
     
      
      
        
        <Route exact path="/serviceSection">
        <ServiceSection></ServiceSection>
        </Route>
        <Route exact path="/manageService">
        <ManageService></ManageService>
        </Route>
        
        <Route exact path="/medibazarDashboard">
        <MedibazarDashboard></MedibazarDashboard>
        </Route>
        <Route exact path="/manageProduct">
        <ManageProduct></ManageProduct>
        </Route>
        
        <Route exact path="/addProduct">
        <AddProduct></AddProduct>
        </Route>
        <Route exact path="/addDoctor">
        <AddDoctor></AddDoctor>
        </Route>
        <Route exact path="/manageDoctor">
        <ManageDoctor></ManageDoctor>
        </Route>
        
        
        <PrivateRoute exact path="/shipment">
          <Shipment></Shipment>
        </PrivateRoute>
        <Route exact path="/admin/admin_Panel">
         <Admin_Panel></Admin_Panel>
        </Route>
        <Redirect to="/"/>
      </Switch>
     
      
    </Router>
   
 </UserContext.Provider>
    
  );
}

export default App;
