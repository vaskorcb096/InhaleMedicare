import React from 'react';
import './BlogPost.css'

const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div>
             <img className="pt-5"  src={authorImg} alt="" width="60"/>
              
              <h6 className="text-primary">{author}</h6>
              <p  className="text-secondary m-0">{date}</p>
         
      
      <div className=" xx text-secondary card-body">
          <h5>{title}</h5>
          <p className="card-text text-secondary mt-4">{description}</p>
      </div>

        </div>
       
               
            
      
    );
};

export default BlogPost;