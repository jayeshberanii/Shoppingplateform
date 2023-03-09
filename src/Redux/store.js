import {  applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import cartSlice from "./Slices/cartSlice";


const middleWare=[thunk]

const store=configureStore({
    reducer:{
        productlist:productSlice,
        cartlist:cartSlice,
        
    }
},{},composeWithDevTools(applyMiddleware(...middleWare)))

export default store

