import {  applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/cartReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer=combineReducers({
    productlist:productReducer,
    cartlist:cartReducer
})

const middleWare=[thunk]

const store=configureStore({
    reducer:{
        productlist:productReducer,
        cartlist:cartReducer
    }
},{},composeWithDevTools(applyMiddleware(...middleWare)))

export default store

