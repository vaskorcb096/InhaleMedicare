import { PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from "../Constants/ProductConstants";


export const productListReducer=(state ={loading:true,products:[]},action)=>{
    console.log("sfd",action.type);
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true};

        case PRODUCT_LIST_SUCCESS:
            console.log(action.payload);
            return {loading:false,products:action.payload,};
        case PRODUCT_LIST_FAIL:
             return {loading:false,error:action.payload};
        default:
            return state;
    }
}

export const productDetailsReducer = (
    state = { pro:{}, loading: true },
    action
  ) => {
    console.log("asfd",action.type);
    switch (action.type) {
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, pro:action.payload };

      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
