import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Cart.css';


const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,pd)=>total+pd.price*pd.quantity,0);
    let shipping=0;
    if(total>35) {
        shipping=0;
    }
    else if(total>0) {
        shipping=2.26;
    }
    else if(total>17){
        shipping=4.46;
    }
    const formatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    let  tax=total/10;
    
    return (
        <div className="Item-Cart" style={{color:'white'}}>
         <h6>Total Order :</h6>
        
       
         <p>Prodcut Price: {formatNumber(total)}</p>
  
    <p><small>Shipping Cost: {shipping}</small></p>
    <p><small>Tax+Vat: {formatNumber(tax)}</small></p>
    <p>Total Price:{formatNumber(total+shipping+tax)}</p>
    <br/>
    {
        props.children
    }
 </div>
    );
};

export default Cart;