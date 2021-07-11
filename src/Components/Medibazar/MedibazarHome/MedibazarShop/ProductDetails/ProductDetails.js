import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { detailsProduct } from '../../../../../actions/productActions';
import MedibazarNavbar from '../../../MedibazarNavbar/MedibazarNavbar';
import MedibazarShop from '../MedibazarShop';


const ProductDetails = () => {
    const dispatch = useDispatch();
    let { productId } = useParams();
    console.log(productId);
    //const pro=data.find(pd=>pd._id===productId);
    const productDetailer = useSelector((state) => state.productDetailer);
    console.log(productDetailer);
    const { loading, error, pro } = productDetailer;
   // const  productId=props.match.params.id;
  
 
   useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch,productId]);
 
 
    

  
    
    return (
        <div>
            {
                loading?(
                    <h1>Loading.....</h1>
                ):error?(
                    <h1>Error.....</h1>
                ):
                (
                    <div className="container-fluid pt-5">
                       <MedibazarNavbar></MedibazarNavbar>
            <h1 style={{marginTop:'50px'}}>{pro.name} Details</h1>
            <MedibazarShop showDescription={true} showAddToCart={false} pro={pro}></MedibazarShop>
      
                    </div>

                )
               

            }
            </div>
     
    );
};

export default ProductDetails;