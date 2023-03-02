import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from "../Constants/ProductContants";
  
  const InitialState={
      loading:false,
      products:[],
      error:''
  }
  
  export const cartReducer=(state1=InitialState,action)=>{
      switch(action.type){          
          case ADD_TO_CART:
              return{
                  ...state1,
                  loading:false,
                  products:[
                    ...state1.products,
                    action.payload
                ]             
            }  
        case REMOVE_FROM_CART:
            const filteredPeople = state1.products.filter((item) => item.id !== action.payload);
            console.log(filteredPeople,"hello");
            return{
                ...state1,
                loading:false,
                products:[
                    ...filteredPeople               
              ] 
            }      
          default:
              return state1
      }
  }
  