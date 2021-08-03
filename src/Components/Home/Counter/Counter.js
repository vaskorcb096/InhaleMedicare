import React from 'react';
import './Counter.css'
import { Zoom } from "react-awesome-reveal";

const Counter = () => {
    return (
 
       <section class="counter">
              <Zoom top>

<div class="containerx">
 
    <div class="box-container">

<div class="box" data-aos="fade-up">

<i class="fas fa-calendar-check"></i>
    <span>40+</span>
    <h3>Appointments</h3>
</div>

<div class="box" data-aos="fade-up">
    <i class="fas fa-users"></i>
    <span>100+</span>
    <h3>Users</h3>
</div>

<div class="box" data-aos="fade-up">

    <i class="fas fa-smile"></i>
    <span>1200+</span>
    <h3>happy patients</h3>
</div>

<div class="box" data-aos="fade-up">
    <i class="fas fa-procedures"></i>
    <span>130+</span>
    <h3>Products</h3>
</div>

</div>

    

    

</div>
</Zoom>

</section>
  


    );
};

export default Counter;