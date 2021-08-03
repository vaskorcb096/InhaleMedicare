import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../../../Home/Navbar/Navbar";
import {NavLink,Link} from 'react-router-dom';
import Magnifier from "react-magnifier";
import Ratting from "../Ratting/Ratting";
import TableWithDetails from "./TableWithDetails";
const ProductDetails = () => {
  const {productId}=useParams();
  console.log(productId);
  const  [product,setProduct]=useState([]);
  const [oneItem,setOneItem]=useState({})

  useEffect(()=>{
    fetch('/products')
    .then(data=>data.json())
    .then(items=>{
      setProduct(items);
    })
  },[])
  console.log("sddsfgf",product);
  useEffect(()=>{

    if(product.length > 0){
      
           const pro=product.find(pd=>pd._id===productId)
            
            console.log("sdfsf",pro);
    
           setOneItem(pro);
    }
}, [product])
  

  return (
    <div>
      <div className="container-fluid pt-5">
        <Navbar></Navbar>
        <section class="pt-5">

  <div class="row">
    <div class="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery mx-1">

          <div class="col-12 mb-0">
            <figure class="view overlay rounded z-depth-1 main-img">
           
            <Magnifier src={`https://quiet-earth-03350.herokuapp.com/${oneItem.image}`} width={500} />
            </figure>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src alt=""
                    class="img-fluid"/>
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src alt=""
                    class="img-fluid"/>
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src alt=""
                    class="img-fluid"/>
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src alt=""
                    className="img-fluid"/>
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="col-md-6">
      <TableWithDetails oneItem={oneItem}></TableWithDetails>
    </div>
  </div>

</section>

 

        
      </div>
    </div>
  );
};

export default ProductDetails;
