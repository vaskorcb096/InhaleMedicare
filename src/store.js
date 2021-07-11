import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const initialState={};

/* eslint-disable no-underscore-dangle */
const reducer =combineReducers({
    productList:productListReducer,
    productDetailer:productDetailsReducer,

})
const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store =createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk )));

export default store;
