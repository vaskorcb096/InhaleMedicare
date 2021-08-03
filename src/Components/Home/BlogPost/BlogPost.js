import React from 'react';
import './BlogPost.css'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa'

const BlogPost = (props) => {
    console.log("blogpost",props);
    const {title, description,date,user_name,image} = props.mp;
    console.log(title);
    return (

        <div style={{minHeight:'250px',minWidth:'250px'}} class="card Item-inside">
        <div className="d-flex justify-content-between">
        <img className="p-1 rounded-circle" src={image}  alt="" style={{height:'50px',width:'50px'}}/>
        <p className="pr-2 pt-3"><strong>{date}</strong></p>
        </div>
        
    <h6 className="pl-2 text-primary">{user_name}</h6>
      <p className="pl-2"><FaQuoteLeft className="pb-1"></FaQuoteLeft> {description} <FaQuoteRight className="pt-1"></FaQuoteRight></p>
      
   
    </div>
            
      
    );
};

export default BlogPost;