import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
const ProductReviewPage = (props) => {

    const {id,load,setLoad}=props;
    console.log("sg",props)
    const [product,setProduct]=useState([]);
   
    useEffect(()=>{
        fetch(`productFindById/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data.productReview);
        })
      }, [load])
      useEffect(()=>{
        setLoad(()=>false);
      }, [load])
  
    console.log("dxfg",product)

    return (
        <div>
            {
                product.map((pro)=>(<ReviewList pro={pro}></ReviewList>))
            }

        </div>
    );
};

export default ProductReviewPage;