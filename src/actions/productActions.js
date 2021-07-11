import Axios from 'axios';
import {  PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../Constants/ProductConstants.js';
/*export const listProducts=()=>async(dispatch)=>{
    dispatch({
        type:PRODUCT_REQUEST,
    });
    try{
        const {data}=await Axios.get('/api/products');
        console.log("his",data);
        dispatch({type:PRODUCT_SUCCESS,paylaod:data});

    }catch(error){
        console.log("hi");
        dispatch({type:PRODUCT_FAIL,paylaod:error.message});
    }
}; 
*/
export const listProducts = () => async (dispatch) => {
    console.log("paisina");
    dispatch({
      type: PRODUCT_LIST_REQUEST
    });
    try {
      const { data } = await Axios.get('/api/products');
      console.log("paisi",data);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
       
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
      const { data } = await Axios.get(`/api/product/${productId}`);
      console.log("pabo",data);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload:data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

