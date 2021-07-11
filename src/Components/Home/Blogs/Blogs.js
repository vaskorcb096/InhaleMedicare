import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/Blogs/wilson.png';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import './Blogs.css'
import Item from './Item.js';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];


const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. V.k',
        authorImg : wilson,
        date : '23 April 2019'
    },
   
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. D.k',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. P.k',
        authorImg : wilson,
        date : '23 April 2019'
    },
   
   
  
   
]


const Blogs = () => {
    return (
     <section className="blogs my-5">
        <div className="containerx">
        <div className="section-header text-center p-5">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
      </div>
       <div className="p-5">
       
       <Carousel breakPoints={breakPoints}>
           
             {
                        blogData.map(blog => <Item><BlogPost blog={blog} key={blog.title}/></Item>)
                       
                    }

          
          
              
                   
               
           

       </Carousel>
           
               
           
       </div>
    </div>
</section>
    );
};

export default Blogs;