import {
  FETCH_PRODUCT_RUNNING,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../Constants/ProductContants";

const InitialState={
    loading:false,
    products:[],
    error:''
}

export const productReducer=(state=InitialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT_RUNNING:
            return{
                ...state,
                loading:true
            }
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload                
            }
        case FETCH_PRODUCT_FAIL:
            return{
                loading:false,
                products:[],
                error:action.payload
            }
        default:
            return state
    }
}
